import express from 'express';
import fs from "fs";

export const readData = () => {
    const data = fs.readFileSync("./zapatos.json");
    return JSON.parse(data);
};