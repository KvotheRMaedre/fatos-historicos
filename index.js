const express = require('express');
const app = express();
const fatoHistorico = require('./fato_historico');

app.get('/fato-historico/:ano', (req, res) => {
    
    let ano = parseInt(req.params.ano, 10);

    if(ano < 1920 || ano > 2020){
        res.status(400).json('{O ano deve estar entre 1920 e 2020}');
    }
    res.json(fatoHistorico.buscarFatoPorAno(ano));
});

app.listen(8080, () => {
})
