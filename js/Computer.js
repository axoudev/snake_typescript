"use strict";
exports.__esModule = true;
exports.Computer = void 0;
var Computer = /** @class */ (function () {
    function Computer(level, foods, cases) {
        this.level = level;
        this.nearestFood = this.getNearestFood(foods, cases);
    }
    Computer.prototype.getNearestFood = function (foods, cases) {
        if (foods.length == 1) {
            return foods[0];
        }
        var distanceX = Math.abs(cases[0].position.posX - foods[0].position.posX);
        var distanceY = Math.abs(cases[0].position.posY - foods[0].position.posY);
        var distance = distanceX + distanceY;
        var smallerDistance = distance;
        var nearest = foods[0];
        for (var i = 1; i < foods.length; i++) {
            var distanceX_1 = Math.abs(cases[0].position.posX - foods[i].position.posX);
            var distanceY_1 = Math.abs(cases[0].position.posY - foods[i].position.posY);
            distance = distanceX_1 + distanceY_1;
            if (distance < smallerDistance) {
                smallerDistance = distance;
                nearest = foods[i];
            }
        }
        return nearest;
    };
    Computer.prototype.choseDirection = function (snake) {
        var distanceX = snake.cases[0].position.posX - this.nearestFood.position.posX;
        var distanceY = snake.cases[0].position.posY - this.nearestFood.position.posY;
        var dX = distanceX / Math.abs(distanceX) * -1;
        var dY = distanceY / Math.abs(distanceY) * -1;
        console.log("distance de X : " + distanceX);
        console.log("distance de Y : " + distanceY);
        if (distanceX != 0) {
            console.log("pas encore sur l'axe X");
            if ((snake.direction.dirX + dX) != 0) {
                console.log("dX : " + dX);
                snake.newDir(dX, 0);
            }
            else {
                console.log("dY : " + dY);
                snake.newDir(0, dY);
            }
        }
        else {
            console.log("sur l'axe X");
            if ((snake.direction.dirY + dY) != 0) {
                console.log("dY : " + dY);
                snake.newDir(0, dY);
            }
            else {
                console.log("dX : " + dX);
                snake.newDir(dX, 0);
            }
        }
    };
    return Computer;
}());
exports.Computer = Computer;
