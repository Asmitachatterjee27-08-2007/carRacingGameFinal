
var db,gameState=0,playerCount;

var form,player,game;

function setup(){
    createCanvas(500,500);
    db=firebase.database();
    game= new Game();
    game.getState();
    game.start();

}

function draw(){
    
    
}

