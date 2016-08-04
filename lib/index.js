const canvas = document.getElementById('snake-game');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');
const Food = require('./food');

var world = new World(canvas.width, canvas.height);
var snake = world.snake;
var food = world.food;

function drawSnake () {
  context.fillStyle = 'green';
  snake.snakeBodySections.forEach(function(snake) {
    context.fillRect(snake.x, snake.y, snake.width, snake.height);
  });
}

function renderWorld(context, world) {

  context.clearRect(0, 0, world.width, world.height);

  context.fillStyle = 'brown';
  context.fillRect(food.x, food.y, food.width, food.height);
  drawSnake();
}
setInterval(function () { // Call tick once every second
  world.tick();
  drawSnake();
}, 400);

function loop() {
  renderWorld(context, world);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39 && snake.direction !== 'left') { world.rightArrow();}
  if (event.keyCode === 37 && snake.direction !== 'right') { world.leftArrow();}
  if (event.keyCode === 38 && snake.direction !== 'down') { world.upArrow();}
  if (event.keyCode === 40 && snake.direction !== 'up') { world.downArrow();}
});
