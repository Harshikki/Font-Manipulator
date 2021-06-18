noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX  = 0;

function setup(){
    canvas = createCanvas(350, 350);
    canvas.position(900, 150);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(200, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotResults(results){
    console.log(results);
}