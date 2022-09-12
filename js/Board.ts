class Board{
    background : string;
    has_border : Boolean;
    score : Number;
    canvas : HTMLCanvasElement;
    widht : Number;
    canvas2D: CanvasRenderingContext2D;

    /**
     * Constructeur d'objets Board
     * @param {string} background Couleur du fond
     * @param {Boolean} has_border Le plateau a des bordures ou non
     */
    constructor(background: string, has_border: boolean){
        this.background = background;
        this.has_border = has_border;
        this.score = 0;
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.canvas2D = this.canvas.getContext("2d")!;
    }

    /**
     * Efface tout ce qui est affiché sur le plateau
     */
    clear(){
        this.canvas2D.fillStyle = this.background;
        this.canvas2D.strokeStyle = "black";
        this.canvas2D.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas2D.strokeRect(0.5, 0.5, this.canvas.width - 1, this.canvas.height - 1);
    }

    /**
     * Affiche le score de la partie
     */
    drawScore(){
        this.canvas2D.fillStyle = "#fdcb6e";
        this.canvas2D.font = '30px sans-serif';
        this.canvas2D.fillText("Score : " + this.score, 10, 30);

    }
}