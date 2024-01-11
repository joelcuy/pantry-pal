const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const db = {};

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('pantrypal', 'postgres', '', {
  host: 'localhost',
  // logging: false,
  dialect: 'postgres'
});

const files = fs.readdirSync(__dirname);

for (let file of files) {
  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;