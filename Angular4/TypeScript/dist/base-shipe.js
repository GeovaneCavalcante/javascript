"use strict";
exports.__esModule = true;
var SpaceCraft = (function () {
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    }
    SpaceCraft.prototype.entrouHiperEspaco = function () {
        console.log("Entrou no hiper espaco usando " + this.propulsor);
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
