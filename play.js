const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.51',      
    port: 50541,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();