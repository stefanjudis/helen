
var fs   = require( 'fs' );
var path = require( 'path' );

var Diff    = require( './lib/diff' );
var Promise = require( 'bluebird' );


/**
 * Constructor
 *
 * @param {String} har1 path to first har file
 * @param {String} har2 path to second har file
 */
var Helen = function( har1, har2 ) {
  this.har1 = har1;
  this.har2 = har2;

  // pass object to the differ
  // because it should be responsible
  // for objects
  this.diff = new Diff(
    JSON.parse(
      fs.readFileSync(
        this.har1,
        {
          encoding : 'utf8'
        }
      )
    ),
    JSON.parse(
      fs.readFileSync(
        this.har2,
        {
          encoding : 'utf8'
        }
      )
    )
  );
};


/**
 * Generate Repot
 *
 * @return {Promise} Promise
 */
Helen.prototype.generateReport = function() {
  return new Promise( function( resolve ) {
    var data = this.diff.getDiff();

    resolve( data );
  }.bind( this ) );
};


module.exports = Helen;
