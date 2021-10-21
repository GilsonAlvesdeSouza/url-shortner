import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { URLModel } from "../model/URL";
import shortid from "shortid";
import { config } from "../config/Constants";

class UrlController {
    public async shorten(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { originURL } = req.body;

        const url = await URLModel.findOne({ originURL });

        if (url) {
            res.json(url);
            return
        }

        const hash = shortid.generate();
        const shortURL = `${config.API_URL}/${hash}`;
        const newURL = URLModel.create({ hash, shortURL, originURL });
        res.json({ originURL, hash, shortURL });
    }

    public async redirect(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { hash } = req.params;
        const url = await URLModel.findOne({ hash });

        if (url) {
            res.redirect(url.originURL);
        }

        res.status(StatusCodes.NOT_FOUND).json({ error: "URL not found!" });
    }
}

export default UrlController;