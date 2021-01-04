function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,400);
    canvas.position(600,150);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);
    
}

function draw(){
    background(34,56,78);
}

function modelloaded(){
    console.log("model has loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
    }

}
