! function(rr, or, ar) {
    var t, e;
    t = void 0 !== rr ? rr : this, e = function(w, t) {
        var e = [],
            C = w.document,
            u = e.slice,
            m = e.concat,
            s = e.push,
            r = e.indexOf,
            i = {},
            n = i.toString,
            f = i.hasOwnProperty,
            g = {},
            k = function(t, e) {
                return new k.fn.init(t, e)
            },
            o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            a = /^-ms-/,
            c = /-([\da-z])/gi,
            l = function(t, e) {
                return e.toUpperCase()
            };

        function d(t) {
            var e = !!t && "length" in t && t.length,
                i = k.type(t);
            return "function" !== i && !k.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }
        k.fn = k.prototype = {
            jquery: "2.2.4",
            constructor: k,
            selector: "",
            length: 0,
            toArray: function() {
                return u.call(this)
            },
            get: function(t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : u.call(this)
            },
            pushStack: function(t) {
                var e = k.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return k.each(this, t)
            },
            map: function(i) {
                return this.pushStack(k.map(this, function(t, e) {
                    return i.call(t, e, t)
                }))
            },
            slice: function() {
                return this.pushStack(u.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= i && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: s,
            sort: e.sort,
            splice: e.splice
        }, k.extend = k.fn.extend = function() {
            var t, e, i, n, r, o, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || k.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                if (null != (t = arguments[s]))
                    for (e in t) i = a[e], a !== (n = t[e]) && (l && n && (k.isPlainObject(n) || (r = k.isArray(n))) ? (o = r ? (r = !1, i && k.isArray(i) ? i : []) : i && k.isPlainObject(i) ? i : {}, a[e] = k.extend(l, o, n)) : void 0 !== n && (a[e] = n));
            return a
        }, k.extend({
            expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === k.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !k.isArray(t) && 0 <= e - parseFloat(e) + 1
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== k.type(t) || t.nodeType || k.isWindow(t)) return !1;
                if (t.constructor && !f.call(t, "constructor") && !f.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || f.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[n.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                (t = k.trim(t)) && (1 === t.indexOf("use strict") ? ((e = C.createElement("script")).text = t, C.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(a, "ms-").replace(c, l)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, n = 0;
                if (d(t))
                    for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(o, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (d(Object(t)) ? k.merge(i, "string" == typeof t ? [t] : t) : s.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : r.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n = [], r = 0, o = t.length, a = !i; r < o; r++) !e(t[r], r) !== a && n.push(t[r]);
                return n
            },
            map: function(t, e, i) {
                var n, r, o = 0,
                    a = [];
                if (d(t))
                    for (n = t.length; o < n; o++) null != (r = e(t[o], o, i)) && a.push(r);
                else
                    for (o in t) null != (r = e(t[o], o, i)) && a.push(r);
                return m.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                return "string" == typeof e && (i = t[e], e = t, t = i), k.isFunction(t) ? (n = u.call(arguments, 2), (r = function() {
                    return t.apply(e || this, n.concat(u.call(arguments)))
                }).guid = t.guid = t.guid || k.guid++, r) : void 0
            },
            now: Date.now,
            support: g
        }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = e[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            i["[object " + e + "]"] = e.toLowerCase()
        });
        var h = function(i) {
            var t, f, S, o, r, m, d, g, A, c, l, _, w, a, C, y, s, u, v, k = "sizzle" + 1 * new Date,
                b = i.document,
                T = 0,
                n = 0,
                h = rt(),
                p = rt(),
                x = rt(),
                E = function(t, e) {
                    return t === e && (l = !0), 0
                },
                M = {}.hasOwnProperty,
                e = [],
                D = e.pop,
                P = e.push,
                O = e.push,
                L = e.slice,
                z = function(t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                N = "[\\x20\\t\\r\\n\\f]",
                B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                R = "\\[" + N + "*(" + B + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + N + "*\\]",
                j = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                q = new RegExp(N + "+", "g"),
                H = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                F = new RegExp("^" + N + "*," + N + "*"),
                V = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                W = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
                G = new RegExp(j),
                Y = new RegExp("^" + B + "$"),
                U = {
                    ID: new RegExp("^#(" + B + ")"),
                    CLASS: new RegExp("^\\.(" + B + ")"),
                    TAG: new RegExp("^(" + B + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + j),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + I + ")$", "i"),
                    needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
                },
                $ = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                Z = /^[^{]+\{\s*\[native \w/,
                X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                J = /[+~]/,
                Q = /'|\\/g,
                tt = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
                et = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                it = function() {
                    _()
                };
            try {
                O.apply(e = L.call(b.childNodes), b.childNodes), e[b.childNodes.length].nodeType
            } catch (t) {
                O = {
                    apply: e.length ? function(t, e) {
                        P.apply(t, L.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function nt(t, e, i, n) {
                var r, o, a, s, c, l, u, d, h = e && e.ownerDocument,
                    p = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return i;
                if (!n && ((e ? e.ownerDocument || e : b) !== w && _(e), e = e || w, C)) {
                    if (11 !== p && (l = X.exec(t)))
                        if (r = l[1]) {
                            if (9 === p) {
                                if (!(a = e.getElementById(r))) return i;
                                if (a.id === r) return i.push(a), i
                            } else if (h && (a = h.getElementById(r)) && v(e, a) && a.id === r) return i.push(a), i
                        } else {
                            if (l[2]) return O.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = l[3]) && f.getElementsByClassName && e.getElementsByClassName) return O.apply(i, e.getElementsByClassName(r)), i
                        } if (f.qsa && !x[t + " "] && (!y || !y.test(t))) {
                        if (1 !== p) h = e, d = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((s = e.getAttribute("id")) ? s = s.replace(Q, "\\$&") : e.setAttribute("id", s = k), o = (u = m(t)).length, c = Y.test(s) ? "#" + s : "[id='" + s + "']"; o--;) u[o] = c + " " + ft(u[o]);
                            d = u.join(","), h = J.test(t) && ht(e.parentNode) || e
                        }
                        if (d) try {
                            return O.apply(i, h.querySelectorAll(d)), i
                        } catch (t) {} finally {
                            s === k && e.removeAttribute("id")
                        }
                    }
                }
                return g(t.replace(H, "$1"), e, i, n)
            }

            function rt() {
                var n = [];
                return function t(e, i) {
                    return n.push(e + " ") > S.cacheLength && delete t[n.shift()], t[e + " "] = i
                }
            }

            function ot(t) {
                return t[k] = !0, t
            }

            function at(t) {
                var e = w.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function st(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) S.attrHandle[i[n]] = e
            }

            function ct(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function lt(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function ut(i) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === i
                }
            }

            function dt(a) {
                return ot(function(o) {
                    return o = +o, ot(function(t, e) {
                        for (var i, n = a([], t.length, o), r = n.length; r--;) t[i = n[r]] && (t[i] = !(e[i] = t[i]))
                    })
                })
            }

            function ht(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (t in f = nt.support = {}, r = nt.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, _ = nt.setDocument = function(t) {
                    var e, i, n = t ? t.ownerDocument || t : b;
                    return n !== w && 9 === n.nodeType && n.documentElement && (a = (w = n).documentElement, C = !r(w), (i = w.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), f.attributes = at(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), f.getElementsByTagName = at(function(t) {
                        return t.appendChild(w.createComment("")), !t.getElementsByTagName("*").length
                    }), f.getElementsByClassName = Z.test(w.getElementsByClassName), f.getById = at(function(t) {
                        return a.appendChild(t).id = k, !w.getElementsByName || !w.getElementsByName(k).length
                    }), f.getById ? (S.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && C) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }, S.filter.ID = function(t) {
                        var e = t.replace(tt, et);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete S.find.ID, S.filter.ID = function(t) {
                        var i = t.replace(tt, et);
                        return function(t) {
                            var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return e && e.value === i
                        }
                    }), S.find.TAG = f.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" !== t) return o;
                        for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }, S.find.CLASS = f.getElementsByClassName && function(t, e) {
                        return void 0 !== e.getElementsByClassName && C ? e.getElementsByClassName(t) : void 0
                    }, s = [], y = [], (f.qsa = Z.test(w.querySelectorAll)) && (at(function(t) {
                        a.appendChild(t).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || y.push("\\[" + N + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + k + "-]").length || y.push("~="), t.querySelectorAll(":checked").length || y.push(":checked"), t.querySelectorAll("a#" + k + "+*").length || y.push(".#.+[+~]")
                    }), at(function(t) {
                        var e = w.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && y.push("name" + N + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), y.push(",.*:")
                    })), (f.matchesSelector = Z.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && at(function(t) {
                        f.disconnectedMatch = u.call(t, "div"), u.call(t, "[s!='']:x"), s.push("!=", j)
                    }), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), e = Z.test(a.compareDocumentPosition), v = e || Z.test(a.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, E = e ? function(t, e) {
                        if (t === e) return l = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === w || t.ownerDocument === b && v(b, t) ? -1 : e === w || e.ownerDocument === b && v(b, e) ? 1 : c ? z(c, t) - z(c, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return l = !0, 0;
                        var i, n = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            s = [e];
                        if (!r || !o) return t === w ? -1 : e === w ? 1 : r ? -1 : o ? 1 : c ? z(c, t) - z(c, e) : 0;
                        if (r === o) return ct(t, e);
                        for (i = t; i = i.parentNode;) a.unshift(i);
                        for (i = e; i = i.parentNode;) s.unshift(i);
                        for (; a[n] === s[n];) n++;
                        return n ? ct(a[n], s[n]) : a[n] === b ? -1 : s[n] === b ? 1 : 0
                    }), w
                }, nt.matches = function(t, e) {
                    return nt(t, null, null, e)
                }, nt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== w && _(t), e = e.replace(W, "='$1']"), f.matchesSelector && C && !x[e + " "] && (!s || !s.test(e)) && (!y || !y.test(e))) try {
                        var i = u.call(t, e);
                        if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return 0 < nt(e, w, null, [t]).length
                }, nt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== w && _(t), v(t, e)
                }, nt.attr = function(t, e) {
                    (t.ownerDocument || t) !== w && _(t);
                    var i = S.attrHandle[e.toLowerCase()],
                        n = i && M.call(S.attrHandle, e.toLowerCase()) ? i(t, e, !C) : void 0;
                    return void 0 !== n ? n : f.attributes || !C ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, nt.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, nt.uniqueSort = function(t) {
                    var e, i = [],
                        n = 0,
                        r = 0;
                    if (l = !f.detectDuplicates, c = !f.sortStable && t.slice(0), t.sort(E), l) {
                        for (; e = t[r++];) e === t[r] && (n = i.push(r));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return c = null, t
                }, o = nt.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += o(e);
                    return i
                }, (S = nt.selectors = {
                    cacheLength: 50,
                    createPseudo: ot,
                    match: U,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(tt, et), t[3] = (t[3] || t[4] || t[5] || "").replace(tt, et), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || nt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && nt.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && G.test(i) && (e = m(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(tt, et).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = h[t + " "];
                            return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && h(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(i, n, r) {
                            return function(t) {
                                var e = nt.attr(t, i);
                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(q, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(f, t, e, m, g) {
                            var y = "nth" !== f.slice(0, 3),
                                v = "last" !== f.slice(-4),
                                b = "of-type" === t;
                            return 1 === m && 0 === g ? function(t) {
                                return !!t.parentNode
                            } : function(t, e, i) {
                                var n, r, o, a, s, c, l = y !== v ? "nextSibling" : "previousSibling",
                                    u = t.parentNode,
                                    d = b && t.nodeName.toLowerCase(),
                                    h = !i && !b,
                                    p = !1;
                                if (u) {
                                    if (y) {
                                        for (; l;) {
                                            for (a = t; a = a[l];)
                                                if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                            c = l = "only" === f && !c && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (c = [v ? u.firstChild : u.lastChild], v && h) {
                                        for (p = (s = (n = (r = (o = (a = u)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] || [])[0] === T && n[1]) && n[2], a = s && u.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || c.pop();)
                                            if (1 === a.nodeType && ++p && a === t) {
                                                r[f] = [T, s, p];
                                                break
                                            }
                                    } else if (h && (p = s = (n = (r = (o = (a = t)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] || [])[0] === T && n[1]), !1 === p)
                                        for (;
                                            (a = ++s && a && a[l] || (p = s = 0) || c.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (h && ((r = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[f] = [T, p]), a !== t)););
                                    return (p -= g) === m || p % m == 0 && 0 <= p / m
                                }
                            }
                        },
                        PSEUDO: function(t, o) {
                            var e, a = S.pseudos[t] || S.setFilters[t.toLowerCase()] || nt.error("unsupported pseudo: " + t);
                            return a[k] ? a(o) : 1 < a.length ? (e = [t, t, "", o], S.setFilters.hasOwnProperty(t.toLowerCase()) ? ot(function(t, e) {
                                for (var i, n = a(t, o), r = n.length; r--;) t[i = z(t, n[r])] = !(e[i] = n[r])
                            }) : function(t) {
                                return a(t, 0, e)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: ot(function(t) {
                            var n = [],
                                r = [],
                                s = d(t.replace(H, "$1"));
                            return s[k] ? ot(function(t, e, i, n) {
                                for (var r, o = s(t, null, n, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                            }) : function(t, e, i) {
                                return n[0] = t, s(n, null, i, r), n[0] = null, !r.pop()
                            }
                        }),
                        has: ot(function(e) {
                            return function(t) {
                                return 0 < nt(e, t).length
                            }
                        }),
                        contains: ot(function(e) {
                            return e = e.replace(tt, et),
                                function(t) {
                                    return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                                }
                        }),
                        lang: ot(function(i) {
                            return Y.test(i || "") || nt.error("unsupported lang: " + i), i = i.replace(tt, et).toLowerCase(),
                                function(t) {
                                    var e;
                                    do {
                                        if (e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var e = i.location && i.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function(t) {
                            return t === a
                        },
                        focus: function(t) {
                            return t === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !S.pseudos.empty(t)
                        },
                        header: function(t) {
                            return K.test(t.nodeName)
                        },
                        input: function(t) {
                            return $.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: dt(function() {
                            return [0]
                        }),
                        last: dt(function(t, e) {
                            return [e - 1]
                        }),
                        eq: dt(function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: dt(function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: dt(function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: dt(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                            return t
                        }),
                        gt: dt(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = S.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) S.pseudos[t] = lt(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) S.pseudos[t] = ut(t);

            function pt() {}

            function ft(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function mt(s, t, e) {
                var c = t.dir,
                    l = e && "parentNode" === c,
                    u = n++;
                return t.first ? function(t, e, i) {
                    for (; t = t[c];)
                        if (1 === t.nodeType || l) return s(t, e, i)
                } : function(t, e, i) {
                    var n, r, o, a = [T, u];
                    if (i) {
                        for (; t = t[c];)
                            if ((1 === t.nodeType || l) && s(t, e, i)) return !0
                    } else
                        for (; t = t[c];)
                            if (1 === t.nodeType || l) {
                                if ((n = (r = (o = t[k] || (t[k] = {}))[t.uniqueID] || (o[t.uniqueID] = {}))[c]) && n[0] === T && n[1] === u) return a[2] = n[2];
                                if ((r[c] = a)[2] = s(t, e, i)) return !0
                            }
                }
            }

            function gt(r) {
                return 1 < r.length ? function(t, e, i) {
                    for (var n = r.length; n--;)
                        if (!r[n](t, e, i)) return !1;
                    return !0
                } : r[0]
            }

            function yt(t, e, i, n, r) {
                for (var o, a = [], s = 0, c = t.length, l = null != e; s < c; s++)(o = t[s]) && (i && !i(o, n, r) || (a.push(o), l && e.push(s)));
                return a
            }

            function vt(p, f, m, g, y, t) {
                return g && !g[k] && (g = vt(g)), y && !y[k] && (y = vt(y, t)), ot(function(t, e, i, n) {
                    var r, o, a, s = [],
                        c = [],
                        l = e.length,
                        u = t || function(t, e, i) {
                            for (var n = 0, r = e.length; n < r; n++) nt(t, e[n], i);
                            return i
                        }(f || "*", i.nodeType ? [i] : i, []),
                        d = !p || !t && f ? u : yt(u, s, p, i, n),
                        h = m ? y || (t ? p : l || g) ? [] : e : d;
                    if (m && m(d, h, i, n), g)
                        for (r = yt(h, c), g(r, [], i, n), o = r.length; o--;)(a = r[o]) && (h[c[o]] = !(d[c[o]] = a));
                    if (t) {
                        if (y || p) {
                            if (y) {
                                for (r = [], o = h.length; o--;)(a = h[o]) && r.push(d[o] = a);
                                y(null, h = [], r, n)
                            }
                            for (o = h.length; o--;)(a = h[o]) && -1 < (r = y ? z(t, a) : s[o]) && (t[r] = !(e[r] = a))
                        }
                    } else h = yt(h === e ? h.splice(l, h.length) : h), y ? y(null, e, h, n) : O.apply(e, h)
                })
            }

            function bt(t) {
                for (var r, e, i, n = t.length, o = S.relative[t[0].type], a = o || S.relative[" "], s = o ? 1 : 0, c = mt(function(t) {
                        return t === r
                    }, a, !0), l = mt(function(t) {
                        return -1 < z(r, t)
                    }, a, !0), u = [function(t, e, i) {
                        var n = !o && (i || e !== A) || ((r = e).nodeType ? c(t, e, i) : l(t, e, i));
                        return r = null, n
                    }]; s < n; s++)
                    if (e = S.relative[t[s].type]) u = [mt(gt(u), e)];
                    else {
                        if ((e = S.filter[t[s].type].apply(null, t[s].matches))[k]) {
                            for (i = ++s; i < n && !S.relative[t[i].type]; i++);
                            return vt(1 < s && gt(u), 1 < s && ft(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(H, "$1"), e, s < i && bt(t.slice(s, i)), i < n && bt(t = t.slice(i)), i < n && ft(t))
                        }
                        u.push(e)
                    } return gt(u)
            }
            return pt.prototype = S.filters = S.pseudos, S.setFilters = new pt, m = nt.tokenize = function(t, e) {
                var i, n, r, o, a, s, c, l = p[t + " "];
                if (l) return e ? 0 : l.slice(0);
                for (a = t, s = [], c = S.preFilter; a;) {
                    for (o in i && !(n = F.exec(a)) || (n && (a = a.slice(n[0].length) || a), s.push(r = [])), i = !1, (n = V.exec(a)) && (i = n.shift(), r.push({
                            value: i,
                            type: n[0].replace(H, " ")
                        }), a = a.slice(i.length)), S.filter) !(n = U[o].exec(a)) || c[o] && !(n = c[o](n)) || (i = n.shift(), r.push({
                        value: i,
                        type: o,
                        matches: n
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? nt.error(t) : p(t, s).slice(0)
            }, d = nt.compile = function(t, e) {
                var i, g, y, v, b, n, r = [],
                    o = [],
                    a = x[t + " "];
                if (!a) {
                    for (e || (e = m(t)), i = e.length; i--;)(a = bt(e[i]))[k] ? r.push(a) : o.push(a);
                    (a = x(t, (g = o, v = 0 < (y = r).length, b = 0 < g.length, n = function(t, e, i, n, r) {
                        var o, a, s, c = 0,
                            l = "0",
                            u = t && [],
                            d = [],
                            h = A,
                            p = t || b && S.find.TAG("*", r),
                            f = T += null == h ? 1 : Math.random() || .1,
                            m = p.length;
                        for (r && (A = e === w || e || r); l !== m && null != (o = p[l]); l++) {
                            if (b && o) {
                                for (a = 0, e || o.ownerDocument === w || (_(o), i = !C); s = g[a++];)
                                    if (s(o, e || w, i)) {
                                        n.push(o);
                                        break
                                    } r && (T = f)
                            }
                            v && ((o = !s && o) && c--, t && u.push(o))
                        }
                        if (c += l, v && l !== c) {
                            for (a = 0; s = y[a++];) s(u, d, e, i);
                            if (t) {
                                if (0 < c)
                                    for (; l--;) u[l] || d[l] || (d[l] = D.call(n));
                                d = yt(d)
                            }
                            O.apply(n, d), r && !t && 0 < d.length && 1 < c + y.length && nt.uniqueSort(n)
                        }
                        return r && (T = f, A = h), u
                    }, v ? ot(n) : n))).selector = t
                }
                return a
            }, g = nt.select = function(t, e, i, n) {
                var r, o, a, s, c, l = "function" == typeof t && t,
                    u = !n && m(t = l.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && f.getById && 9 === e.nodeType && C && S.relative[o[1].type]) {
                        if (!(e = (S.find.ID(a.matches[0].replace(tt, et), e) || [])[0])) return i;
                        l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = U.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !S.relative[s = a.type]);)
                        if ((c = S.find[s]) && (n = c(a.matches[0].replace(tt, et), J.test(o[0].type) && ht(e.parentNode) || e))) {
                            if (o.splice(r, 1), !(t = n.length && ft(o))) return O.apply(i, n), i;
                            break
                        }
                }
                return (l || d(t, u))(n, e, !C, i, !e || J.test(t) && ht(e.parentNode) || e), i
            }, f.sortStable = k.split("").sort(E).join("") === k, f.detectDuplicates = !!l, _(), f.sortDetached = at(function(t) {
                return 1 & t.compareDocumentPosition(w.createElement("div"))
            }), at(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || st("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), f.attributes && at(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || st("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), at(function(t) {
                return null == t.getAttribute("disabled")
            }) || st(I, function(t, e, i) {
                var n;
                return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), nt
        }(w);
        k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains;
        var p = function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && k(t).is(i)) break;
                        n.push(t)
                    } return n
            },
            y = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            v = k.expr.match.needsContext,
            b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            S = /^.[^:#\[\.,]*$/;

        function A(t, i, n) {
            if (k.isFunction(i)) return k.grep(t, function(t, e) {
                return !!i.call(t, e, t) !== n
            });
            if (i.nodeType) return k.grep(t, function(t) {
                return t === i !== n
            });
            if ("string" == typeof i) {
                if (S.test(i)) return k.filter(i, t, n);
                i = k.filter(i, t)
            }
            return k.grep(t, function(t) {
                return -1 < r.call(i, t) !== n
            })
        }
        k.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? k.find.matchesSelector(n, t) ? [n] : [] : k.find.matches(t, k.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, k.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(k(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (k.contains(r[e], this)) return !0
                }));
                for (e = 0; e < i; e++) k.find(t, r[e], n);
                return (n = this.pushStack(1 < i ? k.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(A(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(A(this, t || [], !0))
            },
            is: function(t) {
                return !!A(this, "string" == typeof t && v.test(t) ? k(t) : t || [], !1).length
            }
        });
        var _, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (k.fn.init = function(t, e, i) {
            var n, r;
            if (!t) return this;
            if (i = i || _, "string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : k.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(k) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), k.makeArray(t, this));
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : T.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), b.test(n[1]) && k.isPlainObject(e))
                    for (n in e) k.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (r = C.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = C, this.selector = t, this
        }).prototype = k.fn, _ = k(C);
        var x = /^(?:parents|prev(?:Until|All))/,
            E = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function M(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        k.fn.extend({
            has: function(t) {
                var e = k(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++)
                        if (k.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, o = [], a = v.test(t) || "string" != typeof t ? k(t, e || this.context) : 0; n < r; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? -1 < a.index(i) : 1 === i.nodeType && k.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? r.call(k(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), k.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return p(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return p(t, "parentNode", i)
            },
            next: function(t) {
                return M(t, "nextSibling")
            },
            prev: function(t) {
                return M(t, "previousSibling")
            },
            nextAll: function(t) {
                return p(t, "nextSibling")
            },
            prevAll: function(t) {
                return p(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return p(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return p(t, "previousSibling", i)
            },
            siblings: function(t) {
                return y((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return y(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || k.merge([], t.childNodes)
            }
        }, function(n, r) {
            k.fn[n] = function(t, e) {
                var i = k.map(this, r, t);
                return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = k.filter(e, i)), 1 < this.length && (E[n] || k.uniqueSort(i), x.test(n) && i.reverse()), this.pushStack(i)
            }
        });
        var D, P = /\S+/g;

        function O() {
            C.removeEventListener("DOMContentLoaded", O), w.removeEventListener("load", O), k.ready()
        }
        k.Callbacks = function(n) {
            var t, i;
            n = "string" == typeof n ? (t = n, i = {}, k.each(t.match(P) || [], function(t, e) {
                i[e] = !0
            }), i) : k.extend({}, n);
            var r, e, o, a, s = [],
                c = [],
                l = -1,
                u = function() {
                    for (a = n.once, o = r = !0; c.length; l = -1)
                        for (e = c.shift(); ++l < s.length;) !1 === s[l].apply(e[0], e[1]) && n.stopOnFalse && (l = s.length, e = !1);
                    n.memory || (e = !1), r = !1, a && (s = e ? [] : "")
                },
                d = {
                    add: function() {
                        return s && (e && !r && (l = s.length - 1, c.push(e)), function i(t) {
                            k.each(t, function(t, e) {
                                k.isFunction(e) ? n.unique && d.has(e) || s.push(e) : e && e.length && "string" !== k.type(e) && i(e)
                            })
                        }(arguments), e && !r && u()), this
                    },
                    remove: function() {
                        return k.each(arguments, function(t, e) {
                            for (var i; - 1 < (i = k.inArray(e, s, i));) s.splice(i, 1), i <= l && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? -1 < k.inArray(t, s) : 0 < s.length
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return a = c = [], s = e = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return a = c = [], e || (s = e = ""), this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(t, e) {
                        return a || (e = [t, (e = e || []).slice ? e.slice() : e], c.push(e), r || u()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return d
        }, k.extend({
            Deferred: function(t) {
                var o = [
                        ["resolve", "done", k.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", k.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", k.Callbacks("memory")]
                    ],
                    r = "pending",
                    a = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var r = arguments;
                            return k.Deferred(function(n) {
                                k.each(o, function(t, e) {
                                    var i = k.isFunction(r[t]) && r[t];
                                    s[e[1]](function() {
                                        var t = i && i.apply(this, arguments);
                                        t && k.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this === a ? n.promise() : this, i ? [t] : arguments)
                                    })
                                }), r = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? k.extend(t, a) : a
                        }
                    },
                    s = {};
                return a.pipe = a.then, k.each(o, function(t, e) {
                    var i = e[2],
                        n = e[3];
                    a[e[1]] = i.add, n && i.add(function() {
                        r = n
                    }, o[1 ^ t][2].disable, o[2][2].lock), s[e[0]] = function() {
                        return s[e[0] + "With"](this === s ? a : this, arguments), this
                    }, s[e[0] + "With"] = i.fireWith
                }), a.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var r, e, i, n = 0,
                    o = u.call(arguments),
                    a = o.length,
                    s = 1 !== a || t && k.isFunction(t.promise) ? a : 0,
                    c = 1 === s ? t : k.Deferred(),
                    l = function(e, i, n) {
                        return function(t) {
                            i[e] = this, n[e] = 1 < arguments.length ? u.call(arguments) : t, n === r ? c.notifyWith(i, n) : --s || c.resolveWith(i, n)
                        }
                    };
                if (1 < a)
                    for (r = new Array(a), e = new Array(a), i = new Array(a); n < a; n++) o[n] && k.isFunction(o[n].promise) ? o[n].promise().progress(l(n, e, r)).done(l(n, i, o)).fail(c.reject) : --s;
                return s || c.resolveWith(i, o), c.promise()
            }
        }), k.fn.ready = function(t) {
            return k.ready.promise().done(t), this
        }, k.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? k.readyWait++ : k.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== t && 0 < --k.readyWait || (D.resolveWith(C, [k]), k.fn.triggerHandler && (k(C).triggerHandler("ready"), k(C).off("ready"))))
            }
        }), k.ready.promise = function(t) {
            return D || (D = k.Deferred(), "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? w.setTimeout(k.ready) : (C.addEventListener("DOMContentLoaded", O), w.addEventListener("load", O))), D.promise(t)
        }, k.ready.promise();
        var L = function(t, e, i, n, r, o, a) {
                var s = 0,
                    c = t.length,
                    l = null == i;
                if ("object" === k.type(i))
                    for (s in r = !0, i) L(t, e, s, i[s], !0, o, a);
                else if (void 0 !== n && (r = !0, k.isFunction(n) || (a = !0), l && (e = a ? (e.call(t, n), null) : (l = e, function(t, e, i) {
                        return l.call(k(t), i)
                    })), e))
                    for (; s < c; s++) e(t[s], i, a ? n : n.call(t[s], s, e(t[s], i)));
                return r ? t : l ? e.call(t) : c ? e(t[0], i) : o
            },
            z = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };

        function I() {
            this.expando = k.expando + I.uid++
        }
        I.uid = 1, I.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!z(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, z(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[e] = i;
                else
                    for (n in e) r[n] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, k.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, r, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
                    else {
                        i = (n = k.isArray(e) ? e.concat(e.map(k.camelCase)) : (r = k.camelCase(e), e in o ? [e, r] : (n = r) in o ? [n] : n.match(P) || [])).length;
                        for (; i--;) delete o[n[i]]
                    }(void 0 === e || k.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !k.isEmptyObject(e)
            }
        };
        var N = new I,
            B = new I,
            R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            j = /[A-Z]/g;

        function q(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(j, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : R.test(i) ? k.parseJSON(i) : i)
                    } catch (t) {}
                    B.set(t, e, i)
                } else i = void 0;
            return i
        }
        k.extend({
            hasData: function(t) {
                return B.hasData(t) || N.hasData(t)
            },
            data: function(t, e, i) {
                return B.access(t, e, i)
            },
            removeData: function(t, e) {
                B.remove(t, e)
            },
            _data: function(t, e, i) {
                return N.access(t, e, i)
            },
            _removeData: function(t, e) {
                N.remove(t, e)
            }
        }), k.fn.extend({
            data: function(n, t) {
                var e, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                    B.set(this, n)
                }) : L(this, function(e) {
                    var t, i;
                    if (o && void 0 === e) {
                        if (void 0 !== (t = B.get(o, n) || B.get(o, n.replace(j, "-$&").toLowerCase()))) return t;
                        if (i = k.camelCase(n), void 0 !== (t = B.get(o, i))) return t;
                        if (void 0 !== (t = q(o, i, void 0))) return t
                    } else i = k.camelCase(n), this.each(function() {
                        var t = B.get(this, i);
                        B.set(this, i, e), -1 < n.indexOf("-") && void 0 !== t && B.set(this, n, e)
                    })
                }, null, t, 1 < arguments.length, null, !0);
                if (this.length && (r = B.get(o), 1 === o.nodeType && !N.get(o, "hasDataAttrs"))) {
                    for (e = a.length; e--;) a[e] && (0 === (i = a[e].name).indexOf("data-") && (i = k.camelCase(i.slice(5)), q(o, i, r[i])));
                    N.set(o, "hasDataAttrs", !0)
                }
                return r
            },
            removeData: function(t) {
                return this.each(function() {
                    B.remove(this, t)
                })
            }
        }), k.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = N.get(t, e), i && (!n || k.isArray(i) ? n = N.access(t, e, k.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = k.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    o = k._queueHooks(t, e);
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, function() {
                    k.dequeue(t, e)
                }, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return N.get(t, i) || N.access(t, i, {
                    empty: k.Callbacks("once memory").add(function() {
                        N.remove(t, [e + "queue", i])
                    })
                })
            }
        }), k.fn.extend({
            queue: function(e, i) {
                var t = 2;
                return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? k.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                    var t = k.queue(this, e, i);
                    k._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && k.dequeue(this, e)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    k.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = k.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --n || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = N.get(o[a], t + "queueHooks")) && i.empty && (n++, i.empty.add(s));
                return s(), r.promise(e)
            }
        });
        var H = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            F = new RegExp("^(?:([+-])=|)(" + H + ")([a-z%]*)$", "i"),
            V = ["Top", "Right", "Bottom", "Left"],
            W = function(t, e) {
                return t = e || t, "none" === k.css(t, "display") || !k.contains(t.ownerDocument, t)
            };

        function G(t, e, i, n) {
            var r, o = 1,
                a = 20,
                s = n ? function() {
                    return n.cur()
                } : function() {
                    return k.css(t, e, "")
                },
                c = s(),
                l = i && i[3] || (k.cssNumber[e] ? "" : "px"),
                u = (k.cssNumber[e] || "px" !== l && +c) && F.exec(k.css(t, e));
            if (u && u[3] !== l)
                for (l = l || u[3], i = i || [], u = +c || 1; u /= o = o || ".5", k.style(t, e, u + l), o !== (o = s() / c) && 1 !== o && --a;);
            return i && (u = +u || +c || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = l, n.start = u, n.end = r)), r
        }
        var Y = /^(?:checkbox|radio)$/i,
            U = /<([\w:-]+)/,
            $ = /^$|\/(?:java|ecma)script/i,
            K = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function Z(t, e) {
            var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && k.nodeName(t, e) ? k.merge([t], i) : i
        }

        function X(t, e) {
            for (var i = 0, n = t.length; i < n; i++) N.set(t[i], "globalEval", !e || N.get(e[i], "globalEval"))
        }
        K.optgroup = K.option, K.tbody = K.tfoot = K.colgroup = K.caption = K.thead, K.th = K.td;
        var J, Q, tt = /<|&#?\w+;/;

        function et(t, e, i, n, r) {
            for (var o, a, s, c, l, u, d = e.createDocumentFragment(), h = [], p = 0, f = t.length; p < f; p++)
                if ((o = t[p]) || 0 === o)
                    if ("object" === k.type(o)) k.merge(h, o.nodeType ? [o] : o);
                    else if (tt.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), s = (U.exec(o) || ["", ""])[1].toLowerCase(), c = K[s] || K._default, a.innerHTML = c[1] + k.htmlPrefilter(o) + c[2], u = c[0]; u--;) a = a.lastChild;
                k.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
            } else h.push(e.createTextNode(o));
            for (d.textContent = "", p = 0; o = h[p++];)
                if (n && -1 < k.inArray(o, n)) r && r.push(o);
                else if (l = k.contains(o.ownerDocument, o), a = Z(d.appendChild(o), "script"), l && X(a), i)
                for (u = 0; o = a[u++];) $.test(o.type || "") && i.push(o);
            return d
        }
        J = C.createDocumentFragment().appendChild(C.createElement("div")), (Q = C.createElement("input")).setAttribute("type", "radio"), Q.setAttribute("checked", "checked"), Q.setAttribute("name", "t"), J.appendChild(Q), g.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, J.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue;
        var it = /^key/,
            nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            rt = /^([^.]*)(?:\.(.+)|)/;

        function ot() {
            return !0
        }

        function at() {
            return !1
        }

        function st() {
            try {
                return C.activeElement
            } catch (t) {}
        }

        function ct(t, e, i, n, r, o) {
            var a, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof i && (n = n || i, i = void 0), e) ct(t, s, i, n, e[s], o);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = at;
            else if (!r) return t;
            return 1 === o && (a = r, (r = function(t) {
                return k().off(t), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = k.guid++)), t.each(function() {
                k.event.add(this, e, r, n, i)
            })
        }
        k.event = {
            global: {},
            add: function(e, t, i, n, r) {
                var o, a, s, c, l, u, d, h, p, f, m, g = N.get(e);
                if (g)
                    for (i.handler && (i = (o = i).handler, r = o.selector), i.guid || (i.guid = k.guid++), (c = g.events) || (c = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                            return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
                        }), l = (t = (t || "").match(P) || [""]).length; l--;) p = m = (s = rt.exec(t[l]) || [])[1], f = (s[2] || "").split(".").sort(), p && (d = k.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = k.event.special[p] || {}, u = k.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && k.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, o), (h = c[p]) || ((h = c[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), k.event.global[p] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, a, s, c, l, u, d, h, p, f, m, g = N.hasData(t) && N.get(t);
                if (g && (c = g.events)) {
                    for (l = (e = (e || "").match(P) || [""]).length; l--;)
                        if (p = m = (s = rt.exec(e[l]) || [])[1], f = (s[2] || "").split(".").sort(), p) {
                            for (d = k.event.special[p] || {}, h = c[p = (n ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) u = h[o], !r && m !== u.origType || i && i.guid !== u.guid || s && !s.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                            a && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || k.removeEvent(t, p, g.handle), delete c[p])
                        } else
                            for (p in c) k.event.remove(t, p + e[l], i, n, !0);
                    k.isEmptyObject(c) && N.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = k.event.fix(t);
                var e, i, n, r, o, a = [],
                    s = u.call(arguments),
                    c = (N.get(this, "events") || {})[t.type] || [],
                    l = k.event.special[t.type] || {};
                if ((s[0] = t).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                    for (a = k.event.handlers.call(this, t, c), e = 0;
                        (r = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, i = 0;
                            (o = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (n = ((k.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, a = [],
                    s = e.delegateCount,
                    c = t.target;
                if (s && c.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
                            for (n = [], i = 0; i < s; i++) void 0 === n[r = (o = e[i]).selector + " "] && (n[r] = o.needsContext ? -1 < k(r, this).index(c) : k.find(r, this, null, [c]).length), n[r] && n.push(o);
                            n.length && a.push({
                                elem: c,
                                handlers: n
                            })
                        } return s < e.length && a.push({
                    elem: this,
                    handlers: e.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, r, o = e.button;
                    return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || C).documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[k.expando]) return t;
                var e, i, n, r = t.type,
                    o = t,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = nt.test(r) ? this.mouseHooks : it.test(r) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new k.Event(o), e = n.length; e--;) t[i = n[e]] = o[i];
                return t.target || (t.target = C), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== st() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === st() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && k.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return k.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, k.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, k.Event = function(t, e) {
            return this instanceof k.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? ot : at) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || k.now(), void(this[k.expando] = !0)) : new k.Event(t, e)
        }, k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: at,
            isPropagationStopped: at,
            isImmediatePropagationStopped: at,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = ot, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = ot, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = ot, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, r) {
            k.event.special[t] = {
                delegateType: r,
                bindType: r,
                handle: function(t) {
                    var e, i = t.relatedTarget,
                        n = t.handleObj;
                    return i && (i === this || k.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = r), e
                }
            }
        }), k.fn.extend({
            on: function(t, e, i, n) {
                return ct(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return ct(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, k(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = at), this.each(function() {
                    k.event.remove(this, t, i, e)
                });
                for (r in t) this.off(r, e, t[r]);
                return this
            }
        });
        var lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ut = /<script|<style|<link/i,
            dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ht = /^true\/(.*)/,
            pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function ft(t, e) {
            return k.nodeName(t, "table") && k.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function mt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function gt(t) {
            var e = ht.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function yt(t, e) {
            var i, n, r, o, a, s, c, l;
            if (1 === e.nodeType) {
                if (N.hasData(t) && (o = N.access(t), a = N.set(e, o), l = o.events))
                    for (r in delete a.handle, a.events = {}, l)
                        for (i = 0, n = l[r].length; i < n; i++) k.event.add(e, r, l[r][i]);
                B.hasData(t) && (s = B.access(t), c = k.extend({}, s), B.set(e, c))
            }
        }

        function vt(i, n, r, o) {
            n = m.apply([], n);
            var t, e, a, s, c, l, u = 0,
                d = i.length,
                h = d - 1,
                p = n[0],
                f = k.isFunction(p);
            if (f || 1 < d && "string" == typeof p && !g.checkClone && dt.test(p)) return i.each(function(t) {
                var e = i.eq(t);
                f && (n[0] = p.call(this, t, e.html())), vt(e, n, r, o)
            });
            if (d && (e = (t = et(n, i[0].ownerDocument, !1, i, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
                for (s = (a = k.map(Z(t, "script"), mt)).length; u < d; u++) c = t, u !== h && (c = k.clone(c, !0, !0), s && k.merge(a, Z(c, "script"))), r.call(i[u], c, u);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, k.map(a, gt), u = 0; u < s; u++) c = a[u], $.test(c.type || "") && !N.access(c, "globalEval") && k.contains(l, c) && (c.src ? k._evalUrl && k._evalUrl(c.src) : k.globalEval(c.textContent.replace(pt, "")))
            }
            return i
        }

        function bt(t, e, i) {
            for (var n, r = e ? k.filter(e, t) : t, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || k.cleanData(Z(n)), n.parentNode && (i && k.contains(n.ownerDocument, n) && X(Z(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        k.extend({
            htmlPrefilter: function(t) {
                return t.replace(lt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, r, o, a, s, c, l, u = t.cloneNode(!0),
                    d = k.contains(t.ownerDocument, t);
                if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t)))
                    for (a = Z(u), n = 0, r = (o = Z(t)).length; n < r; n++) s = o[n], c = a[n], void 0, "input" === (l = c.nodeName.toLowerCase()) && Y.test(s.type) ? c.checked = s.checked : "input" !== l && "textarea" !== l || (c.defaultValue = s.defaultValue);
                if (e)
                    if (i)
                        for (o = o || Z(t), a = a || Z(u), n = 0, r = o.length; n < r; n++) yt(o[n], a[n]);
                    else yt(t, u);
                return 0 < (a = Z(u, "script")).length && X(a, !d && Z(t, "script")), u
            },
            cleanData: function(t) {
                for (var e, i, n, r = k.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (z(i)) {
                        if (e = i[N.expando]) {
                            if (e.events)
                                for (n in e.events) r[n] ? k.event.remove(i, n) : k.removeEvent(i, n, e.handle);
                            i[N.expando] = void 0
                        }
                        i[B.expando] && (i[B.expando] = void 0)
                    }
            }
        }), k.fn.extend({
            domManip: vt,
            detach: function(t) {
                return bt(this, t, !0)
            },
            remove: function(t) {
                return bt(this, t)
            },
            text: function(t) {
                return L(this, function(t) {
                    return void 0 === t ? k.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return vt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ft(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return vt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = ft(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return vt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return vt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(Z(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return k.clone(this, t, e)
                })
            },
            html: function(t) {
                return L(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ut.test(t) && !K[(U.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = k.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (k.cleanData(Z(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var i = [];
                return vt(this, arguments, function(t) {
                    var e = this.parentNode;
                    k.inArray(this, i) < 0 && (k.cleanData(Z(this)), e && e.replaceChild(t, this))
                }, i)
            }
        }), k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, a) {
            k.fn[t] = function(t) {
                for (var e, i = [], n = k(t), r = n.length - 1, o = 0; o <= r; o++) e = o === r ? this : this.clone(!0), k(n[o])[a](e), s.apply(i, e.get());
                return this.pushStack(i)
            }
        });
        var St, At = {
            HTML: "block",
            BODY: "block"
        };

        function _t(t, e) {
            var i = k(e.createElement(t)).appendTo(e.body),
                n = k.css(i[0], "display");
            return i.detach(), n
        }

        function wt(t) {
            var e = C,
                i = At[t];
            return i || ("none" !== (i = _t(t, e)) && i || ((e = (St = (St || k("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = _t(t, e), St.detach()), At[t] = i), i
        }
        var Ct = /^margin/,
            kt = new RegExp("^(" + H + ")(?!px)[a-z%]+$", "i"),
            Tt = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = w), e.getComputedStyle(t)
            },
            xt = function(t, e, i, n) {
                var r, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                for (o in r = i.apply(t, n || []), e) t.style[o] = a[o];
                return r
            },
            Et = C.documentElement;

        function Mt(t, e, i) {
            var n, r, o, a, s = t.style;
            return "" !== (a = (i = i || Tt(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== a || k.contains(t.ownerDocument, t) || (a = k.style(t, e)), i && !g.pixelMarginRight() && kt.test(a) && Ct.test(e) && (n = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = i.width, s.width = n, s.minWidth = r, s.maxWidth = o), void 0 !== a ? a + "" : a
        }

        function Dt(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }! function() {
            var e, i, n, r, o = C.createElement("div"),
                a = C.createElement("div");
            if (a.style) {
                function t() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Et.appendChild(o);
                    var t = w.getComputedStyle(a);
                    e = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", n = "4px" === t.marginRight, Et.removeChild(o)
                }
                a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), k.extend(g, {
                    pixelPosition: function() {
                        return t(), e
                    },
                    boxSizingReliable: function() {
                        return null == i && t(), i
                    },
                    pixelMarginRight: function() {
                        return null == i && t(), n
                    },
                    reliableMarginLeft: function() {
                        return null == i && t(), r
                    },
                    reliableMarginRight: function() {
                        var t, e = a.appendChild(C.createElement("div"));
                        return e.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", Et.appendChild(o), t = !parseFloat(w.getComputedStyle(e).marginRight), Et.removeChild(o), a.removeChild(e), t
                    }
                })
            }
        }();
        var Pt = /^(none|table(?!-c[ea]).+)/,
            Ot = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Lt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            zt = ["Webkit", "O", "Moz", "ms"],
            It = C.createElement("div").style;

        function Nt(t) {
            if (t in It) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = zt.length; i--;)
                if ((t = zt[i] + e) in It) return t
        }

        function Bt(t, e, i) {
            var n = F.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function Rt(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === i && (a += k.css(t, i + V[o], !0, r)), n ? ("content" === i && (a -= k.css(t, "padding" + V[o], !0, r)), "margin" !== i && (a -= k.css(t, "border" + V[o] + "Width", !0, r))) : (a += k.css(t, "padding" + V[o], !0, r), "padding" !== i && (a += k.css(t, "border" + V[o] + "Width", !0, r)));
            return a
        }

        function jt(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = Tt(t),
                a = "border-box" === k.css(t, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (((r = Mt(t, e, o)) < 0 || null == r) && (r = t.style[e]), kt.test(r)) return r;
                n = a && (g.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + Rt(t, e, i || (a ? "border" : "content"), n, o) + "px"
        }

        function qt(t, e) {
            for (var i, n, r, o = [], a = 0, s = t.length; a < s; a++)(n = t[a]).style && (o[a] = N.get(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && W(n) && (o[a] = N.access(n, "olddisplay", wt(n.nodeName)))) : (r = W(n), "none" === i && r || N.set(n, "olddisplay", r ? i : k.css(n, "display"))));
            for (a = 0; a < s; a++)(n = t[a]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function Ht(t, e, i, n, r) {
            return new Ht.prototype.init(t, e, i, n, r)
        }
        k.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Mt(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, a, s = k.camelCase(e),
                        c = t.style;
                    return e = k.cssProps[s] || (k.cssProps[s] = Nt(s) || s), a = k.cssHooks[e] || k.cssHooks[s], void 0 === i ? a && "get" in a && void 0 !== (r = a.get(t, !1, n)) ? r : c[e] : ("string" === (o = typeof i) && (r = F.exec(i)) && r[1] && (i = G(t, e, r), o = "number"), void(null != i && i == i && ("number" === o && (i += r && r[3] || (k.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (c[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var r, o, a, s = k.camelCase(e);
                return e = k.cssProps[s] || (k.cssProps[s] = Nt(s) || s), (a = k.cssHooks[e] || k.cssHooks[s]) && "get" in a && (r = a.get(t, !0, i)), void 0 === r && (r = Mt(t, e, n)), "normal" === r && e in Lt && (r = Lt[e]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
            }
        }), k.each(["height", "width"], function(t, a) {
            k.cssHooks[a] = {
                get: function(t, e, i) {
                    return e ? Pt.test(k.css(t, "display")) && 0 === t.offsetWidth ? xt(t, Ot, function() {
                        return jt(t, a, i)
                    }) : jt(t, a, i) : void 0
                },
                set: function(t, e, i) {
                    var n, r = i && Tt(t),
                        o = i && Rt(t, a, i, "border-box" === k.css(t, "boxSizing", !1, r), r);
                    return o && (n = F.exec(e)) && "px" !== (n[3] || "px") && (t.style[a] = e, e = k.css(t, a)), Bt(0, e, o)
                }
            }
        }), k.cssHooks.marginLeft = Dt(g.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(Mt(t, "marginLeft")) || t.getBoundingClientRect().left - xt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), k.cssHooks.marginRight = Dt(g.reliableMarginRight, function(t, e) {
            return e ? xt(t, {
                display: "inline-block"
            }, Mt, [t, "marginRight"]) : void 0
        }), k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, o) {
            k.cssHooks[r + o] = {
                expand: function(t) {
                    for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[r + V[e] + o] = n[e] || n[e - 2] || n[0];
                    return i
                }
            }, Ct.test(r) || (k.cssHooks[r + o].set = Bt)
        }), k.fn.extend({
            css: function(t, e) {
                return L(this, function(t, e, i) {
                    var n, r, o = {},
                        a = 0;
                    if (k.isArray(e)) {
                        for (n = Tt(t), r = e.length; a < r; a++) o[e[a]] = k.css(t, e[a], !1, n);
                        return o
                    }
                    return void 0 !== i ? k.style(t, e, i) : k.css(t, e)
                }, t, e, 1 < arguments.length)
            },
            show: function() {
                return qt(this, !0)
            },
            hide: function() {
                return qt(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    W(this) ? k(this).show() : k(this).hide()
                })
            }
        }), ((k.Tween = Ht).prototype = {
            constructor: Ht,
            init: function(t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (k.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = Ht.propHooks[this.prop];
                return t && t.get ? t.get(this) : Ht.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = Ht.propHooks[this.prop];
                return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ht.propHooks._default.set(this), this
            }
        }).init.prototype = Ht.prototype, (Ht.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[k.cssProps[t.prop]] && !k.cssHooks[t.prop] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = Ht.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, k.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, k.fx = Ht.prototype.init, k.fx.step = {};
        var Ft, Vt, Wt, Gt, Yt, Ut = /^(?:toggle|show|hide)$/,
            $t = /queueHooks$/;

        function Kt() {
            return w.setTimeout(function() {
                Ft = void 0
            }), Ft = k.now()
        }

        function Zt(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = V[n])] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function Xt(t, e, i) {
            for (var n, r = (Jt.tweeners[e] || []).concat(Jt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (n = r[o].call(i, e, t)) return n
        }

        function Jt(o, t, e) {
            var i, a, n = 0,
                r = Jt.prefilters.length,
                s = k.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (a) return !1;
                    for (var t = Ft || Kt(), e = Math.max(0, l.startTime + l.duration - t), i = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) l.tweens[n].run(i);
                    return s.notifyWith(o, [l, i, e]), i < 1 && r ? e : (s.resolveWith(o, [l]), !1)
                },
                l = s.promise({
                    elem: o,
                    props: k.extend({}, t),
                    opts: k.extend(!0, {
                        specialEasing: {},
                        easing: k.easing._default
                    }, e),
                    originalProperties: t,
                    originalOptions: e,
                    startTime: Ft || Kt(),
                    duration: e.duration,
                    tweens: [],
                    createTween: function(t, e) {
                        var i = k.Tween(o, l.opts, t, e, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(t) {
                        var e = 0,
                            i = t ? l.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; e < i; e++) l.tweens[e].run(1);
                        return t ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, t])) : s.rejectWith(o, [l, t]), this
                    }
                }),
                u = l.props;
            for (function(t, e) {
                    var i, n, r, o, a;
                    for (i in t)
                        if (r = e[n = k.camelCase(i)], o = t[i], k.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (a = k.cssHooks[n]) && "expand" in a)
                            for (i in o = a.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = r);
                        else e[n] = r
                }(u, l.opts.specialEasing); n < r; n++)
                if (i = Jt.prefilters[n].call(l, o, u, l.opts)) return k.isFunction(i.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = k.proxy(i.stop, i)), i;
            return k.map(u, Xt, l), k.isFunction(l.opts.start) && l.opts.start.call(o, l), k.fx.timer(k.extend(c, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        k.Animation = k.extend(Jt, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return G(i.elem, t, F.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                for (var i, n = 0, r = (t = k.isFunction(t) ? (e = t, ["*"]) : t.match(P)).length; n < r; n++) i = t[n], Jt.tweeners[i] = Jt.tweeners[i] || [], Jt.tweeners[i].unshift(e)
            },
            prefilters: [function(e, t, i) {
                var n, r, o, a, s, c, l, u = this,
                    d = {},
                    h = e.style,
                    p = e.nodeType && W(e),
                    f = N.get(e, "fxshow");
                for (n in i.queue || (null == (s = k._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || c()
                    }), s.unqueued++, u.always(function() {
                        u.always(function() {
                            s.unqueued--, k.queue(e, "fx").length || s.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (l = k.css(e, "display")) ? N.get(e, "olddisplay") || wt(e.nodeName) : l) && "none" === k.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
                        h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                    })), t)
                    if (r = t[n], Ut.exec(r)) {
                        if (delete t[n], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                            if ("show" !== r || !f || void 0 === f[n]) continue;
                            p = !0
                        }
                        d[n] = f && f[n] || k.style(e, n)
                    } else l = void 0;
                if (k.isEmptyObject(d)) "inline" === ("none" === l ? wt(e.nodeName) : l) && (h.display = l);
                else
                    for (n in f ? "hidden" in f && (p = f.hidden) : f = N.access(e, "fxshow", {}), o && (f.hidden = !p), p ? k(e).show() : u.done(function() {
                            k(e).hide()
                        }), u.done(function() {
                            var t;
                            for (t in N.remove(e, "fxshow"), d) k.style(e, t, d[t])
                        }), d) a = Xt(p ? f[n] : 0, n, u), n in f || (f[n] = a.start, p && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
            }],
            prefilter: function(t, e) {
                e ? Jt.prefilters.unshift(t) : Jt.prefilters.push(t)
            }
        }), k.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? k.extend({}, t) : {
                complete: i || !i && e || k.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !k.isFunction(e) && e
            };
            return n.duration = k.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in k.fx.speeds ? k.fx.speeds[n.duration] : k.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                k.isFunction(n.old) && n.old.call(this), n.queue && k.dequeue(this, n.queue)
            }, n
        }, k.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(e, t, i, n) {
                var r = k.isEmptyObject(e),
                    o = k.speed(t, i, n),
                    a = function() {
                        var t = Jt(this, k.extend({}, e), o);
                        (r || N.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(r, t, o) {
                var a = function(t) {
                    var e = t.stop;
                    delete t.stop, e(o)
                };
                return "string" != typeof r && (o = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                    var t = !0,
                        e = null != r && r + "queueHooks",
                        i = k.timers,
                        n = N.get(this);
                    if (e) n[e] && n[e].stop && a(n[e]);
                    else
                        for (e in n) n[e] && n[e].stop && $t.test(e) && a(n[e]);
                    for (e = i.length; e--;) i[e].elem !== this || null != r && i[e].queue !== r || (i[e].anim.stop(o), t = !1, i.splice(e, 1));
                    !t && o || k.dequeue(this, r)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var t, e = N.get(this),
                        i = e[a + "queue"],
                        n = e[a + "queueHooks"],
                        r = k.timers,
                        o = i ? i.length : 0;
                    for (e.finish = !0, k.queue(this, a, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === a && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete e.finish
                })
            }
        }), k.each(["toggle", "show", "hide"], function(t, n) {
            var r = k.fn[n];
            k.fn[n] = function(t, e, i) {
                return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(Zt(n, !0), t, e, i)
            }
        }), k.each({
            slideDown: Zt("show"),
            slideUp: Zt("hide"),
            slideToggle: Zt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, n) {
            k.fn[t] = function(t, e, i) {
                return this.animate(n, t, e, i)
            }
        }), k.timers = [], k.fx.tick = function() {
            var t, e = 0,
                i = k.timers;
            for (Ft = k.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || k.fx.stop(), Ft = void 0
        }, k.fx.timer = function(t) {
            k.timers.push(t), t() ? k.fx.start() : k.timers.pop()
        }, k.fx.interval = 13, k.fx.start = function() {
            Vt || (Vt = w.setInterval(k.fx.tick, k.fx.interval))
        }, k.fx.stop = function() {
            w.clearInterval(Vt), Vt = null
        }, k.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, k.fn.delay = function(n, t) {
            return n = k.fx && k.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
                var i = w.setTimeout(t, n);
                e.stop = function() {
                    w.clearTimeout(i)
                }
            })
        }, Wt = C.createElement("input"), Gt = C.createElement("select"), Yt = Gt.appendChild(C.createElement("option")), Wt.type = "checkbox", g.checkOn = "" !== Wt.value, g.optSelected = Yt.selected, Gt.disabled = !0, g.optDisabled = !Yt.disabled, (Wt = C.createElement("input")).value = "t", Wt.type = "radio", g.radioValue = "t" === Wt.value;
        var Qt, te = k.expr.attrHandle;
        k.fn.extend({
            attr: function(t, e) {
                return L(this, k.attr, t, e, 1 < arguments.length)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    k.removeAttr(this, t)
                })
            }
        }), k.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? k.prop(t, e, i) : (1 === o && k.isXMLDoc(t) || (e = e.toLowerCase(), r = k.attrHooks[e] || (k.expr.match.bool.test(e) ? Qt : void 0)), void 0 !== i ? null === i ? void k.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = k.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!g.radioValue && "radio" === e && k.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    o = e && e.match(P);
                if (o && 1 === t.nodeType)
                    for (; i = o[r++];) n = k.propFix[i] || i, k.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), Qt = {
            set: function(t, e, i) {
                return !1 === e ? k.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, k.each(k.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var o = te[e] || k.find.attr;
            te[e] = function(t, e, i) {
                var n, r;
                return i || (r = te[e], te[e] = n, n = null != o(t, e, i) ? e.toLowerCase() : null, te[e] = r), n
            }
        });
        var ee = /^(?:input|select|textarea|button)$/i,
            ie = /^(?:a|area)$/i;
        k.fn.extend({
            prop: function(t, e) {
                return L(this, k.prop, t, e, 1 < arguments.length)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[k.propFix[t] || t]
                })
            }
        }), k.extend({
            prop: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(t) || (e = k.propFix[e] || e, r = k.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = k.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ee.test(t.nodeName) || ie.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), g.optSelected || (k.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            k.propFix[this.toLowerCase()] = this
        });
        var ne = /[\t\r\n\f]/g;

        function re(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        k.fn.extend({
            addClass: function(e) {
                var t, i, n, r, o, a, s, c = 0;
                if (k.isFunction(e)) return this.each(function(t) {
                    k(this).addClass(e.call(this, t, re(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(P) || []; i = this[c++];)
                        if (r = re(i), n = 1 === i.nodeType && (" " + r + " ").replace(ne, " ")) {
                            for (a = 0; o = t[a++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            r !== (s = k.trim(n)) && i.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, i, n, r, o, a, s, c = 0;
                if (k.isFunction(e)) return this.each(function(t) {
                    k(this).removeClass(e.call(this, t, re(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(P) || []; i = this[c++];)
                        if (r = re(i), n = 1 === i.nodeType && (" " + r + " ").replace(ne, " ")) {
                            for (a = 0; o = t[a++];)
                                for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                            r !== (s = k.trim(n)) && i.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(r, e) {
                var o = typeof r;
                return "boolean" == typeof e && "string" === o ? e ? this.addClass(r) : this.removeClass(r) : k.isFunction(r) ? this.each(function(t) {
                    k(this).toggleClass(r.call(this, t, re(this), e), e)
                }) : this.each(function() {
                    var t, e, i, n;
                    if ("string" === o)
                        for (e = 0, i = k(this), n = r.match(P) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== r && "boolean" !== o || ((t = re(this)) && N.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : N.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && -1 < (" " + re(i) + " ").replace(ne, " ").indexOf(e)) return !0;
                return !1
            }
        });
        var oe = /\r/g,
            ae = /[\x20\t\r\n\f]+/g;
        k.fn.extend({
            val: function(i) {
                var n, t, r, e = this[0];
                return arguments.length ? (r = k.isFunction(i), this.each(function(t) {
                    var e;
                    1 === this.nodeType && (null == (e = r ? i.call(this, t, k(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : k.isArray(e) && (e = k.map(e, function(t) {
                        return null == t ? "" : t + ""
                    })), (n = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                })) : e ? (n = k.valHooks[e.type] || k.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(oe, "") : null == t ? "" : t : void 0
            }
        }), k.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = k.find.attr(t, "value");
                        return null != e ? e : k.trim(k.text(t)).replace(ae, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, a = o ? null : [], s = o ? r + 1 : n.length, c = r < 0 ? s : o ? r : 0; c < s; c++)
                            if (((i = n[c]).selected || c === r) && (g.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !k.nodeName(i.parentNode, "optgroup"))) {
                                if (e = k(i).val(), o) return e;
                                a.push(e)
                            } return a
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = k.makeArray(e), a = r.length; a--;)((n = r[a]).selected = -1 < k.inArray(k.valHooks.option.get(n), o)) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), k.each(["radio", "checkbox"], function() {
            k.valHooks[this] = {
                set: function(t, e) {
                    return k.isArray(e) ? t.checked = -1 < k.inArray(k(t).val(), e) : void 0
                }
            }, g.checkOn || (k.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var se = /^(?:focusinfocus|focusoutblur)$/;
        k.extend(k.event, {
            trigger: function(t, e, i, n) {
                var r, o, a, s, c, l, u, d = [i || C],
                    h = f.call(t, "type") ? t.type : t,
                    p = f.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = a = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !se.test(h + k.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, (t = t[k.expando] ? t : new k.Event(h, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : k.makeArray(e, [t]), u = k.event.special[h] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, e))) {
                    if (!n && !u.noBubble && !k.isWindow(i)) {
                        for (s = u.delegateType || h, se.test(s + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                        a === (i.ownerDocument || C) && d.push(a.defaultView || a.parentWindow || w)
                    }
                    for (r = 0;
                        (o = d[r++]) && !t.isPropagationStopped();) t.type = 1 < r ? s : u.bindType || h, (l = (N.get(o, "events") || {})[t.type] && N.get(o, "handle")) && l.apply(o, e), (l = c && o[c]) && l.apply && z(o) && (t.result = l.apply(o, e), !1 === t.result && t.preventDefault());
                    return t.type = h, n || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), e) || !z(i) || c && k.isFunction(i[h]) && !k.isWindow(i) && ((a = i[c]) && (i[c] = null), i[k.event.triggered = h](), k.event.triggered = void 0, a && (i[c] = a)), t.result
                }
            },
            simulate: function(t, e, i) {
                var n = k.extend(new k.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                k.event.trigger(n, null, e)
            }
        }), k.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    k.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? k.event.trigger(t, e, i, !0) : void 0
            }
        }), k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
            k.fn[i] = function(t, e) {
                return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
            }
        }), k.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), g.focusin = "onfocusin" in w, g.focusin || k.each({
            focus: "focusin",
            blur: "focusout"
        }, function(i, n) {
            var r = function(t) {
                k.event.simulate(n, t.target, k.event.fix(t))
            };
            k.event.special[n] = {
                setup: function() {
                    var t = this.ownerDocument || this,
                        e = N.access(t, n);
                    e || t.addEventListener(i, r, !0), N.access(t, n, (e || 0) + 1)
                },
                teardown: function() {
                    var t = this.ownerDocument || this,
                        e = N.access(t, n) - 1;
                    e ? N.access(t, n, e) : (t.removeEventListener(i, r, !0), N.remove(t, n))
                }
            }
        });
        var ce = w.location,
            le = k.now(),
            ue = /\?/;
        k.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, k.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new w.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e
        };
        var de = /#.*$/,
            he = /([?&])_=[^&]*/,
            pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            fe = /^(?:GET|HEAD)$/,
            me = /^\/\//,
            ge = {},
            ye = {},
            ve = "*/".concat("*"),
            be = C.createElement("a");

        function Se(o) {
            return function(t, e) {
                "string" != typeof t && (e = t, t = "*");
                var i, n = 0,
                    r = t.toLowerCase().match(P) || [];
                if (k.isFunction(e))
                    for (; i = r[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (o[i] = o[i] || []).unshift(e)) : (o[i] = o[i] || []).push(e)
            }
        }

        function Ae(e, r, o, a) {
            var s = {},
                c = e === ye;

            function l(t) {
                var n;
                return s[t] = !0, k.each(e[t] || [], function(t, e) {
                    var i = e(r, o, a);
                    return "string" != typeof i || c || s[i] ? c ? !(n = i) : void 0 : (r.dataTypes.unshift(i), l(i), !1)
                }), n
            }
            return l(r.dataTypes[0]) || !s["*"] && l("*")
        }

        function _e(t, e) {
            var i, n, r = k.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && k.extend(!0, t, n), t
        }
        be.href = ce.href, k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ce.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ce.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ve,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": k.parseJSON,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? _e(_e(t, k.ajaxSettings), e) : _e(k.ajaxSettings, t)
            },
            ajaxPrefilter: Se(ge),
            ajaxTransport: Se(ye),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var u, d, h, i, p, n, f, r, m = k.ajaxSetup({}, e),
                    g = m.context || m,
                    y = m.context && (g.nodeType || g.jquery) ? k(g) : k.event,
                    v = k.Deferred(),
                    b = k.Callbacks("once memory"),
                    S = m.statusCode || {},
                    o = {},
                    a = {},
                    A = 0,
                    s = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === A) {
                                if (!i)
                                    for (i = {}; e = pe.exec(h);) i[e[1].toLowerCase()] = e[2];
                                e = i[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === A ? h : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return A || (t = a[i] = a[i] || t, o[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return A || (m.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (A < 2)
                                    for (e in t) S[e] = [S[e], t[e]];
                                else _.always(t[_.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || s;
                            return u && u.abort(e), c(0, e), this
                        }
                    };
                if (v.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, m.url = ((t || m.url || ce.href) + "").replace(de, "").replace(me, ce.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = k.trim(m.dataType || "*").toLowerCase().match(P) || [""], null == m.crossDomain) {
                    n = C.createElement("a");
                    try {
                        n.href = m.url, n.href = n.href, m.crossDomain = be.protocol + "//" + be.host != n.protocol + "//" + n.host
                    } catch (t) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), Ae(ge, m, e, _), 2 === A) return _;
                for (r in (f = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !fe.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (ue.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = he.test(d) ? d.replace(he, "$1_=" + le++) : d + (ue.test(d) ? "&" : "?") + "_=" + le++)), m.ifModified && (k.lastModified[d] && _.setRequestHeader("If-Modified-Since", k.lastModified[d]), k.etag[d] && _.setRequestHeader("If-None-Match", k.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && _.setRequestHeader("Content-Type", m.contentType), _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ve + "; q=0.01" : "") : m.accepts["*"]), m.headers) _.setRequestHeader(r, m.headers[r]);
                if (m.beforeSend && (!1 === m.beforeSend.call(g, _, m) || 2 === A)) return _.abort();
                for (r in s = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[r](m[r]);
                if (u = Ae(ye, m, e, _)) {
                    if (_.readyState = 1, f && y.trigger("ajaxSend", [_, m]), 2 === A) return _;
                    m.async && 0 < m.timeout && (p = w.setTimeout(function() {
                        _.abort("timeout")
                    }, m.timeout));
                    try {
                        A = 1, u.send(o, c)
                    } catch (t) {
                        if (!(A < 2)) throw t;
                        c(-1, t)
                    }
                } else c(-1, "No Transport");

                function c(t, e, i, n) {
                    var r, o, a, s, c, l = e;
                    2 !== A && (A = 2, p && w.clearTimeout(p), u = void 0, h = n || "", _.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, i && (s = function(t, e, i) {
                        for (var n, r, o, a, s = t.contents, c = t.dataTypes;
                            "*" === c[0];) c.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (r in s)
                                if (s[r] && s[r].test(n)) {
                                    c.unshift(r);
                                    break
                                } if (c[0] in i) o = c[0];
                        else {
                            for (r in i) {
                                if (!c[0] || t.converters[r + " " + c[0]]) {
                                    o = r;
                                    break
                                }
                                a || (a = r)
                            }
                            o = o || a
                        }
                        return o ? (o !== c[0] && c.unshift(o), i[o]) : void 0
                    }(m, _, i)), s = function(t, e, i, n) {
                        var r, o, a, s, c, l = {},
                            u = t.dataTypes.slice();
                        if (u[1])
                            for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
                        for (o = u.shift(); o;)
                            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !c && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = o, o = u.shift())
                                if ("*" === o) o = c;
                                else if ("*" !== c && c !== o) {
                            if (!(a = l[c + " " + o] || l["* " + o]))
                                for (r in l)
                                    if ((s = r.split(" "))[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                        !0 === a ? a = l[r] : !0 !== l[r] && (o = s[0], u.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && t.throws) e = a(e);
                                else try {
                                    e = a(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: a ? t : "No conversion from " + c + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(m, s, _, r), r ? (m.ifModified && ((c = _.getResponseHeader("Last-Modified")) && (k.lastModified[d] = c), (c = _.getResponseHeader("etag")) && (k.etag[d] = c)), 204 === t || "HEAD" === m.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = s.state, o = s.data, r = !(a = s.error))) : (a = l, !t && l || (l = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || l) + "", r ? v.resolveWith(g, [o, l, _]) : v.rejectWith(g, [_, l, a]), _.statusCode(S), S = void 0, f && y.trigger(r ? "ajaxSuccess" : "ajaxError", [_, m, r ? o : a]), b.fireWith(g, [_, l]), f && (y.trigger("ajaxComplete", [_, m]), --k.active || k.event.trigger("ajaxStop")))
                }
                return _
            },
            getJSON: function(t, e, i) {
                return k.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return k.get(t, void 0, e, "script")
            }
        }), k.each(["get", "post"], function(t, r) {
            k[r] = function(t, e, i, n) {
                return k.isFunction(e) && (n = n || i, i = e, e = void 0), k.ajax(k.extend({
                    url: t,
                    type: r,
                    dataType: n,
                    data: e,
                    success: i
                }, k.isPlainObject(t) && t))
            }
        }), k._evalUrl = function(t) {
            return k.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, k.fn.extend({
            wrapAll: function(e) {
                var t;
                return k.isFunction(e) ? this.each(function(t) {
                    k(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(i) {
                return k.isFunction(i) ? this.each(function(t) {
                    k(this).wrapInner(i.call(this, t))
                }) : this.each(function() {
                    var t = k(this),
                        e = t.contents();
                    e.length ? e.wrapAll(i) : t.append(i)
                })
            },
            wrap: function(e) {
                var i = k.isFunction(e);
                return this.each(function(t) {
                    k(this).wrapAll(i ? e.call(this, t) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
                }).end()
            }
        }), k.expr.filters.hidden = function(t) {
            return !k.expr.filters.visible(t)
        }, k.expr.filters.visible = function(t) {
            return 0 < t.offsetWidth || 0 < t.offsetHeight || 0 < t.getClientRects().length
        };
        var we = /%20/g,
            Ce = /\[\]$/,
            ke = /\r?\n/g,
            Te = /^(?:submit|button|image|reset|file)$/i,
            xe = /^(?:input|select|textarea|keygen)/i;

        function Ee(i, t, n, r) {
            var e;
            if (k.isArray(t)) k.each(t, function(t, e) {
                n || Ce.test(i) ? r(i, e) : Ee(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, r)
            });
            else if (n || "object" !== k.type(t)) r(i, t);
            else
                for (e in t) Ee(i + "[" + e + "]", t[e], n, r)
        }
        k.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    e = k.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = k.ajaxSettings && k.ajaxSettings.traditional), k.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) Ee(i, t[i], e, r);
            return n.join("&").replace(we, "+")
        }, k.fn.extend({
            serialize: function() {
                return k.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = k.prop(this, "elements");
                    return t ? k.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !k(this).is(":disabled") && xe.test(this.nodeName) && !Te.test(t) && (this.checked || !Y.test(t))
                }).map(function(t, e) {
                    var i = k(this).val();
                    return null == i ? null : k.isArray(i) ? k.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(ke, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(ke, "\r\n")
                    }
                }).get()
            }
        }), k.ajaxSettings.xhr = function() {
            try {
                return new w.XMLHttpRequest
            } catch (t) {}
        };
        var Me = {
                0: 200,
                1223: 204
            },
            De = k.ajaxSettings.xhr();
        g.cors = !!De && "withCredentials" in De, g.ajax = De = !!De, k.ajaxTransport(function(r) {
            var o, a;
            return g.cors || De && !r.crossDomain ? {
                send: function(t, e) {
                    var i, n = r.xhr();
                    if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (i in r.xhrFields) n[i] = r.xhrFields[i];
                    for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                    o = function(t) {
                        return function() {
                            o && (o = a = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(Me[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                binary: n.response
                            } : {
                                text: n.responseText
                            }, n.getAllResponseHeaders()))
                        }
                    }, n.onload = o(), a = n.onerror = o("error"), void 0 !== n.onabort ? n.onabort = a : n.onreadystatechange = function() {
                        4 === n.readyState && w.setTimeout(function() {
                            o && a()
                        })
                    }, o = o("abort");
                    try {
                        n.send(r.hasContent && r.data || null)
                    } catch (t) {
                        if (o) throw t
                    }
                },
                abort: function() {
                    o && o()
                }
            } : void 0
        }), k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return k.globalEval(t), t
                }
            }
        }), k.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), k.ajaxTransport("script", function(i) {
            var n, r;
            if (i.crossDomain) return {
                send: function(t, e) {
                    n = k("<script>").prop({
                        charset: i.scriptCharset,
                        src: i.url
                    }).on("load error", r = function(t) {
                        n.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                    }), C.head.appendChild(n[0])
                },
                abort: function() {
                    r && r()
                }
            }
        });
        var Pe = [],
            Oe = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Pe.pop() || k.expando + "_" + le++;
                return this[t] = !0, t
            }
        }), k.ajaxPrefilter("json jsonp", function(t, e, i) {
            var n, r, o, a = !1 !== t.jsonp && (Oe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = k.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Oe, "$1" + n) : !1 !== t.jsonp && (t.url += (ue.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
                return o || k.error(n + " was not called"), o[0]
            }, t.dataTypes[0] = "json", r = w[n], w[n] = function() {
                o = arguments
            }, i.always(function() {
                void 0 === r ? k(w).removeProp(n) : w[n] = r, t[n] && (t.jsonpCallback = e.jsonpCallback, Pe.push(n)), o && k.isFunction(r) && r(o[0]), o = r = void 0
            }), "script") : void 0
        }), k.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || C;
            var n = b.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = et([t], e, r), r && r.length && k(r).remove(), k.merge([], n.childNodes))
        };
        var Le = k.fn.load;

        function ze(t) {
            return k.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        k.fn.load = function(t, e, i) {
            if ("string" != typeof t && Le) return Le.apply(this, arguments);
            var n, r, o, a = this,
                s = t.indexOf(" ");
            return -1 < s && (n = k.trim(t.slice(s)), t = t.slice(0, s)), k.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < a.length && k.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(n ? k("<div>").append(k.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                a.each(function() {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            k.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), k.expr.filters.animated = function(e) {
            return k.grep(k.timers, function(t) {
                return e === t.elem
            }).length
        }, k.offset = {
            setOffset: function(t, e, i) {
                var n, r, o, a, s, c, l = k.css(t, "position"),
                    u = k(t),
                    d = {};
                "static" === l && (t.style.position = "relative"), s = u.offset(), o = k.css(t, "top"), c = k.css(t, "left"), r = ("absolute" === l || "fixed" === l) && -1 < (o + c).indexOf("auto") ? (a = (n = u.position()).top, n.left) : (a = parseFloat(o) || 0, parseFloat(c) || 0), k.isFunction(e) && (e = e.call(t, i, k.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, k.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    k.offset.setOffset(this, e, t)
                });
                var t, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = n && n.ownerDocument;
                return o ? (t = o.documentElement, k.contains(t, n) ? (r = n.getBoundingClientRect(), i = ze(o), {
                    top: r.top + i.pageYOffset - t.clientTop,
                    left: r.left + i.pageXOffset - t.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === k.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), k.nodeName(t[0], "html") || (n = t.offset()), n.top += k.css(t[0], "borderTopWidth", !0), n.left += k.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - k.css(i, "marginTop", !0),
                        left: e.left - n.left - k.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent;
                    return t || Et
                })
            }
        }), k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, r) {
            var o = "pageYOffset" === r;
            k.fn[e] = function(t) {
                return L(this, function(t, e, i) {
                    var n = ze(t);
                    return void 0 === i ? n ? n[r] : t[e] : void(n ? n.scrollTo(o ? n.pageXOffset : i, o ? i : n.pageYOffset) : t[e] = i)
                }, e, t, arguments.length)
            }
        }), k.each(["top", "left"], function(t, i) {
            k.cssHooks[i] = Dt(g.pixelPosition, function(t, e) {
                return e ? (e = Mt(t, i), kt.test(e) ? k(t).position()[i] + "px" : e) : void 0
            })
        }), k.each({
            Height: "height",
            Width: "width"
        }, function(o, a) {
            k.each({
                padding: "inner" + o,
                content: a,
                "": "outer" + o
            }, function(n, t) {
                k.fn[t] = function(t, e) {
                    var i = arguments.length && (n || "boolean" != typeof t),
                        r = n || (!0 === t || !0 === e ? "margin" : "border");
                    return L(this, function(t, e, i) {
                        var n;
                        return k.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o])) : void 0 === i ? k.css(t, e, r) : k.style(t, e, i, r)
                    }, a, i ? t : void 0, i, null)
                }
            })
        }), k.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), k.fn.andSelf = k.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return k
        });
        var Ie = w.jQuery,
            Ne = w.$;
        return k.noConflict = function(t) {
            return w.$ === k && (w.$ = Ne), t && w.jQuery === k && (w.jQuery = Ie), k
        }, t || (w.jQuery = w.$ = k), k
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t);
    var i, n, r, o, a = rr.jQuery.noConflict(!0),
        f = a;

    function s() {
        this.events = {}
    }! function(t, e) {
        "use strict";
        t.picoModal = function() {
            function S(t) {
                return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && "number" == typeof t.nodeType
            }

            function A() {
                var o = [];
                return {
                    watch: o.push.bind(o),
                    trigger: function(t, e) {
                        for (var i = !0, n = {
                                detail: e,
                                preventDefault: function() {
                                    i = !1
                                }
                            }, r = 0; r < o.length; r++) o[r](t, n);
                        return i
                    }
                }
            }

            function _(t) {
                return "none" === rr.getComputedStyle(t).display
            }

            function w(t) {
                this.elem = t
            }
            w.make = function(t, e) {
                "string" == typeof t && (t = or.querySelector(t));
                var i = or.createElement(e || "div");
                return (t || or.body).appendChild(i), new w(i)
            }, w.prototype = {
                child: function(t) {
                    return w.make(this.elem, t)
                },
                stylize: function(t) {
                    for (var e in void 0 !== (t = t || {}).opacity && (t.filter = "alpha(opacity=" + 100 * t.opacity + ")"), t) t.hasOwnProperty(e) && (this.elem.style[e] = t[e]);
                    return this
                },
                clazz: function(t) {
                    return this.elem.className += " " + t, this
                },
                html: function(t) {
                    return S(t) ? this.elem.appendChild(t) : this.elem.innerHTML = t, this
                },
                onClick: function(t) {
                    return this.elem.addEventListener("click", t), this
                },
                destroy: function() {
                    this.elem.parentNode.removeChild(this.elem)
                },
                hide: function() {
                    this.elem.style.display = "none"
                },
                show: function() {
                    this.elem.style.display = "block"
                },
                attr: function(t, e) {
                    return void 0 !== e && this.elem.setAttribute(t, e), this
                },
                anyAncestor: function(t) {
                    for (var e = this.elem; e;) {
                        if (t(new w(e))) return !0;
                        e = e.parentNode
                    }
                    return !1
                },
                isVisible: function() {
                    return !_(this.elem)
                }
            };
            var C = 1;

            function k(t) {
                return function() {
                    return t().elem
                }
            }
            var T = A(),
                x = A();
            return or.documentElement.addEventListener("keydown", function(t) {
                    var e = t.which || t.keyCode;
                    27 === e ? T.trigger() : 9 === e && x.trigger(t)
                }),
                function(n) {
                    ("string" == typeof n || S(n)) && (n = {
                        content: n
                    });
                    var o = A(),
                        e = A(),
                        i = A(),
                        r = A(),
                        a = A();

                    function s(t, e) {
                        var i = n[t];
                        return "function" == typeof i && (i = i(e)), void 0 === i ? e : i
                    }
                    var c, l, t, u, d, h, p = b.bind(rr, "modal"),
                        f = b.bind(rr, "overlay"),
                        m = b.bind(rr, "close");

                    function g(t) {
                        f().hide(), p().hide(), a.trigger(c, t)
                    }

                    function y(t) {
                        r.trigger(c, t) && g(t)
                    }

                    function v(t) {
                        return function() {
                            return t.apply(this, arguments), c
                        }
                    }

                    function b(t, e) {
                        if (!l) {
                            var i = function(t, i) {
                                var e = t("width", "auto");
                                "number" == typeof e && (e += "px");
                                var n = t("modalId", "pico-" + C++);
                                return w.make(t("parent")).clazz("pico-content").clazz(t("modalClass", "")).stylize({
                                    display: "none",
                                    position: "fixed",
                                    zIndex: 10001,
                                    left: "50%",
                                    top: "38.1966%",
                                    maxHeight: "90%",
                                    boxSizing: "border-box",
                                    width: e,
                                    "-ms-transform": "translate(-50%,-38.1966%)",
                                    "-moz-transform": "translate(-50%,-38.1966%)",
                                    "-webkit-transform": "translate(-50%,-38.1966%)",
                                    "-o-transform": "translate(-50%,-38.1966%)",
                                    transform: "translate(-50%,-38.1966%)"
                                }).stylize(t("modalStyles", {
                                    overflow: "auto",
                                    backgroundColor: "white",
                                    padding: "20px",
                                    borderRadius: "5px"
                                })).html(t("content")).attr("id", n).attr("role", "dialog").attr("aria-labelledby", t("ariaLabelledBy")).attr("aria-describedby", t("ariaDescribedBy", n)).onClick(function(t) {
                                    var e = new w(t.target).anyAncestor(function(t) {
                                        return /\bpico-close\b/.test(t.elem.className)
                                    });
                                    e && i()
                                })
                            }(s, y);
                            l = {
                                modal: i,
                                overlay: (n = s, r = y, w.make(n("parent")).clazz("pico-overlay").clazz(n("overlayClass", "")).stylize({
                                    display: "none",
                                    position: "fixed",
                                    top: "0px",
                                    left: "0px",
                                    height: "100%",
                                    width: "100%",
                                    zIndex: 1e4
                                }).stylize(n("overlayStyles", {
                                    opacity: .5,
                                    background: "#000"
                                })).onClick(function() {
                                    n("overlayClose", !0) && r()
                                })),
                                close: function(t, e) {
                                    if (e("closeButton", !0)) return t.child("button").html(e("closeHtml", "&#xD7;")).clazz("pico-close").clazz(e("closeClass", "")).stylize(e("closeStyles", {
                                        borderRadius: "2px",
                                        border: 0,
                                        padding: 0,
                                        cursor: "pointer",
                                        height: "15px",
                                        width: "15px",
                                        position: "absolute",
                                        top: "5px",
                                        right: "5px",
                                        fontSize: "16px",
                                        textAlign: "center",
                                        lineHeight: "15px",
                                        background: "#CCC"
                                    })).attr("aria-label", e("close-label", "Close"))
                                }(i, s)
                            }, o.trigger(c, e)
                        }
                        var n, r;
                        return l[t]
                    }
                    return function(r, o) {
                        function e(t, e) {
                            var i = t.msMatchesSelector || t.webkitMatchesSelector || t.matches;
                            return i.call(t, e)
                        }

                        function a(t) {
                            return !(_(t) || e(t, ":disabled") || t.hasAttribute("contenteditable")) && (t.hasAttribute("tabindex") || e(t, "input,select,textarea,button,a[href],area[href],iframe"))
                        }

                        function s(t) {
                            for (var e = t.getElementsByTagName("*"), i = 0; i < e.length; i++)
                                if (a(e[i])) return e[i]
                        }
                        var t;
                        r.beforeShow(function() {
                            t = or.activeElement
                        }), r.afterShow(function() {
                            if (o()) {
                                var t = s(r.modalElem());
                                t && t.focus()
                            }
                        }), r.afterClose(function() {
                            o() && t && t.focus(), t = null
                        }), x.watch(function(t) {
                            if (o() && r.isVisible()) {
                                var e = s(r.modalElem()),
                                    i = function(t) {
                                        for (var e = t.getElementsByTagName("*"), i = e.length; i--;)
                                            if (a(e[i])) return e[i]
                                    }(r.modalElem()),
                                    n = t.shiftKey ? e : i;
                                n === or.activeElement && ((t.shiftKey ? i : e).focus(), t.preventDefault())
                            }
                        })
                    }(c = {
                        modalElem: k(p),
                        closeElem: k(m),
                        overlayElem: k(f),
                        buildDom: v(b.bind(null, null)),
                        isVisible: function() {
                            return !!(l && p && p().isVisible())
                        },
                        show: function(t) {
                            return e.trigger(c, t) && (f().show(), m(), p().show(), i.trigger(c, t)), this
                        },
                        close: v(y),
                        forceClose: v(g),
                        destroy: function() {
                            p().destroy(), f().destroy(), f = p = m = void 0
                        },
                        options: function(e) {
                            Object.keys(e).map(function(t) {
                                n[t] = e[t]
                            })
                        },
                        afterCreate: v(o.watch),
                        beforeShow: v(e.watch),
                        afterShow: v(i.watch),
                        beforeClose: v(r.watch),
                        afterClose: v(a.watch)
                    }, s.bind(null, "focus", !0)), t = c, u = s.bind(null, "bodyOverflow", !0), h = new w(or.body), t.beforeShow(function() {
                        d = h.elem.style.overflow, u() && h.stylize({
                            overflow: "hidden"
                        })
                    }), t.afterClose(function() {
                        h.stylize({
                            overflow: d
                        })
                    }), T.watch(function() {
                        s("escCloses", !0) && c.isVisible() && c.close()
                    }), c
                }
        }()
    }(this),
    function() {
        function v() {
            return d.Date.now()
        }

        function t() {}

        function o(n, r, t) {
            function i(t) {
                var e = c,
                    i = l;
                return c = l = A, f = t, d = n.apply(i, e)
            }

            function o(t) {
                var e = t - p;
                return t -= f, p === A || r <= e || e < 0 || g && u <= t
            }

            function a() {
                var t = v();
                if (o(t)) return s(t);
                var e, i = setTimeout;
                e = t - f, t = r - (t - p), e = g ? w(t, u - e) : t, h = i(a, e)
            }

            function s(t) {
                return h = A, y && c ? i(t) : (c = l = A, d)
            }

            function e() {
                var t = v(),
                    e = o(t);
                if (c = arguments, l = this, p = t, e) {
                    if (h === A) return f = t = p, h = setTimeout(a, r), m ? i(t) : d;
                    if (g) return h = setTimeout(a, r), i(p)
                }
                return h === A && (h = setTimeout(a, r)), d
            }
            var c, l, u, d, h, p, f = 0,
                m = !1,
                g = !1,
                y = !0;
            if ("function" != typeof n) throw new TypeError("Expected a function");
            return r = S(r) || 0, b(t) && (m = !!t.leading, u = (g = "maxWait" in t) ? _(S(t.maxWait) || 0, r) : u, y = "trailing" in t ? !!t.trailing : y), e.cancel = function() {
                h !== A && clearTimeout(h), f = 0, c = p = l = h = A
            }, e.flush = function() {
                return h === A ? d : s(v())
            }, e
        }

        function b(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }

        function a(t) {
            return null != t && "object" == typeof t
        }

        function i(t) {
            var e;
            if (!(e = "symbol" == typeof t) && (e = a(t))) {
                if (null == t) t = t === A ? "[object Undefined]" : "[object Null]";
                else if (y && y in Object(t)) {
                    e = f.call(t, y);
                    var i = t[y];
                    try {
                        t[y] = A;
                        var n = !0
                    } catch (t) {}
                    var r = m.call(t);
                    n && (e ? t[y] = i : delete t[y]), t = r
                } else t = m.call(t);
                e = "[object Symbol]" == t
            }
            return e
        }

        function S(t) {
            if ("number" == typeof t) return t;
            if (i(t)) return n;
            if (b(t) && (t = b(t = "function" == typeof t.valueOf ? t.valueOf() : t) ? t + "" : t), "string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(r, "");
            var e = c.test(t);
            return e || l.test(t) ? u(t.slice(2), e ? 2 : 8) : s.test(t) ? n : +t
        }
        var A, n = NaN,
            r = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            u = parseInt,
            e = "object" == typeof self && self && self.Object === Object && self,
            d = "object" == typeof global && global && global.Object === Object && global || e || Function("return this")(),
            h = (e = "object" == typeof exports && exports && !exports.nodeType && exports) && "object" == typeof module && module && !module.nodeType && module,
            p = Object.prototype,
            f = p.hasOwnProperty,
            m = p.toString,
            g = d._,
            y = (p = d.Symbol) ? p.toStringTag : A,
            _ = Math.max,
            w = Math.min;
        t.debounce = o, t.throttle = function(t, e, i) {
            var n = !0,
                r = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return b(i) && (n = "leading" in i ? !!i.leading : n, r = "trailing" in i ? !!i.trailing : r), o(t, e, {
                leading: n,
                maxWait: e,
                trailing: r
            })
        }, t.isObject = b, t.isObjectLike = a, t.isSymbol = i, t.noConflict = function() {
            return d._ === this && (d._ = g), this
        }, t.now = v, t.toNumber = S, t.VERSION = "4.17.5", "function" == typeof define && "object" == typeof define.amd && define.amd ? (d._ = t, define(function() {
            return t
        })) : h ? ((h.exports = t)._ = t, e._ = t) : d._ = t
    }.call(this), i = this, n = function() {
            "use strict";
            var t, r;

            function v() {
                return t.apply(null, arguments)
            }

            function s(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function c(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function l(t) {
                return void 0 === t
            }

            function u(t) {
                return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
            }

            function d(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function h(t, e) {
                var i, n = [];
                for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
                return n
            }

            function b(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function p(t, e) {
                for (var i in e) b(e, i) && (t[i] = e[i]);
                return b(e, "toString") && (t.toString = e.toString), b(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function f(t, e, i, n) {
                return Ce(t, e, i, n, !0).utc()
            }

            function S(t) {
                return null == t._pf && (t._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), t._pf
            }

            function m(t) {
                if (null == t._isValid) {
                    var e = S(t),
                        i = r.call(e.parsedDateParts, function(t) {
                            return null != t
                        }),
                        n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                    if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
                    t._isValid = n
                }
                return t._isValid
            }

            function g(t) {
                var e = f(NaN);
                return null != t ? p(S(e), t) : S(e).userInvalidated = !0, e
            }
            r = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                    if (n in e && t.call(this, e[n], n, e)) return !0;
                return !1
            };
            var o = v.momentProperties = [];

            function y(t, e) {
                var i, n, r;
                if (l(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), l(e._i) || (t._i = e._i), l(e._f) || (t._f = e._f), l(e._l) || (t._l = e._l), l(e._strict) || (t._strict = e._strict), l(e._tzm) || (t._tzm = e._tzm), l(e._isUTC) || (t._isUTC = e._isUTC), l(e._offset) || (t._offset = e._offset), l(e._pf) || (t._pf = S(e)), l(e._locale) || (t._locale = e._locale), 0 < o.length)
                    for (i = 0; i < o.length; i++) l(r = e[n = o[i]]) || (t[n] = r);
                return t
            }
            var e = !1;

            function A(t) {
                y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === e && (e = !0, v.updateOffset(this), e = !1)
            }

            function _(t) {
                return t instanceof A || null != t && null != t._isAMomentObject
            }

            function w(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }

            function C(t) {
                var e = +t,
                    i = 0;
                return 0 != e && isFinite(e) && (i = w(e)), i
            }

            function a(t, e, i) {
                var n, r = Math.min(t.length, e.length),
                    o = Math.abs(t.length - e.length),
                    a = 0;
                for (n = 0; n < r; n++)(i && t[n] !== e[n] || !i && C(t[n]) !== C(e[n])) && a++;
                return a + o
            }

            function k(t) {
                !1 === v.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function i(r, o) {
                var a = !0;
                return p(function() {
                    if (null != v.deprecationHandler && v.deprecationHandler(null, r), a) {
                        for (var t, e = [], i = 0; i < arguments.length; i++) {
                            if (t = "", "object" == typeof arguments[i]) {
                                for (var n in t += "\n[" + i + "] ", arguments[0]) t += n + ": " + arguments[0][n] + ", ";
                                t = t.slice(0, -2)
                            } else t = arguments[i];
                            e.push(t)
                        }
                        k(r + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack), a = !1
                    }
                    return o.apply(this, arguments)
                }, o)
            }
            var n, T = {};

            function x(t, e) {
                null != v.deprecationHandler && v.deprecationHandler(t, e), T[t] || (k(e), T[t] = !0)
            }

            function E(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function M(t, e) {
                var i, n = p({}, t);
                for (i in e) b(e, i) && (c(t[i]) && c(e[i]) ? (n[i] = {}, p(n[i], t[i]), p(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
                for (i in t) b(t, i) && !b(e, i) && c(t[i]) && (n[i] = p({}, n[i]));
                return n
            }

            function D(t) {
                null != t && this.set(t)
            }
            v.suppressDeprecationWarnings = !1, v.deprecationHandler = null, n = Object.keys ? Object.keys : function(t) {
                var e, i = [];
                for (e in t) b(t, e) && i.push(e);
                return i
            };
            var P = {};

            function O(t, e) {
                var i = t.toLowerCase();
                P[i] = P[i + "s"] = P[e] = t
            }

            function L(t) {
                return "string" == typeof t ? P[t] || P[t.toLowerCase()] : void 0
            }

            function z(t) {
                var e, i, n = {};
                for (i in t) b(t, i) && (e = L(i)) && (n[e] = t[i]);
                return n
            }
            var I = {};

            function N(t, e) {
                I[t] = e
            }

            function B(t, e, i) {
                var n = "" + Math.abs(t),
                    r = e - n.length;
                return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
            }
            var R = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                j = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                q = {},
                H = {};

            function F(t, e, i, n) {
                var r = n;
                "string" == typeof n && (r = function() {
                    return this[n]()
                }), t && (H[t] = r), e && (H[e[0]] = function() {
                    return B(r.apply(this, arguments), e[1], e[2])
                }), i && (H[i] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), t)
                })
            }

            function V(t, e) {
                return t.isValid() ? (e = W(e, t.localeData()), q[e] = q[e] || function(n) {
                    var t, r, e, o = n.match(R);
                    for (t = 0, r = o.length; t < r; t++) H[o[t]] ? o[t] = H[o[t]] : o[t] = (e = o[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
                    return function(t) {
                        var e, i = "";
                        for (e = 0; e < r; e++) i += E(o[e]) ? o[e].call(t, n) : o[e];
                        return i
                    }
                }(e), q[e](t)) : t.localeData().invalidDate()
            }

            function W(t, e) {
                var i = 5;

                function n(t) {
                    return e.longDateFormat(t) || t
                }
                for (j.lastIndex = 0; 0 <= i && j.test(t);) t = t.replace(j, n), j.lastIndex = 0, i -= 1;
                return t
            }
            var G = /\d/,
                Y = /\d\d/,
                U = /\d{3}/,
                $ = /\d{4}/,
                K = /[+-]?\d{6}/,
                Z = /\d\d?/,
                X = /\d\d\d\d?/,
                J = /\d\d\d\d\d\d?/,
                Q = /\d{1,3}/,
                tt = /\d{1,4}/,
                et = /[+-]?\d{1,6}/,
                it = /\d+/,
                nt = /[+-]?\d+/,
                rt = /Z|[+-]\d\d:?\d\d/gi,
                ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
                at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                st = {};

            function ct(t, i, n) {
                st[t] = E(i) ? i : function(t, e) {
                    return t && n ? n : i
                }
            }

            function lt(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var ut = {};

            function dt(t, i) {
                var e, n = i;
                for ("string" == typeof t && (t = [t]), u(i) && (n = function(t, e) {
                        e[i] = C(t)
                    }), e = 0; e < t.length; e++) ut[t[e]] = n
            }

            function ht(t, r) {
                dt(t, function(t, e, i, n) {
                    i._w = i._w || {}, r(t, i._w, i, n)
                })
            }
            var pt = 0,
                ft = 1,
                mt = 2,
                gt = 3,
                yt = 4,
                vt = 5,
                bt = 6,
                St = 7,
                At = 8;

            function _t(t) {
                return wt(t) ? 366 : 365
            }

            function wt(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }
            F("Y", 0, 0, function() {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), F(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), F(0, ["YYYY", 4], 0, "year"), F(0, ["YYYYY", 5], 0, "year"), F(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), N("year", 1), ct("Y", nt), ct("YY", Z, Y), ct("YYYY", tt, $), ct("YYYYY", et, K), ct("YYYYYY", et, K), dt(["YYYYY", "YYYYYY"], pt), dt("YYYY", function(t, e) {
                e[pt] = 2 === t.length ? v.parseTwoDigitYear(t) : C(t)
            }), dt("YY", function(t, e) {
                e[pt] = v.parseTwoDigitYear(t)
            }), dt("Y", function(t, e) {
                e[pt] = parseInt(t, 10)
            }), v.parseTwoDigitYear = function(t) {
                return C(t) + (68 < C(t) ? 1900 : 2e3)
            };
            var Ct, kt = Tt("FullYear", !0);

            function Tt(e, i) {
                return function(t) {
                    return null != t ? (Et(this, e, t), v.updateOffset(this, i), this) : xt(this, e)
                }
            }

            function xt(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function Et(t, e, i) {
                t.isValid() && !isNaN(i) && ("FullYear" === e && wt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), Mt(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
            }

            function Mt(t, e) {
                if (isNaN(t) || isNaN(e)) return NaN;
                var i = (e % 12 + 12) % 12;
                return t += (e - i) / 12, 1 === i ? wt(t) ? 29 : 28 : 31 - i % 7 % 2
            }
            Ct = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, F("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), F("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }), F("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }), O("month", "M"), N("month", 8), ct("M", Z), ct("MM", Z, Y), ct("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }), ct("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }), dt(["M", "MM"], function(t, e) {
                e[ft] = C(t) - 1
            }), dt(["MMM", "MMMM"], function(t, e, i, n) {
                var r = i._locale.monthsParse(t, n, i._strict);
                null != r ? e[ft] = r : S(i).invalidMonth = t
            });
            var Dt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Pt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Ot = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Lt(t, e) {
                var i;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = C(e);
                    else if (!u(e = t.localeData().monthsParse(e))) return t;
                return i = Math.min(t.date(), Mt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
            }

            function zt(t) {
                return null != t ? (Lt(this, t), v.updateOffset(this, !0), this) : xt(this, "Month")
            }
            var It = at,
                Nt = at;

            function Bt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, i, n = [],
                    r = [],
                    o = [];
                for (e = 0; e < 12; e++) i = f([2e3, e]), n.push(this.monthsShort(i, "")), r.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
                for (n.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = lt(n[e]), r[e] = lt(r[e]);
                for (e = 0; e < 24; e++) o[e] = lt(o[e]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function Rt(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
            }

            function jt(t, e, i) {
                var n = 7 + e - i;
                return n - (7 + Rt(t, 0, n).getUTCDay() - e) % 7 - 1
            }

            function qt(t, e, i, n, r) {
                var o, a, s = 1 + 7 * (e - 1) + (7 + i - n) % 7 + jt(t, n, r);
                return a = s <= 0 ? _t(o = t - 1) + s : s > _t(t) ? (o = t + 1, s - _t(t)) : (o = t, s), {
                    year: o,
                    dayOfYear: a
                }
            }

            function Ht(t, e, i) {
                var n, r, o = jt(t.year(), e, i),
                    a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                return a < 1 ? n = a + Ft(r = t.year() - 1, e, i) : a > Ft(t.year(), e, i) ? (n = a - Ft(t.year(), e, i), r = t.year() + 1) : (r = t.year(), n = a), {
                    week: n,
                    year: r
                }
            }

            function Ft(t, e, i) {
                var n = jt(t, e, i),
                    r = jt(t + 1, e, i);
                return (_t(t) - n + r) / 7
            }
            F("w", ["ww", 2], "wo", "week"), F("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), N("week", 5), N("isoWeek", 5), ct("w", Z), ct("ww", Z, Y), ct("W", Z), ct("WW", Z, Y), ht(["w", "ww", "W", "WW"], function(t, e, i, n) {
                e[n.substr(0, 1)] = C(t)
            }), F("d", 0, "do", "day"), F("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }), F("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }), F("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }), F("e", 0, 0, "weekday"), F("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), N("day", 11), N("weekday", 11), N("isoWeekday", 11), ct("d", Z), ct("e", Z), ct("E", Z), ct("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }), ct("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }), ct("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }), ht(["dd", "ddd", "dddd"], function(t, e, i, n) {
                var r = i._locale.weekdaysParse(t, n, i._strict);
                null != r ? e.d = r : S(i).invalidWeekday = t
            }), ht(["d", "e", "E"], function(t, e, i, n) {
                e[n] = C(t)
            });
            var Vt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Wt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Gt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Yt = at,
                Ut = at,
                $t = at;

            function Kt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, i, n, r, o, a = [],
                    s = [],
                    c = [],
                    l = [];
                for (e = 0; e < 7; e++) i = f([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), r = this.weekdaysShort(i, ""), o = this.weekdays(i, ""), a.push(n), s.push(r), c.push(o), l.push(n), l.push(r), l.push(o);
                for (a.sort(t), s.sort(t), c.sort(t), l.sort(t), e = 0; e < 7; e++) s[e] = lt(s[e]), c[e] = lt(c[e]), l[e] = lt(l[e]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
            }

            function Zt() {
                return this.hours() % 12 || 12
            }

            function Xt(t, e) {
                F(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function Jt(t, e) {
                return e._meridiemParse
            }
            F("H", ["HH", 2], 0, "hour"), F("h", ["hh", 2], 0, Zt), F("k", ["kk", 2], 0, function() {
                return this.hours() || 24
            }), F("hmm", 0, 0, function() {
                return "" + Zt.apply(this) + B(this.minutes(), 2)
            }), F("hmmss", 0, 0, function() {
                return "" + Zt.apply(this) + B(this.minutes(), 2) + B(this.seconds(), 2)
            }), F("Hmm", 0, 0, function() {
                return "" + this.hours() + B(this.minutes(), 2)
            }), F("Hmmss", 0, 0, function() {
                return "" + this.hours() + B(this.minutes(), 2) + B(this.seconds(), 2)
            }), Xt("a", !0), Xt("A", !1), O("hour", "h"), N("hour", 13), ct("a", Jt), ct("A", Jt), ct("H", Z), ct("h", Z), ct("k", Z), ct("HH", Z, Y), ct("hh", Z, Y), ct("kk", Z, Y), ct("hmm", X), ct("hmmss", J), ct("Hmm", X), ct("Hmmss", J), dt(["H", "HH"], gt), dt(["k", "kk"], function(t, e, i) {
                var n = C(t);
                e[gt] = 24 === n ? 0 : n
            }), dt(["a", "A"], function(t, e, i) {
                i._isPm = i._locale.isPM(t), i._meridiem = t
            }), dt(["h", "hh"], function(t, e, i) {
                e[gt] = C(t), S(i).bigHour = !0
            }), dt("hmm", function(t, e, i) {
                var n = t.length - 2;
                e[gt] = C(t.substr(0, n)), e[yt] = C(t.substr(n)), S(i).bigHour = !0
            }), dt("hmmss", function(t, e, i) {
                var n = t.length - 4,
                    r = t.length - 2;
                e[gt] = C(t.substr(0, n)), e[yt] = C(t.substr(n, 2)), e[vt] = C(t.substr(r)), S(i).bigHour = !0
            }), dt("Hmm", function(t, e, i) {
                var n = t.length - 2;
                e[gt] = C(t.substr(0, n)), e[yt] = C(t.substr(n))
            }), dt("Hmmss", function(t, e, i) {
                var n = t.length - 4,
                    r = t.length - 2;
                e[gt] = C(t.substr(0, n)), e[yt] = C(t.substr(n, 2)), e[vt] = C(t.substr(r))
            });
            var Qt, te = Tt("Hours", !0),
                ee = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: Pt,
                    monthsShort: Ot,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: Vt,
                    weekdaysMin: Gt,
                    weekdaysShort: Wt,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                ie = {},
                ne = {};

            function re(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function oe(t) {
                var e = null;
                if (!ie[t] && "undefined" != typeof module && module && module.exports) try {
                    e = Qt._abbr, require("./locale/" + t), ae(e)
                } catch (t) {}
                return ie[t]
            }

            function ae(t, e) {
                var i;
                return t && ((i = l(e) ? ce(t) : se(t, e)) ? Qt = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Qt._abbr
            }

            function se(t, e) {
                if (null === e) return delete ie[t], null;
                var i, n = ee;
                if (e.abbr = t, null != ie[t]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ie[t]._config;
                else if (null != e.parentLocale)
                    if (null != ie[e.parentLocale]) n = ie[e.parentLocale]._config;
                    else {
                        if (null == (i = oe(e.parentLocale))) return ne[e.parentLocale] || (ne[e.parentLocale] = []), ne[e.parentLocale].push({
                            name: t,
                            config: e
                        }), null;
                        n = i._config
                    } return ie[t] = new D(M(n, e)), ne[t] && ne[t].forEach(function(t) {
                    se(t.name, t.config)
                }), ae(t), ie[t]
            }

            function ce(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Qt;
                if (!s(t)) {
                    if (e = oe(t)) return e;
                    t = [t]
                }
                return function(t) {
                    for (var e, i, n, r, o = 0; o < t.length;) {
                        for (e = (r = re(t[o]).split("-")).length, i = (i = re(t[o + 1])) ? i.split("-") : null; 0 < e;) {
                            if (n = oe(r.slice(0, e).join("-"))) return n;
                            if (i && i.length >= e && a(r, i, !0) >= e - 1) break;
                            e--
                        }
                        o++
                    }
                    return Qt
                }(t)
            }

            function le(t) {
                var e, i = t._a;
                return i && -2 === S(t).overflow && (e = i[ft] < 0 || 11 < i[ft] ? ft : i[mt] < 1 || i[mt] > Mt(i[pt], i[ft]) ? mt : i[gt] < 0 || 24 < i[gt] || 24 === i[gt] && (0 !== i[yt] || 0 !== i[vt] || 0 !== i[bt]) ? gt : i[yt] < 0 || 59 < i[yt] ? yt : i[vt] < 0 || 59 < i[vt] ? vt : i[bt] < 0 || 999 < i[bt] ? bt : -1, S(t)._overflowDayOfYear && (e < pt || mt < e) && (e = mt), S(t)._overflowWeeks && -1 === e && (e = St), S(t)._overflowWeekday && -1 === e && (e = At), S(t).overflow = e), t
            }

            function ue(t, e, i) {
                return null != t ? t : null != e ? e : i
            }

            function de(t) {
                var e, i, n, r, o, a, s, c = [];
                if (!t._d) {
                    for (a = t, s = void 0, s = new Date(v.now()), n = a._useUTC ? [s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()] : [s.getFullYear(), s.getMonth(), s.getDate()], t._w && null == t._a[mt] && null == t._a[ft] && function(t) {
                            var e, i, n, r, o, a, s, c;
                            if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, a = 4, i = ue(e.GG, t._a[pt], Ht(ke(), 1, 4).year), n = ue(e.W, 1), ((r = ue(e.E, 1)) < 1 || 7 < r) && (c = !0);
                            else {
                                o = t._locale._week.dow, a = t._locale._week.doy;
                                var l = Ht(ke(), o, a);
                                i = ue(e.gg, t._a[pt], l.year), n = ue(e.w, l.week), null != e.d ? ((r = e.d) < 0 || 6 < r) && (c = !0) : null != e.e ? (r = e.e + o, (e.e < 0 || 6 < e.e) && (c = !0)) : r = o
                            }
                            n < 1 || n > Ft(i, o, a) ? S(t)._overflowWeeks = !0 : null != c ? S(t)._overflowWeekday = !0 : (s = qt(i, n, r, o, a), t._a[pt] = s.year, t._dayOfYear = s.dayOfYear)
                        }(t), null != t._dayOfYear && (o = ue(t._a[pt], n[pt]), (t._dayOfYear > _t(o) || 0 === t._dayOfYear) && (S(t)._overflowDayOfYear = !0), i = Rt(o, 0, t._dayOfYear), t._a[ft] = i.getUTCMonth(), t._a[mt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = c[e] = n[e];
                    for (; e < 7; e++) t._a[e] = c[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[gt] && 0 === t._a[yt] && 0 === t._a[vt] && 0 === t._a[bt] && (t._nextDay = !0, t._a[gt] = 0), t._d = (t._useUTC ? Rt : function(t, e, i, n, r, o, a) {
                        var s = new Date(t, e, i, n, r, o, a);
                        return t < 100 && 0 <= t && isFinite(s.getFullYear()) && s.setFullYear(t), s
                    }).apply(null, c), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[gt] = 24), t._w && void 0 !== t._w.d && t._w.d !== r && (S(t).weekdayMismatch = !0)
                }
            }
            var he = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                pe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                fe = /Z|[+-]\d\d(?::?\d\d)?/,
                me = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                ge = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                ye = /^\/?Date\((\-?\d+)/i;

            function ve(t) {
                var e, i, n, r, o, a, s = t._i,
                    c = he.exec(s) || pe.exec(s);
                if (c) {
                    for (S(t).iso = !0, e = 0, i = me.length; e < i; e++)
                        if (me[e][1].exec(c[1])) {
                            r = me[e][0], n = !1 !== me[e][2];
                            break
                        } if (null == r) return void(t._isValid = !1);
                    if (c[3]) {
                        for (e = 0, i = ge.length; e < i; e++)
                            if (ge[e][1].exec(c[3])) {
                                o = (c[2] || " ") + ge[e][0];
                                break
                            } if (null == o) return void(t._isValid = !1)
                    }
                    if (!n && null != o) return void(t._isValid = !1);
                    if (c[4]) {
                        if (!fe.exec(c[4])) return void(t._isValid = !1);
                        a = "Z"
                    }
                    t._f = r + (o || "") + (a || ""), _e(t)
                } else t._isValid = !1
            }
            var be = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
            var Se = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function Ae(t) {
                var e, i, n, r, o, a, s, c, l, u, d, h = be.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (h) {
                    var p = (r = h[4], o = h[3], a = h[2], s = h[5], c = h[6], l = h[7], d = [(u = parseInt(r, 10), u <= 49 ? 2e3 + u : u <= 999 ? 1900 + u : u), Ot.indexOf(o), parseInt(a, 10), parseInt(s, 10), parseInt(c, 10)], l && d.push(parseInt(l, 10)), d);
                    if (e = h[1], i = p, n = t, e && Wt.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (S(n).weekdayMismatch = !0, !(n._isValid = !1))) return;
                    t._a = p, t._tzm = function(t, e, i) {
                        if (t) return Se[t];
                        if (e) return 0;
                        var n = parseInt(i, 10),
                            r = n % 100;
                        return (n - r) / 100 * 60 + r
                    }(h[8], h[9], h[10]), t._d = Rt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), S(t).rfc2822 = !0
                } else t._isValid = !1
            }

            function _e(t) {
                if (t._f !== v.ISO_8601)
                    if (t._f !== v.RFC_2822) {
                        t._a = [], S(t).empty = !0;
                        var e, i, n, r, o, a, s, c, l = "" + t._i,
                            u = l.length,
                            d = 0;
                        for (n = W(t._f, t._locale).match(R) || [], e = 0; e < n.length; e++) r = n[e], (i = (l.match((g = r, y = t, b(st, g) ? st[g](y._strict, y._locale) : new RegExp(lt(g.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, r) {
                            return e || i || n || r
                        }))))) || [])[0]) && (0 < (o = l.substr(0, l.indexOf(i))).length && S(t).unusedInput.push(o), l = l.slice(l.indexOf(i) + i.length), d += i.length), H[r] ? (i ? S(t).empty = !1 : S(t).unusedTokens.push(r), a = r, c = t, null != (s = i) && b(ut, a) && ut[a](s, c._a, c, a)) : t._strict && !i && S(t).unusedTokens.push(r);
                        S(t).charsLeftOver = u - d, 0 < l.length && S(t).unusedInput.push(l), t._a[gt] <= 12 && !0 === S(t).bigHour && 0 < t._a[gt] && (S(t).bigHour = void 0), S(t).parsedDateParts = t._a.slice(0), S(t).meridiem = t._meridiem, t._a[gt] = (h = t._locale, p = t._a[gt], null == (f = t._meridiem) ? p : null != h.meridiemHour ? h.meridiemHour(p, f) : (null != h.isPM && ((m = h.isPM(f)) && p < 12 && (p += 12), m || 12 !== p || (p = 0)), p)), de(t), le(t)
                    } else Ae(t);
                else ve(t);
                var h, p, f, m, g, y
            }

            function we(t) {
                var e, i, n, r, o = t._i,
                    a = t._f;
                return t._locale = t._locale || ce(t._l), null === o || void 0 === a && "" === o ? g({
                    nullInput: !0
                }) : ("string" == typeof o && (t._i = o = t._locale.preparse(o)), _(o) ? new A(le(o)) : (d(o) ? t._d = o : s(a) ? function(t) {
                    var e, i, n, r, o;
                    if (0 === t._f.length) return S(t).invalidFormat = !0, t._d = new Date(NaN);
                    for (r = 0; r < t._f.length; r++) o = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], _e(e), m(e) && (o += S(e).charsLeftOver, o += 10 * S(e).unusedTokens.length, S(e).score = o, (null == n || o < n) && (n = o, i = e));
                    p(t, i || e)
                }(t) : a ? _e(t) : l(r = (e = t)._i) ? e._d = new Date(v.now()) : d(r) ? e._d = new Date(r.valueOf()) : "string" == typeof r ? (i = e, null === (n = ye.exec(i._i)) ? (ve(i), !1 === i._isValid && (delete i._isValid, Ae(i), !1 === i._isValid && (delete i._isValid, v.createFromInputFallback(i)))) : i._d = new Date(+n[1])) : s(r) ? (e._a = h(r.slice(0), function(t) {
                    return parseInt(t, 10)
                }), de(e)) : c(r) ? function(t) {
                    if (!t._d) {
                        var e = z(t._i);
                        t._a = h([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                            return t && parseInt(t, 10)
                        }), de(t)
                    }
                }(e) : u(r) ? e._d = new Date(r) : v.createFromInputFallback(e), m(t) || (t._d = null), t))
            }

            function Ce(t, e, i, n, r) {
                var o, a = {};
                return !0 !== i && !1 !== i || (n = i, i = void 0), (c(t) && function(t) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }(t) || s(t) && 0 === t.length) && (t = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = i, a._i = t, a._f = e, a._strict = n, (o = new A(le(we(a))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function ke(t, e, i, n) {
                return Ce(t, e, i, n, !1)
            }
            v.createFromInputFallback = i("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), v.ISO_8601 = function() {}, v.RFC_2822 = function() {};
            var Te = i("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = ke.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : g()
                }),
                xe = i("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = ke.apply(null, arguments);
                    return this.isValid() && t.isValid() ? this < t ? this : t : g()
                });

            function Ee(t, e) {
                var i, n;
                if (1 === e.length && s(e[0]) && (e = e[0]), !e.length) return ke();
                for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]);
                return i
            }
            var Me = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function De(t) {
                var e = z(t),
                    i = e.year || 0,
                    n = e.quarter || 0,
                    r = e.month || 0,
                    o = e.week || e.isoWeek || 0,
                    a = e.day || 0,
                    s = e.hour || 0,
                    c = e.minute || 0,
                    l = e.second || 0,
                    u = e.millisecond || 0;
                this._isValid = function(t) {
                    for (var e in t)
                        if (-1 === Ct.call(Me, e) || null != t[e] && isNaN(t[e])) return !1;
                    for (var i = !1, n = 0; n < Me.length; ++n)
                        if (t[Me[n]]) {
                            if (i) return !1;
                            parseFloat(t[Me[n]]) !== C(t[Me[n]]) && (i = !0)
                        } return !0
                }(e), this._milliseconds = +u + 1e3 * l + 6e4 * c + 1e3 * s * 60 * 60, this._days = +a + 7 * o, this._months = +r + 3 * n + 12 * i, this._data = {}, this._locale = ce(), this._bubble()
            }

            function Pe(t) {
                return t instanceof De
            }

            function Oe(t) {
                return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
            }

            function Le(t, i) {
                F(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        e = "+";
                    return t < 0 && (t = -t, e = "-"), e + B(~~(t / 60), 2) + i + B(~~t % 60, 2)
                })
            }
            Le("Z", ":"), Le("ZZ", ""), ct("Z", ot), ct("ZZ", ot), dt(["Z", "ZZ"], function(t, e, i) {
                i._useUTC = !0, i._tzm = Ie(ot, t)
            });
            var ze = /([\+\-]|\d\d)/gi;

            function Ie(t, e) {
                var i = (e || "").match(t);
                if (null === i) return null;
                var n = ((i[i.length - 1] || []) + "").match(ze) || ["-", 0, 0],
                    r = 60 * n[1] + C(n[2]);
                return 0 === r ? 0 : "+" === n[0] ? r : -r
            }

            function Ne(t, e) {
                var i, n;
                return e._isUTC ? (i = e.clone(), n = (_(t) || d(t) ? t.valueOf() : ke(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + n), v.updateOffset(i, !1), i) : ke(t).local()
            }

            function Be(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function Re() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            v.updateOffset = function() {};
            var je = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                qe = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function He(t, e) {
                var i, n, r, o, a, s, c = t,
                    l = null;
                return Pe(t) ? c = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : u(t) ? (c = {}, e ? c[e] = t : c.milliseconds = t) : (l = je.exec(t)) ? (i = "-" === l[1] ? -1 : 1, c = {
                    y: 0,
                    d: C(l[mt]) * i,
                    h: C(l[gt]) * i,
                    m: C(l[yt]) * i,
                    s: C(l[vt]) * i,
                    ms: C(Oe(1e3 * l[bt])) * i
                }) : (l = qe.exec(t)) ? (i = "-" === l[1] ? -1 : 1, c = {
                    y: Fe(l[2], i),
                    M: Fe(l[3], i),
                    w: Fe(l[4], i),
                    d: Fe(l[5], i),
                    h: Fe(l[6], i),
                    m: Fe(l[7], i),
                    s: Fe(l[8], i)
                }) : null == c ? c = {} : "object" == typeof c && ("from" in c || "to" in c) && (o = ke(c.from), a = ke(c.to), r = o.isValid() && a.isValid() ? (a = Ne(a, o), o.isBefore(a) ? s = Ve(o, a) : ((s = Ve(a, o)).milliseconds = -s.milliseconds, s.months = -s.months), s) : {
                    milliseconds: 0,
                    months: 0
                }, (c = {}).ms = r.milliseconds, c.M = r.months), n = new De(c), Pe(t) && b(t, "_locale") && (n._locale = t._locale), n
            }

            function Fe(t, e) {
                var i = t && parseFloat(t.replace(",", "."));
                return (isNaN(i) ? 0 : i) * e
            }

            function Ve(t, e) {
                var i = {
                    milliseconds: 0,
                    months: 0
                };
                return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
            }

            function We(n, r) {
                return function(t, e) {
                    var i;
                    return null === e || isNaN(+e) || (x(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = t, t = e, e = i), Ge(this, He(t = "string" == typeof t ? +t : t, e), n), this
                }
            }

            function Ge(t, e, i, n) {
                var r = e._milliseconds,
                    o = Oe(e._days),
                    a = Oe(e._months);
                t.isValid() && (n = null == n || n, a && Lt(t, xt(t, "Month") + a * i), o && Et(t, "Date", xt(t, "Date") + o * i), r && t._d.setTime(t._d.valueOf() + r * i), n && v.updateOffset(t, o || a))
            }
            He.fn = De.prototype, He.invalid = function() {
                return He(NaN)
            };
            var Ye = We(1, "add"),
                Ue = We(-1, "subtract");

            function $e(t, e) {
                var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    n = t.clone().add(i, "months");
                return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(1 + i, "months") - n))) || 0
            }

            function Ke(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (null != (e = ce(t)) && (this._locale = e), this)
            }
            v.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", v.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Ze = i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });

            function Xe() {
                return this._locale
            }

            function Je(t, e) {
                F(0, [t, t.length], 0, e)
            }

            function Qe(t, e, i, n, r) {
                var o;
                return null == t ? Ht(this, n, r).year : ((o = Ft(t, n, r)) < e && (e = o), function(t, e, i, n, r) {
                    var o = qt(t, e, i, n, r),
                        a = Rt(o.year, 0, o.dayOfYear);
                    return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
                }.call(this, t, e, i, n, r))
            }
            F(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), F(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), Je("gggg", "weekYear"), Je("ggggg", "weekYear"), Je("GGGG", "isoWeekYear"), Je("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), N("weekYear", 1), N("isoWeekYear", 1), ct("G", nt), ct("g", nt), ct("GG", Z, Y), ct("gg", Z, Y), ct("GGGG", tt, $), ct("gggg", tt, $), ct("GGGGG", et, K), ct("ggggg", et, K), ht(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) {
                e[n.substr(0, 2)] = C(t)
            }), ht(["gg", "GG"], function(t, e, i, n) {
                e[n] = v.parseTwoDigitYear(t)
            }), F("Q", 0, "Qo", "quarter"), O("quarter", "Q"), N("quarter", 7), ct("Q", G), dt("Q", function(t, e) {
                e[ft] = 3 * (C(t) - 1)
            }), F("D", ["DD", 2], "Do", "date"), O("date", "D"), N("date", 9), ct("D", Z), ct("DD", Z, Y), ct("Do", function(t, e) {
                return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
            }), dt(["D", "DD"], mt), dt("Do", function(t, e) {
                e[mt] = C(t.match(Z)[0])
            });
            var ti = Tt("Date", !0);
            F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), N("dayOfYear", 4), ct("DDD", Q), ct("DDDD", U), dt(["DDD", "DDDD"], function(t, e, i) {
                i._dayOfYear = C(t)
            }), F("m", ["mm", 2], 0, "minute"), O("minute", "m"), N("minute", 14), ct("m", Z), ct("mm", Z, Y), dt(["m", "mm"], yt);
            var ei = Tt("Minutes", !1);
            F("s", ["ss", 2], 0, "second"), O("second", "s"), N("second", 15), ct("s", Z), ct("ss", Z, Y), dt(["s", "ss"], vt);
            var ii, ni = Tt("Seconds", !1);
            for (F("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), F(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), F(0, ["SSS", 3], 0, "millisecond"), F(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), F(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), F(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), F(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), F(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), F(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), O("millisecond", "ms"), N("millisecond", 16), ct("S", Q, G), ct("SS", Q, Y), ct("SSS", Q, U), ii = "SSSS"; ii.length <= 9; ii += "S") ct(ii, it);

            function ri(t, e) {
                e[bt] = C(1e3 * ("0." + t))
            }
            for (ii = "S"; ii.length <= 9; ii += "S") dt(ii, ri);
            var oi = Tt("Milliseconds", !1);
            F("z", 0, 0, "zoneAbbr"), F("zz", 0, 0, "zoneName");
            var ai = A.prototype;

            function si(t) {
                return t
            }
            ai.add = Ye, ai.calendar = function(t, e) {
                var i = t || ke(),
                    n = Ne(i, this).startOf("day"),
                    r = v.calendarFormat(this, n) || "sameElse",
                    o = e && (E(e[r]) ? e[r].call(this, i) : e[r]);
                return this.format(o || this.localeData().calendar(r, this, ke(i)))
            }, ai.clone = function() {
                return new A(this)
            }, ai.diff = function(t, e, i) {
                var n, r, o;
                if (!this.isValid()) return NaN;
                if (!(n = Ne(t, this)).isValid()) return NaN;
                switch (r = 6e4 * (n.utcOffset() - this.utcOffset()), e = L(e)) {
                    case "year":
                        o = $e(this, n) / 12;
                        break;
                    case "month":
                        o = $e(this, n);
                        break;
                    case "quarter":
                        o = $e(this, n) / 3;
                        break;
                    case "second":
                        o = (this - n) / 1e3;
                        break;
                    case "minute":
                        o = (this - n) / 6e4;
                        break;
                    case "hour":
                        o = (this - n) / 36e5;
                        break;
                    case "day":
                        o = (this - n - r) / 864e5;
                        break;
                    case "week":
                        o = (this - n - r) / 6048e5;
                        break;
                    default:
                        o = this - n
                }
                return i ? o : w(o)
            }, ai.endOf = function(t) {
                return void 0 === (t = L(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }, ai.format = function(t) {
                t || (t = this.isUtc() ? v.defaultFormatUtc : v.defaultFormat);
                var e = V(this, t);
                return this.localeData().postformat(e)
            }, ai.from = function(t, e) {
                return this.isValid() && (_(t) && t.isValid() || ke(t).isValid()) ? He({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, ai.fromNow = function(t) {
                return this.from(ke(), t)
            }, ai.to = function(t, e) {
                return this.isValid() && (_(t) && t.isValid() || ke(t).isValid()) ? He({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, ai.toNow = function(t) {
                return this.to(ke(), t)
            }, ai.get = function(t) {
                return E(this[t = L(t)]) ? this[t]() : this
            }, ai.invalidAt = function() {
                return S(this).overflow
            }, ai.isAfter = function(t, e) {
                var i = _(t) ? t : ke(t);
                return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
            }, ai.isBefore = function(t, e) {
                var i = _(t) ? t : ke(t);
                return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
            }, ai.isBetween = function(t, e, i, n) {
                var r = _(t) ? t : ke(t),
                    o = _(e) ? e : ke(e);
                return !!(this.isValid() && r.isValid() && o.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(r, i) : !this.isBefore(r, i)) && (")" === n[1] ? this.isBefore(o, i) : !this.isAfter(o, i))
            }, ai.isSame = function(t, e) {
                var i, n = _(t) ? t : ke(t);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = L(e) || "millisecond") ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
            }, ai.isSameOrAfter = function(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }, ai.isSameOrBefore = function(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }, ai.isValid = function() {
                return m(this)
            }, ai.lang = Ze, ai.locale = Ke, ai.localeData = Xe, ai.max = xe, ai.min = Te, ai.parsingFlags = function() {
                return p({}, S(this))
            }, ai.set = function(t, e) {
                if ("object" == typeof t)
                    for (var i = function(t) {
                            var e = [];
                            for (var i in t) e.push({
                                unit: i,
                                priority: I[i]
                            });
                            return e.sort(function(t, e) {
                                return t.priority - e.priority
                            }), e
                        }(t = z(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
                else if (E(this[t = L(t)])) return this[t](e);
                return this
            }, ai.startOf = function(t) {
                switch (t = L(t)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }, ai.subtract = Ue, ai.toArray = function() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }, ai.toObject = function() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }, ai.toDate = function() {
                return new Date(this.valueOf())
            }, ai.toISOString = function(t) {
                if (!this.isValid()) return null;
                var e = !0 !== t,
                    i = e ? this.clone().utc() : this;
                return i.year() < 0 || 9999 < i.year() ? V(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", V(i, "Z")) : V(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, ai.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var t = "moment",
                    e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                var i = "[" + t + '("]',
                    n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    r = e + '[")]';
                return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + r)
            }, ai.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, ai.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, ai.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, ai.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, ai.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, ai.year = kt, ai.isLeapYear = function() {
                return wt(this.year())
            }, ai.weekYear = function(t) {
                return Qe.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, ai.isoWeekYear = function(t) {
                return Qe.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, ai.quarter = ai.quarters = function(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }, ai.month = zt, ai.daysInMonth = function() {
                return Mt(this.year(), this.month())
            }, ai.week = ai.weeks = function(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }, ai.isoWeek = ai.isoWeeks = function(t) {
                var e = Ht(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }, ai.weeksInYear = function() {
                var t = this.localeData()._week;
                return Ft(this.year(), t.dow, t.doy)
            }, ai.isoWeeksInYear = function() {
                return Ft(this.year(), 1, 4)
            }, ai.date = ti, ai.day = ai.days = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n
            }, ai.weekday = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }, ai.isoWeekday = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                if (null == t) return this.day() || 7;
                var e, i, n = (e = t, i = this.localeData(), "string" == typeof e ? i.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
                return this.day(this.day() % 7 ? n : n - 7)
            }, ai.dayOfYear = function(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }, ai.hour = ai.hours = te, ai.minute = ai.minutes = ei, ai.second = ai.seconds = ni, ai.millisecond = ai.milliseconds = oi, ai.utcOffset = function(t, e, i) {
                var n, r = this._offset || 0;
                if (!this.isValid()) return null != t ? this : NaN;
                if (null == t) return this._isUTC ? r : Be(this);
                if ("string" == typeof t) {
                    if (null === (t = Ie(ot, t))) return this
                } else Math.abs(t) < 16 && !i && (t *= 60);
                return !this._isUTC && e && (n = Be(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), r !== t && (!e || this._changeInProgress ? Ge(this, He(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, v.updateOffset(this, !0), this._changeInProgress = null)), this
            }, ai.utc = function(t) {
                return this.utcOffset(0, t)
            }, ai.local = function(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Be(this), "m")), this
            }, ai.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var t = Ie(rt, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                }
                return this
            }, ai.hasAlignedHourOffset = function(t) {
                return !!this.isValid() && (t = t ? ke(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
            }, ai.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, ai.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, ai.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, ai.isUtc = Re, ai.isUTC = Re, ai.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, ai.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, ai.dates = i("dates accessor is deprecated. Use date instead.", ti), ai.months = i("months accessor is deprecated. Use month instead", zt), ai.years = i("years accessor is deprecated. Use year instead", kt), ai.zone = i("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }), ai.isDSTShifted = i("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                if (!l(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (y(t, this), (t = we(t))._a) {
                    var e = t._isUTC ? f(t._a) : ke(t._a);
                    this._isDSTShifted = this.isValid() && 0 < a(t._a, e.toArray())
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var ci = D.prototype;

            function li(t, e, i, n) {
                var r = ce(),
                    o = f().set(n, e);
                return r[i](o, t)
            }

            function ui(t, e, i) {
                if (u(t) && (e = t, t = void 0), t = t || "", null != e) return li(t, e, i, "month");
                var n, r = [];
                for (n = 0; n < 12; n++) r[n] = li(t, n, i, "month");
                return r
            }

            function di(t, e, i, n) {
                "boolean" == typeof t ? u(e) && (i = e, e = void 0) : (e = t, t = !1, u(i = e) && (i = e, e = void 0)), e = e || "";
                var r, o = ce(),
                    a = t ? o._week.dow : 0;
                if (null != i) return li(e, (i + a) % 7, n, "day");
                var s = [];
                for (r = 0; r < 7; r++) s[r] = li(e, (r + a) % 7, n, "day");
                return s
            }
            ci.calendar = function(t, e, i) {
                var n = this._calendar[t] || this._calendar.sameElse;
                return E(n) ? n.call(e, i) : n
            }, ci.longDateFormat = function(t) {
                var e = this._longDateFormat[t],
                    i = this._longDateFormat[t.toUpperCase()];
                return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }, ci.invalidDate = function() {
                return this._invalidDate
            }, ci.ordinal = function(t) {
                return this._ordinal.replace("%d", t)
            }, ci.preparse = si, ci.postformat = si, ci.relativeTime = function(t, e, i, n) {
                var r = this._relativeTime[i];
                return E(r) ? r(t, e, i, n) : r.replace(/%d/i, t)
            }, ci.pastFuture = function(t, e) {
                var i = this._relativeTime[0 < t ? "future" : "past"];
                return E(i) ? i(e) : i.replace(/%s/i, e)
            }, ci.set = function(t) {
                var e, i;
                for (i in t) E(e = t[i]) ? this[i] = e : this["_" + i] = e;
                this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, ci.months = function(t, e) {
                return t ? s(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Dt).test(e) ? "format" : "standalone"][t.month()] : s(this._months) ? this._months : this._months.standalone
            }, ci.monthsShort = function(t, e) {
                return t ? s(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Dt.test(e) ? "format" : "standalone"][t.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, ci.monthsParse = function(t, e, i) {
                var n, r, o;
                if (this._monthsParseExact) return function(t, e, i) {
                    var n, r, o, a = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = f([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
                    return i ? "MMM" === e ? -1 !== (r = Ct.call(this._shortMonthsParse, a)) ? r : null : -1 !== (r = Ct.call(this._longMonthsParse, a)) ? r : null : "MMM" === e ? -1 !== (r = Ct.call(this._shortMonthsParse, a)) ? r : -1 !== (r = Ct.call(this._longMonthsParse, a)) ? r : null : -1 !== (r = Ct.call(this._longMonthsParse, a)) ? r : -1 !== (r = Ct.call(this._shortMonthsParse, a)) ? r : null
                }.call(this, t, e, i);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                    if (r = f([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
                    if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
                    if (!i && this._monthsParse[n].test(t)) return n
                }
            }, ci.monthsRegex = function(t) {
                return this._monthsParseExact ? (b(this, "_monthsRegex") || Bt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = Nt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }, ci.monthsShortRegex = function(t) {
                return this._monthsParseExact ? (b(this, "_monthsRegex") || Bt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = It), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, ci.week = function(t) {
                return Ht(t, this._week.dow, this._week.doy).week
            }, ci.firstDayOfYear = function() {
                return this._week.doy
            }, ci.firstDayOfWeek = function() {
                return this._week.dow
            }, ci.weekdays = function(t, e) {
                return t ? s(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : s(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }, ci.weekdaysMin = function(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }, ci.weekdaysShort = function(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }, ci.weekdaysParse = function(t, e, i) {
                var n, r, o;
                if (this._weekdaysParseExact) return function(t, e, i) {
                    var n, r, o, a = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = f([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
                    return i ? "dddd" === e ? -1 !== (r = Ct.call(this._weekdaysParse, a)) ? r : null : "ddd" === e ? -1 !== (r = Ct.call(this._shortWeekdaysParse, a)) ? r : null : -1 !== (r = Ct.call(this._minWeekdaysParse, a)) ? r : null : "dddd" === e ? -1 !== (r = Ct.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._minWeekdaysParse, a)) ? r : null : "ddd" === e ? -1 !== (r = Ct.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._minWeekdaysParse, a)) ? r : null : -1 !== (r = Ct.call(this._minWeekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._weekdaysParse, a)) ? r : -1 !== (r = Ct.call(this._shortWeekdaysParse, a)) ? r : null
                }.call(this, t, e, i);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                    if (r = f([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
                    if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
                    if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
                    if (!i && this._weekdaysParse[n].test(t)) return n
                }
            }, ci.weekdaysRegex = function(t) {
                return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = Yt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, ci.weekdaysShortRegex = function(t) {
                return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ut), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, ci.weekdaysMinRegex = function(t) {
                return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = $t), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, ci.isPM = function(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }, ci.meridiem = function(t, e, i) {
                return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM"
            }, ae("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10;
                    return t + (1 === C(t % 100 / 10) ? "th" : 1 == e ? "st" : 2 == e ? "nd" : 3 == e ? "rd" : "th")
                }
            }), v.lang = i("moment.lang is deprecated. Use moment.locale instead.", ae), v.langData = i("moment.langData is deprecated. Use moment.localeData instead.", ce);
            var hi = Math.abs;

            function pi(t, e, i, n) {
                var r = He(e, i);
                return t._milliseconds += n * r._milliseconds, t._days += n * r._days, t._months += n * r._months, t._bubble()
            }

            function fi(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }

            function mi(t) {
                return 4800 * t / 146097
            }

            function gi(t) {
                return 146097 * t / 4800
            }

            function yi(t) {
                return function() {
                    return this.as(t)
                }
            }
            var vi = yi("ms"),
                bi = yi("s"),
                Si = yi("m"),
                Ai = yi("h"),
                _i = yi("d"),
                wi = yi("w"),
                Ci = yi("M"),
                ki = yi("y");

            function Ti(t) {
                return function() {
                    return this.isValid() ? this._data[t] : NaN
                }
            }
            var xi = Ti("milliseconds"),
                Ei = Ti("seconds"),
                Mi = Ti("minutes"),
                Di = Ti("hours"),
                Pi = Ti("days"),
                Oi = Ti("months"),
                Li = Ti("years"),
                zi = Math.round,
                Ii = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                Ni = Math.abs;

            function Bi(t) {
                return (0 < t) - (t < 0) || +t
            }

            function Ri() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t, e, i = Ni(this._milliseconds) / 1e3,
                    n = Ni(this._days),
                    r = Ni(this._months);
                e = w((t = w(i / 60)) / 60), i %= 60, t %= 60;
                var o = w(r / 12),
                    a = r %= 12,
                    s = n,
                    c = e,
                    l = t,
                    u = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                    d = this.asSeconds();
                if (!d) return "P0D";
                var h = d < 0 ? "-" : "",
                    p = Bi(this._months) !== Bi(d) ? "-" : "",
                    f = Bi(this._days) !== Bi(d) ? "-" : "",
                    m = Bi(this._milliseconds) !== Bi(d) ? "-" : "";
                return h + "P" + (o ? p + o + "Y" : "") + (a ? p + a + "M" : "") + (s ? f + s + "D" : "") + (c || l || u ? "T" : "") + (c ? m + c + "H" : "") + (l ? m + l + "M" : "") + (u ? m + u + "S" : "")
            }
            var ji = De.prototype;
            return ji.isValid = function() {
                return this._isValid
            }, ji.abs = function() {
                var t = this._data;
                return this._milliseconds = hi(this._milliseconds), this._days = hi(this._days), this._months = hi(this._months), t.milliseconds = hi(t.milliseconds), t.seconds = hi(t.seconds), t.minutes = hi(t.minutes), t.hours = hi(t.hours), t.months = hi(t.months), t.years = hi(t.years), this
            }, ji.add = function(t, e) {
                return pi(this, t, e, 1)
            }, ji.subtract = function(t, e) {
                return pi(this, t, e, -1)
            }, ji.as = function(t) {
                if (!this.isValid()) return NaN;
                var e, i, n = this._milliseconds;
                if ("month" === (t = L(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + mi(e), "month" === t ? i : i / 12;
                switch (e = this._days + Math.round(gi(this._months)), t) {
                    case "week":
                        return e / 7 + n / 6048e5;
                    case "day":
                        return e + n / 864e5;
                    case "hour":
                        return 24 * e + n / 36e5;
                    case "minute":
                        return 1440 * e + n / 6e4;
                    case "second":
                        return 86400 * e + n / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + n;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }, ji.asMilliseconds = vi, ji.asSeconds = bi, ji.asMinutes = Si, ji.asHours = Ai, ji.asDays = _i, ji.asWeeks = wi, ji.asMonths = Ci, ji.asYears = ki, ji.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12) : NaN
            }, ji._bubble = function() {
                var t, e, i, n, r, o = this._milliseconds,
                    a = this._days,
                    s = this._months,
                    c = this._data;
                return 0 <= o && 0 <= a && 0 <= s || o <= 0 && a <= 0 && s <= 0 || (o += 864e5 * fi(gi(s) + a), s = a = 0), c.milliseconds = o % 1e3, t = w(o / 1e3), c.seconds = t % 60, e = w(t / 60), c.minutes = e % 60, i = w(e / 60), c.hours = i % 24, s += r = w(mi(a += w(i / 24))), a -= fi(gi(r)), n = w(s / 12), s %= 12, c.days = a, c.months = s, c.years = n, this
            }, ji.clone = function() {
                return He(this)
            }, ji.get = function(t) {
                return t = L(t), this.isValid() ? this[t + "s"]() : NaN
            }, ji.milliseconds = xi, ji.seconds = Ei, ji.minutes = Mi, ji.hours = Di, ji.days = Pi, ji.weeks = function() {
                return w(this.days() / 7)
            }, ji.months = Oi, ji.years = Li, ji.humanize = function(t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, i, n, r, o, a, s, c, l, u, d, h = this.localeData(),
                    p = (i = !t, n = h, r = He(e = this).abs(), o = zi(r.as("s")), a = zi(r.as("m")), s = zi(r.as("h")), c = zi(r.as("d")), l = zi(r.as("M")), u = zi(r.as("y")), (d = o <= Ii.ss && ["s", o] || o < Ii.s && ["ss", o] || a <= 1 && ["m"] || a < Ii.m && ["mm", a] || s <= 1 && ["h"] || s < Ii.h && ["hh", s] || c <= 1 && ["d"] || c < Ii.d && ["dd", c] || l <= 1 && ["M"] || l < Ii.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u])[2] = i, d[3] = 0 < +e, d[4] = n, function(t, e, i, n, r) {
                        return r.relativeTime(e || 1, !!i, t, n)
                    }.apply(null, d));
                return t && (p = h.pastFuture(+this, p)), h.postformat(p)
            }, ji.toISOString = Ri, ji.toString = Ri, ji.toJSON = Ri, ji.locale = Ke, ji.localeData = Xe, ji.toIsoString = i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ri), ji.lang = Ze, F("X", 0, 0, "unix"), F("x", 0, 0, "valueOf"), ct("x", nt), ct("X", /[+-]?\d+(\.\d{1,3})?/), dt("X", function(t, e, i) {
                i._d = new Date(1e3 * parseFloat(t, 10))
            }), dt("x", function(t, e, i) {
                i._d = new Date(C(t))
            }), v.version = "2.23.0", t = ke, v.fn = ai, v.min = function() {
                return Ee("isBefore", [].slice.call(arguments, 0))
            }, v.max = function() {
                return Ee("isAfter", [].slice.call(arguments, 0))
            }, v.now = function() {
                return Date.now ? Date.now() : +new Date
            }, v.utc = f, v.unix = function(t) {
                return ke(1e3 * t)
            }, v.months = function(t, e) {
                return ui(t, e, "months")
            }, v.isDate = d, v.locale = ae, v.invalid = g, v.duration = He, v.isMoment = _, v.weekdays = function(t, e, i) {
                return di(t, e, i, "weekdays")
            }, v.parseZone = function() {
                return ke.apply(null, arguments).parseZone()
            }, v.localeData = ce, v.isDuration = Pe, v.monthsShort = function(t, e) {
                return ui(t, e, "monthsShort")
            }, v.weekdaysMin = function(t, e, i) {
                return di(t, e, i, "weekdaysMin")
            }, v.defineLocale = se, v.updateLocale = function(t, e) {
                if (null != e) {
                    var i, n, r = ee;
                    null != (n = oe(t)) && (r = n._config), (i = new D(e = M(r, e))).parentLocale = ie[t], ie[t] = i, ae(t)
                } else null != ie[t] && (null != ie[t].parentLocale ? ie[t] = ie[t].parentLocale : null != ie[t] && delete ie[t]);
                return ie[t]
            }, v.locales = function() {
                return n(ie)
            }, v.weekdaysShort = function(t, e, i) {
                return di(t, e, i, "weekdaysShort")
            }, v.normalizeUnits = L, v.relativeTimeRounding = function(t) {
                return void 0 === t ? zi : "function" == typeof t && (zi = t, !0)
            }, v.relativeTimeThreshold = function(t, e) {
                return void 0 !== Ii[t] && (void 0 === e ? Ii[t] : (Ii[t] = e, "s" === t && (Ii.ss = e - 1), !0))
            }, v.calendarFormat = function(t, e) {
                var i = t.diff(e, "days", !0);
                return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
            }, v.prototype = ai, v.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, v
        }, "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : i.zpMoment = n(),
        function(t, e) {
            "use strict";
            "object" == typeof module && module.exports ? module.exports = e(require("moment")) : "function" == typeof define && define.amd ? define(["moment"], e) : e(t.zpMoment)
        }(this, function(o) {
            "use strict";
            var e, a = {},
                s = {},
                l = {},
                u = {};
            o && "string" == typeof o.version || T("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
            var t = o.version.split("."),
                i = +t[0],
                n = +t[1];

            function c(t) {
                return 96 < t ? t - 87 : 64 < t ? t - 29 : t - 48
            }

            function r(t) {
                var e = 0,
                    i = t.split("."),
                    n = i[0],
                    r = i[1] || "",
                    o = 1,
                    a = 0,
                    s = 1;
                for (45 === t.charCodeAt(0) && (s = -(e = 1)); e < n.length; e++) a = 60 * a + c(n.charCodeAt(e));
                for (e = 0; e < r.length; e++) o /= 60, a += c(r.charCodeAt(e)) * o;
                return a * s
            }

            function d(t) {
                for (var e = 0; e < t.length; e++) t[e] = r(t[e])
            }

            function h(t, e) {
                var i, n = [];
                for (i = 0; i < e.length; i++) n[i] = t[e[i]];
                return n
            }

            function p(t) {
                var e = t.split("|"),
                    i = e[2].split(" "),
                    n = e[3].split(""),
                    r = e[4].split(" ");
                return d(i), d(n), d(r),
                    function(t, e) {
                        for (var i = 0; i < e; i++) t[i] = Math.round((t[i - 1] || 0) + 6e4 * t[i]);
                        t[e - 1] = 1 / 0
                    }(r, n.length), {
                        name: e[0],
                        abbrs: h(e[1].split(" "), n),
                        offsets: h(i, n),
                        untils: r,
                        population: 0 | e[5]
                    }
            }

            function f(t) {
                t && this._set(p(t))
            }

            function m(t) {
                var e = t.toTimeString(),
                    i = e.match(/\([a-z ]+\)/i);
                "GMT" === (i = i && i[0] ? (i = i[0].match(/[A-Z]/g)) ? i.join("") : void 0 : (i = e.match(/[A-Z]{3,5}/g)) ? i[0] : void 0) && (i = void 0), this.at = +t, this.abbr = i, this.offset = t.getTimezoneOffset()
            }

            function g(t) {
                this.zone = t, this.offsetScore = 0, this.abbrScore = 0
            }

            function y(t, e) {
                for (var i, n; n = 6e4 * ((e.at - t.at) / 12e4 | 0);)(i = new m(new Date(t.at + n))).offset === t.offset ? t = i : e = i;
                return t
            }

            function v(t, e) {
                return t.offsetScore !== e.offsetScore ? t.offsetScore - e.offsetScore : t.abbrScore !== e.abbrScore ? t.abbrScore - e.abbrScore : e.zone.population - t.zone.population
            }

            function b(t, e) {
                var i, n;
                for (d(e), i = 0; i < e.length; i++) n = e[i], u[n] = u[n] || {}, u[n][t] = !0
            }

            function S(t) {
                return (t || "").toLowerCase().replace(/\//g, "_")
            }

            function A(t) {
                var e, i, n, r;
                for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) r = S(i = (n = t[e].split("|"))[0]), a[r] = t[e], l[r] = i, b(r, n[2].split(" "))
            }

            function _(t, e) {
                t = S(t);
                var i, n = a[t];
                return n instanceof f ? n : "string" == typeof n ? (n = new f(n), a[t] = n) : s[t] && e !== _ && (i = _(s[t], _)) ? ((n = a[t] = new f)._set(i), n.name = l[t], n) : null
            }

            function w(t) {
                var e, i, n, r;
                for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) n = S((i = t[e].split("|"))[0]), r = S(i[1]), s[n] = r, l[n] = i[0], s[r] = n, l[r] = i[1]
            }

            function C(t) {
                A(t.zones), w(t.links), x.dataVersion = t.version
            }

            function k(t) {
                var e = "X" === t._f || "x" === t._f;
                return !(!t._a || void 0 !== t._tzm || e)
            }

            function T(t) {
                "undefined" != typeof console && "function" == typeof console.error && console.error(t)
            }

            function x(t) {
                var e = Array.prototype.slice.call(arguments, 0, -1),
                    i = arguments[arguments.length - 1],
                    n = _(i),
                    r = o.utc.apply(null, e);
                return n && !o.isMoment(t) && k(r) && r.add(n.parse(r), "minutes"), r.tz(i), r
            }(i < 2 || 2 == i && n < 6) && T("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + o.version + ". See momentjs.com"), f.prototype = {
                _set: function(t) {
                    this.name = t.name, this.abbrs = t.abbrs, this.untils = t.untils, this.offsets = t.offsets, this.population = t.population
                },
                _index: function(t) {
                    var e, i = +t,
                        n = this.untils;
                    for (e = 0; e < n.length; e++)
                        if (i < n[e]) return e
                },
                parse: function(t) {
                    var e, i, n, r, o = +t,
                        a = this.offsets,
                        s = this.untils,
                        c = s.length - 1;
                    for (r = 0; r < c; r++)
                        if (e = a[r], i = a[r + 1], n = a[r ? r - 1 : r], e < i && x.moveAmbiguousForward ? e = i : n < e && x.moveInvalidForward && (e = n), o < s[r] - 6e4 * e) return a[r];
                    return a[c]
                },
                abbr: function(t) {
                    return this.abbrs[this._index(t)]
                },
                offset: function(t) {
                    return T("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(t)]
                },
                utcOffset: function(t) {
                    return this.offsets[this._index(t)]
                }
            }, g.prototype.scoreOffsetAt = function(t) {
                this.offsetScore += Math.abs(this.zone.utcOffset(t.at) - t.offset), this.zone.abbr(t.at).replace(/[^A-Z]/g, "") !== t.abbr && this.abbrScore++
            }, x.version = "0.5.25", x.dataVersion = "", x._zones = a, x._links = s, x._names = l, x.add = A, x.link = w, x.load = C, x.zone = _, x.zoneExists = function t(e) {
                return t.didShowError || (t.didShowError = !0, T("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !zpMoment.tz.zone('" + e + "')")), !!_(e)
            }, x.guess = function(t) {
                return e && !t || (e = function() {
                    try {
                        var t = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        if (t && 3 < t.length) {
                            var e = l[S(t)];
                            if (e) return e;
                            T("Moment Timezone found " + t + " from the Intl api, but did not have that data loaded.")
                        }
                    } catch (t) {}
                    var i, n, r, o = function() {
                            var t, e, i, n = (new Date).getFullYear() - 2,
                                r = new m(new Date(n, 0, 1)),
                                o = [r];
                            for (i = 1; i < 48; i++)(e = new m(new Date(n, i, 1))).offset !== r.offset && (t = y(r, e), o.push(t), o.push(new m(new Date(t.at + 6e4)))), r = e;
                            for (i = 0; i < 4; i++) o.push(new m(new Date(n + i, 0, 1))), o.push(new m(new Date(n + i, 6, 1)));
                            return o
                        }(),
                        a = o.length,
                        s = function(t) {
                            var e, i, n, r = t.length,
                                o = {},
                                a = [];
                            for (e = 0; e < r; e++)
                                for (i in n = u[t[e].offset] || {}) n.hasOwnProperty(i) && (o[i] = !0);
                            for (e in o) o.hasOwnProperty(e) && a.push(l[e]);
                            return a
                        }(o),
                        c = [];
                    for (n = 0; n < s.length; n++) {
                        for (i = new g(_(s[n]), a), r = 0; r < a; r++) i.scoreOffsetAt(o[r]);
                        c.push(i)
                    }
                    return c.sort(v), 0 < c.length ? c[0].zone.name : void 0
                }()), e
            }, x.names = function() {
                var t, e = [];
                for (t in l) l.hasOwnProperty(t) && (a[t] || a[s[t]]) && l[t] && e.push(l[t]);
                return e.sort()
            }, x.Zone = f, x.unpack = p, x.unpackBase60 = r, x.needsOffset = k, x.moveInvalidForward = !0, x.moveAmbiguousForward = !1;
            var E, M = o.fn;

            function D(t) {
                return function() {
                    return this._z ? this._z.abbr(this) : t.call(this)
                }
            }

            function P(t) {
                return function() {
                    return this._z = null, t.apply(this, arguments)
                }
            }
            o.tz = x, o.defaultZone = null, o.updateOffset = function(t, e) {
                var i, n = o.defaultZone;
                if (void 0 === t._z && (n && k(t) && !t._isUTC && (t._d = o.utc(t._a)._d, t.utc().add(n.parse(t), "minutes")), t._z = n), t._z)
                    if (i = t._z.utcOffset(t), Math.abs(i) < 16 && (i /= 60), void 0 !== t.utcOffset) {
                        var r = t._z;
                        t.utcOffset(-i, e), t._z = r
                    } else t.zone(i, e)
            }, M.tz = function(t, e) {
                if (t) {
                    if ("string" != typeof t) throw new Error("Time zone name must be a string, got " + t + " [" + typeof t + "]");
                    return this._z = _(t), this._z ? o.updateOffset(this, e) : T("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this
                }
                if (this._z) return this._z.name
            }, M.zoneName = D(M.zoneName), M.zoneAbbr = D(M.zoneAbbr), M.utc = P(M.utc), M.local = P(M.local), M.utcOffset = (E = M.utcOffset, function() {
                return 0 < arguments.length && (this._z = null), E.apply(this, arguments)
            }), o.tz.setDefault = function(t) {
                return (i < 2 || 2 == i && n < 9) && T("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + o.version + "."), o.defaultZone = t ? _(t) : null, o
            };
            var O = o.momentProperties;
            return "[object Array]" === Object.prototype.toString.call(O) ? (O.push("_z"), O.push("_a")) : O && (O._z = null), C({
                version: "2019a",
                zones: ["Africa/Abidjan|GMT|0|0||48e5", "Africa/Nairobi|EAT|-30|0||47e5", "Africa/Algiers|CET|-10|0||26e5", "Africa/Lagos|WAT|-10|0||17e6", "Africa/Maputo|CAT|-20|0||26e5", "Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6", "Africa/Casablanca|+00 +01|0 -10|010101010101010101010101010101010101|1H3C0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0|32e5", "Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|11e6", "Africa/Johannesburg|SAST|-20|0||84e5", "Africa/Khartoum|EAT CAT|-30 -20|01|1Usl0|51e5", "Africa/Sao_Tome|GMT WAT|0 -10|010|1UQN0 2q00", "Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5", "Africa/Windhoek|CAT WAT|-20 -10|0101010101010|1GQo0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|HST HDT|a0 90|01010101010101010101010|1GIc0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|326", "America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1GIb0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|30e4", "America/Santo_Domingo|AST|40|0||29e5", "America/Araguaina|-03 -02|30 20|010|1IdD0 Lz0|14e4", "America/Fortaleza|-03|30|0||34e5", "America/Asuncion|-03 -04|30 40|01010101010101010101010|1GTf0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0|28e5", "America/Panama|EST|50|0||15e5", "America/Mexico_City|CST CDT|60 50|01010101010101010101010|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|20e6", "America/Bahia|-02 -03|20 30|01|1GCq0|27e5", "America/Managua|CST|60|0||22e5", "America/La_Paz|-04|40|0||19e5", "America/Lima|-05|50|0||11e6", "America/Denver|MST MDT|70 60|01010101010101010101010|1GI90 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|26e5", "America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1GCr0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0|77e4", "America/Cancun|CST CDT EST|60 50 50|01010102|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5", "America/Chicago|CST CDT|60 50|01010101010101010101010|1GI80 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|MST MDT|70 60|01010101010101010101010|1GQx0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|81e4", "America/Phoenix|MST|70|0||42e5", "America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|15e6", "America/New_York|EST EDT|50 40|01010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|21e6", "America/Rio_Branco|-04 -05|40 50|01|1KLE0|31e4", "America/Fort_Nelson|PST PDT MST|80 70 70|01010102|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Halifax|AST ADT|40 30|01010101010101010101010|1GI60 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|39e4", "America/Godthab|-03 -02|30 20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|17e3", "America/Grand_Turk|EST EDT AST|50 40 40|0101010121010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|37e2", "America/Havana|CST CDT|50 40|01010101010101010101010|1GQt0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0|21e5", "America/Metlakatla|PST AKST AKDT|80 90 80|01212120121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|14e2", "America/Miquelon|-03 -02|30 20|01010101010101010101010|1GI50 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|61e2", "America/Montevideo|-02 -03|20 30|01010101|1GI40 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Noronha|-02|20|0||30e2", "America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|23e5", "Antarctica/Palmer|-03 -04|30 40|010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "America/Santiago|-03 -04|30 40|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|62e5", "America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1GCq0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0|20e6", "Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e4", "America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1GI5u 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|11e4", "Antarctica/Casey|+11 +08|-b0 -80|0101|1GAF0 blz0 3m10|10", "Antarctica/Davis|+05 +07|-50 -70|01|1GAI0|70", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Pacific/Guadalcanal|+11|-b0|0||11e4", "Asia/Tashkent|+05|-50|0||23e5", "Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|14e5", "Asia/Baghdad|+03|-30|0||66e5", "Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|40", "Asia/Dhaka|+06|-60|0||16e6", "Asia/Amman|EET EEST|-20 -30|010101010101010101010|1GPy0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00|25e5", "Asia/Kamchatka|+12|-c0|0||18e4", "Asia/Baku|+04 +05|-40 -50|010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|+07|-70|0||15e6", "Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0", "Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1GNy0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|22e5", "Asia/Kuala_Lumpur|+08|-80|0||71e5", "Asia/Kolkata|IST|-5u|0||15e6", "Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4", "Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5", "Asia/Shanghai|CST|-80|0||23e6", "Asia/Colombo|+0530|-5u|0||22e5", "Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1GPy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|26e5", "Asia/Dili|+09|-90|0||19e4", "Asia/Dubai|+04|-40|0||39e5", "Asia/Famagusta|EET EEST +03|-20 -30 -30|0101010101201010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1GPy0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|18e5", "Asia/Hong_Kong|HKT|-80|0||73e5", "Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4", "Europe/Istanbul|EET EEST +03|-20 -30 -30|01010101012|1GNB0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|WIB|-70|0||31e6", "Asia/Jayapura|WIT|-90|0||26e4", "Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1GPA0 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0|81e4", "Asia/Kabul|+0430|-4u|0||46e5", "Asia/Karachi|PKT|-50|0||24e6", "Asia/Kathmandu|+0545|-5J|0||12e5", "Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4", "Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5", "Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3", "Asia/Makassar|WITA|-80|0||15e5", "Asia/Manila|PST|-80|0||24e6", "Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|35e5", "Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5", "Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5", "Asia/Pyongyang|KST KST|-90 -8u|010|1P4D0 6BA0|29e5", "Asia/Qyzylorda|+06 +05|-60 -50|01|1Xei0|73e4", "Asia/Rangoon|+0630|-6u|0||48e5", "Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4", "Asia/Seoul|KST|-90|0||23e6", "Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2", "Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1GLUu 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0|14e6", "Asia/Tokyo|JST|-90|0||38e6", "Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5", "Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4", "Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5", "Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|27e5", "Atlantic/Cape_Verde|-01|10|0||50e4", "Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1GQg0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1GQgu 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST|-a0|0||20e5", "Australia/Darwin|ACST|-9u|0||12e4", "Australia/Eucla|+0845|-8J|0||368", "Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1GQf0 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Perth|AWST|-80|0||18e5", "Pacific/Easter|-05 -06|50 60|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|30e2", "Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|12e5", "Etc/GMT-1|+01|-10|0|", "Pacific/Fakaofo|+13|-d0|0||483", "Pacific/Kiritimati|+14|-e0|0||51e2", "Etc/GMT-2|+02|-20|0|", "Pacific/Tahiti|-10|a0|0||18e4", "Pacific/Niue|-11|b0|0||12e2", "Etc/GMT+12|-12|c0|0|", "Pacific/Galapagos|-06|60|0||25e3", "Etc/GMT+7|-07|70|0|", "Pacific/Pitcairn|-08|80|0||56", "Pacific/Gambier|-09|90|0||125", "Etc/UTC|UTC|0|0|", "Europe/Ulyanovsk|+04 +03|-40 -30|010|1N7y0 3rd0|13e5", "Europe/London|GMT BST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|10e6", "Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|67e4", "Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4", "Europe/Kirov|+04 +03|-40 -30|01|1N7y0|48e4", "Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6", "Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810", "Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|0101023|1GNB0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Volgograd|+04 +03|-40 -30|010|1N7y0 9Jd0|10e5", "Pacific/Honolulu|HST|a0|0||37e4", "MET|MET MEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|600", "Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4", "Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Goe0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1VA0 s00 1VA0|88e4", "Pacific/Guam|ChST|-a0|0||17e4", "Pacific/Marquesas|-0930|9u|0||86e2", "Pacific/Pago_Pago|SST|b0|0||37e2", "Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4", "Pacific/Tongatapu|+13 +14|-d0 -e0|010|1S4d0 s00|75e3"],
                links: ["Africa/Abidjan|Africa/Accra", "Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Bissau", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Monrovia", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|America/Danmarkshavn", "Africa/Abidjan|Atlantic/Reykjavik", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Abidjan|Etc/GMT", "Africa/Abidjan|Etc/GMT+0", "Africa/Abidjan|Etc/GMT-0", "Africa/Abidjan|Etc/GMT0", "Africa/Abidjan|Etc/Greenwich", "Africa/Abidjan|GMT", "Africa/Abidjan|GMT+0", "Africa/Abidjan|GMT-0", "Africa/Abidjan|GMT0", "Africa/Abidjan|Greenwich", "Africa/Abidjan|Iceland", "Africa/Algiers|Africa/Tunis", "Africa/Cairo|Egypt", "Africa/Casablanca|Africa/El_Aaiun", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Ndjamena", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Juba", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|America/Juneau", "America/Anchorage|America/Nome", "America/Anchorage|America/Sitka", "America/Anchorage|America/Yakutat", "America/Anchorage|US/Alaska", "America/Campo_Grande|America/Cuiaba", "America/Chicago|America/Indiana/Knox", "America/Chicago|America/Indiana/Tell_City", "America/Chicago|America/Knox_IN", "America/Chicago|America/Matamoros", "America/Chicago|America/Menominee", "America/Chicago|America/North_Dakota/Beulah", "America/Chicago|America/North_Dakota/Center", "America/Chicago|America/North_Dakota/New_Salem", "America/Chicago|America/Rainy_River", "America/Chicago|America/Rankin_Inlet", "America/Chicago|America/Resolute", "America/Chicago|America/Winnipeg", "America/Chicago|CST6CDT", "America/Chicago|Canada/Central", "America/Chicago|US/Central", "America/Chicago|US/Indiana-Starke", "America/Chihuahua|America/Mazatlan", "America/Chihuahua|Mexico/BajaSur", "America/Denver|America/Boise", "America/Denver|America/Cambridge_Bay", "America/Denver|America/Edmonton", "America/Denver|America/Inuvik", "America/Denver|America/Ojinaga", "America/Denver|America/Shiprock", "America/Denver|America/Yellowknife", "America/Denver|Canada/Mountain", "America/Denver|MST7MDT", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Fortaleza|America/Argentina/Buenos_Aires", "America/Fortaleza|America/Argentina/Catamarca", "America/Fortaleza|America/Argentina/ComodRivadavia", "America/Fortaleza|America/Argentina/Cordoba", "America/Fortaleza|America/Argentina/Jujuy", "America/Fortaleza|America/Argentina/La_Rioja", "America/Fortaleza|America/Argentina/Mendoza", "America/Fortaleza|America/Argentina/Rio_Gallegos", "America/Fortaleza|America/Argentina/Salta", "America/Fortaleza|America/Argentina/San_Juan", "America/Fortaleza|America/Argentina/San_Luis", "America/Fortaleza|America/Argentina/Tucuman", "America/Fortaleza|America/Argentina/Ushuaia", "America/Fortaleza|America/Belem", "America/Fortaleza|America/Buenos_Aires", "America/Fortaleza|America/Catamarca", "America/Fortaleza|America/Cayenne", "America/Fortaleza|America/Cordoba", "America/Fortaleza|America/Jujuy", "America/Fortaleza|America/Maceio", "America/Fortaleza|America/Mendoza", "America/Fortaleza|America/Paramaribo", "America/Fortaleza|America/Recife", "America/Fortaleza|America/Rosario", "America/Fortaleza|America/Santarem", "America/Fortaleza|Antarctica/Rothera", "America/Fortaleza|Atlantic/Stanley", "America/Fortaleza|Etc/GMT+3", "America/Halifax|America/Glace_Bay", "America/Halifax|America/Goose_Bay", "America/Halifax|America/Moncton", "America/Halifax|America/Thule", "America/Halifax|Atlantic/Bermuda", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/La_Paz|America/Boa_Vista", "America/La_Paz|America/Guyana", "America/La_Paz|America/Manaus", "America/La_Paz|America/Porto_Velho", "America/La_Paz|Brazil/West", "America/La_Paz|Etc/GMT+4", "America/Lima|America/Bogota", "America/Lima|America/Guayaquil", "America/Lima|Etc/GMT+5", "America/Los_Angeles|America/Dawson", "America/Los_Angeles|America/Ensenada", "America/Los_Angeles|America/Santa_Isabel", "America/Los_Angeles|America/Tijuana", "America/Los_Angeles|America/Vancouver", "America/Los_Angeles|America/Whitehorse", "America/Los_Angeles|Canada/Pacific", "America/Los_Angeles|Canada/Yukon", "America/Los_Angeles|Mexico/BajaNorte", "America/Los_Angeles|PST8PDT", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Managua|America/Belize", "America/Managua|America/Costa_Rica", "America/Managua|America/El_Salvador", "America/Managua|America/Guatemala", "America/Managua|America/Regina", "America/Managua|America/Swift_Current", "America/Managua|America/Tegucigalpa", "America/Managua|Canada/Saskatchewan", "America/Mexico_City|America/Bahia_Banderas", "America/Mexico_City|America/Merida", "America/Mexico_City|America/Monterrey", "America/Mexico_City|Mexico/General", "America/New_York|America/Detroit", "America/New_York|America/Fort_Wayne", "America/New_York|America/Indiana/Indianapolis", "America/New_York|America/Indiana/Marengo", "America/New_York|America/Indiana/Petersburg", "America/New_York|America/Indiana/Vevay", "America/New_York|America/Indiana/Vincennes", "America/New_York|America/Indiana/Winamac", "America/New_York|America/Indianapolis", "America/New_York|America/Iqaluit", "America/New_York|America/Kentucky/Louisville", "America/New_York|America/Kentucky/Monticello", "America/New_York|America/Louisville", "America/New_York|America/Montreal", "America/New_York|America/Nassau", "America/New_York|America/Nipigon", "America/New_York|America/Pangnirtung", "America/New_York|America/Thunder_Bay", "America/New_York|America/Toronto", "America/New_York|Canada/Eastern", "America/New_York|EST5EDT", "America/New_York|US/East-Indiana", "America/New_York|US/Eastern", "America/New_York|US/Michigan", "America/Noronha|Atlantic/South_Georgia", "America/Noronha|Brazil/DeNoronha", "America/Noronha|Etc/GMT+2", "America/Panama|America/Atikokan", "America/Panama|America/Cayman", "America/Panama|America/Coral_Harbour", "America/Panama|America/Jamaica", "America/Panama|EST", "America/Panama|Jamaica", "America/Phoenix|America/Creston", "America/Phoenix|America/Dawson_Creek", "America/Phoenix|America/Hermosillo", "America/Phoenix|MST", "America/Phoenix|US/Arizona", "America/Rio_Branco|America/Eirunepe", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Santo_Domingo|America/Anguilla", "America/Santo_Domingo|America/Antigua", "America/Santo_Domingo|America/Aruba", "America/Santo_Domingo|America/Barbados", "America/Santo_Domingo|America/Blanc-Sablon", "America/Santo_Domingo|America/Curacao", "America/Santo_Domingo|America/Dominica", "America/Santo_Domingo|America/Grenada", "America/Santo_Domingo|America/Guadeloupe", "America/Santo_Domingo|America/Kralendijk", "America/Santo_Domingo|America/Lower_Princes", "America/Santo_Domingo|America/Marigot", "America/Santo_Domingo|America/Martinique", "America/Santo_Domingo|America/Montserrat", "America/Santo_Domingo|America/Port_of_Spain", "America/Santo_Domingo|America/Puerto_Rico", "America/Santo_Domingo|America/St_Barthelemy", "America/Santo_Domingo|America/St_Kitts", "America/Santo_Domingo|America/St_Lucia", "America/Santo_Domingo|America/St_Thomas", "America/Santo_Domingo|America/St_Vincent", "America/Santo_Domingo|America/Tortola", "America/Santo_Domingo|America/Virgin", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "Antarctica/Palmer|America/Punta_Arenas", "Asia/Baghdad|Antarctica/Syowa", "Asia/Baghdad|Asia/Aden", "Asia/Baghdad|Asia/Bahrain", "Asia/Baghdad|Asia/Kuwait", "Asia/Baghdad|Asia/Qatar", "Asia/Baghdad|Asia/Riyadh", "Asia/Baghdad|Etc/GMT-3", "Asia/Baghdad|Europe/Minsk", "Asia/Bangkok|Asia/Ho_Chi_Minh", "Asia/Bangkok|Asia/Novokuznetsk", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Saigon", "Asia/Bangkok|Asia/Vientiane", "Asia/Bangkok|Etc/GMT-7", "Asia/Bangkok|Indian/Christmas", "Asia/Dhaka|Antarctica/Vostok", "Asia/Dhaka|Asia/Almaty", "Asia/Dhaka|Asia/Bishkek", "Asia/Dhaka|Asia/Dacca", "Asia/Dhaka|Asia/Kashgar", "Asia/Dhaka|Asia/Qostanay", "Asia/Dhaka|Asia/Thimbu", "Asia/Dhaka|Asia/Thimphu", "Asia/Dhaka|Asia/Urumqi", "Asia/Dhaka|Etc/GMT-6", "Asia/Dhaka|Indian/Chagos", "Asia/Dili|Etc/GMT-9", "Asia/Dili|Pacific/Palau", "Asia/Dubai|Asia/Muscat", "Asia/Dubai|Asia/Tbilisi", "Asia/Dubai|Asia/Yerevan", "Asia/Dubai|Etc/GMT-4", "Asia/Dubai|Europe/Samara", "Asia/Dubai|Indian/Mahe", "Asia/Dubai|Indian/Mauritius", "Asia/Dubai|Indian/Reunion", "Asia/Gaza|Asia/Hebron", "Asia/Hong_Kong|Hongkong", "Asia/Jakarta|Asia/Pontianak", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kamchatka|Asia/Anadyr", "Asia/Kamchatka|Etc/GMT-12", "Asia/Kamchatka|Kwajalein", "Asia/Kamchatka|Pacific/Funafuti", "Asia/Kamchatka|Pacific/Kwajalein", "Asia/Kamchatka|Pacific/Majuro", "Asia/Kamchatka|Pacific/Nauru", "Asia/Kamchatka|Pacific/Tarawa", "Asia/Kamchatka|Pacific/Wake", "Asia/Kamchatka|Pacific/Wallis", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Kuala_Lumpur|Asia/Brunei", "Asia/Kuala_Lumpur|Asia/Kuching", "Asia/Kuala_Lumpur|Asia/Singapore", "Asia/Kuala_Lumpur|Etc/GMT-8", "Asia/Kuala_Lumpur|Singapore", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Rangoon|Asia/Yangon", "Asia/Rangoon|Indian/Cocos", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|Asia/Macao", "Asia/Shanghai|Asia/Macau", "Asia/Shanghai|Asia/Taipei", "Asia/Shanghai|PRC", "Asia/Shanghai|ROC", "Asia/Tashkent|Antarctica/Mawson", "Asia/Tashkent|Asia/Aqtau", "Asia/Tashkent|Asia/Aqtobe", "Asia/Tashkent|Asia/Ashgabat", "Asia/Tashkent|Asia/Ashkhabad", "Asia/Tashkent|Asia/Atyrau", "Asia/Tashkent|Asia/Dushanbe", "Asia/Tashkent|Asia/Oral", "Asia/Tashkent|Asia/Samarkand", "Asia/Tashkent|Etc/GMT-5", "Asia/Tashkent|Indian/Kerguelen", "Asia/Tashkent|Indian/Maldives", "Asia/Tehran|Iran", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Choibalsan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Vladivostok|Asia/Ust-Nera", "Asia/Yakutsk|Asia/Khandyga", "Atlantic/Azores|America/Scoresbysund", "Atlantic/Cape_Verde|Etc/GMT+1", "Australia/Adelaide|Australia/Broken_Hill", "Australia/Adelaide|Australia/South", "Australia/Adelaide|Australia/Yancowinna", "Australia/Brisbane|Australia/Lindeman", "Australia/Brisbane|Australia/Queensland", "Australia/Darwin|Australia/North", "Australia/Lord_Howe|Australia/LHI", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/Currie", "Australia/Sydney|Australia/Hobart", "Australia/Sydney|Australia/Melbourne", "Australia/Sydney|Australia/NSW", "Australia/Sydney|Australia/Tasmania", "Australia/Sydney|Australia/Victoria", "Etc/UTC|Etc/UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UCT", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Athens|Asia/Nicosia", "Europe/Athens|EET", "Europe/Athens|Europe/Bucharest", "Europe/Athens|Europe/Helsinki", "Europe/Athens|Europe/Kiev", "Europe/Athens|Europe/Mariehamn", "Europe/Athens|Europe/Nicosia", "Europe/Athens|Europe/Riga", "Europe/Athens|Europe/Sofia", "Europe/Athens|Europe/Tallinn", "Europe/Athens|Europe/Uzhgorod", "Europe/Athens|Europe/Vilnius", "Europe/Athens|Europe/Zaporozhye", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Atlantic/Canary", "Europe/Lisbon|Atlantic/Faeroe", "Europe/Lisbon|Atlantic/Faroe", "Europe/Lisbon|Atlantic/Madeira", "Europe/Lisbon|Portugal", "Europe/Lisbon|WET", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Paris|Africa/Ceuta", "Europe/Paris|Arctic/Longyearbyen", "Europe/Paris|Atlantic/Jan_Mayen", "Europe/Paris|CET", "Europe/Paris|Europe/Amsterdam", "Europe/Paris|Europe/Andorra", "Europe/Paris|Europe/Belgrade", "Europe/Paris|Europe/Berlin", "Europe/Paris|Europe/Bratislava", "Europe/Paris|Europe/Brussels", "Europe/Paris|Europe/Budapest", "Europe/Paris|Europe/Busingen", "Europe/Paris|Europe/Copenhagen", "Europe/Paris|Europe/Gibraltar", "Europe/Paris|Europe/Ljubljana", "Europe/Paris|Europe/Luxembourg", "Europe/Paris|Europe/Madrid", "Europe/Paris|Europe/Malta", "Europe/Paris|Europe/Monaco", "Europe/Paris|Europe/Oslo", "Europe/Paris|Europe/Podgorica", "Europe/Paris|Europe/Prague", "Europe/Paris|Europe/Rome", "Europe/Paris|Europe/San_Marino", "Europe/Paris|Europe/Sarajevo", "Europe/Paris|Europe/Skopje", "Europe/Paris|Europe/Stockholm", "Europe/Paris|Europe/Tirane", "Europe/Paris|Europe/Vaduz", "Europe/Paris|Europe/Vatican", "Europe/Paris|Europe/Vienna", "Europe/Paris|Europe/Warsaw", "Europe/Paris|Europe/Zagreb", "Europe/Paris|Europe/Zurich", "Europe/Paris|Poland", "Europe/Ulyanovsk|Europe/Astrakhan", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Easter|Chile/EasterIsland", "Pacific/Fakaofo|Etc/GMT-13", "Pacific/Fakaofo|Pacific/Enderbury", "Pacific/Galapagos|Etc/GMT+6", "Pacific/Gambier|Etc/GMT+9", "Pacific/Guadalcanal|Antarctica/Macquarie", "Pacific/Guadalcanal|Etc/GMT-11", "Pacific/Guadalcanal|Pacific/Efate", "Pacific/Guadalcanal|Pacific/Kosrae", "Pacific/Guadalcanal|Pacific/Noumea", "Pacific/Guadalcanal|Pacific/Pohnpei", "Pacific/Guadalcanal|Pacific/Ponape", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|HST", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kiritimati|Etc/GMT-14", "Pacific/Niue|Etc/GMT+11", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Pitcairn|Etc/GMT+8", "Pacific/Port_Moresby|Antarctica/DumontDUrville", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Port_Moresby|Pacific/Chuuk", "Pacific/Port_Moresby|Pacific/Truk", "Pacific/Port_Moresby|Pacific/Yap", "Pacific/Tahiti|Etc/GMT+10", "Pacific/Tahiti|Pacific/Rarotonga"]
            }), o
        }), r = this, o = function() {
            "use strict";
            var n = function() {
                    if ("undefined" != typeof Map) return Map;

                    function n(t, i) {
                        var n = -1;
                        return t.some(function(t, e) {
                            return t[0] === i && (n = e, !0)
                        }), n
                    }
                    return function() {
                        function t() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.get = function(t) {
                            var e = n(this.__entries__, t),
                                i = this.__entries__[e];
                            return i && i[1]
                        }, t.prototype.set = function(t, e) {
                            var i = n(this.__entries__, t);
                            ~i ? this.__entries__[i][1] = e : this.__entries__.push([t, e])
                        }, t.prototype.delete = function(t) {
                            var e = this.__entries__,
                                i = n(e, t);
                            ~i && e.splice(i, 1)
                        }, t.prototype.has = function(t) {
                            return !!~n(this.__entries__, t)
                        }, t.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, t.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var i = 0, n = this.__entries__; i < n.length; i++) {
                                var r = n[i];
                                t.call(e, r[1], r[0])
                            }
                        }, t
                    }()
                }(),
                i = void 0 !== rr && void 0 !== or && rr.document === or,
                e = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : void 0 !== rr && rr.Math === Math ? rr : Function("return this")(),
                c = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(e) : function(t) {
                    return setTimeout(function() {
                        return t(Date.now())
                    }, 1e3 / 60)
                },
                l = 2;
            var r = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                o = "undefined" != typeof MutationObserver,
                a = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var i = !1,
                                n = !1,
                                r = 0;

                            function o() {
                                i && (i = !1, t()), n && s()
                            }

                            function a() {
                                c(o)
                            }

                            function s() {
                                var t = Date.now();
                                if (i) {
                                    if (t - r < l) return;
                                    n = !0
                                } else n = !(i = !0), setTimeout(a, e);
                                r = t
                            }
                            return s
                        }(this.refresh.bind(this), 20)
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            i = e.indexOf(t);
                        ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter(function(t) {
                            return t.gatherActive(), t.hasActive()
                        });
                        return t.forEach(function(t) {
                            return t.broadcastActive()
                        }), 0 < t.length
                    }, t.prototype.connect_ = function() {
                        i && !this.connected_ && (or.addEventListener("transitionend", this.onTransitionEnd_), rr.addEventListener("resize", this.refresh), o ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(or, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (or.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        i && this.connected_ && (or.removeEventListener("transitionend", this.onTransitionEnd_), rr.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && or.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            i = void 0 === e ? "" : e;
                        r.some(function(t) {
                            return !!~i.indexOf(t)
                        }) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                u = function(t, e) {
                    for (var i = 0, n = Object.keys(e); i < n.length; i++) {
                        var r = n[i];
                        Object.defineProperty(t, r, {
                            value: e[r],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                h = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || e
                },
                p = y(0, 0, 0, 0);

            function f(t) {
                return parseFloat(t) || 0
            }

            function m(i) {
                for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
                return t.reduce(function(t, e) {
                    return t + f(i["border-" + e + "-width"])
                }, 0)
            }

            function s(t) {
                var e = t.clientWidth,
                    i = t.clientHeight;
                if (!e && !i) return p;
                var n, r = h(t).getComputedStyle(t),
                    o = function(t) {
                        for (var e = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                            var r = n[i],
                                o = t["padding-" + r];
                            e[r] = f(o)
                        }
                        return e
                    }(r),
                    a = o.left + o.right,
                    s = o.top + o.bottom,
                    c = f(r.width),
                    l = f(r.height);
                if ("border-box" === r.boxSizing && (Math.round(c + a) !== e && (c -= m(r, "left", "right") + a), Math.round(l + s) !== i && (l -= m(r, "top", "bottom") + s)), (n = t) !== h(n).document.documentElement) {
                    var u = Math.round(c + a) - e,
                        d = Math.round(l + s) - i;
                    1 !== Math.abs(u) && (c -= u), 1 !== Math.abs(d) && (l -= d)
                }
                return y(o.left, o.top, c, l)
            }
            var d = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof h(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof h(t).SVGElement && "function" == typeof t.getBBox
            };

            function g(t) {
                return i ? d(t) ? y(0, 0, (e = t.getBBox()).width, e.height) : s(t) : p;
                var e
            }

            function y(t, e, i, n) {
                return {
                    x: t,
                    y: e,
                    width: i,
                    height: n
                }
            }
            var v = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = y(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = g(this.target);
                        return (this.contentRect_ = t).width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                b = function(t, e) {
                    var i, n, r, o, a, s, c, l = (n = (i = e).x, r = i.y, o = i.width, a = i.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), u(c, {
                        x: n,
                        y: r,
                        width: o,
                        height: a,
                        top: r,
                        right: n + o,
                        bottom: a + r,
                        left: n
                    }), c);
                    u(this, {
                        target: t,
                        contentRect: l
                    })
                },
                S = function() {
                    function t(t, e, i) {
                        if (this.activeObservations_ = [], this.observations_ = new n, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof h(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new v(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof h(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var e = this;
                        this.clearActive(), this.observations_.forEach(function(t) {
                            t.isActive() && e.activeObservations_.push(t)
                        })
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map(function(t) {
                                    return new b(t.target, t.broadcastRect())
                                });
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return 0 < this.activeObservations_.length
                    }, t
                }(),
                A = "undefined" != typeof WeakMap ? new WeakMap : new n,
                t = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var i = a.getInstance(),
                        n = new S(e, i, this);
                    A.set(this, n)
                };
            return ["observe", "unobserve", "disconnect"].forEach(function(e) {
                t.prototype[e] = function() {
                    var t;
                    return (t = A.get(this))[e].apply(t, arguments)
                }
            }), void 0 !== e.ResizeObserver ? e.ResizeObserver : t
        }, "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : r.ResizeObserver = o(), s.prototype.subscribe = function(t, e, i) {
            return "function" == typeof e && (this.events[t] = this.events[t] || [], this.events[t].push(e.bind(i)), !0)
        }, s.prototype.emit = function(t, e) {
            for (var i, n = [], r = this.events[t] || [], o = 0, a = r.length; o < a; o++) i = r[o], n.push(this._execCallback(i, e));
            return f.when.apply(f, n)
        }, s.prototype._execCallback = function(t, e) {
            try {
                return t(e) || !0
            } catch (t) {
                return console.error(t), !0
            }
        };
    var m = new s;

    function c() {
        this.init, this.observers = [], this.GDPRStatus = {
            status: !1,
            geoipError: !1
        }
    }
    rr.ZipifyPages = rr.ZipifyPages || {}, rr.ZipifyPages.on = function(t, e) {
            m.subscribe("_" + t, e)
        }, (rr.ZipifyPages.eventsSubscriptions || []).forEach(function(t) {
            rr.ZipifyPages.on(t[0], t[1])
        }), rr.ZipifyPages.eventsSubscriptions = [],
        function(i, h, t) {
            function s(t, e) {
                return typeof t === e
            }

            function o(t) {
                var e = f.className,
                    i = u._config.classPrefix || "";
                if (m && (e = e.baseVal), u._config.enableJSClass) {
                    var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                    e = e.replace(n, "$1" + i + "js$2")
                }
                u._config.enableClasses && (e += " " + i + t.join(" " + i), m ? f.className.baseVal = e : f.className = e)
            }

            function p() {
                return "function" != typeof h.createElement ? h.createElement(arguments[0]) : m ? h.createElementNS.call(h, "http://www.w3.org/2000/svg", arguments[0]) : h.createElement.apply(h, arguments)
            }

            function a(t, e) {
                if ("object" == typeof t)
                    for (var i in t) d(t, i) && a(i, t[i]);
                else {
                    var n = (t = t.toLowerCase()).split("."),
                        r = u[n[0]];
                    if (2 == n.length && (r = r[n[1]]), void 0 !== r) return u;
                    e = "function" == typeof e ? e() : e, 1 == n.length ? u[n[0]] = e : (!u[n[0]] || u[n[0]] instanceof Boolean || (u[n[0]] = new Boolean(u[n[0]])), u[n[0]][n[1]] = e), o([(e && 0 != e ? "" : "no-") + n.join("-")]), u._trigger(t, e)
                }
                return u
            }
            var c = [],
                l = [],
                e = {
                    _version: "3.6.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(t, e) {
                        var i = this;
                        setTimeout(function() {
                            e(i[t])
                        }, 0)
                    },
                    addTest: function(t, e, i) {
                        l.push({
                            name: t,
                            fn: e,
                            options: i
                        })
                    },
                    addAsyncTest: function(t) {
                        l.push({
                            name: null,
                            fn: t
                        })
                    }
                },
                u = function() {};
            u.prototype = e, u = new u;
            var n = e._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            e._prefixes = n;
            var d, r, f = h.documentElement,
                m = "svg" === f.nodeName.toLowerCase();
            u.addTest("csspositionsticky", function() {
                var t = "position:",
                    e = p("a").style;
                return e.cssText = t + n.join("sticky;" + t).slice(0, -t.length), -1 !== e.position.indexOf("sticky")
            }), d = s(r = {}.hasOwnProperty, "undefined") || s(r.call, "undefined") ? function(t, e) {
                return e in t && s(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return r.call(t, e)
            }, e._l = {}, e.on = function(t, e) {
                this._l[t] || (this._l[t] = []), this._l[t].push(e), u.hasOwnProperty(t) && setTimeout(function() {
                    u._trigger(t, u[t])
                }, 0)
            }, e._trigger = function(t, e) {
                if (this._l[t]) {
                    var i = this._l[t];
                    setTimeout(function() {
                        var t;
                        for (t = 0; t < i.length; t++)(0, i[t])(e)
                    }, 0), delete this._l[t]
                }
            }, u._q.push(function() {
                e.addTest = a
            });
            var g = e.testStyles = function(t, e, i, n) {
                var r, o, a, s, c, l = "modernizr",
                    u = p("div"),
                    d = ((c = h.body) || ((c = p(m ? "svg" : "body")).fake = !0), c);
                if (parseInt(i, 10))
                    for (; i--;)(a = p("div")).id = n ? n[i] : l + (i + 1), u.appendChild(a);
                return (r = p("style")).type = "text/css", r.id = "s" + l, (d.fake ? d : u).appendChild(r), d.appendChild(u), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(h.createTextNode(t)), u.id = l, d.fake && (d.style.background = "", d.style.overflow = "hidden", s = f.style.overflow, f.style.overflow = "hidden", f.appendChild(d)), o = e(u, t), d.fake ? (d.parentNode.removeChild(d), f.style.overflow = s, f.offsetHeight) : u.parentNode.removeChild(u), !!o
            };
            u.addTest("touchevents", function() {
                    var e;
                    if ("ontouchstart" in i || i.DocumentTouch && h instanceof DocumentTouch) e = !0;
                    else {
                        var t = ["@media (", n.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                        g(t, function(t) {
                            e = 9 === t.offsetTop
                        })
                    }
                    return e
                }),
                function() {
                    var t, e, i, n, r, o;
                    for (var a in l)
                        if (l.hasOwnProperty(a)) {
                            if (t = [], (e = l[a]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                                for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                            for (n = s(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++) 1 === (o = t[r].split(".")).length ? u[o[0]] = n : (!u[o[0]] || u[o[0]] instanceof Boolean || (u[o[0]] = new Boolean(u[o[0]])), u[o[0]][o[1]] = n), c.push((n ? "" : "no-") + o.join("-"))
                        }
                }(), o(c), delete e.addTest, delete e.addAsyncTest;
            for (var y = 0; y < u._q.length; y++) u._q[y]();
            i.zpModernizr = u
        }(rr, or), zpModernizr.addTest("zpa-browser-ie11", function() {
            return !!or.documentMode
        }), c.prototype = {
            initialize: function() {
                if (!this.init) {
                    var t = this.getState(),
                        e = (new Date).valueOf();
                    null === t || t.expires < e ? (this.getLocation(), this.init = !0) : this.checkState(t)
                }
            },
            getState: function() {
                var t;
                if (rr.__ZP_GEOIP_STATUS__) return t = rr.__ZP_GEOIP_STATUS__, delete rr.__ZP_GEOIP_STATUS__, t;
                try {
                    t = JSON.parse(ar.getItem("zp-geoip"))
                } catch (t) {
                    console.error(t)
                }
                return t
            },
            setState: function(t) {
                try {
                    ar.setItem("zp-geoip", JSON.stringify(t))
                } catch (t) {
                    console.error(t)
                }
            },
            getLocation: function() {
                f.ajax({
                    url: "https://gip.zipify.com/json/",
                    type: "get",
                    timeout: 3e3,
                    dataType: "json"
                }).then(function(t) {
                    var e = {
                        location: t,
                        status: "loaded"
                    };
                    this.setState(e), this.checkState(e)
                }.bind(this)).fail(function() {
                    this.checkState({
                        location: null,
                        status: "failed"
                    })
                }.bind(this))
            },
            checkState: function(t) {
                switch (t.status) {
                    case "initialized":
                    case "loading":
                        setTimeout(function() {
                            this.initialize()
                        }.bind(this), 250);
                        break;
                    case "loaded":
                        this.GDPRStatus.status = this._validateCountry(t.location.country_code), this.broadcast(this.GDPRStatus), this.init = !0;
                        break;
                    case "failed":
                        this.GDPRStatus = {
                            status: !0,
                            geoipError: !0
                        }, this.broadcast(this.GDPRStatus), this.init = !0
                }
            },
            _validateCountry: function(t) {
                return 0 <= ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "IS", "LI", "NO"].indexOf(t)
            },
            subscribe: function(t) {
                this.init || this.initialize(), this.observers.push(t), this.init && this.broadcast(this.GDPRStatus)
            },
            broadcast: function(e) {
                this.observers.forEach(function(t) {
                    t(e)
                })
            }
        };
    var l = new c;

    function g(t) {
        this.button = t, this.initialize()
    }

    function u(t, e) {
        this.endTimestamp = t, this.timeZone = e
    }

    function d(t, e) {
        var i = this.getSavedEndtime(e);
        i || (i = Date.now().valueOf() + t, this.saveEndtime(e, i));
        u.call(this, i)
    }
    g.prototype = {
        initialize: function() {
            this.disabled = !1, this.calculateVisibleOffset(), this.listenEvents()
        },
        calculateVisibleOffset: function() {
            var t = or.documentElement.scrollHeight;
            this.visibleOffset = 20 * t / 100
        },
        listenEvents: function() {
            rr.addEventListener("scroll", this.catchScroll.bind(this)), this.button.addEventListener("click", this.scrollUp.bind(this)), m.subscribe("popupOpened", this._onDisableWidget.bind(this)), m.subscribe("popupClosed", this._onEnableWidget.bind(this))
        },
        _onDisableWidget: function() {
            this.disabled = !0, this._changeState(!1)
        },
        _onEnableWidget: function() {
            this.disabled = !1, this.catchScroll()
        },
        catchScroll: function() {
            if (!this.disabled) {
                this.calculateVisibleOffset();
                var t = rr.pageYOffset > parseInt(this.visibleOffset);
                this._changeState(t)
            }
        },
        scrollUp: function(t) {
            t.preventDefault(), t.stopPropagation();
            var e = void 0 === rr.performance,
                i = "undefined" === rr.requestAnimationFrame;
            if (this.visibleOffset <= 0 || e || i) return this._setScrollTop(0);
            var n = rr.performance.now(),
                r = this._getScrollTop(),
                o = r - 0;
            rr.requestAnimationFrame(function t(e) {
                var i = Math.min((e - n) / this.visibleOffset * 5, 1);
                this._setScrollTop(r - Math.round(this._inOutSine(i) * o)), i < 1 && rr.requestAnimationFrame(t.bind(this))
            }.bind(this))
        },
        _changeState: function(t) {
            this.button.classList[t ? "add" : "remove"]("show")
        },
        _getScrollTop: function() {
            return or.documentElement.scrollTop || or.body.scrollTop
        },
        _setScrollTop: function(t) {
            or.documentElement.scrollTop && (or.documentElement.scrollTop = t), or.body.scrollTop && (or.body.scrollTop = t)
        },
        _inOutSine: function(t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }
    }, u.prototype = {
        msTable: {
            dayMs: 864e5,
            hourMs: 36e5,
            minuteMs: 6e4,
            secondMs: 1e3
        },
        start: function() {
            this.ticker || (this.tick(), this.ticker = setInterval(function() {
                this.tick()
            }.bind(this), 1e3))
        },
        getCurrentTimeWithTimeZone: function() {
            var t = zpMoment(this.endTimestamp),
                e = this.timeZone ? zpMoment.tz(t.format("YYYY-MM-DD HH:mm:ss"), this.timeZone) : t,
                i = zpMoment().utc(),
                n = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            if (0 < e.unix() - i.utc().unix()) {
                var r = e.diff(i),
                    o = zpMoment.duration(r, "ms");
                n = {
                    days: Math.floor(o.asDays()),
                    hours: o.hours(),
                    minutes: o.minutes(),
                    seconds: o.seconds()
                }
            }
            return n
        },
        getCurrentTime: function() {
            var t = (new Date).valueOf(),
                e = this.endTimestamp - t;
            if (0 < e) {
                var i = Math.floor(e / this.msTable.dayMs);
                e %= this.msTable.dayMs;
                var n = Math.floor(e / this.msTable.hourMs);
                e %= this.msTable.hourMs;
                var r = Math.floor(e / this.msTable.minuteMs);
                return e %= this.msTable.minuteMs, {
                    days: i,
                    hours: n,
                    minutes: r,
                    seconds: Math.floor(e / this.msTable.secondMs)
                }
            }
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        },
        tick: function() {
            var t = this.timeZone ? this.getCurrentTimeWithTimeZone() : this.getCurrentTime();
            this.onTick(t), this.isCountdownFinished() && (this.stop(), this.onFinished && this.onFinished())
        },
        setOnTick: function(t) {
            this.onTick = t
        },
        setOnFinished: function(t) {
            this.onFinished = t
        },
        stop: function() {
            clearInterval(this.ticker)
        },
        isCountdownFinished: function() {
            return this.endTimestamp <= (new Date).valueOf()
        }
    }, ((d.prototype = Object.create(u.prototype)).constructor = d).prototype.localStorageKey = "zipify.timers", d.prototype.getSavedEndtime = function(t) {
        var e = this.getSavedTimers();
        return e.hasOwnProperty("t" + t) ? e["t" + t] : null
    }, d.prototype.saveEndtime = function(t, e) {
        var i = this.getSavedTimers();
        i["t" + t] = e, this.saveTimers(i)
    }, d.prototype.getSavedTimers = function() {
        var t = rr.localStorage.getItem(this.localStorageKey);
        return t ? JSON.parse(t) : {}
    }, d.prototype.saveTimers = function(t) {
        if ("object" == typeof ar) try {
            rr.localStorage.setItem(this.localStorageKey, JSON.stringify(t))
        } catch (t) {
            Storage.prototype._setItem = Storage.prototype.setItem, Storage.prototype.setItem = function() {}, alert('For proper work of our app, please turn off "Private Browsing Mode".')
        }
    };
    var h = {
            evaluate: /{!([\s\S]+?)!}/g,
            interpolate: /{!=([\s\S]+?)!}/g
        },
        p = {
            getTemplate: function(t) {
                return f("script#" + t).html()
            },
            templater: function(r) {
                var o = /\\|'|\r|\n|\u2028|\u2029/g,
                    a = function(t) {
                        return "\\" + {
                            "'": "'",
                            "\\": "\\",
                            "\r": "r",
                            "\n": "n",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        } [t]
                    },
                    t = RegExp([h.interpolate.source, h.evaluate.source].join("|") + "|$", "g"),
                    s = 0,
                    c = "__p+='";
                r.replace(t, function(t, e, i, n) {
                    return c += r.slice(s, n).replace(o, a), s = n + t.length, e ? c += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : i && (c += "';\n" + i + "\n__p+='"), t
                }), c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + (c = "with(obj||{}){\n" + (c += "';\n") + "}\n") + "return __p;\n";
                try {
                    var e = new Function("obj", c)
                } catch (t) {
                    throw t.source = c, t
                }
                var i = function(t) {
                    return e.call(this, t)
                };
                return i.source = "function(obj){\n" + c + "}", i
            },
            extend: function(t) {
                var e, i = this;
                e = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    return i.apply(this, arguments)
                }, f.extend(e, i);
                var n = function() {
                    this.constructor = e
                };
                return n.prototype = i.prototype, e.prototype = new n, t && f.extend(e.prototype, t), e
            }
        };

    function y() {
        this._callbacks = {}
    }

    function v(t) {
        this.attrs = {}, this.events = [], f.extend(this.attrs, t), y.apply(this, arguments), this.initialize.apply(this, arguments)
    }

    function b(t, e, i, n) {
        this.parentPage = e, this.boosterOptions = i, this.coupons = n, v.apply(this, arguments)
    }

    function S(t, e) {
        b.apply(this, arguments)
    }

    function A(t, e) {
        b.apply(this, arguments)
    }

    function w() {
        v.apply(this, arguments)
    }

    function C(t) {
        v.apply(this, arguments)
    }

    function k(t, e) {
        v.apply(this, arguments)
    }

    function T(t, e) {
        this.$el = t, this.model = e, this.initialize.apply(this, arguments)
    }

    function x(t, e) {
        this.el = t, this.model = e, this.initialize.apply(this, arguments)
    }

    function E() {
        x.apply(this, arguments)
    }

    function M() {
        x.apply(this, arguments)
    }

    function D() {
        x.apply(this, arguments)
    }

    function P(t, e, i) {
        this.el = t, this.countDownEl = t.querySelector("[data-count-down]"), this.timezone = i, this.afterFinishHideContent = "hide_content" === e.after_finish, this._initCountDown(e), this.countdown.isCountdownFinished() ? this.onCountDownFinish() : this.startCountdown()
    }

    function O() {
        T.apply(this, arguments)
    }

    function L() {
        T.apply(this, arguments)
    }

    function z() {
        O.apply(this, arguments)
    }

    function I() {
        O.apply(this, arguments)
    }

    function N() {
        x.apply(this, arguments)
    }

    function B() {
        T.apply(this, arguments)
    }

    function R(t) {
        var e = {
            content: '<form class="zpa-popup">    <header class="zpa-popup__header">        <h3 class="zpa-popup__header__title" data-popup-title></h3>        <button class="zpa-popup-btn-close" type="button" aria-label="Close Navigation" data-close-btn>            <svg class="zpa-popup-btn-close-icon" width="34" height="34" data-name="btn-close">                <use xlink:href="#btn-close"></use>            </svg>        </button>    </header>    <div class="zpa-popup__body" data-popup-content></div></form>',
            modalClass: "zpa-crm-popup-wrap",
            overlayClass: "zpa-crm-popup-overlay",
            overlayStyles: {
                overflow: "hidden"
            },
            modalStyles: {
                padding: "0px",
                height: "auto",
                overflow: "auto",
                "max-height": "100%"
            },
            width: "100%",
            ariaLabelledBy: "dialog-title",
            ariaDescribedBy: "dialog-description",
            focus: !1,
            closeButton: !1,
            bodyOverflow: !1
        };
        t = t || {}, this.config = f.extend(e, t)
    }

    function j() {
        var t = p.templater(p.getTemplate("published-popup-template"));
        this.config = {
            content: t(),
            modalClass: "zpa-crm-popup-wrap",
            overlayClass: "zpa-crm-popup-overlay",
            overlayStyles: {
                overflow: "hidden"
            },
            modalStyles: {
                padding: "0px",
                height: "auto",
                overflow: "auto",
                "max-height": "100%"
            },
            width: "100%",
            ariaLabelledBy: "dialog-title",
            ariaDescribedBy: "dialog-description",
            focus: !1,
            closeButton: !1,
            bodyOverflow: !1
        }
    }

    function q(t) {
        j.call(this), this.model = t, this.render(), this.listenEvents(), this.showPopup()
    }

    function H(t) {
        j.call(this), this.model = t, this.render(), this.listenEvents(), this.showPopup()
    }

    function F(t) {
        R.call(this, {
            width: "",
            modalClass: "zpa-size-chart-popup-wrap"
        }), this.sizeChartBlock = t, this.render(), this.listenEvents(), this.showPopup()
    }

    function V() {}
    y.prototype = {
        on: function(t, e) {
            e && (this._callbacks[t] = this._callbacks[t] || []).push(e)
        },
        off: function(t, e) {
            var i = this._callbacks[t];
            if (i)
                for (var n = 0; n < i.length; n++)
                    if (i[n] === e) {
                        i.splice(n, 1);
                        break
                    }
        },
        emit: function(t) {
            var e = [].slice.call(arguments, 1),
                i = this._callbacks[t];
            if (i)
                for (var n = 0, r = (i = i.slice(0)).length; n < r; ++n) i[n].apply(this, e)
        }
    }, v.extend = p.extend, v.prototype = Object.create(y.prototype), v.extend({
        constructor: v,
        initialize: function() {},
        toJSON: function() {
            var t = {};
            return f.extend(t, this.attrs), t
        },
        set: function(t, e) {
            this.attrs[t] = e, this.emit("change:" + t, this)
        },
        get: function(t) {
            return this.attrs[t]
        }
    }), v.extend({
        constructor: b,
        sentCount: 0,
        checkouting: !1,
        geoipNotWorking: !1,
        initialize: function() {
            var t = this.get("link_type"),
                e = "booster_dest" === t ? this.boosterOptions.gdpr_status : this.get("gdpr_status");
            0 <= ["booster_dest", "page_form_dest", "crm_dest"].indexOf(t) && "disable" !== e && (this.set("isGDPRCountry", void 0), l.subscribe(function(t) {
                this.set("isGDPRCountry", t.status), this.geoipNotWorking = t.geoipError
            }.bind(this)))
        },
        checkout: function(e, i, n) {
            if (this._validateEmail(e.email)) {
                if (this.isFieldRequiredNotValid(this.attrs.first_name_option_required, e.first_name)) n("Please fill a first name");
                else if (this.isFieldRequiredNotValid(this.attrs.last_name_option_required, e.last_name)) n("Please fill a last name");
                else if (this.isFieldRequiredNotValid(this.attrs.phone_option_required, e.phone)) n("Please fill a phone");
                else if (this.isNotCheckedGDPRCheckbox(e)) n("You should check in the check-box first!");
                else if (3 <= this.sentCount) n("You had sent this form three times already!");
                else if (!this.checkouting) {
                    this.checkouting = !0;
                    var t = ZipifyPages && ZipifyPages.shopDomain,
                        r = new FormData,
                        o = ZipifyPages.crmUrl || this.parentPage.get("domain");
                    Object.keys(e).forEach(function(t) {
                        r.append(t, e[t])
                    });
                    var a = new XMLHttpRequest;
                    a.open("POST", o + "/subscribe"), a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("Shop-Domain", t), a.onload = function() {
                        if (200 === a.status) try {
                            var t = JSON.parse(a.responseText);
                            this.checkouting = !1, "success" === t.status ? (this.sentCount++, i(t.data)) : n(t.data)
                        } catch (t) {
                            n(t)
                        } else this.checkouting = !1
                    }.bind(this), a.send(r)
                }
            } else n("Please input a valid email")
        },
        isFieldRequiredNotValid: function(t, e) {
            return 1 === t && 0 === e.length
        },
        isNotCheckedGDPRCheckbox: function(t) {
            t.gdpr_status && (this.attrs.gdpr_status = t.gdpr_status);
            var e = void 0 !== this.attrs.gdpr_status ? this.attrs.gdpr_status : "enable_with_checkbox";
            return !(!this.attrs.isGDPRCountry || "enable_with_checkbox" !== e) && !t.gdpr
        },
        isFinishedCoupon: function() {
            return 0 === this.coupons.couponsLeftCount
        },
        isBoosterDest: function() {
            return "booster_dest" === this.get("link_type")
        },
        idNotSelectedAlternative: function() {
            return "0" === this.boosterOptions.alt_mail_list_id
        },
        _validateEmail: function(t) {
            return /^\S+@\S+$/.test(t)
        }
    }), b.extend({
        constructor: S
    }), b.extend({
        constructor: A
    }), v.extend({
        constructor: w
    }), v.extend({
        constructor: C
    }), v.extend({
        constructor: k,
        YOUTUBE: "youtube",
        hasBackgroundVideo: function() {
            return this.get("background_video") && this.get("background_video").iframe_src
        },
        hasImageColorOverlay: function() {
            return this.get("color_overlay") && "image" === this.get("background_mode")
        },
        isYoutubeVideo: function() {
            return this.get("background_video") && this.get("background_video").provider === this.YOUTUBE
        }
    }), T.extend = p.extend, T.prototype = {
        initialize: function() {}
    }, x.extend = p.extend, x.prototype = {
        initialize: function() {}
    }, x.extend({
        constructor: E,
        initialize: function() {
            this.floatLabel(this.el.value.length), this.listenEvents()
        },
        listenEvents: function() {
            this.el.addEventListener("focus", this._onStateChanged.bind(this)), this.el.addEventListener("blur", this._onStateChanged.bind(this))
        },
        _onStateChanged: function(t) {
            this.floatLabel("focus" === t.type || this.el.value.length)
        },
        floatLabel: function(t) {
            this.el.classList[t ? "add" : "remove"]("zpa-text-field--float-above")
        },
        reset: function() {
            this.el.value = "", this.floatLabel(!1)
        }
    }), x.extend({
        constructor: M,
        ONE_SECOND: 1e3,
        initialize: function(t, e, i, n) {
            this.viewStates = this.model.get("view_states"), this.delayMilliseconds = +this.model.get("display_delaying") * this.ONE_SECOND, this.emitter = n, this.model.hasBackgroundVideo() && new D(this.el, this.model, i), this.model.hasImageColorOverlay() && this.renderImageColorOverlay(), i.isDesktop() && this.viewStates.desktop && this.runTimerForDelayedBlock(), i.isTablet() && this.viewStates.tablet && this.runTimerForDelayedBlock(), i.isMobile() && this.viewStates.mobile && this.runTimerForDelayedBlock()
        },
        runTimerForDelayedBlock: function() {
            setTimeout(function() {
                this.el.classList.remove("js-zpa-visually--hidden"), this.emitter.emit("showDelayedBlock")
            }.bind(this), this.delayMilliseconds)
        },
        renderImageColorOverlay: function() {
            var t = this.model.get("color_overlay"),
                e = or.createElement("div");
            e.style.setProperty("background-color", t), e.classList.add("zpa-block__color-overlay"), this.el.style.position = "relative", Array.prototype.forEach.call(this.el.childNodes, function(t) {
                t instanceof HTMLElement && (t.style.position = "relative")
            }), this.el.insertBefore(e, this.el.firstChild)
        }
    }), x.extend({
        constructor: D,
        initialize: function(t, e, i) {
            this.deviceManager = i, this.isMobileDevice = this.deviceManager.isMobile() && this.model.isYoutubeVideo(), this.position = this._calcVideoPosition(), this.render()
        },
        render: function() {
            if (this.isMobileDevice) this.videoThumbnailImage();
            else {
                this._renderBlockWrapperEl(!1);
                var t = this.model.get("background_video");
                this.wrapper.querySelector("[data-background-video-iframe-wrapper]").innerHTML = t.iframe_src, "vimeo" === t.provider && this.wrapper.querySelector("[data-background-video]").classList.add("zpa-background-video__vimeo");
                var e = this.wrapper.querySelector("[data-blocks]");
                e.append.apply(e, this.el.children), this._moveSectionPaddingsToBlocksSection(), this.el.append(this.wrapper), this._listenBlockResize()
            }
        },
        updateVideoPosition: function() {
            var t = this.el.querySelector("[data-background-video]");
            t.style.setProperty("width", this.position.width), t.style.setProperty("height", this.position.height), t.style.setProperty("top", this.position.top), t.style.setProperty("left", this.position.left)
        },
        videoThumbnailImage: function() {
            var t = this.model.get("background_video");
            if (this.el.style.position = "relative", this.el.style.backgroundImage = "url(" + t.thumbnail + ")", this.el.style.backgroundRepeat = "no-repeat", this.el.style.backgroundPosition = "center", this.el.style.backgroundSize = "cover", t.enable_overlay) {
                this._renderBlockWrapperEl(!0);
                var e = this.wrapper.querySelector("[data-blocks]");
                e.append.apply(e, this.el.children), this._moveSectionPaddingsToBlocksSection(), this.el.append(this.wrapper)
            }
        },
        _renderBlockWrapperEl: function(t) {
            var e = '<div class="zpa-background-video__container" data-background-video-container>    <div        class="zpa-background-video"        data-background-video        style="width:{!= position.width !}; height:{!= position.height !}; top:{!= position.top !}; left:{!= position.left !}"    >        {! if (!showThumbnail) !}        <div class="zpa-background-video__iframe--wrapper" style="top:{!= position.top !};left:{!= position.left !}" data-background-video-iframe-wrapper></div>        {! !}        {! if (model.enable_overlay) !}        <div class="zpa-block__color-overlay" style="background-color:{!= model.color_overlay !}"></div>        {! !}    </div></div><div class="zpa-blocks__wrapper" data-blocks></div>';
            e = p.templater(e), this.wrapper = or.createElement("div"), this.wrapper.style.position = "relative", this.wrapper.innerHTML = e({
                model: this.model.get("background_video"),
                position: this.position,
                showThumbnail: t
            })
        },
        _moveSectionPaddingsToBlocksSection: function() {
            var t = this.wrapper.querySelector("[data-blocks]"),
                e = this.el.classList.contains("zpa-block-full-width") ? "zpa-block-full-width" : "",
                i = t.querySelector(".js-cluster");
            this.el.classList.remove("cluster-padding-" + this.model.get("padding").class, "js-cluster-wrapper"), this.el.style.padding = "0 0 0 0", 1 < t.children.length ? (t.firstChild.classList.remove("zpa-container-offset--none"), this._setPaddings(i, e)) : (this._setPaddings(t, e), i && (i.style.padding = "0 0 0 0"))
        },
        _setPaddings: function(t, e) {
            e && t.classList.add("js-cluster-wrapper", e), this.model.get("padding").class ? t.classList.add("cluster-padding-" + this.model.get("padding").class, "js-cluster-wrapper") : (t.classList.add("js-cluster-wrapper"), t.style.paddingTop = this.model.get("padding").top + "px", t.style.paddingRight = this.model.get("padding").right + "%", t.style.paddingBottom = this.model.get("padding").bottom + "px", t.style.paddingLeft = this.model.get("padding").left + "%")
        },
        _calcVideoPosition: function() {
            if (this.isMobileDevice) return {
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            };
            var t = Math.ceil(this.el.clientWidth / 16 * 9),
                e = t + Math.max(0, 120 - (t - this.el.clientHeight)),
                i = Math.ceil(e * (16 / 9));
            return {
                top: -(e - this.el.clientHeight) / 2 + "px",
                left: -(i - this.el.clientWidth) / 2 + "px",
                width: i + "px",
                height: e + "px"
            }
        },
        _listenBlockResize: function() {
            var t = ze.debounce(this._onBlockResize.bind(this), 150);
            new ResizeObserver(t).observe(this.el)
        },
        _onBlockResize: function() {
            this.position = this._calcVideoPosition(), this.updateVideoPosition()
        }
    }), P.prototype = {
        startCountdown: function() {
            this._prepareCountdownEl(), this.countdown.setOnTick(function(t) {
                this.countDownEl.querySelector("[data-days]").innerText = t.days < 10 ? "0" + t.days : t.days, this.countDownEl.querySelector("[data-hours]").innerText = t.hours < 10 ? "0" + t.hours : t.hours, this.countDownEl.querySelector("[data-minutes]").innerText = t.minutes < 10 ? "0" + t.minutes : t.minutes, this.countDownEl.querySelector("[data-seconds]").innerText = t.seconds < 10 ? "0" + t.seconds : t.seconds
            }.bind(this)), this.countdown.setOnFinished(this.onCountDownFinish.bind(this)), this.countdown.start(), this.onCountdownStart()
        },
        onCountDownFinish: function() {
            this.toggleCountdown(!1), this.toggleContentToHide(!1), this.afterFinishHideContent ? this.el.remove() : this.toggleContentToShow(!0)
        },
        onCountdownStart: function() {
            this.toggleCountdown(!0), this.toggleContentToHide(!0), this.afterFinishHideContent || this.toggleContentToShow(!1)
        },
        toggleCountdown: function(t) {
            this.countDownEl.classList[t ? "remove" : "add"]("hidden")
        },
        toggleContentToShow: function(t) {
            this.el.querySelector("[data-content-to-show]").classList[t ? "remove" : "add"]("hidden")
        },
        toggleContentToHide: function(e) {
            var t = this.el.querySelectorAll("[data-content-to-hide]");
            t && Array.prototype.forEach.call(t, function(t) {
                t.classList[e ? "remove" : "add"]("hidden")
            })
        },
        _prepareCountdownEl: function() {
            var t = this.timezone ? this.countdown.getCurrentTimeWithTimeZone() : this.countdown.getCurrentTime(),
                e = this.countDownEl.querySelector("[data-days-wrapper]"),
                i = this.countDownEl.querySelector("[data-hours-wrapper]");
            e.classList[0 === t.days ? "add" : "remove"]("hidden"), i.classList[0 === t.days && 0 === t.hours ? "add" : "remove"]("hidden")
        },
        _initCountDown: function(t) {
            var e = t.type_option;
            if ("evergreen" === e) this.countdown = new d(1 * t.time_left, t.id + "v" + this.countDownEl.getAttribute("data-count-time-version"));
            else {
                if ("specific_date" !== e) throw 'Unknown type of count down "' + e + '"';
                this.countdown = new u(1 * t.date_end, this.timezone)
            }
        }
    }, T.extend({
        constructor: O,
        initialize: function() {
            this.render(), this.listenEvents()
        },
        listenEvents: function() {
            var e = 0;
            this.$el.on("click touchstart touchend", function(t) {
                if ("touchstart" !== t.type) {
                    if ("touchend" !== t.type || rr.pageYOffset === e) switch (this.model.get("link_type")) {
                        case "crm_dest":
                            t.preventDefault(), this.showCrmPopup();
                            break;
                        case "booster_dest":
                            t.preventDefault(), this.showBoosterPopup()
                    }
                } else e = rr.pageYOffset
            }.bind(this))
        },
        render: function() {
            "page_form_dest" === this.model.get("link_type") && new B(this.model), this.model.isBoosterDest() && this.model.isFinishedCoupon() && this.model.idNotSelectedAlternative() && ("button" === this.model.get("role") ? this.$el.addClass("zpa-btn-disabled") : this.$el.addClass("zpa-image--inactive"))
        },
        showBoosterPopup: function() {
            new H(this.model)
        },
        showCrmPopup: function() {
            new q(this.model)
        }
    }), T.extend({
        constructor: L,
        initialize: function() {
            this.listenEvents()
        },
        onClick: function(t) {
            return function() {
                t.classList.contains("active") ? t.classList.toggle("active") : t.classList.toggle("zpa-active")
            }
        },
        listenEvents: function() {
            var t = this.$el.querySelectorAll("[data-faq-item]");
            [].forEach.call(t, function(t) {
                t.querySelector("[data-faq-header]").addEventListener("click", this.onClick(t))
            }.bind(this))
        }
    }), O.extend({
        constructor: z
    }), O.extend({
        constructor: I
    }), x.extend({
        constructor: N,
        SCROLL_UP_CLASS: "zpa-hide_on_scroll--up",
        SCROLL_BLOCK_ACTIVE_CLASS: "zpa-hide_on_scroll",
        SCROLL_BLOCK_CLASSES: {
            MOBILE: "zpa-hide_on_scroll--mobile",
            TABLET: "zpa-hide_on_scroll--tablet",
            DESKTOP: "zpa-hide_on_scroll--desktop"
        },
        HEIGHT_VAR: "--dynamic_header--height",
        pendingAnimation: !1,
        lastScrollTop: 0,
        initialize: function(t, e) {
            e.subscribe("showDelayedBlock", this.recalculateClusterPosition, this), this.listenMenuItems(), this.listenTogglingMenu(), this.isAppearsOnScrollUp() && this.initializeScrollAction()
        },
        listenMenuItems: function() {
            var t = this.el.querySelectorAll("[data-dynamic-header-menu-item]");
            Array.prototype.forEach.call(t, this._listenMenuItem().bind(this))
        },
        _listenMenuItem: function() {
            var i = this.el.querySelector("[data-dynamic-header-menu]");
            return function(t) {
                var e = this._onMenuItemClicked(i).bind(this);
                t.addEventListener("click", e, !1)
            }
        },
        _onMenuItemClicked: function(t) {
            return function() {
                t.checked = !1, this._toggleBodyScroll(!1)
            }
        },
        listenTogglingMenu: function() {
            var t = this.el.querySelector("[data-dynamic-header-menu]");
            t.addEventListener("change", function() {
                this._toggleBodyScroll(t.checked)
            }.bind(this), !1), this._toggleBodyScroll(t.checked)
        },
        _toggleBodyScroll: function(t) {
            or.body.classList.toggle("zpa-body-overflow", t)
        },
        isAppearsOnScrollUp: function() {
            var t = this.el.classList.contains(this.SCROLL_BLOCK_CLASSES.MOBILE),
                e = this.el.classList.contains(this.SCROLL_BLOCK_CLASSES.TABLET);
            return this.el.classList.contains(this.SCROLL_BLOCK_CLASSES.DESKTOP) || e || t
        },
        initializeScrollAction: function() {
            var t = ze.throttle(this.initializeHideOnScroll.bind(this), 250);
            rr.addEventListener("resize", t, !1), t()
        },
        initializeHideOnScroll: function() {
            this.hideOnScrollAnimation && (rr.removeEventListener("scroll", this.hideOnScrollAnimation), delete this.hideOnScrollAnimation), this.isHideOnScrollCluster() ? (this.updateScrollActionSettings(), this.hideOnScrollAnimation = ze.throttle(this.requestHeaderAnimation.bind(this), 150), rr.addEventListener("scroll", this.hideOnScrollAnimation, !1)) : this.makeStatic()
        },
        isHideOnScrollCluster: function() {
            var t = this.SCROLL_BLOCK_CLASSES.DESKTOP;
            return rr.innerWidth < 768 ? t = this.SCROLL_BLOCK_CLASSES.MOBILE : rr.innerWidth < 1200 && (t = this.SCROLL_BLOCK_CLASSES.TABLET), this.el.classList.contains(t)
        },
        updateScrollActionSettings: function() {
            this.positionOnPage = this.calculateClusterNaturalPosition();
            var t = this.el.nextSibling.style;
            if (t) {
                var e = this.el.clientHeight + "px";
                t.setProperty(this.HEIGHT_VAR, e)
            }
        },
        recalculateClusterPosition: function() {
            this.positionOnPage = this.calculateClusterNaturalPosition()
        },
        calculateClusterNaturalPosition: function() {
            var t = this.el.previousSibling;
            return t && t.offsetTop + t.clientHeight || 0
        },
        requestHeaderAnimation: function() {
            if (!this.pendingAnimation) {
                var t = this.updateHeaderPosition.bind(this);
                requestAnimationFrame(t), this.pendingAnimation = !0
            }
        },
        updateHeaderPosition: function() {
            var t = this.isScrollUp();
            this.calculateToggleBrakePoint(t) < rr.scrollY ? this.makeAppearsOnScrollUp(t) : this.makeStatic(), this.pendingAnimation = !1, this.lastScrollTop = rr.scrollY
        },
        isScrollUp: function() {
            return rr.scrollY < this.lastScrollTop
        },
        calculateToggleBrakePoint: function(t) {
            return t ? this.positionOnPage : this.positionOnPage + this.el.clientHeight
        },
        makeStatic: function() {
            this.el.classList.remove(this.SCROLL_UP_CLASS, this.SCROLL_BLOCK_ACTIVE_CLASS)
        },
        makeAppearsOnScrollUp: function(t) {
            this.el.classList.add(this.SCROLL_BLOCK_ACTIVE_CLASS), this.el.classList.toggle(this.SCROLL_UP_CLASS, t)
        }
    }), T.extend({
        constructor: B,
        initialize: function(t) {
            this.model = t, this.inputViews = [];
            var e = or.getElementById("pageForm" + this.model.attrs.id);
            this.pageFormViewCluster = e || or.querySelector('[data-page-form-id="' + this.model.attrs.id + '"]'), this.listenEvents(), this.initInputs(), this.renderGDPRStatus()
        },
        listenEvents: function() {
            this.model.on("change:isGDPRCountry", this.renderGDPRStatus.bind(this)), "BUTTON" !== this.pageFormViewCluster.querySelector("[data-on-page-form-btn]").tagName && this.pageFormViewCluster.querySelector("[data-on-page-form-btn]").addEventListener("click", this.emitSubmitEvent.bind(this)), this.pageFormViewCluster.addEventListener("submit", this.onCheckout.bind(this))
        },
        emitSubmitEvent: function(t) {
            t.preventDefault();
            var e = or.createElement("button");
            e.style.display = "none", this.pageFormViewCluster.append(e), e.click(), this.pageFormViewCluster.removeChild(e)
        },
        initInputs: function() {
            Array.prototype.forEach.call(this.pageFormViewCluster.querySelectorAll("[data-zp-input]"), function(t) {
                this.inputViews.push(new E(t))
            }.bind(this))
        },
        renderGDPRStatus: function() {
            if (this.model.get("isGDPRCountry")) switch (this.model.get("gdpr_status")) {
                case "enable_with_checkbox":
                    this.pageFormViewCluster.querySelector("[data-gdpr-checkbox]").setAttribute("required", ""), this.pageFormViewCluster.querySelector("[data-gdpr-checkbox-section]").classList.remove("hidden");
                    break;
                case "enable_without_checkbox":
                    this.pageFormViewCluster.querySelector("[data-gdpr-message-section]").classList.remove("hidden")
            }
        },
        _captureSendingInfo: function() {
            var t = this.pageFormViewCluster.querySelector("[data-email]"),
                e = this.pageFormViewCluster.querySelector("[data-first-name]"),
                i = this.pageFormViewCluster.querySelector("[data-last-name]"),
                n = this.pageFormViewCluster.querySelector("[data-phone]"),
                r = this.pageFormViewCluster.querySelector("[data-gdpr-checkbox]"),
                o = r ? r.checked : 0;
            return {
                email: t ? t.firstChild ? t.querySelector("input").value : t.value : "",
                first_name: e ? e.firstChild ? e.querySelector("input").value : e.value : "",
                last_name: i ? i.firstChild ? i.querySelector("input").value : i.value : "",
                phone: n ? n.firstChild ? n.querySelector("input").value : n.value : "",
                gdprCheckbox: o ? 1 : 0,
                boosterPageInfo: {}
            }
        },
        onCheckout: function(t) {
            t.preventDefault();
            var e = this._captureSendingInfo(),
                i = {
                    email: e.email,
                    first_name: e.first_name,
                    last_name: e.last_name,
                    phone: e.phone,
                    gdpr: e.gdprCheckbox,
                    entity_id: this.model.parentPage.get("id"),
                    entity_type: this.model.parentPage.get("entity_type") ? this.model.parentPage.get("entity_type") : "Page",
                    block_id: this.model.get("id"),
                    shop_domain: ZipifyPages.shopDomain || "",
                    geoip_error: this.model.geoipNotWorking
                };
            this.model.checkout(i, function() {
                this.model.attrs.confirmation_option && alert(this.model.attrs.confirmation_text), m.emit("_crmsignupsuccess", e), this.model.attrs.linked_to && "#" !== this.model.attrs.linked_to && (rr.location = this.model.attrs.linked_to), this.clearInputValue()
            }.bind(this), function(t) {
                alert(t)
            })
        },
        clearInputValue: function() {
            var t = this.pageFormViewCluster.querySelector("[data-gdpr-checkbox]");
            t && (t.checked = !1), this.inputViews.forEach(function(t) {
                t.reset()
            })
        }
    }), R.prototype = {
        render: function() {
            this.popup = picoModal(this.config).afterClose(function(t) {
                Ie.enableScroll(), t.destroy()
            }.bind(this)), he.isIOS() && this.popup.afterShow(this._resizeAfterLoadImages), this.el = this.popup.modalElem()
        },
        listenEvents: function() {
            this.el.querySelector("[data-close-btn]").addEventListener("click", this.close.bind(this))
        },
        showPopup: function() {
            this.popup.show(), Ie.disableScroll(), m.emit("popupOpened")
        },
        close: function() {
            this.popup.close(), m.emit("popupClosed")
        },
        _resizeAfterLoadImages: function(t) {
            var e = t.modalElem();
            e.querySelectorAll("img").forEach(function(t) {
                t.addEventListener("load", function() {
                    e.style.height = e.scrollHeight + "px"
                })
            }), e.style.height = e.scrollHeight + "px"
        }
    }, j.prototype.render = function() {
        this.popup = picoModal(this.config).afterClose(function(t) {
            Ie.enableScroll(), t.destroy()
        }.bind(this)), he.isIOS() && this.popup.afterShow(this._resizeAfterLoadImages), this.el = this.popup.modalElem()
    }, j.prototype.showPopup = function() {
        this._initInputs(), this.popup.show(), Ie.disableScroll(), m.emit("popupOpened")
    }, j.prototype.listenEvents = function() {
        this.el.querySelector("[data-close-btn]").addEventListener("click", function() {
            this.close()
        }.bind(this)), this.model.on("change:isGDPRCountry", this.renderGDPRSection.bind(this))
    }, j.prototype.close = function() {
        this.popup.close(), m.emit("popupClosed")
    }, j.prototype.renderGDPRSection = function(t) {
        var e = this.el.querySelector("[data-gdpr-checkbox-section]"),
            i = this.el.querySelector("[data-gdpr-checkbox-text]"),
            n = this.el.querySelector("[data-gdpr-checkbox]"),
            r = this.el.querySelector("[data-gdpr-message-section]"),
            o = "Yes, I would like to receive email updates about new products, special offers and more! I can unsubscribe at any time.",
            a = void 0 === t.isGDPRCountry || t.isGDPRCountry,
            s = t.gdpr_status ? t.gdpr_status : "enable_with_checkbox",
            c = a && "enable_with_checkbox" === s;
        "enable_with_checkbox" === s && (e.classList[c ? "remove" : "add"]("hidden"), a && "enable_with_checkbox" === s && n.setAttribute("required", ""), i.innerText = t.gdpr_confirmation_text ? t.gdpr_confirmation_text : o, i.style.color = t.gdpr_confirmation_text_font_color);
        var l = a && "enable_without_checkbox" === s;
        "enable_without_checkbox" === s && (r.classList[l ? "remove" : "add"]("hidden"), r.innerText = t.gdpr_confirmation_text ? t.gdpr_confirmation_text : o, r.style.color = t.gdpr_confirmation_text_font_color)
    }, j.prototype.toJSONStringFormData = function(t) {
        for (var e = {}, i = t.querySelectorAll("input"), n = 0; n < i.length; ++n) {
            var r = i[n],
                o = r.name,
                a = r.value,
                s = r.disabled;
            o && !s && (e[o] = a)
        }
        return e
    }, j.prototype.prepareCrmFormData = function(t, e) {
        var i = this.el.querySelector("[data-gdpr-checkbox]"),
            n = i ? !!i.checked : "",
            r = ZipifyPages && ZipifyPages.shopDomain,
            o = {
                entity_id: e.get("id"),
                entity_type: e.get("entity_type") ? e.get("entity_type") : "Page",
                shop_domain: r,
                gdpr: this.model.get("isGDPRCountry") ? n : "",
                geoip_error: this.model.geoipNotWorking,
                owner_id: this.model.get("id"),
                owner_type: this.model.get("entity_type") || "Block"
            };
        return Object.assign(t, o)
    }, j.prototype._initInputs = function() {
        Array.prototype.forEach.call(this.el.querySelectorAll("[data-zp-input]"), function(t) {
            new E(t)
        })
    }, j.prototype._resizeAfterLoadImages = function(t) {
        var e = t.modalElem();
        e.querySelectorAll("img").forEach(function(t) {
            t.addEventListener("load", function() {
                e.style.height = e.scrollHeight + "px"
            })
        }), e.style.height = e.scrollHeight + "px"
    }, ((q.prototype = Object.create(j.prototype)).constructor = q).prototype.render = function() {
        j.prototype.render.call(this);
        var t = p.templater(p.getTemplate("crm-button-popup"));
        this.model.get("form_name_font_family") || this.model.set("form_name_font_family", "Lato"), this.el.querySelector("[data-popup-content]").innerHTML = t(this.model.toJSON()), this.renderGDPRSection(this.model.toJSON())
    }, q.prototype.listenEvents = function() {
        j.prototype.listenEvents.call(this);
        var t = this.el.querySelector("[data-zpa-crm-form]");
        t ? t.addEventListener("submit", this.onCheckout.bind(this)) : this.el.querySelector("[data-checkout-btn]").addEventListener("click", this.onCheckout.bind(this))
    }, q.prototype.onCheckout = function(t) {
        t.preventDefault();
        var e = this.toJSONStringFormData(this.el.querySelector("[data-zpa-crm-form]")),
            i = this.prepareCrmFormData(e, this.model.parentPage);
        this.model.checkout(i, function() {
            this.model.attrs.confirmation_option && alert(this.model.attrs.confirmation_text), m.emit("_crmsignupsuccess", i), this.model.attrs.linked_to && "#" !== this.model.attrs.linked_to ? this._redirectToURL() : this.close()
        }.bind(this), function(t) {
            alert("Error : " + t)
        })
    }, q.prototype._redirectToURL = function() {
        this._prepareRedirectURL().then(this._changeWindowLocation, this._changeWindowLocation)
    }, q.prototype._prepareRedirectURL = function() {
        var t = this.model.attrs.linked_to;
        return mt.transform("crmPopupGetRedirectLink", t).then(function(t) {
            return t
        }, function() {
            return t
        })
    }, q.prototype._changeWindowLocation = function(t) {
        rr.location = t
    }, ((H.prototype = Object.create(j.prototype)).constructor = H).prototype.render = function() {
        j.prototype.render.call(this);
        var t = p.templater(p.getTemplate("booster-page-published-popup"));
        this.model.boosterOptions.isGDPRCountry = this.model.get("isGDPRCountry"), this.model.boosterOptions.form_name_font_family = this.model.boosterOptions.form_name_font_family ? this.model.boosterOptions.form_name_font_family : "Lato", this.el.querySelector("[data-popup-content]").innerHTML = t(this.model.boosterOptions), this.model.coupons && 0 === this.model.coupons.couponsLeftCount ? this.el.querySelector("[data-main-title]").innerText = this.model.boosterOptions.finished_coupon_text : this.el.querySelector("[data-main-title]").innerText = this.model.boosterOptions.form_name, this.renderGDPRSection(this.model.boosterOptions)
    }, H.prototype.listenEvents = function() {
        j.prototype.listenEvents.call(this);
        var t = this.el.querySelector("[data-zpa-crm-form]");
        t ? t.addEventListener("submit", this.onCheckout.bind(this)) : this.el.querySelector("[data-checkout-btn]").addEventListener("click", this.onCheckout.bind(this))
    }, H.prototype.collectBoosterPageInfo = function() {
        return {
            target_page_id: this.model.boosterOptions.target_page_id,
            coupon_list_id: this.model.boosterOptions.coupon_list_id,
            gdpr_status: this.model.boosterOptions.gdpr_status
        }
    }, H.prototype.onCheckout = function(t) {
        t.preventDefault();
        var e = this.toJSONStringFormData(this.el.querySelector("[data-zpa-crm-form]")),
            i = this.prepareCrmFormData(e, this.model.parentPage),
            n = Object.assign(i, this.collectBoosterPageInfo());
        this.model.checkout(n, function(t) {
            m.emit("_crmsignupsuccess", i), this.model.boosterOptions.enable && t.link_page ? rr.location = t.link_page : this.close()
        }.bind(this), function(t) {
            if ("already_subscribed" === t) alert(this.model.boosterOptions.used_email_text);
            else if ("empty_list" === t) this.close(), alert(this.model.boosterOptions.no_coupons_left_message);
            else {
                alert("Error : " + t)
            }
        }.bind(this))
    }, (F.prototype = Object.create(R.prototype)).constructor = F, f.extend(F.prototype, {
        popupTitle: "",
        render: function() {
            R.prototype.render.call(this);
            var t = '<img class="zpa-size-chart-popup__image" src="{!= image.src !}" sizes="{!= image.sizes !}" srcset="{!= image.srcset !}">';
            t = p.templater(t), this.popupTitle = this.sizeChartBlock.caption, this.el.querySelector("[data-popup-title]").innerText = this.popupTitle, this.el.querySelector("[data-popup-content]").innerHTML = t({
                image: this.sizeChartBlock.image
            })
        }
    }), V.prototype.isArray = function(t) {
        return "[object Array]" === this.objectType(t)
    }, V.prototype.isFunction = function(t) {
        return "[object Function]" === this.objectType(t)
    }, V.prototype.isObject = function(t) {
        return "[object Object]" === this.objectType(t)
    }, V.prototype.isString = function(t) {
        return "[object String]" === this.objectType(t)
    }, V.prototype.objectType = function(t) {
        return Object.prototype.toString.call(t)
    };
    var W = new V;

    function G() {}
    G.prototype.escapeHTML = function(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        };
        return ("" + t).replace(/[&<>"'\/]/g, function(t) {
            return e[t]
        })
    };
    new G;

    function Y() {}
    Y.prototype.serializeObject = function(t) {
        var e = {},
            i = t.serializeArray();
        return f.each(i, function() {
            e[this.name] ? (e[this.name].push || (e[this.name] = [e[this.name]]), e[this.name].push(this.value || "")) : e[this.name] = this.value || ""
        }), e
    }, Y.prototype.elementPresent = function(t, e) {
        return 0 < f(t).find(e).length
    }, Y.prototype.field = function(t, e) {
        return f(t).find(e)
    }, Y.prototype.fieldValue = function(t, e, i) {
        var n, r = this.field(t, e).val();
        switch (i) {
            case "integer":
                n = ke.parseInt(r, null);
                break;
            default:
                n = r
        }
        return n
    };
    var U = new Y;

    function $() {}
    $.prototype.getQuantity = function(t, e) {
        var i = U.fieldValue(t, e, "integer");
        return i = null === i ? 1 : i, Math.abs(i)
    }, $.prototype.setQuantity = function(t, e, i) {
        var n = U.field(t, i),
            r = ke.parseInt(n.attr("maxlength"), 3),
            o = 9;
        for (r = 0 < r ? r : 1; 1 < r;) o = 10 * o + 9, r--;
        var a = o < e ? o : e;
        return a = a < 1 ? 1 : a, n.val(a), a
    };
    var K = new $;

    function Z() {}
    Z.prototype.parse = function(t, e) {
        return t.responseJSON && t.responseJSON.description ? t.responseJSON.description : e
    };
    var X = new Z;

    function J() {}
    J.prototype.supportFormData = function() {
        return "function" == typeof rr.FormData && "function" == typeof(new rr.FormData).append
    };
    var Q = new J;

    function tt() {}
    tt.prototype.searchQueryParams = function(t) {
        return (t || rr.location.search).replace(/(^\?)/, "").split("&").map(function(t) {
            var e = t.split("="),
                i = e[0];
            return i && "" !== i && (this[i] = e[1]), this
        }.bind({}))[0]
    }, tt.prototype.searchParamByName = function(t, e) {
        return this.searchQueryParams(e)[t]
    }, tt.prototype.searchParamsByPattern = function(t, e) {
        var i = this.searchQueryParams(e),
            n = new RegExp(t),
            r = {};
        return Object.keys(i).filter(function(t) {
            return ("" + t).match(n)
        }).forEach(function(t) {
            r[t] = i[t]
        }), r
    }, tt.prototype.urlHasParams = function(t) {
        return /\?/.test(t)
    }, tt.prototype.urlWithParamsDelimiter = function(t) {
        return this.urlHasParams(t) ? t + "&" : t + "?"
    }, tt.prototype.mailToLink = function(t) {
        return /^mailto:/.test("" + t)
    }, tt.prototype.telLink = function(t) {
        return /^tel:/.test("" + t)
    }, tt.prototype.isCurrentPageUrl = function(t) {
        var e = or.createElement("a");
        return e.href = "" + t, [e.protocol, e.hostname, e.pathname, e.search].join("") === [rr.location.protocol, rr.location.hostname, rr.location.pathname, rr.location.search].join("")
    };
    var et = new tt;

    function it() {}
    it.prototype.parseSectionData = function(t, e, i) {
        var n;
        for (n in t)
            if (t.hasOwnProperty(n))
                if (e.hasOwnProperty(n)) {
                    var r, o = e[n];
                    if (W.isObject(o) && W.isObject(t[n])) i[n] = {}, this.parseSectionData(t[n], e[n], i[n]);
                    else {
                        switch (o) {
                            case "url_decode":
                                r = this.parseUrlDecodeParam(t[n]);
                                break;
                            default:
                                r = t[n]
                        }
                        i[n] = r
                    }
                } else i[n] = t[n]
    }, it.prototype.parseInputData = function(t, e) {
        var i = {};
        return this.parseSectionData(t, e, i), i
    }, it.prototype.filterDataParams = function(t, e) {
        var i = {},
            n = this;
        return t.forEach(function(t) {
            e.hasOwnProperty(t.key) ? t.hasOwnProperty("nestedKeys") ? i[t.key] = n.filterDataParams(t.nestedKeys, e[t.key]) : i[t.key] = void 0 !== e[t.key] ? e[t.key] : t.defaultValue : i[t.key] = t.defaultValue
        }), i
    }, it.prototype.parseUrlDecodeParam = function(t) {
        return decodeURI(t)
    };
    var nt = new it;

    function rt() {}
    rt.prototype.triggerElementEvent = function(t, e, i, n) {
        var r;
        if (or.createEventObject) return r = or.createEventObject(), t.fireEvent("on" + e, r);
        var o = -1 < ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu"].indexOf(e) ? "MouseEvents" : "HTMLEvents",
            a = null == i || !!i,
            s = null == n || !!n;
        return (r = or.createEvent(o)).initEvent(e, a, s), r.synthetic = !0, !t.dispatchEvent(r, !0)
    };
    var ot = new rt;

    function at() {}
    at.prototype.getCart = function() {
        return f.ajax({
            url: this.uncachedAjaxCartURL(),
            method: "get",
            dataType: "json"
        })
    }, at.prototype.addToCart = function(t) {
        if (ke.parseInt(t.serializedForm.quantity, 0) < 1) return f.Deferred().resolve({
            requestAborted: !0
        });
        var e = {
                url: this.ajaxAddToCartURL(),
                method: "post",
                dataType: "json",
                data: t.formData
            },
            i = f.extend(e, t.additionalRequestOptions || {});
        return f.ajax(i)
    }, at.prototype.uncachedAjaxCartURL = function() {
        return this.ajaxCartURL() + "?_=" + (new Date).valueOf()
    }, at.prototype.ajaxCartURL = function() {
        return pt.getRoute("cart", "index", "/cart") + ".js"
    }, at.prototype.ajaxAddToCartURL = function() {
        return pt.getRoute("cart", "add", "/cart/add") + ".js"
    }, at.prototype.cartURL = function() {
        return pt.getRoute("cart", "index", "/cart")
    };
    var st = new at;

    function ct() {}
    ct.prototype.update = function() {
        var e = f(St.itemSelector("cartItemsCount"));
        0 < e.length && st.getCart().then(function(t) {
            e.text(t.item_count)
        })
    };
    var lt = new ct;

    function ut() {}
    ut.prototype.getItem = function(t) {
        var e = or.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return e ? decodeURIComponent(e[1]) : void 0
    }, ut.prototype.setItem = function(t, e, i) {
        var n = (i = i || {}).expires,
            r = void 0 === i.encodeValue || i.encodeValue;
        if ("number" == typeof n && n) {
            var o = new Date;
            o.setTime(o.getTime() + 1e3 * n), n = i.expires = o
        }
        n && n.toUTCString && (i.expires = n.toUTCString());
        var a = t + "=" + (e = r ? encodeURIComponent(e) : e);
        for (var s in i)
            if (i.hasOwnProperty(s)) {
                a += "; " + s;
                var c = i[s];
                !0 !== c && (a += "=" + c)
            } or.cookie = a
    }, ut.prototype.removeItem = function(t) {
        this.setItem(t, "", {
            expires: -1
        })
    };
    var dt = new ut;

    function ht() {}
    ht.prototype.getRoute = function(t, e, i) {
        return ((rr.ZipifyPages && rr.ZipifyPages.routes || {})[t] || {})[e] || i
    };
    var pt = new ht;

    function ft() {
        this.events = {}
    }
    ft.prototype.subscribe = function(t, e, i) {
        return "function" == typeof e && (this.events[t] = this.events[t] || [], this.events[t].push(e.bind(i)), !0)
    }, ft.prototype.transform = function(t, e) {
        var i = this.events[t] || [];
        if (i.length < 1) return f.Deferred().resolve(e);
        var n = i.slice(0);

        function r(t) {
            return n.length < 1 ? t : o(t)
        }

        function o(t) {
            return n.shift()(t).then(r, r)
        }
        return o(e)
    };
    var mt = new ft;

    function gt(t) {
        this.$el = t, this.model = {}, this.initModel(), this.sentCount = 0, this.tpl = {
            email: this.$el.find("[data-sign-up-input]"),
            signUp: this.$el.find("[data-sign-up-link]")
        }, this.listenEvents()
    }

    function yt(t) {
        this.$el = f(t), this.formContainer = this.$el.parent().find("[data-form-content]"), this.formElement = this.formContainer.find("[data-show-in-popup]"), this.listenEvents()
    }
    gt.prototype = {
        listenEvents: function() {
            var e = this;
            this.tpl.email.on("change", function(t) {
                e.model.email = t.target.value
            }), this.tpl.email.on("keyup", function(t) {
                13 === t.keyCode && e.sendSignUpRequest()
            }), this.tpl.signUp.on("click", function(t) {
                t.preventDefault(), e.sendSignUpRequest()
            })
        },
        initModel: function() {
            this.model.page = Pe, this.model.blockId = this.$el.data("id")
        },
        sendSignUpRequest: function() {
            this.model.email && this.model.email.match(/^\S+@\S+$/) ? 3 <= this.sentCount ? alert("You had sent this form three times already!") : this.loading || (this.loading = !0, f.ajax({
                type: "POST",
                url: this.model.page.domain + "/subscribe",
                dataType: "json",
                data: {
                    page_id: this.model.page.id,
                    block_id: this.model.blockId,
                    email: this.model.email
                }
            }).done(function(t) {
                this.loading = !1, "success" === t.status ? (this.sentCount++, this.model.email = "", this.tpl.email.val(""), alert(t.data.msg)) : alert("Error : " + t.data)
            }.bind(this)).fail(function(t) {
                this.loading = !1, alert(t.statusText)
            }.bind(this))) : alert("Please input a valid email")
        }
    }, yt.prototype.listenEvents = function() {
        var n = this;
        this.$el.on("click", function(t) {
            var e, i;
            t.preventDefault(), this.formElement.detach(), Oe.append(this.formElement), e = "form-popup", i = {
                afterClose: function() {
                    n.formElement.detach(), n.formContainer.append(n.formElement)
                }
            }, i = f.extend({
                href: "#" + e,
                closeBtn: !1,
                padding: 0,
                zIndex: 1e4,
                enableEscapeButton: !0,
                helpers: {
                    overlay: {
                        locked: !0,
                        closeClick: !1
                    }
                }
            }, i || {}), f.fancybox(i)
        }.bind(this))
    };
    var vt = {};

    function bt() {
        this.itemSelectorsList = {
            productImage: "[data-zp-product-image]",
            addToCart: "[data-zp-add-to-cart]",
            productPrice: "[data-zp-product-price]",
            productPriceWrapper: "[data-zp-product-price-wrapper]",
            comparePrice: "[data-zp-product-compare-price]",
            productDiscountPrice: "[data-zp-product-discount-price]",
            productDiscountDifference: "[data-zp-product-discount-difference]",
            productDiscountDifferenceWrapper: "[data-zp-product-discount-difference-wrapper]",
            addToCartText: "[data-zp-add-to-cart-text]",
            addToCartForm: "[data-zp-add-to-cart-form]",
            productMessages: "[data-zp-product-messages]",
            productQuantity: "[data-zp-product-quantity]",
            productIncreaseQuantity: "[data-zp-product-increase-qty]",
            productDecreaseQuantity: "[data-zp-product-decrease-qty]",
            cartItemsCount: "[data-cart-item-count]",
            productRedirectLink: "[data-zp-product-redirect-link]",
            productImageLoader: "[data-zp-image-loader]",
            productVariantImagePreloader: "data-zp-variant-image",
            productQuantityField: '[name="quantity"]:eq(0)',
            productDiscountField: '[name="discount"]:eq(0)',
            crossSellQuantity: "[data-zp-cross-sell-quantity]",
            crossSellIncreaseQuantity: "[data-zp-cross-sell-increase-qty]",
            crossSellDecreaseQuantity: "[data-zp-cross-sell-decrease-qty]",
            crossSellImage: "[data-zp-cross-sell-image]",
            crossSellPrice: "[data-zp-cross-sell-price]",
            crossSellPriceWrapper: "[data-zp-cross-sell-price-wrapper]",
            crossSellComparePrice: "[data-zp-cross-sell-compare-price]",
            crossSellDiscountPrice: "[data-zp-cross-sell-discount-price]",
            crossSellDiscountDifference: "[data-zp-cross-sell-discount-difference]",
            crossSellDiscountDifferenceWrapper: "[data-zp-cross-sell-discount-difference-wrapper]",
            crossSellAddToCartSelector: "[data-zp-cross-sell-addtocart]",
            crossSellInventoryMessages: "[data-zp-cross-sell-inventory-messages]",
            crossSellAddToCartMessages: "[data-zp-cross-sell-messages]",
            crossSellField: "[data-zp-cross-sell-field]"
        }
    }
    vt.each = function(t, e) {
        for (var i = 0; i < t.length; i++) e(t[i], i)
    }, vt.map = function(t, e) {
        for (var i = [], n = 0; n < t.length; n++) i.push(e(t[n], n));
        return i
    }, vt.arrayIncludes = function(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] == e) return !0;
        return !1
    }, vt.uniq = function(t) {
        for (var e = [], i = 0; i < t.length; i++) vt.arrayIncludes(e, t[i]) || e.push(t[i]);
        return e
    }, vt.isDefined = function(t) {
        return void 0 !== t
    }, vt.getClass = function(t) {
        return Object.prototype.toString.call(t).slice(8, -1)
    }, vt.extend = function(t, e) {
        function i() {}
        i.prototype = e.prototype, t.prototype = new i, (t.prototype.constructor = t).baseConstructor = e, t.superClass = e.prototype
    }, vt.locationSearch = function() {
        return rr.location.search
    }, vt.locationHash = function() {
        return rr.location.hash
    }, vt.replaceState = function(t) {
        rr.history.replaceState({}, or.title, t)
    }, vt.urlParam = function(t) {
        var e = RegExp("[?&]" + t + "=([^&#]*)").exec(vt.locationSearch());
        return e && decodeURIComponent(e[1].replace(/\+/g, " "))
    }, vt.newState = function(t, e) {
        return (vt.urlParam(t) ? vt.locationSearch().replace(RegExp("(" + t + "=)[^&#]+"), "$1" + e) : "" === vt.locationSearch() ? "?" + t + "=" + e : vt.locationSearch() + "&" + t + "=" + e) + vt.locationHash()
    }, vt.setParam = function(t, e) {
        vt.replaceState(vt.newState(t, e))
    }, vt.Product = function(t) {
        vt.isDefined(t) && this.update(t)
    }, vt.Product.prototype.update = function(t) {
        for (property in t) this[property] = t[property]
    }, vt.Product.prototype.optionNames = function() {
        return "Array" == vt.getClass(this.options) ? this.options : []
    }, vt.Product.prototype.optionValues = function(i) {
        if (!vt.isDefined(this.variants)) return null;
        var t = vt.map(this.variants, function(t) {
            var e = "option" + (i + 1);
            return null == t[e] ? null : t[e]
        });
        return null == t[0] ? null : vt.uniq(t)
    }, vt.Product.prototype.getVariant = function(n) {
        var r = null;
        return n.length != this.options.length || vt.each(this.variants, function(t) {
            for (var e = !0, i = 0; i < n.length; i++) t["option" + (i + 1)] != n[i] && (e = !1);
            1 != e || (r = t)
        }), r
    }, vt.Product.prototype.getVariantById = function(t) {
        for (var e = 0; e < this.variants.length; e++) {
            var i = this.variants[e];
            if (t == i.id) return i
        }
        return null
    }, vt.money_format = "${{amount}}", vt.formatMoney = function(t, e) {
        function o(t, e) {
            return void 0 === t ? e : t
        }

        function i(t, e, i, n) {
            if (e = o(e, 2), i = o(i, ","), n = o(n, "."), isNaN(t) || null == t) return 0;
            var r = (t = (t / 100).toFixed(e)).split(".");
            return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (r[1] ? n + r[1] : "")
        }
        "string" == typeof t && (t = t.replace(".", ""));
        var n = "",
            r = /\{\{\s*(\w+)\s*\}\}/,
            a = e || this.money_format;
        switch (a.match(r)[1]) {
            case "amount":
                n = i(t, 2);
                break;
            case "amount_no_decimals":
                n = i(t, 0);
                break;
            case "amount_with_comma_separator":
                n = i(t, 2, ".", ",");
                break;
            case "amount_with_space_separator":
                n = i(t, 2, " ", ",");
                break;
            case "amount_with_period_and_space_separator":
                n = i(t, 2, " ", ".");
                break;
            case "amount_no_decimals_with_comma_separator":
                n = i(t, 0, ".", ",");
                break;
            case "amount_no_decimals_with_space_separator":
                n = i(t, 0, " ");
                break;
            case "amount_with_apostrophe_separator":
                n = i(t, 2, "'", ".")
        }
        return a.replace(r, n)
    }, vt.OptionSelectors = function(t, e) {
        return this.selectorDivClass = "selector-wrapper", this.selectorClass = "single-option-selector", this.variantIdFieldIdSuffix = "-variant-id", this.variantIdField = null, this.historyState = null, this.selectors = [], this.domIdPrefix = t, this.product = new vt.Product(e.product), this.onVariantSelected = vt.isDefined(e.onVariantSelected) ? e.onVariantSelected : function() {}, this.replaceSelector(t), this.initDropdown(), e.enableHistoryState && (this.historyState = new vt.OptionSelectors.HistoryState(this)), !0
    }, vt.OptionSelectors.prototype.initDropdown = function() {
        var t = {
            initialLoad: !0
        };
        if (!this.selectVariantFromDropdown(t)) {
            var e = this;
            setTimeout(function() {
                e.selectVariantFromParams(t) || e.fireOnChangeForFirstDropdown.call(e, t)
            })
        }
    }, vt.OptionSelectors.prototype.fireOnChangeForFirstDropdown = function(t) {
        this.selectors[0].element.onchange(t)
    }, vt.OptionSelectors.prototype.selectVariantFromParamsOrDropdown = function(t) {
        this.selectVariantFromParams(t) || this.selectVariantFromDropdown(t)
    }, vt.OptionSelectors.prototype.replaceSelector = function(t) {
        var e = or.getElementById(t),
            i = e.parentNode;
        vt.each(this.buildSelectors(), function(t) {
            i.insertBefore(t, e)
        }), e.style.display = "none", this.variantIdField = e
    }, vt.OptionSelectors.prototype.selectVariantFromDropdown = function(t) {
        var e = or.getElementById(this.domIdPrefix).querySelector("[selected]");
        if (e || (e = or.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')), !e) return !1;
        var i = e.value;
        return this.selectVariant(i, t)
    }, vt.OptionSelectors.prototype.selectVariantFromParams = function(t) {
        var e = vt.urlParam("variant");
        return this.selectVariant(e, t)
    }, vt.OptionSelectors.prototype.selectVariant = function(t, e) {
        var i = this.product.getVariantById(t);
        if (null == i) return !1;
        for (var n = 0; n < this.selectors.length; n++) {
            var r = this.selectors[n].element,
                o = i[r.getAttribute("data-option")];
            null != o && this.optionExistInSelect(r, o) && (r.value = o)
        }
        return void 0 !== a ? a(this.selectors[0].element).trigger("change", e) : this.selectors[0].element.onchange(e), !0
    }, vt.OptionSelectors.prototype.optionExistInSelect = function(t, e) {
        for (var i = 0; i < t.options.length; i++)
            if (t.options[i].value == e) return !0
    }, vt.OptionSelectors.prototype.insertSelectors = function(t, e) {
        vt.isDefined(e) && this.setMessageElement(e), this.domIdPrefix = "product-" + this.product.id + "-variant-selector";
        var i = or.getElementById(t);
        vt.each(this.buildSelectors(), function(t) {
            i.appendChild(t)
        })
    }, vt.OptionSelectors.prototype.buildSelectors = function() {
        for (var t = 0; t < this.product.optionNames().length; t++) {
            var e = new vt.SingleOptionSelector(this, t, this.product.optionNames()[t], this.product.optionValues(t));
            e.element.disabled = !1, this.selectors.push(e)
        }
        var n = this.selectorDivClass,
            r = this.product.optionNames();
        return vt.map(this.selectors, function(t) {
            var e = or.createElement("div");
            if (e.setAttribute("class", n), 1 < r.length) {
                var i = or.createElement("label");
                i.htmlFor = t.element.id, i.innerHTML = t.name, e.appendChild(i)
            }
            return e.appendChild(t.element), e
        })
    }, vt.OptionSelectors.prototype.selectedValues = function() {
        for (var t = [], e = 0; e < this.selectors.length; e++) {
            var i = this.selectors[e].element.value;
            t.push(i)
        }
        return t
    }, vt.OptionSelectors.prototype.updateSelectors = function(t, e) {
        var i = this.selectedValues(),
            n = this.product.getVariant(i);
        n ? (this.variantIdField.disabled = !1, this.variantIdField.value = n.id) : this.variantIdField.disabled = !0, this.onVariantSelected(n, this, e), null != this.historyState && this.historyState.onVariantChange(n, this, e)
    }, vt.OptionSelectorsFromDOM = function(t, e) {
        var i = e.optionNames || [],
            n = e.priceFieldExists || !0,
            r = e.delimiter || "/",
            o = this.createProductFromSelector(t, i, n, r);
        e.product = o, vt.OptionSelectorsFromDOM.baseConstructor.call(this, t, e)
    }, vt.extend(vt.OptionSelectorsFromDOM, vt.OptionSelectors), vt.OptionSelectorsFromDOM.prototype.createProductFromSelector = function(t, o, a, s) {
        if (!vt.isDefined(a)) a = !0;
        if (!vt.isDefined(s)) s = "/";
        var e = or.getElementById(t),
            i = e.childNodes,
            c = (e.parentNode, o.length),
            l = [];
        vt.each(i, function(t) {
            if (1 == t.nodeType && "option" == t.tagName.toLowerCase()) {
                var e = t.innerHTML.split(new RegExp("\\s*\\" + s + "\\s*"));
                0 == o.length && (c = e.length - (a ? 1 : 0));
                var i = e.slice(0, c),
                    n = a ? e[c] : "",
                    r = (t.getAttribute("value"), {
                        available: !t.disabled,
                        id: parseFloat(t.value),
                        price: n,
                        option1: i[0],
                        option2: i[1],
                        option3: i[2]
                    });
                l.push(r)
            }
        });
        var n = {
            variants: l
        };
        if (0 == o.length) {
            n.options = [];
            for (var r = 0; r < c; r++) n.options[r] = "option " + (r + 1)
        } else n.options = o;
        return n
    }, vt.SingleOptionSelector = function(i, n, t, e) {
        this.multiSelector = i, this.values = e, this.index = n, this.name = t, this.element = or.createElement("select");
        for (var r = 0; r < e.length; r++) {
            var o = or.createElement("option");
            o.value = e[r], o.innerHTML = e[r], this.element.appendChild(o)
        }
        return this.element.setAttribute("class", this.multiSelector.selectorClass), this.element.setAttribute("data-option", "option" + (n + 1)), this.element.id = i.domIdPrefix + "-option-" + n, this.element.onchange = function(t, e) {
            e = e || {}, i.updateSelectors(n, e)
        }, !0
    }, vt.Image = {
        preload: function(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                this.loadImage(this.getSizedImageUrl(n, e))
            }
        },
        loadImage: function(t) {
            (new Image).src = t
        },
        switchImage: function(t, e, i) {
            if (t && e) {
                var n = this.imageSize(e.src),
                    r = this.getSizedImageUrl(t.src, n);
                i ? i(r, t, e) : e.src = r
            }
        },
        imageSize: function(t) {
            var e = t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
            return null !== e ? e[1] : null
        },
        getSizedImageUrl: function(t, e) {
            if (null == e) return t;
            if ("master" == e) return this.removeProtocol(t);
            var i = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
            if (null == i) return null;
            var n = t.split(i[0]),
                r = i[0];
            return this.removeProtocol(n[0] + "_" + e + r)
        },
        removeProtocol: function(t) {
            return t.replace(/http(s)?:/, "")
        }
    }, vt.OptionSelectors.HistoryState = function(t) {
        this.browserSupports() && this.register(t)
    }, vt.OptionSelectors.HistoryState.prototype.register = function(t) {
        rr.addEventListener("popstate", function() {
            t.selectVariantFromParamsOrDropdown({
                popStateCall: !0
            })
        })
    }, vt.OptionSelectors.HistoryState.prototype.onVariantChange = function(t, e, i) {
        this.browserSupports() && (!t || i.initialLoad || i.popStateCall || vt.setParam("variant", t.id))
    }, vt.OptionSelectors.HistoryState.prototype.browserSupports = function() {
        return rr.history && rr.history.replaceState
    }, bt.prototype.itemSelector = function(t) {
        return this.itemSelectorsList[t]
    }, bt.prototype.firstProductVariant = function(t) {
        return t && W.isArray(t.variants) ? t.variants[0] : null
    }, bt.prototype.shopifyFormatPrice = function(t) {
        return (Number(t || 0) / 100).toFixed(2)
    }, bt.prototype.findVariantById = function(t, e) {
        var i = e ? ("" + e).trim() : null;
        return t && W.isArray(t.variants) && i ? t.variants.filter(function(t) {
            return ("" + t.id).trim() === i
        })[0] : null
    }, bt.prototype.productAvailable = function(t) {
        if (!t || !W.isArray(t.variants)) return !1;
        for (var e = !1, i = 0; i < t.variants.length; i++)
            if (t.variants[i].available) {
                e = !0;
                break
            } return e
    };
    var St = new bt;

    function At(t) {
        this.multiSelector = t.multiSelector, this.values = t.values, this.index = t.index, this.name = t.name, this.labelInside = t.labelInside, this.element = or.createElement("select"), this.eventsBinded = !1, this.build()
    }

    function _t(t) {
        vt.OptionSelectors.HistoryState.call(this, t)
    }((At.prototype = Object.create(vt.SingleOptionSelector.prototype)).constructor = At).prototype.build = function() {
        this.updateOptionsList(this.values), this.assignAttributes(), this.bindEvents()
    }, At.prototype.updateOptionsList = function(t, e) {
        var i, n, r, o = "" + e,
            a = "";
        this.element.innerHTML = "", r = this.labelInside ? ((i = or.createElement("optgroup")).setAttribute("label", this.name), i) : this.element;
        for (var s = 0; s < t.length; s++) a = "" + t[s], (n = or.createElement("option")).value = a, o === (n.innerHTML = a) && n.setAttribute("selected", "selected"), r.appendChild(n);
        this.labelInside && this.element.appendChild(i)
    }, At.prototype.assignAttributes = function() {
        this.element.setAttribute("class", this.multiSelector.selectorClass), this.element.setAttribute("data-option", "option" + (this.index + 1)), this.element.id = this.multiSelector.domIdPrefix + "-option-" + this.index
    }, At.prototype.bindEvents = function() {
        if (!this.eventsBinded) {
            var n = this;
            this.element.onchange = function(t, e) {
                var i = e || {};
                n.multiSelector.updateSelectors(t, n.index, i)
            }
        }
    }, ((_t.prototype = Object.create(vt.OptionSelectors.HistoryState.prototype)).constructor = _t).prototype.onVariantChange = function(t, e, i) {};
    var wt = Object.create(vt.Image);

    function Ct(t) {
        vt.Product.call(this, t)
    }

    function kt(t, e) {
        this.selectorView = e.variantSelectorView, this.showLabel = e.showVariantLabel, this.selectorDivClass = "zpa-selector-wrapper zpa-buybox__variant__item--xs", this.selectorClass = this.selectorClasses(), this.variantIdFieldIdSuffix = "-variant-id", this.variantIdField = null, this.historyState = null, this.selectors = [], this.domIdPrefix = t, this.labelClasses = e.variantLabelClasses, this.assignProduct(e.product), this.onVariantSelected = vt.isDefined(e.onVariantSelected) ? e.onVariantSelected : function() {}, this.replaceSelector(t), this.initDropdown(), e.enableHistoryState && (this.historyState = new _t(this))
    }

    function Tt(t) {
        this.eventEmitter = t.eventEmitter, this.optionsCount = t.optionsCount, this.parentsValues = [], this.selectedOption = t.selectedOption, At.call(this, t)
    }

    function xt(t) {
        Ct.call(this, t)
    }

    function Et(t, e) {
        kt.call(this, t, e)
    }

    function Mt() {}

    function Dt() {}

    function Pt() {}

    function Ot() {}

    function Lt() {}

    function zt() {}

    function It() {}

    function Nt() {}

    function Bt() {}

    function Rt() {}

    function jt() {}

    function qt() {}

    function Ht() {}

    function Ft() {}

    function Vt() {}

    function Wt() {}

    function Gt() {}

    function Yt() {}

    function Ut() {}

    function $t() {
        this.trackedProducts = []
    }

    function Kt() {}

    function Zt() {}

    function Xt(t) {
        this.currency = t
    }

    function Jt(t) {
        $t.call(this), this.request = t, this.eventType = "Viewed Product"
    }

    function Qt(t) {
        this.request = t, this.subscribed = !1, this.eventType = "Added Product"
    }

    function te(t) {
        var e = new Xt(t);
        this.productTracker = new Jt(e), this.cartTracker = new Qt(e), this.subscribeToActions()
    }

    function ee(t, e) {
        this.url = "https://app.redretarget.com/sapp/zipify", this.shopDomain = t, this.currency = e
    }

    function ie(t) {
        $t.call(this), this.request = t, this.eventType = "ViewContent"
    }

    function ne(t) {
        this.request = t, this.subscribed = !1, this.eventType = "AddToCart"
    }

    function re(t) {
        this.request = t, this.subscribed = !1, this.eventType = "InitiateCheckout"
    }

    function oe(t, e) {
        var i = new ee(t, e);
        this.productTracker = new ie(i), this.checkoutTracker = new re(i), this.cartTracker = new ne(i), this.subscribeToActions()
    }

    function ae() {
        this.productsQueue = [], this.availableTrackers = [], this.initialized = !1
    }

    function se() {
        this.initialized = !1
    }

    function ce() {
        this.initialized = !1
    }

    function le() {
        this.initialized = !1
    }

    function ue() {
        this.initialized = !1
    }

    function de() {}
    wt.getRightSizedImageUrl = function(t, e) {
        if (this.imageSize(t)) return t;
        var i = this.getSizedImageUrl(t, e);
        return i || t
    }, wt.getImageSrcSet = function(t, e) {
        if (!W.isArray(e) || e.length < 1) return null;
        for (var i = [], n = 0; n < e.length; n++) i.push(this.getRightSizedImageUrl(t, e[n].filter) + " " + e[n].screen);
        return i.join(",")
    }, ((Ct.prototype = Object.create(vt.Product.prototype)).constructor = Ct).prototype.hasSingleVariant = function() {
        return W.isArray(this.variants) && 1 === this.variants.length
    }, ((kt.prototype = Object.create(vt.OptionSelectors.prototype)).constructor = kt).prototype.updateSelectors = function(t, e, i) {
        var n = this.selectedValues(),
            r = this.product.getVariant(n);
        r ? (this.variantIdField.disabled = !1, this.variantIdField.value = r.id) : this.variantIdField.disabled = !0, this.onVariantSelected(r, this, i, t), null != this.historyState && this.historyState.onVariantChange(r, this, i, t)
    }, kt.prototype.buildSelectors = function() {
        this.buildAllSingleOptionSelectors();
        var e = this,
            i = this.product.optionNames();
        return vt.map(this.selectors, function(t) {
            return e.buildSingleSelectorWrapper(t, i)
        })
    }, kt.prototype.buildSingleSelectorWrapper = function(t, e) {
        var i = this.buildSelectorWrapper();
        if (this.showLabel && 0 < e.length) {
            var n = this.variantSelectorLabelName(t.name),
                r = this.buildSelectorLabel(t.element.id, n);
            i.appendChild(r)
        }
        return i.appendChild(t.element), i
    }, kt.prototype.buildAllSingleOptionSelectors = function() {
        for (var t = 0; t < this.product.optionNames().length; t++) {
            var e = new At({
                multiSelector: this,
                index: t,
                name: this.product.optionNames()[t],
                values: this.product.optionValues(t),
                labelInside: this.useLabelInsideView()
            });
            e.element.disabled = !1, this.selectors.push(e)
        }
    }, kt.prototype.selectorClasses = function() {
        return this.useHorizontalView(), "zpa-single-option-selector zpa-single-option-selector--xs noreplace"
    }, kt.prototype.assignProduct = function(t) {
        this.product = new Ct(t)
    }, kt.prototype.buildSelectorWrapper = function() {
        var t = (this.selectorDivClass + " " + this.selectorWrapperClasses()).trim();
        t += this.product.hasSingleVariant() ? " hidden" : "";
        var e = or.createElement("div");
        return e.setAttribute("data-options-selector", ""), e.setAttribute("class", t), e
    }, kt.prototype.selectorWrapperClasses = function() {
        return this.useHorizontalView() ? "zpa-offset-bottom-xs" : ""
    }, kt.prototype.buildSelectorLabel = function(t, e) {
        var i = or.createElement("label");
        i.htmlFor = t, i.innerHTML = e;
        var n = (this.selectorLabelClasses() + " " + this.labelClasses).trim();
        return n && i.setAttribute("class", n), i
    }, kt.prototype.selectorLabelClasses = function() {
        return this.useHorizontalView() ? "zpa-buybox__label zpa-offset-right-sm" : ""
    }, kt.prototype.variantSelectorLabelName = function(t) {
        var e = ("" + t).trim();
        return this.useHorizontalView() ? ":" === e.slice(-1) ? e : e + ":" : e
    }, kt.prototype.useHorizontalView = function() {
        return "hz" === this.selectorView
    }, kt.prototype.useLabelInsideView = function() {
        return "in" === this.selectorView
    }, ((Tt.prototype = Object.create(At.prototype)).constructor = Tt).prototype.build = function() {
        if (0 === this.index) this.updateOptionsList(Object.keys(this.values), this.selectedOption);
        else {
            var t = this.triggerEventName(this.index - 1);
            this.eventEmitter.subscribe(t, this.onPreviousSelectorChange, this)
        }
        this.assignAttributes(), this.bindEvents()
    }, Tt.prototype.bindEvents = function() {
        if (!this.eventsBinded) {
            var a = this;
            this.element.onchange = function(t, e) {
                var i = e || {},
                    n = a.triggerEventName(a.index),
                    r = W.isArray(a.parentsValues) ? a.parentsValues : [],
                    o = a.eventEmitter.emit(n, {
                        values: r.concat([this.value]),
                        index: a.index
                    });
                a.index === a.optionsCount - 1 && o.then(a.multiSelector.updateSelectors.bind(a.multiSelector, t, a.index, i), a.multiSelector.updateSelectors.bind(a.multiSelector, t, a.index, i))
            }
        }
    }, Tt.prototype.triggerEventName = function(t) {
        return "option" + t + "Changed"
    }, Tt.prototype.onPreviousSelectorChange = function(t) {
        var e = t.values;
        if (W.isArray(e) && t.index + 1 === e.length) {
            for (var i, n, r = 0; r < e.length; r++)
                if (n = e[r], !(i = i ? i[n] : this.values[n])) {
                    i = null;
                    break
                } i = null === i ? [] : i, i = W.isObject(i) ? Object.keys(i) : i, i = W.isArray(i) ? i : [], this.updateOptionsList(i, this.selectedOption), this.selectedOption = [], this.parentsValues = e, ot.triggerElementEvent(this.element, "change")
        }
    }, ((xt.prototype = Object.create(Ct.prototype)).constructor = xt).prototype.nestedOptionsValues = function() {
        for (var t, e, i, n, r, o = {}, a = this.options.length, s = Math.floor(a / 3), c = 0, l = this.variants.length; c < l; c++)
            for (t = this.variants[c], e = null, r = 1; r <= a; r++) i = s < r ? [] : {}, n = t["option" + r], e = e || o[n], 1 === r && e || (W.isArray(e) ? e.push(n) : e = W.isObject(e) ? (e[n] = e[n] ? e[n] : i, e[n]) : (o[n] = i, o[n]));
        return o
    }, ((Et.prototype = Object.create(kt.prototype)).constructor = Et).prototype.buildAllSingleOptionSelectors = function() {
        for (var t = this.product.nestedOptionsValues(), e = new s, i = this.product.options.length, n = this.selectedVariantOptions(), r = 0; r < i; r++) {
            var o = new Tt({
                multiSelector: this,
                index: r,
                name: this.product.optionNames()[r],
                values: t,
                eventEmitter: e,
                optionsCount: i,
                selectedOption: n[r],
                labelInside: this.useLabelInsideView()
            });
            o.element.disabled = !1, this.selectors.push(o)
        }
    }, Et.prototype.assignProduct = function(t) {
        this.product = new xt(t)
    }, Et.prototype.getSelectedVariantFromDropdown = function() {
        var t = or.getElementById(this.domIdPrefix).querySelector('[selected="selected"]');
        return t ? this.product.getVariantById(t.value) : null
    }, Et.prototype.selectedVariantOptions = function() {
        var t = this.getSelectedVariantFromDropdown();
        if (t) {
            for (var e = [], i = 1; i <= this.product.options.length; i++) e.push(t["option" + i]);
            return e
        }
        return []
    }, Mt.prototype.init = function(t) {
        this.$form = t.form, this.$redirectLink = this.$form.find(St.itemSelector("productRedirectLink")), this.redirectUrl = this.$redirectLink.attr("href") || st.cartURL(), this.openInNewTab = "_blank" === this.$redirectLink.attr("target"), this.redirectTimeout = 100, this.redirectWithUrlParams = this.$form.data("zp-redirect-with-url-params") || !1
    }, Mt.prototype.goToCart = function() {
        var t = {
            cartUrl: st.cartURL()
        };
        mt.transform("productAddAndSkipCart", t).then(this.redirectToCartOnSuccessSkipCartData.bind(this, t), this.redirectToCartOnErrorSkipCartData.bind(this, t))
    }, Mt.prototype.redirectToCartOnSuccessSkipCartData = function(t, e) {
        this.redirectToURL({
            url: e.cartUrl || t.cartUrl
        })
    }, Mt.prototype.redirectToCartOnErrorSkipCartData = function(t) {
        this.redirectToURL({
            url: t.cartUrl
        })
    }, Mt.prototype.goToCartExternal = function(t) {
        var e = this.openInNewTab ? {
            timeout: 500
        } : {};
        return t.then(this.redirectToURL.bind(this, e)).then(this.enableAddToCartButtonAfterRedirect.bind(this))
    }, Mt.prototype.enableAddToCartButtonAfterRedirect = function(t) {
        var e = et.mailToLink(t.url) || et.telLink(t.url),
            i = et.isCurrentPageUrl(t.url);
        return this.openInNewTab || e || i ? {
            enableAddToCartButton: !0
        } : {}
    }, Mt.prototype.goToCheckout = function(t) {
        mt.transform("productGoToCheckoutURL", t).then(this.redirectToCheckoutOnSuccessCheckoutData.bind(this), this.redirectToCheckoutOnErrorCheckoutData.bind(this))
    }, Mt.prototype.redirectToCheckoutOnSuccessCheckoutData = function(t) {
        var e = f.extend({}, t);
        return e.url = t.checkoutUrl, e.withUrlParams = !1, this.redirectToURL(e)
    }, Mt.prototype.redirectToCheckoutOnErrorCheckoutData = function() {
        var t = this.prepareCheckoutRedirectData();
        return t.url = t.checkoutUrl, t.withUrlParams = !1, this.redirectToURL(t)
    }, Mt.prototype.redirectToURL = function(t) {
        var e = this.redirectURLOptions(t);
        return this.prepareRedirectUrl(e.url, e.urlParams).then(this.completeRedirect.bind(this, e), this.completeRedirect.bind(this, e))
    }, Mt.prototype.completeRedirect = function(t, e) {
        var i = this,
            n = f.Deferred();
        return this.$redirectLink.attr("href", e), setTimeout(function() {
            ot.triggerElementEvent(i.$redirectLink.get(0), "click", !1, !1), n.resolve(t)
        }, t.timeout), n
    }, Mt.prototype.redirectToExternalURL = function() {
        var t = this.redirectURLOptions();
        return this.redirectToURL(t).then(this.enableAddToCartButtonAfterRedirect.bind(this, t))
    }, Mt.prototype.prepareRedirectUrl = function(t, e) {
        var i = t;
        return W.isObject(e) && 0 < Object.keys(e).length && (i = et.urlWithParamsDelimiter(i) + f.param(e)), mt.transform("productGetRedirectLink", i).then(function(t) {
            return t
        }, function() {
            return i
        })
    }, Mt.prototype.prepareCheckoutRedirectData = function() {
        var t = et.searchParamsByPattern(/^utm_/),
            e = et.searchParamByName("discount"),
            i = this.$form.find(St.itemSelector("productDiscountField"));
        return 0 < i.length ? t.discount = i.val() : e && (t.discount = e), {
            checkoutUrl: "/checkout",
            urlParams: t
        }
    }, Mt.prototype.redirectURLOptions = function(t) {
        var e, i = W.isObject(t) ? t : {},
            n = W.isString(i.url) ? i.url : this.redirectUrl;
        e = (void 0 === i.withUrlParams ? this.redirectWithUrlParams : i.withUrlParams) ? i.urlParams ? i.urlParams : et.searchQueryParams() : {};
        var r = this.prepareDiscountDataFromRedirectData(i.urlParams);
        return e = f.extend(r, e), n = ("" + n).trim(), this.isRedirectUrlWithDiscount(n) && delete e.discount, {
            url: n,
            urlParams: e,
            timeout: i.timeout || this.redirectTimeout
        }
    }, Mt.prototype.prepareDiscountDataFromRedirectData = function(t) {
        var e = t && t.discount,
            i = {};
        if (e) i.discount = e;
        else {
            var n = et.searchQueryParams();
            n.discount && (i.discount = n.discount)
        }
        return i
    }, Mt.prototype.isRedirectUrlWithDiscount = function(t) {
        if (!t) return !1;
        var e = or.createElement("a");
        return e.href = "" + t, !!e.search && !!et.searchQueryParams(e.search).discount
    }, Dt.prototype.init = function(t) {
        this.$messageWrapper = t.wrapper.find(t.messageSelector), this.successClass = "product-success", this.errorClass = "product-error", this.displayTimeout = 6e3, this.messageTimeout = null
    }, Dt.prototype.showSuccessMessage = function() {
        var t = this.$messageWrapper.data("zp-success-message") || "Product has been added to cart";
        this.showMessage(decodeURI(t), !0)
    }, Dt.prototype.showMessage = function(t, e) {
        clearTimeout(this.messageTimeout);
        var i = e ? this.successClass : this.errorClass;
        this.$messageWrapper.text(t).addClass(i).removeClass("hidden");
        var n = this;
        this.messageTimeout = setTimeout(function() {
            n.hideMessage()
        }, this.displayTimeout)
    }, Dt.prototype.hideMessage = function() {
        this.$messageWrapper.addClass("hidden").removeClass(this.successClass).removeClass(this.errorClass)
    }, Pt.prototype.init = function(t) {
        this.$form = t.form, this.buttonSelector = t.buttonSelector, this.$button = this.$form.find(this.buttonSelector), this.$buttonText = this.$form.find(t.buttonTextSelector)
    }, Pt.prototype.isDisabled = function() {
        return !!this.$button.data("button-disabled")
    }, Pt.prototype.enableOnInit = function(t) {
        t && this.enable().removeAttr("disabled").prop("disabled", !1)
    }, Pt.prototype.enable = function() {
        var t = this.allButtons();
        return t.data("button-disabled", !1).removeClass("disabled zpa-btn-custom--loading"), t
    }, Pt.prototype.disable = function() {
        var t = this.allButtons();
        return t.data("button-disabled", !0).addClass("disabled zpa-btn-custom--loading"), t
    }, Pt.prototype.enableWithoutLocking = function() {
        this.allButtons().data("button-disabled", !1).removeClass("disabled").prop("disabled", !1)
    }, Pt.prototype.disableWithoutLocking = function() {
        this.allButtons().data("button-disabled", !0).addClass("disabled").prop("disabled", !0)
    }, Pt.prototype.updateText = function(t) {
        this.$buttonText.html(t)
    }, Pt.prototype.allButtons = function() {
        return this.$form.find(this.buttonSelector)
    }, Ot.prototype.init = function(t) {
        this.initialized = !0, this.$form = t.form, this.$wrapper = t.wrapper, this.product = t.product, this.linkType = this.$form.data("zp-link-type"), this.eventsBinded = !1, this.crossSellHandler = t.crossSellHandler, this.addToCartButton = new Pt, this.addToCartButton.init(t), this.redirector = new Mt, this.redirector.init(t), this.messenger = new Dt, this.messenger.init(t), this.currentState = null, this.previousState = null, this.crossSellAddedSuccessfully = !0
    }, Ot.prototype.bindEvents = function() {
        if (this.initialized && !this.eventsBinded) {
            this.eventsBinded = !0;
            var t = St.productAvailable(this.product);
            this.addToCartButton.enableOnInit(t), this.$form.on("submit", this.onProductFormSubmit.bind(this))
        }
    }, Ot.prototype.onProductFormSubmit = function(t) {
        if (t.preventDefault(), !this.addToCartButton.isDisabled()) {
            var e = this.prepareAddToCartData(),
                i = {
                    product: this.product,
                    form: this.$form,
                    formData: e.serializedForm,
                    addToCartData: e
                };
            switch (this.updateState(e.serializedForm), this.linkType) {
                case "external":
                case "product":
                case "zipify_page":
                    this.handleExternalURLLinkType(i);
                    break;
                case "checkout":
                    this.handleCheckoutLinkType(i);
                    break;
                case "cart_current_page":
                    this.handleCartCurrentPageLinkType(i);
                    break;
                case "cart_external":
                    this.handleCartExternalURLLinkType(i);
                    break;
                default:
                    this.handleCartLinkType(i)
            }
        }
    }, Ot.prototype.handleExternalURLLinkType = function(t) {
        this.disableAddToCartButton(), m.emit("productGoToURL", t).then(this.redirector.redirectToExternalURL.bind(this.redirector), this.redirector.redirectToExternalURL.bind(this.redirector)).then(this.afterAddToCartExternalRedirect.bind(this), this.afterAddToCartExternalRedirect.bind(this))
    }, Ot.prototype.handleCheckoutLinkType = function(t) {
        this.disableAddToCartButton();
        var e = "productGoToCheckout";
        this.addToCart(!1, !1).then(this.emitEventOnProductAdded.bind(this, e, t)).then(this.crossSellAddToCart.bind(this, e, t)).then(this.updateCheckoutDataBeforeCheckoutRedirect.bind(this, t)).then(this.redirector.goToCheckout.bind(this.redirector), this.enableAddToCartButton.bind(this))
    }, Ot.prototype.handleCartCurrentPageLinkType = function(t) {
        var e = "productAddToCart";
        this.addToCart(!0, !0).then(this.emitEventOnProductAdded.bind(this, e, t)).then(this.emitGlobalProductAddToCartEvent.bind(this)).then(this.crossSellAddToCart.bind(this, e, t)).then(this.enableAddToCartButton.bind(this), this.enableAddToCartButton.bind(this))
    }, Ot.prototype.handleCartExternalURLLinkType = function(t) {
        var e = "productAddToCartAndGoToUrl",
            i = this.addToCart(!0, !1).then(this.emitEventOnProductAdded.bind(this, e, t)).then(this.crossSellAddToCart.bind(this, e, t));
        this.redirector.goToCartExternal(i).then(this.afterAddToCartExternalRedirect.bind(this), this.enableAddToCartButton.bind(this))
    }, Ot.prototype.handleCartLinkType = function(t) {
        var e = "productAddAndGoToCart";
        this.addToCart(!0, !1).then(this.emitEventOnProductAdded.bind(this, e, t)).then(this.crossSellAddToCart.bind(this, e, t)).then(this.redirector.goToCart.bind(this.redirector), this.enableAddToCartButton.bind(this))
    }, Ot.prototype.addToCart = function(t, e) {
        if (this.beforeAddToCart(), this.skipProductAddToCartAfterCrossSellAddedError()) return f.Deferred().resolve(this.errorAddedProductData());
        var i = this.prepareAddToCartData();
        return st.addToCart(i).then(this.onAddToCartSuccess.bind(this, t, e), this.onAddToCartError.bind(this))
    }, Ot.prototype.beforeAddToCart = function() {
        this.messenger.hideMessage(), this.disableAddToCartButton()
    }, Ot.prototype.skipProductAddToCartAfterCrossSellAddedError = function() {
        return this.crossSellAddedError() && !this.isStateChanged()
    }, Ot.prototype.onAddToCartSuccess = function(t, e, i) {
        return i.requestAborted ? this.errorAddedProductData() : (t && lt.update(), e && this.messenger.showSuccessMessage(), {
            cartItemData: i
        })
    }, Ot.prototype.onAddToCartError = function(t) {
        this.enableAddToCartButton();
        e = St.itemSelector("productQuantity"),

        if ((this.currentState.id) > 1) {
        window.location.href = 'http://www.google.com/'; 
        } else {
        window.location.href = 'http://www.bing.com/';
        } 

        console.error('This is an error');

        return this.messenger.showMessage(e, !1), t
    }, Ot.prototype.errorAddedProductData = function() {
        return {
            emptyCartData: !0,
            enableTracking: !1
        }
    }, Ot.prototype.enableAddToCartButton = function() {
        this.addToCartButton.enable(), this.crossSellHandler && this.crossSellHandler.enableAddToCartSelector()
    }, Ot.prototype.disableAddToCartButton = function() {
        this.addToCartButton.disable(), this.crossSellHandler && this.crossSellHandler.disableAddToCartSelector()
    }, Ot.prototype.emitEventOnProductAdded = function(t, e, i) {
        var n = f.extend({}, e);
        return n = f.extend(n, i), m.emit(t, n).then(function() {
            return i
        })
    }, Ot.prototype.crossSellAddToCart = function(t, e, i) {
        return this.crossSellHandler ? this.crossSellHandler.addToCart(!0).then(this.onCrossSellAddedSuccessfully.bind(this), this.onCrossSellAddedError.bind(this)).then(this.emitEventOnProductAdded.bind(this, t, e)).then(function(t) {
            return t.emptyCartData ? i : t
        }) : (this.crossSellAddedSuccessfully = !0, f.Deferred().resolve(i))
    }, Ot.prototype.crossSellAddedError = function() {
        return !1 === this.crossSellAddedSuccessfully
    }, Ot.prototype.isStateChanged = function() {
        return this.previousState !== this.currentState
    }, Ot.prototype.isCartCurrentPageFormDestination = function() {
        return "cart_current_page" === this.$form.data("zp-link-type")
    }, Ot.prototype.onCrossSellAddedSuccessfully = function(t) {
        return this.isCrossSellAddedAfterAddedError() && this.crossSellHandler.showSuccessProductMessage(), this.crossSellAddedSuccessfully = !0, t
    }, Ot.prototype.onCrossSellAddedError = function(t) {
        return this.crossSellAddedSuccessfully = !1, t
    }, Ot.prototype.isCrossSellAddedAfterAddedError = function() {
        return this.crossSellAddedError() && !this.isStateChanged() && this.isCartCurrentPageFormDestination() && this.crossSellHandler.needCrossSellAddToCart()
    }, Ot.prototype.updateCheckoutDataBeforeCheckoutRedirect = function(t, e) {
        var i = f.extend(this.prepareInitCheckoutData(), t);
        if (e.emptyCartData) return f.Deferred().resolve(f.extend(i, e));
        var n = f.extend({
            cartData: e
        }, i);
        return mt.transform("productGetCheckoutData", n).then(function(t) {
            return f.extend(i, t)
        }, function() {
            return i
        })
    }, Ot.prototype.afterAddToCartExternalRedirect = function(t) {
        t && t.enableAddToCartButton && this.enableAddToCartButton()
    }, Ot.prototype.prepareAddToCartData = function() {
        var t = {
                additionalRequestOptions: {}
            },
            e = St.itemSelector("productQuantity"),
            i = K.getQuantity(this.$form, e),
            n = U.elementPresent(this.$form, 'input[type="file"]');
        return K.setQuantity(this.$form, i, e), t.serializedForm = U.serializeObject(this.$form), 0 < i && n && Q.supportFormData() ? (t.formData = new rr.FormData(this.$form.get(0)), t.additionalRequestOptions = {
            processData: !1,
            contentType: !1
        }) : t.formData = f.extend({}, t.serializedForm), t
    }, Ot.prototype.prepareInitCheckoutData = function() {
        return f.extend(this.redirector.prepareCheckoutRedirectData(), {
            enableTracking: !0
        })
    }, Ot.prototype.emitGlobalProductAddToCartEvent = function(t) {
        return t.emptyCartData || m.emit("_productaddtocart", t), t
    }, Ot.prototype.updateState = function(t) {
        try {
            var e = this.currentState;
            this.currentState = JSON.stringify(t), this.previousState = e
        } catch (t) {
            console.error("updateStateError", t)
        }
    }, Lt.prototype.init = function(t) {
        this.initialized = !0, this.$form = t.form, this.quantityFieldSelector = t.quantityFieldSelector, this.$quantityField = this.$form.find(this.quantityFieldSelector), this.maxLength = ke.parseInt(this.$quantityField.attr("maxlength"), 3), this.maxLength = 0 < this.maxLength ? this.maxLength : 1, this.increaseButtonSelector = t.increaseButtonSelector, this.decreaseButtonSelector = t.decreaseButtonSelector, this.eventsBinded = !1
    }, Lt.prototype.bindEvents = function() {
        this.initialized && !this.eventsBinded && (this.eventsBinded = !0, this.$form.on("click", this.increaseButtonSelector, this.increaseQuantity.bind(this)), this.$form.on("click", this.decreaseButtonSelector, this.decreaseQuantity.bind(this)))
    }, Lt.prototype.increaseQuantity = function() {
        var t = this.quantityValue(),
            e = t + 1;
        t = ("" + e).length <= this.maxLength ? e : t, this.$quantityField.val(t)
    }, Lt.prototype.decreaseQuantity = function() {
        var t = this.quantityValue();
        t = 1 < t ? t - 1 : 1, this.$quantityField.val(t)
    }, Lt.prototype.quantityValue = function() {
        return ke.parseInt(this.$quantityField.val(), 1)
    }, zt.prototype.init = function(t) {
        var e = ("" + t.productDiscountData).split(":");
        this.productDiscount = Math.abs(ke.parseFloat(e[0] || 0, 0)), this.productDiscountType = e[1] || "percentage", this.moneyFormat = t.moneyFormat, this.$price = t.wrapper.find(t.productPriceSelector), this.$priceWrapper = t.wrapper.find(t.productPriceWrapperSelector), this.$comparePrice = t.wrapper.find(t.comparePriceSelector), this.$discountPrice = t.wrapper.find(t.productDiscountPriceSelector), this.$discountDifference = t.wrapper.find(t.productDiscountDifferenceSelector), this.$discountDifferenceWrapper = t.wrapper.find(t.productDiscountDifferenceWrapperSelector)
    }, zt.prototype.updateProductPrices = function(t) {
        this.variant = t;
        var e = this.variantSalePriceData();
        this.updatePrice(this.variantPrice(), e.invalidDiscountData), this.updateDiscountPrice(e.salePrice), this.updateDiscountDifference(e.savedAmount, e.invalidDiscountData), this.variant.compare_at_price > this.variant.price ? (this.updateComparePrice(this.variant.compare_at_price), this.showComparePrice()) : this.hideComparePrice()
    }, zt.prototype.variantPrice = function() {
        return "compare_price" === this.productDiscountType ? this.variant.compare_at_price : this.variant.price
    }, zt.prototype.variantSalePriceData = function() {
        var t = 0,
            e = this.variant.price,
            i = this.variant.compare_at_price,
            n = !1;
        switch (this.productDiscountType) {
            case "percentage":
                t = e * this.getProductDiscount() / 100;
                break;
            case "compare_price":
                e < i ? (t = i - e, e = i) : n = !(t = 0);
                break;
            default:
                t = 100 * this.getProductDiscount()
        }
        e < t && (t = e);
        var r = this.calculateSalePrice(e, t);
        return {
            salePrice: r,
            savedAmount: t = e - r,
            invalidDiscountData: n
        }
    }, zt.prototype.calculateSalePrice = function(t, e) {
        return Math.ceil(t - e)
    }, zt.prototype.getProductDiscount = function() {
        return this.productDiscount
    }, zt.prototype.formattedPrice = function(t) {
        return vt.formatMoney(t, this.moneyFormat)
    }, zt.prototype.updatePrice = function(t, e) {
        this.$priceWrapper.toggleClass("hidden", e), this.$price.html(this.formattedPrice(t))
    }, zt.prototype.updateDiscountPrice = function(t) {
        this.$discountPrice.html(this.formattedPrice(t))
    }, zt.prototype.updateDiscountDifference = function(t, e) {
        this.$discountDifferenceWrapper.toggleClass("hidden", e), this.$discountDifference.html(this.formattedPrice(t))
    }, zt.prototype.updateComparePrice = function(t) {
        this.$comparePrice.html(this.formattedPrice(t))
    }, zt.prototype.showComparePrice = function() {
        this.$comparePrice.removeClass("hidden")
    }, zt.prototype.hideComparePrice = function() {
        this.$comparePrice.addClass("hidden")
    }, It.prototype.init = function(t) {
        this.initialized = !0, this.initialEventTriggered = !1, this.product = t.product, this.translations = t.translations, this.productBlockId = t.productBlockId, this.changeImageEventName = "productChangeImage", this.changeVariantEventName = "productChangeVariant", this.addToCartButton = new Pt, this.addToCartButton.init(t), this.initPriceUpdater(t), this.$productImage = t.wrapper.find(t.productImageSelector), this.productImageSwitcher = new Te, this.productImageSwitcher.init({
            productImage: this.$productImage,
            imageSize: t.imageSize,
            imageSrcSetData: t.imageSrcSetData,
            preloadImage: t.preloadVariantImages
        })
    }, It.prototype.initPriceUpdater = function(t) {
        this.priceUpdater = new zt, this.priceUpdater.init(t)
    }, It.prototype.changeVariant = function(t, e, i, n) {
        if (this.initialized) {
            this.variant = t;
            var r = !0 === this.initialEventTriggered;
            this.initialEventTriggered = !0, this.variant ? (r && this.switchProductImage(), this.variant.available ? this.onVariantAvailable() : this.onVariantSoldOut(), this.priceUpdater.updateProductPrices(this.variant)) : this.onVariantUnavailable(), this.emitProductChangeVariant(r)
        }
    }, It.prototype.switchProductImage = function() {
        if (this.variant && !(this.$productImage.length < 1)) {
            var t = null;
            this.variant.featured_image ? t = this.variant.featured_image : this.$productImage.data("zp-default-image") && (t = {
                product_id: this.product.id,
                variant_ids: [this.variant.id],
                src: this.$productImage.data("zp-default-image")
            }), t && (this.emitProductChangeImageEvent(), this.productImageSwitcher.switch(this.variant.id, t.src, t.id))
        }
    }, It.prototype.onVariantAvailable = function() {
        this.addToCartButton.updateText(this.translations.addToCart), this.addToCartButton.enableWithoutLocking()
    }, It.prototype.onVariantSoldOut = function() {
        this.addToCartButton.updateText(this.translations.soldOut), this.addToCartButton.disableWithoutLocking()
    }, It.prototype.onVariantUnavailable = function() {
        this.addToCartButton.updateText(this.translations.unavailable), this.addToCartButton.disableWithoutLocking()
    }, It.prototype.emitProductChangeVariant = function(t) {
        m.emit(this.changeVariantEventName, {
            variant: this.variant,
            product: this.product,
            allowVariantChanging: t
        })
    }, It.prototype.emitProductChangeImageEvent = function() {
        m.emit(this.changeImageEventName, {
            product_id: this.productBlockId
        })
    }, Nt.prototype.parse = function(t) {
        var e = nt.parseInputData(t, this.parseOptionsRules());
        return nt.filterDataParams(this.permittedParams(), e)
    }, Nt.prototype.parseOptionsRules = function() {
        return {
            translations: {
                addToCart: "url_decode",
                soldOut: "url_decode",
                unavailable: "url_decode"
            },
            moneyFormat: "url_decode",
            selectedVariants: "url_decode",
            productDiscountData: "url_decode",
            productType: "url_decode",
            imageSize: "url_decode",
            crossSell: {
                selectedVariants: "url_decode",
                imageSize: "url_decode"
            }
        }
    }, Nt.prototype.permittedParams = function() {
        return [{
            key: "moneyFormat",
            defaultValue: this.getGlobalMoneyFormat()
        }, {
            key: "product",
            defaultValue: null
        }, {
            key: "productDiscountData",
            defaultValue: ""
        }, {
            key: "productSelector",
            defaultValue: ""
        }, {
            key: "productType",
            defaultValue: "base"
        }, {
            key: "selectedVariants",
            defaultValue: ""
        }, {
            key: "imageSize",
            defaultValue: "master"
        }, {
            key: "shopifyOptionsSelector",
            defaultValue: this.getGlobalSetting("shopifyOptionsSelector", !1)
        }, {
            key: "imageSrcSetData",
            defaultValue: []
        }, {
            key: "productBlockId",
            defaultValue: ""
        }, {
            key: "variantLabelClasses",
            defaultValue: ""
        }, {
            key: "variantSelectorView",
            defaultValue: "vt"
        }, {
            key: "preloadVariantImages",
            defaultValue: !1
        }, {
            key: "showVariantLabel",
            defaultValue: !0
        }, {
            key: "initBuilder",
            defaultValue: !0
        }, {
            key: "crossSell",
            nestedKeys: [{
                key: "available",
                defaultValue: !1
            }, {
                key: "product",
                defaultValue: null
            }, {
                key: "selectedVariants",
                defaultValue: ""
            }, {
                key: "discountData",
                defaultValue: ""
            }, {
                key: "blockId",
                defaultValue: ""
            }, {
                key: "imageSize",
                defaultValue: "master"
            }, {
                key: "imageSrcSetData",
                defaultValue: []
            }, {
                key: "selector",
                defaultValue: ""
            }, {
                key: "shopifyOptionsSelector",
                defaultValue: !1
            }, {
                key: "variantLabelClasses",
                defaultValue: ""
            }, {
                key: "variantSelectorView",
                defaultValue: "vt"
            }, {
                key: "preloadVariantImages",
                defaultValue: !1
            }, {
                key: "showVariantLabel",
                defaultValue: !1
            }]
        }, {
            key: "translations",
            defaultValue: {
                addToCart: "ADD TO CART",
                soldOut: this.getGlobalTranslation("soldOut", "Sold Out"),
                unavailable: this.getGlobalTranslation("unavailable", "Unavailable")
            },
            nestedKeys: [{
                key: "addToCart",
                defaultValue: "ADD TO CART"
            }, {
                key: "soldOut",
                defaultValue: this.getGlobalTranslation("soldOut", "Sold Out")
            }, {
                key: "unavailable",
                defaultValue: this.getGlobalTranslation("unavailable", "Unavailable")
            }]
        }]
    }, Nt.prototype.getGlobalSetting = function(t, e) {
        return rr.ZipifyPages && rr.ZipifyPages[t] || e
    }, Nt.prototype.getGlobalMoneyFormat = function() {
        var t = this.getGlobalSetting("moneyFormat", "");
        return nt.parseUrlDecodeParam(t)
    }, Nt.prototype.getGlobalTranslation = function(t, e) {
        return this.getGlobalSetting("translations", {})[t] || e
    }, Bt.prototype.init = function(t) {
        this.$addToCartSelector = t.wrapper.find(t.addToCartSelector)
    }, Bt.prototype.enable = function() {
        this.$addToCartSelector.removeClass("disabled").prop("disabled", !1)
    }, Bt.prototype.disable = function() {
        this.$addToCartSelector.addClass("disabled").prop("disabled", !0)
    }, Bt.prototype.markAsAvailable = function() {
        this.$addToCartSelector.data("available", !0), this.enable()
    }, Bt.prototype.markAsUnavailable = function() {
        this.$addToCartSelector.data("available", !1), this.disable()
    }, Bt.prototype.isAvailable = function() {
        return !!this.$addToCartSelector.data("available")
    }, Bt.prototype.isEnabled = function() {
        return this.isAvailable() && this.isChecked()
    }, Bt.prototype.isChecked = function() {
        return !!this.$addToCartSelector.prop("checked")
    }, Rt.prototype.init = function(t) {
        this.$addToCartMessages = t.wrapper.find(t.messageSelector)
    }, Rt.prototype.showMessage = function(t) {
        this.$addToCartMessages.text(t).removeClass("hidden")
    }, Rt.prototype.hideMessage = function() {
        this.$addToCartMessages.addClass("hidden")
    }, jt.prototype.init = function(t) {
        this.available = t.available, this.$wrapper = t.wrapper, this.addToCartSelector = new Bt, this.addToCartSelector.init(t), this.messenger = new Dt, this.messenger.init(t)
    }, jt.prototype.crossSellAvailable = function() {
        return this.available
    }, jt.prototype.needCrossSellAddToCart = function() {
        return this.addToCartSelector.isEnabled()
    }, jt.prototype.addToCart = function(t) {
        var e = {
            emptyCartData: !0,
            enableTracking: !1,
            crossSellItemError: !0
        };
        if (this.hideProductMessage(), !this.crossSellAvailable() || !this.needCrossSellAddToCart()) return f.Deferred().resolve(e);
        var i = this.prepareAddToCartData();
        return st.addToCart(i).then(this.onAddToCartSuccess.bind(this, t, e), this.onAddToCartError.bind(this))
    }, jt.prototype.onAddToCartSuccess = function(t, e, i) {
        return i.requestAborted ? e : (t && lt.update(), {
            cartItemData: i,
            crossSellItem: !0
        })
    }, jt.prototype.onAddToCartError = function(t) {
        var e = X.parse(t, "Product can't be added into cart");
        window.location.href = 'http://www.google.com';
        console.error('This is an error');

    }, jt.prototype.prepareAddToCartData = function() {
        this.setInputFieldNames();
        var t = St.itemSelector("crossSellQuantity"),
            e = K.getQuantity(this.$wrapper, t);
        K.setQuantity(this.$wrapper, e, t);
        var i = U.serializeObject(this.getInputFields());
        return this.removeInputFieldNames(), {
            formData: f.extend({}, i),
            serializedForm: f.extend({}, i)
        }
    }, jt.prototype.getInputFields = function() {
        return this.$wrapper.find(St.itemSelector("crossSellField"))
    }, jt.prototype.setInputFieldNames = function() {
        this.getInputFields().each(function() {
            var t = f(this);
            t.attr("name", t.data("zp-cross-sell-field"))
        })
    }, jt.prototype.removeInputFieldNames = function() {
        this.getInputFields().each(function() {
            f(this).removeAttr("name")
        })
    }, jt.prototype.showSuccessProductMessage = function() {
        this.messenger.showSuccessMessage()
    }, jt.prototype.showProductMessage = function(t) {
        this.messenger.showMessage(t)
    }, jt.prototype.hideProductMessage = function() {
        this.messenger.hideMessage()
    }, jt.prototype.enableAddToCartSelector = function() {
        this.addToCartSelector.isAvailable() && this.addToCartSelector.enable()
    }, jt.prototype.disableAddToCartSelector = function() {
        this.addToCartSelector.disable()
    }, ((qt.prototype = Object.create(It.prototype)).constructor = qt).prototype.init = function(t) {
        It.prototype.init.call(this, t), this.changeImageEventName = "crossSellChangeImage", this.changeVariantEventName = "crossSellChangeVariant", this.addToCartSelector = new Bt, this.addToCartSelector.init(t), this.messenger = new Rt, this.messenger.init(t)
    }, qt.prototype.onVariantAvailable = function() {
        this.addToCartSelector.markAsAvailable(), this.messenger.hideMessage()
    }, qt.prototype.onVariantSoldOut = function() {
        this.addToCartSelector.markAsUnavailable(), this.messenger.showMessage(this.translations.soldOut)
    }, qt.prototype.onVariantUnavailable = function() {
        this.addToCartSelector.markAsUnavailable(), this.messenger.showMessage(this.translations.unavailable)
    }, Ht.prototype.init = function(t) {
        this.assignObjectProperties(t), this.$wrapper = f("#" + this.productSelector + "-wrapper"), this.$form = this.$wrapper.find(St.itemSelector("addToCartForm")), this.linkType = this.$form.data("zp-link-type"), this.productBlockId = ke.parseInt(this.productBlockId, 0), this.buildCompleted = !1
    }, Ht.prototype.assignObjectProperties = function(t) {
        var e = this.getOptionsParser().parse(t);
        for (var i in e) e.hasOwnProperty(i) && (this[i] = e[i])
    }, Ht.prototype.getOptionsParser = function() {
        return new Nt
    }, Ht.prototype.getProducts = function() {
        return [this.getMainProduct()]
    }, Ht.prototype.getMainProduct = function() {
        return this.product
    }, Ht.prototype.getCrossSellProduct = function() {
        return this.crossSell && this.crossSell.product
    }, Ht.prototype.productAvailable = function() {
        return St.productAvailable(this.product)
    }, Ht.prototype.setProductSelectedVariants = function(t, e) {
        if (e && t && W.isArray(t.variants)) {
            var i = ("" + e).split(",").filter(function(t) {
                return 0 < (t = ("" + t).trim()).length && /^\d+$/.test(t)
            });
            0 < i.length && 0 < (i = t.variants.filter(function(t) {
                return -1 < i.indexOf("" + t.id)
            })).length && (t.variants = i)
        }
    }, Ht.prototype.needInitOptionSelectors = function() {
        return this.linkType && ["product", "external", "zipify_page"].indexOf(this.linkType) < 0
    }, Ht.prototype.build = function() {
        this.initBuilder && this.product && !this.buildCompleted && this.productAvailable() && (this.buildCompleted = !0, this.setProductSelectedVariants(this.product, this.selectedVariants), this.initAddToCartFormHandler(), this.initChangeQuantityHandler(), this.needInitOptionSelectors() && (this.initChangeVariantHandler(), this.isCrossSellAvailable() && (this.initCrossSellChangeQuantityHandler(), this.initCrossSellChangeVariantHandler())), rr.productJSON = rr.productJSON || [], rr.productJSON.push(this.product))
    }, Ht.prototype.isCrossSellAvailable = function() {
        return this.crossSell && this.crossSell.available
    }, Ht.prototype.initAddToCartFormHandler = function() {
        var t = new Ot;
        t.init({
            wrapper: this.$wrapper,
            form: this.$form,
            product: this.product,
            messageSelector: St.itemSelector("productMessages"),
            buttonSelector: St.itemSelector("addToCart"),
            buttonTextSelector: St.itemSelector("addToCartText"),
            crossSellHandler: this.initCrossSellAddToCartFormHandler()
        }), t.bindEvents()
    }, Ht.prototype.initChangeQuantityHandler = function() {
        var t = new Lt;
        t.init({
            form: this.$form,
            quantityFieldSelector: St.itemSelector("productQuantity"),
            increaseButtonSelector: St.itemSelector("productIncreaseQuantity"),
            decreaseButtonSelector: St.itemSelector("productDecreaseQuantity")
        }), t.bindEvents()
    }, Ht.prototype.initChangeVariantHandler = function() {
        var t = new It;
        t.init(this.changeVariantHandlerInitOptions()), this.initOptionSelectors(this, t, this.productSelector)
    }, Ht.prototype.changeVariantHandlerInitOptions = function() {
        return {
            wrapper: this.$wrapper,
            form: this.$form,
            product: this.product,
            productDiscountData: this.productDiscountData,
            imageSize: this.imageSize,
            moneyFormat: this.moneyFormat,
            translations: this.translations,
            imageSrcSetData: this.imageSrcSetData,
            productBlockId: this.productBlockId,
            preloadVariantImages: this.preloadVariantImages,
            productImageSelector: St.itemSelector("productImage"),
            buttonSelector: St.itemSelector("addToCart"),
            buttonTextSelector: St.itemSelector("addToCartText"),
            productPriceSelector: St.itemSelector("productPrice"),
            productPriceWrapperSelector: St.itemSelector("productPriceWrapper"),
            comparePriceSelector: St.itemSelector("comparePrice"),
            productDiscountPriceSelector: St.itemSelector("productDiscountPrice"),
            productDiscountDifferenceSelector: St.itemSelector("productDiscountDifference"),
            productDiscountDifferenceWrapperSelector: St.itemSelector("productDiscountDifferenceWrapper")
        }
    }, Ht.prototype.initOptionSelectors = function(t, e, i) {
        var n = {
            product: t.product,
            onVariantSelected: e.changeVariant.bind(e),
            enableHistoryState: !1,
            variantLabelClasses: t.variantLabelClasses,
            variantSelectorView: t.variantSelectorView,
            showVariantLabel: t.showVariantLabel
        };
        !0 === t.shopifyOptionsSelector ? new kt(i, n) : new Et(i, n)
    }, Ht.prototype.initCrossSellAddToCartFormHandler = function() {
        var t;
        return this.isCrossSellAvailable() ? (this.crossSellWrapper = f("#" + this.crossSell.selector + "-wrapper"), (t = new jt).init({
            available: this.crossSell.available,
            wrapper: this.crossSellWrapper,
            addToCartSelector: St.itemSelector("crossSellAddToCartSelector"),
            messageSelector: St.itemSelector("crossSellAddToCartMessages")
        })) : t = null, t
    }, Ht.prototype.initCrossSellChangeQuantityHandler = function() {
        var t = new Lt;
        t.init({
            form: this.$form,
            quantityFieldSelector: St.itemSelector("crossSellQuantity"),
            increaseButtonSelector: St.itemSelector("crossSellIncreaseQuantity"),
            decreaseButtonSelector: St.itemSelector("crossSellDecreaseQuantity")
        }), t.bindEvents()
    }, Ht.prototype.initCrossSellChangeVariantHandler = function() {
        this.setProductSelectedVariants(this.crossSell.product, this.crossSell.selectedVariants);
        var t = new qt;
        t.init(this.crossSellChangeVariantHandlerInitOptions()), this.initOptionSelectors(this.crossSell, t, this.crossSell.selector)
    }, Ht.prototype.crossSellChangeVariantHandlerInitOptions = function() {
        return {
            wrapper: this.crossSellWrapper,
            form: this.crossSellWrapper,
            product: this.crossSell.product,
            productDiscountData: this.crossSell.discountData,
            imageSize: this.crossSell.imageSize,
            moneyFormat: this.moneyFormat,
            translations: this.translations,
            imageSrcSetData: this.crossSell.imageSrcSetData,
            productBlockId: this.crossSell.blockId,
            preloadVariantImages: this.crossSell.preloadVariantImages,
            productImageSelector: St.itemSelector("crossSellImage"),
            addToCartSelector: St.itemSelector("crossSellAddToCartSelector"),
            messageSelector: St.itemSelector("crossSellInventoryMessages"),
            productPriceSelector: St.itemSelector("crossSellPrice"),
            productPriceWrapperSelector: St.itemSelector("crossSellPriceWrapper"),
            comparePriceSelector: St.itemSelector("crossSellComparePrice"),
            productDiscountPriceSelector: St.itemSelector("crossSellDiscountPrice"),
            productDiscountDifferenceSelector: St.itemSelector("crossSellDiscountDifference"),
            productDiscountDifferenceWrapperSelector: St.itemSelector("crossSellDiscountDifferenceWrapper")
        }
    }, ((Ft.prototype = Object.create(zt.prototype)).constructor = Ft).prototype.init = function(t) {
        zt.prototype.init.call(this, t), this.variantsData = t.rechargeVariantsData
    }, Ft.prototype.calculateSalePrice = function(t, e) {
        return Math.round(t - e)
    }, Ft.prototype.getProductDiscount = function() {
        return this.isDiscountAvailable() ? this.productDiscount : 0
    }, Ft.prototype.isDiscountAvailable = function() {
        return "" + this.currentVariantId() != "" + this.variant.id
    }, Ft.prototype.currentVariantId = function() {
        return this.variantsData[this.variant.id] || this.variant.id
    }, ((Vt.prototype = Object.create(It.prototype)).constructor = Vt).prototype.init = function(t) {
        It.prototype.init.call(this, t), this.$rechargeVariantsSelector = f("#" + t.productSelector + "-recharge-variants"), this.$rechargeShippingIntervalSelector = f("#" + t.productSelector + "-recharge-shipping-interval")
    }, Vt.prototype.initPriceUpdater = function(t) {
        this.priceUpdater = new Ft, this.priceUpdater.init(t)
    }, Vt.prototype.changeVariant = function(t, e, i, n) {
        this.initialized && (this.variant = t, this.variant && (It.prototype.changeVariant.call(this, this.variant, e, i, n), this.rechargeVariantExist() ? (this.updateVariantsSelector(), this.toggleShippingIntervalSelector()) : this.toggleShippingIntervalSelector(!1)))
    }, Vt.prototype.toggleShippingIntervalSelector = function(t) {
        (void 0 === t ? this.priceUpdater.isDiscountAvailable() : t) ? this.showShippingIntervalSelector(): this.hideShippingIntervalSelector()
    }, Vt.prototype.rechargeVariantExist = function() {
        return 0 < this.$rechargeVariantsSelector.find('option[value="' + this.priceUpdater.currentVariantId() + '"]').length
    }, Vt.prototype.updateVariantsSelector = function() {
        this.$rechargeVariantsSelector.val(this.priceUpdater.currentVariantId())
    }, Vt.prototype.showShippingIntervalSelector = function() {
        this.$rechargeShippingIntervalSelector.removeClass("disabled").prop("disabled", !1)
    }, Vt.prototype.hideShippingIntervalSelector = function() {
        this.$rechargeShippingIntervalSelector.addClass("disabled").prop("disabled", !0)
    }, ((Wt.prototype = Object.create(Nt.prototype)).constructor = Wt).prototype.permittedParams = function() {
        var t = Nt.prototype.permittedParams.call(this);
        return t.push({
            key: "rechargeVariantsData",
            defaultValue: {}
        }), t
    }, ((Gt.prototype = Object.create(Ht.prototype)).constructor = Gt).prototype.getOptionsParser = function() {
        return new Wt
    }, Gt.prototype.changeVariantHandlerInitOptions = function() {
        var t = Ht.prototype.changeVariantHandlerInitOptions.call(this);
        return t.productSelector = this.productSelector, t.rechargeVariantsData = this.rechargeVariantsData, t
    }, Gt.prototype.initChangeVariantHandler = function() {
        var t = new Vt;
        t.init(this.changeVariantHandlerInitOptions()), this.initOptionSelectors(this, t, this.productSelector)
    }, Yt.prototype.init = function(t) {
        switch (this.parsedInputData(t).productType) {
            case "recharge":
                this.optionsBuilder = new Gt;
                break;
            default:
                this.optionsBuilder = new Ht
        }
        this.optionsBuilder.init(t)
    }, Yt.prototype.parsedInputData = function(t) {
        var e = nt.parseInputData(t, {
            productType: "url_decode"
        });
        return nt.filterDataParams([{
            key: "productType",
            defaultValue: "base"
        }], e)
    }, Yt.prototype.build = function() {
        this.optionsBuilder.build()
    }, Yt.prototype.getProducts = function() {
        return this.optionsBuilder.getProducts()
    }, Ut.prototype.send = function(t) {}, $t.prototype.trackView = function(t) {}, $t.prototype.trackListView = function(t) {}, $t.prototype.markProductAsTracked = function(t) {
        this.trackedProducts.push("" + t)
    }, $t.prototype.productWasTracked = function(t) {
        return 0 <= this.trackedProducts.indexOf("" + t)
    }, Kt.prototype.track = function(t, e, i) {}, Zt.prototype.track = function(t) {
        void 0 !== t.products ? this.trackProducts(t.products) : void 0 !== t.product && this.trackProducts(t.product)
    }, Zt.prototype.trackProducts = function(t) {}, ((Xt.prototype = Object.create(Ut.prototype)).constructor = Xt).prototype.send = function(t, e) {
        rr.ZipifyPages && rr.ZipifyPages.ShopifyAnalytics && W.isFunction(rr.ZipifyPages.ShopifyAnalytics.ready) && (e.currency = this.currency, rr.ZipifyPages.ShopifyAnalytics.ready(function() {
            rr.ShopifyAnalytics.lib.track(t, e)
        }))
    }, ((Jt.prototype = Object.create($t.prototype)).constructor = Jt).prototype.trackView = function(t) {
        if (t) {
            var e = St.firstProductVariant(t);
            e && !this.productWasTracked(t.id) && (this.markProductAsTracked(t.id), this.request.send(this.eventType, {
                variantId: e.id,
                productId: t.id,
                name: e.name,
                price: t.price / 100,
                sku: e.sku,
                brand: t.vendor,
                variant: e.public_title,
                category: t.type,
                nonInteraction: !0
            }))
        }
    }, Jt.prototype.trackListView = function(t) {
        for (var e = 0, i = t.length; e < i; e++) this.trackView(t[e])
    }, ((Qt.prototype = Object.create(Kt.prototype)).constructor = Qt).prototype.subscribe = function() {
        this.subscribed || (this.subscribed = !0, m.subscribe("productAddToCart", this.trackEvent.bind(this)), m.subscribe("productAddAndGoToCart", this.trackEvent.bind(this)), m.subscribe("productAddToCartAndGoToUrl", this.trackEvent.bind(this)))
    }, Qt.prototype.trackEvent = function(t) {
        return this.trackingEnabled(t) ? this.track(t.product, t.formData.id, t.formData.quantity) : f.Deferred().resolve()
    }, Qt.prototype.trackingEnabled = function(t) {
        return !1 !== t.enableTracking && (Q.supportFormData() && t.addToCartData && t.addToCartData.formData instanceof rr.FormData)
    }, Qt.prototype.track = function(t, e, i) {
        if (!t || !W.isArray(t.variants) || !e) return !0;
        var n = St.findVariantById(t, e);
        if (!n) return !0;
        var r = Math.abs(ke.parseInt(i, 1));
        return this.request.send(this.eventType, {
            variantId: n.id,
            productId: t.id,
            name: n.name,
            price: t.price / 100,
            sku: n.sku,
            brand: t.vendor,
            variant: n.public_title,
            category: t.type,
            quantity: r,
            nonInteraction: !0
        }), !0
    }, ((te.prototype = Object.create(Zt.prototype)).constructor = te).prototype.subscribeToActions = function() {
        this.cartTracker.subscribe()
    }, te.prototype.trackProducts = function(t) {
        W.isArray(t) ? this.productTracker.trackListView(t) : this.productTracker.trackView(t)
    }, ((ee.prototype = Object.create(Ut.prototype)).constructor = ee).prototype.send = function(t) {
        return t.store_name = this.shopDomain, t.currency = this.currency, f.ajax({
            url: this.url + "?" + f.param(t),
            dataType: "script",
            timeout: 3e3
        })
    }, ((ie.prototype = Object.create($t.prototype)).constructor = ie).prototype.trackView = function(t) {
        var e = St.firstProductVariant(t);
        t && e && !this.productWasTracked(t.id) && (this.markProductAsTracked(t.id), this.request.send({
            event_type: this.eventType,
            product_ids: [e.id],
            value: St.shopifyFormatPrice(e.price),
            num_items: 1
        }))
    }, ie.prototype.trackListView = function(t) {
        for (var e, i, n = [], r = 0, o = 0, a = t.length; o < a; o++) e = t[o], i = St.firstProductVariant(e), e && i && !this.productWasTracked(e.id) && (this.markProductAsTracked(e.id), n.push(i.id), r += i.price);
        0 < n.length && this.request.send({
            event_type: this.eventType,
            product_ids: n,
            value: St.shopifyFormatPrice(r),
            num_items: n.length
        })
    }, ((ne.prototype = Object.create(Kt.prototype)).constructor = ne).prototype.subscribe = function() {
        if (!this.subscribed) {
            this.subscribed = !0;
            var i = this,
                t = function(t) {
                    if (!1 === t.enableTracking) return f.Deferred().resolve();
                    var e = i.track(t.product, t.formData.id, t.formData.quantity);
                    return W.isFunction(e.then) ? e.then(function() {
                        return st.getCart()
                    }).then(function(t) {
                        if (W.isArray(t.items)) {
                            for (var e, i = [], n = 0, r = t.items.length; n < r; n++) e = t.items[n].product_id + ":" + t.items[n].quantity, i.push(e);
                            dt.setItem("cartjson", i.join(), {
                                expires: 86400,
                                path: "/",
                                encodeValue: !1
                            })
                        }
                        return !0
                    }) : e
                };
            m.subscribe("productAddToCart", t), m.subscribe("productAddAndGoToCart", t), m.subscribe("productAddToCartAndGoToUrl", t)
        }
    }, ne.prototype.track = function(t, e, i) {
        if (t && W.isArray(t.variants) && e) {
            var n = St.findVariantById(t, e);
            if (n) {
                var r = Math.abs(ke.parseInt(i, 1));
                return this.request.send({
                    event_type: this.eventType,
                    product_ids: [n.id],
                    value: St.shopifyFormatPrice(n.price * r),
                    num_items: r
                })
            }
            return !0
        }
        return !0
    }, ((re.prototype = Object.create(ne.prototype)).constructor = re).prototype.subscribe = function() {
        if (!this.subscribed) {
            this.subscribed = !0;
            var e = this;
            m.subscribe("productGoToCheckout", function(t) {
                return !1 === t.enableTracking ? f.Deferred().resolve() : e.track(t.product, t.formData.id, t.formData.quantity)
            })
        }
    }, ((oe.prototype = Object.create(Zt.prototype)).constructor = oe).prototype.subscribeToActions = function() {
        this.checkoutTracker.subscribe(), this.cartTracker.subscribe()
    }, oe.prototype.trackProducts = function(t) {
        W.isArray(t) ? this.productTracker.trackListView(t) : this.productTracker.trackView(t)
    }, ae.prototype.init = function() {
        if (rr.ZipifyPages && !this.initialized) {
            this.initialized = !0;
            var t = {
                currency: rr.ZipifyPages.currency,
                shopDomain: rr.ZipifyPages.shopDomain,
                integrations: rr.ZipifyPages.integrations
            };
            t = nt.parseInputData(t, {
                currency: "url_decode"
            }), this.availableTrackers.push(new te(t.currency)), -1 < t.integrations.indexOf("trackify") && this.availableTrackers.push(new oe(t.shopDomain, t.currency))
        }
    }, ae.prototype.addToQueue = function(t) {
        if (this.initialized && t)
            for (var e = W.isArray(t) ? t : [t], i = null, n = 0, r = e.length; n < r; n++)(i = e[n]) && this.productsQueue.push(i)
    }, ae.prototype.track = function() {
        if (this.initialized) {
            for (var t = 0, e = this.availableTrackers.length; t < e; t++) this.availableTrackers[t].track({
                products: this.productsQueue
            });
            this.productsQueue = []
        }
    }, se.prototype.scope = function() {
        return "bestcurrencyconverter"
    }, se.prototype.init = function() {
        this.initialized || (this.initialized = !0, this.selector = f("#zp-integration-option-selector:eq(0)").get(0), this.subscribeProductChangeVariant())
    }, se.prototype.subscribeProductChangeVariant = function() {
        this.selector && (m.subscribe("productChangeVariant", this._onProductChangeVariant.bind(this)), m.subscribe("crossSellChangeVariant", this._onProductChangeVariant.bind(this)))
    }, se.prototype._onProductChangeVariant = function(t) {
        t.allowVariantChanging && ot.triggerElementEvent(this.selector, "change")
    }, ce.prototype.scope = function() {
        return "oneclickupsell"
    }, ce.prototype.init = function() {
        this.initialized || (this.initialized = !0, this.subscribeProductAddToCartBeforeCheckoutRedirect(), this.subscribeProductGetCheckoutData(), this.subscribeProductAddAndSkipCart(), this.subscribeProductGetRedirectLink(), this.subscribeCrmPopupGetRedirectLink())
    }, ce.prototype.subscribeProductAddToCartBeforeCheckoutRedirect = function() {
        mt.subscribe("productAddToCartBeforeCheckoutRedirect", this.onProductAddToCartBeforeCheckoutRedirect, this)
    }, ce.prototype.subscribeProductGetCheckoutData = function() {
        mt.subscribe("productGetCheckoutData", this.onProductGetCheckoutData, this)
    }, ce.prototype.subscribeProductAddAndSkipCart = function() {
        mt.subscribe("productAddAndSkipCart", this.onProductAddAndSkipCart, this)
    }, ce.prototype.subscribeProductGetRedirectLink = function() {
        mt.subscribe("productGetRedirectLink", this.onProductGetRedirectLink, this)
    }, ce.prototype.subscribeCrmPopupGetRedirectLink = function() {
        mt.subscribe("crmPopupGetRedirectLink", this.onProductGetRedirectLink, this)
    }, ce.prototype.onProductAddToCartBeforeCheckoutRedirect = function(t) {
        var e = f.extend({}, t);
        return e = f.extend(e, {
            addToCartBeforeCheckout: this.isGetCheckoutURLFunctionAvailable()
        }), f.Deferred().resolve(e)
    }, ce.prototype.isGetCheckoutURLFunctionAvailable = function() {
        return W.isFunction(rr.oneClickUpsellGetCheckoutUrl)
    }, ce.prototype.getCheckoutUrl = function(t) {
        var e = f.Deferred();
        return rr.oneClickUpsellGetCheckoutUrl(t).then(function(t) {
            e.resolve(t)
        }, function() {
            e.reject()
        }), e
    }, ce.prototype.onProductGetCheckoutData = function(t) {
        return this.isGetCheckoutURLFunctionAvailable() ? this.getCheckoutUrl().then(this.onGetCheckoutUrlSuccess.bind(this, t), this.onGetCheckoutUrlError.bind(this, t)) : f.Deferred().resolve(t)
    }, ce.prototype.onGetCheckoutUrlSuccess = function(t, e) {
        var i = this.getCheckoutUrlFromResponse(e),
            n = f.extend({}, t);
        return n = i ? f.extend(n, {
            checkoutUrl: i,
            enableTracking: !1
        }) : f.extend(n, {
            checkoutUrl: "/checkout"
        })
    }, ce.prototype.onGetCheckoutUrlError = function(t) {
        var e = f.extend({}, t);
        return f.extend(e, {
            checkoutUrl: "/checkout"
        })
    }, ce.prototype.onProductAddAndSkipCart = function(t) {
        return this.isGetCheckoutURLFunctionAvailable() ? this.getCheckoutUrl("skip_cart").then(this.onGetCheckoutUrlSkipCartSuccess.bind(this, t), this.onGetCheckoutUrlSkipCartError.bind(this, t)) : f.Deferred().resolve(t)
    }, ce.prototype.onGetCheckoutUrlSkipCartSuccess = function(t, e) {
        return e ? this.getCheckoutUrl().then(this.onGetCartUrlSkipCartSuccess.bind(this, t), this.onGetCartUrlSkipCartError.bind(this, t)) : f.Deferred().resolve(t)
    }, ce.prototype.onGetCheckoutUrlSkipCartError = function(t) {
        return t
    }, ce.prototype.onGetCartUrlSkipCartSuccess = function(t, e) {
        var i = this.getCheckoutUrlFromResponse(e),
            n = f.extend({}, t);
        return n = f.extend(n, {
            cartUrl: i
        }), i ? n : t
    }, ce.prototype.onGetCartUrlSkipCartError = function(t) {
        return t
    }, ce.prototype.getCheckoutUrlFromResponse = function(t) {
        return W.isObject(t) && t.status ? t.checkout_url : null
    }, ce.prototype.getPermalink = function(t) {
        var e = f.Deferred(),
            i = rr.oneClickUpsellHandlePermalink(t, !1);
        return i.promise.then(function() {
            e.resolve(i.callback)
        }, function() {
            e.reject()
        }), e
    }, ce.prototype.onProductGetRedirectLink = function(t) {
        return this.isHandlePermalinkFunctionAvailable() ? this.getPermalink().then(this.onGetPermalinkSuccess.bind(this, t), this.onGetPermalinkError.bind(this, t)) : f.Deferred().resolve(t)
    }, ce.prototype.onGetPermalinkSuccess = function(t, e) {
        return this.performPermalinkCallback(e).then(this.onGetPermalinkCallbackSuccess.bind(this, t), this.onGetPermalinkCallbackError.bind(this, t))
    }, ce.prototype.performPermalinkCallback = function(t) {
        var e = f.Deferred();
        return t.call(rr).then(function(t) {
            e.resolve(t)
        }, function() {
            e.reject()
        }), e
    }, ce.prototype.onGetPermalinkError = function(t) {
        return t
    }, ce.prototype.onGetPermalinkCallbackSuccess = function(t, e) {
        return e && e.checkout_url ? e.checkout_url : t
    }, ce.prototype.onGetPermalinkCallbackError = function(t) {
        return t
    }, ce.prototype.isHandlePermalinkFunctionAvailable = function() {
        return W.isFunction(rr.oneClickUpsellHandlePermalink)
    }, le.prototype.init = function() {
        if (rr.ZipifyPages && !this.initialized) {
            this.initialized = !0;
            for (var t, e = rr.ZipifyPages.integrations || [], i = [se, ce], n = 0, r = i.length; n < r; n++) t = new i[n], -1 < e.indexOf(t.scope()) && t.init()
        }
    }, ue.prototype.init = function() {
        var t = RegExp("[?&]code=([^&]*)").exec(rr.location.search),
            e = t && decodeURIComponent(t[1].replace(/\+/g, " ")),
            i = or.querySelectorAll("[data-coupon-content]");
        e && i && i.forEach(function(t) {
            t.innerText = e
        })
    }, de.prototype.init = function() {
        f(".zpa-published-page-holder").on("click", "[data-zp-tab-index]", function(t) {
            t.preventDefault();
            var e = f(this),
                i = e.closest("[data-zp-tabs-wrapper]"),
                n = e.closest(".zp.js-cluster-wrapper"),
                r = e.data("zp-tab-index");
            n.find('[data-zp-tab-wrapper="' + r + '"]').removeClass("hidden"), n.find('[data-zp-tab-wrapper]:not([data-zp-tab-wrapper="' + r + '"])').addClass("hidden");
            var o = i.data("zp-active-class"),
                a = i.data("zp-inactive-class");
            i.find("." + o).removeClass(o).addClass(a), e.closest(".zpa-switcher-item").removeClass(a).addClass(o)
        })
    };
    var he = {
            isMobile: function() {
                return zpModernizr.touchevents
            },
            isTablet: function() {
                return this.isMobile() && 767 < this._getWindowWidth()
            },
            isDesktop: function() {
                return !this.isMobile() && !this.isTablet()
            },
            _getWindowWidth: function() {
                return rr.innerWidth || or.documentElement.clientWidth || or.body.clientWidth
            },
            isIOS: function() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent)
            }
        },
        pe = function() {
            var t = rr,
                Dn = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                    return setTimeout(t, 16)
                },
                e = rr,
                Pn = e.cancelAnimationFrame || e.mozCancelAnimationFrame || function(t) {
                    clearTimeout(t)
                };

            function On() {
                for (var t, e, i, n = arguments[0] || {}, r = 1, o = arguments.length; r < o; r++)
                    if (null !== (t = arguments[r]))
                        for (e in t) n !== (i = t[e]) && void 0 !== i && (n[e] = i);
                return n
            }

            function Ln(t) {
                return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t
            }

            function zn(t, e, i, n) {
                if (n) try {
                    t.setItem(e, i)
                } catch (t) {}
                return i
            }

            function In() {
                var t = or,
                    e = t.body;
                return e || ((e = t.createElement("body")).fake = !0), e
            }
            var i = or.documentElement;

            function Nn(t) {
                var e = "";
                return t.fake && (e = i.style.overflow, t.style.background = "", t.style.overflow = i.style.overflow = "hidden", i.appendChild(t)), e
            }

            function Bn(t, e) {
                t.fake && (t.remove(), i.style.overflow = e, i.offsetHeight)
            }

            function Rn(t, e, i, n) {
                "insertRule" in t ? t.insertRule(e + "{" + i + "}", n) : t.addRule(e, i, n)
            }

            function jn(t) {
                return ("insertRule" in t ? t.cssRules : t.rules).length
            }

            function qn(t, e, i) {
                for (var n = 0, r = t.length; n < r; n++) e.call(i, t[n], n)
            }
            var n = "classList" in or.createElement("_"),
                Hn = n ? function(t, e) {
                    return t.classList.contains(e)
                } : function(t, e) {
                    return 0 <= t.className.indexOf(e)
                },
                Fn = n ? function(t, e) {
                    Hn(t, e) || t.classList.add(e)
                } : function(t, e) {
                    Hn(t, e) || (t.className += " " + e)
                },
                Vn = n ? function(t, e) {
                    Hn(t, e) && t.classList.remove(e)
                } : function(t, e) {
                    Hn(t, e) && (t.className = t.className.replace(e, ""))
                };

            function Wn(t, e) {
                return t.hasAttribute(e)
            }

            function Gn(t, e) {
                return t.getAttribute(e)
            }

            function o(t) {
                return void 0 !== t.item
            }

            function Yn(t, e) {
                if (t = o(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
                    for (var i = t.length; i--;)
                        for (var n in e) t[i].setAttribute(n, e[n])
            }

            function Un(t, e) {
                t = o(t) || t instanceof Array ? t : [t];
                for (var i = (e = e instanceof Array ? e : [e]).length, n = t.length; n--;)
                    for (var r = i; r--;) t[n].removeAttribute(e[r])
            }

            function $n(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) e.push(t[i]);
                return e
            }

            function Kn(t, e) {
                "none" !== t.style.display && (t.style.display = "none")
            }

            function Zn(t, e) {
                "none" === t.style.display && (t.style.display = "")
            }

            function Xn(t) {
                return "none" !== rr.getComputedStyle(t).display
            }

            function Jn(e) {
                if ("string" == typeof e) {
                    var i = [e],
                        n = e.charAt(0).toUpperCase() + e.substr(1);
                    ["Webkit", "Moz", "ms", "O"].forEach(function(t) {
                        "ms" === t && "transform" !== e || i.push(t + n)
                    }), e = i
                }
                for (var t = or.createElement("fakeelement"), r = (e.length, 0); r < e.length; r++) {
                    var o = e[r];
                    if (void 0 !== t.style[o]) return o
                }
                return !1
            }

            function Qn(t, e) {
                var i = !1;
                return /^Webkit/.test(t) ? i = "webkit" + e + "End" : /^O/.test(t) ? i = "o" + e + "End" : t && (i = e.toLowerCase() + "end"), i
            }
            var r = !1;
            try {
                var a = Object.defineProperty({}, "passive", {
                    get: function() {
                        r = !0
                    }
                });
                rr.addEventListener("test", null, a)
            } catch (t) {}
            var s = !!r && {
                passive: !0
            };

            function tr(t, e, i) {
                for (var n in e) {
                    var r = 0 <= ["touchstart", "touchmove"].indexOf(n) && !i && s;
                    t.addEventListener(n, e[n], r)
                }
            }

            function er(t, e) {
                for (var i in e) {
                    var n = 0 <= ["touchstart", "touchmove"].indexOf(i) && s;
                    t.removeEventListener(i, e[i], n)
                }
            }

            function ir() {
                return {
                    topics: {},
                    on: function(t, e) {
                        this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
                    },
                    off: function(t, e) {
                        if (this.topics[t])
                            for (var i = 0; i < this.topics[t].length; i++)
                                if (this.topics[t][i] === e) {
                                    this.topics[t].splice(i, 1);
                                    break
                                }
                    },
                    emit: function(e, i) {
                        i.type = e, this.topics[e] && this.topics[e].forEach(function(t) {
                            t(i, e)
                        })
                    }
                }
            }
            Object.keys || (Object.keys = function(t) {
                var e = [];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                return e
            }), "remove" in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this)
            });
            var nr = function(P) {
                P = On({
                    container: ".slider",
                    mode: "carousel",
                    axis: "horizontal",
                    items: 1,
                    gutter: 0,
                    edgePadding: 0,
                    fixedWidth: !1,
                    autoWidth: !1,
                    viewportMax: !1,
                    slideBy: 1,
                    center: !1,
                    controls: !0,
                    controlsPosition: "top",
                    controlsText: ["prev", "next"],
                    controlsContainer: !1,
                    prevButton: !1,
                    nextButton: !1,
                    nav: !0,
                    navPosition: "top",
                    navContainer: !1,
                    navAsThumbnails: !1,
                    arrowKeys: !1,
                    speed: 300,
                    autoplay: !1,
                    autoplayPosition: "top",
                    autoplayTimeout: 5e3,
                    autoplayDirection: "forward",
                    autoplayText: ["start", "stop"],
                    autoplayHoverPause: !1,
                    autoplayButton: !1,
                    autoplayButtonOutput: !0,
                    autoplayResetOnVisibility: !0,
                    animateIn: "tns-fadeIn",
                    animateOut: "tns-fadeOut",
                    animateNormal: "tns-normal",
                    animateDelay: !1,
                    loop: !0,
                    rewind: !1,
                    autoHeight: !1,
                    responsive: !1,
                    lazyload: !1,
                    lazyloadSelector: ".tns-lazy-img",
                    touch: !0,
                    mouseDrag: !1,
                    swipeAngle: 15,
                    nested: !1,
                    preventActionWhenRunning: !1,
                    preventScrollOnTouch: !1,
                    freezable: !0,
                    onInit: !1,
                    useLocalStorage: !0
                }, P || {});
                var O = or,
                    g = rr,
                    r = {
                        ENTER: 13,
                        SPACE: 32,
                        LEFT: 37,
                        RIGHT: 39
                    },
                    e = {},
                    t = P.useLocalStorage;
                if (t) {
                    var i = navigator.userAgent,
                        n = new Date;
                    try {
                        (e = g.localStorage) ? (e.setItem(n, n), t = e.getItem(n) == n, e.removeItem(n)) : t = !1, t || (e = {})
                    } catch (i) {
                        t = !1
                    }
                    t && (e.tnsApp && e.tnsApp !== i && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) {
                        e.removeItem(t)
                    }), ar.tnsApp = i)
                }
                var o, a, s, c, l, u, d, y = e.tC ? Ln(e.tC) : zn(e, "tC", function() {
                        var t = or,
                            e = In(),
                            i = Nn(e),
                            n = t.createElement("div"),
                            r = !1;
                        e.appendChild(n);
                        try {
                            for (var o, a = "(10px * 10)", s = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], c = 0; c < 3; c++)
                                if (o = s[c], n.style.width = o, 100 === n.offsetWidth) {
                                    r = o.replace(a, "");
                                    break
                                }
                        } catch (t) {}
                        return e.fake ? Bn(e, i) : n.remove(), r
                    }(), t),
                    v = e.tPL ? Ln(e.tPL) : zn(e, "tPL", function() {
                        var t, e = or,
                            i = In(),
                            n = Nn(i),
                            r = e.createElement("div"),
                            o = e.createElement("div"),
                            a = "";
                        r.className = "tns-t-subp2", o.className = "tns-t-ct";
                        for (var s = 0; s < 70; s++) a += "<div></div>";
                        return o.innerHTML = a, r.appendChild(o), i.appendChild(r), t = Math.abs(r.getBoundingClientRect().left - o.children[67].getBoundingClientRect().left) < 2, i.fake ? Bn(i, n) : r.remove(), t
                    }(), t),
                    L = e.tMQ ? Ln(e.tMQ) : zn(e, "tMQ", (a = or, c = Nn(s = In()), l = a.createElement("div"), d = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", (u = a.createElement("style")).type = "text/css", l.className = "tns-mq-test", s.appendChild(u), s.appendChild(l), u.styleSheet ? u.styleSheet.cssText = d : u.appendChild(a.createTextNode(d)), o = rr.getComputedStyle ? rr.getComputedStyle(l).position : l.currentStyle.position, s.fake ? Bn(s, c) : l.remove(), "absolute" === o), t),
                    h = e.tTf ? Ln(e.tTf) : zn(e, "tTf", Jn("transform"), t),
                    p = e.t3D ? Ln(e.t3D) : zn(e, "t3D", function(t) {
                        if (!t) return !1;
                        if (!rr.getComputedStyle) return !1;
                        var e, i = or,
                            n = In(),
                            r = Nn(n),
                            o = i.createElement("p"),
                            a = 9 < t.length ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
                        return a += "transform", n.insertBefore(o, null), o.style[t] = "translate3d(1px,1px,1px)", e = rr.getComputedStyle(o).getPropertyValue(a), n.fake ? Bn(n, r) : o.remove(), void 0 !== e && 0 < e.length && "none" !== e
                    }(h), t),
                    b = e.tTDu ? Ln(e.tTDu) : zn(e, "tTDu", Jn("transitionDuration"), t),
                    f = e.tTDe ? Ln(e.tTDe) : zn(e, "tTDe", Jn("transitionDelay"), t),
                    S = e.tADu ? Ln(e.tADu) : zn(e, "tADu", Jn("animationDuration"), t),
                    m = e.tADe ? Ln(e.tADe) : zn(e, "tADe", Jn("animationDelay"), t),
                    A = e.tTE ? Ln(e.tTE) : zn(e, "tTE", Qn(b, "Transition"), t),
                    _ = e.tAE ? Ln(e.tAE) : zn(e, "tAE", Qn(S, "Animation"), t),
                    w = g.console && "function" == typeof g.console.warn,
                    C = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
                    k = {};
                if (C.forEach(function(t) {
                        if ("string" == typeof P[t]) {
                            var e = P[t],
                                i = O.querySelector(e);
                            if (k[t] = e, !i || !i.nodeName) return void(w && console.warn("Can't find", P[t]));
                            P[t] = i
                        }
                    }), !(P.container.children.length < 1)) {
                    var z = P.responsive,
                        I = P.nested,
                        N = "carousel" === P.mode;
                    if (z) {
                        0 in z && (P = On(P, z[0]), delete z[0]);
                        var T = {};
                        for (var x in z) {
                            var E = z[x];
                            E = "number" == typeof E ? {
                                items: E
                            } : E, T[x] = E
                        }
                        z = T, T = null
                    }
                    if (N || function t(e) {
                            for (var i in e) N || ("slideBy" === i && (e[i] = "page"), "edgePadding" === i && (e[i] = !1), "autoHeight" === i && (e[i] = !1)), "responsive" === i && t(e[i])
                        }(P), !N) {
                        P.axis = "horizontal", P.slideBy = "page", P.edgePadding = !1;
                        var B = P.animateIn,
                            R = P.animateOut,
                            M = P.animateDelay,
                            j = P.animateNormal
                    }
                    var D, q, H = "horizontal" === P.axis,
                        F = O.createElement("div"),
                        V = O.createElement("div"),
                        W = P.container,
                        G = W.parentNode,
                        Y = W.outerHTML,
                        U = W.children,
                        $ = U.length,
                        K = si(),
                        Z = !1;
                    z && xi(), N && (W.className += " tns-vpfix");
                    var X, J, Q, tt, et, it, nt, rt = P.autoWidth,
                        ot = di("fixedWidth"),
                        at = di("edgePadding"),
                        st = di("gutter"),
                        ct = li(),
                        lt = di("center"),
                        ut = rt ? 1 : Math.floor(di("items")),
                        dt = di("slideBy"),
                        ht = P.viewportMax || P.fixedWidthViewportWidth,
                        pt = di("arrowKeys"),
                        ft = di("speed"),
                        mt = P.rewind,
                        gt = !mt && P.loop,
                        yt = di("autoHeight"),
                        vt = di("controls"),
                        bt = di("controlsText"),
                        St = di("nav"),
                        At = di("touch"),
                        _t = di("mouseDrag"),
                        wt = di("autoplay"),
                        Ct = di("autoplayTimeout"),
                        kt = di("autoplayText"),
                        Tt = di("autoplayHoverPause"),
                        xt = di("autoplayResetOnVisibility"),
                        Et = (nt = or.createElement("style"), or.querySelector("head").appendChild(nt), nt.sheet ? nt.sheet : nt.styleSheet),
                        Mt = P.lazyload,
                        Dt = (P.lazyloadSelector, []),
                        Pt = gt ? (et = function() {
                            if (rt || ot && !ht) return $ - 1;
                            var t = ot ? "fixedWidth" : "items",
                                e = [];
                            if ((ot || P[t] < $) && e.push(P[t]), z)
                                for (var i in z) {
                                    var n = z[i][t];
                                    n && (ot || n < $) && e.push(n)
                                }
                            return e.length || e.push(0), Math.ceil(ot ? ht / Math.min.apply(null, e) : Math.max.apply(null, e))
                        }(), it = N ? Math.ceil((5 * et - $) / 2) : 4 * et - $, it = Math.max(et, it), ui("edgePadding") ? it + 1 : it) : 0,
                        Ot = N ? $ + 2 * Pt : $ + Pt,
                        Lt = !(!ot && !rt || gt),
                        zt = ot ? tn() : null,
                        It = !N || !gt,
                        Nt = H ? "left" : "top",
                        Bt = "",
                        Rt = "",
                        jt = ot ? function() {
                            return lt && !gt ? $ - 1 : Math.ceil(-zt / (ot + st))
                        } : rt ? function() {
                            for (var t = Ot; t--;)
                                if (X[t] > -zt) return t
                        } : function() {
                            return lt && N && !gt ? $ - 1 : gt || N ? Math.max(0, Ot - Math.ceil(ut)) : Ot - 1
                        },
                        qt = ri(di("startIndex")),
                        Ht = qt,
                        Ft = (ni(), 0),
                        Vt = rt ? null : jt(),
                        Wt = P.preventActionWhenRunning,
                        Gt = P.swipeAngle,
                        Yt = !Gt || "?",
                        Ut = !1,
                        $t = P.onInit,
                        Kt = new ir,
                        Zt = " tns-slider tns-" + P.mode,
                        Xt = W.id || (tt = rr.tnsId, rr.tnsId = tt ? tt + 1 : 1, "tns" + rr.tnsId),
                        Jt = di("disable"),
                        Qt = !1,
                        te = P.freezable,
                        ee = !(!te || rt) && Ti(),
                        ie = !1,
                        ne = {
                            click: un,
                            keydown: function(t) {
                                t = vn(t);
                                var e = [r.LEFT, r.RIGHT].indexOf(t.keyCode);
                                0 <= e && (0 === e ? Ce.disabled || un(t, -1) : ke.disabled || un(t, 1))
                            }
                        },
                        re = {
                            click: function(t) {
                                if (Ut) {
                                    if (Wt) return;
                                    cn()
                                }
                                for (var e = bn(t = vn(t)); e !== Me && !Wn(e, "data-nav");) e = e.parentNode;
                                if (Wn(e, "data-nav")) {
                                    var i = Le = Number(Gn(e, "data-nav")),
                                        n = ot || rt ? i * $ / Pe : i * ut;
                                    ln(he ? i : Math.min(Math.ceil(n), $ - 1), t), ze === i && (qe && mn(), Le = -1)
                                }
                            },
                            keydown: function(t) {
                                t = vn(t);
                                var e = O.activeElement;
                                if (Wn(e, "data-nav")) {
                                    var i = [r.LEFT, r.RIGHT, r.ENTER, r.SPACE].indexOf(t.keyCode),
                                        n = Number(Gn(e, "data-nav"));
                                    0 <= i && (0 === i ? 0 < n && yn(Ee[n - 1]) : 1 === i ? n < Pe - 1 && yn(Ee[n + 1]) : ln(Le = n, t))
                                }
                            }
                        },
                        oe = {
                            mouseover: function() {
                                qe && (hn(), He = !0)
                            },
                            mouseout: function() {
                                He && (dn(), He = !1)
                            }
                        },
                        ae = {
                            visibilitychange: function() {
                                O.hidden ? qe && (hn(), Ve = !0) : Ve && (dn(), Ve = !1)
                            }
                        },
                        se = {
                            keydown: function(t) {
                                t = vn(t);
                                var e = [r.LEFT, r.RIGHT].indexOf(t.keyCode);
                                0 <= e && un(t, 0 === e ? -1 : 1)
                            }
                        },
                        ce = {
                            touchstart: wn,
                            touchmove: Cn,
                            touchend: kn,
                            touchcancel: kn
                        },
                        le = {
                            mousedown: wn,
                            mousemove: Cn,
                            mouseup: kn,
                            mouseleave: kn
                        },
                        ue = ui("controls"),
                        de = ui("nav"),
                        he = !!rt || P.navAsThumbnails,
                        pe = ui("autoplay"),
                        fe = ui("touch"),
                        me = ui("mouseDrag"),
                        ge = "tns-slide-active",
                        ye = "tns-complete",
                        ve = {
                            load: function(t) {
                                Ni(bn(t))
                            },
                            error: function(t) {
                                var e;
                                e = bn(t), Fn(e, "failed"), Bi(e)
                            }
                        },
                        be = "force" === P.preventScrollOnTouch;
                    if (ue) var Se, Ae, _e = P.controlsContainer,
                        we = P.controlsContainer ? P.controlsContainer.outerHTML : "",
                        Ce = P.prevButton,
                        ke = P.nextButton,
                        Te = P.prevButton ? P.prevButton.outerHTML : "",
                        xe = P.nextButton ? P.nextButton.outerHTML : "";
                    if (de) var Ee, Me = P.navContainer,
                        De = P.navContainer ? P.navContainer.outerHTML : "",
                        Pe = rt ? $ : xn(),
                        Oe = 0,
                        Le = -1,
                        ze = ai(),
                        Ie = ze,
                        Ne = "tns-nav-active",
                        Be = "Carousel Page ",
                        Re = " (Current Slide)";
                    if (pe) var je, qe, He, Fe, Ve, We = "forward" === P.autoplayDirection ? 1 : -1,
                        Ge = P.autoplayButton,
                        Ye = P.autoplayButton ? P.autoplayButton.outerHTML : "",
                        Ue = ["<span class='tns-visually-hidden'>", " animation</span>"];
                    if (fe || me) var $e, Ke, Ze = {},
                        Xe = {},
                        Je = !1,
                        Qe = H ? function(t, e) {
                            return t.x - e.x
                        } : function(t, e) {
                            return t.y - e.y
                        };
                    rt || ii(Jt || ee), h && (Nt = h, Bt = "translate", Rt = p ? (Bt += H ? "3d(" : "3d(0px, ", H ? ", 0px, 0px)" : ", 0px)") : (Bt += H ? "X(" : "Y(", ")")), N && (W.className = W.className.replace("tns-vpfix", "")),
                        function() {
                            (ui("gutter"), F.className = "tns-outer", V.className = "tns-inner", F.id = Xt + "-ow", V.id = Xt + "-iw", "" === W.id && (W.id = Xt), Zt += v || rt ? " tns-subpixel" : " tns-no-subpixel", Zt += y ? " tns-calc" : " tns-no-calc", rt && (Zt += " tns-autowidth"), Zt += " tns-" + P.axis, W.className += Zt, N ? ((D = O.createElement("div")).id = Xt + "-mw", D.className = "tns-ovh", F.appendChild(D), D.appendChild(V)) : F.appendChild(V), yt) && ((D || V).className += " tns-ah");
                            if (G.insertBefore(F, W), V.appendChild(W), qn(U, function(t, e) {
                                    Fn(t, "tns-item"), t.id || (t.id = Xt + "-item" + e), !N && j && Fn(t, j), Yn(t, {
                                        "aria-hidden": "true",
                                        tabindex: "-1"
                                    })
                                }), Pt) {
                                for (var t = O.createDocumentFragment(), e = O.createDocumentFragment(), i = Pt; i--;) {
                                    var n = i % $,
                                        r = U[n].cloneNode(!0);
                                    if (Un(r, "id"), e.insertBefore(r, e.firstChild), N) {
                                        var o = U[$ - 1 - n].cloneNode(!0);
                                        Un(o, "id"), t.appendChild(o)
                                    }
                                }
                                W.insertBefore(t, W.firstChild), W.appendChild(e), U = W.children
                            }
                        }(),
                        function() {
                            if (!N)
                                for (var t = qt, e = qt + Math.min($, ut); t < e; t++) {
                                    var i = U[t];
                                    i.style.left = 100 * (t - qt) / ut + "%", Fn(i, B), Vn(i, j)
                                }
                            if (H && (v || rt ? (Rn(Et, "#" + Xt + " > .tns-item", "font-size:" + g.getComputedStyle(U[0]).fontSize + ";", jn(Et)), Rn(Et, "#" + Xt, "font-size:0;", jn(Et))) : N && qn(U, function(t, e) {
                                    var i;
                                    t.style.marginLeft = (i = e, y ? y + "(" + 100 * i + "% / " + Ot + ")" : 100 * i / Ot + "%")
                                })), L) {
                                if (b) {
                                    var n = D && P.autoHeight ? yi(P.speed) : "";
                                    Rn(Et, "#" + Xt + "-mw", n, jn(Et))
                                }
                                n = hi(P.edgePadding, P.gutter, P.fixedWidth, P.speed, P.autoHeight), Rn(Et, "#" + Xt + "-iw", n, jn(Et)), N && (n = H && !rt ? "width:" + pi(P.fixedWidth, P.gutter, P.items) + ";" : "", b && (n += yi(ft)), Rn(Et, "#" + Xt, n, jn(Et))), n = H && !rt ? fi(P.fixedWidth, P.gutter, P.items) : "", P.gutter && (n += mi(P.gutter)), N || (b && (n += yi(ft)), S && (n += vi(ft))), n && Rn(Et, "#" + Xt + " > .tns-item", n, jn(Et))
                            } else {
                                Fi(), V.style.cssText = hi(at, st, ot, yt), N && H && !rt && (W.style.width = pi(ot, st, ut));
                                n = H && !rt ? fi(ot, st, ut) : "";
                                st && (n += mi(st)), n && Rn(Et, "#" + Xt + " > .tns-item", n, jn(Et))
                            }
                            if (z && L)
                                for (var r in z) {
                                    r = parseInt(r);
                                    var o = z[r],
                                        a = (n = "", ""),
                                        s = "",
                                        c = "",
                                        l = "",
                                        u = rt ? null : di("items", r),
                                        d = di("fixedWidth", r),
                                        h = di("speed", r),
                                        p = di("edgePadding", r),
                                        f = di("autoHeight", r),
                                        m = di("gutter", r);
                                    b && D && di("autoHeight", r) && "speed" in o && (a = "#" + Xt + "-mw{" + yi(h) + "}"), ("edgePadding" in o || "gutter" in o) && (s = "#" + Xt + "-iw{" + hi(p, m, d, h, f) + "}"), N && H && !rt && ("fixedWidth" in o || "items" in o || ot && "gutter" in o) && (c = "width:" + pi(d, m, u) + ";"), b && "speed" in o && (c += yi(h)), c && (c = "#" + Xt + "{" + c + "}"), ("fixedWidth" in o || ot && "gutter" in o || !N && "items" in o) && (l += fi(d, m, u)), "gutter" in o && (l += mi(m)), !N && "speed" in o && (b && (l += yi(h)), S && (l += vi(h))), l && (l = "#" + Xt + " > .tns-item{" + l + "}"), (n = a + s + c + l) && Et.insertRule("@media (min-width: " + r / 16 + "em) {" + n + "}", Et.cssRules.length)
                                }
                        }(), bi();
                    var ti = gt ? N ? function() {
                            var t = Ft,
                                e = Vt;
                            t += dt, e -= dt, at ? (t += 1, e -= 1) : ot && (ct + st) % (ot + st) && (e -= 1), Pt && (e < qt ? qt -= $ : qt < t && (qt += $))
                        } : function() {
                            if (Vt < qt)
                                for (; Ft + $ <= qt;) qt -= $;
                            else if (qt < Ft)
                                for (; qt <= Vt - $;) qt += $
                        } : function() {
                            qt = Math.max(Ft, Math.min(Vt, qt))
                        },
                        ei = N ? function() {
                            var e, i, n, r, t, o, a, s, c, l, u;
                            Ji(W, ""), b || !ft ? (rn(), ft && Xn(W) || cn()) : (e = W, i = Nt, n = Bt, r = Rt, t = en(), o = ft, a = cn, s = Math.min(o, 10), c = 0 <= t.indexOf("%") ? "%" : "px", t = t.replace(c, ""), l = Number(e.style[i].replace(n, "").replace(r, "").replace(c, "")), u = (t - l) / o * s, setTimeout(function t() {
                                o -= s, l += u, e.style[i] = n + l + c + r, 0 < o ? setTimeout(t, s) : a()
                            }, s)), H || Tn()
                        } : function() {
                            Dt = [];
                            var t = {};
                            t[A] = t[_] = cn, er(U[Ht], t), tr(U[qt], t), on(Ht, B, R, !0), on(qt, j, B), A && _ && ft && Xn(W) || cn()
                        };
                    return {
                        version: "2.9.1",
                        getInfo: Mn,
                        events: Kt,
                        goTo: ln,
                        play: function() {
                            wt && !qe && (fn(), Fe = !1)
                        },
                        pause: function() {
                            qe && (mn(), Fe = !0)
                        },
                        isOn: Z,
                        updateSliderHeight: Wi,
                        refresh: bi,
                        destroy: function() {
                            if (Et.disabled = !0, Et.ownerNode && Et.ownerNode.remove(), er(g, {
                                    resize: Ci
                                }), pt && er(O, se), _e && er(_e, ne), Me && er(Me, re), er(W, oe), er(W, ae), Ge && er(Ge, {
                                    click: gn
                                }), wt && clearInterval(je), N && A) {
                                var t = {};
                                t[A] = cn, er(W, t)
                            }
                            At && er(W, ce), _t && er(W, le);
                            var o = [Y, we, Te, xe, De, Ye];
                            for (var e in C.forEach(function(t, e) {
                                    var i = "container" === t ? F : P[t];
                                    if ("object" == typeof i) {
                                        var n = !!i.previousElementSibling && i.previousElementSibling,
                                            r = i.parentNode;
                                        i.outerHTML = o[e], P[t] = n ? n.nextElementSibling : r.firstElementChild
                                    }
                                }), C = B = R = M = j = H = F = V = W = G = Y = U = $ = q = K = rt = ot = at = st = ct = ut = dt = ht = pt = ft = mt = gt = yt = Et = Mt = X = Dt = Pt = Ot = Lt = zt = It = Nt = Bt = Rt = jt = qt = Ht = Ft = Vt = Gt = Yt = Ut = $t = Kt = Zt = Xt = Jt = Qt = te = ee = ie = ne = re = oe = ae = se = ce = le = ue = de = he = pe = fe = me = ge = ye = ve = J = vt = bt = _e = we = Ce = ke = Se = Ae = St = Me = De = Ee = Pe = Oe = Le = ze = Ie = Ne = Be = Re = wt = Ct = We = kt = Tt = Ge = Ye = xt = Ue = je = qe = He = Fe = Ve = Ze = Xe = $e = Je = Ke = Qe = At = _t = null, this) "rebuild" !== e && (this[e] = null);
                            Z = !1
                        },
                        rebuild: function() {
                            return nr(On(P, k))
                        }
                    }
                }

                function ii(t) {
                    t && (vt = St = At = _t = pt = wt = Tt = xt = !1)
                }

                function ni() {
                    for (var t = N ? qt - Pt : qt; t < 0;) t += $;
                    return t % $ + 1
                }

                function ri(t) {
                    return t = t ? Math.max(0, Math.min(gt ? $ - 1 : $ - ut, t)) : 0, N ? t + Pt : t
                }

                function oi(t) {
                    for (null == t && (t = qt), N && (t -= Pt); t < 0;) t += $;
                    return Math.floor(t % $)
                }

                function ai() {
                    var t, e = oi();
                    return t = he ? e : ot || rt ? Math.ceil((e + 1) * Pe / $ - 1) : Math.floor(e / ut), !gt && N && qt === Vt && (t = Pe - 1), t
                }

                function si() {
                    return g.innerWidth || O.documentElement.clientWidth || O.body.clientWidth
                }

                function ci(t) {
                    return "top" === t ? "afterbegin" : "beforeend"
                }

                function li() {
                    var t = at ? 2 * at - st : 0;
                    return function t(e) {
                        var i, n, r = O.createElement("div");
                        return e.appendChild(r), n = (i = r.getBoundingClientRect()).right - i.left, r.remove(), n || t(e.parentNode)
                    }(G) - t
                }

                function ui(t) {
                    if (P[t]) return !0;
                    if (z)
                        for (var e in z)
                            if (z[e][t]) return !0;
                    return !1
                }

                function di(t, e) {
                    if (null == e && (e = K), "items" === t && ot) return Math.floor((ct + st) / (ot + st)) || 1;
                    var i = P[t];
                    if (z)
                        for (var n in z) e >= parseInt(n) && t in z[n] && (i = z[n][t]);
                    return "slideBy" === t && "page" === i && (i = di("items")), N || "slideBy" !== t && "items" !== t || (i = Math.floor(i)), i
                }

                function hi(t, e, i, n, r) {
                    var o = "";
                    if (void 0 !== t) {
                        var a = t;
                        e && (a -= e), o = H ? "margin: 0 " + a + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + a + "px 0;"
                    } else if (e && !i) {
                        var s = "-" + e + "px";
                        o = "margin: 0 " + (H ? s + " 0 0" : "0 " + s + " 0") + ";"
                    }
                    return !N && r && b && n && (o += yi(n)), o
                }

                function pi(t, e, i) {
                    return t ? (t + e) * Ot + "px" : y ? y + "(" + 100 * Ot + "% / " + i + ")" : 100 * Ot / i + "%"
                }

                function fi(t, e, i) {
                    var n;
                    if (t) n = t + e + "px";
                    else {
                        N || (i = Math.floor(i));
                        var r = N ? Ot : i;
                        n = y ? y + "(100% / " + r + ")" : 100 / r + "%"
                    }
                    return n = "width:" + n, "inner" !== I ? n + ";" : n + " !important;"
                }

                function mi(t) {
                    var e = "";
                    return !1 !== t && (e = (H ? "padding-" : "margin-") + (H ? "right" : "bottom") + ": " + t + "px;"), e
                }

                function gi(t, e) {
                    var i = t.substring(0, t.length - e).toLowerCase();
                    return i && (i = "-" + i + "-"), i
                }

                function yi(t) {
                    return gi(b, 18) + "transition-duration:" + t / 1e3 + "s;"
                }

                function vi(t) {
                    return gi(S, 17) + "animation-duration:" + t / 1e3 + "s;"
                }

                function bi() {
                    if (ui("autoHeight") || rt || !H) {
                        var t = W.querySelectorAll("img");
                        qn(t, function(t) {
                            var e = t.src;
                            e && e.indexOf("data:image") < 0 ? (tr(t, ve), t.src = "", t.src = e, Fn(t, "loading")) : Mt || Ni(t)
                        }), Dn(function() {
                            qi($n(t), function() {
                                J = !0
                            })
                        }), !rt && H && (t = Ri(qt, Math.min(qt + ut - 1, Ot - 1))), Mt ? Si() : Dn(function() {
                            qi($n(t), Si)
                        })
                    } else N && nn(), _i(), wi()
                }

                function Si() {
                    if (rt) {
                        var e = gt ? qt : $ - 1;
                        ! function t() {
                            U[e - 1].getBoundingClientRect().right.toFixed(2) === U[e].getBoundingClientRect().left.toFixed(2) ? Ai() : setTimeout(function() {
                                t()
                            }, 16)
                        }()
                    } else Ai()
                }

                function Ai() {
                    H && !rt || (Gi(), rt ? (zt = tn(), te && (ee = Ti()), Vt = jt(), ii(Jt || ee)) : Tn()), N && nn(), _i(), wi()
                }

                function _i() {
                    if (Yi(), F.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Li() + "</span>  of " + $ + "</div>"), Q = F.querySelector(".tns-liveregion .current"), pe) {
                        var t = wt ? "stop" : "start";
                        Ge ? Yn(Ge, {
                            "data-action": t
                        }) : P.autoplayButtonOutput && (F.insertAdjacentHTML(ci(P.autoplayPosition), '<button data-action="' + t + '">' + Ue[0] + t + Ue[1] + kt[0] + "</button>"), Ge = F.querySelector("[data-action]")), Ge && tr(Ge, {
                            click: gn
                        }), wt && (fn(), Tt && tr(W, oe), xt && tr(W, ae))
                    }
                    if (de) {
                        if (Me) Yn(Me, {
                            "aria-label": "Carousel Pagination"
                        }), qn(Ee = Me.children, function(t, e) {
                            Yn(t, {
                                "data-nav": e,
                                tabindex: "-1",
                                "aria-label": Be + (e + 1),
                                "aria-controls": Xt
                            })
                        });
                        else {
                            for (var e = "", i = he ? "" : 'style="display:none"', n = 0; n < $; n++) e += '<button data-nav="' + n + '" tabindex="-1" aria-controls="' + Xt + '" ' + i + ' aria-label="' + Be + (n + 1) + '"></button>';
                            e = '<div class="tns-nav" aria-label="Carousel Pagination">' + e + "</div>", F.insertAdjacentHTML(ci(P.navPosition), e), Me = F.querySelector(".tns-nav"), Ee = Me.children
                        }
                        if (En(), b) {
                            var r = b.substring(0, b.length - 18).toLowerCase(),
                                o = "transition: all " + ft / 1e3 + "s";
                            r && (o = "-" + r + "-" + o), Rn(Et, "[aria-controls^=" + Xt + "-item]", o, jn(Et))
                        }
                        Yn(Ee[ze], {
                            "aria-label": Be + (ze + 1) + Re
                        }), Un(Ee[ze], "tabindex"), Fn(Ee[ze], Ne), tr(Me, re)
                    }
                    ue && (_e || Ce && ke || (F.insertAdjacentHTML(ci(P.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + Xt + '">' + bt[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + Xt + '">' + bt[1] + "</button></div>"), _e = F.querySelector(".tns-controls")), Ce && ke || (Ce = _e.children[0], ke = _e.children[1]), P.controlsContainer && Yn(_e, {
                        "aria-label": "Carousel Navigation",
                        tabindex: "0"
                    }), (P.controlsContainer || P.prevButton && P.nextButton) && Yn([Ce, ke], {
                        "aria-controls": Xt,
                        tabindex: "-1"
                    }), (P.controlsContainer || P.prevButton && P.nextButton) && (Yn(Ce, {
                        "data-controls": "prev"
                    }), Yn(ke, {
                        "data-controls": "next"
                    })), Se = $i(Ce), Ae = $i(ke), Xi(), _e ? tr(_e, ne) : (tr(Ce, ne), tr(ke, ne))), Ei()
                }

                function wi() {
                    if (N && A) {
                        var t = {};
                        t[A] = cn, tr(W, t)
                    }
                    At && tr(W, ce, P.preventScrollOnTouch), _t && tr(W, le), pt && tr(O, se), "inner" === I ? Kt.on("outerResized", function() {
                        ki(), Kt.emit("innerLoaded", Mn())
                    }) : (z || ot || rt || yt || !H) && tr(g, {
                        resize: Ci
                    }), yt && ("outer" === I ? Kt.on("innerLoaded", ji) : Jt || ji()), Ii(), Jt ? Pi() : ee && Di(), Kt.on("indexChanged", Hi), "inner" === I && Kt.emit("innerLoaded", Mn()), "function" == typeof $t && $t(Mn()), Z = !0
                }

                function Ci(t) {
                    Dn(function() {
                        ki(vn(t))
                    })
                }

                function ki(t) {
                    if (Z) {
                        "outer" === I && Kt.emit("outerResized", Mn(t)), K = si();
                        var e, i = q,
                            n = !1;
                        z && (xi(), (e = i !== q) && Kt.emit("newBreakpointStart", Mn(t)));
                        var r, o, a, s, c = ut,
                            l = Jt,
                            u = ee,
                            d = pt,
                            h = vt,
                            p = St,
                            f = At,
                            m = _t,
                            g = wt,
                            y = Tt,
                            v = xt,
                            b = qt;
                        if (e) {
                            var S = ot,
                                A = yt,
                                _ = bt,
                                w = lt,
                                C = kt;
                            if (!L) var k = st,
                                T = at
                        }
                        if (pt = di("arrowKeys"), vt = di("controls"), St = di("nav"), At = di("touch"), lt = di("center"), _t = di("mouseDrag"), wt = di("autoplay"), Tt = di("autoplayHoverPause"), xt = di("autoplayResetOnVisibility"), e && (Jt = di("disable"), ot = di("fixedWidth"), ft = di("speed"), yt = di("autoHeight"), bt = di("controlsText"), kt = di("autoplayText"), Ct = di("autoplayTimeout"), L || (at = di("edgePadding"), st = di("gutter"))), ii(Jt), ct = li(), H && !rt || Jt || (Gi(), H || (Tn(), n = !0)), (ot || rt) && (zt = tn(), Vt = jt()), (e || ot) && (ut = di("items"), dt = di("slideBy"), (o = ut !== c) && (ot || rt || (Vt = jt()), ti())), e && Jt !== l && (Jt ? Pi() : function() {
                                if (Qt) {
                                    if (Et.disabled = !1, W.className += Zt, nn(), gt)
                                        for (var t = Pt; t--;) N && Zn(U[t]), Zn(U[Ot - t - 1]);
                                    if (!N)
                                        for (var e = qt, i = qt + $; e < i; e++) {
                                            var n = U[e],
                                                r = e < qt + ut ? B : j;
                                            n.style.left = 100 * (e - qt) / ut + "%", Fn(n, r)
                                        }
                                    Mi(), Qt = !1
                                }
                            }()), te && (e || ot || rt) && (ee = Ti()) !== u && (ee ? (rn(en(ri(0))), Di()) : (function() {
                                if (ie) {
                                    if (at && L && (V.style.margin = ""), Pt)
                                        for (var t = "tns-transparent", e = Pt; e--;) N && Vn(U[e], t), Vn(U[Ot - e - 1], t);
                                    Mi(), ie = !1
                                }
                            }(), n = !0)), ii(Jt || ee), wt || (Tt = xt = !1), pt !== d && (pt ? tr(O, se) : er(O, se)), vt !== h && (vt ? _e ? Zn(_e) : (Ce && Zn(Ce), ke && Zn(ke)) : _e ? Kn(_e) : (Ce && Kn(Ce), ke && Kn(ke))), St !== p && (St ? Zn(Me) : Kn(Me)), At !== f && (At ? tr(W, ce, P.preventScrollOnTouch) : er(W, ce)), _t !== m && (_t ? tr(W, le) : er(W, le)), wt !== g && (wt ? (Ge && Zn(Ge), qe || Fe || fn()) : (Ge && Kn(Ge), qe && mn())), Tt !== y && (Tt ? tr(W, oe) : er(W, oe)), xt !== v && (xt ? tr(O, ae) : er(O, ae)), e) {
                            if (ot === S && lt === w || (n = !0), yt !== A && (yt || (V.style.height = "")), vt && bt !== _ && (Ce.innerHTML = bt[0], ke.innerHTML = bt[1]), Ge && kt !== C) {
                                var x = wt ? 1 : 0,
                                    E = Ge.innerHTML,
                                    M = E.length - C[x].length;
                                E.substring(M) === C[x] && (Ge.innerHTML = E.substring(0, M) + kt[x])
                            }
                        } else lt && (ot || rt) && (n = !0);
                        if ((o || ot && !rt) && (Pe = xn(), En()), (r = qt !== b) ? (Kt.emit("indexChanged", Mn()), n = !0) : o ? r || Hi() : (ot || rt) && (Ii(), Yi(), Oi()), !o && N || function() {
                                for (var t = qt + Math.min($, ut), e = Ot; e--;) {
                                    var i = U[e];
                                    qt <= e && e < t ? (Fn(i, "tns-moving"), i.style.left = 100 * (e - qt) / ut + "%", Fn(i, B), Vn(i, j)) : i.style.left && (i.style.left = "", Fn(i, j), Vn(i, B)), Vn(i, R)
                                }
                                setTimeout(function() {
                                    qn(U, function(t) {
                                        Vn(t, "tns-moving")
                                    })
                                }, 300)
                            }(), !Jt && !ee) {
                            if (e && !L && (yt === autoheightTem && ft === speedTem || Fi(), at === T && st === k || (V.style.cssText = hi(at, st, ot, ft, yt)), H)) {
                                N && (W.style.width = pi(ot, st, ut));
                                var D = fi(ot, st, ut) + mi(st);
                                s = jn(a = Et) - 1, "deleteRule" in a ? a.deleteRule(s) : a.removeRule(s), Rn(Et, "#" + Xt + " > .tns-item", D, jn(Et))
                            }
                            yt && ji(), n && (nn(), Ht = qt)
                        }
                        e && Kt.emit("newBreakpointEnd", Mn(t))
                    }
                }

                function Ti() {
                    if (!ot && !rt) return $ <= (lt ? ut - (ut - 1) / 2 : ut);
                    var t = ot ? (ot + st) * $ : X[$],
                        e = at ? ct + 2 * at : ct + st;
                    return lt && (e -= ot ? (ct - ot) / 2 : (ct - (X[qt + 1] - X[qt] - st)) / 2), t <= e
                }

                function xi() {
                    for (var t in q = 0, z)(t = parseInt(t)) <= K && (q = t)
                }

                function Ei() {
                    !wt && Ge && Kn(Ge), !St && Me && Kn(Me), vt || (_e ? Kn(_e) : (Ce && Kn(Ce), ke && Kn(ke)))
                }

                function Mi() {
                    wt && Ge && Zn(Ge), St && Me && Zn(Me), vt && (_e ? Zn(_e) : (Ce && Zn(Ce), ke && Zn(ke)))
                }

                function Di() {
                    if (!ie) {
                        if (at && (V.style.margin = "0px"), Pt)
                            for (var t = "tns-transparent", e = Pt; e--;) N && Fn(U[e], t), Fn(U[Ot - e - 1], t);
                        Ei(), ie = !0
                    }
                }

                function Pi() {
                    if (!Qt) {
                        if (Et.disabled = !0, W.className = W.className.replace(Zt.substring(1), ""), Un(W, ["style"]), gt)
                            for (var t = Pt; t--;) N && Kn(U[t]), Kn(U[Ot - t - 1]);
                        if (H && N || Un(V, ["style"]), !N)
                            for (var e = qt, i = qt + $; e < i; e++) {
                                var n = U[e];
                                Un(n, ["style"]), Vn(n, B), Vn(n, j)
                            }
                        Ei(), Qt = !0
                    }
                }

                function Oi() {
                    var t = Li();
                    Q.innerHTML !== t && (Q.innerHTML = t)
                }

                function Li() {
                    var t = zi(),
                        e = t[0] + 1,
                        i = t[1] + 1;
                    return e === i ? e + "" : e + " to " + i
                }

                function zi(t) {
                    null == t && (t = en());
                    var i, n, r, o = qt;
                    if (lt || at ? (rt || ot) && (n = -(parseFloat(t) + at), r = n + ct + 2 * at) : rt && (n = X[qt], r = n + ct), rt) X.forEach(function(t, e) {
                        e < Ot && ((lt || at) && t <= n + .5 && (o = e), .5 <= r - t && (i = e))
                    });
                    else {
                        if (ot) {
                            var e = ot + st;
                            i = lt || at ? (o = Math.floor(n / e), Math.ceil(r / e - 1)) : o + Math.ceil(ct / e) - 1
                        } else if (lt || at) {
                            var a = ut - 1;
                            if (i = lt ? (o -= a / 2, qt + a / 2) : qt + a, at) {
                                var s = at * ut / ct;
                                o -= s, i += s
                            }
                            o = Math.floor(o), i = Math.ceil(i)
                        } else i = o + ut - 1;
                        o = Math.max(o, 0), i = Math.min(i, Ot - 1)
                    }
                    return [o, i]
                }

                function Ii() {
                    Mt && !Jt && Ri.apply(null, zi()).forEach(function(t) {
                        if (!Hn(t, ye)) {
                            var e = {};
                            e[A] = function(t) {
                                t.stopPropagation()
                            }, tr(t, e), tr(t, ve), t.src = Gn(t, "data-src");
                            var i = Gn(t, "data-srcset");
                            i && (t.srcset = i), Fn(t, "loading")
                        }
                    })
                }

                function Ni(t) {
                    Fn(t, "loaded"), Bi(t)
                }

                function Bi(t) {
                    Fn(t, "tns-complete"), Vn(t, "loading"), er(t, ve)
                }

                function Ri(t, e) {
                    for (var i = []; t <= e;) qn(U[t].querySelectorAll("img"), function(t) {
                        i.push(t)
                    }), t++;
                    return i
                }

                function ji() {
                    var t = Ri.apply(null, zi());
                    Dn(function() {
                        qi(t, Wi)
                    })
                }

                function qi(i, t) {
                    return J ? t() : (i.forEach(function(t, e) {
                        Hn(t, ye) && i.splice(e, 1)
                    }), i.length ? void Dn(function() {
                        qi(i, t)
                    }) : t())
                }

                function Hi() {
                    Ii(), Yi(), Oi(), Xi(),
                        function() {
                            if (St && (ze = 0 <= Le ? Le : ai(), Le = -1, ze !== Ie)) {
                                var t = Ee[Ie],
                                    e = Ee[ze];
                                Yn(t, {
                                    tabindex: "-1",
                                    "aria-label": Be + (Ie + 1)
                                }), Vn(t, Ne), Yn(e, {
                                    "aria-label": Be + (ze + 1) + Re
                                }), Un(e, "tabindex"), Fn(e, Ne), Ie = ze
                            }
                        }()
                }

                function Fi() {
                    N && yt && (D.style[b] = ft / 1e3 + "s")
                }

                function Vi(t, e) {
                    for (var i = [], n = t, r = Math.min(t + e, Ot); n < r; n++) i.push(U[n].offsetHeight);
                    return Math.max.apply(null, i)
                }

                function Wi() {
                    var t = yt ? Vi(qt, ut) : Vi(Pt, $),
                        e = D || V;
                    e.style.height !== t && (e.style.height = t + "px")
                }

                function Gi() {
                    X = [0];
                    var i = H ? "left" : "top",
                        n = H ? "right" : "bottom",
                        r = U[0].getBoundingClientRect()[i];
                    qn(U, function(t, e) {
                        e && X.push(t.getBoundingClientRect()[i] - r), e === Ot - 1 && X.push(t.getBoundingClientRect()[n] - r)
                    })
                }

                function Yi() {
                    var t = zi(),
                        i = t[0],
                        n = t[1];
                    qn(U, function(t, e) {
                        i <= e && e <= n ? Wn(t, "aria-hidden") && (Un(t, ["aria-hidden", "tabindex"]), Fn(t, ge)) : Wn(t, "aria-hidden") || (Yn(t, {
                            "aria-hidden": "true",
                            tabindex: "-1"
                        }), Vn(t, ge))
                    })
                }

                function Ui(t) {
                    return t.nodeName.toLowerCase()
                }

                function $i(t) {
                    return "button" === Ui(t)
                }

                function Ki(t) {
                    return "true" === t.getAttribute("aria-disabled")
                }

                function Zi(t, e, i) {
                    t ? e.disabled = i : e.setAttribute("aria-disabled", i.toString())
                }

                function Xi() {
                    if (vt && !mt && !gt) {
                        var t = Se ? Ce.disabled : Ki(Ce),
                            e = Ae ? ke.disabled : Ki(ke),
                            i = qt <= Ft,
                            n = !mt && Vt <= qt;
                        i && !t && Zi(Se, Ce, !0), !i && t && Zi(Se, Ce, !1), n && !e && Zi(Ae, ke, !0), !n && e && Zi(Ae, ke, !1)
                    }
                }

                function Ji(t, e) {
                    b && (t.style[b] = e)
                }

                function Qi(t) {
                    return null == t && (t = qt), rt ? (ct - (at ? st : 0) - (X[t + 1] - X[t] - st)) / 2 : ot ? (ct - ot) / 2 : (ut - 1) / 2
                }

                function tn() {
                    var t = ct + (at ? st : 0) - (ot ? (ot + st) * Ot : X[Ot]);
                    return lt && !gt && (t = ot ? -(ot + st) * (Ot - 1) - Qi() : Qi(Ot - 1) - X[Ot - 1]), 0 < t && (t = 0), t
                }

                function en(t) {
                    var e;
                    if (null == t && (t = qt), H && !rt)
                        if (ot) e = -(ot + st) * t, lt && (e += Qi());
                        else {
                            var i = h ? Ot : ut;
                            lt && (t -= Qi()), e = 100 * -t / i
                        }
                    else e = -X[t], lt && rt && (e += Qi());
                    return Lt && (e = Math.max(e, zt)), e + (!H || rt || ot ? "px" : "%")
                }

                function nn(t) {
                    Ji(W, "0s"), rn(t)
                }

                function rn(t) {
                    null == t && (t = en()), W.style[Nt] = Bt + t + Rt
                }

                function on(t, e, i, n) {
                    var r = t + ut;
                    gt || (r = Math.min(r, Ot));
                    for (var o = t; o < r; o++) {
                        var a = U[o];
                        n || (a.style.left = 100 * (o - qt) / ut + "%"), M && f && (a.style[f] = a.style[m] = M * (o - t) / 1e3 + "s"), Vn(a, e), Fn(a, i), n && Dt.push(a)
                    }
                }

                function an(t, e) {
                    It && ti(), (qt !== Ht || e) && (Kt.emit("indexChanged", Mn()), Kt.emit("transitionStart", Mn()), yt && ji(), qe && t && 0 <= ["click", "keydown"].indexOf(t.type) && mn(), Ut = !0, ei())
                }

                function sn(t) {
                    return t.toLowerCase().replace(/-/g, "")
                }

                function cn(t) {
                    if (N || Ut) {
                        if (Kt.emit("transitionEnd", Mn(t)), !N && 0 < Dt.length)
                            for (var e = 0; e < Dt.length; e++) {
                                var i = Dt[e];
                                i.style.left = "", m && f && (i.style[m] = "", i.style[f] = ""), Vn(i, R), Fn(i, j)
                            }
                        if (!t || !N && t.target.parentNode === W || t.target === W && sn(t.propertyName) === sn(Nt)) {
                            if (!It) {
                                var n = qt;
                                ti(), qt !== n && (Kt.emit("indexChanged", Mn()), nn())
                            }
                            "inner" === I && Kt.emit("innerLoaded", Mn()), Ut = !1, Ht = qt
                        }
                    }
                }

                function ln(t, e) {
                    if (!ee)
                        if ("prev" === t) un(e, -1);
                        else if ("next" === t) un(e, 1);
                    else {
                        if (Ut) {
                            if (Wt) return;
                            cn()
                        }
                        var i = oi(),
                            n = 0;
                        if ("first" === t ? n = -i : "last" === t ? n = N ? $ - ut - i : $ - 1 - i : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min($ - 1, t))), n = t - i)), !N && n && Math.abs(n) < ut) {
                            var r = 0 < n ? 1 : -1;
                            n += Ft <= qt + n - $ ? $ * r : 2 * $ * r * -1
                        }
                        qt += n, N && gt && (qt < Ft && (qt += $), Vt < qt && (qt -= $)), oi(qt) !== oi(Ht) && an(e)
                    }
                }

                function un(t, e) {
                    if (Ut) {
                        if (Wt) return;
                        cn()
                    }
                    var i;
                    if (!e) {
                        for (var n = bn(t = vn(t)); n !== _e && [Ce, ke].indexOf(n) < 0;) n = n.parentNode;
                        var r = [Ce, ke].indexOf(n);
                        0 <= r && (i = !0, e = 0 === r ? -1 : 1)
                    }
                    if (mt) {
                        if (qt === Ft && -1 === e) return void ln("last", t);
                        if (qt === Vt && 1 === e) return void ln("first", t)
                    }
                    e && (qt += dt * e, rt && (qt = Math.floor(qt)), an(i || t && "keydown" === t.type ? t : null))
                }

                function dn() {
                    je = setInterval(function() {
                        un(null, We)
                    }, Ct), qe = !0
                }

                function hn() {
                    clearInterval(je), qe = !1
                }

                function pn(t, e) {
                    Yn(Ge, {
                        "data-action": t
                    }), Ge.innerHTML = Ue[0] + t + Ue[1] + e
                }

                function fn() {
                    dn(), Ge && pn("stop", kt[1])
                }

                function mn() {
                    hn(), Ge && pn("start", kt[0])
                }

                function gn() {
                    Fe = qe ? (mn(), !0) : (fn(), !1)
                }

                function yn(t) {
                    t.focus()
                }

                function vn(t) {
                    return Sn(t = t || g.event) ? t.changedTouches[0] : t
                }

                function bn(t) {
                    return t.target || g.event.srcElement
                }

                function Sn(t) {
                    return 0 <= t.type.indexOf("touch")
                }

                function An(t) {
                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                }

                function _n() {
                    return r = Xe.y - Ze.y, o = Xe.x - Ze.x, t = Math.atan2(r, o) * (180 / Math.PI), i = !1, 90 - (e = Gt) <= (n = Math.abs(90 - Math.abs(t))) ? i = "horizontal" : n <= e && (i = "vertical"), i === P.axis;
                    var t, e, i, n, r, o
                }

                function wn(t) {
                    if (Ut) {
                        if (Wt) return;
                        cn()
                    }
                    wt && qe && hn(), Je = !0, Ke && (Pn(Ke), Ke = null);
                    var e = vn(t);
                    Kt.emit(Sn(t) ? "touchStart" : "dragStart", Mn(t)), !Sn(t) && 0 <= ["img", "a"].indexOf(Ui(bn(t))) && An(t), Xe.x = Ze.x = e.clientX, Xe.y = Ze.y = e.clientY, N && ($e = parseFloat(W.style[Nt].replace(Bt, "")), Ji(W, "0s"))
                }

                function Cn(t) {
                    if (Je) {
                        var e = vn(t);
                        Xe.x = e.clientX, Xe.y = e.clientY, N ? Ke || (Ke = Dn(function() {
                            ! function t(e) {
                                if (Yt) {
                                    if (Pn(Ke), Je && (Ke = Dn(function() {
                                            t(e)
                                        })), "?" === Yt && (Yt = _n()), Yt) {
                                        !be && Sn(e) && (be = !0);
                                        try {
                                            e.type && Kt.emit(Sn(e) ? "touchMove" : "dragMove", Mn(e))
                                        } catch (t) {}
                                        var i = $e,
                                            n = Qe(Xe, Ze);
                                        if (!H || ot || rt) i += n, i += "px";
                                        else i += h ? n * ut * 100 / ((ct + st) * Ot) : 100 * n / (ct + st), i += "%";
                                        W.style[Nt] = Bt + i + Rt
                                    }
                                } else Je = !1
                            }(t)
                        })) : ("?" === Yt && (Yt = _n()), Yt && (be = !0)), be && t.preventDefault()
                    }
                }

                function kn(n) {
                    if (Je) {
                        Ke && (Pn(Ke), Ke = null), N && Ji(W, ""), Je = !1;
                        var t = vn(n);
                        Xe.x = t.clientX, Xe.y = t.clientY;
                        var r = Qe(Xe, Ze);
                        if (Math.abs(r)) {
                            if (!Sn(n)) {
                                var i = bn(n);
                                tr(i, {
                                    click: function t(e) {
                                        An(e), er(i, {
                                            click: t
                                        })
                                    }
                                })
                            }
                            N ? Ke = Dn(function() {
                                if (H && !rt) {
                                    var t = -r * ut / (ct + st);
                                    t = 0 < r ? Math.floor(t) : Math.ceil(t), qt += t
                                } else {
                                    var e = -($e + r);
                                    if (e <= 0) qt = Ft;
                                    else if (e >= X[Ot - 1]) qt = Vt;
                                    else
                                        for (var i = 0; i < Ot && e >= X[i];) e > X[qt = i] && r < 0 && (qt += 1), i++
                                }
                                an(n, r), Kt.emit(Sn(n) ? "touchEnd" : "dragEnd", Mn(n))
                            }) : Yt && un(n, 0 < r ? -1 : 1)
                        }
                    }
                    "auto" === P.preventScrollOnTouch && (be = !1), Gt && (Yt = "?"), wt && !qe && dn()
                }

                function Tn() {
                    (D || V).style.height = X[qt + ut] - X[qt] + "px"
                }

                function xn() {
                    var t = ot ? (ot + st) * $ / ct : $ / ut;
                    return Math.min(Math.ceil(t), $)
                }

                function En() {
                    if (St && !he && Pe !== Oe) {
                        var t = Oe,
                            e = Pe,
                            i = Zn;
                        for (Pe < Oe && (t = Pe, e = Oe, i = Kn); t < e;) i(Ee[t]), t++;
                        Oe = Pe
                    }
                }

                function Mn(t) {
                    return {
                        container: W,
                        slideItems: U,
                        navContainer: Me,
                        navItems: Ee,
                        controlsContainer: _e,
                        hasControls: ue,
                        prevButton: Ce,
                        nextButton: ke,
                        items: ut,
                        slideBy: dt,
                        cloneCount: Pt,
                        slideCount: $,
                        slideCountNew: Ot,
                        index: qt,
                        indexCached: Ht,
                        displayIndex: ni(),
                        navCurrentIndex: ze,
                        navCurrentIndexCached: Ie,
                        pages: Pe,
                        pagesCached: Oe,
                        sheet: Et,
                        isOn: Z,
                        event: t || {}
                    }
                }
                w && console.warn("No slides found in", P.container)
            };
            return nr
        }(),
        fe = void 0 !== rr && rr === this ? this : "undefined" != typeof global && null != global ? global : this;

    function me() {
        me = function() {}, fe.Symbol || (fe.Symbol = ye)
    }
    var ge = 0;

    function ye(t) {
        return "jscomp_symbol_" + (t || "") + ge++
    }

    function ve() {
        T.apply(this, arguments)
    }

    function be() {
        x.apply(this, arguments)
    }

    function Se() {
        x.apply(this, arguments)
    }

    function Ae() {
        T.apply(this, arguments)
    }

    function _e() {
        x.apply(this, arguments)
    }

    function we() {
        T.apply(this, arguments)
    }

    function Ce() {}! function(i) {
        function r(t) {
            if (n[t]) return n[t].R;
            var e = n[t] = {
                ia: t,
                ea: !1,
                R: {}
            };
            return i[t].call(e.R, e, e.R, r), e.ea = !0, e.R
        }
        var n = {};
        r.u = i, r.h = n, r.c = function(t, e, i) {
            r.g(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, r.r = function(t) {
            me(), me(), "undefined" != typeof Symbol && Symbol.toStringTag && (me(), Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            })), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.m = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.aa) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) r.c(i, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return i
        }, r.i = function(t) {
            var e = t && t.aa ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.c(e, "a", e), e
        }, r.g = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.o = "", r(r.w = 0)
    }([function(t, e, i) {
        function n(t, e) {
            if (e = void 0 === e ? {} : e, this.h = t, this.g = this.g.bind(this), !b(this.h)) throw new TypeError("`new Drift` requires a DOM element as its first argument.");
            t = e.namespace || null;
            var i = e.showWhitespaceAtEdges || !1,
                n = e.containInline || !1,
                r = e.inlineOffsetX || 0,
                o = e.inlineOffsetY || 0,
                a = e.inlineContainer || or.body,
                s = e.sourceAttribute || "data-zoom",
                c = e.zoomFactor || 3,
                l = void 0 === e.paneContainer ? or.body : e.paneContainer,
                u = e.inlinePane || 375,
                d = e.handleTouch || !0,
                h = e.onShow || null,
                p = e.onHide || null,
                f = e.injectBaseStyles || !0,
                m = e.hoverDelay || 0,
                g = e.touchDelay || 0,
                y = e.hoverBoundingBox || !1,
                v = e.touchBoundingBox || !1;
            if (e = e.boundingBoxContainer || or.body, !0 !== u && !b(l)) throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");
            if (!b(a)) throw new TypeError("`inlineContainer` must be a DOM element");
            this.a = {
                j: t,
                N: i,
                H: n,
                J: r,
                K: o,
                v: a,
                O: s,
                f: c,
                fa: l,
                da: u,
                A: d,
                M: h,
                L: p,
                ca: f,
                C: m,
                F: g,
                B: y,
                D: v,
                G: e
            }, this.a.ca && !or.querySelector(".drift-base-styles") && ((e = or.createElement("style")).type = "text/css", e.classList.add("drift-base-styles"), e.appendChild(or.createTextNode(".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}")), (t = or.head).insertBefore(e, t.firstChild)), this.w(), this.u()
        }

        function r(t) {
            t = void 0 === t ? {} : t, this.h = this.h.bind(this), this.g = this.g.bind(this), this.m = this.m.bind(this), this.s = !1;
            var e = void 0 === t.I ? null : t.I,
                i = void 0 === t.f ? f() : t.f,
                n = void 0 === t.S ? f() : t.S,
                r = void 0 === t.j ? null : t.j,
                o = void 0 === t.N ? f() : t.N,
                a = void 0 === t.H ? f() : t.H;
            this.a = {
                I: e,
                f: i,
                S: n,
                j: r,
                N: o,
                H: a,
                J: void 0 === t.J ? 0 : t.J,
                K: void 0 === t.K ? 0 : t.K,
                v: void 0 === t.v ? or.body : t.v
            }, this.o = this.i("open"), this.X = this.i("opening"), this.u = this.i("closing"), this.w = this.i("inline"), this.W = this.i("loading"), this.ga()
        }

        function o(t) {
            t = void 0 === t ? {} : t, this.m = this.m.bind(this), this.h = this.h.bind(this), this.g = this.g.bind(this), this.c = this.c.bind(this);
            var e = t;
            t = void 0 === e.b ? f() : e.b;
            var i = void 0 === e.l ? f() : e.l,
                n = void 0 === e.O ? f() : e.O,
                r = void 0 === e.A ? f() : e.A,
                o = void 0 === e.M ? null : e.M,
                a = void 0 === e.L ? null : e.L,
                s = void 0 === e.C ? 0 : e.C,
                c = void 0 === e.F ? 0 : e.F,
                l = void 0 === e.B ? f() : e.B,
                u = void 0 === e.D ? f() : e.D,
                d = void 0 === e.j ? null : e.j,
                h = void 0 === e.f ? f() : e.f;
            e = void 0 === e.G ? f() : e.G, this.a = {
                b: t,
                l: i,
                O: n,
                A: r,
                M: o,
                L: a,
                C: s,
                F: c,
                B: l,
                D: u,
                j: d,
                f: h,
                G: e
            }, (this.a.B || this.a.D) && (this.o = new p({
                j: this.a.j,
                f: this.a.f,
                P: this.a.G
            })), this.enabled = !0, this.w()
        }

        function p(t) {
            this.s = !1;
            var e = void 0 === t.j ? null : t.j,
                i = void 0 === t.f ? f() : t.f;
            t = void 0 === t.P ? f() : t.P, this.a = {
                j: e,
                f: i,
                P: t
            }, this.c = this.g("open"), this.h()
        }

        function b(t) {
            return c ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
        }

        function a(e, t) {
            t.forEach(function(t) {
                e.classList.add(t)
            })
        }

        function s(e, t) {
            t.forEach(function(t) {
                e.classList.remove(t)
            })
        }

        function f() {
            throw Error("Missing parameter")
        }
        i.r(e);
        var c = "object" == typeof HTMLElement;
        p.prototype.g = function(t) {
            var e = ["drift-" + t],
                i = this.a.j;
            return i && e.push(i + "-" + t), e
        }, p.prototype.h = function() {
            this.b = or.createElement("div"), a(this.b, this.g("bounding-box"))
        }, p.prototype.show = function(t, e) {
            this.s = !0, this.a.P.appendChild(this.b);
            var i = this.b.style;
            i.width = Math.round(t / this.a.f) + "px", i.height = Math.round(e / this.a.f) + "px", a(this.b, this.c)
        }, p.prototype.U = function() {
            this.s && this.a.P.removeChild(this.b), this.s = !1, s(this.b, this.c)
        }, p.prototype.setPosition = function(t, e, i) {
            var n = rr.pageXOffset,
                r = rr.pageYOffset;
            t = i.left + t * i.width - this.b.clientWidth / 2 + n, e = i.top + e * i.height - this.b.clientHeight / 2 + r, t < i.left + n ? t = i.left + n : t + this.b.clientWidth > i.left + i.width + n && (t = i.left + i.width - this.b.clientWidth + n), e < i.top + r ? e = i.top + r : e + this.b.clientHeight > i.top + i.height + r && (e = i.top + i.height - this.b.clientHeight + r), this.b.style.left = t + "px", this.b.style.top = e + "px"
        }, o.prototype.w = function() {
            this.a.b.addEventListener("mouseenter", this.g, !1), this.a.b.addEventListener("mouseleave", this.h, !1), this.a.b.addEventListener("mousemove", this.c, !1), this.a.A && (this.a.b.addEventListener("touchstart", this.g, !1), this.a.b.addEventListener("touchend", this.h, !1), this.a.b.addEventListener("touchmove", this.c, !1))
        }, o.prototype.ba = function() {
            this.a.b.removeEventListener("mouseenter", this.g, !1), this.a.b.removeEventListener("mouseleave", this.h, !1), this.a.b.removeEventListener("mousemove", this.c, !1), this.a.A && (this.a.b.removeEventListener("touchstart", this.g, !1), this.a.b.removeEventListener("touchend", this.h, !1), this.a.b.removeEventListener("touchmove", this.c, !1))
        }, o.prototype.g = function(t) {
            t.preventDefault(), "mouseenter" == (this.i = t).type && this.a.C ? this.u = setTimeout(this.m, this.a.C) : this.a.F ? this.u = setTimeout(this.m, this.a.F) : this.m()
        }, o.prototype.m = function() {
            if (this.enabled) {
                var t = this.a.M;
                t && "function" == typeof t && t(), this.a.l.show(this.a.b.getAttribute(this.a.O), this.a.b.clientWidth, this.a.b.clientHeight), this.i && ((t = this.i.touches) && this.a.D || !t && this.a.B) && this.o.show(this.a.l.b.clientWidth, this.a.l.b.clientHeight), this.c()
            }
        }, o.prototype.h = function(t) {
            t.preventDefault(), this.i = null, this.u && clearTimeout(this.u), this.o && this.o.U(), (t = this.a.L) && "function" == typeof t && t(), this.a.l.U()
        }, o.prototype.c = function(t) {
            if (t) t.preventDefault(), this.i = t;
            else {
                if (!this.i) return;
                t = this.i
            }
            if (t.touches) var e = (t = t.touches[0]).clientX,
                i = t.clientY;
            else e = t.clientX, i = t.clientY;
            e = (e - (t = this.a.b.getBoundingClientRect()).left) / this.a.b.clientWidth, i = (i - t.top) / this.a.b.clientHeight, this.o && this.o.setPosition(e, i, t), this.a.l.setPosition(e, i, t)
        }, fe.Object.defineProperties(o.prototype, {
            s: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.a.l.s
                }
            }
        }), t = or.createElement("div").style;
        var l = void 0 !== or && ("animation" in t || "webkitAnimation" in t);
        r.prototype.i = function(t) {
            var e = ["drift-" + t],
                i = this.a.j;
            return i && e.push(i + "-" + t), e
        }, r.prototype.ga = function() {
            this.b = or.createElement("div"), a(this.b, this.i("zoom-pane"));
            var t = or.createElement("div");
            a(t, this.i("zoom-pane-loader")), this.b.appendChild(t), this.c = or.createElement("img"), this.b.appendChild(this.c)
        }, r.prototype.V = function(t) {
            this.c.setAttribute("src", t)
        }, r.prototype.Y = function(t, e) {
            this.c.style.width = t * this.a.f + "px", this.c.style.height = e * this.a.f + "px"
        }, r.prototype.setPosition = function(t, e, i) {
            var n = this.c.offsetWidth,
                r = this.c.offsetHeight,
                o = this.b.offsetWidth,
                a = this.b.offsetHeight,
                s = o / 2 - n * t,
                c = a / 2 - r * e,
                l = o - n,
                u = a - r,
                d = 0 < l,
                h = 0 < u;
            r = d ? l / 2 : 0, n = h ? u / 2 : 0, l = d ? l / 2 : l, u = h ? u / 2 : u, this.b.parentElement === this.a.v && (h = rr.pageXOffset, d = rr.pageYOffset, t = i.left + t * i.width - o / 2 + this.a.J + h, e = i.top + e * i.height - a / 2 + this.a.K + d, this.a.H && (t < i.left + h ? t = i.left + h : t + o > i.left + i.width + h && (t = i.left + i.width - o + h), e < i.top + d ? e = i.top + d : e + a > i.top + i.height + d && (e = i.top + i.height - a + d)), this.b.style.left = t + "px", this.b.style.top = e + "px"), this.a.N || (r < s ? s = r : s < l && (s = l), n < c ? c = n : c < u && (c = u)), this.c.style.transform = "translate(" + s + "px, " + c + "px)", this.c.style.webkitTransform = "translate(" + s + "px, " + c + "px)"
        }, r.prototype.T = function() {
            this.b.removeEventListener("animationend", this.h, !1), this.b.removeEventListener("animationend", this.g, !1), this.b.removeEventListener("webkitAnimationEnd", this.h, !1), this.b.removeEventListener("webkitAnimationEnd", this.g, !1), s(this.b, this.o), s(this.b, this.u)
        }, r.prototype.show = function(t, e, i) {
            this.T(), this.s = !0, a(this.b, this.o), a(this.b, this.W), this.c.addEventListener("load", this.m, !1), this.V(t), this.Y(e, i), this.ha ? this.$() : this.Z(), l && (this.b.addEventListener("animationend", this.h, !1), this.b.addEventListener("webkitAnimationEnd", this.h, !1), a(this.b, this.X))
        }, r.prototype.$ = function() {
            this.a.v.appendChild(this.b), a(this.b, this.w)
        }, r.prototype.Z = function() {
            this.a.I.appendChild(this.b)
        }, r.prototype.U = function() {
            this.T(), this.s = !1, l ? (this.b.addEventListener("animationend", this.g, !1), this.b.addEventListener("webkitAnimationEnd", this.g, !1), a(this.b, this.u)) : (s(this.b, this.o), s(this.b, this.w))
        }, r.prototype.h = function() {
            this.b.removeEventListener("animationend", this.h, !1), this.b.removeEventListener("webkitAnimationEnd", this.h, !1), s(this.b, this.X)
        }, r.prototype.g = function() {
            this.b.removeEventListener("animationend", this.g, !1), this.b.removeEventListener("webkitAnimationEnd", this.g, !1), s(this.b, this.o), s(this.b, this.u), s(this.b, this.w), this.b.setAttribute("style", ""), this.b.parentElement === this.a.I ? this.a.I.removeChild(this.b) : this.b.parentElement === this.a.v && this.a.v.removeChild(this.b)
        }, r.prototype.m = function() {
            this.c.removeEventListener("load", this.m, !1), s(this.b, this.W)
        }, fe.Object.defineProperties(r.prototype, {
            ha: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var t = this.a.S;
                    return !0 === t || "number" == typeof t && rr.innerWidth <= t
                }
            }
        }), n.prototype.w = function() {
            this.l = new r({
                I: this.a.fa,
                f: this.a.f,
                N: this.a.N,
                H: this.a.H,
                S: this.a.da,
                j: this.a.j,
                J: this.a.J,
                K: this.a.K,
                v: this.a.v
            })
        }, n.prototype.u = function() {
            this.c = new o({
                b: this.h,
                l: this.l,
                A: this.a.A,
                M: this.a.M,
                L: this.a.L,
                O: this.a.O,
                C: this.a.C,
                F: this.a.F,
                B: this.a.B,
                D: this.a.D,
                j: this.a.j,
                f: this.a.f,
                G: this.a.G
            })
        }, n.prototype.T = function(t) {
            this.l.V(t)
        }, n.prototype.i = function() {
            this.c.enabled = !1
        }, n.prototype.m = function() {
            this.c.enabled = !0
        }, n.prototype.g = function() {
            this.c.ba()
        }, fe.Object.defineProperties(n.prototype, {
            s: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.l.s
                }
            },
            f: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.a.f
                },
                set: function(t) {
                    this.a.f = t, this.l.a.f = t, this.c.a.f = t, this.o.a.f = t
                }
            }
        }), Object.defineProperty(n.prototype, "isShowing", {
            get: function() {
                return this.s
            }
        }), Object.defineProperty(n.prototype, "zoomFactor", {
            get: function() {
                return this.f
            },
            set: function(t) {
                this.f = t
            }
        }), n.prototype.setZoomImageURL = n.prototype.T, n.prototype.disable = n.prototype.i, n.prototype.enable = n.prototype.m, n.prototype.destroy = n.prototype.g, rr.Drift = n
    }]), T.extend({
        constructor: ve,
        mode: null,
        initialize: function(t, e, i) {
            this.el = t[0], this.carouselBlock = e, this.currentIndex = 0, this.isMobile = i.isMobile(), this.isTablet = i.isTablet(), this.slidesMetaData = this._prepareSlidesMetaData(), this.carousel = this._initCarousel(), this.isMobile || this._initZoom(), this._selectCurrentIcon()
        },
        switchToLessMode: function() {
            "lessMode" !== this.mode && (this._stopCarousel(), this._toggleCarousel(!1), this.mode = "lessMode")
        },
        switchToFullMode: function() {
            "fullMode" !== this.mode && (this._toggleCarousel(!0), this._startCarousel(), this.mode = "fullMode", this.$el.trigger("switchedToFullMode"))
        },
        _startCarousel: function() {
            if (this._isNeedAutoplay() && !this._isCarouselRunning()) {
                var t = this._calcAutoplayTimeout();
                this.timerId = setInterval(this._autoNextSlide.bind(this), t)
            }
        },
        _stopCarousel: function() {
            clearInterval(this.timerId), this.timerId = null
        },
        _isCarouselRunning: function() {
            return !!this.timerId
        },
        _toggleCarousel: function(t) {
            this.$el.find("[data-carousel]").toggleClass("hidden", !t)
        },
        _onMediaIconActivate: function(t) {
            var e = t.currentTarget,
                i = parseInt(e.getAttribute("data-media-icon"));
            this.carousel.goTo(i)
        },
        _autoNextSlide: function() {
            var t = this.carouselBlock.video_first ? this.carouselBlock.videos.length : "first";
            this._isNextSlide("video") ? this.carousel.goTo(t) : this._isCurrentSlide("video") || this.carousel.goTo("next")
        },
        _initCarousel: function() {
            var t = this.el.querySelector("[data-carousel]"),
                e = pe({
                    swipeAngle: !1,
                    gutter: 4,
                    speed: 250,
                    preventScrollOnTouch: "auto",
                    container: t,
                    startIndex: 0,
                    loop: !0,
                    prevButton: this.el.querySelector("[data-prev-img-btn]"),
                    nextButton: this.el.querySelector("[data-next-img-btn]"),
                    nav: !0,
                    navContainer: this.el.querySelector("[data-icons-list]"),
                    onInit: function() {
                        this._startCarousel()
                    }.bind(this)
                });
            return e.events.on("indexChanged", this._onSlideChanged.bind(this)), this._prepareNavPanel(), e
        },
        _onSlideChanged: function(t) {
            this.currentIndex = t.displayIndex - 1, this._selectCurrentIcon(), this.switchToFullMode()
        },
        _prepareNavPanel: function() {
            for (var t = this.el.querySelector("[data-icons-list]"), e = t.querySelectorAll("[data-media-icon]"), i = this.isMobile && !this.isTablet, n = 0; n < e.length; n++) {
                var r = e[n];
                i && "video" !== this.slidesMetaData[n] && (r.innerHTML = ""), r.addEventListener("mouseenter", this._onMediaIconActivate.bind(this))
            }
            t.addEventListener("mouseenter", this._stopCarousel.bind(this)), t.addEventListener("mouseleave", this._startCarousel.bind(this)), t.classList.remove("hidden")
        },
        _initZoom: function() {
            var i = {
                onShow: this._onZoomStart.bind(this),
                onHide: this._onZoomStop.bind(this),
                paneContainer: this.$el.find("[data-pane-container]")[0],
                inlinePane: !1,
                zoomFactor: 2,
                hoverBoundingBox: !0
            };
            this.$el.find("[data-image-item]").each(function(t, e) {
                new Drift(e, i)
            }.bind(this))
        },
        _onZoomStart: function() {
            this._stopCarousel(), this.$el.find("[data-pane-container]").removeClass("hidden")
        },
        _onZoomStop: function() {
            this.$el.find("[data-pane-container]").addClass("hidden"), this._startCarousel()
        },
        _prepareSlidesMetaData: function() {
            var t = this.carouselBlock.videos.map(function() {
                    return "video"
                }),
                e = this.carouselBlock.images.map(function() {
                    return "image"
                });
            return this.carouselBlock.video_first ? [].concat(t, e) : [].concat(e, t)
        },
        _isNextSlide: function(t) {
            var e = this.currentIndex === this.slidesMetaData.length - 1 ? 0 : this.currentIndex + 1;
            return this.slidesMetaData[e] === t
        },
        _isCurrentSlide: function(t) {
            return this.slidesMetaData[this.currentIndex] === t
        },
        _isNeedAutoplay: function() {
            return 0 < this.model.timing
        },
        _calcAutoplayTimeout: function() {
            return 1e3 * this.model.timing
        },
        _selectCurrentIcon: function() {
            for (var t = this.el.querySelectorAll("[data-media-icon]"), e = 0; e < t.length; e++) t[e].classList.remove("active");
            this.el.querySelector('[data-media-icon="' + this.currentIndex + '"]').classList.add("active")
        }
    }), x.extend({
        constructor: be,
        initialize: function(t, e) {
            this.el = t, this.block = e, this.el.addEventListener("click", this._onClick.bind(this))
        },
        _onClick: function() {
            new F(this.block)
        }
    }), x.extend({
        constructor: Se,
        mode: null,
        initialize: function(t, e) {
            this.el = t, this.linksContainerEl = this.el.querySelector("[data-links-container]"), this.prevBtnEl = this.el.querySelector("[data-scroll-prev-btn]"), this.nextBtnEl = this.el.querySelector("[data-scroll-next-btn]"), this.navBarBlockData = e, this.linksEls = Array.from(this.linksContainerEl.querySelectorAll("a")), this.render()
        },
        render: function() {
            this._initScroll(), this._updateBtns()
        },
        _initScroll: function() {
            var e = !1,
                i = 0;
            this.prevBtnEl.addEventListener("click", function() {
                this._scrollTo("prev")
            }.bind(this)), this.nextBtnEl.addEventListener("click", function() {
                this._scrollTo("next")
            }.bind(this)), this.linksContainerEl.addEventListener("mousedown", function(t) {
                e = !0, i = 0, t.preventDefault()
            }.bind(this)), this.linksContainerEl.addEventListener("click", function(t) {
                10 < i && t.preventDefault()
            }.bind(this)), rr.addEventListener("mouseup", function() {
                e = !1
            }), this.linksContainerEl.addEventListener("mousemove", function(t) {
                e && (i += Math.abs(t.movementX), this._scrollOn(-t.movementX))
            }.bind(this)), this.linksContainerEl.addEventListener("scroll", this._updateBtns.bind(this))
        },
        _updateBtns: function() {
            var t = this.linksContainerEl.scrollLeft < 1,
                e = this.linksContainerEl.scrollWidth - (this.linksContainerEl.scrollLeft + this.linksContainerEl.offsetWidth) <= 1;
            this.nextBtnEl.classList.toggle("hidden", e), this.prevBtnEl.classList.toggle("hidden", t)
        },
        _scrollOn: function(t) {
            this.linksContainerEl.scrollLeft += t
        },
        _scrollTo: function(t) {
            var e = this._getOverflowedLinks();
            (e.prevEl || e.nextEl) && ("next" === t ? e.nextEl.scrollIntoView({
                block: "nearest",
                inline: "end"
            }) : e.prevEl.scrollIntoView({
                block: "nearest",
                inline: "start"
            }))
        },
        _getOverflowedLinks: function() {
            var t = this.linksEls.filter(this._isNextLinkOverflowed.bind(this)),
                e = this.linksEls.filter(this._isPrevLinkOverflowed.bind(this));
            return {
                nextEl: t[0],
                prevEl: e.pop()
            }
        },
        _isNextLinkOverflowed: function(t) {
            var e = parseInt(getComputedStyle(t).paddingRight);
            return t.getBoundingClientRect().right - e > this.linksContainerEl.getBoundingClientRect().right
        },
        _isPrevLinkOverflowed: function(t) {
            var e = parseInt(getComputedStyle(t).paddingLeft);
            return t.getBoundingClientRect().left + e < this.linksContainerEl.getBoundingClientRect().left
        }
    }), T.extend({
        constructor: Ae,
        initialize: function(t, e, i) {
            this.$el = t, this.carouselBlock = e, this.deviceManager = i, m.subscribe("productChangeImage", this._onProductImageChange, this), this.render(), this.carouselComp.$el.on("switchedToFullMode", this._onCarouselSwitchedToFullMode.bind(this)), this._toggleProductImg(!1)
        },
        render: function() {
            this.carouselComp = new ve(this.$el, this.carouselBlock, this.deviceManager)
        },
        _onProductImageChange: function(t) {
            parseInt(this.carouselBlock.product_id) === parseInt(t.product_id) && (this.carouselComp.switchToLessMode(), this._toggleProductImg(!0))
        },
        _onCarouselSwitchedToFullMode: function() {
            this._toggleProductImg(!1)
        },
        _toggleProductImg: function(t) {
            this.$el.find("[data-zp-product-image-wrapper]").toggleClass("hidden", !t)
        }
    }), x.extend({
        constructor: _e,
        initialize: function(t, e) {
            this.el = t, this.navCheckboxEl = e, this.listenEvents()
        },
        listenEvents: function() {
            var t = this.el.querySelectorAll('a[href^="#"]');
            Array.prototype.forEach.call(t, this._listenLinkClick.bind(this))
        },
        _listenLinkClick: function(t) {
            t.addEventListener("click", this._closeNavigation.bind(this))
        },
        _closeNavigation: function() {
            this.navCheckboxEl.checked = !1
        }
    }), T.extend({
        constructor: we,
        mode: null,
        SHOW_MORE_BTN_CLASS: "show-more-text-btn",
        TEXT_WRAPPER_CLASS: "zpa-shawed-word-overflow",
        shavingMode: !1,
        initialize: function() {
            this.maxHeight = parseInt(this.$el.attr("data-shaved-text")), this._initShaving()
        },
        _initShaving: function() {
            this.$el.height() > this.maxHeight && (this.fullContent = this.$el.html(), this.$contentEl = f("<div>").html(this.fullContent).addClass(this.TEXT_WRAPPER_CLASS), this.$btn = this._initShowMoreBtn(), this.$el.html(this.$contentEl), this.$el.append(this.$btn), this._showLess(), this.shavingMode = !0)
        },
        _initShowMoreBtn: function() {
            var t = f("<button>").addClass(this.SHOW_MORE_BTN_CLASS).text("show more");
            return t.on("click", this._showMore.bind(this)), t
        },
        _showLess: function() {
            this._toggleBtn(!0), this.$contentEl.css("max-height", this.maxHeight)
        },
        _showMore: function() {
            this._toggleBtn(!1), this.$contentEl.css("max-height", "")
        },
        _toggleBtn: function(t) {
            this.$btn.toggleClass("hidden", !t)
        }
    }), Ce.prototype.parseInt = function(t, e) {
        var i = parseInt(t);
        return this.resultParsedValue(i, e)
    }, Ce.prototype.parseFloat = function(t, e) {
        var i = parseFloat(t);
        return this.resultParsedValue(i, e)
    }, Ce.prototype.resultParsedValue = function(t, e) {
        return isNaN(t) && void 0 !== e ? e : t
    };
    var ke = new Ce;

    function Te() {}

    function xe() {
        x.apply(this, arguments)
    }

    function Ee() {
        x.apply(this, arguments)
    }

    function Me() {
        x.apply(this, arguments)
    }

    function De() {
        Me.apply(this, arguments)
    }
    Te.prototype.init = function(t) {
        this.$productImage = t.productImage, this.imageSize = t.imageSize, this.imageSrcSetData = t.imageSrcSetData, this.preloadImage = t.preloadImage, this.$loader = this.$productImage.siblings(St.itemSelector("productImageLoader"))
    }, Te.prototype.switch = function(t, e, i) {
        this.variantId = t, this.preloadImage ? this._preloadImage(t, e) : this._updateImageSrcData(this.$productImage, e), this._updateImageIdData(this.$productImage, i)
    }, Te.prototype._preloadImage = function(e, t) {
        this._showLoader();
        var i = St.itemSelector("productVariantImagePreloader"),
            n = this.$productImage.siblings("[" + i + '="' + e + '"]').get(0);
        if (n) {
            if (!n.complete) return;
            this._updateImageSrcData(this.$productImage, t), this._showProductImage()
        } else {
            n = this._initPreloadImage(e), this.$productImage.parent().append(n);
            var r = this;
            n.onload = function() {
                r.variantId === e && (r._updateImageSrcData(r.$productImage, this.src), r._showProductImage())
            }, n.onerror = function(t) {
                r.variantId === e && (console.error("ImagePreloadError", t), r._showProductImage())
            }, this._updateImageSrcData(n, t)
        }
    }, Te.prototype._imageSrcData = function(t) {
        return {
            src: wt.getRightSizedImageUrl(t, this.imageSize),
            srcset: wt.getImageSrcSet(t, this.imageSrcSetData)
        }
    }, Te.prototype._updateImageSrcData = function(t, e) {
        var i = f(t),
            n = this._imageSrcData(e);
        n.srcset ? i.attr("srcset", n.srcset) : i.removeAttr("srcset"), i.attr("src", n.src)
    }, Te.prototype._updateImageIdData = function(t, e) {
        t.attr("data-zp-image-id", e)
    }, Te.prototype._showLoader = function() {
        this.$productImage.addClass("hidden"), this.$loader.removeClass("hidden")
    }, Te.prototype._showProductImage = function() {
        this.$productImage.removeClass("hidden"), this.$loader.addClass("hidden")
    }, Te.prototype._initPreloadImage = function(t) {
        var e = St.itemSelector("productVariantImagePreloader");
        return f("<img>").attr("style", "display:none!important").attr(e, t).attr("sizes", this.$productImage.attr("sizes")).get(0)
    }, x.extend({
        constructor: xe,
        initialize: function(t) {
            this.fixedClustersManager = t.fixedClustersManager, this.pageScrollView = t.pageScrollView, this.linkEl = t.linkEl, this.targetClusterEl = t.targetClusterEl, t.linkEl.addEventListener("click", this.onLinkClick.bind(this)), this.targetClusterEl && or.addEventListener("lazyloaded", this.updateOptions.bind(this))
        },
        onLinkClick: function(t) {
            t.preventDefault(), this.updateOptions(), this.targetPageScroll !== this.currentPageScroll && this.navigateToCluster()
        },
        updateOptions: function() {
            this.targetClusterOffset = parseInt(this.targetClusterEl.offsetTop) - 5, this.stickyClusterHeight = this.calcStickyClusterHeight(), this.hideOnScrollClusterHeight = this.calcHideOnScrollClusterHeight(), this.currentPageScroll = this.pageScrollView.getCurrentPageScroll(), this.targetPageScroll = this.calcTargetPageScroll()
        },
        calcStickyClusterHeight: function() {
            var t = this.fixedClustersManager.findStickyCluster();
            return this.getElementHeight(t)
        },
        getElementHeight: function(t) {
            return t ? t.clientHeight : 0
        },
        getTargetPageScroll: function() {
            return this.targetPageScroll
        },
        calcHideOnScrollClusterHeight: function() {
            var t = this.fixedClustersManager.findHideOnScrollCluster();
            return this.getElementHeight(t)
        },
        calcTargetPageScroll: function() {
            var t = this.isScrollUp() ? this.hideOnScrollClusterHeight : 0;
            return this.targetClusterOffset - this.stickyClusterHeight - t
        },
        isScrollUp: function() {
            var t = this.hideOnScrollClusterHeight - this.stickyClusterHeight;
            return this.currentPageScroll >= this.targetClusterOffset - t
        },
        navigateToCluster: function() {
            this.pageScrollView.smoothlyScrollTo(this.getTargetPageScroll.bind(this)), history.pushState("", "", this.linkEl.hash)
        }
    }), x.extend({
        constructor: Ee,
        findStickyCluster: function() {
            return this.el.querySelector(".zpa-sticky-block") || this._findResponsiveStickyCluster()
        },
        _findResponsiveStickyCluster: function() {
            return rr.innerWidth <= 768 ? this.el.querySelector(".zpa-sticky--mobile") : rr.innerWidth <= 1200 ? this.el.querySelector(".zpa-sticky--tablet") : this.el.querySelector(".zpa-sticky--desktop")
        },
        findHideOnScrollCluster: function() {
            return this.el.querySelector(".zpa-hide_on_scroll")
        }
    }), x.extend({
        constructor: Me,
        isScrollDisabled: !1,
        initialize: function(t, e) {
            this.el = t, this.contentEl = e
        },
        enableScroll: function() {
            this.isScrollDisabled = !1, this.updateDisabledScrollClasses()
        },
        disableScroll: function() {
            this.isScrollDisabled = !0, this.updateDisabledScrollClasses()
        },
        updateDisabledScrollClasses: function() {
            this.contentEl.classList.toggle("zpa-disabled-scroll", this.isScrollDisabled)
        },
        smoothlyScrollTo: function(i) {
            var n = i();
            f(this.el).animate({
                scrollTop: n
            }, {
                duration: 800,
                step: function(t, e) {
                    n !== i() && (e.end = i())
                }
            })
        },
        getCurrentPageScroll: function() {
            return this.el.scrollTop
        }
    }), Me.extend({
        constructor: De,
        scrollPosition: 0,
        enableScroll: function() {
            Me.prototype.enableScroll.apply(this, arguments), this.el.scrollTop = this.scrollPosition
        },
        disableScroll: function() {
            this.scrollPosition = this.getCurrentPageScroll(), this.contentEl.style.top = -this.scrollPosition + "px", Me.prototype.disableScroll.apply(this, arguments)
        },
        updateDisabledScrollClasses: function() {
            Me.prototype.updateDisabledScrollClasses.apply(this, arguments), this.contentEl.classList.toggle("zpa-disabled-scroll--ios", this.isScrollDisabled)
        }
    });
    var Pe, Oe, Le = [],
        ze = _.noConflict(),
        Ie = function() {
            var t = or.body,
                e = or.scrollingElement;
            if (he.isIOS()) return new De(e, t);
            return new Me(e, t)
        }(),
        Ne = !1;

    function Be() {
        Ne || (Ne = !0, lt.update())
    }

    function Re() {
        var t = or.querySelectorAll(".zpa-published-page-holder");
        ! function() {
            try {
                var t = f("#zp-entity-settings");
                t.length < 1 && (t = f("#page")), Pe = JSON.parse(t.text())
            } catch (t) {
                Pe = {}
            }
        }();
        var e, i, n = function() {
                var e;
                try {
                    e = JSON.parse(f("#zp-blocks-json-data").text())
                } catch (t) {
                    e = []
                }
                return e
            }(),
            r = function() {
                var e;
                try {
                    e = JSON.parse(f("#zp-boostercouponsleft-json-data").text())
                } catch (t) {
                    e = 0
                }
                return e
            }(),
            o = function() {
                var e;
                try {
                    e = JSON.parse(f("#zp-boosterpage-json-data").text())
                } catch (t) {
                    e = []
                }
                return e
            }();
        Array.prototype.forEach.call(t, function(t) {
                var i, e, n = new Ee(t);
                i = n, e = t.querySelectorAll('a[href^="#"]:not([href="#"])'), Array.prototype.forEach.call(e, function(t) {
                    var e = t.hash.split("#")[1];
                    new xe({
                        linkEl: t,
                        targetClusterEl: or.getElementById(e),
                        fixedClustersManager: i,
                        pageScrollView: Ie
                    })
                })
            }),
            function() {
                for (var t = ["ajaxComplete", "ajaxError", "ajaxSend", "ajaxStart", "ajaxStop", "ajaxSuccess"], e = 0, i = t.length; e < i; e++) f(or).on(t[e], function() {
                    var t, e = rr.jQuery || rr.$;
                    if (void 0 !== (t = e) && void 0 !== t.fn && void 0 !== t.fn.jquery) {
                        var i = Array.prototype.slice.call(arguments);
                        e(or).trigger(i.shift(), i)
                    }
                })
            }(), (new le).init(), (new de).init(), (new ue).init(), (e = new ae).init(), f("[data-zp-product-init]").each(function() {
                try {
                    var t = new Yt;
                    t.init(JSON.parse(f(this).html())), t.build(), e.addToQueue(t.getProducts())
                } catch (t) {
                    console.error("initProductVariants", t)
                }
            }), e.track(), f("[data-shaved-text]").each(function(t, e) {
                new we(f(e))
            }), rr.addEventListener("pageshow", Be), i = or.querySelectorAll('a[href=""], a[href="#"]'), Array.prototype.forEach.call(i, function(t) {
                t.addEventListener("click", function(t) {
                    t.preventDefault()
                })
            }), Be(), Oe = f("#form-popup");
        try {
            JSON.parse(f("#session").text())
        } catch (t) {}
        var a, s, c, l, u, d, h, p = n.filter(function(t) {
            return "countdown" === t.role
        });
        a = p, s = or.querySelectorAll("[data-countdown-cluster]"), c = Pe && Pe.timezone ? Pe.timezone : null, Array.prototype.forEach.call(s, function(t) {
                var e = t.classList.contains("js-cluster") ? t.parentElement : t,
                    i = a.filter(function(t) {
                        return t.id === parseInt(e.querySelector("[data-count-down]").getAttribute("data-id"))
                    });
                i && i[0] && new P(e, i[0], c)
            }), f("[data-disqus-placeholder]").addClass("hidden"), f("[data-disqus-embed]").removeClass("hidden"), f("[data-fb-placeholder]").addClass("hidden"), f("[data-fbcomments-embed]").removeClass("hidden"), f("[data-yotpo-placeholder]").addClass("hidden"), f("[data-yotpo-container]").removeClass("hidden"), f("[data-stamped-placeholder]").addClass("hidden"), f("[data-stamped-container]").removeClass("hidden"), f("[data-product-review-placeholder]").addClass("hidden"), f("[data-product-review-container]").removeClass("hidden"), f("[data-form-button]").each(function() {
                Le.push(new yt(this))
            }), f("[data-search-area]").each(function() {
                var t = f(this);
                new SearchBlock(t)
            }), f("[data-crm-integrity]").each(function() {
                new gt(f(this))
            }), f(".js-best-value-not-select").length || f("[data-hidden-label]").closest("[data-product-content]").addClass("js-best-value-not-select"), l = f("[data-login-back-url]"), u = f("[data-logout-back-url]"), l.each(function() {
                this.href = this.href + "?checkout_url=" + rr.location.href
            }), u.each(function() {
                this.href = this.href + "?return_url=" + rr.location.href
            }), (d = or.querySelector("[data-back-to-top-widget]")) && new g(d),
            function(t, e, i) {
                for (var n = new w(Pe), r = 0; r < t.length; r++) {
                    var o = t[r],
                        a = or.querySelector('[data-id="' + o.id + '"]');
                    switch (o.role) {
                        case "container":
                            (a = a || or.querySelector(".ba-" + o.id)) && new M(a, new k(o), he, m);
                            break;
                        case "button":
                            new z(f("[data-id=" + o.id + "]"), new S(o, n, e, i));
                            break;
                        case "image":
                            new I(f("[data-id=" + o.id + "]"), new A(o, n, e, i));
                            break;
                        case "accordion":
                            a && new L(a, new C(o));
                            break;
                        case "carousel":
                            var s = f("[data-zp-product-media=" + o.product_id + "]");
                            o.product_id && s.length && new Ae(s, o, he);
                            break;
                        case "sizechart":
                            a && new be(a, o);
                            break;
                        case "navigationbar":
                            new _e(a, or.querySelector("#nav_" + o.cluster_id));
                            break;
                        case "navigationbar_scrolling":
                            new Se(a, o)
                    }
                }
            }(n, o, r), h = or.querySelectorAll("[data-cluster-dynamic-header]"), Array.prototype.forEach.call(h, function(t) {
                new N(t, m)
            })
    }! function() {
        if (rr.ZipifyPages && rr.ZipifyPages.SplitTest && "function" == typeof rr.ZipifyPages.SplitTest.onEntityContentInjected) {
            var t = !1;
            rr.ZipifyPages.SplitTest.onEntityContentInjected(function() {
                t || (t = !0, Re())
            })
        } else Re()
    }()
}(window, document, localStorage)
