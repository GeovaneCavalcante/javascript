"use strict";
exports.__esModule = true;
var startfive_1 = require("./startfive");
var base_shipe_1 = require("./base-shipe");
var _ = require("lodash");
console.log(_.pad("TypeScript Exemplos", 40, "="));
var ship = new base_shipe_1.SpaceCraft("HiperDrive");
ship.entrouHiperEspaco();
var falcon = new startfive_1.MileniunFalcon();
falcon.entrouHiperEspaco();
var testenava = function (ship) { return ship.conteinerCargas > 2; };
console.log("A nave \u00E9 boa? " + (testenava(falcon) ? 'yes' : 'not'));