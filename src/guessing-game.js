class GuessingGame {
  constructor() {}
  minNum;
  maxNum;
  gNumber;

  setRange(min, max) {
    this.minNum = min;
    this.maxNum = max;
  }

  guess() {
    this.gNumber = Math.ceil(this.minNum + (this.maxNum - this.minNum) / 2);
    return this.gNumber;
  }

  lower() {
    return (this.maxNum = this.gNumber);
  }

  greater() {
    return (this.minNum = this.gNumber);
  }
}

module.exports = GuessingGame;
