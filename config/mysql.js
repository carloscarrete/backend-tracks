const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  const dbConnectSQL = async () => {
      try{
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
      }catch(error){
          console.log(error)
      }
  }

  module.exports = {
      dbConnectSQL,
      sequelize
  }