"use strict";
exports.__esModule = true;
exports.Case = void 0;
var Case = /** @class */ (function () {
    /**
     * Constructeur d'objets Case
     * @param {number} dimension Dimension du carré
     * @param {Pos} position Position x et y de la Case
     * @param {string} color Couleur de la case
     * @param {string} borderColor Couleur des bordures de la Case
     */
    function Case(dimension, position, color, borderColor) {
        this.dimension = dimension;
        this.position = position;
        this.color = color;
        this.borderColor = borderColor;
    }
    /**
     * Fait bouger la Case
     * @param {Dir} direction Direction du mouvement
     * @param {number} step Nombre de pixels par mouvement
     */
    Case.prototype.move = function (direction, step) {
        this.position.posX += direction.dirX * step;
        this.position.posY += direction.dirY * step;
    };
    /**
     * Donne une nouvelle position à la Case
     * @param {number} x Position sur l'axe X
     * @param {number} y Position sur laxe Y
     */
    Case.prototype.newPos = function (x, y) {
        this.position.posX = x;
        this.position.posY = y;
    };
    /**
     * Affiche la case sur le board
     * @param {CanvasRenderingContext2D} canvas2D L'espace 2D
     */
    Case.prototype.draw = function (canvas2D) {
        canvas2D.fillStyle = this.color;
        canvas2D.strokeStyle = this.borderColor;
        canvas2D.fillRect(this.position.posX, this.position.posY, this.dimension, this.dimension);
        canvas2D.strokeRect(this.position.posX, this.position.posY, this.dimension, this.dimension);
    };
    return Case;
}());
exports.Case = Case;
