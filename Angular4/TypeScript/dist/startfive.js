"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_shipe_1 = require("./base-shipe");
var MileniunFalcon = (function (_super) {
    __extends(MileniunFalcon, _super);
    function MileniunFalcon() {
        var _this = _super.call(this, "HiperDrive") || this;
        _this.conteinerCargas = 2;
        return _this;
    }
    MileniunFalcon.prototype.entrouHiperEspaco = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.entrouHiperEspaco.call(this);
        }
        else {
            console.log("Falhou");
        }
    };
    return MileniunFalcon;
}(base_shipe_1.SpaceCraft));
exports.MileniunFalcon = MileniunFalcon;
