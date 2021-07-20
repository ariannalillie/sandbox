class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in

    }

    dropItem(itemName) {

        // Fill this in
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {
        // iterate through items array and find item.name that matches name
        for (let i = 0; i > this.items.length; i++) {
            let item = this.items[i]
            if (item.name === name) {
                // use splice to completely remove item from inventory
                // The splice is returning an array and we are accessing the first element in that array
                this.items.splice(i, 1)[0]
            }
        }
    }
}

module.exports = {
  Player,
};
