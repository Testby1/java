! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 6)
}([function(e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
            return typeof e
        } : e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(t)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return i
    })), n.d(t, "a", (function() {
        return u
    }));
    var o = null,
        r = function() {
            if (null == o) {
                o = "";
                var e, t = document.location.hostname.split(".");
                if ("undefined" != typeof TRACKS_COOKIE_DOMAIN) o = TRACKS_COOKIE_DOMAIN;
                else
                    for (var n = 1; n <= t.length; ++n)
                        if (e = "." + t.slice(-n).join("."), r = e, i = void 0, i = (new Date).getTime(), document.cookie = encodeURIComponent("tk_tc") + "=" + i + "; domain=" + r + "; path=/;", u("tc") == i) {
                            o = e;
                            break
                        }
                "" != o && (! function(e) {
                    var t = new Date;
                    t.setTime(t.getTime() - 1e3), document.cookie = encodeURIComponent("tk_tc") + "= ; domain=" + e + "; path=/; expires=" + t.toUTCString()
                }(o), o = "; domain=" + o)
            }
            var r, i;
            return o
        },
        i = function(e, t, n) {
            var o = encodeURIComponent("tk_" + e),
                i = new Date;
            void 0 === n && (n = 15768e4), document.location.hostname.match(/((^|.)wp\.com$|^.?w\.org$)/) || (i.setTime(i.getTime() + 1e3 * n), document.cookie = o + "=" + encodeURIComponent(t) + r() + "; path=/; expires=" + i.toUTCString())
        },
        u = function(e) {
            var t = encodeURIComponent("tk_" + e) + "=",
                n = t.length,
                o = document.cookie.split("; "),
                r = o.length;
            for (1 === r && (r = (o = document.cookie.split(";")).length), r--; r >= 0; r--)
                if (o[r].substring(0, n) === t) return decodeURIComponent(o[r].substring(n));
            return null
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return T
    }));
    var o = n(0),
        r = n.n(o),
        i = n(1);

    function u(e) {
        var t = [];
        if (window.crypto && window.crypto.getRandomValues) t = new Uint8Array(e), window.crypto.getRandomValues(t);
        else
            for (var n = 0; n < e; ++n) t[n] = Math.floor(256 * Math.random());
        return btoa(String.fromCharCode.apply(String, t))
    }
    var c, a, f, l, s, p, d, g;

    function m() {
        c = void 0, a = null, f = null, [], l = null, s = {}, p = {}, d = {}, g = {}
    }
    m();
    var b = function(e) {
        if (this.a = 1, e && e.length)
            for (var t = 0; t < e.length; t++) this.push(e[t])
    };
    b.prototype.push = function(e) {
        if (e)
            if ("object" == r()(e) && e.length) {
                var t = e.splice(0, 1);
                I[t] && I[t].apply(null, e)
            } else "function" == typeof e && e()
    };
    var w = function(e) {
            e._ui || e._ut || k(), j(), e._ui = e._ui || c, e._ut = e._ut || a, f && (e._ul = f);
            var t = new Date;
            e._ts = t.getTime(), e._tz = t.getTimezoneOffset() / 60;
            var n = window.navigator,
                o = window.screen;
            e._lg = n.language, e._pf = n.platform, e._ht = o.height, e._wd = o.width;
            var i = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                u = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            e._sx = void 0 !== i ? i : 0, e._sy = void 0 !== u ? u : 0, void 0 !== document.location && (e._dl = document.location.toString()), void 0 !== document.referrer && (e._dr = document.referrer),
                function e(t, n) {
                    if (null == t || "object" !== r()(t)) return t;
                    for (var o in null != n && "object" === r()(n) || (n = t.constructor()), t) t.hasOwnProperty(o) && (n[o] = e(t[o]));
                    return n
                }(p, e), v(function(e) {
                    var t = [];
                    for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.join("&")
                }(e), e.use_beacon || !1)
        },
        v = function(e, t) {
            if (!navigator.userAgent.match(/wp-e2e-tests|bingbot|bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\-webcrawler|converacrawler|dataparksearch|findlinks|crawler|Netvibes|Sogou Pic Spider|ICC\-Crawler|Innovazion Crawler|Daumoa|EtaoSpider|A6\-Indexer|YisouSpider|Riddler|DBot|wsr\-agent|Xenu|SeznamBot|PaperLiBot|SputnikBot|CCBot|ProoXiBot|Scrapy|Genieo|Screaming Frog|YahooCacheSystem|CiBra|Nutch/) && !(e in d))
                if (d[e] = !0, window.fetch && t) y(e), fetch("//pixel.wp.com/t.gif?" + e + "&_rt=" + (new Date).getTime() + "&_=_", {
                    mode: "no-cors",
                    keepalive: !0
                }).then((function() {
                    _(e)
                }));
                else {
                    var n = new Image;
                    y(e), n.query = e, n.onload = function() {
                        delete d[e], n && _(n.query)
                    }, n.src = "//pixel.wp.com/t.gif?" + e + "&_rt=" + (new Date).getTime() + "&_=_", n.alt = ""
                }
        },
        y = function(e) {
            var t, n = O();
            for (t = 0; t < n.length; ++t)
                if (e == n[t]) return;
            n.push(e), h(n)
        },
        h = function(e) {
            for (; e.join(" ").length > 2048;) e = e.slice(1);
            x("qs", e.join(" "), 1800)
        },
        _ = function(e) {
            var t, n = [],
                o = O();
            for (t = 0; t < o.length; ++t) e != o[t] && n.push(o[t]);
            n.length !== o.length && h(n)
        },
        O = function() {
            var e = C("qs");
            return e ? e.split(" ") : []
        },
        j = function() {
            null === l && (l = window.setTimeout((function() {
                O().forEach((function(e) {
                    v(e, !1)
                })), l = null
            }), 100))
        },
        S = function() {
            return u(18)
        },
        C = function(e) {
            return Object(i.a)(e) || s[e]
        },
        x = function(e, t, n) {
            s[e] = n <= -1 ? null : t, Object(i.b)(e, t, n)
        },
        P = function() {
            var e = [],
                t = C("ai"),
                n = C("aip");
            return n && (e = n.split(",")), t && e.push(t), e
        },
        k = function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (!c) {
                var t = C("ai");
                t ? (c = t, a = "anon") : e && (c = S(), a = "anon", x("ai", c))
            }
        },
        I = {
            storeContext: function(e) {
                "object" === r()(e) && (p = e)
            },
            identifyUser: function(e, t) {
                if (t && (f = t), "0" != e && "" != e && null != e && c != e) {
                    c = e, a = "wpcom:user_id";
                    for (var n = P(), o = 0; o < n.length; o++) w({
                        _en: "_aliasUser",
                        anonId: n[o]
                    });
                    x("ai", "", -1), x("aip", "", -1)
                }
            },
            identifyAnonUser: function(e) {
                if (k(!1), c != e)
                    if ("anon" === a || null === a) {
                        if ("anon" == a && c) {
                            var t = C("aip");
                            t = t ? t.split(",") : [];
                            for (var n = !1, o = 0; o < t.length; o++) c == t[o] && (n = !0);
                            n || (t.push(c), x("aip", t.join(",")))
                        }
                        x("ai", e), c = e, a = "anon"
                    } else w({
                        _en: "_aliasUser",
                        anonId: e
                    })
            },
            recordEvent: function(e, t, n) {
                "_setProperties" !== e && ((t = t || {})._en = e, "string" == typeof n && n.length > 0 && (g[n] || (g[n] = u(18)), t._ui = t._ui || g[n], t._ut = t._ut || "anon"), w(t))
            },
            setProperties: function(e) {
                e._en = "_setProperties", w(e)
            },
            clearIdentity: function() {
                c = null, f = null, x("ai", "", -1), x("aip", "", -1), k()
            }
        };

    function T() {
        return m(), window._tkq = window._tkq || [], window._tkq.a || (j(), window._tkq = new b(window._tkq)), I
    }
}, function(e, t, n) {
    var o = n(7);
    e.exports = function(e, t) {
        if (null == e) return {};
        var n, r, i = o(e, t);
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(e);
            for (r = 0; r < u.length; r++) n = u[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e) {
    e.exports = JSON.parse('{"errors":false}')
}, function(e, t, n) {
    e.exports = n(9)
}, function(e, t) {
    e.exports = function(e, t) {
        if (null == e) return {};
        var n, o, r = {},
            i = Object.keys(e);
        for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
    }
}, , function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(3),
        r = n.n(o),
        i = n(4),
        u = n.n(i),
        c = n(1),
        a = n(5),
        f = function(e) {
            if (a.errors) throw new Error(e)
        };
    var l = function(e) {
            return 0 === e.indexOf("".concat(location.protocol, "//").concat(location.host))
        },
        s = n(2);

    function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
        }
        return n
    }
    var d, g, m = (d = function(e) {
        var t = {
            update: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.referrer;
                if (window._wca_prevent_referrer) return !1;
                var o = 31536e3,
                    r = !0,
                    i = !0;
                return !l(n) && (t.getOriginal() || (r = e.set("or", n, 5 * o)), t.getAttWindow(3) || (i = t.setAttWindow(n, 3)), r && i && e.set("lr", n, o))
            },
            getLatest: function() {
                return e.get("lr")
            },
            getOriginal: function() {
                return e.get("or")
            },
            removeOldReferrers: function() {
                e.set("ro", "", -1), e.set("rl", "", -1)
            },
            setAttWindow: function(t, n) {
                return e.set("r".concat(n, "d"), t, 86400 * n)
            },
            getAttWindow: function(t) {
                return e.get("r".concat(t, "d"))
            }
        };
        return t
    }({
        get: function(e) {
            try {
                var t = Object(c.a)(e);
                return t = t ? JSON.parse(t) : null
            } catch (e) {
                return f(e), null
            }
        },
        set: function(e, t, n) {
            try {
                return t = JSON.stringify(t), Object(c.b)(e, t, n), !0
            } catch (e) {
                return f(e), !1
            }
        },
        remove: function(e) {
            try {
                return Object(c.b)(e, null), !0
            } catch (e) {
                return f(e), !1
            }
        }
    }), g = Object(s.a)(), d.removeOldReferrers(), d.update(), {
        push: function(e) {
            if (e) {
                var t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? p(Object(n), !0).forEach((function(t) {
                                u()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e, {
                        lr: d.getLatest(),
                        or: d.getOriginal(),
                        r3d: d.getAttWindow(3)
                    }),
                    n = t._en,
                    o = r()(t, ["_en"]);
                g.recordEvent(n, o)
            }
        }
    });
    Array.isArray(window._wca) && window._wca.forEach((function(e) {
        m.push(e)
    })), window._wca = m
}]);