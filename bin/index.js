"use strict";

var _socket = require("socket.io-client");

var _socket2 = _interopRequireDefault(_socket);

var _createSocketServer = require("./createSocketServer");

var _createSocketServer2 = _interopRequireDefault(_createSocketServer);

var _mySocket = require("./mySocket");

var _mySocket2 = _interopRequireDefault(_mySocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* socket server
* =-=-=-=-=-=-=-=*/

(0, _createSocketServer2.default)(_mySocket2.default);

/* client connection 1
* =-=-=-=-=-=-=-=-=-=-=*/

var client1 = (0, _socket2.default)('http://localhost:4000');

client1.on('message', function (data) {
  console.log('client1(message) -', data);
});

client1.emit('message', 'message from client 1');

/* client connection 2
* =-=-=-=-=-=-=-=-=-=-=*/

var client2 = (0, _socket2.default)('http://localhost:4000');

client2.on('message', function (data) {
  console.log('client2(message) -', data);
});

client2.emit('message', 'message from client 2');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsaWVudDEiLCJvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsImNsaWVudDIiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTs7O0FBR0E7O0FBSUE7OztBQUdBLElBQU1BLFVBQVUsc0JBQUcsdUJBQUgsQ0FBaEI7O0FBRUFBLFFBQVFDLEVBQVIsQ0FBVyxTQUFYLEVBQXNCLFVBQUNDLElBQUQsRUFBUztBQUM3QkMsVUFBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixJQUFsQztBQUNELENBRkQ7O0FBSUFGLFFBQVFLLElBQVIsQ0FBYSxTQUFiLEVBQXdCLHVCQUF4Qjs7QUFJQTs7O0FBR0EsSUFBTUMsVUFBVSxzQkFBRyx1QkFBSCxDQUFoQjs7QUFFQUEsUUFBUUwsRUFBUixDQUFXLFNBQVgsRUFBc0IsVUFBQ0MsSUFBRCxFQUFTO0FBQzdCQyxVQUFRQyxHQUFSLENBQVksb0JBQVosRUFBa0NGLElBQWxDO0FBQ0QsQ0FGRDs7QUFJQUksUUFBUUQsSUFBUixDQUFhLFNBQWIsRUFBd0IsdUJBQXhCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgY3JlYXRlU29ja2V0U2VydmVyIGZyb20gJy4vY3JlYXRlU29ja2V0U2VydmVyJ1xuaW1wb3J0IG15U29ja2V0IGZyb20gJy4vbXlTb2NrZXQnXG5cblxuLyogc29ja2V0IHNlcnZlclxuKiA9LT0tPS09LT0tPS09LT0qL1xuXG5jcmVhdGVTb2NrZXRTZXJ2ZXIobXlTb2NrZXQpO1xuXG5cblxuLyogY2xpZW50IGNvbm5lY3Rpb24gMVxuKiA9LT0tPS09LT0tPS09LT0tPS09LT0qL1xuXG5jb25zdCBjbGllbnQxID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcpO1xuXG5jbGllbnQxLm9uKCdtZXNzYWdlJywgKGRhdGEpID0+e1xuICBjb25zb2xlLmxvZygnY2xpZW50MShtZXNzYWdlKSAtJywgZGF0YSk7XG59KTtcblxuY2xpZW50MS5lbWl0KCdtZXNzYWdlJywgJ21lc3NhZ2UgZnJvbSBjbGllbnQgMScpO1xuXG5cblxuLyogY2xpZW50IGNvbm5lY3Rpb24gMlxuKiA9LT0tPS09LT0tPS09LT0tPS09LT0qL1xuXG5jb25zdCBjbGllbnQyID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcpO1xuXG5jbGllbnQyLm9uKCdtZXNzYWdlJywgKGRhdGEpID0+e1xuICBjb25zb2xlLmxvZygnY2xpZW50MihtZXNzYWdlKSAtJywgZGF0YSk7XG59KTtcblxuY2xpZW50Mi5lbWl0KCdtZXNzYWdlJywgJ21lc3NhZ2UgZnJvbSBjbGllbnQgMicpO1xuXG4iXX0=
