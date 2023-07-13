// Create a new file called input.js [x]
// Move handleUserInput and setupInput into the file. [x]
// Export setupInput [x]
// WASD Movement
// In the input module, create a variable in the outer-most scope called connection, which can default to undefined. [x]
// Update play.js to pass the object returned from connect into the setupInput function. []

// Stores the active TCP connection object,
let connection;

const setupInput = (conn) => { // We changed setupInput to accept an object that lets us interact with the server. The connect() function you wrote earlier returns just such an object.
  connection = conn;

  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  
  stdin.setEncoding("utf8");
  
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  
  return stdin;
};

// Create a function to handle user input
const handleUserInput = function (key) {
  if (key === '\u0003') {
  process.exit();
} else if (key === 'w') {
  connection.write('Move: up\n');
} else if (key === 'a') {
  connection.write('Move: left\n');
} else if (key === 's') {
  connection.write('Move: down\n');
} else if (key === 'd') {
  connection.write('Move: right\n');
}
  };

  module.exports = {
    setupInput,
    connection
  };