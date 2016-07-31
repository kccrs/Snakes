const canvas = document.getElementById('snake-game');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');
const Food = require('./food');

var world = new World(canvas.width, canvas.height);

function renderWorld(context, world) {
  var snake = world.snake;
  context.clearRect(0, 0, world.width, world.height);
  context.fillRect(snake.x, snake.y, snake.width, snake.height);
  var food = world.food;
  context.fillRect(food.x, food.y, food.width, food.height);
}

requestAnimationFrame(function snakeLoop() {
  renderWorld(context, world);
  // world.tick();
  world.isSnakeEating();
  requestAnimationFrame(snakeLoop);
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
  if (event.keyCode === 38) { world.upArrow();}
  if (event.keyCode === 40) { world.downArrow();}
});
