"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (config) {
  var _config$port = config.port,
      port = _config$port === undefined ? 4000 : _config$port,
      _config$events = config.events,
      events = _config$events === undefined ? function () {
    return [];
  } : _config$events;


  var socketServer = (0, _socket2.default)(port);

  socketServer.on('connection', function (socket) {
    var socketEvents = events(socket);
    (0, _keys2.default)(socketEvents).forEach(function (eventKey) {
      socket.on(eventKey, socketEvents[eventKey]);
    });
  });

  return socketServer;
};

var _socket = require("socket.io");

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZVNvY2tldFNlcnZlci5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwb3J0IiwiZXZlbnRzIiwic29ja2V0U2VydmVyIiwib24iLCJzb2NrZXQiLCJzb2NrZXRFdmVudHMiLCJmb3JFYWNoIiwiZXZlbnRLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBR2UsVUFBU0EsTUFBVCxFQUFnQjtBQUFBLHFCQUt6QkEsTUFMeUIsQ0FHM0JDLElBSDJCO0FBQUEsTUFHM0JBLElBSDJCLGdDQUdwQixJQUhvQjtBQUFBLHVCQUt6QkQsTUFMeUIsQ0FJM0JFLE1BSjJCO0FBQUEsTUFJM0JBLE1BSjJCLGtDQUlsQjtBQUFBLFdBQU0sRUFBTjtBQUFBLEdBSmtCOzs7QUFPN0IsTUFBTUMsZUFBZSxzQkFBR0YsSUFBSCxDQUFyQjs7QUFFQUUsZUFBYUMsRUFBYixDQUFnQixZQUFoQixFQUE4QixVQUFDQyxNQUFELEVBQVc7QUFDdkMsUUFBTUMsZUFBZUosT0FBT0csTUFBUCxDQUFyQjtBQUNBLHdCQUFZQyxZQUFaLEVBQTBCQyxPQUExQixDQUFrQyxvQkFBWTtBQUM1Q0YsYUFBT0QsRUFBUCxDQUFVSSxRQUFWLEVBQW9CRixhQUFhRSxRQUFiLENBQXBCO0FBQ0QsS0FGRDtBQUdELEdBTEQ7O0FBT0EsU0FBT0wsWUFBUDtBQUNELEM7O0FBcEJEIiwiZmlsZSI6ImNyZWF0ZVNvY2tldFNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8nXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uZmlnKXtcblxuICBjb25zdCB7XG4gICAgcG9ydCA9IDQwMDAsXG4gICAgZXZlbnRzID0gKCkgPT4gW10sXG4gIH0gPSBjb25maWc7XG5cbiAgY29uc3Qgc29ja2V0U2VydmVyID0gaW8ocG9ydCk7XG5cbiAgc29ja2V0U2VydmVyLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldCkgPT57XG4gICAgY29uc3Qgc29ja2V0RXZlbnRzID0gZXZlbnRzKHNvY2tldCk7XG4gICAgT2JqZWN0LmtleXMoc29ja2V0RXZlbnRzKS5mb3JFYWNoKGV2ZW50S2V5ID0+IHtcbiAgICAgIHNvY2tldC5vbihldmVudEtleSwgc29ja2V0RXZlbnRzW2V2ZW50S2V5XSlcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNvY2tldFNlcnZlcjtcbn0iXX0=
