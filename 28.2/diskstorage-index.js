const fs = require('fs');
const multer = require('multer');
const express = require('express');

const app = express();

const storage = multer.diskStorage({ // grava o arquivo utilizando o file system
  destination: './uploads',
  filename: (req, file, callback) => {
    callback(null, `${req.params.id}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

app.post('/users/:id/files', upload.single('file'), (req, res) => {
  res.status(201).json(req.file);
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Aaaaaah! Porta: ${PORT}`);
});
