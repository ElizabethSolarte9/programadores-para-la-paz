const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, soy Katherin Elizabeth y este es mi primer servidor con express');
});

app.listen(3000, () => {
  console.log('Servidor funcionando en el puerto 3000');
});