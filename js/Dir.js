"use strict";
exports.__esModule = true;
exports.Dir = void 0;
var Dir = /** @class */ (function () {
    /**
     * Constructeur d'objets Dir
     * @param {number} dirX Direction sur l'axe X : Nombre entre 1 et -1
     * @param {number} dirY Direction sur l'axe Y : Nombre entre 1 et -1
     */
    function Dir(dirX, dirY) {
        this.dirX = dirX;
        this.dirY = dirY;
    }
    /**
     * Change la direction
     * @param {number} x Direction sur l'axe X : Nombre entre 1 et -1
     * @param {number} y Direction sur l'axe Y : Nombre entre 1 et -1
     */
    Dir.prototype.newDir = function (x, y) {
        this.dirX = x;
        this.dirY = y;
    };
    return Dir;
}());
exports.Dir = Dir;
