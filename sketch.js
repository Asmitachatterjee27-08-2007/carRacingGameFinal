
var db,gameState=0,playerCount;

var form,player,game;
var allPlayers;
var car1, car2, car3, car4;
var cars;
var car1img, car2img,car3img, car4img;
var trackImg, groundImg;

function preload(){
    car1img=loadImage("images/car1.png");
    car2img=loadImage("images/car2.png");
    car3img=loadImage("images/car3.png");
    car4img=loadImage("images/car4.png");
    groundImg=loadImage("images/ground.png");
    trackImg=loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth-30,displayHeight-100);
    db=firebase.database();
    game= new Game();
    game.getState();
    game.start();

}

function draw(){
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if(gameState==2){
        game.end();
    }
}

