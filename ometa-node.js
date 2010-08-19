var lib = require("./lib");
require("./ometa-base")
require("./parser")
require("./bs-js-compiler")
require("./bs-ometa-compiler")
require("./bs-ometa-optimizer")
require("./bs-ometa-js-compiler")

var translateCode = function(s) {
  var translationError = function(m, i) { alert("Translation error - please tell Alex about this!"); throw fail },
      tree             = BSOMetaJSParser.matchAll(s, "topLevel", undefined, function(m, i) { throw fail.delegated({errorPos: i}) })
  return BSOMetaJSTranslator.match(tree, "trans", undefined, translationError)
}

var parse = function(s) {
  var parser = eval(translateCode(s));
  return function(scssFile) {
    return eval(parser.matchAll(scssFile, 'scssFile'));
  };
};


module.exports = parse;
