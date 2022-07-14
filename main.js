STATUS ="";

function setup() {
    canvas = createCanvas(350, 350)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start() {
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("STATUS").innerHTML = "Status : Detecting Objects";
    document.getElementById("input_text").innerHTML.value;
}
function draw() {
   if (STATUS != ""){
    image(video, 0, 0, 350, 350);
}
}
function modelLoaded() {
    console.log("Model Loaded!");
  STATUS=true; 
}

function gotResults(error, results) {
if(error) {
console.log(error);
}else{
    console.log(results);
    objects = results;
}
}