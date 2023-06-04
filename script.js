const { Events, Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let blocks;
let world, engine;
let mConstraint;
let slingshot;
let box_length = 40;

let dotImg;
let boxImg;
let bkgImg;

let render;

function preload() {
    dotImg = loadImage('images/block.png');
    boxImg = loadImage('images/base.png');
    bkgImg = loadImage('images/skyBackground.png');
  }

function setup() {
    const canvas = createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 20);
    box = new Box(width, 726, 84, 100);
    blocks = [];
    for (let i = 0; i < 3; i++) {
        blocks.push(new Box(300, 300 - i * box_length, box_length, box_length));
    }
    slingshot = new SlingShot(200, 200, 200, 200);
}

function keyPressed() {
    if (key == ' ') {
      setup()
    }
    if (key == 'Enter') {
      slingshot.fly();
      setTimeout(() => {
        new_block = new Block(140, 200, 85, 85);
        slingshot.attach(new_block.body);
        blockes.push(new_block)
      }, 1500);
    
      setTimeout(() => {
        setScore()
      }, 2000); 
    }
  }
  
  function setScore(){
    box_x = this.box.body.position.x;
    points = 0
    for (const bl of blockes) {
      bl_x = bl.body.position.x;
      for (let i = 10; i > 0; i--) {
        diff =  box_length/i
        if( bl_x > (box_x - diff) && bl_x < (box_x + diff) ) {
          points += 10 * i;
          break;
        }; 
      }
    };
    score.points = points
  }
  
  function draw() {
    background(bkgImg);
    Matter.Engine.update(engine);
  
    ground.show();
    box.show();
    score.show();
    slingshot.show();
    for (const b of blockes) {
      b.show();
    };
  }