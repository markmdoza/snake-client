import { createConnection } from "net";
import { IP, PORT } from './constants';

// establishes a connection with the game server
const connect = function () {
  const conn = createConnection({
    host: IP,      
    port: PORT,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // Logs data once the data callback function is executed.
  conn.on('data', (data) => {
    console.log(data);
  });

  // Once a connection is established, log a message.
  conn.on('connect', () => {
    console.log('Successfully connected to game server,', ('Name: MLM'));
    //conn.write('Move: up'); <- This is a Move command.
  });

  return conn;
};

export default {
  net,
  connect
};