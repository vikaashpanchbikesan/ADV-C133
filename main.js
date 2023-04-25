img = "";
status = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("blue");
    text("Dog", 45, 75);
    noFill();
    stroke("blue");
    rect(30, 60, 450, 350);

    fill("blue");
    text("Cat", 320, 120);
    noFill();
    stroke("blue")
    rect(300, 90, 270, 320);
}

function modelLoaded(){
    console.log("Cocossd Model is Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
if(error){
console.log(error);
}
else{
    console.log(results);
}
}