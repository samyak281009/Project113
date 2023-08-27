function preload(){
}
function setup() {
    canvas=createCanvas(600,300);
    canvas.position(70, 200);
    createCanvas(1500,400);
    video= createCapture(VIDEO);
    video.hide();
   
 
}
function draw() {
    image(video, 100,50,300,400);

    stroke(168,10,10);
    fill(168,10,10);
    circle(40, 40, 50);
    circle(460, 40, 50);
    circle(40, 385, 50);
    circle(460, 385, 50);
    
    stroke(127, 233, 245)
    fill(127, 233, 245)
    rect(63,27,375,25)
    rect(63,370,375,25)
    rect(27,63,25, 297)
    rect(448,63,25,297)
}
function take_snapshot(){
save("frame.png");
}