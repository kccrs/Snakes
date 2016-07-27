const canvas = document.getElementById('snake-game');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');
const Food = require('./food');

var world = new World(canvas.width, canvas.height);
world.addSnake(new Snake(7, 12, 15, 15));

  var food = new Food(
    Math.floor(Math.random() * canvas.width), // x
    Math.floor(Math.random() * canvas.height), // y
    10, //width
    10 //height
  );
  world.addFood(food);

function renderWorld(context, world) {
  context.clearRect(0, 0, world.width, world.height);

  world.snakes.forEach(function(snake) {
    context.fillRect(snake.x, snake.y, snake.width, snake.height);
  });

  world.food.forEach(function(food) {
    context.fillRect(food.x, food.y, food.width, food.height);
  });
}

requestAnimationFrame(function snakeLoop() {
  renderWorld(context, world);
  requestAnimationFrame(snakeLoop);
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow();}
  if (event.keyCode === 37) { world.leftArrow();}
  if (event.keyCode === 38) { world.upArrow();}
  if (event.keyCode === 40) { world.downArrow();}
});
