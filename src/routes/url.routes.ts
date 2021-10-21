import { Router } from "express";
import UrlController from "../controller/UrlController";

const urlRoutes = Router ();
const urlController = new UrlController();

urlRoutes.post('/shorten', urlController.shorten);
urlRoutes.get('/:hash', urlController.redirect);

export default urlRoutes;