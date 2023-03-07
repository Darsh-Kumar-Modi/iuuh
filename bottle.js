function preload(){
    img= loadImage("bottle.jpg");
}
function setup(){
    canvas= createCanvas(550 ,470);
    canvas.center();
}
function draw(){
    image(img,0,0,548,468);
    fill("red");
    noFill();
    stroke("blue");
    text("bottle",225,325);
    rect(215,50,155,400);
    stroke("black");
    text("plants",425,225);
    rect(350,50,155,230);
    stroke("red");
    text("mugs",5,175);
    rect(2,150,182,150);
}