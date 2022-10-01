function toNoCase(e) {
    return hasSpace.test(e) ? e.toLowerCase() : hasSeparator.test(e) ? (unseparate(e) || e).toLowerCase() : hasCamel.test(e) ? uncamelize(e).toLowerCase() : e.toLowerCase();
}

function unseparate(e) {
    return e.replace(separatorSplitter, function(e, t) {
        return t ? " " + t : "";
    });
}

function uncamelize(e) {
    return e.replace(camelSplitter, function(e, t, a) {
        return t + " " + a.toLowerCase().split("").join(" ");
    });
}

module.exports = toNoCase;

var hasSpace = /\s/, hasSeparator = /(_|-|\.|:)/, hasCamel = /([a-z][A-Z]|[A-Z][a-z])/, separatorSplitter = /[\W_]+(.|$)/g, camelSplitter = /(.)([A-Z]+)/g;