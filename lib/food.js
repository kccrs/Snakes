function Food(x, y, width, height) {
  this.x = x || Math.round(Math.round(Math.random() * 380)/20) * 20;
  this.y = y || Math.round(Math.round(Math.random() * 280)/20) * 20;
  this.width = width || 20;
  this.height = height || 20;
}

module.exports = Food;
