const express = require('express');
const multer = require('multer');

const upload = multer({
  dest: './uploads',
});

const app = express();

// upload.none -> nada
// upload.* -> req.files
// upload.single -> req.file

app.post('/files', upload.single('file'), (req, res) => {
  const { body, files, file } = req;

  res.status(200).json({ body, files, file });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Aaaaaah! Porta: ${PORT}`);
});
