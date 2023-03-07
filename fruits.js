function preload(){
    img= loadImage("fruits.jpg");
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
    text("basket containg red and black berries",265,15);
    rect(250,0,295,300);
    
}