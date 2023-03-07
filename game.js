function preload(){
    img= loadImage("game.jpg");
}
function setup(){
    canvas= createCanvas(550 ,470);
    canvas.center();
}
function draw(){
    image(img,0,0,548,468);
    fill("red");
    noFill();
    stroke("yellow");
    text("desktop",265,145);
    rect(220,130,175,160);
    
}