var ground,player;
var lives = 3;
var obs, obsImg, obsGroup;
var monster, monsterImg, monsterGroup;

function preload(){
  
}

function setup() {
  createCanvas(windowWidth,windowHeight/2);

  ground = createSprite(width,height-20,width*4,10);
  
  player = new Player(400,200,20,50);

  obsGroup = new Group();
  monsterGroup = new Group();

  spawnObs();
 
}

function draw() {
  background("black");

  textSize(20);
  text("LIVES: " + lives,width-250,50);

  player.display();
  spawnMonsters();
  
  player.sprite.collide(ground);

  drawSprites()
}

function spawnObs() {
  for(var i = 100; i< width*4; i+= random(600,1000)){
    obs = new Obstacle(i,height-50,20,60);
    obs.display();
  }
}
function spawnMonsters() {
  if(frameCount%100 === 0){
  for(var i = 100; i< width*4; i+= random(600,1000)){
    monster = new Monster(i,height-450,20,20);
    monster.display();
  }
}
}