var Paddle, ball, edges, ballImg, paddleImg;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15, ball16, ball17;

 

function preload(){
  ballImg = loadImage("pizza.png");
  paddleImg = loadImage("pizza.png");
}

function setup(){
  createCanvas(1800,600);
  Paddle = createSprite(390, 200, 10, 10);
  Paddle.addImage(paddleImg);
  Paddle.scale = 0.3;
  
  ball = createSprite(200,200,10,10);
  ball.addImage(ballImg);
  ball.scale = 0.3;
  
  ball1 = createSprite(300,200,10,10);
  ball1.addImage(ballImg);
  ball1.scale = 0.3;
  
  ball2 = createSprite(400,200,10,10);
  ball2.addImage(ballImg);
  ball2.scale = 0.3;
  
  ball3 = createSprite(500,200,10,10);
  ball3.addImage(ballImg);
  ball3.scale = 0.3;
  
  ball4= createSprite(600,200,10,10);
  ball4.addImage(ballImg);
  ball4.scale = 0.3;
  
  ball5= createSprite(700,200,10,10);
  ball5.addImage(ballImg);
  ball5.scale = 0.3;
  
  ball6= createSprite(800,200,10,10);
  ball6.addImage(ballImg);
  ball6.scale = 0.3;
  
  ball7= createSprite(900,200,10,10);
  ball7.addImage(ballImg);
  ball7.scale = 0.3;
  
  ball8= createSprite(1000,200,10,10);
  ball8.addImage(ballImg);
  ball8.scale = 0.3;
  
  ball9= createSprite(1100,200,10,10);
  ball9.addImage(ballImg);
  ball9.scale = 0.3;
  
  ball10= createSprite(1200,200,10,10);
  ball10.addImage(ballImg);
  ball10.scale = 0.3;
  
  edges = createEdgeSprites();
  ball.velocityX = 2;
  ball.velocityY = 3;

  ball1.velocityX = 3;
  ball1.velocityY = 2;
  
  ball2.velocityX = 4;
  ball2.velocityY = 2;
  
  ball3.velocityX = 2;
  ball3.velocityY = 4;
  
  ball4.velocityX = 4;
  ball4.velocityY = 5;
  
  ball5.velocityX = 5;
  ball5.velocityY = 4;

  ball6.velocityX = 4;
  ball6.velocityY = 4;
  
  ball7.velocityX = 5;
  ball7.velocityY = 5;
  
  ball8.velocityX = 2;
  ball8.velocityY = 2;
  
  ball9.velocityX = 3;
  ball9.velocityY = 3;
  
  ball10.velocityX = 3;
  ball10.velocityY = 5;

  }

function draw(){
  background("black");
  
  Paddle.y = mouseY;
  Paddle.x = mouseX;
  
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[0]);
  ball.bounce(Paddle);
  
  ball1.bounceOff(edges[3]);
  ball1.bounceOff(edges[2]);
  ball1.bounceOff(edges[1]);
  ball1.bounceOff(edges[0]);
  ball1.bounce(Paddle);
  
  ball2.bounceOff(edges[3]);
  ball2.bounceOff(edges[2]);
  ball2.bounceOff(edges[1]);
  ball2.bounceOff(edges[0]);
  ball2.bounce(Paddle);
  
  ball3.bounceOff(edges[3]);
  ball3.bounceOff(edges[2]);
  ball3.bounceOff(edges[1]);
  ball3.bounceOff(edges[0]);
  ball3.bounce(Paddle);
  
  ball4.bounceOff(edges[3]);
  ball4.bounceOff(edges[2]);
  ball4.bounceOff(edges[1]);
  ball4.bounceOff(edges[0]);
  ball4.bounce(Paddle);
  
  ball5.bounceOff(edges[3]);
  ball5.bounceOff(edges[2]);
  ball5.bounceOff(edges[1]);
  ball5.bounceOff(edges[0]);
  ball5.bounce(Paddle);
  
  ball6.bounceOff(edges[3]);
  ball6.bounceOff(edges[2]);
  ball6.bounceOff(edges[1]);
  ball6.bounceOff(edges[0]);
  ball6.bounce(Paddle);
  
  ball7.bounceOff(edges[3]);
  ball7.bounceOff(edges[2]);
  ball7.bounceOff(edges[1]);
  ball7.bounceOff(edges[0]);
  ball7.bounce(Paddle);
  
  ball8.bounceOff(edges[3]);
  ball8.bounceOff(edges[2]);
  ball8.bounceOff(edges[1]);
  ball8.bounceOff(edges[0]);
  ball8.bounce(Paddle);

  ball9.bounceOff(edges[3]);
  ball9.bounceOff(edges[2]);
  ball9.bounceOff(edges[1]);
  ball9.bounceOff(edges[0]);
  ball9.bounce(Paddle);
  
  ball10.bounceOff(edges[3]);
  ball10.bounceOff(edges[2]);
  ball10.bounceOff(edges[1]);
  ball10.bounceOff(edges[0]);
  ball10.bounce(Paddle);


  drawSprites();
}