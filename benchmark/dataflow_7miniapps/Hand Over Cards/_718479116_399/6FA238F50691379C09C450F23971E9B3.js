var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SensorSetting = void 0;

var n = e(require("@babel/runtime/helpers/classCallCheck.js")), r = e(require("@babel/runtime/helpers/createClass.js")), t = function() {
    function e() {
        (0, n.default)(this, e);
    }
    return (0, r.default)(e, [ {
        key: "TemplateMessageClick",
        value: function(e) {
            return {
                TemplateMessageID: e.TemplateMessageID,
                $is_first_time: !0
            };
        }
    }, {
        key: "ButtonClick",
        value: function(e) {
            var n = "";
            try {
                return n = getCurrentPages()[getCurrentPages().length - 1].route, {
                    ButtonTitle: e.data.ButtonTitle,
                    PageTitle: e.data.PageTitle,
                    PagePath: n,
                    $is_first_time: !0
                };
            } catch (e) {}
        }
    }, {
        key: "SavePromptShow",
        value: function() {
            return {};
        }
    }, {
        key: "InvoiceSave",
        value: function() {
            return {};
        }
    }, {
        key: "CardStick",
        value: function(e) {
            return {
                OpenGid: e.OpenGid,
                CardStickWay: e.CardStickWay,
                BusinessIntroInclude: e.BusinessIntroInclude ? e.BusinessIntroInclude : ""
            };
        }
    }, {
        key: "PortraitUpload",
        value: function() {
            return {};
        }
    }, {
        key: "SavePromptShow0",
        value: function() {
            return {};
        }
    }, {
        key: "PostbackPromptShow",
        value: function() {
            return {};
        }
    }, {
        key: "EmptyHomePageView",
        value: function(e) {
            return {
                IsAdministrator: e.IsAdministrator
            };
        }
    }, {
        key: "WallInPrivateChatPromptShow",
        value: function() {
            return {};
        }
    }, {
        key: "CardDetailView",
        value: function() {
            return {};
        }
    }, {
        key: "DetailViewPromptShow",
        value: function() {
            return {};
        }
    }, {
        key: "TemplateMessageClick",
        value: function(e) {
            return {
                TemplateMessageID: e.TemplateMessageID
            };
        }
    }, {
        key: "PopupPromptShow",
        value: function(e) {
            return {
                PopupPromptTrigger: e.PopupPromptTrigger,
                PopupPromptMainButton: e.PopupPromptMainButton
            };
        }
    }, {
        key: "DynamicCardLandingPageView",
        value: function(e) {
            return {};
        }
    }, {
        key: "AddToMyMiniProgramMaskShow",
        value: function(e) {
            return {
                PromptType: e.PromptType
            };
        }
    }, {
        key: "AddToMyMiniProgramMaskClose",
        value: function(e) {
            return {
                RunningTime: e.RunningTime,
                PromptType: e.PromptType
            };
        }
    }, {
        key: "AdvertisingSpaceDisplay",
        value: function(e) {
            return {
                AdvertisingTag: e.AdvertisingTag
            };
        }
    }, {
        key: "ClaimCardcheckPhoneNumberFail",
        value: function(e) {
            return {
                OwnedEnterprise: e.OwnedEnterprise
            };
        }
    }, {
        key: "PrivateChatLandingPageState",
        value: function(e) {
            return {
                PageState: e.PageState
            };
        }
    }, {
        key: "CardWallPageState",
        value: function(e) {
            return {
                OpenGid: e.OpenGid,
                CardWallCardNumber: e.CardWallCardNumber
            };
        }
    }, {
        key: "PrivateChatLayerUp",
        value: function(e) {
            return {
                LayerUpTrigger: e.LayerUpTrigger
            };
        }
    }, {
        key: "RewardSuccess",
        value: function() {
            return {};
        }
    }, {
        key: "GroupChatLandingPageState",
        value: function(e) {
            return {
                PageState: e.PageState
            };
        }
    }, {
        key: "TeamCardPhoneCheck",
        value: function(e) {
            return {
                OwnedEnterprise: e.OwnedEnterprise,
                IsMatched: e.IsMatched
            };
        }
    }, {
        key: "GroupAddressBookBrowsing",
        value: function(e) {
            return {
                OwnerOpenID: e.OwnerOpenID,
                OpenGid: e.OpenGid
            };
        }
    }, {
        key: "GroupLandingPageBrowsing",
        value: function(e) {
            return {
                OpenGid: e.OpenGid
            };
        }
    }, {
        key: "BusinessCardLinkBrowsing",
        value: function(e) {
            return {
                CardType: e.CardType,
                LinkType: e.LinkType,
                Documents: e.Documents
            };
        }
    }, {
        key: "BusinessCardLinkSend",
        value: function(e) {
            return {
                CardType: e.CardType
            };
        }
    }, {
        key: "CompanyViewScreen",
        value: function(e) {
            return {
                PageTitle: e.CardType
            };
        }
    }, {
        key: "HomePageWithCard",
        value: function(e) {
            return {
                CardID: e.CardID
            };
        }
    }, {
        key: "ChooseTemplate",
        value: function(e) {
            return {
                Number: e.Number,
                Location: e.Location
            };
        }
    }, {
        key: "AssistantViewScreen",
        value: function(e) {
            return {
                PageTitle: e.PageTitle
            };
        }
    }, {
        key: "CompanyMaskShow",
        value: function(e) {
            return {
                PageTitle: e.PageTitle
            };
        }
    }, {
        key: "ServiceExpirationDisplay",
        value: function(e) {
            return {
                DueDate: e.DueDate
            };
        }
    }, {
        key: "TeamCreate",
        value: function(e) {
            return {
                CompanyName: e.CompanyName,
                ChooseBackground: e.ChooseBackground,
                CreateSource: e.CreateSource,
                $is_first_time: !0
            };
        }
    }, {
        key: "RecommendedCourtesyShow",
        value: function() {
            return {};
        }
    }, {
        key: "SaveSharedInformation",
        value: function(e) {
            return {
                SaveSharedInformation: e.SaveSharedInformation
            };
        }
    } ]), e;
}();

exports.SensorSetting = t;