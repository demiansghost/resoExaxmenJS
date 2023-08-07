import {Sequelize} from "sequelize";

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/examenPasado');
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }; 

  export{
    sequelize
  }