(window.beeketingWPJP = window.beeketingWPJP || []).push([
    [2], {
        340: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = f(n(26)),
                r = f(n(34)),
                u = f(n(353)),
                i = f(n(463)),
                o = f(n(354)),
                d = f(n(355)),
                l = f(n(356));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = function() {
                function e() {
                    (0, a.default)(this, e), this.request = new o.default, this.cart = new d.default, this.element = new l.default, this.page_util = new u.default, this.product_util = new i.default
                }
                return (0, r.default)(e, [{
                    key: "currentPageContext",
                    value: function() {
                        return {
                            type: null,
                            payload: {}
                        }
                    }
                }, {
                    key: "isLoggedIn",
                    value: function() {
                        return this.userRefId()
                    }
                }, {
                    key: "userRefId",
                    value: function() {
                        return console.warn("Need to implement platform.userRefId"), !1
                    }
                }, {
                    key: "isSupportOptionSelector",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isSupportCustomizeOptions",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isSupportDirectServiceWorkerRegister",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isProductHasOptions",
                    value: function(e) {
                        return !1
                    }
                }, {
                    key: "getCurrentCurrencyAmount",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "getCurrentCurrencyFormat",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "sendOrderToWebhook",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "needClearCartAfterCheckout",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "currentLocale",
                    value: function() {
                        return ""
                    }
                }, {
                    key: "getSignUpPage",
                    value: function() {
                        return ""
                    }
                }]), e
            }();
            t.default = c
        },
        353: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = u(n(26)),
                r = u(n(34));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function() {
                function e() {
                    (0, a.default)(this, e)
                }
                return (0, r.default)(e, [{
                    key: "clearDiscountCache",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "forceGoToCheckoutPage",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "forceGoToCartPage",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "forceGoToHomePage",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "forceGoToCollectionPage",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "removeHiddenVariantsFromSelector",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "getLastCartItemRefIdOnThankYouPage",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "isAddDiscountViaLink",
                    value: function() {
                        return !1
                    }
                }]), e
            }();
            t.default = i
        },
        354: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = u(n(26)),
                r = u(n(34));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function() {
                function e() {
                    (0, a.default)(this, e)
                }
                return (0, r.default)(e, [{
                    key: "removeFormatFromPath",
                    value: function(e) {
                        var t = e.replace(/\.json/g, "").replace(/\.js/g, "");
                        return -1 != t.indexOf("?") && (t = t.substring(0, t.indexOf("?"))), t
                    }
                }, {
                    key: "getAddCartRequest",
                    value: function(e) {
                        1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        return {
                            isAddCartRequest: !1
                        }
                    }
                }, {
                    key: "isCartChangeAjaxRequest",
                    value: function(e) {
                        return !1
                    }
                }, {
                    key: "getSizedImageUrl",
                    value: function(e, t) {
                        return e
                    }
                }]), e
            }();
            t.default = i
        },
        355: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = m(n(47)),
                i = m(n(48)),
                a = m(n(26)),
                r = m(n(34)),
                y = m(n(3)),
                o = m(n(20)),
                d = m(n(124)),
                l = m(n(84)),
                k = m(n(6)),
                C = m(n(330)),
                f = n(27),
                c = n(308),
                _ = m(n(25)),
                A = m(n(46)),
                b = m(n(4)),
                P = m(n(70)),
                s = m(n(120)),
                T = m(n(312)),
                I = n(27),
                v = n(308);

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = function() {
                function e() {
                    (0, a.default)(this, e), this.listenedAddCartAjax = !1, this.itemAddedLog = [], this.checkOfferFunctions = [], this.listenCartButton = !1, this.cartButton = null, this.replaceItems = [], this.isAjaxCart = !1
                }
                return (0, r.default)(e, [{
                    key: "getLastItemAddedLog",
                    value: function(e) {
                        var t = this.itemAddedLog.length;
                        if (!t) return null;
                        var n = this.itemAddedLog[t - 1];
                        return e && n.variant_id != e ? null : n
                    }
                }, {
                    key: "convertDataToCartItem",
                    value: function(e) {
                        return new d.default
                    }
                }, {
                    key: "getCartFromResponse",
                    value: function(e) {
                        console.log("You need to write code logic to set cart items from ajax response data")
                    }
                }, {
                    key: "detectAddCartType",
                    value: function(e) {
                        var t = _.default.current().element.getAddCartButton(e);
                        return t[0] ? 2 <= y.default._data(t[0], "events") ? l.default.ajax : l.default.form : ((0, b.default)("Cannot find button", e), l.default.ajax)
                    }
                }, {
                    key: "watchAddCart",
                    value: function(e, t) {
                        (0, b.default)("Detect add cart type:", e), k.default.setParam(c.SHOP_AJAX_CART, e != l.default.form);
                        (0, y.default)(t);
                        var n = _.default.current().element.getAddCartButton(t);
                        switch (e) {
                            case l.default.hybrid:
                                n.data("force-overwrite", 1);
                            case l.default.form:
                                n.length && this.cartButton != n[0] && (A.default.triggered[f.APPS_LOADED] ? A.default.trigger(f.CART_BUTTON, {
                                    button: n,
                                    form: t
                                }) : A.default.listen(f.APPS_LOADED, function() {
                                    A.default.trigger(f.CART_BUTTON, {
                                        button: n,
                                        form: t
                                    })
                                }), this.cartButton = n[0]);
                            case l.default.ajax:
                            default:
                                this.listenedAddCartAjax || (this.listenedAddCartAjax = !0)
                        }
                        this.isAjaxCart = e === l.default.ajax
                    }
                }, {
                    key: "watchCartButton",
                    value: function(e) {
                        var n = this;
                        this.checkOfferFunctions.push(e), this.listenCartButton || (A.default.listen(f.CART_BUTTON, function(l) {
                            var f = "",
                                c = (0, y.default)(l.form),
                                s = _.default.current(),
                                v = n,
                                m = l.button;
                            if (!m.hasClass("scn-addtocart") && n.checkOfferFunctions.length && !s.cart.ignorePlatformAddCart(c) && !m.data("click-bound")) {
                                m.data("click-bound", !0);
                                var e = k.default.getParam("shop", "settings").overrideAddCartButton,
                                    t = k.default.getParam("shop", "settings").unbindAddToCartButton,
                                    g = e || t || m.data("force-overwrite");
                                g && T.default.removeClickListener(m, function(e) {
                                    (m = e).data("click-bound", !0), n.onCloneAddToCartButton(e)
                                }), f = m.attr("onclick"), m.removeAttr("onclick");
                                var h = 0,
                                    p = 0;
                                m.on("click", function(r) {
                                    var t = this;
                                    if ("function" != typeof c[0].checkValidity || c[0].checkValidity()) {
                                        var e = new Date;
                                        if (!(e.getTime() - h < 150 || (0, y.default)(this).data("bk-stop") || (0, y.default)(this).hasClass("beeketing-disabled") || (0, y.default)(this).hasClass("disabled"))) {
                                            h = e.getTime();
                                            var n = P.default.current(),
                                                a = s.element.getSubmitFormData(c),
                                                u = function(t, n) {
                                                    var a = !1;
                                                    if (v.checkOfferFunctions.forEach(function(e) {
                                                            e(t, n) ? (a = !0, (0, b.default)("Has offer return true:\n" + e + "\nwith item, cart:", t, n)) : (0, b.default)("Has offer return false:\n" + e + "\nwith item, cart:", t, n)
                                                        }), a) {
                                                        var e = (new Date).getTime();
                                                        if (e - p < 1e3) return r.preventDefault(), a;
                                                        "home" === s.currentPageContext().type && A.default.trigger(I.ADD_TO_CART_HOME_PAGE), s.cart.submitAddCartForm(l.form), p = e, C.default.sendAddToCartEvent([t.productRefId]), r.preventDefault()
                                                    }
                                                    return a
                                                },
                                                i = function() {
                                                    if (g) T.default.revertClickListener(m, function(e) {
                                                        e.trigger("click")
                                                    });
                                                    else {
                                                        h = (new Date).getTime(), window.bkClickAddCartButtonHandle && window.bkClickAddCartButtonHandle((0, y.default)(t)), f && (0, y.default)(t).attr("onclick", f), r.preventDefault(), (0, y.default)(t).data("bk-stop", 1);
                                                        var e = (0, y.default)(t);
                                                        setTimeout(function() {
                                                            e.trigger("click")
                                                        }, 300)
                                                    }
                                                },
                                                o = n.getItemByVariantId(a.variant_id),
                                                d = {};
                                            o ? (d = P.default.getTemporaryCart(o, a.quantity), u(o, d) || ((0, b.default)("Cart base: Have no valid offer call default click action"), i())) : (a.product_id ? s.product_util.getTemporaryCartItems(a.product_id, function(e) {
                                                if (e) {
                                                    var t = void 0;
                                                    e.variants && e.variants.length || (0, b.default)("Cart base: Product invalid, not found any variants"), e.variants.forEach(function(e) {
                                                        t || (t = e), e.variantId == a.variant_id && (o = e)
                                                    }), !o && t && (o = t)
                                                }
                                                o ? (d = P.default.getTemporaryCart(o, a.quantity), u(o, d) || i()) : ((0, b.default)("Cart base: Not found product item call default click action"), i())
                                            }) : i(), r.preventDefault())
                                        }
                                    }
                                })
                            }
                        }), this.listenCartButton = !0)
                    }
                }, {
                    key: "overrideAddCartButton",
                    value: function(e) {
                        (0, b.default)("Override add cart button");
                        var t = _.default.current().element.getAddCartButton(e);
                        (0, y.default)(t).unbind("click").click(function() {
                            (0, y.default)(e).submit()
                        })
                    }
                }, {
                    key: "submitAddCartForm",
                    value: function(e) {
                        (0, b.default)("Function `platform.cart.submitAddCartForm` is not implemented")
                    }
                }, {
                    key: "listenAddCartAjaxRequest",
                    value: function() {
                        var t = (0, i.default)(u.default.mark(function e(a) {
                            var r = this;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (0, b.default)("Listen ajax requests"), A.default.listen(f.AJAX_COMPLETED, function() {
                                            var t = (0, i.default)(u.default.mark(function e(t) {
                                                var n;
                                                return u.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, _.default.current().request.getAddCartRequest(t, a);
                                                        case 2:
                                                            (n = e.sent).isAddCartRequest && a(n.item, n.quantity);
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, r)
                                            }));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }());
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "update",
                    value: function(e) {
                        !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                        (0, b.default)("Function `platform.cart.update` is not implemented")
                    }
                }, {
                    key: "add",
                    value: function(e, t) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                            a = arguments[3],
                            r = arguments[4];
                        this.itemAddedLog.push({
                            variant_id: e,
                            quantity: t,
                            source: r
                        }), _.default.current().cart.doAdd(e, t, n, a)
                    }
                }, {
                    key: "doAdd",
                    value: function(e, t) {
                        2 < arguments.length && void 0 !== arguments[2] && arguments[2], arguments[3];
                        (0, b.default)("Function `platform.cart.add` is not implemented")
                    }
                }, {
                    key: "addMulti",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                            a = [],
                            r = {},
                            u = [];
                        y.default.each(e.variant_ids, function(e, t) {
                            Number(t) && u.push(Number(t))
                        });
                        var i = P.default.current();
                        if (i) {
                            var o = void 0;
                            for (o = 0; o < i.items.length; o++) {
                                var d = i.items[o]; - 1 < u.indexOf(d.variantId) && (r[d.variantId] = d.quantity)
                            }
                        }
                        y.default.each(u, function(e, t) {
                            r[t] || (r[t] = 0), r[t] += 1
                        }), y.default.each(r, function(e, t) {
                            a.push({
                                item: {
                                    variantId: e,
                                    quantity: t
                                }
                            })
                        }), _.default.current().cart.sync(a, [], t, n)
                    }
                }, {
                    key: "addReplaceItem",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "sync",
                    value: function() {
                        0 < arguments.length && void 0 !== arguments[0] && arguments[0], 1 < arguments.length && void 0 !== arguments[1] && arguments[1], 2 < arguments.length && void 0 !== arguments[2] && arguments[2], 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                        (0, b.default)("Function `platform.cart.sync` is not implemented")
                    }
                }, {
                    key: "clear",
                    value: function() {
                        o.default.remove(v.COOKIE_CART_TOKEN_KEY), o.default.remove(v.COOKIE_CART_DATA)
                    }
                }, {
                    key: "triggerRemoveButton",
                    value: function() {
                        (0, b.default)("Function `platform.cart.triggerRemove` is not implemented")
                    }
                }, {
                    key: "onChangeCurrentCart",
                    value: function(e, t) {
                        return !1
                    }
                }, {
                    key: "onUpdateCartAtLoadPage",
                    value: function(e, t) {
                        return !0
                    }
                }, {
                    key: "getCartHiddenItems",
                    value: function() {
                        var e = P.default.current(),
                            t = [];
                        return e && e.items.forEach(function(e) {
                            s.default.isHiddenVariantTitle(e.title) && t.push(e.id)
                        }), t
                    }
                }, {
                    key: "correctCartItemsQuantity",
                    value: function() {
                        (0, b.default)("Function `platform.cart.correctCartItemsQuantity` is not implemented")
                    }
                }, {
                    key: "convertTemporaryDataToCartItem",
                    value: function(e) {
                        var t = e;
                        return t.line_price = e.price, t.variant_id = e.ref_id, t.product_id = e.product_ref_id, t.variant_title = e.title, _.default.current().cart.convertDataToCartItem(t)
                    }
                }, {
                    key: "getUniqueVariantId",
                    value: function() {
                        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).variantId
                    }
                }, {
                    key: "addDiscountCode",
                    value: function() {}
                }, {
                    key: "platformAutoApplyCoupon",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "ignorePlatformAddCart",
                    value: function(e) {
                        return !1
                    }
                }, {
                    key: "onCloneAddToCartButton",
                    value: function(e) {}
                }, {
                    key: "addSourceCallback",
                    value: function(e) {}
                }, {
                    key: "getReplaceItems",
                    value: function() {
                        return this.replaceItems
                    }
                }, {
                    key: "isValidReplaceItems",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "removeNameVariantBK",
                    value: function() {
                        var e = _.default.current().element.getCartMeta();
                        e && (0, y.default)(e).each(function(e, t) {
                            (0, y.default)(t).html((0, y.default)(t).html().replace(/\(BK\s\d{1,}\)/gim, ""))
                        })
                    }
                }, {
                    key: "getOrderNote",
                    value: function() {
                        try {
                            var e = _.default.current().element.getCartForms();
                            if (!e) return "";
                            var t = (0, y.default)(e).find(_.default.current().element.getOrderNote());
                            if (t.length) return t.val()
                        } catch (e) {
                            (0, b.default)("Get order note error", e)
                        }
                        return ""
                    }
                }]), e
            }();
            t.default = g
        },
        356: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = i(n(329)),
                a = i(n(26)),
                r = i(n(34)),
                s = i(n(3)),
                u = i(n(4)),
                v = i(n(6)),
                m = n(308);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = function() {
                function e() {
                    (0, a.default)(this, e)
                }
                return (0, r.default)(e, [{
                    key: "getAddCartForms",
                    value: function() {
                        (0, u.default)("Need to implement platform.element.getAddCartForms")
                    }
                }, {
                    key: "getCartForms",
                    value: function() {
                        (0, u.default)("Need to implement platform.element.getCartForms")
                    }
                }, {
                    key: "getCheckoutButton",
                    value: function() {
                        (0, u.default)("Need to implement platform.element.getCheckoutButton")
                    }
                }, {
                    key: "getCheckoutButtonNextStep",
                    value: function() {
                        (0, u.default)("Need to implement platform.element.getCheckoutButtonNextStep")
                    }
                }, {
                    key: "getCartMiniIcon",
                    value: function() {
                        (0, u.default)("Need to implement platform.element.getCartMiniIcon")
                    }
                }, {
                    key: "getUpdateCartButton",
                    value: function() {
                        (0, u.default)("Need to implement platform.element.getUpdateCartButton")
                    }
                }, {
                    key: "getRemoveButton",
                    value: function() {
                        (0, u.default)("Need to implement platform.element.getRemoveButton")
                    }
                }, {
                    key: "getAddCartButton",
                    value: function(e) {
                        var t = (0, s.default)(e),
                            n = ["#buy_it_now", "#AddToCart", "#add-to-cart", ".btn-cart", ".btn-addCart", "#add", ".add", "#add_product", "#product-add-to-cart"],
                            a = ["#addToCartCopy"],
                            r = ["Buy", "Purchase", "Add", "Order", "Comprar"],
                            u = ["button", "a", "div", "span"],
                            i = void 0,
                            o = void 0,
                            d = void 0,
                            l = void 0,
                            f = void 0,
                            c = v.default.getParam("shop", m.ADD_TO_CART_IDENTITY);
                        for (c && (0, s.default)(c).length && n.push(c), o = 0, d = a.length; o < d && !(i = t.find(a[o])).length; o++);
                        if (!i.length)
                            for (o = 0, d = n.length; o < d && !(i = t.find(n[o] + '[type="submit"]').filter(":visible")).length; o++);
                        if (i.length || (i = t.find('input[type="submit"], button[type="submit"]').filter(":visible")), !i.length)
                            for (o = 0, d = n.length; o < d && !(i = t.find(n[o]).filter(":visible")).length; o++);
                        if (!i.length) e: for (l = 0, f = u.length; l < f; l++)
                            for (o = 0, d = r.length; o < d; o++)
                                if ((i = t.find(u[l] + ':contains("' + r[o] + '")').filter(":visible").not(':contains("login")')).length || (i = t.find(u[l] + ':contains("' + r[o].toUpperCase() + '")').filter(":visible").not(':contains("login")')).length || (i = t.find(u[l] + ':contains("' + r[o].toLowerCase() + '")').filter(":visible").not(':contains("login")')), i.length) break e;
                        return i
                    }
                }, {
                    key: "getSubmitFormData",
                    value: function(e) {
                        return !1
                    }
                }, {
                    key: "getMainAddCartForm",
                    value: function() {
                        var e = (0, s.default)(this.getAddCartForms()),
                            n = -1,
                            a = (0, s.default)();
                        return e.each(function(e, t) {
                            (0, s.default)(t).height() > n && (n = (0, s.default)(t).height(), a = (0, s.default)(t))
                        }), a
                    }
                }, {
                    key: "getQuantityByForm",
                    value: function(e) {
                        return e.find('[name="quantity"]').val() || e.find('[name="qty"]').val() || 1
                    }
                }, {
                    key: "isProductImageSrc",
                    value: function(e) {
                        return e
                    }
                }, {
                    key: "getCartMeta",
                    value: function() {
                        return ""
                    }
                }, {
                    key: "tryGetProductRefId",
                    value: function(e) {
                        return 0
                    }
                }, {
                    key: "getProductLinkConfigs",
                    value: function() {
                        return {
                            selector: "",
                            extractHandle: function() {}
                        }
                    }
                }, {
                    key: "isProductImage",
                    value: function(e) {
                        return e.is("img")
                    }
                }, {
                    key: "findProductImageInsideElement",
                    value: function(e) {
                        return e.find("img")
                    }
                }, {
                    key: "findSurroundingImagesByElement",
                    value: function(e) {
                        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                            n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                            a = [];
                        if (this.isProductImage(e)) return a.push(e), a;
                        var r = this.findProductImageInsideElement(e);
                        if (0 < r.length) {
                            for (var u = 0; u < r.length; u++) a.push((0, s.default)(r[u]));
                            return a
                        }
                        if (t)
                            for (var i = e.siblings(), o = 0; o < i.length; o++) {
                                var d = this.findSurroundingImagesByElement((0, s.default)(i[o]), !1, !1);
                                if (!1 !== d) return [].concat(a, (0, f.default)(d))
                            }
                        if (n) {
                            var l = e.parent();
                            return this.findSurroundingImagesByElement(l, !1, !1)
                        }
                        return !1
                    }
                }, {
                    key: "getOrderNote",
                    value: function() {
                        return '[name="note"]'
                    }
                }, {
                    key: "getOrderNumber",
                    value: function() {
                        return ""
                    }
                }]), e
            }();
            t.default = o
        },
        463: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = c(n(35)),
                a = c(n(322)),
                r = c(n(26)),
                u = c(n(34)),
                o = c(n(3)),
                d = c(n(642)),
                l = c(n(6)),
                f = c(n(25));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function() {
                function e() {
                    (0, r.default)(this, e)
                }
                return (0, u.default)(e, [{
                    key: "getProductDetail",
                    value: function(e, t, n) {
                        o.default.ajax({
                            type: "GET",
                            url: l.default.getParam("loader", "gapiBasePath") + "/product/products.json?ref_id=" + e + "&api_key=" + l.default.getParam("shop", "shop").api_key,
                            cache: !1,
                            success: function(e) {
                                var t = e;
                                (t = t[0]).featured_image = t.medium_image_url, t.featured_image = t.medium_image_url, t.images && (0, d.default)(t.images) || (t.images = [{
                                    src: t.medium_image_url
                                }]), t.images && (t.images = (0, a.default)(t.images)), void 0 !== t.url && t.url || (t.url = "/" + t.handle), n(t)
                            },
                            error: function() {}
                        })
                    }
                }, {
                    key: "getTemporaryCartItems",
                    value: function(e, n) {
                        var t = l.default.getParam("shop", "shop");
                        o.default.ajax({
                            type: "GET",
                            url: l.default.getParam("loader", "gapiBasePath") + "/product/products.json?ref_id=" + e + "&api_key=" + t.api_key,
                            cache: !1,
                            success: function(e) {
                                e && e.length || n(!1);
                                var t = e[0],
                                    u = [];
                                t.variants.forEach(function(e) {
                                    for (var t = {}, n = function(e) {
                                            return e.replace(/([A-Z])/g, "_$1").toLowerCase()
                                        }, a = (0, i.default)(e), r = 0; r < a.length; r++) t[n(a[r])] = e[a[r]];
                                    t = f.default.current().cart.convertTemporaryDataToCartItem(t), u.push(t)
                                }), t.variants = u, n(t)
                            },
                            error: function() {
                                n(!1)
                            },
                            timeout: 3e3
                        })
                    }
                }, {
                    key: "getProductByRefId",
                    value: function(e, n) {
                        var t = l.default.getParam("shop", "shop");
                        o.default.ajax({
                            headers: {
                                "X-Beeketing-Key": t.api_key
                            },
                            type: "GET",
                            url: l.default.getParam("loader", "apiBasePath") + "/products.json?ref_id=" + e + "&platform=" + f.default.currentKey(),
                            success: function(e) {
                                var t = e.products;
                                t.length ? ((t = t[0]).images && (0, d.default)(t.images) || (t.images = [{
                                    src: t.medium_image_url
                                }]), n(t)) : n(!1)
                            },
                            error: function() {
                                n(!1)
                            },
                            timeout: 3e3
                        })
                    }
                }, {
                    key: "getProductUrl",
                    value: function(e) {
                        return e && 0 === e.indexOf("/") ? e : "/" + e
                    }
                }, {
                    key: "getFormattedCustomizeOptions",
                    value: function(e) {
                        return e.customize_options
                    }
                }]), e
            }();
            t.default = s
        }
    }
]);