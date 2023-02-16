const express = require('express');
const app = express();
const fatoHistorico = require('./fato_historico');

app.get('/fato-historico/:ano', (req, res) => {
    let ano = req.params.ano;
    res.json(fatoHistorico.buscarFatoPorAno(ano));
});

app.listen(8080, () => {
})
