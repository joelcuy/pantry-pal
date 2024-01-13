const db = require('../models');

exports.addToInventory = async (req, res) => {
  // Start a transaction
  const transaction = await db.sequelize.transaction();
  try {
    const { userId, ingredient } = req.body;
    console.log(`Adding ingredient for user ${userId}`);

    // Check if User exist
    const user = await db.User.findByPk(userId);
    if (!user) {
      console.log('User not found');
      return res.status(404).send('User not found');
    }

    // Check if the selected ingredient exists
    let ingredientFromLocalDB = await db.Ingredient.findByPk(ingredient.id);
    // If Not exists, Add Ingredient to Ingredient Table
    if (!ingredientFromLocalDB) {
      ingredientFromLocalDB = await db.Ingredient.create({
        id: ingredient.id,
        name: ingredient.name,
        image: ingredient.image,
        aisle: ingredient.aisle,
        // possibleUnits: JSON.stringify(ingredient.possibleUnits),
      });
    }

    // Add Ingredient to User's Inventory
    await db.Inventory.create({
      IngredientId: ingredientFromLocalDB.id,
      UserId: userId,
    });

    // Commit the transaction if no errors when reach here
    await transaction.commit();
    res.status(201).json(ingredientFromLocalDB);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).send('Error saving to inventory');
  }
};

// TODO do i use authentication to see which user's inventory i am getting or do they just authenticate and pass userId to me. will it be misused and an authenticated user passes another user's id to me.
exports.getAllInventory = async (req, res) => {
  try {
    const userId = req.query.userId;

    // Authenticate user (this can be done via middleware)
    // ...

    // Fetch all inventory items for the given user
    const inventoryItems = await db.Inventory.findAll({
      where: { UserId: userId },
      include: [
        {
          model: db.Ingredient,
          as: 'Ingredient', // Assuming 'Ingredient' is the alias in Inventory model
          attributes: ['id', 'name', 'image', 'aisle'],
        },
      ],
    });

    // if (inventoryItems.length === 0) {
    //   return res.status(404).send('No inventory items found for this user');
    // }

    res.status(200).json(inventoryItems.map((item) => item.Ingredient));
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving inventory');
  }
};
