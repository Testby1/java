(window.beeketingWPJP = window.beeketingWPJP || []).push([
    [142], {
        1374: function(t, e, n) {
            var i, o, s = {};
            i = n(1375), Object.keys(i).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/cboost/components/activate_button/Component.vue: named exports in *.vue files are ignored."), o = n(1382), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var c = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            o && (c.template = o), c.computed || (c.computed = {}), Object.keys(s).forEach(function(t) {
                var e = s[t];
                c.computed[t] = function() {
                    return e
                }
            })
        },
        1375: function(t, p, g) {
            "use strict";
            (function(t) {
                Object.defineProperty(p, "__esModule", {
                    value: !0
                });
                var e = h(g(16)),
                    n = g(129),
                    i = h(g(430)),
                    o = h(g(313)),
                    s = h(g(1376)),
                    c = h(g(407)),
                    r = g(319),
                    u = g(408),
                    a = (h(g(36)), h(g(326))),
                    d = h(g(6)),
                    l = h(g(327)),
                    f = h(g(435));

                function h(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                p.default = t.extend({
                    name: "CBoostActivateButton",
                    components: {
                        ActivateButtonFrame: i.default,
                        CountdownClock: s.default
                    },
                    props: {
                        activateButton: {
                            type: Object,
                            default: {}
                        }
                    },
                    data: function() {
                        return {
                            data: this.activateButton.data,
                            currentSeconds: 0,
                            currentMinutes: 0,
                            translation: d.default.getParam("shop").settings.apps[r.appCode].translation,
                            showingNudge: !1
                        }
                    },
                    computed: (0, e.default)({}, (0, n.mapGetters)({
                        appSettings: "" + c.default.getNamespace(u.APP_SETTINGS),
                        currentOffer: "" + c.default.getNamespace(u.CURRENT_OFFER)
                    }), (0, n.mapState)({
                        isCollapsed: function(t) {
                            return t.activate.isCollapsed
                        }
                    }), {
                        icon: function() {
                            var t = this.currentOffer.award === r.OFFER_TYPE_FREE_GIFT && (this.currentOffer.awardFreeProductIds[0].image_url || this.currentOffer.awardFreeProductIds[0].image_source_url);
                            return this.currentOffer.award !== r.OFFER_TYPE_FREE_GIFT || this.isShareToGetOffer ? this.currentOffer.imageUrl : t
                        },
                        isCountdownOffer: function() {
                            return this.currentOffer.type === r.OFFER_COUNT_DOWN
                        },
                        isShareToGetOffer: function() {
                            return this.currentOffer.type === r.OFFER_SHARE_TO_GET
                        },
                        isMobileWidth: function() {
                            return window.innerWidth < 480
                        }
                    }),
                    watch: {
                        isCollapsed: function() {
                            this.clampSubject()
                        }
                    },
                    ready: function() {
                        this.watchButtonActivated(), this.$refs.frame.$on("hide-nudge", function() {
                            localStorage.setItem("bkt-cboost-closed-nudge", !0)
                        }), this.isCountdownOffer && this.setTime(), this.clampSubject()
                    },
                    methods: {
                        watchButtonActivated: function() {
                            o.default.activated(function(t, e) {
                                t === r.appCode && c.default.openPopupFromMinimizeIcon(!0)
                            })
                        },
                        getSecondClock: function() {
                            var t = Number(this.currentOffer.settings.count_down_val);
                            return "seconds" === this.currentOffer.settings.count_down_unit ? t : 60 * t
                        },
                        getActualSeconds: function() {
                            var t = Number(a.default.getInitClockTime(this.currentOffer.id));
                            return t || (t = this.getCurrentTimestamp(), a.default.setInitClockTime(this.offerHighestPriority.id)), this.getSecondClock() - this.getCurrentTimestamp() + t
                        },
                        setTime: function() {
                            var e = this,
                                n = this.getActualSeconds(),
                                i = void 0;
                            i = setInterval(function() {
                                var t = localStorage.getItem("bkt-cboost-closed-nudge");
                                null !== t && (t = !0), e.currentMinutes = e.addZeroBeforeNumber(Math.floor(n / 60)), e.currentSeconds = e.addZeroBeforeNumber(n - 60 * e.currentMinutes), --n <= 59 && !t && (o.default.showNotification(r.appCode), e.showingNudge || (e.showingNudge = !0, setTimeout(function() {
                                    e.clampSubject()
                                }, 300))), n < -1 && (o.default.hideNotification(r.appCode), o.default.deregisterComponent(r.appCode), clearInterval(i))
                            }, 1e3)
                        },
                        getCurrentTimestamp: function() {
                            return Math.floor((new Date).getTime() / 1e3)
                        },
                        addZeroBeforeNumber: function(t) {
                            return t < 10 ? "0" + t : t
                        },
                        getDisplayedSubject: function() {
                            return l.default.getDisplayedSubject(this.currentOffer)
                        },
                        getTitle: function() {
                            return this.translation.topText
                        },
                        isFreeGiftOffer: function() {
                            this.currentOffer.award, r.OFFER_TYPE_FREE_GIFT
                        },
                        generateTextStyle: function(e) {
                            var n = this,
                                i = {},
                                t = function(t) {
                                    return n.currentOffer.settings[e + "_" + t]
                                },
                                o = function(t, e) {
                                    i[t] = "" + e
                                };
                            return this.currentOffer.settings ? (t("is_bold") && o("fontWeight", "bold"), t("is_italic") && o("fontStyle", "italic"), t("is_underline") && o("textDecoration", "underline"), t("align") && o("textAlign", t("align")), t("font") && o("fontFamily", t("font")), t("font_size") && o("fontSize", t("font_size")), t("color") && o("color", t("color")), i) : ""
                        },
                        clampSubject: function() {
                            var e = this;
                            document.querySelectorAll(".bkt-cboost-subject .__subject").forEach(function(t) {
                                (0, f.default)(t, {
                                    clamp: e.isCountdownOffer ? 1 : 4
                                }), t.classList.remove("invisible")
                            })
                        }
                    }
                })
            }).call(this, g(45))
        },
        1376: function(t, e, n) {
            var i, o, s = {};
            i = n(1377), Object.keys(i).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/core/ui-kit/components/CountdownClock.vue: named exports in *.vue files are ignored."), o = n(1381), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var c = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            o && (c.template = o), c.computed || (c.computed = {}), Object.keys(s).forEach(function(t) {
                var e = s[t];
                c.computed[t] = function() {
                    return e
                }
            })
        },
        1377: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(1378));
            e.default = {
                props: {
                    seconds: {
                        type: Number,
                        default: 0
                    },
                    actualSeconds: {
                        type: Number,
                        default: 0
                    },
                    width: {
                        type: Number,
                        default: 0
                    },
                    height: {
                        type: Number,
                        default: 0
                    },
                    currentMinutes: {
                        type: [Number, String],
                        default: 0
                    },
                    currentSeconds: {
                        type: [Number, String]
                    }
                },
                data: function() {
                    return {
                        interVal: null,
                        ctx: null,
                        currentDeg: 360 * (this.seconds - this.actualSeconds) / this.seconds,
                        deg: 14400 / (1e3 * this.seconds),
                        minutes: 0,
                        strokeWidth: 2
                    }
                },
                ready: function() {
                    var t = document.getElementById("bkt-clock-canvas");
                    this.ctx = t.getContext("2d"), t.width = this.getCanvasSize().width, t.height = this.getCanvasSize().height, this.interVal = setInterval(this.draw, 40)
                },
                methods: {
                    draw: function() {
                        360 <= this.currentDeg && clearInterval(this.interVal), this.ctx.clearRect(0, 0, this.getCanvasSize().width, this.getCanvasSize().height), this.ctx.save(), this.ctx.beginPath(), this.ctx.translate(this.getCenterPoint().x, this.getCenterPoint().y), this.ctx.rotate(-90 * Math.PI / 180), this.ctx.translate(-this.getCenterPoint().x, -this.getCenterPoint().y), this.ctx.arc(this.getCenterPoint().x, this.getCenterPoint().y, this.getCanvasSize().width / 2 - this.strokeWidth / 2, 0, (this.currentDeg + this.deg) * Math.PI / 180), this.ctx.strokeStyle = "#E85244", this.ctx.lineWidth = this.strokeWidth, this.ctx.stroke(), this.ctx.restore(), this.currentDeg += this.deg
                    },
                    getCanvasSize: function() {
                        return (0, i.default)({
                            width: this.width,
                            height: this.height
                        })
                    },
                    getCenterPoint: function() {
                        return (0, i.default)({
                            x: this.getCanvasSize().width / 2,
                            y: this.getCanvasSize().height / 2
                        })
                    }
                }
            }
        },
        1378: function(t, e, n) {
            t.exports = {
                default: n(1379),
                __esModule: !0
            }
        },
        1379: function(t, e, n) {
            n(1380), t.exports = n(0).Object.freeze
        },
        1380: function(t, e, n) {
            var i = n(13),
                o = n(155).onFreeze;
            n(82)("freeze", function(e) {
                return function(t) {
                    return e && i(t) ? e(o(t)) : t
                }
            })
        },
        1381: function(t, e) {
            t.exports = '\n<div class="bkt-wrapper-clock">\n  <canvas id="bkt-clock-canvas"></canvas>\n  <div class="bkt-clock-time">{{currentMinutes}} : {{currentSeconds}}</div>\n</div>\n'
        },
        1382: function(t, e) {
            t.exports = '\n<activate-button-frame v-ref:frame>\n  <template slot="collapsed">\n    <div class="bk-cboost-wrapper-icon" v-if="!isCountdownOffer"><img :src="icon" alt="" class="bkt-cboost-image"></div>\n    <div class="bkt-clock-container" v-else>\n      <countdown-clock\n        :current-seconds="currentSeconds"\n        :current-minutes="currentMinutes"\n        :width="isMobileWidth ? 64 : 80"\n        :height="isMobileWidth ? 64 : 80"\n        :seconds="getSecondClock()"\n        :actual-seconds="getActualSeconds()"\n      >\n      </countdown-clock>\n      <div class="bkt-cboost-subject">\n        <p v-if="isCountdownOffer" v-html="getTitle()" class="bkt-title"></p>\n        <p v-html="getDisplayedSubject()" :style="generateTextStyle(\'subject\')" class="__subject invisible"></p>\n      </div>\n    </div>\n  </template>\n\n  <template slot="expand">\n    <div class="bk-cboost-wrapper-icon" v-if="!isCountdownOffer"><img :src="icon" alt="" class="bkt-cboost-image"></div>\n    <div class="bkt-clock-container" v-else>\n      <countdown-clock\n        :current-seconds="currentSeconds"\n        :current-minutes="currentMinutes"\n        :width="isMobileWidth ? 64 : 80"\n        :height="isMobileWidth ? 64 : 80"\n        :seconds="getSecondClock()"\n        :actual-seconds="getActualSeconds()"\n      >\n      </countdown-clock>\n      <div class="bkt-cboost-subject">\n        <p v-if="isCountdownOffer" v-html="getTitle()" class="bkt-title"></p>\n        <p v-html="getDisplayedSubject()" :style="generateTextStyle(\'subject\')" class="__subject invisible"></p>\n      </div>\n    </div>\n    <div class="bkt-cboost-subject" v-if="!isCountdownOffer">\n      <p v-html="getDisplayedSubject()" :style="generateTextStyle(\'subject\')" class="__subject invisible"></p>\n    </div>\n  </template>\n\n  <template slot="nudge-minimize" v-if="isCountdownOffer">\n    <div class="bkt-clock-container">\n      <countdown-clock\n        :current-seconds="currentSeconds"\n        :current-minutes="currentMinutes"\n        :width="isMobileWidth ? 64 : 80"\n        :height="isMobileWidth ? 64 : 80"\n        :seconds="getSecondClock()"\n        :actual-seconds="getActualSeconds()"\n      >\n      </countdown-clock>\n    </div>\n  </template>\n\n\n  <template slot="nudge-full" v-if="isCountdownOffer">\n    <div class="bkt-clock-container">\n      <countdown-clock\n        :current-seconds="currentSeconds"\n        :current-minutes="currentMinutes"\n        :width="isMobileWidth ? 64 : 80"\n        :height="isMobileWidth ? 64 : 80"\n        :seconds="getSecondClock()"\n        :actual-seconds="getActualSeconds()"\n      >\n      </countdown-clock>\n      <div class="bkt-cboost-subject">\n        <p v-if="isCountdownOffer" v-html="getTitle()" class="bkt-title"></p>\n        <p v-html="getDisplayedSubject()" :style="generateTextStyle(\'subject\')" class="__subject invisible"></p>\n      </div>\n    </div>\n  </template>\n</activate-button-frame>\n'
        },
        430: function(t, e, n) {
            var i, o, s = {};
            i = n(431), Object.keys(i).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/core/activate-button/frame.vue: named exports in *.vue files are ignored."), o = n(432), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var c = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            o && (c.template = o), c.computed || (c.computed = {}), Object.keys(s).forEach(function(t) {
                var e = s[t];
                c.computed[t] = function() {
                    return e
                }
            })
        },
        431: function(t, r, u) {
            "use strict";
            (function(t, c) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var e = s(u(16)),
                    n = s(u(313)),
                    i = u(129),
                    o = u(334);

                function s(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                r.default = t.extend({
                    name: "ActivateButtonFrame",
                    computed: (0, e.default)({}, (0, i.mapState)(o.MODULE_PATH, {
                        isCollapsed: function(t) {
                            return t.isCollapsed
                        }
                    }), (0, i.mapGetters)(o.MODULE_PATH, {
                        getNudgeStatus: [o.GET_NUDGE_STATUS]
                    }), {
                        nudgeStatus: function() {
                            return this.getNudgeStatus(this.type)
                        },
                        nudgeShow: function() {
                            return "none" !== this.nudgeStatus
                        },
                        nudgeMinimize: function() {
                            return "minimize" === this.nudgeStatus
                        },
                        type: function() {
                            return this.$parent.activateButton.type
                        }
                    }),
                    methods: {
                        hideNudge: function() {
                            n.default.hideNotification(), this.$emit("hide-nudge")
                        },
                        resizeImageActivateButton: function(t) {
                            c(t).each(function() {
                                var t = c(this).width(),
                                    e = c(this).height(),
                                    n = c(this).find("> img").first();
                                if (n.length) {
                                    var i = n.width(),
                                        o = n.height(),
                                        s = i / o;
                                    o < i ? c(n).addClass("image-crop").css({
                                        height: "100%",
                                        "min-width": e * s
                                    }) : c(n).addClass("image-crop").css({
                                        width: "100%",
                                        "min-height": t / s
                                    })
                                }
                            })
                        }
                    },
                    ready: function() {
                        var t = this;
                        c(".bkt-content-collapsed > img").on("load", function() {
                            t.resizeImageActivateButton(".bkt-content-collapsed")
                        })
                    },
                    watch: {
                        isCollapsed: function(t, e) {
                            t && this.resizeImageActivateButton(".bkt-content-collapsed")
                        }
                    }
                })
            }).call(this, u(45), u(3))
        },
        432: function(t, e) {
            t.exports = '\n<div class="bkt-activate-button-content">\n  \x3c!-- Collapsed --\x3e\n  <div v-if="isCollapsed" class="bkt-content-collapsed">\n    <slot name="collapsed"></slot>\n  </div>\n\n  \x3c!-- Expand --\x3e\n  <div v-else class="bkt-content-expand">\n    <slot name="expand"></slot>\n  </div>\n\n  \x3c!-- Nudge --\x3e\n  <div v-if="nudgeShow && isCollapsed" class="bkt-nudge">\n    \x3c!-- Nudge minimized --\x3e\n    <div v-if="nudgeMinimize" class="bkt-nudge-minimize">\n      <slot name="nudge-minimize"></slot>\n    </div>\n\n    \x3c!-- Nudge full --\x3e\n    <div v-else class="bkt-nudge-full">\n      <slot name="nudge-full"></slot>\n    </div>\n\n    <div @click.stop="hideNudge()" class="bkt-nudge__close">\n      <div class="bkt-line bkt-line1"></div>\n      <div class="bkt-line bkt-line2"></div>\n    </div>\n  </div>\n</div>\n'
        },
        465: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = u(n(313)),
                o = u(n(407)),
                s = u(n(1374)),
                c = n(319),
                r = u(n(338));

            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var a = {
                init: function() {
                    var e = this;
                    o.default.watchShowMinimizeIcon(function(t) {
                        r.default.AppFeatureSwitch.featureSwitchStatus(c.CBOOST_INTEGRATE_ACTIVE_BUTTON) && (t ? e.initCboost() : t || i.default.hasComponent(c.appCode) || i.default.deregisterComponent(c.appCode))
                    })
                },
                initCboost: function() {
                    this.components(c.appCode), this.buttons(c.appCode, {
                        name: c.appCode,
                        title: "Total price",
                        price: "$20.00",
                        originPrice: "$40.00",
                        listProduct: ["p1", "p2", "p3"]
                    })
                },
                components: function(t) {
                    i.default.registerComponent(t, s.default)
                },
                buttons: function(t, e) {
                    i.default.register(t, e)
                }
            };
            e.default = a
        }
    }
]);