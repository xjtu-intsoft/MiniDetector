function toCamelCase(e) {
    return space(e).replace(/\s(\w)/g, function(e, a) {
        return a.toUpperCase();
    });
}

var space = require("./../to-space-case/index.js");

module.exports = toCamelCase;