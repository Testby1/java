(window.beeketingWPJP = window.beeketingWPJP || []).push([
    [149], {
        1348: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = u(r(71)),
                a = u(r(26)),
                o = u(r(34)),
                i = u(r(72)),
                s = u(r(73)),
                c = u(r(3)),
                l = u(r(647)),
                p = u(r(25)),
                f = u(r(4)),
                d = r(648),
                h = u(r(119));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var v = function(e) {
                function u() {
                    return (0, a.default)(this, u), (0, i.default)(this, (u.__proto__ || (0, n.default)(u)).apply(this, arguments))
                }
                return (0, s.default)(u, e), (0, o.default)(u, [{
                    key: "getAddCartRequest",
                    value: function(e) {
                        1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        var t = e.url,
                            r = e.settings;
                        if ((-1 === t.indexOf("?resource=cart") || "post" !== r.type.toLowerCase()) && -1 === t.indexOf("/?wc-ajax=add_to_cart")) return {
                            isAddCartRequest: !1
                        };
                        var n = {};
                        if (-1 !== t.indexOf("/?wc-ajax=add_to_cart") && void 0 !== e.responseJSON.fragments) {
                            var a = e.responseJSON.fragments.beeketing_cart,
                                o = e.data.product_id;
                            e.data.variation_id && (o = e.data.variation_id), n = p.default.current().cart.getCartFromResponse(a).getItemByVariantId(o)
                        } else {
                            var i = e.responseJSON;
                            n = i ? p.default.current().cart.convertDataToCartItem(i.item) : {}
                        }
                        return -1 !== t.indexOf("?resource=cart") && u.ajaxCartIntegration(), {
                            isAddCartRequest: !0,
                            item: n,
                            quantity: e.data.quantity ? e.data.quantity : 1
                        }
                    }
                }, {
                    key: "isCartChangeAjaxRequest",
                    value: function(e) {
                        var t = e.url,
                            r = e.settings;
                        if (!(-1 !== t.indexOf("?resource=cart&type=multi") && "post" === r.type.toLowerCase() || -1 !== t.indexOf("?resource=cart") && "put" === r.type.toLowerCase() || -1 !== t.indexOf("wc-ajax=get_refreshed_fragments") || -1 !== t.indexOf("?remove_item"))) return {
                            isCartChange: !1
                        };
                        var n = {};
                        if (-1 !== t.indexOf("wc-ajax=get_refreshed_fragments") && void 0 !== e.responseJSON.fragments && void 0 !== e.responseJSON.fragments.beeketing_cart) n = p.default.current().cart.getCartFromResponse(e.responseJSON.fragments.beeketing_cart);
                        else if (void 0 !== e.responseJSON && void 0 !== e.responseJSON.cart) n = p.default.current().cart.getCartFromResponse(e.responseJSON.cart);
                        else if (-1 === t.indexOf("?remove_item")) return {
                            isCartChange: !1
                        };
                        return -1 !== t.indexOf("?resource=cart&type=multi") && (l.default.lt(window._beeketing.plugin_version, "3.8.4") ? u.ajaxCartIntegration() : h.default.isInTestGroup(d.WooCommerceUpdateMiniCart).then(function(e) {
                            e || u.ajaxCartIntegration()
                        })), {
                            isCartChange: !0,
                            cart: n
                        }
                    }
                }], [{
                    key: "ajaxCartIntegration",
                    value: function() {
                        try {
                            window.woocommerce_params && window.woocommerce_params.wc_ajax_url && "function" == typeof window.jQuery && c.default.getJSON(window.woocommerce_params.wc_ajax_url.replace("%%endpoint%%", "get_refreshed_fragments"), function(e) {
                                var t = null,
                                    r = p.default.current(),
                                    n = r.element.getMainAddCartForm();
                                n && (t = r.element.getAddCartButton(n)), window.jQuery(document.body).trigger("added_to_cart", [e.fragments, e.cart_hash, t])
                            }), window.jQuery(document.body).trigger("updated_wc_div")
                        } catch (e) {
                            (0, f.default)(e)
                        }
                    }
                }]), u
            }(u(r(354)).default);
            t.default = v
        },
        1349: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = k(r(71)),
                a = k(r(26)),
                o = k(r(34)),
                i = k(r(72)),
                u = k(r(73)),
                l = k(r(3)),
                s = k(r(647)),
                p = k(r(4)),
                f = k(r(118)),
                d = k(r(6)),
                h = k(r(25)),
                v = r(648),
                m = k(r(119)),
                g = k(r(20)),
                c = k(r(355)),
                _ = k(r(78)),
                w = k(r(124)),
                y = r(308);

            function k(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var b = function(e) {
                function c() {
                    (0, a.default)(this, c);
                    var e = (0, i.default)(this, (c.__proto__ || (0, n.default)(c)).call(this));
                    return e.replaceItems = {
                        variant_ids: [],
                        product_ids: [],
                        attributes: []
                    }, e
                }
                return (0, u.default)(c, e), (0, o.default)(c, [{
                    key: "convertDataToCartItem",
                    value: function(e) {
                        var t = new w.default;
                        return e && (t.id = e.id, t.variantId = e.variant_id, t.variantTitle = e.variant_title, t.productRefId = e.product_id, t.productTitle = e.product_title, t.quantity = parseInt(e.quantity, 10), t.price = e.price, t.linePrice = t.price * t.quantity, t.sku = e.sku, t.title = e.title, t.handle = e.handle, t.image = e.image, t.url = e.url), t
                    }
                }, {
                    key: "getCartFromResponse",
                    value: function(e) {
                        var t = this,
                            r = new _.default;
                        r.items = e.items.map(function(e) {
                            return t.convertDataToCartItem(e)
                        });
                        var n = e.token;
                        return n || (n = g.default.get(y.COOKIE_CART_TOKEN_KEY)) || (n = Math.random().toString(36).substr(2), g.default.set(y.COOKIE_CART_TOKEN_KEY, n, {
                            expires: 30
                        })), r.token = n, r.totalItems = e.item_count, window.isShopWpressGetCartModelOtherWay ? r.totalAmount = e.total_price ? e.total_price : e.subtotal_price : r.totalAmount = e.total_price, r.totalDiscount = e.subtotal_price && e.subtotal_price > e.total_price ? e.subtotal_price - e.total_price : 0, r
                    }
                }, {
                    key: "convertResponseTextToJson",
                    value: function(e) {
                        var t = !1;
                        if (window.bk.customResponse) {
                            var r = e;
                            r && (r = (r = r.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f")).replace(/[\u0000-\u0019]+/g, ""), t = JSON.parse(r))
                        }
                        return t
                    }
                }, {
                    key: "update",
                    value: function(r) {
                        !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                        var n = this,
                            e = window._beeketing;
                        if (void 0 !== e && void 0 !== e.cart) setTimeout(function() {
                            r(n.getCartFromResponse(e.cart)), setTimeout(function() {
                                delete e.cart
                            }, 10)
                        }, 10);
                        else {
                            var t = d.default.getParam("shop", "shop"),
                                a = e && e.page_url && e.page_url.cart ? "" + e.page_url.cart : "",
                                o = new Date;
                            l.default.ajax({
                                url: a,
                                data: {
                                    _: Math.round(o.getTime()),
                                    resource: "cart"
                                },
                                headers: {
                                    "X-Beeketing-Key": t.api_key
                                },
                                dataType: "json",
                                success: function(e) {
                                    var t = c.formatCartResponse(e);
                                    t && r(n.getCartFromResponse(t))
                                }
                            })
                        }
                    }
                }, {
                    key: "doAdd",
                    value: function(e, t) {
                        var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                            n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                            a = e;
                        e == n.product_id && (a = null);
                        var o = {
                                product_id: n.product_id,
                                variant_id: a,
                                quantity: t,
                                attributes: n.attributes
                            },
                            i = d.default.getParam("shop", "shop"),
                            u = {
                                type: "POST",
                                url: c.getAjaxCartResourceUrl("resource=cart"),
                                headers: {
                                    "X-Beeketing-Key": i.api_key
                                },
                                data: o,
                                dataType: "json",
                                success: function(e) {
                                    r && void 0 !== e.item && r(e.item)
                                },
                                error: function() {
                                    "function" == typeof r && r(null)
                                }
                            };
                        l.default.ajax(u)
                    }
                }, {
                    key: "addMulti",
                    value: function(e) {
                        for (var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], r = (2 < arguments.length && void 0 !== arguments[2] && arguments[2], {
                                product_id: [],
                                variant_id: [],
                                attributes: []
                            }), n = 0; n < e.variant_ids.length; n++) r.product_id.push(e.product_ids[n]), r.variant_id.push(e.variant_ids[n]), r.attributes.push(e.attributes[n]);
                        var a = this,
                            o = d.default.getParam("shop", "shop"),
                            i = {
                                type: "POST",
                                url: c.getAjaxCartResourceUrl("resource=cart&type=multi"),
                                headers: {
                                    "X-Beeketing-Key": o.api_key
                                },
                                data: r,
                                dataType: "json",
                                complete: function(e) {
                                    ! function(n) {
                                        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                                        if (s.default.gte(window._beeketing.plugin_version, "3.8.4") && m.default.isInTestGroup(v.WooCommerceUpdateMiniCart).then(function(e) {
                                                if (e) {
                                                    var t = "cart" in n ? n.cart.fragments : n.fragments,
                                                        r = "cart" in n ? n.cart.cart_hash : n.cart_hash;
                                                    a.integrateCart(t, r)
                                                }
                                            }), e) {
                                            var t = c.formatCartResponse(n);
                                            t && e(a.getCartFromResponse(t))
                                        }
                                    }(e.responseJSON && void 0 !== e.responseJSON || !e.responseText ? e.responseJSON : a.convertResponseTextToJson(e.responseText), t)
                                },
                                error: function(e) {
                                    (0, p.default)(e)
                                }
                            };
                        l.default.ajax(i)
                    }
                }, {
                    key: "integrateCart",
                    value: function(e, t) {
                        var r = null,
                            n = h.default.current(),
                            a = n.element.getMainAddCartForm();
                        a && (r = n.element.getAddCartButton(a)), window.jQuery(document.body).trigger("added_to_cart", [e, t, r])
                    }
                }, {
                    key: "sync",
                    value: function() {
                        var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                            o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                            i = this,
                            u = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                        3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                        (0, p.default)("Sync cart", a, o);
                        var s = {
                            id: {}
                        };
                        h.default.current().cart.update(function(r) {
                            a.forEach(function(e) {
                                var t = r.getItemByVariantId(e.item.variantId);
                                t && (s.id[t.id] = e.item.quantity)
                            }), o.forEach(function(e) {
                                var t = r.getItemByVariantId(e.item.variantId);
                                t && (s.id[t.id] = 0)
                            });
                            var n = i,
                                e = d.default.getParam("shop", "shop"),
                                t = {
                                    type: "PUT",
                                    url: c.getAjaxCartResourceUrl("resource=cart"),
                                    headers: {
                                        "X-Beeketing-Key": e.api_key
                                    },
                                    data: s,
                                    dataType: "json",
                                    success: function(e) {
                                        if (u) {
                                            var t = c.formatCartResponse(e);
                                            t && u(n.getCartFromResponse(t))
                                        }
                                    }
                                };
                            l.default.ajax(t)
                        })
                    }
                }, {
                    key: "onChangeCurrentCart",
                    value: function(e, t) {
                        if (e.items.length == t.items.length && 0 == t.items.length) t.token = e.token;
                        else {
                            if (0 == e.items.length && 0 < t.items.length) return !0;
                            if (e.token != t.token && 0 < e.items.length) return !0
                        }
                        return !1
                    }
                }, {
                    key: "submitAddCartForm",
                    value: function(e) {
                        (0, p.default)("Ajax submit for add cart form");
                        var t = (0, l.default)(e),
                            r = h.default.current().element.getSubmitFormData(t),
                            n = {
                                product_id: r.product_id || f.default.getContext().payload.id,
                                variant_id: r.variant_id,
                                quantity: r.quantity,
                                attributes: {}
                            };
                        (0, l.default)(".variations select", t).each(function() {
                            n.attributes[(0, l.default)(this).attr("name")] = (0, l.default)(this).val()
                        });
                        var a = {
                            type: "POST",
                            url: c.getAjaxCartResourceUrl("resource=cart"),
                            headers: {
                                "X-Beeketing-Key": d.default.getParam("shop", "shop").api_key
                            },
                            data: n,
                            dataType: "json",
                            error: function() {
                                t.submit()
                            }
                        };
                        l.default.ajax(a)
                    }
                }, {
                    key: "onUpdateCartAtLoadPage",
                    value: function(e, t) {
                        return !(e.token != t.token && 0 < e.items.length && 0 == t.items.length)
                    }
                }, {
                    key: "correctCartItemsQuantity",
                    value: function() {
                        if ("cart" == f.default.getContext().type) {
                            var e = this.getCartHiddenItems();
                            e && e.forEach(function(e) {
                                var t = (0, l.default)('input[name="cart[' + e + '][qty]"]'),
                                    r = d.default.getParam("allowAddOneDiscountOfferManyTimes");
                                t.length && (r || t.val(1), t.prop("readonly", !0), t.on("change", function() {
                                    r || (0, l.default)(this).val(1)
                                }), t.parent(".buttons_added").find('[type="button"]').remove())
                            })
                        }
                    }
                }, {
                    key: "addDiscountCode",
                    value: function() {
                        var t = g.default.get(y.COOKIE_DISCOUNT_CODE);
                        void 0 !== t && (0, l.default)(document).ready(function() {
                            var e = document.querySelector(".showcoupon");
                            if (null != e && e.click(), (0, l.default)("#coupon_code").val(t), window.wc_cart_params && window.wc_cart_params.apply_coupon_nonce) l.default.post(window.wc_cart_params.wc_ajax_url.replace("%%endpoint%%", "apply_coupon"), {
                                coupon_code: t,
                                security: window.wc_cart_params.apply_coupon_nonce
                            }, function() {
                                g.default.remove(y.COOKIE_DISCOUNT_CODE), window.location.reload()
                            });
                            else if (window.wc_checkout_params && window.wc_checkout_params.apply_coupon_nonce) l.default.post(window.wc_checkout_params.wc_ajax_url.replace("%%endpoint%%", "apply_coupon"), {
                                coupon_code: t,
                                security: window.wc_checkout_params.apply_coupon_nonce
                            }, function() {
                                g.default.remove(y.COOKIE_DISCOUNT_CODE), window.location.reload()
                            });
                            else {
                                (0, l.default)('input[name="apply_coupon"], button[name="apply_coupon"], button[form="checkout-coupon"][type="submit"]').each(function() {
                                    return !(0, l.default)(this).length || (g.default.remove(y.COOKIE_DISCOUNT_CODE), (0, l.default)(this).click(), !1)
                                })
                            }
                        })
                    }
                }, {
                    key: "platformAutoApplyCoupon",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "addReplaceItem",
                    value: function(e) {
                        return this.replaceItems.variant_ids.push(e.ref_id), this.replaceItems.product_ids.push(e.product_ref_id), this.replaceItems.attributes.push(e.parsed_attributes || ""), this.replaceItems
                    }
                }, {
                    key: "isValidReplaceItems",
                    value: function(e) {
                        return e && "variant_ids" in e && e.variant_ids.length
                    }
                }, {
                    key: "triggerRemoveButton",
                    value: function() {
                        var e = h.default.current().element.getRemoveButton();
                        e && 0 < document.querySelectorAll(e).length && document.querySelectorAll(e)[0].click()
                    }
                }], [{
                    key: "formatCartResponse",
                    value: function(e) {
                        return void 0 !== e.cart ? e.cart : void 0 !== e.item_count && e
                    }
                }, {
                    key: "getAjaxCartResourceUrl",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                        return window.location.origin + window.location.pathname + "?" + e
                    }
                }]), c
            }(c.default);
            t.default = b
        },
        1350: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = f(r(315)),
                n = f(r(71)),
                a = f(r(26)),
                o = f(r(34)),
                i = f(r(72)),
                u = f(r(73)),
                c = f(r(3)),
                l = f(r(134)),
                p = f(r(50));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = function(e) {
                function t() {
                    return (0, a.default)(this, t), (0, i.default)(this, (t.__proto__ || (0, n.default)(t)).apply(this, arguments))
                }
                return (0, u.default)(t, e), (0, o.default)(t, [{
                    key: "getAddCartForms",
                    value: function() {
                        return "form.cart, .order-button"
                    }
                }, {
                    key: "getCheckoutButton",
                    value: function() {
                        return '.checkout-button, button[name="checkout"], input[name="checkout"], .bk-cart-checkout, a[href*="/checkout"], a[href*="/commande"], input[value="Proceed to Checkout"]'
                    }
                }, {
                    key: "getRemoveButton",
                    value: function() {
                        return ".woocommerce-remove-coupon"
                    }
                }, {
                    key: "getSubmitFormData",
                    value: function(e) {
                        var r = e.serializeArray(),
                            t = this.getAddCartButton(e),
                            n = {
                                variant_id: null,
                                product_id: null,
                                quantity: null
                            };
                        if (e.hasClass("mnm_form") || e.find("#product-addons-total").length || e.find(".tm-extra-product-options").length || void 0 !== window.wcap_atc_modal_param_variation && !p.default.get("wcap_popup_displayed")) return n;
                        if (t.length) {
                            r.push({
                                name: t.attr("name"),
                                value: t.attr("value")
                            });
                            var a = t.attr("href");
                            if (a && -1 !== a.indexOf("?")) {
                                var o = a.split("?"),
                                    i = o[o.length - 1],
                                    u = l.default.parse(i);
                                u && c.default.each(u, function(e, t) {
                                    switch (e) {
                                        case "add-to-cart":
                                        case "quantity":
                                            break;
                                        default:
                                            return
                                    }
                                    r.push({
                                        name: e,
                                        value: parseInt(t, 10)
                                    })
                                })
                            }
                        }
                        return c.default.each(r, function(e, t) {
                            switch (t.name) {
                                case "add-to-cart":
                                    n.product_id = parseInt(t.value, 10);
                                    break;
                                case "variation_id":
                                    n.variant_id = parseInt(t.value, 10);
                                    break;
                                case "quantity":
                                    n.quantity = parseInt(t.value, 10)
                            }
                        }), !(0, s.default)(n.variant_id) && n.variant_id || (n.variant_id = n.product_id), n.quantity || (n.quantity = 1), n
                    }
                }, {
                    key: "getProductLinkConfigs",
                    value: function() {
                        return {
                            selector: 'a[href*="/shop/"], a[href*="product"], a[href*="produkt"]',
                            extractHandle: function(e) {
                                return (0, c.default)('<a href="' + e + '">').prop("pathname").replace(/^\//, "").replace(/\/$/, "")
                            }
                        }
                    }
                }]), t
            }(f(r(356)).default);
            t.default = d
        },
        1351: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = c(r(71)),
                a = c(r(26)),
                o = c(r(34)),
                i = c(r(72)),
                u = c(r(73)),
                s = c(r(15));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                function t() {
                    return (0, a.default)(this, t), (0, i.default)(this, (t.__proto__ || (0, n.default)(t)).apply(this, arguments))
                }
                return (0, u.default)(t, e), (0, o.default)(t, [{
                    key: "forceGoToCheckoutPage",
                    value: function() {
                        s.default.redirect(window._beeketing.page_url.checkout)
                    }
                }, {
                    key: "forceGoToCartPage",
                    value: function() {
                        s.default.redirect(window._beeketing.page_url.cart)
                    }
                }, {
                    key: "forceGoToHomePage",
                    value: function() {
                        s.default.redirect(window._beeketing.page_url.home)
                    }
                }, {
                    key: "forceGoToCollectionPage",
                    value: function() {
                        s.default.redirect(window._beeketing.page_url.home)
                    }
                }]), t
            }(c(r(353)).default);
            t.default = l
        },
        187: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = m(r(71)),
                a = m(r(26)),
                o = m(r(34)),
                i = m(r(72)),
                u = m(r(73)),
                s = m(r(10)),
                c = m(r(20)),
                l = m(r(340)),
                p = m(r(1348)),
                f = m(r(1349)),
                d = m(r(1350)),
                h = m(r(1351)),
                v = r(308);

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = function(e) {
                function t() {
                    (0, a.default)(this, t);
                    var e = (0, i.default)(this, (t.__proto__ || (0, n.default)(t)).call(this));
                    return e.request = new p.default, e.cart = new f.default, e.element = new d.default, e.page_util = new h.default, e
                }
                return (0, u.default)(t, e), (0, o.default)(t, [{
                    key: "currentPageContext",
                    value: function() {
                        var e = void 0,
                            t = {};
                        if (!(0, s.default)(window._beeketing) && !(0, s.default)(window._beeketing.page)) switch (window._beeketing.page.type) {
                            case "home":
                                e = "home";
                                break;
                            case "cart":
                                e = "cart";
                                break;
                            case "checkout":
                                e = "checkout";
                                break;
                            case "post_checkout":
                                e = "post-checkout";
                                break;
                            case "collection":
                                e = "collection", t = {
                                    id: window._beeketing.page.id
                                };
                                break;
                            case "product":
                                e = "product", t = {
                                    id: window._beeketing.page.id
                                }
                        }
                        return {
                            type: e,
                            payload: t
                        }
                    }
                }, {
                    key: "userRefId",
                    value: function() {
                        return !(0, s.default)(window._beeketing) && !(0, s.default)(window._beeketing.customer) && window._beeketing.customer.id
                    }
                }, {
                    key: "needClearCartAfterCheckout",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "updateCartTokenCartPage",
                    value: function() {
                        if (!(0, s.default)(window._beeketing) && !(0, s.default)(window._beeketing.page) && "cart" == window._beeketing.page.type) {
                            var e = c.default.get(v.COOKIE_CART_TOKEN_KEY);
                            if (!e) {
                                c.default.set(v.COOKIE_CART_TOKEN_KEY, bk.CartManager.current().token, {
                                    expires: 30
                                });
                                var t = this;
                                setTimeout(function() {
                                    (e = c.default.get(v.COOKIE_CART_TOKEN_KEY)) && t.setCookie(v.COOKIE_CART_TOKEN_KEY, bk.CartManager.current().token, 30)
                                }, 1)
                            }
                        }
                    }
                }, {
                    key: "setCookie",
                    value: function(e, t, r) {
                        var n = new Date;
                        n.setTime(n.getTime() + 24 * r * 60 * 60 * 1e3);
                        var a = "expires=" + n.toUTCString();
                        document.cookie = e + "=" + t + ";" + a + ";path=/"
                    }
                }]), t
            }(l.default);
            t.default = g
        },
        647: function(pe, fe, e) {
            (function(e) {
                var p;
                fe = pe.exports = X, p = "object" == typeof e && Object({
                    NODE_ENV: "production"
                }) && Object({
                    NODE_ENV: "production"
                }).NODE_DEBUG && /\bsemver\b/i.test(Object({
                    NODE_ENV: "production"
                }).NODE_DEBUG) ? function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    e.unshift("SEMVER"), console.log.apply(console, e)
                } : function() {}, fe.SEMVER_SPEC_VERSION = "2.0.0";
                var n = 256,
                    a = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    o = fe.re = [],
                    t = fe.src = [],
                    r = 0,
                    i = r++;
                t[i] = "0|[1-9]\\d*";
                var u = r++;
                t[u] = "[0-9]+";
                var s = r++;
                t[s] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
                var c = r++;
                t[c] = "(" + t[i] + ")\\.(" + t[i] + ")\\.(" + t[i] + ")";
                var l = r++;
                t[l] = "(" + t[u] + ")\\.(" + t[u] + ")\\.(" + t[u] + ")";
                var f = r++;
                t[f] = "(?:" + t[i] + "|" + t[s] + ")";
                var d = r++;
                t[d] = "(?:" + t[u] + "|" + t[s] + ")";
                var h = r++;
                t[h] = "(?:-(" + t[f] + "(?:\\." + t[f] + ")*))";
                var v = r++;
                t[v] = "(?:-?(" + t[d] + "(?:\\." + t[d] + ")*))";
                var m = r++;
                t[m] = "[0-9A-Za-z-]+";
                var g = r++;
                t[g] = "(?:\\+(" + t[m] + "(?:\\." + t[m] + ")*))";
                var _ = r++,
                    w = "v?" + t[c] + t[h] + "?" + t[g] + "?";
                t[_] = "^" + w + "$";
                var y = "[v=\\s]*" + t[l] + t[v] + "?" + t[g] + "?",
                    k = r++;
                t[k] = "^" + y + "$";
                var b = r++;
                t[b] = "((?:<|>)?=?)";
                var C = r++;
                t[C] = t[u] + "|x|X|\\*";
                var j = r++;
                t[j] = t[i] + "|x|X|\\*";
                var O = r++;
                t[O] = "[v=\\s]*(" + t[j] + ")(?:\\.(" + t[j] + ")(?:\\.(" + t[j] + ")(?:" + t[h] + ")?" + t[g] + "?)?)?";
                var E = r++;
                t[E] = "[v=\\s]*(" + t[C] + ")(?:\\.(" + t[C] + ")(?:\\.(" + t[C] + ")(?:" + t[v] + ")?" + t[g] + "?)?)?";
                var T = r++;
                t[T] = "^" + t[b] + "\\s*" + t[O] + "$";
                var I = r++;
                t[I] = "^" + t[b] + "\\s*" + t[E] + "$";
                var x = r++;
                t[x] = "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
                var R = r++;
                t[R] = "(?:~>?)";
                var P = r++;
                t[P] = "(\\s*)" + t[R] + "\\s+", o[P] = new RegExp(t[P], "g");
                var S = r++;
                t[S] = "^" + t[R] + t[O] + "$";
                var A = r++;
                t[A] = "^" + t[R] + t[E] + "$";
                var N = r++;
                t[N] = "(?:\\^)";
                var q = r++;
                t[q] = "(\\s*)" + t[N] + "\\s+", o[q] = new RegExp(t[q], "g");
                var M = r++;
                t[M] = "^" + t[N] + t[O] + "$";
                var K = r++;
                t[K] = "^" + t[N] + t[E] + "$";
                var D = r++;
                t[D] = "^" + t[b] + "\\s*(" + y + ")$|^$";
                var $ = r++;
                t[$] = "^" + t[b] + "\\s*(" + w + ")$|^$";
                var J = r++;
                t[J] = "(\\s*)" + t[b] + "\\s*(" + y + "|" + t[O] + ")", o[J] = new RegExp(t[J], "g");
                var B = r++;
                t[B] = "^\\s*(" + t[O] + ")\\s+-\\s+(" + t[O] + ")\\s*$";
                var U = r++;
                t[U] = "^\\s*(" + t[E] + ")\\s+-\\s+(" + t[E] + ")\\s*$";
                var V = r++;
                t[V] = "(<|>)?=?\\s*\\*";
                for (var F = 0; F < 35; F++) p(F, t[F]), o[F] || (o[F] = new RegExp(t[F]));

                function G(e, t) {
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), e instanceof X) return e;
                    if ("string" != typeof e) return null;
                    if (e.length > n) return null;
                    if (!(t.loose ? o[k] : o[_]).test(e)) return null;
                    try {
                        return new X(e, t)
                    } catch (e) {
                        return null
                    }
                }

                function X(e, t) {
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), e instanceof X) {
                        if (e.loose === t.loose) return e;
                        e = e.version
                    } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
                    if (e.length > n) throw new TypeError("version is longer than " + n + " characters");
                    if (!(this instanceof X)) return new X(e, t);
                    p("SemVer", e, t), this.options = t, this.loose = !!t.loose;
                    var r = e.trim().match(t.loose ? o[k] : o[_]);
                    if (!r) throw new TypeError("Invalid Version: " + e);
                    if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > a || this.major < 0) throw new TypeError("Invalid major version");
                    if (this.minor > a || this.minor < 0) throw new TypeError("Invalid minor version");
                    if (this.patch > a || this.patch < 0) throw new TypeError("Invalid patch version");
                    r[4] ? this.prerelease = r[4].split(".").map(function(e) {
                        if (/^[0-9]+$/.test(e)) {
                            var t = +e;
                            if (0 <= t && t < a) return t
                        }
                        return e
                    }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
                }
                fe.parse = G, fe.valid = function(e, t) {
                    var r = G(e, t);
                    return r ? r.version : null
                }, fe.clean = function(e, t) {
                    var r = G(e.trim().replace(/^[=v]+/, ""), t);
                    return r ? r.version : null
                }, (fe.SemVer = X).prototype.format = function() {
                    return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
                }, X.prototype.toString = function() {
                    return this.version
                }, X.prototype.compare = function(e) {
                    return p("SemVer.compare", this.version, this.options, e), e instanceof X || (e = new X(e, this.options)), this.compareMain(e) || this.comparePre(e)
                }, X.prototype.compareMain = function(e) {
                    return e instanceof X || (e = new X(e, this.options)), W(this.major, e.major) || W(this.minor, e.minor) || W(this.patch, e.patch)
                }, X.prototype.comparePre = function(e) {
                    if (e instanceof X || (e = new X(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                    if (!this.prerelease.length && e.prerelease.length) return 1;
                    if (!this.prerelease.length && !e.prerelease.length) return 0;
                    var t = 0;
                    do {
                        var r = this.prerelease[t],
                            n = e.prerelease[t];
                        if (p("prerelease compare", t, r, n), void 0 === r && void 0 === n) return 0;
                        if (void 0 === n) return 1;
                        if (void 0 === r) return -1;
                        if (r !== n) return W(r, n)
                    } while (++t)
                }, X.prototype.inc = function(e, t) {
                    switch (e) {
                        case "premajor":
                            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                            break;
                        case "preminor":
                            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                            break;
                        case "major":
                            0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                            break;
                        case "minor":
                            0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, this.prerelease = [];
                            break;
                        case "pre":
                            if (0 === this.prerelease.length) this.prerelease = [0];
                            else {
                                for (var r = this.prerelease.length; 0 <= --r;) "number" == typeof this.prerelease[r] && (this.prerelease[r]++, r = -2); - 1 === r && this.prerelease.push(0)
                            }
                            t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                            break;
                        default:
                            throw new Error("invalid increment argument: " + e)
                    }
                    return this.format(), this.raw = this.version, this
                }, fe.inc = function(e, t, r, n) {
                    "string" == typeof r && (n = r, r = void 0);
                    try {
                        return new X(e, r).inc(t, n).version
                    } catch (e) {
                        return null
                    }
                }, fe.diff = function(e, t) {
                    {
                        if (H(e, t)) return null;
                        var r = G(e),
                            n = G(t);
                        if (r.prerelease.length || n.prerelease.length) {
                            for (var a in r)
                                if (("major" === a || "minor" === a || "patch" === a) && r[a] !== n[a]) return "pre" + a;
                            return "prerelease"
                        }
                        for (var a in r)
                            if (("major" === a || "minor" === a || "patch" === a) && r[a] !== n[a]) return a
                    }
                }, fe.compareIdentifiers = W;
                var L = /^[0-9]+$/;

                function W(e, t) {
                    var r = L.test(e),
                        n = L.test(t);
                    return r && n && (e = +e, t = +t), r && !n ? -1 : n && !r ? 1 : e < t ? -1 : t < e ? 1 : 0
                }

                function Y(e, t, r) {
                    return new X(e, r).compare(new X(t, r))
                }

                function Q(e, t, r) {
                    return 0 < Y(e, t, r)
                }

                function z(e, t, r) {
                    return Y(e, t, r) < 0
                }

                function H(e, t, r) {
                    return 0 === Y(e, t, r)
                }

                function Z(e, t, r) {
                    return 0 !== Y(e, t, r)
                }

                function ee(e, t, r) {
                    return 0 <= Y(e, t, r)
                }

                function te(e, t, r) {
                    return Y(e, t, r) <= 0
                }

                function re(e, t, r, n) {
                    var a;
                    switch (t) {
                        case "===":
                            "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), a = e === r;
                            break;
                        case "!==":
                            "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), a = e !== r;
                            break;
                        case "":
                        case "=":
                        case "==":
                            a = H(e, r, n);
                            break;
                        case "!=":
                            a = Z(e, r, n);
                            break;
                        case ">":
                            a = Q(e, r, n);
                            break;
                        case ">=":
                            a = ee(e, r, n);
                            break;
                        case "<":
                            a = z(e, r, n);
                            break;
                        case "<=":
                            a = te(e, r, n);
                            break;
                        default:
                            throw new TypeError("Invalid operator: " + t)
                    }
                    return a
                }

                function ne(e, t) {
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), e instanceof ne) {
                        if (e.loose === !!t.loose) return e;
                        e = e.value
                    }
                    if (!(this instanceof ne)) return new ne(e, t);
                    p("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === ae ? this.value = "" : this.value = this.operator + this.semver.version, p("comp", this)
                }
                fe.rcompareIdentifiers = function(e, t) {
                    return W(t, e)
                }, fe.major = function(e, t) {
                    return new X(e, t).major
                }, fe.minor = function(e, t) {
                    return new X(e, t).minor
                }, fe.patch = function(e, t) {
                    return new X(e, t).patch
                }, fe.compare = Y, fe.compareLoose = function(e, t) {
                    return Y(e, t, !0)
                }, fe.rcompare = function(e, t, r) {
                    return Y(t, e, r)
                }, fe.sort = function(e, r) {
                    return e.sort(function(e, t) {
                        return fe.compare(e, t, r)
                    })
                }, fe.rsort = function(e, r) {
                    return e.sort(function(e, t) {
                        return fe.rcompare(e, t, r)
                    })
                }, fe.gt = Q, fe.lt = z, fe.eq = H, fe.neq = Z, fe.gte = ee, fe.lte = te, fe.cmp = re, fe.Comparator = ne;
                var ae = {};

                function oe(e, t) {
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), e instanceof oe) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new oe(e.raw, t);
                    if (e instanceof ne) return new oe(e.value, t);
                    if (!(this instanceof oe)) return new oe(e, t);
                    if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(e) {
                            return this.parseRange(e.trim())
                        }, this).filter(function(e) {
                            return e.length
                        }), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
                    this.format()
                }

                function ie(e) {
                    return !e || "x" === e.toLowerCase() || "*" === e
                }

                function ue(e, t, r, n, a, o, i, u, s, c, l, p, f) {
                    return ((t = ie(r) ? "" : ie(n) ? ">=" + r + ".0.0" : ie(a) ? ">=" + r + "." + n + ".0" : ">=" + t) + " " + (u = ie(s) ? "" : ie(c) ? "<" + (+s + 1) + ".0.0" : ie(l) ? "<" + s + "." + (+c + 1) + ".0" : p ? "<=" + s + "." + c + "." + l + "-" + p : "<=" + u)).trim()
                }

                function se(e, t, r) {
                    for (var n = 0; n < e.length; n++)
                        if (!e[n].test(t)) return !1;
                    if (r || (r = {}), !t.prerelease.length || r.includePrerelease) return !0;
                    for (n = 0; n < e.length; n++)
                        if (p(e[n].semver), e[n].semver !== ae && 0 < e[n].semver.prerelease.length) {
                            var a = e[n].semver;
                            if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0
                        }
                    return !1
                }

                function ce(e, t, r) {
                    try {
                        t = new oe(t, r)
                    } catch (e) {
                        return !1
                    }
                    return t.test(e)
                }

                function le(e, t, r, n) {
                    var a, o, i, u, s;
                    switch (e = new X(e, n), t = new oe(t, n), r) {
                        case ">":
                            a = Q, o = te, i = z, u = ">", s = ">=";
                            break;
                        case "<":
                            a = z, o = ee, i = Q, u = "<", s = "<=";
                            break;
                        default:
                            throw new TypeError('Must provide a hilo val of "<" or ">"')
                    }
                    if (ce(e, t, n)) return !1;
                    for (var c = 0; c < t.set.length; ++c) {
                        var l = t.set[c],
                            p = null,
                            f = null;
                        if (l.forEach(function(e) {
                                e.semver === ae && (e = new ne(">=0.0.0")), p = p || e, f = f || e, a(e.semver, p.semver, n) ? p = e : i(e.semver, f.semver, n) && (f = e)
                            }), p.operator === u || p.operator === s) return !1;
                        if ((!f.operator || f.operator === u) && o(e, f.semver)) return !1;
                        if (f.operator === s && i(e, f.semver)) return !1
                    }
                    return !0
                }
                ne.prototype.parse = function(e) {
                    var t = this.options.loose ? o[D] : o[$],
                        r = e.match(t);
                    if (!r) throw new TypeError("Invalid comparator: " + e);
                    this.operator = r[1], "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new X(r[2], this.options.loose) : this.semver = ae
                }, ne.prototype.toString = function() {
                    return this.value
                }, ne.prototype.test = function(e) {
                    return p("Comparator.test", e, this.options.loose), this.semver === ae || ("string" == typeof e && (e = new X(e, this.options)), re(e, this.operator, this.semver, this.options))
                }, ne.prototype.intersects = function(e, t) {
                    if (!(e instanceof ne)) throw new TypeError("a Comparator is required");
                    var r;
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), "" === this.operator) return r = new oe(e.value, t), ce(this.value, r, t);
                    if ("" === e.operator) return r = new oe(this.value, t), ce(e.semver, r, t);
                    var n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator),
                        a = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator),
                        o = this.semver.version === e.semver.version,
                        i = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator),
                        u = re(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
                        s = re(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
                    return n || a || o && i || u || s
                }, (fe.Range = oe).prototype.format = function() {
                    return this.range = this.set.map(function(e) {
                        return e.join(" ").trim()
                    }).join("||").trim(), this.range
                }, oe.prototype.toString = function() {
                    return this.range
                }, oe.prototype.parseRange = function(e) {
                    var t = this.options.loose;
                    e = e.trim();
                    var r = t ? o[U] : o[B];
                    e = e.replace(r, ue), p("hyphen replace", e), e = e.replace(o[J], "$1$2$3"), p("comparator trim", e, o[J]), e = (e = (e = e.replace(o[P], "$1~")).replace(o[q], "$1^")).split(/\s+/).join(" ");
                    var n = t ? o[D] : o[$],
                        a = e.split(" ").map(function(e) {
                            return function(e, t) {
                                return p("comp", e, t), e = function(e, t) {
                                    return e.trim().split(/\s+/).map(function(e) {
                                        return function(i, e) {
                                            p("caret", i, e), e && "object" == typeof e || (e = {
                                                loose: !!e,
                                                includePrerelease: !1
                                            });
                                            var t = e.loose ? o[K] : o[M];
                                            return i.replace(t, function(e, t, r, n, a) {
                                                var o;
                                                return p("caret", i, e, t, r, n, a), o = ie(t) ? "" : ie(r) ? ">=" + t + ".0.0 <" + (+t + 1) + ".0.0" : ie(n) ? "0" === t ? ">=" + t + "." + r + ".0 <" + t + "." + (+r + 1) + ".0" : ">=" + t + "." + r + ".0 <" + (+t + 1) + ".0.0" : a ? (p("replaceCaret pr", a), "-" !== a.charAt(0) && (a = "-" + a), "0" === t ? "0" === r ? ">=" + t + "." + r + "." + n + a + " <" + t + "." + r + "." + (+n + 1) : ">=" + t + "." + r + "." + n + a + " <" + t + "." + (+r + 1) + ".0" : ">=" + t + "." + r + "." + n + a + " <" + (+t + 1) + ".0.0") : (p("no pr"), "0" === t ? "0" === r ? ">=" + t + "." + r + "." + n + " <" + t + "." + r + "." + (+n + 1) : ">=" + t + "." + r + "." + n + " <" + t + "." + (+r + 1) + ".0" : ">=" + t + "." + r + "." + n + " <" + (+t + 1) + ".0.0"), p("caret return", o), o
                                            })
                                        }(e, t)
                                    }).join(" ")
                                }(e, t), p("caret", e), e = function(e, t) {
                                    return e.trim().split(/\s+/).map(function(e) {
                                        return function(i, e) {
                                            e && "object" == typeof e || (e = {
                                                loose: !!e,
                                                includePrerelease: !1
                                            });
                                            var t = e.loose ? o[A] : o[S];
                                            return i.replace(t, function(e, t, r, n, a) {
                                                var o;
                                                return p("tilde", i, e, t, r, n, a), o = ie(t) ? "" : ie(r) ? ">=" + t + ".0.0 <" + (+t + 1) + ".0.0" : ie(n) ? ">=" + t + "." + r + ".0 <" + t + "." + (+r + 1) + ".0" : a ? (p("replaceTilde pr", a), "-" !== a.charAt(0) && (a = "-" + a), ">=" + t + "." + r + "." + n + a + " <" + t + "." + (+r + 1) + ".0") : ">=" + t + "." + r + "." + n + " <" + t + "." + (+r + 1) + ".0", p("tilde return", o), o
                                            })
                                        }(e, t)
                                    }).join(" ")
                                }(e, t), p("tildes", e), e = function(e, t) {
                                    return p("replaceXRanges", e, t), e.split(/\s+/).map(function(e) {
                                        return function(l, e) {
                                            l = l.trim(), e && "object" == typeof e || (e = {
                                                loose: !!e,
                                                includePrerelease: !1
                                            });
                                            var t = e.loose ? o[I] : o[T];
                                            return l.replace(t, function(e, t, r, n, a, o) {
                                                p("xRange", l, e, t, r, n, a, o);
                                                var i = ie(r),
                                                    u = i || ie(n),
                                                    s = u || ie(a),
                                                    c = s;
                                                return "=" === t && c && (t = ""), i ? e = ">" === t || "<" === t ? "<0.0.0" : "*" : t && c ? (u && (n = 0), s && (a = 0), ">" === t ? (t = ">=", u ? (r = +r + 1, a = n = 0) : s && (n = +n + 1, a = 0)) : "<=" === t && (t = "<", u ? r = +r + 1 : n = +n + 1), e = t + r + "." + n + "." + a) : u ? e = ">=" + r + ".0.0 <" + (+r + 1) + ".0.0" : s && (e = ">=" + r + "." + n + ".0 <" + r + "." + (+n + 1) + ".0"), p("xRange return", e), e
                                            })
                                        }(e, t)
                                    }).join(" ")
                                }(e, t), p("xrange", e), e = function(e, t) {
                                    return p("replaceStars", e, t), e.trim().replace(o[V], "")
                                }(e, t), p("stars", e), e
                            }(e, this.options)
                        }, this).join(" ").split(/\s+/);
                    return this.options.loose && (a = a.filter(function(e) {
                        return !!e.match(n)
                    })), a = a.map(function(e) {
                        return new ne(e, this.options)
                    }, this)
                }, oe.prototype.intersects = function(r, n) {
                    if (!(r instanceof oe)) throw new TypeError("a Range is required");
                    return this.set.some(function(e) {
                        return e.every(function(t) {
                            return r.set.some(function(e) {
                                return e.every(function(e) {
                                    return t.intersects(e, n)
                                })
                            })
                        })
                    })
                }, fe.toComparators = function(e, t) {
                    return new oe(e, t).set.map(function(e) {
                        return e.map(function(e) {
                            return e.value
                        }).join(" ").trim().split(" ")
                    })
                }, oe.prototype.test = function(e) {
                    if (!e) return !1;
                    "string" == typeof e && (e = new X(e, this.options));
                    for (var t = 0; t < this.set.length; t++)
                        if (se(this.set[t], e, this.options)) return !0;
                    return !1
                }, fe.satisfies = ce, fe.maxSatisfying = function(e, t, r) {
                    var n = null,
                        a = null;
                    try {
                        var o = new oe(t, r)
                    } catch (e) {
                        return null
                    }
                    return e.forEach(function(e) {
                        o.test(e) && (n && -1 !== a.compare(e) || (a = new X(n = e, r)))
                    }), n
                }, fe.minSatisfying = function(e, t, r) {
                    var n = null,
                        a = null;
                    try {
                        var o = new oe(t, r)
                    } catch (e) {
                        return null
                    }
                    return e.forEach(function(e) {
                        o.test(e) && (n && 1 !== a.compare(e) || (a = new X(n = e, r)))
                    }), n
                }, fe.validRange = function(e, t) {
                    try {
                        return new oe(e, t).range || "*"
                    } catch (e) {
                        return null
                    }
                }, fe.ltr = function(e, t, r) {
                    return le(e, t, "<", r)
                }, fe.gtr = function(e, t, r) {
                    return le(e, t, ">", r)
                }, fe.outside = le, fe.prerelease = function(e, t) {
                    var r = G(e, t);
                    return r && r.prerelease.length ? r.prerelease : null
                }, fe.intersects = function(e, t, r) {
                    return e = new oe(e, r), t = new oe(t, r), e.intersects(t)
                }, fe.coerce = function(e) {
                    if (e instanceof X) return e;
                    if ("string" != typeof e) return null;
                    var t = e.match(o[x]);
                    return null == t ? null : G((t[1] || "0") + "." + (t[2] || "0") + "." + (t[3] || "0"))
                }
            }).call(this, e(85))
        },
        648: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.WooCommerceUpdateMiniCart = "woocommerce_update_mini_cart"
        }
    }
]);