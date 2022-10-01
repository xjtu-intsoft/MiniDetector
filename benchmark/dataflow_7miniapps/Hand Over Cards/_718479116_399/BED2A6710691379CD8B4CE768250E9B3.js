module.exports = Behavior({
    data: {},
    methods: {
        input: function(t) {
            var a = t.currentTarget.dataset.type, e = this.store.data.initData.formData.form;
            console.log("type", a), e.forEach(function(t) {
                2 == t[6] && (t[6] = 3);
            }), this.store.data.hasUpdateForm = !0, this.update();
        }
    }
});