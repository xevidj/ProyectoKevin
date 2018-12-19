import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';

let API_URL = 'http://104.248.237.254:3030';

if (window.location.hostname === '104.248.237.254:8081') {
  API_URL = 'http://104.248.237.254:8081:3030';
}

const socket = io(API_URL, {
  transports: ['websocket'],
});

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(auth({
    storage: window.localStorage,
  }));

export default feathersClient;
