var e = require("./mta_analysis.js"), i = {
    subscribePageView: {
        user_id: 0
    },
    subscribePageLeave: {
        user_id: 0,
        duration: 0
    },
    subscribeRedirect: {
        user_id: 0,
        ssi_id: 0,
        redirect_type: 0,
        redirect_id: 0
    },
    subscribeSub: {
        user_id: 0,
        ssi_id: 0,
        object_type: 0,
        object_id: 0
    },
    myPageView: {
        user_id: 0
    },
    myPageLeave: {
        user_id: 0,
        duration: 0
    },
    customerService: {
        user_id: 0
    },
    valuableBook: {
        user_id: 0
    },
    toutiaoPageView: {
        user_id: 0
    },
    toutiaoPageLeave: {
        user_id: 0,
        duration: 0
    },
    toutiaoVideoView: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0,
        duration: 0
    },
    newsHrefShow: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    newsHrefReturn: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0,
        duration: 0
    },
    baike_detail: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0
    },
    baikePageView: {
        user_id: 0,
        bk_id: 0
    },
    baikePageViewPic: {
        user_id: 0,
        bk_id: 0,
        bkm_id: 0,
        bkp_id: 0
    },
    baikePageViewMore: {
        user_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    baikePageShare: {
        user_id: 0,
        bk_id: 0
    },
    baikePageFriends: {
        user_id: 0,
        bk_id: 0
    },
    baikePageLeave: {
        user_id: 0,
        bk_id: 0,
        duration: 0
    },
    baikeMorePageView: {
        user_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    baikeMorePageViewPic: {
        user_id: 0,
        bk_id: 0,
        bkm_id: 0,
        bkp_id: 0,
        resource_id: 0
    },
    baikeMorePageShare: {
        user_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    baikeMorePageFriends: {
        user_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    baikeMorePageReturn: {
        user_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    baikeMorePageToMain: {
        user_id: 0
    },
    baikePageReturn: {
        user_id: 0,
        bk_id: 0
    },
    baikePageToMain: {
        user_id: 0
    },
    toutiaoBaikeShare: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0
    },
    toutiaoBaikeFriends: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0
    },
    toutiaoNewsTag: {
        user_id: 0,
        gifnews_id: 0,
        tag_id: 0,
        tag_subject_id: 0
    },
    toutiaoNewsAll: {
        user_id: 0,
        headline_id: 0
    },
    toutiaoViewSubject: {
        user_id: 0,
        show_type: 0,
        subject_id: 0,
        subject_type: 0
    },
    toutiaoSubjectShare: {
        user_id: 0,
        show_type: 0,
        subject_id: 0,
        subject_type: 0
    },
    toutiaoSubjectFriends: {
        user_id: 0,
        show_type: 0,
        subject_id: 0,
        subject_type: 0
    },
    toutiaoSubjectTag: {
        user_id: 0,
        show_type: 0,
        subject_id: 0,
        subject_type: 0,
        tag_id: 0,
        tag_subject_id: 0
    },
    toutiaoSubscribe: {
        user_id: 0,
        object_type: 0,
        object_id: 0
    },
    subjectDetailView: {
        user_id: 0,
        subject_id: 0,
        subject_type: 0,
        show_type: 0
    },
    subjectDetailViewPic: {
        user_id: 0,
        subject_id: 0,
        sg_id: 0,
        sp_id: 0,
        resource_id: 0
    },
    subjectDetailShare: {
        user_id: 0,
        subject_id: 0,
        sg_id: 0
    },
    subjectDetailFriends: {
        user_id: 0,
        subject_id: 0,
        sg_id: 0
    },
    subjectDetailReturn: {
        user_id: 0,
        subject_id: 0,
        subject_type: 0
    },
    subjectDetailToMain: {
        user_id: 0,
        subject_id: 0,
        subject_type: 0
    },
    subjectDetailSubscribe: {
        user_id: 0,
        object_type: 0,
        object_id: 0,
        tag_id: 0,
        tag_subject_id: 0
    },
    baikePreviewPic: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0,
        bkp_id: 0,
        resource_id: 0
    },
    baikePreViewPicDownload: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0,
        bkp_id: 0
    },
    baikePreViewShare: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0,
        bkp_id: 0
    },
    baikePreViewFriends: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0,
        bkp_id: 0
    },
    baikePreViewRecommend: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0,
        rec_id: 0
    },
    subjectDetailPreviewPic: {
        user_id: 0,
        subject_id: 0,
        sg_id: 0,
        sp_id: 0,
        resource_id: 0
    },
    subjectDetailPreViewPicDownload: {
        user_id: 0,
        subject_id: 0,
        sg_id: 0,
        sp_id: 0
    },
    subjectDetailPreViewShare: {
        user_id: 0,
        subject_id: 0,
        sg_id: 0,
        sp_id: 0
    },
    subjectDetailPreViewFriends: {
        user_id: 0,
        subject_id: 0,
        sg_id: 0,
        sp_id: 0
    },
    subjectDetailPreViewRecommend: {
        user_id: 0,
        subject_id: 0,
        rec_id: 0
    },
    authorize: {},
    authPageView: {},
    subjectTag: {
        user_id: 0,
        tag_name: "",
        subject_id: 0
    },
    myWorksPicView: {
        user_id: 0,
        resource_url: ""
    },
    imageDetailToMain: {
        user_id: 0
    },
    searchPageAction: {
        text: ""
    },
    searchResultPageView: {
        text: ""
    },
    searchResultPageLeave: {
        text: "",
        duration: 0
    },
    searchResultPageShare: {
        ip_name: "",
        ip_id: ""
    },
    ipDetailPageView: {
        ip_name: "",
        ip_id: ""
    },
    ipDetailPageLeave: {
        ip_name: "",
        ip_id: "",
        duration: 0
    },
    ipDetailPageShare: {
        ip_name: "",
        ip_id: ""
    },
    ipDetailPageFriends: {
        ip_name: "",
        ip_id: ""
    },
    ipDetailPageActivity: {
        ip_name: "",
        ip_id: ""
    },
    activityListView: {
        user_id: ""
    },
    activityListViewDetail: {
        ip_id: ""
    },
    bindPhonePageView: {
        user_id: ""
    },
    bindPhonePageResult: {
        phone: "",
        result: ""
    },
    addTextPageView: {
        image_url: ""
    },
    addTextPageLeave: {
        duration: 0
    },
    guideStartSoon: {},
    guideCancel: {},
    guideConfirm: {},
    toutiaoNewsBigImageToWebview: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    toutiaoNewsSmallImageToWebview: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    toutiaoNewsThreeImageToWebview: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    toutiaoNewsBigImageToImageDetail: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    toutiaoNewsfSmallImageToImageDetail: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    toutiaoNewsThreeImageToImageDetail: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    toutiaoBaikeModuleRelateFriendPic: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    toutiaoBaikeModuleRelateExpression: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    toutiaoBaikeModuleFriendGroupPic: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    toutiaoBaikeModuleRelatePic: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    toutiaoBaikeModuleRelateAvatar: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    toutiaoBaikeModuleRelateWallpaper: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    toutiaoBaikeModuleLoversAvatar: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    toutiaoBaikeModuleFancySudoku: {
        user_id: 0,
        gifnews_id: 0,
        bk_id: 0,
        bkm_id: 0
    },
    toutiaoOnePicViewSubject: {
        user_id: 0,
        show_type: 0,
        subject_id: 0,
        subject_type: 0
    },
    toutiaoOnePicSubjectFriends: {
        user_id: 0,
        show_type: 0,
        subject_id: 0,
        subject_type: 0
    },
    toutiaoOnePicSubjectShare: {
        user_id: 0,
        show_type: 0,
        subject_id: 0,
        subject_type: 0
    },
    toutiaoOnePicSubjectViewAll: {
        user_id: 0,
        show_type: 0,
        subject_id: 0,
        subject_type: 0
    },
    indexPageSearchIcon: {},
    indexPageSearchFace: {},
    indexPageMakeFace: {},
    indexPageTapIpHome: {},
    indexPageIphomeShare: {},
    indexPageIphomeShareCicle: {},
    BktoutiaoNewsBigImageToWebview: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    BktoutiaoNewsSmallImageToWebview: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    BktoutiaoNewsThreeImageToWebview: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    BktoutiaoNewsBigImageToImageDetail: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    BktoutiaoNewsfSmallImageToImageDetail: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    BktoutiaoNewsThreeImageToImageDetail: {
        user_id: 0,
        gifnews_id: 0,
        theme_id: 0
    },
    dtyzPageSearchIcon: {},
    dtyzPageSearchFace: {},
    dtyzPageMakeFace: {},
    subscribePageGoIndex: {},
    onePicSubjectDetailPageSearchFace: {},
    onePicSubjectDetailPageMakeFace: {},
    ManyPicSubjectDetailPageSearchFace: {},
    ManyPicSubjectDetailPageMakeFace: {},
    baikeDetailPageSearchFace: {},
    baikeDetailPageMakeFace: {},
    searchPageTapInput: {},
    searchPageTapDelBtn: {},
    searchPageTapComLabel: {
        value: ""
    },
    searchPageTapHisSearch: {
        value: ""
    },
    searchPageTapClearHis: {},
    searchPageHasResultTapHome: {
        user_id: ""
    },
    searchPageHasResultTapReturnBtn: {},
    searchPageNoResultShow: {},
    searchPageNoResultTapRelRecommend: {},
    searchPageNoResultTapReturnBtn: {},
    imageDetailTapPreviousPiece: {},
    imageDetailTapNextPiece: {},
    imageDetailNoMoreTip: {},
    imageDetailMeKnow: {},
    imageDetailAddText: {},
    addTextPageAvatarSuceess: {},
    addTextPageLocalSuceess: {},
    addTextPageOnlineSuceess: {},
    addTextPageAuthoriseSuccess: {},
    addTextPageAuthoriseReject: {},
    addTextPageInputFocus: {},
    addTextPageInputDelete: {},
    addTextPageTapChangePhone: {},
    addTextPageTapChangePhoneSuccess: {},
    addTextPageTapFontSize: {
        value: ""
    },
    addTextPageTapFontBg: {
        value: ""
    },
    addTextPageTapFontColor: {
        value: ""
    },
    ipHomeDetailTapDetail: {},
    ipHomeDetailTapBanner: {},
    ipHomeDetailViewPic: {},
    ipHomeDetailToMain: {},
    iphomeDetailReturn: {},
    ipHomeLotteryPageShare: {},
    ipHomeLotteryPageAgreement: {},
    ipHomeLotteryPageReturn: {},
    myPageTapDel: {},
    myPageGoIndex: {},
    mypageTapDelText: {},
    mypageTapCancelText: {},
    mypageTapSelected: {},
    activityListReturn: {}
};

module.exports = {
    eventMap: i,
    mtaEvent: function() {
        var a = arguments;
        setTimeout(function() {
            var t = a[0].toString(), d = i[t], s = 1, _ = !0;
            for (var u in d) void 0 != a[s] && (d[u] = a[s]), s++, _ = !1;
            _ ? e.Event.stat(t, {}) : e.Event.stat(t, {
                value: JSON.stringify(d)
            });
        }, 1e3);
    }
};