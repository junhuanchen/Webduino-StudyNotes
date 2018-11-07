var webduino = require('webduino-js');

var board, led;

board = new webduino.WebArduino('device_id');

board.on('ready', function() {
  led = new webduino.module.Led(board, board.getDigitalPin(10));
  led.on();
});