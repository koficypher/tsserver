import express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import { Routes } from "../routes/index"

class App {
    public app: express.Application;
    public appRoutes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        dotenv.config();
        this.appRoutes.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
      }
}


export default new App().app;