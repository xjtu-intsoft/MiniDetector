var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../4F4638B00691379C292050B78222E9B3.js")), a = getApp();

(0, e.default)({
    data: {
        defaultLogo: "https://img-1255379270.file.myqcloud.com/img/defaultlogo.jpg",
        defCard: null,
        cancelBusinessBind: null
    },
    methods: {
        toBuildHomePage: function() {
            a.burying.setPoint(a, 230), this.store.data.hasUpdateForm = !0, this.update(), wx.navigateTo({
                url: "../buildHomePage/buildHomePage?id=" + this.store.data.defCard.id + "&detail=add&main=cardMain"
            });
        },
        toLookHomePageEdit: function() {
            var e = 3 == this.store.data.defCard.cardType ? "look" : "lookSelf";
            wx.navigateTo({
                url: "../homePage/homePage?id=" + this.store.data.defCard.id + "&detail=cardMain&st=" + e
            });
        },
        cancelBusiness: function(e) {
            this.store.data.cancelBusinessBind = !0, this.store.data.hasUpdateForm = !0, this.update();
        }
    }
});