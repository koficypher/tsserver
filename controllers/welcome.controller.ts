import { Request, Response } from "express";

export  class Welcome {

    public index(req: Request, res: Response) {
        res.json({
            message: "Hello from server!",
          });
    }
}