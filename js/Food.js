"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Food = void 0;
var Case_1 = require("./Case");
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    /**
     * Constructeur d'objets Food hérité du type Case
     * @param {Pos} pos position x et y de l'élément
     * @param {number} dim dimension de la Nourriture
     * @param {string} color couleur de la Nourriture
     * @param {string} borderColor couleur des bordures de la Nourriture
     * @param {number} points Nombre de points gagnés lorsque la Nourriture est mangée par le serpent
     * @param {number} addCases Nombre de cases ajoutées au serpent lorsqu'il mange la Nourriture.
     */
    function Food(pos, dim, color, borderColor, points, addCases) {
        var _this = _super.call(this, dim, pos, color, borderColor) || this;
        _this.points = points;
        _this.addCases = addCases;
        return _this;
    }
    return Food;
}(Case_1.Case));
exports.Food = Food;
