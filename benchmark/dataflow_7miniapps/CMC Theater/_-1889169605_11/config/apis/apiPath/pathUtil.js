module.exports = {
    getValue: function(o) {
        for (var e in o) o[e.toLowerCase()] = e.toLowerCase();
        return console.log("obj = ", o), o;
    }
};