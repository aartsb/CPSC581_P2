// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

let img ;
let img_back;
let message = 'U',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 80,
  x,
  y; // x and y coordinates of the text

//let mySound;

// The video
let video;
// // For displaying the label
 //let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://storage.googleapis.com/tm-models/YadBJmj5/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');


  font = loadFont('LcrMeeses-8ZWB.ttf');
  img = loadImage('cheese.png');
  img_back = loadImage('windowclip.jpg');
  //soundFormats('mp3');
  //mySound = loadSound("fm-freemusic-give-me-a-smile.mp3",onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
  //mySound = loadSound("fm-freemusic-give-me-a-smile.mp3");

  // Credits: Monkeys Spinning Monkeys Kevin MacLeod (incompetech.com)
// Licensed under Creative Commons: By Attribution 3.0 License
// http://creativecommons.org/licenses/by/3.0/
// Music promoted by https://www.chosic.com/

}


function setup() {
  createCanvas(800, 400);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  // STEP 2: Start classifying
  classifyVideo();



  // set up the font

  textFont(font);
  textSize(fontsize);
  fill("pink");

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;

  //Play the background sound

  //mySound.play();
  //song.play();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}


function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);
  image(img,400 ,200,width/6, height/6);// Load the cheese image
  image(img_back,0 ,0,width,height*1.05);// Load the cheese image

  // write the text in black and get its bounding box
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }

  //Disappear function
//   if(bound.x == 400 && bound.y == 300 && bound.x == 401 && bound.y == 301 ){

//   }

}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // // Store the label and classify again!
  //label = results[0].label;
  classifyVideo();
}
