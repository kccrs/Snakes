const canvas = document.getElementById('snake-game');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');
const Food = require('./food');

var world = new World(canvas.width, canvas.height);
var snake = world.snake;
var food = new Food(
  Math.round(Math.round(Math.random() * 380)/20) * 20,
  Math.round(Math.round(Math.random() * 280)/20) * 20,
  20,
  20
);

function renderWorld(context, world) {

  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle = "green";
  context.fillRect(snake.x, snake.y, snake.width, snake.height);
  context.fillStyle = "brown";
  context.fillRect(food.x, food.y, food.width, food.height);
}

function loop() {

  renderWorld(context, world);
  setTimeout(function() {
  }, 500 / 5);
  requestAnimationFrame(loop);
}
world.tick();
requestAnimationFrame(loop);

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
  if (event.keyCode === 38) { world.upArrow();}
  if (event.keyCode === 40) { world.downArrow();}
});
