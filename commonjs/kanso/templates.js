/*global dust: true */

/**
 * CAUTION WHEN EDITING THIS FILE!
 *
 * The rest of this  module is automatically generated by kanso when the app
 * is pushed to the database.
 *
 * This is to work around the fact that dust templates store state
 * on the module itself but couchdb doesn't yet provide a module cache,
 * meaning state does not persist between each require(). The workaround
 * involves writing all templates directly into the module, so they are added on
 * each require.
 *
 * TODO: When a module cache is implemented in CouchDB, stop this module from
 * being auto-generated, see: https://issues.apache.org/jira/browse/COUCHDB-890
 *
 * For the code that generates the rest of this file, see: lib/templates.js
 */


/**
 * Module dependencies
 */

var utils = require('./utils');


/**
 * Synchronously render dust template and return result, automatically adding
 * baseURL to the template's context. The request object is required so we
 * can determine the value of baseURL.
 *
 * @param {String} name
 * @param {Object} req
 * @param {Object} context
 * @return {String}
 * @api public
 */

// TODO: add unit tests for this function
exports.render = function (name, req, context) {
    context.baseURL = utils.getBaseURL(req);
    var r = '';
    dust.render(name, context, function (err, result) {
        if (err) {
            throw err;
        }
        r = result;
    });
    return r;
};


/**
 * Exports the names of all templates loaded into the dust cache
 */

exports.loaded = [];
for (var k in dust.cache) {
    if (dust.cache.hasOwnProperty(k)) {
        exports.loaded.push(k);
    }
}
