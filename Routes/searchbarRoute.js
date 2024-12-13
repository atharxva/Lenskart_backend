import express from "express";
import searchbar from "../controller/searchController.js";

const searchRouter = express.Router();

searchRouter.get("/", searchbar);

export default searchRouter;
