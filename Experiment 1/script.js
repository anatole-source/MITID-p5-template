
let randomButton = document.querySelector("#randomize");

randomButton.addEventListener("click", function() {
    background(73);
    generateStacks(5);
});

function setup(){
    // function that runs only once
    createCanvas(800, 500);
    noStroke();
    background(73);
    generateStacks(5);
}

function draw(){
    // // function that runs repeatedly
    // //background(73);

    // stack0fCircle(100, 200, "#F09090")
    // stack0fCircle(400, 300,"#9090EE")``
}

function generateStacks(stackAmount){
    for (let i = 0; i < stackAmount; i++){
        let randomX = random(0, 800);
        let randomY = random(0, 500);
        let randomColor = random(0, 255);
        stack0fCircle(randomX, randomY, randomColor);
    }
}

function stack0fCircle(postX, postY, color){
    fill(color);
    for (let i = 0; i < 10; i = i + 1){
        circle (postX, postY + i*10, 20);
    }
}


function mousePressed(){
    fill("red");
    circle(mouseX, mouseY, 50);
}