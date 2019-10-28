const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/boilermaker", {
  // process.env.DATABASE_URL is provided by Heroku, will need to update default link to actual database link
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

// could define models here but also could just import from other files

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// should define associations here

module.exports = { db, User };
