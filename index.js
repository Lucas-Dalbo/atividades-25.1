const express = require('express');

const app = express();

const env = process.env.ENV;

app.get('/', (_req, res) => {
  res.status(200).send(
    `Está vivo!!!
    Ambiente de ${env}`
  )
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Porta ${port}`));
