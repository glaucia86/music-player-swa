const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Aplicação executando na porta...: ' + port);
});

app.use(express.static('public'));

