import { Sequelize } from "sequelize";

const executor = new Sequelize('jaanapp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default executor;