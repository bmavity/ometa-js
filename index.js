var ometa = require('./ometa-node'); 

var createParser = function(grammar, parserCallback) {
  var parser;
  try {
    parserCallback(null, createParserSync(grammar));
  }
  catch(err) {
    parserCallback({
      inner: err
    });
  }
};

var createParserSync = function(grammar) {
  var parser = ometa(grammar);
  return {
    parse: function(code, rule, callback) {
      callback(null, parser(code, rule));
    },
    parseSync: function(code, rule) {
      parser(code, rule);
    }
  }
}

module.exports.createParser = createParser;
module.exports.createParserSync = createParserSync;
