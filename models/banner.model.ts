import { Model, Sequelize, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class Banner extends Model {
    public id!: number;
    public url!: string;
    public imageurl!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Banner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        imageurl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:true
            
        },
      
    }, {
    sequelize: executor,
    tableName: "bannermodel",
    timestamps: true
});

// await EmailModel.sync({ alter: true })
