const delegate = require('delegates');

const proto = module.exports = {};

delegate(proto, 'request')
  .access('headers')

delegate(proto, 'response')
  .access('body')
