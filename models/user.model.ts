import { Model, Sequelize, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class User extends Model {
  public id!: number;
  public userid!: string;
  public credit!: number;
  public email!: string;
  public country!: string;
  public name!: string;
  public username!: string;
  public phone!: string;
  public birthdate!: string;
  public gender!: string;
  public password!: string;
  public accounts!: string;
  public pin!: number;
  public jtoken!: number;
  public signup!: boolean;
  public ban!: string;
  public referby!: string;
  public refercode!: string;
  public verified!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
User.init(
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
    credit: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
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
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    jtoken: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    signup: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accounts: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    referby: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refercode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ban: {
      type: DataTypes.ENUM("yes", "no"),
      allowNull: false,
      defaultValue: "no",
    },
    verified: {
      type: DataTypes.ENUM("yes", "no"),
      allowNull: false,
      defaultValue: "no",
    },
  },
  {
    sequelize: executor,
    tableName: "users",
    timestamps: true,
  },
);

// await User.sync({ alter: true })
