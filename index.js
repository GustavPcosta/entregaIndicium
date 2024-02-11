const express = require('express')
const app = express();
const rotas = require('./rotas')
const port = 200
app.use(express.json());
app.use(rotas)


app.listen(port, () => {
    console.log("o servideor estar rodando na porta 200");
});