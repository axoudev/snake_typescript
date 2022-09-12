export class Pos{
    posX: number;
    posY: number;
    /**
     * Constructeur d'objets Pos
     * @param {number} posX Position sur l'axe X
     * @param {number} posY Position sur l'axe Y
     */
    constructor(posX: number, posY: number){
        this.posX = posX;
        this.posY = posY;
    }

    /**
     * Change la position
     * @param {Pos} pos Nouvelle position
     */
    newPos(pos: Pos){
        this.posX = pos.posX;
        this.posY = pos.posY;
    }
}