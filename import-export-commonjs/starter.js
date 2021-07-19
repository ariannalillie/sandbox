// 2091 Short (15-20 minute) Pair programming exercise covering importing and
// exporting using common JS.

// Write Common JS import and export statements for every file that are required
// to allow them all to run without errors.
// Call node starter.js to test if you have completed this exercise successfully.
const giveMessageToMrsPotato = require('./giveMessageToMrsPotato');

// directions do not say to import sayHelloTo, but project will
// not work without this
const sayHelloTo = require('./sayHelloTo')
const messages = require('./messages');
const msg1 = messages.message1;
const msg2 = messages.message2;
const msg3 = messages.message3;

sayHelloTo("Mr. Potato")
giveMessageToMrsPotato(msg1)
giveMessageToMrsPotato(msg2)
giveMessageToMrsPotato(msg3)
