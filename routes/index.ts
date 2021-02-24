import { Request, Response, Application } from "express";
import { Welcome } from "../controllers/welcome.controller"
import { Cards } from "../controllers/cards.controller"

export  class Routes {
    // controller instantiations
    public welcomeController: Welcome = new Welcome();
    public cardController: Cards = new Cards();

    public routes(app: Application) :void {

        app.route("/").get(this.welcomeController.index);
        app.route("/cards").get(this.cardController.index)
                            .post(this.cardController.addCard);
    }
}