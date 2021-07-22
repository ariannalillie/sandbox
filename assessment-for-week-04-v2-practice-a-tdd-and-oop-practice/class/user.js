class User {
    constructor(username, month, day, year) {
        this.username = username;
        this.birthdate = new Date(year, month -1, day);
    }
    getAge() {
        
    }
}

module.exports = User;
