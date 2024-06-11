import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

import { getZapatos,getZapato, addZapato, deleteZapato, updateZapato } from './controllers/controllers-zapatos.js';

const app = express();
const puerto = 2006;

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get("/", (req, res) => {
    res.send("Api arriba");
});

app.get("/zapatos", getZapatos);

app.get("/zapatos/:id", getZapato);

app.post("/zapatos/add", addZapato);

app.delete("/zapatos/:id", deleteZapato);

app.put("/zapatos/:id", updateZapato);

app.listen(puerto, () =>{
    console.log("Server arriba puerto: " + puerto);
});