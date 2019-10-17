module.exports = new function MathUtils () {
  /**
    * @method getRandomToPoint
    * @param point {Number}
    * @returns {Number}
    */
  this.getRandomToPoint = function (point) {
    return (typeof point === 'number') ?

    Math.floor(Math.random()*point) :
    new TypeError('Argument must be a number');
  }
}
