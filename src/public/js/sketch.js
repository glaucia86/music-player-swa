// @ts-nocheck
/**
 * file: sketch.js
 * data: 06/07/2020
 * author: Glaucia Lemos
 * description: file responsible for the whole logic for the app using the p5.js library
 */

let pieces,
  radius,
  fft,
  mapMouseX,
  mapMouseY,
  sound,
  toggleBtn,
  uploadBtn,
  uploadedAudio,
  uploadAnim;
let colorPalette = ["#000000", "#FF00FF", "#FF0000", "#ADFF2F"];

let uploadLoading = false;

function preload() {
  sound = loadSound("../audio/kartell.mp3");
}

function uploaded(file) {
  uploadLoading = true;
  uploadedAudio = loadSound(file.data, uploadedAudioPlay);
}

function uploadedAudioPlay(audioFile) {
  uploadLoading = false;

  if (sound.isPlaying()) {
    sound.pause();
  }

  sound = audioFile;
  sound.loop();
}

function setup() {
  uploadAnim = select("#uploading-animation");

  createCanvas(windowWidth, windowHeight);

  toggleBtn = createButton("Play / Pause");

  uploadBtn = createFileInput(uploaded);

  uploadBtn.addClass("upload-btn");

  toggleBtn.addClass("toggle-btn");

  toggleBtn.mousePressed(toggleAudio);

  fft = new p5.FFT();
  sound.loop();

  pieces = 4;
  radius = windowHeight / 4;
}

function draw() {
  // Add a loading animation for the uploaded track
  if (uploadLoading) {
    uploadAnim.addClass("is-visible");
  } else {
    uploadAnim.removeClass("is-visible");
  }

  background(colorPalette[0]);

  fft.analyze();
  let bass = fft.getEnergy("bass");
  let treble = fft.getEnergy(100, 150);
  let mid = fft.getEnergy("mid");

  let mapbass = map(bass, 0, 255, -100, 800);
  let scalebass = map(bass, 0, 255, 0.5, 1.2);

  let mapMid = map(mid, 0, 255, -radius / 4, radius * 4);
  let scaleMid = map(mid, 0, 255, 1, 1.5);

  let mapTreble = map(treble, 0, 255, -radius / 4, radius * 4);
  let scaleTreble = map(treble, 0, 255, 1, 1.5);

  mapMouseX = map(mouseX, 0, width, 2, 0.1);
  mapMouseY = map(mouseY, 0, height, windowHeight / 8, windowHeight / 6);

  pieces = mapMouseX;
  radius = mapMouseY;

  let mapScaleX = map(mouseX, 0, width, 1, 0);
  let mapScaleY = map(mouseY, 0, height, 0, 1);

  translate(width / 2, height / 2);

  for (i = 0; i < pieces; i += 0.01) {
    rotate(TWO_PI / pieces);

    /*----------  BASS  ----------*/
    push();
    strokeWeight(1);
    stroke(colorPalette[1]);
    scale(scalebass);
    rotate(frameCount * -0.5);
    line(mapbass, radius / 2, radius, radius);
    line(-mapbass, -radius / 2, radius, radius);
    pop();

    /*----------  MID  ----------*/
    push();
    strokeWeight(1);
    stroke(colorPalette[2]);
    line(mapMid, radius, radius * 2, radius * 2);
    pop();

    /*----------  TREMBLE  ----------*/
    push();
    stroke(colorPalette[3]);
    scale(scaleTreble);
    line(mapTreble, radius / 2, radius, radius);
    pop();
  }
}

function toggleAudio() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
