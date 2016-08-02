const canvas = document.getElementById('snake-game');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');
const Food = require('./food');

var world = new World(canvas.width, canvas.height);
var snake = world.snake;
var food = world.food;

function drawSnake () {
  context.fillStyle = "green";
  snake.segments.forEach(function(snake) {
    context.fillRect(snake.x, snake.y, snake.width, snake.height);
  // world.totalSnake.forEach(function(snake) {
  //   context.fillRect(snake.x, snake.y, snake.width, snake.height);
  });
}

function renderWorld(context, world) {

  context.clearRect(0, 0, world.width, world.height);

  context.fillStyle = "brown";
  context.fillRect(food.x, food.y, food.width, food.height);
  drawSnake();
}
setInterval(function () { // Call tick once every second
  world.tick();
  drawSnake();
}, 500);

function loop() {
  renderWorld(context, world);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
  if (event.keyCode === 38) { world.upArrow();}
  if (event.keyCode === 40) { world.downArrow();}
});
