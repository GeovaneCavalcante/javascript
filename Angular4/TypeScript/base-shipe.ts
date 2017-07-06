
class SpaceCraft{

  constructor(public propulsor: string){}

  entrouHiperEspaco(){
    console.log(`Entrou no hiper espaco usando ${this.propulsor}`)
  }
}

interface ConteinerShip{
  conteinerCargas: number
}

export {SpaceCraft, ConteinerShip}
