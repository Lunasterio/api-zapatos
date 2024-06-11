import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

import { getZapatos, addZapato } from './controllers/controllers-zapatos.js';

const app = express();
const puerto = 2006;

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get("/", (req, res) => {
    res.send("Api arriba");
});

app.get("/zapatos", getZapatos);

app.post("/zapatos/add", addZapato);

app.listen(puerto, () =>{
    console.log("Server arriba puerto: " + puerto);
});