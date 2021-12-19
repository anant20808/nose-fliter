nosex="";
nosey="";
function preload(){
    img=loadImage("https://i.postimg.cc/43K1JwP9/clown-nose-s-asset-by-makayla20161-dcqxxbj-fullview.png")
}
function setup(){
canvas = createCanvas(300,400);
canvas.center();
video= createCapture(VIDEO);
video.size(300,400);
video.hide()

posenet = ml5.poseNet(video,modeloaded)
posenet.on('pose',gotpose)
}
function modeloaded(){
    console.log("model is ready")
}
function gotpose(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nose x="+ results[0].pose.nose.x);
    console.log("nose y="+ results[0].pose.nose.y);
    console.log("right eye x="+ results[0].pose.rightEye.x);
    console.log("right eye y="+ results[0].pose.rightEye.y);
    
}
}
function draw(){
image(video,0,0,300,400);
image(img,nosex-15,nosey-10,30,30);

}
function take_snapshot(){
    save("img.png")
}


