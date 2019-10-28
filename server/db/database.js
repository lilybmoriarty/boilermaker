const Sequelize = require("sequelize");
module.exports = new Sequelize("postgres://localhost:5432/boilermaker", {
  // process.env.DATABASE_URL is provided by Heroku, will need to update default link to actual database link
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});
