(window.beeketingWPJP = window.beeketingWPJP || []).push([
    [137], {
        1222: function(t, e, n) {
            var s = n(483),
                a = n(158),
                r = n(79);
            t.exports = function(t, i) {
                var o = {};
                return i = r(i, 3), a(t, function(t, e, n) {
                    s(o, e, i(t, e, n))
                }), o
            }
        },
        1223: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = T(n(47)),
                s = T(n(48)),
                i = T(n(45)),
                a = T(n(118)),
                r = T(n(4)),
                u = T(n(3)),
                l = T(n(46)),
                c = T(n(119)),
                d = T(n(634)),
                p = T(n(410)),
                f = T(n(368)),
                g = T(n(434)),
                h = function(t) {
                    {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e.default = t, e
                    }
                }(n(351)),
                m = T(n(1224)),
                _ = T(n(1227)),
                y = T(n(1230)),
                v = T(n(636));

            function T(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var k = i.default.extend({
                data: function() {
                    return {
                        notification: null,
                        notificationSignUp: null,
                        notiUpsellProductData: null,
                        totalUpsellProductData: [],
                        notiOnCheckoutDataProduct: {},
                        isShowNotiUpsell: !1,
                        isTestNotiUpsell: !1,
                        notifyMouseEnter: !1,
                        notifyOutTime: !1,
                        timeOut: f.default.getNotificationDisplayTime(),
                        isBackendPreview: f.default.appSetting.isBackendPreview,
                        timeOutObj: null,
                        cartItems: [],
                        stats: null,
                        countUpsellNoti: 0
                    }
                },
                ready: function() {
                    var i = this;
                    return (0, s.default)(o.default.mark(function t() {
                        var e, n;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (c.default.isInTestGroup(h.SPOP_UPSELL_NOTI).then(function(t) {
                                            t && (i.isTestNotiUpsell = !0, setTimeout(function() {
                                                p.default.getProductUpsell().then(function(t) {
                                                    t && (i.totalUpsellProductData = t)
                                                }).catch(function() {
                                                    (0, r.default)("cant get noti upsell")
                                                })
                                            }, 200))
                                        }), !i.isBackendPreview) {
                                        t.next = 15;
                                        break
                                    }
                                    if ((e = window.spopUpsellNotiProduct) && (0, u.default)(".spop-preview-upsell-noti").length) return i.$set("notiUpsellProductData", e), i.$set("isShowNotiUpsell", !0), t.abrupt("return");
                                    t.next = 7;
                                    break;
                                case 7:
                                    if ((n = window.spopCheckoutNotiProduct) && (0, u.default)(".spop-preview-sign-up").length) return i.$set("notiOnCheckoutDataProduct", n), i.$set("notificationSignUp", !0), t.abrupt("return");
                                    t.next = 12;
                                    break;
                                case 12:
                                    return i.$set("notification", v.default.getNotificationPreview(i.$el)), i.$set("timeOutObj", setTimeout(function() {
                                        i.$set("notifyOutTime", !0), i.closePreviewNoti("timeOut")
                                    }, window.displayTimeSpop || i.timeOut)), t.abrupt("return");
                                case 15:
                                    return t.next = 17, p.default.init();
                                case 17:
                                    setTimeout(function() {
                                        i.getNextNotification()
                                    }, f.default.getIntervalTime()), window.closeNotification = function() {
                                        i.$set("notifyMouseEnter", !1), i.notifyOutTime && i.hideAndGetNextNotification()
                                    };
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                        }, t, i)
                    }))()
                },
                methods: {
                    getNextNotification: function() {
                        var t = this,
                            e = f.default.appSetting.settings_v2.salesNoti.enable ? p.default.getNextNotification() : null;
                        this.$set("notification", e), e ? ((0, r.default)("Next noti's id: " + e.id), p.default.trackImpression(), this.initTrackClick(), this.$set("notifyOutTime", !1), setTimeout(function() {
                            t.hideAndGetNextNotification(), t.$set("notifyOutTime", !0)
                        }, f.default.getNotificationDisplayTime())) : this.isTestNotiUpsell && f.default.getNotiUpsellSettings().enable && 0 < this.totalUpsellProductData.length && this.countUpsellNoti <= f.default.getAppSettings().displayOptions.maximumNotiPerPage ? (this.countUpsellNoti++, this.hideAndGetNextNotification()) : p.default.isSignUpNoti || f.default.appSetting.settings_v2.signupNoti.enable ? (this.$set("notifyOutTime", !1), "home" !== a.default.getContext().type || g.default.getSignUpNotiViewed() || (this.notificationSignUp = !0, g.default.setSignUpNotiViewed()), setTimeout(function() {
                            t.hideAndGetNextNotification(), t.$set("notifyOutTime", !0)
                        }, f.default.getNotificationDisplayTime())) : ((0, r.default)("Cant get next noti"), this.$destroy(!0))
                    },
                    getNextNotiUpsell: function() {
                        var t = this;
                        if (this.isTestNotiUpsell && f.default.getNotiUpsellSettings() && f.default.getNotiUpsellSettings().enable && "product" === a.default.getContext().type) {
                            if (this.totalUpsellProductData && 0 < this.totalUpsellProductData.length) {
                                (0, r.default)("data product upsell noti", this.totalUpsellProductData), this.initTrackClick("upsell");
                                var e = Math.floor(Math.random() * (this.totalUpsellProductData.length - 1));
                                this.notiUpsellProductData = this.totalUpsellProductData[e], this.isShowNotiUpsell = !0, this.totalUpsellProductData.splice(e, 1)
                            }
                            setTimeout(function() {
                                t.isShowNotiUpsell = !1, setTimeout(function() {
                                    t.getNextNotification()
                                }, 500)
                            }, f.default.getNotificationDisplayTime())
                        } else setTimeout(function() {
                            t.getNextNotification()
                        }, f.default.getNotificationDisplayTime())
                    },
                    closeNotification: function() {
                        var t = this;
                        this.isBackendPreview ? this.closePreviewNoti() : (this.$set("notification", null), setTimeout(function() {
                            g.default.setNotificationClosed(), t.$set("notification", null), t.$destroy(!0)
                        }, 500))
                    },
                    hideAndGetNextNotification: function() {
                        var t = this;
                        this.notifyMouseEnter || setTimeout(function() {
                            t.$set("notification", null), t.$set("notificationSignUp", null), setTimeout(function() {
                                t.isTestNotiUpsell && f.default.getNotiUpsellSettings() && f.default.getNotiUpsellSettings().enable ? (t.countUpsellNoti++, t.getNextNotiUpsell()) : f.default.appSetting.settings_v2.signupNoti.enable && !f.default.appSetting.settings_v2.salesNoti.enable ? t.notificationSignUp = !1 : t.getNextNotification()
                            }, f.default.getIntervalTime())
                        }, 500)
                    },
                    notifyMouseEnterAction: function() {
                        this.$set("notifyMouseEnter", !0)
                    },
                    notifyMouseLeaveAction: function() {
                        if (this.$set("notifyMouseEnter", !1), this.notifyOutTime) {
                            if (this.isBackendPreview) return void this.closePreviewNoti();
                            this.hideAndGetNextNotification()
                        }
                    },
                    closePreviewNoti: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                        this.notifyMouseEnter && "timeOut" === t || "fake" !== (0, u.default)(this.$el).closest(".spop-preview").data("type") && (this.$set("notification", null), this.$set("notifyOutTime", !0), l.default.trigger("spop-closed"), clearTimeout(this.timeOutObj))
                    },
                    initTrackClick: function() {
                        var t = this,
                            e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                        setTimeout(function() {
                            (0, u.default)(".sale_notification_default .noti-body a, .sale_notification_default .noti-title a").click(function() {
                                "upsell" !== e ? g.default.addTrackClick(t.notification.id) : g.default.addTrackClickUpSellNoti("upsell-noti-clicks")
                            })
                        }, 100)
                    }
                },
                components: {
                    NotificationComponent: m.default,
                    NotiUpsellComponent: _.default,
                    NotiSignUpComponent: y.default
                },
                template: d.default
            });
            e.default = k
        },
        1224: function(t, e, n) {
            var i, o, s = {};
            i = n(1225), Object.keys(i).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/spop/components/notification.vue: named exports in *.vue files are ignored."), o = n(1226), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var a = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            o && (a.template = o), a.computed || (a.computed = {}), Object.keys(s).forEach(function(t) {
                var e = s[t];
                a.computed[t] = function() {
                    return e
                }
            })
        },
        1225: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = g(n(15)),
                o = g(n(435)),
                s = g(n(300)),
                a = g(n(45)),
                r = g(n(46)),
                u = g(n(4)),
                l = g(n(314)),
                c = g(n(119)),
                d = n(351),
                p = g(n(368)),
                f = g(n(410));

            function g(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                props: {
                    notification: Object
                },
                data: function() {
                    return {
                        layout: p.default.getLayout(),
                        theme: p.default.getTheme(),
                        themeType: p.default.getThemeType() + "-theme_type",
                        position: p.default.getPosition(),
                        isPowerUser: p.default.isPowerUser(),
                        urlLanding: l.default.getUrlLandingPage(d.appCode, "powered-by-sales-pop"),
                        strokeColor: "holiday" === p.default.getThemeType() || "light" === p.default.getTheme() || "customize" === p.default.getTheme() ? "url(#linearGradient-spop)" : "#fff",
                        transitionName: this.getTransitionName(p.default.getDisplayOptions()),
                        styleBackgroundNoti: this.getStyleBackgroundNoti(p.default.getDesign(), p.default.getLayout()),
                        styleTitle: this.getStyleTitle(p.default.getDesign(), p.default.getLayout()),
                        styleLabel: this.getStyleLabel(p.default.getDesign(), p.default.getLayout()),
                        styleTime: this.getStyleTime(p.default.getDesign(), p.default.getLayout()),
                        styleProductName: this.getStyleProductName(p.default.getDesign(), p.default.getLayout()),
                        isNewThemeSep2018: !1,
                        titleContent: this.getTitleContent(p.default.getNotiStructure()),
                        bodyContent: this.getBodyContent(p.default.getNotiStructure()),
                        time: this.getTime(p.default.getNotiStructure())
                    }
                },
                created: function() {
                    this.setStylePreview(window.spopSettings || p.default.getAppSettings())
                },
                ready: function() {
                    var e = this;
                    c.default.isInTestGroup(d.AB_TEST_NEW_THEME_SEP_2018).then(function(t) {
                        e.isNewThemeSep2018 = t
                    });
                    var t = document.querySelectorAll(".bkt--spop .noti-title span"),
                        n = document.querySelectorAll(".bkt--spop .noti-body span");
                    t.forEach(function(t) {
                        e.clamp(t, {
                            clamp: 2
                        })
                    }), n.forEach(function(t) {
                        e.clamp(t, {
                            clamp: 2
                        })
                    }), r.default.trigger("spop-ready"), r.default.listen("spop-setting-change", function(t) {
                        e.setStylePreview(t)
                    })
                },
                methods: {
                    setStylePreview: function(t) {
                        try {
                            p.default.localeKey = t.translate.timeAgo.code
                        } catch (t) {
                            (0, u.default)("Spop preview can not set timeAgo code", t)
                        }
                        this.$set("layout", t.layout), this.$set("theme", "customize" === t.design.themeTypeChoosen ? "customize" : t.design.themeType[t.design.themeTypeChoosen]), this.$set("themeType", t.design.themeTypeChoosen + "-theme_type"), this.$set("position", i.default.isMobile ? t.displayOptions.mobilePosition : t.displayOptions.desktopPosition), this.$set("styleBackgroundNoti", this.getStyleBackgroundNoti(t.design, t.layout)), this.$set("styleTitle", this.getStyleTitle(t.design, t.layout)), this.$set("styleLabel", this.getStyleLabel(t.design, t.layout)), this.$set("styleTime", this.getStyleTime(t.design, t.layout)), this.$set("styleProductName", this.getStyleProductName(t.design, t.layout)), this.$set("titleContent", this.getTitleContent(t.notiStructure)), this.$set("bodyContent", this.getBodyContent(t.notiStructure)), this.$set("time", this.getTime(t.notiStructure)), this.$set("transitionName", this.getTransitionName(t.displayOptions)), a.default.transition(this.transitionName, {
                            enter: function(t, e) {
                                setTimeout(function() {
                                    e()
                                }, 0)
                            }
                        })
                    },
                    clamp: function(t) {
                        return new o.default(t)
                    },
                    moment: function(t) {
                        return new s.default(t)
                    },
                    closeNotiEvent: function() {
                        this.$emit("close-noti"), r.default.trigger("spop-closed")
                    },
                    randomTime: function(t, e) {
                        var n = (e.getTime() + 6e4 - t.getTime()) * Math.random(),
                            i = p.default.getLocaleKey();
                        return s.default.locale(i), this.moment(new Date(t.getTime() + n)).toNow()
                    },
                    mouseOverEvent: function() {
                        this.$emit("mouse-enter")
                    },
                    mouseleaveEvent: function() {
                        this.$emit("mouse-leave")
                    },
                    getNotiStructure: function(t, e) {
                        var n = void 0;
                        return "title" === e[t].value ? (n = (n = (n = (n = '<span style="' + this.styleTitle + '">' + e[t].content + "</span>").replace("{{full_name}}", this.getCustomerName("customerName"))).replace("{{first_name}}", this.getCustomerName("customerFirstName"))).replace("{{last_name}}", this.getCustomerName("customerLastName")), "sync" === this.notification.type && (n = n.replace(/someone/gi, p.default.getTranslate().someone)), this.notification.customerAddress === d.DEFAULT_CUSTOMER_ADDRESS && this.notification.customerCity === d.DEFAULT_CUSTOMER_CITY && this.notification.customerCountry === d.DEFAULT_CUSTOMER_COUNTRY && (n = n.replace(/{{location}}(.*?){{city}}(.*?){{country}}/i, this.notification.customerAddress)), this.notification.customerAddress === d.DEFAULT_CUSTOMER_ADDRESS && this.notification.customerCity === d.DEFAULT_CUSTOMER_CITY && (n = n.replace(/{{location}}(.*?){{city}}/i, d.DEFAULT_CUSTOMER_ADDRESS)), this.notification.customerAddress === d.DEFAULT_CUSTOMER_ADDRESS && this.notification.customerCountry === d.DEFAULT_CUSTOMER_COUNTRY && -1 === n.indexOf("{{city}}") && (n = n.replace(/{{location}}(.*?){{country}}/i, d.DEFAULT_CUSTOMER_ADDRESS)), this.notification.customerCountry === d.DEFAULT_CUSTOMER_COUNTRY && (n = n.replace(/{{city}}(.*?){{country}}/i, this.notification.customerCity)), n = (n = (n = n.replace("{{location}}", this.notification.customerAddress)).replace("{{city}}", this.notification.customerCity)).replace("{{country}}", this.notification.customerCountry), "sync" === this.notification.type && (n = n.replace(/somewhere/gi, p.default.getTranslate().somewhere ? p.default.getTranslate().somewhere : "Somewhere")), n = n.replace("{{random_number}}", Math.floor(20 * Math.random() + 1))) : "productName" === e[t].value && (n = (n = '<a style="' + this.styleProductName + '" href="{{product_link}}" target="' + (p.default.appSetting.isBackendPreview ? "_blank" : "") + '">{{product_title}}<a/>').replace("{{product_link}}", -1 !== e[t].content.indexOf("{{product_link}}") ? this.notification.productLink : "#"), n = -1 !== e[t].content.indexOf("{{product_title}}") ? n.replace("{{product_title}}", this.notification.productName) : ""), n
                    },
                    getThemeTypeCustomizeChoosen: function(t, e) {
                        return t.themeType.customize["theme" + e.charAt(0).toUpperCase() + e.slice(1) + "Color"]
                    },
                    getCustomerName: function(t) {
                        return "custom" === this.notification.type ? p.default.getTranslate().someone : this.notification[t]
                    },
                    getTitleContent: function(t) {
                        return this.getNotiStructure(0, t)
                    },
                    getBodyContent: function(t) {
                        return t ? this.getNotiStructure(1, t) : ""
                    },
                    getTime: function(t) {
                        var e = void 0,
                            n = t[2].content;
                        return -1 !== n.indexOf("{{random_time_ago}}") && (e = this.randomTime(new Date, new Date(this.moment().startOf("hour").add(12, "hours")))), -1 !== n.indexOf("{{time_ago}}") && (e = this.notification.timeAgo || f.default.formatTimeAgo(this.notification.order_created_at)), "" === n && (e = ""), -1 !== n.indexOf("{{random_number}}") && (e = n.replace("{{random_number}}", Math.floor(20 * Math.random() + 1))), e
                    },
                    getTransitionName: function(t) {
                        return "slide-" + (i.default.isMobile ? t.mobilePosition : t.desktopPosition)
                    },
                    getStyleBackgroundNoti: function(t, e) {
                        return "background: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).bodyBackgroundColor : null)
                    },
                    getStyleTitle: function(t, e) {
                        return "color: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).titleTextColor : null)
                    },
                    getStyleLabel: function(t, e) {
                        return "background: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).titleBackgroundColor : null)
                    },
                    getStyleTime: function(t, e) {
                        return "color: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).timeColor : null)
                    },
                    getStyleProductName: function(t, e) {
                        return "color: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).productNameColor : null)
                    }
                }
            }
        },
        1226: function(t, e) {
            t.exports = '\n<div\n  :style="styleBackgroundNoti"\n  :class="[\'bkt--spop wrapper-noti\', layout, theme, position, themeType, {\'not-power-user\': !isPowerUser}]"\n  :transition="transitionName"\n  @mouseover="mouseOverEvent"\n  @mouseleave="mouseleaveEvent"\n>\n<template v-if="isNewThemeSep2018">\n  <div v-if="layout !== \'basicLabel\'" class="product-image">\n    <img :src="notification.image" alt="">\n  </div>\n  <div class="theme-bg"></div>\n</template>\n<template v-else>\n  <div v-if="layout === \'basic\'" class="product-image">\n    <img :src="notification.image" alt="">\n  </div>\n</template>\n  <div class="wrapper-theme">\n    <div class="close-noti" @click="closeNotiEvent">\n      <svg width="12" height="12" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Canvas" transform="translate(-5514 745)">\n          <g id="Button/XClose">\n            <g id="Close">\n              <use id="bkt-close" xlink:href="#path0_fill" transform="translate(5514.49 -744.505)" fill="#82869E"/>\n            </g>\n            <mask id="mask0_outline" mask-type="alpha">\n              <g id="Close">\n                <use xlink:href="#path0_fill" transform="translate(5514.49 -744.505)" fill="#FFFFFF"/>\n              </g>\n            </mask>\n          </g>\n        </g>\n        <defs>\n          <path id="path0_fill" fill-rule="evenodd" d="M 5.50537 4.09106L 1.41406 0L 0 1.41418L 4.09082 5.50519L 0 9.59619L 1.41406 11.0104L 5.50537 6.91937L 9.59619 11.0104L 11.0103 9.59619L 6.91943 5.50519L 11.0103 1.41418L 9.59619 0L 5.50537 4.09106Z"/>\n        </defs>\n      </svg>\n    </div>\n    <div\n      class="noti-title"\n      v-html="titleContent"\n      :style="styleLabel"\n    >\n    </div>\n    \x3c!-- This element for padding purpose --\x3e\n    <div class="space-top"></div>\n    <template v-if="isNewThemeSep2018">\n      <div v-if="layout === \'basicLabel\'" class="product-image">\n        <img :src="notification.image" alt="">\n      </div>\n    </template>\n    <template v-else>\n      <div v-if="layout !== \'basic\'" class="product-image">\n        <img :src="notification.image" alt="">\n      </div>\n    </template>\n    <div\n      class="noti-body"\n      v-html="bodyContent"\n      :style="styleBackgroundNoti"\n    >\n    </div>\n    \x3c!-- This element for padding purpose --\x3e\n    <div class="space-bot"></div>\n    <div\n      class="noti-time"\n      :style="styleTime"\n    >\n      {{ time }}\n    </div>\n    <div class="bkt--brand" v-if="!isPowerUser">\n      <svg width="15px" height="15px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <defs>\n          <linearGradient x1="50%" y1="0%" x2="50%" y2="97.8256177%" id="linearGradient-spop">\n            <stop stop-color="#445FFF" offset="0%"></stop>\n            <stop stop-color="#8008FF" offset="100%"></stop>\n          </linearGradient>\n        </defs>\n        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n          <g id="Icons/Powered-by-Beeketing" transform="translate(1.000000, 1.000000)" :stroke="strokeColor">\n            <polygon id="Power" points="10 0 0 11 9 11 8 18 18 7 9 7"></polygon>\n          </g>\n        </g>\n      </svg> by <a href="{{ urlLanding }}" target="_blank" >Beeketing</a>\n    </div>\n  </div>\n</div>\n'
        },
        1227: function(t, e, n) {
            var i, o, s = {};
            i = n(1228), Object.keys(i).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/spop/components/notificationUpsell.vue: named exports in *.vue files are ignored."), o = n(1229), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var a = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            o && (a.template = o), a.computed || (a.computed = {}), Object.keys(s).forEach(function(t) {
                var e = s[t];
                a.computed[t] = function() {
                    return e
                }
            })
        },
        1228: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = _(n(322)),
                a = _(n(47)),
                i = _(n(48)),
                r = _(n(6)),
                o = _(n(15)),
                u = (_(n(4)), _(n(435))),
                l = _(n(300)),
                c = _(n(46)),
                d = _(n(314)),
                p = _(n(119)),
                f = n(351),
                g = _(n(368)),
                h = _(n(410)),
                m = _(n(36));

            function _(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                name: "upSellNotification",
                props: {
                    notiProductData: Object
                },
                data: function() {
                    return {
                        showNotiUpsell: !1,
                        layout: g.default.getLayout(),
                        theme: g.default.getTheme(),
                        themeType: g.default.getThemeType() + "-theme_type",
                        position: g.default.getPosition(),
                        isPowerUser: g.default.isPowerUser(),
                        urlLanding: d.default.getUrlLandingPage(f.appCode, "powered-by-sales-pop"),
                        strokeColor: "holiday" === g.default.getThemeType() || "light" === g.default.getTheme() || "customize" === g.default.getTheme() ? "url(#linearGradient-spop)" : "#fff",
                        transitionName: this.getTransitionName(g.default.getDisplayOptions()),
                        styleBackgroundNoti: this.getStyleBackgroundNoti(g.default.getDesign(), g.default.getLayout()),
                        styleTitle: this.getStyleTitle(g.default.getDesign(), g.default.getLayout()),
                        styleTextBody: this.getStyleProductName(g.default.getDesign(), g.default.getLayout()),
                        styleLabel: this.getStyleLabel(g.default.getDesign(), g.default.getLayout()),
                        styleProductName: this.getStyleProductName(g.default.getDesign(), g.default.getLayout()),
                        isNewThemeSep2018: !1,
                        titleContent: g.default.getNotiUpsellSettings().title,
                        productByRefId: h.default.productByRefId,
                        bodyContent: this.getBodyContent(),
                        imgUrl: this.notiProductData.image_url ? this.notiProductData.image_url : this.defaultImage(),
                        offerUpsellStats: null,
                        isBackendPreview: g.default.appSetting.isBackendPreview
                    }
                },
                created: function() {},
                computed: {},
                ready: function() {
                    var t = (0, i.default)(a.default.mark(function t() {
                        var e, n, i = this;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.isBackendPreview) {
                                        t.next = 4;
                                        break
                                    }
                                    this.loadPreviewData(), t.next = 10;
                                    break;
                                case 4:
                                    if (this.productByRefId.ref_id === this.notiProductData.ref_id) return this.$destroy(!0), t.abrupt("return");
                                    t.next = 7;
                                    break;
                                case 7:
                                    return t.next = 9, this.getOfferUpsellStats();
                                case 9:
                                    "target-products" === g.default.getNotiUpsellSettings().showOn ? h.default.offerUpsell.forEach(function(t) {
                                        t.target_product_ref_ids.indexOf(i.productByRefId.ref_id) < 0 ? i.showNotiUpsell = !1 : i.showNotiUpsell = !0
                                    }) : h.default.totalProductForUpsell.forEach(function(t) {
                                        t.ref_id !== i.productByRefId.ref_id ? i.showNotiUpsell = !1 : i.showNotiUpsell = !0
                                    });
                                case 10:
                                    p.default.isInTestGroup(f.AB_TEST_NEW_THEME_SEP_2018).then(function(t) {
                                        i.isNewThemeSep2018 = t
                                    }), e = document.querySelectorAll(".bkt--spop .noti-title"), n = document.querySelectorAll(".bkt--spop .noti-body"), e.forEach(function(t) {
                                        i.clamp(t, {
                                            clamp: 2
                                        })
                                    }), n.forEach(function(t) {
                                        i.clamp(t, {
                                            clamp: 2
                                        })
                                    }), c.default.trigger("spop-upsell-ready"), h.default.track(f.TRACK_IMPRESSION_UP_SELL_NOTI), c.default.listen("spop-upsell-setting-change", function(t) {
                                        g.default.appSetting.settings_v2 = t, i.theme = g.default.getTheme(), i.layout = g.default.getLayout(), i.loadPreviewData(t.upsellNoti)
                                    });
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                methods: {
                    clamp: function(t) {
                        return new u.default(t)
                    },
                    moment: function(t) {
                        return new l.default(t)
                    },
                    closeNotiEvent: function() {
                        this.$emit("close-noti"), c.default.trigger("spop-closed"), c.default.trigger("spop-upsell-closed")
                    },
                    randomTime: function(t, e) {
                        var n = (e.getTime() + 6e4 - t.getTime()) * Math.random(),
                            i = g.default.getLocaleKey();
                        return l.default.locale(i), this.moment(new Date(t.getTime() + n)).toNow()
                    },
                    mouseOverEvent: function() {
                        this.$emit("mouse-enter")
                    },
                    mouseleaveEvent: function() {
                        this.$emit("mouse-leave")
                    },
                    getThemeTypeCustomizeChoosen: function(t, e) {
                        return t.themeType.customize["theme" + e.charAt(0).toUpperCase() + e.slice(1) + "Color"]
                    },
                    getTransitionName: function(t) {
                        return "slide-" + (o.default.isMobile ? t.mobilePosition : t.desktopPosition)
                    },
                    getStyleBackgroundNoti: function(t, e) {
                        return "background: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).bodyBackgroundColor : null)
                    },
                    getStyleTitle: function(t, e) {
                        return "color: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).titleTextColor : null)
                    },
                    getStyleLabel: function(t, e) {
                        return "background: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).titleBackgroundColor : null)
                    },
                    getStyleTime: function(t, e) {
                        return "color: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).timeColor : null)
                    },
                    getStyleProductName: function(t, e) {
                        return "color: " + ("customize" === t.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen(t, e).productNameColor : null)
                    },
                    getBodyContent: function() {
                        this.productByRefId = h.default.productByRefId;
                        var t = g.default.getNotiUpsellSettings().message;
                        return g.default.appSetting.isBackendPreview || (t = (t = t.replace("{{upsell_product_link}}, {{upsell_product_title}}", '<a style="color: inherit" href="' + this.notiProductData.url + '">' + this.notiProductData.title + "</a>")).replace("{{product_link}}, {{product_title}}", '<a style="color: inherit" href="' + this.productByRefId.url + '">' + this.productByRefId.title + "</a>")), t
                    },
                    validBodyContent: function(t) {
                        return t || ""
                    },
                    showQuickView: function() {
                        g.default.getNotiUpsellSettings() && "quick-view-on-current-page" === g.default.getNotiUpsellSettings().directToWhenClick ? c.default.trigger("show_product_detail", {
                            currentAppCode: f.appCode,
                            productId: this.notiProductData.id,
                            productRefId: this.notiProductData.ref_id,
                            productHandle: this.notiProductData.handle
                        }) : window.open(this.notiProductData.url, "_blank")
                    },
                    getOfferUpsellStats: function() {
                        var t = (0, i.default)(a.default.mark(function t() {
                            var e, n, i, o = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = r.default.getParam("shop", "shop").id, n = [], i = 0, window.testOffer = h.default.offerUpsell, h.default.offerUpsell.forEach(function(t) {
                                                (0 < t.offer_products.filter(function(t) {
                                                    return t.ref_id === o.notiProductData.ref_id
                                                }).length || -1 !== t.target_product_ref_ids.indexOf(o.notiProductData.ref_id) || "all" === t.target_type) && n.push(t.offer_id)
                                            }), 0 < n.length) return n = n.join(","), t.next = 9, h.default.getStatsUpsellOffer(e, n);
                                        t.next = 14;
                                        break;
                                    case 9:
                                        this.offerUpsellStats = t.sent, this.titleContent = g.default.getNotiUpsellSettings().title, this.offerUpsellStats && ((0, s.default)(this.offerUpsellStats).forEach(function(t) {
                                            i += t.order_success
                                        }), 0 < i && -1 !== this.titleContent.indexOf("{{purchased_number}}") ? this.titleContent = this.titleContent.replace("{{purchased_number}}", i) : 0 === i && -1 !== this.titleContent.indexOf("{{purchased_number}}") && (this.titleContent = this.titleContent.replace("{{purchased_number}}", g.default.getNotiUpsellSettings().textWhenNotYetOrderSuccess))), t.next = 15;
                                        break;
                                    case 14:
                                        -1 !== this.titleContent.indexOf("{{purchased_number}}") && (this.titleContent = this.titleContent.replace("{{purchased_number}}", g.default.getNotiUpsellSettings().textWhenNotYetOrderSuccess));
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    loadPreviewData: function(t) {
                        this.imgUrl = this.notiProductData.upsellProduct.productImg ? this.notiProductData.upsellProduct.productImg : this.defaultImage(), this.titleContent = t ? this.getTitlePreview(t.title) : this.getTitlePreview(this.titleContent), this.bodyContent = t ? this.getBodyPreview(t.message) : this.getBodyPreview(this.bodyContent)
                    },
                    getTitlePreview: function(t) {
                        return t.replace("{{purchased_number}}", this.notiProductData.purchasedNumber)
                    },
                    getBodyPreview: function(t) {
                        var e = t,
                            n = '<a style="color:inherit;" href="#">' + this.notiProductData.upsellProduct.productTitle + "</a>",
                            i = '<a style="color:inherit;" href="#">' + this.notiProductData.targetProduct.productTitle + "</a>";
                        return e = (e = e.replace("{{upsell_product_link}}, {{upsell_product_title}}", n)).replace("{{product_link}}, {{product_title}}", i)
                    },
                    defaultImage: function() {
                        return m.default.assetsPath + "/spop/assets/images/spop-upsell-default.png"
                    }
                }
            }
        },
        1229: function(t, e) {
            t.exports = '\n<div\n        :style="styleBackgroundNoti"\n        :class="[\'bkt--spop wrapper-noti\', layout, theme, position, themeType, {\'not-power-user\': !isPowerUser}, \'spop-upsell-noti\']"\n        :transition="transitionName"\n        @mouseover="mouseOverEvent"\n        @mouseleave="mouseleaveEvent"\n>\n  <template v-if="isNewThemeSep2018">\n    <div v-if="layout !== \'basicLabel\'" class="product-image">\n      <img :src="imgUrl" alt="upsell_product_image" @click.prevent="showQuickView">\n    </div>\n    <div class="theme-bg"></div>\n  </template>\n  <template v-else>\n    <div v-if="layout === \'basic\'" class="product-image">\n      <img :src="imgUrl" alt="upsell_product_image" @click.prevent="showQuickView">\n    </div>\n  </template>\n  <div class="wrapper-theme">\n    <div class="close-noti" @click="closeNotiEvent">\n      <svg width="12" height="12" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Canvas" transform="translate(-5514 745)">\n          <g id="Button/XClose">\n            <g id="Close">\n              <use id="bkt-close" xlink:href="#path0_fill" transform="translate(5514.49 -744.505)" fill="#82869E"/>\n            </g>\n            <mask id="mask0_outline" mask-type="alpha">\n              <g id="Close">\n                <use xlink:href="#path0_fill" transform="translate(5514.49 -744.505)" fill="#FFFFFF"/>\n              </g>\n            </mask>\n          </g>\n        </g>\n        <defs>\n          <path id="path0_fill" fill-rule="evenodd" d="M 5.50537 4.09106L 1.41406 0L 0 1.41418L 4.09082 5.50519L 0 9.59619L 1.41406 11.0104L 5.50537 6.91937L 9.59619 11.0104L 11.0103 9.59619L 6.91943 5.50519L 11.0103 1.41418L 9.59619 0L 5.50537 4.09106Z"/>\n        </defs>\n      </svg>\n    </div>\n    <div class="noti-title" :style="styleLabel">\n        <span v-html="titleContent" :style="styleTitle"></span>\n    </div>\n    <template v-if="isNewThemeSep2018">\n      <div v-if="layout === \'basicLabel\'" class="product-image">\n        <img :src="imgUrl" alt="upsell_product_image" @click.prevent="showQuickView">\n      </div>\n    </template>\n    <template v-else>\n      <div v-if="layout !== \'basic\'" class="product-image">\n        <img :src="imgUrl" alt="upsell_product_image" @click.prevent="showQuickView">\n      </div>\n    </template>\n    <div class="noti-body">\n      <span v-html="bodyContent" :style="styleTextBody"></span>\n    </div>\n    <div class="bkt--brand" v-if="!isPowerUser">\n      <svg width="15px" height="15px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <defs>\n          <linearGradient x1="50%" y1="0%" x2="50%" y2="97.8256177%" id="linearGradient-spop">\n            <stop stop-color="#445FFF" offset="0%"></stop>\n            <stop stop-color="#8008FF" offset="100%"></stop>\n          </linearGradient>\n        </defs>\n        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n          <g id="Icons/Powered-by-Beeketing" transform="translate(1.000000, 1.000000)" :stroke="strokeColor">\n            <polygon id="Power" points="10 0 0 11 9 11 8 18 18 7 9 7"></polygon>\n          </g>\n        </g>\n      </svg> by <a href="{{ urlLanding }}" target="_blank" >Beeketing</a>\n    </div>\n  </div>\n</div>\n'
        },
        1230: function(t, e, n) {
            var i, o, s = {};
            i = n(1231), Object.keys(i).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/spop/components/notificationSignUp.vue: named exports in *.vue files are ignored."), o = n(1234), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var a = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            o && (a.template = o), a.computed || (a.computed = {}), Object.keys(s).forEach(function(t) {
                var e = s[t];
                a.computed[t] = function() {
                    return e
                }
            })
        },
        1231: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = h(n(47)),
                i = h(n(48)),
                s = (h(n(435)), h(n(6))),
                a = h(n(46)),
                r = h(n(368)),
                u = h(n(410)),
                l = h(n(635)),
                c = h(n(36)),
                d = h(n(4)),
                p = h(n(119)),
                f = h(n(25)),
                g = n(351);

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                data: function() {
                    return {
                        hasStats: !1,
                        messageBody: r.default.getAppSettings().signupNoti.message,
                        isBackendPreview: r.default.appSetting.isBackendPreview,
                        imgUrl: this.getImgUrl(),
                        notiName: "wrapper-noti-sign-up"
                    }
                },
                computed: {
                    bodyContent: function() {
                        return r.default.getAppSettings().signupNoti ? r.default.getAppSettings().signupNoti.message : "{{signup_number}} customer(s) has signed up in the last 24 hours."
                    }
                },
                ready: function() {
                    var t = (0, i.default)(o.default.mark(function t() {
                        var e, n, i = this;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.convertToStart();
                                case 2:
                                    e = document.querySelector("#bkt--spop .noti-title span"), n = document.querySelector("#bkt--spop .noti-body span"), e && this.clamp(e, {
                                        clamp: 2
                                    }), n && this.clamp(n, {
                                        clamp: 2
                                    }), a.default.trigger("spop-signup-ready"), u.default.track(g.TRACK_IMPRESSION_SIGN_UP_NOTI), a.default.listen("spop-signup-setting-change", function(t) {
                                        r.default.appSetting.settings_v2 = t, i.theme = r.default.getTheme(), i.imgUrl = i.getImgUrl(), i.messageBody = t.signupNoti.message, i.convertToStart()
                                    });
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                methods: {
                    convertToStart: function() {
                        var t = (0, i.default)(o.default.mark(function t() {
                            var e;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, e = 0, t.next = 4, p.default.isInTestGroup("Spop_signup_notifications");
                                    case 4:
                                        if (t.sent) return t.next = 8, u.default.getStatsSignUp(s.default.getParam("shop", "shop").id);
                                        t.next = 9;
                                        break;
                                    case 8:
                                        e = t.sent;
                                    case 9:
                                        this.isBackendPreview ? (this.hasStats = !0, e && 0 !== e.count ? -1 !== this.messageBody.indexOf("{{signup_number}}") && (this.messageBody = this.messageBody.replace("{{signup_number}}", e.count)) : this.messageBody = this.messageBody.replace("{{signup_number}}", 3)) : e && 0 < e.count && (this.hasStats = !0, -1 !== this.messageBody.indexOf("{{signup_number}}") && (this.messageBody = this.messageBody.replace("{{signup_number}}", e.count))), t.next = 15;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(0), (0, d.default)("Error cannot get count signup last 24h");
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [0, 12]
                            ])
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    getImgUrl: function() {
                        return "demo" === r.default.getAppSettings().signupNoti.imageSelectType ? c.default.assetsPath + "/spop/assets/images/checkout/" + r.default.getAppSettings().signupNoti.demoImgName + ".png" : r.default.getAppSettings().signupNoti.customImgUrl
                    },
                    redirectSignUpPage: function() {
                        u.default.track(g.TRACK_CLICKS_SIGN_UP_NOTI), window.open(f.default.current().getSignUpPage(), "_self")
                    }
                },
                components: {
                    TemplateNotiCheckout: l.default
                }
            }
        },
        1232: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = c(n(15)),
                o = c(n(435)),
                s = c(n(300)),
                a = c(n(314)),
                r = c(n(46)),
                u = n(351),
                l = c(n(368));

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                props: {
                    notiProductData: Object,
                    hasStats: Boolean,
                    messageBody: String,
                    imgUrl: String,
                    notiName: String
                },
                data: function() {
                    return {
                        layout: l.default.getLayout(),
                        theme: l.default.getTheme(),
                        themeType: l.default.getThemeType() + "-theme_type",
                        position: l.default.getPosition(),
                        isPowerUser: l.default.isPowerUser(),
                        urlLanding: a.default.getUrlLandingPage(u.appCode, "sales-pop"),
                        strokeColor: "holiday" === l.default.getThemeType() || "light" === l.default.getTheme() || "customize" === l.default.getTheme() ? "url(#linearGradient-spop)" : "#fff",
                        themeTypeChoosen: l.default.getDesign().themeTypeChoosen
                    }
                },
                ready: function() {
                    var t = this;
                    r.default.listen("spop-need-reload-setting", function() {
                        t.theme = l.default.getTheme(), t.layout = l.default.getLayout()
                    })
                },
                computed: {
                    transitionName: function() {
                        return "slide-" + (i.default.isMobile ? l.default.getAppSettings().displayOptions.mobilePosition : l.default.getAppSettings().displayOptions.desktopPosition)
                    },
                    styleBackgroundNoti: function() {
                        return "background: " + ("customize" === this.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen().bodyBackgroundColor : null)
                    },
                    styleBackgroundTitle: function() {
                        return "background: " + ("customize" === this.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen().titleBackgroundColor : null)
                    },
                    styleNotiText: function() {
                        return "color: " + ("customize" === this.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen().productNameColor : null)
                    },
                    styleTitle: function() {
                        return "color: " + ("customize" === this.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen().titleTextColor : null)
                    },
                    styleLabel: function() {
                        return "background: " + ("customize" === this.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen().titleBackgroundColor : null)
                    },
                    styleProductName: function() {
                        return "color: " + ("customize" === this.themeTypeChoosen ? this.getThemeTypeCustomizeChoosen().productNameColor : null)
                    }
                },
                methods: {
                    clamp: function(t) {
                        return new o.default(t)
                    },
                    moment: function(t) {
                        return new s.default(t)
                    },
                    closeNotiEvent: function() {
                        this.$emit("close-noti"), r.default.trigger("spop-signup-closed")
                    },
                    mouseOverEvent: function() {
                        this.$emit("mouse-enter")
                    },
                    mouseleaveEvent: function() {
                        this.$emit("mouse-leave")
                    },
                    getThemeTypeCustomizeChoosen: function() {
                        return l.default.getDesign().themeType.customize["theme" + l.default.getLayout().charAt(0).toUpperCase() + l.default.getLayout().slice(1) + "Color"]
                    },
                    getCustomerName: function(t) {
                        return "custom" === this.notification.type ? l.default.getTranslate().someone : this.notification[t]
                    },
                    directToSignUpPage: function() {
                        this.$emit("get-sign-up-page")
                    }
                }
            }
        },
        1233: function(t, e) {
            t.exports = '\n<div\n  @click="directToSignUpPage()"\n  id="bkt--spop"\n  class="wrapper-noti"\n  :style="styleBackgroundNoti"\n  :class="[layout, theme, position, themeType, {\'not-power-user\': !isPowerUser}, notiName]"\n  :transition="transitionName"\n  v-if="hasStats"\n  @mouseover="mouseOverEvent"\n  @mouseleave="mouseleaveEvent"\n>\n  <div v-if="layout === \'basic\'" class="product-image">\n    <img :src="imgUrl" alt="spop-checkout-icon-1">\n  </div>\n\n  <div class="theme-bg"></div>\n\n  <div class="wrapper-theme">\n    <div class="noti-title" :style="styleBackgroundTitle" v-if="layout === \'basicLabel\'">\n      <span :style="styleTitle">Notification for you!!!</span>\n    </div>\n    <div class="close-noti" @click="closeNotiEvent">\n      <svg\n        width="12"\n        height="12"\n        viewBox="0 0 12 12"\n        version="1.1"\n        xmlns="http://www.w3.org/2000/svg"\n        xmlns:xlink="http://www.w3.org/1999/xlink"\n      >\n        <g id="Canvas" transform="translate(-5514 745)">\n          <g id="Button/XClose">\n            <g id="Close">\n              <use\n                id="bkt-close"\n                xlink:href="#path0_fill"\n                transform="translate(5514.49 -744.505)"\n                fill="#82869E"\n              ></use>\n            </g>\n            <mask id="mask0_outline" mask-type="alpha">\n              <g id="Close">\n                <use\n                  xlink:href="#path0_fill"\n                  transform="translate(5514.49 -744.505)"\n                  fill="#FFFFFF"\n                ></use>\n              </g>\n            </mask>\n          </g>\n        </g>\n        <defs>\n          <path\n            id="path0_fill"\n            fill-rule="evenodd"\n            d="M 5.50537 4.09106L 1.41406 0L 0 1.41418L 4.09082 5.50519L 0 9.59619L 1.41406 11.0104L 5.50537 6.91937L 9.59619 11.0104L 11.0103 9.59619L 6.91943 5.50519L 11.0103 1.41418L 9.59619 0L 5.50537 4.09106Z"\n          ></path>\n        </defs>\n      </svg>\n    </div>\n    <div v-if="layout !== \'basic\'" class="product-image">\n      <img :src="imgUrl" alt="spop-checkout-icon-2">\n    </div>\n    <div class="noti-body" v-html="messageBody" :style="styleNotiText"></div>\n    <div class="bkt--brand" v-if="!isPowerUser">\n      <svg\n        width="15px"\n        height="15px"\n        viewBox="0 0 20 20"\n        version="1.1"\n        xmlns="http://www.w3.org/2000/svg"\n        xmlns:xlink="http://www.w3.org/1999/xlink"\n      >\n        <defs>\n          <linearGradient x1="50%" y1="0%" x2="50%" y2="97.8256177%" id="linearGradient-spop">\n            <stop stop-color="#445FFF" offset="0%"></stop>\n            <stop stop-color="#8008FF" offset="100%"></stop>\n          </linearGradient>\n        </defs>\n        <g\n          id="Symbols"\n          stroke="none"\n          stroke-width="1"\n          fill="none"\n          fill-rule="evenodd"\n          stroke-linecap="round"\n          stroke-linejoin="round"\n        >\n          <g\n            id="Icons/Powered-by-Beeketing"\n            transform="translate(1.000000, 1.000000)"\n            :stroke="strokeColor"\n          >\n            <polygon id="Power" points="10 0 0 11 9 11 8 18 18 7 9 7"></polygon>\n          </g>\n        </g>\n      </svg> by\n      <a href="{{ urlLanding }}" target="_blank">Beeketing</a>\n    </div>\n  </div>\n</div>\n'
        },
        1234: function(t, e) {
            t.exports = '\n<template-noti-checkout\n  @get-sign-up-page="redirectSignUpPage()"\n  :message-body="messageBody"\n  :has-stats="hasStats"\n  :img-url="imgUrl"\n  :noti-name="notiName">\n</template-noti-checkout>\n'
        },
        1235: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = h(n(47)),
                o = h(n(48)),
                s = h(n(45)),
                a = h(n(118)),
                r = h(n(6)),
                u = h(n(4)),
                l = h(n(634)),
                c = h(n(368)),
                d = h(n(1236)),
                p = h(n(70)),
                f = h(n(410)),
                g = n(351);

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var m = s.default.extend({
                data: function() {
                    return {
                        notificationOnCheckout: null,
                        notiOnCheckoutSetting: {},
                        notiOnCheckoutCount: 0,
                        notiOnCheckoutDataProduct: {},
                        notifyMouseEnter: !1,
                        notiWasShow: [],
                        cartItems: [],
                        statsSpop: null,
                        isBackendPreview: c.default.appSetting.isBackendPreview
                    }
                },
                ready: function() {
                    var n = this;
                    return (0, o.default)(i.default.mark(function t() {
                        var e;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, f.default.getStats(r.default.getParam("shop", "shop").id);
                                case 2:
                                    if (n.statsSpop = t.sent, n.isBackendPreview) return (e = window.spopCheckoutNotiProduct) && (n.$set("notiOnCheckoutDataProduct", e), n.$set("notificationOnCheckout", !0)), t.abrupt("return");
                                    t.next = 7;
                                    break;
                                case 7:
                                    r.default.getParam("shop", "shop").platform && "magento" === r.default.getParam("shop", "shop").platform ? setTimeout(function() {
                                        (0, u.default)("init noti checkout on magento checkout page"), n.getNextNotiOnCheckout()
                                    }, c.default.getNotiOnCheckoutDelayTime() + 2e3) : setTimeout(function() {
                                        n.getNextNotiOnCheckout()
                                    }, c.default.getNotiOnCheckoutDelayTime()), window.closeNotification = function() {
                                        n.$set("notifyMouseEnter", !1)
                                    };
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t, n)
                    }))()
                },
                methods: {
                    getNextNotiOnCheckout: function() {
                        var e = this;
                        if (a.default.isInCheckoutProcess() || "cart" === a.default.getContext().type) {
                            this.notiOnCheckoutSetting = c.default.getNotiOnCheckoutSetting();
                            var t = !1;
                            switch (!0) {
                                case !this.notiOnCheckoutSetting.isCheckoutPageEnable && !this.notiOnCheckoutSetting.isCartPageEnable:
                                    t = !1;
                                    break;
                                case this.notiOnCheckoutSetting.isCheckoutPageEnable && a.default.isInCheckoutProcess():
                                case this.notiOnCheckoutSetting.isCartPageEnable && "cart" === a.default.getContext().type:
                                case this.notiOnCheckoutSetting.isCheckoutPageEnable && this.notiOnCheckoutSetting.isCartPageEnable:
                                    t = !0
                            }
                            if (this.cartItems = p.default.current().items.slice(), t)
                                if (0 < this.cartItems.length) {
                                    var n = Math.floor(Math.random() * (this.cartItems.length - 1));
                                    this.notiOnCheckoutDataProduct = this.cartItems[n], this.notificationOnCheckout = !0, setTimeout(function() {
                                        e.notificationOnCheckout = !1, e.cartItems.splice(n, 1);
                                        var t = setInterval(function() {
                                            if (0 === e.cartItems.length) return clearInterval(t), void setTimeout(function() {
                                                e.notificationOnCheckout = !1
                                            }, c.default.getNotificationDisplayTime());
                                            n = Math.floor(Math.random() * (e.cartItems.length - 1)), e.notiOnCheckoutDataProduct = e.cartItems[n], e.notificationOnCheckout ? e.notificationOnCheckout = !1 : (e.notificationOnCheckout = !0, e.cartItems.splice(n, 1))
                                        }, c.default.getNotificationDisplayTime())
                                    }, c.default.getNotificationDisplayTime())
                                } else this.notificationOnCheckout = !0, setTimeout(function() {
                                    e.notificationOnCheckout = !1
                                }, c.default.getNotificationDisplayTime())
                        }
                        f.default.track(g.TRACK_IMPRESSION_CHECKOUT_NOTI)
                    },
                    closeNotification: function() {
                        var t = this;
                        this.isBackendPreview || setTimeout(function() {
                            t.notificationOnCheckout = !1
                        }, 500)
                    },
                    notifyMouseEnterAction: function() {
                        this.$set("notifyMouseEnter", !0)
                    },
                    notifyMouseLeaveAction: function() {
                        this.$set("notifyMouseEnter", !1)
                    }
                },
                components: {
                    NotiOnCheckoutComponent: d.default
                },
                template: l.default
            });
            e.default = m
        },
        1236: function(t, e, n) {
            var i, o, s = {};
            i = n(1237), Object.keys(i).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/spop/components/notificationOnCheckout.vue: named exports in *.vue files are ignored."), o = n(1238), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var a = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            o && (a.template = o), a.computed || (a.computed = {}), Object.keys(s).forEach(function(t) {
                var e = s[t];
                a.computed[t] = function() {
                    return e
                }
            })
        },
        1237: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = f(n(47)),
                i = f(n(48)),
                s = f(n(6)),
                a = f(n(46)),
                r = f(n(368)),
                u = f(n(434)),
                l = f(n(436)),
                c = f(n(70)),
                d = f(n(36)),
                p = f(n(635));

            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                props: {
                    notiProductData: Object,
                    statsSpop: Object
                },
                data: function() {
                    return {
                        messageBody: "",
                        hasStats: !1,
                        paramsCcart: s.default.getParam("shop", "settings").apps.countdown_cart ? s.default.getParam("shop", "settings").apps.countdown_cart : null,
                        imgUrl: this.getImgUrl(),
                        notiName: "wrapper-noti-on-checkout",
                        isBackendPreview: r.default.appSetting.isBackendPreview
                    }
                },
                computed: {
                    bodyContent: function() {
                        var t = r.default.getAppSettings().checkoutNoti ? r.default.getAppSettings().checkoutNoti.message : "{{purchased_number}} customer(s) has bought this {{product_title}} in the last 24 hours.";
                        return -1 !== t.indexOf("{{product_title}}") && (t = t.replace("{{product_title}}", this.notiProductData.productTitle)), t
                    }
                },
                ready: function() {
                    var t = (0, i.default)(o.default.mark(function t() {
                        var e, n, i = this;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.isBackendPreview) {
                                        t.next = 6;
                                        break
                                    }
                                    this.messageBody = r.default.getAppSettings().checkoutNoti.message, this.convertPreviewData(), this.hasStats = !0, t.next = 8;
                                    break;
                                case 6:
                                    return t.next = 8, this.start();
                                case 8:
                                    e = document.querySelector("#bkt--spop .noti-title span"), n = document.querySelector("#bkt--spop .noti-body span"), e && this.clamp(e, {
                                        clamp: 2
                                    }), n && this.clamp(n, {
                                        clamp: 2
                                    }), a.default.trigger("spop-checkout-ready"), a.default.listen("spop-checkout-setting-change", function(t) {
                                        r.default.appSetting.settings_v2 = t, i.imgUrl = i.getImgUrl(), i.messageBody = t.checkoutNoti.message, i.convertPreviewData(), a.default.trigger("spop-need-reload-setting")
                                    });
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                methods: {
                    convertToStart: function() {
                        this.statsSpop && 0 < this.statsSpop.count && (this.hasStats = !0, u.default.setNotiOnCheckoutShowed(), -1 !== this.messageBody.indexOf("{{checkout_number}}") && (this.messageBody = this.messageBody.replace("{{checkout_number}}", this.statsSpop.count)))
                    },
                    start: function() {
                        var t = (0, i.default)(o.default.mark(function t() {
                            var e = this;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        this.paramsCcart ? 0 < c.default.current().items.length ? (this.messageBody = r.default.getAppSettings().checkoutNoti ? r.default.getAppSettings().checkoutNoti.message : "{{purchased_number}} customer(s) has bought this {{product_title}} in the last 24 hours.", l.default.getStatistic(this.notiProductData.productRefId, function(t) {
                                            t && 0 < t.purchased_items ? (e.hasStats = !0, -1 !== e.messageBody.indexOf("{{purchased_number}}") && (e.messageBody = e.messageBody.replace("{{purchased_number}}", t.purchased_items)), -1 !== e.messageBody.indexOf("{{product_title}}") && (e.messageBody = e.messageBody.replace("{{product_title}}", e.notiProductData.productTitle)), -1 !== e.messageBody.indexOf("{{stock_number}}") && (e.messageBody = e.messageBody.replace("{{stock_number}}", t.stock_number)), u.default.setNotiOnCheckoutShowed()) : e.hasStats = !1
                                        }, "last_24_hours", "day")) : (this.messageBody = r.default.getAppSettings().checkoutNoti ? r.default.getAppSettings().checkoutNoti.message : "{{checkout_number}} customer(s) has completed checking out in the last 24 hours", -1 === this.messageBody.indexOf("{{purchased_number}}") && -1 === this.messageBody.indexOf("{{product_title}}") || (this.messageBody = "{{checkout_number}} customer(s) has completed checking out in the last 24 hours", this.convertToStart())) : (this.messageBody = r.default.getAppSettings().checkoutNoti ? r.default.getAppSettings().checkoutNoti.message : "{{checkout_number}} customer(s) has completed checking out in the last 24 hours", this.convertToStart());
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    convertPreviewData: function() {
                        if (window.spopIsInstallCcart) return this.messageBody = this.messageBody.replace("{{purchased_number}}", this.notiProductData.purchasedNumber), this.messageBody = this.messageBody.replace("{{stock_number}}", this.notiProductData.stockNumber), void(this.messageBody = this.messageBody.replace("{{product_title}}", this.notiProductData.productTitle));
                        this.messageBody = this.messageBody.replace("{{checkout_number}}", this.notiProductData.checkoutNumber)
                    },
                    getImgUrl: function() {
                        return "demo" === r.default.getAppSettings().checkoutNoti.imageSelectType ? d.default.assetsPath + "/spop/assets/images/checkout/" + r.default.getAppSettings().checkoutNoti.demoImgName + ".png" : r.default.getAppSettings().checkoutNoti.customImgUrl
                    }
                },
                components: {
                    TemplateNotiCheckout: p.default
                }
            }
        },
        1238: function(t, e) {
            t.exports = '\n<template-noti-checkout :message-body="messageBody" :has-stats="hasStats" :img-url="imgUrl" :noti-name="notiName"></template-noti-checkout>\n'
        },
        1239: function(t, e, i) {
            var o = {
                "./af": [651, 6],
                "./af.js": [651, 6],
                "./ar": [658, 13],
                "./ar-dz": [652, 7],
                "./ar-dz.js": [652, 7],
                "./ar-kw": [653, 8],
                "./ar-kw.js": [653, 8],
                "./ar-ly": [654, 9],
                "./ar-ly.js": [654, 9],
                "./ar-ma": [655, 10],
                "./ar-ma.js": [655, 10],
                "./ar-sa": [656, 11],
                "./ar-sa.js": [656, 11],
                "./ar-tn": [657, 12],
                "./ar-tn.js": [657, 12],
                "./ar.js": [658, 13],
                "./az": [659, 14],
                "./az.js": [659, 14],
                "./be": [660, 15],
                "./be.js": [660, 15],
                "./bg": [661, 16],
                "./bg.js": [661, 16],
                "./bm": [662, 17],
                "./bm.js": [662, 17],
                "./bn": [663, 18],
                "./bn.js": [663, 18],
                "./bo": [664, 19],
                "./bo.js": [664, 19],
                "./br": [665, 20],
                "./br.js": [665, 20],
                "./bs": [666, 21],
                "./bs.js": [666, 21],
                "./ca": [667, 22],
                "./ca.js": [667, 22],
                "./cs": [668, 23],
                "./cs.js": [668, 23],
                "./cv": [669, 24],
                "./cv.js": [669, 24],
                "./cy": [670, 25],
                "./cy.js": [670, 25],
                "./da": [671, 26],
                "./da.js": [671, 26],
                "./de": [674, 29],
                "./de-at": [672, 27],
                "./de-at.js": [672, 27],
                "./de-ch": [673, 28],
                "./de-ch.js": [673, 28],
                "./de.js": [674, 29],
                "./dv": [675, 30],
                "./dv.js": [675, 30],
                "./el": [676, 31],
                "./el.js": [676, 31],
                "./en-au": [677, 32],
                "./en-au.js": [677, 32],
                "./en-ca": [678, 33],
                "./en-ca.js": [678, 33],
                "./en-gb": [679, 34],
                "./en-gb.js": [679, 34],
                "./en-ie": [680, 35],
                "./en-ie.js": [680, 35],
                "./en-il": [681, 36],
                "./en-il.js": [681, 36],
                "./en-nz": [682, 37],
                "./en-nz.js": [682, 37],
                "./eo": [683, 38],
                "./eo.js": [683, 38],
                "./es": [686, 41],
                "./es-do": [684, 39],
                "./es-do.js": [684, 39],
                "./es-us": [685, 40],
                "./es-us.js": [685, 40],
                "./es.js": [686, 41],
                "./et": [687, 42],
                "./et.js": [687, 42],
                "./eu": [688, 43],
                "./eu.js": [688, 43],
                "./fa": [689, 44],
                "./fa.js": [689, 44],
                "./fi": [690, 45],
                "./fi.js": [690, 45],
                "./fo": [691, 46],
                "./fo.js": [691, 46],
                "./fr": [694, 49],
                "./fr-ca": [692, 47],
                "./fr-ca.js": [692, 47],
                "./fr-ch": [693, 48],
                "./fr-ch.js": [693, 48],
                "./fr.js": [694, 49],
                "./fy": [695, 50],
                "./fy.js": [695, 50],
                "./gd": [696, 51],
                "./gd.js": [696, 51],
                "./gl": [697, 52],
                "./gl.js": [697, 52],
                "./gom-latn": [698, 53],
                "./gom-latn.js": [698, 53],
                "./gu": [699, 54],
                "./gu.js": [699, 54],
                "./he": [700, 55],
                "./he.js": [700, 55],
                "./hi": [701, 56],
                "./hi.js": [701, 56],
                "./hr": [702, 57],
                "./hr.js": [702, 57],
                "./hu": [703, 58],
                "./hu.js": [703, 58],
                "./hy-am": [704, 59],
                "./hy-am.js": [704, 59],
                "./id": [705, 60],
                "./id.js": [705, 60],
                "./is": [706, 61],
                "./is.js": [706, 61],
                "./it": [707, 62],
                "./it.js": [707, 62],
                "./ja": [708, 63],
                "./ja.js": [708, 63],
                "./jv": [709, 64],
                "./jv.js": [709, 64],
                "./ka": [710, 65],
                "./ka.js": [710, 65],
                "./kk": [711, 66],
                "./kk.js": [711, 66],
                "./km": [712, 67],
                "./km.js": [712, 67],
                "./kn": [713, 68],
                "./kn.js": [713, 68],
                "./ko": [714, 69],
                "./ko.js": [714, 69],
                "./ku": [715, 70],
                "./ku.js": [715, 70],
                "./ky": [716, 71],
                "./ky.js": [716, 71],
                "./lb": [717, 72],
                "./lb.js": [717, 72],
                "./lo": [718, 73],
                "./lo.js": [718, 73],
                "./lt": [719, 74],
                "./lt.js": [719, 74],
                "./lv": [720, 75],
                "./lv.js": [720, 75],
                "./me": [721, 76],
                "./me.js": [721, 76],
                "./mi": [722, 77],
                "./mi.js": [722, 77],
                "./mk": [723, 78],
                "./mk.js": [723, 78],
                "./ml": [724, 79],
                "./ml.js": [724, 79],
                "./mn": [725, 80],
                "./mn.js": [725, 80],
                "./mr": [726, 81],
                "./mr.js": [726, 81],
                "./ms": [728, 83],
                "./ms-my": [727, 82],
                "./ms-my.js": [727, 82],
                "./ms.js": [728, 83],
                "./mt": [729, 84],
                "./mt.js": [729, 84],
                "./my": [730, 85],
                "./my.js": [730, 85],
                "./nb": [731, 86],
                "./nb.js": [731, 86],
                "./ne": [732, 87],
                "./ne.js": [732, 87],
                "./nl": [734, 89],
                "./nl-be": [733, 88],
                "./nl-be.js": [733, 88],
                "./nl.js": [734, 89],
                "./nn": [735, 90],
                "./nn.js": [735, 90],
                "./pa-in": [736, 91],
                "./pa-in.js": [736, 91],
                "./pl": [737, 92],
                "./pl.js": [737, 92],
                "./pt": [739, 94],
                "./pt-br": [738, 93],
                "./pt-br.js": [738, 93],
                "./pt.js": [739, 94],
                "./ro": [740, 95],
                "./ro.js": [740, 95],
                "./ru": [741, 96],
                "./ru.js": [741, 96],
                "./sd": [742, 97],
                "./sd.js": [742, 97],
                "./se": [743, 98],
                "./se.js": [743, 98],
                "./si": [744, 99],
                "./si.js": [744, 99],
                "./sk": [745, 100],
                "./sk.js": [745, 100],
                "./sl": [746, 101],
                "./sl.js": [746, 101],
                "./sq": [747, 102],
                "./sq.js": [747, 102],
                "./sr": [749, 104],
                "./sr-cyrl": [748, 103],
                "./sr-cyrl.js": [748, 103],
                "./sr.js": [749, 104],
                "./ss": [750, 105],
                "./ss.js": [750, 105],
                "./sv": [751, 106],
                "./sv.js": [751, 106],
                "./sw": [752, 107],
                "./sw.js": [752, 107],
                "./ta": [753, 108],
                "./ta.js": [753, 108],
                "./te": [754, 109],
                "./te.js": [754, 109],
                "./tet": [755, 110],
                "./tet.js": [755, 110],
                "./tg": [756, 111],
                "./tg.js": [756, 111],
                "./th": [757, 112],
                "./th.js": [757, 112],
                "./tl-ph": [758, 113],
                "./tl-ph.js": [758, 113],
                "./tlh": [759, 114],
                "./tlh.js": [759, 114],
                "./tr": [760, 115],
                "./tr.js": [760, 115],
                "./tzl": [761, 116],
                "./tzl.js": [761, 116],
                "./tzm": [763, 118],
                "./tzm-latn": [762, 117],
                "./tzm-latn.js": [762, 117],
                "./tzm.js": [763, 118],
                "./ug-cn": [764, 119],
                "./ug-cn.js": [764, 119],
                "./uk": [765, 120],
                "./uk.js": [765, 120],
                "./ur": [766, 121],
                "./ur.js": [766, 121],
                "./uz": [768, 123],
                "./uz-latn": [767, 122],
                "./uz-latn.js": [767, 122],
                "./uz.js": [768, 123],
                "./vi": [769, 124],
                "./vi.js": [769, 124],
                "./x-pseudo": [770, 125],
                "./x-pseudo.js": [770, 125],
                "./yo": [771, 126],
                "./yo.js": [771, 126],
                "./zh-cn": [772, 127],
                "./zh-cn.js": [772, 127],
                "./zh-hk": [773, 128],
                "./zh-hk.js": [773, 128],
                "./zh-tw": [774, 129],
                "./zh-tw.js": [774, 129]
            };

            function n(e) {
                var n = o[e];
                return n ? i.e(n[1]).then(function() {
                    var t = n[0];
                    return i.t(t, 7)
                }) : Promise.resolve().then(function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                })
            }
            n.keys = function() {
                return Object.keys(o)
            }, n.id = 1239, t.exports = n
        },
        179: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = P(n(9)),
                s = P(n(329)),
                i = P(n(47)),
                a = P(n(48)),
                r = P(n(3)),
                u = P(n(6)),
                l = P(n(321)),
                c = P(n(74)),
                d = P(n(118)),
                p = P(n(4)),
                f = P(n(46)),
                g = n(27),
                h = P(n(302)),
                m = P(n(119)),
                _ = P(n(50)),
                y = P(n(70)),
                v = P(n(368)),
                T = n(351),
                k = P(n(1223)),
                S = P(n(1235)),
                C = P(n(434)),
                N = P(n(410)),
                w = P(n(636));

            function P(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var O = {
                isActiveFeatureUpsellNoti: !1,
                init: function() {
                    var e = this;
                    return (0, a.default)(i.default.mark(function t() {
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (u.default.getParam("prevent-show-on-checkout")) return t.abrupt("return");
                                    t.next = 2;
                                    break;
                                case 2:
                                    return t.next = 4, v.default.canStartApp();
                                case 4:
                                    if (t.sent) {
                                        t.next = 8;
                                        break
                                    }
                                    return (0, p.default)("Spop can't start"), t.abrupt("return");
                                case 8:
                                    if ("en" !== v.default.getLocaleKey()) return t.prev = 9, t.next = 12, n(1239)("./" + v.default.getLocaleKey());
                                    t.next = 17;
                                    break;
                                case 12:
                                    t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14, t.t0 = t.catch(9), (0, p.default)("Spop cannot find locale language", v.default.getLocaleKey());
                                case 17:
                                    e.run();
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e, [
                            [9, 14]
                        ])
                    }))()
                },
                run: function() {
                    var n = this;
                    return (0, a.default)(i.default.mark(function t() {
                        var e;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = d.default.getContext().payload.id, v.default.appSetting.isBackendPreview) return n.initCheckoutPreview(), n.initSignUpPreview(), n.initPreview(), n.initUpsellPreview(), t.abrupt("return");
                                    t.next = 7;
                                    break;
                                case 7:
                                    if (m.default.isInTestGroup(T.SPOP_UPSELL_NOTI).then(function(t) {
                                            n.isActiveFeatureUpsellNoti = t
                                        }), e) return t.next = 11, l.default.getProductByRefId(e, function(t) {
                                        t && t.tags && -1 !== t.tags.indexOf("beeketing-hidden") ? (0, p.default)("Product has tag hidden") : (N.default.getProductByRefId(t), n.addAppBlock())
                                    }, !0, !0);
                                    t.next = 13;
                                    break;
                                case 11:
                                    t.next = 15;
                                    break;
                                case 13:
                                    return t.next = 15, n.addAppBlock();
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }, t, n)
                    }))()
                },
                addAppBlock: function() {
                    var s = this;
                    (0, p.default)("Spop v2 started!"), m.default.isInTestGroup(T.AB_TEST_NEW_THEME_SEP_2018).then(function(t) {
                        t ? c.default.loadCSS(c.default.getAssetUrl("spop/assets/styles/new_theme_2018.css")) : c.default.loadCSS(c.default.getAssetUrl("spop/assets/styles/styles.css"))
                    }), m.default.isInTestGroup(T.AB_SPOP_NEW_SETTING_NOV_2018).then(function(t) {
                        if (t) {
                            var e = !d.default.isInCheckoutProcess() && "cart" !== d.default.getContext().type;
                            if (v.default.appSetting.settings_v2.checkoutNoti.enable && (d.default.isInCheckoutProcess() || "cart" === d.default.getContext().type)) {
                                var n = d.default.getAppBlock(T.appCode);
                                h.default.get(n, new S.default)
                            }
                            if ((v.default.appSetting.settings_v2.salesNoti.enable || v.default.appSetting.settings_v2.signupNoti.enable || v.default.appSetting.settings_v2.upsellNoti.enable && s.isActiveFeatureUpsellNoti) && e) {
                                var i = d.default.getAppBlock(T.appCode);
                                h.default.get(i, new k.default)
                            }
                        } else {
                            var o = void 0;
                            switch (!0) {
                                case d.default.isInCheckoutProcess() || "cart" === d.default.getContext().type:
                                    o = d.default.getAppBlock(T.appCode), h.default.get(o, new S.default);
                                    break;
                                default:
                                    o = d.default.getAppBlock(T.appCode), h.default.get(o, new k.default)
                            }
                        }
                    }), this.trackClicksSaleNoti(), this.trackClicksUpsellNoti();
                    var o = JSON.parse(_.default.get("add_cart_immediatly"));
                    ("product" !== d.default.getContext().type || o && o.id !== d.default.getContext().payload.id) && _.default.remove("add_cart_immediatly"), f.default.listen(g.ADD_TO_CART, function(t) {
                        var e = t.item;
                        if (o) {
                            var n = parseInt(_.default.get("spop_noti_id"), 10),
                                i = y.default.current();
                            switch (o.type[0]) {
                                case "upsell-noti-clicks":
                                    N.default.track(T.TRACK_ADD_CART_UP_SELL_NOTI, {
                                        spop_noti_id: 0,
                                        spop_product_ref_id: e.productRefId,
                                        cart_token: i ? i.token : null
                                    });
                                    break;
                                default:
                                    N.default.track(T.TRACK_ADD_CART_SALE_NOTI, {
                                        spop_noti_id: n,
                                        spop_product_ref_id: e.productRefId,
                                        cart_token: i ? i.token : null
                                    })
                            }
                            _.default.remove("spop_noti_id")
                        }
                    })
                },
                initPreview: function() {
                    for (var t = (0, r.default)(".spop-preview"), e = 0; e < t.length; e++) {
                        var n = Number(t[e].getAttribute("data-id")),
                            i = (0, r.default)(t[e]).data("type");
                        if (!(-1 !== window.listNotiIdAppended.indexOf(n) && !w.default.getIsRealPreview() || w.default.getIsRealPreview() && "fake" === i)) {
                            window.listNotiIdAppended = [].concat((0, s.default)(window.listNotiIdAppended), [n]);
                            var o = new k.default;
                            h.default.get((0, r.default)(t[e]), o)
                        }
                    }
                    m.default.isInTestGroup(T.AB_TEST_NEW_THEME_SEP_2018).then(function(t) {
                        t ? c.default.loadCSS(c.default.getAssetUrl("spop/assets/styles/new_theme_2018.css")) : c.default.loadCSS(c.default.getAssetUrl("spop/assets/styles/styles.css"))
                    })
                },
                initCheckoutPreview: function() {
                    var t = (0, r.default)(".spop-preview-checkout");
                    if (t.length && !t.attr("is-init-preview")) {
                        t.attr("is-init-preview", !0);
                        var e = new S.default;
                        h.default.get(t, e)
                    }
                },
                initSignUpPreview: function() {
                    var t = (0, r.default)(".spop-preview-sign-up");
                    if (t.length && !t.attr("is-init-preview")) {
                        t.attr("is-init-preview", !0);
                        var e = new k.default;
                        h.default.get(t, e)
                    }
                },
                initUpsellPreview: function() {
                    var t = (0, r.default)(".spop-preview-upsell-noti");
                    if (t.length && !t.attr("is-init-preview")) {
                        t.attr("is-init-preview", !0);
                        var e = new k.default;
                        h.default.get(t, e)
                    }
                },
                trackClicks: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                        n = C.default.getTrackClicks(t),
                        i = {
                            page: d.default.getContext().type,
                            id: d.default.getContext().payload.id,
                            type: n
                        };
                    if (0 < n.length) {
                        if (_.default.set("spop_noti_id", n), _.default.set("add_cart_immediatly", (0, o.default)(i), 1, 1), C.default.clearTrackClicks(t), "upsell_noti" === e) return void N.default.trackClickUpSellNoti(n);
                        N.default.trackClick(n)
                    }
                },
                trackClicksSaleNoti: function() {
                    this.trackClicks(T.LOCAL_STORAGE_TRACK_CLICKS)
                },
                trackClicksUpsellNoti: function() {
                    this.trackClicks(T.LOCAL_STORAGE_TRACK_CLICKS_UP_SELL_NOTI, "upsell_noti")
                }
            };
            e.default = O
        },
        302: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = o(n(51)),
                a = o(n(3)),
                r = o(n(45)),
                u = o(n(4));

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var s = {
                instances: {},
                generateId: function() {
                    for (var t = void 0; t = parseInt("" + (0, i.default)(1e3, 9999) + (new Date).getTime(), 10), void 0 !== this.instances[t];);
                    return t
                },
                get: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        n = "vue-instance",
                        i = (0, a.default)(t),
                        o = i.data(n);
                    if (!o || void 0 === this.instances[o]) {
                        o = this.generateId(), (0, u.default)("Starting instance " + o);
                        var s = void 0;
                        s = e || new r.default, this.instances[o] = s, t && t[0] && void 0 !== t[0] && this.instances[o].$mount().$appendTo(t[0]), i.data(n, o)
                    }
                    return this.instances[o]
                }
            };
            e.default = s
        },
        314: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i(n(6)),
                a = i(n(25));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var o = {
                getUrlLandingPage: function(t, e) {
                    var n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        i = s.default.getParam("shop").shop.name || window.location.hostname,
                        o = a.default.currentKey();
                    return n ? "https://www.shopbase.com/powered-by-shopbase/?utm_source=cs&utm_medium=beeketing&utm_campaign=poweredbybkt&utm_term=poweredbybkt" : "https://beeketing.com/" + e + "?utm_channel=referral&utm_medium=poweredby&utm_term=customized" + t + "widget&utm_fromapp=" + t + "&shopname=" + i + "&platform=" + o + "&ignore="
                }
            };
            e.default = o
        },
        321: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = o(n(16)),
                a = o(n(28)),
                f = o(n(9)),
                r = o(n(3)),
                l = o(n(6)),
                g = o(n(25)),
                i = o(n(120));

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var u = {
                getEndpoint: function() {
                    return l.default.getGlobalSetting("beeketing_api")
                },
                getGoApiEndpoint: function() {
                    return l.default.getParam("loader", "gapiBasePath")
                },
                isEnable: function() {
                    return this.getEndpoint()
                },
                sendRequest: function(t, e, n, i, o) {
                    var s = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                    r.default.ajax(t, {
                        method: e,
                        data: s ? (0, f.default)(n) : n,
                        dataType: "json",
                        timeout: i,
                        contentType: s ? "application/json" : "application/x-www-form-urlencoded; charset=UTF-8",
                        success: function(t) {
                            o(t)
                        },
                        error: function() {
                            o(null)
                        }
                    })
                },
                request: function(t, e, n, i) {
                    var o = l.default.getParam("shop", "shop"),
                        s = this.getEndpoint() + "/" + e + ".json",
                        a = n;
                    a.api_key = o.api_key;
                    this.sendRequest(s, t, a, 3e3, i)
                },
                gApiRequest: function(t, e, n, i) {
                    var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "",
                        s = 5 < arguments.length && void 0 !== arguments[5] && arguments[5],
                        a = l.default.getParam("shop", "shop"),
                        r = this.getGoApiEndpoint() + "/" + e + o,
                        u = n;
                    u.api_key = a.api_key;
                    this.sendRequest(r, t, u, 1e4, i, s)
                },
                getProductByRefId: function(t, e, n, i) {
                    this.getProductByRefIds([t], function(t) {
                        t && t.length ? e(t[0]) : e(null)
                    }, n, i)
                },
                getProductByRefIds: function(t, l, c, d) {
                    var p = this;
                    u.isEnable() ? this.gApiRequest("GET", "product/products", {
                        ref_id: t.join(",")
                    }, function(t) {
                        var e = [],
                            n = void 0;
                        if (t)
                            for (var i = 0; i < t.length; i++) {
                                n = t[i], c && (n.variants = p.excludeUnavailableVariants(n.variants));
                                var o = 0,
                                    s = void 0;
                                n.large_image_url = n.image_url, n.medium_image_url = g.default.current().request.getSizedImageUrl(n.image_url, "medium"), n.small_image_url = g.default.current().request.getSizedImageUrl(n.image_url, "small"), n.images = n.images && n.images.length ? n.images : [{
                                    src: n.image_url
                                }];
                                for (var a = {}, r = 0; r < n.images.length; r++) n.images[r].ref_id && (a[n.images[r].ref_id] = n.images[r].src);
                                for (var u = 0; u < n.variants.length; u++) n.variants[u].attributes && (n.variants[u].parsed_attributes = (0, f.default)(n.variants[u].attributes)), s = n.image_url, n.variants[u].image_ref_id && a[n.variants[u].image_ref_id] && (s = a[n.variants[u].image_ref_id]), n.variants[u].image_url = s, n.variants[u].medium_image_url = s, n.variants[u].large_image_url = s, 0 < n.variants[u].inventory_quantity && (o += n.variants[u].inventory_quantity);
                                "undefined" !== n.quantity && n.quantity || (n.quantity = o), n.url = g.default.current().product_util.getProductUrl(n.handle), d ? e.push(n) : !n.variants.length || n.tags && -1 !== n.tags.indexOf("hidden") || e.push(n)
                            }
                        l(e)
                    }, ".json") : l([])
                },
                excludeUnavailableVariants: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) this.isAvailableVariant(t[n]) && e.push(t[n]);
                    return e
                },
                isAvailableVariant: function(t) {
                    return !i.default.isHiddenVariantTitle(t.title) && (!t.inventory_management || "null" === t.inventory_management || "deny" !== t.inventory_policy || void 0 === t.inventory_quantity || 0 < t.inventory_quantity)
                },
                cached: {},
                getJson: function(n) {
                    var i = this,
                        o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return new a.default(function(e, t) {
                        void 0 === i.cached[n] ? r.default.ajax({
                            url: n,
                            dataType: "json",
                            data: (0, s.default)({
                                api_key: l.default.getParam("shop", "shop").api_key
                            }, o),
                            cache: !0,
                            timeout: 1e4,
                            success: function(t) {
                                u.cached[n] = t, e(t)
                            },
                            error: function() {
                                t(null)
                            }
                        }) : e(i.cached[n])
                    })
                },
                updateSubscription: function(t, e, n) {
                    var i = {
                        contact_ref_id: t,
                        subscription: e,
                        cart_token: n
                    };
                    this.gApiRequest("POST", "pusher/subscription", i, function() {}, ".json")
                },
                getProductsByHandles: function(t, e) {
                    var n = "product/handle/" + l.default.getParam("shop", "shop").id;
                    this.gApiRequest("POST", n, {
                        handle: t
                    }, function(t) {
                        t && t.success && t.data.length && e(t.data)
                    }, "", !0)
                }
            };
            e.default = u
        },
        324: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.APP_CODE = "countdown_cart", e.LS_COUNTDOWN_TIMER = "ls_countdown_timer", e.CCART_CART_TOKEN = "ccart_cart_token", e.CCART_TRACKING_CART_DATA = "ccart_tracking_cart_data", e.CCART_TRACKING_DECREASE_QUANTITY = "ccart_tracking_decrease_quantity", e.CCART_WIDGET_POSITION_CHOOSEN = "countdown_cart_widget_position_choosen", e.CCART_PRODUCT_STATS_LOCAL_STORAGE_KEY = "ccart_ps", e.COUNTDOWN_TIMER_MINIMUM_WIDTH = 160, e.CCART_RETRY_FIND_ATTACKED_ELEMENT = "ccart_retry_find_attacked_element", e.CCART_SHOW_DIFFERENCE_COUNTDOWN_TIMER = "ccart_show_difference_countdown_timer", e.CCART_COUNTDOWN_TIMER_LABEL_UNDER_PRODUCT_IMAGE = "ccart_countdown_timer_label_under_product_image", e.CCART_TIMER_LABEL_UNDER_IMAGE_READY = "ccart_timer_label_under_image_ready", e.CCART_TEST_SETINTERVAL_STYLE_TIMER = "ccart_test_setinterval_style_timer", e.CCART_UPDATE_FONT_2018 = "CCart_update_font_2018", e.CCART_SHOW_ON_CHECKOUT_NON_SHOPIFY = "show-on-checkout-page-non-shopify"
        },
        351: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.appCode = "sale_notification", e.theme = "basic", e.timeAgoPeriod = 43200, e.COOKIE_NOTIFICATION_CLOSED = "spop_closed", e.LOCAL_STORAGE_NOTIFICATIONS = "spop_notification", e.COOKIE_NOTIFY_VIEWED = "spop_viewed", e.COOKIE_NOTI_ON_CHECKOUT_VIEWED = "spop_on_checkout_viewed", e.TRACK_IMPRESSION = "spop_impression", e.TRACK_CLICKS = "spop_clicks", e.TRACK_CLICKS_ORDER = "spop_clicks_order", e.LOCAL_STORAGE_TRACK_CLICKS = "spop_track_clicks", e.COOKIE_SIGN_UP_NOTI_VIEWED = "spop_sign_up_viewed", e.TRACK_IMPRESSION_CHECKOUT_NOTI = "spop_checkout_noti_impression", e.TRACK_IMPRESSION_SIGN_UP_NOTI = "spop_sign_up_impression", e.TRACK_CLICKS_SIGN_UP_NOTI = "spop_sign_up_clicks", e.TRACK_IMPRESSION_UP_SELL_NOTI = "spop_upsell_noti_impression", e.TRACK_CLICKS_UP_SELL_NOTI = "spop_upsell_noti_clicks", e.LOCAL_STORAGE_TRACK_CLICKS_UP_SELL_NOTI = "spop_track_clicks_up_sell_noti", e.TRACK_ADD_CART_UP_SELL_NOTI = "spop_upsell_noti_add_to_cart", e.TRACK_ADD_CART_SALE_NOTI = "spop_sale_noti_add_to_cart", e.DEFAULT_CUSTOMER_ADDRESS = "somewhere", e.DEFAULT_CUSTOMER_CITY = "somewhere", e.DEFAULT_CUSTOMER_COUNTRY = "somewhere", e.SPOP_ON_CHECKOUT = "spop_on_checkout_sdk", e.AB_TEST_NEW_THEME_SEP_2018 = "spop_improve_theme_sep_2018", e.AB_SPOP_NEW_SETTING_NOV_2018 = "Spop_new_setting_nov2018", e.SPOP_UPSELL_NOTI = "Spop_upsell_noti"
        },
        352: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = a(n(6)),
                o = n(324),
                s = a(n(140));

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var r = {
                getPowerUser: function() {
                    return this.getAppSettings().isPowerUser
                },
                getAppSettings: function() {
                    var t = i.default.getParam("shop").settings.apps[o.APP_CODE];
                    return t.isBackendPreview ? window.currentShopSettings.settings.apps[o.APP_CODE] : t
                },
                getSocialProofSettings: function() {
                    return this.getAppSettings().socialProof
                },
                getCountdownTimerSettings: function() {
                    return this.getAppSettings().countdownTimer
                },
                getStockCountdownSettings: function() {
                    return this.getAppSettings().stockCountdown
                },
                getProductStatsUrl: function() {
                    var t = i.default.getParam("shop", "shop").api_key;
                    return s.default.getProductStatsUrl(t)
                },
                getCreatedAt: function() {
                    return this.getAppSettings().createdAt
                },
                getShopPlatform: function() {
                    return i.default.getParam("shop").shop.platform
                },
                getTimers: function() {
                    return this.getCountdownTimerSettings().timers ? this.getCountdownTimerSettings().timers : []
                }
            };
            e.default = r
        },
        368: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = g(n(47)),
                s = g(n(48)),
                a = g(n(300)),
                i = g(n(1222)),
                r = g(n(6)),
                u = g(n(119)),
                l = g(n(118)),
                c = g(n(4)),
                d = g(n(15)),
                p = g(n(434)),
                f = n(351);

            function g(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var h = {
                appSetting: r.default.getParam("shop").settings ? r.default.getParam("shop").settings.apps[f.appCode] : {},
                localeKey: r.default.getParam("shop").settings ? r.default.getParam("shop").settings.apps[f.appCode].settings_v2.translate.timeAgo.code : {},
                getAppSettings: function() {
                    var t = this.appSetting.settings_v2;
                    return t.displayOptions = (0, i.default)(t.displayOptions, function(t) {
                        return "true" === t || "false" === t ? "true" === t ? 1 : 0 : t
                    }), t.displayOptions || (t.displayOptions = {}), !t.displayOptions.lastTimeToDisplay && this.appSetting && (t.displayOptions.lastTimeToDisplay = {
                        number: this.appSetting.settings.time_hide ? this.appSetting.settings.time_hide : 30,
                        time: (this.appSetting.settings.time_list ? this.appSetting.settings.time_list : "day") + "s"
                    }), t
                },
                canStartApp: function() {
                    var e = this;
                    return (0, s.default)(o.default.mark(function t() {
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.appSetting.isBackendPreview) return t.abrupt("return", !0);
                                    t.next = 2;
                                    break;
                                case 2:
                                    if (e.getAppSettings().enable) {
                                        t.next = 5;
                                        break
                                    }
                                    return (0, c.default)("App disabled"), t.abrupt("return", !1);
                                case 5:
                                    if (d.default.isMobile && !e.isTrue(e.getAppSettings().displayOptions.enableOnMobile)) return (0, c.default)("App disable on mobile"), t.abrupt("return", !1);
                                    t.next = 8;
                                    break;
                                case 8:
                                    if (l.default.isInCheckoutProcess() || "cart" === l.default.getContext().type) return t.next = 11, e.getAbTestsActive(f.SPOP_ON_CHECKOUT);
                                    t.next = 15;
                                    break;
                                case 11:
                                    if (t.sent) return t.abrupt("return", !0);
                                    t.next = 13;
                                    break;
                                case 13:
                                    return (0, c.default)("App on checkout page", l.default.isInCheckoutProcess(), l.default.getContext().type), t.abrupt("return", !1);
                                case 15:
                                    if (p.default.getNotificationClosed()) return (0, c.default)("Noti closed"), t.abrupt("return", !1);
                                    t.next = 18;
                                    break;
                                case 18:
                                    return t.abrupt("return", !0);
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                },
                isTrue: function(t) {
                    return !(!t || "false" === t || "0" === t)
                },
                getLocaleKey: function() {
                    switch (this.localeKey = this.localeKey || "en", this.localeKey) {
                        case "zh":
                            this.localeKey = this.localeKey + "-cn"
                    }
                    return this.localeKey
                },
                getLimitPerPage: function() {
                    return parseInt(this.getAppSettings().displayOptions.maximumNotiPerPage, 10)
                },
                isRepeatNotification: function() {
                    return this.getAppSettings().displayOptions.enableRepeatNoti
                },
                isHideBeeketingBrand: function() {
                    return 1 == this.appSetting.isPowerUser
                },
                getNotificationDisplayTime: function() {
                    return this.getAppSettings().displayOptions.displayTime ? 1e3 * parseInt(this.getAppSettings().displayOptions.displayTime, 10) : 5e3
                },
                getNotiOnCheckoutDelayTime: function() {
                    return this.getAppSettings().checkoutNoti && this.getAppSettings().checkoutNoti.timeDelay ? 1e3 * parseInt(this.getAppSettings().checkoutNoti.timeDelay, 10) : 3e3
                },
                getNotiUpsellSettings: function() {
                    return !!this.getAppSettings().upsellNoti && this.getAppSettings().upsellNoti
                },
                getNotiStructure: function() {
                    return this.getAppSettings().notiStructure
                },
                getDisplayOptions: function() {
                    return this.getAppSettings().displayOptions
                },
                isRandomMode: function() {
                    return this.getAppSettings().enableRandomDisplayTime
                },
                getShopId: function() {
                    return r.default.getParam("shop").shop.id
                },
                getSettingVersion: function() {
                    return r.default.getParam("shop").settingVersion
                },
                getTheme: function() {
                    return "customize" === this.getDesign().themeTypeChoosen ? "customize" : this.getAppSettings().design.themeType[this.getAppSettings().design.themeTypeChoosen]
                },
                getThemeType: function() {
                    return this.getDesign().themeTypeChoosen
                },
                getDesign: function() {
                    return this.getAppSettings().design
                },
                getLayout: function() {
                    return this.getAppSettings().layout
                },
                getTranslate: function() {
                    return this.getAppSettings().translate
                },
                getPosition: function() {
                    return d.default.isMobile ? this.getAppSettings().displayOptions.mobilePosition : this.getAppSettings().displayOptions.desktopPosition
                },
                randomTime: function(t, e) {
                    var n = (e.getTime() + 6e4 - t.getTime()) * Math.random(),
                        i = this.getLocaleKey();
                    return a.default.locale(i), (0, a.default)(new Date(t.getTime() + n)).toNow()
                },
                getIntervalTime: function() {
                    return this.getAppSettings().displayOptions.enableRandomTimeDisplayBetweenEachNoti ? 1e3 * this.getRandomArbitrary(10, 20) : 1e3 * parseInt(this.getAppSettings().displayOptions.timeDisplayBetweenEachNoti, 10)
                },
                getRandomArbitrary: function(t, e) {
                    return Math.random() * (e - t) + t
                },
                isPowerUser: function() {
                    return r.default.getAppParam(f.appCode, "isPowerUser")
                },
                getNotiSyncOutdate: function(t) {
                    var e = void 0;
                    return "seconds" === this.getAppSettings().displayOptions.lastTimeToDisplay.time && (e = t + parseInt(this.getAppSettings().displayOptions.lastTimeToDisplay.number, 10)), "minutes" === this.getAppSettings().displayOptions.lastTimeToDisplay.time && (e = t + 60 * parseInt(this.getAppSettings().displayOptions.lastTimeToDisplay.number, 10)), "hours" === this.getAppSettings().displayOptions.lastTimeToDisplay.time && (e = t + 60 * parseInt(this.getAppSettings().displayOptions.lastTimeToDisplay.number, 10) * 60), "days" === this.getAppSettings().displayOptions.lastTimeToDisplay.time && (e = t + 60 * parseInt(this.getAppSettings().displayOptions.lastTimeToDisplay.number, 10) * 60 * 24), Math.floor((new Date).getTime() / 1e3) > e
                },
                getShopPlatform: function() {
                    return r.default.getParam("shop").shop.platform
                },
                getNotiOnCheckoutSetting: function() {
                    return this.getAppSettings().checkoutNoti
                },
                canUseCustomNoti: function() {
                    return 9481483 === this.getShopId() || "shopify" !== this.getShopPlatform()
                },
                getAbTestsActive: function(n) {
                    var i = this;
                    return (0, s.default)(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, u.default.isInTestGroup(n);
                                case 2:
                                    return e = t.sent, t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, i)
                    }))()
                }
            };
            e.default = h
        },
        410: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = N(n(9)),
                d = N(n(322)),
                i = N(n(28)),
                p = N(n(122)),
                l = N(n(47)),
                c = N(n(48)),
                f = N(n(300)),
                o = N(n(3)),
                g = N(n(619)),
                h = N(n(457)),
                u = N(n(50)),
                s = N(n(49)),
                m = N(n(4)),
                _ = N(n(321)),
                y = N(n(118)),
                a = N(n(70)),
                v = N(n(6)),
                T = N(n(119)),
                k = n(351),
                S = N(n(368)),
                C = N(n(434));

            function N(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var w = {
                productByRefId: null,
                targetProductUpsell: [],
                totalProductForUpsell: [],
                offerUpsell: null,
                salesNotification: [],
                salesNotiOnCheckout: [],
                randomNotificationShowed: [],
                countOnPage: 0,
                totalTrack: 0,
                lastActive: 0,
                allowToShowSyncNoti: !0,
                isSignUpNoti: !1,
                countSignUp: 0,
                init: function() {
                    var i = this;
                    return (0, c.default)(l.default.mark(function t() {
                        var e, n;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = y.default.getContext().payload.id, t.next = 3, T.default.isInTestGroup("Spop_signup_notifications");
                                case 3:
                                    if (t.sent && S.default.appSetting.settings_v2.signupNoti.enable) return t.next = 7, w.getStatsSignUp(v.default.getParam("shop", "shop").id);
                                    t.next = 8;
                                    break;
                                case 7:
                                    i.countSignUp = t.sent;
                                case 8:
                                    return t.next = 10, T.default.isInTestGroup("Spop_show_specific_pages_sync_noti");
                                case 10:
                                    return t.sent && !i.checkPageIsAllowToShowSyncNoti(e) && ((0, m.default)("Spop, This page not allow to show sync noti"), i.allowToShowSyncNoti = !1), t.next = 14, i.getNotificationsFromStorage(function(t) {
                                        var e = i.removeExpiredNotifications(t);
                                        i.salesNotification = S.default.getAppSettings().displayOptions.enableRandomDisplayTime ? i.shuffle(e) : e, S.default.appSetting.settings_v2.signupNoti.enable && "home" === y.default.getContext().type && (C.default.resetNotifyViewed(), C.default.resetSignUpNotiViewed())
                                    });
                                case 14:
                                    n = new Date, i.lastActive = n.getTime(), (0, o.default)(document).on("scroll mousedown keydown touchstart", function() {
                                        n = new Date, i.lastActive = n.getTime()
                                    });
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }, t, i)
                    }))()
                },
                removeExpiredNotifications: function(t) {
                    var e = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var o, s = (0, p.default)(t); !(e = (o = s.next()).done); e = !0) {
                            var a = o.value;
                            a.order_created_at && (a.timeAgo = a.order_created_at)
                        }
                    } catch (t) {
                        n = !0, i = t
                    } finally {
                        try {
                            !e && s.return && s.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                    var r = S.default.getAppSettings().displayOptions.lastTimeToDisplay.number,
                        u = S.default.getAppSettings().displayOptions.lastTimeToDisplay.time,
                        l = Math.floor((new Date).getTime() / 1e3),
                        c = (0, f.default)().add("-" + r, u).unix();
                    return (0, g.default)(t, function(t) {
                        return l > c + t.timeAgo && "sync" === t.type ? ((0, m.default)("Notification id " + t.id + " is expired"), !0) : "custom" === t.type && !S.default.canUseCustomNoti() && ((0, m.default)("This shop can't not use custom notifications"), !0)
                    }), t
                },
                getNextNotification: function(t) {
                    var e = this.salesNotification.length,
                        n = C.default.getNotifyViewed(),
                        i = null;
                    if (this.countOnPage >= S.default.getLimitPerPage()) return null;
                    for (var o = 0; o < e; o++)
                        if ((this.allowToShowSyncNoti || "sync" != this.salesNotification[o].type) && this.salesNotification[o].image && (!(y.default.getContext().payload && this.salesNotification[o].show_on_product_ids && this.salesNotification[o].show_on_product_ids.length) || this.salesNotification[o].show_on_product_ids.find(function(t) {
                                return t == y.default.getContext().payload.id
                            })) && (!S.default.getNotiSyncOutdate(this.salesNotification[o].timeAgo) || "sync" !== this.salesNotification[o].type) && -1 === n.indexOf(this.salesNotification[o].id)) {
                            i = this.salesNotification[o];
                            break
                        }
                    return S.default.appSetting.settings_v2.signupNoti.enable && 1 === n.length && !this.isSignUpNoti && 0 < this.countSignUp.count ? (this.isSignUpNoti = !0, null) : t || i || !S.default.isRepeatNotification() ? i ? (this.countOnPage += 1, i.isOutDate = this.notificationHasOutDate(i), "number" == typeof i.timeAgo && (i.timeAgo = this.formatTimeAgo(i.timeAgo)), C.default.addNotifyViewed(i.id), i) : null : (C.default.resetNotifyViewed(), this.getNextNotification(!0))
                },
                getNotiOnCheckout: function() {
                    return 0 < (a.default.current().items || []).length
                },
                getProductUpsell: function() {
                    var c = this;
                    return new i.default(function(e, n) {
                        var t = v.default.getParam("shop", "settings").apps.bsales ? v.default.getParam("shop", "settings").apps.bsales : null,
                            i = y.default.getContext().payload.id;
                        if ((0, m.default)("params bsale for upsell noti", t), t && "product" === y.default.getContext().type) {
                            var o = 0 < t.custom_up_sell_offers.length ? t.custom_up_sell_offers : [],
                                s = (0, d.default)(t.offer_products),
                                a = o.filter(function(t) {
                                    return "all" === t.target_type
                                });
                            if (c.offerUpsell = o, 0 < a.length) c.totalProductForUpsell = s, 0 < c.totalProductForUpsell.length ? e(c.totalProductForUpsell) : n();
                            else if ("target-products" === S.default.getNotiUpsellSettings().showOn) {
                                o.forEach(function(t) {
                                    -1 !== t.target_product_ref_ids.indexOf(i) && (c.totalProductForUpsell = c.totalProductForUpsell.concat(t.offer_products))
                                });
                                var r = [],
                                    u = [];
                                c.totalProductForUpsell.forEach(function(t) {
                                    r.indexOf(t.ref_id) < 0 && (r.push(t.ref_id), u.push(t))
                                }), c.totalProductForUpsell = u, 0 < c.totalProductForUpsell.length ? e(c.totalProductForUpsell) : n()
                            } else if ("both-target-and-upsell-products" === S.default.getNotiUpsellSettings().showOn) {
                                var l = [];
                                o.forEach(function(t) {
                                    -1 !== t.target_product_ref_ids.indexOf(i) ? c.totalProductForUpsell = (0, h.default)(c.totalProductForUpsell, t.offer_products) : 0 < t.offer_products.filter(function(t) {
                                        return t.ref_id === i
                                    }).length && (l = (0, h.default)(l, t.target_product_ref_ids))
                                }), 0 < l.length ? _.default.getProductByRefIds(l, function(t) {
                                    c.totalProductForUpsell = t, 0 < c.totalProductForUpsell.length ? e(c.totalProductForUpsell) : n()
                                }, !0, !0) : 0 < c.totalProductForUpsell.length && e(c.totalProductForUpsell)
                            }
                        } else n()
                    })
                },
                getProductByRefId: function(t) {
                    this.productByRefId = t
                },
                getStats: function(t) {
                    var e = v.default.getParam("loader").gapiBasePath + "/spop/" + t + "/count-order-last-24h";
                    return _.default.getJson(e)
                },
                getStatsSignUp: function(t) {
                    var e = v.default.getParam("loader").gapiBasePath + "/spop/" + t + "/count-signup-last-24h";
                    return _.default.getJson(e)
                },
                getStatsUpsellOffer: function(t, e) {
                    var n = v.default.getParam("loader").gapiBasePath + "/bsales/get-upsell-offers-statistics?shop_id=" + t + "&offer_ids=" + e;
                    return _.default.getJson(n)
                },
                notificationHasOutDate: function(t) {
                    var e = !1;
                    return 0 < Math.floor(Date.now() / 1e3) - (t.timeAgo + k.timeAgoPeriod) && (e = !0), e
                },
                shuffle: function(t) {
                    for (var e = t, n = void 0, i = e.length; i; i--) {
                        var o = [e[n = Math.floor(Math.random() * i)], e[i - 1]];
                        e[i - 1] = o[0], e[n] = o[1]
                    }
                    return e
                },
                formatTimeAgo: function(t) {
                    var e = S.default.getLocaleKey();
                    return f.default.locale(e), (0, f.default)(new Date(1e3 * t)).fromNow()
                },
                getNotificationsFromStorage: function(s) {
                    var a = this;
                    return (0, c.default)(l.default.mark(function t() {
                        var e, n, i, o;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = "" + k.LOCAL_STORAGE_NOTIFICATIONS, n = localStorage.getItem("spopSDKVersion"), i = S.default.appSetting.skd_version, !(o = u.default.get(e)) || n !== i) {
                                        t.next = 9;
                                        break
                                    }
                                    o = JSON.parse(o), s(o), t.next = 11;
                                    break;
                                case 9:
                                    return t.next = 11, a.fetchNotifications(function(t) {
                                        null !== t && (u.default.removeLocalByPrefix(k.LOCAL_STORAGE_NOTIFICATIONS), u.default.set(e, (0, r.default)(t), 1, 1)), s(t || [])
                                    });
                                case 11:
                                    localStorage.setItem("spopSDKVersion", i);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }, t, a)
                    }))()
                },
                fetchNotifications: function(r) {
                    var u = this;
                    return (0, c.default)(l.default.mark(function t() {
                        var o, e, s, a;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = 1, e = v.default.getParam("shop", "shop").id, s = v.default.getParam("loader", "gapiBasePath") + "/spop/" + e + "/get-sdk-notifications", a = function() {
                                        var t = (0, c.default)(l.default.mark(function t() {
                                            var e, n, i;
                                            return l.default.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return e = v.default.getGlobalSetting("spop_encode_response"), e = Number(e), n = {
                                                            encode: e
                                                        }, t.next = 5, _.default.getJson(s, n);
                                                    case 5:
                                                        if (null === (i = t.sent) && o <= 2) return o++, t.next = 10, a(r);
                                                        t.next = 11;
                                                        break;
                                                    case 10:
                                                        return t.abrupt("return");
                                                    case 11:
                                                        if (e && (i = JSON.parse(window.atob(i.data))), i && i.notifications) return r(i.notifications), t.abrupt("return");
                                                        t.next = 15;
                                                        break;
                                                    case 15:
                                                        r(null);
                                                    case 16:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, t, u)
                                        }));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(), t.next = 6, a();
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, u)
                    }))()
                },
                trackImpression: function() {
                    30 < this.totalTrack || (3e4 < (new Date).getTime() - this.lastActive || (this.totalTrack += 1, this.track(k.TRACK_IMPRESSION)))
                },
                trackClick: function(t) {
                    var e = a.default.current();
                    this.track(k.TRACK_CLICKS, {
                        ids: t
                    }), this.track(k.TRACK_CLICKS_ORDER, {
                        ids: t,
                        cart_token: e ? e.token : null
                    })
                },
                trackClickUpSellNoti: function(t) {
                    this.track(k.TRACK_CLICKS_UP_SELL_NOTI, {
                        ids: t
                    })
                },
                track: function(t, e, n) {
                    var i = e || {};
                    i.app_code = k.appCode, s.default.track(t, i).always(n)
                },
                checkPageIsAllowToShowSyncNoti: function(t) {
                    if (S.default.getAppSettings().page) {
                        var e = S.default.getAppSettings().page;
                        if (e.enableSpecificPages) return this.isProductPageAllow(e, t) || this.isProductPageofCollectionAllow(e, t) || this.isCustomPageAllow(e)
                    }
                    return !0
                },
                isProductPageAllow: function(t, e) {
                    return "products" == t.typeOfSpecificPages && 1 <= t.productIds.length && -1 !== t.productIds.indexOf(parseInt(e, 10))
                },
                isProductPageofCollectionAllow: function(t, e) {
                    return "collections" == t.typeOfSpecificPages && 1 <= t.collectionIds.length && t.collectionProductIds && 1 <= t.collectionProductIds.length && -1 !== t.collectionProductIds.indexOf(parseInt(e, 10))
                },
                isCustomPageAllow: function(t) {
                    if (t.enableCustomPages)
                        for (var e = this.removeSpecialCharacterToCompare(window.location.href), n = 0; n < t.customPages.length; n++) {
                            var i = this.removeSpecialCharacterToCompare(String(t.customPages[n]));
                            if (e == i || e == i + "/?reload_shop_script=1" || e == i + "&reload_shop_script=1") return !0
                        }
                    return !1
                },
                removeSpecialCharacterToCompare: function(t) {
                    return t.replace(new RegExp("[/]+$"), "")
                }
            };
            e.default = w
        },
        434: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(n(9)),
                o = r(n(50)),
                s = r(n(20)),
                a = n(351);

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var u = {
                addNotifyViewed: function(t) {
                    var e = this.getNotifyViewed(); - 1 === e.indexOf(t) && e.push(t), o.default.set(a.COOKIE_NOTIFY_VIEWED, (0, i.default)(e), 1, 1)
                },
                getNotifyViewed: function() {
                    return o.default.get(a.COOKIE_NOTIFY_VIEWED) ? JSON.parse(o.default.get(a.COOKIE_NOTIFY_VIEWED)) : []
                },
                resetNotifyViewed: function() {
                    o.default.remove(a.COOKIE_NOTIFY_VIEWED)
                },
                setNotiOnCheckoutShowed: function() {
                    s.default.set(a.COOKIE_NOTI_ON_CHECKOUT_VIEWED, 1)
                },
                getNotiOnCheckoutShowed: function() {
                    return s.default.get(a.COOKIE_NOTI_ON_CHECKOUT_VIEWED)
                },
                setNotificationClosed: function() {
                    o.default.set(a.COOKIE_NOTIFICATION_CLOSED, 1, 1, 1)
                },
                getNotificationClosed: function() {
                    return o.default.get(a.COOKIE_NOTIFICATION_CLOSED)
                },
                addTrackClick: function(t) {
                    var e = this.getTrackClicks(a.LOCAL_STORAGE_TRACK_CLICKS);
                    e.push(t), this.setTrackClicks(e, a.LOCAL_STORAGE_TRACK_CLICKS)
                },
                setTrackClicks: function(t, e) {
                    o.default.set(e, (0, i.default)(t), 1, 1)
                },
                getTrackClicks: function(t) {
                    var e = o.default.get(t);
                    return e ? JSON.parse(e) : []
                },
                addTrackClickUpSellNoti: function(t) {
                    var e = this.getTrackClicks(a.LOCAL_STORAGE_TRACK_CLICKS_UP_SELL_NOTI);
                    e.push(t), this.setTrackClicks(e, a.LOCAL_STORAGE_TRACK_CLICKS_UP_SELL_NOTI)
                },
                setSignUpNotiViewed: function() {
                    o.default.set(a.COOKIE_SIGN_UP_NOTI_VIEWED, 1)
                },
                getSignUpNotiViewed: function() {
                    return o.default.get(a.COOKIE_SIGN_UP_NOTI_VIEWED)
                },
                resetSignUpNotiViewed: function() {
                    o.default.remove(a.COOKIE_SIGN_UP_NOTI_VIEWED)
                },
                clearTrackClicks: function(t) {
                    this.setTrackClicks([], t)
                }
            };
            e.default = u
        },
        436: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var d = o(n(315)),
                L = o(n(9)),
                B = o(n(329)),
                R = o(n(16)),
                m = o(n(47)),
                _ = o(n(35)),
                i = o(n(48)),
                y = o(n(6)),
                v = o(n(50)),
                T = o(n(321)),
                M = o(n(412)),
                F = o(n(352)),
                k = n(324);

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var s = {
                getStatistic: function(d, p) {
                    var f = this,
                        g = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                        h = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "total";
                    return (0, i.default)(m.default.mark(function t() {
                        var e, n, i, o, s, a, r, u, l, c;
                        return m.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = {
                                            quantity: -1,
                                            stat: -1
                                        }, n = function() {
                                            if (-1 !== e.quantity && -1 !== e.stat) {
                                                var t = f.adjustStat(d, e.stat, e.quantity);
                                                p(t)
                                            }
                                        }, T.default.getProductByRefId(d, function(t) {
                                            t ? (e.quantity = t.quantity, !e.quantity && t.variants.length && (e.quantity = null)) : e.quantity = null, n()
                                        }, !0, !0), !(i = y.default.getParam("shop", "shop").id) || !d) {
                                        t.next = 22;
                                        break
                                    }
                                    if (o = Math.floor(Date.now() / 1e3), s = k.CCART_PRODUCT_STATS_LOCAL_STORAGE_KEY + "_" + i + "_" + d + "_" + h, r = !(a = void 0), (u = v.default.get(s)) && 4 === (l = u.split(",")).length && (r = 300 < o - l[0], a = {
                                            view: l[1],
                                            add_to_cart: l[2],
                                            order: l[3]
                                        }), r) return c = y.default.getParam("loader", "gapiBasePath") + "/ccart/product-stats/" + i + "/" + d + "?time_range=" + g + "&time_type=" + h, t.prev = 12, t.next = 15, T.default.getJson(c);
                                    t.next = 21;
                                    break;
                                case 15:
                                    (a = t.sent) && (0, _.default)(a).length && v.default.set(s, [o, a.view, a.add_to_cart, a.order].join(",")), t.next = 21;
                                    break;
                                case 19:
                                    t.prev = 19, t.t0 = t.catch(12);
                                case 21:
                                    a && (0, _.default)(a).length && (a.product_id = d, e.stat = [a.view, a.add_to_cart, a.order]);
                                case 22:
                                    -1 === e.stat && (e.stat = null), n();
                                case 24:
                                case "end":
                                    return t.stop()
                            }
                        }, t, f, [
                            [12, 19]
                        ])
                    }))()
                },
                getStatValueByField: function(t, e) {
                    if (!t) return 0;
                    return t[["viewed", "added", "purchased"].indexOf(e)] || 0
                },
                adjustStat: function(e, t, n) {
                    for (var i = F.default.getSocialProofSettings(), o = F.default.getStockCountdownSettings(), s = new Date, a = 0, r = 0, u = 0, l = 0, c = void 0, d = (0, M.default)("" + e).toString(), p = d.length, f = 0; f < p; f++) a += c = d.charCodeAt(f), r += c, u += c, l += c, f % 2 && (r += c), f % 2 || (u += c), f % 3 && (l += c);
                    a %= 100, r %= 100, u %= 100, l %= 100;
                    var g = F.default.getCreatedAt(),
                        h = g ? (s.getTime() / 1e3 - g) / 86400 : 0;
                    h = parseInt(h, 10);
                    for (var m = 0, _ = 0, y = 0, v = !1, T = !1, k = !0, S = void 0, C = void 0, N = void 0, w = {}, P = 0; P < i.widgets.length; P++) switch (S = Number(i.widgets[P].adjustFrom), C = Number(i.widgets[P].adjustTo), k = i.widgets[P].isEnable, N = "shopify" !== F.default.getShopPlatform() && i.widgets[P].enableAdjust, w[i.widgets[P].value] = {
                        max: C,
                        min: S
                    }, i.widgets[P].value) {
                        case "viewed_items":
                            var O = this.getStatValueByField(t, "viewed");
                            m = N ? this.adjustNumber(S, C, h, u, 1e3, 2e3) : O, m = parseInt(m, 10);
                            break;
                        case "added_items_to_cart":
                            v = k;
                            var b = this.getStatValueByField(t, "added");
                            _ = N ? this.adjustNumber(S, C, h, r, 500, 1e3) : b, _ = parseInt(_, 10);
                            break;
                        case "purchased_items":
                            T = k;
                            var A = this.getStatValueByField(t, "purchased");
                            y = N ? this.adjustNumber(S, C, h, a, 10, 500) : A, y = parseInt(y, 10)
                    }
                    var I = 0,
                        x = 0;
                    if ("percentage" === o.type && "shopify" !== F.default.getShopPlatform()) {
                        100 === o.randomFrom && 100 === o.randomTo && null !== n ? I = 5 + (x = parseInt(n, 10)) % 10 : x = null !== n ? (I = this.adjustNumber(o.randomFrom, o.randomTo, 0, a, 2, 10), parseInt(n * (I / 100), 10)) : (I = this.adjustNumber(o.randomFrom, o.randomTo, 0, a, 2, 10), this.adjustStock(10, 40, l % 10, 1, 10));
                        var U = (localStorage.getItem("ccart_closest_product_stock") ? JSON.parse(localStorage.getItem("ccart_closest_product_stock")) : []).filter(function(t) {
                            return t.productRefId === e
                        });
                        x = U.length ? U[0].stock : x
                    } else "number" === o.type && "shopify" !== F.default.getShopPlatform() ? (x = this.adjustStock(o.randomFrom, o.randomTo, l % 10, 1, 10), n ? (100 < (I = parseInt(x / n * 100, 10)) && (I = 100), I < 5 && (I = 5)) : I = 20 + x % 10) : I = 20 + (x = null === n ? this.adjustStock(o.randomFrom, o.randomTo, l % 10, 1, 10) : parseInt(n, 10) || 0) % 10;
                    var E = localStorage.getItem("ccart_closest_product_stock") ? JSON.parse(localStorage.getItem("ccart_closest_product_stock")) : [],
                        j = (0, R.default)({
                            productRefId: e,
                            stock: x
                        }),
                        D = [].concat((0, B.default)(E));
                    return E.filter(function(t) {
                        return t.productRefId === e
                    }).length && D.length || (D = [].concat((0, B.default)(D), [j])), localStorage.setItem("ccart_closest_product_stock", (0, L.default)(D)), _ < y && v && T && !N && (_ = parseInt(1.6 * y, 10)), {
                        viewed_items: m,
                        added_items_to_cart: _,
                        purchased_items: y,
                        stock_number: x,
                        real_stock_number: n,
                        stock_percentage: I,
                        product_id: e
                    }
                },
                adjustNumber: function(t, e, n, i, o, s, a) {
                    var r = parseInt(t, 10),
                        u = parseInt(e, 10);
                    (0, d.default)(r) && (r = o), (0, d.default)(u) && (u = s);
                    var l = u < r ? u : r,
                        c = u < r ? r : u;
                    return l < 1 && (l = 1), a && (l < a && (l = a), c < a && (c = 1.4 * a)), parseInt(l + n * (c - l) / 1e3 + i / 150 * (c - l), 10)
                },
                adjustStock: function(t, e, n, i, o) {
                    var s = parseInt(t, 10) || i,
                        a = parseInt(e, 10) || o,
                        r = a < s ? a : s;
                    return parseInt(r + ((a < s ? s : a) - r) * n / 10, 10)
                }
            };
            e.default = s
        },
        634: function(t, e) {
            t.exports = '<notification-component v-if="notification" :notification="notification" @close-noti="closeNotification" @mouse-enter="notifyMouseEnterAction"\n        @mouse-leave="notifyMouseLeaveAction">\n</notification-component>\n<noti-on-checkout-component v-if="notificationOnCheckout" :noti-product-data="notiOnCheckoutDataProduct" :stats-spop="statsSpop" @close-noti="closeNotification">\n</noti-on-checkout-component>\n<noti-sign-up-component v-if="notificationSignUp" @mouse-enter="notifyMouseEnterAction" @mouse-leave="notifyMouseLeaveAction"\n        @close-noti="closeNotification">\n</noti-sign-up-component>\n<noti-upsell-component v-if="isShowNotiUpsell" :noti-product-data="notiUpsellProductData" @mouse-enter="notifyMouseEnterAction"\n        @mouse-leave="notifyMouseLeaveAction" @close-noti="closeNotification">\n</noti-upsell-component>\n'
        },
        635: function(t, e, n) {
            var i, o, s = {};
            i = n(1232), Object.keys(i).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/spop/components/templateNotiCheckout.vue: named exports in *.vue files are ignored."), o = n(1233), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var a = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            o && (a.template = o), a.computed || (a.computed = {}), Object.keys(s).forEach(function(t) {
                var e = s[t];
                a.computed[t] = function() {
                    return e
                }
            })
        },
        636: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = i(n(122)),
                c = i(n(3));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                getNotificationPreview: function(t) {
                    var e = Number((0, c.default)(t).closest(".spop-preview")[0].getAttribute("data-id")),
                        n = window.spopNotifications,
                        i = !0,
                        o = !1,
                        s = void 0;
                    try {
                        for (var a, r = (0, l.default)(n); !(i = (a = r.next()).done); i = !0) {
                            var u = a.value;
                            if (u.id === e) return u
                        }
                    } catch (t) {
                        o = !0, s = t
                    } finally {
                        try {
                            !i && r.return && r.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                    return !1
                },
                getIsRealPreview: function() {
                    return window.isRealPreview
                }
            }
        }
    }
]);