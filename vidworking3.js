var sequence = [];
var index = 0;
var sequence = [];
var fade;
var fade_amount = -0.5;
var screen_x = 600;
var screen_y = 10;

var audio_paths_init;
var vid_paths_init;
var vid;

function preload(){
// preload the video files
  big_seed = createVideo('assets/big_seed.mp4');
  bloom = createVideo('assets/bloom.mp4');
  blow = createVideo('assets/blow.mp4');
  patch = createVideo('assets/patch.mp4'); 
  puff = createVideo('assets/puff.mp4');
  rotate = createVideo('assets/rotate.mp4');
  saw = createVideo('assets/saw.mp4');
  spin = createVideo('assets/spin.mp4');
  web = createVideo('assets/web.mp4');
  allergy = createVideo('assets/allergy.mp4');
  tangle = createVideo('assets/tangle.mp4');
  trample = createVideo('assets/trample.mp4');
  fleur = createVideo('assets/fleur.mp4');
  blinker = createVideo('assets/blinker.mp4');
  spout = createVideo('assets/spout.mp4');
}




function setup() {
  sequence = [big_seed,bloom,blow,patch,puff,rotate,saw,spin,web,allergy,tangle,trample,fleur,blinker,spout];
  for (i = 0; i < sequence.length; i++) {
    sequence[i].hide();
  }
  createCanvas(windowWidth,windowHeight);
  shuffle(sequence, true); 
  sequence[index].play();
  fade = 255;
}

function draw_screen(){
  image(sequence[index], screen_x, screen_y, windowWidth/2.5, windowWidth/2.5);
}

function draw() {

  
  clear();
  background(0);
  draw_screen();
  sequence[index].onended(next_vid);
  
  fill(0, 0, 0, fade);
  rect(0,0,1920,1080);
 
  if(index == 0){
    fade += fade_amount;
  }
  
  if(index == (sequence.length - 1)){
    fade_amount = 1;
    fade += fade_amount;
  }
}

function next_vid(){
  var current = sequence[index];
  sequence[index].stop();
  index++;
  screen_x = windowWidth/2 + random(400) - 800
  screen_y = random(100) + 50;
  
  if(index == (sequence.length - 1)){
    index = 0;
  }
  console.log(index);
  console.log(sequence.length);
  sequence[index].play();
}

function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

