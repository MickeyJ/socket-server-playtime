
export default {
  port: 4000,
  events(socket){
    return {

      ['message'](data){
        console.log('mySocket(message) - data', data);
        socket.broadcast.emit('message', 'got it, thanks');
      },

    }
  },
};