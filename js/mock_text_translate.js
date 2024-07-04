(self["webpackChunktranslation_website"] = self["webpackChunktranslation_website"] || []).push([[348], {
    83548: function(t, e, o) {
        o(27495),
        window.Clipboard = function(t, e, o) {
            var a, i;
            function s() {
                return o.userAgent.match(/ipad|iphone/i)
            }
            function n(t) {
                a = e.createElement("textArea"),
                a.value = t,
                e.body.appendChild(a)
            }
            function r() {
                var o, i;
                s() ? (o = e.createRange(),
                o.selectNodeContents(a),
                i = t.getSelection(),
                i.removeAllRanges(),
                i.addRange(o),
                a.setSelectionRange(0, 999999)) : a.select()
            }
            function l(t) {
                try {
                    e.execCommand("Copy") ? t ? t(!0) : alert("复制成功") : t ? t(!1) : alert("复制失败，请手动复制。")
                } catch (o) {
                    t ? t(!1) : alert("复制失败，请手动复制。")
                }
                e.body.removeChild(a)
            }
            return i = function(t, e) {
                n(t),
                r(),
                l(e)
            }
            ,
            {
                copy: i
            }
        }(window, document, navigator)
    },
    44793: function(t, e, o) {
        "use strict";
        o.d(e, {
            A: function() {
                return c
            }
        });
        var a = o(6301);
        const i = {
            key: 0,
            class: "interfaceDialogMask"
        }
          , s = {
            class: "interfaceDialog-body"
        };
        function n(t, e, o, n, r, l) {
            return o.dialogVisible ? ((0,
            a.uX)(),
            (0,
            a.CE)("div", i, [(0,
            a.Lk)("div", {
                class: (0,
                a.C4)(["interfaceDialog", {
                    "interfaceDialog-default-style": o.withDialogStyle
                }, {
                    isCenter: o.isCenter
                }]),
                style: (0,
                a.Tr)({
                    width: l.pxStyle(o.width),
                    height: l.pxStyle(o.height),
                    top: l.pxStyle(o.top),
                    left: void 0 == o.right && l.pxStyle(o.left),
                    right: void 0 != o.right && l.pxStyle(o.right)
                }),
                ref: "interfaceDialog"
            }, [(0,
            a.Lk)("div", s, [(0,
            a.RG)(t.$slots, "default", {}, void 0, !0)])], 6)])) : (0,
            a.Q3)("", !0)
        }
        var r = {
            name: "InterfaceDialog",
            components: {},
            props: {
                dialogVisible: {
                    type: Boolean,
                    required: !0,
                    default: !1
                },
                width: {
                    type: [Number, String],
                    required: !0,
                    default: "auto"
                },
                height: {
                    type: [Number, String],
                    required: !0,
                    default: "auto"
                },
                top: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                left: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                right: {
                    type: [Number, String]
                },
                withDialogStyle: {
                    type: Boolean,
                    default: !0
                },
                isCenter: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    promiseStatus: {}
                }
            },
            methods: {
                pxStyle(t) {
                    return this.isString(t) ? t : `${t}px`
                },
                isString(t) {
                    return "string" === typeof t
                },
                isNumber(t) {
                    return "number" === typeof t
                },
                closeinterfaceDialog() {
                    this.$emit("closeDialog")
                },
                modalClickEventHandler(t) {
                    this.$refs.interfaceDialog && !this.$refs.interfaceDialog.contains(t.target) && this.closeinterfaceDialog()
                }
            },
            watch: {
                dialogVisible: {
                    handler(t) {
                        t ? this.$nextTick((()=>{
                            setTimeout((()=>{
                                document.body.addEventListener("click", this.modalClickEventHandler, !0)
                            }
                            ), 10)
                        }
                        )) : document.body.removeEventListener("click", this.modalClickEventHandler, !0)
                    }
                }
            }
        }
          , l = o(66262);
        const u = (0,
        l.A)(r, [["render", n], ["__scopeId", "data-v-45e3c4ea"]]);
        var c = u
    },
    82360: function(t, e, o) {
        "use strict";
        o.r(e),
        o.d(e, {
            default: function() {
                return mn
            }
        });
        var a = {};
        o.r(a),
        o.d(a, {
            ENandZH: function() {
                return Pi
            },
            _addDomsClassByClassname: function() {
                return li
            },
            _onTransLangChanged: function() {
                return Ma
            },
            _removeDomsClassByClassname: function() {
                return ri
            },
            audioLog: function() {
                return fi
            },
            clear: function() {
                return wi
            },
            clearButtonClickHandler: function() {
                return vi
            },
            clearTrans: function() {
                return Ti
            },
            containerHeightObserverCallback: function() {
                return Ri
            },
            copy: function() {
                return hi
            },
            genDictvoiceValidLength: function() {
                return pi
            },
            genSourceHightLightHtml: function() {
                return ei
            },
            getStartOffset: function() {
                return ci
            },
            getStringNum: function() {
                return Ei
            },
            goAiTabFromSource: function() {
                return Xi
            },
            goAiTabFromTrans: function() {
                return Ui
            },
            highlightHandler: function() {
                return ii
            },
            inputChange: function() {
                return Ka
            },
            insertHighLightHtmlToSource: function() {
                return ui
            },
            keepLastIndex: function() {
                return Si
            },
            onChangeTrans: function() {
                return Qa
            },
            onCompositionEnd: function() {
                return Oa
            },
            onCompositionStart: function() {
                return Pa
            },
            onContenteditableAreaCopyHandler: function() {
                return ji
            },
            onTargetInputChange: function() {
                return ti
            },
            pasteHandler: function() {
                return ai
            },
            removeAllHightlight: function() {
                return ni
            },
            removeHightlightHandler: function() {
                return si
            },
            resetModifiedContent: function() {
                return Ya
            },
            resetTextTranslateFromLS: function() {
                return Ii
            },
            resetTextTranslateFromUrl: function() {
                return Ni
            },
            resetWithoutSuccessResult: function() {
                return Ci
            },
            saveTextTranslateToLSHandler: function() {
                return Di
            },
            scrollAreaListener: function() {
                return Bi
            },
            search: function() {
                return Va
            },
            searchButtonClickHandler: function() {
                return Wa
            },
            setStartOffset: function() {
                return di
            },
            showGrammarWnd: function() {
                return xi
            },
            showStepTransFun: function() {
                return Ai
            },
            updateActionVisiblity: function() {
                return Hi
            },
            updateAudio: function() {
                return gi
            },
            updateDictResult: function() {
                return Ja
            },
            updateZoom: function() {
                return Fi
            }
        });
        var i = o(6301)
          , s = o.p + "img/AI_loading.861414ea.png";
        const n = t=>((0,
        i.Qi)("data-v-7f396474"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , r = {
            class: "ai-trans-guide"
        }
          , l = {
            class: "header"
        }
          , u = n((()=>(0,
        i.Lk)("div", {
            class: "guide-title"
        }, "AI翻译", -1)))
          , c = n((()=>(0,
        i.Lk)("div", {
            class: "guide-desc"
        }, "为你提供母语级高精翻译结果，并支持继续润色～", -1)))
          , d = {
            class: "guide-content"
        }
          , h = n((()=>(0,
        i.Lk)("div", {
            class: "operation"
        }, [(0,
        i.Lk)("div", {
            class: "guide-button"
        }, "免费体验")], -1)))
          , m = {
            key: 1,
            class: "guide-loading",
            src: s,
            alt: ""
        };
        function g(t, e, o, a, s, n) {
            return a.showAiGuide ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                key: 0,
                class: "box_ai",
                onClick: a.clickGuideHandler
            }, [(0,
            i.Lk)("div", r, [(0,
            i.Lk)("div", l, [u, c, a.aiTransGuideBoxText ? ((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: 0
            }, [(0,
            i.Lk)("div", d, (0,
            i.v_)(a.aiTransGuideBoxText), 1), h], 64)) : ((0,
            i.uX)(),
            (0,
            i.CE)("img", m))])])])) : (0,
            i.Q3)("", !0)
        }
        var p = o(58788)
          , f = (o(44114),
        o(33110),
        o(75220))
          , A = o(66278)
          , y = o(18908)
          , k = o(45358);
        const v = "fanyiweb_showGuideTotal";
        var w = {
            __name: "AiTranslateGuide",
            props: {
                isENandZH: Boolean,
                isInsertFromPaste: Boolean,
                displayBottomArea: Boolean
            },
            setup(t, {expose: e}) {
                e();
                const o = (0,
                A.Pj)()
                  , a = (0,
                f.rd)();
                let s = null;
                const n = t
                  , r = (0,
                i.KR)(!1)
                  , l = (0,
                i.KR)(!1)
                  , u = (0,
                i.KR)("")
                  , c = (0,
                i.EW)((()=>o.state.text.firstTwoOriginText))
                  , d = (0,
                i.EW)((()=>o.state.text.homeOriginText))
                  , h = (0,
                i.EW)((()=>n.isENandZH && n.isInsertFromPaste && !n.displayBottomArea && l.value && r.value))
                  , m = async t=>{
                    const e = {
                        i: encodeURIComponent(t),
                        token: localStorage.getItem("ydtoken"),
                        reqType: 1
                    };
                    s = new AbortController;
                    const {signal: o} = s;
                    await y.A.fetchSSEMethod(e, o, (t=>{
                        var e;
                        u.value += (null === (e = t.data) || void 0 === e ? void 0 : e.translation) || ""
                    }
                    ))
                }
                  , g = k.A.debounce((()=>{
                    if (u.value = "",
                    !h.value)
                        return;
                    const t = T();
                    t > 0 ? (m(c.value),
                    window._rlog.push(["_trackCustom", "event", [["show", "fanyiweb_AI_translate_guide"]]]),
                    _(t - 1)) : l.value = !1
                }
                ), 1e3);
                (0,
                i.wB)(c, g),
                (0,
                i.wB)(h, g);
                const w = ()=>{
                    window._rlog.push(["_trackCustom", "event", [["action", "fanyiweb_AI_translate_guide"]]]),
                    o.commit("UPDATA_GUIDEFROMOTHER", {
                        question: d.value,
                        functionEnglishName: "ai_translate",
                        free: !0
                    }),
                    a.push({
                        name: "AITranslate"
                    })
                }
                  , T = ()=>{
                    const t = JSON.parse(localStorage.getItem(v) || "{}");
                    let e = t.remain || 0;
                    const o = k.A.dateFormat("yyyyMMdd", new Date);
                    return "daily" === t.type && t.date != o && (localStorage.setItem(v, JSON.stringify((0,
                    p.A)((0,
                    p.A)({}, t), {}, {
                        date: o,
                        remain: (null === t || void 0 === t ? void 0 : t.times) || 0
                    }))),
                    e = (null === t || void 0 === t ? void 0 : t.times) || 0),
                    e
                }
                  , C = t=>{
                    const e = JSON.parse(localStorage.getItem(v) || "{}");
                    if (t.id === e.id)
                        return;
                    const o = k.A.dateFormat("yyyyMMdd", new Date);
                    localStorage.setItem(v, JSON.stringify((0,
                    p.A)((0,
                    p.A)({}, t || {}), {}, {
                        date: o,
                        remain: (null === t || void 0 === t ? void 0 : t.times) || 0
                    })))
                }
                  , _ = t=>{
                    const e = JSON.parse(localStorage.getItem(v) || "{}");
                    localStorage.setItem(v, JSON.stringify((0,
                    p.A)((0,
                    p.A)({}, e), {}, {
                        remain: t
                    })))
                }
                  , x = ()=>{
                    y.A.getLargeModelGuideInfo().then((t=>{
                        r.value = t.data.show,
                        C(t.data),
                        l.value = T() > 0
                    }
                    ))
                }
                ;
                (0,
                i.sV)((()=>{
                    x()
                }
                ));
                const b = {
                    store: o,
                    router: a,
                    get largeController() {
                        return s
                    },
                    set largeController(t) {
                        s = t
                    },
                    props: n,
                    isShowFromPort: r,
                    isShowFromLocalTotal: l,
                    aiTransGuideBoxText: u,
                    firstTwoOriginText: c,
                    homeOriginText: d,
                    showAiGuide: h,
                    getAITrans: m,
                    updateAiGuideShowStatus: g,
                    guideSavedKey: v,
                    clickGuideHandler: w,
                    getShowGuideTotal: T,
                    initShowGuideTotal: C,
                    setShowGuideTotal: _,
                    getLargeModelGuideInfo: x,
                    get useRouter() {
                        return f.rd
                    },
                    get useStore() {
                        return A.Pj
                    },
                    get service() {
                        return y.A
                    },
                    onMounted: i.sV,
                    watch: i.wB,
                    get util() {
                        return k.A
                    }
                };
                return Object.defineProperty(b, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                b
            }
        }
          , T = o(66262);
        const C = (0,
        T.A)(w, [["render", g], ["__scopeId", "data-v-7f396474"]]);
        var _ = C
          , x = o(91667);
        const b = {
            class: "ce-consision-result"
        }
          , S = {
            class: "paraphrase-container"
        }
          , L = {
            class: "item-top"
        }
          , E = {
            class: "text color_pc_blue_text"
        }
          , F = {
            class: "tran color_text_1"
        };
        function H(t, e, o, a, s, n) {
            const r = x.A;
            return (0,
            i.uX)(),
            (0,
            i.CE)("div", b, [(0,
            i.Lk)("div", S, [((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(o.data.word.trs, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: "paraphrase-item",
                key: e
            }, [(0,
            i.Lk)("div", L, [(0,
            i.Lk)("div", E, (0,
            i.v_)(t["#text"]), 1), (0,
            i.bF)(r, {
                url: "https://dict.youdao.com/dictvoice?audio=" + t.voice
            }, null, 8, ["url"])]), (0,
            i.Lk)("div", F, (0,
            i.v_)(t["#tran"]), 1)])))), 128))])])
        }
        var B = {
            name: "Ce",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                VoicePlayer: x.A
            },
            setup(t, e) {}
        };
        const R = (0,
        T.A)(B, [["render", H], ["__scopeId", "data-v-b322f4f6"]]);
        var D = R;
        const I = {
            class: "ec-consision-result"
        }
          , N = {
            class: "paraphrase-container"
        }
          , j = {
            key: 0,
            class: "pos color_text_3"
        }
          , X = {
            class: "tran color_text_1"
        }
          , U = {
            key: 0,
            class: "exam-type color_text_3"
        }
          , P = {
            class: "anagram-container"
        }
          , O = {
            class: "phrs-pos-name color_text_3"
        }
          , K = {
            class: "phrs-text color_text_1"
        };
        function $(t, e, o, a, s, n) {
            return (0,
            i.uX)(),
            (0,
            i.CE)("div", I, [(0,
            i.Lk)("div", N, [((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(o.data.word.trs, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: "paraphrase-item",
                key: e
            }, [t.pos ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", j, (0,
            i.v_)(t.pos), 1)) : (0,
            i.Q3)("", !0), (0,
            i.Lk)("div", X, (0,
            i.v_)(t.tran), 1)])))), 128))]), o.data.exam_type && o.data.exam_type.length ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", U, (0,
            i.v_)(o.data.exam_type.join("/")), 1)) : (0,
            i.Q3)("", !0), (0,
            i.Lk)("div", P, [((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(o.data.word.wfs, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: "anagram-item",
                key: e
            }, [(0,
            i.Lk)("span", O, (0,
            i.v_)(t.wf.name), 1), (0,
            i.Lk)("span", K, (0,
            i.v_)(t.wf.value), 1)])))), 128))])])
        }
        var M = {
            name: "Ec",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            setup(t, e) {}
        };
        const Q = (0,
        T.A)(M, [["render", $], ["__scopeId", "data-v-287e6eba"]]);
        var W = Q;
        const Z = t=>((0,
        i.Qi)("data-v-e7cb9a8c"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , q = {
            class: "dict-result-english-pronounce"
        }
          , z = {
            key: 0,
            class: "pron"
        }
          , G = {
            class: "pron-contianer"
        }
          , V = {
            key: 0,
            class: "pron-text color_text_2"
        }
          , J = {
            key: 1,
            class: "pron"
        }
          , Y = {
            class: "pron-contianer"
        }
          , tt = Z((()=>(0,
        i.Lk)("span", {
            class: "pron-cn-text color_text_2"
        }, "英", -1)))
          , et = {
            key: 0,
            class: "pron-text color_text_2"
        }
          , ot = {
            key: 2,
            class: "pron"
        }
          , at = {
            class: "pron-contianer"
        }
          , it = Z((()=>(0,
        i.Lk)("span", {
            class: "pron-cn-text color_text_2"
        }, "美", -1)))
          , st = {
            key: 0,
            class: "pron-text color_text_2"
        };
        function nt(t, e, o, a, s, n) {
            const r = x.A;
            return (0,
            i.uX)(),
            (0,
            i.CE)("ul", q, [o.data.speech ? ((0,
            i.uX)(),
            (0,
            i.CE)("li", z, [(0,
            i.Lk)("div", G, [o.data.phone ? ((0,
            i.uX)(),
            (0,
            i.CE)("span", V, (0,
            i.v_)(o.data.phone), 1)) : (0,
            i.Q3)("", !0), (0,
            i.bF)(r, {
                url: "https://dict.youdao.com/dictvoice?audio=" + o.data.speech
            }, null, 8, ["url"])])])) : (0,
            i.Q3)("", !0), o.data.ukphone || o.data.ukspeech ? ((0,
            i.uX)(),
            (0,
            i.CE)("li", J, [(0,
            i.Lk)("div", Y, [tt, o.data.ukphone ? ((0,
            i.uX)(),
            (0,
            i.CE)("span", et, (0,
            i.v_)(o.data.ukphone), 1)) : (0,
            i.Q3)("", !0), (0,
            i.bF)(r, {
                url: "https://dict.youdao.com/dictvoice?audio=" + o.data.ukspeech
            }, null, 8, ["url"])])])) : (0,
            i.Q3)("", !0), o.data.usphone || o.data.usspeech ? ((0,
            i.uX)(),
            (0,
            i.CE)("li", ot, [(0,
            i.Lk)("div", at, [it, o.data.usphone ? ((0,
            i.uX)(),
            (0,
            i.CE)("span", st, (0,
            i.v_)(o.data.usphone), 1)) : (0,
            i.Q3)("", !0), (0,
            i.bF)(r, {
                url: "https://dict.youdao.com/dictvoice?audio=" + o.data.usspeech
            }, null, 8, ["url"])])])) : (0,
            i.Q3)("", !0)])
        }
        var rt = {
            name: "EnglishPronounce",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                VoicePlayer: x.A
            },
            setup(t, e) {}
        };
        const lt = (0,
        T.A)(rt, [["render", nt], ["__scopeId", "data-v-e7cb9a8c"]]);
        var ut = lt;
        o(62953);
        const ct = t=>((0,
        i.Qi)("data-v-0af1acb0"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , dt = {
            class: "dict-result-header"
        }
          , ht = {
            class: "dict-result-header-left"
        }
          , mt = ct((()=>(0,
        i.Lk)("span", {
            class: "color_text_1"
        }, "查看全部", -1)))
          , gt = ct((()=>(0,
        i.Lk)("i", {
            class: "ic_dict-result-header-more"
        }, null, -1)))
          , pt = [mt, gt];
        function ft(t, e, o, a, s, n) {
            const r = ut
              , l = (0,
            i.g2)("Pinyin");
            return (0,
            i.uX)(),
            (0,
            i.CE)("div", dt, [(0,
            i.Lk)("div", ht, [o.data.ec ? ((0,
            i.uX)(),
            (0,
            i.Wv)(r, {
                key: 0,
                data: o.data.ec.word
            }, null, 8, ["data"])) : o.data.ce ? ((0,
            i.uX)(),
            (0,
            i.Wv)(l, {
                key: 1,
                data: o.data.ce.word
            }, null, 8, ["data"])) : (0,
            i.Q3)("", !0)]), (0,
            i.Lk)("div", {
                class: "dict-result-header-more",
                onClick: e[0] || (e[0] = (...t)=>a.gotoDictWebResult && a.gotoDictWebResult(...t))
            }, pt)])
        }
        const At = t=>((0,
        i.Qi)("data-v-4ad856f4"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , yt = {
            key: 0,
            class: "dict-result-ce-pinyin"
        }
          , kt = At((()=>(0,
        i.Lk)("i", {
            class: "slash color_text_5"
        }, "/", -1)))
          , vt = {
            class: "phone color_text_2"
        }
          , wt = At((()=>(0,
        i.Lk)("i", {
            class: "slash color_text_5"
        }, "/", -1)));
        function Tt(t, e, o, a, s, n) {
            return o.data.phone ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", yt, [kt, (0,
            i.Lk)("span", vt, (0,
            i.v_)(o.data.phone), 1), wt])) : (0,
            i.Q3)("", !0)
        }
        var Ct = {
            name: "Pinyin",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            setup(t, e) {}
        };
        const _t = (0,
        T.A)(Ct, [["render", Tt], ["__scopeId", "data-v-4ad856f4"]]);
        var xt = _t
          , bt = {
            name: "DictResultHeader",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                EnglishPronounce: ut,
                Pinyin: xt
            },
            setup(t, e) {
                const o = ()=>{
                    const e = t.data.ec || t.data.ce
                      , o = e.word["return-phrase"];
                    window.open(`https://dict.youdao.com/result?word=${encodeURIComponent(o)}&lang=en&keyfrom=fanyiweb_searchword`)
                }
                ;
                return {
                    gotoDictWebResult: o
                }
            }
        };
        const St = (0,
        T.A)(bt, [["render", ft], ["__scopeId", "data-v-0af1acb0"]]);
        var Lt = St;
        const Et = t=>((0,
        i.Qi)("data-v-53f7bc18"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , Ft = {
            class: "dict-result"
        }
          , Ht = {
            class: "dict-result-consision"
        }
          , Bt = Et((()=>(0,
        i.Lk)("span", {
            class: "dict-result-source color_text_3"
        }, "来自有道词典结果", -1)));
        function Rt(t, e, o, a, s, n) {
            const r = Lt
              , l = W
              , u = D;
            return (0,
            i.uX)(),
            (0,
            i.CE)("div", Ft, [(0,
            i.bF)(r, {
                data: o.data
            }, null, 8, ["data"]), (0,
            i.Lk)("div", Ht, [o.data.ec ? ((0,
            i.uX)(),
            (0,
            i.Wv)(l, {
                key: 0,
                data: o.data.ec
            }, null, 8, ["data"])) : o.data.ce ? ((0,
            i.uX)(),
            (0,
            i.Wv)(u, {
                key: 1,
                data: o.data.ce
            }, null, 8, ["data"])) : (0,
            i.Q3)("", !0)]), Bt])
        }
        var Dt = {
            name: "DictResult",
            props: {
                data: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                DictResultHeader: Lt,
                Ce: D,
                Ec: W
            },
            setup(t, e) {}
        };
        const It = (0,
        T.A)(Dt, [["render", Rt], ["__scopeId", "data-v-53f7bc18"]]);
        var Nt = It
          , jt = o(44793);
        const Xt = t=>((0,
        i.Qi)("data-v-33fa994f"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , Ut = Xt((()=>(0,
        i.Lk)("div", {
            class: "header color_text_0"
        }, "以下为该句多个翻译结果： ", -1)))
          , Pt = {
            class: "suggestList"
        }
          , Ot = ["data-system-name", "onClick"];
        function Kt(t, e, o, a, s, n) {
            return (0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: "TransSuggestDialog",
                style: (0,
                i.Tr)({
                    top: a.dialogTop + "px",
                    left: a.dialogLeft + "px"
                })
            }, [Ut, (0,
            i.Lk)("div", {
                class: "closeButton",
                onClick: a.closeDialog
            }), (0,
            i.Lk)("ul", Pt, [((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(o.transSuggestList, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)("li", {
                class: "suggestItem color_text_1",
                key: t.systemName,
                "data-system-name": t.systemName,
                onClick: e=>a.suggestItemClickHandler(t)
            }, (0,
            i.v_)(t.tgt), 9, Ot)))), 128))])], 4)
        }
        var $t = o(50953)
          , Mt = o(20641)
          , Qt = {
            __name: "TransSuggestDialog",
            props: {
                transSuggestList: {
                    type: Array,
                    required: !0
                },
                relativeElement: {
                    type: [Object, null],
                    required: !0
                }
            },
            emits: ["closeDialog", "selectSuggest"],
            setup(t, {expose: e, emit: o}) {
                e();
                const a = t
                  , s = o
                  , n = (0,
                $t.KR)(0)
                  , r = (0,
                $t.KR)(0)
                  , l = ()=>{
                    const t = a.relativeElement
                      , e = t.getBoundingClientRect()
                      , o = t.getClientRects();
                    n.value = t.offsetTop + e.height + 2,
                    o.length > 1 ? r.value = t.offsetLeft - (o[0].left - o[o.length - 1].left) : r.value = t.offsetLeft
                }
                  , u = t=>{
                    s("selectSuggest", t)
                }
                ;
                (0,
                i.KC)((()=>{
                    l()
                }
                )),
                (0,
                Mt.wB)((()=>a.relativeElement), ((t,e)=>{
                    console.log("element", a.relativeElement),
                    t !== e && l()
                }
                ));
                const c = ()=>{
                    s("closeDialog")
                }
                  , d = {
                    props: a,
                    emit: s,
                    dialogTop: n,
                    dialogLeft: r,
                    updateDialogPosition: l,
                    suggestItemClickHandler: u,
                    closeDialog: c,
                    get ref() {
                        return $t.KR
                    },
                    get watch() {
                        return Mt.wB
                    }
                };
                return Object.defineProperty(d, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                d
            }
        };
        const Wt = (0,
        T.A)(Qt, [["render", Kt], ["__scopeId", "data-v-33fa994f"]]);
        var Zt = Wt
          , qt = o(84863);
        const zt = t=>((0,
        i.Qi)("data-v-5829d7f2"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , Gt = ["data-tooltip"]
          , Vt = zt((()=>(0,
        i.Lk)("i", {
            class: "format-text-button-icon"
        }, null, -1)))
          , Jt = [Vt];
        function Yt(t, e, o, a, s, n) {
            const r = (0,
            i.gN)("tooltip");
            return (0,
            i.bo)(((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: (0,
                i.C4)(["format-text-button", [{
                    active: a.isFormated
                }]]),
                "data-tooltip": a.isFormated ? "撤销PDF文字格式整理" : "PDF文字格式整理",
                onClick: e[0] || (e[0] = (...t)=>a.formatHandler && a.formatHandler(...t))
            }, Jt, 10, Gt)), [[r, void 0, void 0, {
                "top-left": !0
            }]])
        }
        o(27495),
        o(25440);
        var te = o(37282)
          , ee = {
            __name: "FormatTextButton",
            props: {
                keyword: String,
                from: String,
                to: String,
                domain: String,
                domainType: String,
                keepLastIndex: Function,
                hideKeyword: Function,
                formatData: Object
            },
            emits: ["update:keyword", "update:formatData"],
            setup(t, {expose: e, emit: o}) {
                const a = t
                  , s = (0,
                i.KR)(!1)
                  , n = (0,
                i.KR)("")
                  , r = (0,
                i.KR)("")
                  , l = o
                  , {proxy: u} = (0,
                i.nI)()
                  , c = (0,
                i.KR)(!1);
                (0,
                i.wB)((()=>a.formatData), (()=>{
                    s.value = a.formatData.format_flag,
                    c.value = a.formatData.isFormated,
                    n.value = a.formatData.textBeforeFormat,
                    r.value = a.formatData.keywordBeforeFormat
                }
                ), {
                    immediate: !0,
                    deep: !0
                }),
                (0,
                i.wB)((()=>[s.value, c.value, n.value, r.value]), (()=>{
                    l("update:formatData", {
                        format_flag: s.value,
                        isFormated: c.value,
                        textBeforeFormat: n.value,
                        keywordBeforeFormat: r.value
                    })
                }
                )),
                (0,
                i.wB)((()=>a.keyword), (()=>{
                    s.value || (c.value = !1),
                    s.value = !1
                }
                ));
                const d = (0,
                i.EW)({
                    get() {
                        return a.keyword
                    },
                    set(t) {
                        l("update:keyword", t)
                    }
                })
                  , h = (t,e,o,s)=>{
                    t === o && e === s || (e !== s ? (te.A.$emit("replaceTextTranslateHistoryItemByContent", {
                        keyword: e,
                        from: a.from,
                        to: a.to,
                        newKeyword: s
                    }),
                    d.value = s,
                    (0,
                    i.dY)((()=>{
                        document.querySelector("#js_fanyi_input").innerText = o,
                        a.keepLastIndex()
                    }
                    ))) : t !== o && (document.querySelector("#js_fanyi_input").innerText = o,
                    a.keepLastIndex()))
                }
                  , m = k.A.debounce((()=>{
                    console.log("formatHandler", s.value),
                    s.value = !0,
                    a.hideKeyword(),
                    (0,
                    i.dY)((()=>{
                        if (c.value) {
                            const t = document.querySelector("#js_fanyi_input").innerText;
                            console.log("textBeforeFormat.value", n.value),
                            console.log("keywordBeforeFormat.value", r.value),
                            h(t, a.keyword, n.value, r.value),
                            c.value = !1,
                            u.$toast("撤销成功")
                        } else {
                            n.value = document.querySelector("#js_fanyi_input").innerText,
                            r.value = a.keyword;
                            const t = a.keyword.replace(/([\.?!。？！])\s+/g, "$1 ").replace(/\n/g, " ").replace(/\x20+/g, " ").replace(/([\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}])\s+(?=[\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}])/gu, "$1").replace(/([\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}])\s+([,.;'\[\\\]{}|:"<>?\/~`!@#$%^&*()\-=_+~！@#￥%……&*（）——·【】「」、；‘，。、：“《》？])/gu, "$1$2").replace(/([,.;'\[\\\]{}|:"<>?\/~`!@#$%^&*()\-=_+~！@#￥%……&*（）——·【】「」、；‘，。、：“《》？])\s+([\u3400-\u4DBF\u4E00-\u9FFF\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}])/gu, "$1$2");
                            c.value = !0,
                            h(n.value, r.value, t, t),
                            r.value === t && (s.value = !1),
                            u.$toast("格式整理成功")
                        }
                    }
                    ))
                }
                ), 100)
                  , g = ()=>{
                    s.value || (c.value = !1)
                }
                ;
                e({
                    refreshFormatPdfText: g
                });
                const p = {
                    props: a,
                    format_flag: s,
                    textBeforeFormat: n,
                    keywordBeforeFormat: r,
                    emits: l,
                    proxy: u,
                    isFormated: c,
                    innerKeyword: d,
                    replaceTextAndHistory: h,
                    formatHandler: m,
                    refreshFormatPdfText: g,
                    get util() {
                        return k.A
                    },
                    get eventBus() {
                        return te.A
                    }
                };
                return Object.defineProperty(p, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                p
            }
        };
        const oe = (0,
        T.A)(ee, [["render", Yt], ["__scopeId", "data-v-5829d7f2"]]);
        var ae = oe;
        const ie = t=>((0,
        i.Qi)("data-v-c459767a"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , se = {
            key: 0,
            class: "term-bank-action"
        }
          , ne = ie((()=>(0,
        i.Lk)("div", {
            class: "term-bank-action-item-text"
        }, "术语库", -1)))
          , re = {
            class: "term-bank-panel-inner-container"
        }
          , le = {
            class: "checkbox"
        }
          , ue = ie((()=>(0,
        i.Lk)("span", {
            class: "color_text_1 label-text"
        }, "应用个人术语库", -1)))
          , ce = ie((()=>(0,
        i.Lk)("div", {
            class: "term-bank-line-container"
        }, [(0,
        i.Lk)("div", {
            class: "term-bank-line"
        })], -1)))
          , de = ie((()=>(0,
        i.Lk)("span", {
            class: "link-text"
        }, "编辑术语库", -1)))
          , he = ie((()=>(0,
        i.Lk)("div", {
            class: "icon-right-arrow"
        }, null, -1)))
          , me = [de, he];
        function ge(t, e, o, a, s, n) {
            return a.showTermBankAction ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", se, [(0,
            i.Lk)("div", {
                class: "term-bank-button",
                onClick: e[0] || (e[0] = (0,
                i.D$)((t=>a.showPanel = !0), ["stop"]))
            }, [ne, (0,
            i.Lk)("div", {
                class: (0,
                i.C4)(["ic_language_arrowdown", [{
                    opened: a.showPanel
                }]])
            }, null, 2)]), a.showPanel ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                key: 0,
                class: "term-bank-panel-container",
                onClick: e[2] || (e[2] = (0,
                i.D$)((()=>{}
                ), ["stop"]))
            }, [(0,
            i.Lk)("div", re, [(0,
            i.Lk)("div", {
                class: "term-bank-row yd-form-container",
                onClick: a.clickCheckboxHandler
            }, [(0,
            i.Lk)("label", le, [(0,
            i.bo)((0,
            i.Lk)("input", {
                class: "g-checkbox",
                type: "checkbox",
                "onUpdate:modelValue": e[1] || (e[1] = t=>a.innerUsePersonalTermBank = t),
                onClick: a.setCheckboxReadOnly
            }, null, 512), [[i.lH, a.innerUsePersonalTermBank]]), ue])]), ce, (0,
            i.Lk)("div", {
                class: "term-bank-row edit-term-bank-btn",
                onClick: a.linkToTermBankHandler
            }, me)])])) : (0,
            i.Q3)("", !0)])) : (0,
            i.Q3)("", !0)
        }
        var pe = {
            __name: "TermBankAction",
            props: {
                useTerm: Boolean,
                from: String,
                to: String,
                languageFromUserSelectedWhenAuto: String
            },
            emits: ["update:useTerm"],
            setup(t, {expose: e, emit: o}) {
                e();
                const a = (0,
                i.KR)(!1)
                  , s = (0,
                f.rd)()
                  , n = (0,
                A.Pj)()
                  , r = t
                  , l = (0,
                i.EW)((()=>{
                    let t = "";
                    return t = "auto" === r.from ? r.languageFromUserSelectedWhenAuto : `${r.from}2${r.to}`,
                    ["zh-CHS2en", "en2zh-CHS", "ja2zh-CHS", "ko2zh-CHS"].indexOf(t) > -1
                }
                ))
                  , u = o
                  , c = (0,
                i.EW)({
                    get: ()=>r.useTerm,
                    set: t=>{
                        u("update:useTerm", t)
                    }
                })
                  , d = (0,
                i.EW)((()=>n.state.login.isLogin))
                  , h = ()=>{
                    a.value = !1
                }
                  , m = t=>{
                    if (d.value)
                        return;
                    const e = t.currentTarget;
                    e.checked = !1
                }
                  , g = ()=>{
                    if (!d.value) {
                        const t = encodeURIComponent(window.location.href);
                        window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${t}&t=${(new Date).getTime()}`
                    }
                }
                  , p = ()=>{
                    if (d.value)
                        s.push({
                            path: "/person/termBank"
                        });
                    else {
                        const t = encodeURIComponent("https://fanyi.youdao.com/#/person/termBank");
                        window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${t}&t=${(new Date).getTime()}`
                    }
                    a.value = !1
                }
                  , y = ()=>{
                    c.value = "true" === localStorage.getItem("textTranslateUsePersonalTermBank")
                }
                  , k = ()=>{
                    localStorage.setItem("textTranslateUsePersonalTermBank", c.value)
                }
                ;
                (0,
                i.wB)(c, (()=>{
                    k()
                }
                )),
                (0,
                i.sV)((()=>{
                    y(),
                    window.addEventListener("click", h)
                }
                )),
                (0,
                i.hi)((()=>{
                    window.removeEventListener("click", h)
                }
                ));
                const v = {
                    showPanel: a,
                    router: s,
                    store: n,
                    props: r,
                    showTermBankAction: l,
                    emits: u,
                    innerUsePersonalTermBank: c,
                    isLogin: d,
                    closePanelHandler: h,
                    setCheckboxReadOnly: m,
                    clickCheckboxHandler: g,
                    linkToTermBankHandler: p,
                    getUsePersonalTermBankFromStore: y,
                    setUsePersonalTermBankToStore: k,
                    watch: i.wB,
                    get useRouter() {
                        return f.rd
                    },
                    get useStore() {
                        return A.Pj
                    }
                };
                return Object.defineProperty(v, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                v
            }
        };
        const fe = (0,
        T.A)(pe, [["render", ge], ["__scopeId", "data-v-c459767a"]]);
        var Ae = fe
          , ye = o(2236)
          , ke = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgBtZPdUYNAFIXPTeI7HYgVqB3gmzpmTAdJB5IOkgZ07SBWoBN/xjdiB+lA7CDO5MkfrmdhiZgHmEA8DHMXuHx79u5dYMuSqoSTUHttoM/E+N7IsBHwOFR/R/BqYQr4iWL4aMSU/dMq+9gBRmmS4sjN7qFCrTJ3IuiTMvn4Bc1RF5i7aycYM8m344RLRx1g0d2dkZivDuz7JyOVDjv54CzUgOGCt0eYn7uzkbVbuJxoHWA37BMYP2cTZw5PQx0QErUEAaPY4qvixbkD22bCXb5Jv63dvAbshKgwAdAdasSBP72SvfyZQHkwEqBCdN0j+PZbcWhLsqohe+wN9bRwS/VcbCZxG7Z0LdUYSAWEzmdGUqcdNJQKdhlW5WrksBeqZ5fM+s+2Avxy9ZPCkcyAindu/T42FEHnNi4LwLQP7SmRrDlj9l/McTozx/MSWrpc5lyzX8M/QKsuT4vtemziUDCbXsoI/6kffLtxowN+KfMAAAAASUVORK5CYII="
          , ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF3SURBVHgBtVTdUcJAEP7uwBl4SwemA8MoQuAFK9AOpAOlA+xAO8BKwAcmRGCSDogd4Buj5ta9y/A7CpLELzO5y93ut9/t7gXIGeKQge9PbohwCyGieu28k4nQ8wJbyHjGZhFAtoqp02hUH/f5SOzdjbt6IPVxZaILWDgAuVcd+KiEXqFQMEREIkRawpU6+nwgknYyVxHSEG6qc103Uoocvd5sXh5UWFyTjFtCiDueWhCxvVSXjJjr6o1Gk/4PHJG204FXCj1v2hZS9LnmLRKkfS0CvSyNyuVij4Bnvbf7sA/7nmwH0pFH/mS2+e354wH+AN2n7EvD4auzUmiOBXpDCnB+54ZICmuLMC04v0ZZqVQMcyGUEi0ewkqlkihFRnAxTxWt05WJMAgCyxxZYZAL4WLxZfLHdzzcIaR3bqgzHAkp5bUelwUx5PplbolubO567p+IV50kDn69avrPw83usM1TvX5xv0WYkE7bkKqN4zBwa9Uu/hPfpiGkfniH4pMAAAAASUVORK5CYII="
          , we = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAaVBMVEUAAACFiJ6EiZ2GiJ+Dh56Gip+FiZ6FiZ+FiZ6FiZ6EiZ6FiZ6Fip2EiZ2AgJmFiZ6FiZ6FiZ+FiZ+Fip6FiZ6Fip6Fip+AipqAgICFiZ6GiZ6FiJ2Ghp6AiZyFiZ6Gip+EiZ2EiZ+FiZ7fPO/NAAAAInRSTlMAnzRlQL7Nlnv46eNKOgrz1a+mMO+GZBME3bNdJhrGjXC378mbCgAAATZJREFUSMftld1ygjAQhTc0BAi/oiggaLvv/5Bdh9JlQmuyM176XSTG+M3xZKLAX0ytzcwZgpksPuiChRgXSghDI6L9ouEuCNBgEePwgBgqGhNJQETjpyAArjQVggC40zQLAmBEPEkCYEC8CQL4kAID+JDCAkIOSaeJUqr5CYCSXhj1S5I69+pocGG9D1WODiYCpqx547q8VdSuUXPIxSITraGjdYyhWoXukahp+bEIeyo90Fa6LqnqaaaZhT1zvbnuGeIBPAIcNncFEdXrhZx6SoQLbSUSoaCts0RIaesoEahz1gsE7uwXuLNE4M5+gTtLBO7sF7izQODOQQJ3ZqFl4Vln/oLNc8Eg1j0v2/Xnx8I+QDl/X9i0St1oHtWOZvfAS9BLB1t6n5F14KDb/P9PGzXBGxHfD0VCCIrnMxgAAAAASUVORK5CYII="
          , Te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgBvVRbTsJQED3TED+MJiyBHYA76LcRZAm6Agor6AqkrEDdARH+6RJ0BcAO8NePO54pt6GmhEptnGSYO3DvmTMvgIZF8sNdpCHNiNr+7WO+ni+nMit+FdjHbaQPIlgFgpBWaHumdj6pQNKf6HMpUH+sq8FY10WfjFNUyGCiMe9qGGn7B0MTp9jiTHEOqdkroFcCrCMt4N2sNgU4T2RHsC1Buo0AZqJMm81sDFD2aXfyxvwZkClvzF4S9ACo+ORQdVFDnF+EwNuWj5KQ+j1naq2aRbSufeSPLB2ORgyUg4otAFkuEkk9MLA0R/HI49ZvwMYY53VhOkP6o2PbQgKvgeImD9DKD4zwQmOKIYGcYE1WEd048PVZTCVEhRxtis0X2zczVsbS+cIzUAd1ALMfXFZXW6voAvsV+8Jh3s4GLLLcATt/uYO6gEWW16yn+eJTPyVSdYF/Y9bhiJq+PUmM/5ZvE9hvZP+IUDoAAAAASUVORK5CYII="
          , Ce = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBvVTRUcJAEN29MJpPSkgHkFGU+0sHWoJWgCVgB1CB2IEdkL8EwUEqIHSAP0xQybp7N2HiwIiGjC+T3N7O3bu3t7sBqBiYG1E0DhCxw2Ydfo+ndvu8X3QoS/ZygwqHTB8QEvLYlFfsnx5e04ufJw87x8TxZBiPJvPiPBqNQzgAjqrL+2g6nda/KRQQ0AL+jlA+afrZ3CEsA9etvRoxBNUQ+r6/ZLKFUtiohNCAOGxOZmWERCRhe3lijiZ0HExkXK0+vAIhvXFRNaAEsgytMmXHmqEj6CHClalFgsQUNsAs3yThrNebLpu7hyLJ2kTrVrhVKBPK8FZqUTqAyRNRnN9LmmbXfEhnb7cQPJ6eOH7OX8sNrc8GPAy2it43cy7YO56yssyTtteXrQAOYG9STH1l1Of+7liVKhF/FEUelCEUcBf0wIQrKlVovU4AZQmLKl0XltaLHpQlLKqU+7QeSuAYQlHJf2DJ/ozfe60vBvDf+AJpZrVCMzeOAAAAAABJRU5ErkJggg=="
          , _e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAclBMVEUAAACFiJ+EiZ2GiJ+Dh52FiZ6FiZ6FiZ6Gip6FiZ+FiZ6EiJ6EiJ2FiJuAiJyGip+FiZ6AgImFiZ6Fip6Fip6EiJyAgJWFiZ+Fip6GiZ6Fip6FiZ6Fip6FiJ2FiZ6FiZ6FiZ+EiZ2DipyFip+EiJ2FiZ5ua431AAAAJXRSTlMAnzNlQPbizL+X7Xw8LhO/tQTY00wfDK+jk4mCZF7nxqdwSJ94stG6kAAAATBJREFUSMftlclSwzAQBcdgeYttnIQsJGRh6f//RShiZUoRZKw7fZKr3H56cxjLP9PJzwV/ssw6CZnXGOxCocZkH9znJ3ebZSdgyCIWfNOKcvZfeAQeJGYGfIhSwFLuCVKCm+sjsI2EKKILhOy+8Ay8pgg98GILYc0ySdhoa1PQ1imCtrYFbZ0iaGtbiFvbgra2hbi1LWhrQ4hbJwkVFP7sYDNFcP68hGZlCCuHXmkPLPL1HWGdF8CnjPQNHhW6oSGk6MXTOq4cxrk7bnCtKF2Jp7qstgU3lDd3bWf1uIFyv6rK7Eo9ayXCv1f5w7tM4GmMeADexEQj1kAtKREFnCQlYoBGUiJ2QJ8ScQjHZEeEY7IjojHZEQ0MMj2iGTTBpuJCO1VYHaNfrWVsj5QH+ZUvutVHxXHuXjsAAAAASUVORK5CYII=";
        const xe = {
            class: "source"
        }
          , be = {
            key: 0,
            class: "text-translate-top"
        }
          , Se = {
            class: "language-selector-contianer"
        }
          , Le = {
            class: "text-translate-top-right"
        }
          , Ee = (0,
        i.Lk)("span", null, "输入要翻译的文本或网址", -1)
          , Fe = [Ee]
          , He = {
            id: "js_fanyi_input_outside_container",
            ref: "js_fanyi_input_outside_container",
            "disable-keydown-focus": ""
        }
          , Be = ["contenteditable", "spellcheck", "dir"]
          , Re = {
            class: "opt"
        }
          , De = {
            class: "opt-left yd-form-container"
        }
          , Ie = ["disabled"]
          , Ne = (0,
        i.Lk)("span", null, "重点词汇", -1)
          , je = {
            key: 2,
            class: "ai-btn-wrap"
        }
          , Xe = {
            key: 0,
            class: "opt-right yd-form-container"
        }
          , Ue = (0,
        i.Lk)("i", null, "/", -1)
          , Pe = (0,
        i.Lk)("i", null, "/", -1)
          , Oe = {
            key: 0,
            class: "tips-content"
        }
          , Ke = {
            class: "title color_text_1"
        }
          , $e = (0,
        i.Lk)("div", {
            class: "li-content"
        }, [(0,
        i.Lk)("li", {
            class: "color_text_2"
        }, "内测功能仅支持会员使用"), (0,
        i.Lk)("li", {
            class: "color_text_2"
        }, "每日可翻译10次"), (0,
        i.Lk)("li", {
            class: "color_text_2"
        }, "每次仅支持翻译500字符")], -1)
          , Me = (0,
        i.Lk)("div", {
            class: "resizer color_divider_border_5"
        }, null, -1)
          , Qe = {
            class: (0,
            i.C4)(["target"]),
            ref: "target"
        }
          , We = {
            class: "text-translate-top"
        }
          , Ze = {
            class: "domain-selector-container"
        }
          , qe = {
            id: "js_fanyi_output",
            ref: "js_fanyi_output",
            class: "color_text_1"
        }
          , ze = {
            key: 0,
            class: "errorTips color_text_3",
            contenteditable: "false"
        }
          , Ge = (0,
        i.Lk)("span", null, "对不起，实在太长啦，让我喘口气吧", -1)
          , Ve = [Ge]
          , Je = {
            key: 1,
            class: "resultOutput step-trans-container"
        }
          , Ye = {
            class: (0,
            i.C4)(["tgt color_text_1 un-step-trans chatGpt"])
        }
          , to = ["dir"]
          , eo = {
            key: 0,
            class: "step-trans-item"
        }
          , oo = ["data-section", "data-sentence"]
          , ao = ["data-section", "data-sentence", "data-group"]
          , io = {
            key: 0,
            class: "pjm-top"
        }
          , so = {
            class: "pjm-bottom"
        }
          , no = ["data-section", "data-sentence", "data-group"]
          , ro = ["dir"]
          , lo = ["data-section", "data-sentence", "data-group"]
          , uo = ["data-section", "data-sentence", "data-group"]
          , co = ["dir"]
          , ho = ["data-section", "data-sentence", "data-group"]
          , mo = ["data-section"]
          , go = ["data-section", "data-sentence", "data-group", "onClick", "onInput"]
          , po = {
            key: 0,
            class: "pjm-top",
            contenteditable: "false"
        }
          , fo = ["data-pjm_index"]
          , Ao = {
            key: 0,
            class: "tgt-line"
        }
          , yo = ["data-section", "data-sentence", "data-group"]
          , ko = ["data-section", "data-sentence", "data-group", "onClick", "onInput"]
          , vo = {
            key: 1,
            class: "translate-domain-text color_text_4"
        }
          , wo = (0,
        i.Lk)("span", null, "以上翻译结果来自有道神经网络翻译（YNMT）", -1)
          , To = {
            key: 1,
            class: "errorTips color_text_3",
            contenteditable: "false"
        }
          , Co = (0,
        i.Lk)("span", null, "翻译数据正在路上...", -1)
          , _o = [Co]
          , xo = {
            key: 2,
            class: "errorTips color_text_3",
            contenteditable: "false"
        }
          , bo = {
            class: "targetAction",
            "disable-quci": ""
        }
          , So = {
            class: "opt"
        }
          , Lo = {
            class: "opt-left yd-form-container container_ch"
        }
          , Eo = {
            key: 2,
            class: "checkbox"
        }
          , Fo = (0,
        i.Lk)("span", null, "逐句对照", -1)
          , Ho = {
            key: 3,
            class: "ai-btn-wrap"
        }
          , Bo = {
            key: 4,
            class: "button_feedback"
        }
          , Ro = {
            key: 0,
            class: "ico",
            src: ke,
            alt: "like"
        }
          , Do = {
            key: 1,
            class: "ico",
            src: ve,
            alt: "like"
        }
          , Io = {
            key: 2,
            class: "ico",
            src: we,
            alt: "like"
        }
          , No = {
            key: 3,
            class: "hover_dialog hover_dialog_left"
        }
          , jo = (0,
        i.Lk)("span", {
            class: "triangle triangle_left"
        }, null, -1)
          , Xo = {
            key: 0,
            class: "ico",
            src: Te,
            alt: "dislike"
        }
          , Uo = {
            key: 1,
            class: "ico",
            src: Ce,
            alt: "dislike"
        }
          , Po = {
            key: 2,
            class: "ico",
            src: _e,
            alt: "dislike"
        }
          , Oo = {
            key: 3,
            class: "hover_dialog hover_dialog_right"
        }
          , Ko = (0,
        i.Lk)("span", {
            class: "triangle triangle_right"
        }, null, -1)
          , $o = (0,
        i.Lk)("div", {
            class: "opt-right yd-form-container"
        }, null, -1)
          , Mo = {
            class: "fixedBottomActionBar color_bg_1"
        }
          , Qo = {
            class: "sourceActionContainer"
        }
          , Wo = {
            class: "sourceAction",
            "disable-quci": ""
        }
          , Zo = {
            class: "opt"
        }
          , qo = {
            class: "opt-left yd-form-container"
        }
          , zo = {
            class: "checkbox"
        }
          , Go = (0,
        i.Lk)("span", null, "重点词汇", -1)
          , Vo = {
            key: 2,
            class: "ai-btn-wrap"
        }
          , Jo = {
            key: 0,
            class: "opt-right yd-form-container"
        }
          , Yo = (0,
        i.Lk)("i", null, "/", -1)
          , ta = (0,
        i.Lk)("i", null, "/", -1)
          , ea = {
            key: 0,
            class: "tips-content"
        }
          , oa = {
            class: "title color_text_1"
        }
          , aa = (0,
        i.Lk)("div", {
            class: "li-content"
        }, [(0,
        i.Lk)("li", {
            class: "color_text_2"
        }, "内测功能仅支持会员使用"), (0,
        i.Lk)("li", {
            class: "color_text_2"
        }, "每日可翻译10次"), (0,
        i.Lk)("li", {
            class: "color_text_2"
        }, "每次仅支持翻译500字符")], -1)
          , ia = {
            class: "targetActionContainer"
        }
          , sa = {
            class: "targetAction",
            "disable-quci": ""
        }
          , na = {
            class: "opt"
        }
          , ra = {
            class: "opt-left yd-form-container container_ch"
        }
          , la = {
            key: 2,
            class: "checkbox"
        }
          , ua = (0,
        i.Lk)("span", null, "逐句对照", -1)
          , ca = {
            key: 3,
            class: "ai-btn-wrap"
        }
          , da = {
            key: 4,
            class: "button_feedback"
        }
          , ha = {
            key: 0,
            class: "ico",
            src: ke,
            alt: "like"
        }
          , ma = {
            key: 1,
            class: "ico",
            src: ve,
            alt: "like"
        }
          , ga = {
            key: 2,
            class: "ico",
            src: we,
            alt: "like"
        }
          , pa = {
            key: 3,
            class: "hover_dialog hover_dialog_left"
        }
          , fa = (0,
        i.Lk)("span", {
            class: "triangle triangle_left"
        }, null, -1)
          , Aa = {
            key: 0,
            class: "ico",
            src: Te,
            alt: "dislike"
        }
          , ya = {
            key: 1,
            class: "ico",
            src: Ce,
            alt: "dislike"
        }
          , ka = {
            key: 2,
            class: "ico",
            src: _e,
            alt: "dislike"
        }
          , va = {
            key: 3,
            class: "hover_dialog hover_dialog_right"
        }
          , wa = (0,
        i.Lk)("span", {
            class: "triangle triangle_right"
        }, null, -1)
          , Ta = (0,
        i.Lk)("div", {
            class: "opt-right yd-form-container"
        }, null, -1);
        function Ca(t, e, o, a, s, n) {
            const r = ye.A
              , l = Ae
              , u = (0,
            i.g2)("FileUploadSubmodule")
              , c = x.A
              , d = ae
              , h = qt.A
              , m = Zt
              , g = (0,
            i.g2)("FeedBackDialog")
              , p = jt.A
              , f = (0,
            i.gN)("tooltip");
            return (0,
            i.uX)(),
            (0,
            i.CE)("div", {
                id: "inputOriginal",
                class: (0,
                i.C4)(["TextTranslateContainer", {
                    "history-list-opened": o.showTextTranslateHistoryPanel
                }])
            }, [(0,
            i.Lk)("div", {
                id: "TextTranslate",
                class: (0,
                i.C4)([o.direction, {
                    "fontsize-medium": "medium" === s.fontSize,
                    expanded: s.showStepTrans && t.isContrastAreaExpand,
                    "big-size": !n.overBigSizeLimitNums
                }])
            }, [(0,
            i.Lk)("div", xe, [s.showStepTrans && t.isContrastAreaExpand ? (0,
            i.Q3)("", !0) : ((0,
            i.uX)(),
            (0,
            i.CE)("div", be, [(0,
            i.Lk)("div", Se, [(0,
            i.bF)(r, {
                currentLanFrom: s.source.init.from,
                currentLanTo: s.source.init.to,
                scene: "textTranslate",
                disabled: t.showKeyword,
                onOnLangChangeCallback: t.onLangSelectorChangeCallback,
                guessLanguage: t.languageFromUserSelectedWhenAuto
            }, null, 8, ["currentLanFrom", "currentLanTo", "disabled", "onOnLangChangeCallback", "guessLanguage"])])])), (0,
            i.Lk)("div", Le, [(0,
            i.bF)(l, {
                useTerm: s.useTerm,
                "onUpdate:useTerm": e[0] || (e[0] = t=>s.useTerm = t),
                from: s.source.init.from,
                to: s.source.init.to,
                languageFromUserSelectedWhenAuto: t.languageFromUserSelectedWhenAuto
            }, null, 8, ["useTerm", "from", "to", "languageFromUserSelectedWhenAuto"]), s.showClear ? ((0,
            i.uX)(),
            (0,
            i.CE)("a", {
                key: 0,
                href: "javascript:;",
                class: "clearBtn icon_clear",
                onClick: e[1] || (e[1] = e=>t.clearButtonClickHandler())
            })) : (0,
            i.Q3)("", !0)]), t.showPlaceholder ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                key: 1,
                class: (0,
                i.C4)(["empty-placeholder color_text_5", t.sourceDir]),
                onClick: e[2] || (e[2] = (...e)=>t.placeholderClickHandler && t.placeholderClickHandler(...e))
            }, Fe, 2)) : (0,
            i.Q3)("", !0), t.showPlaceholder ? ((0,
            i.uX)(),
            (0,
            i.Wv)(u, {
                key: 2
            })) : (0,
            i.Q3)("", !0), (0,
            i.Lk)("div", He, [(0,
            i.Lk)("div", {
                id: "js_fanyi_input",
                ref: "js_fanyi_input",
                class: (0,
                i.C4)(["mod-section input color_text_1", s.source.init.from, {
                    readOnly: t.showKeyword
                }]),
                onInput: e[3] || (e[3] = e=>t.inputChange(e)),
                onCompositionstart: e[4] || (e[4] = (...e)=>t.onCompositionStart && t.onCompositionStart(...e)),
                onCompositionend: e[5] || (e[5] = (...e)=>t.onCompositionEnd && t.onCompositionEnd(...e)),
                onKeydown: e[6] || (e[6] = (0,
                i.jR)((0,
                i.D$)((t=>n.inputEnterHandler(t)), ["stop"]), ["enter"])),
                onPaste: e[7] || (e[7] = t=>n.onSourcePasteHandler(t)),
                onCopy: e[8] || (e[8] = e=>t.onContenteditableAreaCopyHandler(e)),
                contenteditable: !t.showKeyword,
                spellcheck: n.inputSpellcheck,
                dir: t.sourceDir
            }, null, 42, Be)], 512), (0,
            i.Lk)("div", {
                class: "sourceAction",
                "disable-quci": "",
                ref: "sourceInsideActionbBar",
                style: (0,
                i.Tr)({
                    visibility: t.showPlaceholder ? "hidden" : "visible"
                })
            }, [(0,
            i.Lk)("div", Re, [(0,
            i.Lk)("div", De, [s.orignTargetAudio && s.showPlayVoice ? (0,
            i.bo)(((0,
            i.uX)(),
            (0,
            i.Wv)(c, {
                key: 0,
                class: "icon",
                url: s.orignTargetAudio,
                "data-tooltip": s.nums > 200 ? "仅支持前200字符的发音" : "",
                syncId: "source-text"
            }, null, 8, ["url", "data-tooltip"])), [[f, void 0, void 0, {
                "top-left": !0
            }]]) : (0,
            i.Q3)("", !0), s.showFormatPdfBtn && s.nums > 0 ? ((0,
            i.uX)(),
            (0,
            i.Wv)(d, {
                key: 1,
                ref: "formatPdfBtnRef",
                formatData: s.formatData,
                "onUpdate:formatData": e[9] || (e[9] = t=>s.formatData = t),
                keyword: s.source.init.keyword,
                "onUpdate:keyword": e[10] || (e[10] = t=>s.source.init.keyword = t),
                from: s.source.init.from,
                to: s.source.init.to,
                domain: s.domain,
                domainType: s.domainType,
                keepLastIndex: t.keepLastIndex,
                hideKeyword: t.hideKeyword
            }, null, 8, ["formatData", "keyword", "from", "to", "domain", "domainType", "keepLastIndex", "hideKeyword"])) : (0,
            i.Q3)("", !0), (0,
            i.bo)((0,
            i.Lk)("label", {
                class: (0,
                i.C4)(["checkbox", {
                    disabled: t.disableKeywordFunction
                }])
            }, [(0,
            i.bo)((0,
            i.Lk)("input", {
                id: "keywordswitch",
                class: "g-checkbox",
                type: "checkbox",
                "onUpdate:modelValue": e[11] || (e[11] = e=>t.showKeyword = e),
                disabled: t.disableKeywordFunction,
                onKeydown: e[12] || (e[12] = (...e)=>t.spaceForbidListener && t.spaceForbidListener(...e))
            }, null, 40, Ie), [[i.lH, t.showKeyword]]), Ne], 2), [[i.aG, t.supportKeywordFunction]]), s.showCopyText && s.sourceLanguageIsNotZH ? ((0,
            i.uX)(),
            (0,
            i.CE)("label", je, [(0,
            i.Lk)("a", {
                onClick: e[13] || (e[13] = (...e)=>t.goAiTabFromSource && t.goAiTabFromSource(...e)),
                class: "main-page-ai-btn"
            }, "AI润色")])) : (0,
            i.Q3)("", !0)]), s.nums > 0 ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", Xe, [(0,
            i.bo)((0,
            i.Lk)("div", {
                class: (0,
                i.C4)(["showNums", {
                    color_main_1_text: s.nums >= s.maxLimitnNumsForRed
                }])
            }, [(0,
            i.Lk)("span", null, (0,
            i.v_)(s.nums), 1), Ue, (0,
            i.Lk)("span", null, (0,
            i.v_)(s.maxLimitnNums), 1)], 2), [[i.aG, n.showWordsNumber && "selfInnovate" === s.domainType]]), (0,
            i.bo)((0,
            i.Lk)("div", {
                class: (0,
                i.C4)(["showNums", {
                    color_main_1_text: s.nums >= s.chatGptMaxLimitnNumsForRed
                }])
            }, [(0,
            i.Lk)("span", null, (0,
            i.v_)(s.nums), 1), Pe, (0,
            i.Lk)("span", null, (0,
            i.v_)(s.chatGptMaxLimitnNums), 1), (0,
            i.Lk)("div", {
                class: "tips-icon",
                onMouseenter: e[14] || (e[14] = t=>s.showNumsTips = !0),
                onMouseleave: e[15] || (e[15] = t=>s.showNumsTips = !1)
            }, null, 32), s.showNumsTips ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", Oe, [(0,
            i.Lk)("div", Ke, "「" + (0,
            i.v_)(t.domainLabel) + "」场景翻译功能内测中...", 1), $e])) : (0,
            i.Q3)("", !0)], 2), [[i.aG, n.showWordsNumber && "aigc" === s.domainType]])])) : (0,
            i.Q3)("", !0)])], 4)]), Me, (0,
            i.Lk)("div", Qe, [(0,
            i.Lk)("div", We, [(0,
            i.Lk)("div", Ze, [(0,
            i.bF)(h, {
                ref: "textTranslatedDomainSelector",
                type: "dialog",
                currentDomain: s.domain,
                useAllDomain: t.allowDomain,
                useType: s.domainUseType,
                isLogin: t.isLogin,
                onOnDomainChangeCallback: t.onDomainSelectorChangeCallback
            }, null, 8, ["currentDomain", "useAllDomain", "useType", "isLogin", "onOnDomainChangeCallback"])])]), (0,
            i.Lk)("div", qe, [s.isMaxLimitnNums ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", ze, Ve)) : s.data.result.isChatGptResult ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", Je, [(0,
            i.Lk)("p", Ye, [(0,
            i.Lk)("span", {
                class: "tgt color_text_1",
                onCompositionstart: e[16] || (e[16] = (...e)=>t.onCompositionStart && t.onCompositionStart(...e)),
                onCompositionend: e[17] || (e[17] = (...e)=>t.onCompositionEnd && t.onCompositionEnd(...e))
            }, (0,
            i.v_)(s.data.result.aigcResp), 33)])])) : ((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: 2
            }, [s.data.result.error_msg ? (0,
            i.Q3)("", !0) : ((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: 0
            }, [s.contenteditable ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                key: 0,
                id: "js_fanyi_output_resultOutput",
                ref: "resultOutput",
                class: (0,
                i.C4)(["resultOutput", s.source.init.to, {
                    "with-pjm": n.showPjm
                }]),
                contenteditable: "false",
                spellcheck: "false",
                onMouseenter: e[34] || (e[34] = (...e)=>t.removeAllHightlight && t.removeAllHightlight(...e)),
                onCopy: e[35] || (e[35] = e=>t.onContenteditableAreaCopyHandler(e)),
                dir: t.targetDir
            }, [s.showStepTrans ? ((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, {
                key: 0
            }, (0,
            i.pI)(s.data.result.translateResult, ((o,a)=>((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: "step-trans-container",
                key: a
            }, [((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(o, ((o,r)=>((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: r
            }, ["\n" !== o.tgt ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", eo, [s.data.result.type.indexOf("2ja") > -1 && o.jaTransPjm ? ((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: 0
            }, [(0,
            i.Lk)("p", {
                class: "tgt color_text_1 pjm-tgt step-trans",
                "data-section": a,
                "data-sentence": r
            }, [(0,
            i.Lk)("span", {
                class: "tgt color_text_1",
                "data-section": a,
                "data-sentence": r,
                "data-group": a + "-" + r,
                onMouseenter: e[18] || (e[18] = (...e)=>t.highlightHandler && t.highlightHandler(...e)),
                onMouseleave: e[19] || (e[19] = (...e)=>t.removeHightlightHandler && t.removeHightlightHandler(...e))
            }, [n.showPjm ? ((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, {
                key: 0
            }, (0,
            i.pI)(o.jaTransPjm, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)("span", {
                ref_for: !0,
                ref: "pjmWrap",
                class: (0,
                i.C4)(["pjm-wrap", {
                    "pjm-container": t.pjm
                }]),
                key: t.word + t.pjm + e
            }, [t.pjm ? ((0,
            i.uX)(),
            (0,
            i.CE)("strong", io, (0,
            i.v_)(t.pjm), 1)) : (0,
            i.Q3)("", !0), (0,
            i.Lk)("span", so, (0,
            i.v_)(t.word), 1)], 2)))), 128)) : ((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: 1
            }, [(0,
            i.eW)((0,
            i.v_)(o.tgt), 1)], 64))], 40, ao)], 8, oo), n.showRomanPronunciation && o.tgtPronounce ? ((0,
            i.uX)(),
            (0,
            i.CE)("strong", {
                key: 0,
                class: "tgtPronounce tgt color_text_4",
                "data-section": a,
                "data-sentence": r,
                "data-group": a + "-" + r
            }, (0,
            i.v_)(o.tgtPronounce), 9, no)) : (0,
            i.Q3)("", !0), (0,
            i.Lk)("p", {
                class: "pjm-src",
                dir: t.sourceDir
            }, [(0,
            i.Lk)("span", {
                class: "src color_text_2",
                "data-section": a,
                "data-sentence": r,
                "data-group": a + "-" + r,
                onMouseenter: e[20] || (e[20] = (...e)=>t.highlightHandler && t.highlightHandler(...e)),
                onMouseleave: e[21] || (e[21] = (...e)=>t.removeHightlightHandler && t.removeHightlightHandler(...e))
            }, (0,
            i.v_)(o.src), 41, lo)], 8, ro)], 64)) : ((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: 1
            }, [(0,
            i.Lk)("p", null, [(0,
            i.Lk)("span", {
                class: "tgt color_text_1",
                "data-section": a,
                "data-sentence": r,
                "data-group": a + "-" + r,
                onMouseenter: e[22] || (e[22] = (...e)=>t.highlightHandler && t.highlightHandler(...e)),
                onMouseleave: e[23] || (e[23] = (...e)=>t.removeHightlightHandler && t.removeHightlightHandler(...e))
            }, (0,
            i.v_)(o.tgt), 41, uo)]), (0,
            i.Lk)("p", {
                dir: t.sourceDir
            }, [(0,
            i.Lk)("span", {
                class: "src color_text_3",
                "data-section": a,
                "data-sentence": r,
                "data-group": a + "-" + r,
                onMouseenter: e[24] || (e[24] = (...e)=>t.highlightHandler && t.highlightHandler(...e)),
                onMouseleave: e[25] || (e[25] = (...e)=>t.removeHightlightHandler && t.removeHightlightHandler(...e))
            }, (0,
            i.v_)(o.src), 41, ho)], 8, co)], 64))])) : (0,
            i.Q3)("", !0)], 64)))), 128))])))), 128)) : ((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, {
                key: 1
            }, (0,
            i.pI)(s.data.result.translateResult, ((o,a)=>((0,
            i.uX)(),
            (0,
            i.CE)("p", {
                key: a,
                "data-section": a,
                class: (0,
                i.C4)(["tgt color_text_1 un-step-trans", {
                    "pjm-tgt": s.data.result.type.indexOf("2ja") > -1 && o[0].jaTransPjm
                }])
            }, [s.data.result.type.indexOf("2ja") > -1 && o[0].jaTransPjm ? ((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: 0
            }, [((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(o, ((s,r)=>((0,
            i.uX)(),
            (0,
            i.CE)("span", {
                class: "tgt color_text_1",
                "data-section": a,
                "data-sentence": r,
                "data-group": a + "-" + r,
                onClick: e=>t.singleTgtClickHandler(e, o, a, r),
                onInput: e=>t.singleTgtInputHandler(e, o, a, r),
                onCompositionstart: e[26] || (e[26] = (...e)=>t.onCompositionStart && t.onCompositionStart(...e)),
                onCompositionend: e[27] || (e[27] = (...e)=>t.onCompositionEnd && t.onCompositionEnd(...e)),
                onMouseenter: e[28] || (e[28] = (...e)=>t.highlightHandler && t.highlightHandler(...e)),
                onMouseleave: e[29] || (e[29] = (...e)=>t.removeHightlightHandler && t.removeHightlightHandler(...e)),
                key: a + "-" + r
            }, [n.showPjm ? ((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, {
                key: 0
            }, (0,
            i.pI)(s.jaTransPjm, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)("span", {
                ref_for: !0,
                ref: "pjmWrap",
                class: (0,
                i.C4)(["pjm-wrap", {
                    "pjm-container": t.pjm
                }]),
                key: t.word + t.pjm + e
            }, [t.pjm ? ((0,
            i.uX)(),
            (0,
            i.CE)("strong", po, (0,
            i.v_)(t.pjm), 1)) : (0,
            i.Q3)("", !0), (0,
            i.Lk)("span", {
                class: "pjm-bottom",
                "data-pjm_index": e
            }, (0,
            i.v_)(t.word || ""), 9, fo)], 2)))), 128)) : ((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: 1
            }, [(0,
            i.eW)((0,
            i.v_)(s.tgt), 1)], 64))], 40, go)))), 128)), n.showRomanPronunciation ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", Ao)) : (0,
            i.Q3)("", !0), ((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(o, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)(i.FK, {
                key: a + "-" + e
            }, [n.showRomanPronunciation && t.tgtPronounce ? ((0,
            i.uX)(),
            (0,
            i.CE)("strong", {
                key: 0,
                spellcheck: "false",
                class: "tgtPronounce tgt-pronounce color_text_4",
                "data-section": a,
                "data-sentence": e,
                "data-group": a + "-" + e
            }, (0,
            i.v_)(t.tgtPronounce), 9, yo)) : (0,
            i.Q3)("", !0)], 64)))), 128))], 64)) : ((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, {
                key: 1
            }, (0,
            i.pI)(o, ((s,n)=>((0,
            i.uX)(),
            (0,
            i.CE)("span", {
                class: "tgt color_text_1",
                "data-section": a,
                "data-sentence": n,
                "data-group": a + "-" + n,
                onClick: e=>t.singleTgtClickHandler(e, o, a, n),
                onInput: e=>t.singleTgtInputHandler(e, o, a, n),
                onCompositionstart: e[30] || (e[30] = (...e)=>t.onCompositionStart && t.onCompositionStart(...e)),
                onCompositionend: e[31] || (e[31] = (...e)=>t.onCompositionEnd && t.onCompositionEnd(...e)),
                onMouseenter: e[32] || (e[32] = (...e)=>t.highlightHandler && t.highlightHandler(...e)),
                onMouseleave: e[33] || (e[33] = (...e)=>t.removeHightlightHandler && t.removeHightlightHandler(...e)),
                key: a + "-" + n
            }, (0,
            i.v_)(s.tgt), 41, ko)))), 128))], 10, mo)))), 128))], 42, to)) : (0,
            i.Q3)("", !0), s.showCopyText && void 0 === s.data.result.isChatGptResult ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", vo, [wo, (0,
            i.Lk)("span", null, "· " + (0,
            i.v_)(t.domainLabel), 1)])) : (0,
            i.Q3)("", !0), t.transSuggestDialogVisible ? ((0,
            i.uX)(),
            (0,
            i.Wv)(m, {
                key: 2,
                relativeElement: t.transSuggestRelativeEl,
                transSuggestList: t.transSuggestList,
                onCloseDialog: t.closeTransSuggestDialog,
                onSelectSuggest: t.selectSuggestHandler
            }, null, 8, ["relativeElement", "transSuggestList", "onCloseDialog", "onSelectSuggest"])) : (0,
            i.Q3)("", !0)], 64)), s.loading && !s.data.result.error_msg ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", To, _o)) : (0,
            i.Q3)("", !0), s.data.result.error_msg ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", xo, [(0,
            i.Lk)("span", null, (0,
            i.v_)(s.data.result.error_msg), 1)])) : (0,
            i.Q3)("", !0)], 64))], 512), (0,
            i.Lk)("div", bo, [(0,
            i.Lk)("div", So, [(0,
            i.Lk)("div", Lo, [s.targetAudioUrl ? (0,
            i.bo)(((0,
            i.uX)(),
            (0,
            i.Wv)(c, {
                key: 0,
                class: "icon",
                url: s.targetAudioUrl,
                "data-tooltip": s.targetNums > 200 ? "仅支持前200字符的发音" : "",
                syncId: "target-text"
            }, null, 8, ["url", "data-tooltip"])), [[f, void 0, void 0, {
                "top-left": !0
            }]]) : (0,
            i.Q3)("", !0), s.showCopyText ? ((0,
            i.uX)(),
            (0,
            i.CE)("a", {
                key: 1,
                href: "javascript:;",
                class: "icon ic_translate_copy copy",
                onClick: e[36] || (e[36] = e=>t.copy()),
                title: "复制"
            })) : (0,
            i.Q3)("", !0), s.hasStepTrans ? ((0,
            i.uX)(),
            (0,
            i.CE)("label", Eo, [(0,
            i.bo)((0,
            i.Lk)("input", {
                type: "checkbox",
                class: "g-checkbox",
                "onUpdate:modelValue": e[37] || (e[37] = t=>s.showStepTrans = t),
                onClick: e[38] || (e[38] = (...e)=>t.showStepTransFun && t.showStepTransFun(...e))
            }, null, 512), [[i.lH, s.showStepTrans]]), Fo])) : (0,
            i.Q3)("", !0), s.showCopyText && s.transLanguageIsNotZH ? ((0,
            i.uX)(),
            (0,
            i.CE)("label", Ho, [(0,
            i.Lk)("a", {
                onClick: e[39] || (e[39] = (...e)=>t.goAiTabFromTrans && t.goAiTabFromTrans(...e)),
                class: "main-page-ai-btn"
            }, "AI润色")])) : (0,
            i.Q3)("", !0), s.showFeedbackButton ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", Bo, [(0,
            i.Lk)("span", {
                class: (0,
                i.C4)(["feedback_ico like_ico", {
                    selected: "like" === s.isSelect,
                    select_active: "dislike" === s.isSelect
                }]),
                onMouseenter: e[40] || (e[40] = t=>s.isHover_left = !0),
                onMouseleave: e[41] || (e[41] = t=>s.isHover_left = !1),
                onClick: e[42] || (e[42] = t=>n.handleButton("like"))
            }, ["like" === s.isSelect ? ((0,
            i.uX)(),
            (0,
            i.CE)("img", Ro)) : "dislike" === s.isSelect ? ((0,
            i.uX)(),
            (0,
            i.CE)("img", Do)) : ((0,
            i.uX)(),
            (0,
            i.CE)("img", Io)), s.isHover_left ? ((0,
            i.uX)(),
            (0,
            i.CE)("span", No, [(0,
            i.eW)((0,
            i.v_)(n.likeTxt) + " ", 1), jo])) : (0,
            i.Q3)("", !0)], 34), (0,
            i.Lk)("span", {
                class: (0,
                i.C4)(["feedback_ico", {
                    selected: "dislike" === s.isSelect,
                    select_active: "like" === s.isSelect
                }]),
                onMouseenter: e[43] || (e[43] = t=>s.isHover = !0),
                onMouseleave: e[44] || (e[44] = t=>s.isHover = !1),
                onClick: e[45] || (e[45] = t=>n.handleButton("dislike"))
            }, ["dislike" === s.isSelect ? ((0,
            i.uX)(),
            (0,
            i.CE)("img", Xo)) : "like" === s.isSelect ? ((0,
            i.uX)(),
            (0,
            i.CE)("img", Uo)) : ((0,
            i.uX)(),
            (0,
            i.CE)("img", Po)), s.isHover ? ((0,
            i.uX)(),
            (0,
            i.CE)("span", Oo, [(0,
            i.eW)((0,
            i.v_)(n.dislikeTxt) + " ", 1), Ko])) : (0,
            i.Q3)("", !0)], 34)])) : (0,
            i.Q3)("", !0)]), $o])])], 512), (0,
            i.Lk)("div", {
                class: "fixedBottomActionBar-border-box",
                ref: "fixedBottomActionBar",
                style: (0,
                i.Tr)({
                    visibility: s.showFixBottomAction ? "visible" : "hidden",
                    width: s.fixBottomActionWidth + "px",
                    left: s.fixBottomActionLeft + "px"
                })
            }, [(0,
            i.Lk)("div", Mo, [(0,
            i.Lk)("div", Qo, [(0,
            i.Lk)("div", Wo, [(0,
            i.Lk)("div", Zo, [(0,
            i.Lk)("div", qo, [s.orignTargetAudio && s.showPlayVoice ? (0,
            i.bo)(((0,
            i.uX)(),
            (0,
            i.Wv)(c, {
                key: 0,
                class: "icon",
                url: s.orignTargetAudio,
                "data-tooltip": s.nums > 200 ? "仅支持前200字符的发音" : "",
                syncId: "source-text"
            }, null, 8, ["url", "data-tooltip"])), [[f, void 0, void 0, {
                "top-left": !0
            }]]) : (0,
            i.Q3)("", !0), s.showFormatPdfBtn && s.nums > 0 ? ((0,
            i.uX)(),
            (0,
            i.Wv)(d, {
                key: 1,
                ref: "formatPdfBtnRef",
                formatData: s.formatData,
                "onUpdate:formatData": e[46] || (e[46] = t=>s.formatData = t),
                keyword: s.source.init.keyword,
                "onUpdate:keyword": e[47] || (e[47] = t=>s.source.init.keyword = t),
                from: s.source.init.from,
                to: s.source.init.to,
                domain: s.domain,
                domainType: s.domainType,
                keepLastIndex: t.keepLastIndex,
                hideKeyword: t.hideKeyword
            }, null, 8, ["formatData", "keyword", "from", "to", "domain", "domainType", "keepLastIndex", "hideKeyword"])) : (0,
            i.Q3)("", !0), (0,
            i.bo)((0,
            i.Lk)("label", zo, [(0,
            i.bo)((0,
            i.Lk)("input", {
                id: "keywordswitch",
                class: "g-checkbox",
                type: "checkbox",
                "onUpdate:modelValue": e[48] || (e[48] = e=>t.showKeyword = e),
                onKeydown: e[49] || (e[49] = (...e)=>t.spaceForbidListener && t.spaceForbidListener(...e))
            }, null, 544), [[i.lH, t.showKeyword]]), Go], 512), [[i.aG, t.supportKeywordFunction]]), s.showCopyText && s.sourceLanguageIsNotZH ? ((0,
            i.uX)(),
            (0,
            i.CE)("label", Vo, [(0,
            i.Lk)("a", {
                onClick: e[50] || (e[50] = (...e)=>t.goAiTabFromSource && t.goAiTabFromSource(...e)),
                class: "main-page-ai-btn"
            }, "AI润色")])) : (0,
            i.Q3)("", !0)]), s.nums > 0 ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", Jo, [(0,
            i.bo)((0,
            i.Lk)("div", {
                class: (0,
                i.C4)(["showNums", {
                    color_main_1_text: s.nums >= s.maxLimitnNumsForRed
                }])
            }, [(0,
            i.Lk)("span", null, (0,
            i.v_)(s.nums), 1), Yo, (0,
            i.Lk)("span", null, (0,
            i.v_)(s.maxLimitnNums), 1)], 2), [[i.aG, n.showWordsNumber && "selfInnovate" === s.domainType]]), (0,
            i.bo)((0,
            i.Lk)("div", {
                class: (0,
                i.C4)(["showNums", {
                    color_main_1_text: s.nums >= s.chatGptMaxLimitnNumsForRed
                }])
            }, [(0,
            i.Lk)("span", null, (0,
            i.v_)(s.nums), 1), ta, (0,
            i.Lk)("span", null, (0,
            i.v_)(s.chatGptMaxLimitnNums), 1), (0,
            i.Lk)("div", {
                class: "tips-icon",
                onMouseenter: e[51] || (e[51] = t=>s.showNumsTips = !0),
                onMouseleave: e[52] || (e[52] = t=>s.showNumsTips = !1)
            }, null, 32), s.showNumsTips ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", ea, [(0,
            i.Lk)("div", oa, " 「" + (0,
            i.v_)(t.domainLabel) + "」场景翻译功能内测中... ", 1), aa])) : (0,
            i.Q3)("", !0)], 2), [[i.aG, n.showWordsNumber && "aigc" === s.domainType]])])) : (0,
            i.Q3)("", !0)])])]), (0,
            i.Lk)("div", ia, [(0,
            i.Lk)("div", sa, [(0,
            i.Lk)("div", na, [(0,
            i.Lk)("div", ra, [s.targetAudioUrl ? (0,
            i.bo)(((0,
            i.uX)(),
            (0,
            i.Wv)(c, {
                key: 0,
                class: "icon",
                url: s.targetAudioUrl,
                "data-tooltip": s.targetNums > 200 ? "仅支持前200字符的发音" : "",
                syncId: "target-text"
            }, null, 8, ["url", "data-tooltip"])), [[f, void 0, void 0, {
                "top-left": !0
            }]]) : (0,
            i.Q3)("", !0), s.showCopyText ? ((0,
            i.uX)(),
            (0,
            i.CE)("a", {
                key: 1,
                href: "javascript:;",
                class: "icon ic_translate_copy copy",
                onClick: e[53] || (e[53] = e=>t.copy()),
                title: "复制"
            })) : (0,
            i.Q3)("", !0), s.hasStepTrans ? ((0,
            i.uX)(),
            (0,
            i.CE)("label", la, [(0,
            i.bo)((0,
            i.Lk)("input", {
                type: "checkbox",
                class: "g-checkbox",
                "onUpdate:modelValue": e[54] || (e[54] = t=>s.showStepTrans = t),
                onClick: e[55] || (e[55] = (...e)=>t.showStepTransFun && t.showStepTransFun(...e))
            }, null, 512), [[i.lH, s.showStepTrans]]), ua])) : (0,
            i.Q3)("", !0), s.showCopyText && s.transLanguageIsNotZH ? ((0,
            i.uX)(),
            (0,
            i.CE)("label", ca, [(0,
            i.Lk)("a", {
                onClick: e[56] || (e[56] = (...e)=>t.goAiTabFromTrans && t.goAiTabFromTrans(...e)),
                class: "main-page-ai-btn"
            }, "AI润色")])) : (0,
            i.Q3)("", !0), s.showFeedbackButton ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", da, [(0,
            i.Lk)("span", {
                class: (0,
                i.C4)(["feedback_ico like_ico", {
                    selected: "like" === s.isSelect,
                    select_active: "dislike" === s.isSelect
                }]),
                onMouseenter: e[57] || (e[57] = t=>s.isHover_left = !0),
                onMouseleave: e[58] || (e[58] = t=>s.isHover_left = !1),
                onClick: e[59] || (e[59] = t=>n.handleButton("like"))
            }, ["like" === s.isSelect ? ((0,
            i.uX)(),
            (0,
            i.CE)("img", ha)) : "dislike" === s.isSelect ? ((0,
            i.uX)(),
            (0,
            i.CE)("img", ma)) : ((0,
            i.uX)(),
            (0,
            i.CE)("img", ga)), s.isHover_left ? ((0,
            i.uX)(),
            (0,
            i.CE)("span", pa, [(0,
            i.eW)((0,
            i.v_)(n.likeTxt) + " ", 1), fa])) : (0,
            i.Q3)("", !0)], 34), (0,
            i.Lk)("span", {
                class: (0,
                i.C4)(["feedback_ico", {
                    selected: "dislike" === s.isSelect,
                    select_active: "like" === s.isSelect
                }]),
                onMouseenter: e[60] || (e[60] = t=>s.isHover = !0),
                onMouseleave: e[61] || (e[61] = t=>s.isHover = !1),
                onClick: e[62] || (e[62] = t=>n.handleButton("dislike"))
            }, ["dislike" === s.isSelect ? ((0,
            i.uX)(),
            (0,
            i.CE)("img", Aa)) : "like" === s.isSelect ? ((0,
            i.uX)(),
            (0,
            i.CE)("img", ya)) : ((0,
            i.uX)(),
            (0,
            i.CE)("img", ka)), s.isHover ? ((0,
            i.uX)(),
            (0,
            i.CE)("span", va, [(0,
            i.eW)((0,
            i.v_)(n.dislikeTxt) + " ", 1), wa])) : (0,
            i.Q3)("", !0)], 34)])) : (0,
            i.Q3)("", !0)]), Ta])])])])], 4)], 2), (0,
            i.bF)(p, {
                width: "454px",
                height: s.dialogSize,
                top: "50%",
                left: "50%",
                isCenter: !0,
                "dialog-visible": s.isShow,
                onCloseDialog: n.closeDialogHandler
            }, {
                default: (0,
                i.k6)((()=>[(0,
                i.bF)(g, {
                    result: n.submitResult,
                    dialogVis: s.isShow,
                    onCloseDialog: n.closeDialogHandler,
                    onBigSize: n.changeSize,
                    onUnSubmit: n.changeSelect
                }, null, 8, ["result", "dialogVis", "onCloseDialog", "onBigSize", "onUnSubmit"])])),
                _: 1
            }, 8, ["height", "dialog-visible", "onCloseDialog"])], 2)
        }
        window.decrypt = o(34917).A;
        var _a = o(34917)
          , xa = o(25507)
          , ba = o(91250);
        function Sa(t, e) {
            La({
                data: t.data,
                success: function(e) {
                    !0;
                    var o = !1
                      , a = !1;
                    e.data && (e.data.isDog = o,
                    e.data.isCat = a),
                    e.type = "net",
                    e.data,
                    t.success(e)
                },
                fail: t.fail
            })
        }
        async function La(t) {
            var e = t=>t ? function(e) {
                t({
                    data: e || {},
                    code: 1e3,
                    from: "net"
                })
            }
            : null;
            const o = xa.A.state.text.secretKey;
            var a = t.data.domain ? {
                domain: t.data.domain
            } : {};
            await xa.A.dispatch("fetchTextTranslateSecretKey"),
            _a.A.getTextTranslateResult((0,
            p.A)((0,
            p.A)({
                i: t.data.keyword,
                from: t.data.from,
                to: t.data.to,
                useTerm: t.data.useTerm
            }, a), {}, {
                dictResult: !0,
                keyid: "webfanyi"
            }), o).then((o=>{
                _a.A.cancelLastGpt();
                const a = _a.A.decodeData(o, xa.A.state.text.decodeKey, xa.A.state.text.decodeIv)
                  , i = a ? JSON.parse(a) : {};
                0 === i.code ? t.success && e(t.success)(i) : t.fail && e(t.fail)(i)
            }
            )).catch((o=>{
                t.fail && e(t.fail)({
                    online: !1
                })
            }
            ))
        }
        function Ea(t, e) {
            Fa({
                data: t.data,
                success: function(e) {
                    !0,
                    t.success(e)
                },
                fail: t.fail
            })
        }
        function Fa(t) {
            var e = t=>t ? function(e) {
                t({
                    data: e || {},
                    code: 1e3,
                    from: "net"
                })
            }
            : null;
            const o = "8XdqRK6tvAQAtRB349Wdmkzxr2A5fqDJ";
            _a.A.getAigcTran((0,
            p.A)((0,
            p.A)({}, t.data), {}, {
                keyid: "minor-search-server"
            }), o).then((o=>{
                0 === o.code ? t.success && e(t.success)(o) : t.fail && e(t.fail)(o)
            }
            )).catch((o=>{
                ba.A.isCancel(o) ? console.log("Request canceled", o.message) : t.fail && e(t.fail)({
                    online: !1,
                    data: {}
                })
            }
            ))
        }
        var Ha = {
            audio: ["en", "zh", "ja"]
        }
          , Ba = o(3745);
        function Ra(t) {
            var e, o = t.data || {}, a = !0;
            switch ((!o.translateResult || o.translateResult && o.translateResult[0] && o.translateResult[0][0] && !o.translateResult[0][0]["tgt"]) && (a = !1),
            o.originTranslateResult = o.translateResult ? JSON.parse(JSON.stringify(o.translateResult)) : [],
            "unsupported" == o.type && (e = "对不起，我不认识你的语言，请在左上方选择语言后再让我翻译"),
            o.code) {
            case 2:
                e = "对不起，请重试";
                break;
            case 10:
            case 20:
                e = "对不起，实在太长啦，让我喘口气";
                break;
            case 30:
                e = "对不起，我绞尽脑汁了";
                break;
            case 40:
                e = "对不起，我正在学习该语种中";
                break;
            case 50:
                e = "网络验证失败，请稍后重试";
                break
            }
            return a || (o.isDog && 0 != o.online && (e = "你输入太过频繁，请先休息一会儿！"),
            o.isCat && 0 != o.online && (e = "您的网络暂时不可用或受限，请检查您的网络设置"),
            0 == o.online && (e = "当前网络不可用，请检查您的网络状态")),
            e ? ((0,
            Ba.A)(e),
            {
                error_code: o.code,
                error_msg: e,
                online: o.online
            }) : (o.isHasResult = a,
            o)
        }
        function Da(t) {
            var e, o = t.data.data, a = !0;
            switch (null !== o && void 0 !== o && o.aigcResp || !1,
            t.data.code) {
            case 3002:
                e = t.data.msg;
                break;
            case 3004:
                e = "对不起，我正在学习该语种中";
            case void 0:
                e = "对不起，我正在学习该语种中"
            }
            return e ? {
                error_code: t.data.code,
                error_msg: e
            } : (o.isChatGptResult = a,
            o)
        }
        var Ia = o(62512)
          , Na = {
            getStringNum: function(t) {
                for (var e = 0, o = 0; o < (t + "").length; o++) {
                    var a = t.charCodeAt(o);
                    a >= 1 && a <= 126 || 65376 <= a && a <= 65439 ? e++ : e += 2
                }
                return e
            },
            isChinese: function(t, e=100) {
                var o = this.getStringNum(i(t))
                  , a = 3 * this.chineseLength(t);
                function i(t) {
                    var e = t.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\d]/g, "");
                    return e
                }
                return a / o * 100 >= e
            },
            chineseLength: function(t) {
                var e = 0
                  , o = /[\u4E00-\u9FA5]/g
                  , a = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
                return t && (o.test(t) && (e = t.match(o).length),
                a.test(t) && (e += t.match(a).length)),
                e
            }
        };
        o(18433);
        const ja = "deskdict.main"
          , Xa = "text_translate_string";
        function Ua(t, e) {
            const o = document.createEvent("HTMLEvents");
            o.initEvent(e, !0, !0),
            t.dispatchEvent(o)
        }
        function Pa(t) {
            t.target.composing = !0,
            this.composing = !0
        }
        function Oa(t) {
            t.target.composing && (t.target.composing = !1,
            Ua(t.target, "input"),
            this.composing = !1)
        }
        function Ka(t) {
            if (window._rlog.push(["_trackCustom", "event", [["action", "text_translation_input"], ["source", "input"]]]),
            !t.target.composing) {
                var e = this
                  , o = t.target
                  , a = o.innerText;
                "" == a.trim() && (a = o.textContent);
                var i = $a(a, e.maxLimitnNums);
                e.source.init = Object.assign({}, e.source.init, {
                    keyword: i
                }),
                console.log("输入输入啦:", this.$refs.formatPdfBtnRef),
                "" !== a.trim() && i !== a && this.$refs.formatPdfBtnRef && this.$refs.formatPdfBtnRef.refreshFormatPdfText(),
                a.length >= this.maxLimitnNums && (o.innerText = i,
                this.keepLastIndex())
            }
        }
        function $a(t, e) {
            return t.trim().substring(0, e)
        }
        function Ma(t) {
            var e = this;
            e.source.init.from == t.lanFrom && e.source.init.to == t.lanTo || (e.source.init = Object.assign({}, e.source.init, {
                from: t.lanFrom,
                to: t.lanTo
            }),
            e.search({
                needAddHistroy: !0,
                from: "changeTrans",
                needSendLog: !0
            }))
        }
        function Qa(t={}) {
            var e = this
              , o = t.keyword
              , a = t.srcLang
              , i = t.dstLang
              , s = t.from
              , n = t.domain || "";
            if ("auto" !== a && !i) {
                var r = "ja" == a ? 80 : 30
                  , l = a;
                Na.isChinese(o, r) ? (a = "zh-CHS",
                i = l) : (a = l,
                i = "zh-CHS")
            }
            e.hideKeyword(),
            e.needRealTimeSearch_flag = !1,
            e.source.init = Object.assign({}, e.source.init, {
                keyword: o,
                from: a,
                to: i
            }),
            n && "" !== n.trim() && (this.domain = n),
            e.$nextTick((()=>{
                e.$refs.js_fanyi_input.innerText = o,
                e.keepLastIndex()
            }
            )),
            e._onTransLangChanged({
                lanFrom: a,
                lanTo: i
            }),
            e.search({
                needAddHistroy: !0,
                from: s,
                needSendLog: !!s
            })
        }
        function Wa() {
            this.search({
                needAddHistroy: !0,
                from: "click",
                needSendLog: !0
            })
        }
        var Za = 0
          , qa = null
          , za = null
          , Ga = null;
        function Va(t={
            needAddHistroy: !1,
            from: "realtime",
            needSendLog: !0
        }) {
            var e = this
              , o = {
                needAddHistroy: t.needAddHistroy
            }
              , a = (new Date).getTime()
              , i = e.source.init.keyword.trim()
              , s = "selfInnovate"
              , n = "";
            if (this.$store.state.domain.textTransDomainMap.forEach((t=>{
                t.str === e.domain && (s = "aigc" === t.from ? "aigc" : "selfInnovate",
                n = t.msg)
            }
            )),
            i)
                if (e.contenteditable = !1,
                e.closeTransSuggestDialog(),
                window.globalStopAudio(),
                e.showClear = !0,
                e.nums = i.length,
                i.length > e.maxLimitnNums)
                    e.$toast({
                        text: `超过${e.maxLimitnNums}字的翻译请使用文档翻译`,
                        time: 1.5,
                        type: "warn"
                    });
                else {
                    if (yi(i)) {
                        let t = encodeURIComponent(i);
                        const e = "https://fanyi.youdao.com/trans/#/home";
                        window.open(`${e}?keyfrom=fanyiweb&url=${t}&type=undefined`)
                    } else if (ki(i)) {
                        let t = encodeURIComponent(i);
                        window.open("http://fanyi.youdao.com/WebpageTranslate?keyfrom=fanyiweb&url=" + t + "&type=undefined")
                    }
                    var r = !1;
                    e.loading = !1,
                    Ga && clearTimeout(Ga),
                    Ga = setTimeout((function() {
                        r || (e.loading = !0,
                        e.resetWithoutSuccessResult())
                    }
                    ), 1e3);
                    var l = e.allowDomain ? {
                        domain: e.domain
                    } : {};
                    "selfInnovate" === s || !e.allowDomain && "auto" !== e.source.init.from ? (o.data = (0,
                    p.A)({
                        keyword: e.source.init.keyword,
                        from: e.source.init.from || "auto",
                        to: e.source.init.to || "",
                        useTerm: e.useTerm,
                        keyfrom: ja
                    }, l),
                    o.success = function(i) {
                        e.updateDictResult(i);
                        var s = Ra(i);
                        if (e.data.result = s,
                        "mac" === e.platfrom && "local" === i.type || (r = !0,
                        e.loading = !1,
                        Ga && clearTimeout(Ga)),
                        s.isHasResult && (e.showFeedbackButton = !0,
                        e.contenteditable = "plaintext-only"),
                        "auto" == e.source.init.from && !e.source.init.to && i.data.type) {
                            var l = i.data.type;
                            if (l.indexOf("2") > 0) {
                                var u = l.indexOf("2")
                                  , c = l.substring(0, u)
                                  , d = l.substring(u + 1);
                                qa = c,
                                za = d
                            }
                        }
                        e.ENandZH();
                        var h = e.data.result.translateResult || []
                          , m = "";
                        h.forEach((function(t, o) {
                            Li(t) && t.length > 0 ? (t.forEach((function(t) {
                                m += t.tgt
                            }
                            )),
                            e.hasStepTrans = !0) : (m += t,
                            e.hasStepTrans = !1)
                        }
                        )),
                        e.targetNums = m.length,
                        e.showPlayVoice = !0,
                        e.showFormatPdfBtn = !0,
                        e.$nextTick((function() {
                            if (e.resetModifiedContent(),
                            m ? ("auto" == e.source.init.from && !e.source.init.to && za ? e.targetAudioUrl = e.updateAudio(za, m) : e.targetAudioUrl = e.updateAudio(e.source.init.to || e.source.init.from, m),
                            e.showCopyText = !0) : (e.hasStepTrans = !1,
                            e.showCopyText = !1,
                            e.orignTargetAudio = "",
                            e.targetAudioUrl = null),
                            e.source.init.keyword) {
                                let t = e.source.init.keyword;
                                "auto" == e.source.init.from && !e.source.init.to && qa ? e.orignTargetAudio = e.updateAudio(qa, t) : e.orignTargetAudio = e.updateAudio(e.source.init.from || e.source.init.to, t)
                            } else
                                e.orignTargetAudio = null;
                            if (e.data.result.translateResult) {
                                e.sourceHightLightHtml = e.genSourceHightLightHtml(e.data.result.translateResult),
                                e.hasHighlighted = !1;
                                const t = document.createElement("div");
                                t.innerHTML = e.sourceHightLightHtml;
                                const o = t.getElementsByTagName("span");
                                let a = "";
                                a = o.length >= 2 ? o[0].innerHTML + o[1].innerHTML : 1 === o.length ? o[0].innerHTML : "",
                                this.$store.commit("FIRSTTWOORIGINTEXT", a),
                                this.$store.commit("HOMEORIGINTEXT", e.source.init.keyword)
                            }
                            e.fetchKeyword(e.source.init.keyword)
                        }
                        )),
                        o.needAddHistroy,
                        window.ydk && window.ydk.rlog({
                            timing: "trans_load",
                            keyfrom: ja,
                            q: e.source.init.keyword,
                            duration: (new Date).getTime() - a,
                            type: "success",
                            from: i.type || i.from
                        }),
                        t.needSendLog && window._rlog.push(["_trackCustom", "event", [["show", "text_translation_result"], ["type", t.from], ["setting", n], ["from", e.source.init.from || "auto"], ["to", e.source.init.to || ""]]])
                    }
                    ,
                    o.fail = function(t) {
                        var o = Ra(t);
                        e.data.result = o,
                        r = !0,
                        e.loading = !1,
                        Ga && clearTimeout(Ga),
                        e.showClear = !0,
                        e.resetWithoutSuccessResult(),
                        window.ydk && window.ydk.rlog({
                            timing: "trans_load",
                            keyfrom: ja,
                            q: e.source.init.keyword,
                            duration: (new Date).getTime() - a,
                            type: "error"
                        })
                    }
                    ,
                    Sa(o, e)) : (o.data = {
                        query: e.source.init.keyword.substr(0, 500),
                        style: n
                    },
                    "auto" === e.source.init.from ? o.data.lang = "auto" : o.data.lang = "en" === e.source.init.to ? "英语" : "zh-CHS" === e.source.init.to ? "中文" : e.source.init.to,
                    o.success = function(o) {
                        e.updateDictResult(o);
                        var a = Da(o);
                        if (e.data.result = a,
                        "mac" === e.platfrom && "local" === o.type || (r = !0,
                        e.loading = !1,
                        Ga && clearTimeout(Ga)),
                        e.targetNums = a.aigcResp.length,
                        e.showPlayVoice = !0,
                        e.showFormatPdfBtn = !0,
                        "auto" == e.source.init.from && !e.source.init.to && o.data.type) {
                            var i = o.data.type;
                            if (i.indexOf("2") > 0) {
                                var s = i.indexOf("2")
                                  , l = i.substring(0, s)
                                  , u = i.substring(s + 1);
                                qa = l,
                                za = u
                            }
                        }
                        e.$nextTick((function() {
                            if (e.resetModifiedContent(),
                            a.aigcResp ? ("auto" == e.source.init.from && !e.source.init.to && za ? e.targetAudioUrl = e.updateAudio(za, a.aigcResp) : e.targetAudioUrl = e.updateAudio(e.source.init.to || e.source.init.from, a.aigcResp),
                            e.showCopyText = !0,
                            e.showFeedbackButton = !0) : (e.hasStepTrans = !1,
                            e.showCopyText = !1,
                            e.orignTargetAudio = "",
                            e.targetAudioUrl = null),
                            e.source.init.keyword) {
                                let t = e.source.init.keyword;
                                "auto" == e.source.init.from && !e.source.init.to && qa ? e.orignTargetAudio = e.updateAudio(qa, t) : e.orignTargetAudio = e.updateAudio(e.source.init.from || e.source.init.to, t)
                            } else
                                e.orignTargetAudio = null
                        }
                        )),
                        t.needSendLog && window._rlog.push(["_trackCustom", "event", [["show", "text_translation_result"], ["type", t.from], ["setting", n], ["from", e.source.init.from || "auto"], ["to", e.source.init.to || ""]]])
                    }
                    ,
                    o.fail = function(t) {
                        var o = Da(t);
                        e.data.result = o,
                        r = !0,
                        e.loading = !1,
                        Ga && clearTimeout(Ga),
                        e.showClear = !0,
                        e.resetWithoutSuccessResult()
                    }
                    ,
                    Ea(o, e)),
                    t.needSendLog && window.ydk && window.ydk.rlog({
                        action: "trans_query",
                        from: t.from,
                        style: e.direction,
                        type: e.source.init.from + "2" + e.source.init.to,
                        q: e.source.init.keyword.length
                    })
                }
            else
                e.clear(!1)
        }
        function Ja(t) {
            t && t.data && t.data.dictResult ? this.$store.dispatch("setDictResult", t.data.dictResult) : this.$store.dispatch("setDictResult", {})
        }
        function Ya() {
            this.modified_tgt = "",
            this.modified_data = ""
        }
        function ti(t) {
            var e = this;
            if (e.data.result.type && e.data.result.type.indexOf("2ja") > -1) {
                var o = /<(strong)(?=[\s>])[\w\W]*?<\/\1\s*>/gi
                  , a = /<[^>]+>/gi;
                if (!document.getElementById("js_fanyi_output_resultOutput"))
                    return;
                var i = document.getElementById("js_fanyi_output_resultOutput").outerHTML;
                let t = i.replace(o, "")
                  , s = t.replace(a, "");
                e.modified_tgt = e.modified_data = s.split("\r\n")
            } else {
                let t = e.$refs.resultOutput;
                e.modified_tgt = t.innerText,
                e.modified_data = e.$refs.resultOutput ? e.$refs.resultOutput.textContent.trim() : ""
            }
        }
        function ei(t) {
            var e = "";
            return t.forEach(((t,o)=>{
                t.forEach(((t,a)=>{
                    t["src"] = t["src"].replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                    e += `<span class='src' data-group='${o}-${a}'>${t["src"]}</span>`
                }
                ))
            }
            )),
            e
        }
        function oi() {
            return /Firefox/.test(navigator.userAgent)
        }
        function ai(t) {
            var e = this;
            if (setTimeout((()=>{
                var o = t.target
                  , a = o.innerText;
                "" == a.trim() && (a = o.textContent,
                this.$store.commit("ISPASTE_ORIGIN_TEXT", !1));
                var i = $a(a, e.maxLimitnNums);
                i.length > 80 ? this.$store.commit("ISPASTE_ORIGIN_TEXT", !0) : this.$store.commit("ISPASTE_ORIGIN_TEXT", !1)
            }
            ), 500),
            oi()) {
                t.preventDefault();
                var o = (t.originalEvent || t).clipboardData
                  , a = o.getData("text/plain") || "";
                "" !== a && (a = a.replace(/(\r\n|\r|\n)/g, "\n"),
                document.execCommand("insertText", !1, a))
            }
        }
        function ii(t) {
            var e = this.$refs.js_fanyi_input
              , o = this.$refs.js_fanyi_output
              , a = t.target;
            this.showKeyword || this.hasHighlighted || (this.insertHighLightHtmlToSource(),
            this.hasHighlighted = !0);
            var i = a.getAttribute("data-group");
            if (i) {
                var s = o.querySelectorAll('.tgt[data-group="' + i + '"]');
                this._addDomsClassByClassname(s, "highlight");
                var n = o.querySelectorAll('.src[data-group="' + i + '"]');
                this._addDomsClassByClassname(n, "highlight");
                var r = o.querySelectorAll('.tgtPronounce[data-group="' + i + '"]');
                this._addDomsClassByClassname(r, "highlight");
                var l = e.querySelectorAll('.src[data-group="' + i + '"]');
                this._addDomsClassByClassname(l, "highlight"),
                this.checkTransSuggestTip(t)
            }
        }
        function si(t) {
            var e = this.$refs.js_fanyi_input
              , o = this.$refs.js_fanyi_output
              , a = t.target
              , i = a.getAttribute("data-group");
            if (i) {
                var s = o.querySelectorAll('.tgt[data-group="' + i + '"]');
                this._removeDomsClassByClassname(s, "highlight");
                var n = o.querySelectorAll('.src[data-group="' + i + '"]');
                this._removeDomsClassByClassname(n, "highlight");
                var r = o.querySelectorAll('.tgtPronounce[data-group="' + i + '"]');
                this._removeDomsClassByClassname(r, "highlight");
                var l = e.querySelectorAll('.src[data-group="' + i + '"]');
                this._removeDomsClassByClassname(l, "highlight"),
                this.checkTransSuggestTip(t, !0)
            }
        }
        function ni() {
            const t = this.$refs.js_fanyi_input
              , e = this.$refs.js_fanyi_output
              , o = t.querySelectorAll(".highlight")
              , a = e.querySelectorAll(".highlight");
            this._removeDomsClassByClassname(o, "highlight"),
            this._removeDomsClassByClassname(a, "highlight")
        }
        function ri(t, e) {
            for (let o of t)
                o.classList.remove(e)
        }
        function li(t, e) {
            for (let o of t)
                o.classList.contains(e) || o.classList.add(e)
        }
        function ui() {
            var t = this.$refs.js_fanyi_input;
            t.innerHTML = this.sourceHightLightHtml,
            t.blur()
        }
        function ci() {
            var t = window.getSelection()
              , e = t.getRangeAt(0);
            Za = e.startOffset,
            e.startContainer
        }
        function di() {
            var t = this.$refs.js_fanyi_input;
            t.focus();
            var e = window.getSelection()
              , o = e.getRangeAt(0);
            o.setStart(o.startContainer, Za),
            o.collapse(!0)
        }
        function hi() {
            var t = this
              , e = t.data.result.translateResult || []
              , o = []
              , a = "selfInnovate";
            if (this.$store.state.domain.textTransDomainMap.forEach((e=>{
                e.str === t.domain && (a = "aigc" === e.from ? "aigc" : "selfInnovate")
            }
            )),
            "selfInnovate" === a)
                this.showStepTrans ? e.forEach((function(t) {
                    Li(t) && t.forEach((function(t) {
                        "\n" !== t.tgt && (o.push(t.tgt.trim() + "\n"),
                        o.push(t.src.trim() + "\n\n"))
                    }
                    ))
                }
                )) : e.forEach((function(t) {
                    Li(t) && t.forEach((function(t) {
                        o.push(t.tgt)
                    }
                    ))
                }
                )),
                t.modified_data && t.modified_data != o.join("") && (o = [],
                o.push(t.modified_data)),
                window.Clipboard.copy(o.join(""), (t=>{
                    t ? this.$toast("复制成功") : this.$toast("复制失败")
                }
                ));
            else {
                let e = t.data.result.aigcResp;
                window.Clipboard.copy(e, (t=>{
                    t ? this.$toast("复制成功") : this.$toast("复制失败")
                }
                ))
            }
            window.ydk && window.ydk.rlog({
                action: "trans_copy_click",
                keyfrom: ja
            })
        }
        var mi = "en";
        function gi(t, e) {
            "zh-CHS" != t && "zh-CHT" != t || (t = "zh"),
            mi = t;
            var o = null;
            if (Ha.audio.indexOf(t) > -1) {
                var a = this.genDictvoiceValidLength(e);
                o = "https://dict.youdao.com/dictvoice?audio=" + encodeURIComponent(a) + "&le=" + t
            }
            return o
        }
        function pi(t) {
            if (t && !(t.length < 1)) {
                var e = t;
                "object" == typeof t && (e = t[0]);
                var o = 200;
                return "pc" === this.platform && (o = 600),
                e.trim().substring(0, o)
            }
        }
        function fi(t) {
            window.ydk && window.ydk.rlog({
                action: "trans_voice_query",
                keyfrom: ja,
                le: mi,
                type: t
            })
        }
        function Ai() {
            var t = "off";
            this.showStepTrans = !this.showStepTrans,
            t = this.showStepTrans ? "on" : "off",
            this.resetModifiedContent(),
            window.ydk && window.ydk.rlog({
                action: "trans_copare_click",
                keyfrom: ja,
                type: t
            })
        }
        function yi(t) {
            var e = !1
              , o = /http(s)?:\/\/arxiv.org\/(abs|pdf|e-print)\//;
            return e = !!o.exec(t.toLowerCase()),
            e
        }
        function ki(t) {
            var e = !1
              , o = /^((http|https):\/\/)?([\w\d\.]+)(\.)(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|al|dz|af|ar|ae|aw|om|az|eg|et|ie|ee|ad|ao|ai|ag|at|au|mo|bb|pg|bs|pk|py|ps|bh|pa|br|by|bm|bg|mp|bj|be|is|pr|ba|pl|bo|bz|bw|bt|bf|bi|bv|kp|gq|dk|de|tl|tp|tg|dm|do|ru|ec|er|fr|fo|pf|gf|tf|va|ph|fj|fi|cv|fk|gm|cg|cd|co|cr|gg|gd|gl|ge|cu|gp|gu|gy|kz|ht|kr|nl|an|hm|hn|ki|dj|kg|gn|gw|ca|gh|ga|kh|cz|zw|cm|qa|ky|km|ci|kw|cc|hr|ke|ck|lv|ls|la|lb|lt|lr|ly|li|re|lu|rw|ro|mg|im|mv|mt|mw|my|ml|mk|mh|mq|yt|mu|mr|us|um|as|vi|mn|ms|bd|pe|fm|mm|md|ma|mc|mz|mx|nr|np|ni|ne|ng|nu|no|nf|na|za|zq|aq|gs|eu|pw|pn|pt|jp|se|ch|sv|ws|yu|sl|sn|cy|sc|sa|cx|st|sh|kn|lc|sm|pm|vc|lk|sk|si|sj|sz|sd|sr|sb|so|tj|tw|th|tz|to|tc|tt|tn|tv|tr|tm|tk|wf|vu|gt|ve|bn|ug|ua|uy|uz|es|eh|gr|hk|sg|nc|nz|hu|sy|jm|am|ac|ye|iq|ir|il|it|in|id|uk|vg|io|jo|vn|zm|je|td|gi|cl|cf|cn)(\/[^\s]+)?(\/)?$/
              , a = /^((http|https):\/\/)?([1-9]|([1-9][0-9])|((1[0-9]{2})|(2(([0-4][0-9])|(5[0-5])))))\.([0-9]|([1-9][0-9])|((1[0-9]{2})|(2(([0-4][0-9])|(5[0-5])))))\.([0-9]|([1-9][0-9])|((1[0-9]{2})|(2(([0-4][0-9])|(5[0-5])))))\.([0-9]|([1-9][0-9])|((1[0-9]{2})|(2(([0-4][0-9])|(5[0-5])))))(\:\d+)?(\/[^\s]+)?(\/)?$/
              , i = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
            return e = !!o.exec(t.toLowerCase()) || !!a.exec(t.toLowerCase()) || !!i.exec(t.toLowerCase()),
            e
        }
        function vi() {
            this.clear(),
            window.ydk && window.ydk.rlog({
                action: "trans_clear_click"
            })
        }
        function wi(t=!0) {
            var e = this;
            e.source.init.keyword = "",
            e.data.result = {},
            e.loading = !1,
            e.showClear = !1,
            e.orignTargetAudio = "",
            e.showPlayVoice = !1,
            e.showFormatPdfBtn = !1,
            e.showCopyText = !1,
            e.targetAudioUrl = null,
            e.hasStepTrans = !1,
            e.showStepTrans = !1,
            e.showFeedbackButton = !1,
            e.contenteditable = !1,
            e.sourceHightLightHtml = "",
            e.formatData = {},
            e.nums = 0,
            t && (e.$refs.js_fanyi_input.innerText = "",
            e.$refs.js_fanyi_input.focus()),
            window.globalStopAudio(),
            e.$nextTick((()=>{
                e.cleanKeyWord && e.cleanKeyWord(),
                e.updateDictResult(null),
                e.closeTransSuggestDialog(),
                e.$store.commit("ISPASTE_ORIGIN_TEXT", !1),
                e.$store.commit("FIRSTTWOORIGINTEXT", "")
            }
            ))
        }
        function Ti(t=!1) {
            var e = this;
            if (void 0 !== e.data.result.type)
                for (var o in e.data.result)
                    "type" !== o && delete e.data.result[o];
            else
                e.data.result = {};
            e.loading = !1,
            e.showCopyText = !1,
            e.targetAudioUrl = null,
            e.hasStepTrans = !1,
            e.showStepTrans = !1,
            e.showFeedbackButton = !1,
            e.contenteditable = !1,
            t && (e.$refs.js_fanyi_input.innerText = "",
            e.$refs.js_fanyi_input.focus()),
            window.globalStopAudio(),
            e.$nextTick((()=>{
                e.cleanKeyWord && e.cleanKeyWord(),
                e.updateDictResult(null),
                e.closeTransSuggestDialog()
            }
            ))
        }
        function Ci() {
            this.hasStepTrans = !1,
            this.showFeedbackButton = !1,
            this.showCopyText = !1,
            this.orignTargetAudio = "",
            this.targetAudioUrl = null,
            this.contenteditable = !1,
            this.updateDictResult(null),
            this.closeTransSuggestDialog()
        }
        function _i(t) {
            var e = t;
            if (e.indexOf("2") > 0) {
                var o = e.indexOf("2")
                  , a = e.substring(0, o)
                  , i = e.substring(o + 1);
                return {
                    from: a,
                    to: i
                }
            }
        }
        function xi() {
            let t = this
              , e = t.data.result.translateResult || []
              , o = t.data.result.type ? _i(t.data.result.type).to : t.source.init.to
              , a = []
              , i = !1;
            if ("en" === o) {
                e.forEach((function(t) {
                    Li(t) ? t.forEach((function(t) {
                        a.push(t.tgt)
                    }
                    )) : a.push(t)
                }
                )),
                t.modified_tgt.length > 0 && t.modified_tgt != bi(a.join("")) && (i = !0),
                t.modified_tgt && (a = [],
                a.push(t.modified_tgt));
                var s = document.getElementById("js_fanyi_output_resultOutput");
                s && "" == s.textContent.trim() && 0 == t.modified_tgt.length && a.length > 0 && (i = !0,
                a = [])
            }
            a = a.join("");
            const n = {
                text: a || "",
                isModfiy: i
            };
            window.ydk && window.ydk.showGrammarWnd({
                grammarParams: JSON.stringify(n),
                from: "fanyiTab"
            }),
            window.ydk && window.ydk.rlog({
                action: "checkbitton_click",
                type: a.length <= 0 ? "none" : "character",
                from: "fanyitab"
            })
        }
        function bi(t) {
            return t = t.replace(/[\\\r\n]/g, ""),
            t
        }
        function Si() {
            let t = this.$refs.js_fanyi_input;
            if (t) {
                t.focus();
                var e = window.getSelection();
                e.selectAllChildren(t),
                e.collapseToEnd()
            }
        }
        function Li(t) {
            return t instanceof Array
        }
        function Ei(t) {
            for (var e = t.trim(), o = 0, a = 0; a < (e + "").length; a++) {
                var i = e.charCodeAt(a);
                i >= 1 && i <= 126 || 65376 <= i && i <= 65439 ? o++ : o += 2
            }
            return o
        }
        function Fi(t) {
            document.documentElement.style.setProperty("--text-translate-zoom-scale", t)
        }
        function Hi() {
            var t = this.$refs.sourceInsideActionbBar
              , e = this.$refs.fixedBottomActionBar
              , o = document.getElementById("TextTranslate");
            if (t && o) {
                var a = t.getBoundingClientRect()
                  , i = e.getBoundingClientRect()
                  , s = o.getBoundingClientRect();
                a.top > i.top ? (this.fixBottomActionWidth = s.width + 4,
                this.fixBottomActionLeft = s.left + (document.body.scrollLeft || document.documentElement.scrollLeft),
                this.showFixBottomAction = !0) : this.showFixBottomAction = !1
            } else
                this.showFixBottomAction = !1
        }
        function Bi() {
            this.updateActionVisiblity()
        }
        function Ri(t) {
            var e = t[0];
            e && this.updateActionVisiblity()
        }
        function Di() {
            "TextTranslate" === this.$route.name && Ia.A.set(Xa, this.source.init.keyword)
        }
        function Ii() {
            const t = Ia.A.get(Xa);
            t && "" !== t.trim() && (this.onChangeTrans({
                keyword: t,
                srcLang: this.source.init.from,
                dstLang: this.source.init.to,
                from: "localstorage",
                domain: this.domain
            }),
            Ia.A.remove(Xa))
        }
        function Ni(t, e, o) {
            console.log("resetTextTranslateFromUrl"),
            this.onChangeTrans({
                keyword: t,
                srcLang: e,
                dstLang: "",
                from: o || "urlParams",
                domain: this.domain
            })
        }
        function ji(t) {
            const e = document.getSelection();
            t.clipboardData.setData("text/plain", e.toString()),
            t.preventDefault(),
            window._rlog.push(["_trackCustom", "event", [["action", "text_translation_input"], ["source", "paste"]]])
        }
        function Xi() {
            window._rlog.push(["_trackCustom", "event", [["action", "fanyiweb_AI_polish"]]]),
            this.$store.commit("UPDATA_GUIDEFROMOTHER", {
                question: this.source.init.keyword,
                functionEnglishName: "polish_spoken_professional"
            }),
            this.$router.push({
                name: "AITranslate"
            })
        }
        function Ui() {
            let t = [];
            this.data.result.translateResult.forEach((e=>{
                e.forEach((e=>{
                    t.push(e.tgt)
                }
                ))
            }
            )),
            window._rlog.push(["_trackCustom", "event", [["action", "fanyiweb_AI_polish"]]]),
            this.$store.commit("UPDATA_GUIDEFROMOTHER", {
                question: t.join(""),
                functionEnglishName: "polish_spoken_professional"
            }),
            this.$router.push({
                name: "AITranslate"
            })
        }
        function Pi() {
            if ("auto" === this.source.init.from)
                return "en" === qa && "zh-CHS" === za || "zh-CHS" === qa && "en" === za ? (this.ENandZHtrans = !0,
                this.$store.commit("ISWNANDZH", !0)) : (this.ENandZHtrans = !1,
                this.$store.commit("ISWNANDZH", !1)),
                this.sourceLanguageIsNotZH = "zh-CHS" !== qa,
                void (this.transLanguageIsNotZH = "zh-CHS" !== za);
            "en" === this.source.init.from && "zh-CHS" === this.source.init.to || "zh-CHS" === this.source.init.from && "en" === this.source.init.to ? (this.ENandZHtrans = !0,
            this.$store.commit("ISWNANDZH", !0)) : (this.ENandZHtrans = !1,
            this.$store.commit("ISWNANDZH", !1)),
            "zh-CHS" !== this.source.init.from ? this.sourceLanguageIsNotZH = !0 : this.sourceLanguageIsNotZH = !1,
            "zh-CHS" !== this.source.init.to ? this.transLanguageIsNotZH = !0 : this.transLanguageIsNotZH = !1
        }
        var Oi = {
            name: "placeholderMixin",
            data() {
                return {}
            },
            computed: {
                showPlaceholder() {
                    return !(this.source.init.keyword && "" !== this.source.init.keyword.trim() || this.composing)
                }
            },
            methods: {
                placeholderClickHandler() {
                    var t = this.$refs.js_fanyi_input;
                    t && t.focus()
                },
                pasteText() {},
                updateKeyWord(t) {
                    var e = document.getElementById("js_fanyi_input");
                    e && (e.innerText = t,
                    e.dispatchEvent(new CustomEvent("input")),
                    this.keepLastIndex())
                }
            }
        };
        const Ki = "isTextTranslateContrastAreaExpand";
        var $i = {
            name: "contrastAreaControlMixin",
            data() {
                return {
                    isContrastAreaExpand: !1
                }
            },
            computed: {
                isShowStepsWithContrastAreaExpand() {
                    return this.isContrastAreaExpand && this.showStepTrans
                }
            },
            methods: {
                toggleContrastAreaExpand() {
                    var t = !this.isContrastAreaExpand;
                    this.isContrastAreaExpand = t,
                    Ia.A.set(Ki, t.toString()),
                    window.ydk && window.ydk.rlog({
                        action: "trans_copare_click",
                        type: t ? "on" : "off"
                    })
                }
            }
        };
        o(84864),
        o(57465),
        o(79978);
        const Mi = t=>{
            if (t.text && "" != t.text.trim()) {
                var e = {
                    text: t.text
                };
                t.lanFrom && "auto" !== t.lanFrom && (e.lang = Qi(t.lanFrom)),
                t.lanTo && "auto" !== t.lanTo && (e.to = Qi(t.lanTo)),
                _a.A.getTextTranslateKeyword(e).then((e=>{
                    0 === e.code && t.success(e)
                }
                )).catch((e=>{
                    t.fail(e)
                }
                ))
            }
        }
        ;
        function Qi(t) {
            return "zh-CHS" === t || "zh-CHT" === t ? "zh" : t
        }
        String.prototype.formatTranslateKeyword = function() {
            if (0 == arguments.length)
                return this;
            for (var t = arguments[0], e = arguments[1], o = this, a = 0; a < t.length; a += 1)
                o = o.replace(new RegExp("\\{\\{" + a + "\\}\\}","g"), `<span class="${e}"><abbr class="translate-keyword-origin">${t[a].origin}</abbr><em title="${t[a].explain}" class="translate-keyword-explain">${t[a].explain}</em></span>`);
            return o
        }
        ;
        var Wi = {
            name: "keywordMixin",
            data() {
                return {
                    supportKeywordLangCombineList: ["en2zh-CHS", "zh-CHS2en", "zh-CHT2en", "en2zh-CHT", "ja2zh-CHS", "zh-CHS2ja", "ko2zh-CHS", "zh-CHS2ko"],
                    hasShowTextTranslateKeywordTip: Ia.A.get("hasShowTextTranslateKeywordTip"),
                    showKeyword: !1,
                    keywordData: [],
                    keywordContainerClassName: "translate-keyword-contianer",
                    keywordHtml: ""
                }
            },
            computed: {
                supportKeywordFunction() {
                    return !(!this.data.result || "" === this.data.result.type || "selfInnovate" !== this.domainType) && this.supportKeywordLangCombineList.indexOf(this.data.result.type) > -1
                },
                dictResult() {
                    return this.$store.state.text.dictResult
                },
                disableKeywordFunction() {
                    return "{}" !== JSON.stringify(this.dictResult)
                }
            },
            methods: {
                fetchKeyword(t) {
                    Mi({
                        text: t,
                        lanFrom: this.source.init.from,
                        lanTo: this.source.init.to,
                        success: t=>{
                            0 == t.code && (this.keywordData = t.data,
                            this.$nextTick((()=>{
                                this.keywordHtml = this.genSentencesWithKeywordByTranslateResult()
                            }
                            )))
                        }
                        ,
                        fail: t=>{}
                    })
                },
                genSentencesWithKeywordByTranslateResult() {
                    var t = this.data.result.translateResult || []
                      , e = ""
                      , o = 0;
                    return t.forEach(((t,a)=>{
                        t.forEach(((t,i)=>{
                            t["src"] = t["src"].replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                            e += `<span spellcheck="false" class='src' data-start-index='${o}' data-group='${a}-${i}'>${this._combineWithKeyword(t["src"])}</span>`,
                            o += t["src"].length
                        }
                        )),
                        o += 1
                    }
                    )),
                    e
                },
                _combineWithKeyword(t) {
                    if (this.keywordData.length < 1)
                        return t;
                    for (var e = t, o = 0; o < this.keywordData.length; o += 1) {
                        var a = this.keywordData[o].origin
                          , i = new RegExp(a,"gi");
                        e = e.replaceAll(i, "{{" + o + "}}")
                    }
                    e = e.formatTranslateKeyword(this.keywordData, this.keywordContainerClassName);
                    return e
                },
                _keywordAlign() {
                    var t = document.getElementsByClassName(this.keywordContainerClassName);
                    this.data.result.translateResult && this.keywordData.length > 0 && t.length > 0 && Array.prototype.forEach.call(t, ((t,e)=>{
                        let o = 0
                          , a = Array.prototype.slice.call(t.childNodes);
                        a.forEach(((t,e)=>{
                            var a = t.offsetWidth || t.clientWidth;
                            o = Math.max(a, o)
                        }
                        )),
                        t.style.width = o + "px"
                    }
                    ))
                },
                insertSourceArea() {
                    if (!this.showKeyword || this.keywordData.length < 1 || "" == this.keywordHtml.trim(""))
                        return this.$toast("当前文本暂无识别出重点词汇"),
                        void setTimeout((()=>{
                            this.showKeyword = !1
                        }
                        ), 500);
                    var t = this.$refs.js_fanyi_input;
                    t && (t.innerHTML = this.keywordHtml,
                    t.blur(),
                    this._keywordAlign())
                },
                cleanKeyWord() {
                    this.keywordData = [],
                    this.keywordHtml = "",
                    this.showKeyword = !1
                },
                hideKeyword() {
                    this.showKeyword = !1
                },
                showTextTranslateKeywordTipHandler() {
                    this.hasShowTextTranslateKeywordTip || (this.$toast("关闭重点词汇开关可继续编辑原文"),
                    this.hasShowTextTranslateKeywordTip = !0,
                    Ia.A.set("hasShowTextTranslateKeywordTip", "true"))
                },
                spaceForbidListener(t) {
                    if (32 == t.keyCode)
                        return t.preventDefault()
                }
            },
            watch: {
                showKeyword: {
                    handler: function(t) {
                        t ? (this.showTextTranslateKeywordTipHandler(),
                        this.insertSourceArea()) : this.insertHighLightHtmlToSource && this.insertHighLightHtmlToSource(),
                        window.ydk && window.ydk.rlog({
                            action: "trans_keywords",
                            type: t ? "on" : "off"
                        })
                    }
                }
            }
        }
          , Zi = {
            name: "languageMixin",
            data() {
                return {
                    useAllDomain: !0
                }
            },
            computed: {
                allowDomainLanguageCombineList() {
                    return this.$store.state.domain.allowDomainLanguageCombineList
                },
                languageCombineFromUserSelected() {
                    return `${this.source.init.from}2${this.source.init.to}`
                },
                languageFromUserSelectedWhenAuto() {
                    return "auto" === this.source.init.from ? this.data.result.type : null
                },
                allowDomain() {
                    var t = this.allowDomainLanguageCombineList.indexOf(this.languageCombineFromUserSelected) > -1
                      , e = this.languageFromUserSelectedWhenAuto && this.allowDomainLanguageCombineList.indexOf(this.languageFromUserSelectedWhenAuto) > -1;
                    return !!t || !!e
                },
                rtlLanguageList() {
                    return this.$store.state.language.rtlLanguageList
                },
                sourceDir() {
                    let t = "ltr";
                    if (this.rtlLanguageList.indexOf(this.source.init.from) > -1)
                        t = "rtl";
                    else if (this.languageFromUserSelectedWhenAuto) {
                        const e = this.languageFromUserSelectedWhenAuto.split("2");
                        e[0] && this.rtlLanguageList.indexOf(e[0]) > -1 && (t = "rtl")
                    }
                    return t
                },
                targetDir() {
                    return this.rtlLanguageList.indexOf(this.source.init.to) > -1 ? "rtl" : "ltr"
                }
            },
            methods: {
                onLangSelectorChangeCallback(t) {
                    this._onTransLangChanged({
                        lanFrom: t.lanFromModel.code,
                        lanTo: t.lanToModel.code
                    })
                },
                updateDomainAfterLanguageChange: k.A.debounce((function() {
                    this.allowDomain || (this.domain && "0" != this.domain && "auto" != this.source.init.from && this.$toast("当前语言仅支持通用领域"),
                    this.domain = "0")
                }
                ), 10)
            },
            watch: {
                languageCombineFromUserSelected: {
                    handler: function(t) {
                        this.updateDomainAfterLanguageChange()
                    }
                },
                languageFromUserSelectedWhenAuto: {
                    handler: function(t) {
                        this.updateDomainAfterLanguageChange()
                    }
                }
            }
        }
          , qi = "domain_in_translate_text"
          , zi = "temp_domain_in_translate_text"
          , Gi = {
            name: "domainMixin",
            data() {
                return {}
            },
            computed: {
                isLogin() {
                    return this.$store.state.login.isLogin
                },
                domainLabel() {
                    return "textTran" === this.domainUseType ? this.$store.getters.getTextDomainLabelByValue(this.domain) : this.$store.getters.getDomainLabelByValue(this.domain)
                }
            },
            methods: {
                onDomainSelectorChangeCallback(t) {
                    this.isLogin || "0" == t.domain ? (this.domain = t.domain,
                    this.hideKeyword(),
                    "aigc" !== t.from ? this.search({
                        needAddHistroy: !0,
                        from: "changeDomain",
                        needSendLog: !0
                    }) : this.clearTrans()) : this.gotoLoginPage(t.domain)
                },
                initDomainFromLS() {
                    var t = Ia.A.get(`${zi}`)
                      , e = Ia.A.get(`${qi}`);
                    null !== t && this.isLogin ? this.domain = t : this.domain = null !== e ? e : "0",
                    Ia.A.remove(zi)
                },
                setDomainToLS(t) {
                    Ia.A.set(`${qi}`, t)
                },
                gotoLoginPage(t) {
                    Ia.A.set(`${zi}`, t),
                    te.A.$emit("saveTextTranslateContentToLS");
                    const e = encodeURIComponent(window.location.href);
                    window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${e}&t=${(new Date).getTime()}`
                }
            },
            watch: {
                domain: {
                    handler: function(t) {
                        this.setDomainToLS(t)
                    }
                },
                isLogin: {
                    handler: function(t) {
                        t || (this.domain = "0")
                    },
                    immediate: !0
                }
            }
        }
          , Vi = (o(83548),
        o(91565));
        let Ji = null;
        const Yi = "fanyideskweb"
          , ts = "R4B#{3qFI@3ARN6I)w3#N";
        function es(t) {
            return Vi.createHash("md5").update(t.toString()).digest("hex")
        }
        function os(t) {
            const e = es(navigator.appVersion)
              , o = `${(new Date).getTime()}`
              , a = o + parseInt(10 * Math.random(), 10)
              , i = es(Yi + t + a + ts);
            return {
                ts: o,
                bv: e,
                salt: a,
                sign: i
            }
        }
        const as = t=>{
            Ji && Ji.cancel("");
            const e = os(t.i)
              , o = ba.A.CancelToken;
            return Ji = o.source(),
            ba.A.post("https://fanyi.youdao.com/bbk/translate_m.do", (0,
            p.A)((0,
            p.A)({}, t), {}, {
                client: Yi,
                salt: e.salt,
                sign: e.sign,
                ts: e.ts,
                bv: e.bv,
                doctype: "json",
                version: "3.0",
                cache: !0
            }), {
                cancelToken: Ji.token,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            })
        }
        ;
        var is = {
            getTextTranslateMultipleResult: as
        };
        let ss, ns;
        var rs = {
            name: "multipleResultMixin",
            data() {
                return {
                    transSuggestList: [],
                    transSuggestDialogVisible: !1,
                    transSuggestRelativeEl: null
                }
            },
            mounted() {
                document.body.addEventListener("click", this.multipleResultModalClickEventHandler, !0)
            },
            beforeDestroy() {
                document.body.removeEventListener("click", this.multipleResultModalClickEventHandler, !0)
            },
            computed: {
                supportTransSuggest() {
                    var t = this.allowDomainLanguageCombineList.indexOf(this.languageCombineFromUserSelected) > -1
                      , e = this.languageFromUserSelectedWhenAuto && this.allowDomainLanguageCombineList.indexOf(this.languageFromUserSelectedWhenAuto) > -1;
                    return !this.showStepTrans && (!!t || !!e)
                },
                transSuggestRequestLang() {
                    let t = this.source.init.from
                      , e = this.source.init.to;
                    if ("auto" === t && this.data.result.type) {
                        const o = this.data.result.type.split("2");
                        t = o[0],
                        e = o[1]
                    }
                    return {
                        from: t,
                        to: e
                    }
                }
            },
            methods: {
                _clearTransSuggestTipTimeout() {
                    ns && clearTimeout(ns)
                },
                checkTransSuggestTip(t, e=!1) {
                    if (e)
                        return this._clearTransSuggestTipTimeout(),
                        ss && ss.parentNode.removeChild(ss),
                        void (ss = null);
                    if (!this.supportTransSuggest)
                        return;
                    this._clearTransSuggestTipTimeout();
                    const o = t.currentTarget;
                    ns = setTimeout((()=>{
                        this.showTransSuggestTip(o)
                    }
                    ), 1e3)
                },
                showTransSuggestTip(t) {
                    const e = t.getBoundingClientRect();
                    ss = document.createElement("div"),
                    ss.setAttribute("class", "transSuggestTip"),
                    ss.style.zIndex = 10,
                    document.body.appendChild(ss),
                    this.$nextTick((()=>{
                        var t = e.left - ss.offsetWidth / 2 + e.width / 2
                          , o = e.top - ss.offsetHeight;
                        ss.style.left = t + "px",
                        ss.style.top = o + "px",
                        ss.style.opacity = 1
                    }
                    ))
                },
                singleTgtClickHandler(t, e, o, a) {
                    this.checkTransSuggestTip(t, !0),
                    this.showTransSuggest(t, e, o, a),
                    this.transSuggestRelativeEl = t.target,
                    this.setSentenceEditable(t)
                },
                _genJaTargetContentWithoutPjm(t) {
                    if (!t.currentTarget)
                        return;
                    var e = /<(strong)(?=[\s>])[\w\W]*?<\/\1\s*>/gi
                      , o = /<[^>]+>/gi
                      , a = t.currentTarget.outerHTML;
                    let i = a.replace(e, "")
                      , s = i.replace(o, "");
                    return s.split("\r\n")
                },
                singleTgtInputHandler(t, e, o, a) {
                    if (!t.target.composing)
                        if (this.data.result.type && this.data.result.type.indexOf("2ja") > -1 && this.showPjm) {
                            const e = this._genJaTargetContentWithoutPjm(t);
                            this.updateTargetText(e.join(""), o, a, t.target.innerText, t.target.dataset.pjm_index)
                        } else
                            this.updateTargetText(t.currentTarget.innerText, o, a)
                },
                _removeSameSentence(t, e) {
                    let o = [];
                    return e.forEach((e=>{
                        e.tgt.trim() !== t.trim() && o.push(e)
                    }
                    )),
                    o
                },
                showTransSuggest(t, e, o, a) {
                    const i = t.target;
                    i !== this.transSuggestRelativeEl && (this.closeTransSuggestDialog(),
                    this.supportTransSuggest && is.getTextTranslateMultipleResult({
                        i: e[a].src,
                        tgt: e[a].tgt,
                        from: this.transSuggestRequestLang.from,
                        to: this.transSuggestRequestLang.to
                    }).then((t=>{
                        const o = t.data;
                        if ("" == i.textContent.trim())
                            return;
                        if (!o.translateResult || !o.translateResult.length)
                            return;
                        const s = this._removeSameSentence(e[a].tgt, o.translateResult);
                        s.length < 1 || (this.transSuggestList = s,
                        this.transSuggestDialogVisible = !0)
                    }
                    )))
                },
                setSentenceEditable(t) {
                    t.target.classList.contains("pjm-top") || (this._addDomsClassByClassname([t.target], "will-update"),
                    t.target.setAttribute("contenteditable", "plaintext-only"))
                },
                removeSentenceEditable() {
                    if (!this.$refs.js_fanyi_output)
                        return;
                    const t = this.$refs.js_fanyi_output.querySelectorAll(".will-update");
                    for (let e of t)
                        e.classList.remove("will-update"),
                        e.removeAttribute("contenteditable")
                },
                closeTransSuggestDialog() {
                    this.transSuggestDialogVisible && (this.transSuggestDialogVisible = !1,
                    this.transSuggestRelativeEl = null,
                    this.transSuggestList = [],
                    this.removeSentenceEditable())
                },
                selectSuggestHandler(t) {
                    if (!this.transSuggestRelativeEl)
                        return;
                    const e = this.transSuggestRelativeEl.dataset.section
                      , o = this.transSuggestRelativeEl.dataset.sentence;
                    this.updateTargetText(t.tgt, e, o),
                    this.closeTransSuggestDialog();
                    let a = this.data.result.originTranslateResult[e][o];
                    window._rlog.push(["_trackCustom", "event", [["action", "SELECT_OTHER_TRANSLATION"], ["i", a.src], ["tgt", a.tgt], ["selectedTgt", t.tgt], ["from", this.transSuggestRequestLang.from], ["to", this.transSuggestRequestLang.to], ["systemName", t.systemName]]])
                },
                updateTargetText(t, e, o, a="", i=-1) {
                    let s = this.data.result.translateResult[e][o];
                    s && (-1 != i && "" !== a && s.jaTransPjm && (s.jaTransPjm[i].word = a),
                    s.tgt = t,
                    this.$nextTick((()=>{
                        this.updateTargetAudioUrl()
                    }
                    )))
                },
                multipleResultModalClickEventHandler(t) {
                    const e = document.querySelector(".TransSuggestDialog")
                      , o = e && e.contains(t.target)
                      , a = this.transSuggestRelativeEl && this.transSuggestRelativeEl.contains(t.target);
                    e ? !o && !a && this.closeTransSuggestDialog() : !a && this.removeSentenceEditable()
                },
                updateTargetAudioUrl() {
                    let t = null
                      , e = null;
                    if ("auto" == this.source.init.from && !this.source.init.to && this.data.result.type) {
                        var o = this.data.result.type;
                        if (o.indexOf("2") > 0) {
                            var a = o.indexOf("2")
                              , i = o.substring(0, a)
                              , s = o.substring(a + 1);
                            t = i,
                            e = s
                        }
                    }
                    const n = this.data.result.translateResult || [];
                    let r = "";
                    n.forEach((t=>{
                        t.forEach((t=>{
                            r += t.tgt
                        }
                        ))
                    }
                    )),
                    r ? ("auto" == this.source.init.from && !this.source.init.to && e ? this.targetAudioUrl = this.updateAudio(e, r) : this.targetAudioUrl = this.updateAudio(this.source.init.to || this.source.init.from, r),
                    this.showCopyText = !0) : (this.targetAudioUrl = null,
                    this.showCopyText = !1)
                }
            }
        }
          , ls = o(95124)
          , us = o(8692);
        const cs = t=>((0,
        i.Qi)("data-v-215607e2"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , ds = {
            class: "feedbackBox"
        }
          , hs = {
            class: "tittle"
        }
          , ms = cs((()=>(0,
        i.Lk)("div", null, "翻译质量反馈", -1)))
          , gs = cs((()=>(0,
        i.Lk)("img", {
            src: us,
            alt: ""
        }, null, -1)))
          , ps = [gs]
          , fs = cs((()=>(0,
        i.Lk)("div", {
            class: "err_tittle_ch"
        }, "错误类型", -1)))
          , As = {
            class: "err_type_box"
        }
          , ys = ["name", "onClick"]
          , ks = {
            class: "item"
        }
          , vs = {
            key: 0,
            class: "otherBox"
        }
          , ws = cs((()=>(0,
        i.Lk)("div", {
            class: "err_tittle_ch common_tittle"
        }, "建议译文（非必填）", -1)))
          , Ts = {
            class: "text_length_position"
        }
          , Cs = {
            class: "text_length"
        }
          , _s = {
            class: "submit_box"
        };
        function xs(t, e, o, a, s, n) {
            return (0,
            i.uX)(),
            (0,
            i.CE)("div", ds, [(0,
            i.Lk)("div", hs, [ms, (0,
            i.Lk)("i", {
                class: "ico_close_ch",
                onClick: e[0] || (e[0] = (...t)=>n.closeDialog && n.closeDialog(...t))
            }, ps)]), fs, (0,
            i.Lk)("span", As, [((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(s.arrlyList, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: "item",
                key: e
            }, [(0,
            i.Lk)("input", {
                type: "radio",
                name: t.value,
                id: "",
                onClick: e=>n.pushTypeN(e, t)
            }, null, 8, ys), (0,
            i.eW)(" " + (0,
            i.v_)(t.value), 1)])))), 128)), (0,
            i.Lk)("div", ks, [(0,
            i.Lk)("input", {
                type: "radio",
                name: "err_type",
                id: "",
                value: "其他",
                onClick: e[1] || (e[1] = t=>n.pushType(t))
            }), (0,
            i.eW)(" 其他 ")])]), s.containOther ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", vs, [(0,
            i.bo)((0,
            i.Lk)("input", {
                class: "other_err_type",
                "onUpdate:modelValue": e[2] || (e[2] = t=>s.other_err_type = t),
                type: "text",
                placeholder: "请输入错误类型",
                maxlength: "10"
            }, null, 512), [[i.Jo, s.other_err_type]])])) : (0,
            i.Q3)("", !0), ws, (0,
            i.bo)((0,
            i.Lk)("textarea", {
                "onUpdate:modelValue": e[3] || (e[3] = t=>s.comments = t),
                class: "coments_input_area",
                placeholder: "请在此输入建议译文",
                maxlength: "200",
                name: "",
                id: "",
                cols: "30",
                rows: "10"
            }, "\n    ", 512), [[i.Jo, s.comments]]), (0,
            i.Lk)("div", Ts, [(0,
            i.Lk)("div", Cs, [(0,
            i.eW)((0,
            i.v_)(`${s.comments.length}/`) + " ", 1), (0,
            i.Lk)("span", {
                class: (0,
                i.C4)({
                    has_comments_length: s.comments.length > 190
                })
            }, "200", 2)])]), (0,
            i.Lk)("div", _s, [(0,
            i.Lk)("button", {
                class: (0,
                i.C4)(["submit_button", {
                    has_comments: n.err_type || s.containOther && s.other_err_type
                }]),
                onClick: e[4] || (e[4] = (...t)=>n.submit && n.submit(...t))
            }, "提交反馈", 2)])])
        }
        var bs = {
            name: "FeedbackDialog",
            props: {
                result: {
                    type: String
                },
                dialogVis: {
                    type: Boolean
                }
            },
            data() {
                return {
                    comments: "",
                    other_err_type: "",
                    isSubmit: !1,
                    arrlyList: [{
                        value: "漏译多译",
                        isSelect: !1
                    }, {
                        value: "用词不当",
                        isSelect: !1
                    }, {
                        value: "语法有误",
                        isSelect: !1
                    }, {
                        value: "翻译不地道",
                        isSelect: !1
                    }, {
                        value: "格式不规范",
                        isSelect: !1
                    }],
                    arrResult: [],
                    containOther: !1,
                    isSelectOther: !1
                }
            },
            methods: {
                pushType(t) {
                    this.containOther ? (t.target.checked = !t.target.checked,
                    this.containOther = !1,
                    this.$emit("bigSize", "452px")) : (this.containOther = t.target.checked,
                    this.$emit("bigSize", "506px"))
                },
                pushTypeN(t, e) {
                    e.isSelect ? (t.target.checked = !t.target.checked,
                    e.isSelect = !1,
                    this.arrResult.forEach(((t,o)=>{
                        t === e.value && this.arrResult.splice(o, 1)
                    }
                    ))) : (e.isSelect = t.target.checked,
                    this.arrResult.push(e.value))
                },
                submit() {
                    this.$emit("unSubmit"),
                    this.isSubmit = !0,
                    (this.err_type || this.containOther) && (this.err_type || !this.containOther || this.other_err_type) && (this.containOther ? _a.A.feedback(`${this.result}【错误类型】:${this.err_type}【其他】:${this.other_err_type};【建议译文】:${this.comments};`).then((t=>{
                        this.$toast("反馈成功!"),
                        this.$emit("closeDialog", [this.comments, this.other_err_type])
                    }
                    )).catch((t=>{
                        this.$toast("反馈失败!")
                    }
                    )) : _a.A.feedback(`${this.result}【错误类型】:${this.err_type}【建议译文】:${this.comments};`).then((t=>{
                        this.$toast("反馈成功"),
                        this.$emit("closeDialog", [this.comments, this.err_type]),
                        console.log(this.err_type, "err_type")
                    }
                    )).catch((t=>{
                        this.$toast("反馈失败!")
                    }
                    )))
                },
                closeDialog() {
                    this.$emit("closeDialog", [this.comments, this.err_type])
                }
            },
            computed: {
                err_type() {
                    let t = "";
                    return this.arrResult.forEach((e=>t += e.replace(" ", "") + ";")),
                    t
                }
            }
        };
        const Ss = (0,
        T.A)(bs, [["render", xs], ["__scopeId", "data-v-215607e2"]]);
        var Ls = Ss;
        const Es = (0,
        i.Lk)("i", {
            class: "upload-icon"
        }, null, -1)
          , Fs = {
            key: 0,
            class: "text-tip file-dragging-hover"
        }
          , Hs = {
            key: 1,
            class: "text-tip"
        }
          , Bs = {
            class: "format-tip-container"
        }
          , Rs = {
            class: "file-type-text"
        }
          , Ds = {
            class: "show-tips"
        }
          , Is = {
            class: "icon-question"
        }
          , Ns = {
            class: "file-upload-button-container"
        }
          , js = {
            class: "file-upload-button blue-button"
        }
          , Xs = ["accept"];
        function Us(t, e, o, a, s, n) {
            const r = (0,
            i.gN)("tooltip");
            return (0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: (0,
                i.C4)(["document-upload-entrance-container", "drag-area", {
                    "drag-hover-dash-border": t.dropActive
                }]),
                ref: "dropArea",
                onClick: e[1] || (e[1] = (...e)=>t.fileUploadButtonClickHandler && t.fileUploadButtonClickHandler(...e))
            }, [Es, t.dropActive ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", Fs, "释放鼠标上传文档")) : ((0,
            i.uX)(),
            (0,
            i.CE)("div", Hs, "AI文档翻译·问答")), (0,
            i.Lk)("div", Bs, [((0,
            i.uX)(!0),
            (0,
            i.CE)(i.FK, null, (0,
            i.pI)(s.fileTypes, ((t,e)=>((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                class: "format-item",
                key: e
            }, [(0,
            i.Lk)("i", {
                class: (0,
                i.C4)(["file_icon", t.icon])
            }, null, 2), (0,
            i.Lk)("span", Rs, (0,
            i.v_)(t.text), 1)])))), 128)), (0,
            i.Lk)("div", Ds, [(0,
            i.bo)((0,
            i.Lk)("i", Is, null, 512), [[r, n.uploadTip, void 0, {
                "right-bottom": !0
            }]])])]), (0,
            i.Lk)("div", Ns, [(0,
            i.Lk)("div", js, [(0,
            i.Lk)("input", {
                type: "file",
                ref: "fileInput",
                onChange: e[0] || (e[0] = (...t)=>n.chooseFileSuccessHandler && n.chooseFileSuccessHandler(...t)),
                accept: s.acceptFile.join(","),
                multiple: !1
            }, null, 40, Xs)])])], 2)
        }
        var Ps = o(73629)
          , Os = o(49547)
          , Ks = o(56117)
          , $s = o(5911)
          , Ms = {
            name: "TextTranslateEntrance",
            mixins: [Os.A, Ks.A],
            props: ["doctransTips"],
            data() {
                return {
                    entry: 5,
                    acceptFile: $s.Zn["document"].acceptFileType,
                    uploading: !1,
                    fileTypes: [{
                        icon: "file_icon_doc",
                        text: "doc/docx"
                    }, {
                        icon: "file_icon_pdf",
                        text: "pdf"
                    }, {
                        icon: "file_icon_ppt",
                        text: "ppt/pptx"
                    }, {
                        icon: "file_icon_xlsx",
                        text: "xlsx"
                    }, {
                        icon: "file_icon_epub",
                        text: "epub"
                    }]
                }
            },
            mounted() {
                this.dragBindEvents(),
                this.initVipRightsInfo()
            },
            unmounted() {
                this.removeDragBindEvents();
                const t = document.querySelector(".yd-tooltip");
                t && t.remove()
            },
            deactivated() {
                const t = document.querySelector(".yd-tooltip");
                t && t.remove()
            },
            methods: {
                chooseFileSuccessHandler(t) {
                    this.$router.push({
                        path: "/documentUpload",
                        query: {
                            keyfrom: "fanyitab"
                        }
                    }),
                    te.A.$on("documentUploadRendered", (()=>{
                        te.A.$emit("setUploadFiles", t.target.files),
                        this.clearInputFileCache(),
                        te.A.$off("documentUploadRendered")
                    }
                    ))
                },
                uploadTip() {
                    return {
                        component: Ps.A,
                        data: {
                            uploadType: "document",
                            doctransTips: this.doctransTips
                        }
                    }
                }
            }
        };
        const Qs = (0,
        T.A)(Ms, [["render", Us]]);
        var Ws = Qs;
        let Zs = !1
          , qs = !1;
        var zs = {
            name: "TextTranslateCore",
            props: {
                direction: {
                    type: String,
                    default: "horizontal"
                },
                active: {
                    type: Boolean,
                    default: !0
                },
                showTextTranslateHistoryPanel: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                LanguageSelector: ye.A,
                DomainSelector: qt.A,
                VoicePlayer: x.A,
                TransSuggestDialog: Zt,
                Dialog: ls.A,
                FeedBackDialog: Ls,
                FileUploadSubmodule: Ws,
                FormatTextButton: ae,
                TermBankAction: Ae
            },
            mixins: [Oi, $i, Wi, Zi, Gi, rs],
            data() {
                return {
                    composing: !1,
                    loading: !1,
                    needRealTimeSearch_flag: !0,
                    source: {
                        init: {
                            keyword: "",
                            from: "",
                            to: "",
                            seq: 0
                        }
                    },
                    domain: "",
                    domainName: "",
                    domainType: "selfInnovate",
                    data: {
                        result: {}
                    },
                    modified_data: "",
                    modified_tgt: "",
                    showClear: !1,
                    showPlayVoice: !1,
                    showCopyText: !1,
                    showFormatPdfBtn: !1,
                    targetAudioUrl: null,
                    hasStepTrans: !1,
                    showStepTrans: !1,
                    showFeedbackButton: !1,
                    contenteditable: !1,
                    hasHighlighted: !1,
                    nums: 0,
                    maxLimitnNums: 5e3,
                    maxLimitnNumsForRed: 4950,
                    chatGptMaxLimitnNums: 500,
                    chatGptMaxLimitnNumsForRed: 490,
                    bigSizeLimitNums: 52,
                    isMaxLimitnNums: !1,
                    targetNums: 0,
                    fontSize: "small",
                    orignTargetAudio: null,
                    sourceHightLightHtml: "",
                    showFixBottomAction: !1,
                    fixBottomActionWidth: 0,
                    fixBottomActionLeft: 0,
                    throttleScrollAreaListener: k.A.throttle(this.scrollAreaListener.bind(this), 10),
                    containerHeightObserver: null,
                    throttleUpdateActionVisiblity: k.A.throttle(this.updateActionVisiblity.bind(this), 100),
                    saveTextTranslateToLS: this.saveTextTranslateToLSHandler.bind(this),
                    isShow: !1,
                    isSelect: !1,
                    dialogSize: "452px",
                    isHover: !1,
                    isHover_left: !1,
                    showNumsTips: !1,
                    domainUseType: "textTran",
                    feedbackComments: "",
                    feedbackErrorType: "",
                    ENandZHtrans: !0,
                    sourceLanguageIsNotZH: !1,
                    transLanguageIsNotZH: !1,
                    sidebarResizeObserver: null,
                    useTerm: !1,
                    formatData: {
                        isFormated: !1,
                        format_flag: !1,
                        textBeforeFormat: "",
                        keywordBeforeFormat: ""
                    }
                }
            },
            computed: {
                dislikeTxt() {
                    return "dislike" === this.isSelect ? "已选择不喜欢该翻译" : "不喜欢该翻译"
                },
                likeTxt() {
                    return "like" === this.isSelect ? "已选择喜欢该翻译" : "喜欢该翻译"
                },
                curZoom() {
                    return 1
                },
                platfrom() {
                    return "web"
                },
                overBigSizeLimitNums() {
                    return this.getStringNum(this.source.init.keyword) >= this.bigSizeLimitNums
                },
                inputSpellcheck() {
                    return "en" == this.source.init.from
                },
                showPjm() {
                    return this.$store.state.text.showPjm
                },
                showRomanPronunciation() {
                    return this.$store.state.text.showRomanPronunciation
                },
                showWordsNumber() {
                    var t = this.$store.state.text.showWordsNumber;
                    return !!t || this.nums >= this.maxLimitnNumsForRed
                },
                submitResult() {
                    return "selfInnovate" === this.domainType ? `【原文】:${this.data.result.originTranslateResult[0][0].src};【当前机翻结果】:${this.data.result.originTranslateResult[0][0].tgt};【语种信息】:${this.data.result.type} ;【领域信息】:${this.domainLabel}; ` : `【原文】:${this.source.init.keyword};【当前机翻结果】:${this.data.result.aigcResp};【语种信息】:${this.source.init.from + "2" + this.source.init.to} ;【领域信息】:${this.domainLabel}; `
                }
            },
            filters: {
                unescapeFilter: function(t) {
                    return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/\n+/g, "\n")
                }
            },
            watch: {
                domain: {
                    handler(t) {
                        t && setTimeout((()=>{
                            const e = this.$store.state.domain.textTransDomainMap.some((e=>e.str === t && (this.domainType = "aigc" === e.from ? "aigc" : "selfInnovate",
                            this.domainName = e.msg,
                            !0)));
                            window._rlog.push(["_trackCustom", "event", [["action", "scene_select"], ["setting", this.domainName]]]),
                            e || (this.domain = "0")
                        }
                        ), 500)
                    },
                    immediate: !0,
                    deep: !0
                },
                "source.init.keyword": "postTextTranslateHandler",
                useTerm: "postTextTranslateHandler",
                nums: {
                    immediate: !0,
                    handler: function(t) {
                        t > this.maxLimitnNums ? this.isMaxLimitnNums = !0 : this.isMaxLimitnNums = !1
                    }
                },
                active: {
                    handler: function(t) {
                        t && this.keepLastIndex()
                    },
                    immediate: !1
                },
                direction: {
                    handler: function(t) {
                        this.keepLastIndex()
                    },
                    immediate: !1
                },
                "data.result.translateResult": {
                    handler: function() {
                        this.$emit("showCollapseTip", !0),
                        this.$nextTick((()=>{
                            this.updateActionVisiblity()
                        }
                        )),
                        this.updateHistoryList()
                    }
                },
                showStepTrans: {
                    handler: function() {
                        this.$nextTick((()=>{
                            this.updateActionVisiblity()
                        }
                        ))
                    }
                },
                isShow: {
                    handler: function(t) {
                        t || this.sendDisLikeFeedToMissHuang("dislike")
                    }
                }
            },
            directives: {
                focus: {
                    inserted: function(t) {
                        t.focus()
                    }
                }
            },
            methods: (0,
            p.A)((0,
            p.A)({}, a), {}, {
                inputEnterHandler(t) {
                    Zs = !0
                },
                onSourcePasteHandler(t) {
                    qs = !0,
                    this.pasteHandler(t),
                    window._rlog.push(["_trackCustom", "event", [["action", "text_translation_input"], ["source", "paste"]]])
                },
                rengongTranslateButtonClickHandler() {
                    window.open("https://f.youdao.com/?vendor=new-fanyifollow", "_blank")
                },
                feedbackButtonClickHandler() {
                    this.isShow = !0
                },
                closeDialogHandler(t) {
                    this.feedbackComments = t[0],
                    this.feedbackErrorType = t[1],
                    this.isShow = !1,
                    this.isWriteComment || (this.isSelect = "")
                },
                sendDisLikeFeedToMissHuang(t) {
                    let e = [];
                    if ("selfInnovate" === this.domainType) {
                        let o = []
                          , a = [];
                        this.data.result.translateResult.forEach((t=>{
                            t.forEach((t=>{
                                o.push(t.tgt),
                                a.push(t.src)
                            }
                            ))
                        }
                        )),
                        e = {
                            src: a.join(""),
                            tgt: o.join(""),
                            from: this.data.result.type.split(/[2]/)[0],
                            to: this.data.result.type.split(/[2]/)[1],
                            action: "dislike" === t ? "bad" : "good",
                            domain: this.domainLabel,
                            errorType: this.feedbackErrorType || "",
                            details: this.feedbackComments || ""
                        },
                        window._rlog.push(["_trackCustom", "event", [["action", "dislike" === t ? "translation_result_unlike" : "translation_result_like "], ["from", this.data.result.type.split(/[2]/)[0]], ["to", this.data.result.type.split(/[2]/)[1]], ["setting", this.domainLabel]]])
                    } else
                        e = {
                            src: this.source.init.keyword,
                            tgt: this.data.result.aigcResp,
                            from: this.source.init.from,
                            to: this.source.init.to,
                            action: "dislike" === t ? "bad" : "good",
                            domain: this.domainLabel,
                            errorType: this.feedbackErrorType || "",
                            details: this.feedbackComments || ""
                        },
                        window._rlog.push(["_trackCustom", "event", [["action", "dislike" === t ? "translation_result_unlike" : "translation_result_like "], ["from", this.source.init.from], ["to", this.source.init.to], ["setting", this.domainLabel]]]);
                    _a.A.fanyiFeedback(e).then((t=>{
                        console.log("res", t)
                    }
                    ))
                },
                handleButton(t) {
                    if (!this.isSelect) {
                        let e = [];
                        if ("selfInnovate" === this.domainType) {
                            this.isSelect = t;
                            let o = []
                              , a = [];
                            this.data.result.translateResult.forEach((t=>{
                                t.forEach((t=>{
                                    o.push(t.tgt),
                                    a.push(t.src)
                                }
                                ))
                            }
                            )),
                            e = {
                                src: a.join(""),
                                tgt: o.join(""),
                                from: this.data.result.type.split(/[2]/)[0],
                                to: this.data.result.type.split(/[2]/)[1],
                                action: "dislike" === t ? "bad" : "good",
                                domain: this.domainLabel
                            },
                            window._rlog.push(["_trackCustom", "event", [["action", "dislike" === t ? "translation_result_unlike" : "translation_result_like "], ["from", this.data.result.type.split(/[2]/)[0]], ["to", this.data.result.type.split(/[2]/)[1]], ["setting", this.domainLabel]]])
                        } else
                            this.isSelect = t,
                            e = {
                                src: this.source.init.keyword,
                                tgt: this.data.result.aigcResp,
                                from: this.source.init.from,
                                to: this.source.init.to,
                                action: "dislike" === t ? "bad" : "good",
                                domain: this.domainLabel
                            },
                            window._rlog.push(["_trackCustom", "event", [["action", "dislike" === t ? "translation_result_unlike" : "translation_result_like "], ["from", this.source.init.from], ["to", this.source.init.to], ["setting", this.domainLabel]]]);
                        "dislike" === t ? this.feedbackButtonClickHandler() : _a.A.fanyiFeedback(e).then((t=>{
                            console.log("res", t)
                        }
                        ))
                    }
                },
                changeSize(t) {
                    this.dialogSize = t
                },
                changeSelect() {
                    this.isWriteComment = !0
                },
                updateHistoryList() {
                    "" !== this.source.init.keyword.trim() && this.data.result.translateResult && 0 !== this.data.result.translateResult.length && te.A.$emit("updateHistoryList", {
                        source: this.source,
                        data: this.data,
                        languageFromUserSelectedWhenAuto: this.languageFromUserSelectedWhenAuto,
                        domainType: this.domainType,
                        domain: this.domain
                    })
                },
                updateTextTranslateContent(t) {
                    this.$refs.formatPdfBtnRef && this.$refs.formatPdfBtnRef.refreshFormatPdfText(),
                    this.hideKeyword(),
                    this.source = t.source,
                    this.domainType = t.domainType,
                    this.domain = t.domain,
                    this.$nextTick((()=>{
                        document.querySelector("#js_fanyi_input").innerText = t.source.init.keyword,
                        this.keepLastIndex()
                    }
                    ))
                },
                postTextTranslateHandler: k.A.debounce((function() {
                    var t = "realtime";
                    if (qs ? t = "paste" : Zs && (t = "enter"),
                    this.needRealTimeSearch_flag)
                        if ("selfInnovate" === this.domainType)
                            this.search({
                                needAddHistroy: Zs || qs,
                                from: t,
                                needSendLog: this.needRealTimeSearch_flag
                            });
                        else {
                            if (!this.source.init.keyword.trim())
                                return void this.clear(!1);
                            if (this.showClear = !0,
                            this.nums = this.source.init.keyword.trim().length,
                            this.showPlayVoice = !0,
                            this.showFormatPdfBtn = !0,
                            this.source.init.keyword) {
                                let t = this.source.init.keyword;
                                this.orignTargetAudio = this.updateAudio(this.source.init.from || this.source.init.to, t)
                            } else
                                this.orignTargetAudio = null
                        }
                    this.isSelect = "",
                    this.dialogSize = "452px",
                    this.isWriteComment = !1,
                    "" != this.source.init.keyword ? this.$emit("showDownloadButton", !0) : this.$emit("showDownloadButton", !1),
                    Zs = !1,
                    qs = !1,
                    this.needRealTimeSearch_flag = !0
                }
                ), 500)
            }),
            created() {
                this.$store.dispatch("fetchTextTranslateSecretKey")
            },
            activated() {
                this.keepLastIndex()
            },
            mounted() {
                var t = this;
                setTimeout((()=>{
                    const t = k.A.getUrlParams(window.location.href);
                    t.i ? this.resetTextTranslateFromUrl(t.i, "auto", t.keyfrom) : (this.initDomainFromLS(),
                    this.resetTextTranslateFromLS()),
                    t.keyfrom && window._rlog.push(["_trackCustom", "event", [["keyfrom", t.keyfrom]]])
                }
                ), 500),
                te.A.$on("saveTextTranslateContentToLS", this.saveTextTranslateToLS),
                t.keepLastIndex();
                const e = document.querySelector(".web-frame-content-scroll-container");
                e && e.addEventListener("scroll", this.throttleScrollAreaListener),
                window.addEventListener("scroll", this.throttleScrollAreaListener),
                this.sidebarResizeObserver = new ResizeObserver(this.throttleScrollAreaListener),
                this.sidebarResizeObserver.observe(document.querySelector(".web-frame-inner-container > .sidebar-container")),
                window.addEventListener("resize", this.throttleUpdateActionVisiblity),
                this.containerHeightObserver = new ResizeObserver(k.A.throttle(this.containerHeightObserverCallback, 100)),
                this.containerHeightObserver.observe(this.$refs.js_fanyi_input),
                te.A.$on("updateTextTranslateContent", this.updateTextTranslateContent)
            },
            beforeDestroy() {
                const t = document.querySelector(".web-frame-content-scroll-container");
                t && t.removeEventListener("scroll", this.throttleScrollAreaListener),
                window.removeEventListener("scroll", this.throttleScrollAreaListener),
                window.removeEventListener("resize", this.throttleUpdateActionVisiblity),
                this.containerHeightObserver.disconnect(),
                this.sidebarResizeObserver.disconnect(),
                te.A.$off("saveTextTranslateContentToLS", this.saveTextTranslateToLS),
                te.A.$off("updateTextTranslateContent", this.updateTextTranslateContent)
            }
        };
        const Gs = (0,
        T.A)(zs, [["render", Ca]]);
        var Vs = Gs
          , Js = o.p + "img/fanyi.a74f19d1.png"
          , Ys = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAP1BMVEUqKy4AAAC9vb6np6ggICAqLC4qKy0qKy0qKywrLCwkJDCPj5CIiYsqKi0qLC0qKy4rKy0oLS0oKC0mLS3///8xcQSDAAAAFHRSTlPrAPj3B8+W3WNcDvTzxrWygj8zKMj5F7AAAAFASURBVEjHndZJkoNADETRNEg1ME/3P2uXu9uBq3Bi0F8SfgtHgCQ8jskS3KAe8Dq4sMjjGA5mdoosdbN8YU3o8aE+NCdMooKkURhbR5w0rp9Z9DjNxw9MJnxtkpI1DhdyTc6kUNRJxiZcbHpnEZeLO1v9debXF5MRNxrln0XcKv6xRu8xbX5ZwM3Ck0nxzrctcP6kl8Tm4jfbViGr2rbCzYk5ZHVbcoXaOmS5B0SRV7/crmrkqWABiKMKCQUwx1VCDsxxldAA5rhKSEEdVQl5UEfVjo6OqC9VT1aB5bnizkOpqmvqFANVAHUDHFfcOQSuuAtYuOJugShT3KkcPtN2V7tri792HArdrnbXHYeC9IXrgPMnvdgGnnG82oa5cXXYFpVtLdqWsHHl2w4M2zljOp6sp5r9MLSfofaj13hi/wAJmxMlUC0kzAAAAABJRU5ErkJggg==";
        const tn = t=>((0,
        i.Qi)("data-v-6460fc59"),
        t = t(),
        (0,
        i.jt)(),
        t)
          , en = {
            class: "text-translate-container"
        }
          , on = {
            key: 0,
            class: "bottom-area"
        }
          , an = {
            class: "bottom-area-flex-item"
        }
          , sn = tn((()=>(0,
        i.Lk)("div", {
            class: "bottom-area-flex-item"
        }, null, -1)))
          , nn = {
            class: "box_ch"
        }
          , rn = tn((()=>(0,
        i.Lk)("img", {
            class: "sign",
            src: Js,
            alt: ""
        }, null, -1)))
          , ln = tn((()=>(0,
        i.Lk)("img", {
            class: "ico_close_ch",
            src: Ys,
            alt: ""
        }, null, -1)))
          , un = [ln];
        function cn(t, e, o, a, s, n) {
            const r = (0,
            i.g2)("TextTranslate")
              , l = Vs
              , u = Nt
              , c = _;
            return (0,
            i.uX)(),
            (0,
            i.CE)(i.FK, null, [(0,
            i.bF)(l, {
                onShowDownloadButton: a.show,
                onShowCollapseTip: a.showCollapseTipHandler,
                showTextTranslateHistoryPanel: a.showTextTranslateHistoryPanel
            }, {
                default: (0,
                i.k6)((()=>[(0,
                i.Lk)("div", en, [(0,
                i.bF)(r)])])),
                _: 1
            }, 8, ["onShowDownloadButton", "onShowCollapseTip", "showTextTranslateHistoryPanel"]), a.displayBottomArea ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", on, [(0,
            i.Lk)("div", an, [(0,
            i.bF)(u, {
                data: a.dictResult
            }, null, 8, ["data"])]), sn])) : (0,
            i.Q3)("", !0), (0,
            i.Lk)("div", nn, [a.showDownLoad && a.showD && !a.displayBottomArea ? ((0,
            i.uX)(),
            (0,
            i.CE)("div", {
                key: 0,
                class: (0,
                i.C4)(["download_ch", [{
                    hasShowTextTranslateHistoryPanel: a.showTextTranslateHistoryPanel
                }]])
            }, [rn, (0,
            i.Lk)("span", {
                class: (0,
                i.C4)(["text", {
                    margin_big: "Mac" === a.macOrWindow
                }])
            }, "使用网易有道翻译 " + (0,
            i.v_)(a.macOrWindow) + "版提高你的工作效率", 3), (0,
            i.Lk)("div", {
                class: "download_buttton",
                onClick: e[0] || (e[0] = (...t)=>a.downLoad && a.downLoad(...t))
            }, "免费下载"), (0,
            i.Lk)("div", {
                class: "ico_close_box",
                onClick: e[1] || (e[1] = (...t)=>a.closeDownLoad && a.closeDownLoad(...t))
            }, un)], 2)) : (0,
            i.Q3)("", !0)]), (0,
            i.bF)(c, {
                isENandZH: a.isENandZH,
                isInsertFromPaste: a.isInsertFromPaste,
                displayBottomArea: a.displayBottomArea
            }, null, 8, ["isENandZH", "isInsertFromPaste", "displayBottomArea"])], 64)
        }
        var dn = {
            name: "TextTranslate",
            components: {
                TextTranslateCore: Vs,
                DictResult: Nt,
                AiTranslateGuide: _
            },
            setup() {
                const t = (0,
                A.Pj)()
                  , e = (0,
                i.EW)((()=>t.state.text.dictResult))
                  , o = (0,
                i.EW)((()=>t.state.text.isENandZH))
                  , a = (0,
                i.EW)((()=>t.state.text.isInsertFromPaste))
                  , s = (0,
                i.EW)((()=>"{}" !== JSON.stringify(e.value)))
                  , n = (0,
                i.KR)("")
                  , r = (0,
                i.KR)(!0)
                  , l = (0,
                i.nI)()
                  , u = l.appContext.config.globalProperties.$cookies
                  , c = (0,
                i.KR)(!1)
                  , d = (0,
                i.WQ)("showCollapseTip")
                  , h = (0,
                i.WQ)("showTextTranslateHistoryPanel")
                  , m = t=>{
                    d.value = t
                }
                ;
                (0,
                i.sV)((()=>{
                    window._rlog.push(["_trackCustom", "event", [["show", "text_translation"]]]),
                    k.A.isMac() ? n.value = "Mac" : n.value = "Windows",
                    null !== u.get("download_cookie") && (r.value = !1)
                }
                ));
                const g = ()=>{
                    const t = k.A.isMac() ? "https://codown.youdao.com/cidian/download/MacDict_fanyiweb_below.dmg" : "https://download.ydstatic.com/cidian/YoudaoDict_fanyiweb_below.exe";
                    k.A.downloadFile(t)
                }
                  , p = ()=>{
                    r.value = !1,
                    u.set("download_cookie", !0, 86400)
                }
                  , f = t=>{
                    c.value = t
                }
                ;
                return {
                    dictResult: e,
                    displayBottomArea: s,
                    macOrWindow: n,
                    downLoad: g,
                    showDownLoad: r,
                    closeDownLoad: p,
                    show: f,
                    showD: c,
                    isENandZH: o,
                    isInsertFromPaste: a,
                    showCollapseTip: d,
                    showCollapseTipHandler: m,
                    showTextTranslateHistoryPanel: h
                }
            }
        };
        const hn = (0,
        T.A)(dn, [["render", cn], ["__scopeId", "data-v-6460fc59"]]);
        var mn = hn
    },
    8692: function(t) {
        "use strict";
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACJSURBVHgBbdDBDYMwDAVQfxOYh1U6Qs8ZhkPlSy+MwCjtPIAIfFAkC+xbkpcfO/jY96eyvHPOfwlqGKxPXTsqUUGazKyPUNOliQbcICJGWV81uaJGrj3U2x7Ps4hHPId/quKtHNAhlnrIJCLFcyjcG2cS1/eeETUeDYgIRQMqPzNCrDPpQAXtuAPee2aQ1xGrhwAAAABJRU5ErkJggg=="
    },
    79978: function(t, e, o) {
        "use strict";
        var a = o(46518)
          , i = o(69565)
          , s = o(79504)
          , n = o(67750)
          , r = o(94901)
          , l = o(64117)
          , u = o(60788)
          , c = o(655)
          , d = o(55966)
          , h = o(61034)
          , m = o(2478)
          , g = o(78227)
          , p = o(96395)
          , f = g("replace")
          , A = TypeError
          , y = s("".indexOf)
          , k = s("".replace)
          , v = s("".slice)
          , w = Math.max;
        a({
            target: "String",
            proto: !0
        }, {
            replaceAll: function(t, e) {
                var o, a, s, g, T, C, _, x, b, S = n(this), L = 0, E = 0, F = "";
                if (!l(t)) {
                    if (o = u(t),
                    o && (a = c(n(h(t))),
                    !~y(a, "g")))
                        throw new A("`.replaceAll` does not allow non-global regexes");
                    if (s = d(t, f),
                    s)
                        return i(s, t, S, e);
                    if (p && o)
                        return k(c(S), t, e)
                }
                g = c(S),
                T = c(t),
                C = r(e),
                C || (e = c(e)),
                _ = T.length,
                x = w(1, _),
                L = y(g, T);
                while (-1 !== L)
                    b = C ? c(e(T, L, g)) : m(T, g, L, [], void 0, e),
                    F += v(g, E, L) + b,
                    E = L + _,
                    L = L + x > g.length ? -1 : y(g, T, L + x);
                return E < g.length && (F += v(g, E)),
                F
            }
        })
    }
}]);
