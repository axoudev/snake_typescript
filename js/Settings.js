"use strict";
exports.__esModule = true;
exports.Settings = void 0;
var Settings = /** @class */ (function () {
    /**
     * Constructeur d'objets Settings
     * @param {number} speed Vitesse du serpent
     * @param {number} snakeSize Taille du serpent
     * @param {string} player joueur
     */
    function Settings(speed, snakeSize, player) {
        this.speed = speed;
        this.snakeSize = snakeSize;
        this.player = player;
    }
    return Settings;
}());
exports.Settings = Settings;
