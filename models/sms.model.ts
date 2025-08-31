import { Model, Sequelize, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class SmsModel extends Model {
    public code!: number;
    public expires!: string;
    public phone!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
SmsModel.init(
    {
        code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        expires: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
    sequelize: executor,
    tableName: "smsmodel",
    timestamps: true
});

// await EmailModel.sync({ alter: true })
