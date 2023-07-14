const { connect } = require('./client').default;
const { setupInput } = require('./input');

console.log('Connecting ... ');

const connection = connect();

setupInput(connection);