function toSpaceCase(e) {
    return clean(e).replace(/[\W_]+(.|$)/g, function(e, n) {
        return n ? " " + n : "";
    }).trim();
}

var clean = require("./../to-no-case/index.js");

module.exports = toSpaceCase;