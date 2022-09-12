"use strict";
exports.__esModule = true;
exports.Snake = void 0;
var Case_1 = require("./Case");
var Pos_1 = require("./Pos");
var Snake = /** @class */ (function () {
    /**
     * Constructeur d'objets Snake
     * @param {number} speed Vitesse du Serpent
     * @param {number} step Nombre de pixels par déplacements
     * @param {number} length Taille du serpent
     * @param {Pos} position Position x et y du Serpent
     * @param {Dir} direction Direction x et y du serpent
     * @param {number} dimension Dimension des Cases du Serpent
     * @param {string} color Couleur des Cases du Serpent
     * @param {string} borderColor Couleur de la bordure des Cases du Serpent
     */
    function Snake(speed, step, length, position, direction, dimension, color, borderColor) {
        this.speed = speed;
        this.length = length;
        this.position = position;
        this.direction = direction;
        this.dimension = dimension;
        this.color = color;
        this.borderColor = borderColor;
        this.step = step;
        this.cases = [];
        this.createStartCases();
        this.lastCasePos = new Pos_1.Pos(0, 0);
        this.tempCasePos = new Pos_1.Pos(0, 0);
        this.nbMoveSinceLastDirection = 0;
    }
    /**
     * Crée les cases de départ du serpent en fonction du paramètre longueur(length) envoyée dans le constructeur.
     */
    Snake.prototype.createStartCases = function () {
        var i = 0;
        var casePosX = this.position.posX;
        var casePosY = this.position.posY;
        while (i < this.length) {
            this.cases.push(new Case_1.Case(this.dimension, new Pos_1.Pos(casePosX, casePosY), this.color, this.borderColor));
            casePosX -= this.dimension;
            i++;
        }
    };
    /**
     * Fait avancer le serpent en fonction des paramètres step et direction
     */
    Snake.prototype.move = function () {
        this.lastCasePos.newPos(this.cases[0].position);
        this.cases[0].position.posX += this.step * this.direction.dirX;
        this.cases[0].position.posY += this.step * this.direction.dirY;
        for (var i = 1; i < this.cases.length; i++) {
            this.tempCasePos.newPos(this.cases[i].position);
            this.cases[i].position.newPos(this.lastCasePos);
            this.lastCasePos.newPos(this.tempCasePos);
        }
        this.nbMoveSinceLastDirection++;
    };
    /**
     * Dessine les Cases du Serpent sur le board
     * @param {Board} board Le plateau de jeu
     */
    Snake.prototype.draw = function (board) {
        for (var element in this.cases) {
            this.cases[element].draw(board.canvas2D);
        }
    };
    /**
     * Donne une direction au serpent
     * @param {Number} newDdirX Nombre entre -1 et 1
     * @param {Number} newDdirY Nombre entre -1 et 1
     */
    Snake.prototype.newDir = function (newDdirX, newDdirY) {
        this.direction.newDir(newDdirX, newDdirY);
        this.nbMoveSinceLastDirection = 0;
    };
    /**
     * Ajoute des cases au Serpent
     * @param {Number} nbCase Nombre de cases à ajouter
     */
    Snake.prototype.add = function (nbCase) {
        for (var i = 0; i < nbCase; i++) {
            this.cases.push(new Case_1.Case(this.dimension, new Pos_1.Pos(this.cases[this.cases.length - 1].position.posX - this.dimension * this.direction.dirX, this.cases[this.cases.length - 1].position.posY - this.dimension * this.direction.dirY), this.color, this.borderColor));
        }
    };
    return Snake;
}());
exports.Snake = Snake;
