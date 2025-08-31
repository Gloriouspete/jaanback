import { Model, Sequelize, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class Admin extends Model {
  public id!: number;
  public userid!: string;
  public clearance!: number;
  public email!: string;
  public name!: string;
  public username!: string;
  public phone!: string;
  public birthdate!: string;
  public gender!: string;
  public password!: string;
  public pin!: number;
  public ban!: string;
  public createdby!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    clearance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max:3
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthdate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdby: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: executor,
    tableName: "admin",
    timestamps: true,
  },
);

await Admin.sync({ alter: true })
