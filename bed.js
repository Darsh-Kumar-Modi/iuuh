function preload(){
    img= loadImage("bed.jpg");
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
    text("bed",125,275);
    rect(115,250,275,200);
    stroke("black");
    text("chair",400,295);
    rect(390,280,80,150);
    stroke("red");
    text("book shelf",400,45);
    rect(380,32,140,250);
}