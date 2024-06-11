import express from 'express';
import fs from "fs";

import { readData } from './controllers/controllers-zapatos.js';

const app = express();
const puerto = 2006;

app.get("/", (req, res) => {
    res.send("Api arriba");
});

app.get("/zapatos", (req, res) => {
    const data = readData();
    res.json(data.zapatos);
});

app.listen(puerto, () =>{
    console.log("Server arriba puerto: " + puerto);
});