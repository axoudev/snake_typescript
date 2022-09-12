class Settings{
    speed: number;
    snakeSize: number;
    player: string;
    /**
     * Constructeur d'objets Settings
     * @param {number} speed Vitesse du serpent
     * @param {number} snakeSize Taille du serpent
     * @param {string} player joueur
     */
    constructor(speed: number, snakeSize: number, player: string){
        this.speed = speed;
        this.snakeSize = snakeSize;
        this.player = player;
    }
}