let message : string = "Hello world"

console.log(message)

let ep : number = 4

console.log("Esse epsódio " + ep)
ep = ep+1

console.log("próximo epsódio " + ep)

let favorita: string

favorita = "Geovane"
console.log(favorita)

let validar = function(n: number): boolean{
  return n < 12
}

let distancia = 4
console.log(`a ${distancia} percorre a milena falcão ? ${validar(distancia) ? 'YES' : 'Não' }`)


let call = (nome: string): void => console.log(`nome entrado ${nome}`)

call("Geovane")

function teste(n : number, n1: number=2): number {
    return n+n1
}
console.log(`chamada 1 ${teste(5,1)}`)

console.log(`chamada 1 ${teste(5)}`)
