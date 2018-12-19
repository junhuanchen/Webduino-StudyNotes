// Need to acquire 'webduino' in Node.js:
var webduino = require('webduino-js');

var board, led;

board = new webduino.Arduino({
  transport: 'serial',
  path: 'COM4',
  baudRate: '460800',
});

// or:
// board = new webduino.Arduino({
//   transport: require('webduino-serial-transport'),
//   path: 'COM5',
//   baudRate: '115200',
// });

board.on('ready', function() {
  led = new webduino.module.Led(board, board.getDigitalPin(18));
  led.blink();
});

// console.log(board);
