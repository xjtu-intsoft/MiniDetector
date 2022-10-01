require("../../../@babel/runtime/helpers/Arrayincludes");

var e = getApp();

Component({
    properties: {
        matchData: {
            type: Object,
            value: {},
            obersver: function(e, t) {
                console.log(e);
            }
        }
    },
    data: {},
    methods: {
        _selectCompany: function(t) {
            var r = getCurrentPages()[getCurrentPages().length - 1].route;
            r.includes("cardFormBuild/cardFormBuild") ? e.burying.setPoint(e, 565) : r.includes("formEditMinimalist/formEditMinimalist") && e.burying.setPoint(e, 575);
            var i = t.currentTarget.dataset.matchitem;
            console.log("company", i), this.triggerEvent("selectCompany", i);
        }
    }
});