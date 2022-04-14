// window sizing
function setup() {
    createCanvas(windowWidth, windowHeight);
    //background("DarkRed");
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //background("MediumSpringGreen");
}

let posX = 0;
let letterSize = 100;
let r = 255;
let g = 255;
let b = 255;

// draw circles
function draw() {
    // no outlline around populated objects
    //noStroke();
    // circle color
    // fill(251,21,145, 30);
    // populate circle relative to mouse
    // position of size 250x250
    //ellipse(mouseX, mouseY, 250, 250);

    posX = mouseX
    posY = mouseY

    
    fill(r, g, b);
    if ((r == 255) && (g == 255) && (b == 255)) {
        //stroke(255, 255, 255);
    } else {
        stroke(255 - r, 255 - g, 255 - b);
        textSize(letterSize);
        letterSize = letterSize + 1;
        text("hello world", posX, posY);
        //posX += 10;
    }
    
   
}

function mousePressed() {
    r = random(0, 255)
    g = random(0, 255)
    b = random(0, 255)
    letterSize = 0
}

  
  
  