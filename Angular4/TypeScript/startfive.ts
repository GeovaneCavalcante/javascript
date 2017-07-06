
import {SpaceCraft, ConteinerShip} from './base-shipe'

export class MileniunFalcon extends SpaceCraft implements ConteinerShip{

  conteinerCargas: number

  constructor(){
    super("HiperDrive")
    this.conteinerCargas = 2
  }

  entrouHiperEspaco(){

    if(Math.random() >= 0.5){

      super.entrouHiperEspaco()
    }else{

      console.log("Falhou")
    }
  }
}
