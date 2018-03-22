"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  port: 4000,
  events: function events(socket) {
    return (0, _defineProperty3.default)({}, 'message', function message(data) {
      console.log('mySocket(message) - data', data);
      socket.broadcast.emit('message', 'got it, thanks');
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15U29ja2V0LmpzIl0sIm5hbWVzIjpbInBvcnQiLCJldmVudHMiLCJzb2NrZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImJyb2FkY2FzdCIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFDZTtBQUNiQSxRQUFNLElBRE87QUFFYkMsUUFGYSxrQkFFTkMsTUFGTSxFQUVDO0FBQ1osNkNBRUcsU0FGSCxtQkFFY0MsSUFGZCxFQUVtQjtBQUNmQyxjQUFRQyxHQUFSLENBQVksMEJBQVosRUFBd0NGLElBQXhDO0FBQ0FELGFBQU9JLFNBQVAsQ0FBaUJDLElBQWpCLENBQXNCLFNBQXRCLEVBQWlDLGdCQUFqQztBQUNELEtBTEg7QUFRRDtBQVhZLEMiLCJmaWxlIjoibXlTb2NrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcG9ydDogNDAwMCxcbiAgZXZlbnRzKHNvY2tldCl7XG4gICAgcmV0dXJuIHtcblxuICAgICAgWydtZXNzYWdlJ10oZGF0YSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdteVNvY2tldChtZXNzYWdlKSAtIGRhdGEnLCBkYXRhKTtcbiAgICAgICAgc29ja2V0LmJyb2FkY2FzdC5lbWl0KCdtZXNzYWdlJywgJ2dvdCBpdCwgdGhhbmtzJyk7XG4gICAgICB9LFxuXG4gICAgfVxuICB9LFxufTsiXX0=
