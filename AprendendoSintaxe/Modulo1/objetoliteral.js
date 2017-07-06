
var venda = 'Toytota'

function tipoCarro(nome) {
  if (nome == 'fiat') {
    return nome;
  }else {
    return "Desculpa, não vendemos carros " + nome + ".";
  }
}

var carro = {meuCarro: "punto", getCarro: tipoCarro('fiat'), especial: venda}

console.log(carro.meuCarro);
console.log(carro.getCarro);
console.log(carro.especial);
