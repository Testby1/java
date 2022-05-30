(window.beeketingWPJP = window.beeketingWPJP || []).push([
    [148], {
        1076: function(t, e, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(o(45)),
                a = i(o(1077)),
                r = i(o(1078));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var s = n.default.extend({
                data: function() {
                    return {
                        showPopup: !1,
                        products: [],
                        ownerFirstName: null
                    }
                },
                events: {
                    "show-popup": function(t, e) {
                        this.$refs.salesNurturingPopup.$set("products", t), this.$refs.salesNurturingPopup.$set("ownerFirstName", e), this.$root.$emit("bkt::show-dialog", this.$refs.salesNurturingPopup.salesNurturingDialogId)
                    },
                    "hide-popup": function() {
                        this.$root.$emit("bkt::hide-dialog", this.$refs.salesNurturingPopup.salesNurturingDialogId)
                    }
                },
                components: {
                    "sales-nurturing-popup": r.default
                },
                template: a.default
            });
            e.default = s
        },
        1077: function(t, e) {
            t.exports = "<sales-nurturing-popup v-ref:sales-nurturing-popup></sales-nurturing-popup>\n"
        },
        1078: function(t, e, o) {
            var n, a, r = {};
            n = o(1079), Object.keys(n).some(function(t) {
                return "default" !== t && "__esModule" !== t
            }) && console.warn("[vue-loader] modules/mailbot/mailbot_v2/sales_nurturing/components/popup.vue: named exports in *.vue files are ignored."), a = o(1080), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default);
            var i = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
            a && (i.template = a), i.computed || (i.computed = {}), Object.keys(r).forEach(function(t) {
                var e = r[t];
                i.computed[t] = function() {
                    return e
                }
            })
        },
        1079: function(t, e, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = d(o(3)),
                i = (d(o(45)), d(o(25))),
                n = (o(27), d(o(345))),
                a = d(o(370)),
                s = d(o(320)),
                u = d(o(331)),
                l = o(625);

            function d(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.default = {
                props: {
                    products: Array,
                    ownerFirstName: String
                },
                computed: {
                    salesNurturingTitle: function() {
                        return "Welcome back " + this.ownerFirstName
                    },
                    salesNurturingDialogId: function() {
                        return "sales-nurturing-dialog"
                    }
                },
                methods: {
                    removeProduct: function(t) {
                        this.products.splice(this.products.indexOf(t), 1)
                    },
                    saveToCart: function(t) {
                        u.default.create(t.currentTarget).start(), this.addToCart(function() {
                            i.default.current().page_util.forceGoToCartPage()
                        })
                    },
                    checkout: function(t) {
                        u.default.create(t.currentTarget).start(), this.addToCart(function() {
                            i.default.current().page_util.forceGoToCheckoutPage()
                        })
                    },
                    addToCart: function(t) {
                        var o = [],
                            n = [],
                            a = [];
                        r.default.each(this.products, function(t, e) {
                            void 0 !== e && void 0 !== e.ref_id && (o.push(e.ref_id), i.default.currentKey().toLowerCase() !== l.SHOPIFY && (void 0 === e.variants[0].ref_id ? (n.push(e.ref_id), a.push({})) : (n.push(e.variants[0].ref_id), e.variants[0].parsed_attributes ? a.push(JSON.parse(e.variants[0].parsed_attributes)) : a.push(void 0))))
                        }), i.default.current().cart.addMulti({
                            variant_ids: n,
                            product_ids: o,
                            attributes: a
                        }, function() {
                            t()
                        })
                    }
                },
                components: {
                    dialog: n.default,
                    buttonComponent: s.default,
                    productHorizontal: a.default
                }
            }
        },
        1080: function(t, e) {
            t.exports = '\n<dialog :title="salesNurturingTitle" :id="salesNurturingDialogId" class-dialog="bkt__dialog-sales-nurturing" v-on:dialog-closed="this.$root.$emit(\'hide-popup\')" :show-animation-time="1000">\n  <template slot="dialog-body">\n    <div class="bkt__sales-nurturing--header">\n      <div class="bkt--container-fluid">\n        <div class="bkt__sales-nurturing--header-title bkt--col-xs-12 bkt--col-sm-12">\n          <p>These items are waiting to be yours.</p>\n        </div>\n        <div class="bkt__sales-nurturing--header-action bkt--col-xs-12 bkt--col-sm-12" v-if="products.length >= 4">\n          <button-component button-color="primary" class="bkt--btn-block bkt__sales-nurturing--header-action--btn-checkout" type="button" v-on:click.prevent="checkout($event)">\n            Check out now\n          </button-component>\n        </div>\n      </div>\n    </div>\n    <div class="bkt__sales-nurturing--body">\n      <form class="bkt__sales-nurturing--body-form" data-source-type="sales_nurturing">\n        <div class="bkt__sales-nurturing--body-form-content bkt--container-fluid">\n          <div class="bkt__sales-nurturing--body-form-products" v-for="product in products">\n            <product-horizontal target="_blank" content-left-class="bkt--col-xs-4 bkt--col-sm-4" content-right-class="bkt--col-xs-8 bkt--col-sm-8" :product="product" :show-add-cart-button="false">\n              <template slot="product-footer">\n                <a v-on:click.prevent="removeProduct(product)" class="bkt__sales-nurturing--body-form-products-remove"></a>\n              </template>\n            </product-horizontal>\n            <div class="bkt__sales-nurturing--body-form-products-line" v-if="$index !== (products.length - 1)"></div>\n          </div>\n        </div>\n        <div class="bkt__sales-nurturing--body-form-action bkt--container-fluid">\n          <div class="bkt__sales-nurturing--body-form--save bkt--col-xs-6 bkt--col-sm-6">\n            <button-component button-color="outline" class="bkt--btn-block bkt__sales-nurturing--body-form--btn-save" type="button" v-on:click.prevent="saveToCart($event)">\n              Save to cart\n            </button-component>\n          </div>\n          <div class="bkt__sales-nurturing--body-form--checkout bkt--col-xs-6 bkt--col-sm-6">\n            <button-component button-color="primary" class="bkt--btn-block bkt__sales-nurturing--body-form--btn-checkout" type="button" v-on:click.prevent="checkout($event)">\n              Check out now\n            </button-component>\n          </div>\n        </div>\n      </form>\n    </div>\n  </template>\n</dialog>\n'
        },
        171: function(t, e, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = h(o(35)),
                a = h(o(9)),
                u = h(o(3)),
                r = h(o(74)),
                l = h(o(118)),
                i = h(o(4)),
                d = h(o(6)),
                s = h(o(49)),
                c = o(27),
                p = h(o(325)),
                f = h(o(128)),
                _ = h(o(46)),
                m = h(o(302)),
                v = h(o(15)),
                g = o(625),
                b = h(o(1076));

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var k = {
                init: function() {
                    var e = this;
                    if (!d.default.getAppParam(g.appCode, "isExpired") && d.default.getAppParam(g.appCode, "isPurchased")) {
                        (0, i.default)("MailbotV2 app started");
                        var t = l.default.getAppBlock(g.appCode),
                            o = f.default.injectEmailUrlParams;
                        m.default.get(t, new b.default), _.default.listen(c.CART_READY, function() {
                            if (o) {
                                var t = ["beeketing_mailbot"];
                                void 0 !== o.campaign_type && t.push("scn_campaign_type-" + o.campaign_type), void 0 !== o.email_layout_type && t.push("scn_email_layout_type-" + o.email_layout_type), void 0 !== o.email_id && t.push("scn_email_id-" + o.email_id), void 0 !== o.campaign_id && t.push("scn_campaign_id-" + o.campaign_id), v.default.isSupportLocalStorage() && localStorage.setItem("bkRawCartSource", (0, a.default)(t))
                            }
                            o && o.email_id && ((0, i.default)("Found tracking params & call ini SN popup"), e.snWelcomePopupInit(o.email_id), s.default.track(g.EMAIL_CONVERTED, o))
                        }), r.default.loadCSS(r.default.getAssetUrl("mailbot/mailbot_v2/assets/styles/styles.css"))
                    } else(0, i.default)("MailbotV2 is stopped, expired or not purchased")
                },
                snWelcomePopupInit: function(t) {
                    u.default.getJSON(r.default.getBackendUrl(d.default.getAppParam(g.appCode, "get_sales_nurturing_products_url")), {
                        email_id: t
                    }, function(r) {
                        if (r.success && 0 < (0, n.default)(r.products).length) {
                            var i = [],
                                s = (0, n.default)(r.products)[(0, n.default)(r.products).length - 1];
                            u.default.each(r.products, function(t, e) {
                                var o = e;
                                if (void 0 !== e.variants[0] && (o.single_variant = e.variants[0], void 0 !== o.single_variant.compare_at_price && (o.single_variant.compare_at_price_format = p.default.format(o.single_variant.compare_at_price, d.default.getParam("shop", "shop").moneyFormat)), void 0 !== o.single_variant.price && o.single_variant.price && (o.single_variant.price_format = p.default.format(o.single_variant.price, d.default.getParam("shop", "shop").moneyFormat), void 0 !== o.single_variant.compare_at_price && o.single_variant.compare_at_price === o.single_variant.price && (o.single_variant.compare_at_price = 0)), o.is_last = t === s, i.push(o)), i.length && t === s) {
                                    var n = m.default.get(l.default.getAppBlock(g.appCode)),
                                        a = void 0 !== r.email && r.email ? r.email.owner_first_name : null;
                                    n.$dispatch("show-popup", i, a)
                                }
                            })
                        }
                    })
                }
            };
            e.default = k
        },
        625: function(t, e, o) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.appCode = "beeketing", e.EMAIL_CONVERTED = "email_converted", e.SHOPIFY = "shopify"
        }
    }
]);