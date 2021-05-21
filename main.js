var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var nasa = ["nasa1.jfif", "nasa2.jfif", "nasa3.jpg"];
randomNum = Math.floor(Math.random()*3);
var rover_image = "rover.png";
var background_image = nasa[randomNum];
rx = 10;
ry = 10;
rHeight = 90;
rwidth = 100;
function add(){
    backgroundTag = new Image();
    backgroundTag.onload = uploadBackground;
    backgroundTag.src = background_image;

    roverTag = new Image();
    roverTag.onload = uploadRover;
    roverTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverTag, rx, ry, rwidth, rHeight);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keycode = e.keyCode;
    if (keycode == "37"){
        left();
        console.log("left clicked");
    }
    if (keycode == "38"){
        up();
        console.log("up clicked");
    }
    if (keycode == "39"){
        right();
        console.log("right clicked");
    }
    if (keycode == "40"){
        down();
        console.log("down clicked");
    }
}
function up(){
    if(ry > 0){
        ry -= 10;
        console.log(ry);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if (ry <= 510){
        ry += 10;
        console.log(ry);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if (rx > 0){
        rx -= 10;
        console.log(rx);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (rx <= 700){
        rx += 10;
        console.log(rx);
        uploadBackground();
        uploadRover();
    }
}