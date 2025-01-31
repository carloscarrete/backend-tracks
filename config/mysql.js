const { Sequelize } = require('sequelize');
const NODE_ENV = process.env.NODE_ENV;

const database = (NODE_ENV === 'test') ? process.env.DB_HOST_TEST : process.env.DB_HOST;
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