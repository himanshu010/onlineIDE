//JQUERY MIN

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.4.1",
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || k.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        b(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var h = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      k = "sizzle" + 1 * new Date(),
      m = n.document,
      S = 0,
      r = 0,
      p = ue(),
      x = ue(),
      N = ue(),
      A = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      $ =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp($),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(m.childNodes)), m.childNodes),
        t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)
      ) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && U.test(t))) {
            (s = e.getAttribute("id"))
              ? (s = s.replace(re, ie))
              : e.setAttribute("id", (s = k)),
              (o = (l = h(t)).length);
            while (o--) l[o] = "#" + s + " " + xe(l[o]);
            (c = l.join(",")), (f = (ee.test(t) && ye(e.parentNode)) || e);
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[k] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : m;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            m !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === m && y(m, e))
                        ? -1
                        : t === C || (t.ownerDocument === m && y(m, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === m
                    ? -1
                    : s[r] === m
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        d.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          A(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[k]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[k] && (v = Ce(v)),
        y && !y[k] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
            (a = N(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(D).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (k.find = h),
    (k.expr = h.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = h.uniqueSort),
    (k.text = h.getText),
    (k.isXMLDoc = h.isXML),
    (k.contains = h.contains),
    (k.escapeSelector = h.escape);
  var T = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? k.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : k.filter(n, e, r);
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : L.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof k ? t[0] : t),
          k.merge(
            this,
            k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          D.test(r[1]) && k.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(k)
      : k.makeArray(e, this);
  }).prototype = k.fn),
    (q = k(E));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return "undefined" != typeof e.contentDocument
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              k.merge([], e.childNodes));
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (k.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : k.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                k.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = k.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, M, s), l(u, o, I, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, M, s),
                                  l(u, o, I, s),
                                  l(u, o, M, o.notifyWith)
                                ))
                            : (a !== M && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== I && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : M)),
                    o[2][3].add(l(0, e, m(n) ? n : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (W(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) W(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      $.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          F.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(k(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = k.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            G(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(R) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || k.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), ee(o, r, i[r]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              J.set(this, n);
            })
          : _(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = J.get(o, n))
                    ? t
                    : void 0 !== (t = ee(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  J.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Q.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Q.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Q.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = E.documentElement,
    oe = function (e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  var se = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && oe(e) && "none" === k.css(e, "display"))
      );
    },
    ue = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function le(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (k.cssNumber[t] || ("px" !== l && +u)) &&
        ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        k.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), k.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Q.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              se(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ce[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = k.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ce[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = oe(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  (me = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (me.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, i, o) {
    o
      ? (Q.set(e, i, !1),
        k.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Q.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (k.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Q.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Q.set(this, i, {
                  value: k.event.trigger(
                    k.extend(r[0], k.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.get(t);
      if (v) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && k.find.matchesSelector(ie, i),
          n.guid || (n.guid = k.guid++),
          (u = v.events) || (u = v.events = {}),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof k && k.event.triggered !== e.type
                  ? k.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(R) || [""]).length);
        while (l--)
          (d = g = (s = Ee.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = k.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                k.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        (a = k.event.handlers.call(this, s, l)), (t = 0);
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          (s.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Q.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      k.event.addProp
    ),
    k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      k.event.special[e] = {
        setup: function () {
          return De(this, e, Ne), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        delegateType: t,
      };
    }),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            k.event.remove(this, e, n, t);
          })
        );
      },
    });
  var je =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        k(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Re(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Q.hasData(e) &&
        ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Le.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Q.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? k._evalUrl &&
                  !u.noModule &&
                  k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce"),
                  })
                : b(u.textContent.replace(He, ""), u, l));
    }
    return n;
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(ve(r)),
        r.parentNode &&
          (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = oe(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Me(o[r], a[r]);
        else Me(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return We(this, e, !0);
      },
      remove: function (e) {
        return We(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !qe.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Ie(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Fe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Be = new RegExp(re.join("|"), "i");
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = k.style(e, t)),
        !y.pixelBoxStyles() &&
          $e.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (u) {
        (s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        (n = "1%" !== e.top),
          (a = 12 === t(e.marginLeft)),
          (u.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (u.style.position = "absolute"),
          (i = 12 === t(u.offsetWidth / 3)),
          ie.removeChild(s),
          (u = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s = E.createElement("div"),
      u = E.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
      k.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
        scrollboxSize: function () {
          return e(), i;
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = E.createElement("div").style,
    Ve = {};
  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return (
      t ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
              while (n--) if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += k.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n &&
              (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += k.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
              : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function tt(e, t, n) {
    var r = Fe(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === k.css(e, "boxSizing", !1, r),
      o = i,
      a = _e(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Qe.test(t),
          l = e.style;
        if (
          (u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = ne.exec(n)) &&
          i[1] &&
          ((n = le(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Qe.test(t) || (t = Ge(s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = _e(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, u) {
      k.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ye.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, u, n)
              : ue(e, Je, function () {
                  return tt(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  et(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = ne.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = k.css(e, u))),
            Ze(0, t, s)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(_e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (k.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }),
    k.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Fe(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((k.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = nt.prototype.init),
    (k.fx.step = {});
  var rt,
    it,
    ot,
    at,
    st = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  function lt() {
    it &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(lt)
        : C.setTimeout(lt, k.fx.interval),
      k.fx.tick());
  }
  function ct() {
    return (
      C.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function pt(e, t, n) {
    for (
      var r,
        i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function dt(o, e, t) {
    var n,
      a,
      r = 0,
      i = dt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = rt || ct(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      k.map(c, pt, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (k.Animation = k.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), st.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Q.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Q.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), Q.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = pt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        k.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function () {
            var e = dt(this, k.extend({}, t), o);
            (i || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Q.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Q.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(ft(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (rt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (rt = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      it || ((it = !0), lt());
    }),
    (k.fx.stop = function () {
      it = null;
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (ot = E.createElement("input")),
    (at = E.createElement("select").appendChild(E.createElement("option"))),
    (ot.type = "checkbox"),
    (y.checkOn = "" !== ot.value),
    (y.optSelected = at.selected),
    ((ot = E.createElement("input")).value = "t"),
    (ot.type = "radio"),
    (y.radioValue = "t" === ot.value);
  var ht,
    gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = k.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(R);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = gt[t] || k.find.attr;
      gt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = gt[o]),
            (gt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (gt[o] = i)),
          r
        );
      };
    });
  var vt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, xt(this)));
          });
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, xt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              k(this).toggleClass(i.call(this, e, xt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = k(this)), (r = bt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(wt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        y.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function (e) {
      e.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Tt.test(d + k.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[k.expando]
            ? e
            : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (c = k.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) &&
              l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              G(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !G(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (k.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Ct),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Ct),
              (k.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        };
        k.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r);
            t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r) - 1;
            t
              ? Q.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Q.remove(e, r));
          },
        };
      });
  var Et = C.location,
    kt = Date.now(),
    St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var Nt = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      k.each(e, function (e, t) {
        r || Nt.test(n)
          ? i(n, t)
          : qt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
  }
  (k.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) qt(n, e[n], t, i);
    return r.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? k.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Ft = E.createElement("a");
  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(R) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function _t(t, i, o, a) {
    var s = {},
      u = t === Wt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (Ft.href = Et.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Pt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            Mt,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = k.param(v.data, v.traditional)),
          _t(It, v, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && v.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Rt.test(v.type)),
        (f = v.url.replace(Ht, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Lt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (St.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Ot, "$1")),
              (o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = _t(Wt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              k.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (k._evalUrl = function (e, t) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          k.globalEval(e, t);
        },
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Xt = k.ajaxSettings.xhr();
  (y.cors = !!Xt && "withCredentials" in Xt),
    (y.ajax = Xt = !!Xt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (Xt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Ut[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Vt,
    Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Yt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Yt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Vt.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = D.exec(e))
            ? [t.createElement(i[1])]
            : ((i = we([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === k.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
              (i.left += k.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === k.css(e, "position")) e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    k.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return _(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
        if (t)
          return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each({ Height: "height", Width: "width" }, function (a, s) {
      k.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return _(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? k.css(e, t, i)
                  : k.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || k.guid++),
          i
        );
    }),
    (k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }),
    (k.isArray = Array.isArray),
    (k.parseJSON = JSON.parse),
    (k.nodeName = A),
    (k.isFunction = m),
    (k.isWindow = x),
    (k.camelCase = V),
    (k.type = w),
    (k.now = Date.now),
    (k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Qt = C.jQuery,
    Jt = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
});

//BOOTSTRAP BUNDLE

/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], t)
    : t(((e = e || self).bootstrap = {}), e.jQuery);
})(this, function (e, p) {
  "use strict";
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function s(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }
  function t(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function l(o) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? t(Object(r), !0).forEach(function (e) {
            var t, n, i;
            (t = o),
              (i = r[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = i);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
        : t(Object(r)).forEach(function (e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return o;
  }
  p = p && p.hasOwnProperty("default") ? p.default : p;
  var n = "transitionend";
  function o(e) {
    var t = this,
      n = !1;
    return (
      p(this).one(m.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || m.triggerTransitionEnd(t);
      }, e),
      this
    );
  }
  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (e) {
      for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
      return e;
    },
    getSelectorFromElement: function (e) {
      var t = e.getAttribute("data-target");
      if (!t || "#" === t) {
        var n = e.getAttribute("href");
        t = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(t) ? t : null;
      } catch (e) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (e) {
      if (!e) return 0;
      var t = p(e).css("transition-duration"),
        n = p(e).css("transition-delay"),
        i = parseFloat(t),
        o = parseFloat(n);
      return i || o
        ? ((t = t.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(t) + parseFloat(n)))
        : 0;
    },
    reflow: function (e) {
      return e.offsetHeight;
    },
    triggerTransitionEnd: function (e) {
      p(e).trigger(n);
    },
    supportsTransitionEnd: function () {
      return Boolean(n);
    },
    isElement: function (e) {
      return (e[0] || e).nodeType;
    },
    typeCheckConfig: function (e, t, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = t[i],
            s =
              r && m.isElement(r)
                ? "element"
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              e.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (e) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof e.getRootNode)
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? m.findShadowRoot(e.parentNode)
          : null;
      var t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof p)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var e = p.fn.jquery.split(" ")[0].split(".");
      if (
        (e[0] < 2 && e[1] < 9) ||
        (1 === e[0] && 9 === e[1] && e[2] < 1) ||
        4 <= e[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  m.jQueryDetection(),
    (p.fn.emulateTransitionEnd = o),
    (p.event.special[m.TRANSITION_END] = {
      bindType: n,
      delegateType: n,
      handle: function (e) {
        if (p(e.target).is(this))
          return e.handleObj.handler.apply(this, arguments);
      },
    });
  var r = "alert",
    a = "bs.alert",
    c = "." + a,
    h = p.fn[r],
    u = {
      CLOSE: "close" + c,
      CLOSED: "closed" + c,
      CLICK_DATA_API: "click" + c + ".data-api",
    },
    f = "alert",
    d = "fade",
    g = "show",
    _ = (function () {
      function i(e) {
        this._element = e;
      }
      var e = i.prototype;
      return (
        (e.close = function (e) {
          var t = this._element;
          e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() ||
              this._removeElement(t);
        }),
        (e.dispose = function () {
          p.removeData(this._element, a), (this._element = null);
        }),
        (e._getRootElement = function (e) {
          var t = m.getSelectorFromElement(e),
            n = !1;
          return (
            t && (n = document.querySelector(t)),
            (n = n || p(e).closest("." + f)[0])
          );
        }),
        (e._triggerCloseEvent = function (e) {
          var t = p.Event(u.CLOSE);
          return p(e).trigger(t), t;
        }),
        (e._removeElement = function (t) {
          var n = this;
          if ((p(t).removeClass(g), p(t).hasClass(d))) {
            var e = m.getTransitionDurationFromElement(t);
            p(t)
              .one(m.TRANSITION_END, function (e) {
                return n._destroyElement(t, e);
              })
              .emulateTransitionEnd(e);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (e) {
          p(e).detach().trigger(u.CLOSED).remove();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this),
              t = e.data(a);
            t || ((t = new i(this)), e.data(a, t)), "close" === n && t[n](this);
          });
        }),
        (i._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        i
      );
    })();
  p(document).on(
    u.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    _._handleDismiss(new _())
  ),
    (p.fn[r] = _._jQueryInterface),
    (p.fn[r].Constructor = _),
    (p.fn[r].noConflict = function () {
      return (p.fn[r] = h), _._jQueryInterface;
    });
  var v = "button",
    y = "bs.button",
    E = "." + y,
    b = ".data-api",
    w = p.fn[v],
    T = "active",
    C = "btn",
    S = "focus",
    D = '[data-toggle^="button"]',
    I = '[data-toggle="buttons"]',
    A = '[data-toggle="button"]',
    O = '[data-toggle="buttons"] .btn',
    N = 'input:not([type="hidden"])',
    k = ".active",
    L = ".btn",
    P = {
      CLICK_DATA_API: "click" + E + b,
      FOCUS_BLUR_DATA_API: "focus" + E + b + " blur" + E + b,
      LOAD_DATA_API: "load" + E + b,
    },
    x = (function () {
      function n(e) {
        this._element = e;
      }
      var e = n.prototype;
      return (
        (e.toggle = function () {
          var e = !0,
            t = !0,
            n = p(this._element).closest(I)[0];
          if (n) {
            var i = this._element.querySelector(N);
            if (i) {
              if ("radio" === i.type)
                if (i.checked && this._element.classList.contains(T)) e = !1;
                else {
                  var o = n.querySelector(k);
                  o && p(o).removeClass(T);
                }
              else
                "checkbox" === i.type
                  ? "LABEL" === this._element.tagName &&
                    i.checked === this._element.classList.contains(T) &&
                    (e = !1)
                  : (e = !1);
              e &&
                ((i.checked = !this._element.classList.contains(T)),
                p(i).trigger("change")),
                i.focus(),
                (t = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (t &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(T)
              ),
            e && p(this._element).toggleClass(T));
        }),
        (e.dispose = function () {
          p.removeData(this._element, y), (this._element = null);
        }),
        (n._jQueryInterface = function (t) {
          return this.each(function () {
            var e = p(this).data(y);
            e || ((e = new n(this)), p(this).data(y, e)),
              "toggle" === t && e[t]();
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        n
      );
    })();
  p(document)
    .on(P.CLICK_DATA_API, D, function (e) {
      var t = e.target;
      if (
        (p(t).hasClass(C) || (t = p(t).closest(L)[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
      )
        e.preventDefault();
      else {
        var n = t.querySelector(N);
        if (
          n &&
          (n.hasAttribute("disabled") || n.classList.contains("disabled"))
        )
          return void e.preventDefault();
        x._jQueryInterface.call(p(t), "toggle");
      }
    })
    .on(P.FOCUS_BLUR_DATA_API, D, function (e) {
      var t = p(e.target).closest(L)[0];
      p(t).toggleClass(S, /^focus(in)?$/.test(e.type));
    }),
    p(window).on(P.LOAD_DATA_API, function () {
      for (
        var e = [].slice.call(document.querySelectorAll(O)),
          t = 0,
          n = e.length;
        t < n;
        t++
      ) {
        var i = e[t],
          o = i.querySelector(N);
        o.checked || o.hasAttribute("checked")
          ? i.classList.add(T)
          : i.classList.remove(T);
      }
      for (
        var r = 0, s = (e = [].slice.call(document.querySelectorAll(A))).length;
        r < s;
        r++
      ) {
        var a = e[r];
        "true" === a.getAttribute("aria-pressed")
          ? a.classList.add(T)
          : a.classList.remove(T);
      }
    }),
    (p.fn[v] = x._jQueryInterface),
    (p.fn[v].Constructor = x),
    (p.fn[v].noConflict = function () {
      return (p.fn[v] = w), x._jQueryInterface;
    });
  var j = "carousel",
    H = "bs.carousel",
    R = "." + H,
    F = ".data-api",
    M = p.fn[j],
    W = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    U = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    B = "next",
    q = "prev",
    K = "left",
    Q = "right",
    V = {
      SLIDE: "slide" + R,
      SLID: "slid" + R,
      KEYDOWN: "keydown" + R,
      MOUSEENTER: "mouseenter" + R,
      MOUSELEAVE: "mouseleave" + R,
      TOUCHSTART: "touchstart" + R,
      TOUCHMOVE: "touchmove" + R,
      TOUCHEND: "touchend" + R,
      POINTERDOWN: "pointerdown" + R,
      POINTERUP: "pointerup" + R,
      DRAG_START: "dragstart" + R,
      LOAD_DATA_API: "load" + R + F,
      CLICK_DATA_API: "click" + R + F,
    },
    Y = "carousel",
    z = "active",
    X = "slide",
    G = "carousel-item-right",
    $ = "carousel-item-left",
    J = "carousel-item-next",
    Z = "carousel-item-prev",
    ee = "pointer-event",
    te = ".active",
    ne = ".active.carousel-item",
    ie = ".carousel-item",
    oe = ".carousel-item img",
    re = ".carousel-item-next, .carousel-item-prev",
    se = ".carousel-indicators",
    ae = "[data-slide], [data-slide-to]",
    le = '[data-ride="carousel"]',
    ce = { TOUCH: "touch", PEN: "pen" },
    he = (function () {
      function r(e, t) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._element = e),
          (this._indicatorsElement = this._element.querySelector(se)),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = r.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide(B);
        }),
        (e.nextWhenVisible = function () {
          !document.hidden &&
            p(this._element).is(":visible") &&
            "hidden" !== p(this._element).css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide(q);
        }),
        (e.pause = function (e) {
          e || (this._isPaused = !0),
            this._element.querySelector(re) &&
              (m.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (e) {
          e || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (e.to = function (e) {
          var t = this;
          this._activeElement = this._element.querySelector(ne);
          var n = this._getItemIndex(this._activeElement);
          if (!(e > this._items.length - 1 || e < 0))
            if (this._isSliding)
              p(this._element).one(V.SLID, function () {
                return t.to(e);
              });
            else {
              if (n === e) return this.pause(), void this.cycle();
              var i = n < e ? B : q;
              this._slide(i, this._items[e]);
            }
        }),
        (e.dispose = function () {
          p(this._element).off(R),
            p.removeData(this._element, H),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (e) {
          return (e = l({}, W, {}, e)), m.typeCheckConfig(j, e, U), e;
        }),
        (e._handleSwipe = function () {
          var e = Math.abs(this.touchDeltaX);
          if (!(e <= 40)) {
            var t = e / this.touchDeltaX;
            (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            p(this._element).on(V.KEYDOWN, function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              p(this._element)
                .on(V.MOUSEENTER, function (e) {
                  return t.pause(e);
                })
                .on(V.MOUSELEAVE, function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var n = function (e) {
                t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              i = function (e) {
                t._pointerEvent &&
                  ce[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            p(this._element.querySelectorAll(oe)).on(
              V.DRAG_START,
              function (e) {
                return e.preventDefault();
              }
            ),
              this._pointerEvent
                ? (p(this._element).on(V.POINTERDOWN, function (e) {
                    return n(e);
                  }),
                  p(this._element).on(V.POINTERUP, function (e) {
                    return i(e);
                  }),
                  this._element.classList.add(ee))
                : (p(this._element).on(V.TOUCHSTART, function (e) {
                    return n(e);
                  }),
                  p(this._element).on(V.TOUCHMOVE, function (e) {
                    return (function (e) {
                      e.originalEvent.touches &&
                      1 < e.originalEvent.touches.length
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX =
                            e.originalEvent.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  p(this._element).on(V.TOUCHEND, function (e) {
                    return i(e);
                  }));
          }
        }),
        (e._keydown = function (e) {
          if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
              case 37:
                e.preventDefault(), this.prev();
                break;
              case 39:
                e.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (e) {
          return (
            (this._items =
              e && e.parentNode
                ? [].slice.call(e.parentNode.querySelectorAll(ie))
                : []),
            this._items.indexOf(e)
          );
        }),
        (e._getItemByDirection = function (e, t) {
          var n = e === B,
            i = e === q,
            o = this._getItemIndex(t),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return t;
          var s = (o + (e === q ? -1 : 1)) % this._items.length;
          return -1 == s ? this._items[this._items.length - 1] : this._items[s];
        }),
        (e._triggerSlideEvent = function (e, t) {
          var n = this._getItemIndex(e),
            i = this._getItemIndex(this._element.querySelector(ne)),
            o = p.Event(V.SLIDE, {
              relatedTarget: e,
              direction: t,
              from: i,
              to: n,
            });
          return p(this._element).trigger(o), o;
        }),
        (e._setActiveIndicatorElement = function (e) {
          if (this._indicatorsElement) {
            var t = [].slice.call(this._indicatorsElement.querySelectorAll(te));
            p(t).removeClass(z);
            var n = this._indicatorsElement.children[this._getItemIndex(e)];
            n && p(n).addClass(z);
          }
        }),
        (e._slide = function (e, t) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(ne),
            a = this._getItemIndex(s),
            l = t || (s && this._getItemByDirection(e, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval);
          if (
            ((o = e === B ? ((n = $), (i = J), K) : ((n = G), (i = Z), Q)),
            l && p(l).hasClass(z))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
            s &&
            l
          ) {
            (this._isSliding = !0),
              h && this.pause(),
              this._setActiveIndicatorElement(l);
            var u = p.Event(V.SLID, {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c,
            });
            if (p(this._element).hasClass(X)) {
              p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
              var f = parseInt(l.getAttribute("data-interval"), 10);
              f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = f))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var d = m.getTransitionDurationFromElement(s);
              p(s)
                .one(m.TRANSITION_END, function () {
                  p(l)
                    .removeClass(n + " " + i)
                    .addClass(z),
                    p(s).removeClass(z + " " + i + " " + n),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return p(r._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(d);
            } else
              p(s).removeClass(z),
                p(l).addClass(z),
                (this._isSliding = !1),
                p(this._element).trigger(u);
            h && this.cycle();
          }
        }),
        (r._jQueryInterface = function (i) {
          return this.each(function () {
            var e = p(this).data(H),
              t = l({}, W, {}, p(this).data());
            "object" == typeof i && (t = l({}, t, {}, i));
            var n = "string" == typeof i ? i : t.slide;
            if (
              (e || ((e = new r(this, t)), p(this).data(H, e)),
              "number" == typeof i)
            )
              e.to(i);
            else if ("string" == typeof n) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            } else t.interval && t.ride && (e.pause(), e.cycle());
          });
        }),
        (r._dataApiClickHandler = function (e) {
          var t = m.getSelectorFromElement(this);
          if (t) {
            var n = p(t)[0];
            if (n && p(n).hasClass(Y)) {
              var i = l({}, p(n).data(), {}, p(this).data()),
                o = this.getAttribute("data-slide-to");
              o && (i.interval = !1),
                r._jQueryInterface.call(p(n), i),
                o && p(n).data(H).to(o),
                e.preventDefault();
            }
          }
        }),
        s(r, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return W;
            },
          },
        ]),
        r
      );
    })();
  p(document).on(V.CLICK_DATA_API, ae, he._dataApiClickHandler),
    p(window).on(V.LOAD_DATA_API, function () {
      for (
        var e = [].slice.call(document.querySelectorAll(le)),
          t = 0,
          n = e.length;
        t < n;
        t++
      ) {
        var i = p(e[t]);
        he._jQueryInterface.call(i, i.data());
      }
    }),
    (p.fn[j] = he._jQueryInterface),
    (p.fn[j].Constructor = he),
    (p.fn[j].noConflict = function () {
      return (p.fn[j] = M), he._jQueryInterface;
    });
  var ue = "collapse",
    fe = "bs.collapse",
    de = "." + fe,
    pe = p.fn[ue],
    me = { toggle: !0, parent: "" },
    ge = { toggle: "boolean", parent: "(string|element)" },
    _e = {
      SHOW: "show" + de,
      SHOWN: "shown" + de,
      HIDE: "hide" + de,
      HIDDEN: "hidden" + de,
      CLICK_DATA_API: "click" + de + ".data-api",
    },
    ve = "show",
    ye = "collapse",
    Ee = "collapsing",
    be = "collapsed",
    we = "width",
    Te = "height",
    Ce = ".show, .collapsing",
    Se = '[data-toggle="collapse"]',
    De = (function () {
      function a(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(Se)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = m.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (e) {
                return e === t;
              });
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = a.prototype;
      return (
        (e.toggle = function () {
          p(this._element).hasClass(ve) ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            t,
            n = this;
          if (
            !this._isTransitioning &&
            !p(this._element).hasClass(ve) &&
            (this._parent &&
              0 ===
                (e = [].slice
                  .call(this._parent.querySelectorAll(Ce))
                  .filter(function (e) {
                    return "string" == typeof n._config.parent
                      ? e.getAttribute("data-parent") === n._config.parent
                      : e.classList.contains(ye);
                  })).length &&
              (e = null),
            !(
              e &&
              (t = p(e).not(this._selector).data(fe)) &&
              t._isTransitioning
            ))
          ) {
            var i = p.Event(_e.SHOW);
            if ((p(this._element).trigger(i), !i.isDefaultPrevented())) {
              e &&
                (a._jQueryInterface.call(p(e).not(this._selector), "hide"),
                t || p(e).data(fe, null));
              var o = this._getDimension();
              p(this._element).removeClass(ye).addClass(Ee),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  p(this._triggerArray)
                    .removeClass(be)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                s = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function () {
                  p(n._element).removeClass(Ee).addClass(ye).addClass(ve),
                    (n._element.style[o] = ""),
                    n.setTransitioning(!1),
                    p(n._element).trigger(_e.SHOWN);
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + "px");
            }
          }
        }),
        (e.hide = function () {
          var e = this;
          if (!this._isTransitioning && p(this._element).hasClass(ve)) {
            var t = p.Event(_e.HIDE);
            if ((p(this._element).trigger(t), !t.isDefaultPrevented())) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                m.reflow(this._element),
                p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = m.getSelectorFromElement(r);
                  if (null !== s)
                    p([].slice.call(document.querySelectorAll(s))).hasClass(
                      ve
                    ) || p(r).addClass(be).attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var a = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function () {
                  e.setTransitioning(!1),
                    p(e._element)
                      .removeClass(Ee)
                      .addClass(ye)
                      .trigger(_e.HIDDEN);
                })
                .emulateTransitionEnd(a);
            }
          }
        }),
        (e.setTransitioning = function (e) {
          this._isTransitioning = e;
        }),
        (e.dispose = function () {
          p.removeData(this._element, fe),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (e) {
          return (
            ((e = l({}, me, {}, e)).toggle = Boolean(e.toggle)),
            m.typeCheckConfig(ue, e, ge),
            e
          );
        }),
        (e._getDimension = function () {
          return p(this._element).hasClass(we) ? we : Te;
        }),
        (e._getParent = function () {
          var e,
            n = this;
          m.isElement(this._config.parent)
            ? ((e = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var t =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(e.querySelectorAll(t));
          return (
            p(i).each(function (e, t) {
              n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (e, t) {
          var n = p(e).hasClass(ve);
          t.length && p(t).toggleClass(be, !n).attr("aria-expanded", n);
        }),
        (a._getTargetFromElement = function (e) {
          var t = m.getSelectorFromElement(e);
          return t ? document.querySelector(t) : null;
        }),
        (a._jQueryInterface = function (i) {
          return this.each(function () {
            var e = p(this),
              t = e.data(fe),
              n = l(
                {},
                me,
                {},
                e.data(),
                {},
                "object" == typeof i && i ? i : {}
              );
            if (
              (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
              t || ((t = new a(this, n)), e.data(fe, t)),
              "string" == typeof i)
            ) {
              if ("undefined" == typeof t[i])
                throw new TypeError('No method named "' + i + '"');
              t[i]();
            }
          });
        }),
        s(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return me;
            },
          },
        ]),
        a
      );
    })();
  p(document).on(_e.CLICK_DATA_API, Se, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = p(this),
      t = m.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(t));
    p(i).each(function () {
      var e = p(this),
        t = e.data(fe) ? "toggle" : n.data();
      De._jQueryInterface.call(e, t);
    });
  }),
    (p.fn[ue] = De._jQueryInterface),
    (p.fn[ue].Constructor = De),
    (p.fn[ue].noConflict = function () {
      return (p.fn[ue] = pe), De._jQueryInterface;
    });
  var Ie =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    Ae = (function () {
      for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
        if (Ie && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
      return 0;
    })();
  var Oe =
    Ie && window.Promise
      ? function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, Ae));
          };
        };
  function Ne(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function ke(e, t) {
    if (1 !== e.nodeType) return [];
    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function Le(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function Pe(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var t = ke(e),
      n = t.overflow,
      i = t.overflowX,
      o = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? e : Pe(Le(e));
  }
  function xe(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }
  var je = Ie && !(!window.MSInputMethodContext || !document.documentMode),
    He = Ie && /MSIE 10/.test(navigator.userAgent);
  function Re(e) {
    return 11 === e ? je : 10 === e ? He : je || He;
  }
  function Fe(e) {
    if (!e) return document.documentElement;
    for (
      var t = Re(10) ? document.body : null, n = e.offsetParent || null;
      n === t && e.nextElementSibling;

    )
      n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === ke(n, "position")
        ? Fe(n)
        : n
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function Me(e) {
    return null !== e.parentNode ? Me(e.parentNode) : e;
  }
  function We(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? e : t,
      o = n ? t : e,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s = r.commonAncestorContainer;
    if ((e !== s && t !== s) || i.contains(o))
      return (function (e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || Fe(e.firstElementChild) === e);
      })(s)
        ? s
        : Fe(s);
    var a = Me(e);
    return a.host ? We(a.host, t) : We(e, Me(t).host);
  }
  function Ue(e, t) {
    var n =
        "top" === (1 < arguments.length && void 0 !== t ? t : "top")
          ? "scrollTop"
          : "scrollLeft",
      i = e.nodeName;
    if ("BODY" !== i && "HTML" !== i) return e[n];
    var o = e.ownerDocument.documentElement;
    return (e.ownerDocument.scrollingElement || o)[n];
  }
  function Be(e, t) {
    var n = "x" === t ? "Left" : "Top",
      i = "Left" == n ? "Right" : "Bottom";
    return (
      parseFloat(e["border" + n + "Width"], 10) +
      parseFloat(e["border" + i + "Width"], 10)
    );
  }
  function qe(e, t, n, i) {
    return Math.max(
      t["offset" + e],
      t["scroll" + e],
      n["client" + e],
      n["offset" + e],
      n["scroll" + e],
      Re(10)
        ? parseInt(n["offset" + e]) +
            parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")])
        : 0
    );
  }
  function Ke(e) {
    var t = e.body,
      n = e.documentElement,
      i = Re(10) && getComputedStyle(n);
    return { height: qe("Height", t, n, i), width: qe("Width", t, n, i) };
  }
  var Qe = function (e, t, n) {
    return t && Ve(e.prototype, t), n && Ve(e, n), e;
  };
  function Ve(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function Ye(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var ze =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    };
  function Xe(e) {
    return ze({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function Ge(e) {
    var t = {};
    try {
      if (Re(10)) {
        t = e.getBoundingClientRect();
        var n = Ue(e, "top"),
          i = Ue(e, "left");
        (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
      } else t = e.getBoundingClientRect();
    } catch (e) {}
    var o = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top,
      },
      r = "HTML" === e.nodeName ? Ke(e.ownerDocument) : {},
      s = r.width || e.clientWidth || o.width,
      a = r.height || e.clientHeight || o.height,
      l = e.offsetWidth - s,
      c = e.offsetHeight - a;
    if (l || c) {
      var h = ke(e);
      (l -= Be(h, "x")), (c -= Be(h, "y")), (o.width -= l), (o.height -= c);
    }
    return Xe(o);
  }
  function $e(e, t, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
      o = Re(10),
      r = "HTML" === t.nodeName,
      s = Ge(e),
      a = Ge(t),
      l = Pe(e),
      c = ke(t),
      h = parseFloat(c.borderTopWidth, 10),
      u = parseFloat(c.borderLeftWidth, 10);
    i && r && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var f = Xe({
      top: s.top - a.top - h,
      left: s.left - a.left - u,
      width: s.width,
      height: s.height,
    });
    if (((f.marginTop = 0), (f.marginLeft = 0), !o && r)) {
      var d = parseFloat(c.marginTop, 10),
        p = parseFloat(c.marginLeft, 10);
      (f.top -= h - d),
        (f.bottom -= h - d),
        (f.left -= u - p),
        (f.right -= u - p),
        (f.marginTop = d),
        (f.marginLeft = p);
    }
    return (
      (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) &&
        (f = (function (e, t, n) {
          var i = 2 < arguments.length && void 0 !== n && n,
            o = Ue(t, "top"),
            r = Ue(t, "left"),
            s = i ? -1 : 1;
          return (
            (e.top += o * s),
            (e.bottom += o * s),
            (e.left += r * s),
            (e.right += r * s),
            e
          );
        })(f, t)),
      f
    );
  }
  function Je(e) {
    if (!e || !e.parentElement || Re()) return document.documentElement;
    for (var t = e.parentElement; t && "none" === ke(t, "transform"); )
      t = t.parentElement;
    return t || document.documentElement;
  }
  function Ze(e, t, n, i, o) {
    var r = 4 < arguments.length && void 0 !== o && o,
      s = { top: 0, left: 0 },
      a = r ? Je(e) : We(e, xe(t));
    if ("viewport" === i)
      s = (function (e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
          i = e.ownerDocument.documentElement,
          o = $e(e, i),
          r = Math.max(i.clientWidth, window.innerWidth || 0),
          s = Math.max(i.clientHeight, window.innerHeight || 0),
          a = n ? 0 : Ue(i),
          l = n ? 0 : Ue(i, "left");
        return Xe({
          top: a - o.top + o.marginTop,
          left: l - o.left + o.marginLeft,
          width: r,
          height: s,
        });
      })(a, r);
    else {
      var l = void 0;
      "scrollParent" === i
        ? "BODY" === (l = Pe(Le(t))).nodeName &&
          (l = e.ownerDocument.documentElement)
        : (l = "window" === i ? e.ownerDocument.documentElement : i);
      var c = $e(l, a, r);
      if (
        "HTML" !== l.nodeName ||
        (function e(t) {
          var n = t.nodeName;
          if ("BODY" === n || "HTML" === n) return !1;
          if ("fixed" === ke(t, "position")) return !0;
          var i = Le(t);
          return !!i && e(i);
        })(a)
      )
        s = c;
      else {
        var h = Ke(e.ownerDocument),
          u = h.height,
          f = h.width;
        (s.top += c.top - c.marginTop),
          (s.bottom = u + c.top),
          (s.left += c.left - c.marginLeft),
          (s.right = f + c.left);
      }
    }
    var d = "number" == typeof (n = n || 0);
    return (
      (s.left += d ? n : n.left || 0),
      (s.top += d ? n : n.top || 0),
      (s.right -= d ? n : n.right || 0),
      (s.bottom -= d ? n : n.bottom || 0),
      s
    );
  }
  function et(e, t, i, n, o, r) {
    var s = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === e.indexOf("auto")) return e;
    var a = Ze(i, n, s, o),
      l = {
        top: { width: a.width, height: t.top - a.top },
        right: { width: a.right - t.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - t.bottom },
        left: { width: t.left - a.left, height: a.height },
      },
      c = Object.keys(l)
        .map(function (e) {
          return ze({ key: e }, l[e], {
            area: (function (e) {
              return e.width * e.height;
            })(l[e]),
          });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      h = c.filter(function (e) {
        var t = e.width,
          n = e.height;
        return t >= i.clientWidth && n >= i.clientHeight;
      }),
      u = 0 < h.length ? h[0].key : c[0].key,
      f = e.split("-")[1];
    return u + (f ? "-" + f : "");
  }
  function tt(e, t, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return $e(n, o ? Je(t) : We(t, xe(n)), o);
  }
  function nt(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e),
      n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
      i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return { width: e.offsetWidth + i, height: e.offsetHeight + n };
  }
  function it(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function ot(e, t, n) {
    n = n.split("-")[0];
    var i = nt(e),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = t[s] + t[l] / 2 - i[l] / 2),
      (o[a] = n === a ? t[a] - i[c] : t[it(a)]),
      o
    );
  }
  function rt(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function st(e, n, t) {
    return (
      (void 0 === t
        ? e
        : e.slice(
            0,
            (function (e, t, n) {
              if (Array.prototype.findIndex)
                return e.findIndex(function (e) {
                  return e[t] === n;
                });
              var i = rt(e, function (e) {
                return e[t] === n;
              });
              return e.indexOf(i);
            })(e, "name", t)
          )
      ).forEach(function (e) {
        e.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var t = e.function || e.fn;
        e.enabled &&
          Ne(t) &&
          ((n.offsets.popper = Xe(n.offsets.popper)),
          (n.offsets.reference = Xe(n.offsets.reference)),
          (n = t(n, e)));
      }),
      n
    );
  }
  function at(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n;
    });
  }
  function lt(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        n = e.charAt(0).toUpperCase() + e.slice(1),
        i = 0;
      i < t.length;
      i++
    ) {
      var o = t[i],
        r = o ? "" + o + n : e;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function ct(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function ht(e, t, n, i) {
    (n.updateBound = i),
      ct(e).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = Pe(e);
    return (
      (function e(t, n, i, o) {
        var r = "BODY" === t.nodeName,
          s = r ? t.ownerDocument.defaultView : t;
        s.addEventListener(n, i, { passive: !0 }),
          r || e(Pe(s.parentNode), n, i, o),
          o.push(s);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function ut() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = (function (e, t) {
        return (
          ct(e).removeEventListener("resize", t.updateBound),
          t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound);
          }),
          (t.updateBound = null),
          (t.scrollParents = []),
          (t.scrollElement = null),
          (t.eventsEnabled = !1),
          t
        );
      })(this.reference, this.state)));
  }
  function ft(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function dt(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) &&
        ft(i[e]) &&
        (t = "px"),
        (n.style[e] = i[e] + t);
    });
  }
  function pt(e, t) {
    function n(e) {
      return e;
    }
    var i = e.offsets,
      o = i.popper,
      r = i.reference,
      s = Math.round,
      a = Math.floor,
      l = s(r.width),
      c = s(o.width),
      h = -1 !== ["left", "right"].indexOf(e.placement),
      u = -1 !== e.placement.indexOf("-"),
      f = t ? (h || u || l % 2 == c % 2 ? s : a) : n,
      d = t ? s : n;
    return {
      left: f(l % 2 == 1 && c % 2 == 1 && !u && t ? o.left - 1 : o.left),
      top: d(o.top),
      bottom: d(o.bottom),
      right: f(o.right),
    };
  }
  var mt = Ie && /Firefox/i.test(navigator.userAgent);
  function gt(e, t, n) {
    var i = rt(e, function (e) {
        return e.name === t;
      }),
      o =
        !!i &&
        e.some(function (e) {
          return e.name === n && e.enabled && e.order < i.order;
        });
    if (!o) {
      var r = "`" + t + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var _t = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    vt = _t.slice(3);
  function yt(e, t) {
    var n = 1 < arguments.length && void 0 !== t && t,
      i = vt.indexOf(e),
      o = vt.slice(i + 1).concat(vt.slice(0, i));
    return n ? o.reverse() : o;
  }
  var Et = "flip",
    bt = "clockwise",
    wt = "counterclockwise";
  function Tt(e, o, r, t) {
    var s = [0, 0],
      a = -1 !== ["right", "left"].indexOf(t),
      n = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      i = n.indexOf(
        rt(n, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    n[i] &&
      -1 === n[i].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== i
          ? [
              n.slice(0, i).concat([n[i].split(l)[0]]),
              [n[i].split(l)[1]].concat(n.slice(i + 1)),
            ]
          : [n];
    return (
      (c = c.map(function (e, t) {
        var n = (1 === t ? !a : a) ? "height" : "width",
          i = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (i = !0), e)
              : i
              ? ((e[e.length - 1] += t), (i = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return (function (e, t, n, i) {
              var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return e;
              if (0 !== s.indexOf("%"))
                return "vh" !== s && "vw" !== s
                  ? r
                  : (("vh" === s
                      ? Math.max(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : Math.max(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                      r;
              var a = void 0;
              switch (s) {
                case "%p":
                  a = n;
                  break;
                case "%":
                case "%r":
                default:
                  a = i;
              }
              return (Xe(a)[t] / 100) * r;
            })(e, n, o, r);
          });
      })).forEach(function (n, i) {
        n.forEach(function (e, t) {
          ft(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
        });
      }),
      s
    );
  }
  var Ct = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];
            if (i) {
              var o = e.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
                  start: Ye({}, l, r[l]),
                  end: Ye({}, l, r[l] + r[c] - s[c]),
                };
              e.offsets.popper = ze({}, s, h[i]);
            }
            return e;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (e, t) {
            var n = t.offset,
              i = e.placement,
              o = e.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = ft(+n) ? [+n, 0] : Tt(n, r, s, a)),
              "left" === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
              (e.popper = r),
              e
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, i) {
            var t = i.boundariesElement || Fe(e.instance.popper);
            e.instance.reference === t && (t = Fe(t));
            var n = lt("transform"),
              o = e.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
            (o.top = ""), (o.left = ""), (o[n] = "");
            var l = Ze(
              e.instance.popper,
              e.instance.reference,
              i.padding,
              t,
              e.positionFixed
            );
            (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
            var c = i.priority,
              h = e.offsets.popper,
              u = {
                primary: function (e) {
                  var t = h[e];
                  return (
                    h[e] < l[e] &&
                      !i.escapeWithReference &&
                      (t = Math.max(h[e], l[e])),
                    Ye({}, e, t)
                  );
                },
                secondary: function (e) {
                  var t = "right" === e ? "left" : "top",
                    n = h[t];
                  return (
                    h[e] > l[e] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        h[t],
                        l[e] - ("right" === e ? h.width : h.height)
                      )),
                    Ye({}, t, n)
                  );
                },
              };
            return (
              c.forEach(function (e) {
                var t =
                  -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                h = ze({}, h, u[t](e));
              }),
              (e.offsets.popper = h),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              n = t.popper,
              i = t.reference,
              o = e.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, t) {
            var n;
            if (!gt(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var i = t.element;
            if ("string" == typeof i) {
              if (!(i = e.instance.popper.querySelector(i))) return e;
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var o = e.placement.split("-")[0],
              r = e.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = nt(i)[c];
            a[d] - p < s[u] && (e.offsets.popper[u] -= s[u] - (a[d] - p)),
              a[u] + p > s[d] && (e.offsets.popper[u] += a[u] + p - s[d]),
              (e.offsets.popper = Xe(e.offsets.popper));
            var m = a[u] + a[c] / 2 - p / 2,
              g = ke(e.instance.popper),
              _ = parseFloat(g["margin" + h], 10),
              v = parseFloat(g["border" + h + "Width"], 10),
              y = m - e.offsets.popper[u] - _ - v;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow =
                (Ye((n = {}), u, Math.round(y)), Ye(n, f, ""), n)),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (m, g) {
            if (at(m.instance.modifiers, "inner")) return m;
            if (m.flipped && m.placement === m.originalPlacement) return m;
            var _ = Ze(
                m.instance.popper,
                m.instance.reference,
                g.padding,
                g.boundariesElement,
                m.positionFixed
              ),
              v = m.placement.split("-")[0],
              y = it(v),
              E = m.placement.split("-")[1] || "",
              b = [];
            switch (g.behavior) {
              case Et:
                b = [v, y];
                break;
              case bt:
                b = yt(v);
                break;
              case wt:
                b = yt(v, !0);
                break;
              default:
                b = g.behavior;
            }
            return (
              b.forEach(function (e, t) {
                if (v !== e || b.length === t + 1) return m;
                (v = m.placement.split("-")[0]), (y = it(v));
                var n = m.offsets.popper,
                  i = m.offsets.reference,
                  o = Math.floor,
                  r =
                    ("left" === v && o(n.right) > o(i.left)) ||
                    ("right" === v && o(n.left) < o(i.right)) ||
                    ("top" === v && o(n.bottom) > o(i.top)) ||
                    ("bottom" === v && o(n.top) < o(i.bottom)),
                  s = o(n.left) < o(_.left),
                  a = o(n.right) > o(_.right),
                  l = o(n.top) < o(_.top),
                  c = o(n.bottom) > o(_.bottom),
                  h =
                    ("left" === v && s) ||
                    ("right" === v && a) ||
                    ("top" === v && l) ||
                    ("bottom" === v && c),
                  u = -1 !== ["top", "bottom"].indexOf(v),
                  f =
                    !!g.flipVariations &&
                    ((u && "start" === E && s) ||
                      (u && "end" === E && a) ||
                      (!u && "start" === E && l) ||
                      (!u && "end" === E && c)),
                  d =
                    !!g.flipVariationsByContent &&
                    ((u && "start" === E && a) ||
                      (u && "end" === E && s) ||
                      (!u && "start" === E && c) ||
                      (!u && "end" === E && l)),
                  p = f || d;
                (r || h || p) &&
                  ((m.flipped = !0),
                  (r || h) && (v = b[t + 1]),
                  p &&
                    (E = (function (e) {
                      return "end" === e ? "start" : "start" === e ? "end" : e;
                    })(E)),
                  (m.placement = v + (E ? "-" + E : "")),
                  (m.offsets.popper = ze(
                    {},
                    m.offsets.popper,
                    ot(m.instance.popper, m.offsets.reference, m.placement)
                  )),
                  (m = st(m.instance.modifiers, m, "flip")));
              }),
              m
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (e.placement = it(t)),
              (e.offsets.popper = Xe(o)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!gt(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              n = rt(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < n.top ||
              t.left > n.right ||
              t.top > n.bottom ||
              t.right < n.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var n = t.x,
              i = t.y,
              o = e.offsets.popper,
              r = rt(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s = void 0 !== r ? r : t.gpuAcceleration,
              a = Fe(e.instance.popper),
              l = Ge(a),
              c = { position: o.position },
              h = pt(e, window.devicePixelRatio < 2 || !mt),
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              d = lt("transform"),
              p = void 0,
              m = void 0;
            if (
              ((m =
                "bottom" == u
                  ? "HTML" === a.nodeName
                    ? -a.clientHeight + h.bottom
                    : -l.height + h.bottom
                  : h.top),
              (p =
                "right" == f
                  ? "HTML" === a.nodeName
                    ? -a.clientWidth + h.right
                    : -l.width + h.right
                  : h.left),
              s && d)
            )
              (c[d] = "translate3d(" + p + "px, " + m + "px, 0)"),
                (c[u] = 0),
                (c[f] = 0),
                (c.willChange = "transform");
            else {
              var g = "bottom" == u ? -1 : 1,
                _ = "right" == f ? -1 : 1;
              (c[u] = m * g), (c[f] = p * _), (c.willChange = u + ", " + f);
            }
            var v = { "x-placement": e.placement };
            return (
              (e.attributes = ze({}, v, e.attributes)),
              (e.styles = ze({}, c, e.styles)),
              (e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              dt(e.instance.popper, e.styles),
              (function (t, n) {
                Object.keys(n).forEach(function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                });
              })(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                dt(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, n, i, o) {
            var r = tt(o, t, e, n.positionFixed),
              s = et(
                n.placement,
                r,
                t,
                e,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", s),
              dt(t, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    St =
      (Qe(Dt, [
        {
          key: "update",
          value: function () {
            return function () {
              if (!this.state.isDestroyed) {
                var e = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {},
                };
                (e.offsets.reference = tt(
                  this.state,
                  this.popper,
                  this.reference,
                  this.options.positionFixed
                )),
                  (e.placement = et(
                    this.options.placement,
                    e.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                  )),
                  (e.originalPlacement = e.placement),
                  (e.positionFixed = this.options.positionFixed),
                  (e.offsets.popper = ot(
                    this.popper,
                    e.offsets.reference,
                    e.placement
                  )),
                  (e.offsets.popper.position = this.options.positionFixed
                    ? "fixed"
                    : "absolute"),
                  (e = st(this.modifiers, e)),
                  this.state.isCreated
                    ? this.options.onUpdate(e)
                    : ((this.state.isCreated = !0), this.options.onCreate(e));
              }
            }.call(this);
          },
        },
        {
          key: "destroy",
          value: function () {
            return function () {
              return (
                (this.state.isDestroyed = !0),
                at(this.modifiers, "applyStyle") &&
                  (this.popper.removeAttribute("x-placement"),
                  (this.popper.style.position = ""),
                  (this.popper.style.top = ""),
                  (this.popper.style.left = ""),
                  (this.popper.style.right = ""),
                  (this.popper.style.bottom = ""),
                  (this.popper.style.willChange = ""),
                  (this.popper.style[lt("transform")] = "")),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                  this.popper.parentNode.removeChild(this.popper),
                this
              );
            }.call(this);
          },
        },
        {
          key: "enableEventListeners",
          value: function () {
            return function () {
              this.state.eventsEnabled ||
                (this.state = ht(
                  this.reference,
                  this.options,
                  this.state,
                  this.scheduleUpdate
                ));
            }.call(this);
          },
        },
        {
          key: "disableEventListeners",
          value: function () {
            return ut.call(this);
          },
        },
      ]),
      Dt);
  function Dt(e, t) {
    var n = this,
      i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    !(function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    })(this, Dt),
      (this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }),
      (this.update = Oe(this.update.bind(this))),
      (this.options = ze({}, Dt.Defaults, i)),
      (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
      (this.reference = e && e.jquery ? e[0] : e),
      (this.popper = t && t.jquery ? t[0] : t),
      (this.options.modifiers = {}),
      Object.keys(ze({}, Dt.Defaults.modifiers, i.modifiers)).forEach(function (
        e
      ) {
        n.options.modifiers[e] = ze(
          {},
          Dt.Defaults.modifiers[e] || {},
          i.modifiers ? i.modifiers[e] : {}
        );
      }),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map(function (e) {
          return ze({ name: e }, n.options.modifiers[e]);
        })
        .sort(function (e, t) {
          return e.order - t.order;
        })),
      this.modifiers.forEach(function (e) {
        e.enabled &&
          Ne(e.onLoad) &&
          e.onLoad(n.reference, n.popper, n.options, e, n.state);
      }),
      this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
  }
  (St.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (St.placements = _t),
    (St.Defaults = Ct);
  var It = "dropdown",
    At = "bs.dropdown",
    Ot = "." + At,
    Nt = ".data-api",
    kt = p.fn[It],
    Lt = new RegExp("38|40|27"),
    Pt = {
      HIDE: "hide" + Ot,
      HIDDEN: "hidden" + Ot,
      SHOW: "show" + Ot,
      SHOWN: "shown" + Ot,
      CLICK: "click" + Ot,
      CLICK_DATA_API: "click" + Ot + Nt,
      KEYDOWN_DATA_API: "keydown" + Ot + Nt,
      KEYUP_DATA_API: "keyup" + Ot + Nt,
    },
    xt = "disabled",
    jt = "show",
    Ht = "dropup",
    Rt = "dropright",
    Ft = "dropleft",
    Mt = "dropdown-menu-right",
    Wt = "position-static",
    Ut = '[data-toggle="dropdown"]',
    Bt = ".dropdown form",
    qt = ".dropdown-menu",
    Kt = ".navbar-nav",
    Qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Vt = "top-start",
    Yt = "top-end",
    zt = "bottom-start",
    Xt = "bottom-end",
    Gt = "right-start",
    $t = "left-start",
    Jt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    Zt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    en = (function () {
      function c(e, t) {
        (this._element = e),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = c.prototype;
      return (
        (e.toggle = function () {
          if (!this._element.disabled && !p(this._element).hasClass(xt)) {
            var e = p(this._menu).hasClass(jt);
            c._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              p(this._element).hasClass(xt) ||
              p(this._menu).hasClass(jt)
            ))
          ) {
            var t = { relatedTarget: this._element },
              n = p.Event(Pt.SHOW, t),
              i = c._getParentFromElement(this._element);
            if ((p(i).trigger(n), !n.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ("undefined" == typeof St)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var o = this._element;
                "parent" === this._config.reference
                  ? (o = i)
                  : m.isElement(this._config.reference) &&
                    ((o = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (o = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary && p(i).addClass(Wt),
                  (this._popper = new St(
                    o,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === p(i).closest(Kt).length &&
                p(document.body).children().on("mouseover", null, p.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                p(this._menu).toggleClass(jt),
                p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN, t));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !p(this._element).hasClass(xt) &&
            p(this._menu).hasClass(jt)
          ) {
            var e = { relatedTarget: this._element },
              t = p.Event(Pt.HIDE, e),
              n = c._getParentFromElement(this._element);
            p(n).trigger(t),
              t.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                p(this._menu).toggleClass(jt),
                p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN, e)));
          }
        }),
        (e.dispose = function () {
          p.removeData(this._element, At),
            p(this._element).off(Ot),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          p(this._element).on(Pt.CLICK, function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (e) {
          return (
            (e = l(
              {},
              this.constructor.Default,
              {},
              p(this._element).data(),
              {},
              e
            )),
            m.typeCheckConfig(It, e, this.constructor.DefaultType),
            e
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = c._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(qt));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var e = p(this._element.parentNode),
            t = zt;
          return (
            e.hasClass(Ht)
              ? ((t = Vt), p(this._menu).hasClass(Mt) && (t = Yt))
              : e.hasClass(Rt)
              ? (t = Gt)
              : e.hasClass(Ft)
              ? (t = $t)
              : p(this._menu).hasClass(Mt) && (t = Xt),
            t
          );
        }),
        (e._detectNavbar = function () {
          return 0 < p(this._element).closest(".navbar").length;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = l(
                      {},
                      e.offsets,
                      {},
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var e = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (e.modifiers.applyStyle = { enabled: !1 }),
            l({}, e, {}, this._config.popperConfig)
          );
        }),
        (c._jQueryInterface = function (t) {
          return this.each(function () {
            var e = p(this).data(At);
            if (
              (e ||
                ((e = new c(this, "object" == typeof t ? t : null)),
                p(this).data(At, e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        (c._clearMenus = function (e) {
          if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
            for (
              var t = [].slice.call(document.querySelectorAll(Ut)),
                n = 0,
                i = t.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(t[n]),
                r = p(t[n]).data(At),
                s = { relatedTarget: t[n] };
              if ((e && "click" === e.type && (s.clickEvent = e), r)) {
                var a = r._menu;
                if (
                  p(o).hasClass(jt) &&
                  !(
                    e &&
                    (("click" === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ("keyup" === e.type && 9 === e.which)) &&
                    p.contains(o, e.target)
                  )
                ) {
                  var l = p.Event(Pt.HIDE, s);
                  p(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        p(document.body)
                          .children()
                          .off("mouseover", null, p.noop),
                      t[n].setAttribute("aria-expanded", "false"),
                      r._popper && r._popper.destroy(),
                      p(a).removeClass(jt),
                      p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN, s)));
                }
              }
            }
        }),
        (c._getParentFromElement = function (e) {
          var t,
            n = m.getSelectorFromElement(e);
          return n && (t = document.querySelector(n)), t || e.parentNode;
        }),
        (c._dataApiKeydownHandler = function (e) {
          if (
            (/input|textarea/i.test(e.target.tagName)
              ? !(
                  32 === e.which ||
                  (27 !== e.which &&
                    ((40 !== e.which && 38 !== e.which) ||
                      p(e.target).closest(qt).length))
                )
              : Lt.test(e.which)) &&
            (e.preventDefault(),
            e.stopPropagation(),
            !this.disabled && !p(this).hasClass(xt))
          ) {
            var t = c._getParentFromElement(this),
              n = p(t).hasClass(jt);
            if (n || 27 !== e.which)
              if (n && (!n || (27 !== e.which && 32 !== e.which))) {
                var i = [].slice
                  .call(t.querySelectorAll(Qt))
                  .filter(function (e) {
                    return p(e).is(":visible");
                  });
                if (0 !== i.length) {
                  var o = i.indexOf(e.target);
                  38 === e.which && 0 < o && o--,
                    40 === e.which && o < i.length - 1 && o++,
                    o < 0 && (o = 0),
                    i[o].focus();
                }
              } else {
                if (27 === e.which) {
                  var r = t.querySelector(Ut);
                  p(r).trigger("focus");
                }
                p(this).trigger("click");
              }
          }
        }),
        s(c, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Jt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Zt;
            },
          },
        ]),
        c
      );
    })();
  p(document)
    .on(Pt.KEYDOWN_DATA_API, Ut, en._dataApiKeydownHandler)
    .on(Pt.KEYDOWN_DATA_API, qt, en._dataApiKeydownHandler)
    .on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, en._clearMenus)
    .on(Pt.CLICK_DATA_API, Ut, function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        en._jQueryInterface.call(p(this), "toggle");
    })
    .on(Pt.CLICK_DATA_API, Bt, function (e) {
      e.stopPropagation();
    }),
    (p.fn[It] = en._jQueryInterface),
    (p.fn[It].Constructor = en),
    (p.fn[It].noConflict = function () {
      return (p.fn[It] = kt), en._jQueryInterface;
    });
  var tn = "modal",
    nn = "bs.modal",
    on = "." + nn,
    rn = p.fn[tn],
    sn = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    an = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    ln = {
      HIDE: "hide" + on,
      HIDE_PREVENTED: "hidePrevented" + on,
      HIDDEN: "hidden" + on,
      SHOW: "show" + on,
      SHOWN: "shown" + on,
      FOCUSIN: "focusin" + on,
      RESIZE: "resize" + on,
      CLICK_DISMISS: "click.dismiss" + on,
      KEYDOWN_DISMISS: "keydown.dismiss" + on,
      MOUSEUP_DISMISS: "mouseup.dismiss" + on,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + on,
      CLICK_DATA_API: "click" + on + ".data-api",
    },
    cn = "modal-dialog-scrollable",
    hn = "modal-scrollbar-measure",
    un = "modal-backdrop",
    fn = "modal-open",
    dn = "fade",
    pn = "show",
    mn = "modal-static",
    gn = ".modal-dialog",
    _n = ".modal-body",
    vn = '[data-toggle="modal"]',
    yn = '[data-dismiss="modal"]',
    En = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    bn = ".sticky-top",
    wn = (function () {
      function o(e, t) {
        (this._config = this._getConfig(t)),
          (this._element = e),
          (this._dialog = e.querySelector(gn)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = o.prototype;
      return (
        (e.toggle = function (e) {
          return this._isShown ? this.hide() : this.show(e);
        }),
        (e.show = function (e) {
          var t = this;
          if (!this._isShown && !this._isTransitioning) {
            p(this._element).hasClass(dn) && (this._isTransitioning = !0);
            var n = p.Event(ln.SHOW, { relatedTarget: e });
            p(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(this._element).on(ln.CLICK_DISMISS, yn, function (e) {
                  return t.hide(e);
                }),
                p(this._dialog).on(ln.MOUSEDOWN_DISMISS, function () {
                  p(t._element).one(ln.MOUSEUP_DISMISS, function (e) {
                    p(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return t._showElement(e);
                }));
          }
        }),
        (e.hide = function (e) {
          var t = this;
          if (
            (e && e.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = p.Event(ln.HIDE);
            if (
              (p(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = p(this._element).hasClass(dn);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(document).off(ln.FOCUSIN),
                p(this._element).removeClass(pn),
                p(this._element).off(ln.CLICK_DISMISS),
                p(this._dialog).off(ln.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = m.getTransitionDurationFromElement(this._element);
                p(this._element)
                  .one(m.TRANSITION_END, function (e) {
                    return t._hideModal(e);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (e) {
            return p(e).off(on);
          }),
            p(document).off(ln.FOCUSIN),
            p.removeData(this._element, nn),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (e) {
          return (e = l({}, sn, {}, e)), m.typeCheckConfig(tn, e, an), e;
        }),
        (e._triggerBackdropTransition = function () {
          var e = this;
          if ("static" === this._config.backdrop) {
            var t = p.Event(ln.HIDE_PREVENTED);
            if ((p(this._element).trigger(t), t.defaultPrevented)) return;
            this._element.classList.add(mn);
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element)
              .one(m.TRANSITION_END, function () {
                e._element.classList.remove(mn);
              })
              .emulateTransitionEnd(n),
              this._element.focus();
          } else this.hide();
        }),
        (e._showElement = function (e) {
          var t = this,
            n = p(this._element).hasClass(dn),
            i = this._dialog ? this._dialog.querySelector(_n) : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            p(this._dialog).hasClass(cn) && i
              ? (i.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && m.reflow(this._element),
            p(this._element).addClass(pn),
            this._config.focus && this._enforceFocus();
          function o() {
            t._config.focus && t._element.focus(),
              (t._isTransitioning = !1),
              p(t._element).trigger(r);
          }
          var r = p.Event(ln.SHOWN, { relatedTarget: e });
          if (n) {
            var s = m.getTransitionDurationFromElement(this._dialog);
            p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();
        }),
        (e._enforceFocus = function () {
          var t = this;
          p(document)
            .off(ln.FOCUSIN)
            .on(ln.FOCUSIN, function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === p(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown && this._config.keyboard
            ? p(this._element).on(ln.KEYDOWN_DISMISS, function (e) {
                27 === e.which && t._triggerBackdropTransition();
              })
            : this._isShown || p(this._element).off(ln.KEYDOWN_DISMISS);
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? p(window).on(ln.RESIZE, function (e) {
                return t.handleUpdate(e);
              })
            : p(window).off(ln.RESIZE);
        }),
        (e._hideModal = function () {
          var e = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              p(document.body).removeClass(fn),
                e._resetAdjustments(),
                e._resetScrollbar(),
                p(e._element).trigger(ln.HIDDEN);
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (p(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (e) {
          var t = this,
            n = p(this._element).hasClass(dn) ? dn : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = un),
              n && this._backdrop.classList.add(n),
              p(this._backdrop).appendTo(document.body),
              p(this._element).on(ln.CLICK_DISMISS, function (e) {
                t._ignoreBackdropClick
                  ? (t._ignoreBackdropClick = !1)
                  : e.target === e.currentTarget &&
                    t._triggerBackdropTransition();
              }),
              n && m.reflow(this._backdrop),
              p(this._backdrop).addClass(pn),
              !e)
            )
              return;
            if (!n) return void e();
            var i = m.getTransitionDurationFromElement(this._backdrop);
            p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            p(this._backdrop).removeClass(pn);
            var o = function () {
              t._removeBackdrop(), e && e();
            };
            if (p(this._element).hasClass(dn)) {
              var r = m.getTransitionDurationFromElement(this._backdrop);
              p(this._backdrop)
                .one(m.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
          } else e && e();
        }),
        (e._adjustDialog = function () {
          var e =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            e &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !e &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var e = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var o = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(document.querySelectorAll(En)),
              t = [].slice.call(document.querySelectorAll(bn));
            p(e).each(function (e, t) {
              var n = t.style.paddingRight,
                i = p(t).css("padding-right");
              p(t)
                .data("padding-right", n)
                .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
            }),
              p(t).each(function (e, t) {
                var n = t.style.marginRight,
                  i = p(t).css("margin-right");
                p(t)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - o._scrollbarWidth + "px"
                  );
              });
            var n = document.body.style.paddingRight,
              i = p(document.body).css("padding-right");
            p(document.body)
              .data("padding-right", n)
              .css(
                "padding-right",
                parseFloat(i) + this._scrollbarWidth + "px"
              );
          }
          p(document.body).addClass(fn);
        }),
        (e._resetScrollbar = function () {
          var e = [].slice.call(document.querySelectorAll(En));
          p(e).each(function (e, t) {
            var n = p(t).data("padding-right");
            p(t).removeData("padding-right"), (t.style.paddingRight = n || "");
          });
          var t = [].slice.call(document.querySelectorAll("" + bn));
          p(t).each(function (e, t) {
            var n = p(t).data("margin-right");
            "undefined" != typeof n &&
              p(t).css("margin-right", n).removeData("margin-right");
          });
          var n = p(document.body).data("padding-right");
          p(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var e = document.createElement("div");
          (e.className = hn), document.body.appendChild(e);
          var t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t;
        }),
        (o._jQueryInterface = function (n, i) {
          return this.each(function () {
            var e = p(this).data(nn),
              t = l(
                {},
                sn,
                {},
                p(this).data(),
                {},
                "object" == typeof n && n ? n : {}
              );
            if (
              (e || ((e = new o(this, t)), p(this).data(nn, e)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n](i);
            } else t.show && e.show(i);
          });
        }),
        s(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return sn;
            },
          },
        ]),
        o
      );
    })();
  p(document).on(ln.CLICK_DATA_API, vn, function (e) {
    var t,
      n = this,
      i = m.getSelectorFromElement(this);
    i && (t = document.querySelector(i));
    var o = p(t).data(nn) ? "toggle" : l({}, p(t).data(), {}, p(this).data());
    ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
    var r = p(t).one(ln.SHOW, function (e) {
      e.isDefaultPrevented() ||
        r.one(ln.HIDDEN, function () {
          p(n).is(":visible") && n.focus();
        });
    });
    wn._jQueryInterface.call(p(t), o, this);
  }),
    (p.fn[tn] = wn._jQueryInterface),
    (p.fn[tn].Constructor = wn),
    (p.fn[tn].noConflict = function () {
      return (p.fn[tn] = rn), wn._jQueryInterface;
    });
  var Tn = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Cn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Dn =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function In(e, r, t) {
    if (0 === e.length) return e;
    if (t && "function" == typeof t) return t(e);
    for (
      var n = new window.DOMParser().parseFromString(e, "text/html"),
        s = Object.keys(r),
        a = [].slice.call(n.body.querySelectorAll("*")),
        i = function (e) {
          var t = a[e],
            n = t.nodeName.toLowerCase();
          if (-1 === s.indexOf(t.nodeName.toLowerCase()))
            return t.parentNode.removeChild(t), "continue";
          var i = [].slice.call(t.attributes),
            o = [].concat(r["*"] || [], r[n] || []);
          i.forEach(function (e) {
            !(function (e, t) {
              var n = e.nodeName.toLowerCase();
              if (-1 !== t.indexOf(n))
                return (
                  -1 === Tn.indexOf(n) ||
                  Boolean(e.nodeValue.match(Sn) || e.nodeValue.match(Dn))
                );
              for (
                var i = t.filter(function (e) {
                    return e instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(e, o) && t.removeAttribute(e.nodeName);
          });
        },
        o = 0,
        l = a.length;
      o < l;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var An = "tooltip",
    On = "bs.tooltip",
    Nn = "." + On,
    kn = p.fn[An],
    Ln = "bs-tooltip",
    Pn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"),
    xn = ["sanitize", "whiteList", "sanitizeFn"],
    jn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    Hn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Rn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Cn,
      popperConfig: null,
    },
    Fn = "show",
    Mn = "out",
    Wn = {
      HIDE: "hide" + Nn,
      HIDDEN: "hidden" + Nn,
      SHOW: "show" + Nn,
      SHOWN: "shown" + Nn,
      INSERTED: "inserted" + Nn,
      CLICK: "click" + Nn,
      FOCUSIN: "focusin" + Nn,
      FOCUSOUT: "focusout" + Nn,
      MOUSEENTER: "mouseenter" + Nn,
      MOUSELEAVE: "mouseleave" + Nn,
    },
    Un = "fade",
    Bn = "show",
    qn = ".tooltip-inner",
    Kn = ".arrow",
    Qn = "hover",
    Vn = "focus",
    Yn = "click",
    zn = "manual",
    Xn = (function () {
      function i(e, t) {
        if ("undefined" == typeof St)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = e),
          (this.config = this._getConfig(t)),
          (this.tip = null),
          this._setListeners();
      }
      var e = i.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (e) {
          if (this._isEnabled)
            if (e) {
              var t = this.constructor.DATA_KEY,
                n = p(e.currentTarget).data(t);
              n ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                p(e.currentTarget).data(t, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (p(this.getTipElement()).hasClass(Bn))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            p.removeData(this.element, this.constructor.DATA_KEY),
            p(this.element).off(this.constructor.EVENT_KEY),
            p(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && p(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ("none" === p(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var e = p.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            p(this.element).trigger(e);
            var n = m.findShadowRoot(this.element),
              i = p.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = m.getUID(this.constructor.NAME);
            o.setAttribute("id", r),
              this.element.setAttribute("aria-describedby", r),
              this.setContent(),
              this.config.animation && p(o).addClass(Un);
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            p(o).data(this.constructor.DATA_KEY, this),
              p.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || p(o).appendTo(l),
              p(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new St(
                this.element,
                o,
                this._getPopperConfig(a)
              )),
              p(o).addClass(Bn),
              "ontouchstart" in document.documentElement &&
                p(document.body).children().on("mouseover", null, p.noop);
            var c = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                p(t.element).trigger(t.constructor.Event.SHOWN),
                e === Mn && t._leave(null, t);
            };
            if (p(this.tip).hasClass(Un)) {
              var h = m.getTransitionDurationFromElement(this.tip);
              p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h);
            } else c();
          }
        }),
        (e.hide = function (e) {
          function t() {
            n._hoverState !== Fn && i.parentNode && i.parentNode.removeChild(i),
              n._cleanTipClass(),
              n.element.removeAttribute("aria-describedby"),
              p(n.element).trigger(n.constructor.Event.HIDDEN),
              null !== n._popper && n._popper.destroy(),
              e && e();
          }
          var n = this,
            i = this.getTipElement(),
            o = p.Event(this.constructor.Event.HIDE);
          if ((p(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (p(i).removeClass(Bn),
              "ontouchstart" in document.documentElement &&
                p(document.body).children().off("mouseover", null, p.noop),
              (this._activeTrigger[Yn] = !1),
              (this._activeTrigger[Vn] = !1),
              (this._activeTrigger[Qn] = !1),
              p(this.tip).hasClass(Un))
            ) {
              var r = m.getTransitionDurationFromElement(i);
              p(i).one(m.TRANSITION_END, t).emulateTransitionEnd(r);
            } else t();
            this._hoverState = "";
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (e) {
          p(this.getTipElement()).addClass(Ln + "-" + e);
        }),
        (e.getTipElement = function () {
          return (this.tip = this.tip || p(this.config.template)[0]), this.tip;
        }),
        (e.setContent = function () {
          var e = this.getTipElement();
          this.setElementContent(p(e.querySelectorAll(qn)), this.getTitle()),
            p(e).removeClass(Un + " " + Bn);
        }),
        (e.setElementContent = function (e, t) {
          "object" != typeof t || (!t.nodeType && !t.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (t = In(t, this.config.whiteList, this.config.sanitizeFn)),
                e.html(t))
              : e.text(t)
            : this.config.html
            ? p(t).parent().is(e) || e.empty().append(t)
            : e.text(p(t).text());
        }),
        (e.getTitle = function () {
          var e = this.element.getAttribute("data-original-title");
          return (e =
            e ||
            ("function" == typeof this.config.title
              ? this.config.title.call(this.element)
              : this.config.title));
        }),
        (e._getPopperConfig = function (e) {
          var t = this;
          return l(
            {},
            {
              placement: e,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: Kn },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (e) {
                e.originalPlacement !== e.placement &&
                  t._handlePopperPlacementChange(e);
              },
              onUpdate: function (e) {
                return t._handlePopperPlacementChange(e);
              },
            },
            {},
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = l(
                      {},
                      e.offsets,
                      {},
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : m.isElement(this.config.container)
            ? p(this.config.container)
            : p(document).find(this.config.container);
        }),
        (e._getAttachment = function (e) {
          return Hn[e.toUpperCase()];
        }),
        (e._setListeners = function () {
          var i = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              p(i.element).on(
                i.constructor.Event.CLICK,
                i.config.selector,
                function (e) {
                  return i.toggle(e);
                }
              );
            else if (e !== zn) {
              var t =
                  e === Qn
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN,
                n =
                  e === Qn
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT;
              p(i.element)
                .on(t, i.config.selector, function (e) {
                  return i._enter(e);
                })
                .on(n, i.config.selector, function (e) {
                  return i._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              i.element && i.hide();
            }),
            p(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var e = typeof this.element.getAttribute("data-original-title");
          (!this.element.getAttribute("title") && "string" == e) ||
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (e, t) {
          var n = this.constructor.DATA_KEY;
          (t = t || p(e.currentTarget).data(n)) ||
            ((t = new this.constructor(
              e.currentTarget,
              this._getDelegateConfig()
            )),
            p(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusin" === e.type ? Vn : Qn] = !0),
            p(t.getTipElement()).hasClass(Bn) || t._hoverState === Fn
              ? (t._hoverState = Fn)
              : (clearTimeout(t._timeout),
                (t._hoverState = Fn),
                t.config.delay && t.config.delay.show
                  ? (t._timeout = setTimeout(function () {
                      t._hoverState === Fn && t.show();
                    }, t.config.delay.show))
                  : t.show());
        }),
        (e._leave = function (e, t) {
          var n = this.constructor.DATA_KEY;
          (t = t || p(e.currentTarget).data(n)) ||
            ((t = new this.constructor(
              e.currentTarget,
              this._getDelegateConfig()
            )),
            p(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusout" === e.type ? Vn : Qn] = !1),
            t._isWithActiveTrigger() ||
              (clearTimeout(t._timeout),
              (t._hoverState = Mn),
              t.config.delay && t.config.delay.hide
                ? (t._timeout = setTimeout(function () {
                    t._hoverState === Mn && t.hide();
                  }, t.config.delay.hide))
                : t.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;
          return !1;
        }),
        (e._getConfig = function (e) {
          var t = p(this.element).data();
          return (
            Object.keys(t).forEach(function (e) {
              -1 !== xn.indexOf(e) && delete t[e];
            }),
            "number" ==
              typeof (e = l(
                {},
                this.constructor.Default,
                {},
                t,
                {},
                "object" == typeof e && e ? e : {}
              )).delay && (e.delay = { show: e.delay, hide: e.delay }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            m.typeCheckConfig(An, e, this.constructor.DefaultType),
            e.sanitize &&
              (e.template = In(e.template, e.whiteList, e.sanitizeFn)),
            e
          );
        }),
        (e._getDelegateConfig = function () {
          var e = {};
          if (this.config)
            for (var t in this.config)
              this.constructor.Default[t] !== this.config[t] &&
                (e[t] = this.config[t]);
          return e;
        }),
        (e._cleanTipClass = function () {
          var e = p(this.getTipElement()),
            t = e.attr("class").match(Pn);
          null !== t && t.length && e.removeClass(t.join(""));
        }),
        (e._handlePopperPlacementChange = function (e) {
          var t = e.instance;
          (this.tip = t.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement));
        }),
        (e._fixTransition = function () {
          var e = this.getTipElement(),
            t = this.config.animation;
          null === e.getAttribute("x-placement") &&
            (p(e).removeClass(Un),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = t));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this).data(On),
              t = "object" == typeof n && n;
            if (
              (e || !/dispose|hide/.test(n)) &&
              (e || ((e = new i(this, t)), p(this).data(On, e)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Rn;
            },
          },
          {
            key: "NAME",
            get: function () {
              return An;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return On;
            },
          },
          {
            key: "Event",
            get: function () {
              return Wn;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Nn;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return jn;
            },
          },
        ]),
        i
      );
    })();
  (p.fn[An] = Xn._jQueryInterface),
    (p.fn[An].Constructor = Xn),
    (p.fn[An].noConflict = function () {
      return (p.fn[An] = kn), Xn._jQueryInterface;
    });
  var Gn = "popover",
    $n = "bs.popover",
    Jn = "." + $n,
    Zn = p.fn[Gn],
    ei = "bs-popover",
    ti = new RegExp("(^|\\s)" + ei + "\\S+", "g"),
    ni = l({}, Xn.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    ii = l({}, Xn.DefaultType, { content: "(string|element|function)" }),
    oi = "fade",
    ri = "show",
    si = ".popover-header",
    ai = ".popover-body",
    li = {
      HIDE: "hide" + Jn,
      HIDDEN: "hidden" + Jn,
      SHOW: "show" + Jn,
      SHOWN: "shown" + Jn,
      INSERTED: "inserted" + Jn,
      CLICK: "click" + Jn,
      FOCUSIN: "focusin" + Jn,
      FOCUSOUT: "focusout" + Jn,
      MOUSEENTER: "mouseenter" + Jn,
      MOUSELEAVE: "mouseleave" + Jn,
    },
    ci = (function (e) {
      function i() {
        return e.apply(this, arguments) || this;
      }
      !(function (e, t) {
        (e.prototype = Object.create(t.prototype)),
          ((e.prototype.constructor = e).__proto__ = t);
      })(i, e);
      var t = i.prototype;
      return (
        (t.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (t.addAttachmentClass = function (e) {
          p(this.getTipElement()).addClass(ei + "-" + e);
        }),
        (t.getTipElement = function () {
          return (this.tip = this.tip || p(this.config.template)[0]), this.tip;
        }),
        (t.setContent = function () {
          var e = p(this.getTipElement());
          this.setElementContent(e.find(si), this.getTitle());
          var t = this._getContent();
          "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(ai), t),
            e.removeClass(oi + " " + ri);
        }),
        (t._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (t._cleanTipClass = function () {
          var e = p(this.getTipElement()),
            t = e.attr("class").match(ti);
          null !== t && 0 < t.length && e.removeClass(t.join(""));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this).data($n),
              t = "object" == typeof n ? n : null;
            if (
              (e || !/dispose|hide/.test(n)) &&
              (e || ((e = new i(this, t)), p(this).data($n, e)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return ni;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Gn;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return $n;
            },
          },
          {
            key: "Event",
            get: function () {
              return li;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Jn;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ii;
            },
          },
        ]),
        i
      );
    })(Xn);
  (p.fn[Gn] = ci._jQueryInterface),
    (p.fn[Gn].Constructor = ci),
    (p.fn[Gn].noConflict = function () {
      return (p.fn[Gn] = Zn), ci._jQueryInterface;
    });
  var hi = "scrollspy",
    ui = "bs.scrollspy",
    fi = "." + ui,
    di = p.fn[hi],
    pi = { offset: 10, method: "auto", target: "" },
    mi = { offset: "number", method: "string", target: "(string|element)" },
    gi = {
      ACTIVATE: "activate" + fi,
      SCROLL: "scroll" + fi,
      LOAD_DATA_API: "load" + fi + ".data-api",
    },
    _i = "dropdown-item",
    vi = "active",
    yi = '[data-spy="scroll"]',
    Ei = ".nav, .list-group",
    bi = ".nav-link",
    wi = ".nav-item",
    Ti = ".list-group-item",
    Ci = ".dropdown",
    Si = ".dropdown-item",
    Di = ".dropdown-toggle",
    Ii = "offset",
    Ai = "position",
    Oi = (function () {
      function n(e, t) {
        var n = this;
        (this._element = e),
          (this._scrollElement = "BODY" === e.tagName ? window : e),
          (this._config = this._getConfig(t)),
          (this._selector =
            this._config.target +
            " " +
            bi +
            "," +
            this._config.target +
            " " +
            Ti +
            "," +
            this._config.target +
            " " +
            Si),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          p(this._scrollElement).on(gi.SCROLL, function (e) {
            return n._process(e);
          }),
          this.refresh(),
          this._process();
      }
      var e = n.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e = this._scrollElement === this._scrollElement.window ? Ii : Ai,
            o = "auto" === this._config.method ? e : this._config.method,
            r = o === Ai ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (e) {
                var t,
                  n = m.getSelectorFromElement(e);
                if ((n && (t = document.querySelector(n)), t)) {
                  var i = t.getBoundingClientRect();
                  if (i.width || i.height) return [p(t)[o]().top + r, n];
                }
                return null;
              })
              .filter(function (e) {
                return e;
              })
              .sort(function (e, t) {
                return e[0] - t[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          p.removeData(this._element, ui),
            p(this._scrollElement).off(fi),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (e) {
          if (
            "string" !=
            typeof (e = l({}, pi, {}, "object" == typeof e && e ? e : {}))
              .target
          ) {
            var t = p(e.target).attr("id");
            t || ((t = m.getUID(hi)), p(e.target).attr("id", t)),
              (e.target = "#" + t);
          }
          return m.typeCheckConfig(hi, e, mi), e;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();
          if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              e < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                e >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  e < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = p([].slice.call(document.querySelectorAll(e.join(","))));
          n.hasClass(_i)
            ? (n.closest(Ci).find(Di).addClass(vi), n.addClass(vi))
            : (n.addClass(vi),
              n
                .parents(Ei)
                .prev(bi + ", " + Ti)
                .addClass(vi),
              n.parents(Ei).prev(wi).children(bi).addClass(vi)),
            p(this._scrollElement).trigger(gi.ACTIVATE, { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (e) {
              return e.classList.contains(vi);
            })
            .forEach(function (e) {
              return e.classList.remove(vi);
            });
        }),
        (n._jQueryInterface = function (t) {
          return this.each(function () {
            var e = p(this).data(ui);
            if (
              (e ||
                ((e = new n(this, "object" == typeof t && t)),
                p(this).data(ui, e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return pi;
            },
          },
        ]),
        n
      );
    })();
  p(window).on(gi.LOAD_DATA_API, function () {
    for (
      var e = [].slice.call(document.querySelectorAll(yi)), t = e.length;
      t--;

    ) {
      var n = p(e[t]);
      Oi._jQueryInterface.call(n, n.data());
    }
  }),
    (p.fn[hi] = Oi._jQueryInterface),
    (p.fn[hi].Constructor = Oi),
    (p.fn[hi].noConflict = function () {
      return (p.fn[hi] = di), Oi._jQueryInterface;
    });
  var Ni = "bs.tab",
    ki = "." + Ni,
    Li = p.fn.tab,
    Pi = {
      HIDE: "hide" + ki,
      HIDDEN: "hidden" + ki,
      SHOW: "show" + ki,
      SHOWN: "shown" + ki,
      CLICK_DATA_API: "click" + ki + ".data-api",
    },
    xi = "dropdown-menu",
    ji = "active",
    Hi = "disabled",
    Ri = "fade",
    Fi = "show",
    Mi = ".dropdown",
    Wi = ".nav, .list-group",
    Ui = ".active",
    Bi = "> li > .active",
    qi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Ki = ".dropdown-toggle",
    Qi = "> .dropdown-menu .active",
    Vi = (function () {
      function i(e) {
        this._element = e;
      }
      var e = i.prototype;
      return (
        (e.show = function () {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                p(this._element).hasClass(ji)) ||
              p(this._element).hasClass(Hi)
            )
          ) {
            var e,
              i,
              t = p(this._element).closest(Wi)[0],
              o = m.getSelectorFromElement(this._element);
            if (t) {
              var r = "UL" === t.nodeName || "OL" === t.nodeName ? Bi : Ui;
              i = (i = p.makeArray(p(t).find(r)))[i.length - 1];
            }
            var s = p.Event(Pi.HIDE, { relatedTarget: this._element }),
              a = p.Event(Pi.SHOW, { relatedTarget: i });
            if (
              (i && p(i).trigger(s),
              p(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (e = document.querySelector(o)),
                this._activate(this._element, t);
              var l = function () {
                var e = p.Event(Pi.HIDDEN, { relatedTarget: n._element }),
                  t = p.Event(Pi.SHOWN, { relatedTarget: i });
                p(i).trigger(e), p(n._element).trigger(t);
              };
              e ? this._activate(e, e.parentNode, l) : l();
            }
          }
        }),
        (e.dispose = function () {
          p.removeData(this._element, Ni), (this._element = null);
        }),
        (e._activate = function (e, t, n) {
          function i() {
            return o._transitionComplete(e, r, n);
          }
          var o = this,
            r = (
              !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                ? p(t).children(Ui)
                : p(t).find(Bi)
            )[0],
            s = n && r && p(r).hasClass(Ri);
          if (r && s) {
            var a = m.getTransitionDurationFromElement(r);
            p(r)
              .removeClass(Fi)
              .one(m.TRANSITION_END, i)
              .emulateTransitionEnd(a);
          } else i();
        }),
        (e._transitionComplete = function (e, t, n) {
          if (t) {
            p(t).removeClass(ji);
            var i = p(t.parentNode).find(Qi)[0];
            i && p(i).removeClass(ji),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !1);
          }
          if (
            (p(e).addClass(ji),
            "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !0),
            m.reflow(e),
            e.classList.contains(Ri) && e.classList.add(Fi),
            e.parentNode && p(e.parentNode).hasClass(xi))
          ) {
            var o = p(e).closest(Mi)[0];
            if (o) {
              var r = [].slice.call(o.querySelectorAll(Ki));
              p(r).addClass(ji);
            }
            e.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this),
              t = e.data(Ni);
            if (
              (t || ((t = new i(this)), e.data(Ni, t)), "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        i
      );
    })();
  p(document).on(Pi.CLICK_DATA_API, qi, function (e) {
    e.preventDefault(), Vi._jQueryInterface.call(p(this), "show");
  }),
    (p.fn.tab = Vi._jQueryInterface),
    (p.fn.tab.Constructor = Vi),
    (p.fn.tab.noConflict = function () {
      return (p.fn.tab = Li), Vi._jQueryInterface;
    });
  var Yi = "toast",
    zi = "bs.toast",
    Xi = "." + zi,
    Gi = p.fn[Yi],
    $i = {
      CLICK_DISMISS: "click.dismiss" + Xi,
      HIDE: "hide" + Xi,
      HIDDEN: "hidden" + Xi,
      SHOW: "show" + Xi,
      SHOWN: "shown" + Xi,
    },
    Ji = "fade",
    Zi = "hide",
    eo = "show",
    to = "showing",
    no = { animation: "boolean", autohide: "boolean", delay: "number" },
    io = { animation: !0, autohide: !0, delay: 500 },
    oo = '[data-dismiss="toast"]',
    ro = (function () {
      function i(e, t) {
        (this._element = e),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = i.prototype;
      return (
        (e.show = function () {
          var e = this,
            t = p.Event($i.SHOW);
          if ((p(this._element).trigger(t), !t.isDefaultPrevented())) {
            this._config.animation && this._element.classList.add(Ji);
            var n = function () {
              e._element.classList.remove(to),
                e._element.classList.add(eo),
                p(e._element).trigger($i.SHOWN),
                e._config.autohide &&
                  (e._timeout = setTimeout(function () {
                    e.hide();
                  }, e._config.delay));
            };
            if (
              (this._element.classList.remove(Zi),
              m.reflow(this._element),
              this._element.classList.add(to),
              this._config.animation)
            ) {
              var i = m.getTransitionDurationFromElement(this._element);
              p(this._element).one(m.TRANSITION_END, n).emulateTransitionEnd(i);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains(eo)) {
            var e = p.Event($i.HIDE);
            p(this._element).trigger(e),
              e.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(eo) &&
              this._element.classList.remove(eo),
            p(this._element).off($i.CLICK_DISMISS),
            p.removeData(this._element, zi),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (e) {
          return (
            (e = l(
              {},
              io,
              {},
              p(this._element).data(),
              {},
              "object" == typeof e && e ? e : {}
            )),
            m.typeCheckConfig(Yi, e, this.constructor.DefaultType),
            e
          );
        }),
        (e._setListeners = function () {
          var e = this;
          p(this._element).on($i.CLICK_DISMISS, oo, function () {
            return e.hide();
          });
        }),
        (e._close = function () {
          function e() {
            t._element.classList.add(Zi), p(t._element).trigger($i.HIDDEN);
          }
          var t = this;
          if ((this._element.classList.remove(eo), this._config.animation)) {
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
          } else e();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this),
              t = e.data(zi);
            if (
              (t ||
                ((t = new i(this, "object" == typeof n && n)), e.data(zi, t)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](this);
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return no;
            },
          },
          {
            key: "Default",
            get: function () {
              return io;
            },
          },
        ]),
        i
      );
    })();
  (p.fn[Yi] = ro._jQueryInterface),
    (p.fn[Yi].Constructor = ro),
    (p.fn[Yi].noConflict = function () {
      return (p.fn[Yi] = Gi), ro._jQueryInterface;
    }),
    (e.Alert = _),
    (e.Button = x),
    (e.Carousel = he),
    (e.Collapse = De),
    (e.Dropdown = en),
    (e.Modal = wn),
    (e.Popover = ci),
    (e.Scrollspy = Oi),
    (e.Tab = Vi),
    (e.Toast = ro),
    (e.Tooltip = Xn),
    (e.Util = m),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

//1111111111111111
//
// Popover
//

("use strict");

var Popover = (function () {
  // Variables

  var $popover = $('[data-toggle="popover"]');

  // Methods

  function init($this) {
    var popoverClass = "";

    if ($this.data("color")) {
      popoverClass = " popover-" + $this.data("color");
    }

    var options = {
      trigger: "focus",
      template:
        '<div class="popover' +
        popoverClass +
        '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    };

    $this.popover(options);
  }

  // Events

  if ($popover.length) {
    $popover.each(function () {
      init($(this));
    });
  }
})();

//
// Tooltip
//

("use strict");

var Tooltip = (function () {
  // Variables

  var $tooltip = $('[data-toggle="tooltip"]');

  // Methods

  function init() {
    $tooltip.tooltip();
  }

  // Events

  if ($tooltip.length) {
    init();
  }
})();

var CopyType = (function () {
  // Variables

  var $element = ".btn-type-clipboard",
    $btn = $($element);

  // Methods

  function init($this) {
    $this.tooltip().on("mouseleave", function () {
      // Explicitly hide tooltip, since after clicking it remains
      // focused (as it's a button), so tooltip would otherwise
      // remain visible until focus is moved away
      $this.tooltip("hide");
    });

    var clipboard = new ClipboardJS($element);

    clipboard.on("success", function (e) {
      $(e.trigger)
        .attr("title", "Copied!")
        .tooltip("_fixTitle")
        .tooltip("show")
        .attr("title", "Copy to clipboard")
        .tooltip("_fixTitle");

      e.clearSelection();
    });
  }

  // Events
  if ($btn.length) {
    init($btn);
  }
})();

//
// Forms
//

("use strict");

//
// Form control
//

var FormControl = (function () {
  // Variables

  var $input = $(".form-control"),
    $indeterminateCheckbox = $('[data-toggle="indeterminate"]');

  // Methods

  function init($this) {
    $this
      .on("focus blur", function (e) {
        $(this)
          .parents(".form-group")
          .toggleClass("focused", e.type === "focus");
      })
      .trigger("blur");
  }

  // Events

  if ($input.length) {
    init($input);
  }

  // Add indeterminate state to a checkbox
  if ($indeterminateCheckbox.length) {
    $indeterminateCheckbox.each(function () {
      $(this).prop("indeterminate", true);
    });
  }
})();

//
// Custom input file
//

var CustomInputFile = (function () {
  // Variables

  var $customInputFile = $(".custom-input-file");

  // Methods

  function change($input, $this, $e) {
    var fileName,
      $label = $input.next("label"),
      labelVal = $label.html();

    if ($this && $this.files.length > 1) {
      fileName = ($this.getAttribute("data-multiple-caption") || "").replace(
        "{count}",
        $this.files.length
      );
    } else if ($e.target.value) {
      fileName = $e.target.value.split("\\").pop();
    }

    if (fileName) {
      $label.find("span").html(fileName);
    } else {
      $label.html(labelVal);
    }
  }

  function focus($input) {
    $input.addClass("has-focus");
  }

  function blur($input) {
    $input.removeClass("has-focus");
  }

  // Events

  if ($customInputFile.length) {
    $customInputFile.each(function () {
      var $input = $(this);

      $input.on("change", function (e) {
        var $this = this,
          $e = e;

        change($input, $this, $e);
      });

      // Firefox bug fix
      $input
        .on("focus", function () {
          focus($input);
        })
        .on("blur", function () {
          blur($input);
        });
    });
  }
})();

//
// Sticky Navbar
//

var NavbarSticky = (function () {
  // Variables

  var $nav = $(".navbar-sticky"),
    navOffsetTop = 0,
    scrolling = false;

  // Methods

  function init($this) {
    // our current vertical position from the top
    var scrollTop = $(window).scrollTop(),
      navHeight = $this.outerHeight();

    if (scrollTop > navOffsetTop + 200) {
      $this.addClass("sticky");
      $("body").css("padding-top", navHeight + "px");
    } else {
      $this.removeClass("sticky");
      $("body").css("padding-top", "0");
    }
  }

  // Events

  if ($nav.length) {
    navOffsetTop = $nav.offset().top;

    $(window).on({
      scroll: function () {
        scrolling = true;

        setInterval(function () {
          if (scrolling) {
            scrolling = false;

            // Sticky navbar init
            init($nav);
          }
        }, 250);
      },
    });
  }
})();

//
// Highlight.js
//

("use strict");

var Highlight = (function () {
  //
  // Variables
  //

  var $highlight = $(".highlight");

  //
  // Methods
  //

  function init(i, block) {
    // Insert the copy button inside the highlight block
    var btnHtml =
      '<button class="action-item btn-clipboard" title="Copy to clipboard"><i data-feather="copy"></i></button>';
    $(block).before(btnHtml);
    $(".btn-clipboard")
      .tooltip()
      .on("mouseleave", function () {
        // Explicitly hide tooltip, since after clicking it remains
        // focused (as it's a button), so tooltip would otherwise
        // remain visible until focus is moved away
        $(this).tooltip("hide");
      });

    // Component code copy/paste
    var clipboard = new ClipboardJS(".btn-clipboard", {
      target: function (trigger) {
        return trigger.nextElementSibling;
      },
    });

    clipboard.on("success", function (e) {
      $(e.trigger)
        .attr("title", "Copied!")
        .tooltip("_fixTitle")
        .tooltip("show")
        .attr("title", "Copy to clipboard")
        .tooltip("_fixTitle");

      e.clearSelection();
    });

    clipboard.on("error", function (e) {
      var modifierKey = /Mac/i.test(navigator.userAgent) ? "\u2318" : "Ctrl-";
      var fallbackMsg = "Press " + modifierKey + "C to copy";

      $(e.trigger)
        .attr("title", fallbackMsg)
        .tooltip("_fixTitle")
        .tooltip("show")
        .attr("title", "Copy to clipboard")
        .tooltip("_fixTitle");
    });

    // Initialize highlight.js plugin
    hljs.highlightBlock(block);
  }

  //
  // Events
  //

  $highlight.each(function (i, block) {
    init(i, block);
  });
})();


!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],i=e.document,r=Object.getPrototypeOf,o=n.slice,a=n.concat,l=n.push,s=n.indexOf,c={},u=c.toString,p=c.hasOwnProperty,f=p.toString,h=f.call(Object),d={},y=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},g=function(e){return null!=e&&e===e.window},m={type:!0,src:!0,nonce:!0,noModule:!0};function v(e,t,n){var r,o,a=(n=n||i).createElement("script");if(a.text=e,t)for(r in m)(o=t[r]||t.getAttribute&&t.getAttribute(r))&&a.setAttribute(r,o);n.head.appendChild(a).parentNode.removeChild(a)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[u.call(e)]||"object":typeof e}var b="3.4.1",_=function(e,t){return new _.fn.init(e,t)},w=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function E(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!y(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}_.fn=_.prototype={jquery:b,constructor:_,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=_.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return _.each(this,e)},map:function(e){return this.pushStack(_.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},_.extend=_.fn.extend=function(){var e,t,n,i,r,o,a=arguments[0]||{},l=1,s=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[l]||{},l++),"object"==typeof a||y(a)||(a={}),l===s&&(a=this,l--);l<s;l++)if(null!=(e=arguments[l]))for(t in e)i=e[t],"__proto__"!==t&&a!==i&&(c&&i&&(_.isPlainObject(i)||(r=Array.isArray(i)))?(n=a[t],o=r&&!Array.isArray(n)?[]:r||_.isPlainObject(n)?n:{},r=!1,a[t]=_.extend(c,o,i)):void 0!==i&&(a[t]=i));return a},_.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==u.call(e)||(t=r(e))&&("function"!=typeof(n=p.call(t,"constructor")&&t.constructor)||f.call(n)!==h))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){v(e,{nonce:t&&t.nonce})},each:function(e,t){var n,i=0;if(E(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(w,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(E(Object(e))?_.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,a=!n;r<o;r++)!t(e[r],r)!==a&&i.push(e[r]);return i},map:function(e,t,n){var i,r,o=0,l=[];if(E(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&l.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&l.push(r);return a.apply([],l)},guid:1,support:d}),"function"==typeof Symbol&&(_.fn[Symbol.iterator]=n[Symbol.iterator]),_.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});var T=function(e){var t,n,i,r,o,a,l,s,c,u,p,f,h,d,y,g,m,v,x,b="sizzle"+1*new Date,_=e.document,w=0,E=0,T=se(),C=se(),A=se(),S=se(),D=function(e,t){return e===t&&(p=!0),0},k={}.hasOwnProperty,M=[],O=M.pop,N=M.push,I=M.push,j=M.slice,L=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",q="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",R="\\["+P+"*("+q+")(?:"+P+"*([*^$|!~]?=)"+P+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+P+"*\\]",F=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",z=new RegExp(P+"+","g"),W=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),V=new RegExp("^"+P+"*,"+P+"*"),B=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),U=new RegExp(P+"|>"),$=new RegExp(F),K=new RegExp("^"+q+"$"),Q={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},X=/HTML$/i,Y=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),ne=function(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){f()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{I.apply(M=j.call(_.childNodes),_.childNodes),M[_.childNodes.length].nodeType}catch(t){I={apply:M.length?function(e,t){N.apply(e,j.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function le(e,t,i,r){var o,l,c,u,p,d,m,v=t&&t.ownerDocument,w=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return i;if(!r&&((t?t.ownerDocument||t:_)!==h&&f(t),t=t||h,y)){if(11!==w&&(p=Z.exec(e)))if(o=p[1]){if(9===w){if(!(c=t.getElementById(o)))return i;if(c.id===o)return i.push(c),i}else if(v&&(c=v.getElementById(o))&&x(t,c)&&c.id===o)return i.push(c),i}else{if(p[2])return I.apply(i,t.getElementsByTagName(e)),i;if((o=p[3])&&n.getElementsByClassName&&t.getElementsByClassName)return I.apply(i,t.getElementsByClassName(o)),i}if(n.qsa&&!S[e+" "]&&(!g||!g.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(m=e,v=t,1===w&&U.test(e)){for((u=t.getAttribute("id"))?u=u.replace(ie,re):t.setAttribute("id",u=b),l=(d=a(e)).length;l--;)d[l]="#"+u+" "+xe(d[l]);m=d.join(","),v=ee.test(e)&&me(t.parentNode)||t}try{return I.apply(i,v.querySelectorAll(m)),i}catch(t){S(e,!0)}finally{u===b&&t.removeAttribute("id")}}}return s(e.replace(W,"$1"),t,i,r)}function se(){var e=[];return function t(n,r){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function ce(e){return e[b]=!0,e}function ue(e){var t=h.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pe(e,t){for(var n=e.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=t}function fe(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function he(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ye(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ae(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function ge(e){return ce(function(t){return t=+t,ce(function(n,i){for(var r,o=e([],n.length,t),a=o.length;a--;)n[r=o[a]]&&(n[r]=!(i[r]=n[r]))})})}function me(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=le.support={},o=le.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!X.test(t||n&&n.nodeName||"HTML")},f=le.setDocument=function(e){var t,r,a=e?e.ownerDocument||e:_;return a!==h&&9===a.nodeType&&a.documentElement&&(d=(h=a).documentElement,y=!o(h),_!==h&&(r=h.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",oe,!1):r.attachEvent&&r.attachEvent("onunload",oe)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(h.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=J.test(h.getElementsByClassName),n.getById=ue(function(e){return d.appendChild(e).id=b,!h.getElementsByName||!h.getElementsByName(b).length}),n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&y){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&y){var n,i,r,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&y)return t.getElementsByClassName(e)},m=[],g=[],(n.qsa=J.test(h.querySelectorAll))&&(ue(function(e){d.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+b+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=h.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+P+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),d.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=J.test(v=d.matches||d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=v.call(e,"*"),v.call(e,"[s!='']:x"),m.push("!=",F)}),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),t=J.test(d.compareDocumentPosition),x=t||J.test(d.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return p=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e===h||e.ownerDocument===_&&x(_,e)?-1:t===h||t.ownerDocument===_&&x(_,t)?1:u?L(u,e)-L(u,t):0:4&i?-1:1)}:function(e,t){if(e===t)return p=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,a=[e],l=[t];if(!r||!o)return e===h?-1:t===h?1:r?-1:o?1:u?L(u,e)-L(u,t):0;if(r===o)return fe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?fe(a[i],l[i]):a[i]===_?-1:l[i]===_?1:0}),h},le.matches=function(e,t){return le(e,null,null,t)},le.matchesSelector=function(e,t){if((e.ownerDocument||e)!==h&&f(e),n.matchesSelector&&y&&!S[t+" "]&&(!m||!m.test(t))&&(!g||!g.test(t)))try{var i=v.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){S(t,!0)}return 0<le(t,h,null,[e]).length},le.contains=function(e,t){return(e.ownerDocument||e)!==h&&f(e),x(e,t)},le.attr=function(e,t){(e.ownerDocument||e)!==h&&f(e);var r=i.attrHandle[t.toLowerCase()],o=r&&k.call(i.attrHandle,t.toLowerCase())?r(e,t,!y):void 0;return void 0!==o?o:n.attributes||!y?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},le.escape=function(e){return(e+"").replace(ie,re)},le.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},le.uniqueSort=function(e){var t,i=[],r=0,o=0;if(p=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(D),p){for(;t=e[o++];)t===e[o]&&(r=i.push(o));for(;r--;)e.splice(i[r],1)}return u=null,e},r=le.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},(i=le.selectors={cacheLength:50,createPseudo:ce,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||le.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&le.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&$.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&T(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=le.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&-1<r.indexOf(n):"$="===t?n&&r.slice(-n.length)===n:"~="===t?-1<(" "+r.replace(z," ")+" ").indexOf(n):"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),l="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,s){var c,u,p,f,h,d,y=o!==a?"nextSibling":"previousSibling",g=t.parentNode,m=l&&t.nodeName.toLowerCase(),v=!s&&!l,x=!1;if(g){if(o){for(;y;){for(f=t;f=f[y];)if(l?f.nodeName.toLowerCase()===m:1===f.nodeType)return!1;d=y="only"===e&&!d&&"nextSibling"}return!0}if(d=[a?g.firstChild:g.lastChild],a&&v){for(x=(h=(c=(u=(p=(f=g)[b]||(f[b]={}))[f.uniqueID]||(p[f.uniqueID]={}))[e]||[])[0]===w&&c[1])&&c[2],f=h&&g.childNodes[h];f=++h&&f&&f[y]||(x=h=0)||d.pop();)if(1===f.nodeType&&++x&&f===t){u[e]=[w,h,x];break}}else if(v&&(x=h=(c=(u=(p=(f=t)[b]||(f[b]={}))[f.uniqueID]||(p[f.uniqueID]={}))[e]||[])[0]===w&&c[1]),!1===x)for(;(f=++h&&f&&f[y]||(x=h=0)||d.pop())&&((l?f.nodeName.toLowerCase()!==m:1!==f.nodeType)||!++x||(v&&((u=(p=f[b]||(f[b]={}))[f.uniqueID]||(p[f.uniqueID]={}))[e]=[w,x]),f!==t)););return(x-=r)===i||x%i==0&&0<=x/i}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||le.error("unsupported pseudo: "+e);return r[b]?r(t):1<r.length?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ce(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)e[i=L(e,o[a])]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ce(function(e){var t=[],n=[],i=l(e.replace(W,"$1"));return i[b]?ce(function(e,t,n,r){for(var o,a=i(e,null,r,[]),l=e.length;l--;)(o=a[l])&&(e[l]=!(t[l]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:ce(function(e){return function(t){return 0<le(e,t).length}}),contains:ce(function(e){return e=e.replace(te,ne),function(t){return-1<(t.textContent||r(t)).indexOf(e)}}),lang:ce(function(e){return K.test(e||"")||le.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=y?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ye(!1),disabled:ye(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ge(function(){return[0]}),last:ge(function(e,t){return[t-1]}),eq:ge(function(e,t,n){return[n<0?n+t:n]}),even:ge(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ge(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ge(function(e,t,n){for(var i=n<0?n+t:t<n?t:n;0<=--i;)e.push(i);return e}),gt:ge(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=he(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=de(t);function ve(){}function xe(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function be(e,t,n){var i=t.dir,r=t.next,o=r||i,a=n&&"parentNode"===o,l=E++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||a)return e(t,n,r);return!1}:function(t,n,s){var c,u,p,f=[w,l];if(s){for(;t=t[i];)if((1===t.nodeType||a)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||a)if(u=(p=t[b]||(t[b]={}))[t.uniqueID]||(p[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=u[o])&&c[0]===w&&c[1]===l)return f[2]=c[2];if((u[o]=f)[2]=e(t,n,s))return!0}return!1}}function _e(e){return 1<e.length?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function we(e,t,n,i,r){for(var o,a=[],l=0,s=e.length,c=null!=t;l<s;l++)(o=e[l])&&(n&&!n(o,i,r)||(a.push(o),c&&t.push(l)));return a}function Ee(e,t,n,i,r,o){return i&&!i[b]&&(i=Ee(i)),r&&!r[b]&&(r=Ee(r,o)),ce(function(o,a,l,s){var c,u,p,f=[],h=[],d=a.length,y=o||function(e,t,n){for(var i=0,r=t.length;i<r;i++)le(e,t[i],n);return n}(t||"*",l.nodeType?[l]:l,[]),g=!e||!o&&t?y:we(y,f,e,l,s),m=n?r||(o?e:d||i)?[]:a:g;if(n&&n(g,m,l,s),i)for(c=we(m,h),i(c,[],l,s),u=c.length;u--;)(p=c[u])&&(m[h[u]]=!(g[h[u]]=p));if(o){if(r||e){if(r){for(c=[],u=m.length;u--;)(p=m[u])&&c.push(g[u]=p);r(null,m=[],c,s)}for(u=m.length;u--;)(p=m[u])&&-1<(c=r?L(o,p):f[u])&&(o[c]=!(a[c]=p))}}else m=we(m===a?m.splice(d,m.length):m),r?r(null,a,m,s):I.apply(a,m)})}function Te(e){for(var t,n,r,o=e.length,a=i.relative[e[0].type],l=a||i.relative[" "],s=a?1:0,u=be(function(e){return e===t},l,!0),p=be(function(e){return-1<L(t,e)},l,!0),f=[function(e,n,i){var r=!a&&(i||n!==c)||((t=n).nodeType?u(e,n,i):p(e,n,i));return t=null,r}];s<o;s++)if(n=i.relative[e[s].type])f=[be(_e(f),n)];else{if((n=i.filter[e[s].type].apply(null,e[s].matches))[b]){for(r=++s;r<o&&!i.relative[e[r].type];r++);return Ee(1<s&&_e(f),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(W,"$1"),n,s<r&&Te(e.slice(s,r)),r<o&&Te(e=e.slice(r)),r<o&&xe(e))}f.push(n)}return _e(f)}return ve.prototype=i.filters=i.pseudos,i.setFilters=new ve,a=le.tokenize=function(e,t){var n,r,o,a,l,s,c,u=C[e+" "];if(u)return t?0:u.slice(0);for(l=e,s=[],c=i.preFilter;l;){for(a in n&&!(r=V.exec(l))||(r&&(l=l.slice(r[0].length)||l),s.push(o=[])),n=!1,(r=B.exec(l))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),l=l.slice(n.length)),i.filter)!(r=Q[a].exec(l))||c[a]&&!(r=c[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),l=l.slice(n.length));if(!n)break}return t?l.length:l?le.error(e):C(e,s).slice(0)},l=le.compile=function(e,t){var n,r,o,l,s,u,p=[],d=[],g=A[e+" "];if(!g){for(t||(t=a(e)),n=t.length;n--;)(g=Te(t[n]))[b]?p.push(g):d.push(g);(g=A(e,(r=d,l=0<(o=p).length,s=0<r.length,u=function(e,t,n,a,u){var p,d,g,m=0,v="0",x=e&&[],b=[],_=c,E=e||s&&i.find.TAG("*",u),T=w+=null==_?1:Math.random()||.1,C=E.length;for(u&&(c=t===h||t||u);v!==C&&null!=(p=E[v]);v++){if(s&&p){for(d=0,t||p.ownerDocument===h||(f(p),n=!y);g=r[d++];)if(g(p,t||h,n)){a.push(p);break}u&&(w=T)}l&&((p=!g&&p)&&m--,e&&x.push(p))}if(m+=v,l&&v!==m){for(d=0;g=o[d++];)g(x,b,t,n);if(e){if(0<m)for(;v--;)x[v]||b[v]||(b[v]=O.call(a));b=we(b)}I.apply(a,b),u&&!e&&0<b.length&&1<m+o.length&&le.uniqueSort(a)}return u&&(w=T,c=_),x},l?ce(u):u))).selector=e}return g},s=le.select=function(e,t,n,r){var o,s,c,u,p,f="function"==typeof e&&e,h=!r&&a(e=f.selector||e);if(n=n||[],1===h.length){if(2<(s=h[0]=h[0].slice(0)).length&&"ID"===(c=s[0]).type&&9===t.nodeType&&y&&i.relative[s[1].type]){if(!(t=(i.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;f&&(t=t.parentNode),e=e.slice(s.shift().value.length)}for(o=Q.needsContext.test(e)?0:s.length;o--&&(c=s[o],!i.relative[u=c.type]);)if((p=i.find[u])&&(r=p(c.matches[0].replace(te,ne),ee.test(s[0].type)&&me(t.parentNode)||t))){if(s.splice(o,1),!(e=r.length&&xe(s)))return I.apply(n,r),n;break}}return(f||l(e,h))(r,t,!y,n,!t||ee.test(e)&&me(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!p,f(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(h.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||pe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||pe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||pe(H,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),le}(e);_.find=T,_.expr=T.selectors,_.expr[":"]=_.expr.pseudos,_.uniqueSort=_.unique=T.uniqueSort,_.text=T.getText,_.isXMLDoc=T.isXML,_.contains=T.contains,_.escapeSelector=T.escape;var C=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&_(e).is(n))break;i.push(e)}return i},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=_.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var k=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function M(e,t,n){return y(t)?_.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?_.grep(e,function(e){return e===t!==n}):"string"!=typeof t?_.grep(e,function(e){return-1<s.call(t,e)!==n}):_.filter(t,e,n)}_.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?_.find.matchesSelector(i,e)?[i]:[]:_.find.matches(e,_.grep(t,function(e){return 1===e.nodeType}))},_.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(_(e).filter(function(){for(t=0;t<i;t++)if(_.contains(r[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)_.find(e,r[t],n);return 1<i?_.uniqueSort(n):n},filter:function(e){return this.pushStack(M(this,e||[],!1))},not:function(e){return this.pushStack(M(this,e||[],!0))},is:function(e){return!!M(this,"string"==typeof e&&S.test(e)?_(e):e||[],!1).length}});var O,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_.fn.init=function(e,t,n){var r,o;if(!e)return this;if(n=n||O,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:N.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof _?t[0]:t,_.merge(this,_.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:i,!0)),k.test(r[1])&&_.isPlainObject(t))for(r in t)y(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(o=i.getElementById(r[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(_):_.makeArray(e,this)}).prototype=_.fn,O=_(i);var I=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function L(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}_.fn.extend({has:function(e){var t=_(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(_.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],a="string"!=typeof e&&_(e);if(!S.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&_.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?_.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?s.call(_(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(_.uniqueSort(_.merge(this.get(),_(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),_.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return C(e,"parentNode")},parentsUntil:function(e,t,n){return C(e,"parentNode",n)},next:function(e){return L(e,"nextSibling")},prev:function(e){return L(e,"previousSibling")},nextAll:function(e){return C(e,"nextSibling")},prevAll:function(e){return C(e,"previousSibling")},nextUntil:function(e,t,n){return C(e,"nextSibling",n)},prevUntil:function(e,t,n){return C(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return void 0!==e.contentDocument?e.contentDocument:(D(e,"template")&&(e=e.content||e),_.merge([],e.childNodes))}},function(e,t){_.fn[e]=function(n,i){var r=_.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=_.filter(i,r)),1<this.length&&(j[e]||_.uniqueSort(r),I.test(e)&&r.reverse()),this.pushStack(r)}});var H=/[^\x20\t\r\n\f]+/g;function P(e){return e}function q(e){throw e}function R(e,t,n,i){var r;try{e&&y(r=e.promise)?r.call(e).done(t).fail(n):e&&y(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}_.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},_.each(t.match(H)||[],function(e,t){n[t]=!0}),n):_.extend({},e);var i,r,o,a,l=[],s=[],c=-1,u=function(){for(a=a||e.once,o=i=!0;s.length;c=-1)for(r=s.shift();++c<l.length;)!1===l[c].apply(r[0],r[1])&&e.stopOnFalse&&(c=l.length,r=!1);e.memory||(r=!1),i=!1,a&&(l=r?[]:"")},p={add:function(){return l&&(r&&!i&&(c=l.length-1,s.push(r)),function t(n){_.each(n,function(n,i){y(i)?e.unique&&p.has(i)||l.push(i):i&&i.length&&"string"!==x(i)&&t(i)})}(arguments),r&&!i&&u()),this},remove:function(){return _.each(arguments,function(e,t){for(var n;-1<(n=_.inArray(t,l,n));)l.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<_.inArray(e,l):0<l.length},empty:function(){return l&&(l=[]),this},disable:function(){return a=s=[],l=r="",this},disabled:function(){return!l},lock:function(){return a=s=[],r||i||(l=r=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],s.push(t),i||u()),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!o}};return p},_.extend({Deferred:function(t){var n=[["notify","progress",_.Callbacks("memory"),_.Callbacks("memory"),2],["resolve","done",_.Callbacks("once memory"),_.Callbacks("once memory"),0,"resolved"],["reject","fail",_.Callbacks("once memory"),_.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},pipe:function(){var e=arguments;return _.Deferred(function(t){_.each(n,function(n,i){var r=y(e[i[4]])&&e[i[4]];o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&y(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(t,i,r){var o=0;function a(t,n,i,r){return function(){var l=this,s=arguments,c=function(){var e,c;if(!(t<o)){if((e=i.apply(l,s))===n.promise())throw new TypeError("Thenable self-resolution");c=e&&("object"==typeof e||"function"==typeof e)&&e.then,y(c)?r?c.call(e,a(o,n,P,r),a(o,n,q,r)):(o++,c.call(e,a(o,n,P,r),a(o,n,q,r),a(o,n,P,n.notifyWith))):(i!==P&&(l=void 0,s=[e]),(r||n.resolveWith)(l,s))}},u=r?c:function(){try{c()}catch(e){_.Deferred.exceptionHook&&_.Deferred.exceptionHook(e,u.stackTrace),o<=t+1&&(i!==q&&(l=void 0,s=[e]),n.rejectWith(l,s))}};t?u():(_.Deferred.getStackHook&&(u.stackTrace=_.Deferred.getStackHook()),e.setTimeout(u))}}return _.Deferred(function(e){n[0][3].add(a(0,e,y(r)?r:P,e.notifyWith)),n[1][3].add(a(0,e,y(t)?t:P)),n[2][3].add(a(0,e,y(i)?i:q))}).promise()},promise:function(e){return null!=e?_.extend(e,r):r}},o={};return _.each(n,function(e,t){var a=t[2],l=t[5];r[t[1]]=a.add,l&&a.add(function(){i=l},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),r.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,i=Array(n),r=o.call(arguments),a=_.Deferred(),l=function(e){return function(n){i[e]=this,r[e]=1<arguments.length?o.call(arguments):n,--t||a.resolveWith(i,r)}};if(t<=1&&(R(e,a.done(l(n)).resolve,a.reject,!t),"pending"===a.state()||y(r[n]&&r[n].then)))return a.then();for(;n--;)R(r[n],l(n),a.reject);return a.promise()}});var F=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&F.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},_.readyException=function(t){e.setTimeout(function(){throw t})};var z=_.Deferred();function W(){i.removeEventListener("DOMContentLoaded",W),e.removeEventListener("load",W),_.ready()}_.fn.ready=function(e){return z.then(e).catch(function(e){_.readyException(e)}),this},_.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--_.readyWait:_.isReady)||(_.isReady=!0)!==e&&0<--_.readyWait||z.resolveWith(i,[_])}}),_.ready.then=z.then,"complete"===i.readyState||"loading"!==i.readyState&&!i.documentElement.doScroll?e.setTimeout(_.ready):(i.addEventListener("DOMContentLoaded",W),e.addEventListener("load",W));var V=function(e,t,n,i,r,o,a){var l=0,s=e.length,c=null==n;if("object"===x(n))for(l in r=!0,n)V(e,t,l,n[l],!0,o,a);else if(void 0!==i&&(r=!0,y(i)||(a=!0),c&&(a?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(_(e),n)})),t))for(;l<s;l++)t(e[l],n,a?i:i.call(e[l],l,t(e[l],n)));return r?e:c?t.call(e):s?t(e[0],n):o},B=/^-ms-/,U=/-([a-z])/g;function $(e,t){return t.toUpperCase()}function K(e){return e.replace(B,"ms-").replace(U,$)}var Q=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function X(){this.expando=_.expando+X.uid++}X.uid=1,X.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Q(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[K(t)]=n;else for(i in t)r[K(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][K(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(K):(t=K(t))in i?[t]:t.match(H)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||_.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!_.isEmptyObject(t)}};var Y=new X,G=new X,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var i,r;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(r=n)||"false"!==r&&("null"===r?null:r===+r+""?+r:J.test(r)?JSON.parse(r):r)}catch(e){}G.set(e,t,n)}else n=void 0;return n}_.extend({hasData:function(e){return G.hasData(e)||Y.hasData(e)},data:function(e,t,n){return G.access(e,t,n)},removeData:function(e,t){G.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),_.fn.extend({data:function(e,t){var n,i,r,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(r=G.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(i=a[n].name).indexOf("data-")&&(i=K(i.slice(5)),ee(o,i,r[i]));Y.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){G.set(this,e)}):V(this,function(t){var n;if(o&&void 0===t)return void 0!==(n=G.get(o,e))?n:void 0!==(n=ee(o,e))?n:void 0;this.each(function(){G.set(this,e,t)})},null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){G.remove(this,e)})}}),_.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Y.get(e,t),n&&(!i||Array.isArray(n)?i=Y.access(e,t,_.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=_.queue(e,t),i=n.length,r=n.shift(),o=_._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,function(){_.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:_.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),_.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?_.queue(this[0],e):void 0===t?this:this.each(function(){var n=_.queue(this,e,t);_._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&_.dequeue(this,e)})},dequeue:function(e){return this.each(function(){_.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=_.Deferred(),o=this,a=this.length,l=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(l));return l(),r.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),ie=["Top","Right","Bottom","Left"],re=i.documentElement,oe=function(e){return _.contains(e.ownerDocument,e)},ae={composed:!0};re.getRootNode&&(oe=function(e){return _.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===_.css(e,"display")},se=function(e,t,n,i){var r,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in r=n.apply(e,i||[]),t)e.style[o]=a[o];return r};function ce(e,t,n,i){var r,o,a=20,l=i?function(){return i.cur()}:function(){return _.css(e,t,"")},s=l(),c=n&&n[3]||(_.cssNumber[t]?"":"px"),u=e.nodeType&&(_.cssNumber[t]||"px"!==c&&+s)&&ne.exec(_.css(e,t));if(u&&u[3]!==c){for(s/=2,c=c||u[3],u=+s||1;a--;)_.style(e,t,u+c),(1-o)*(1-(o=l()/s||.5))<=0&&(a=0),u/=o;u*=2,_.style(e,t,u+c),n=n||[]}return n&&(u=+u||+s||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var ue={};function pe(e,t){for(var n,i,r,o,a,l,s,c=[],u=0,p=e.length;u<p;u++)(i=e[u]).style&&(n=i.style.display,t?("none"===n&&(c[u]=Y.get(i,"display")||null,c[u]||(i.style.display="")),""===i.style.display&&le(i)&&(c[u]=(s=a=o=void 0,a=(r=i).ownerDocument,l=r.nodeName,(s=ue[l])||(o=a.body.appendChild(a.createElement(l)),s=_.css(o,"display"),o.parentNode.removeChild(o),"none"===s&&(s="block"),ue[l]=s)))):"none"!==n&&(c[u]="none",Y.set(i,"display",n)));for(u=0;u<p;u++)null!=c[u]&&(e[u].style.display=c[u]);return e}_.fn.extend({show:function(){return pe(this,!0)},hide:function(){return pe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){le(this)?_(this).show():_(this).hide()})}});var fe=/^(?:checkbox|radio)$/i,he=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,de=/^$|^module$|\/(?:java|ecma)script/i,ye={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?_.merge([e],n):n}function me(e,t){for(var n=0,i=e.length;n<i;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ye.optgroup=ye.option,ye.tbody=ye.tfoot=ye.colgroup=ye.caption=ye.thead,ye.th=ye.td;var ve,xe,be=/<|&#?\w+;/;function _e(e,t,n,i,r){for(var o,a,l,s,c,u,p=t.createDocumentFragment(),f=[],h=0,d=e.length;h<d;h++)if((o=e[h])||0===o)if("object"===x(o))_.merge(f,o.nodeType?[o]:o);else if(be.test(o)){for(a=a||p.appendChild(t.createElement("div")),l=(he.exec(o)||["",""])[1].toLowerCase(),s=ye[l]||ye._default,a.innerHTML=s[1]+_.htmlPrefilter(o)+s[2],u=s[0];u--;)a=a.lastChild;_.merge(f,a.childNodes),(a=p.firstChild).textContent=""}else f.push(t.createTextNode(o));for(p.textContent="",h=0;o=f[h++];)if(i&&-1<_.inArray(o,i))r&&r.push(o);else if(c=oe(o),a=ge(p.appendChild(o),"script"),c&&me(a),n)for(u=0;o=a[u++];)de.test(o.type||"")&&n.push(o);return p}ve=i.createDocumentFragment().appendChild(i.createElement("div")),(xe=i.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),ve.appendChild(xe),d.checkClone=ve.cloneNode(!0).cloneNode(!0).lastChild.checked,ve.innerHTML="<textarea>x</textarea>",d.noCloneChecked=!!ve.cloneNode(!0).lastChild.defaultValue;var we=/^key/,Ee=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ae(){return!1}function Se(e,t){return e===function(){try{return i.activeElement}catch(e){}}()==("focus"===t)}function De(e,t,n,i,r,o){var a,l;if("object"==typeof t){for(l in"string"!=typeof n&&(i=i||n,n=void 0),t)De(e,l,n,i,t[l],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=Ae;else if(!r)return e;return 1===o&&(a=r,(r=function(e){return _().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=_.guid++)),e.each(function(){_.event.add(this,t,r,i,n)})}function ke(e,t,n){n?(Y.set(e,t,!1),_.event.add(e,t,{namespace:!1,handler:function(e){var i,r,a=Y.get(this,t);if(1&e.isTrigger&&this[t]){if(a.length)(_.event.special[t]||{}).delegateType&&e.stopPropagation();else if(a=o.call(arguments),Y.set(this,t,a),i=n(this,t),this[t](),a!==(r=Y.get(this,t))||i?Y.set(this,t,!1):r={},a!==r)return e.stopImmediatePropagation(),e.preventDefault(),r.value}else a.length&&(Y.set(this,t,{value:_.event.trigger(_.extend(a[0],_.Event.prototype),a.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,t)&&_.event.add(e,t,Ce)}_.event={global:{},add:function(e,t,n,i,r){var o,a,l,s,c,u,p,f,h,d,y,g=Y.get(e);if(g)for(n.handler&&(n=(o=n).handler,r=o.selector),r&&_.find.matchesSelector(re,r),n.guid||(n.guid=_.guid++),(s=g.events)||(s=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==_&&_.event.triggered!==t.type?_.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(H)||[""]).length;c--;)h=y=(l=Te.exec(t[c])||[])[1],d=(l[2]||"").split(".").sort(),h&&(p=_.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,p=_.event.special[h]||{},u=_.extend({type:h,origType:y,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&_.expr.match.needsContext.test(r),namespace:d.join(".")},o),(f=s[h])||((f=s[h]=[]).delegateCount=0,p.setup&&!1!==p.setup.call(e,i,d,a)||e.addEventListener&&e.addEventListener(h,a)),p.add&&(p.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,u):f.push(u),_.event.global[h]=!0)},remove:function(e,t,n,i,r){var o,a,l,s,c,u,p,f,h,d,y,g=Y.hasData(e)&&Y.get(e);if(g&&(s=g.events)){for(c=(t=(t||"").match(H)||[""]).length;c--;)if(h=y=(l=Te.exec(t[c])||[])[1],d=(l[2]||"").split(".").sort(),h){for(p=_.event.special[h]||{},f=s[h=(i?p.delegateType:p.bindType)||h]||[],l=l[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=f.length;o--;)u=f[o],!r&&y!==u.origType||n&&n.guid!==u.guid||l&&!l.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(f.splice(o,1),u.selector&&f.delegateCount--,p.remove&&p.remove.call(e,u));a&&!f.length&&(p.teardown&&!1!==p.teardown.call(e,d,g.handle)||_.removeEvent(e,h,g.handle),delete s[h])}else for(h in s)_.event.remove(e,h+t[c],n,i,!0);_.isEmptyObject(s)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,a,l=_.event.fix(e),s=new Array(arguments.length),c=(Y.get(this,"events")||{})[l.type]||[],u=_.event.special[l.type]||{};for(s[0]=l,t=1;t<arguments.length;t++)s[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(a=_.event.handlers.call(this,l,c),t=0;(r=a[t++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==o.namespace&&!l.rnamespace.test(o.namespace)||(l.handleObj=o,l.data=o.data,void 0!==(i=((_.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,s))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,r,o,a,l=[],s=t.delegateCount,c=e.target;if(s&&c.nodeType&&!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],a={},n=0;n<s;n++)void 0===a[r=(i=t[n]).selector+" "]&&(a[r]=i.needsContext?-1<_(r,this).index(c):_.find(r,this,null,[c]).length),a[r]&&o.push(i);o.length&&l.push({elem:c,handlers:o})}return c=this,s<t.length&&l.push({elem:c,handlers:t.slice(s)}),l},addProp:function(e,t){Object.defineProperty(_.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[_.expando]?e:new _.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return fe.test(t.type)&&t.click&&D(t,"input")&&ke(t,"click",Ce),!1},trigger:function(e){var t=this||e;return fe.test(t.type)&&t.click&&D(t,"input")&&ke(t,"click"),!0},_default:function(e){var t=e.target;return fe.test(t.type)&&t.click&&D(t,"input")&&Y.get(t,"click")||D(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},_.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},_.Event=function(e,t){if(!(this instanceof _.Event))return new _.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ae,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&_.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[_.expando]=!0},_.Event.prototype={constructor:_.Event,isDefaultPrevented:Ae,isPropagationStopped:Ae,isImmediatePropagationStopped:Ae,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},_.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ee.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},_.event.addProp),_.each({focus:"focusin",blur:"focusout"},function(e,t){_.event.special[e]={setup:function(){return ke(this,e,Se),!1},trigger:function(){return ke(this,e),!0},delegateType:t}}),_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){_.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||_.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),_.fn.extend({on:function(e,t,n,i){return De(this,e,t,n,i)},one:function(e,t,n,i){return De(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,_(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ae),this.each(function(){_.event.remove(this,e,n,t)})}});var Me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Oe=/<script|<style|<link/i,Ne=/checked\s*(?:[^=]|=\s*.checked.)/i,Ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&_(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,i,r,o,a,l,s,c;if(1===t.nodeType){if(Y.hasData(e)&&(o=Y.access(e),a=Y.set(t,o),c=o.events))for(r in delete a.handle,a.events={},c)for(n=0,i=c[r].length;n<i;n++)_.event.add(t,r,c[r][n]);G.hasData(e)&&(l=G.access(e),s=_.extend({},l),G.set(t,s))}}function qe(e,t,n,i){t=a.apply([],t);var r,o,l,s,c,u,p=0,f=e.length,h=f-1,g=t[0],m=y(g);if(m||1<f&&"string"==typeof g&&!d.checkClone&&Ne.test(g))return e.each(function(r){var o=e.eq(r);m&&(t[0]=g.call(this,r,o.html())),qe(o,t,n,i)});if(f&&(o=(r=_e(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){for(s=(l=_.map(ge(r,"script"),Le)).length;p<f;p++)c=r,p!==h&&(c=_.clone(c,!0,!0),s&&_.merge(l,ge(c,"script"))),n.call(e[p],c,p);if(s)for(u=l[l.length-1].ownerDocument,_.map(l,He),p=0;p<s;p++)c=l[p],de.test(c.type||"")&&!Y.access(c,"globalEval")&&_.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?_._evalUrl&&!c.noModule&&_._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")}):v(c.textContent.replace(Ie,""),c,u))}return e}function Re(e,t,n){for(var i,r=t?_.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||_.cleanData(ge(i)),i.parentNode&&(n&&oe(i)&&me(ge(i,"script")),i.parentNode.removeChild(i));return e}_.extend({htmlPrefilter:function(e){return e.replace(Me,"<$1></$2>")},clone:function(e,t,n){var i,r,o,a,l,s,c,u=e.cloneNode(!0),p=oe(e);if(!(d.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||_.isXMLDoc(e)))for(a=ge(u),i=0,r=(o=ge(e)).length;i<r;i++)l=o[i],"input"===(c=(s=a[i]).nodeName.toLowerCase())&&fe.test(l.type)?s.checked=l.checked:"input"!==c&&"textarea"!==c||(s.defaultValue=l.defaultValue);if(t)if(n)for(o=o||ge(e),a=a||ge(u),i=0,r=o.length;i<r;i++)Pe(o[i],a[i]);else Pe(e,u);return 0<(a=ge(u,"script")).length&&me(a,!p&&ge(e,"script")),u},cleanData:function(e){for(var t,n,i,r=_.event.special,o=0;void 0!==(n=e[o]);o++)if(Q(n)){if(t=n[Y.expando]){if(t.events)for(i in t.events)r[i]?_.event.remove(n,i):_.removeEvent(n,i,t.handle);n[Y.expando]=void 0}n[G.expando]&&(n[G.expando]=void 0)}}}),_.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return V(this,function(e){return void 0===e?_.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return qe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return qe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(_.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return _.clone(this,e,t)})},html:function(e){return V(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ye[(he.exec(e)||["",""])[1].toLowerCase()]){e=_.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(_.cleanData(ge(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return qe(this,arguments,function(t){var n=this.parentNode;_.inArray(this,e)<0&&(_.cleanData(ge(this)),n&&n.replaceChild(t,this))},e)}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){_.fn[e]=function(e){for(var n,i=[],r=_(e),o=r.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),_(r[a])[t](n),l.apply(i,n.get());return this.pushStack(i)}});var Fe=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),ze=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},We=new RegExp(ie.join("|"),"i");function Ve(e,t,n){var i,r,o,a,l=e.style;return(n=n||ze(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=_.style(e,t)),!d.pixelBoxStyles()&&Fe.test(a)&&We.test(t)&&(i=l.width,r=l.minWidth,o=l.maxWidth,l.minWidth=l.maxWidth=l.width=a,a=n.width,l.width=i,l.minWidth=r,l.maxWidth=o)),void 0!==a?a+"":a}function Be(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);r="1%"!==t.top,s=12===n(t.marginLeft),u.style.right="60%",l=36===n(t.right),o=36===n(t.width),u.style.position="absolute",a=12===n(u.offsetWidth/3),re.removeChild(c),u=null}}function n(e){return Math.round(parseFloat(e))}var r,o,a,l,s,c=i.createElement("div"),u=i.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",d.clearCloneStyle="content-box"===u.style.backgroundClip,_.extend(d,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),l},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),s},scrollboxSize:function(){return t(),a}}))}();var Ue=["Webkit","Moz","ms"],$e=i.createElement("div").style,Ke={};function Qe(e){return _.cssProps[e]||Ke[e]||(e in $e?e:Ke[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;n--;)if((e=Ue[n]+t)in $e)return e}(e)||e)}var Xe=/^(none|table(?!-c[ea]).+)/,Ye=/^--/,Ge={position:"absolute",visibility:"hidden",display:"block"},Je={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var i=ne.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function et(e,t,n,i,r,o){var a="width"===t?1:0,l=0,s=0;if(n===(i?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(s+=_.css(e,n+ie[a],!0,r)),i?("content"===n&&(s-=_.css(e,"padding"+ie[a],!0,r)),"margin"!==n&&(s-=_.css(e,"border"+ie[a]+"Width",!0,r))):(s+=_.css(e,"padding"+ie[a],!0,r),"padding"!==n?s+=_.css(e,"border"+ie[a]+"Width",!0,r):l+=_.css(e,"border"+ie[a]+"Width",!0,r));return!i&&0<=o&&(s+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-s-l-.5))||0),s}function tt(e,t,n){var i=ze(e),r=(!d.boxSizingReliable()||n)&&"border-box"===_.css(e,"boxSizing",!1,i),o=r,a=Ve(e,t,i),l="offset"+t[0].toUpperCase()+t.slice(1);if(Fe.test(a)){if(!n)return a;a="auto"}return(!d.boxSizingReliable()&&r||"auto"===a||!parseFloat(a)&&"inline"===_.css(e,"display",!1,i))&&e.getClientRects().length&&(r="border-box"===_.css(e,"boxSizing",!1,i),(o=l in e)&&(a=e[l])),(a=parseFloat(a)||0)+et(e,t,n||(r?"border":"content"),o,i,a)+"px"}function nt(e,t,n,i,r){return new nt.prototype.init(e,t,n,i,r)}_.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ve(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,a,l=K(t),s=Ye.test(t),c=e.style;if(s||(t=Qe(l)),a=_.cssHooks[t]||_.cssHooks[l],void 0===n)return a&&"get"in a&&void 0!==(r=a.get(e,!1,i))?r:c[t];"string"==(o=typeof n)&&(r=ne.exec(n))&&r[1]&&(n=ce(e,t,r),o="number"),null!=n&&n==n&&("number"!==o||s||(n+=r&&r[3]||(_.cssNumber[l]?"":"px")),d.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(s?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,o,a,l=K(t);return Ye.test(t)||(t=Qe(l)),(a=_.cssHooks[t]||_.cssHooks[l])&&"get"in a&&(r=a.get(e,!0,n)),void 0===r&&(r=Ve(e,t,i)),"normal"===r&&t in Je&&(r=Je[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),_.each(["height","width"],function(e,t){_.cssHooks[t]={get:function(e,n,i){if(n)return!Xe.test(_.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,t,i):se(e,Ge,function(){return tt(e,t,i)})},set:function(e,n,i){var r,o=ze(e),a=!d.scrollboxSize()&&"absolute"===o.position,l=(a||i)&&"border-box"===_.css(e,"boxSizing",!1,o),s=i?et(e,t,i,l,o):0;return l&&a&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-et(e,t,"border",!1,o)-.5)),s&&(r=ne.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=_.css(e,t)),Ze(0,n,s)}}}),_.cssHooks.marginLeft=Be(d.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ve(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),_.each({margin:"",padding:"",border:"Width"},function(e,t){_.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ie[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(_.cssHooks[e+t].set=Ze)}),_.fn.extend({css:function(e,t){return V(this,function(e,t,n){var i,r,o={},a=0;if(Array.isArray(t)){for(i=ze(e),r=t.length;a<r;a++)o[t[a]]=_.css(e,t[a],!1,i);return o}return void 0!==n?_.style(e,t,n):_.css(e,t)},e,t,1<arguments.length)}}),((_.Tween=nt).prototype={constructor:nt,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||_.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(_.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=_.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=_.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){_.fx.step[e.prop]?_.fx.step[e.prop](e):1!==e.elem.nodeType||!_.cssHooks[e.prop]&&null==e.elem.style[Qe(e.prop)]?e.elem[e.prop]=e.now:_.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},_.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},_.fx=nt.prototype.init,_.fx.step={};var it,rt,ot,at,lt=/^(?:toggle|show|hide)$/,st=/queueHooks$/;function ct(){rt&&(!1===i.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(ct):e.setTimeout(ct,_.fx.interval),_.fx.tick())}function ut(){return e.setTimeout(function(){it=void 0}),it=Date.now()}function pt(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=ie[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function ft(e,t,n){for(var i,r=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),o=0,a=r.length;o<a;o++)if(i=r[o].call(n,t,e))return i}function ht(e,t,n){var i,r,o=0,a=ht.prefilters.length,l=_.Deferred().always(function(){delete s.elem}),s=function(){if(r)return!1;for(var t=it||ut(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(i);return l.notifyWith(e,[c,i,n]),i<1&&a?n:(a||l.notifyWith(e,[c,1,0]),l.resolveWith(e,[c]),!1)},c=l.promise({elem:e,props:_.extend({},t),opts:_.extend(!0,{specialEasing:{},easing:_.easing._default},n),originalProperties:t,originalOptions:n,startTime:it||ut(),duration:n.duration,tweens:[],createTween:function(t,n){var i=_.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?(l.notifyWith(e,[c,1,0]),l.resolveWith(e,[c,t])):l.rejectWith(e,[c,t]),this}}),u=c.props;for(function(e,t){var n,i,r,o,a;for(n in e)if(r=t[i=K(n)],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(a=_.cssHooks[i])&&"expand"in a)for(n in o=a.expand(o),delete e[i],o)n in e||(e[n]=o[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);o<a;o++)if(i=ht.prefilters[o].call(c,e,u,c.opts))return y(i.stop)&&(_._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return _.map(u,ft,c),y(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),_.fx.timer(_.extend(s,{elem:e,anim:c,queue:c.opts.queue})),c}_.Animation=_.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ce(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){y(e)?(t=e,e=["*"]):e=e.match(H);for(var n,i=0,r=e.length;i<r;i++)n=e[i],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,a,l,s,c,u,p="width"in t||"height"in t,f=this,h={},d=e.style,y=e.nodeType&&le(e),g=Y.get(e,"fxshow");for(i in n.queue||(null==(a=_._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,_.queue(e,"fx").length||a.empty.fire()})})),t)if(r=t[i],lt.test(r)){if(delete t[i],o=o||"toggle"===r,r===(y?"hide":"show")){if("show"!==r||!g||void 0===g[i])continue;y=!0}h[i]=g&&g[i]||_.style(e,i)}if((s=!_.isEmptyObject(t))||!_.isEmptyObject(h))for(i in p&&1===e.nodeType&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],null==(c=g&&g.display)&&(c=Y.get(e,"display")),"none"===(u=_.css(e,"display"))&&(c?u=c:(pe([e],!0),c=e.style.display||c,u=_.css(e,"display"),pe([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===_.css(e,"float")&&(s||(f.done(function(){d.display=c}),null==c&&(u=d.display,c="none"===u?"":u)),d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]})),s=!1,h)s||(g?"hidden"in g&&(y=g.hidden):g=Y.access(e,"fxshow",{display:c}),o&&(g.hidden=!y),y&&pe([e],!0),f.done(function(){for(i in y||pe([e]),Y.remove(e,"fxshow"),h)_.style(e,i,h[i])})),s=ft(y?g[i]:0,i,f),i in g||(g[i]=s.start,y&&(s.end=s.start,s.start=0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),_.speed=function(e,t,n){var i=e&&"object"==typeof e?_.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return _.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in _.fx.speeds?i.duration=_.fx.speeds[i.duration]:i.duration=_.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){y(i.old)&&i.old.call(this),i.queue&&_.dequeue(this,i.queue)},i},_.fn.extend({fadeTo:function(e,t,n,i){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=_.isEmptyObject(e),o=_.speed(t,n,i),a=function(){var t=ht(this,_.extend({},e),o);(r||Y.get(this,"finish"))&&t.stop(!0)};return a.finish=a,r||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=_.timers,a=Y.get(this);if(r)a[r]&&a[r].stop&&i(a[r]);else for(r in a)a[r]&&a[r].stop&&st.test(r)&&i(a[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));!t&&n||_.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Y.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=_.timers,a=i?i.length:0;for(n.finish=!0,_.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),_.each(["toggle","show","hide"],function(e,t){var n=_.fn[t];_.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(pt(t,!0),e,i,r)}}),_.each({slideDown:pt("show"),slideUp:pt("hide"),slideToggle:pt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){_.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),_.timers=[],_.fx.tick=function(){var e,t=0,n=_.timers;for(it=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||_.fx.stop(),it=void 0},_.fx.timer=function(e){_.timers.push(e),_.fx.start()},_.fx.interval=13,_.fx.start=function(){rt||(rt=!0,ct())},_.fx.stop=function(){rt=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(t,n){return t=_.fx&&_.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},ot=i.createElement("input"),at=i.createElement("select").appendChild(i.createElement("option")),ot.type="checkbox",d.checkOn=""!==ot.value,d.optSelected=at.selected,(ot=i.createElement("input")).value="t",ot.type="radio",d.radioValue="t"===ot.value;var dt,yt=_.expr.attrHandle;_.fn.extend({attr:function(e,t){return V(this,_.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){_.removeAttr(this,e)})}}),_.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?_.prop(e,t,n):(1===o&&_.isXMLDoc(e)||(r=_.attrHooks[t.toLowerCase()]||(_.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void _.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=_.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!d.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(H);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?_.removeAttr(e,n):e.setAttribute(n,n),n}},_.each(_.expr.match.bool.source.match(/\w+/g),function(e,t){var n=yt[t]||_.find.attr;yt[t]=function(e,t,i){var r,o,a=t.toLowerCase();return i||(o=yt[a],yt[a]=r,r=null!=n(e,t,i)?a:null,yt[a]=o),r}});var gt=/^(?:input|select|textarea|button)$/i,mt=/^(?:a|area)$/i;function vt(e){return(e.match(H)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(H)||[]}_.fn.extend({prop:function(e,t){return V(this,_.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[_.propFix[e]||e]})}}),_.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&_.isXMLDoc(e)||(t=_.propFix[t]||t,r=_.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=_.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||mt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),d.optSelected||(_.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this}),_.fn.extend({addClass:function(e){var t,n,i,r,o,a,l,s=0;if(y(e))return this.each(function(t){_(this).addClass(e.call(this,t,xt(this)))});if((t=bt(e)).length)for(;n=this[s++];)if(r=xt(n),i=1===n.nodeType&&" "+vt(r)+" "){for(a=0;o=t[a++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");r!==(l=vt(i))&&n.setAttribute("class",l)}return this},removeClass:function(e){var t,n,i,r,o,a,l,s=0;if(y(e))return this.each(function(t){_(this).removeClass(e.call(this,t,xt(this)))});if(!arguments.length)return this.attr("class","");if((t=bt(e)).length)for(;n=this[s++];)if(r=xt(n),i=1===n.nodeType&&" "+vt(r)+" "){for(a=0;o=t[a++];)for(;-1<i.indexOf(" "+o+" ");)i=i.replace(" "+o+" "," ");r!==(l=vt(i))&&n.setAttribute("class",l)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):y(e)?this.each(function(n){_(this).toggleClass(e.call(this,n,xt(this),t),t)}):this.each(function(){var t,r,o,a;if(i)for(r=0,o=_(this),a=bt(e);t=a[r++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||((t=xt(this))&&Y.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+vt(xt(n))+" ").indexOf(t))return!0;return!1}});var _t=/\r/g;_.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=y(e),this.each(function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,_(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=_.map(r,function(e){return null==e?"":e+""})),(t=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))})):r?(t=_.valHooks[r.type]||_.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(_t,""):null==n?"":n:void 0}}),_.extend({valHooks:{option:{get:function(e){var t=_.find.attr(e,"value");return null!=t?t:vt(_.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,a="select-one"===e.type,l=a?null:[],s=a?o+1:r.length;for(i=o<0?s:a?o:0;i<s;i++)if(((n=r[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=_(n).val(),a)return t;l.push(t)}return l},set:function(e,t){for(var n,i,r=e.options,o=_.makeArray(t),a=r.length;a--;)((i=r[a]).selected=-1<_.inArray(_.valHooks.option.get(i),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<_.inArray(_(e).val(),t)}},d.checkOn||(_.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),d.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Et=function(e){e.stopPropagation()};_.extend(_.event,{trigger:function(t,n,r,o){var a,l,s,c,u,f,h,d,m=[r||i],v=p.call(t,"type")?t.type:t,x=p.call(t,"namespace")?t.namespace.split("."):[];if(l=d=s=r=r||i,3!==r.nodeType&&8!==r.nodeType&&!wt.test(v+_.event.triggered)&&(-1<v.indexOf(".")&&(v=(x=v.split(".")).shift(),x.sort()),u=v.indexOf(":")<0&&"on"+v,(t=t[_.expando]?t:new _.Event(v,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:_.makeArray(n,[t]),h=_.event.special[v]||{},o||!h.trigger||!1!==h.trigger.apply(r,n))){if(!o&&!h.noBubble&&!g(r)){for(c=h.delegateType||v,wt.test(c+v)||(l=l.parentNode);l;l=l.parentNode)m.push(l),s=l;s===(r.ownerDocument||i)&&m.push(s.defaultView||s.parentWindow||e)}for(a=0;(l=m[a++])&&!t.isPropagationStopped();)d=l,t.type=1<a?c:h.bindType||v,(f=(Y.get(l,"events")||{})[t.type]&&Y.get(l,"handle"))&&f.apply(l,n),(f=u&&l[u])&&f.apply&&Q(l)&&(t.result=f.apply(l,n),!1===t.result&&t.preventDefault());return t.type=v,o||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(m.pop(),n)||!Q(r)||u&&y(r[v])&&!g(r)&&((s=r[u])&&(r[u]=null),_.event.triggered=v,t.isPropagationStopped()&&d.addEventListener(v,Et),r[v](),t.isPropagationStopped()&&d.removeEventListener(v,Et),_.event.triggered=void 0,s&&(r[u]=s)),t.result}},simulate:function(e,t,n){var i=_.extend(new _.Event,n,{type:e,isSimulated:!0});_.event.trigger(i,null,t)}}),_.fn.extend({trigger:function(e,t){return this.each(function(){_.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return _.event.trigger(e,t,n,!0)}}),d.focusin||_.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){_.event.simulate(t,e.target,_.event.fix(e))};_.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=Y.access(i,t);r||i.addEventListener(e,n,!0),Y.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=Y.access(i,t)-1;r?Y.access(i,t,r):(i.removeEventListener(e,n,!0),Y.remove(i,t))}}});var Tt=e.location,Ct=Date.now(),At=/\?/;_.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(t){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||_.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,kt=/^(?:submit|button|image|reset|file)$/i,Mt=/^(?:input|select|textarea|keygen)/i;function Ot(e,t,n,i){var r;if(Array.isArray(t))_.each(t,function(t,r){n||St.test(e)?i(e,r):Ot(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==x(t))i(e,t);else for(r in t)Ot(e+"["+r+"]",t[r],n,i)}_.param=function(e,t){var n,i=[],r=function(e,t){var n=y(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!_.isPlainObject(e))_.each(e,function(){r(this.name,this.value)});else for(n in e)Ot(n,e[n],t,r);return i.join("&")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=_.prop(this,"elements");return e?_.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!_(this).is(":disabled")&&Mt.test(this.nodeName)&&!kt.test(e)&&(this.checked||!fe.test(e))}).map(function(e,t){var n=_(this).val();return null==n?null:Array.isArray(n)?_.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var Nt=/%20/g,It=/#.*$/,jt=/([?&])_=[^&]*/,Lt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ht=/^(?:GET|HEAD)$/,Pt=/^\/\//,qt={},Rt={},Ft="*/".concat("*"),zt=i.createElement("a");function Wt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(H)||[];if(y(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Vt(e,t,n,i){var r={},o=e===Rt;function a(l){var s;return r[l]=!0,_.each(e[l]||[],function(e,l){var c=l(t,n,i);return"string"!=typeof c||o||r[c]?o?!(s=c):void 0:(t.dataTypes.unshift(c),a(c),!1)}),s}return a(t.dataTypes[0])||!r["*"]&&a("*")}function Bt(e,t){var n,i,r=_.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&_.extend(!0,e,i),e}zt.href=Tt.href,_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ft,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,_.ajaxSettings),t):Bt(_.ajaxSettings,e)},ajaxPrefilter:Wt(qt),ajaxTransport:Wt(Rt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,o,a,l,s,c,u,p,f,h,d=_.ajaxSetup({},n),y=d.context||d,g=d.context&&(y.nodeType||y.jquery)?_(y):_.event,m=_.Deferred(),v=_.Callbacks("once memory"),x=d.statusCode||{},b={},w={},E="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(u){if(!l)for(l={};t=Lt.exec(a);)l[t[1].toLowerCase()+" "]=(l[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=l[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return u?a:null},setRequestHeader:function(e,t){return null==u&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==u&&(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(u)T.always(e[T.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||E;return r&&r.abort(t),C(0,t),this}};if(m.promise(T),d.url=((t||d.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(H)||[""],null==d.crossDomain){c=i.createElement("a");try{c.href=d.url,c.href=c.href,d.crossDomain=zt.protocol+"//"+zt.host!=c.protocol+"//"+c.host}catch(t){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=_.param(d.data,d.traditional)),Vt(qt,d,n,T),u)return T;for(f in(p=_.event&&d.global)&&0==_.active++&&_.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Ht.test(d.type),o=d.url.replace(It,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(Nt,"+")):(h=d.url.slice(o.length),d.data&&(d.processData||"string"==typeof d.data)&&(o+=(At.test(o)?"&":"?")+d.data,delete d.data),!1===d.cache&&(o=o.replace(jt,"$1"),h=(At.test(o)?"&":"?")+"_="+Ct+++h),d.url=o+h),d.ifModified&&(_.lastModified[o]&&T.setRequestHeader("If-Modified-Since",_.lastModified[o]),_.etag[o]&&T.setRequestHeader("If-None-Match",_.etag[o])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&T.setRequestHeader("Content-Type",d.contentType),T.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Ft+"; q=0.01":""):d.accepts["*"]),d.headers)T.setRequestHeader(f,d.headers[f]);if(d.beforeSend&&(!1===d.beforeSend.call(y,T,d)||u))return T.abort();if(E="abort",v.add(d.complete),T.done(d.success),T.fail(d.error),r=Vt(Rt,d,n,T)){if(T.readyState=1,p&&g.trigger("ajaxSend",[T,d]),u)return T;d.async&&0<d.timeout&&(s=e.setTimeout(function(){T.abort("timeout")},d.timeout));try{u=!1,r.send(b,C)}catch(t){if(u)throw t;C(-1,t)}}else C(-1,"No Transport");function C(t,n,i,l){var c,f,h,b,w,E=n;u||(u=!0,s&&e.clearTimeout(s),r=void 0,a=l||"",T.readyState=0<t?4:0,c=200<=t&&t<300||304===t,i&&(b=function(e,t,n){for(var i,r,o,a,l=e.contents,s=e.dataTypes;"*"===s[0];)s.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in l)if(l[r]&&l[r].test(i)){s.unshift(r);break}if(s[0]in n)o=s[0];else{for(r in n){if(!s[0]||e.converters[r+" "+s[0]]){o=r;break}a||(a=r)}o=o||a}if(o)return o!==s[0]&&s.unshift(o),n[o]}(d,T,i)),b=function(e,t,n,i){var r,o,a,l,s,c={},u=e.dataTypes.slice();if(u[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!s&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=o,o=u.shift())if("*"===o)o=s;else if("*"!==s&&s!==o){if(!(a=c[s+" "+o]||c["* "+o]))for(r in c)if((l=r.split(" "))[1]===o&&(a=c[s+" "+l[0]]||c["* "+l[0]])){!0===a?a=c[r]:!0!==c[r]&&(o=l[0],u.unshift(l[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+s+" to "+o}}}return{state:"success",data:t}}(d,b,T,c),c?(d.ifModified&&((w=T.getResponseHeader("Last-Modified"))&&(_.lastModified[o]=w),(w=T.getResponseHeader("etag"))&&(_.etag[o]=w)),204===t||"HEAD"===d.type?E="nocontent":304===t?E="notmodified":(E=b.state,f=b.data,c=!(h=b.error))):(h=E,!t&&E||(E="error",t<0&&(t=0))),T.status=t,T.statusText=(n||E)+"",c?m.resolveWith(y,[f,E,T]):m.rejectWith(y,[T,E,h]),T.statusCode(x),x=void 0,p&&g.trigger(c?"ajaxSuccess":"ajaxError",[T,d,c?f:h]),v.fireWith(y,[T,E]),p&&(g.trigger("ajaxComplete",[T,d]),--_.active||_.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return _.get(e,t,n,"json")},getScript:function(e,t){return _.get(e,void 0,t,"script")}}),_.each(["get","post"],function(e,t){_[t]=function(e,n,i,r){return y(n)&&(r=r||i,i=n,n=void 0),_.ajax(_.extend({url:e,type:t,dataType:r,data:n,success:i},_.isPlainObject(e)&&e))}}),_._evalUrl=function(e,t){return _.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){_.globalEval(e,t)}})},_.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=_(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return y(e)?this.each(function(t){_(this).wrapInner(e.call(this,t))}):this.each(function(){var t=_(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=y(e);return this.each(function(n){_(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){_(this).replaceWith(this.childNodes)}),this}}),_.expr.pseudos.hidden=function(e){return!_.expr.pseudos.visible(e)},_.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},_.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},$t=_.ajaxSettings.xhr();d.cors=!!$t&&"withCredentials"in $t,d.ajax=$t=!!$t,_.ajaxTransport(function(t){var n,i;if(d.cors||$t&&!t.crossDomain)return{send:function(r,o){var a,l=t.xhr();if(l.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)l[a]=t.xhrFields[a];for(a in t.mimeType&&l.overrideMimeType&&l.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)l.setRequestHeader(a,r[a]);n=function(e){return function(){n&&(n=i=l.onload=l.onerror=l.onabort=l.ontimeout=l.onreadystatechange=null,"abort"===e?l.abort():"error"===e?"number"!=typeof l.status?o(0,"error"):o(l.status,l.statusText):o(Ut[l.status]||l.status,l.statusText,"text"!==(l.responseType||"text")||"string"!=typeof l.responseText?{binary:l.response}:{text:l.responseText},l.getAllResponseHeaders()))}},l.onload=n(),i=l.onerror=l.ontimeout=n("error"),void 0!==l.onabort?l.onabort=i:l.onreadystatechange=function(){4===l.readyState&&e.setTimeout(function(){n&&i()})},n=n("abort");try{l.send(t.hasContent&&t.data||null)}catch(r){if(n)throw r}},abort:function(){n&&n()}}}),_.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return _.globalEval(e),e}}}),_.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),_.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,o){t=_("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),i.head.appendChild(t[0])},abort:function(){n&&n()}}});var Kt,Qt=[],Xt=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||_.expando+"_"+Ct++;return this[e]=!0,e}}),_.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,a,l=!1!==t.jsonp&&(Xt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Xt.test(t.data)&&"data");if(l||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=y(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,l?t[l]=t[l].replace(Xt,"$1"+r):!1!==t.jsonp&&(t.url+=(At.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return a||_.error(r+" was not called"),a[0]},t.dataTypes[0]="json",o=e[r],e[r]=function(){a=arguments},i.always(function(){void 0===o?_(e).removeProp(r):e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,Qt.push(r)),a&&y(o)&&o(a[0]),a=o=void 0}),"script"}),d.createHTMLDocument=((Kt=i.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Kt.childNodes.length),_.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(d.createHTMLDocument?((r=(t=i.implementation.createHTMLDocument("")).createElement("base")).href=i.location.href,t.head.appendChild(r)):t=i),a=!n&&[],(o=k.exec(e))?[t.createElement(o[1])]:(o=_e([e],t,a),a&&a.length&&_(a).remove(),_.merge([],o.childNodes)));var r,o,a},_.fn.load=function(e,t,n){var i,r,o,a=this,l=e.indexOf(" ");return-1<l&&(i=vt(e.slice(l)),e=e.slice(0,l)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),0<a.length&&_.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(i?_("<div>").append(_.parseHTML(e)).find(i):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){_.fn[t]=function(e){return this.on(t,e)}}),_.expr.pseudos.animated=function(e){return _.grep(_.timers,function(t){return e===t.elem}).length},_.offset={setOffset:function(e,t,n){var i,r,o,a,l,s,c=_.css(e,"position"),u=_(e),p={};"static"===c&&(e.style.position="relative"),l=u.offset(),o=_.css(e,"top"),s=_.css(e,"left"),("absolute"===c||"fixed"===c)&&-1<(o+s).indexOf("auto")?(a=(i=u.position()).top,r=i.left):(a=parseFloat(o)||0,r=parseFloat(s)||0),y(t)&&(t=t.call(e,n,_.extend({},l))),null!=t.top&&(p.top=t.top-l.top+a),null!=t.left&&(p.left=t.left-l.left+r),"using"in t?t.using.call(e,p):u.css(p)}},_.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){_.offset.setOffset(this,e,t)});var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===_.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===_.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=_(e).offset()).top+=_.css(e,"borderTopWidth",!0),r.left+=_.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-_.css(i,"marginTop",!0),left:t.left-r.left-_.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===_.css(e,"position");)e=e.offsetParent;return e||re})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;_.fn[e]=function(i){return V(this,function(e,i,r){var o;if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),_.each(["top","left"],function(e,t){_.cssHooks[t]=Be(d.pixelPosition,function(e,n){if(n)return n=Ve(e,t),Fe.test(n)?_(e).position()[t]+"px":n})}),_.each({Height:"height",Width:"width"},function(e,t){_.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){_.fn[i]=function(r,o){var a=arguments.length&&(n||"boolean"!=typeof r),l=n||(!0===r||!0===o?"margin":"border");return V(this,function(t,n,r){var o;return g(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?_.css(t,n,l):_.style(t,n,r,l)},t,a?r:void 0,a)}})}),_.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){_.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}}),_.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),_.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),_.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return i=o.call(arguments,2),(r=function(){return e.apply(t||this,i.concat(o.call(arguments)))}).guid=e.guid=e.guid||_.guid++,r},_.holdReady=function(e){e?_.readyWait++:_.ready(!0)},_.isArray=Array.isArray,_.parseJSON=JSON.parse,_.nodeName=D,_.isFunction=y,_.isWindow=g,_.camelCase=K,_.type=x,_.now=Date.now,_.isNumeric=function(e){var t=_.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var Yt=e.jQuery,Gt=e.$;return _.noConflict=function(t){return e.$===_&&(e.$=Gt),t&&e.jQuery===_&&(e.jQuery=Yt),_},t||(e.jQuery=e.$=_),_}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t((e=e||self).bootstrap={},e.jQuery)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var i,r,o;i=e,o=n[r=t],r in i?Object.defineProperty(i,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t=t&&t.hasOwnProperty("default")?t.default:t;var a="transitionend";var l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var n=t(e).css("transition-duration"),i=t(e).css("transition-delay"),r=parseFloat(n),o=parseFloat(i);return r||o?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){t(e).trigger(a)},supportsTransitionEnd:function(){return Boolean(a)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=t[i],a=o&&l.isElement(o)?"element":(s=o,{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+r+'".')}var s},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"!=typeof e.getRootNode)return e instanceof ShadowRoot?e:e.parentNode?l.findShadowRoot(e.parentNode):null;var t=e.getRootNode();return t instanceof ShadowRoot?t:null},jQueryDetection:function(){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};l.jQueryDetection(),t.fn.emulateTransitionEnd=function(e){var n=this,i=!1;return t(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(n)},e),this},t.event.special[l.TRANSITION_END]={bindType:a,delegateType:a,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var s="alert",c="bs.alert",u="."+c,p=t.fn[s],f={CLOSE:"close"+u,CLOSED:"closed"+u,CLICK_DATA_API:"click"+u+".data-api"},h=function(){function e(e){this._element=e}var n=e.prototype;return n.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},n.dispose=function(){t.removeData(this._element,c),this._element=null},n._getRootElement=function(e){var n=l.getSelectorFromElement(e),i=!1;return n&&(i=document.querySelector(n)),i||t(e).closest(".alert")[0]},n._triggerCloseEvent=function(e){var n=t.Event(f.CLOSE);return t(e).trigger(n),n},n._removeElement=function(e){var n=this;if(t(e).removeClass("show"),t(e).hasClass("fade")){var i=l.getTransitionDurationFromElement(e);t(e).one(l.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(i)}else this._destroyElement(e)},n._destroyElement=function(e){t(e).detach().trigger(f.CLOSED).remove()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data(c);r||(r=new e(this),i.data(c,r)),"close"===n&&r[n](this)})},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),e}();t(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',h._handleDismiss(new h)),t.fn[s]=h._jQueryInterface,t.fn[s].Constructor=h,t.fn[s].noConflict=function(){return t.fn[s]=p,h._jQueryInterface};var d="button",y="bs.button",g="."+y,m=".data-api",v=t.fn[d],x="active",b='[data-toggle^="button"]',_='input:not([type="hidden"])',w=".btn",E={CLICK_DATA_API:"click"+g+m,FOCUS_BLUR_DATA_API:"focus"+g+m+" blur"+g+m,LOAD_DATA_API:"load"+g+m},T=function(){function e(e){this._element=e}var n=e.prototype;return n.toggle=function(){var e=!0,n=!0,i=t(this._element).closest('[data-toggle="buttons"]')[0];if(i){var r=this._element.querySelector(_);if(r){if("radio"===r.type)if(r.checked&&this._element.classList.contains(x))e=!1;else{var o=i.querySelector(".active");o&&t(o).removeClass(x)}else"checkbox"===r.type?"LABEL"===this._element.tagName&&r.checked===this._element.classList.contains(x)&&(e=!1):e=!1;e&&(r.checked=!this._element.classList.contains(x),t(r).trigger("change")),r.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(x)),e&&t(this._element).toggleClass(x))},n.dispose=function(){t.removeData(this._element,y),this._element=null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data(y);i||(i=new e(this),t(this).data(y,i)),"toggle"===n&&i[n]()})},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),e}();t(document).on(E.CLICK_DATA_API,b,function(e){var n=e.target;if(t(n).hasClass("btn")||(n=t(n).closest(w)[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))e.preventDefault();else{var i=n.querySelector(_);if(i&&(i.hasAttribute("disabled")||i.classList.contains("disabled")))return void e.preventDefault();T._jQueryInterface.call(t(n),"toggle")}}).on(E.FOCUS_BLUR_DATA_API,b,function(e){var n=t(e.target).closest(w)[0];t(n).toggleClass("focus",/^focus(in)?$/.test(e.type))}),t(window).on(E.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),t=0,n=e.length;t<n;t++){var i=e[t],r=i.querySelector(_);r.checked||r.hasAttribute("checked")?i.classList.add(x):i.classList.remove(x)}for(var o=0,a=(e=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;o<a;o++){var l=e[o];"true"===l.getAttribute("aria-pressed")?l.classList.add(x):l.classList.remove(x)}}),t.fn[d]=T._jQueryInterface,t.fn[d].Constructor=T,t.fn[d].noConflict=function(){return t.fn[d]=v,T._jQueryInterface};var C="carousel",A="bs.carousel",S="."+A,D=".data-api",k=t.fn[C],M={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},O={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},N="next",I="prev",j={SLIDE:"slide"+S,SLID:"slid"+S,KEYDOWN:"keydown"+S,MOUSEENTER:"mouseenter"+S,MOUSELEAVE:"mouseleave"+S,TOUCHSTART:"touchstart"+S,TOUCHMOVE:"touchmove"+S,TOUCHEND:"touchend"+S,POINTERDOWN:"pointerdown"+S,POINTERUP:"pointerup"+S,DRAG_START:"dragstart"+S,LOAD_DATA_API:"load"+S+D,CLICK_DATA_API:"click"+S+D},L="active",H=".active.carousel-item",P=".carousel-indicators",q={TOUCH:"touch",PEN:"pen"},R=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(P),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=e.prototype;return n.next=function(){this._isSliding||this._slide(N)},n.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(I)},n.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(l.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(e){var n=this;this._activeElement=this._element.querySelector(H);var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(j.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var r=i<e?N:I;this._slide(r,this._items[e])}},n.dispose=function(){t(this._element).off(S),t.removeData(this._element,A),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(e){return e=o({},M,{},e),l.typeCheckConfig(C,e,O),e},n._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;(this.touchDeltaX=0)<t&&this.prev(),t<0&&this.next()}},n._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(j.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&t(this._element).on(j.MOUSEENTER,function(t){return e.pause(t)}).on(j.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&q[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&q[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};t(this._element.querySelectorAll(".carousel-item img")).on(j.DRAG_START,function(e){return e.preventDefault()}),this._pointerEvent?(t(this._element).on(j.POINTERDOWN,function(e){return n(e)}),t(this._element).on(j.POINTERUP,function(e){return i(e)}),this._element.classList.add("pointer-event")):(t(this._element).on(j.TOUCHSTART,function(e){return n(e)}),t(this._element).on(j.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),t(this._element).on(j.TOUCHEND,function(e){return i(e)}))}},n._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},n._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(e)},n._getItemByDirection=function(e,t){var n=e===N,i=e===I,r=this._getItemIndex(t),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return t;var a=(r+(e===I?-1:1))%this._items.length;return-1==a?this._items[this._items.length-1]:this._items[a]},n._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),r=this._getItemIndex(this._element.querySelector(H)),o=t.Event(j.SLIDE,{relatedTarget:e,direction:n,from:r,to:i});return t(this._element).trigger(o),o},n._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));t(n).removeClass(L);var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&t(i).addClass(L)}},n._slide=function(e,n){var i,r,o,a=this,s=this._element.querySelector(H),c=this._getItemIndex(s),u=n||s&&this._getItemByDirection(e,s),p=this._getItemIndex(u),f=Boolean(this._interval);if(o=e===N?(i="carousel-item-left",r="carousel-item-next","left"):(i="carousel-item-right",r="carousel-item-prev","right"),u&&t(u).hasClass(L))this._isSliding=!1;else if(!this._triggerSlideEvent(u,o).isDefaultPrevented()&&s&&u){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(u);var h=t.Event(j.SLID,{relatedTarget:u,direction:o,from:c,to:p});if(t(this._element).hasClass("slide")){t(u).addClass(r),l.reflow(u),t(s).addClass(i),t(u).addClass(i);var d=parseInt(u.getAttribute("data-interval"),10);d?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=d):this._config.interval=this._config.defaultInterval||this._config.interval;var y=l.getTransitionDurationFromElement(s);t(s).one(l.TRANSITION_END,function(){t(u).removeClass(i+" "+r).addClass(L),t(s).removeClass(L+" "+r+" "+i),a._isSliding=!1,setTimeout(function(){return t(a._element).trigger(h)},0)}).emulateTransitionEnd(y)}else t(s).removeClass(L),t(u).addClass(L),this._isSliding=!1,t(this._element).trigger(h);f&&this.cycle()}},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data(A),r=o({},M,{},t(this).data());"object"==typeof n&&(r=o({},r,{},n));var a="string"==typeof n?n:r.slide;if(i||(i=new e(this,r),t(this).data(A,i)),"number"==typeof n)i.to(n);else if("string"==typeof a){if(void 0===i[a])throw new TypeError('No method named "'+a+'"');i[a]()}else r.interval&&r.ride&&(i.pause(),i.cycle())})},e._dataApiClickHandler=function(n){var i=l.getSelectorFromElement(this);if(i){var r=t(i)[0];if(r&&t(r).hasClass("carousel")){var a=o({},t(r).data(),{},t(this).data()),s=this.getAttribute("data-slide-to");s&&(a.interval=!1),e._jQueryInterface.call(t(r),a),s&&t(r).data(A).to(s),n.preventDefault()}}},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return M}}]),e}();t(document).on(j.CLICK_DATA_API,"[data-slide], [data-slide-to]",R._dataApiClickHandler),t(window).on(j.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=e.length;n<i;n++){var r=t(e[n]);R._jQueryInterface.call(r,r.data())}}),t.fn[C]=R._jQueryInterface,t.fn[C].Constructor=R,t.fn[C].noConflict=function(){return t.fn[C]=k,R._jQueryInterface};var F="collapse",z="bs.collapse",W="."+z,V=t.fn[F],B={toggle:!0,parent:""},U={toggle:"boolean",parent:"(string|element)"},$={SHOW:"show"+W,SHOWN:"shown"+W,HIDE:"hide"+W,HIDDEN:"hidden"+W,CLICK_DATA_API:"click"+W+".data-api"},K="show",Q="collapse",X="collapsing",Y="collapsed",G='[data-toggle="collapse"]',J=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(G)),i=0,r=n.length;i<r;i++){var o=n[i],a=l.getSelectorFromElement(o),s=[].slice.call(document.querySelectorAll(a)).filter(function(t){return t===e});null!==a&&0<s.length&&(this._selector=a,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=e.prototype;return n.toggle=function(){t(this._element).hasClass(K)?this.hide():this.show()},n.show=function(){var n,i,r=this;if(!(this._isTransitioning||t(this._element).hasClass(K)||(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e){return"string"==typeof r._config.parent?e.getAttribute("data-parent")===r._config.parent:e.classList.contains(Q)})).length&&(n=null),n&&(i=t(n).not(this._selector).data(z))&&i._isTransitioning))){var o=t.Event($.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){n&&(e._jQueryInterface.call(t(n).not(this._selector),"hide"),i||t(n).data(z,null));var a=this._getDimension();t(this._element).removeClass(Q).addClass(X),this._element.style[a]=0,this._triggerArray.length&&t(this._triggerArray).removeClass(Y).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(a[0].toUpperCase()+a.slice(1)),c=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,function(){t(r._element).removeClass(X).addClass(Q).addClass(K),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger($.SHOWN)}).emulateTransitionEnd(c),this._element.style[a]=this._element[s]+"px"}}},n.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(K)){var n=t.Event($.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",l.reflow(this._element),t(this._element).addClass(X).removeClass(Q).removeClass(K);var r=this._triggerArray.length;if(0<r)for(var o=0;o<r;o++){var a=this._triggerArray[o],s=l.getSelectorFromElement(a);null!==s&&(t([].slice.call(document.querySelectorAll(s))).hasClass(K)||t(a).addClass(Y).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[i]="";var c=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,function(){e.setTransitioning(!1),t(e._element).removeClass(X).addClass(Q).trigger($.HIDDEN)}).emulateTransitionEnd(c)}}},n.setTransitioning=function(e){this._isTransitioning=e},n.dispose=function(){t.removeData(this._element,z),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(e){return(e=o({},B,{},e)).toggle=Boolean(e.toggle),l.typeCheckConfig(F,e,U),e},n._getDimension=function(){return t(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;l.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(n.querySelectorAll(r));return t(o).each(function(t,n){i._addAriaAndCollapsedClass(e._getTargetFromElement(n),[n])}),n},n._addAriaAndCollapsedClass=function(e,n){var i=t(e).hasClass(K);n.length&&t(n).toggleClass(Y,!i).attr("aria-expanded",i)},e._getTargetFromElement=function(e){var t=l.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data(z),a=o({},B,{},i.data(),{},"object"==typeof n&&n?n:{});if(!r&&a.toggle&&/show|hide/.test(n)&&(a.toggle=!1),r||(r=new e(this,a),i.data(z,r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n]()}})},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return B}}]),e}();t(document).on($.CLICK_DATA_API,G,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=t(this),i=l.getSelectorFromElement(this),r=[].slice.call(document.querySelectorAll(i));t(r).each(function(){var e=t(this),i=e.data(z)?"toggle":n.data();J._jQueryInterface.call(e,i)})}),t.fn[F]=J._jQueryInterface,t.fn[F].Constructor=J,t.fn[F].noConflict=function(){return t.fn[F]=V,J._jQueryInterface};var Z="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,ee=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(Z&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),te=Z&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}};function ne(e){return e&&"[object Function]"==={}.toString.call(e)}function ie(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function re(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function oe(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=ie(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?e:oe(re(e))}function ae(e){return e&&e.referenceNode?e.referenceNode:e}var le=Z&&!(!window.MSInputMethodContext||!document.documentMode),se=Z&&/MSIE 10/.test(navigator.userAgent);function ce(e){return 11===e?le:10===e?se:le||se}function ue(e){if(!e)return document.documentElement;for(var t=ce(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===ie(n,"position")?ue(n):n:e?e.ownerDocument.documentElement:document.documentElement}function pe(e){return null!==e.parentNode?pe(e.parentNode):e}function fe(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var a=o.commonAncestorContainer;if(e!==a&&t!==a||i.contains(r))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||ue(e.firstElementChild)===e)}(a)?a:ue(a);var l=pe(e);return l.host?fe(l.host,t):fe(e,pe(t).host)}function he(e,t){var n="top"===(1<arguments.length&&void 0!==t?t:"top")?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"!==i&&"HTML"!==i)return e[n];var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[n]}function de(e,t){var n="x"===t?"Left":"Top",i="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function ye(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],ce(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function ge(e){var t=e.body,n=e.documentElement,i=ce(10)&&getComputedStyle(n);return{height:ye("Height",t,n,i),width:ye("Width",t,n,i)}}function me(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function be(e){return xe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function _e(e){var t={};try{if(ce(10)){t=e.getBoundingClientRect();var n=he(e,"top"),i=he(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?ge(e.ownerDocument):{},a=o.width||e.clientWidth||r.width,l=o.height||e.clientHeight||r.height,s=e.offsetWidth-a,c=e.offsetHeight-l;if(s||c){var u=ie(e);s-=de(u,"x"),c-=de(u,"y"),r.width-=s,r.height-=c}return be(r)}function we(e,t,n){var i=2<arguments.length&&void 0!==n&&n,r=ce(10),o="HTML"===t.nodeName,a=_e(e),l=_e(t),s=oe(e),c=ie(t),u=parseFloat(c.borderTopWidth,10),p=parseFloat(c.borderLeftWidth,10);i&&o&&(l.top=Math.max(l.top,0),l.left=Math.max(l.left,0));var f=be({top:a.top-l.top-u,left:a.left-l.left-p,width:a.width,height:a.height});if(f.marginTop=0,f.marginLeft=0,!r&&o){var h=parseFloat(c.marginTop,10),d=parseFloat(c.marginLeft,10);f.top-=u-h,f.bottom-=u-h,f.left-=p-d,f.right-=p-d,f.marginTop=h,f.marginLeft=d}return(r&&!i?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(f=function(e,t,n){var i=2<arguments.length&&!1,r=he(t,"top"),o=he(t,"left"),a=i?-1:1;return e.top+=r*a,e.bottom+=r*a,e.left+=o*a,e.right+=o*a,e}(f,t)),f}function Ee(e){if(!e||!e.parentElement||ce())return document.documentElement;for(var t=e.parentElement;t&&"none"===ie(t,"transform");)t=t.parentElement;return t||document.documentElement}function Te(e,t,n,i,r){var o=4<arguments.length&&void 0!==r&&r,a={top:0,left:0},l=o?Ee(e):fe(e,ae(t));if("viewport"===i)a=function(e,t){var n=1<arguments.length&&void 0!==t&&t,i=e.ownerDocument.documentElement,r=we(e,i),o=Math.max(i.clientWidth,window.innerWidth||0),a=Math.max(i.clientHeight,window.innerHeight||0),l=n?0:he(i),s=n?0:he(i,"left");return be({top:l-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:o,height:a})}(l,o);else{var s=void 0;"scrollParent"===i?"BODY"===(s=oe(re(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===i?e.ownerDocument.documentElement:i;var c=we(s,l,o);if("HTML"!==s.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===ie(t,"position"))return!0;var i=re(t);return!!i&&e(i)}(l))a=c;else{var u=ge(e.ownerDocument),p=u.height,f=u.width;a.top+=c.top-c.marginTop,a.bottom=p+c.top,a.left+=c.left-c.marginLeft,a.right=f+c.left}}var h="number"==typeof(n=n||0);return a.left+=h?n:n.left||0,a.top+=h?n:n.top||0,a.right-=h?n:n.right||0,a.bottom-=h?n:n.bottom||0,a}function Ce(e,t,n,i,r,o){var a=5<arguments.length&&void 0!==o?o:0;if(-1===e.indexOf("auto"))return e;var l=Te(n,i,a,r),s={top:{width:l.width,height:t.top-l.top},right:{width:l.right-t.right,height:l.height},bottom:{width:l.width,height:l.bottom-t.bottom},left:{width:t.left-l.left,height:l.height}},c=Object.keys(s).map(function(e){return xe({key:e},s[e],{area:function(e){return e.width*e.height}(s[e])})}).sort(function(e,t){return t.area-e.area}),u=c.filter(function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight}),p=0<u.length?u[0].key:c[0].key,f=e.split("-")[1];return p+(f?"-"+f:"")}function Ae(e,t,n,i){var r=3<arguments.length&&void 0!==i?i:null;return we(n,r?Ee(t):fe(t,ae(n)),r)}function Se(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function De(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function ke(e,t,n){n=n.split("-")[0];var i=Se(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",l=o?"left":"top",s=o?"height":"width",c=o?"width":"height";return r[a]=t[a]+t[s]/2-i[s]/2,r[l]=n===l?t[l]-i[c]:t[De(l)],r}function Me(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function Oe(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=Me(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&ne(n)&&(t.offsets.popper=be(t.offsets.popper),t.offsets.reference=be(t.offsets.reference),t=n(t,e))}),t}function Ne(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function Ie(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==document.body.style[o])return o}return null}function je(e){var t=e.ownerDocument;return t?t.defaultView:window}function Le(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function He(e,t){Object.keys(t).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Le(t[n])&&(i="px"),e.style[n]=t[n]+i})}var Pe=Z&&/Firefox/i.test(navigator.userAgent);function qe(e,t,n){var i=Me(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var Re=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Fe=Re.slice(3);function ze(e,t){var n=1<arguments.length&&void 0!==t&&t,i=Fe.indexOf(e),r=Fe.slice(i+1).concat(Fe.slice(0,i));return n?r.reverse():r}var We={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets,o=r.reference,a=r.popper,l=-1!==["bottom","top"].indexOf(n),s=l?"left":"top",c=l?"width":"height",u={start:ve({},s,o[s]),end:ve({},s,o[s]+o[c]-a[c])};e.offsets.popper=xe({},a,u[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,i=t.offset,r=e.placement,o=e.offsets,a=o.popper,l=o.reference,s=r.split("-")[0];return n=Le(+i)?[+i,0]:function(e,t,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),l=a.indexOf(Me(a,function(e){return-1!==e.search(/,|\s/)}));a[l]&&-1===a[l].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,c=-1!==l?[a.slice(0,l).concat([a[l].split(s)[0]]),[a[l].split(s)[1]].concat(a.slice(l+1))]:[a];return(c=c.map(function(e,i){var r=(1===i?!o:o)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],a=r[2];if(!o)return e;if(0!==a.indexOf("%"))return"vh"!==a&&"vw"!==a?o:("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;var l=void 0;switch(a){case"%p":l=n;break;case"%":case"%r":default:l=i}return be(l)[t]/100*o}(e,r,t,n)})})).forEach(function(e,t){e.forEach(function(n,i){Le(n)&&(r[t]+=n*("-"===e[i-1]?-1:1))})}),r}(i,a,l,s),"left"===s?(a.top+=n[0],a.left-=n[1]):"right"===s?(a.top+=n[0],a.left+=n[1]):"top"===s?(a.left+=n[0],a.top-=n[1]):"bottom"===s&&(a.left+=n[0],a.top+=n[1]),e.popper=a,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||ue(e.instance.popper);e.instance.reference===n&&(n=ue(n));var i=Ie("transform"),r=e.instance.popper.style,o=r.top,a=r.left,l=r[i];r.top="",r.left="",r[i]="";var s=Te(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=o,r.left=a,r[i]=l,t.boundaries=s;var c=t.priority,u=e.offsets.popper,p={primary:function(e){var n=u[e];return u[e]<s[e]&&!t.escapeWithReference&&(n=Math.max(u[e],s[e])),ve({},e,n)},secondary:function(e){var n="right"===e?"left":"top",i=u[n];return u[e]>s[e]&&!t.escapeWithReference&&(i=Math.min(u[n],s[e]-("right"===e?u.width:u.height))),ve({},n,i)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=xe({},u,p[t](e))}),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],o=Math.floor,a=-1!==["top","bottom"].indexOf(r),l=a?"right":"bottom",s=a?"left":"top",c=a?"width":"height";return n[l]<o(i[s])&&(e.offsets.popper[s]=o(i[s])-n[c]),n[s]>o(i[l])&&(e.offsets.popper[s]=o(i[l])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!qe(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],o=e.offsets,a=o.popper,l=o.reference,s=-1!==["left","right"].indexOf(r),c=s?"height":"width",u=s?"Top":"Left",p=u.toLowerCase(),f=s?"left":"top",h=s?"bottom":"right",d=Se(i)[c];l[h]-d<a[p]&&(e.offsets.popper[p]-=a[p]-(l[h]-d)),l[p]+d>a[h]&&(e.offsets.popper[p]+=l[p]+d-a[h]),e.offsets.popper=be(e.offsets.popper);var y=l[p]+l[c]/2-d/2,g=ie(e.instance.popper),m=parseFloat(g["margin"+u],10),v=parseFloat(g["border"+u+"Width"],10),x=y-e.offsets.popper[p]-m-v;return x=Math.max(Math.min(a[c]-d,x),0),e.arrowElement=i,e.offsets.arrow=(ve(n={},p,Math.round(x)),ve(n,f,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(Ne(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=Te(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],r=De(i),o=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case"flip":a=[i,r];break;case"clockwise":a=ze(i);break;case"counterclockwise":a=ze(i,!0);break;default:a=t.behavior}return a.forEach(function(l,s){if(i!==l||a.length===s+1)return e;i=e.placement.split("-")[0],r=De(i);var c=e.offsets.popper,u=e.offsets.reference,p=Math.floor,f="left"===i&&p(c.right)>p(u.left)||"right"===i&&p(c.left)<p(u.right)||"top"===i&&p(c.bottom)>p(u.top)||"bottom"===i&&p(c.top)<p(u.bottom),h=p(c.left)<p(n.left),d=p(c.right)>p(n.right),y=p(c.top)<p(n.top),g=p(c.bottom)>p(n.bottom),m="left"===i&&h||"right"===i&&d||"top"===i&&y||"bottom"===i&&g,v=-1!==["top","bottom"].indexOf(i),x=!!t.flipVariations&&(v&&"start"===o&&h||v&&"end"===o&&d||!v&&"start"===o&&y||!v&&"end"===o&&g),b=!!t.flipVariationsByContent&&(v&&"start"===o&&d||v&&"end"===o&&h||!v&&"start"===o&&g||!v&&"end"===o&&y),_=x||b;(f||m||_)&&(e.flipped=!0,(f||m)&&(i=a[s+1]),_&&(o="end"===o?"start":"start"===o?"end":o),e.placement=i+(o?"-"+o:""),e.offsets.popper=xe({},e.offsets.popper,ke(e.instance.popper,e.offsets.reference,e.placement)),e=Oe(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,o=i.reference,a=-1!==["left","right"].indexOf(n),l=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=o[n]-(l?r[a?"width":"height"]:0),e.placement=De(t),e.offsets.popper=be(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!qe(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=Me(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,r=e.offsets.popper,o=Me(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,l,s=void 0!==o?o:t.gpuAcceleration,c=ue(e.instance.popper),u=_e(c),p={position:r.position},f=function(e,t){function n(e){return e}var i=e.offsets,r=i.popper,o=i.reference,a=Math.round,l=Math.floor,s=a(o.width),c=a(r.width),u=-1!==["left","right"].indexOf(e.placement),p=-1!==e.placement.indexOf("-"),f=t?u||p||s%2==c%2?a:l:n,h=t?a:n;return{left:f(s%2==1&&c%2==1&&!p&&t?r.left-1:r.left),top:h(r.top),bottom:h(r.bottom),right:f(r.right)}}(e,window.devicePixelRatio<2||!Pe),h="bottom"===n?"top":"bottom",d="right"===i?"left":"right",y=Ie("transform");if(l="bottom"==h?"HTML"===c.nodeName?-c.clientHeight+f.bottom:-u.height+f.bottom:f.top,a="right"==d?"HTML"===c.nodeName?-c.clientWidth+f.right:-u.width+f.right:f.left,s&&y)p[y]="translate3d("+a+"px, "+l+"px, 0)",p[h]=0,p[d]=0,p.willChange="transform";else{var g="bottom"==h?-1:1,m="right"==d?-1:1;p[h]=l*g,p[d]=a*m,p.willChange=h+", "+d}var v={"x-placement":e.placement};return e.attributes=xe({},v,e.attributes),e.styles=xe({},p,e.styles),e.arrowStyles=xe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return He(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&He(e.arrowElement,e.arrowStyles),e;var t,n},onLoad:function(e,t,n,i,r){var o=Ae(r,t,e,n.positionFixed),a=Ce(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),He(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Ve=(function(e,t,n){t&&me(e.prototype,t),n&&me(e,n)}(Be,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=Ae(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=Ce(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=ke(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=Oe(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,Ne(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Ie("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=function(e,t,n,i){n.updateBound=i,je(e).addEventListener("resize",n.updateBound,{passive:!0});var r=oe(e);return function e(t,n,i,r){var o="BODY"===t.nodeName,a=o?t.ownerDocument.defaultView:t;a.addEventListener(n,i,{passive:!0}),o||e(oe(a.parentNode),n,i,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return function(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,je(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}.call(this)}}]),Be);function Be(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof Be))throw new TypeError("Cannot call a class as a function")}(this),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=te(this.update.bind(this)),this.options=xe({},Be.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(xe({},Be.Defaults.modifiers,i.modifiers)).forEach(function(e){n.options.modifiers[e]=xe({},Be.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return xe({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&ne(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}Ve.Utils=("undefined"!=typeof window?window:global).PopperUtils,Ve.placements=Re,Ve.Defaults=We;var Ue="dropdown",$e="bs.dropdown",Ke="."+$e,Qe=".data-api",Xe=t.fn[Ue],Ye=new RegExp("38|40|27"),Ge={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:"show"+Ke,SHOWN:"shown"+Ke,CLICK:"click"+Ke,CLICK_DATA_API:"click"+Ke+Qe,KEYDOWN_DATA_API:"keydown"+Ke+Qe,KEYUP_DATA_API:"keyup"+Ke+Qe},Je="disabled",Ze="show",et="dropdown-menu-right",tt='[data-toggle="dropdown"]',nt=".dropdown-menu",it={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},rt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ot=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var n=e.prototype;return n.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(Je)){var n=t(this._menu).hasClass(Ze);e._clearMenus(),n||this.show(!0)}},n.show=function(n){if(void 0===n&&(n=!1),!(this._element.disabled||t(this._element).hasClass(Je)||t(this._menu).hasClass(Ze))){var i={relatedTarget:this._element},r=t.Event(Ge.SHOW,i),o=e._getParentFromElement(this._element);if(t(o).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar&&n){if(void 0===Ve)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=o:l.isElement(this._config.reference)&&(a=this._config.reference,void 0!==this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&t(o).addClass("position-static"),this._popper=new Ve(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(o).closest(".navbar-nav").length&&t(document.body).children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(Ze),t(o).toggleClass(Ze).trigger(t.Event(Ge.SHOWN,i))}}},n.hide=function(){if(!this._element.disabled&&!t(this._element).hasClass(Je)&&t(this._menu).hasClass(Ze)){var n={relatedTarget:this._element},i=t.Event(Ge.HIDE,n),r=e._getParentFromElement(this._element);t(r).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),t(this._menu).toggleClass(Ze),t(r).toggleClass(Ze).trigger(t.Event(Ge.HIDDEN,n)))}},n.dispose=function(){t.removeData(this._element,$e),t(this._element).off(Ke),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},n.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},n._addEventListeners=function(){var e=this;t(this._element).on(Ge.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},n._getConfig=function(e){return e=o({},this.constructor.Default,{},t(this._element).data(),{},e),l.typeCheckConfig(Ue,e,this.constructor.DefaultType),e},n._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(nt))}return this._menu},n._getPlacement=function(){var e=t(this._element.parentNode),n="bottom-start";return e.hasClass("dropup")?(n="top-start",t(this._menu).hasClass(et)&&(n="top-end")):e.hasClass("dropright")?n="right-start":e.hasClass("dropleft")?n="left-start":t(this._menu).hasClass(et)&&(n="bottom-end"),n},n._detectNavbar=function(){return 0<t(this._element).closest(".navbar").length},n._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=o({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},n._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),o({},e,{},this._config.popperConfig)},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data($e);if(i||(i=new e(this,"object"==typeof n?n:null),t(this).data($e,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},e._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll(tt)),r=0,o=i.length;r<o;r++){var a=e._getParentFromElement(i[r]),l=t(i[r]).data($e),s={relatedTarget:i[r]};if(n&&"click"===n.type&&(s.clickEvent=n),l){var c=l._menu;if(t(a).hasClass(Ze)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&t.contains(a,n.target))){var u=t.Event(Ge.HIDE,s);t(a).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t(document.body).children().off("mouseover",null,t.noop),i[r].setAttribute("aria-expanded","false"),l._popper&&l._popper.destroy(),t(c).removeClass(Ze),t(a).removeClass(Ze).trigger(t.Event(Ge.HIDDEN,s)))}}}},e._getParentFromElement=function(e){var t,n=l.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},e._dataApiKeydownHandler=function(n){if((/input|textarea/i.test(n.target.tagName)?!(32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||t(n.target).closest(nt).length)):Ye.test(n.which))&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!t(this).hasClass(Je))){var i=e._getParentFromElement(this),r=t(i).hasClass(Ze);if(r||27!==n.which)if(r&&(!r||27!==n.which&&32!==n.which)){var o=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e){return t(e).is(":visible")});if(0!==o.length){var a=o.indexOf(n.target);38===n.which&&0<a&&a--,40===n.which&&a<o.length-1&&a++,a<0&&(a=0),o[a].focus()}}else{if(27===n.which){var l=i.querySelector(tt);t(l).trigger("focus")}t(this).trigger("click")}}},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return it}},{key:"DefaultType",get:function(){return rt}}]),e}();t(document).on(Ge.KEYDOWN_DATA_API,tt,ot._dataApiKeydownHandler).on(Ge.KEYDOWN_DATA_API,nt,ot._dataApiKeydownHandler).on(Ge.CLICK_DATA_API+" "+Ge.KEYUP_DATA_API,ot._clearMenus).on(Ge.CLICK_DATA_API,tt,function(e){e.preventDefault(),e.stopPropagation(),ot._jQueryInterface.call(t(this),"toggle")}).on(Ge.CLICK_DATA_API,".dropdown form",function(e){e.stopPropagation()}),t.fn[Ue]=ot._jQueryInterface,t.fn[Ue].Constructor=ot,t.fn[Ue].noConflict=function(){return t.fn[Ue]=Xe,ot._jQueryInterface};var at="modal",lt="bs.modal",st="."+lt,ct=t.fn[at],ut={backdrop:!0,keyboard:!0,focus:!0,show:!0},pt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ft={HIDE:"hide"+st,HIDE_PREVENTED:"hidePrevented"+st,HIDDEN:"hidden"+st,SHOW:"show"+st,SHOWN:"shown"+st,FOCUSIN:"focusin"+st,RESIZE:"resize"+st,CLICK_DISMISS:"click.dismiss"+st,KEYDOWN_DISMISS:"keydown.dismiss"+st,MOUSEUP_DISMISS:"mouseup.dismiss"+st,MOUSEDOWN_DISMISS:"mousedown.dismiss"+st,CLICK_DATA_API:"click"+st+".data-api"},ht="modal-open",dt="fade",yt="show",gt="modal-static",mt=".modal-dialog",vt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",xt=".sticky-top",bt=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(mt),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=e.prototype;return n.toggle=function(e){return this._isShown?this.hide():this.show(e)},n.show=function(e){var n=this;if(!this._isShown&&!this._isTransitioning){t(this._element).hasClass(dt)&&(this._isTransitioning=!0);var i=t.Event(ft.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(ft.CLICK_DISMISS,'[data-dismiss="modal"]',function(e){return n.hide(e)}),t(this._dialog).on(ft.MOUSEDOWN_DISMISS,function(){t(n._element).one(ft.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},n.hide=function(e){var n=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var i=t.Event(ft.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=t(this._element).hasClass(dt);if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(ft.FOCUSIN),t(this._element).removeClass(yt),t(this._element).off(ft.CLICK_DISMISS),t(this._dialog).off(ft.MOUSEDOWN_DISMISS),r){var o=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,function(e){return n._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return t(e).off(st)}),t(document).off(ft.FOCUSIN),t.removeData(this._element,lt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(e){return e=o({},ut,{},e),l.typeCheckConfig(at,e,pt),e},n._triggerBackdropTransition=function(){var e=this;if("static"===this._config.backdrop){var n=t.Event(ft.HIDE_PREVENTED);if(t(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add(gt);var i=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,function(){e._element.classList.remove(gt)}).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(e){var n=this,i=t(this._element).hasClass(dt),r=this._dialog?this._dialog.querySelector(".modal-body"):null;function o(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(a)}this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),t(this._dialog).hasClass("modal-dialog-scrollable")&&r?r.scrollTop=0:this._element.scrollTop=0,i&&l.reflow(this._element),t(this._element).addClass(yt),this._config.focus&&this._enforceFocus();var a=t.Event(ft.SHOWN,{relatedTarget:e});if(i){var s=l.getTransitionDurationFromElement(this._dialog);t(this._dialog).one(l.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},n._enforceFocus=function(){var e=this;t(document).off(ft.FOCUSIN).on(ft.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},n._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(ft.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||t(this._element).off(ft.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var e=this;this._isShown?t(window).on(ft.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(ft.RESIZE)},n._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(ht),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(ft.HIDDEN)})},n._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(dt)?dt:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),t(this._backdrop).appendTo(document.body),t(this._element).on(ft.CLICK_DISMISS,function(e){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:e.target===e.currentTarget&&n._triggerBackdropTransition()}),i&&l.reflow(this._backdrop),t(this._backdrop).addClass(yt),!e)return;if(!i)return void e();var r=l.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(l.TRANSITION_END,e).emulateTransitionEnd(r)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(yt);var o=function(){n._removeBackdrop(),e&&e()};if(t(this._element).hasClass(dt)){var a=l.getTransitionDurationFromElement(this._backdrop);t(this._backdrop).one(l.TRANSITION_END,o).emulateTransitionEnd(a)}else o()}else e&&e()},n._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(vt)),i=[].slice.call(document.querySelectorAll(xt));t(n).each(function(n,i){var r=i.style.paddingRight,o=t(i).css("padding-right");t(i).data("padding-right",r).css("padding-right",parseFloat(o)+e._scrollbarWidth+"px")}),t(i).each(function(n,i){var r=i.style.marginRight,o=t(i).css("margin-right");t(i).data("margin-right",r).css("margin-right",parseFloat(o)-e._scrollbarWidth+"px")});var r=document.body.style.paddingRight,o=t(document.body).css("padding-right");t(document.body).data("padding-right",r).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}t(document.body).addClass(ht)},n._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(vt));t(e).each(function(e,n){var i=t(n).data("padding-right");t(n).removeData("padding-right"),n.style.paddingRight=i||""});var n=[].slice.call(document.querySelectorAll(""+xt));t(n).each(function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")});var i=t(document.body).data("padding-right");t(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(n,i){return this.each(function(){var r=t(this).data(lt),a=o({},ut,{},t(this).data(),{},"object"==typeof n&&n?n:{});if(r||(r=new e(this,a),t(this).data(lt,r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n](i)}else a.show&&r.show(i)})},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ut}}]),e}();t(document).on(ft.CLICK_DATA_API,'[data-toggle="modal"]',function(e){var n,i=this,r=l.getSelectorFromElement(this);r&&(n=document.querySelector(r));var a=t(n).data(lt)?"toggle":o({},t(n).data(),{},t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var s=t(n).one(ft.SHOW,function(e){e.isDefaultPrevented()||s.one(ft.HIDDEN,function(){t(i).is(":visible")&&i.focus()})});bt._jQueryInterface.call(t(n),a,this)}),t.fn[at]=bt._jQueryInterface,t.fn[at].Constructor=bt,t.fn[at].noConflict=function(){return t.fn[at]=ct,bt._jQueryInterface};var _t=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],wt=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,Et=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function Tt(e,t,n){if(0===e.length)return e;if(n&&"function"==typeof n)return n(e);for(var i=(new window.DOMParser).parseFromString(e,"text/html"),r=Object.keys(t),o=[].slice.call(i.body.querySelectorAll("*")),a=function(e){var n=o[e],i=n.nodeName.toLowerCase();if(-1===r.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var a=[].slice.call(n.attributes),l=[].concat(t["*"]||[],t[i]||[]);a.forEach(function(e){!function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===_t.indexOf(n)||Boolean(e.nodeValue.match(wt)||e.nodeValue.match(Et));for(var i=t.filter(function(e){return e instanceof RegExp}),r=0,o=i.length;r<o;r++)if(n.match(i[r]))return!0;return!1}(e,l)&&n.removeAttribute(e.nodeName)})},l=0,s=o.length;l<s;l++)a(l);return i.body.innerHTML}var Ct="tooltip",At="bs.tooltip",St="."+At,Dt=t.fn[Ct],kt="bs-tooltip",Mt=new RegExp("(^|\\s)"+kt+"\\S+","g"),Ot=["sanitize","whiteList","sanitizeFn"],Nt={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},It={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},jt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Lt="show",Ht={HIDE:"hide"+St,HIDDEN:"hidden"+St,SHOW:"show"+St,SHOWN:"shown"+St,INSERTED:"inserted"+St,CLICK:"click"+St,FOCUSIN:"focusin"+St,FOCUSOUT:"focusout"+St,MOUSEENTER:"mouseenter"+St,MOUSELEAVE:"mouseleave"+St},Pt="fade",qt="show",Rt="hover",Ft="focus",zt=function(){function e(e,t){if(void 0===Ve)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var n=e.prototype;return n.enable=function(){this._isEnabled=!0},n.disable=function(){this._isEnabled=!1},n.toggleEnabled=function(){this._isEnabled=!this._isEnabled},n.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(qt))return void this._leave(null,this);this._enter(null,this)}},n.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},n.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(n);var i=l.findShadowRoot(this.element),r=t.contains(null!==i?i:this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!r)return;var o=this.getTipElement(),a=l.getUID(this.constructor.NAME);o.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&t(o).addClass(Pt);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,c=this._getAttachment(s);this.addAttachmentClass(c);var u=this._getContainer();t(o).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(o).appendTo(u),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Ve(this.element,o,this._getPopperConfig(c)),t(o).addClass(qt),"ontouchstart"in document.documentElement&&t(document.body).children().on("mouseover",null,t.noop);var p=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),"out"===n&&e._leave(null,e)};if(t(this.tip).hasClass(Pt)){var f=l.getTransitionDurationFromElement(this.tip);t(this.tip).one(l.TRANSITION_END,p).emulateTransitionEnd(f)}else p()}},n.hide=function(e){function n(){i._hoverState!==Lt&&r.parentNode&&r.parentNode.removeChild(r),i._cleanTipClass(),i.element.removeAttribute("aria-describedby"),t(i.element).trigger(i.constructor.Event.HIDDEN),null!==i._popper&&i._popper.destroy(),e&&e()}var i=this,r=this.getTipElement(),o=t.Event(this.constructor.Event.HIDE);if(t(this.element).trigger(o),!o.isDefaultPrevented()){if(t(r).removeClass(qt),"ontouchstart"in document.documentElement&&t(document.body).children().off("mouseover",null,t.noop),this._activeTrigger.click=!1,this._activeTrigger[Ft]=!1,this._activeTrigger[Rt]=!1,t(this.tip).hasClass(Pt)){var a=l.getTransitionDurationFromElement(r);t(r).one(l.TRANSITION_END,n).emulateTransitionEnd(a)}else n();this._hoverState=""}},n.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},n.isWithContent=function(){return Boolean(this.getTitle())},n.addAttachmentClass=function(e){t(this.getTipElement()).addClass(kt+"-"+e)},n.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},n.setContent=function(){var e=this.getTipElement();this.setElementContent(t(e.querySelectorAll(".tooltip-inner")),this.getTitle()),t(e).removeClass(Pt+" "+qt)},n.setElementContent=function(e,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=Tt(n,this.config.whiteList,this.config.sanitizeFn)),e.html(n)):e.text(n):this.config.html?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text())},n.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},n._getPopperConfig=function(e){var t=this;return o({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},{},this.config.popperConfig)},n._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=o({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},n._getContainer=function(){return!1===this.config.container?document.body:l.isElement(this.config.container)?t(this.config.container):t(document).find(this.config.container)},n._getAttachment=function(e){return It[e.toUpperCase()]},n._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if("manual"!==n){var i=n===Rt?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,r=n===Rt?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(r,e.config.selector,function(t){return e._leave(t)})}}),this._hideModalHandler=function(){e.element&&e.hide()},t(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},n._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==e||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},n._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?Ft:Rt]=!0),t(n.getTipElement()).hasClass(qt)||n._hoverState===Lt?n._hoverState=Lt:(clearTimeout(n._timeout),n._hoverState=Lt,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===Lt&&n.show()},n.config.delay.show):n.show())},n._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?Ft:Rt]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){"out"===n._hoverState&&n.hide()},n.config.delay.hide):n.hide())},n._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},n._getConfig=function(e){var n=t(this.element).data();return Object.keys(n).forEach(function(e){-1!==Ot.indexOf(e)&&delete n[e]}),"number"==typeof(e=o({},this.constructor.Default,{},n,{},"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),l.typeCheckConfig(Ct,e,this.constructor.DefaultType),e.sanitize&&(e.template=Tt(e.template,e.whiteList,e.sanitizeFn)),e},n._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},n._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(Mt);null!==n&&n.length&&e.removeClass(n.join(""))},n._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},n._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(Pt),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data(At),r="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new e(this,r),t(this).data(At,i)),"string"==typeof n)){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return jt}},{key:"NAME",get:function(){return Ct}},{key:"DATA_KEY",get:function(){return At}},{key:"Event",get:function(){return Ht}},{key:"EVENT_KEY",get:function(){return St}},{key:"DefaultType",get:function(){return Nt}}]),e}();t.fn[Ct]=zt._jQueryInterface,t.fn[Ct].Constructor=zt,t.fn[Ct].noConflict=function(){return t.fn[Ct]=Dt,zt._jQueryInterface};var Wt="popover",Vt="bs.popover",Bt="."+Vt,Ut=t.fn[Wt],$t="bs-popover",Kt=new RegExp("(^|\\s)"+$t+"\\S+","g"),Qt=o({},zt.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Xt=o({},zt.DefaultType,{content:"(string|element|function)"}),Yt={HIDE:"hide"+Bt,HIDDEN:"hidden"+Bt,SHOW:"show"+Bt,SHOWN:"shown"+Bt,INSERTED:"inserted"+Bt,CLICK:"click"+Bt,FOCUSIN:"focusin"+Bt,FOCUSOUT:"focusout"+Bt,MOUSEENTER:"mouseenter"+Bt,MOUSELEAVE:"mouseleave"+Bt},Gt=function(e){function n(){return e.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(n,e);var r=n.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(e){t(this.getTipElement()).addClass($t+"-"+e)},r.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},r.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(".popover-body"),n),e.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(Kt);null!==n&&0<n.length&&e.removeClass(n.join(""))},n._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(Vt),r="object"==typeof e?e:null;if((i||!/dispose|hide/.test(e))&&(i||(i=new n(this,r),t(this).data(Vt,i)),"string"==typeof e)){if(void 0===i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Qt}},{key:"NAME",get:function(){return Wt}},{key:"DATA_KEY",get:function(){return Vt}},{key:"Event",get:function(){return Yt}},{key:"EVENT_KEY",get:function(){return Bt}},{key:"DefaultType",get:function(){return Xt}}]),n}(zt);t.fn[Wt]=Gt._jQueryInterface,t.fn[Wt].Constructor=Gt,t.fn[Wt].noConflict=function(){return t.fn[Wt]=Ut,Gt._jQueryInterface};var Jt="scrollspy",Zt="bs.scrollspy",en="."+Zt,tn=t.fn[Jt],nn={offset:10,method:"auto",target:""},rn={offset:"number",method:"string",target:"(string|element)"},on={ACTIVATE:"activate"+en,SCROLL:"scroll"+en,LOAD_DATA_API:"load"+en+".data-api"},an="active",ln=".nav, .list-group",sn=".nav-link",cn=".list-group-item",un=".dropdown-item",pn="position",fn=function(){function e(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+sn+","+this._config.target+" "+cn+","+this._config.target+" "+un,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(on.SCROLL,function(e){return i._process(e)}),this.refresh(),this._process()}var n=e.prototype;return n.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?"offset":pn,i="auto"===this._config.method?n:this._config.method,r=i===pn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var n,o=l.getSelectorFromElement(e);if(o&&(n=document.querySelector(o)),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[t(n)[i]().top+r,o]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},n.dispose=function(){t.removeData(this._element,Zt),t(this._scrollElement).off(en),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(e){if("string"!=typeof(e=o({},nn,{},"object"==typeof e&&e?e:{})).target){var n=t(e.target).attr("id");n||(n=l.getUID(Jt),t(e.target).attr("id",n)),e.target="#"+n}return l.typeCheckConfig(Jt,e,rn),e},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),n<=e){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;)this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1])&&this._activate(this._targets[r])}},n._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),i=t([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass(an),i.addClass(an)):(i.addClass(an),i.parents(ln).prev(sn+", "+cn).addClass(an),i.parents(ln).prev(".nav-item").children(sn).addClass(an)),t(this._scrollElement).trigger(on.ACTIVATE,{relatedTarget:e})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains(an)}).forEach(function(e){return e.classList.remove(an)})},e._jQueryInterface=function(n){return this.each(function(){var i=t(this).data(Zt);if(i||(i=new e(this,"object"==typeof n&&n),t(this).data(Zt,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}}]),e}();t(window).on(on.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=e.length;n--;){var i=t(e[n]);fn._jQueryInterface.call(i,i.data())}}),t.fn[Jt]=fn._jQueryInterface,t.fn[Jt].Constructor=fn,t.fn[Jt].noConflict=function(){return t.fn[Jt]=tn,fn._jQueryInterface};var hn="bs.tab",dn="."+hn,yn=t.fn.tab,gn={HIDE:"hide"+dn,HIDDEN:"hidden"+dn,SHOW:"show"+dn,SHOWN:"shown"+dn,CLICK_DATA_API:"click"+dn+".data-api"},mn="active",vn=".active",xn="> li > .active",bn=function(){function e(e){this._element=e}var n=e.prototype;return n.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(mn)||t(this._element).hasClass("disabled"))){var n,i,r=t(this._element).closest(".nav, .list-group")[0],o=l.getSelectorFromElement(this._element);if(r){var a="UL"===r.nodeName||"OL"===r.nodeName?xn:vn;i=(i=t.makeArray(t(r).find(a)))[i.length-1]}var s=t.Event(gn.HIDE,{relatedTarget:this._element}),c=t.Event(gn.SHOW,{relatedTarget:i});if(i&&t(i).trigger(s),t(this._element).trigger(c),!c.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(n=document.querySelector(o)),this._activate(this._element,r);var u=function(){var n=t.Event(gn.HIDDEN,{relatedTarget:e._element}),r=t.Event(gn.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(r)};n?this._activate(n,n.parentNode,u):u()}}},n.dispose=function(){t.removeData(this._element,hn),this._element=null},n._activate=function(e,n,i){function r(){return o._transitionComplete(e,a,i)}var o=this,a=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?t(n).children(vn):t(n).find(xn))[0],s=i&&a&&t(a).hasClass("fade");if(a&&s){var c=l.getTransitionDurationFromElement(a);t(a).removeClass("show").one(l.TRANSITION_END,r).emulateTransitionEnd(c)}else r()},n._transitionComplete=function(e,n,i){if(n){t(n).removeClass(mn);var r=t(n.parentNode).find("> .dropdown-menu .active")[0];r&&t(r).removeClass(mn),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(mn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),l.reflow(e),e.classList.contains("fade")&&e.classList.add("show"),e.parentNode&&t(e.parentNode).hasClass("dropdown-menu")){var o=t(e).closest(".dropdown")[0];if(o){var a=[].slice.call(o.querySelectorAll(".dropdown-toggle"));t(a).addClass(mn)}e.setAttribute("aria-expanded",!0)}i&&i()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data(hn);if(r||(r=new e(this),i.data(hn,r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n]()}})},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),e}();t(document).on(gn.CLICK_DATA_API,'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(e){e.preventDefault(),bn._jQueryInterface.call(t(this),"show")}),t.fn.tab=bn._jQueryInterface,t.fn.tab.Constructor=bn,t.fn.tab.noConflict=function(){return t.fn.tab=yn,bn._jQueryInterface};var _n="toast",wn="bs.toast",En="."+wn,Tn=t.fn[_n],Cn={CLICK_DISMISS:"click.dismiss"+En,HIDE:"hide"+En,HIDDEN:"hidden"+En,SHOW:"show"+En,SHOWN:"shown"+En},An="hide",Sn="show",Dn="showing",kn={animation:"boolean",autohide:"boolean",delay:"number"},Mn={animation:!0,autohide:!0,delay:500},On=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var n=e.prototype;return n.show=function(){var e=this,n=t.Event(Cn.SHOW);if(t(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){e._element.classList.remove(Dn),e._element.classList.add(Sn),t(e._element).trigger(Cn.SHOWN),e._config.autohide&&(e._timeout=setTimeout(function(){e.hide()},e._config.delay))};if(this._element.classList.remove(An),l.reflow(this._element),this._element.classList.add(Dn),this._config.animation){var r=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,i).emulateTransitionEnd(r)}else i()}},n.hide=function(){if(this._element.classList.contains(Sn)){var e=t.Event(Cn.HIDE);t(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Sn)&&this._element.classList.remove(Sn),t(this._element).off(Cn.CLICK_DISMISS),t.removeData(this._element,wn),this._element=null,this._config=null},n._getConfig=function(e){return e=o({},Mn,{},t(this._element).data(),{},"object"==typeof e&&e?e:{}),l.typeCheckConfig(_n,e,this.constructor.DefaultType),e},n._setListeners=function(){var e=this;t(this._element).on(Cn.CLICK_DISMISS,'[data-dismiss="toast"]',function(){return e.hide()})},n._close=function(){function e(){n._element.classList.add(An),t(n._element).trigger(Cn.HIDDEN)}var n=this;if(this._element.classList.remove(Sn),this._config.animation){var i=l.getTransitionDurationFromElement(this._element);t(this._element).one(l.TRANSITION_END,e).emulateTransitionEnd(i)}else e()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data(wn);if(r||(r=new e(this,"object"==typeof n&&n),i.data(wn,r)),"string"==typeof n){if(void 0===r[n])throw new TypeError('No method named "'+n+'"');r[n](this)}})},i(e,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return kn}},{key:"Default",get:function(){return Mn}}]),e}();t.fn[_n]=On._jQueryInterface,t.fn[_n].Constructor=On,t.fn[_n].noConflict=function(){return t.fn[_n]=Tn,On._jQueryInterface},e.Alert=h,e.Button=T,e.Carousel=R,e.Collapse=J,e.Dropdown=ot,e.Modal=bt,e.Popover=Gt,e.Scrollspy=fn,e.Tab=bn,e.Toast=On,e.Tooltip=zt,e.Util=l,Object.defineProperty(e,"__esModule",{value:!0})}),function(e,t){"use strict";var n="file:"===e.location.protocol,i=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),r=Array.prototype.forEach||function(e,t){if(null==this||"function"!=typeof e)throw new TypeError;var n,i=this.length>>>0;for(n=0;i>n;++n)n in this&&e.call(t,this[n],n,this)},o={},a=0,l=[],s=[],c={},u=function(e){return e.cloneNode(!0)},p=function(e,t){s[e]=s[e]||[],s[e].push(t)},f=function(t,i){if(void 0!==o[t])o[t]instanceof SVGSVGElement?i(u(o[t])):p(t,i);else{if(!e.XMLHttpRequest)return i("Browser does not support XMLHttpRequest"),!1;o[t]={},p(t,i);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){if(404===r.status||null===r.responseXML)return i("Unable to load SVG file: "+t),n&&i("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),i(),!1;if(!(200===r.status||n&&0===r.status))return i("There was a problem injecting the SVG: "+r.status+" "+r.statusText),!1;if(r.responseXML instanceof Document)o[t]=r.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var e;try{e=(new DOMParser).parseFromString(r.responseText,"text/xml")}catch(t){e=void 0}if(!e||e.getElementsByTagName("parsererror").length)return i("Unable to parse SVG file: "+t),!1;o[t]=e.documentElement}!function(e){for(var t=0,n=s[e].length;n>t;t++)!function(t){setTimeout(function(){s[e][t](u(o[e]))},0)}(t)}(t)}},r.open("GET",t),r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()}},h=function(t,n,o,s){var u=t.getAttribute("data-src")||t.getAttribute("src");if(/\.svg/i.test(u))if(i)-1===l.indexOf(t)&&(l.push(t),t.setAttribute("src",""),f(u,function(i){if(void 0===i||"string"==typeof i)return s(i),!1;var o=t.getAttribute("id");o&&i.setAttribute("id",o);var p=t.getAttribute("title");p&&i.setAttribute("title",p);var f=[].concat(i.getAttribute("class")||[],"injected-svg",t.getAttribute("class")||[]).join(" ");i.setAttribute("class",function(e){for(var t={},n=(e=e.split(" ")).length,i=[];n--;)t.hasOwnProperty(e[n])||(t[e[n]]=1,i.unshift(e[n]));return i.join(" ")}(f));var h=t.getAttribute("style");h&&i.setAttribute("style",h);var d=[].filter.call(t.attributes,function(e){return/^data-\w[\w\-]*$/.test(e.name)});r.call(d,function(e){e.name&&e.value&&i.setAttribute(e.name,e.value)});var y,g,m,v,x,b={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(b).forEach(function(e){y=e,m=b[e];for(var t=0,n=(g=i.querySelectorAll("defs "+y+"[id]")).length;n>t;t++){var o;v=g[t].id,x=v+"-"+a,r.call(m,function(e){for(var t=0,n=(o=i.querySelectorAll("["+e+'*="'+v+'"]')).length;n>t;t++)o[t].setAttribute(e,"url(#"+x+")")}),g[t].id=x}}),i.removeAttribute("xmlns:a");for(var _,w,E=i.querySelectorAll("script"),T=[],C=0,A=E.length;A>C;C++)(w=E[C].getAttribute("type"))&&"application/ecmascript"!==w&&"application/javascript"!==w||(_=E[C].innerText||E[C].textContent,T.push(_),i.removeChild(E[C]));if(T.length>0&&("always"===n||"once"===n&&!c[u])){for(var S=0,D=T.length;D>S;S++)new Function(T[S])(e);c[u]=!0}var k=i.querySelectorAll("style");r.call(k,function(e){e.textContent+=""}),t.parentNode.replaceChild(i,t),delete l[l.indexOf(t)],t=null,a++,s(i)}));else{var p=t.getAttribute("data-fallback")||t.getAttribute("data-png");p?(t.setAttribute("src",p),s(null)):o?(t.setAttribute("src",o+"/"+u.split("/").pop().replace(".svg",".png")),s(null)):s("This browser does not support SVG and no PNG fallback was defined.")}else s("Attempted to inject a file with a non-svg extension: "+u)},d=function(e,t,n){var i=(t=t||{}).evalScripts||"always",o=t.pngFallback||!1,a=t.each;if(void 0!==e.length){var l=0;r.call(e,function(t){h(t,i,o,function(t){a&&"function"==typeof a&&a(t),n&&e.length===++l&&n(l)})})}else e?h(e,i,o,function(t){a&&"function"==typeof a&&a(t),n&&n(1),e=null}):n&&n(0)};"object"==typeof module&&"object"==typeof module.exports?module.exports=exports=d:"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof e&&(e.SVGInjector=d)}(window,document),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.feather=t():e.feather=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=80)}([function(e,t,n){(function(t){var n="object",i=function(e){return e&&e.Math==Math&&e};e.exports=i(typeof globalThis==n&&globalThis)||i(typeof window==n&&window)||i(typeof self==n&&self)||i(typeof t==n&&t)||Function("return this")()}).call(this,n(75))},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var i=n(0),r=n(11),o=n(33),a=n(62),l=i.Symbol,s=r("wks");e.exports=function(e){return s[e]||(s[e]=a&&l[e]||(a?l:o)("Symbol."+e))}},function(e,t,n){var i=n(6);e.exports=function(e){if(!i(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var i=n(8),r=n(7),o=n(10);e.exports=i?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var i=n(8),r=n(35),o=n(3),a=n(18),l=Object.defineProperty;t.f=i?l:function(e,t,n){if(o(e),t=a(t,!0),o(n),r)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var i=n(4);e.exports=!i(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports={}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var i=n(0),r=n(19),o=n(17),a=i["__core-js_shared__"]||r("__core-js_shared__",{});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:o?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(43)),r=a(n(41)),o=a(n(40));function a(e){return e&&e.__esModule?e:{default:e}}t.default=Object.keys(r.default).map(function(e){return new i.default(e,r.default[e],o.default[e])}).reduce(function(e,t){return e[t.name]=t,e},{})},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t,n){var i=n(72),r=n(20);e.exports=function(e){return i(r(e))}},function(e,t){e.exports={}},function(e,t,n){var i=n(11),r=n(33),o=i("keys");e.exports=function(e){return o[e]||(o[e]=r(e))}},function(e,t){e.exports=!1},function(e,t,n){var i=n(6);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var i=n(0),r=n(5);e.exports=function(e,t){try{r(i,e,t)}catch(n){i[e]=t}return t}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t){var n=Math.ceil,i=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?i:n)(e)}},function(e,t,n){var i;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var n=t.length,i=0;i<n;++i)r(e,t[i])}e.prototype=Object.create(null);var n={}.hasOwnProperty,i=/\s+/;function r(e,r){if(r){var o=typeof r;"string"===o?function(e,t){for(var n=t.split(i),r=n.length,o=0;o<r;++o)e[n[o]]=!0}(e,r):Array.isArray(r)?t(e,r):"object"===o?function(e,t){for(var i in t)n.call(t,i)&&(e[i]=!!t[i])}(e,r):"number"===o&&function(e,t){e[r]=!0}(e)}}return function(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=new e;t(o,i);var a=[];for(var l in o)o[l]&&a.push(l);return a.join(" ")}}();void 0!==e&&e.exports?e.exports=n:void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},function(e,t,n){var i=n(7).f,r=n(1),o=n(2)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,o)&&i(e,o,{configurable:!0,value:t})}},function(e,t,n){var i=n(20);e.exports=function(e){return Object(i(e))}},function(e,t,n){var i=n(1),r=n(24),o=n(16),a=n(63),l=o("IE_PROTO"),s=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=r(e),i(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},function(e,t,n){"use strict";var i,r,o,a=n(25),l=n(5),s=n(1),c=n(2),u=n(17),p=c("iterator"),f=!1;[].keys&&("next"in(o=[].keys())?(r=a(a(o)))!==Object.prototype&&(i=r):f=!0),null==i&&(i={}),u||s(i,p)||l(i,p,function(){return this}),e.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:f}},function(e,t,n){var i=n(21),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},function(e,t,n){var i=n(1),r=n(14),o=n(68),a=n(15),l=o(!1);e.exports=function(e,t){var n,o=r(e),s=0,c=[];for(n in o)!i(a,n)&&i(o,n)&&c.push(n);for(;t.length>s;)i(o,n=t[s++])&&(~l(c,n)||c.push(n));return c}},function(e,t,n){var i=n(0),r=n(11),o=n(5),a=n(1),l=n(19),s=n(36),c=n(37),u=c.get,p=c.enforce,f=String(s).split("toString");r("inspectSource",function(e){return s.call(e)}),(e.exports=function(e,t,n,r){var s=!!r&&!!r.unsafe,c=!!r&&!!r.enumerable,u=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||o(n,"name",t),p(n).source=f.join("string"==typeof t?t:"")),e!==i?(s?!u&&e[t]&&(c=!0):delete e[t],c?e[t]=n:o(e,t,n)):c?e[t]=n:l(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&u(this).source||s.call(this)})},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var i=n(8),r=n(73),o=n(10),a=n(14),l=n(18),s=n(1),c=n(35),u=Object.getOwnPropertyDescriptor;t.f=i?u:function(e,t){if(e=a(e),t=l(t,!0),c)try{return u(e,t)}catch(e){}if(s(e,t))return o(!r.f.call(e,t),e[t])}},function(e,t,n){var i=n(0),r=n(31).f,o=n(5),a=n(29),l=n(19),s=n(71),c=n(65);e.exports=function(e,t){var n,u,p,f,h,d=e.target,y=e.global,g=e.stat;if(n=y?i:g?i[d]||l(d,{}):(i[d]||{}).prototype)for(u in t){if(f=t[u],p=e.noTargetGet?(h=r(n,u))&&h.value:n[u],!c(y?u:d+(g?".":"#")+u,e.forced)&&void 0!==p){if(typeof f==typeof p)continue;s(f,p)}(e.sham||p&&p.sham)&&o(f,"sham",!0),a(n,u,f,e)}}},function(e,t){var n=0,i=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+i).toString(36))}},function(e,t,n){var i=n(0),r=n(6),o=i.document,a=r(o)&&r(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},function(e,t,n){var i=n(8),r=n(4),o=n(34);e.exports=!i&&!r(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var i=n(11);e.exports=i("native-function-to-string",Function.toString)},function(e,t,n){var i,r,o,a=n(76),l=n(0),s=n(6),c=n(5),u=n(1),p=n(16),f=n(15),h=l.WeakMap;if(a){var d=new h,y=d.get,g=d.has,m=d.set;i=function(e,t){return m.call(d,e,t),t},r=function(e){return y.call(d,e)||{}},o=function(e){return g.call(d,e)}}else{var v=p("state");f[v]=!0,i=function(e,t){return c(e,v,t),t},r=function(e){return u(e,v)?e[v]:{}},o=function(e){return u(e,v)}}e.exports={set:i,get:r,has:o,enforce:function(e){return o(e)?r(e):i(e,{})},getterFor:function(e){return function(t){var n;if(!s(t)||(n=r(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=a(n(22)),o=a(n(12));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof document)throw new Error("`feather.replace()` only works in a browser environment.");var t=document.querySelectorAll("[data-feather]");Array.from(t).forEach(function(t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(e){return Array.from(e.attributes).reduce(function(e,t){return e[t.name]=t.value,e},{})}(e),a=n["data-feather"];delete n["data-feather"];var l=o.default[a].toSvg(i({},t,n,{class:(0,r.default)(t.class,n.class)})),s=(new DOMParser).parseFromString(l,"image/svg+xml").querySelector("svg");e.parentNode.replaceChild(s,e)}(t,e)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=(i=n(12))&&i.__esModule?i:{default:i};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!e)throw new Error("The required `key` (icon name) parameter is missing.");if(!r.default[e])throw new Error("No icon matching '"+e+"'. See the complete list of icons at https://feathericons.com");return r.default[e].toSvg(t)}},function(e){e.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning"],"alert-octagon":["warning"],"alert-triangle":["warning"],"at-sign":["mention"],award:["achievement","badge"],aperture:["camera","photo"],bell:["alarm","notification"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read"],book:["read","dictionary","booklet","magazine"],bookmark:["read","clip","marker","tag"],briefcase:["work","bag","baggage","folder"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],command:["keyboard","cmd"],compass:["navigation","safari","travel"],copy:["clone","duplicate"],"corner-down-left":["arrow"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch"],"external-link":["outbound"],facebook:["logo"],"fast-forward":["music"],figma:["logo","design","tool"],film:["movie","video"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],global:["world","browser","language","translate"],"hard-drive":["computer","server"],hash:["hashtag","number","pound"],headphones:["music","audio"],heart:["like","love"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication"],"life-bouy":["help","life ring","support"],linkedin:["logo"],lock:["security","password"],"log-in":["sign in","arrow"],"log-out":["sign out","arrow"],mail:["email"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record"],mic:["record"],minimize:["exit fullscreen"],"minimize-2":["exit fullscreen","arrows"],monitor:["tv"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","stop"],"pen-tool":["vector","drawing"],play:["music","start"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],radio:["signal"],rewind:["music"],rss:["feed","subscribe"],save:["floppy disk"],search:["find","magnifier","magnifying glass"],send:["message","mail","paper airplane"],settings:["cog","edit","gear","preferences"],shield:["security"],"shield-off":["security"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slash:["ban","no"],sliders:["settings","controls"],smile:["emoji","face","happy","good","emotion"],speaker:["music"],star:["bookmark","favorite","like"],sun:["brightness","weather","light"],sunrise:["weather"],sunset:["weather"],tag:["label"],target:["bullseye"],terminal:["code","command line"],"thumbs-down":["dislike","bad"],"thumbs-up":["like","good"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],trash:["garbage","delete","remove"],"trash-2":["garbage","delete","remove"],triangle:["delta"],truck:["delivery","van","shipping"],twitter:["logo"],umbrella:["rain","weather"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times"],"x-octagon":["delete","stop","alert","warning","times"],"x-square":["cancel","close","delete","remove","times"],x:["cancel","close","delete","remove","times"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"]}},function(e){e.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},function(e){e.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=l(n(22)),a=l(n(42));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.contents=n,this.tags=r,this.attrs=i({},a.default,{class:"feather feather-"+t})}return r(e,[{key:"toSvg",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"<svg "+function(e){return Object.keys(e).map(function(t){return t+'="'+e[t]+'"'}).join(" ")}(i({},this.attrs,e,{class:(0,o.default)(this.attrs.class,e.class)}))+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),e}();t.default=s},function(e,t,n){"use strict";var i=a(n(12)),r=a(n(39)),o=a(n(38));function a(e){return e&&e.__esModule?e:{default:e}}e.exports={icons:i.default,toSvg:r.default,replace:o.default}},function(e,t,n){e.exports=n(0)},function(e,t,n){var i=n(2)("iterator"),r=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){r=!0}};a[i]=function(){return this},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!r)return!1;var n=!1;try{var o={};o[i]=function(){return{next:function(){return{done:n=!0}}}},e(o)}catch(e){}return n}},function(e,t,n){var i=n(30),r=n(2)("toStringTag"),o="Arguments"==i(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),r))?n:o?i(t):"Object"==(a=i(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var i=n(47),r=n(9),o=n(2)("iterator");e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||r[i(e)]}},function(e,t,n){"use strict";var i=n(18),r=n(7),o=n(10);e.exports=function(e,t,n){var a=i(t);a in e?r.f(e,a,o(0,n)):e[a]=n}},function(e,t,n){var i=n(2),r=n(9),o=i("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||a[o]===e)}},function(e,t,n){var i=n(3);e.exports=function(e,t,n,r){try{return r?t(i(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&i(o.call(e)),t}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var i=n(52);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){"use strict";var i=n(53),r=n(24),o=n(51),a=n(50),l=n(27),s=n(49),c=n(48);e.exports=function(e){var t,n,u,p,f=r(e),h="function"==typeof this?this:Array,d=arguments.length,y=d>1?arguments[1]:void 0,g=void 0!==y,m=0,v=c(f);if(g&&(y=i(y,d>2?arguments[2]:void 0,2)),null==v||h==Array&&a(v))for(n=new h(t=l(f.length));t>m;m++)s(n,m,g?y(f[m],m):f[m]);else for(p=v.call(f),n=new h;!(u=p.next()).done;m++)s(n,m,g?o(p,y,[u.value,m],!0):u.value);return n.length=m,n}},function(e,t,n){var i=n(32),r=n(54);i({target:"Array",stat:!0,forced:!n(46)(function(e){Array.from(e)})},{from:r})},function(e,t,n){var i=n(6),r=n(3);e.exports=function(e,t){if(r(e),!i(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}},function(e,t,n){var i=n(56);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return i(n,r),t?e.call(n,r):n.__proto__=r,n}}():void 0)},function(e,t,n){var i=n(0).document;e.exports=i&&i.documentElement},function(e,t,n){var i=n(28),r=n(13);e.exports=Object.keys||function(e){return i(e,r)}},function(e,t,n){var i=n(8),r=n(7),o=n(3),a=n(59);e.exports=i?Object.defineProperties:function(e,t){o(e);for(var n,i=a(t),l=i.length,s=0;l>s;)r.f(e,n=i[s++],t[n]);return e}},function(e,t,n){var i=n(3),r=n(60),o=n(13),a=n(15),l=n(58),s=n(34),c=n(16)("IE_PROTO"),u=function(){},p=function(){var e,t=s("iframe"),n=o.length;for(t.style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),p=e.F;n--;)delete p.prototype[o[n]];return p()};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=i(e),n=new u,u.prototype=null,n[c]=e):n=p(),void 0===t?n:r(n,t)},a[c]=!0},function(e,t,n){var i=n(4);e.exports=!!Object.getOwnPropertySymbols&&!i(function(){return!String(Symbol())})},function(e,t,n){var i=n(4);e.exports=!i(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},function(e,t,n){"use strict";var i=n(26).IteratorPrototype,r=n(61),o=n(10),a=n(23),l=n(9),s=function(){return this};e.exports=function(e,t,n){var c=t+" Iterator";return e.prototype=r(i,{next:o(1,n)}),a(e,c,!1,!0),l[c]=s,e}},function(e,t,n){var i=n(4),r=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==c||n!=s&&("function"==typeof t?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(r,".").toLowerCase()},l=o.data={},s=o.NATIVE="N",c=o.POLYFILL="P";e.exports=o},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var i=n(21),r=Math.max,o=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):o(n,t)}},function(e,t,n){var i=n(14),r=n(27),o=n(67);e.exports=function(e){return function(t,n,a){var l,s=i(t),c=r(s.length),u=o(a,c);if(e&&n!=n){for(;c>u;)if((l=s[u++])!=l)return!0}else for(;c>u;u++)if((e||u in s)&&s[u]===n)return e||u||0;return!e&&-1}}},function(e,t,n){var i=n(28),r=n(13).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,r)}},function(e,t,n){var i=n(0),r=n(69),o=n(66),a=n(3),l=i.Reflect;e.exports=l&&l.ownKeys||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},function(e,t,n){var i=n(1),r=n(70),o=n(31),a=n(7);e.exports=function(e,t){for(var n=r(t),l=a.f,s=o.f,c=0;c<n.length;c++){var u=n[c];i(e,u)||l(e,u,s(t,u))}}},function(e,t,n){var i=n(4),r=n(30),o="".split;e.exports=i(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==r(e)?o.call(e,""):Object(e)}:Object},function(e,t,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!i.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:i},function(e,t,n){"use strict";var i=n(32),r=n(64),o=n(25),a=n(57),l=n(23),s=n(5),c=n(29),u=n(2),p=n(17),f=n(9),h=n(26),d=h.IteratorPrototype,y=h.BUGGY_SAFARI_ITERATORS,g=u("iterator"),m=function(){return this};e.exports=function(e,t,n,u,h,v,x){r(n,t,u);var b,_,w,E=function(e){if(e===h&&D)return D;if(!y&&e in A)return A[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},T=t+" Iterator",C=!1,A=e.prototype,S=A[g]||A["@@iterator"]||h&&A[h],D=!y&&S||E(h),k="Array"==t&&A.entries||S;if(k&&(b=o(k.call(new e)),d!==Object.prototype&&b.next&&(p||o(b)===d||(a?a(b,d):"function"!=typeof b[g]&&s(b,g,m)),l(b,T,!0,!0),p&&(f[T]=m))),"values"==h&&S&&"values"!==S.name&&(C=!0,D=function(){return S.call(this)}),p&&!x||A[g]===D||s(A,g,D),f[t]=D,h)if(_={values:E("values"),keys:v?D:E("keys"),entries:E("entries")},x)for(w in _)!y&&!C&&w in A||c(A,w,_[w]);else i({target:t,proto:!0,forced:y||C},_);return _}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var i=n(0),r=n(36),o=i.WeakMap;e.exports="function"==typeof o&&/native code/.test(r.call(o))},function(e,t,n){var i=n(21),r=n(20);e.exports=function(e,t,n){var o,a,l=String(r(e)),s=i(t),c=l.length;return s<0||s>=c?n?"":void 0:(o=l.charCodeAt(s))<55296||o>56319||s+1===c||(a=l.charCodeAt(s+1))<56320||a>57343?n?l.charAt(s):o:n?l.slice(s,s+2):a-56320+(o-55296<<10)+65536}},function(e,t,n){"use strict";var i=n(77),r=n(37),o=n(74),a=r.set,l=r.getterFor("String Iterator");o(String,"String",function(e){a(this,{type:"String Iterator",string:String(e),index:0})},function(){var e,t=l(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=i(n,r,!0),t.index+=e.length,{value:e,done:!1})})},function(e,t,n){n(78),n(55);var i=n(45);e.exports=i.Array.from},function(e,t,n){n(79),e.exports=n(44)}])});var Popover=function(){var e=$('[data-toggle="popover"]');e.length&&e.each(function(){!function(e){var t="";e.data("color")&&(t=" popover-"+e.data("color"));var n={trigger:"focus",template:'<div class="popover'+t+'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'};e.popover(n)}($(this))})}(),Tooltip=function(){var e=$('[data-toggle="tooltip"]');e.length&&e.tooltip()}(),CopyType=function(){var e,t=".btn-type-clipboard",n=$(t);n.length&&((e=n).tooltip().on("mouseleave",function(){e.tooltip("hide")}),new ClipboardJS(t).on("success",function(e){$(e.trigger).attr("title","Copied!").tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle"),e.clearSelection()}))}(),FormControl=function(){var e=$(".form-control"),t=$('[data-toggle="indeterminate"]');e.length&&e.on("focus blur",function(e){$(this).parents(".form-group").toggleClass("focused","focus"===e.type)}).trigger("blur"),t.length&&t.each(function(){$(this).prop("indeterminate",!0)})}(),CustomInputFile=function(){var e=$(".custom-input-file");e.length&&e.each(function(){var e=$(this);e.on("change",function(t){!function(e,t,n){var i,r=e.next("label"),o=r.html();t&&t.files.length>1?i=(t.getAttribute("data-multiple-caption")||"").replace("{count}",t.files.length):n.target.value&&(i=n.target.value.split("\\").pop()),i?r.find("span").html(i):r.html(o)}(e,this,t)}),e.on("focus",function(){!function(e){e.addClass("has-focus")}(e)}).on("blur",function(){!function(e){e.removeClass("has-focus")}(e)})})}(),NavbarSticky=function(){var e=$(".navbar-sticky"),t=0,n=!1;e.length&&(t=e.offset().top,$(window).on({scroll:function(){n=!0,setInterval(function(){var i,r,o;n&&(n=!1,i=e,r=$(window).scrollTop(),o=i.outerHeight(),r>t+200?(i.addClass("sticky"),$("body").css("padding-top",o+"px")):(i.removeClass("sticky"),$("body").css("padding-top","0")))},250)}}))}(),Highlight=function(){$(".highlight").each(function(e,t){!function(e,t){$(t).before('<button class="action-item btn-clipboard" title="Copy to clipboard"><i data-feather="copy"></i></button>'),$(".btn-clipboard").tooltip().on("mouseleave",function(){$(this).tooltip("hide")});var n=new ClipboardJS(".btn-clipboard",{target:function(e){return e.nextElementSibling}});n.on("success",function(e){$(e.trigger).attr("title","Copied!").tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle"),e.clearSelection()}),n.on("error",function(e){var t="Press "+(/Mac/i.test(navigator.userAgent)?"⌘":"Ctrl-")+"C to copy";$(e.trigger).attr("title",t).tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle")}),hljs.highlightBlock(t)}(0,t)})}();