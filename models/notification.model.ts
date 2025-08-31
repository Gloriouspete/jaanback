import { Model, Sequelize, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class Notifications extends Model {
    public id!: number;
    public userid!: string;
    public title!: string;
    public message!: string;
    public reference!: string;
    public status!: string;
    public service!: string;
    public type!: string;
    public time!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Notifications.init(
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
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.ENUM("notification","transaction"),
            allowNull: false,
            defaultValue:"notification"
        },
        service: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM("read","unread"),
            allowNull: true,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true,
        },


    }, {
    sequelize: executor,
    tableName: "notifications",
    timestamps: true
});
 // await Notifications.sync({ alter: true })
