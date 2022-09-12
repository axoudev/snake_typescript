class Computer{
    constructor(level, foods, cases){
        this.level = level;
        this.nearestFood = this.getNearestFood(foods, cases);
    }

    getNearestFood(foods, cases){
        if(foods.lenght == 1){
            return foods[0];
        }
        let distanceX = Math.abs(cases[0].position.posX - foods[0].position.posX);
        let distanceY = Math.abs(cases[0].position.posY - foods[0].position.posY);
        let distance = distanceX + distanceY;
        let smallerDistance = distance;
        let nearest = foods[0];
        
        for(let i = 1; i < foods.lenght; i++){
            let distanceX = Math.abs(cases[0].position.posX - foods[i].position.posX);
            let distanceY = Math.abs(cases[0].position.posY - foods[i].position.posY);
            distance = distanceX + distanceY;

            if(distance < smallerDistance){
                smallerDistance = distance;
                nearest = foods[i];
            }   
        }

        return nearest;
    }

    choseDirection(snake){
        let distanceX = snake.cases[0].position.posX - this.nearestFood.position.posX;
        let distanceY = snake.cases[0].position.posY - this.nearestFood.position.posY;
        let dX = distanceX/Math.abs(distanceX)*-1;
        let dY = distanceY/Math.abs(distanceY)*-1;
        console.log("distance de X : " + distanceX)
        console.log("distance de Y : " + distanceY)
        if(distanceX != 0){
            console.log("pas encore sur l'axe X")
            if((snake.direction.dirX + dX) != 0){
                console.log("dX : " + dX)
                snake.newDir(dX, 0);
            }else{
                console.log("dY : " + dY)
                snake.newDir(0,dY)
            }
        }else{
            console.log("sur l'axe X")
            if((snake.direction.dirY + dY) != 0){
                console.log("dY : " + dY)
                snake.newDir(0,dY)
            }else{
                console.log("dX : " + dX)
                snake.newDir(dX, 0);
            }
        }
    }
}