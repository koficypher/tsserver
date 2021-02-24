import { Sequelize } from "sequelize";

export const database = new Sequelize({
  database: "agriscale_card",
  dialect: "sqlite",
  storage: ":memory:",
});