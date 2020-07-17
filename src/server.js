/**
 * file: server.js
 * date: 07/17/2020
 * author: Glaucia Lemos
 * description: file responsable for execute locally the static application.
 */

const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Aplicação executando na porta...: ' + port);
});

app.use(express.static('public'));