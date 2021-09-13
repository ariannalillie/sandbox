// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...dragons) {
    let dragonNameArr = [];
    dragons.forEach(dragon => {
      dragonNameArr.push(dragon.name)
    })
    return dragonNameArr;
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
