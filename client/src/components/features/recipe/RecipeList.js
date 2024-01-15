'use client';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function RecipeList() {
  const mockRecipes = [
    {
      id: 987595,
      title: 'Apple Ginger Kombucha Cocktail',
      image: 'https://spoonacular.com/recipeImages/987595-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 1,
      missedIngredients: [
        {
          id: 11216,
          amount: 60,
          unit: 'ml',
          unitLong: 'milliliters',
          unitShort: 'ml',
          aisle: 'Ethnic Foods',
          name: "gt's ginger kombucha",
          original: "2 30ml GT's Organic Ginger Kombucha, chilled",
          originalName: "GT's Organic Ginger Kombucha, chilled",
          meta: ['organic', 'chilled'],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/ginger.png',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 30,
          unit: 'ml',
          unitLong: 'milliliters',
          unitShort: 'ml',
          aisle: 'Produce',
          name: 'schonauer apple liquor',
          original:
            '1 30ml Schonauer Apple Liquor (or apple schnapps or apple jack), chilled',
          originalName:
            'Schonauer Apple Liquor (or apple schnapps or apple jack), chilled',
          meta: ['chilled', '(or apple schnapps or apple jack)'],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 17,
    },
    {
      id: 618390,
      title: 'Quick Apple Pies',
      image: 'https://spoonacular.com/recipeImages/618390-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 1123,
          amount: 1,
          unit: '',
          unitLong: '',
          unitShort: '',
          aisle: 'Milk, Eggs, Other Dairy',
          name: 'egg',
          original: '1 Egg',
          originalName: 'Egg',
          meta: [],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/egg.png',
        },
        {
          id: 10018338,
          amount: 1,
          unit: 'sheet',
          unitLong: 'sheet',
          unitShort: 'sheet',
          aisle: 'Frozen',
          name: 'pastry dough',
          original: '1 sheet Pastry Dough',
          originalName: 'Pastry Dough',
          meta: [],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/dough.jpg',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 5,
          unit: 'medium',
          unitLong: 'mediums',
          unitShort: 'medium',
          aisle: 'Produce',
          name: 'apples',
          original: '5 medium Apples',
          originalName: 'Apples',
          meta: [],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 1005,
    },
    {
      id: 496795,
      title: 'The Best German Apple Pie Ever',
      image: 'https://spoonacular.com/recipeImages/496795-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 1012010,
          amount: 2,
          unit: 'tsp',
          unitLong: 'teaspoons',
          unitShort: 'tsp',
          aisle: 'Spices and Seasonings',
          name: 'ground cinnamon',
          original: '2 tsp. ground cinnamon',
          originalName: 'ground cinnamon',
          meta: [],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg',
        },
        {
          id: 1053,
          amount: 1,
          unit: 'cup',
          unitLong: 'cup',
          unitShort: 'cup',
          aisle: 'Milk, Eggs, Other Dairy',
          name: 'heavy cream',
          original: '1 cup heavy cream',
          originalName: 'heavy cream',
          meta: [],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 6,
          unit: 'cups',
          unitLong: 'cups',
          unitShort: 'cup',
          aisle: 'Produce',
          name: 'apples',
          original: '6 cups apples, peeled, cored and sliced',
          originalName: 'apples, peeled, cored and sliced',
          meta: ['cored', 'peeled', 'sliced'],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 780,
    },
    {
      id: 615374,
      title: "Mom's Apple Pie",
      image: 'https://spoonacular.com/recipeImages/615374-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 2010,
          amount: 1,
          unit: 'tsp',
          unitLong: 'teaspoon',
          unitShort: 'tsp',
          aisle: 'Spices and Seasonings',
          name: 'cinnamon',
          original: '1 to 1 ½ tsp. cinnamon',
          originalName: 'cinnamon',
          meta: [],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg',
        },
        {
          id: 1145,
          amount: 3,
          unit: 'tbsp',
          unitLong: 'tablespoons',
          unitShort: 'Tbsp',
          aisle: 'Milk, Eggs, Other Dairy',
          name: 'butter',
          original: '3 tbsp. unsalted butter',
          originalName: 'unsalted butter',
          meta: ['unsalted'],
          extendedName: 'unsalted butter',
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 8,
          unit: 'large',
          unitLong: 'larges',
          unitShort: 'large',
          aisle: 'Produce',
          name: 'apples',
          original: '8 large apples, peeled, cored and sliced',
          originalName: 'apples, peeled, cored and sliced',
          meta: ['cored', 'peeled', 'sliced'],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 434,
    },
    {
      id: 611026,
      title: 'Apple Crisp III',
      image: 'https://spoonacular.com/recipeImages/611026-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 1077,
          amount: 0.75,
          unit: 'cup',
          unitLong: 'cups',
          unitShort: 'cup',
          aisle: 'Milk, Eggs, Other Dairy',
          name: 'milk',
          original: '3/4 cup milk',
          originalName: 'milk',
          meta: [],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
        },
        {
          id: 8120,
          amount: 2,
          unit: 'cups',
          unitLong: 'cups',
          unitShort: 'cup',
          aisle: 'Cereal',
          name: 'rolled oats',
          original: '2 cups rolled oats',
          originalName: 'rolled oats',
          meta: [],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 2.5,
          unit: 'cups',
          unitLong: 'cups',
          unitShort: 'cup',
          aisle: 'Produce',
          name: 'macintosh apples',
          original: '2 1/2 cups Macintosh apples - peeled, cored and quartered',
          originalName: 'Macintosh apples - peeled, cored and quartered',
          meta: ['cored', 'peeled', 'quartered'],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 138,
    },
    {
      id: 802950,
      title: 'Toffee Apple Dip',
      image: 'https://spoonacular.com/recipeImages/802950-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 1017,
          amount: 8,
          unit: 'ounces',
          unitLong: 'ounces',
          unitShort: 'oz',
          aisle: 'Cheese',
          name: 'cream cheese',
          original: '8 ounces cream cheese, softened',
          originalName: 'cream cheese, softened',
          meta: ['softened'],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/cream-cheese.jpg',
        },
        {
          id: 19081,
          amount: 1,
          unit: 'cup',
          unitLong: 'cup',
          unitShort: 'cup',
          aisle: 'Sweet Snacks',
          name: 'milk chocolate toffee bits',
          original: '1 cup Milk Chocolate Toffee Bits plus more for garnish',
          originalName: 'Milk Chocolate Toffee Bits plus more for garnish',
          meta: ['plus more for garnish'],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/milk-chocolate.jpg',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 6,
          unit: 'servings',
          unitLong: 'servings',
          unitShort: 'servings',
          aisle: 'Produce',
          name: 'apple',
          original: 'Apple Slices',
          originalName: 'Apple Slices',
          meta: [],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 43,
    },
    {
      id: 47950,
      title: 'Cinnamon Apple Crisp',
      image: 'https://spoonacular.com/recipeImages/47950-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 93674,
          amount: 0.5,
          unit: 'cup',
          unitLong: 'cups',
          unitShort: 'cup',
          aisle: 'Milk, Eggs, Other Dairy',
          name: 'land o cinnamon sugar butter spread',
          original: '1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread',
          originalName: 'Land O Lakes® Cinnamon Sugar Butter Spread',
          meta: ['lakes®'],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/cinnamon-sugar-butter.png',
        },
        {
          id: 8120,
          amount: 0.75,
          unit: 'cup',
          unitLong: 'cups',
          unitShort: 'cup',
          aisle: 'Cereal',
          name: 'old-fashioned oats',
          original: '3/4 cup uncooked old-fashioned oats',
          originalName: 'uncooked old-fashioned oats',
          meta: ['uncooked'],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 6,
          unit: 'cups',
          unitLong: 'cups',
          unitShort: 'cup',
          aisle: 'Produce',
          name: 'apples',
          original: '6 medium (6 cups) apples, peeled, cored, sliced',
          originalName: 'medium apples, peeled, cored, sliced',
          meta: ['cored', 'peeled', 'sliced'],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 35,
    },
    {
      id: 70306,
      title: 'Easy Cinnamon Apple Pie',
      image: 'https://spoonacular.com/recipeImages/70306-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 11408,
          amount: 1.6666666,
          unit: 'cups',
          unitLong: 'cups',
          unitShort: 'cup',
          aisle: 'Frozen',
          name: "hershey's cinnamon chips",
          original:
            "1-2/3 cups (10-oz. pkg.) HERSHEY'S Cinnamon Chips, divided",
          originalName: "(10-oz. pkg.) HERSHEY'S Cinnamon Chips, divided",
          meta: ['divided', '(10-oz. pkg.)'],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/french-fries-isolated.jpg',
        },
        {
          id: 18334,
          amount: 15,
          unit: 'oz',
          unitLong: 'ounces',
          unitShort: 'oz',
          aisle: 'Refrigerated',
          name: 'pie crusts',
          original:
            '1 package (15 oz.) refrigerated pie crusts, or pastry for double-crust 9-inch pie',
          originalName:
            'package refrigerated pie crusts, or pastry for double-crust 9-inch pie',
          meta: ['refrigerated', 'for double-crust pie'],
          extendedName: 'refrigerated pie crusts',
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/pie-crust.jpg',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 40,
          unit: 'oz',
          unitLong: 'ounces',
          unitShort: 'oz',
          aisle: 'Produce',
          name: 'apples',
          original:
            '2 cans (20-oz. each) sliced apples (not pie filling), drained *',
          originalName: 'cans each) sliced apples (not pie filling), drained',
          meta: ['drained', 'sliced', 'canned', '(not pie filling)'],
          extendedName: 'canned apples',
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 5,
    },
    {
      id: 271903,
      title: 'Orchard Bacon-Cheddar Kabobs',
      image: 'https://spoonacular.com/recipeImages/271903-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 10123,
          amount: 2.52,
          unit: 'oz',
          unitLong: 'ounces',
          unitShort: 'oz',
          aisle: 'Meat',
          name: 'oscar mayer bacon',
          original: '1 pkg. (2.52 oz.) OSCAR MAYER Fully Cooked Bacon',
          originalName: 'pkg. OSCAR MAYER Fully Cooked Bacon',
          meta: ['fully cooked'],
          extendedName: 'cooked oscar mayer bacon',
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
        },
        {
          id: 1009,
          amount: 12,
          unit: '',
          unitLong: '',
          unitShort: '',
          aisle: 'Cheese',
          name: 'cheddar cheese cubes',
          original: '12 KRAFT Cheddar Cheese Cubes',
          originalName: 'KRAFT Cheddar Cheese Cubes',
          meta: ['kraft'],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png',
        },
      ],
      usedIngredients: [
        {
          id: 1089003,
          amount: 1,
          unit: 'large',
          unitLong: 'large',
          unitShort: 'large',
          aisle: 'Produce',
          name: 'granny smith apple',
          original: '1 large Granny Smith apple, cut into 12 wedges',
          originalName: 'Granny Smith apple, cut into 12 wedges',
          meta: ['cut into 12 wedges'],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png',
        },
      ],
      unusedIngredients: [],
      likes: 0,
    },
    {
      id: 276464,
      title: 'Creamy Apple Bites',
      image: 'https://spoonacular.com/recipeImages/276464-312x150.jpg',
      imageType: 'jpg',
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
        {
          id: 93748,
          amount: 2,
          unit: 'Tbsp',
          unitLong: 'Tbsps',
          unitShort: 'Tbsp',
          aisle: 'Cheese',
          name: 'philadelphia cream cheese spread',
          original: '2 Tbsp. PHILADELPHIA Cream Cheese Spread',
          originalName: 'PHILADELPHIA Cream Cheese Spread',
          meta: [],
          image:
            'https://spoonacular.com/cdn/ingredients_100x100/green-onion-cream-cheese-dip.jpg',
        },
        {
          id: 18621,
          amount: 5,
          unit: '',
          unitLong: '',
          unitShort: '',
          aisle: 'Savory Snacks',
          name: 'ritz crackers',
          original: '5 RITZ Crackers',
          originalName: 'RITZ Crackers',
          meta: [],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/crackers.jpg',
        },
      ],
      usedIngredients: [
        {
          id: 9003,
          amount: 5,
          unit: 'slices',
          unitLong: 'slices',
          unitShort: 'slice',
          aisle: 'Produce',
          name: 'apple',
          original: '5 thin apple slices',
          originalName: 'thin apple slices',
          meta: ['thin'],
          image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
        },
      ],
      unusedIngredients: [],
      likes: 0,
    },
  ];
  const renderedRecipes = mockRecipes.map((recipe) => (
    <Card
      key={recipe.id}
      sx={{ display: 'flex', my: 2, flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ height: '10rem', objectFit: 'fit' }}
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent sx={{ flex: '1 1 auto', flexWrap: 'wrap' }}>
        <Typography
          component="div"
          variant="subtitle2"
          sx={{ textTransform: 'capitalize', fontWeight: 'bold'}}>
          {recipe.title}
        </Typography>
      </CardContent>
    </Card>
  ));
  return <Box paddingX={1}>{renderedRecipes}</Box>;
}