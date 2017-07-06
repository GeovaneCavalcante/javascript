import {MileniunFalcon} from './startfive'
import {SpaceCraft, ConteinerShip} from './base-shipe'

import * as _ from 'lodash'

console.log(_.pad("TypeScript Exemplos", 40, "="))

let ship = new SpaceCraft("HiperDrive")
ship.entrouHiperEspaco()


let falcon = new MileniunFalcon()

falcon.entrouHiperEspaco()


let testenava = (ship: ConteinerShip) =>  ship.conteinerCargas>2

console.log(`A nave é boa? ${testenava(falcon) ? 'yes':'not'}`)
