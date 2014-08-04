
var Promise = require( 'bluebird' );


/**
 * Constructor
 * @param {Object} har1 already parsed har file data
 * @param {Object} har2 already parsed har file data
 */
var Diff = function( har1, har2 ) {
  this.har1 = har1;
  this.har2 = har2;
};


/**
 * get diff
 *
 * @return {Object} diff object full of nice data
 */
Diff.prototype.getDiff = function() {
  var diff = {};

  this._getPageTimingDiff( diff );

  return diff;
};


/**
 * Get comparison of 'log.pages'
 *
 * @param  {Object} diff already diffed information
 * @return {Object}      modified object enriched with
 *                                log.pages data
 */
Diff.prototype._getPageTimingDiff = function( diff ) {
  diff.onContentLoad = {
    diff   : this.har1.log.pages[ 0 ].pageTimings.onContentLoad - this.har2.log.pages[ 0 ].pageTimings.onContentLoad,
    values : [
      this.har1.log.pages[ 0 ].pageTimings.onContentLoad,
      this.har2.log.pages[ 0 ].pageTimings.onContentLoad
    ],
  }

  diff.onLoad = {
    diff   : this.har1.log.pages[ 0 ].pageTimings.onLoad - this.har2.log.pages[ 0 ].pageTimings.onLoad,
    values : [
      this.har1.log.pages[ 0 ].pageTimings.onLoad,
      this.har2.log.pages[ 0 ].pageTimings.onLoad
    ],
  }
};

module.exports = Diff;
