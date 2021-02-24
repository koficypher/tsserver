import { Request, Response } from "express";
import { CardDetail, Card } from "../models/card_detail.model"


export class Cards {

    async index(req: Request, res:Response) {

        const cards = await CardDetail.findAll<CardDetail>({})

        return res.json(cards)
    }

    async addCard(req: Request, res: Response) {

        console.log(req.body);

        try {
            const card = await  CardDetail.create(req.body)

            return res.status(201).json(card)
        } catch (error) {
            console.log(error)
        }
    }

}