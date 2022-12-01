require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./connect');

dotenv.config({path:'.env'});
const PORT = process.env.PORT || 8050;
app.use(express.json());

app.use(cors());


app.listen(PORT,()=>{
    console.log(`Server hosted on http://localhost:${PORT}/server`);
    db();
    app.use("/server", routes);
})