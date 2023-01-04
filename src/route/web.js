import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
let initWebRoute = (app)=>{
    router.get('/',homeController.getHomePage);
    return app.use("/",router);
}

module.exports = initWebRoute;