var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.creat(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

foragerbee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};
