var sys = require('sys'),
    fs = require('fs'),
    ometa = require(__dirname + '/index.js');

var parse = function(stringToParse, rule) {
  fs.readFile(__dirname + '/newLineGrammar.ometa', function(err, file) {
    if(err) console.log(err);
    ometa.createParser(file.toString(), function(err, parser) {
      if(err) {
        sys.puts(err.inner.toString());
      } else {
        parser.parse(stringToParse, rule, function(err, result) {
          if(err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      }
    });
  });
};


module.exports.parse = parse;
