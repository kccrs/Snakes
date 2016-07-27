const canvas = document.getElementById('snake-game');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');

var world = new World(canvas.width, canvas.height);
world.addSnake(new Snake(7, 12, 5, 5));

function renderWorld(context, world) {
  context.clearRect(0, 0, world.width, world.height);

  world.snakes.forEach(function(snake) {
    context.fillRect(snake.x, snake.y, snake.width, snake.height);
  });
}

requestAnimationFrame(function snakeLoop() {
  renderWorld(context, world);
  requestAnimationFrame(snakeLoop);
});
