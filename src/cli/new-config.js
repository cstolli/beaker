/**
 * @author Matthew Dahl [@sandersky](https://github.com/sandersky)
 * @copyright 2015 Cyan, Inc. All rights reserved
*/

'use strict';

var newConfig = require('../new-config');

/**
 * Process command line arguments and execute library code
 * @param {Argv} argv - the minimist argv command-line arguments
 * @returns {Number} 0 on success, > 0 on error
*/
module.exports = function (argv) {
    return newConfig.command(argv);
};
