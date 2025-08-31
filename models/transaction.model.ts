import { Model, Sequelize, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class Transactions extends Model {
    public id!: number;
    public userid!: string;
    public amount!: number;
    public email!: string;
    public country!: string;
    public name!: string;
    public plan!: string;
    public phone!: string;
    public reference!: string;
    public recipient!: string;
    public provider!: string;
    public pin!: string;
    public status!: string;
    public service!: string;
    public remark!: string;
    public date!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Transactions.init(
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
        plan: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pin: {
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
            type: DataTypes.STRING,
            allowNull: true,
        },
        remark: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },


    }, {
    sequelize: executor,
    tableName: "transactions",
    timestamps: true
});
 // await Transactions.sync({ alter: true })
