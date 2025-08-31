import { Model, Sequelize, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class Schedule extends Model {
    public id!: number;
    public userid!: string;
    public amount!: number;
    public email!: string;
    public country!: string;
    public recipient!: string;
    public provider!: string;
    public name!: string;
    public code!: string;
    public status!: 'active' | 'paused';
    public service!: string;
    public phone!: string;
    public month!: number;
    public reference!: string;
    public nextDate!: string;
    public frequency!: string;
    public iteration!: string;
    public date!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Schedule.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        recipient: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nextDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        service: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM("active","paused","cancelled"),
            defaultValue:"active",
            allowNull: false,
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        iteraton: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },


    }, {
    sequelize: executor,
    tableName: "schedule",
    timestamps: true
});
 // await Schedule.sync({ alter: true })
