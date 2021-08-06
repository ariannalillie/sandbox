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
    // getUser will not work if addUser is not set up correctly

    // if this user exists return the user
    if (this.users[userID]) return this.users[userID];
    // otherwise, return null
    return null;
  }

  follow(userID1, userID2) {
    // if either user 1 or 2 does not exist, return false
    if(!this.users[userID1] || !this.users[userID2]) return false;

    // add user 2 to user 1's followers set, so that user 1 is now
    // following user 2
    this.follows[userID1].add(userID2)
    return true;

  }

  getFollows(userID) {

    // returns a list of that user's follows
    return this.follows[userID]

  }

  getFollowers(userID) {

    // Fill this out

  }

  getRecommendedFollows(userID, degrees) {

    // Fill this out

  }

}

module.exports = SocialNetwork;
