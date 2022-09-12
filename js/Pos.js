"use strict";
exports.__esModule = true;
exports.Pos = void 0;
var Pos = /** @class */ (function () {
    /**
     * Constructeur d'objets Pos
     * @param {number} posX Position sur l'axe X
     * @param {number} posY Position sur l'axe Y
     */
    function Pos(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }
    /**
     * Change la position
     * @param {Pos} pos Nouvelle position
     */
    Pos.prototype.newPos = function (pos) {
        this.posX = pos.posX;
        this.posY = pos.posY;
    };
    return Pos;
}());
exports.Pos = Pos;
