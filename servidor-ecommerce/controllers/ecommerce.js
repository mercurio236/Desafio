const cidadeEstados = require('../cidades-estados.json');

function finalizarCompra(req, res){
    console.log(req.body);
    res.send('ok')
}

function obterCidadesPorEstados(req, res){
    const siglaEstado = req.params['siglaEstado'].toUpperCase();
    const dadosEstado = cidadeEstados.estados.filter(estado => estado.sigla === siglaEstado);
    if(dadosEstado.length === 0){
        res.status(404).json({erro: `${siglaEstado} não é um estado valido.`});
    }
    res.json(dadosEstado[0].cidades);
}

module.exports ={
    finalizarCompra,
    obterCidadesPorEstados
}