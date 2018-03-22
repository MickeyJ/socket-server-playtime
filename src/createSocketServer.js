import io from 'socket.io'


export default function(config){

  const {
    port = 4000,
    events = () => [],
  } = config;

  const socketServer = io(port);

  socketServer.on('connection', (socket) =>{
    const socketEvents = events(socket);
    Object.keys(socketEvents).forEach(eventKey => {
      socket.on(eventKey, socketEvents[eventKey])
    });
  });

  return socketServer;
}