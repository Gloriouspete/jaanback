import { Model, DataTypes } from "sequelize";
import executor from "../config/db.ts";

export default class Voucher extends Model {
  public id!: number;
  public userid!: string;
  public voucherid!: string;
  public amount!: number;
  public limit!: number;
  public admin!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Voucher.init(
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
    limit: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate:{
        min:0
      }
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false
    }
  }, {
  sequelize: executor,
  tableName: "voucher",
  timestamps: true
});

// await Voucher.sync({ alter: true })
