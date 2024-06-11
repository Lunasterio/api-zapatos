import fs from "fs";

const readData = () => {
    const data = fs.readFileSync("./zapatos.json");
    return JSON.parse(data);
};

export const getZapatos = (req, res) => {
    const data = readData();
    res.json(data.zapatos);
};

const writeData = (data) => {
    try {
      fs.writeFileSync("./zapatos.json", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

export const addZapato = (req, res) => {
    const data = readData();
    const body = req.body;
    const newZapato = {
      id: data.zapatos.length + 1,
      ...body,
    };
    data.zapatos.push(newZapato);
    writeData(data);
    res.json(newZapato);
  };