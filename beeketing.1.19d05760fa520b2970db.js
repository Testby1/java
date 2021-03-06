(window.beeketingWPJP = window.beeketingWPJP || []).push([
    [1], {
        308: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.COOKIE_DISCOUNT_CODE = "bk_discount_code", e.COOKIE_DISCOUNT_CODE_ADDED = "bk_discount_code_added", e.COOKIE_DISCOUNT_CODE_SOURCE = "bk_discount_code_source", e.TRACKING_PRODUCT_EVENTS = {
                VIEW: "product_view"
            }, e.SHOP_AJAX_CART = "bk_shop_ajax_cart", e.USE_FB_PIXEL_TRACK = "useFbPixelTrack", e.FB_PIXEL_NO_FORCE = "FbPixelNoForce", e.ADD_TO_CART_IDENTITY = "addToCartIdentity", e.STORAGE_LAST_STEP_UP_SELL = "sm_last_step_up_sell", e.CURRENT_SALES_MOTIVATOR_LAST_STEP_OFFER = "current_sales_motivator_last_step_offer", e.NGUYEN_KIM_PLATFORM = "nguyenkim", e.APP_CODE_BEEPLUS = "beeplus", e.APP_CODE_BSALES = "bsales", e.APP_CODE_PREC = "precommend", e.COOKIE_CART_TOKEN_KEY = "_beeketing_cart_token", e.COOKIE_CART_DATA = "_beeketing_cart_content", e.TEXT_COLOR_LIGHT = 16
        },
        310: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = E(r(322)),
                a = E(r(35)),
                f = E(r(9)),
                c = E(r(3)),
                n = E(r(118)),
                o = E(r(15)),
                u = E(r(312)),
                d = E(r(119)),
                s = E(r(20)),
                l = E(r(25)),
                _ = E(r(6)),
                p = E(r(10)),
                h = E(r(415)),
                v = E(r(121)),
                g = E(r(123)),
                C = E(r(75)),
                m = E(r(70)),
                k = E(r(46)),
                b = r(27),
                T = E(r(131));

            function E(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                DISCOUNT_TYPE_FREE_SHIPPING: "free_shipping",
                DISCOUNT_TYPE_FIXED_AMOUNT: "fixed_amount",
                DISCOUNT_TYPE_PERCENTAGE: "percentage",
                createInvoice: function(e) {
                    var t = m.default.current(),
                        r = this.buildDiscountLineItems(),
                        a = {
                            cart_token: t.token,
                            line_items: r.convertedItems,
                            sources: r.sources,
                            note: l.default.current().cart.getOrderNote()
                        },
                        n = this.getDiscountApplied();
                    if (!(0, p.default)(n) && t.totalAmount >= n.minimumAmount) switch (n.type) {
                        case this.DISCOUNT_TYPE_FREE_SHIPPING:
                            a.free_shipping = 1;
                            break;
                        case this.DISCOUNT_TYPE_PERCENTAGE:
                            a.applied_discount = {
                                value_type: this.DISCOUNT_TYPE_PERCENTAGE,
                                value: n.value,
                                amount: this.toFixed(t.totalAmount * n.value / 100, !1),
                                description: n.description
                            };
                            break;
                        case this.DISCOUNT_TYPE_FIXED_AMOUNT:
                            var o = n.value > t.totalAmount ? t.totalAmount : n.value;
                            a.applied_discount = {
                                value_type: this.DISCOUNT_TYPE_FIXED_AMOUNT,
                                value: o,
                                amount: o,
                                description: n.description
                            }
                    }
                    var u = new c.default.Deferred;
                    return d.default.isInTestGroup("create_draft_order_v2").then(function(t) {
                        t && (a = (0, f.default)(a)), c.default.post(e, a).always(function(t) {
                            if (t && t.success && t.draft_order.invoice_url) {
                                var e = t.draft_order.invoice_url;
                                t.draft_order.checkout_url && 0 <= t.draft_order.checkout_url.search("/checkouts/") && (e = t.draft_order.checkout_url.replace("https://checkout.shopify.com", window.location.origin)), u.resolve(e)
                            } else u.reject()
                        })
                    }), u
                },
                buildDiscountLineItems: function() {
                    var i = this,
                        c = [],
                        d = 0,
                        s = this.getCartItems(),
                        l = [],
                        e = this.getDiscountProducts();
                    return (0, a.default)(e).forEach(function(t) {
                        e[t].forEach(function(e) {
                            var t = (0, g.default)(s, function(t) {
                                    return t.variantId === e.variant_id && 0 < t.quantity
                                }),
                                r = i.toFixed(e.old_price - e.new_price);
                            if (0 <= t && 0 < r) {
                                var a = s[t],
                                    n = e.quantity > a.quantity ? a.quantity : e.quantity,
                                    o = [{
                                        name: "_bk_discount",
                                        value: (0, f.default)({
                                            old_price: e.old_price,
                                            new_price: e.new_price
                                        })
                                    }];
                                (0, p.default)(a.properties) || (0, v.default)(a.properties, function(t, e) {
                                    o.push({
                                        name: e,
                                        value: t
                                    })
                                });
                                var u = i.toFixed(r * n);
                                d += u, c = (0, h.default)(c.concat(e.sources)), l.push({
                                    custom: !1,
                                    variant_id: e.variant_id,
                                    quantity: n,
                                    properties: o,
                                    applied_discount: {
                                        value_type: i.DISCOUNT_TYPE_FIXED_AMOUNT,
                                        value: r,
                                        amount: u,
                                        description: e.sources.join(", ")
                                    }
                                }), s[t].quantity -= n
                            }
                        })
                    }), s.forEach(function(t) {
                        var r = [];
                        (0, p.default)(t.properties) || (0, v.default)(t.properties, function(t, e) {
                            r.push({
                                name: e,
                                value: t
                            })
                        }), 0 < t.quantity && l.push({
                            custom: !1,
                            variant_id: t.variantId,
                            quantity: t.quantity,
                            properties: r
                        })
                    }), {
                        convertedItems: l,
                        sources: c,
                        totalDiscount: d
                    }
                },
                addDiscountProduct: function(t, e, r, a, n, o, u) {
                    var i = this.getDiscountProducts(),
                        c = m.default.current();
                    i[t] || (i[t] = []);
                    var d = (0, g.default)(i[t], {
                            variant_id: e,
                            old_price: a,
                            new_price: r
                        }),
                        s = 0 <= d && i[t][d],
                        l = Boolean((0, C.default)(c.items, {
                            variantId: e
                        }) && s && !u),
                        f = {
                            quantity: l ? s.quantity + n : parseInt(n, 10),
                            sources: l ? (0, h.default)(o.concat(s.sources)) : o,
                            variant_id: parseInt(e, 10),
                            old_price: parseFloat(a),
                            new_price: parseFloat(r)
                        };
                    s ? i[t][d] = f : i[t].push(f), this.saveToLocalStorage(i, {}, !0)
                },
                removeDiscountProduct: function(r, a) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        o = this.getDiscountProducts(),
                        u = !1;
                    o && o[r] && (o[r].forEach(function(t, e) {
                        t.variant_id !== a || n && -1 === t.sources.indexOf(n) || (delete o[r][e], o[r] = o[r].filter(function(t) {
                            return t
                        }), (0, i.default)(o[r]).length || delete o[r], u = !0)
                    }), u && this.saveToLocalStorage(o, {}, !0))
                },
                getDiscountProducts: function() {
                    var e = o.default.isSupportLocalStorage() ? localStorage.getItem("bk_discount_products") : s.default.get("bk_discount_products");
                    try {
                        e = JSON.parse(e)
                    } catch (t) {
                        e = {}
                    }
                    return e && e[m.default.current().token] && e[m.default.current().token].discountProducts ? e[m.default.current().token].discountProducts : {}
                },
                applyDiscount: function(t, e, r) {
                    var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                        n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "",
                        o = this.getDiscountProducts();
                    if (e === this.DISCOUNT_TYPE_PERCENTAGE && (100 < r || r < 1) || e === this.DISCOUNT_TYPE_FIXED_AMOUNT && r < 1) throw new Error("Discount value is invalid.");
                    e && r && this.saveToLocalStorage(o, {
                        id: t,
                        type: e,
                        value: r,
                        description: n,
                        minimumAmount: 0 <= Number(a) ? Number(a) : 0
                    })
                },
                removeDiscount: function(t, e) {
                    var r = this.getDiscountApplied();
                    if (r.id && (t === r.id || e && -1 !== r.id.indexOf(e))) {
                        var a = this.getDiscountProducts();
                        this.saveToLocalStorage(a, !1)
                    }
                },
                getDiscountApplied: function() {
                    var e = o.default.isSupportLocalStorage() ? localStorage.getItem("bk_discount_products") : s.default.get("bk_discount_products");
                    try {
                        e = JSON.parse(e)
                    } catch (t) {
                        e = {}
                    }
                    return e && e[m.default.current().token] && e[m.default.current().token].discount ? e[m.default.current().token].discount : {}
                },
                saveToLocalStorage: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        a = {};
                    !1 !== e && (a = (0, p.default)(e) ? this.getDiscountApplied() : e);
                    var n = {};
                    n[m.default.current().token] = {
                        discountProducts: t,
                        discount: a
                    }, o.default.isSupportLocalStorage() ? localStorage.setItem("bk_discount_products", (0, f.default)(n)) : s.default.set("bk_discount_products", (0, f.default)(n), {
                        expires: 30
                    }), r && (clearTimeout(this.saveToLocalStorageTimeoutId), this.saveToLocalStorageTimeoutId = setTimeout(function() {
                        return T.default.updateCartFromHost(!1, !0)
                    }, 500)), k.default.trigger(b.DISCOUNT_PRODUCTS_UPDATED)
                },
                calculateTotalDiscountPrice: function() {
                    var t = (0, f.default)(this.getDiscountProducts()),
                        e = (0, f.default)(this.getCartItems());
                    if (!this.calculateCache || this.calculateCache.discountJson !== t || this.calculateCache.cartItemsJson !== e) {
                        var r = this.buildDiscountLineItems().totalDiscount;
                        this.calculateCache = {
                            discountJson: t,
                            totalDiscount: r,
                            cartItemsJson: e
                        }
                    }
                    return this.calculateCache.totalDiscount
                },
                isUsingDraftOrder: function() {
                    if ("shopify" === _.default.getParam("shop", "shop").platform) {
                        if (!(0, p.default)(this.getDiscountProducts())) return !0;
                        var t = this.getDiscountApplied();
                        if (!(0, p.default)(t)) return m.default.current().totalAmount >= t.minimumAmount
                    }
                    return !1
                },
                listenCheckoutButtons: function(t) {
                    if ("cart" === n.default.getContext().type || t) {
                        if (!this.isUsingDraftOrder()) return;
                        u.default.removeClickListener((0, c.default)(l.default.current().element.getCheckoutButton()), function(t) {
                            t.bind("click", function(t) {
                                var e = (0, c.default)(t.target);
                                return (u.default.lastClickedOriginCheckoutButton = e).attr("disabled", "disabled"), u.default.originButton[e.data("bk-btn-id")] && u.default.originButton[e.data("bk-btn-id")].attr("disabled", "disabled"), void 0 !== e.attr("bk-changed-quantity") ? k.default.listen(b.CART_UPDATE, function() {
                                    u.default.triggerCheckout()
                                }) : u.default.triggerCheckout(), t.preventDefault(), t.stopImmediatePropagation(), !1
                            })
                        })
                    }
                },
                goToInvoicePage: function(t) {
                    var e = t,
                        r = l.default.current().currentLocale();
                    r && (e += (-1 === e.indexOf("?") ? "?" : "&") + "locale=" + r), o.default.redirect(e)
                },
                toFixed: function(t) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    if (0 < t % 1) {
                        if (window.floorForNonFractionalCurrencies) return Number(Math.floor(parseFloat(t).toFixed(2)));
                        if (e) return Number(parseFloat(t).toFixed(2));
                        var r = t.toString().search("\\.");
                        if (0 <= r) return Number(t.toString().substring(0, r + 3))
                    }
                    return Number(t)
                },
                setCartItems: function(t) {
                    this.cartItems = t
                },
                getCartItems: function() {
                    return this.cartItems ? this.cartItems : JSON.parse((0, f.default)(m.default.current().items))
                },
                getAppCode: function() {
                    return _.default.hasAppParam("bsales", "draft_order_url") && !_.default.hasAppParam("bsales", "isFake") ? "bsales" : !!(_.default.hasAppParam("cboost", "draft_order_url") || _.default.hasAppParam("bsales", "isFake") && _.default.hasAppParam("cboost", "draft_order_url")) && "cboost"
                }
            }
        },
        312: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = n(r(47)),
                a = n(r(48)),
                i = n(r(3)),
                c = n(r(74)),
                d = n(r(6)),
                s = n(r(118)),
                l = n(r(310)),
                f = n(r(119)),
                _ = n(r(25)),
                p = n(r(330)),
                h = r(27),
                v = n(r(49)),
                g = r(308),
                C = n(r(70));

            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var m = {
                originButton: {},
                autoId: 0,
                removeClickListener: function(t, a) {
                    var n = void 0,
                        o = void 0;
                    t.each(function(t, e) {
                        if (!(0, i.default)(e).hasClass("bk-btn-clone")) {
                            if ((n = (0, i.default)(e).data("bk-btn-id")) || (m.autoId += 1, n = m.autoId, (0, i.default)(e).data("bk-btn-id", n), m.originButton[n] = (0, i.default)(e)), o = (0, i.default)(e).clone(), window.bk.replaceByNewCheckoutButton) {
                                var r = (0, i.default)(e).prop("tagName").toLowerCase();
                                (o = (0, i.default)("<" + r + "/>")).addClass((0, i.default)(e).attr("class")), o.attr("value", (0, i.default)(e).attr("value")), o.attr("type", "button")
                            }
                            o.attr("onclick", "event.preventDefault();"), o.data("bk-btn-id", n), o.addClass("bk-btn-clone"), (0, i.default)(e).replaceWith(o), "function" == typeof a && a(o)
                        }
                    })
                },
                revertClickListener: function(t, r) {
                    t && t.length || r(null);
                    var a = void 0;
                    t.each(function(t, e) {
                        (0, i.default)(e).hasClass("bk-btn-clone") && (a = (0, i.default)(e).data("bk-btn-id"), (0, i.default)(e).replaceWith(m.originButton[a]), "function" == typeof r && m.originButton[a] && r(m.originButton[a]))
                    })
                },
                lastClickedOriginCheckoutButton: null,
                triggerCheckout: function() {
                    var o = this;
                    return (0, a.default)(u.default.mark(function t() {
                        var r, a, n, e;
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = l.default.getAppCode(), a = d.default.getParam("shop", "shop"), n = c.default.getBackendUrl(d.default.getAppParam(r, "draft_order_url")), t.next = 5, f.default.isInTestGroup("create_draft_order_v2").then(function(t) {
                                        t && (n = c.default.getGApiUrl("/draft-order/create_draft_order/" + r + "/" + a.id))
                                    });
                                case 5:
                                    if (p.default.sendInitiateCheckoutEvent(), e = function() {
                                            if (!window.beeketingFireReachedCheckout)
                                                if (s.default.getContext().platform === g.NGUYEN_KIM_PLATFORM && window.offerID) {
                                                    var t = {
                                                        offer_id: window.offerID
                                                    };
                                                    v.default.track(h.REACHED_CHECKOUT, t)
                                                } else {
                                                    var e = {
                                                        cart_token: C.default.current().token,
                                                        shop_platform: a.platform
                                                    };
                                                    v.default.track(h.REACHED_CHECKOUT, e)
                                                }
                                            r && l.default.isUsingDraftOrder() ? l.default.createInvoice(n).then(l.default.goToInvoicePage).fail(_.default.current().page_util.forceGoToCheckoutPage) : _.default.current().page_util.forceGoToCheckoutPage()
                                        }, m.lastClickedOriginCheckoutButton) return m.revertClickListener(m.lastClickedOriginCheckoutButton, function(t) {
                                        r && l.default.isUsingDraftOrder() ? l.default.createInvoice(n).then(l.default.goToInvoicePage).fail(_.default.current().page_util.forceGoToCheckoutPage) : t.length ? (_.default.current().cart.correctCartItemsQuantity(), t.trigger("click"), setTimeout(e, 1e3)) : _.default.current().page_util.forceGoToCheckoutPage()
                                    }), t.abrupt("return");
                                    t.next = 10;
                                    break;
                                case 10:
                                    e();
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, t, o)
                    }))()
                }
            };
            e.default = m
        },
        325: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var f = o(r(315)),
                a = o(r(45)),
                n = o(r(6)),
                _ = o(r(25)),
                p = o(r(3));

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function h(t, e) {
                var r = t.toFixed(e).toString();
                return r.match(/^\.\d+/) ? "0" + r : r
            }
            var u = {
                getShopCurrency: function() {
                    return n.default.getParam("shop", "shop").currency
                },
                format: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "${{amount}}",
                        r = this,
                        a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                        o = _.default.current();
                    e = o.getCurrentCurrencyFormat(e);
                    var u = "",
                        i = t = o.getCurrentCurrencyAmount(t);
                    if ((0, f.default)(parseFloat(t))) u = t;
                    else {
                        var c = /\{\{\s*(\w+)\s*\}\}/;
                        i = 100 * t;
                        var d = e.match(c);
                        if (null != d && 1 < d.length) switch (e.match(c)[1]) {
                            case "amount":
                                u = h(i / 100, 2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                break;
                            case "amount_no_decimals":
                                u = h(i / 100, 0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                break;
                            case "amount_with_comma_separator":
                                u = h(i / 100, 2).replace(/\./, ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                                break;
                            case "amount_no_decimals_with_comma_separator":
                                u = h(i / 100, 0).replace(/\./, ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                                break;
                            case "amount_no_decimals_with_space_separator":
                                u = h(i / 100, 0).replace(/\./, " ").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
                                break;
                            case "amount_no_trailing_zeros":
                                u = h(i / 100, 2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                                break;
                            case "amount_with_space_separator":
                                u = h(i / 100, 2).replace(/\./, " ").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                                break;
                            case "amount_with_apostrophe_separator":
                                u = h(i / 100, 2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                        }
                        u = e.replace(c, u)
                    }
                    var s = (0, p.default)("<div/>").html(u).text(),
                        l = (0, p.default)("<span>");
                    return l.css("float", "none"), n && l.attr("style", n), a && l.attr("data-primal-currency", a), l.addClass("money"), l.html(s), this.isUsingCurrencySwitcher() && (l.attr("data-currency", this.getShopCurrency()), l.attr("data-original-value", i), clearInterval(this.interval), this.interval = setInterval(function() {
                        clearInterval(r.interval), r.convertPriceToCorrectCurrency()
                    }, 200)), l.get(0).outerHTML
                },
                isUsingCurrencySwitcher: function() {
                    var t = void 0;
                    return void 0 !== (t = window.Currency) && "function" == typeof t.convertAll && t.currentCurrency ? "jqueryCurrency" : !(void 0 === (t = window.DoublyGlobalCurrency) || "function" != typeof t.convertAll || !t.currentCurrency) && "DoublyGlobalCurrency"
                },
                convertPriceToCorrectCurrency: function() {
                    var t = this.getShopCurrency(),
                        e = void 0;
                    switch (this.isUsingCurrencySwitcher()) {
                        case "jqueryCurrency":
                            t !== (e = window.Currency).currentCurrency && e.convertAll(this.getShopCurrency(), e.currentCurrency);
                            break;
                        case "DoublyGlobalCurrency":
                            t !== (e = window.DoublyGlobalCurrency).currentCurrency && e.convertAll(e.currentCurrency)
                    }
                }
            };
            a.default.filter("currency", function(t) {
                return u.format(t, n.default.getParam("shop", "shop").moneyFormat)
            }), e.default = u
        },
        330: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = r(308),
                n = d(r(6)),
                o = d(r(4)),
                u = d(r(70)),
                i = d(r(325)),
                c = d(r(3));

            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                track: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                    try {
                        "function" == typeof window.fbq && window.fbq("track", t, e)
                    } catch (t) {
                        (0, o.default)("Error durring call fb pixelMagic track")
                    }
                },
                isUsing: function(t) {
                    n.default.getParam("shop", a.FB_PIXEL_NO_FORCE) && (t = !1);
                    var e = 0 !== Number(n.default.getParam("shop", a.USE_FB_PIXEL_TRACK));
                    return (t || e) && "function" == typeof window.fbq
                },
                sendInitiateCheckoutEvent: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        e = u.default.current();
                    (n.default.getParam("shop", "fb_pixel_force_initiate_checkout") || this.isUsing(t) && e && e.items && e.items.length) && this.track("InitiateCheckout", {
                        content_type: "product_group",
                        currency: i.default.getShopCurrency(),
                        value: Number(e.totalAmount).toFixed(2),
                        content_ids: e.items.map(function(t) {
                            return t.productRefId
                        }),
                        num_items: e.items.reduce(function(t, e) {
                            return t.quantity + e.quantity
                        }),
                        source: "beeketing"
                    })
                },
                sendAddToCartEvent: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (this.isUsing(e)) {
                        var r = void 0;
                        (0, c.default)('img[src^="https://www.facebook.com/tr?"]').each(function() {
                            var t = (0, c.default)(this).attr("src").split("[product_catalog_id]=");
                            void 0 !== t[1] && (r = t[1])
                        });
                        var a = {
                            content_ids: t,
                            content_type: "product_group",
                            source: "beeketing"
                        };
                        r && (a.product_catalog_id = r, a.content_type = "product"), this.track("AddToCart", a)
                    }
                }
            }
        }
    }
]);