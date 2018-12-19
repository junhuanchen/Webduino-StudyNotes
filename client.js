
var webduino = require('webduino-js'),
board,
led;

board = new webduino.Arduino({
'transport': 'websocket',
'url': '192.168.43.238:8080'
});

board.on(webduino.BoardEvent.READY, function () {
led = new webduino.module.Led(board, board.getDigitalPin(25));
led.blink(1000);
});
