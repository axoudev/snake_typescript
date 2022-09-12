console.log('terst')
import { Board } from "./Board";
import { Case } from "./Case";
import { Computer } from "./Computer";
import { Dir } from "./Dir";
import { Food } from "./Food";
import { Pos } from "./Pos";
import { Settings } from "./Settings";
import { Snake } from "./Snake";

let board: Board;
let snake: Snake;
let computer: Computer;
let foods: Food[];
let speed: number;
let snakeSize: number;
let player: string;
let settings: Settings = new Settings(speed = 100, snakeSize = 3, player = 'user');

console.log("testS")

document.addEventListener("keydown", newDir);

let isGameOver: Boolean = false;

/**
 * Lance le jeu avec les parametres choisis
 */
function start(){
    let foodPosition: number[];

    isGameOver = false;
    board = new Board("#74b9ff", true);
    snake = new Snake(settings.speed, 20, settings.snakeSize, new Pos(400,100), new Dir(1,0), 20,  "#55efc4", "#00b894");
    foods = [];
    foodPosition = notOnSnakePosition();
    foods.push(new Food(new Pos(foodPosition[0], foodPosition[1]), 20, "#ff7675", "#d63031", 1, 1));
    if(settings.player == "ai"){
        computer = new Computer(1, foods, snake.cases);
    }

    $("#start-menu").slideUp("fast", function(){
        main();
    });
    
}

/**
 * Fonction principale qui s'apelle en boucle.
 */
function main(){
    setTimeout(function onTick() {
        if(settings.player == "ai"){
            computer.choseDirection(snake);
        }
        board.clear(); // Efface tout ce qu'il y à sur le board
        snake.move(); // Fait avancer le serpent
        drawItems(); // Affiche tout les éléments du jeu (snake, food, score, etc...)
        checkCollisions(); // Vérifie si il y a des collisions
        if(!isGameOver)main(); // Si il n'y a pas de Game Over, recommencer
    }, snake.speed)
}

/**
 * Permet d'avoir un entier aléatoire entre 0 et un entier maximum qui soit un multiple de la dimension du Serpent.
 * @param {number} max Le nombre entier maximum
 * @returns {number} Nombre entier aléatoire
 */
 function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max/snake.dimension)*snake.dimension;
}

/**
 * Affiche tout les éléments du jeu
 */
function drawItems(){
    drawFoods();
    board.drawScore();
    snake.draw(board);
}

/**
 * Affiche les Nourritures
 */
function drawFoods(){
    for(let food in foods){
        foods[food].draw(board.canvas2D);
    }
}

/**
 * Gère toutes les collisions du jeu
 */
 function checkCollisions(){
    checkFoodCollision();
    checkBorderCollision();
    checkSelfCollision();
}

/**
 * Détecte les collisons entre la tête du Serpent et la Nourriture.
 * Défini une nouvelle position pour la Nourriture.
 * Ajoute des points au score.
 * Ajoute des cases au Serpent.
 */
function checkFoodCollision(){
    let pos: number[];
    for(let food in foods){
        if(rectCollide(snake.cases[0], foods[food])){
            pos = notOnSnakePosition();
            foods[food].newPos(pos[0], pos[1]);
            board.score += foods[food].points;
            snake.add(foods[food].addCases);
        } 
    }
}

/**
 * Trouve une position qui n'est pas sur le Snake
 * @returns {number[]} Tableau d'entiers contenant les positions x et y. 
 */
function notOnSnakePosition(): number[]{
    let onSnake: boolean;
    let x: number;
    let y: number;

    do{
        onSnake = false;
        x = getRandomInt(board.canvas.width-5);
        y = getRandomInt(board.canvas.height-5);
        for(let element in snake.cases){
            if(snake.cases[element].position.posX == x && snake.cases[element].position.posY == y){
                onSnake = true;
            }
        }
    }while(onSnake == true);
    
    return [x,y];
}

/**
 * Detecte les collisions entre la tête du Serpent et les bords du Plateau.
 * Game over si collision.
 */
function checkBorderCollision(){
    if(snake.cases[0].position.posX < 0 || snake.cases[0].position.posX > board.canvas.width - snake.dimension || snake.cases[0].position.posY < 0 || snake.cases[0].position.posY > board.canvas.height - snake.dimension){
        gameOver();
    }
}

/**
 * Dectecte les collisions entre la tête du Serpent et le reste de son corps.
 * Game over si collision.
 */
function checkSelfCollision(){
    for(let i = 3; i < snake.cases.length; i++){
        if(rectCollide(snake.cases[0], snake.cases[i])){
            gameOver();
        }
    }
}

/**
 * Detecte si deux rectangles entrent en collision
 * @param {Case} rect1 un objet de type Case
 * @param {Case} rect2 un objet de type Case
 * @returns {Boolean} true si collision, false si pas de collision
 */
function rectCollide (rect1: Case, rect2: Case): Boolean{
    return (rect1.position.posX < rect2.position.posX + rect2.dimension &&
            rect1.position.posX + rect1.dimension > rect2.position.posX &&
            rect1.position.posY < rect2.position.posY + rect2.dimension &&
            rect1.dimension + rect1.position.posY > rect2.position.posY);
}

/**
 * Change la valeur de isGameOver en true
 * Affiche Game Over à l'écran.
 */
 function gameOver(){
    isGameOver = true;
    board.canvas2D.fillStyle = "#d63031";
    board.canvas2D.font = "48px sans-serif"
    board.canvas2D.fillText("GAME OVER", board.canvas.width/2 - 150, board.canvas.height/2);
    board.canvas2D.font = "30px sans-serif";
    board.canvas2D.fillStyle = "white";
    board.canvas2D.fillText("Press SPACE to play again", board.canvas.width/2 - 180, board.canvas.height/2 + 50);
    board.canvas2D.fillText("Press O for Settings", board.canvas.width/2 - 140, board.canvas.height/2 + 100);
}

/**
 * Change de direction en fonction de la touche qui à été appuyée.
 * recomence le jeu losque le joueur appuies sur la touche espace quand il y a Game Over
 * @param {KeyboardEvent} e 
 */
function newDir(e: KeyboardEvent){
    if(snake.nbMoveSinceLastDirection > 0 && settings.player == 'user'){ // empêche de se retourner sur lui-même
        if (e.key === "left"){
            if (snake.direction.dirX != 1){
                snake.newDir(-1, 0);
            }
        }
    
        if (e.key === "right"){
            if (snake.direction.dirX != -1){
                snake.newDir(1, 0);
            }
        }
    
        if (e.key === "up"){
            if (snake.direction.dirY != 1){
                snake.newDir(0,-1);
            }
        }
    
        if (e.key=== "down"){
            if (snake.direction.dirY != -1){
                snake.newDir(0,1);
            }
        }
    }

    if(isGameOver){
        if(e.key === "space"){
            start();
            // board = new Board(background = "#74b9ff", has_border = true);
            // snake = new Snake(speed = settings.speed, step = 20, length = settings.snakeSize, position = new Pos(400,100), direction = new Dir(1,0), dimension = 20, color = "#55efc4", borderColor = "#00b894");
            // foods = []
            // foods.push(new Food(pos = new Pos(getRandomInt(board.canvas.width-5), getRandomInt(board.canvas.height-5)), dim = 20, color = "#ff7675", borderColor = "#d63031", points = 1, addCases = 1));

            // isGameOver = false;
            // main();
        }
        if(e.key === "o"){
            $("#start-menu").slideDown();
        }
    }
}