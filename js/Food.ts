import { Case } from "./Case";
import { Pos } from "./Pos";

export class Food extends Case{
    pos: Pos;
    dim: number;
    color: string;
    borderColor: string;
    points: number;
    addCases: number;
    /**
     * Constructeur d'objets Food hérité du type Case
     * @param {Pos} pos position x et y de l'élément
     * @param {number} dim dimension de la Nourriture
     * @param {string} color couleur de la Nourriture
     * @param {string} borderColor couleur des bordures de la Nourriture
     * @param {number} points Nombre de points gagnés lorsque la Nourriture est mangée par le serpent
     * @param {number} addCases Nombre de cases ajoutées au serpent lorsqu'il mange la Nourriture.
     */
    constructor(pos: Pos, dim: number, color: string, borderColor: string, points: number, addCases: number){
        super(dim, pos, color, borderColor);
        this.points = points;
        this.addCases = addCases;
    }
}