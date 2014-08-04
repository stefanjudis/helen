var debug = require( 'debug' );
var log   = debug( 'helen:log' );

var error = debug( 'helen:error' );
error.log = console.error.bind( console );

module.exports = {
  log   : log,
  error : error
};
