import fs from "fs";

const readData = () => {
    const data = fs.readFileSync("./zapatos.json");
    return JSON.parse(data);
};

export const getZapatos = (req, res) => {
    const data = readData();
    res.json(data.zapatos);
};

export const getZapato = (req, res) => {
  const data = readData();
  const zapatoIndex = req.params.id; // Obtiene el índice del zapato de la solicitud

  if (zapatoIndex >= 0 && zapatoIndex < data.zapatos.length) {
    const zapato = data.zapatos[zapatoIndex];
    res.json(zapato); // Devuelve solo el zapato especificado
  } else {
    res.json({ status: 404, mensaje: 'Zapato no encontrado' }); // Indica error si el índice es inválido
  }
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

  export const deleteZapato = (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const zapatoIndex = data.zapatos.findIndex((zapato) => zapato.id === id);
    data.zapatos.splice(zapatoIndex, 1);
    writeData(data);
    res.json({ message: "Zapato eliminado correctamente" });
  };

  export const updateZapato = (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const zapatoIndex = data.zapatos.findIndex((zapato) => zapato.id === id);
    data.zapatos[zapatoIndex] = {
      ...data.zapatos[zapatoIndex],
      ...body,
    };
    writeData(data);
    res.json({ message: "Zapato actualizado correctamente" });
  };
