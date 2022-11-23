import { Router } from "express";

const tweetRoute = Router();

tweetRoute.post("/tweets");
tweetRoute.get("/tweets");
tweetRoute.get("/tweets/:usename");

export default tweetRoute;
