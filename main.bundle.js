/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const canvas = document.getElementById('snake-game');
	const context = canvas.getContext('2d');

	const Snake = __webpack_require__(1);
	const World = __webpack_require__(2);
	const Food = __webpack_require__(3);

	var world = new World(canvas.width, canvas.height);
	var snake = world.snake;
	var food = world.food;

	function drawSnake() {
	  context.fillStyle = "green";
	  snake.snakeBodySections.forEach(function (snake) {
	    context.fillRect(snake.x, snake.y, snake.width, snake.height);
	  });
	}

	function renderWorld(context, world) {

	  context.clearRect(0, 0, world.width, world.height);

	  context.fillStyle = "brown";
	  context.fillRect(food.x, food.y, food.width, food.height);
	  drawSnake();
	}
	setInterval(function () {
	  // Call tick once every second
	  world.tick();
	  drawSnake();
	}, 400);

	function loop() {
	  renderWorld(context, world);
	  requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);

	document.addEventListener('keydown', function (event) {
	  if (event.keyCode === 39 && snake.direction !== 'left') {
	    world.rightArrow();
	  }
	  if (event.keyCode === 37 && snake.direction !== 'right') {
	    world.leftArrow();
	  }
	  if (event.keyCode === 38 && snake.direction !== 'down') {
	    world.upArrow();
	  }
	  if (event.keyCode === 40 && snake.direction !== 'up') {
	    world.downArrow();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// const Food = require('../lib/food');
	// const World = require('../lib/world');

	function Snake(x, y, width = 20, height = 20, direction, world) {
	  this.x = x || 0;
	  this.y = y || 0;
	  this.snakeBodyWidth = width;
	  this.snakeBodyHeight = height;
	  this.snakeBodySections = [];
	  this.direction = direction;
	  this.addSegment(x, y, width, height);
	}

	Snake.prototype.snakeHead = function () {
	  return this.snakeBodySections[0];
	};

	Snake.prototype.snakeButt = function () {
	  return this.snakeBodySections[this.snakeBodySections.length - 1];
	};

	Snake.prototype.addSegment = function (x, y, snakeBodyWidth, snakeBodyHeight) {

	  var snakeBody = {
	    x: x,
	    y: y,
	    width: this.snakeBodyWidth,
	    height: this.snakeBodyHeight
	  };

	  this.snakeBodySections.push(snakeBody);
	  for (var i = 1; i < this.snakeBodySections.length; i++) {
	    if (this.snakeBodySections[i].next === null) {
	      this.snakeBodySections[i].next = snakeBody;
	      break;
	    }
	  }
	};

	Snake.prototype.grow = function () {

	  var snakeButt = this.snakeButt();

	  if (this.direction === 'up') {
	    this.addSegment(snakeButt.x, snakeButt.y + 20 + this.snakeBodyHeight);
	  }
	  if (this.direction === 'down') {
	    this.addSegment(snakeButt.x, snakeButt.y + 20 - this.snakeBodyHeight);
	  }
	  if (this.direction === 'left') {
	    this.addSegment(snakeButt.x + this.snakeBodyWidth, snakeButt.y);
	  }
	  if (this.direction === 'right') {
	    this.addSegment(snakeButt.x - this.snakeBodyWidth, snakeButt.y);
	  }
	};

	Snake.prototype.moveSegments = function (offsetX, offsetY) {
	  var previousX, previousY;

	  var snakeHead = this.snakeHead();

	  previousX = snakeHead.x;
	  previousY = snakeHead.y;

	  snakeHead.x = snakeHead.x + offsetX;
	  snakeHead.y = snakeHead.y + offsetY;

	  for (var i = 1; i < this.snakeBodySections.length; i++) {
	    var current = this.snakeBodySections[i];

	    var x = current.x;
	    var y = current.y;

	    current.x = previousX;
	    current.y = previousY;

	    previousX = x;
	    previousY = y;
	  }
	};

	// THIS CONTROLS HOW FAST THE SNAKE IS MOVING WHEN THE ARROWS ARE PRESSED
	Snake.prototype.moveRight = function () {
	  this.x += 20;
	  this.direction = 'right';
	  this.moveSegments(20, 0);
	  if (this.x >= 600) {
	    return this.x = 580;
	  }
	};

	Snake.prototype.moveLeft = function () {
	  this.x -= 20;
	  this.direction = 'left';
	  this.moveSegments(-20, 0);
	  if (this.x === -20) {
	    return this.x = 0;
	  }
	};

	Snake.prototype.moveDown = function () {
	  this.y += 20;
	  this.direction = 'down';
	  this.moveSegments(0, 20);
	  if (this.y === 400) {
	    return this.y = 380;
	  }
	};

	Snake.prototype.moveUp = function () {
	  this.y -= 20;
	  this.direction = 'up';
	  this.moveSegments(0, -20);
	  if (this.y === -20) {
	    return this.y = 0;
	  }
	};

	Snake.prototype.selfCollision = function (x, y, snakeBodySections) {
	  for (var i = 1; i < this.snakeBodySections.length; i++) {
	    if (this.snakeBodySections[i].x === this.snakeBodySections[0].x && this.snakeBodySections[i].y === this.snakeBodySections[0].y) return true;
	  }
	  return false;
	};

	module.exports = Snake;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Snake = __webpack_require__(1);
	const Food = __webpack_require__(3);

	function World(width, height, food) {
	  this.width = 600;
	  this.height = 400;
	  this.snake = new Snake(0, 0, 20, 20);
	  this.food = new Food();
	}

	// GENERATE FOOD IN DIFFERENT POSITION
	World.prototype.generateFood = function () {
	  this.food.x = Math.round(Math.round(Math.random() * 580) / 20) * 20;
	  this.food.y = Math.round(Math.round(Math.random() * 380) / 20) * 20;

	  if (this.food.x === this.snake.addSegment.x && this.food.y === this.snake.addSegment.y) {
	    var x = this.food.x = this.food.x;
	    var y = this.food.y = this.food.y;
	    return x, y;
	  }
	};

	// CHECKING WHAT IS IN FRONT OF SNAKE
	// RIGHT
	World.prototype.rightOfSnake = function () {
	  if (this.snake.x + 20 === this.food.x && this.snake.y === this.food.y) {
	    return 'food';
	  } else if (this.snake.x + 20 === 600) {
	    return 'wall';
	  } else if (this.snake.selfCollision()) {
	    return 'self';
	  } else {
	    return 'empty';
	  }
	};

	World.prototype.rightArrow = function () {
	  switch (this.rightOfSnake()) {
	    case 'food':
	      this.snake.moveRight();
	      this.snake.grow();
	      this.generateFood();
	      break;
	    case 'wall':
	      this.endGame();
	      break;
	    case 'self':
	      this.endGame();
	      break;
	    default:
	      this.snake.moveRight();
	  }
	};

	// LEFT
	World.prototype.leftOfSnake = function () {
	  if (this.snake.x - 20 === this.food.x && this.snake.y === this.food.y) {
	    return 'food';
	  } else if (this.snake.x === 0) {
	    return 'wall';
	  } else if (this.snake.selfCollision()) {
	    return 'self';
	  } else {
	    return 'empty';
	  }
	};

	World.prototype.leftArrow = function () {
	  switch (this.leftOfSnake()) {
	    case 'food':
	      this.snake.moveLeft();
	      // snake grows longer
	      this.snake.grow();
	      this.generateFood();
	      break;
	    case 'wall':
	      this.endGame();
	      break;
	    case 'self':
	      this.endGame();
	      break;
	    default:
	      this.snake.moveLeft();
	  }
	};

	// UP
	World.prototype.upOfSnake = function () {
	  if (this.snake.y - 20 === this.food.y && this.snake.x === this.food.x) {
	    return 'food';
	  } else if (this.snake.y === 0) {
	    return 'wall';
	  } else if (this.snake.selfCollision()) {
	    return 'self';
	  } else {
	    return 'empty';
	  }
	};

	World.prototype.upArrow = function () {
	  switch (this.upOfSnake()) {
	    case 'food':
	      this.snake.moveUp();
	      this.snake.grow();
	      this.generateFood();
	      break;
	    case 'wall':
	      this.endGame();
	      break;
	    case 'self':
	      this.endGame();
	      break;
	    default:
	      this.snake.moveUp();
	  }
	};

	// DOWN
	World.prototype.downOfSnake = function () {
	  if (this.snake.y + 20 === this.food.y && this.snake.x === this.food.x) {
	    return 'food';
	  } else if (this.snake.y + 20 === 400) {
	    return 'wall';
	  } else if (this.snake.selfCollision()) {
	    return 'self';
	  } else {
	    return 'empty';
	  }
	};

	World.prototype.downArrow = function () {
	  switch (this.downOfSnake()) {
	    case 'food':
	      this.snake.moveDown();
	      this.snake.grow();
	      this.generateFood();
	      break;
	    case 'wall':
	      this.endGame();
	      break;
	    case 'self':
	      this.endGame();
	      break;
	    default:
	      this.snake.moveDown();
	  }
	};

	//GAME OVER
	World.prototype.endGame = function () {
	  alert('😱Oh no, Game Over!!');
	  window.location.reload();
	};

	World.prototype.tick = function () {
	  var direction = this.snake.direction;
	  if (direction === 'right') {
	    this.rightArrow();
	  }
	  if (direction === 'left') {
	    this.leftArrow();
	  }
	  if (direction === 'up') {
	    this.upArrow();
	  }
	  if (direction === 'down') {
	    this.downArrow();
	  }
	};

	module.exports = World;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Food(x, y, width, height) {
	  this.x = x || Math.round(Math.round(Math.random() * 580) / 20) * 20;
	  this.y = y || Math.round(Math.round(Math.random() * 380) / 20) * 20;
	  this.width = width || 20;
	  this.height = height || 20;
	}

	module.exports = Food;

/***/ }
/******/ ]);