// Your code here
class Dog {
	constructor(name) {
		this.name = name
	}
	static makeJet() {
		return new this('Jet');
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
