import io from 'socket.io-client'
import createSocketServer from './createSocketServer'
import mySocket from './mySocket'


/* socket server
* =-=-=-=-=-=-=-=*/

createSocketServer(mySocket);



/* client connection 1
* =-=-=-=-=-=-=-=-=-=-=*/

const client1 = io('http://localhost:4000');

client1.on('message', (data) =>{
  console.log('client1(message) -', data);
});

client1.emit('message', 'message from client 1');



/* client connection 2
* =-=-=-=-=-=-=-=-=-=-=*/

const client2 = io('http://localhost:4000');

client2.on('message', (data) =>{
  console.log('client2(message) -', data);
});

client2.emit('message', 'message from client 2');

