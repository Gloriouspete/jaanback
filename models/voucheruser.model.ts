import { Model, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class VoucherUser extends Model {
  public id!: number;
  public userid!: string;
  public voucherid!: string;
  public amount!: number;
  public username!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
VoucherUser.init(
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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voucherid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate:{
        min:0
      }
    },
  }, {
  sequelize: executor,
  tableName: "voucheruser",
  timestamps: true
});

// await VoucherUser.sync({ alter: true })
