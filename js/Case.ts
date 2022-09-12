import {Pos} from './Pos';
import {Dir} from './Dir';

export class Case{
    dimension : number;
    position : Pos;
    color : string;
    borderColor : string;
    /**
     * Constructeur d'objets Case
     * @param {number} dimension Dimension du carré
     * @param {Pos} position Position x et y de la Case
     * @param {string} color Couleur de la case
     * @param {string} borderColor Couleur des bordures de la Case
     */
    constructor(dimension: number, position: Pos, color: string, borderColor: string){
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
    move(direction: Dir, step: number){
        this.position.posX += direction.dirX * step;
        this.position.posY += direction.dirY * step;
    }

    /**
     * Donne une nouvelle position à la Case
     * @param {number} x Position sur l'axe X
     * @param {number} y Position sur laxe Y
     */
    newPos(x: number, y: number){
        this.position.posX = x;
        this.position.posY = y;
    }

    /**
     * Affiche la case sur le board
     * @param {CanvasRenderingContext2D} canvas2D L'espace 2D
     */
    draw(canvas2D: CanvasRenderingContext2D){
        canvas2D.fillStyle = this.color;
        canvas2D.strokeStyle = this.borderColor;
        canvas2D.fillRect(this.position.posX, this.position.posY, this.dimension, this.dimension);
        canvas2D.strokeRect(this.position.posX, this.position.posY, this.dimension, this.dimension);
    }
}