export class Dir{
    dirX: number;
    dirY: number;
    /**
     * Constructeur d'objets Dir
     * @param {number} dirX Direction sur l'axe X : Nombre entre 1 et -1
     * @param {number} dirY Direction sur l'axe Y : Nombre entre 1 et -1
     */
    constructor(dirX: number, dirY: number){
        this.dirX = dirX;
        this.dirY = dirY
    }

    /**
     * Change la direction
     * @param {number} x Direction sur l'axe X : Nombre entre 1 et -1
     * @param {number} y Direction sur l'axe Y : Nombre entre 1 et -1
     */
    newDir(x: number,y: number){
        this.dirX = x;
        this.dirY = y;
    }
}