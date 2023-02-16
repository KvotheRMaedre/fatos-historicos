let dados = require('./dados/fatos_historicos_dataset');

function buscarFatoPorAno(ano){
    return dados.fatos_historicos.filter(fato => fato.ano == ano)
}

exports.buscarFatoPorAno = buscarFatoPorAno;