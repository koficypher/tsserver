import { Sequelize, Model, DataTypes, BuildOptions, Optional } from "sequelize";
import { database } from "../config/database";

export interface Card {
    id: number;
    owner_name: string;
    card_number: number;
    expiration_year: number;
    expiration_month: number;
    cvv: number;
    email: string;
    contact: string;
    location: string;
    message: string;
    agree: boolean;
}

export class CardDetail extends Model {
    public id!: number;
    public owner_name!: string;
    public card_number!: number;
    public expiration_year!: number;
    public expiration_month!: number;
    public cvv!: number;
    public email!: string;
    public contact!: string;
    public location!: string;
    public message!: string;
    public agree!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


// export interface Card extends Model<CardAttributes, CardAttributes> {}


CardDetail.init(
    {
        id: {
             type: DataTypes.INTEGER.UNSIGNED,
             autoIncrement: true,
             primaryKey: true
        },
        owner_name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        card_number: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        expiration_year: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        expiration_month: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        cvv: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        contact: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        location: {
            type: new DataTypes.TEXT("medium"),
            allowNull: false
        },
        message: {
            type: new DataTypes.TEXT("medium"),
            allowNull: false
        },
        agree: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
   {
    tableName: "card_details",
    sequelize: database, 
  }
);

CardDetail.sync({force: true}).then(() => console.log("Card Detail Table Created"))