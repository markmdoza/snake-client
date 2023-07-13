const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.51',      
    port: 50541,
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

// console.log("Connecting ...");
// connect();

module.exports = {
  net,
  connect
};