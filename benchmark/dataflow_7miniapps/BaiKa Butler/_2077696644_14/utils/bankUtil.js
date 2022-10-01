function e(e) {
    return e ? -1 != e.indexOf("交通银行") ? 0 : -1 != e.indexOf("招商银行") ? 1 : -1 != e.indexOf("广发银行") ? 2 : -1 != e.indexOf("浦发银行") ? 3 : -1 != e.indexOf("光大银行") ? 4 : -1 != e.indexOf("建设银行") ? 5 : -1 != e.indexOf("中国银行") ? 6 : -1 != e.indexOf("平安银行") ? 7 : -1 != e.indexOf("工商银行") ? 8 : -1 != e.indexOf("兴业银行") ? 9 : -1 != e.indexOf("华夏银行") ? 10 : -1 != e.indexOf("民生银行") ? 11 : -1 != e.indexOf("中信银行") ? 12 : -1 != e.indexOf("农业银行") ? 13 : -1 != e.indexOf("花旗银行") ? 14 : -1 != e.indexOf("邮政储蓄") ? 15 : -1 != e.indexOf("浙商银行") ? 16 : -1 != e.indexOf("恒丰银行") ? 17 : -1 != e.indexOf("徽商银行") ? 18 : -1 != e.indexOf("上海农商") ? 19 : -1 != e.indexOf("上海银行") ? 20 : -1 != e.indexOf("北京银行") ? 21 : -1 != e.indexOf("云南农信") ? 22 : -1 != e.indexOf("海南农信") ? 23 : -1 != e.indexOf("广西农信") ? 24 : -1 != e.indexOf("福建农信") ? 25 : -1 != e.indexOf("安徽农信") ? 26 : -1 != e.indexOf("浙江农信") ? 27 : -1 != e.indexOf("江苏农信") ? 28 : -1 != e.indexOf("吉林农信") ? 29 : -1 != e.indexOf("东莞农商") ? 30 : -1 != e.indexOf("北京农商") ? 31 : -1 != e.indexOf("广州农商") ? 32 : -1 != e.indexOf("浙江民泰") ? 33 : -1 != e.indexOf("天津银行") ? 34 : -1 != e.indexOf("包商银行") ? 35 : -1 != e.indexOf("重庆银行") ? 36 : -1 != e.indexOf("广州银行") ? 37 : -1 != e.indexOf("昆仑银行") ? 38 : -1 != e.indexOf("厦门银行") ? 39 : -1 != e.indexOf("杭州银行") ? 40 : -1 != e.indexOf("南洋商业") ? 41 : -1 != e.indexOf("其它银行") ? 42 : -1 != e.indexOf("宁波通商") ? 43 : -1 != e.indexOf("宁夏银行") ? 44 : -1 != e.indexOf("江苏银行") ? 45 : -1 != e.indexOf("齐鲁银行") ? 46 : -1 != e.indexOf("南京银行") ? 47 : -1 != e.indexOf("渣打银行") ? 48 : -1 != e.indexOf("东亚银行") ? 49 : 42 : 42;
}

function n(n) {
    var i = [ 1, 2, 6, 8, 10, 12, 16, 18, 21, 22, 23, 26, 28, 30, 31, 33, 37, 38, 41, 44, 47, 49 ], d = [ 0, 3, 5, 9, 11, 14, 17, 19, 20, 27, 34, 39, 40, 43, 45, 46, 48 ], f = [ 42 ], x = [ 13, 15, 24, 25, 35, 36 ], O = e(n);
    return i.indexOf(O) > -1 ? 2 : d.indexOf(O) > -1 ? 3 : f.indexOf(O) > -1 ? 4 : x.indexOf(O) > -1 ? 5 : 1;
}

module.exports = {
    getBankIndex: e,
    getWithdrawBankBg: function(e) {
        var i = "../../images/bg_withdraw_item_type";
        switch (n(e)) {
          case 1:
            i += "a.png";
            break;

          case 2:
            i += "b.png";
            break;

          case 3:
            i += "c.png";
            break;

          case 4:
            i += "d.png";
            break;

          default:
            i += "e.png";
        }
        return i;
    },
    getChannelBankBG: function(e) {
        var i = "item-bank-bg-";
        switch (n(e)) {
          case 1:
            i += "a";
            break;

          case 2:
            i += "b";
            break;

          case 3:
            i += "c";
            break;

          case 4:
            i += "d";
            break;

          default:
            i += "e";
        }
        return i;
    },
    getUpdateCardBg: function(e) {
        var i = "../../images/bg_update_type";
        switch (n(e)) {
          case 1:
            i += "a";
            break;

          case 2:
            i += "b";
            break;

          case 3:
            i += "c";
            break;

          case 4:
            i += "d";
            break;

          default:
            i += "e";
        }
        return i + ".png";
    },
    getBankColorType: n
};