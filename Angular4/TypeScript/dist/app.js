var message = "Hello world";
console.log(message);
var ep = 4;
console.log("Esse epsódio " + ep);
ep = ep + 1;
console.log("próximo epsódio " + ep);
var favorita;
favorita = "Geovane";
console.log(favorita);
var validar = function (n) {
    return n < 12;
};
var distancia = 4;
console.log("a " + distancia + " percorre a milena falc\u00E3o ? " + (validar(distancia) ? 'YES' : 'Não'));
var call = function (nome) { return console.log("nome entrado " + nome); };
call("Geovane");
function teste(n, n1) {
    if (n1 === void 0) { n1 = 2; }
    return n + n1;
}
console.log("chamada 1 " + teste(5, 1));
console.log("chamada 1 " + teste(5));
