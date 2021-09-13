const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor(name, color, friend) {
        super(name, color);
        this.lifeGoals = [];
        this.friend = friend;
    }
    hasLifeGoals() {
        this.lifeGoals.forEach(lifeGoal => {
            console.log(`${this.name} likes to ${lifeGoal}`)
        })
    }
    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
}

module.exports = FriendlyDragon;
