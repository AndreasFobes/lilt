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
// preload the video files and store them in vid_paths
  vid_paths_init = [createVideo('assets/big_seed.mp4'), 
                createVideo('assets/bloom.mp4'), 
                createVideo('assets/blow.mp4'), 
                createVideo('assets/patch.mp4'), 
                createVideo('assets/puff.mp4'),
                createVideo('assets/rotate.mp4'),
                createVideo('assets/saw.mp4'),
                createVideo('assets/spin.mp4'),
                createVideo('assets/web.mp4'),
                createVideo('assets/allergy.mp4'),
                createVideo('assets/tangle.mp4'),
                createVideo('assets/trample.mp4'),
                createVideo('assets/fleur.mp4'),
                createVideo('assets/blinker.mp4'),
                createVideo('assets/spout.mp4'),
              ];
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

function setup() {
  for (i = 0; i < vid_paths_init.length; i++) {
        vid_paths_init[i].hide();
  }
  createCanvas(windowWidth,windowHeight);
  sequence = vid_paths_init;
  shuffle(sequence, true);
  vid = 
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

function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
