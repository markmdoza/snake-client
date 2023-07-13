const setupInput = function () {
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
}
  };

  // Call setupInput and pass the handleUserInput function as an argument.
  // setupInput(handleUserInput);

  module.exports = {
    setupInput
  };