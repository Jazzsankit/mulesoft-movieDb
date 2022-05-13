const express = require('express');
const connection = require('./model/dBconnection');
const movieRouter = require('./router/movie');

const app = express();
app.use(express.json());

app.use("/api/movie",movieRouter);

app.listen(3000,function(){
    console.log("app is running");
})