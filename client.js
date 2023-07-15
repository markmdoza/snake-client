const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
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
  });

  return conn;
};

module.exports = {
  net,
  connect
};