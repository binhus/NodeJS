const fs = require('fs').promises;
const multer = require('multer');
const express = require('express');

const app = express();

const upload = multer({ storage: multer.memoryStorage() }); // cria um buffer podemos edita-lo antes de gravar ou utilizar o arquivo utilizando explicitamente o file system.

app.post('/info', upload.single('algumaCoisa'), async (req, res) => {
  const { buffer, ...fileData } = req.file;
  const fileAsString = buffer.toString('utf-8');

  try {
    JSON.parse(fileAsString);
  } catch (err) {
    return res.status(400).json({ message: 'Arquivo não é um JSON válido' });
  }

  const path = `./uploads/${fileData.originalname}`;
  await fs.writeFile(path, buffer);
  res.status(201).json({ message: 'Arquivo armazenado com sucesso', path });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Aaaaaah! Porta: ${PORT}`);
});
