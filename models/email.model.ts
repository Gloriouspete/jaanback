import { Model, Sequelize, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class EmailModel extends Model {
    public code!: number;
    public expires!: string;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
EmailModel.init(
    {
        code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        email: {
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
    tableName: "emailmodel",
    timestamps: true
});

// await EmailModel.sync({ alter: true })
