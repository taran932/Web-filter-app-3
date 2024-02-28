noseX=0;
noseY=0;
function preload(){
        clownnose=loadImage('https://i.postimg.cc/9fNL8S0P/m.png');
}

function setup(){
        canvas=createCanvas(300,300);
        canvas.center();        
        video=createCapture(VIDEO);
        video.size(300,300);
        video.hide();
        poseNet=ml5.poseNet(video,modelloaded);
        poseNet.on("pose",gotposes);
}

function modelloaded(){
        console.log("model is loaded");
}

function gotposes(results){
if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-5;
}
}

function draw(){
        image(video,0,0,300,300);
        image(clownnose,noseX,noseY,40,40);
}

function take_snapshot(){
        save('mustache.png');
}