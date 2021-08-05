// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // increments the userID each time a user is added
    this.currentID++;

    // the newest id # is going to belong to the new user that we
    // are trying to add
    const newUserID = this.currentID;

    // then if we look at the directions in a/A open
    // each user needs an integer ID and a name
    this.users[newUserID] = {id: newUserID, name: name};

    // then we will initialize a new set to track who the user follows
    this.follows[newUserID] = new Set()

    // lastly, we will return the value of addUser which is pour newUserID
    return newUserID;

  }

  getUser(userID) {

    // Fill this out

  }

  follow(userID1, userID2) {

    // Fill this out

  }

  getFollows(userID) {

    // Fill this out

  }

  getFollowers(userID) {

    // Fill this out

  }

  getRecommendedFollows(userID, degrees) {

    // Fill this out

  }

}

module.exports = SocialNetwork;
