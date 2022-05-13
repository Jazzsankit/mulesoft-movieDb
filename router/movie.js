const express = require("express");
const {allMovieDetails , getMovieById, createMovie} = require("../controller/movieController");
const movieRouter = express.Router();

movieRouter.route("/").post(createMovie).get(allMovieDetails);
movieRouter.route("/:uid").get(getMovieById);

module.exports = movieRouter;