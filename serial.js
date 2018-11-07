// Need to acquire 'webduino' in Node.js:
// var webduino = require('webduino-js');

var board, led;

board = new webduino.Arduino({
  transport: 'serial',
  path: '/dev/cu.usbmodem1421'
});

// or:
// board = new webduino.Arduino({
//   transport: require('webduino-serial-transport'),
//   path: '/dev/cu.usbmodem1421'
// });

board.on('ready', function() {
  led = new webduino.module.Led(board, board.getDigitalPin(10));
  led.on();
});