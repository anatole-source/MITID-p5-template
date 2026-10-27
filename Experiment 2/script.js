
// crer un tableau avec pleins de balles différentes
let balls = [];



function setup(){
    // function that runs only once
    createCanvas(1270, 700);
    generateBalls(1);

    // Récupère le bouton html et génère random number of nouvelles balles 
    let randomButton = document.querySelector("#randomize");
    randomButton.addEventListener("click", function() {
    generateBalls(floor(random(1, 21)));
});

}



//fonction qui génère des balles aléatoires
function generateBalls(ballAmount){

    //vide le tableau avant de le reremplir
balls = [];

//créer compteur, répète et augmente le nombre
for (let i = 0; i < ballAmount; i++){

    //déinit la position et vitesse de chaque balles avant de push dans le tableau
    let ball = {
    x: random(15, width - 15),
    y: random(15, height - 15),
    speedX: random(-3, 3),
    speedY: random(-3, 3),
    color: color(random(255), random(255), random(255))
};

balls.push(ball);
}}




function draw(){
    // Fond noir transparent pour laisser des traces des anciennes positions des balles
    background(0, 0, 0, 30);
    

    //anime chaque balle du tableau individuellement
    for (let ball of balls) {

    // Mouvement aléatoire
    ball.speedX += random(-0.2, 0.2);
    ball.speedY += random(-0.2, 0.2);

    // Attraction vers la souris
    if (mouseIsPressed) {
      ball.speedX += (mouseX - ball.x) * 0.001;
      ball.speedY += (mouseY - ball.y) * 0.001;
    }

    // Limiter la vitesse
    ball.speedX = constrain(ball.speedX, -4, 4);
    ball.speedY = constrain(ball.speedY, -4, 4);

    // Déplacer les balles
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Rebondir sur les murs
    if (ball.x > width - 15 || ball.x < 15) {
      ball.speedX = -ball.speedX;
    }

    if (ball.y > height - 15 || ball.y < 15) {
      ball.speedY = -ball.speedY;
    }

    // Dessiner les balles
    noStroke();
    fill(ball.color);
    circle(ball.x, ball.y, 30);
}}

