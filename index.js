const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Está vivo!!!')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Porta ${port}`));
