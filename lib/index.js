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
setInterval(function() {
  world.tick();
}, 1000 / 5 );

// requestAnimationFrame(function gameLoop() {
//   renderWorld(context, world);
//   requestAnimationFrame(gameLoop);
// });

function loop() {
    requestAnimationFrame(loop);
    renderWorld(context, world);
}

loop();


document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { snake.moveRight();}
  if (event.keyCode === 37) { snake.moveLeft();}
  if (event.keyCode === 38) { snake.moveUp();}
  if (event.keyCode === 40) { snake.moveDown();}
});
