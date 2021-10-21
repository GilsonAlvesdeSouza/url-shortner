import { NextFunction, Request, Response } from "express";
import shortid from "shortid";
import { config } from "../config/Constants";

class UrlController {
    public async shorten(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { originURL } = req.body;
        const hash = shortid.generate();
        const shortURL = `${config.API_URL}/${hash}`;
        res.json({ originURL, hash, shortURL });
    }

    public async redirect(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { hash } = req.params;
        const url = {
            "originURL": "https://www.youtube.com/",
            "hash": "C94lEi-NS",
            "shortURL": "http://localhost:5000/C94lEi-NS"
          }
          res.redirect(url.originURL);
    }
}

export default UrlController;