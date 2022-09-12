class Food extends Case{
    /**
     * Constructeur d'objets Food hérité du type Case
     * @param {Pos} pos position x et y de l'élément
     * @param {Number} dim dimension de la Nourriture
     * @param {String} color couleur de la Nourriture
     * @param {String} borderColor couleur des bordures de la Nourriture
     * @param {Number} points Nombre de points gagnés lorsque la Nourriture est mangée par le serpent
     * @param {Number} addCases Nombre de cases ajoutées au serpent lorsque la Nourriture est mangée par ce dernier.
     */
    constructor(pos, dim, color, borderColor, points, addCases){
        super(dim, pos, color, borderColor);
        this.points = points;
        this.addCases = addCases;
    }
}