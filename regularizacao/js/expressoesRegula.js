/**
 * @module       jQuery
 * @author       jQuery Foundation and other contributors
 * @see          https://code.jquery.com/jquery/
 * @license      MIT (jquery.org/license)
 * @version      3.2.1
 */
!function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0)  : function (e) {
    if (!e.document) throw new Error('jQuery requires a window with a document');
    return t(e)
  }
   : t(e)
}('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  function n(e, t) {
    var n = (t = t || te).createElement('script');
    n.text = e,
    t.head.appendChild(n).parentNode.removeChild(n)
  }
  function r(e) {
    var t = !!e && 'length' in e && e.length,
    n = he.type(e);
    return 'function' !== n && !he.isWindow(e) && ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e)
  }
  function i(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  function o(e, t, n) {
    return he.isFunction(t) ? he.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n
    })  : t.nodeType ? he.grep(e, function (e) {
      return e === t !== n
    })  : 'string' != typeof t ? he.grep(e, function (e) {
      return ae.call(t, e) > - 1 !== n
    })  : Ee.test(t) ? he.filter(t, e, n)  : (t = he.filter(t, e), he.grep(e, function (e) {
      return ae.call(t, e) > - 1 !== n && 1 === e.nodeType
    }))
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e
  }
  function s(e) {
    var t = {
    };
    return he.each(e.match(je) || [
    ], function (e, n) {
      t[n] = !0
    }),
    t
  }
  function u(e) {
    return e
  }
  function l(e) {
    throw e
  }
  function c(e, t, n, r) {
    var i;
    try {
      e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n)  : e && he.isFunction(i = e.then) ? i.call(e, t, n)  : t.apply(void 0, [
        e
      ].slice(r))
    } catch (e) {
      n.apply(void 0, [
        e
      ])
    }
  }
  function f() {
    te.removeEventListener('DOMContentLoaded', f),
    e.removeEventListener('load', f),
    he.ready()
  }
  function p() {
    this.expando = he.expando + p.uid++
  }
  function d(e) {
    return 'true' === e || 'false' !== e && ('null' === e ? null : e === + e + '' ? + e : Pe.test(e) ? JSON.parse(e)  : e)
  }
  function h(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = 'data-' + t.replace(Re, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(r))) {
      try {
        n = d(n)
      } catch (e) {
      }
      Oe.set(e, t, n)
    } else n = void 0;
    return n
  }
  function g(e, t, n, r) {
    var i,
    o = 1,
    a = 20,
    s = r ? function () {
      return r.cur()
    }
     : function () {
      return he.css(e, t, '')
    },
    u = s(),
    l = n && n[3] || (he.cssNumber[t] ? '' : 'px'),
    c = (he.cssNumber[t] || 'px' !== l && + u) && Ie.exec(he.css(e, t));
    if (c && c[3] !== l) {
      l = l || c[3],
      n = n || [
      ],
      c = + u || 1;
      do {
        o = o || '.5',
        c /= o,
        he.style(e, t, c + l)
      } while (o !== (o = s() / u) && 1 !== o && --a)
    }
    return n && (c = + c || + u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : + n[2], r && (r.unit = l, r.start = c, r.end = i)),
    i
  }
  function v(e) {
    var t,
    n = e.ownerDocument,
    r = e.nodeName,
    i = _e[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = he.css(t, 'display'), t.parentNode.removeChild(t), 'none' === i && (i = 'block'), _e[r] = i, i)
  }
  function m(e, t) {
    for (var n, r, i = [
    ], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ('none' === n && (i[o] = Fe.get(r, 'display') || null, i[o] || (r.style.display = '')), '' === r.style.display && $e(r) && (i[o] = v(r)))  : 'none' !== n && (i[o] = 'none', Fe.set(r, 'display', n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e
  }
  function y(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*')  : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*')  : [
    ],
    void 0 === t || t && i(e, t) ? he.merge([e], n)  : n
  }
  function x(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Fe.set(e[n], 'globalEval', !t || Fe.get(t[n], 'globalEval'))
  }
  function b(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [
    ], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ('object' === he.type(o)) he.merge(p, o.nodeType ? [
      o
    ] : o);
     else if (Ge.test(o)) {
      for (a = a || f.appendChild(t.createElement('div')), s = (Xe.exec(o) || [
        '',
        ''
      ]) [1].toLowerCase(), u = Ve[s] || Ve._default, a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
      he.merge(p, a.childNodes),
      (a = f.firstChild).textContent = ''
    } else p.push(t.createTextNode(o));
    for (f.textContent = '', d = 0; o = p[d++]; ) if (r && he.inArray(o, r) > - 1) i && i.push(o);
     else if (l = he.contains(o.ownerDocument, o), a = y(f.appendChild(o), 'script'), l && x(a), n) for (c = 0; o = a[c++]; ) Ue.test(o.type || '') && n.push(o);
    return f
  }
  function w() {
    return !0
  }
  function T() {
    return !1
  }
  function C() {
    try {
      return te.activeElement
    } catch (e) {
    }
  }
  function E(e, t, n, r, i, o) {
    var a,
    s;
    if ('object' == typeof t) {
      'string' != typeof n && (r = r || n, n = void 0);
      for (s in t) E(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0)  : null == i && ('string' == typeof n ? (i = r, r = void 0)  : (i = r, r = n, n = void 0)), !1 === i) i = T;
     else if (!i) return e;
    return 1 === o && (a = i, i = function (e) {
      return he().off(e),
      a.apply(this, arguments)
    }, i.guid = a.guid || (a.guid = he.guid++)),
    e.each(function () {
      he.event.add(this, t, i, r, n)
    })
  }
  function k(e, t) {
    return i(e, 'table') && i(11 !== t.nodeType ? t : t.firstChild, 'tr') ? he('>tbody', e) [0] || e : e
  }
  function S(e) {
    return e.type = (null !== e.getAttribute('type')) + '/' + e.type,
    e
  }
  function N(e) {
    var t = nt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'),
    e
  }
  function D(e, t) {
    var n,
    r,
    i,
    o,
    a,
    s,
    u,
    l;
    if (1 === t.nodeType) {
      if (Fe.hasData(e) && (o = Fe.access(e), a = Fe.set(t, o), l = o.events)) {
        delete a.handle,
        a.events = {
        };
        for (i in l) for (n = 0, r = l[i].length; n < r; n++) he.event.add(t, i, l[i][n])
      }
      Oe.hasData(e) && (s = Oe.access(e), u = he.extend({
      }, s), Oe.set(t, u))
    }
  }
  function j(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && ze.test(e.type) ? t.checked = e.checked : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue)
  }
  function A(e, t, r, i) {
    t = ie.apply([], t);
    var o,
    a,
    s,
    u,
    l,
    c,
    f = 0,
    p = e.length,
    d = p - 1,
    h = t[0],
    g = he.isFunction(h);
    if (g || p > 1 && 'string' == typeof h && !pe.checkClone && tt.test(h)) return e.each(function (n) {
      var o = e.eq(n);
      g && (t[0] = h.call(this, n, o.html())),
      A(o, t, r, i)
    });
    if (p && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
      for (u = (s = he.map(y(o, 'script'), S)).length; f < p; f++) l = o,
      f !== d && (l = he.clone(l, !0, !0), u && he.merge(s, y(l, 'script'))),
      r.call(e[f], l, f);
      if (u) for (c = s[s.length - 1].ownerDocument, he.map(s, N), f = 0; f < u; f++) l = s[f],
      Ue.test(l.type || '') && !Fe.access(l, 'globalEval') && he.contains(c, l) && (l.src ? he._evalUrl && he._evalUrl(l.src)  : n(l.textContent.replace(rt, ''), c))
    }
    return e
  }
  function q(e, t, n) {
    for (var r, i = t ? he.filter(t, e)  : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(y(r)),
    r.parentNode && (n && he.contains(r.ownerDocument, r) && x(y(r, 'script')), r.parentNode.removeChild(r));
    return e
  }
  function L(e, t, n) {
    var r,
    i,
    o,
    a,
    s = e.style;
    return (n = n || at(e)) && ('' !== (a = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && ot.test(a) && it.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)),
    void 0 !== a ? a + '' : a
  }
  function H(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }
  function F(e) {
    if (e in pt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--; ) if ((e = ft[n] + t) in pt) return e
  }
  function O(e) {
    var t = he.cssProps[e];
    return t || (t = he.cssProps[e] = F(e) || e),
    t
  }
  function P(e, t, n) {
    var r = Ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px')  : t
  }
  function R(e, t, n, r, i) {
    var o,
    a = 0;
    for (o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0; o < 4; o += 2) 'margin' === n && (a += he.css(e, n + We[o], !0, i)),
    r ? ('content' === n && (a -= he.css(e, 'padding' + We[o], !0, i)), 'margin' !== n && (a -= he.css(e, 'border' + We[o] + 'Width', !0, i)))  : (a += he.css(e, 'padding' + We[o], !0, i), 'padding' !== n && (a += he.css(e, 'border' + We[o] + 'Width', !0, i)));
    return a
  }
  function M(e, t, n) {
    var r,
    i = at(e),
    o = L(e, t, i),
    a = 'border-box' === he.css(e, 'boxSizing', !1, i);
    return ot.test(o) ? o : (r = a && (pe.boxSizingReliable() || o === e.style[t]), 'auto' === o && (o = e['offset' + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + R(e, t, n || (a ? 'border' : 'content'), r, i) + 'px')
  }
  function I(e, t, n, r, i) {
    return new I.prototype.init(e, t, n, r, i)
  }
  function W() {
    ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W)  : e.setTimeout(W, he.fx.interval), he.fx.tick())
  }
  function $() {
    return e.setTimeout(function () {
      dt = void 0
    }),
    dt = he.now()
  }
  function B(e, t) {
    var n,
    r = 0,
    i = {
      height: e
    };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) n = We[r],
    i['margin' + n] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e),
    i
  }
  function _(e, t, n) {
    for (var r, i = (X.tweeners[t] || [
    ]).concat(X.tweeners['*']), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
  }
  function z(e, t) {
    var n,
    r,
    i,
    o,
    a;
    for (n in e) if (r = he.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = he.cssHooks[r]) && 'expand' in a) {
      o = a.expand(o),
      delete e[r];
      for (n in o) n in e || (e[n] = o[n], t[n] = i)
    } else t[r] = i
  }
  function X(e, t, n) {
    var r,
    i,
    o = 0,
    a = X.prefilters.length,
    s = he.Deferred().always(function () {
      delete u.elem
    }),
    u = function () {
      if (i) return !1;
      for (var t = dt || $(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
      return s.notifyWith(e, [
        l,
        r,
        n
      ]),
      r < 1 && a ? n : (a || s.notifyWith(e, [
        l,
        1,
        0
      ]), s.resolveWith(e, [
        l
      ]), !1)
    },
    l = s.promise({
      elem: e,
      props: he.extend({
      }, t),
      opts: he.extend(!0, {
        specialEasing: {
        },
        easing: he.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: dt || $(),
      duration: n.duration,
      tweens: [
      ],
      createTween: function (t, n) {
        var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r),
        r
      },
      stop: function (t) {
        var n = 0,
        r = t ? l.tweens.length : 0;
        if (i) return this;
        for (i = !0; n < r; n++) l.tweens[n].run(1);
        return t ? (s.notifyWith(e, [
          l,
          1,
          0
        ]), s.resolveWith(e, [
          l,
          t
        ]))  : s.rejectWith(e, [
          l,
          t
        ]),
        this
      }
    }),
    c = l.props;
    for (z(c, l.opts.specialEasing); o < a; o++) if (r = X.prefilters[o].call(l, e, c, l.opts)) return he.isFunction(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(r.stop, r)),
    r;
    return he.map(c, _, l),
    he.isFunction(l.opts.start) && l.opts.start.call(e, l),
    l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
    he.fx.timer(he.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })),
    l
  }
  function U(e) {
    return (e.match(je) || [
    ]).join(' ')
  }
  function V(e) {
    return e.getAttribute && e.getAttribute('class') || ''
  }
  function G(e, t, n, r) {
    var i;
    if (Array.isArray(t)) he.each(t, function (t, i) {
      n || St.test(e) ? r(e, i)  : G(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r)
    });
     else if (n || 'object' !== he.type(t)) r(e, t);
     else for (i in t) G(e + '[' + i + ']', t[i], n, r)
  }
  function Y(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');
      var r,
      i = 0,
      o = t.toLowerCase().match(je) || [
      ];
      if (he.isFunction(n)) for (; r = o[i++]; ) '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || [
      ]).unshift(n))  : (e[r] = e[r] || [
      ]).push(n)
    }
  }
  function Q(e, t, n, r) {
    function i(s) {
      var u;
      return o[s] = !0,
      he.each(e[s] || [
      ], function (e, s) {
        var l = s(t, n, r);
        return 'string' != typeof l || a || o[l] ? a ? !(u = l)  : void 0 : (t.dataTypes.unshift(l), i(l), !1)
      }),
      u
    }
    var o = {
    },
    a = e === Mt;
    return i(t.dataTypes[0]) || !o['*'] && i('*')
  }
  function J(e, t) {
    var n,
    r,
    i = he.ajaxSettings.flatOptions || {
    };
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {
    })) [n] = t[n]);
    return r && he.extend(!0, e, r),
    e
  }
  function K(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; '*' === u[0]; ) u.shift(),
    void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
    if (r) for (i in s) if (s[i] && s[i].test(r)) {
      u.unshift(i);
      break
    }
    if (u[0] in n) o = u[0];
     else {
      for (i in n) {
        if (!u[0] || e.converters[i + ' ' + u[0]]) {
          o = i;
          break
        }
        a || (a = i)
      }
      o = o || a
    }
    if (o) return o !== u[0] && u.unshift(o),
    n[o]
  }
  function Z(e, t, n, r) {
    var i,
    o,
    a,
    s,
    u,
    l = {
    },
    c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ('*' === o) o = u;
     else if ('*' !== u && u !== o) {
      if (!(a = l[u + ' ' + o] || l['* ' + o])) for (i in l) if ((s = i.split(' ')) [1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
        break
      }
      if (!0 !== a) if (a && e.throws) t = a(t);
       else try {
        t = a(t)
      } catch (e) {
        return {
          state: 'parsererror',
          error: a ? e : 'No conversion from ' + u + ' to ' + o
        }
      }
    }
    return {
      state: 'success',
      data: t
    }
  }
  var ee = [
  ],
  te = e.document,
  ne = Object.getPrototypeOf,
  re = ee.slice,
  ie = ee.concat,
  oe = ee.push,
  ae = ee.indexOf,
  se = {
  },
  ue = se.toString,
  le = se.hasOwnProperty,
  ce = le.toString,
  fe = ce.call(Object),
  pe = {
  },
  de = '3.2.1',
  he = function (e, t) {
    return new he.fn.init(e, t)
  },
  ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  ve = /^-ms-/,
  me = /-([a-z])/g,
  ye = function (e, t) {
    return t.toUpperCase()
  };
  he.fn = he.prototype = {
    jquery: de,
    constructor: he,
    length: 0,
    toArray: function () {
      return re.call(this)
    },
    get: function (e) {
      return null == e ? re.call(this)  : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = he.merge(this.constructor(), e);
      return t.prevObject = this,
      t
    },
    each: function (e) {
      return he.each(this, e)
    },
    map: function (e) {
      return this.pushStack(he.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function () {
      return this.pushStack(re.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq( - 1)
    },
    eq: function (e) {
      var t = this.length,
      n = + e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [
        this[n]
      ] : [
      ])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: oe,
    sort: ee.sort,
    splice: ee.splice
  },
  he.extend = he.fn.extend = function () {
    var e,
    t,
    n,
    r,
    i,
    o,
    a = arguments[0] || {
    },
    s = 1,
    u = arguments.length,
    l = !1;
    for ('boolean' == typeof a && (l = a, a = arguments[s] || {
    }, s++), 'object' == typeof a || he.isFunction(a) || (a = {
    }), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t],
    r = e[t],
    a !== r && (l && r && (he.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : [
    ])  : o = n && he.isPlainObject(n) ? n : {
    }, a[t] = he.extend(l, o, r))  : void 0 !== r && (a[t] = r));
    return a
  },
  he.extend({
    expando: 'jQuery' + (de + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {
    },
    isFunction: function (e) {
      return 'function' === he.type(e)
    },
    isWindow: function (e) {
      return null != e && e === e.window
    },
    isNumeric: function (e) {
      var t = he.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
    },
    isPlainObject: function (e) {
      var t,
      n;
      return !(!e || '[object Object]' !== ue.call(e) || (t = ne(e)) && ('function' != typeof (n = le.call(t, 'constructor') && t.constructor) || ce.call(n) !== fe))
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? se[ue.call(e)] || 'object' : typeof e
    },
    globalEval: function (e) {
      n(e)
    },
    camelCase: function (e) {
      return e.replace(ve, 'ms-').replace(me, ye)
    },
    each: function (e, t) {
      var n,
      i = 0;
      if (r(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
       else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e
    },
    trim: function (e) {
      return null == e ? '' : (e + '').replace(ge, '')
    },
    makeArray: function (e, t) {
      var n = t || [
      ];
      return null != e && (r(Object(e)) ? he.merge(n, 'string' == typeof e ? [
        e
      ] : e)  : oe.call(n, e)),
      n
    },
    inArray: function (e, t, n) {
      return null == t ? - 1 : ae.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = + t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i,
      e
    },
    grep: function (e, t, n) {
      for (var r = [
      ], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map: function (e, t, n) {
      var i,
      o,
      a = 0,
      s = [
      ];
      if (r(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o);
       else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
      return ie.apply([], s)
    },
    guid: 1,
    proxy: function (e, t) {
      var n,
      r,
      i;
      if ('string' == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return r = re.call(arguments, 2),
      i = function () {
        return e.apply(t || this, r.concat(re.call(arguments)))
      },
      i.guid = e.guid = e.guid || he.guid++,
      i
    },
    now: Date.now,
    support: pe
  }),
  'function' == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]),
  he.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
    se['[object ' + t + ']'] = t.toLowerCase()
  });
  var xe = function (e) {
    function t(e, t, n, r) {
      var i,
      o,
      a,
      s,
      u,
      c,
      p,
      d = t && t.ownerDocument,
      h = t ? t.nodeType : 9;
      if (n = n || [
      ], 'string' != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
      if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t), t = t || q, H)) {
        if (11 !== h && (u = ge.exec(e))) if (i = u[1]) {
          if (9 === h) {
            if (!(a = t.getElementById(i))) return n;
            if (a.id === i) return n.push(a),
            n
          } else if (d && (a = d.getElementById(i)) && R(t, a) && a.id === i) return n.push(a),
          n
        } else {
          if (u[2]) return Q.apply(n, t.getElementsByTagName(e)),
          n;
          if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)),
          n
        }
        if (b.qsa && !z[e + ' '] && (!F || !F.test(e))) {
          if (1 !== h) d = t,
          p = e;
           else if ('object' !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute('id')) ? s = s.replace(xe, be)  : t.setAttribute('id', s = M), o = (c = E(e)).length; o--; ) c[o] = '#' + s + ' ' + f(c[o]);
            p = c.join(','),
            d = ve.test(e) && l(t.parentNode) || t
          }
          if (p) try {
            return Q.apply(n, d.querySelectorAll(p)),
            n
          } catch (e) {
          } finally {
            s === M && t.removeAttribute('id')
          }
        }
      }
      return S(e.replace(oe, '$1'), t, n, r)
    }
    function n() {
      function e(n, r) {
        return t.push(n + ' ') > w.cacheLength && delete e[t.shift()],
        e[n + ' '] = r
      }
      var t = [
      ];
      return e
    }
    function r(e) {
      return e[M] = !0,
      e
    }
    function i(e) {
      var t = q.createElement('fieldset');
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t),
        t = null
      }
    }
    function o(e, t) {
      for (var n = e.split('|'), r = n.length; r--; ) w.attrHandle[n[r]] = t
    }
    function a(e, t) {
      var n = t && e,
      r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; n = n.nextSibling; ) if (n === t) return - 1;
      return e ? 1 : - 1
    }
    function s(e) {
      return function (t) {
        return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : 'label' in t && t.disabled === e
      }
    }
    function u(e) {
      return r(function (t) {
        return t = + t,
        r(function (n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }
    function l(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    function c() {
    }
    function f(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r
    }
    function p(e, t, n) {
      var r = t.dir,
      i = t.next,
      o = i || r,
      a = n && 'parentNode' === o,
      s = $++;
      return t.first ? function (t, n, i) {
        for (; t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, i);
        return !1
      }
       : function (t, n, u) {
        var l,
        c,
        f,
        p = [
          W,
          s
        ];
        if (u) {
          for (; t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
        } else for (; t = t[r]; ) if (1 === t.nodeType || a) if (f = t[M] || (t[M] = {
        }), c = f[t.uniqueID] || (f[t.uniqueID] = {
        }), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
         else {
          if ((l = c[o]) && l[0] === W && l[1] === s) return p[2] = l[2];
          if (c[o] = p, p[2] = e(t, n, u)) return !0
        }
        return !1
      }
    }
    function d(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
        return !0
      }
       : e[0]
    }
    function h(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
      return r
    }
    function g(e, t, n, r, i) {
      for (var o, a = [
      ], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }
    function v(e, t, n, i, o, a) {
      return i && !i[M] && (i = v(i)),
      o && !o[M] && (o = v(o, a)),
      r(function (r, a, s, u) {
        var l,
        c,
        f,
        p = [
        ],
        d = [
        ],
        v = a.length,
        m = r || h(t || '*', s.nodeType ? [
          s
        ] : s, [
        ]),
        y = !e || !r && t ? m : g(m, p, e, s, u),
        x = n ? o || (r ? e : v || i) ? [
        ] : a : y;
        if (n && n(y, x, s, u), i) for (l = g(x, d), i(l, [
        ], s, u), c = l.length; c--; ) (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [
              ], c = x.length; c--; ) (f = x[c]) && l.push(y[c] = f);
              o(null, x = [
              ], l, u)
            }
            for (c = x.length; c--; ) (f = x[c]) && (l = o ? K(r, f)  : p[c]) > - 1 && (r[l] = !(a[l] = f))
          }
        } else x = g(x === a ? x.splice(v, x.length)  : x),
        o ? o(null, a, x, u)  : Q.apply(a, x)
      })
    }
    function m(e) {
      for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[' '], s = o ? 1 : 0, u = p(function (e) {
        return e === t
      }, a, !0), l = p(function (e) {
        return K(t, e) > - 1
      }, a, !0), c = [
        function (e, n, r) {
          var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r)  : l(e, n, r));
          return t = null,
          i
        }
      ]; s < i; s++) if (n = w.relative[e[s].type]) c = [
        p(d(c), n)
      ];
       else {
        if ((n = w.filter[e[s].type].apply(null, e[s].matches)) [M]) {
          for (r = ++s; r < i && !w.relative[e[r].type]; r++);
          return v(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({
            value: ' ' === e[s - 2].type ? '*' : ''
          })).replace(oe, '$1'), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e))
        }
        c.push(n)
      }
      return d(c)
    }
    function y(e, n) {
      var i = n.length > 0,
      o = e.length > 0,
      a = function (r, a, s, u, l) {
        var c,
        f,
        p,
        d = 0,
        h = '0',
        v = r && [
        ],
        m = [
        ],
        y = N,
        x = r || o && w.find.TAG('*', l),
        b = W += null == y ? 1 : Math.random() || 0.1,
        T = x.length;
        for (l && (N = a === q || a || l); h !== T && null != (c = x[h]); h++) {
          if (o && c) {
            for (f = 0, a || c.ownerDocument === q || (A(c), s = !H); p = e[f++]; ) if (p(c, a || q, s)) {
              u.push(c);
              break
            }
            l && (W = b)
          }
          i && ((c = !p && c) && d--, r && v.push(c))
        }
        if (d += h, i && h !== d) {
          for (f = 0; p = n[f++]; ) p(v, m, a, s);
          if (r) {
            if (d > 0) for (; h--; ) v[h] || m[h] || (m[h] = G.call(u));
            m = g(m)
          }
          Q.apply(u, m),
          l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
        }
        return l && (W = b, N = y),
        v
      };
      return i ? r(a)  : a
    }
    var x,
    b,
    w,
    T,
    C,
    E,
    k,
    S,
    N,
    D,
    j,
    A,
    q,
    L,
    H,
    F,
    O,
    P,
    R,
    M = 'sizzle' + 1 * new Date,
    I = e.document,
    W = 0,
    $ = 0,
    B = n(),
    _ = n(),
    z = n(),
    X = function (e, t) {
      return e === t && (j = !0),
      0
    },
    U = {
    }.hasOwnProperty,
    V = [
    ],
    G = V.pop,
    Y = V.push,
    Q = V.push,
    J = V.slice,
    K = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
      return - 1
    },
    Z = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
    ee = '[\\x20\\t\\r\\n\\f]',
    te = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
    ne = '\\[' + ee + '*(' + te + ')(?:' + ee + '*([*^$|!~]?=)' + ee + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + te + '))|)' + ee + '*\\]',
    re = ':(' + te + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ne + ')*)|.*)\\)|)',
    ie = new RegExp(ee + '+', 'g'),
    oe = new RegExp('^' + ee + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ee + '+$', 'g'),
    ae = new RegExp('^' + ee + '*,' + ee + '*'),
    se = new RegExp('^' + ee + '*([>+~]|' + ee + ')' + ee + '*'),
    ue = new RegExp('=' + ee + '*([^\\]\'"]*?)' + ee + '*\\]', 'g'),
    le = new RegExp(re),
    ce = new RegExp('^' + te + '$'),
    fe = {
      ID: new RegExp('^#(' + te + ')'),
      CLASS: new RegExp('^\\.(' + te + ')'),
      TAG: new RegExp('^(' + te + '|[*])'),
      ATTR: new RegExp('^' + ne),
      PSEUDO: new RegExp('^' + re),
      CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ee + '*(even|odd|(([+-]|)(\\d*)n|)' + ee + '*(?:([+-]|)' + ee + '*(\\d+)|))' + ee + '*\\)|)', 'i'),
      bool: new RegExp('^(?:' + Z + ')$', 'i'),
      needsContext: new RegExp('^' + ee + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ee + '*((?:-\\d)?\\d*)' + ee + '*\\)|)(?=[^-]|$)', 'i')
    },
    pe = /^(?:input|select|textarea|button)$/i,
    de = /^h\d$/i,
    he = /^[^{]+\{\s*\[native \w/,
    ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    ve = /[+~]/,
    me = new RegExp('\\\\([\\da-f]{1,6}' + ee + '?|(' + ee + ')|.)', 'ig'),
    ye = function (e, t, n) {
      var r = '0x' + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536)  : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
    },
    xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    be = function (e, t) {
      return t ? '\0' === e ? '�' : e.slice(0, - 1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e
    },
    we = function () {
      A()
    },
    Te = p(function (e) {
      return !0 === e.disabled && ('form' in e || 'label' in e)
    }, {
      dir: 'parentNode',
      next: 'legend'
    });
    try {
      Q.apply(V = J.call(I.childNodes), I.childNodes),
      V[I.childNodes.length].nodeType
    } catch (e) {
      Q = {
        apply: V.length ? function (e, t) {
          Y.apply(e, J.call(t))
        }
         : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++]; );
          e.length = n - 1
        }
      }
    }
    b = t.support = {
    },
    C = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && 'HTML' !== t.nodeName
    },
    A = t.setDocument = function (e) {
      var t,
      n,
      r = e ? e.ownerDocument || e : I;
      return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, L = q.documentElement, H = !C(q), I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', we, !1)  : n.attachEvent && n.attachEvent('onunload', we)), b.attributes = i(function (e) {
        return e.className = 'i',
        !e.getAttribute('className')
      }), b.getElementsByTagName = i(function (e) {
        return e.appendChild(q.createComment('')),
        !e.getElementsByTagName('*').length
      }), b.getElementsByClassName = he.test(q.getElementsByClassName), b.getById = i(function (e) {
        return L.appendChild(e).id = M,
        !q.getElementsByName || !q.getElementsByName(M).length
      }), b.getById ? (w.filter.ID = function (e) {
        var t = e.replace(me, ye);
        return function (e) {
          return e.getAttribute('id') === t
        }
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && H) {
          var n = t.getElementById(e);
          return n ? [
            n
          ] : [
          ]
        }
      })  : (w.filter.ID = function (e) {
        var t = e.replace(me, ye);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
          return n && n.value === t
        }
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && H) {
          var n,
          r,
          i,
          o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
            for (i = t.getElementsByName(e), r = 0; o = i[r++]; ) if ((n = o.getAttributeNode('id')) && n.value === e) return [o]
          }
          return []
        }
      }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e)  : b.qsa ? t.querySelectorAll(e)  : void 0
      }
       : function (e, t) {
        var n,
        r = [
        ],
        i = 0,
        o = t.getElementsByTagName(e);
        if ('*' === e) {
          for (; n = o[i++]; ) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e)
      }, O = [
      ], F = [
      ], (b.qsa = he.test(q.querySelectorAll)) && (i(function (e) {
        L.appendChild(e).innerHTML = '<a id=\'' + M + '\'></a><select id=\'' + M + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>',
        e.querySelectorAll('[msallowcapture^=\'\']').length && F.push('[*^$]=' + ee + '*(?:\'\'|"")'),
        e.querySelectorAll('[selected]').length || F.push('\\[' + ee + '*(?:value|' + Z + ')'),
        e.querySelectorAll('[id~=' + M + '-]').length || F.push('~='),
        e.querySelectorAll(':checked').length || F.push(':checked'),
        e.querySelectorAll('a#' + M + '+*').length || F.push('.#.+[+~]')
      }), i(function (e) {
        e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
        var t = q.createElement('input');
        t.setAttribute('type', 'hidden'),
        e.appendChild(t).setAttribute('name', 'D'),
        e.querySelectorAll('[name=d]').length && F.push('name' + ee + '*[*^$|!~]?='),
        2 !== e.querySelectorAll(':enabled').length && F.push(':enabled', ':disabled'),
        L.appendChild(e).disabled = !0,
        2 !== e.querySelectorAll(':disabled').length && F.push(':enabled', ':disabled'),
        e.querySelectorAll('*,:x'),
        F.push(',.*:')
      })), (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
        b.disconnectedMatch = P.call(e, '*'),
        P.call(e, '[s!=\'\']:x'),
        O.push('!=', re)
      }), F = F.length && new RegExp(F.join('|')), O = O.length && new RegExp(O.join('|')), t = he.test(L.compareDocumentPosition), R = t || he.test(L.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
        r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r)  : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      }
       : function (e, t) {
        if (t) for (; t = t.parentNode; ) if (t === e) return !0;
        return !1
      }, X = t ? function (e, t) {
        if (e === t) return j = !0,
        0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t)  : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && R(I, e) ? - 1 : t === q || t.ownerDocument === I && R(I, t) ? 1 : D ? K(D, e) - K(D, t)  : 0 : 4 & n ? - 1 : 1)
      }
       : function (e, t) {
        if (e === t) return j = !0,
        0;
        var n,
        r = 0,
        i = e.parentNode,
        o = t.parentNode,
        s = [
          e
        ],
        u = [
          t
        ];
        if (!i || !o) return e === q ? - 1 : t === q ? 1 : i ? - 1 : o ? 1 : D ? K(D, e) - K(D, t)  : 0;
        if (i === o) return a(e, t);
        for (n = e; n = n.parentNode; ) s.unshift(n);
        for (n = t; n = n.parentNode; ) u.unshift(n);
        for (; s[r] === u[r]; ) r++;
        return r ? a(s[r], u[r])  : s[r] === I ? - 1 : u[r] === I ? 1 : 0
      }, q)  : q
    },
    t.matches = function (e, n) {
      return t(e, null, null, n)
    },
    t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== q && A(e), n = n.replace(ue, '=\'$1\']'), b.matchesSelector && H && !z[n + ' '] && (!O || !O.test(n)) && (!F || !F.test(n))) try {
        var r = P.call(e, n);
        if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {
      }
      return t(n, q, null, [
        e
      ]).length > 0
    },
    t.contains = function (e, t) {
      return (e.ownerDocument || e) !== q && A(e),
      R(e, t)
    },
    t.attr = function (e, t) {
      (e.ownerDocument || e) !== q && A(e);
      var n = w.attrHandle[t.toLowerCase()],
      r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H)  : void 0;
      return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t)  : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    },
    t.escape = function (e) {
      return (e + '').replace(xe, be)
    },
    t.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    },
    t.uniqueSort = function (e) {
      var t,
      n = [
      ],
      r = 0,
      i = 0;
      if (j = !b.detectDuplicates, D = !b.sortStable && e.slice(0), e.sort(X), j) {
        for (; t = e[i++]; ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1)
      }
      return D = null,
      e
    },
    T = t.getText = function (e) {
      var t,
      n = '',
      r = 0,
      i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else for (; t = e[r++]; ) n += T(t);
      return n
    },
    (w = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: fe,
      attrHandle: {
      },
      find: {
      },
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': {
          dir: 'parentNode'
        },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': {
          dir: 'previousSibling'
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(me, ye),
          e[3] = (e[3] || e[4] || e[5] || '').replace(me, ye),
          '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
          e.slice(0, 4)
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(),
          'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = + (e[4] ? e[5] + (e[6] || 1)  : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = + (e[7] + e[8] || 'odd' === e[3]))  : e[3] && t.error(e[0]),
          e
        },
        PSEUDO: function (e) {
          var t,
          n = !e[6] && e[2];
          return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(me, ye).toLowerCase();
          return '*' === e ? function () {
            return !0
          }
           : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function (e) {
          var t = B[e + ' '];
          return t || (t = new RegExp('(^|' + ee + ')' + e + '(' + ee + '|$)')) && B(e, function (e) {
            return t.test('string' == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute('class') || '')
          })
        },
        ATTR: function (e, n, r) {
          return function (i) {
            var o = t.attr(i, e);
            return null == o ? '!=' === n : !n || (o += '', '=' === n ? o === r : '!=' === n ? o !== r : '^=' === n ? r && 0 === o.indexOf(r)  : '*=' === n ? r && o.indexOf(r) > - 1 : '$=' === n ? r && o.slice( - r.length) === r : '~=' === n ? (' ' + o.replace(ie, ' ') + ' ').indexOf(r) > - 1 : '|=' === n && (o === r || o.slice(0, r.length + 1) === r + '-'))
          }
        },
        CHILD: function (e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3),
          a = 'last' !== e.slice( - 4),
          s = 'of-type' === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode
          }
           : function (t, n, u) {
            var l,
            c,
            f,
            p,
            d,
            h,
            g = o !== a ? 'nextSibling' : 'previousSibling',
            v = t.parentNode,
            m = s && t.nodeName.toLowerCase(),
            y = !u && !s,
            x = !1;
            if (v) {
              if (o) {
                for (; g; ) {
                  for (p = t; p = p[g]; ) if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                  h = g = 'only' === e && !h && 'nextSibling'
                }
                return !0
              }
              if (h = [
                a ? v.firstChild : v.lastChild
              ], a && y) {
                for (x = (d = (l = (c = (f = (p = v) [M] || (p[M] = {
                })) [p.uniqueID] || (f[p.uniqueID] = {
                })) [e] || [
                ]) [0] === W && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); ) if (1 === p.nodeType && ++x && p === t) {
                  c[e] = [
                    W,
                    d,
                    x
                  ];
                  break
                }
              } else if (y && (p = t, f = p[M] || (p[M] = {
              }), c = f[p.uniqueID] || (f[p.uniqueID] = {
              }), l = c[e] || [
              ], d = l[0] === W && l[1], x = d), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[M] || (p[M] = {
              }), c = f[p.uniqueID] || (f[p.uniqueID] = {
              }), c[e] = [
                W,
                x
              ]), p !== t)); );
              return (x -= i) === r || x % r == 0 && x / r >= 0
            }
          }
        },
        PSEUDO: function (e, n) {
          var i,
          o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
          return o[M] ? o(n)  : o.length > 1 ? (i = [
            e,
            e,
            '',
            n
          ], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
            for (var r, i = o(e, n), a = i.length; a--; ) r = K(e, i[a]),
            e[r] = !(t[r] = i[a])
          })  : function (e) {
            return o(e, 0, i)
          })  : o
        }
      },
      pseudos: {
        not: r(function (e) {
          var t = [
          ],
          n = [
          ],
          i = k(e.replace(oe, '$1'));
          return i[M] ? r(function (e, t, n, r) {
            for (var o, a = i(e, null, r, [
            ]), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o))
          })  : function (e, r, o) {
            return t[0] = e,
            i(t, null, o, n),
            t[0] = null,
            !n.pop()
          }
        }),
        has: r(function (e) {
          return function (n) {
            return t(e, n).length > 0
          }
        }),
        contains: r(function (e) {
          return e = e.replace(me, ye),
          function (t) {
            return (t.textContent || t.innerText || T(t)).indexOf(e) > - 1
          }
        }),
        lang: r(function (e) {
          return ce.test(e || '') || t.error('unsupported lang: ' + e),
          e = e.replace(me, ye).toLowerCase(),
          function (t) {
            var n;
            do {
              if (n = H ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function (e) {
          return e === L
        },
        focus: function (e) {
          return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: s(!1),
        disabled: s(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex,
          !0 === e.selected
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function (e) {
          return !w.pseudos.empty(e)
        },
        header: function (e) {
          return de.test(e.nodeName)
        },
        input: function (e) {
          return pe.test(e.nodeName)
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
        },
        first: u(function () {
          return [0]
        }),
        last: u(function (e, t) {
          return [t - 1]
        }),
        eq: u(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: u(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: u(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: u(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
          return e
        }),
        gt: u(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e
        })
      }
    }).pseudos.nth = w.pseudos.eq;
    for (x in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) w.pseudos[x] = function (e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e
      }
    }(x);
    for (x in {
      submit: !0,
      reset: !0
    }) w.pseudos[x] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e
      }
    }(x);
    return c.prototype = w.filters = w.pseudos,
    w.setFilters = new c,
    E = t.tokenize = function (e, n) {
      var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c = _[e + ' '];
      if (c) return n ? 0 : c.slice(0);
      for (s = e, u = [
      ], l = w.preFilter; s; ) {
        r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [
        ])),
        r = !1,
        (i = se.exec(s)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(oe, ' ')
        }), s = s.slice(r.length));
        for (a in w.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
          value: r,
          type: a,
          matches: i
        }), s = s.slice(r.length));
        if (!r) break
      }
      return n ? s.length : s ? t.error(e)  : _(e, u).slice(0)
    },
    k = t.compile = function (e, t) {
      var n,
      r = [
      ],
      i = [
      ],
      o = z[e + ' '];
      if (!o) {
        for (t || (t = E(e)), n = t.length; n--; ) o = m(t[n]),
        o[M] ? r.push(o)  : i.push(o);
        (o = z(e, y(i, r))).selector = e
      }
      return o
    },
    S = t.select = function (e, t, n, r) {
      var i,
      o,
      a,
      s,
      u,
      c = 'function' == typeof e && e,
      p = !r && E(e = c.selector || e);
      if (n = n || [
      ], 1 === p.length) {
        if ((o = p[0] = p[0].slice(0)).length > 2 && 'ID' === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
          if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [
          ]) [0])) return n;
          c && (t = t.parentNode),
          e = e.slice(o.shift().value.length)
        }
        for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]); ) if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) {
          if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r),
          n;
          break
        }
      }
      return (c || k(e, p)) (r, t, !H, n, !t || ve.test(e) && l(t.parentNode) || t),
      n
    },
    b.sortStable = M.split('').sort(X).join('') === M,
    b.detectDuplicates = !!j,
    A(),
    b.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition(q.createElement('fieldset'))
    }),
    i(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>',
      '#' === e.firstChild.getAttribute('href')
    }) || o('type|href|height|width', function (e, t, n) {
      if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
    }),
    b.attributes && i(function (e) {
      return e.innerHTML = '<input/>',
      e.firstChild.setAttribute('value', ''),
      '' === e.firstChild.getAttribute('value')
    }) || o('value', function (e, t, n) {
      if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
    }),
    i(function (e) {
      return null == e.getAttribute('disabled')
    }) || o(Z, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase()  : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }),
    t
  }(e);
  he.find = xe,
  he.expr = xe.selectors,
  he.expr[':'] = he.expr.pseudos,
  he.uniqueSort = he.unique = xe.uniqueSort,
  he.text = xe.getText,
  he.isXMLDoc = xe.isXML,
  he.contains = xe.contains,
  he.escapeSelector = xe.escape;
  var be = function (e, t, n) {
    for (var r = [
    ], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
      if (i && he(e).is(n)) break;
      r.push(e)
    }
    return r
  },
  we = function (e, t) {
    for (var n = [
    ]; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  },
  Te = he.expr.match.needsContext,
  Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
  Ee = /^.[^:#\[\.,]*$/;
  he.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ':not(' + e + ')'),
    1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [
      r
    ] : [
    ] : he.find.matches(e, he.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  },
  he.fn.extend({
    find: function (e) {
      var t,
      n,
      r = this.length,
      i = this;
      if ('string' != typeof e) return this.pushStack(he(e).filter(function () {
        for (t = 0; t < r; t++) if (he.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
      return r > 1 ? he.uniqueSort(n)  : n
    },
    filter: function (e) {
      return this.pushStack(o(this, e || [
      ], !1))
    },
    not: function (e) {
      return this.pushStack(o(this, e || [
      ], !0))
    },
    is: function (e) {
      return !!o(this, 'string' == typeof e && Te.test(e) ? he(e)  : e || [
      ], !1).length
    }
  });
  var ke,
  Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (he.fn.init = function (e, t, n) {
    var r,
    i;
    if (!e) return this;
    if (n = n || ke, 'string' == typeof e) {
      if (!(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [
        null,
        e,
        null
      ] : Se.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e)  : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(r[1]) && he.isPlainObject(t)) for (r in t) he.isFunction(this[r]) ? this[r](t[r])  : this.attr(r, t[r]);
        return this
      }
      return (i = te.getElementById(r[2])) && (this[0] = i, this.length = 1),
      this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this)  : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e)  : e(he)  : he.makeArray(e, this)
  }).prototype = he.fn,
  ke = he(te);
  var Ne = /^(?:parents|prev(?:Until|All))/,
  De = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  he.fn.extend({
    has: function (e) {
      var t = he(e, this),
      n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n,
      r = 0,
      i = this.length,
      o = [
      ],
      a = 'string' != typeof e && he(e);
      if (!Te.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > - 1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(o.length > 1 ? he.uniqueSort(o)  : o)
    },
    index: function (e) {
      return e ? 'string' == typeof e ? ae.call(he(e), this[0])  : ae.call(this, e.jquery ? e[0] : e)  : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
    },
    add: function (e, t) {
      return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
  he.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return be(e, 'parentNode')
    },
    parentsUntil: function (e, t, n) {
      return be(e, 'parentNode', n)
    },
    next: function (e) {
      return a(e, 'nextSibling')
    },
    prev: function (e) {
      return a(e, 'previousSibling')
    },
    nextAll: function (e) {
      return be(e, 'nextSibling')
    },
    prevAll: function (e) {
      return be(e, 'previousSibling')
    },
    nextUntil: function (e, t, n) {
      return be(e, 'nextSibling', n)
    },
    prevUntil: function (e, t, n) {
      return be(e, 'previousSibling', n)
    },
    siblings: function (e) {
      return we((e.parentNode || {
      }).firstChild, e)
    },
    children: function (e) {
      return we(e.firstChild)
    },
    contents: function (e) {
      return i(e, 'iframe') ? e.contentDocument : (i(e, 'template') && (e = e.content || e), he.merge([], e.childNodes))
    }
  }, function (e, t) {
    he.fn[e] = function (n, r) {
      var i = he.map(this, t, n);
      return 'Until' !== e.slice( - 5) && (r = n),
      r && 'string' == typeof r && (i = he.filter(r, i)),
      this.length > 1 && (De[e] || he.uniqueSort(i), Ne.test(e) && i.reverse()),
      this.pushStack(i)
    }
  });
  var je = /[^\x20\t\r\n\f]+/g;
  he.Callbacks = function (e) {
    e = 'string' == typeof e ? s(e)  : he.extend({
    }, e);
    var t,
    n,
    r,
    i,
    o = [
    ],
    a = [
    ],
    u = - 1,
    l = function () {
      for (i = i || e.once, r = t = !0; a.length; u = - 1) for (n = a.shift(); ++u < o.length; ) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
      e.memory || (n = !1),
      t = !1,
      i && (o = n ? [
      ] : '')
    },
    c = {
      add: function () {
        return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
          he.each(n, function (n, r) {
            he.isFunction(r) ? e.unique && c.has(r) || o.push(r)  : r && r.length && 'string' !== he.type(r) && t(r)
          })
        }(arguments), n && !t && l()),
        this
      },
      remove: function () {
        return he.each(arguments, function (e, t) {
          for (var n; (n = he.inArray(t, o, n)) > - 1; ) o.splice(n, 1),
          n <= u && u--
        }),
        this
      },
      has: function (e) {
        return e ? he.inArray(e, o) > - 1 : o.length > 0
      },
      empty: function () {
        return o && (o = [
        ]),
        this
      },
      disable: function () {
        return i = a = [
        ],
        o = n = '',
        this
      },
      disabled: function () {
        return !o
      },
      lock: function () {
        return i = a = [
        ],
        n || t || (o = n = ''),
        this
      },
      locked: function () {
        return !!i
      },
      fireWith: function (e, n) {
        return i || (n = n || [
        ], n = [
          e,
          n.slice ? n.slice()  : n
        ], a.push(n), t || l()),
        this
      },
      fire: function () {
        return c.fireWith(this, arguments),
        this
      },
      fired: function () {
        return !!r
      }
    };
    return c
  },
  he.extend({
    Deferred: function (t) {
      var n = [
        ['notify',
        'progress',
        he.Callbacks('memory'),
        he.Callbacks('memory'),
        2],
        [
          'resolve',
          'done',
          he.Callbacks('once memory'),
          he.Callbacks('once memory'),
          0,
          'resolved'
        ],
        [
          'reject',
          'fail',
          he.Callbacks('once memory'),
          he.Callbacks('once memory'),
          1,
          'rejected'
        ]
      ],
      r = 'pending',
      i = {
        state: function () {
          return r
        },
        always: function () {
          return o.done(arguments).fail(arguments),
          this
        },
        catch : function (e) {
          return i.then(null, e)
        },
        pipe: function () {
          var e = arguments;
          return he.Deferred(function (t) {
            he.each(n, function (n, r) {
              var i = he.isFunction(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject)  : t[r[0] + 'With'](this, i ? [
                  e
                ] : arguments)
              })
            }),
            e = null
          }).promise()
        },
        then: function (t, r, i) {
          function o(t, n, r, i) {
            return function () {
              var s = this,
              c = arguments,
              f = function () {
                var e,
                f;
                if (!(t < a)) {
                  if ((e = r.apply(s, c)) === n.promise()) throw new TypeError('Thenable self-resolution');
                  f = e && ('object' == typeof e || 'function' == typeof e) && e.then,
                  he.isFunction(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i))  : (a++, f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith)))  : (r !== u && (s = void 0, c = [
                    e
                  ]), (i || n.resolveWith) (s, c))
                }
              },
              p = i ? f : function () {
                try {
                  f()
                } catch (e) {
                  he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace),
                  t + 1 >= a && (r !== l && (s = void 0, c = [
                    e
                  ]), n.rejectWith(s, c))
                }
              };
              t ? p()  : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
            }
          }
          var a = 0;
          return he.Deferred(function (e) {
            n[0][3].add(o(0, e, he.isFunction(i) ? i : u, e.notifyWith)),
            n[1][3].add(o(0, e, he.isFunction(t) ? t : u)),
            n[2][3].add(o(0, e, he.isFunction(r) ? r : l))
          }).promise()
        },
        promise: function (e) {
          return null != e ? he.extend(e, i)  : i
        }
      },
      o = {
      };
      return he.each(n, function (e, t) {
        var a = t[2],
        s = t[5];
        i[t[1]] = a.add,
        s && a.add(function () {
          r = s
        }, n[3 - e][2].disable, n[0][2].lock),
        a.add(t[3].fire),
        o[t[0]] = function () {
          return o[t[0] + 'With'](this === o ? void 0 : this, arguments),
          this
        },
        o[t[0] + 'With'] = a.fireWith
      }),
      i.promise(o),
      t && t.call(o, o),
      o
    },
    when: function (e) {
      var t = arguments.length,
      n = t,
      r = Array(n),
      i = re.call(arguments),
      o = he.Deferred(),
      a = function (e) {
        return function (n) {
          r[e] = this,
          i[e] = arguments.length > 1 ? re.call(arguments)  : n,
          --t || o.resolveWith(r, i)
        }
      };
      if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), 'pending' === o.state() || he.isFunction(i[n] && i[n].then))) return o.then();
      for (; n--; ) c(i[n], a(n), o.reject);
      return o.promise()
    }
  });
  var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  he.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n)
  },
  he.readyException = function (t) {
    e.setTimeout(function () {
      throw t
    })
  };
  var qe = he.Deferred();
  he.fn.ready = function (e) {
    return qe.then(e).catch (function (e) {
      he.readyException(e)
    }),
    this
  },
  he.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || qe.resolveWith(te, [
        he
      ]))
    }
  }),
  he.ready.then = qe.then,
  'complete' === te.readyState || 'loading' !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready)  : (te.addEventListener('DOMContentLoaded', f), e.addEventListener('load', f));
  var Le = function (e, t, n, r, i, o, a) {
    var s = 0,
    u = e.length,
    l = null == n;
    if ('object' === he.type(n)) {
      i = !0;
      for (s in n) Le(e, t, s, n[s], !0, o, a)
    } else if (void 0 !== r && (i = !0, he.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null)  : (l = t, t = function (e, t, n) {
      return l.call(he(e), n)
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e)  : u ? t(e[0], n)  : o
  },
  He = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || ! + e.nodeType
  };
  p.uid = 1,
  p.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {
      }, He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))),
      t
    },
    set: function (e, t, n) {
      var r,
      i = this.cache(e);
      if ('string' == typeof t) i[he.camelCase(t)] = n;
       else for (r in t) i[he.camelCase(r)] = t[r];
      return i
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e)  : e[this.expando] && e[this.expando][he.camelCase(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t)  : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n,
      r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          Array.isArray(t) ? t = t.map(he.camelCase)  : (t = he.camelCase(t), t = t in r ? [
            t
          ] : t.match(je) || [
          ]),
          n = t.length;
          for (; n--; ) delete r[t[n]]
        }(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !he.isEmptyObject(t)
    }
  };
  var Fe = new p,
  Oe = new p,
  Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  Re = /[A-Z]/g;
  he.extend({
    hasData: function (e) {
      return Oe.hasData(e) || Fe.hasData(e)
    },
    data: function (e, t, n) {
      return Oe.access(e, t, n)
    },
    removeData: function (e, t) {
      Oe.remove(e, t)
    },
    _data: function (e, t, n) {
      return Fe.access(e, t, n)
    },
    _removeData: function (e, t) {
      Fe.remove(e, t)
    }
  }),
  he.fn.extend({
    data: function (e, t) {
      var n,
      r,
      i,
      o = this[0],
      a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = Oe.get(o), 1 === o.nodeType && !Fe.get(o, 'hasDataAttrs'))) {
          for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf('data-') && (r = he.camelCase(r.slice(5)), h(o, r, i[r]));
          Fe.set(o, 'hasDataAttrs', !0)
        }
        return i
      }
      return 'object' == typeof e ? this.each(function () {
        Oe.set(this, e)
      })  : Le(this, function (t) {
        var n;
        if (o && void 0 === t) {
          if (void 0 !== (n = Oe.get(o, e))) return n;
          if (void 0 !== (n = h(o, e))) return n
        } else this.each(function () {
          Oe.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        Oe.remove(this, e)
      })
    }
  }),
  he.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || 'fx') + 'queue',
      r = Fe.get(e, t),
      n && (!r || Array.isArray(n) ? r = Fe.access(e, t, he.makeArray(n))  : r.push(n)),
      r || [
      ]
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = he.queue(e, t),
      r = n.length,
      i = n.shift(),
      o = he._queueHooks(e, t);
      'inprogress' === i && (i = n.shift(), r--),
      i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, function () {
        he.dequeue(e, t)
      }, o)),
      !r && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return Fe.get(e, n) || Fe.access(e, n, {
        empty: he.Callbacks('once memory').add(function () {
          Fe.remove(e, [
            t + 'queue',
            n
          ])
        })
      })
    }
  }),
  he.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return 'string' != typeof e && (t = e, e = 'fx', n--),
      arguments.length < n ? he.queue(this[0], e)  : void 0 === t ? this : this.each(function () {
        var n = he.queue(this, e, t);
        he._queueHooks(this, e),
        'fx' === e && 'inprogress' !== n[0] && he.dequeue(this, e)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        he.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', [
      ])
    },
    promise: function (e, t) {
      var n,
      r = 1,
      i = he.Deferred(),
      o = this,
      a = this.length,
      s = function () {
        --r || i.resolveWith(o, [
          o
        ])
      };
      for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; a--; ) (n = Fe.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
      return s(),
      i.promise(t)
    }
  });
  var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  Ie = new RegExp('^(?:([+-])=|)(' + Me + ')([a-z%]*)$', 'i'),
  We = [
    'Top',
    'Right',
    'Bottom',
    'Left'
  ],
  $e = function (e, t) {
    return 'none' === (e = t || e).style.display || '' === e.style.display && he.contains(e.ownerDocument, e) && 'none' === he.css(e, 'display')
  },
  Be = function (e, t, n, r) {
    var i,
    o,
    a = {
    };
    for (o in t) a[o] = e.style[o],
    e.style[o] = t[o];
    i = n.apply(e, r || [
    ]);
    for (o in t) e.style[o] = a[o];
    return i
  },
  _e = {
  };
  he.fn.extend({
    show: function () {
      return m(this, !0)
    },
    hide: function () {
      return m(this)
    },
    toggle: function (e) {
      return 'boolean' == typeof e ? e ? this.show()  : this.hide()  : this.each(function () {
        $e(this) ? he(this).show()  : he(this).hide()
      })
    }
  });
  var ze = /^(?:checkbox|radio)$/i,
  Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
  Ue = /^$|\/(?:java|ecma)script/i,
  Ve = {
    option: [
      1,
      '<select multiple=\'multiple\'>',
      '</select>'
    ],
    thead: [
      1,
      '<table>',
      '</table>'
    ],
    col: [
      2,
      '<table><colgroup>',
      '</colgroup></table>'
    ],
    tr: [
      2,
      '<table><tbody>',
      '</tbody></table>'
    ],
    td: [
      3,
      '<table><tbody><tr>',
      '</tr></tbody></table>'
    ],
    _default: [
      0,
      '',
      ''
    ]
  };
  Ve.optgroup = Ve.option,
  Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead,
  Ve.th = Ve.td;
  var Ge = /<|&#?\w+;/;
  !function () {
    var e = te.createDocumentFragment().appendChild(te.createElement('div')),
    t = te.createElement('input');
    t.setAttribute('type', 'radio'),
    t.setAttribute('checked', 'checked'),
    t.setAttribute('name', 't'),
    e.appendChild(t),
    pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
    e.innerHTML = '<textarea>x</textarea>',
    pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var Ye = te.documentElement,
  Qe = /^key/,
  Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  Ke = /^([^.]*)(?:\.(.+)|)/;
  he.event = {
    global: {
    },
    add: function (e, t, n, r, i) {
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
      v = Fe.get(e);
      if (v) for (n.handler && (o = n, n = o.handler, i = o.selector), i && he.find.matchesSelector(Ye, i), n.guid || (n.guid = he.guid++), (u = v.events) || (u = v.events = {
      }), (a = v.handle) || (a = v.handle = function (t) {
        return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments)  : void 0
      }), l = (t = (t || '').match(je) || [
        ''
      ]).length; l--; ) s = Ke.exec(t[l]) || [
      ],
      d = g = s[1],
      h = (s[2] || '').split('.').sort(),
      d && (f = he.event.special[d] || {
      }, d = (i ? f.delegateType : f.bindType) || d, f = he.event.special[d] || {
      }, c = he.extend({
        type: d,
        origType: g,
        data: r,
        handler: n,
        guid: n.guid,
        selector: i,
        needsContext: i && he.expr.match.needsContext.test(i),
        namespace: h.join('.')
      }, o), (p = u[d]) || (p = u[d] = [
      ], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c)  : p.push(c), he.event.global[d] = !0)
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
      v = Fe.hasData(e) && Fe.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || '').match(je) || [
          ''
        ]).length; l--; ) if (s = Ke.exec(t[l]) || [
        ], d = g = s[1], h = (s[2] || '').split('.').sort(), d) {
          for (f = he.event.special[d] || {
          }, p = u[d = (r ? f.delegateType : f.bindType) || d] || [
          ], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = p.length; o--; ) c = p[o],
          !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || he.removeEvent(e, d, v.handle), delete u[d])
        } else for (d in u) he.event.remove(e, d + t[l], n, r, !0);
        he.isEmptyObject(u) && Fe.remove(e, 'handle events')
      }
    },
    dispatch: function (e) {
      var t,
      n,
      r,
      i,
      o,
      a,
      s = he.event.fix(e),
      u = new Array(arguments.length),
      l = (Fe.get(this, 'events') || {
      }) [s.type] || [
      ],
      c = he.event.special[s.type] || {
      };
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        for (a = he.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped(); ) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); ) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((he.event.special[o.origType] || {
        }).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s),
        s.result
      }
    },
    handlers: function (e, t) {
      var n,
      r,
      i,
      o,
      a,
      s = [
      ],
      u = t.delegateCount,
      l = e.target;
      if (u && l.nodeType && !('click' === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
        for (o = [
        ], a = {
        }, n = 0; n < u; n++) r = t[n],
        i = r.selector + ' ',
        void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(l) > - 1 : he.find(i, this, null, [
          l
        ]).length),
        a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        })
      }
      return l = this,
      u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }),
      s
    },
    addProp: function (e, t) {
      Object.defineProperty(he.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: he.isFunction(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent)
        }
         : function () {
          if (this.originalEvent) return this.originalEvent[e]
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          })
        }
      })
    },
    fix: function (e) {
      return e[he.expando] ? e : new he.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== C() && this.focus) return this.focus(),
          !1
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === C() && this.blur) return this.blur(),
          !1
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if ('checkbox' === this.type && this.click && i(this, 'input')) return this.click(),
          !1
        },
        _default: function (e) {
          return i(e.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  },
  he.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  },
  he.Event = function (e, t) {
    return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget)  : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void (this[he.expando] = !0))  : new he.Event(e, t)
  },
  he.Event.prototype = {
    constructor: he.Event,
    isDefaultPrevented: T,
    isPropagationStopped: T,
    isImmediatePropagationStopped: T,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = w,
      e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = w,
      e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = w,
      e && !this.isSimulated && e.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  he.each({
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
      return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, he.event.addProp),
  he.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (e, t) {
    he.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n,
        r = this,
        i = e.relatedTarget,
        o = e.handleObj;
        return i && (i === r || he.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
        n
      }
    }
  }),
  he.fn.extend({
    on: function (e, t, n, r) {
      return E(this, e, t, n, r)
    },
    one: function (e, t, n, r) {
      return E(this, e, t, n, r, 1)
    },
    off: function (e, t, n) {
      var r,
      i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
      he(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler),
      this;
      if ('object' == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && 'function' != typeof t || (n = t, t = void 0),
      !1 === n && (n = T),
      this.each(function () {
        he.event.remove(this, e, n, t)
      })
    }
  });
  var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  et = /<script|<style|<link/i,
  tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
  nt = /^true\/(.*)/,
  rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  he.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ze, '<$1></$2>')
    },
    clone: function (e, t, n) {
      var r,
      i,
      o,
      a,
      s = e.cloneNode(!0),
      u = he.contains(e.ownerDocument, e);
      if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) for (a = y(s), o = y(e), r = 0, i = o.length; r < i; r++) j(o[r], a[r]);
      if (t) if (n) for (o = o || y(e), a = a || y(s), r = 0, i = o.length; r < i; r++) D(o[r], a[r]);
       else D(e, s);
      return (a = y(s, 'script')).length > 0 && x(a, !u && y(e, 'script')),
      s
    },
    cleanData: function (e) {
      for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++) if (He(n)) {
        if (t = n[Fe.expando]) {
          if (t.events) for (r in t.events) i[r] ? he.event.remove(n, r)  : he.removeEvent(n, r, t.handle);
          n[Fe.expando] = void 0
        }
        n[Oe.expando] && (n[Oe.expando] = void 0)
      }
    }
  }),
  he.fn.extend({
    detach: function (e) {
      return q(this, e, !0)
    },
    remove: function (e) {
      return q(this, e)
    },
    text: function (e) {
      return Le(this, function (e) {
        return void 0 === e ? he.text(this)  : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return A(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return A(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = k(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return A(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return A(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = '');
      return this
    },
    clone: function (e, t) {
      return e = null != e && e,
      t = null == t ? e : t,
      this.map(function () {
        return he.clone(this, e, t)
      })
    },
    html: function (e) {
      return Le(this, function (e) {
        var t = this[0] || {
        },
        n = 0,
        r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ('string' == typeof e && !et.test(e) && !Ve[(Xe.exec(e) || [
          '',
          ''
        ]) [1].toLowerCase()]) {
          e = he.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {
            }).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var e = [
      ];
      return A(this, arguments, function (t) {
        var n = this.parentNode;
        he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }),
  he.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    he.fn[e] = function (e) {
      for (var n, r = [
      ], i = he(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0),
      he(i[a]) [t](n),
      oe.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var it = /^margin/,
  ot = new RegExp('^(' + Me + ')(?!px)[a-z%]+$', 'i'),
  at = function (t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e),
    n.getComputedStyle(t)
  };
  !function () {
    function t() {
      if (s) {
        s.style.cssText = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%',
        s.innerHTML = '',
        Ye.appendChild(a);
        var t = e.getComputedStyle(s);
        n = '1%' !== t.top,
        o = '2px' === t.marginLeft,
        r = '4px' === t.width,
        s.style.marginRight = '50%',
        i = '4px' === t.marginRight,
        Ye.removeChild(a),
        s = null
      }
    }
    var n,
    r,
    i,
    o,
    a = te.createElement('div'),
    s = te.createElement('div');
    s.style && (s.style.backgroundClip = 'content-box', s.cloneNode(!0).style.backgroundClip = '', pe.clearCloneStyle = 'content-box' === s.style.backgroundClip, a.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', a.appendChild(s), he.extend(pe, {
      pixelPosition: function () {
        return t(),
        n
      },
      boxSizingReliable: function () {
        return t(),
        r
      },
      pixelMarginRight: function () {
        return t(),
        i
      },
      reliableMarginLeft: function () {
        return t(),
        o
      }
    }))
  }();
  var st = /^(none|table(?!-c[ea]).+)/,
  ut = /^--/,
  lt = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  },
  ct = {
    letterSpacing: '0',
    fontWeight: '400'
  },
  ft = [
    'Webkit',
    'Moz',
    'ms'
  ],
  pt = te.createElement('div').style;
  he.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = L(e, 'opacity');
            return '' === n ? '1' : n
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
      float: 'cssFloat'
    },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
        o,
        a,
        s = he.camelCase(t),
        u = ut.test(t),
        l = e.style;
        return u || (t = O(s)),
        a = he.cssHooks[t] || he.cssHooks[s],
        void 0 === n ? a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ('string' === (o = typeof n) && (i = Ie.exec(n)) && i[1] && (n = g(e, t, i), o = 'number'), void (null != n && n === n && ('number' === o && (n += i && i[3] || (he.cssNumber[s] ? '' : 'px')), pe.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n)  : l[t] = n))))
      }
    },
    css: function (e, t, n, r) {
      var i,
      o,
      a,
      s = he.camelCase(t);
      return ut.test(t) || (t = O(s)),
      (a = he.cssHooks[t] || he.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
      void 0 === i && (i = L(e, t, r)),
      'normal' === i && t in ct && (i = ct[t]),
      '' === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i)  : i
    }
  }),
  he.each(['height',
  'width'], function (e, t) {
    he.cssHooks[t] = {
      get: function (e, n, r) {
        if (n) return !st.test(he.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r)  : Be(e, lt, function () {
          return M(e, t, r)
        })
      },
      set: function (e, n, r) {
        var i,
        o = r && at(e),
        a = r && R(e, t, r, 'border-box' === he.css(e, 'boxSizing', !1, o), o);
        return a && (i = Ie.exec(n)) && 'px' !== (i[3] || 'px') && (e.style[t] = n, n = he.css(e, t)),
        P(e, n, a)
      }
    }
  }),
  he.cssHooks.marginLeft = H(pe.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(L(e, 'marginLeft')) || e.getBoundingClientRect().left - Be(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + 'px'
  }),
  he.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    he.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {
        }, o = 'string' == typeof n ? n.split(' ')  : [
          n
        ]; r < 4; r++) i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    },
    it.test(e) || (he.cssHooks[e + t].set = P)
  }),
  he.fn.extend({
    css: function (e, t) {
      return Le(this, function (e, t, n) {
        var r,
        i,
        o = {
        },
        a = 0;
        if (Array.isArray(t)) {
          for (r = at(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? he.style(e, t, n)  : he.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }),
  he.Tween = I,
  I.prototype = {
    constructor: I,
    init: function (e, t, n, r, i, o) {
      this.elem = e,
      this.prop = n,
      this.easing = i || he.easing._default,
      this.options = t,
      this.start = this.now = this.cur(),
      this.end = r,
      this.unit = o || (he.cssNumber[n] ? '' : 'px')
    },
    cur: function () {
      var e = I.propHooks[this.prop];
      return e && e.get ? e.get(this)  : I.propHooks._default.get(this)
    },
    run: function (e) {
      var t,
      n = I.propHooks[this.prop];
      return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)  : this.pos = t = e,
      this.now = (this.end - this.start) * t + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      n && n.set ? n.set(this)  : I.propHooks._default.set(this),
      this
    }
  },
  I.prototype.init.prototype = I.prototype,
  I.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0)
      },
      set: function (e) {
        he.fx.step[e.prop] ? he.fx.step[e.prop](e)  : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  },
  I.propHooks.scrollTop = I.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  },
  he.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2
    },
    _default: 'swing'
  },
  he.fx = I.prototype.init,
  he.fx.step = {
  };
  var dt,
  ht,
  gt = /^(?:toggle|show|hide)$/,
  vt = /queueHooks$/;
  he.Animation = he.extend(X, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return g(n.elem, e, Ie.exec(t), n),
          n
        }
      ]
    },
    tweener: function (e, t) {
      he.isFunction(e) ? (t = e, e = [
        '*'
      ])  : e = e.match(je);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r],
      X.tweeners[n] = X.tweeners[n] || [
      ],
      X.tweeners[n].unshift(t)
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
        f = 'width' in t || 'height' in t,
        p = this,
        d = {
        },
        h = e.style,
        g = e.nodeType && $e(e),
        v = Fe.get(e, 'fxshow');
        n.queue || (null == (a = he._queueHooks(e, 'fx')).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s()
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--,
            he.queue(e, 'fx').length || a.empty.fire()
          })
        }));
        for (r in t) if (i = t[r], gt.test(i)) {
          if (delete t[r], o = o || 'toggle' === i, i === (g ? 'hide' : 'show')) {
            if ('show' !== i || !v || void 0 === v[r]) continue;
            g = !0
          }
          d[r] = v && v[r] || he.style(e, r)
        }
        if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(d)) {
          f && 1 === e.nodeType && (n.overflow = [
            h.overflow,
            h.overflowX,
            h.overflowY
          ], null == (l = v && v.display) && (l = Fe.get(e, 'display')), 'none' === (c = he.css(e, 'display')) && (l ? c = l : (m([e], !0), l = e.style.display || l, c = he.css(e, 'display'), m([e]))), ('inline' === c || 'inline-block' === c && null != l) && 'none' === he.css(e, 'float') && (u || (p.done(function () {
            h.display = l
          }), null == l && (c = h.display, l = 'none' === c ? '' : c)), h.display = 'inline-block')),
          n.overflow && (h.overflow = 'hidden', p.always(function () {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
          })),
          u = !1;
          for (r in d) u || (v ? 'hidden' in v && (g = v.hidden)  : v = Fe.access(e, 'fxshow', {
            display: l
          }), o && (v.hidden = !g), g && m([e], !0), p.done(function () {
            g || m([e]),
            Fe.remove(e, 'fxshow');
            for (r in d) he.style(e, r, d[r])
          })),
          u = _(g ? v[r] : 0, r, p),
          r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
      }
    ],
    prefilter: function (e, t) {
      t ? X.prefilters.unshift(e)  : X.prefilters.push(e)
    }
  }),
  he.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? he.extend({
    }, e)  : {
      complete: n || !n && t || he.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !he.isFunction(t) && t
    };
    return he.fx.off ? r.duration = 0 : 'number' != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default),
    null != r.queue && !0 !== r.queue || (r.queue = 'fx'),
    r.old = r.complete,
    r.complete = function () {
      he.isFunction(r.old) && r.old.call(this),
      r.queue && he.dequeue(this, r.queue)
    },
    r
  },
  he.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter($e).css('opacity', 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (e, t, n, r) {
      var i = he.isEmptyObject(e),
      o = he.speed(t, n, r),
      a = function () {
        var t = X(this, he.extend({
        }, e), o);
        (i || Fe.get(this, 'finish')) && t.stop(!0)
      };
      return a.finish = a,
      i || !1 === o.queue ? this.each(a)  : this.queue(o.queue, a)
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop,
        t(n)
      };
      return 'string' != typeof e && (n = t, t = e, e = void 0),
      t && !1 !== e && this.queue(e || 'fx', [
      ]),
      this.each(function () {
        var t = !0,
        i = null != e && e + 'queueHooks',
        o = he.timers,
        a = Fe.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);
         else for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
        for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        !t && n || he.dequeue(this, e)
      })
    },
    finish: function (e) {
      return !1 !== e && (e = e || 'fx'),
      this.each(function () {
        var t,
        n = Fe.get(this),
        r = n[e + 'queue'],
        i = n[e + 'queueHooks'],
        o = he.timers,
        a = r ? r.length : 0;
        for (n.finish = !0, he.queue(this, e, [
        ]), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }),
  he.each(['toggle',
  'show',
  'hide'], function (e, t) {
    var n = he.fn[t];
    he.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments)  : this.animate(B(t, !0), e, r, i)
    }
  }),
  he.each({
    slideDown: B('show'),
    slideUp: B('hide'),
    slideToggle: B('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (e, t) {
    he.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }),
  he.timers = [
  ],
  he.fx.tick = function () {
    var e,
    t = 0,
    n = he.timers;
    for (dt = he.now(); t < n.length; t++) (e = n[t]) () || n[t] !== e || n.splice(t--, 1);
    n.length || he.fx.stop(),
    dt = void 0
  },
  he.fx.timer = function (e) {
    he.timers.push(e),
    he.fx.start()
  },
  he.fx.interval = 13,
  he.fx.start = function () {
    ht || (ht = !0, W())
  },
  he.fx.stop = function () {
    ht = null
  },
  he.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  he.fn.delay = function (t, n) {
    return t = he.fx ? he.fx.speeds[t] || t : t,
    n = n || 'fx',
    this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function () {
        e.clearTimeout(i)
      }
    })
  },
  function () {
    var e = te.createElement('input'),
    t = te.createElement('select').appendChild(te.createElement('option'));
    e.type = 'checkbox',
    pe.checkOn = '' !== e.value,
    pe.optSelected = t.selected,
    (e = te.createElement('input')).value = 't',
    e.type = 'radio',
    pe.radioValue = 't' === e.value
  }();
  var mt,
  yt = he.expr.attrHandle;
  he.fn.extend({
    attr: function (e, t) {
      return Le(this, he.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {
        he.removeAttr(this, e)
      })
    }
  }),
  he.extend({
    attr: function (e, t, n) {
      var r,
      i,
      o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n)  : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t)  : i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n)  : i && 'get' in i && null !== (r = i.get(e, t)) ? r : (r = he.find.attr(e, t), null == r ? void 0 : r))
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!pe.radioValue && 'radio' === t && i(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t),
            n && (e.value = n),
            t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
      r = 0,
      i = t && t.match(je);
      if (i && 1 === e.nodeType) for (; n = i[r++]; ) e.removeAttribute(n)
    }
  }),
  mt = {
    set: function (e, t, n) {
      return !1 === t ? he.removeAttr(e, n)  : e.setAttribute(n, n),
      n
    }
  },
  he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = yt[t] || he.find.attr;
    yt[t] = function (e, t, r) {
      var i,
      o,
      a = t.toLowerCase();
      return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o),
      i
    }
  });
  var xt = /^(?:input|select|textarea|button)$/i,
  bt = /^(?:a|area)$/i;
  he.fn.extend({
    prop: function (e, t) {
      return Le(this, he.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[he.propFix[e] || e]
      })
    }
  }),
  he.extend({
    prop: function (e, t, n) {
      var r,
      i,
      o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]),
      void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = he.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10)  : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : - 1
        }
      }
    },
    propFix: {
      for : 'htmlFor',
      class : 'className'
    }
  }),
  pe.optSelected || (he.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex,
      null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }),
  he.each(['tabIndex',
  'readOnly',
  'maxLength',
  'cellSpacing',
  'cellPadding',
  'rowSpan',
  'colSpan',
  'useMap',
  'frameBorder',
  'contentEditable'], function () {
    he.propFix[this.toLowerCase()] = this
  }),
  he.fn.extend({
    addClass: function (e) {
      var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u = 0;
      if (he.isFunction(e)) return this.each(function (t) {
        he(this).addClass(e.call(this, t, V(this)))
      });
      if ('string' == typeof e && e) for (t = e.match(je) || [
      ]; n = this[u++]; ) if (i = V(n), r = 1 === n.nodeType && ' ' + U(i) + ' ') {
        for (a = 0; o = t[a++]; ) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
        i !== (s = U(r)) && n.setAttribute('class', s)
      }
      return this
    },
    removeClass: function (e) {
      var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u = 0;
      if (he.isFunction(e)) return this.each(function (t) {
        he(this).removeClass(e.call(this, t, V(this)))
      });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof e && e) for (t = e.match(je) || [
      ]; n = this[u++]; ) if (i = V(n), r = 1 === n.nodeType && ' ' + U(i) + ' ') {
        for (a = 0; o = t[a++]; ) for (; r.indexOf(' ' + o + ' ') > - 1; ) r = r.replace(' ' + o + ' ', ' ');
        i !== (s = U(r)) && n.setAttribute('class', s)
      }
      return this
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e)  : this.removeClass(e)  : he.isFunction(e) ? this.each(function (n) {
        he(this).toggleClass(e.call(this, n, V(this), t), t)
      })  : this.each(function () {
        var t,
        r,
        i,
        o;
        if ('string' === n) for (r = 0, i = he(this), o = e.match(je) || [
        ]; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t)  : i.addClass(t);
         else void 0 !== e && 'boolean' !== n || ((t = V(this)) && Fe.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : Fe.get(this, '__className__') || ''))
      })
    },
    hasClass: function (e) {
      var t,
      n,
      r = 0;
      for (t = ' ' + e + ' '; n = this[r++]; ) if (1 === n.nodeType && (' ' + U(V(n)) + ' ').indexOf(t) > - 1) return !0;
      return !1
    }
  });
  var wt = /\r/g;
  he.fn.extend({
    val: function (e) {
      var t,
      n,
      r,
      i = this[0];
      return arguments.length ? (r = he.isFunction(e), this.each(function (n) {
        var i;
        1 === this.nodeType && (i = r ? e.call(this, n, he(this).val())  : e, null == i ? i = '' : 'number' == typeof i ? i += '' : Array.isArray(i) && (i = he.map(i, function (e) {
          return null == e ? '' : e + ''
        })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, i, 'value') || (this.value = i))
      }))  : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()], t && 'get' in t && void 0 !== (n = t.get(i, 'value')) ? n : (n = i.value, 'string' == typeof n ? n.replace(wt, '')  : null == n ? '' : n))  : void 0
    }
  }),
  he.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = he.find.attr(e, 'value');
          return null != t ? t : U(he.text(e))
        }
      },
      select: {
        get: function (e) {
          var t,
          n,
          r,
          o = e.options,
          a = e.selectedIndex,
          s = 'select-one' === e.type,
          u = s ? null : [
          ],
          l = s ? a + 1 : o.length;
          for (r = a < 0 ? l : s ? a : 0; r < l; r++) if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, 'optgroup'))) {
            if (t = he(n).val(), s) return t;
            u.push(t)
          }
          return u
        },
        set: function (e, t) {
          for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--; ) r = i[a],
          (r.selected = he.inArray(he.valHooks.option.get(r), o) > - 1) && (n = !0);
          return n || (e.selectedIndex = - 1),
          o
        }
      }
    }
  }),
  he.each(['radio',
  'checkbox'], function () {
    he.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > - 1
      }
    },
    pe.checkOn || (he.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value
    })
  });
  var Tt = /^(?:focusinfocus|focusoutblur)$/;
  he.extend(he.event, {
    trigger: function (t, n, r, i) {
      var o,
      a,
      s,
      u,
      l,
      c,
      f,
      p = [
        r || te
      ],
      d = le.call(t, 'type') ? t.type : t,
      h = le.call(t, 'namespace') ? t.namespace.split('.')  : [
      ];
      if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(d + he.event.triggered) && (d.indexOf('.') > - 1 && (h = d.split('.'), d = h.shift(), h.sort()), l = d.indexOf(':') < 0 && 'on' + d, t = t[he.expando] ? t : new he.Event(d, 'object' == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join('.'), t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')  : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [
        t
      ] : he.makeArray(n, [
        t
      ]), f = he.event.special[d] || {
      }, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
        if (!i && !f.noBubble && !he.isWindow(r)) {
          for (u = f.delegateType || d, Tt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a),
          s = a;
          s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
        }
        for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); ) t.type = o > 1 ? u : f.bindType || d,
        (c = (Fe.get(a, 'events') || {
        }) [t.type] && Fe.get(a, 'handle')) && c.apply(a, n),
        (c = l && a[l]) && c.apply && He(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
        return t.type = d,
        i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !He(r) || l && he.isFunction(r[d]) && !he.isWindow(r) && ((s = r[l]) && (r[l] = null), he.event.triggered = d, r[d](), he.event.triggered = void 0, s && (r[l] = s)),
        t.result
      }
    },
    simulate: function (e, t, n) {
      var r = he.extend(new he.Event, n, {
        type: e,
        isSimulated: !0
      });
      he.event.trigger(r, null, t)
    }
  }),
  he.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        he.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return he.event.trigger(e, t, n, !0)
    }
  }),
  he.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, t) {
    he.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n)  : this.trigger(t)
    }
  }),
  he.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }),
  pe.focusin = 'onfocusin' in e,
  pe.focusin || he.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = function (e) {
      he.event.simulate(t, e.target, he.event.fix(e))
    };
    he.event.special[t] = {
      setup: function () {
        var r = this.ownerDocument || this,
        i = Fe.access(r, t);
        i || r.addEventListener(e, n, !0),
        Fe.access(r, t, (i || 0) + 1)
      },
      teardown: function () {
        var r = this.ownerDocument || this,
        i = Fe.access(r, t) - 1;
        i ? Fe.access(r, t, i)  : (r.removeEventListener(e, n, !0), Fe.remove(r, t))
      }
    }
  });
  var Ct = e.location,
  Et = he.now(),
  kt = /\?/;
  he.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = (new e.DOMParser).parseFromString(t, 'text/xml')
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName('parsererror').length || he.error('Invalid XML: ' + t),
    n
  };
  var St = /\[\]$/,
  Nt = /\r?\n/g,
  Dt = /^(?:submit|button|image|reset|file)$/i,
  jt = /^(?:input|select|textarea|keygen)/i;
  he.param = function (e, t) {
    var n,
    r = [
    ],
    i = function (e, t) {
      var n = he.isFunction(t) ? t()  : t;
      r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n)
    };
    if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
      i(this.name, this.value)
    });
     else for (n in e) G(n, e[n], t, i);
    return r.join('&')
  },
  he.fn.extend({
    serialize: function () {
      return he.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = he.prop(this, 'elements');
        return e ? he.makeArray(e)  : this
      }).filter(function () {
        var e = this.type;
        return this.name && !he(this).is(':disabled') && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ze.test(e))
      }).map(function (e, t) {
        var n = he(this).val();
        return null == n ? null : Array.isArray(n) ? he.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Nt, '\r\n')
          }
        })  : {
          name: t.name,
          value: n.replace(Nt, '\r\n')
        }
      }).get()
    }
  });
  var At = /%20/g,
  qt = /#.*$/,
  Lt = /([?&])_=[^&]*/,
  Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Ot = /^(?:GET|HEAD)$/,
  Pt = /^\/\//,
  Rt = {
  },
  Mt = {
  },
  It = '*/'.concat('*'),
  Wt = te.createElement('a');
  Wt.href = Ct.href,
  he.extend({
    active: 0,
    lastModified: {
    },
    etag: {
    },
    ajaxSettings: {
      url: Ct.href,
      type: 'GET',
      isLocal: Ft.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': It,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': JSON.parse,
        'text xml': he.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? J(J(e, he.ajaxSettings), t)  : J(he.ajaxSettings, e)
    },
    ajaxPrefilter: Y(Rt),
    ajaxTransport: Y(Mt),
    ajax: function (t, n) {
      function r(t, n, r, s) {
        var l,
        p,
        d,
        b,
        w,
        T = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || '', C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = K(h, C, r)), b = Z(h, b, C, l), l ? (h.ifModified && ((w = C.getResponseHeader('Last-Modified')) && (he.lastModified[o] = w), (w = C.getResponseHeader('etag')) && (he.etag[o] = w)), 204 === t || 'HEAD' === h.type ? T = 'nocontent' : 304 === t ? T = 'notmodified' : (T = b.state, p = b.data, d = b.error, l = !d))  : (d = T, !t && T || (T = 'error', t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + '', l ? m.resolveWith(g, [
          p,
          T,
          C
        ])  : m.rejectWith(g, [
          C,
          T,
          d
        ]), C.statusCode(x), x = void 0, f && v.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
          C,
          h,
          l ? p : d
        ]), y.fireWith(g, [
          C,
          T
        ]), f && (v.trigger('ajaxComplete', [
          C,
          h
        ]), --he.active || he.event.trigger('ajaxStop')))
      }
      'object' == typeof t && (n = t, t = void 0),
      n = n || {
      };
      var i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h = he.ajaxSetup({
      }, n),
      g = h.context || h,
      v = h.context && (g.nodeType || g.jquery) ? he(g)  : he.event,
      m = he.Deferred(),
      y = he.Callbacks('once memory'),
      x = h.statusCode || {
      },
      b = {
      },
      w = {
      },
      T = 'canceled',
      C = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;
          if (c) {
            if (!s) for (s = {
            }; t = Ht.exec(a); ) s[t[1].toLowerCase()] = t[2];
            t = s[e.toLowerCase()]
          }
          return null == t ? null : t
        },
        getAllResponseHeaders: function () {
          return c ? a : null
        },
        setRequestHeader: function (e, t) {
          return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t),
          this
        },
        overrideMimeType: function (e) {
          return null == c && (h.mimeType = e),
          this
        },
        statusCode: function (e) {
          var t;
          if (e) if (c) C.always(e[C.status]);
           else for (t in e) x[t] = [
            x[t],
            e[t]
          ];
          return this
        },
        abort: function (e) {
          var t = e || T;
          return i && i.abort(t),
          r(0, t),
          this
        }
      };
      if (m.promise(C), h.url = ((t || h.url || Ct.href) + '').replace(Pt, Ct.protocol + '//'), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || '*').toLowerCase().match(je) || [
        ''
      ], null == h.crossDomain) {
        l = te.createElement('a');
        try {
          l.href = h.url,
          l.href = l.href,
          h.crossDomain = Wt.protocol + '//' + Wt.host != l.protocol + '//' + l.host
        } catch (e) {
          h.crossDomain = !0
        }
      }
      if (h.data && h.processData && 'string' != typeof h.data && (h.data = he.param(h.data, h.traditional)), Q(Rt, h, n, C), c) return C;
      (f = he.event && h.global) && 0 == he.active++ && he.event.trigger('ajaxStart'),
      h.type = h.type.toUpperCase(),
      h.hasContent = !Ot.test(h.type),
      o = h.url.replace(qt, ''),
      h.hasContent ? h.data && h.processData && 0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') && (h.data = h.data.replace(At, '+'))  : (d = h.url.slice(o.length), h.data && (o += (kt.test(o) ? '&' : '?') + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, '$1'), d = (kt.test(o) ? '&' : '?') + '_=' + Et++ + d), h.url = o + d),
      h.ifModified && (he.lastModified[o] && C.setRequestHeader('If-Modified-Since', he.lastModified[o]), he.etag[o] && C.setRequestHeader('If-None-Match', he.etag[o])),
      (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader('Content-Type', h.contentType),
      C.setRequestHeader('Accept', h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + It + '; q=0.01' : '')  : h.accepts['*']);
      for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
      if (T = 'abort', y.add(h.complete), C.done(h.success), C.fail(h.error), i = Q(Mt, h, n, C)) {
        if (C.readyState = 1, f && v.trigger('ajaxSend', [
          C,
          h
        ]), c) return C;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          C.abort('timeout')
        }, h.timeout));
        try {
          c = !1,
          i.send(b, r)
        } catch (e) {
          if (c) throw e;
          r( - 1, e)
        }
      } else r( - 1, 'No Transport');
      return C
    },
    getJSON: function (e, t, n) {
      return he.get(e, t, n, 'json')
    },
    getScript: function (e, t) {
      return he.get(e, void 0, t, 'script')
    }
  }),
  he.each(['get',
  'post'], function (e, t) {
    he[t] = function (e, n, r, i) {
      return he.isFunction(n) && (i = i || r, r = n, n = void 0),
      he.ajax(he.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, he.isPlainObject(e) && e))
    }
  }),
  he._evalUrl = function (e) {
    return he.ajax({
      url: e,
      type: 'GET',
      dataType: 'script',
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  },
  he.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
        return e
      }).append(this)),
      this
    },
    wrapInner: function (e) {
      return he.isFunction(e) ? this.each(function (t) {
        he(this).wrapInner(e.call(this, t))
      })  : this.each(function () {
        var t = he(this),
        n = t.contents();
        n.length ? n.wrapAll(e)  : t.append(e)
      })
    },
    wrap: function (e) {
      var t = he.isFunction(e);
      return this.each(function (n) {
        he(this).wrapAll(t ? e.call(this, n)  : e)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not('body').each(function () {
        he(this).replaceWith(this.childNodes)
      }),
      this
    }
  }),
  he.expr.pseudos.hidden = function (e) {
    return !he.expr.pseudos.visible(e)
  },
  he.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  },
  he.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest
    } catch (e) {
    }
  };
  var $t = {
    0: 200,
    1223: 204
  },
  Bt = he.ajaxSettings.xhr();
  pe.cors = !!Bt && 'withCredentials' in Bt,
  pe.ajax = Bt = !!Bt,
  he.ajaxTransport(function (t) {
    var n,
    r;
    if (pe.cors || Bt && !t.crossDomain) return {
      send: function (i, o) {
        var a,
        s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
        t.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
        for (a in i) s.setRequestHeader(a, i[a]);
        n = function (e) {
          return function () {
            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, 'abort' === e ? s.abort()  : 'error' === e ? 'number' != typeof s.status ? o(0, 'error')  : o(s.status, s.statusText)  : o($t[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? {
              binary: s.response
            }
             : {
              text: s.responseText
            }, s.getAllResponseHeaders()))
          }
        },
        s.onload = n(),
        r = s.onerror = n('error'),
        void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            n && r()
          })
        },
        n = n('abort');
        try {
          s.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n) throw e
        }
      },
      abort: function () {
        n && n()
      }
    }
  }),
  he.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }),
  he.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      'text script': function (e) {
        return he.globalEval(e),
        e
      }
    }
  }),
  he.ajaxPrefilter('script', function (e) {
    void 0 === e.cache && (e.cache = !1),
    e.crossDomain && (e.type = 'GET')
  }),
  he.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var t,
      n;
      return {
        send: function (r, i) {
          t = he('<script>').prop({
            charset: e.scriptCharset,
            src: e.url
          }).on('load error', n = function (e) {
            t.remove(),
            n = null,
            e && i('error' === e.type ? 404 : 200, e.type)
          }),
          te.head.appendChild(t[0])
        },
        abort: function () {
          n && n()
        }
      }
    }
  });
  var _t = [
  ],
  zt = /(=)\?(?=&|$)|\?\?/;
  he.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = _t.pop() || he.expando + '_' + Et++;
      return this[e] = !0,
      e
    }
  }),
  he.ajaxPrefilter('json jsonp', function (t, n, r) {
    var i,
    o,
    a,
    s = !1 !== t.jsonp && (zt.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && zt.test(t.data) && 'data');
    if (s || 'jsonp' === t.dataTypes[0]) return i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback()  : t.jsonpCallback,
    s ? t[s] = t[s].replace(zt, '$1' + i)  : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? '&' : '?') + t.jsonp + '=' + i),
    t.converters['script json'] = function () {
      return a || he.error(i + ' was not called'),
      a[0]
    },
    t.dataTypes[0] = 'json',
    o = e[i],
    e[i] = function () {
      a = arguments
    },
    r.always(function () {
      void 0 === o ? he(e).removeProp(i)  : e[i] = o,
      t[i] && (t.jsonpCallback = n.jsonpCallback, _t.push(i)),
      a && he.isFunction(o) && o(a[0]),
      a = o = void 0
    }),
    'script'
  }),
  pe.createHTMLDocument = function () {
    var e = te.implementation.createHTMLDocument('').body;
    return e.innerHTML = '<form></form><form></form>',
    2 === e.childNodes.length
  }(),
  he.parseHTML = function (e, t, n) {
    if ('string' != typeof e) return [];
    'boolean' == typeof t && (n = t, t = !1);
    var r,
    i,
    o;
    return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(''), r = t.createElement('base'), r.href = te.location.href, t.head.appendChild(r))  : t = te),
    i = Ce.exec(e),
    o = !n && [
    ],
    i ? [
      t.createElement(i[1])
    ] : (i = b([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes))
  },
  he.fn.load = function (e, t, n) {
    var r,
    i,
    o,
    a = this,
    s = e.indexOf(' ');
    return s > - 1 && (r = U(e.slice(s)), e = e.slice(0, s)),
    he.isFunction(t) ? (n = t, t = void 0)  : t && 'object' == typeof t && (i = 'POST'),
    a.length > 0 && he.ajax({
      url: e,
      type: i || 'GET',
      dataType: 'html',
      data: t
    }).done(function (e) {
      o = arguments,
      a.html(r ? he('<div>').append(he.parseHTML(e)).find(r)  : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [
          e.responseText,
          t,
          e
        ])
      })
    }),
    this
  },
  he.each(['ajaxStart',
  'ajaxStop',
  'ajaxComplete',
  'ajaxError',
  'ajaxSuccess',
  'ajaxSend'], function (e, t) {
    he.fn[t] = function (e) {
      return this.on(t, e)
    }
  }),
  he.expr.pseudos.animated = function (e) {
    return he.grep(he.timers, function (t) {
      return e === t.elem
    }).length
  },
  he.offset = {
    setOffset: function (e, t, n) {
      var r,
      i,
      o,
      a,
      s,
      u,
      l = he.css(e, 'position'),
      c = he(e),
      f = {
      };
      'static' === l && (e.style.position = 'relative'),
      s = c.offset(),
      o = he.css(e, 'top'),
      u = he.css(e, 'left'),
      ('absolute' === l || 'fixed' === l) && (o + u).indexOf('auto') > - 1 ? (r = c.position(), a = r.top, i = r.left)  : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
      he.isFunction(t) && (t = t.call(e, n, he.extend({
      }, s))),
      null != t.top && (f.top = t.top - s.top + a),
      null != t.left && (f.left = t.left - s.left + i),
      'using' in t ? t.using.call(e, f)  : c.css(f)
    }
  },
  he.fn.extend({
    offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        he.offset.setOffset(this, e, t)
      });
      var t,
      n,
      r,
      i,
      o = this[0];
      return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
        top: r.top + i.pageYOffset - n.clientTop,
        left: r.left + i.pageXOffset - n.clientLeft
      })  : {
        top: 0,
        left: 0
      }
       : void 0
    },
    position: function () {
      if (this[0]) {
        var e,
        t,
        n = this[0],
        r = {
          top: 0,
          left: 0
        };
        return 'fixed' === he.css(n, 'position') ? t = n.getBoundingClientRect()  : (e = this.offsetParent(), t = this.offset(), i(e[0], 'html') || (r = e.offset()), r = {
          top: r.top + he.css(e[0], 'borderTopWidth', !0),
          left: r.left + he.css(e[0], 'borderLeftWidth', !0)
        }),
        {
          top: t.top - r.top - he.css(n, 'marginTop', !0),
          left: t.left - r.left - he.css(n, 'marginLeft', !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && 'static' === he.css(e, 'position'); ) e = e.offsetParent;
        return e || Ye
      })
    }
  }),
  he.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (e, t) {
    var n = 'pageYOffset' === t;
    he.fn[e] = function (r) {
      return Le(this, function (e, r, i) {
        var o;
        return he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
        void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)  : e[r] = i)
      }, e, r, arguments.length)
    }
  }),
  he.each(['top',
  'left'], function (e, t) {
    he.cssHooks[t] = H(pe.pixelPosition, function (e, n) {
      if (n) return n = L(e, t),
      ot.test(n) ? he(e).position() [t] + 'px' : n
    })
  }),
  he.each({
    Height: 'height',
    Width: 'width'
  }, function (e, t) {
    he.each({
      padding: 'inner' + e,
      content: t,
      '': 'outer' + e
    }, function (n, r) {
      he.fn[r] = function (i, o) {
        var a = arguments.length && (n || 'boolean' != typeof i),
        s = n || (!0 === i || !0 === o ? 'margin' : 'border');
        return Le(this, function (t, n, i) {
          var o;
          return he.isWindow(t) ? 0 === r.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body['scroll' + e], o['scroll' + e], t.body['offset' + e], o['offset' + e], o['client' + e]))  : void 0 === i ? he.css(t, n, s)  : he.style(t, n, i, s)
        }, t, a ? i : void 0, a)
      }
    })
  }),
  he.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**')  : this.off(t, e || '**', n)
    }
  }),
  he.holdReady = function (e) {
    e ? he.readyWait++ : he.ready(!0)
  },
  he.isArray = Array.isArray,
  he.parseJSON = JSON.parse,
  he.nodeName = i,
  'function' == typeof define && define.amd && define('jquery', [
  ], function () {
    return he
  });
  var Xt = e.jQuery,
  Ut = e.$;
  return he.noConflict = function (t) {
    return e.$ === he && (e.$ = Ut),
    t && e.jQuery === he && (e.jQuery = Xt),
    he
  },
  t || (e.jQuery = e.$ = he),
  he
});
/**
 * @module       jQuery Migrate
 * @author       jQuery Foundation and other contributors
 * @see          https://code.jquery.com/jquery/
 * @license      MIT
 * @version      3.0.0
 */
'undefined' == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function (a, b) {
  'use strict';
  function c(c) {
    var d = b.console;
    e[c] || (e[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn('JQMIGRATE: ' + c), a.migrateTrace && d.trace && d.trace()))
  }
  function d(a, b, d, e) {
    Object.defineProperty(a, b, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return c(e),
        d
      }
    })
  }
  a.migrateVersion = '3.0.0',
  function () {
    var c = b.console && b.console.log && function () {
      b.console.log.apply(b.console, arguments)
    },
    d = /^[12]\./;
    c && (a && !d.test(a.fn.jquery) || c('JQMIGRATE: jQuery 3.0.0+ REQUIRED'), a.migrateWarnings && c('JQMIGRATE: Migrate plugin loaded multiple times'), c('JQMIGRATE: Migrate is installed' + (a.migrateMute ? '' : ' with logging active') + ', version ' + a.migrateVersion))
  }();
  var e = {
  };
  a.migrateWarnings = [
  ],
  void 0 === a.migrateTrace && (a.migrateTrace = !0),
  a.migrateReset = function () {
    e = {
    },
    a.migrateWarnings.length = 0
  },
  'BackCompat' === document.compatMode && c('jQuery is not compatible with Quirks Mode');
  var f = a.fn.init,
  g = a.isNumeric,
  h = a.find,
  i = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
  j = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
  a.fn.init = function (a) {
    var b = Array.prototype.slice.call(arguments);
    return 'string' == typeof a && '#' === a && (c('jQuery( \'#\' ) is not a valid selector'), b[0] = [
    ]),
    f.apply(this, b)
  },
  a.fn.init.prototype = a.fn,
  a.find = function (a) {
    var b = Array.prototype.slice.call(arguments);
    if ('string' == typeof a && i.test(a)) try {
      document.querySelector(a)
    } catch (d) {
      a = a.replace(j, function (a, b, c, d) {
        return '[' + b + c + '"' + d + '"]'
      });
      try {
        document.querySelector(a),
        c('Attribute selector with \'#\' must be quoted: ' + b[0]),
        b[0] = a
      } catch (e) {
        c('Attribute selector with \'#\' was not fixed: ' + b[0])
      }
    }
    return h.apply(this, b)
  };
  var k;
  for (k in h) Object.prototype.hasOwnProperty.call(h, k) && (a.find[k] = h[k]);
  a.fn.size = function () {
    return c('jQuery.fn.size() is deprecated; use the .length property'),
    this.length
  },
  a.parseJSON = function () {
    return c('jQuery.parseJSON is deprecated; use JSON.parse'),
    JSON.parse.apply(null, arguments)
  },
  a.isNumeric = function (b) {
    function d(b) {
      var c = b && b.toString();
      return !a.isArray(b) && c - parseFloat(c) + 1 >= 0
    }
    var e = g(b),
    f = d(b);
    return e !== f && c('jQuery.isNumeric() should not be called on constructed objects'),
    f
  },
  d(a, 'unique', a.uniqueSort, 'jQuery.unique is deprecated, use jQuery.uniqueSort'),
  d(a.expr, 'filters', a.expr.pseudos, 'jQuery.expr.filters is now jQuery.expr.pseudos'),
  d(a.expr, ':', a.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
  var l = a.ajax;
  a.ajax = function () {
    var a = l.apply(this, arguments);
    return a.promise && (d(a, 'success', a.done, 'jQXHR.success is deprecated and removed'), d(a, 'error', a.fail, 'jQXHR.error is deprecated and removed'), d(a, 'complete', a.always, 'jQXHR.complete is deprecated and removed')),
    a
  };
  var m = a.fn.removeAttr,
  n = a.fn.toggleClass,
  o = /\S+/g;
  a.fn.removeAttr = function (b) {
    var d = this;
    return a.each(b.match(o), function (b, e) {
      a.expr.match.bool.test(e) && (c('jQuery.fn.removeAttr no longer sets boolean properties: ' + e), d.prop(e, !1))
    }),
    m.apply(this, arguments)
  },
  a.fn.toggleClass = function (b) {
    return void 0 !== b && 'boolean' != typeof b ? n.apply(this, arguments)  : (c('jQuery.fn.toggleClass( boolean ) is deprecated'), this.each(function () {
      var c = this.getAttribute && this.getAttribute('class') || '';
      c && a.data(this, '__className__', c),
      this.setAttribute && this.setAttribute('class', c || b === !1 ? '' : a.data(this, '__className__') || '')
    }))
  };
  var p = !1;
  a.swap && a.each(['height',
  'width',
  'reliableMarginRight'], function (b, c) {
    var d = a.cssHooks[c] && a.cssHooks[c].get;
    d && (a.cssHooks[c].get = function () {
      var a;
      return p = !0,
      a = d.apply(this, arguments),
      p = !1,
      a
    })
  }),
  a.swap = function (a, b, d, e) {
    var f,
    g,
    h = {
    };
    p || c('jQuery.swap() is undocumented and deprecated');
    for (g in b) h[g] = a.style[g],
    a.style[g] = b[g];
    f = d.apply(a, e || [
    ]);
    for (g in b) a.style[g] = h[g];
    return f
  };
  var q = a.data;
  a.data = function (b, d, e) {
    var f;
    return d && d !== a.camelCase(d) && (f = a.hasData(b) && q.call(this, b), f && d in f) ? (c('jQuery.data() always sets/gets camelCased names: ' + d), arguments.length > 2 && (f[d] = e), f[d])  : q.apply(this, arguments)
  };
  var r = a.Tween.prototype.run;
  a.Tween.prototype.run = function (b) {
    a.easing[this.easing].length > 1 && (c('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), a.easing[this.easing] = a.easing[this.easing].bind(a.easing, b, this.options.duration * b, 0, 1, this.options.duration)),
    r.apply(this, arguments)
  };
  var s = a.fn.load,
  t = a.event.fix;
  a.event.props = [
  ],
  a.event.fixHooks = {
  },
  a.event.fix = function (b) {
    var d,
    e = b.type,
    f = this.fixHooks[e],
    g = a.event.props;
    if (g.length) for (c('jQuery.event.props are deprecated and removed: ' + g.join()); g.length; ) a.event.addProp(g.pop());
    if (f && !f._migrated_ && (f._migrated_ = !0, c('jQuery.event.fixHooks are deprecated and removed: ' + e), (g = f.props) && g.length)) for (; g.length; ) a.event.addProp(g.pop());
    return d = t.call(this, b),
    f && f.filter ? f.filter(d, b)  : d
  },
  a.each(['load',
  'unload',
  'error'], function (b, d) {
    a.fn[d] = function () {
      var a = Array.prototype.slice.call(arguments, 0);
      return 'load' === d && 'string' == typeof a[0] ? s.apply(this, a)  : (c('jQuery.fn.' + d + '() is deprecated'), a.splice(0, 0, d), arguments.length ? this.on.apply(this, a)  : (this.triggerHandler.apply(this, a), this))
    }
  }),
  a(function () {
    a(document).triggerHandler('ready')
  }),
  a.event.special.ready = {
    setup: function () {
      this === document && c('\'ready\' event is deprecated')
    }
  },
  a.fn.extend({
    bind: function (a, b, d) {
      return c('jQuery.fn.bind() is deprecated'),
      this.on(a, null, b, d)
    },
    unbind: function (a, b) {
      return c('jQuery.fn.unbind() is deprecated'),
      this.off(a, null, b)
    },
    delegate: function (a, b, d, e) {
      return c('jQuery.fn.delegate() is deprecated'),
      this.on(b, a, d, e)
    },
    undelegate: function (a, b, d) {
      return c('jQuery.fn.undelegate() is deprecated'),
      1 === arguments.length ? this.off(a, '**')  : this.off(b, a || '**', d)
    }
  });
  var u = a.fn.offset;
  a.fn.offset = function () {
    var b,
    d = this[0],
    e = {
      top: 0,
      left: 0
    };
    return d && d.nodeType ? (b = (d.ownerDocument || document).documentElement, a.contains(b, d) ? u.apply(this, arguments)  : (c('jQuery.fn.offset() requires an element connected to a document'), e))  : (c('jQuery.fn.offset() requires a valid DOM element'), e)
  };
  var v = a.param;
  a.param = function (b, d) {
    var e = a.ajaxSettings && a.ajaxSettings.traditional;
    return void 0 === d && e && (c('jQuery.param() no longer uses jQuery.ajaxSettings.traditional'), d = e),
    v.call(this, b, d)
  };
  var w = a.fn.andSelf || a.fn.addBack;
  a.fn.andSelf = function () {
    return c('jQuery.fn.andSelf() replaced by jQuery.fn.addBack()'),
    w.apply(this, arguments)
  };
  var x = a.Deferred,
  y = [
    ['resolve',
    'done',
    a.Callbacks('once memory'),
    a.Callbacks('once memory'),
    'resolved'],
    [
      'reject',
      'fail',
      a.Callbacks('once memory'),
      a.Callbacks('once memory'),
      'rejected'
    ],
    [
      'notify',
      'progress',
      a.Callbacks('memory'),
      a.Callbacks('memory')
    ]
  ];
  a.Deferred = function (b) {
    var d = x(),
    e = d.promise();
    return d.pipe = e.pipe = function () {
      var b = arguments;
      return c('deferred.pipe() is deprecated'),
      a.Deferred(function (c) {
        a.each(y, function (f, g) {
          var h = a.isFunction(b[f]) && b[f];
          d[g[1]](function () {
            var b = h && h.apply(this, arguments);
            b && a.isFunction(b.promise) ? b.promise().done(c.resolve).fail(c.reject).progress(c.notify)  : c[g[0] + 'With'](this === e ? c.promise()  : this, h ? [
              b
            ] : arguments)
          })
        }),
        b = null
      }).promise()
    },
    b && b.call(d, d),
    d
  }
}(jQuery, window);
/**
 * @module       jQuery Cookie Plugin
 * @see          https://github.com/carhartl/jquery-cookie
 * @license      MIT
 */
!function (e) {
  'function' == typeof define && define.amd ? define(['jquery'], e)  : 'object' == typeof exports ? module.exports = e(require('jquery'))  : e(jQuery)
}(function (e) {
  function n(e) {
    return u.raw ? e : encodeURIComponent(e)
  }
  function o(e) {
    return u.raw ? e : decodeURIComponent(e)
  }
  function i(e) {
    return n(u.json ? JSON.stringify(e)  : String(e))
  }
  function t(e) {
    0 === e.indexOf('"') && (e = e.slice(1, - 1).replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
    try {
      return e = decodeURIComponent(e.replace(c, ' ')),
      u.json ? JSON.parse(e)  : e
    } catch (e) {
    }
  }
  function r(n, o) {
    var i = u.raw ? n : t(n);
    return e.isFunction(o) ? o(i)  : i
  }
  var c = /\+/g,
  u = e.cookie = function (t, c, s) {
    if (arguments.length > 1 && !e.isFunction(c)) {
      if ('number' == typeof (s = e.extend({
      }, u.defaults, s)).expires) {
        var d = s.expires,
        f = s.expires = new Date;
        f.setMilliseconds(f.getMilliseconds() + 86400000 * d)
      }
      return document.cookie = [
        n(t),
        '=',
        i(c),
        s.expires ? '; expires=' + s.expires.toUTCString()  : '',
        s.path ? '; path=' + s.path : '',
        s.domain ? '; domain=' + s.domain : '',
        s.secure ? '; secure' : ''
      ].join('')
    }
    for (var a = t ? void 0 : {
    }, p = document.cookie ? document.cookie.split('; ')  : [
    ], l = 0, m = p.length; l < m; l++) {
      var x = p[l].split('='),
      g = o(x.shift()),
      j = x.join('=');
      if (t === g) {
        a = r(j, c);
        break
      }
      t || void 0 === (j = r(j)) || (a[g] = j)
    }
    return a
  };
  u.defaults = {
  },
  e.removeCookie = function (n, o) {
    return e.cookie(n, '', e.extend({
    }, o, {
      expires: - 1
    })),
    !e.cookie(n)
  }
});
/**
 * @module       Device.js
 * @see          https://github.com/matthewhudson/device.js
 * @license      MIT
 */
(function () {
  var n,
  e,
  o,
  t,
  i,
  r,
  d,
  a,
  c,
  l;
  e = window.device,
  n = {
  },
  window.device = n,
  t = window.document.documentElement,
  l = window.navigator.userAgent.toLowerCase(),
  n.ios = function () {
    return n.iphone() || n.ipod() || n.ipad()
  },
  n.iphone = function () {
    return !n.windows() && i('iphone')
  },
  n.ipod = function () {
    return i('ipod')
  },
  n.ipad = function () {
    return i('ipad')
  },
  n.android = function () {
    return !n.windows() && i('android')
  },
  n.androidPhone = function () {
    return n.android() && i('mobile')
  },
  n.androidTablet = function () {
    return n.android() && !i('mobile')
  },
  n.blackberry = function () {
    return i('blackberry') || i('bb10') || i('rim')
  },
  n.blackberryPhone = function () {
    return n.blackberry() && !i('tablet')
  },
  n.blackberryTablet = function () {
    return n.blackberry() && i('tablet')
  },
  n.windows = function () {
    return i('windows')
  },
  n.windowsPhone = function () {
    return n.windows() && i('phone')
  },
  n.windowsTablet = function () {
    return n.windows() && i('touch') && !n.windowsPhone()
  },
  n.fxos = function () {
    return (i('(mobile;') || i('(tablet;')) && i('; rv:')
  },
  n.fxosPhone = function () {
    return n.fxos() && i('mobile')
  },
  n.fxosTablet = function () {
    return n.fxos() && i('tablet')
  },
  n.meego = function () {
    return i('meego')
  },
  n.cordova = function () {
    return window.cordova && 'file:' === location.protocol
  },
  n.nodeWebkit = function () {
    return 'object' == typeof window.process
  },
  n.mobile = function () {
    return n.androidPhone() || n.iphone() || n.ipod() || n.windowsPhone() || n.blackberryPhone() || n.fxosPhone() || n.meego()
  },
  n.tablet = function () {
    return n.ipad() || n.androidTablet() || n.blackberryTablet() || n.windowsTablet() || n.fxosTablet()
  },
  n.desktop = function () {
    return !n.tablet() && !n.mobile()
  },
  n.television = function () {
    var n,
    e = [
      'googletv',
      'viera',
      'smarttv',
      'internet.tv',
      'netcast',
      'nettv',
      'appletv',
      'boxee',
      'kylo',
      'roku',
      'dlnadoc',
      'roku',
      'pov_tv',
      'hbbtv',
      'ce-html'
    ];
    for (n = 0; n < e.length; ) {
      if (i(e[n])) return !0;
      n++
    }
    return !1
  },
  n.portrait = function () {
    return window.innerHeight / window.innerWidth > 1
  },
  n.landscape = function () {
    return window.innerHeight / window.innerWidth < 1
  },
  n.noConflict = function () {
    return window.device = e,
    this
  },
  i = function (n) {
    return - 1 !== l.indexOf(n)
  },
  d = function (n) {
    var e;
    return e = new RegExp(n, 'i'),
    t.className.match(e)
  },
  o = function (n) {
    var e = null;
    d(n) || (e = t.className.replace(/^\s+|\s+$/g, ''), t.className = e + ' ' + n)
  },
  c = function (n) {
    d(n) && (t.className = t.className.replace(' ' + n, ''))
  },
  n.ios() ? n.ipad() ? o('ios ipad tablet')  : n.iphone() ? o('ios iphone mobile')  : n.ipod() && o('ios ipod mobile')  : n.android() ? o(n.androidTablet() ? 'android tablet' : 'android mobile')  : n.blackberry() ? o(n.blackberryTablet() ? 'blackberry tablet' : 'blackberry mobile')  : n.windows() ? o(n.windowsTablet() ? 'windows tablet' : n.windowsPhone() ? 'windows mobile' : 'desktop')  : n.fxos() ? o(n.fxosTablet() ? 'fxos tablet' : 'fxos mobile')  : n.meego() ? o('meego mobile')  : n.nodeWebkit() ? o('node-webkit')  : n.television() ? o('television')  : n.desktop() && o('desktop'),
  n.cordova() && o('cordova'),
  r = function () {
    n.landscape() ? (c('portrait'), o('landscape'))  : (c('landscape'), o('portrait'))
  },
  a = Object.prototype.hasOwnProperty.call(window, 'onorientationchange') ? 'orientationchange' : 'resize',
  window.addEventListener ? window.addEventListener(a, r, !1)  : window.attachEvent ? window.attachEvent(a, r)  : window[a] = r,
  r(),
  'function' == typeof define && 'object' == typeof define.amd && define.amd ? define(function () {
    return n
  })  : 'undefined' != typeof module && module.exports ? module.exports = n : window.device = n
}).call(this);
/**
 * @module       jQuery resize event
 * @see          http://benalman.com/projects/jquery-resize-plugin/
 * @license      MIT
 */
(function ($, h, c) {
  var a = $([]),
  e = $.resize = $.extend($.resize, {
  }),
  i,
  k = 'setTimeout',
  j = 'resize',
  d = j + '-special-event',
  b = 'delay',
  f = 'throttleWindow';
  e[b] = 250;
  e[f] = true;
  $.event.special[j] = {
    setup: function () {
      if (!e[f] && this[k]) {
        return false
      }
      var l = $(this);
      a = a.add(l);
      $.data(this, d, {
        w: l.width(),
        h: l.height()
      });
      if (a.length === 1) {
        g()
      }
    },
    teardown: function () {
      if (!e[f] && this[k]) {
        return false
      }
      var l = $(this);
      a = a.not(l);
      l.removeData(d);
      if (!a.length) {
        clearTimeout(i)
      }
    },
    add: function (l) {
      if (!e[f] && this[k]) {
        return false
      }
      var n;
      function m(s, o, p) {
        var q = $(this),
        r = $.data(this, d);
        r.w = o !== c ? o : q.width();
        r.h = p !== c ? p : q.height();
        n.apply(this, arguments)
      }
      if ($.isFunction(l)) {
        n = l;
        return m
      } else {
        n = l.handler;
        l.handler = m
      }
    }
  };
  function g() {
    i = h[k](function () {
      a.each(function () {
        var n = $(this),
        m = n.width(),
        l = n.height(),
        o = $.data(this, d);
        if (m !== o.w || l !== o.h) {
          n.trigger(j, [
            o.w = m,
            o.h = l
          ])
        }
      });
      g()
    }, e[b])
  }
}) (jQuery, this);
/**
 * @module       jQuery easing
 * @author       George McGinley Smith
 * @see          http://gsgd.co.uk/sandbox/jquery/easing/
 * @license      BSD
 * @version      1.4.0
 */
!function (n) {
  'function' == typeof define && define.amd ? define(['jquery'], function (e) {
    return n(e)
  })  : 'object' == typeof module && 'object' == typeof module.exports ? exports = n(require('jquery'))  : n(jQuery)
}(function (n) {
  function e(n) {
    var e = 7.5625,
    t = 2.75;
    return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + 0.75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + 0.9375 : e * (n -= 2.625 / t) * n + 0.984375
  }
  n.easing.jswing = n.easing.swing;
  var t = Math.pow,
  u = Math.sqrt,
  r = Math.sin,
  i = Math.cos,
  a = Math.PI,
  c = 1.70158,
  o = 1.525 * c,
  s = 2 * a / 3,
  f = 2 * a / 4.5;
  n.extend(n.easing, {
    def: 'easeOutQuad',
    swing: function (e) {
      return n.easing[n.easing.def](e)
    },
    easeInQuad: function (n) {
      return n * n
    },
    easeOutQuad: function (n) {
      return 1 - (1 - n) * (1 - n)
    },
    easeInOutQuad: function (n) {
      return n < 0.5 ? 2 * n * n : 1 - t( - 2 * n + 2, 2) / 2
    },
    easeInCubic: function (n) {
      return n * n * n
    },
    easeOutCubic: function (n) {
      return 1 - t(1 - n, 3)
    },
    easeInOutCubic: function (n) {
      return n < 0.5 ? 4 * n * n * n : 1 - t( - 2 * n + 2, 3) / 2
    },
    easeInQuart: function (n) {
      return n * n * n * n
    },
    easeOutQuart: function (n) {
      return 1 - t(1 - n, 4)
    },
    easeInOutQuart: function (n) {
      return n < 0.5 ? 8 * n * n * n * n : 1 - t( - 2 * n + 2, 4) / 2
    },
    easeInQuint: function (n) {
      return n * n * n * n * n
    },
    easeOutQuint: function (n) {
      return 1 - t(1 - n, 5)
    },
    easeInOutQuint: function (n) {
      return n < 0.5 ? 16 * n * n * n * n * n : 1 - t( - 2 * n + 2, 5) / 2
    },
    easeInSine: function (n) {
      return 1 - i(n * a / 2)
    },
    easeOutSine: function (n) {
      return r(n * a / 2)
    },
    easeInOutSine: function (n) {
      return - (i(a * n) - 1) / 2
    },
    easeInExpo: function (n) {
      return 0 === n ? 0 : t(2, 10 * n - 10)
    },
    easeOutExpo: function (n) {
      return 1 === n ? 1 : 1 - t(2, - 10 * n)
    },
    easeInOutExpo: function (n) {
      return 0 === n ? 0 : 1 === n ? 1 : n < 0.5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, - 20 * n + 10)) / 2
    },
    easeInCirc: function (n) {
      return 1 - u(1 - t(n, 2))
    },
    easeOutCirc: function (n) {
      return u(1 - t(n - 1, 2))
    },
    easeInOutCirc: function (n) {
      return n < 0.5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t( - 2 * n + 2, 2)) + 1) / 2
    },
    easeInElastic: function (n) {
      return 0 === n ? 0 : 1 === n ? 1 : - t(2, 10 * n - 10) * r((10 * n - 10.75) * s)
    },
    easeOutElastic: function (n) {
      return 0 === n ? 0 : 1 === n ? 1 : t(2, - 10 * n) * r((10 * n - 0.75) * s) + 1
    },
    easeInOutElastic: function (n) {
      return 0 === n ? 0 : 1 === n ? 1 : n < 0.5 ? - t(2, 20 * n - 10) * r((20 * n - 11.125) * f) / 2 : t(2, - 20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1
    },
    easeInBack: function (n) {
      return 2.70158 * n * n * n - c * n * n
    },
    easeOutBack: function (n) {
      return 1 + 2.70158 * t(n - 1, 3) + c * t(n - 1, 2)
    },
    easeInOutBack: function (n) {
      return n < 0.5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2
    },
    easeInBounce: function (n) {
      return 1 - e(1 - n)
    },
    easeOutBounce: e,
    easeInOutBounce: function (n) {
      return n < 0.5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2
    }
  })
});
/**
 * @module       TouchSwipe
 * @see          https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @license      MIT
 * @version      1.6.18
 */
!function (e) {
  'function' == typeof define && define.amd && define.amd.jQuery ? define(['jquery'], e)  : e('undefined' != typeof module && module.exports ? require('jquery')  : jQuery)
}(function (e) {
  'use strict';
  function n(n) {
    return !n || void 0 !== n.allowPageScroll || void 0 === n.swipe && void 0 === n.swipeStatus || (n.allowPageScroll = c),
    void 0 !== n.click && void 0 === n.tap && (n.tap = n.click),
    n || (n = {
    }),
    n = e.extend({
    }, e.fn.swipe.defaults, n),
    this.each(function () {
      var r = e(this),
      i = r.data(D);
      i || (i = new t(this, n), r.data(D, i))
    })
  }
  function t(n, t) {
    function P(n) {
      if (!(ce() || e(n.target).closest(t.excludedElements, Ve).length > 0)) {
        var r = n.originalEvent ? n.originalEvent : n;
        if (!r.pointerType || 'mouse' != r.pointerType || 0 != t.fallbackToMouseEvents) {
          var i,
          l = r.touches,
          o = l ? l[0] : r;
          return We = y,
          l ? ze = l.length : !1 !== t.preventDefaultEvents && n.preventDefault(),
          je = 0,
          Ne = null,
          He = null,
          Xe = null,
          _e = 0,
          qe = 0,
          Qe = 0,
          Ce = 1,
          Fe = 0,
          Ye = we(),
          ue(),
          pe(0, o),
          !l || ze === t.fingers || t.fingers === T || X() ? (Ze = Oe(), 2 == ze && (pe(1, l[1]), qe = Qe = be(Ge[0].start, Ge[1].start)), (t.swipeStatus || t.pinchStatus) && (i = j(r, We)))  : i = !1,
          !1 === i ? (We = x, j(r, We), i)  : (t.hold && (nn = setTimeout(e.proxy(function () {
            Ve.trigger('hold', [
              r.target
            ]),
            t.hold && (i = t.hold.call(Ve, r, r.target))
          }, this), t.longTapThreshold)), se(!0), null)
        }
      }
    }
    function L(e) {
      var n = e.originalEvent ? e.originalEvent : e;
      if (We !== m && We !== x && !ae()) {
        var r,
        i = n.touches,
        l = fe(i ? i[0] : n);
        if (Be = Oe(), i && (ze = i.length), t.hold && clearTimeout(nn), We = E, 2 == ze && (0 == qe ? (pe(1, i[1]), qe = Qe = be(Ge[0].start, Ge[1].start))  : (fe(i[1]), Qe = be(Ge[0].end, Ge[1].end), Xe = Ee(Ge[0].end, Ge[1].end)), Ce = ye(qe, Qe), Fe = Math.abs(qe - Qe)), ze === t.fingers || t.fingers === T || !i || X()) {
          if (Ne = Se(l.start, l.end), He = Se(l.last, l.end), C(e, He), je = me(l.start, l.end), _e = Te(), de(Ne, je), r = j(n, We), !t.triggerOnTouchEnd || t.triggerOnTouchLeave) {
            var o = !0;
            if (t.triggerOnTouchLeave) {
              var u = Me(this);
              o = De(l.end, u)
            }
            !t.triggerOnTouchEnd && o ? We = U(E)  : t.triggerOnTouchLeave && !o && (We = U(m)),
            We != x && We != m || j(n, We)
          }
        } else We = x,
        j(n, We);
        !1 === r && (We = x, j(n, We))
      }
    }
    function R(e) {
      var n = e.originalEvent ? e.originalEvent : e,
      r = n.touches;
      if (r) {
        if (r.length && !ae()) return oe(n),
        !0;
        if (r.length && ae()) return !0
      }
      return ae() && (ze = Ke),
      Be = Oe(),
      _e = Te(),
      _() || !H() ? (We = x, j(n, We))  : t.triggerOnTouchEnd || !1 === t.triggerOnTouchEnd && We === E ? (!1 !== t.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), We = m, j(n, We))  : !t.triggerOnTouchEnd && B() ? (We = m, N(n, We, h))  : We === E && (We = x, j(n, We)),
      se(!1),
      null
    }
    function k() {
      ze = 0,
      Be = 0,
      Ze = 0,
      qe = 0,
      Qe = 0,
      Ce = 1,
      ue(),
      se(!1)
    }
    function A(e) {
      var n = e.originalEvent ? e.originalEvent : e;
      t.triggerOnTouchLeave && (We = U(m), j(n, We))
    }
    function I() {
      Ve.unbind(Re, P),
      Ve.unbind(Ue, k),
      Ve.unbind(ke, L),
      Ve.unbind(Ae, R),
      Ie && Ve.unbind(Ie, A),
      se(!1)
    }
    function U(e) {
      var n = e,
      r = Q(),
      i = H(),
      l = _();
      return !r || l ? n = x : !i || e != E || t.triggerOnTouchEnd && !t.triggerOnTouchLeave ? !i && e == m && t.triggerOnTouchLeave && (n = x)  : n = m,
      n
    }
    function j(e, n) {
      var t,
      r = e.touches;
      return (z() || W()) && (t = N(e, n, p)),
      (Y() || X()) && !1 !== t && (t = N(e, n, f)),
      ie() && !1 !== t ? t = N(e, n, d)  : le() && !1 !== t ? t = N(e, n, g)  : re() && !1 !== t && (t = N(e, n, h)),
      n === x && k(e),
      n === m && (r ? r.length || k(e)  : k(e)),
      t
    }
    function N(n, c, s) {
      var w;
      if (s == p) {
        if (Ve.trigger('swipeStatus', [
          c,
          Ne || null,
          je || 0,
          _e || 0,
          ze,
          Ge,
          He
        ]), t.swipeStatus && !1 === (w = t.swipeStatus.call(Ve, n, c, Ne || null, je || 0, _e || 0, ze, Ge, He))) return !1;
        if (c == m && V()) {
          if (clearTimeout(en), clearTimeout(nn), Ve.trigger('swipe', [
            Ne,
            je,
            _e,
            ze,
            Ge,
            He
          ]), t.swipe && !1 === (w = t.swipe.call(Ve, n, Ne, je, _e, ze, Ge, He))) return !1;
          switch (Ne) {
            case r:
              Ve.trigger('swipeLeft', [
                Ne,
                je,
                _e,
                ze,
                Ge,
                He
              ]),
              t.swipeLeft && (w = t.swipeLeft.call(Ve, n, Ne, je, _e, ze, Ge, He));
              break;
            case i:
              Ve.trigger('swipeRight', [
                Ne,
                je,
                _e,
                ze,
                Ge,
                He
              ]),
              t.swipeRight && (w = t.swipeRight.call(Ve, n, Ne, je, _e, ze, Ge, He));
              break;
            case l:
              Ve.trigger('swipeUp', [
                Ne,
                je,
                _e,
                ze,
                Ge,
                He
              ]),
              t.swipeUp && (w = t.swipeUp.call(Ve, n, Ne, je, _e, ze, Ge, He));
              break;
            case o:
              Ve.trigger('swipeDown', [
                Ne,
                je,
                _e,
                ze,
                Ge,
                He
              ]),
              t.swipeDown && (w = t.swipeDown.call(Ve, n, Ne, je, _e, ze, Ge, He))
          }
        }
      }
      if (s == f) {
        if (Ve.trigger('pinchStatus', [
          c,
          Xe || null,
          Fe || 0,
          _e || 0,
          ze,
          Ce,
          Ge
        ]), t.pinchStatus && !1 === (w = t.pinchStatus.call(Ve, n, c, Xe || null, Fe || 0, _e || 0, ze, Ce, Ge))) return !1;
        if (c == m && F()) switch (Xe) {
          case u:
            Ve.trigger('pinchIn', [
              Xe || null,
              Fe || 0,
              _e || 0,
              ze,
              Ce,
              Ge
            ]),
            t.pinchIn && (w = t.pinchIn.call(Ve, n, Xe || null, Fe || 0, _e || 0, ze, Ce, Ge));
            break;
          case a:
            Ve.trigger('pinchOut', [
              Xe || null,
              Fe || 0,
              _e || 0,
              ze,
              Ce,
              Ge
            ]),
            t.pinchOut && (w = t.pinchOut.call(Ve, n, Xe || null, Fe || 0, _e || 0, ze, Ce, Ge))
        }
      }
      return s == h ? c !== x && c !== m || (clearTimeout(en), clearTimeout(nn), J() && !ee() ? ($e = Oe(), en = setTimeout(e.proxy(function () {
        $e = null,
        Ve.trigger('tap', [
          n.target
        ]),
        t.tap && (w = t.tap.call(Ve, n, n.target))
      }, this), t.doubleTapThreshold))  : ($e = null, Ve.trigger('tap', [
        n.target
      ]), t.tap && (w = t.tap.call(Ve, n, n.target))))  : s == d ? c !== x && c !== m || (clearTimeout(en), clearTimeout(nn), $e = null, Ve.trigger('doubletap', [
        n.target
      ]), t.doubleTap && (w = t.doubleTap.call(Ve, n, n.target)))  : s == g && (c !== x && c !== m || (clearTimeout(en), $e = null, Ve.trigger('longtap', [
        n.target
      ]), t.longTap && (w = t.longTap.call(Ve, n, n.target)))),
      w
    }
    function H() {
      var e = !0;
      return null !== t.threshold && (e = je >= t.threshold),
      e
    }
    function _() {
      var e = !1;
      return null !== t.cancelThreshold && null !== Ne && (e = ge(Ne) - je >= t.cancelThreshold),
      e
    }
    function q() {
      return null === t.pinchThreshold || Fe >= t.pinchThreshold
    }
    function Q() {
      return !(t.maxTimeThreshold && _e >= t.maxTimeThreshold)
    }
    function C(e, n) {
      if (!1 !== t.preventDefaultEvents) if (t.allowPageScroll === c) e.preventDefault();
       else {
        var u = t.allowPageScroll === s;
        switch (n) {
          case r:
            (t.swipeLeft && u || !u && t.allowPageScroll != w) && e.preventDefault();
            break;
          case i:
            (t.swipeRight && u || !u && t.allowPageScroll != w) && e.preventDefault();
            break;
          case l:
            (t.swipeUp && u || !u && t.allowPageScroll != v) && e.preventDefault();
            break;
          case o:
            (t.swipeDown && u || !u && t.allowPageScroll != v) && e.preventDefault()
        }
      }
    }
    function F() {
      var e = G(),
      n = Z(),
      t = q();
      return e && n && t
    }
    function X() {
      return !!(t.pinchStatus || t.pinchIn || t.pinchOut)
    }
    function Y() {
      return !(!F() || !X())
    }
    function V() {
      var e = Q(),
      n = H(),
      t = G(),
      r = Z();
      return !_() && r && t && n && e
    }
    function W() {
      return !!(t.swipe || t.swipeStatus || t.swipeLeft || t.swipeRight || t.swipeUp || t.swipeDown)
    }
    function z() {
      return !(!V() || !W())
    }
    function G() {
      return ze === t.fingers || t.fingers === T || !S
    }
    function Z() {
      return 0 !== Ge[0].end.x
    }
    function B() {
      return !!t.tap
    }
    function J() {
      return !!t.doubleTap
    }
    function K() {
      return !!t.longTap
    }
    function $() {
      if (null == $e) return !1;
      var e = Oe();
      return J() && e - $e <= t.doubleTapThreshold
    }
    function ee() {
      return $()
    }
    function ne() {
      return (1 === ze || !S) && (isNaN(je) || je < t.threshold)
    }
    function te() {
      return _e > t.longTapThreshold && je < b
    }
    function re() {
      return !(!ne() || !B())
    }
    function ie() {
      return !(!$() || !J())
    }
    function le() {
      return !(!te() || !K())
    }
    function oe(e) {
      Je = Oe(),
      Ke = e.touches.length + 1
    }
    function ue() {
      Je = 0,
      Ke = 0
    }
    function ae() {
      var e = !1;
      return Je && Oe() - Je <= t.fingerReleaseThreshold && (e = !0),
      e
    }
    function ce() {
      return !(!0 !== Ve.data(D + '_intouch'))
    }
    function se(e) {
      Ve && (!0 === e ? (Ve.bind(ke, L), Ve.bind(Ae, R), Ie && Ve.bind(Ie, A))  : (Ve.unbind(ke, L, !1), Ve.unbind(Ae, R, !1), Ie && Ve.unbind(Ie, A, !1)), Ve.data(D + '_intouch', !0 === e))
    }
    function pe(e, n) {
      var t = {
        start: {
          x: 0,
          y: 0
        },
        last: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      };
      return t.start.x = t.last.x = t.end.x = n.pageX || n.clientX,
      t.start.y = t.last.y = t.end.y = n.pageY || n.clientY,
      Ge[e] = t,
      t
    }
    function fe(e) {
      var n = void 0 !== e.identifier ? e.identifier : 0,
      t = he(n);
      return null === t && (t = pe(n, e)),
      t.last.x = t.end.x,
      t.last.y = t.end.y,
      t.end.x = e.pageX || e.clientX,
      t.end.y = e.pageY || e.clientY,
      t
    }
    function he(e) {
      return Ge[e] || null
    }
    function de(e, n) {
      e != c && (n = Math.max(n, ge(e)), Ye[e].distance = n)
    }
    function ge(e) {
      if (Ye[e]) return Ye[e].distance
    }
    function we() {
      var e = {
      };
      return e[r] = ve(r),
      e[i] = ve(i),
      e[l] = ve(l),
      e[o] = ve(o),
      e
    }
    function ve(e) {
      return {
        direction: e,
        distance: 0
      }
    }
    function Te() {
      return Be - Ze
    }
    function be(e, n) {
      var t = Math.abs(e.x - n.x),
      r = Math.abs(e.y - n.y);
      return Math.round(Math.sqrt(t * t + r * r))
    }
    function ye(e, n) {
      return (n / e * 1).toFixed(2)
    }
    function Ee() {
      return Ce < 1 ? a : u
    }
    function me(e, n) {
      return Math.round(Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2)))
    }
    function xe(e, n) {
      var t = e.x - n.x,
      r = n.y - e.y,
      i = Math.atan2(r, t),
      l = Math.round(180 * i / Math.PI);
      return l < 0 && (l = 360 - Math.abs(l)),
      l
    }
    function Se(e, n) {
      if (Pe(e, n)) return c;
      var t = xe(e, n);
      return t <= 45 && t >= 0 ? r : t <= 360 && t >= 315 ? r : t >= 135 && t <= 225 ? i : t > 45 && t < 135 ? o : l
    }
    function Oe() {
      return (new Date).getTime()
    }
    function Me(n) {
      var t = (n = e(n)).offset();
      return {
        left: t.left,
        right: t.left + n.outerWidth(),
        top: t.top,
        bottom: t.top + n.outerHeight()
      }
    }
    function De(e, n) {
      return e.x > n.left && e.x < n.right && e.y > n.top && e.y < n.bottom
    }
    function Pe(e, n) {
      return e.x == n.x && e.y == n.y
    }
    var t = e.extend({
    }, t),
    Le = S || M || !t.fallbackToMouseEvents,
    Re = Le ? M ? O ? 'MSPointerDown' : 'pointerdown' : 'touchstart' : 'mousedown',
    ke = Le ? M ? O ? 'MSPointerMove' : 'pointermove' : 'touchmove' : 'mousemove',
    Ae = Le ? M ? O ? 'MSPointerUp' : 'pointerup' : 'touchend' : 'mouseup',
    Ie = Le ? M ? 'mouseleave' : null : 'mouseleave',
    Ue = M ? O ? 'MSPointerCancel' : 'pointercancel' : 'touchcancel',
    je = 0,
    Ne = null,
    He = null,
    _e = 0,
    qe = 0,
    Qe = 0,
    Ce = 1,
    Fe = 0,
    Xe = 0,
    Ye = null,
    Ve = e(n),
    We = 'start',
    ze = 0,
    Ge = {
    },
    Ze = 0,
    Be = 0,
    Je = 0,
    Ke = 0,
    $e = 0,
    en = null,
    nn = null;
    try {
      Ve.bind(Re, P),
      Ve.bind(Ue, k)
    } catch (n) {
      e.error('events not supported ' + Re + ',' + Ue + ' on jQuery.swipe')
    }
    this.enable = function () {
      return this.disable(),
      Ve.bind(Re, P),
      Ve.bind(Ue, k),
      Ve
    },
    this.disable = function () {
      return I(),
      Ve
    },
    this.destroy = function () {
      I(),
      Ve.data(D, null),
      Ve = null
    },
    this.option = function (n, r) {
      if ('object' == typeof n) t = e.extend(t, n);
       else if (void 0 !== t[n]) {
        if (void 0 === r) return t[n];
        t[n] = r
      } else {
        if (!n) return t;
        e.error('Option ' + n + ' does not exist on jQuery.swipe.options')
      }
      return null
    }
  }
  var r = 'left',
  i = 'right',
  l = 'up',
  o = 'down',
  u = 'in',
  a = 'out',
  c = 'none',
  s = 'auto',
  p = 'swipe',
  f = 'pinch',
  h = 'tap',
  d = 'doubletap',
  g = 'longtap',
  w = 'horizontal',
  v = 'vertical',
  T = 'all',
  b = 10,
  y = 'start',
  E = 'move',
  m = 'end',
  x = 'cancel',
  S = 'ontouchstart' in window,
  O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !S,
  M = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !S,
  D = 'TouchSwipe',
  P = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null,
    tap: null,
    doubleTap: null,
    longTap: null,
    hold: null,
    triggerOnTouchEnd: !0,
    triggerOnTouchLeave: !1,
    allowPageScroll: 'auto',
    fallbackToMouseEvents: !0,
    excludedElements: '.noSwipe',
    preventDefaultEvents: !0
  };
  e.fn.swipe = function (t) {
    var r = e(this),
    i = r.data(D);
    if (i && 'string' == typeof t) {
      if (i[t]) return i[t].apply(i, Array.prototype.slice.call(arguments, 1));
      e.error('Method ' + t + ' does not exist on jQuery.swipe')
    } else if (i && 'object' == typeof t) i.option.apply(i, arguments);
     else if (!(i || 'object' != typeof t && t)) return n.apply(this, arguments);
    return r
  },
  e.fn.swipe.version = '1.6.18',
  e.fn.swipe.defaults = P,
  e.fn.swipe.phases = {
    PHASE_START: y,
    PHASE_MOVE: E,
    PHASE_END: m,
    PHASE_CANCEL: x
  },
  e.fn.swipe.directions = {
    LEFT: r,
    RIGHT: i,
    UP: l,
    DOWN: o,
    IN: u,
    OUT: a
  },
  e.fn.swipe.pageScroll = {
    NONE: c,
    HORIZONTAL: w,
    VERTICAL: v,
    AUTO: s
  },
  e.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    ALL: T
  }
});
/**
 * @module       Popper.js
 * @author       Federico Zivolo
 * @see          https://github.com/FezVrasta/popper.js
 * @license      MIT
 * @version      1.11.0
 */
(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t()  : 'function' == typeof define && define.amd ? define(t)  : e.Popper = t()
}) (this, function () {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {
    }.toString.call(e)
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = window.getComputedStyle(e, null);
    return t ? o[t] : o
  }
  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }
  function n(e) {
    if (!e || - 1 !== ['HTML',
    'BODY',
    '#document'].indexOf(e.nodeName)) return window.document.body;
    var i = t(e),
    r = i.overflow,
    p = i.overflowX,
    s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
  }
  function r(e) {
    var o = e && e.offsetParent,
    i = o && o.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? - 1 !== ['TD',
    'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o)  : o : window.document.documentElement
  }
  function p(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode)
  }
  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
    i = o ? e : t,
    n = o ? t : e,
    a = document.createRange();
    a.setStart(i, 0),
    a.setEnd(n, 0);
    var f = a.commonAncestorContainer;
    if (e !== f && t !== f || i.contains(n)) return p(f) ? f : r(f);
    var l = s(e);
    return l.host ? d(l.host, t)  : d(e, s(t).host)
  }
  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
    o = 'top' === t ? 'scrollTop' : 'scrollLeft',
    i = e.nodeName;
    if ('BODY' === i || 'HTML' === i) {
      var n = window.document.documentElement,
      r = window.document.scrollingElement || n;
      return r[o]
    }
    return e[o]
  }
  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
    i = a(t, 'top'),
    n = a(t, 'left'),
    r = o ? - 1 : 1;
    return e.top += i * r,
    e.bottom += i * r,
    e.left += n * r,
    e.right += n * r,
    e
  }
  function l(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
    i = 'Left' == o ? 'Right' : 'Bottom';
    return + e['border' + o + 'Width'].split('px') [0] + + e['border' + i + 'Width'].split('px') [0]
  }
  function m(e, t, o, i) {
    return _(t['offset' + e], o['client' + e], o['offset' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
  }
  function h() {
    var e = window.document.body,
    t = window.document.documentElement,
    o = ie() && window.getComputedStyle(t);
    return {
      height: m('Height', e, t, o),
      width: m('Width', e, t, o)
    }
  }
  function c(e) {
    return se({
    }, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    })
  }
  function g(e) {
    var o = {
    };
    if (ie()) try {
      o = e.getBoundingClientRect();
      var i = a(e, 'top'),
      n = a(e, 'left');
      o.top += i,
      o.left += n,
      o.bottom += i,
      o.right += n
    } catch (e) {
    } else o = e.getBoundingClientRect();
    var r = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
    p = 'HTML' === e.nodeName ? h()  : {
    },
    s = p.width || e.clientWidth || r.right - r.left,
    d = p.height || e.clientHeight || r.bottom - r.top,
    f = e.offsetWidth - s,
    m = e.offsetHeight - d;
    if (f || m) {
      var g = t(e);
      f -= l(g, 'x'),
      m -= l(g, 'y'),
      r.width -= f,
      r.height -= m
    }
    return c(r)
  }
  function u(e, o) {
    var i = ie(),
    r = 'HTML' === o.nodeName,
    p = g(e),
    s = g(o),
    d = n(e),
    a = t(o),
    l = + a.borderTopWidth.split('px') [0],
    m = + a.borderLeftWidth.split('px') [0],
    h = c({
      top: p.top - s.top - l,
      left: p.left - s.left - m,
      width: p.width,
      height: p.height
    });
    if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = + a.marginTop.split('px') [0],
      b = + a.marginLeft.split('px') [0];
      h.top -= l - u,
      h.bottom -= l - u,
      h.left -= m - b,
      h.right -= m - b,
      h.marginTop = u,
      h.marginLeft = b
    }
    return (i ? o.contains(d)  : o === d && 'BODY' !== d.nodeName) && (h = f(h, o)),
    h
  }
  function b(e) {
    var t = window.document.documentElement,
    o = u(e, t),
    i = _(t.clientWidth, window.innerWidth || 0),
    n = _(t.clientHeight, window.innerHeight || 0),
    r = a(t),
    p = a(t, 'left'),
    s = {
      top: r - o.top + o.marginTop,
      left: p - o.left + o.marginLeft,
      width: i,
      height: n
    };
    return c(s)
  }
  function y(e) {
    var i = e.nodeName;
    return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
  }
  function w(e, t, i, r) {
    var p = {
      top: 0,
      left: 0
    },
    s = d(e, t);
    if ('viewport' === r) p = b(s);
     else {
      var a;
      'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement))  : 'window' === r ? a = window.document.documentElement : a = r;
      var f = u(a, s);
      if ('HTML' === a.nodeName && !y(s)) {
        var l = h(),
        m = l.height,
        c = l.width;
        p.top += f.top - f.marginTop,
        p.bottom = m + f.top,
        p.left += f.left - f.marginLeft,
        p.right = c + f.left
      } else p = f
    }
    return p.left += i,
    p.top += i,
    p.right -= i,
    p.bottom -= i,
    p
  }
  function v(e) {
    var t = e.width,
    o = e.height;
    return t * o
  }
  function E(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if ( - 1 === e.indexOf('auto')) return e;
    var p = w(o, i, r, n),
    s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
    d = Object.keys(s).map(function (e) {
      return se({
        key: e
      }, s[e], {
        area: v(s[e])
      })
    }).sort(function (e, t) {
      return t.area - e.area
    }),
    a = d.filter(function (e) {
      var t = e.width,
      i = e.height;
      return t >= o.clientWidth && i >= o.clientHeight
    }),
    f = 0 < a.length ? a[0].key : d[0].key,
    l = e.split('-') [1];
    return f + (l ? '-' + l : '')
  }
  function x(e, t, o) {
    var i = d(t, o);
    return u(o, i)
  }
  function O(e) {
    var t = window.getComputedStyle(e),
    o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
    i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
    n = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + o
    };
    return n
  }
  function L(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }
  function S(e, t, o) {
    o = o.split('-') [0];
    var i = O(e),
    n = {
      width: i.width,
      height: i.height
    },
    r = - 1 !== ['right',
    'left'].indexOf(o),
    p = r ? 'top' : 'left',
    s = r ? 'left' : 'top',
    d = r ? 'height' : 'width',
    a = r ? 'width' : 'height';
    return n[p] = t[p] + t[d] / 2 - i[d] / 2,
    n[s] = o === s ? t[s] - i[a] : t[L(s)],
    n
  }
  function T(e, t) {
    return Array.prototype.find ? e.find(t)  : e.filter(t) [0]
  }
  function C(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o
    });
    var i = T(e, function (e) {
      return e[t] === o
    });
    return e.indexOf(i)
  }
  function N(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
    return n.forEach(function (t) {
      t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var i = t.function || t.fn;
      t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t))
    }),
    o
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {
        },
        attributes: {
        },
        flipped: !1,
        offsets: {
        }
      };
      e.offsets.reference = x(this.state, this.popper, this.reference),
      e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
      e.originalPlacement = e.placement,
      e.offsets.popper = S(this.popper, e.offsets.reference, e.placement),
      e.offsets.popper.position = 'absolute',
      e = N(this.modifiers, e),
      this.state.isCreated ? this.options.onUpdate(e)  : (this.state.isCreated = !0, this.options.onCreate(e))
    }
  }
  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
      i = e.enabled;
      return i && o === t
    })
  }
  function B(e) {
    for (var t = [
      !1,
      'ms',
      'Webkit',
      'Moz',
      'O'
    ], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
      r = i ? '' + i + o : e;
      if ('undefined' != typeof window.document.body.style[r]) return r
    }
    return null
  }
  function D() {
    return this.state.isDestroyed = !0,
    W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''),
    this.disableEventListeners(),
    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
    this
  }
  function H(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
    p = r ? window : e;
    p.addEventListener(t, o, {
      passive: !0
    }),
    r || H(n(p.parentNode), t, o, i),
    i.push(p)
  }
  function P(e, t, o, i) {
    o.updateBound = i,
    window.addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return H(r, 'scroll', o.updateBound, o.scrollParents),
    o.scrollElement = r,
    o.eventsEnabled = !0,
    o
  }
  function A() {
    this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
  }
  function M(e, t) {
    return window.removeEventListener('resize', t.updateBound),
    t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound)
    }),
    t.updateBound = null,
    t.scrollParents = [
    ],
    t.scrollElement = null,
    t.eventsEnabled = !1,
    t
  }
  function I() {
    this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
  }
  function R(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }
  function U(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = '';
      - 1 !== ['width',
      'height',
      'top',
      'right',
      'bottom',
      'left'].indexOf(o) && R(t[o]) && (i = 'px'),
      e.style[o] = t[o] + i
    })
  }
  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o)  : e.setAttribute(o, t[o])
    })
  }
  function F(e, t, o) {
    var i = T(e, function (e) {
      var o = e.name;
      return o === t
    }),
    n = !!i && e.some(function (e) {
      return e.name === o && e.enabled && e.order < i.order
    });
    if (!n) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
    }
    return n
  }
  function j(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }
  function K(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
    o = ae.indexOf(e),
    i = ae.slice(o + 1).concat(ae.slice(0, o));
    return t ? i.reverse()  : i
  }
  function q(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
    r = + n[1],
    p = n[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = i;
      }
      var d = c(s);
      return d[t] / 100 * r
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? _(document.documentElement.clientHeight, window.innerHeight || 0)  : _(document.documentElement.clientWidth, window.innerWidth || 0),
      a / 100 * r
    }
    return r
  }
  function G(e, t, o, i) {
    var n = [
      0,
      0
    ],
    r = - 1 !== ['right',
    'left'].indexOf(i),
    p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim()
    }),
    s = p.indexOf(T(p, function (e) {
      return - 1 !== e.search(/,|\s/)
    }));
    p[s] && - 1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
    a = - 1 === s ? [
      p
    ] : [
      p.slice(0, s).concat([p[s].split(d) [0]]),
      [
        p[s].split(d) [1]
      ].concat(p.slice(s + 1))
    ];
    return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
      p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && - 1 !== ['+',
        '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e)  : p ? (e[e.length - 1] += t, p = !1, e)  : e.concat(t)
      }, [
      ]).map(function (e) {
        return q(e, n, t, o)
      })
    }),
    a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        R(o) && (n[t] += o * ('-' === e[i - 1] ? - 1 : 1))
      })
    }),
    n
  }
  for (var z = Math.min, V = Math.floor, _ = Math.max, X = [
    'native code',
    '[object MutationObserverConstructor]'
  ], Q = function (e) {
    return X.some(function (t) {
      return - 1 < (e || '').toString().indexOf(t)
    })
  }, J = 'undefined' != typeof window, Z = [
    'Edge',
    'Trident',
    'Firefox'
  ], $ = 0, ee = 0; ee < Z.length; ee += 1) if (J && 0 <= navigator.userAgent.indexOf(Z[ee])) {
    $ = 1;
    break
  }
  var i,
  te = J && Q(window.MutationObserver),
  oe = te ? function (e) {
    var t = !1,
    o = 0,
    i = document.createElement('span'),
    n = new MutationObserver(function () {
      e(),
      t = !1
    });
    return n.observe(i, {
      attributes: !0
    }),
    function () {
      t || (t = !0, i.setAttribute('x-index', o), ++o)
    }
  }
   : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1,
        e()
      }, $))
    }
  },
  ie = function () {
    return void 0 == i && (i = - 1 !== navigator.appVersion.indexOf('MSIE 10')),
    i
  },
  ne = function (e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  },
  re = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) o = t[n],
      o.enumerable = o.enumerable || !1,
      o.configurable = !0,
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o)
    }
    return function (t, o, i) {
      return o && e(t.prototype, o),
      i && e(t, i),
      t
    }
  }(),
  pe = function (e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    })  : e[t] = o,
    e
  },
  se = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e
  },
  de = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
  ],
  ae = de.slice(3),
  fe = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
  le = function () {
    function t(o, i) {
      var n = this,
      r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {
      };
      ne(this, t),
      this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update)
      },
      this.update = oe(this.update.bind(this)),
      this.options = se({
      }, t.Defaults, r),
      this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: [
        ]
      },
      this.reference = o.jquery ? o[0] : o,
      this.popper = i.jquery ? i[0] : i,
      this.options.modifiers = {
      },
      Object.keys(se({
      }, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = se({
        }, t.Defaults.modifiers[e] || {
        }, r.modifiers ? r.modifiers[e] : {
        })
      }),
      this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return se({
          name: e
        }, n.options.modifiers[e])
      }).sort(function (e, t) {
        return e.order - t.order
      }),
      this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
      }),
      this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(),
      this.state.eventsEnabled = p
    }
    return re(t, [
      {
        key: 'update',
        value: function () {
          return k.call(this)
        }
      },
      {
        key: 'destroy',
        value: function () {
          return D.call(this)
        }
      },
      {
        key: 'enableEventListeners',
        value: function () {
          return A.call(this)
        }
      },
      {
        key: 'disableEventListeners',
        value: function () {
          return I.call(this)
        }
      }
    ]),
    t
  }();
  return le.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
  le.placements = de,
  le.Defaults = {
    placement: 'bottom',
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function () {
    },
    onUpdate: function () {
    },
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function (e) {
          var t = e.placement,
          o = t.split('-') [0],
          i = t.split('-') [1];
          if (i) {
            var n = e.offsets,
            r = n.reference,
            p = n.popper,
            s = - 1 !== ['bottom',
            'top'].indexOf(o),
            d = s ? 'left' : 'top',
            a = s ? 'width' : 'height',
            f = {
              start: pe({
              }, d, r[d]),
              end: pe({
              }, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = se({
            }, p, f[i])
          }
          return e
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function (e, t) {
          var o,
          i = t.offset,
          n = e.placement,
          r = e.offsets,
          p = r.popper,
          s = r.reference,
          d = n.split('-') [0];
          return o = R( + i) ? [
            + i,
            0
          ] : G(i, p, s, d),
          'left' === d ? (p.top += o[0], p.left -= o[1])  : 'right' === d ? (p.top += o[0], p.left += o[1])  : 'top' === d ? (p.left += o[0], p.top -= o[1])  : 'bottom' === d && (p.left += o[0], p.top += o[1]),
          e.popper = p,
          e
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function (e, t) {
          var o = t.boundariesElement || r(e.instance.popper);
          e.instance.reference === o && (o = r(o));
          var i = w(e.instance.popper, e.instance.reference, t.padding, o);
          t.boundaries = i;
          var n = t.priority,
          p = e.offsets.popper,
          s = {
            primary: function (e) {
              var o = p[e];
              return p[e] < i[e] && !t.escapeWithReference && (o = _(p[e], i[e])),
              pe({
              }, e, o)
            },
            secondary: function (e) {
              var o = 'right' === e ? 'left' : 'top',
              n = p[o];
              return p[e] > i[e] && !t.escapeWithReference && (n = z(p[o], i[e] - ('right' === e ? p.width : p.height))),
              pe({
              }, o, n)
            }
          };
          return n.forEach(function (e) {
            var t = - 1 === ['left',
            'top'].indexOf(e) ? 'secondary' : 'primary';
            p = se({
            }, p, s[t](e))
          }),
          e.offsets.popper = p,
          e
        },
        priority: [
          'left',
          'right',
          'top',
          'bottom'
        ],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function (e) {
          var t = e.offsets,
          o = t.popper,
          i = t.reference,
          n = e.placement.split('-') [0],
          r = V,
          p = - 1 !== ['top',
          'bottom'].indexOf(n),
          s = p ? 'right' : 'bottom',
          d = p ? 'left' : 'top',
          a = p ? 'width' : 'height';
          return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]),
          o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
          e
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function (e, t) {
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var o = t.element;
          if ('string' == typeof o) {
            if (o = e.instance.popper.querySelector(o), !o) return e;
          } else if (!e.instance.popper.contains(o)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
          e;
          var i = e.placement.split('-') [0],
          n = e.offsets,
          r = n.popper,
          p = n.reference,
          s = - 1 !== ['left',
          'right'].indexOf(i),
          d = s ? 'height' : 'width',
          a = s ? 'top' : 'left',
          f = s ? 'left' : 'top',
          l = s ? 'bottom' : 'right',
          m = O(o) [d];
          p[l] - m < r[a] && (e.offsets.popper[a] -= r[a] - (p[l] - m)),
          p[a] + m > r[l] && (e.offsets.popper[a] += p[a] + m - r[l]);
          var h = p[a] + p[d] / 2 - m / 2,
          g = h - c(e.offsets.popper) [a];
          return g = _(z(r[d] - m, g), 0),
          e.arrowElement = o,
          e.offsets.arrow = {
          },
          e.offsets.arrow[a] = Math.round(g),
          e.offsets.arrow[f] = '',
          e
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function (e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
          i = e.placement.split('-') [0],
          n = L(i),
          r = e.placement.split('-') [1] || '',
          p = [
          ];
          switch (t.behavior) {
            case fe.FLIP:
              p = [
                i,
                n
              ];
              break;
            case fe.CLOCKWISE:
              p = K(i);
              break;
            case fe.COUNTERCLOCKWISE:
              p = K(i, !0);
              break;
            default:
              p = t.behavior;
          }
          return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;
            i = e.placement.split('-') [0],
            n = L(i);
            var a = e.offsets.popper,
            f = e.offsets.reference,
            l = V,
            m = 'left' === i && l(a.right) > l(f.left) || 'right' === i && l(a.left) < l(f.right) || 'top' === i && l(a.bottom) > l(f.top) || 'bottom' === i && l(a.top) < l(f.bottom),
            h = l(a.left) < l(o.left),
            c = l(a.right) > l(o.right),
            g = l(a.top) < l(o.top),
            u = l(a.bottom) > l(o.bottom),
            b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
            y = - 1 !== ['top',
            'bottom'].indexOf(i),
            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({
            }, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
          }),
          e
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function (e) {
          var t = e.placement,
          o = t.split('-') [0],
          i = e.offsets,
          n = i.popper,
          r = i.reference,
          p = - 1 !== ['left',
          'right'].indexOf(o),
          s = - 1 === ['top',
          'left'].indexOf(o);
          return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0),
          e.placement = L(t),
          e.offsets.popper = c(n),
          e
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function (e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
          o = T(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name
          }).boundaries;
          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0,
            e.attributes['x-out-of-boundaries'] = ''
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1,
            e.attributes['x-out-of-boundaries'] = !1
          }
          return e
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function (e, t) {
          var o = t.x,
          i = t.y,
          n = e.offsets.popper,
          p = T(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name
          }).gpuAcceleration;
          void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
          d,
          a = void 0 === p ? t.gpuAcceleration : p,
          f = r(e.instance.popper),
          l = g(f),
          m = {
            position: n.position
          },
          h = {
            left: V(n.left),
            top: V(n.top),
            bottom: V(n.bottom),
            right: V(n.right)
          },
          c = 'bottom' === o ? 'top' : 'bottom',
          u = 'right' === i ? 'left' : 'right',
          b = B('transform');
          if (d = 'bottom' == c ? - l.height + h.bottom : h.top, s = 'right' == u ? - l.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
          m[c] = 0,
          m[u] = 0,
          m.willChange = 'transform';
           else {
            var y = 'bottom' == c ? - 1 : 1,
            w = 'right' == u ? - 1 : 1;
            m[c] = d * y,
            m[u] = s * w,
            m.willChange = c + ', ' + u
          }
          var v = {
            'x-placement': e.placement
          };
          return e.attributes = se({
          }, v, e.attributes),
          e.styles = se({
          }, m, e.styles),
          e
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function (e) {
          return U(e.instance.popper, e.styles),
          Y(e.instance.popper, e.attributes),
          e.offsets.arrow && U(e.arrowElement, e.offsets.arrow),
          e
        },
        onLoad: function (e, t, o, i, n) {
          var r = x(n, t, e),
          p = E(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p),
          U(t, {
            position: 'absolute'
          }),
          o
        },
        gpuAcceleration: void 0
      }
    }
  },
  le
});
/**
 * @module       Bootstrap
 * @author       Twitter, Inc.
 * @see          http://getbootstrap.com
 * @license      MIT
 * @version      4.0.0-beta2
 */
var bootstrap = function (t, e, n) {
  'use strict';
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1,
      i.configurable = !0,
      'value' in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i)
    }
  }
  e = e && e.hasOwnProperty('default') ? e.default:
  e,
  n = n && n.hasOwnProperty('default') ? n.default:
  n;
  var s = function () {
    function t(t) {
      return {
      }.toString.call(t).match(/\s([a-zA-Z]+)/) [1].toLowerCase()
    }
    function n() {
      return {
        bindType: r.end,
        delegateType: r.end,
        handle: function (t) {
          if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
      }
    }
    function i() {
      if (window.QUnit) return !1;
      var t = document.createElement('bootstrap');
      for (var e in o) if ('undefined' != typeof t.style[e]) return {
        end: o[e]
      };
      return !1
    }
    function s(t) {
      var n = this,
      i = !1;
      return e(this).one(a.TRANSITION_END, function () {
        i = !0
      }),
      setTimeout(function () {
        i || a.triggerTransitionEnd(n)
      }, t),
      this
    }
    var r = !1,
    o = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    },
    a = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function (t) {
        do {
          t += ~~(1000000 * Math.random())
        } while (document.getElementById(t));
        return t
      },
      getSelectorFromElement: function (t) {
        var n = t.getAttribute('data-target');
        n && '#' !== n || (n = t.getAttribute('href') || '');
        try {
          return e(document).find(n).length > 0 ? n : null
        } catch (t) {
          return null
        }
      },
      reflow: function (t) {
        return t.offsetHeight
      },
      triggerTransitionEnd: function (t) {
        e(t).trigger(r.end)
      },
      supportsTransitionEnd: function () {
        return Boolean(r)
      },
      isElement: function (t) {
        return (t[0] || t).nodeType
      },
      typeCheckConfig: function (e, n, i) {
        for (var s in i) if (Object.prototype.hasOwnProperty.call(i, s)) {
          var r = i[s],
          o = n[s],
          l = o && a.isElement(o) ? 'element' : t(o);
          if (!new RegExp(r).test(l)) throw new Error(e.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + r + '".')
        }
      }
    };
    return r = i(),
    e.fn.emulateTransitionEnd = s,
    a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()),
    a
  }(),
  r = function (t, e, n) {
    return e && i(t.prototype, e),
    n && i(t, n),
    t
  },
  o = function (t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
  },
  a = function () {
    var t = 'alert',
    n = e.fn[t],
    i = {
      CLOSE: 'close.bs.alert',
      CLOSED: 'closed.bs.alert',
      CLICK_DATA_API: 'click.bs.alert.data-api'
    },
    o = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
    },
    a = function () {
      function t(t) {
        this._element = t
      }
      var n = t.prototype;
      return n.close = function (t) {
        t = t || this._element;
        var e = this._getRootElement(t);
        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
      },
      n.dispose = function () {
        e.removeData(this._element, 'bs.alert'),
        this._element = null
      },
      n._getRootElement = function (t) {
        var n = s.getSelectorFromElement(t),
        i = !1;
        return n && (i = e(n) [0]),
        i || (i = e(t).closest('.' + o.ALERT) [0]),
        i
      },
      n._triggerCloseEvent = function (t) {
        var n = e.Event(i.CLOSE);
        return e(t).trigger(n),
        n
      },
      n._removeElement = function (t) {
        var n = this;
        e(t).removeClass(o.SHOW),
        s.supportsTransitionEnd() && e(t).hasClass(o.FADE) ? e(t).one(s.TRANSITION_END, function (e) {
          return n._destroyElement(t, e)
        }).emulateTransitionEnd(150)  : this._destroyElement(t)
      },
      n._destroyElement = function (t) {
        e(t).detach().trigger(i.CLOSED).remove()
      },
      t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
          s = i.data('bs.alert');
          s || (s = new t(this), i.data('bs.alert', s)),
          'close' === n && s[n](this)
        })
      },
      t._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(),
          t.close(this)
        }
      },
      r(t, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        }
      ]),
      t
    }();
    return e(document).on(i.CLICK_DATA_API, {
      DISMISS: '[data-dismiss="alert"]'
    }.DISMISS, a._handleDismiss(new a)),
    e.fn[t] = a._jQueryInterface,
    e.fn[t].Constructor = a,
    e.fn[t].noConflict = function () {
      return e.fn[t] = n,
      a._jQueryInterface
    },
    a
  }(),
  l = function () {
    var t = 'button',
    n = e.fn[t],
    i = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    },
    s = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: 'input',
      ACTIVE: '.active',
      BUTTON: '.btn'
    },
    o = {
      CLICK_DATA_API: 'click.bs.button.data-api',
      FOCUS_BLUR_DATA_API: 'focus.bs.button.data-api blur.bs.button.data-api'
    },
    a = function () {
      function t(t) {
        this._element = t
      }
      var n = t.prototype;
      return n.toggle = function () {
        var t = !0,
        n = !0,
        r = e(this._element).closest(s.DATA_TOGGLE) [0];
        if (r) {
          var o = e(this._element).find(s.INPUT) [0];
          if (o) {
            if ('radio' === o.type) if (o.checked && e(this._element).hasClass(i.ACTIVE)) t = !1;
             else {
              var a = e(r).find(s.ACTIVE) [0];
              a && e(a).removeClass(i.ACTIVE)
            }
            if (t) {
              if (o.hasAttribute('disabled') || r.hasAttribute('disabled') || o.classList.contains('disabled') || r.classList.contains('disabled')) return;
              o.checked = !e(this._element).hasClass(i.ACTIVE),
              e(o).trigger('change')
            }
            o.focus(),
            n = !1
          }
        }
        n && this._element.setAttribute('aria-pressed', !e(this._element).hasClass(i.ACTIVE)),
        t && e(this._element).toggleClass(i.ACTIVE)
      },
      n.dispose = function () {
        e.removeData(this._element, 'bs.button'),
        this._element = null
      },
      t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this).data('bs.button');
          i || (i = new t(this), e(this).data('bs.button', i)),
          'toggle' === n && i[n]()
        })
      },
      r(t, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        }
      ]),
      t
    }();
    return e(document).on(o.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
      t.preventDefault();
      var n = t.target;
      e(n).hasClass(i.BUTTON) || (n = e(n).closest(s.BUTTON)),
      a._jQueryInterface.call(e(n), 'toggle')
    }).on(o.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
      var n = e(t.target).closest(s.BUTTON) [0];
      e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type))
    }),
    e.fn[t] = a._jQueryInterface,
    e.fn[t].Constructor = a,
    e.fn[t].noConflict = function () {
      return e.fn[t] = n,
      a._jQueryInterface
    },
    a
  }(),
  h = function () {
    var t = 'carousel',
    n = 'bs.carousel',
    i = '.' + n,
    o = e.fn[t],
    a = {
      interval: 5000,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0
    },
    l = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    },
    h = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    },
    c = {
      SLIDE: 'slide' + i,
      SLID: 'slid' + i,
      KEYDOWN: 'keydown' + i,
      MOUSEENTER: 'mouseenter' + i,
      MOUSELEAVE: 'mouseleave' + i,
      TOUCHEND: 'touchend' + i,
      LOAD_DATA_API: 'load.bs.carousel.data-api',
      CLICK_DATA_API: 'click.bs.carousel.data-api'
    },
    u = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item'
    },
    d = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
    },
    f = function () {
      function o(t, n) {
        this._items = null,
        this._interval = null,
        this._activeElement = null,
        this._isPaused = !1,
        this._isSliding = !1,
        this.touchTimeout = null,
        this._config = this._getConfig(n),
        this._element = e(t) [0],
        this._indicatorsElement = e(this._element).find(d.INDICATORS) [0],
        this._addEventListeners()
      }
      var f = o.prototype;
      return f.next = function () {
        this._isSliding || this._slide(h.NEXT)
      },
      f.nextWhenVisible = function () {
        !document.hidden && e(this._element).is(':visible') && 'hidden' !== e(this._element).css('visibility') && this.next()
      },
      f.prev = function () {
        this._isSliding || this._slide(h.PREV)
      },
      f.pause = function (t) {
        t || (this._isPaused = !0),
        e(this._element).find(d.NEXT_PREV) [0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        this._interval = null
      },
      f.cycle = function (t) {
        t || (this._isPaused = !1),
        this._interval && (clearInterval(this._interval), this._interval = null),
        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      },
      f.to = function (t) {
        var n = this;
        this._activeElement = e(this._element).find(d.ACTIVE_ITEM) [0];
        var i = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(c.SLID, function () {
          return n.to(t)
        });
         else {
          if (i === t) return this.pause(),
          void this.cycle();
          var s = t > i ? h.NEXT : h.PREV;
          this._slide(s, this._items[t])
        }
      },
      f.dispose = function () {
        e(this._element).off(i),
        e.removeData(this._element, n),
        this._items = null,
        this._config = null,
        this._element = null,
        this._interval = null,
        this._isPaused = null,
        this._isSliding = null,
        this._activeElement = null,
        this._indicatorsElement = null
      },
      f._getConfig = function (n) {
        return n = e.extend({
        }, a, n),
        s.typeCheckConfig(t, n, l),
        n
      },
      f._addEventListeners = function () {
        var t = this;
        this._config.keyboard && e(this._element).on(c.KEYDOWN, function (e) {
          return t._keydown(e)
        }),
        'hover' === this._config.pause && (e(this._element).on(c.MOUSEENTER, function (e) {
          return t.pause(e)
        }).on(c.MOUSELEAVE, function (e) {
          return t.cycle(e)
        }), 'ontouchstart' in document.documentElement && e(this._element).on(c.TOUCHEND, function () {
          t.pause(),
          t.touchTimeout && clearTimeout(t.touchTimeout),
          t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e)
          }, 500 + t._config.interval)
        }))
      },
      f._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(),
            this.prev();
            break;
          case 39:
            t.preventDefault(),
            this.next();
            break;
          default:
            return
        }
      },
      f._getItemIndex = function (t) {
        return this._items = e.makeArray(e(t).parent().find(d.ITEM)),
        this._items.indexOf(t)
      },
      f._getItemByDirection = function (t, e) {
        var n = t === h.NEXT,
        i = t === h.PREV,
        s = this._getItemIndex(e),
        r = this._items.length - 1;
        if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
        var o = (s + (t === h.PREV ? - 1 : 1)) % this._items.length;
        return - 1 === o ? this._items[this._items.length - 1] : this._items[o]
      },
      f._triggerSlideEvent = function (t, n) {
        var i = this._getItemIndex(t),
        s = this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM) [0]),
        r = e.Event(c.SLIDE, {
          relatedTarget: t,
          direction: n,
          from: s,
          to: i
        });
        return e(this._element).trigger(r),
        r
      },
      f._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);
          var n = this._indicatorsElement.children[this._getItemIndex(t)];
          n && e(n).addClass(u.ACTIVE)
        }
      },
      f._slide = function (t, n) {
        var i,
        r,
        o,
        a = this,
        l = e(this._element).find(d.ACTIVE_ITEM) [0],
        f = this._getItemIndex(l),
        _ = n || l && this._getItemByDirection(t, l),
        g = this._getItemIndex(_),
        m = Boolean(this._interval);
        if (t === h.NEXT ? (i = u.LEFT, r = u.NEXT, o = h.LEFT)  : (i = u.RIGHT, r = u.PREV, o = h.RIGHT), _ && e(_).hasClass(u.ACTIVE)) this._isSliding = !1;
         else if (!this._triggerSlideEvent(_, o).isDefaultPrevented() && l && _) {
          this._isSliding = !0,
          m && this.pause(),
          this._setActiveIndicatorElement(_);
          var p = e.Event(c.SLID, {
            relatedTarget: _,
            direction: o,
            from: f,
            to: g
          });
          s.supportsTransitionEnd() && e(this._element).hasClass(u.SLIDE) ? (e(_).addClass(r), s.reflow(_), e(l).addClass(i), e(_).addClass(i), e(l).one(s.TRANSITION_END, function () {
            e(_).removeClass(i + ' ' + r).addClass(u.ACTIVE),
            e(l).removeClass(u.ACTIVE + ' ' + r + ' ' + i),
            a._isSliding = !1,
            setTimeout(function () {
              return e(a._element).trigger(p)
            }, 0)
          }).emulateTransitionEnd(600))  : (e(l).removeClass(u.ACTIVE), e(_).addClass(u.ACTIVE), this._isSliding = !1, e(this._element).trigger(p)),
          m && this.cycle()
        }
      },
      o._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data(n),
          s = e.extend({
          }, a, e(this).data());
          'object' == typeof t && e.extend(s, t);
          var r = 'string' == typeof t ? t : s.slide;
          if (i || (i = new o(this, s), e(this).data(n, i)), 'number' == typeof t) i.to(t);
           else if ('string' == typeof r) {
            if ('undefined' == typeof i[r]) throw new Error('No method named "' + r + '"');
            i[r]()
          } else s.interval && (i.pause(), i.cycle())
        })
      },
      o._dataApiClickHandler = function (t) {
        var i = s.getSelectorFromElement(this);
        if (i) {
          var r = e(i) [0];
          if (r && e(r).hasClass(u.CAROUSEL)) {
            var a = e.extend({
            }, e(r).data(), e(this).data()),
            l = this.getAttribute('data-slide-to');
            l && (a.interval = !1),
            o._jQueryInterface.call(e(r), a),
            l && e(r).data(n).to(l),
            t.preventDefault()
          }
        }
      },
      r(o, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        },
        {
          key: 'Default',
          get: function () {
            return a
          }
        }
      ]),
      o
    }();
    return e(document).on(c.CLICK_DATA_API, d.DATA_SLIDE, f._dataApiClickHandler),
    e(window).on(c.LOAD_DATA_API, function () {
      e(d.DATA_RIDE).each(function () {
        var t = e(this);
        f._jQueryInterface.call(t, t.data())
      })
    }),
    e.fn[t] = f._jQueryInterface,
    e.fn[t].Constructor = f,
    e.fn[t].noConflict = function () {
      return e.fn[t] = o,
      f._jQueryInterface
    },
    f
  }(),
  c = function () {
    var t = 'collapse',
    n = 'bs.collapse',
    i = e.fn[t],
    o = {
      toggle: !0,
      parent: ''
    },
    a = {
      toggle: 'boolean',
      parent: '(string|element)'
    },
    l = {
      SHOW: 'show.bs.collapse',
      SHOWN: 'shown.bs.collapse',
      HIDE: 'hide.bs.collapse',
      HIDDEN: 'hidden.bs.collapse',
      CLICK_DATA_API: 'click.bs.collapse.data-api'
    },
    h = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    },
    c = {
      WIDTH: 'width',
      HEIGHT: 'height'
    },
    u = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
    },
    d = function () {
      function i(t, n) {
        this._isTransitioning = !1,
        this._element = t,
        this._config = this._getConfig(n),
        this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var i = e(u.DATA_TOGGLE), r = 0; r < i.length; r++) {
          var o = i[r],
          a = s.getSelectorFromElement(o);
          null !== a && e(a).filter(t).length > 0 && this._triggerArray.push(o)
        }
        this._parent = this._config.parent ? this._getParent()  : null,
        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle()
      }
      var d = i.prototype;
      return d.toggle = function () {
        e(this._element).hasClass(h.SHOW) ? this.hide()  : this.show()
      },
      d.show = function () {
        var t = this;
        if (!this._isTransitioning && !e(this._element).hasClass(h.SHOW)) {
          var r,
          o;
          if (this._parent && ((r = e.makeArray(e(this._parent).children().children(u.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) {
            var a = e.Event(l.SHOW);
            if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
              r && (i._jQueryInterface.call(e(r), 'hide'), o || e(r).data(n, null));
              var c = this._getDimension();
              e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING),
              this._element.style[c] = 0,
              this._triggerArray.length && e(this._triggerArray).removeClass(h.COLLAPSED).attr('aria-expanded', !0),
              this.setTransitioning(!0);
              var d = function () {
                e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW),
                t._element.style[c] = '',
                t.setTransitioning(!1),
                e(t._element).trigger(l.SHOWN)
              };
              if (s.supportsTransitionEnd()) {
                var f = 'scroll' + (c[0].toUpperCase() + c.slice(1));
                e(this._element).one(s.TRANSITION_END, d).emulateTransitionEnd(600),
                this._element.style[c] = this._element[f] + 'px'
              } else d()
            }
          }
        }
      },
      d.hide = function () {
        var t = this;
        if (!this._isTransitioning && e(this._element).hasClass(h.SHOW)) {
          var n = e.Event(l.HIDE);
          if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();
            if (this._element.style[i] = this._element.getBoundingClientRect() [i] + 'px', s.reflow(this._element), e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW), this._triggerArray.length) for (var r = 0; r < this._triggerArray.length; r++) {
              var o = this._triggerArray[r],
              a = s.getSelectorFromElement(o);
              null !== a && (e(a).hasClass(h.SHOW) || e(o).addClass(h.COLLAPSED).attr('aria-expanded', !1))
            }
            this.setTransitioning(!0);
            var c = function () {
              t.setTransitioning(!1),
              e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(l.HIDDEN)
            };
            this._element.style[i] = '',
            s.supportsTransitionEnd() ? e(this._element).one(s.TRANSITION_END, c).emulateTransitionEnd(600)  : c()
          }
        }
      },
      d.setTransitioning = function (t) {
        this._isTransitioning = t
      },
      d.dispose = function () {
        e.removeData(this._element, n),
        this._config = null,
        this._parent = null,
        this._element = null,
        this._triggerArray = null,
        this._isTransitioning = null
      },
      d._getConfig = function (n) {
        return n = e.extend({
        }, o, n),
        n.toggle = Boolean(n.toggle),
        s.typeCheckConfig(t, n, a),
        n
      },
      d._getDimension = function () {
        return e(this._element).hasClass(c.WIDTH) ? c.WIDTH : c.HEIGHT
      },
      d._getParent = function () {
        var t = this,
        n = null;
        s.isElement(this._config.parent) ? (n = this._config.parent, 'undefined' != typeof this._config.parent.jquery && (n = this._config.parent[0]))  : n = e(this._config.parent) [0];
        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return e(n).find(r).each(function (e, n) {
          t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [
            n
          ])
        }),
        n
      },
      d._addAriaAndCollapsedClass = function (t, n) {
        if (t) {
          var i = e(t).hasClass(h.SHOW);
          n.length && e(n).toggleClass(h.COLLAPSED, !i).attr('aria-expanded', i)
        }
      },
      i._getTargetFromElement = function (t) {
        var n = s.getSelectorFromElement(t);
        return n ? e(n) [0] : null
      },
      i._jQueryInterface = function (t) {
        return this.each(function () {
          var s = e(this),
          r = s.data(n),
          a = e.extend({
          }, o, s.data(), 'object' == typeof t && t);
          if (!r && a.toggle && /show|hide/.test(t) && (a.toggle = !1), r || (r = new i(this, a), s.data(n, r)), 'string' == typeof t) {
            if ('undefined' == typeof r[t]) throw new Error('No method named "' + t + '"');
            r[t]()
          }
        })
      },
      r(i, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        },
        {
          key: 'Default',
          get: function () {
            return o
          }
        }
      ]),
      i
    }();
    return e(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
      'A' === t.currentTarget.tagName && t.preventDefault();
      var i = e(this),
      r = s.getSelectorFromElement(this);
      e(r).each(function () {
        var t = e(this),
        s = t.data(n) ? 'toggle' : i.data();
        d._jQueryInterface.call(t, s)
      })
    }),
    e.fn[t] = d._jQueryInterface,
    e.fn[t].Constructor = d,
    e.fn[t].noConflict = function () {
      return e.fn[t] = i,
      d._jQueryInterface
    },
    d
  }(),
  u = function () {
    if ('undefined' == typeof n) throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
    var t = 'dropdown',
    i = 'bs.dropdown',
    o = '.' + i,
    a = e.fn[t],
    l = new RegExp('38|40|27'),
    h = {
      HIDE: 'hide' + o,
      HIDDEN: 'hidden' + o,
      SHOW: 'show' + o,
      SHOWN: 'shown' + o,
      CLICK: 'click' + o,
      CLICK_DATA_API: 'click.bs.dropdown.data-api',
      KEYDOWN_DATA_API: 'keydown.bs.dropdown.data-api',
      KEYUP_DATA_API: 'keyup.bs.dropdown.data-api'
    },
    c = {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left'
    },
    u = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
    },
    d = {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end'
    },
    f = {
      offset: 0,
      flip: !0
    },
    _ = {
      offset: '(number|string|function)',
      flip: 'boolean'
    },
    g = function () {
      function a(t, e) {
        this._element = t,
        this._popper = null,
        this._config = this._getConfig(e),
        this._menu = this._getMenuElement(),
        this._inNavbar = this._detectNavbar(),
        this._addEventListeners()
      }
      var g = a.prototype;
      return g.toggle = function () {
        if (!this._element.disabled && !e(this._element).hasClass(c.DISABLED)) {
          var t = a._getParentFromElement(this._element),
          i = e(this._menu).hasClass(c.SHOW);
          if (a._clearMenus(), !i) {
            var s = {
              relatedTarget: this._element
            },
            r = e.Event(h.SHOW, s);
            if (e(t).trigger(r), !r.isDefaultPrevented()) {
              var o = this._element;
              e(t).hasClass(c.DROPUP) && (e(this._menu).hasClass(c.MENULEFT) || e(this._menu).hasClass(c.MENURIGHT)) && (o = t),
              this._popper = new n(o, this._menu, this._getPopperConfig()),
              'ontouchstart' in document.documentElement && !e(t).closest(u.NAVBAR_NAV).length && e('body').children().on('mouseover', null, e.noop),
              this._element.focus(),
              this._element.setAttribute('aria-expanded', !0),
              e(this._menu).toggleClass(c.SHOW),
              e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN, s))
            }
          }
        }
      },
      g.dispose = function () {
        e.removeData(this._element, i),
        e(this._element).off(o),
        this._element = null,
        this._menu = null,
        null !== this._popper && this._popper.destroy(),
        this._popper = null
      },
      g.update = function () {
        this._inNavbar = this._detectNavbar(),
        null !== this._popper && this._popper.scheduleUpdate()
      },
      g._addEventListeners = function () {
        var t = this;
        e(this._element).on(h.CLICK, function (e) {
          e.preventDefault(),
          e.stopPropagation(),
          t.toggle()
        })
      },
      g._getConfig = function (n) {
        return n = e.extend({
        }, this.constructor.Default, e(this._element).data(), n),
        s.typeCheckConfig(t, n, this.constructor.DefaultType),
        n
      },
      g._getMenuElement = function () {
        if (!this._menu) {
          var t = a._getParentFromElement(this._element);
          this._menu = e(t).find(u.MENU) [0]
        }
        return this._menu
      },
      g._getPlacement = function () {
        var t = e(this._element).parent(),
        n = d.BOTTOM;
        return t.hasClass(c.DROPUP) ? (n = d.TOP, e(this._menu).hasClass(c.MENURIGHT) && (n = d.TOPEND))  : e(this._menu).hasClass(c.MENURIGHT) && (n = d.BOTTOMEND),
        n
      },
      g._detectNavbar = function () {
        return e(this._element).closest('.navbar').length > 0
      },
      g._getPopperConfig = function () {
        var t = this,
        n = {
        };
        'function' == typeof this._config.offset ? n.fn = function (n) {
          return n.offsets = e.extend({
          }, n.offsets, t._config.offset(n.offsets) || {
          }),
          n
        }
         : n.offset = this._config.offset;
        var i = {
          placement: this._getPlacement(),
          modifiers: {
            offset: n,
            flip: {
              enabled: this._config.flip
            }
          }
        };
        return this._inNavbar && (i.modifiers.applyStyle = {
          enabled: !this._inNavbar
        }),
        i
      },
      a._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data(i),
          s = 'object' == typeof t ? t : null;
          if (n || (n = new a(this, s), e(this).data(i, n)), 'string' == typeof t) {
            if ('undefined' == typeof n[t]) throw new Error('No method named "' + t + '"');
            n[t]()
          }
        })
      },
      a._clearMenus = function (t) {
        if (!t || 3 !== t.which && ('keyup' !== t.type || 9 === t.which)) for (var n = e.makeArray(e(u.DATA_TOGGLE)), s = 0; s < n.length; s++) {
          var r = a._getParentFromElement(n[s]),
          o = e(n[s]).data(i),
          l = {
            relatedTarget: n[s]
          };
          if (o) {
            var d = o._menu;
            if (e(r).hasClass(c.SHOW) && !(t && ('click' === t.type && /input|textarea/i.test(t.target.tagName) || 'keyup' === t.type && 9 === t.which) && e.contains(r, t.target))) {
              var f = e.Event(h.HIDE, l);
              e(r).trigger(f),
              f.isDefaultPrevented() || ('ontouchstart' in document.documentElement && e('body').children().off('mouseover', null, e.noop), n[s].setAttribute('aria-expanded', 'false'), e(d).removeClass(c.SHOW), e(r).removeClass(c.SHOW).trigger(e.Event(h.HIDDEN, l)))
            }
          }
        }
      },
      a._getParentFromElement = function (t) {
        var n,
        i = s.getSelectorFromElement(t);
        return i && (n = e(i) [0]),
        n || t.parentNode
      },
      a._dataApiKeydownHandler = function (t) {
        if (!(!l.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(c.DISABLED)))) {
          var n = a._getParentFromElement(this),
          i = e(n).hasClass(c.SHOW);
          if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
            var s = e(n).find(u.VISIBLE_ITEMS).get();
            if (s.length) {
              var r = s.indexOf(t.target);
              38 === t.which && r > 0 && r--,
              40 === t.which && r < s.length - 1 && r++,
              r < 0 && (r = 0),
              s[r].focus()
            }
          } else {
            if (27 === t.which) {
              var o = e(n).find(u.DATA_TOGGLE) [0];
              e(o).trigger('focus')
            }
            e(this).trigger('click')
          }
        }
      },
      r(a, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        },
        {
          key: 'Default',
          get: function () {
            return f
          }
        },
        {
          key: 'DefaultType',
          get: function () {
            return _
          }
        }
      ]),
      a
    }();
    return e(document).on(h.KEYDOWN_DATA_API, u.DATA_TOGGLE, g._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, u.MENU, g._dataApiKeydownHandler).on(h.CLICK_DATA_API + ' ' + h.KEYUP_DATA_API, g._clearMenus).on(h.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
      t.preventDefault(),
      t.stopPropagation(),
      g._jQueryInterface.call(e(this), 'toggle')
    }).on(h.CLICK_DATA_API, u.FORM_CHILD, function (t) {
      t.stopPropagation()
    }),
    e.fn[t] = g._jQueryInterface,
    e.fn[t].Constructor = g,
    e.fn[t].noConflict = function () {
      return e.fn[t] = a,
      g._jQueryInterface
    },
    g
  }(),
  d = function () {
    var t = 'modal',
    n = '.bs.modal',
    i = e.fn[t],
    o = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
    a = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    },
    l = {
      HIDE: 'hide.bs.modal',
      HIDDEN: 'hidden.bs.modal',
      SHOW: 'show.bs.modal',
      SHOWN: 'shown.bs.modal',
      FOCUSIN: 'focusin.bs.modal',
      RESIZE: 'resize.bs.modal',
      CLICK_DISMISS: 'click.dismiss.bs.modal',
      KEYDOWN_DISMISS: 'keydown.dismiss.bs.modal',
      MOUSEUP_DISMISS: 'mouseup.dismiss.bs.modal',
      MOUSEDOWN_DISMISS: 'mousedown.dismiss.bs.modal',
      CLICK_DATA_API: 'click.bs.modal.data-api'
    },
    h = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    },
    c = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top',
      NAVBAR_TOGGLER: '.navbar-toggler'
    },
    u = function () {
      function i(t, n) {
        this._config = this._getConfig(n),
        this._element = t,
        this._dialog = e(t).find(c.DIALOG) [0],
        this._backdrop = null,
        this._isShown = !1,
        this._isBodyOverflowing = !1,
        this._ignoreBackdropClick = !1,
        this._originalBodyPadding = 0,
        this._scrollbarWidth = 0
      }
      var u = i.prototype;
      return u.toggle = function (t) {
        return this._isShown ? this.hide()  : this.show(t)
      },
      u.show = function (t) {
        var n = this;
        if (!this._isTransitioning && !this._isShown) {
          s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) && (this._isTransitioning = !0);
          var i = e.Event(l.SHOW, {
            relatedTarget: t
          });
          e(this._element).trigger(i),
          this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, c.DATA_DISMISS, function (t) {
            return n.hide(t)
          }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
            e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
              e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
            })
          }), this._showBackdrop(function () {
            return n._showElement(t)
          }))
        }
      },
      u.hide = function (t) {
        var n = this;
        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = e.Event(l.HIDE);
          if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;
            var r = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);
            r && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            e(document).off(l.FOCUSIN),
            e(this._element).removeClass(h.SHOW),
            e(this._element).off(l.CLICK_DISMISS),
            e(this._dialog).off(l.MOUSEDOWN_DISMISS),
            r ? e(this._element).one(s.TRANSITION_END, function (t) {
              return n._hideModal(t)
            }).emulateTransitionEnd(300)  : this._hideModal()
          }
        }
      },
      u.dispose = function () {
        e.removeData(this._element, 'bs.modal'),
        e(window, document, this._element, this._backdrop).off(n),
        this._config = null,
        this._element = null,
        this._dialog = null,
        this._backdrop = null,
        this._isShown = null,
        this._isBodyOverflowing = null,
        this._ignoreBackdropClick = null,
        this._scrollbarWidth = null
      },
      u.handleUpdate = function () {
        this._adjustDialog()
      },
      u._getConfig = function (n) {
        return n = e.extend({
        }, o, n),
        s.typeCheckConfig(t, n, a),
        n
      },
      u._showElement = function (t) {
        var n = this,
        i = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
        this._element.style.display = 'block',
        this._element.removeAttribute('aria-hidden'),
        this._element.scrollTop = 0,
        i && s.reflow(this._element),
        e(this._element).addClass(h.SHOW),
        this._config.focus && this._enforceFocus();
        var r = e.Event(l.SHOWN, {
          relatedTarget: t
        }),
        o = function () {
          n._config.focus && n._element.focus(),
          n._isTransitioning = !1,
          e(n._element).trigger(r)
        };
        i ? e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(300)  : o()
      },
      u._enforceFocus = function () {
        var t = this;
        e(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
          document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
        })
      },
      u._setEscapeEvent = function () {
        var t = this;
        this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
          27 === e.which && (e.preventDefault(), t.hide())
        })  : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
      },
      u._setResizeEvent = function () {
        var t = this;
        this._isShown ? e(window).on(l.RESIZE, function (e) {
          return t.handleUpdate(e)
        })  : e(window).off(l.RESIZE)
      },
      u._hideModal = function () {
        var t = this;
        this._element.style.display = 'none',
        this._element.setAttribute('aria-hidden', !0),
        this._isTransitioning = !1,
        this._showBackdrop(function () {
          e(document.body).removeClass(h.OPEN),
          t._resetAdjustments(),
          t._resetScrollbar(),
          e(t._element).trigger(l.HIDDEN)
        })
      },
      u._removeBackdrop = function () {
        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
      },
      u._showBackdrop = function (t) {
        var n = this,
        i = e(this._element).hasClass(h.FADE) ? h.FADE : '';
        if (this._isShown && this._config.backdrop) {
          var r = s.supportsTransitionEnd() && i;
          if (this._backdrop = document.createElement('div'), this._backdrop.className = h.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ('static' === n._config.backdrop ? n._element.focus()  : n.hide())
          }), r && s.reflow(this._backdrop), e(this._backdrop).addClass(h.SHOW), !t) return;
          if (!r) return void t();
          e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(150)
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass(h.SHOW);
          var o = function () {
            n._removeBackdrop(),
            t && t()
          };
          s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) ? e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(150)  : o()
        } else t && t()
      },
      u._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
        this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + 'px')
      },
      u._resetAdjustments = function () {
        this._element.style.paddingLeft = '',
        this._element.style.paddingRight = ''
      },
      u._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth,
        this._scrollbarWidth = this._getScrollbarWidth()
      },
      u._setScrollbar = function () {
        var t = this;
        if (this._isBodyOverflowing) {
          e(c.FIXED_CONTENT).each(function (n, i) {
            var s = e(i) [0].style.paddingRight,
            r = e(i).css('padding-right');
            e(i).data('padding-right', s).css('padding-right', parseFloat(r) + t._scrollbarWidth + 'px')
          }),
          e(c.STICKY_CONTENT).each(function (n, i) {
            var s = e(i) [0].style.marginRight,
            r = e(i).css('margin-right');
            e(i).data('margin-right', s).css('margin-right', parseFloat(r) - t._scrollbarWidth + 'px')
          }),
          e(c.NAVBAR_TOGGLER).each(function (n, i) {
            var s = e(i) [0].style.marginRight,
            r = e(i).css('margin-right');
            e(i).data('margin-right', s).css('margin-right', parseFloat(r) + t._scrollbarWidth + 'px')
          });
          var n = document.body.style.paddingRight,
          i = e('body').css('padding-right');
          e('body').data('padding-right', n).css('padding-right', parseFloat(i) + this._scrollbarWidth + 'px')
        }
      },
      u._resetScrollbar = function () {
        e(c.FIXED_CONTENT).each(function (t, n) {
          var i = e(n).data('padding-right');
          'undefined' != typeof i && e(n).css('padding-right', i).removeData('padding-right')
        }),
        e(c.STICKY_CONTENT + ', ' + c.NAVBAR_TOGGLER).each(function (t, n) {
          var i = e(n).data('margin-right');
          'undefined' != typeof i && e(n).css('margin-right', i).removeData('margin-right')
        });
        var t = e('body').data('padding-right');
        'undefined' != typeof t && e('body').css('padding-right', t).removeData('padding-right')
      },
      u._getScrollbarWidth = function () {
        var t = document.createElement('div');
        t.className = h.SCROLLBAR_MEASURER,
        document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t),
        e
      },
      i._jQueryInterface = function (t, n) {
        return this.each(function () {
          var s = e(this).data('bs.modal'),
          r = e.extend({
          }, i.Default, e(this).data(), 'object' == typeof t && t);
          if (s || (s = new i(this, r), e(this).data('bs.modal', s)), 'string' == typeof t) {
            if ('undefined' == typeof s[t]) throw new Error('No method named "' + t + '"');
            s[t](n)
          } else r.show && s.show(n)
        })
      },
      r(i, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        },
        {
          key: 'Default',
          get: function () {
            return o
          }
        }
      ]),
      i
    }();
    return e(document).on(l.CLICK_DATA_API, c.DATA_TOGGLE, function (t) {
      var n,
      i = this,
      r = s.getSelectorFromElement(this);
      r && (n = e(r) [0]);
      var o = e(n).data('bs.modal') ? 'toggle' : e.extend({
      }, e(n).data(), e(this).data());
      'A' !== this.tagName && 'AREA' !== this.tagName || t.preventDefault();
      var a = e(n).one(l.SHOW, function (t) {
        t.isDefaultPrevented() || a.one(l.HIDDEN, function () {
          e(i).is(':visible') && i.focus()
        })
      });
      u._jQueryInterface.call(e(n), o, this)
    }),
    e.fn[t] = u._jQueryInterface,
    e.fn[t].Constructor = u,
    e.fn[t].noConflict = function () {
      return e.fn[t] = i,
      u._jQueryInterface
    },
    u
  }(),
  f = function () {
    if ('undefined' == typeof n) throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
    var t = 'tooltip',
    i = '.bs.tooltip',
    o = e.fn[t],
    a = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
    l = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)'
    },
    h = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    },
    c = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip'
    },
    u = {
      SHOW: 'show',
      OUT: 'out'
    },
    d = {
      HIDE: 'hide' + i,
      HIDDEN: 'hidden' + i,
      SHOW: 'show' + i,
      SHOWN: 'shown' + i,
      INSERTED: 'inserted' + i,
      CLICK: 'click' + i,
      FOCUSIN: 'focusin' + i,
      FOCUSOUT: 'focusout' + i,
      MOUSEENTER: 'mouseenter' + i,
      MOUSELEAVE: 'mouseleave' + i
    },
    f = {
      FADE: 'fade',
      SHOW: 'show'
    },
    _ = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    },
    g = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
    },
    m = function () {
      function o(t, e) {
        this._isEnabled = !0,
        this._timeout = 0,
        this._hoverState = '',
        this._activeTrigger = {
        },
        this._popper = null,
        this.element = t,
        this.config = this._getConfig(e),
        this.tip = null,
        this._setListeners()
      }
      var m = o.prototype;
      return m.enable = function () {
        this._isEnabled = !0
      },
      m.disable = function () {
        this._isEnabled = !1
      },
      m.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled
      },
      m.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var n = this.constructor.DATA_KEY,
          i = e(t.currentTarget).data(n);
          i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)),
          i._activeTrigger.click = !i._activeTrigger.click,
          i._isWithActiveTrigger() ? i._enter(null, i)  : i._leave(null, i)
        } else {
          if (e(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);
          this._enter(null, this)
        }
      },
      m.dispose = function () {
        clearTimeout(this._timeout),
        e.removeData(this.element, this.constructor.DATA_KEY),
        e(this.element).off(this.constructor.EVENT_KEY),
        e(this.element).closest('.modal').off('hide.bs.modal'),
        this.tip && e(this.tip).remove(),
        this._isEnabled = null,
        this._timeout = null,
        this._hoverState = null,
        this._activeTrigger = null,
        null !== this._popper && this._popper.destroy(),
        this._popper = null,
        this.element = null,
        this.config = null,
        this.tip = null
      },
      m.show = function () {
        var t = this;
        if ('none' === e(this.element).css('display')) throw new Error('Please use show on visible elements');
        var i = e.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(i);
          var r = e.contains(this.element.ownerDocument.documentElement, this.element);
          if (i.isDefaultPrevented() || !r) return;
          var a = this.getTipElement(),
          l = s.getUID(this.constructor.NAME);
          a.setAttribute('id', l),
          this.element.setAttribute('aria-describedby', l),
          this.setContent(),
          this.config.animation && e(a).addClass(f.FADE);
          var h = 'function' == typeof this.config.placement ? this.config.placement.call(this, a, this.element)  : this.config.placement,
          c = this._getAttachment(h);
          this.addAttachmentClass(c);
          var d = !1 === this.config.container ? document.body : e(this.config.container);
          e(a).data(this.constructor.DATA_KEY, this),
          e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d),
          e(this.element).trigger(this.constructor.Event.INSERTED),
          this._popper = new n(this.element, a, {
            placement: c,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: _.ARROW
              }
            },
            onCreate: function (e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
            },
            onUpdate: function (e) {
              t._handlePopperPlacementChange(e)
            }
          }),
          e(a).addClass(f.SHOW),
          'ontouchstart' in document.documentElement && e('body').children().on('mouseover', null, e.noop);
          var g = function () {
            t.config.animation && t._fixTransition();
            var n = t._hoverState;
            t._hoverState = null,
            e(t.element).trigger(t.constructor.Event.SHOWN),
            n === u.OUT && t._leave(null, t)
          };
          s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(this.tip).one(s.TRANSITION_END, g).emulateTransitionEnd(o._TRANSITION_DURATION)  : g()
        }
      },
      m.hide = function (t) {
        var n = this,
        i = this.getTipElement(),
        r = e.Event(this.constructor.Event.HIDE),
        o = function () {
          n._hoverState !== u.SHOW && i.parentNode && i.parentNode.removeChild(i),
          n._cleanTipClass(),
          n.element.removeAttribute('aria-describedby'),
          e(n.element).trigger(n.constructor.Event.HIDDEN),
          null !== n._popper && n._popper.destroy(),
          t && t()
        };
        e(this.element).trigger(r),
        r.isDefaultPrevented() || (e(i).removeClass(f.SHOW), 'ontouchstart' in document.documentElement && e('body').children().off('mouseover', null, e.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(i).one(s.TRANSITION_END, o).emulateTransitionEnd(150)  : o(), this._hoverState = '')
      },
      m.update = function () {
        null !== this._popper && this._popper.scheduleUpdate()
      },
      m.isWithContent = function () {
        return Boolean(this.getTitle())
      },
      m.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass('bs-tooltip-' + t)
      },
      m.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template) [0],
        this.tip
      },
      m.setContent = function () {
        var t = e(this.getTipElement());
        this.setElementContent(t.find(_.TOOLTIP_INNER), this.getTitle()),
        t.removeClass(f.FADE + ' ' + f.SHOW)
      },
      m.setElementContent = function (t, n) {
        var i = this.config.html;
        'object' == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n)  : t.text(e(n).text())  : t[i ? 'html' : 'text'](n)
      },
      m.getTitle = function () {
        var t = this.element.getAttribute('data-original-title');
        return t || (t = 'function' == typeof this.config.title ? this.config.title.call(this.element)  : this.config.title),
        t
      },
      m._getAttachment = function (t) {
        return h[t.toUpperCase()]
      },
      m._setListeners = function () {
        var t = this;
        this.config.trigger.split(' ').forEach(function (n) {
          if ('click' === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e)
          });
           else if (n !== g.MANUAL) {
            var i = n === g.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
            s = n === g.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
            e(t.element).on(i, t.config.selector, function (e) {
              return t._enter(e)
            }).on(s, t.config.selector, function (e) {
              return t._leave(e)
            })
          }
          e(t.element).closest('.modal').on('hide.bs.modal', function () {
            return t.hide()
          })
        }),
        this.config.selector ? this.config = e.extend({
        }, this.config, {
          trigger: 'manual',
          selector: ''
        })  : this._fixTitle()
      },
      m._fixTitle = function () {
        var t = typeof this.element.getAttribute('data-original-title');
        (this.element.getAttribute('title') || 'string' !== t) && (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''), this.element.setAttribute('title', ''))
      },
      m._enter = function (t, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)),
        t && (n._activeTrigger['focusin' === t.type ? g.FOCUS : g.HOVER] = !0),
        e(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === u.SHOW ? n._hoverState = u.SHOW : (clearTimeout(n._timeout), n._hoverState = u.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === u.SHOW && n.show()
        }, n.config.delay.show)  : n.show())
      },
      m._leave = function (t, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)),
        t && (n._activeTrigger['focusout' === t.type ? g.FOCUS : g.HOVER] = !1),
        n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = u.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === u.OUT && n.hide()
        }, n.config.delay.hide)  : n.hide())
      },
      m._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
        return !1
      },
      m._getConfig = function (n) {
        return 'number' == typeof (n = e.extend({
        }, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
          show: n.delay,
          hide: n.delay
        }),
        'number' == typeof n.title && (n.title = n.title.toString()),
        'number' == typeof n.content && (n.content = n.content.toString()),
        s.typeCheckConfig(t, n, this.constructor.DefaultType),
        n
      },
      m._getDelegateConfig = function () {
        var t = {
        };
        if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        return t
      },
      m._cleanTipClass = function () {
        var t = e(this.getTipElement()),
        n = t.attr('class').match(a);
        null !== n && n.length > 0 && t.removeClass(n.join(''))
      },
      m._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(),
        this.addAttachmentClass(this._getAttachment(t.placement))
      },
      m._fixTransition = function () {
        var t = this.getTipElement(),
        n = this.config.animation;
        null === t.getAttribute('x-placement') && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
      },
      o._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data('bs.tooltip'),
          i = 'object' == typeof t && t;
          if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data('bs.tooltip', n)), 'string' == typeof t)) {
            if ('undefined' == typeof n[t]) throw new Error('No method named "' + t + '"');
            n[t]()
          }
        })
      },
      r(o, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        },
        {
          key: 'Default',
          get: function () {
            return c
          }
        },
        {
          key: 'NAME',
          get: function () {
            return t
          }
        },
        {
          key: 'DATA_KEY',
          get: function () {
            return 'bs.tooltip'
          }
        },
        {
          key: 'Event',
          get: function () {
            return d
          }
        },
        {
          key: 'EVENT_KEY',
          get: function () {
            return i
          }
        },
        {
          key: 'DefaultType',
          get: function () {
            return l
          }
        }
      ]),
      o
    }();
    return e.fn[t] = m._jQueryInterface,
    e.fn[t].Constructor = m,
    e.fn[t].noConflict = function () {
      return e.fn[t] = o,
      m._jQueryInterface
    },
    m
  }(),
  _ = function () {
    var t = 'popover',
    n = '.bs.popover',
    i = e.fn[t],
    s = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
    a = e.extend({
    }, f.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    l = e.extend({
    }, f.DefaultType, {
      content: '(string|element|function)'
    }),
    h = {
      FADE: 'fade',
      SHOW: 'show'
    },
    c = {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    },
    u = {
      HIDE: 'hide' + n,
      HIDDEN: 'hidden' + n,
      SHOW: 'show' + n,
      SHOWN: 'shown' + n,
      INSERTED: 'inserted' + n,
      CLICK: 'click' + n,
      FOCUSIN: 'focusin' + n,
      FOCUSOUT: 'focusout' + n,
      MOUSEENTER: 'mouseenter' + n,
      MOUSELEAVE: 'mouseleave' + n
    },
    d = function (i) {
      function d() {
        return i.apply(this, arguments) || this
      }
      o(d, i);
      var f = d.prototype;
      return f.isWithContent = function () {
        return this.getTitle() || this._getContent()
      },
      f.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass('bs-popover-' + t)
      },
      f.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template) [0],
        this.tip
      },
      f.setContent = function () {
        var t = e(this.getTipElement());
        this.setElementContent(t.find(c.TITLE), this.getTitle()),
        this.setElementContent(t.find(c.CONTENT), this._getContent()),
        t.removeClass(h.FADE + ' ' + h.SHOW)
      },
      f._getContent = function () {
        return this.element.getAttribute('data-content') || ('function' == typeof this.config.content ? this.config.content.call(this.element)  : this.config.content)
      },
      f._cleanTipClass = function () {
        var t = e(this.getTipElement()),
        n = t.attr('class').match(s);
        null !== n && n.length > 0 && t.removeClass(n.join(''))
      },
      d._jQueryInterface = function (t) {
        return this.each(function () {
          var n = e(this).data('bs.popover'),
          i = 'object' == typeof t ? t : null;
          if ((n || !/destroy|hide/.test(t)) && (n || (n = new d(this, i), e(this).data('bs.popover', n)), 'string' == typeof t)) {
            if ('undefined' == typeof n[t]) throw new Error('No method named "' + t + '"');
            n[t]()
          }
        })
      },
      r(d, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        },
        {
          key: 'Default',
          get: function () {
            return a
          }
        },
        {
          key: 'NAME',
          get: function () {
            return t
          }
        },
        {
          key: 'DATA_KEY',
          get: function () {
            return 'bs.popover'
          }
        },
        {
          key: 'Event',
          get: function () {
            return u
          }
        },
        {
          key: 'EVENT_KEY',
          get: function () {
            return n
          }
        },
        {
          key: 'DefaultType',
          get: function () {
            return l
          }
        }
      ]),
      d
    }(f);
    return e.fn[t] = d._jQueryInterface,
    e.fn[t].Constructor = d,
    e.fn[t].noConflict = function () {
      return e.fn[t] = i,
      d._jQueryInterface
    },
    d
  }(),
  g = function () {
    var t = 'scrollspy',
    n = e.fn[t],
    i = {
      offset: 10,
      method: 'auto',
      target: ''
    },
    o = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    },
    a = {
      ACTIVATE: 'activate.bs.scrollspy',
      SCROLL: 'scroll.bs.scrollspy',
      LOAD_DATA_API: 'load.bs.scrollspy.data-api'
    },
    l = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    },
    h = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    },
    c = {
      OFFSET: 'offset',
      POSITION: 'position'
    },
    u = function () {
      function n(t, n) {
        var i = this;
        this._element = t,
        this._scrollElement = 'BODY' === t.tagName ? window : t,
        this._config = this._getConfig(n),
        this._selector = this._config.target + ' ' + h.NAV_LINKS + ',' + this._config.target + ' ' + h.LIST_ITEMS + ',' + this._config.target + ' ' + h.DROPDOWN_ITEMS,
        this._offsets = [
        ],
        this._targets = [
        ],
        this._activeTarget = null,
        this._scrollHeight = 0,
        e(this._scrollElement).on(a.SCROLL, function (t) {
          return i._process(t)
        }),
        this.refresh(),
        this._process()
      }
      var u = n.prototype;
      return u.refresh = function () {
        var t = this,
        n = this._scrollElement !== this._scrollElement.window ? c.POSITION : c.OFFSET,
        i = 'auto' === this._config.method ? n : this._config.method,
        r = i === c.POSITION ? this._getScrollTop()  : 0;
        this._offsets = [
        ],
        this._targets = [
        ],
        this._scrollHeight = this._getScrollHeight(),
        e.makeArray(e(this._selector)).map(function (t) {
          var n,
          o = s.getSelectorFromElement(t);
          if (o && (n = e(o) [0]), n) {
            var a = n.getBoundingClientRect();
            if (a.width || a.height) return [e(n) [i]().top + r,
            o]
          }
          return null
        }).filter(function (t) {
          return t
        }).sort(function (t, e) {
          return t[0] - e[0]
        }).forEach(function (e) {
          t._offsets.push(e[0]),
          t._targets.push(e[1])
        })
      },
      u.dispose = function () {
        e.removeData(this._element, 'bs.scrollspy'),
        e(this._scrollElement).off('.bs.scrollspy'),
        this._element = null,
        this._scrollElement = null,
        this._config = null,
        this._selector = null,
        this._offsets = null,
        this._targets = null,
        this._activeTarget = null,
        this._scrollHeight = null
      },
      u._getConfig = function (n) {
        if ('string' != typeof (n = e.extend({
        }, i, n)).target) {
          var r = e(n.target).attr('id');
          r || (r = s.getUID(t), e(n.target).attr('id', r)),
          n.target = '#' + r
        }
        return s.typeCheckConfig(t, n, o),
        n
      },
      u._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      },
      u._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      },
      u._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      },
      u._process = function () {
        var t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        n = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i)
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null,
          void this._clear();
          for (var s = this._offsets.length; s--; ) this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ('undefined' == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
        }
      },
      u._activate = function (t) {
        this._activeTarget = t,
        this._clear();
        var n = this._selector.split(',');
        n = n.map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        });
        var i = e(n.join(','));
        i.hasClass(l.DROPDOWN_ITEM) ? (i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(l.ACTIVE), i.addClass(l.ACTIVE))  : (i.addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS + ', ' + h.LIST_ITEMS).addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(l.ACTIVE)),
        e(this._scrollElement).trigger(a.ACTIVATE, {
          relatedTarget: t
        })
      },
      u._clear = function () {
        e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE)
      },
      n._jQueryInterface = function (t) {
        return this.each(function () {
          var i = e(this).data('bs.scrollspy'),
          s = 'object' == typeof t && t;
          if (i || (i = new n(this, s), e(this).data('bs.scrollspy', i)), 'string' == typeof t) {
            if ('undefined' == typeof i[t]) throw new Error('No method named "' + t + '"');
            i[t]()
          }
        })
      },
      r(n, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        },
        {
          key: 'Default',
          get: function () {
            return i
          }
        }
      ]),
      n
    }();
    return e(window).on(a.LOAD_DATA_API, function () {
      for (var t = e.makeArray(e(h.DATA_SPY)), n = t.length; n--; ) {
        var i = e(t[n]);
        u._jQueryInterface.call(i, i.data())
      }
    }),
    e.fn[t] = u._jQueryInterface,
    e.fn[t].Constructor = u,
    e.fn[t].noConflict = function () {
      return e.fn[t] = n,
      u._jQueryInterface
    },
    u
  }(),
  m = function () {
    var t = e.fn.tab,
    n = {
      HIDE: 'hide.bs.tab',
      HIDDEN: 'hidden.bs.tab',
      SHOW: 'show.bs.tab',
      SHOWN: 'shown.bs.tab',
      CLICK_DATA_API: 'click.bs.tab.data-api'
    },
    i = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    },
    o = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    },
    a = function () {
      function t(t) {
        this._element = t
      }
      var a = t.prototype;
      return a.show = function () {
        var t = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) {
          var r,
          a,
          l = e(this._element).closest(o.NAV_LIST_GROUP) [0],
          h = s.getSelectorFromElement(this._element);
          if (l) {
            var c = 'UL' === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;
            a = e.makeArray(e(l).find(c)),
            a = a[a.length - 1]
          }
          var u = e.Event(n.HIDE, {
            relatedTarget: this._element
          }),
          d = e.Event(n.SHOW, {
            relatedTarget: a
          });
          if (a && e(a).trigger(u), e(this._element).trigger(d), !d.isDefaultPrevented() && !u.isDefaultPrevented()) {
            h && (r = e(h) [0]),
            this._activate(this._element, l);
            var f = function () {
              var i = e.Event(n.HIDDEN, {
                relatedTarget: t._element
              }),
              s = e.Event(n.SHOWN, {
                relatedTarget: a
              });
              e(a).trigger(i),
              e(t._element).trigger(s)
            };
            r ? this._activate(r, r.parentNode, f)  : f()
          }
        }
      },
      a.dispose = function () {
        e.removeData(this._element, 'bs.tab'),
        this._element = null
      },
      a._activate = function (t, n, r) {
        var a,
        l = this,
        h = (a = 'UL' === n.nodeName ? e(n).find(o.ACTIVE_UL)  : e(n).children(o.ACTIVE)) [0],
        c = r && s.supportsTransitionEnd() && h && e(h).hasClass(i.FADE),
        u = function () {
          return l._transitionComplete(t, h, c, r)
        };
        h && c ? e(h).one(s.TRANSITION_END, u).emulateTransitionEnd(150)  : u(),
        h && e(h).removeClass(i.SHOW)
      },
      a._transitionComplete = function (t, n, r, a) {
        if (n) {
          e(n).removeClass(i.ACTIVE);
          var l = e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD) [0];
          l && e(l).removeClass(i.ACTIVE),
          'tab' === n.getAttribute('role') && n.setAttribute('aria-selected', !1)
        }
        if (e(t).addClass(i.ACTIVE), 'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !0), r ? (s.reflow(t), e(t).addClass(i.SHOW))  : e(t).removeClass(i.FADE), t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) {
          var h = e(t).closest(o.DROPDOWN) [0];
          h && e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE),
          t.setAttribute('aria-expanded', !0)
        }
        a && a()
      },
      t._jQueryInterface = function (n) {
        return this.each(function () {
          var i = e(this),
          s = i.data('bs.tab');
          if (s || (s = new t(this), i.data('bs.tab', s)), 'string' == typeof n) {
            if ('undefined' == typeof s[n]) throw new Error('No method named "' + n + '"');
            s[n]()
          }
        })
      },
      r(t, null, [
        {
          key: 'VERSION',
          get: function () {
            return '4.0.0-beta.2'
          }
        }
      ]),
      t
    }();
    return e(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function (t) {
      t.preventDefault(),
      a._jQueryInterface.call(e(this), 'show')
    }),
    e.fn.tab = a._jQueryInterface,
    e.fn.tab.Constructor = a,
    e.fn.tab.noConflict = function () {
      return e.fn.tab = t,
      a._jQueryInterface
    },
    a
  }();
  return function () {
    if ('undefined' == typeof e) throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    var t = e.fn.jquery.split(' ') [0].split('.');
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }(),
  t.Util = s,
  t.Alert = a,
  t.Button = l,
  t.Carousel = h,
  t.Collapse = c,
  t.Dropdown = u,
  t.Modal = d,
  t.Popover = _,
  t.Scrollspy = g,
  t.Tab = m,
  t.Tooltip = f,
  t
}({
}, $, Popper);
/**
 * @module       Regula
 * @description  An annotation-based form-validation framework in Javascript
 * @license      BSD
 * @version      1.3.4
 * @copyright    Robert Nyman, http://www.robertnyman.com
 */
(function (e, t) {
  typeof define == 'function' && define.amd ? define('utils/MapUtils', t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.MapUtils = t())
}) (this, function () {
  return {
    iterateOverMap: function (e, t) {
      var n = 0;
      for (var r in e) e.hasOwnProperty(r) && r !== '__size__' && (t.call(e, r, e[r], n), n++)
    },
    exists: function (e, t) {
      var n = !1,
      r = 0;
      while (!n && r < e.length) n = t == e[r],
      r++;
      return n
    },
    put: function (e, t, n) {
      e.__size__ || (e.__size__ = 0),
      e[t] || e.__size__++,
      e[t] = n
    },
    isEmpty: function (e) {
      for (var t in e) if (e.hasOwnProperty(t)) return !1;
      return !0
    }
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('utils/DOMUtils', t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.DOMUtils = t())
}(this, function () {
  function t(e, t, n, r) {
    var i = t == '*' && e.all ? e.all : e.getElementsByTagName(t),
    s = [
    ],
    o = typeof r != 'undefined' ? new RegExp('(^|\\s)' + r + '(\\s|$)')  : null,
    u,
    a;
    for (var f = 0; f < i.length; f++) u = i[f],
    a = u.getAttribute && u.getAttribute(n),
    typeof a == 'string' && a.length > 0 && (typeof r == 'undefined' || o && o.test(a)) && s.push(u);
    return s
  }
  function n(e, t) {
    var n = e.getAttribute && e.getAttribute(t) || null;
    if (!n) {
      var r = e.attributes;
      for (var i = 0; i < r.length; i++) r[i].nodeName === t && (n = r[i].nodeValue)
    }
    return n
  }
  function r() {
    return 'regula-generated-' + Math.floor(Math.random() * 1000000)
  }
  function i() {
    return typeof document.createElement('input').checkValidity == 'function'
  }
  var e = {
    form: 'The form',
    select: 'The select box',
    textarea: 'The text area',
    checkbox: 'The checkbox',
    radio: 'The radio button',
    text: 'The text field',
    password: 'The password',
    email: 'The email',
    url: 'The URL',
    number: 'The number',
    datetime: 'The datetime',
    'datetime-local': 'The local datetime',
    date: 'The date',
    month: 'The month',
    time: 'The time',
    week: 'The week',
    range: 'The range',
    tel: 'The telephone number',
    color: 'The color'
  };
  return {
    friendlyInputNames: e,
    getElementsByAttribute: t,
    getAttributeValueForElement: n,
    generateRandomId: r,
    supportsHTML5Validation: i
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('service/GroupService', t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.GroupService = t())
}(this, function () {
  var e = {
    Default: 0
  },
  t = {
    0: 'Default'
  },
  n = [
  ],
  r = 1;
  return {
    Group: e,
    ReverseGroup: t,
    deletedGroupIndices: n,
    firstCustomGroupIndex: r
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('utils/ArrayUtils', t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.ArrayUtils = t())
}(this, function () {
  function e(e, t) {
    var n = '';
    for (var r = 0; r < e.length; r++) n += e[r] + t;
    return n.replace(new RegExp(t + '$'), '')
  }
  return {
    explode: e
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('service/ExceptionService', [
    'utils/ArrayUtils'
  ], t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.ExceptionService = t(e.regulaModules.ArrayUtils))
}(this, function (e) {
  function i(e, t, n) {
    var r = '';
    return e != null ? (r = e.id, t == '' || t == null || t == undefined ? r += ': ' : r += '.' + t + ': ')  : t != '' && t != null && t != undefined && (r = '@' + t + ': '),
    r + n
  }
  function s(t) {
    var n = 'Function received: {';
    for (var r in t) t.hasOwnProperty(r) && (typeof t[r] == 'string' ? n += r + ': ' + t[r] + ', ' : t[r] instanceof Array && (n += r + ': [' + e.explode(t[r], ', ') + '], '));
    return n = n.replace(/, $/, '') + '}',
    n
  }
  var t = {
    IllegalArgumentException: function (e) {
      this.name = 'IllegalArgumentException',
      this.message = e
    },
    ConstraintDefinitionException: function (e) {
      this.name = 'ConstraintDefinitionException',
      this.message = e
    },
    BindException: function (e) {
      this.name = 'BindException',
      this.message = e
    },
    MissingFeatureException: function (e) {
      this.name = 'MissingFeatureException',
      this.message = e
    }
  };
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = t[n];
    r.prototype = new Error,
    r.prototype.constructor = r
  }
  return {
    Exception: t,
    generateExceptionMessage: i,
    explodeParameters: s
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('service/ValidationService', [
    'utils/DOMUtils',
    'utils/MapUtils',
    'service/GroupService',
    'service/ExceptionService',
    'utils/ArrayUtils'
  ], t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.ValidationService = t(e.regulaModules.DOMUtils, e.regulaModules.MapUtils, e.regulaModules.GroupService, e.regulaModules.ExceptionService, e.regulaModules.ArrayUtils))
}(this, function (e, t, n, r, i) {
  function h(e) {
    for (var t in e) e.hasOwnProperty(t) && v(t, e)
  }
  function p(e) {
    s = e.config,
    o = e.ReverseConstraint,
    u = e.constraintDefinitions,
    a = e.boundConstraints
  }
  function v(e, t) {
    var n = t[e],
    i = e.replace(/(^[A-Z]+)/, function (e) {
      return e.toLowerCase()
    });
    n.async ? c[i] = function (t, i, s) {
      if (typeof s == 'undefined') throw new r.Exception.IllegalArgumentException(e + ' is an asynchronous constraint, but you have not provided a callback.');
      return n.validator.call(t, i, c, s)
    }
     : c[i] = function (e, t) {
      return n.validator.call(e, t, c)
    }
  }
  function m(e, n, r, i) {
    function a(n, r) {
      var i = {
      };
      for (var s in n) n.hasOwnProperty(s) && s != '__size__' && t.put(i, s, n[s]);
      if (r.length > 0) for (var s in e) e.hasOwnProperty(s) && s != '__size__' && t.put(i, s, e[s]);
      return i
    }
    function f(e, t, n, i) {
      var s = o[y.constraintType],
      a = W(t, s, i),
      f = {
        group: n,
        constraintName: e.constraintName,
        custom: u[s].custom,
        compound: u[s].compound,
        async: u[s].async,
        constraintParameters: y.params,
        failingElements: e.failingElements,
        message: a
      };
      return r.reportAsSingleViolation || (f.composingConstraintViolations = e.composingConstraintViolations || [
      ]),
      f
    }
    var l = [
    ],
    c = [
    ];
    for (var h = 0; h < r.composingConstraints.length; h++) {
      var p = r.composingConstraints[h],
      d = o[p.constraintType];
      u[d].async ? c.push(p)  : l.push(p)
    }
    var v = null,
    m = this;
    if (g(this, e)) {
      if (l.length > 0) {
        v = [
        ];
        for (var h = 0; h < l.length; h++) {
          var y = l[h],
          b = o[y.constraintType],
          w = a(y.params, r.params),
          E = U(n, m.id, b, w);
          if (!E.constraintPassed) {
            var S = f(E, m.id, n, w);
            if (s.enableHTML5Validation) for (var x = 0; x < E.failingElements.length; x++) E.failingElements[x].setCustomValidity(S.message);
            v.push(S)
          }
        }
      }
      if (c.length > 0) {
        v === null && (v = [
        ]);
        var T = 0;
        for (var h = 0; h < c.length; h++) {
          var y = c[h],
          b = o[y.constraintType],
          w = a(y.params, r.params);
          z(n, m.id, b, w, N)
        }
        function N(e) {
          if (!e.constraintPassed) {
            var t = f(e, m.id, n, w);
            if (s.enableHTML5Validation) for (var r = 0; r < e.failingElements.length; r++) e.failingElements[r].setCustomValidity(t.message);
            v.push(t)
          }
          T++,
          T === c.length && i(v)
        }
      }
    } else v = [
    ];
    return v
  }
  function g(e, t) {
    var n = s.validateEmptyFields;
    return typeof t['ignoreEmpty'] != 'undefined' && (n = !t.ignoreEmpty),
    !d.blank.call(e) || !!n
  }
  function y(e) {
    var t = {
      YMD: {
        Year: 0,
        Month: 1,
        Day: 2
      },
      MDY: {
        Month: 0,
        Day: 1,
        Year: 2
      },
      DMY: {
        Day: 0,
        Month: 1,
        Year: 2
      }
    },
    n = t[e.format],
    r = e.separator;
    typeof e['separator'] == 'undefined' && (r = /\//.test(this.value) ? '/' : /\./.test(this.value) ? '.' : / /.test(this.value) ? ' ' : /[^0-9]+/);
    var i = this.value.split(r),
    s = new Date(i[n.Year], i[n.Month] - 1, i[n.Day]),
    o = new Date;
    return typeof e['date'] != 'undefined' && (i = e.date.split(r), o = new Date(i[n.Year], i[n.Month] - 1, i[n.Day])),
    {
      dateToValidate: s,
      dateToTestAgainst: o
    }
  }
  function b(e) {
    return function (t, n, r) {
      var i = !0;
      return g(this, t) && (i = e.call(this, t, n, r)),
      i
    }
  }
  function w() {
    return !this.validity.typeMismatch
  }
  function E(e) {
    function t(e) {
      var t = e.groups || null,
      n = e.elementIds || null,
      r = (typeof e.constraintType == 'undefined' ? null : e.constraintType) || null,
      i = '';
      return i += t == null ? '0' : '1',
      i += n == null ? '0' : '1',
      i += r == null ? '0' : '1',
      i
    }
    f = {
    },
    l = {
    };
    var r = {
      '000': S,
      '001': x,
      '010': T,
      '011': N,
      100: C,
      101: k,
      110: L,
      111: A
    };
    if (!e || typeof e == 'undefined') e = {
    };
    typeof e.independent == 'undefined' && (e.independent = !0),
    typeof e.constraintType != 'undefined' && (e.constraintType = o[e.constraintType]);
    if (typeof e.groups != 'undefined') {
      var i = e.groups;
      e.groups = [
      ];
      for (var s = 0; s < i.length; s++) e.groups.push(n.ReverseGroup[i[s]])
    }
    if (typeof e.elements != 'undefined') {
      e.elementIds = [
      ];
      for (var s = 0; s < e.elements.length; s++) e.elementIds.push(e.elements[s].id)
    } else typeof e.elementId != 'undefined' && (e.elementIds = [
      e.elementId
    ]);
    return r[t(e)](e)
  }
  function S(e) {
    var t = {
      asyncContexts: [
      ],
      syncContexts: [
      ]
    };
    for (var n in a) if (a.hasOwnProperty(n)) {
      var r = a[n];
      for (var i in r) if (r.hasOwnProperty(i)) if (!document.getElementById(i)) delete r[i];
       else {
        var s = r[i];
        for (var o in s) if (s.hasOwnProperty(o)) {
          var u = H(n, i, o);
          u.async ? t.asyncContexts.push(u)  : t.syncContexts.push(u)
        }
      }
    }
    return t = M(t),
    D(t, e)
  }
  function x(e) {
    var t = {
      asyncContexts: [
      ],
      syncContexts: [
      ]
    };
    for (var n in a) if (a.hasOwnProperty(n)) {
      var r = a[n];
      for (var i in r) if (r.hasOwnProperty(i)) {
        var s = r[i];
        if (s[e.constraintType]) {
          var o = H(n, i, e.constraintType);
          o.async ? t.asyncContexts.push(o)  : t.syncContexts.push(o)
        }
      }
    }
    return t = M(t),
    D(t, e)
  }
  function T(e) {
    var t = {
    },
    n = {
      asyncContexts: [
      ],
      syncContexts: [
      ]
    };
    for (var s in a) if (a.hasOwnProperty(s)) {
      var o = a[s];
      for (var u = 0; u < e.elementIds.length; u++) {
        var f = e.elementIds[u];
        typeof t[f] == 'undefined' && (t[f] = 0);
        var l = o[f];
        if (typeof l != 'undefined') {
          t[f]++;
          for (var c in l) if (l.hasOwnProperty(c)) {
            var h = H(s, f, c);
            h.async ? n.asyncContexts.push(h)  : n.syncContexts.push(h)
          }
        }
      }
    }
    var p = [
    ];
    for (var f in t) t.hasOwnProperty(f) && t[f] === 0 && p.push(f);
    if (p.length > 0) throw new r.Exception.IllegalArgumentException('No constraints have been bound to the specified elements: ' + i.explode(p) + '. ' + r.explodeParameters(e));
    return n = M(n),
    D(n, e)
  }
  function N(e) {
    var t = [
    ],
    n = {
      asyncContexts: [
      ],
      syncContexts: [
      ]
    };
    for (var s in a) if (a.hasOwnProperty(s)) {
      var o = a[s];
      for (var u = 0; u < e.elementIds.length; u++) {
        var f = e.elementIds[u],
        l = o[f];
        if (typeof l != 'undefined') {
          var c = H(s, f, e.constraintType);
          c.async ? n.asyncContexts.push(c)  : n.syncContexts.push(c)
        } else t.push(f)
      }
    }
    if (t.length > 0) throw new r.Exception.IllegalArgumentException('No constraints have been bound to the specified elements: ' + i.explode(t) + '. ' + r.explodeParameters(e));
    return n = M(n),
    D(n, e)
  }
  function C(e) {
    var t = !1,
    n = {
      groupedContexts: {
      }
    },
    i = 0;
    while (i < e.groups.length) {
      var s = e.groups[i],
      o = a[s];
      if (typeof o == 'undefined') throw new r.Exception.IllegalArgumentException('Undefined group in group list. ' + r.explodeParameters(e));
      for (var u in o) if (o.hasOwnProperty(u)) {
        var f = o[u];
        for (var l in f) if (f.hasOwnProperty(l)) {
          var c = H(s, u, l);
          n.groupedContexts[s] || (n.groupedContexts[s] = {
            asyncContexts: [
            ],
            syncContexts: [
            ]
          }),
          c.async ? (t = !0, n.groupedContexts[s].asyncContexts.push(c))  : n.groupedContexts[s].syncContexts.push(c)
        }
      }
      i++
    }
    var h = _(n);
    return e.groups = h.groups,
    n = h.uniqueConstraintsToValidate,
    P(e, n, t)
  }
  function k(e) {
    var t = !1,
    n = {
      groupedContexts: {
      }
    },
    i = 0;
    while (i < e.groups.length) {
      var s = e.groups[i],
      o = a[s];
      if (typeof o == 'undefined') throw new r.Exception.IllegalArgumentException('Undefined group in group list. ' + r.explodeParameters(e));
      var u = !1;
      for (var f in o) if (o.hasOwnProperty(f)) {
        var l = o[f];
        if (l[e.constraintType]) {
          u = !0;
          var c = H(s, f, e.constraintType);
          n.groupedContexts[s] || (n.groupedContexts[s] = {
            asyncContexts: [
            ],
            syncContexts: [
            ]
          }),
          c.async ? (t = !0, n.groupedContexts[s].asyncContexts.push(c))  : n.groupedContexts[s].syncContexts.push(c)
        }
      }
      if (!u) throw new r.Exception.IllegalArgumentException('Constraint ' + e.constraintType + ' has not been bound to any element under group ' + s + '. ' + r.explodeParameters(e));
      i++
    }
    var h = _(n);
    return e.groups = h.groups,
    n = h.uniqueConstraintsToValidate,
    P(e, n, t)
  }
  function L(e) {
    var t = [
    ],
    n = [
    ],
    s = !1,
    o = {
      groupedContexts: {
      }
    },
    u = 0;
    while (u < e.groups.length) {
      var f = e.groups[u],
      l = a[f];
      if (!l) throw new r.Exception.IllegalArgumentException('Undefined group in group list. ' + r.explodeParameters(e));
      for (var c = 0; c < e.elementIds.length; c++) {
        var h = e.elementIds[c],
        p = l[h];
        if (p) {
          for (var d in p) if (p.hasOwnProperty(d)) {
            var v = H(f, h, d);
            o.groupedContexts[f] || (o.groupedContexts[f] = {
              asyncContexts: [
              ],
              syncContexts: [
              ]
            }),
            v.async ? (s = !0, o.groupedContexts[f].asyncContexts.push(v))  : o.groupedContexts[f].syncContexts.push(v)
          }
        } else t.push(f),
        n.push(h)
      }
      u++
    }
    if (t.length > 0) throw new r.Exception.IllegalArgumentException('The following elements: ' + i.explode(n) + ' were not found in one or more of the following group(s): [' + i.explode(t, ',').replace(/,/g, ', ') + ']. ' + r.explodeParameters(e));
    var m = _(o);
    return e.groups = m.groups,
    o = m.uniqueConstraintsToValidate,
    P(e, o, s)
  }
  function A(e) {
    var t = !1,
    n = {
      groupedContexts: {
      }
    },
    r = 0;
    while (r < e.groups.length) {
      var i = e.groups[r];
      for (var s = 0; s < e.elementIds.length; s++) {
        var o = e.elementIds[s],
        u = H(i, o, e.constraintType);
        n.groupedContexts[i] || (n.groupedContexts[i] = {
          asyncContexts: [
          ],
          syncContexts: [
          ]
        }),
        u.async ? (t = !0, n.groupedContexts[i].asyncContexts.push(u))  : n.groupedContexts[i].syncContexts.push(u)
      }
      r++
    }
    var a = _(n);
    return e.groups = a.groups,
    n = a.uniqueConstraintsToValidate,
    P(e, n, t)
  }
  function O(e) {
    var t = !0;
    f[e.elementId] || (f[e.elementId] = {
    });
    var n = document.getElementById(e.elementId).cloneNode(!1),
    r = n.name.replace(/\s/g, '');
    return typeof n.type != 'undefined' && n.type.toLowerCase() === 'radio' && r !== '' ? l[r] || (l[r] = {
    })  : l[r] = {
    },
    !f[e.elementId][e.elementConstraint] && !l[r][e.elementConstraint] && (t = !1, f[e.elementId][e.elementConstraint] = !0, typeof n.type != 'undefined' && n.type.toLowerCase() === 'radio' && r !== '' && (l[r][e.elementConstraint] = !0)),
    t
  }
  function M(e) {
    var t = {
      asyncContexts: [
      ],
      syncContexts: [
      ]
    };
    for (var n = 0; n < e.syncContexts.length; n++) {
      var r = e.syncContexts[n];
      O(r) || t.syncContexts.push(r)
    }
    for (var n = 0; n < e.asyncContexts.length; n++) {
      var r = e.asyncContexts[n];
      O(r) || t.asyncContexts.push(r)
    }
    return t
  }
  function _(e) {
    var t = [
    ],
    n = {
      groupedContexts: {
      }
    };
    for (var r in e.groupedContexts) if (e.groupedContexts.hasOwnProperty(r)) {
      for (var i = 0; i < e.groupedContexts[r].syncContexts.length; i++) {
        var s = e.groupedContexts[r].syncContexts[i];
        O(s) || (n.groupedContexts[r] || (n.groupedContexts[r] = {
          asyncContexts: [
          ],
          syncContexts: [
          ]
        }), n.groupedContexts[r].syncContexts.push(s), t.indexOf(r) == - 1 && t.push(r))
      }
      for (var i = 0; i < e.groupedContexts[r].asyncContexts.length; i++) {
        var s = e.groupedContexts[r].asyncContexts[i];
        O(s) || (n.groupedContexts[r] || (n.groupedContexts[r] = {
          asyncContexts: [
          ],
          syncContexts: [
          ]
        }), n.groupedContexts[r].asyncContexts.push(s), t.indexOf(r) == - 1 && t.push(r))
      }
    }
    return {
      groups: t,
      uniqueConstraintsToValidate: n
    }
  }
  function D(e, t) {
    var n = [
    ];
    e.syncContexts.length > 0 && (n = B(e));
    if (e.asyncContexts.length > 0) {
      if (!t.callback) throw new r.Exception.IllegalArgumentException('One or more constraints to be validated are asynchronous, but a callback has not been provided.');
      j(e, function (e) {
        n.length > 0 ? n = n.concat(e)  : n = e,
        t.callback(n)
      })
    } else t.callback && t.callback(n);
    return n
  }
  function P(e, t, n) {
    var i = F(e.groups, e.independent, t);
    if (n) {
      if (!e.callback) throw new r.Exception.IllegalArgumentException('One or more constraints to be validated are asynchronous, but a callback has not been provided.');
      if (!e.independent && i.length > 0) {
        var s = i[0].group,
        o = t.groupedContexts[s];
        t.groupedContexts = {
        },
        t.groupedContexts[s] = o
      }
      I(e.groups, e.independent, t, function (t) {
        i.length > 0 ? i = i.concat(t)  : i = t,
        e.callback(i)
      })
    } else e.callback && e.callback(i);
    return i
  }
  function H(e, t, n) {
    var i = a[e];
    if (!i) throw new r.Exception.IllegalArgumentException('Undefined group in group list (group: ' + e + ', elementId: ' + t + ', constraint: ' + n + ')');
    var s = i[t];
    if (!s) throw new r.Exception.IllegalArgumentException('No constraints have been defined for the element with id: ' + t + ' in group ' + e);
    var o = s[n];
    if (!o) throw new r.Exception.IllegalArgumentException('Constraint ' + n + ' in group ' + e + ' hasn\'t been bound to the element with id ' + t);
    return {
      group: e,
      elementId: t,
      elementConstraint: n,
      params: o,
      async: u[n].async
    }
  }
  function B(e) {
    var t = [
    ],
    n = 0;
    while (n < e.syncContexts.length) {
      var r = e.syncContexts[n],
      i = q(r.group, r.elementId, r.elementConstraint, r.params);
      i && t.push(i),
      n++
    }
    return t
  }
  function j(e, t) {
    function o(i) {
      r++,
      i && n.push(i),
      r === e.asyncContexts.length && t(n)
    }
    var n = [
    ],
    r = 0;
    for (var i = 0; i < e.asyncContexts.length; i++) {
      var s = e.asyncContexts[i];
      R(s.group, s.elementId, s.elementConstraint, s.params, o)
    }
  }
  function F(e, t, n) {
    var r = [
    ],
    i = 0,
    s = !0;
    while (i < e.length && s) {
      var o = e[i],
      u = n.groupedContexts[o].syncContexts;
      for (var a = 0; a < u.length; a++) {
        var f = u[a],
        l = q(f.group, f.elementId, f.elementConstraint, f.params);
        l && r.push(l)
      }
      i++,
      s = r.length == 0 || t && r.length != 0
    }
    return r
  }
  function I(e, t, n, r) {
    var i = [
    ],
    s = !0;
    (function o(u) {
      if (u < e.length && s) {
        var a = e[u],
        f = n.groupedContexts[a].asyncContexts,
        l = 0;
        for (var c = 0; c < f.length; c++) {
          var h = f[c];
          R(h.group, h.elementId, h.elementConstraint, h.params, p)
        }
        function p(e) {
          l++,
          e && i.push(e),
          l === f.length && (s = i.length === 0 || t && i.length != 0, o(++u))
        }
      } else r(i)
    }) (0)
  }
  function q(e, t, n, r) {
    var i,
    o = U(e, t, n, r),
    a = '';
    o.constraintPassed || (a = W(t, n, r), i = {
      group: e,
      constraintName: n,
      formSpecific: u[n].formSpecific,
      custom: u[n].custom,
      compound: u[n].compound,
      async: u[n].async,
      composingConstraintViolations: o.composingConstraintViolations || [
      ],
      constraintParameters: r,
      failingElements: o.failingElements,
      message: a
    });
    if (s.enableHTML5Validation) for (var f = 0; f < o.failingElements.length; f++) o.failingElements[f].setCustomValidity('');
    return i
  }
  function R(e, t, n, r, i) {
    var o;
    z(e, t, n, r, function (a) {
      var f = '';
      a.constraintPassed || (f = W(t, n, r), o = {
        group: e,
        constraintName: n,
        formSpecific: u[n].formSpecific,
        custom: u[n].custom,
        compound: u[n].compound,
        async: u[n].async,
        composingConstraintViolations: a.composingConstraintViolations || [
        ],
        constraintParameters: r,
        failingElements: a.failingElements,
        message: f
      });
      if (s.enableHTML5Validation) for (var l = 0; l < a.failingElements.length; l++) a.failingElements[l].setCustomValidity('');
      i(o)
    })
  }
  function U(t, n, r, i) {
    var s = !1,
    o = [
    ],
    a = document.getElementById(n),
    f = [
    ];
    u[r].formSpecific ? (o = u[r].validator.call(a, i, c), s = o.length == 0)  : u[r].compound ? (f = u[r].validator.call(a, i, t, u[r], null), s = f.length == 0, s || o.push(a))  : (s = u[r].validator.call(a, i, c), s || o.push(a));
    var l = a.cloneNode(!1).name.replace(/\s/g, ''),
    h = a.cloneNode(!1).type;
    typeof h != 'undefined' && h.toLowerCase() === 'radio' && l !== '' && (o = e.getElementsByAttribute(document.body, 'input', 'name', l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')));
    var p = {
      constraintName: r,
      constraintPassed: s,
      failingElements: o
    };
    return u[r].reportAsSingleViolation || (p.composingConstraintViolations = f),
    p
  }
  function z(t, n, r, i, s) {
    function a(t, n, i, s) {
      var a = o.cloneNode(!1).name.replace(/\s/g, ''),
      f = o.cloneNode(!1).type;
      typeof f != 'undefined' && f.toLowerCase() === 'radio' && a !== '' && (i = e.getElementsByAttribute(document.body, 'input', 'name', a));
      var l = {
        constraintName: r,
        constraintPassed: t,
        failingElements: i
      };
      u[r].reportAsSingleViolation || (l.composingConstraintViolations = n),
      s(l)
    }
    var o = document.getElementById(n);
    u[r].formSpecific ? u[r].validator.call(o, i, c, function (e) {
      a(e.length === 0, null, e, s)
    })  : u[r].compound ? u[r].validator.call(o, i, t, u[r], function (e) {
      var t = [
      ],
      n = e.length === 0;
      n || t.push(o),
      a(n, e, t, s)
    })  : u[r].validator.call(o, i, c, function (e) {
      var t = [
      ];
      e || t.push(o),
      a(e, null, t, s)
    })
  }
  function W(t, n, r) {
    var i = document.getElementById(t),
    s = '';
    r.message ? s = r.message : r.msg ? s = r.msg : s = u[n].defaultMessage;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var a = new RegExp('{' + o + '}', 'g');
      s = s.replace(a, r[o])
    }
    if (u[n].compound && typeof u[n].composingConstraints != 'undefined') for (var f = 0; f < u[n].composingConstraints.length; f++) {
      var l = u[n].composingConstraints[f];
      for (var o in l.params) if (l.params.hasOwnProperty(o)) {
        var a = new RegExp('{' + o + '}', 'g');
        s = s.replace(a, l.params[o])
      }
    }
    if (/{label}/.test(s)) {
      var c = e.friendlyInputNames[i.cloneNode(!1).tagName.toLowerCase()];
      c || (c = e.friendlyInputNames[i.cloneNode(!1).type.toLowerCase()]),
      s = s.replace(/{label}/, c),
      s = s.replace(/{flags}/g, '')
    }
    return s = s.replace(/\\\"/g, '"'),
    s
  }
  var s = {
  },
  o = {
  },
  u = {
  },
  a = {
  },
  f = {
  },
  l = {
  },
  c = {
  },
  d = {
    checked: function (t) {
      var n = !1;
      if (this.type.toLowerCase() === 'radio' && this.name.replace(/\s/g, '') !== '') {
        var r = e.getElementsByAttribute(document.body, 'input', 'name', this.name.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')),
        i = 0;
        while (i < r.length && !n) n = r[i].checked,
        i++
      } else n = this.checked;
      return n
    },
    selected: function (e) {
      return this.selectedIndex > 0
    },
    max: function (e) {
      var t = !0;
      return g(this, e) && (t = parseFloat(this.value) <= parseFloat(e.value)),
      t
    },
    min: function (e) {
      var t = !0;
      return g(this, e) && (t = parseFloat(this.value) >= parseFloat(e.value)),
      t
    },
    range: function (e) {
      var t = !0;
      return g(this, e) && (t = this.value.replace(/\s/g, '') != '' && parseFloat(this.value) <= parseFloat(e.max) && parseFloat(this.value) >= parseFloat(e.min)),
      t
    },
    notBlank: function (e) {
      return this.value.replace(/\s/g, '') != ''
    },
    blank: function (e) {
      return this.value.replace(/\s/g, '') === ''
    },
    matches: function (e) {
      var t = !0;
      if (g(this, e)) {
        var n,
        r;
        typeof e['regex'] == 'string' ? r = e.regex.replace(/^\//, '').replace(/\/$/, '')  : r = e.regex,
        typeof e['flags'] != 'undefined' ? n = new RegExp(r.toString().replace(/^\//, '').replace(/\/[^\/]*$/, ''), e.flags)  : n = new RegExp(r),
        t = n.test(this.value)
      }
      return t
    },
    email: function (e) {
      var t = !0;
      return g(this, e) && (t = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(this.value)),
      t
    },
    alpha: function (e) {
      var t = !0;
      return g(this, e) && (t = /^[A-Za-z]+$/.test(this.value)),
      t
    },
    numeric: function (e) {
      var t = !0;
      return g(this, e) && (t = /^[0-9]+$/.test(this.value)),
      t
    },
    integer: function (e) {
      var t = !0;
      return g(this, e) && (t = /^-?[0-9]+$/.test(this.value)),
      t
    },
    real: function (e) {
      var t = !0;
      return g(this, e) && (t = /^-?([0-9]+(\.[0-9]+)?|\.[0-9]+)$/.test(this.value)),
      t
    },
    alphaNumeric: function (e) {
      var t = !0;
      return g(this, e) && (t = /^[0-9A-Za-z]+$/.test(this.value)),
      t
    },
    completelyFilled: function (e) {
      var t = [
      ];
      for (var n = 0; n < this.elements.length; n++) {
        var r = this.elements[n];
        d.required.call(r) || t.push(r)
      }
      return t
    },
    passwordsMatch: function (e) {
      var t = [
      ],
      n = document.getElementById(e.field1),
      r = document.getElementById(e.field2);
      return n.value != r.value && (t = [
        n,
        r
      ]),
      t
    },
    required: function (e) {
      var t = !0;
      return this.tagName && (this.tagName.toLowerCase() === 'select' ? t = d.selected.call(this)  : this.type.toLowerCase() === 'checkbox' || this.type.toLowerCase() === 'radio' ? t = d.checked.call(this)  : (this.tagName.toLowerCase() === 'input' || this.tagName.toLowerCase() === 'textarea') && this.type.toLowerCase() != 'button' && (t = d.notBlank.call(this))),
      t
    },
    length: function (e) {
      var t = !0;
      return g(this, e) && (t = this.value.length >= e.min && this.value.length <= e.max),
      t
    },
    digits: function (e) {
      var t = !0;
      if (g(this, e)) {
        var n = this.value.replace(/\s/g, ''),
        r = n.split(/\./);
        t = !1,
        n.length > 0 && (r.length == 1 && (r[1] = ''), e.integer > 0 ? t = r[0].length <= e.integer : t = !0, e.fraction > 0 && (t = t && r[1].length <= e.fraction))
      }
      return t
    },
    past: function (e) {
      var t = !0;
      if (g(this, e)) {
        var n = y.call(this, e);
        t = n.dateToValidate < n.dateToTestAgainst
      }
      return t
    },
    future: function (e) {
      var t = !0;
      if (g(this, e)) {
        var n = y.call(this, e);
        t = n.dateToValidate > n.dateToTestAgainst
      }
      return t
    },
    url: function (e) {
      var t = !0;
      return g(this, e) && (t = /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(this.value)),
      t
    },
    step: function (e) {
      var t = !0;
      if (g(this, e)) {
        var n = parseFloat(this.value),
        r = parseFloat(e.max),
        i = parseFloat(e.min),
        s = parseFloat(e.value);
        t = n <= r && n >= i && n % s === 0
      }
      return t
    },
    html5Required: function (e) {
      return !this.validity.valueMissing
    },
    html5Email: w,
    html5URL: w,
    html5Number: w,
    html5DateTime: w,
    html5DateTimeLocal: w,
    html5Date: w,
    html5Month: w,
    html5Time: w,
    html5Week: w,
    html5Range: w,
    html5Tel: w,
    html5Color: w,
    html5Pattern: function (e) {
      return !this.validity.patternMismatch
    },
    html5MaxLength: function (e) {
      return !this.validity.tooLong
    },
    html5Min: function (e) {
      return !this.validity.rowUnderflow
    },
    html5Max: function (e) {
      return !this.validity.rowOverflow
    },
    html5Step: function (e) {
      return !this.validity.stepMismatch
    }
  };
  return {
    Validator: d,
    init: p,
    wrapValidatorWithEmptyCheck: b,
    initializePublicValidators: h,
    compoundValidator: m,
    validate: E,
    runValidatorFor: U,
    interpolateConstraintDefaultMessage: W,
    createPublicValidator: v
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('domain/CompositionGraph', t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.CompositionGraph = t())
}(this, function () {
  function n(n) {
    var r = n.type,
    i = n.name,
    s = n.parent,
    o = typeof e[r] == 'undefined' ? {
      visited: !1,
      name: i,
      type: r,
      parents: [
      ],
      children: [
      ]
    }
     : e[r];
    s == null ? t.children.push(o)  : (s.children.push(o), o.parents.push(s)),
    e[r] = o
  }
  function r() {
    var e = {
    },
    n = function r(t, n) {
      var i = typeof e[t.type] == 'undefined' ? {
        visited: t.visited,
        name: t.name,
        type: t.type,
        parents: [
        ],
        children: [
        ]
      }
       : e[t.type];
      n !== null && i.parents.push(n);
      for (var s = 0; s < t.children.length; s++) i.children.push(r(t.children[s], i));
      return e[t.type] = i,
      i
    }(t, null);
    return {
      typeToNodeMap: e,
      root: n
    }
  }
  function i(t) {
    var n = e[t];
    return typeof n == 'undefined' ? null : n
  }
  function s(e) {
    var t = function n(e, t) {
      var r = {
        cycle: !1,
        path: t
      };
      if (e.visited) r.cycle = !0;
       else {
        e.visited = !0;
        var i = 0;
        while (i < e.children.length && !r.cycle) r = n(e.children[i], t + '.' + e.children[i].name),
        i++
      }
      return r
    }(e, e.name);
    return t.cycle || o(),
    t
  }
  function o() {
    (function e(t) {
      t.visited = !1;
      for (var n = 0; n < t.children.length; n++) e(t.children[n])
    }) (t)
  }
  function u() {
    return t
  }
  function a(e) {
    t = e
  }
  function f(n) {
    e = n.typeToNodeMap,
    t = n.root
  }
  var e = {
  },
  t = {
    visited: !1,
    name: 'RootNode',
    type: - 1,
    parents: [
    ],
    children: [
    ]
  };
  return {
    ROOT: - 1,
    addNode: n,
    getNodeByType: i,
    analyze: s,
    getRoot: u,
    setRoot: a,
    clone: r,
    initializeFromClone: f
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('service/ConstraintService', [
    'service/ValidationService',
    'domain/CompositionGraph',
    'service/ExceptionService',
    'utils/MapUtils',
    'utils/ArrayUtils'
  ], t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.ConstraintService = t(e.regulaModules.ValidationService, e.regulaModules.CompositionGraph, e.regulaModules.ExceptionService, e.regulaModules.MapUtils, e.regulaModules.ArrayUtils))
}(this, function (e, t, n, r, i) {
  function f(r) {
    var i = typeof r.async == 'undefined' ? a[r.name].async : r.async,
    u = r.validator;
    r.validatorRedefined && !r.formSpecific && (u = e.wrapValidatorWithEmptyCheck(u));
    var f = t.getNodeByType(r.constraintType);
    if (r.compound) {
      v(r.name, r.composingConstraints, r.params);
      var l = t.clone();
      d(r.name, r.composingConstraints);
      var c = t.analyze(f);
      if (c.cycle) throw t.initializeFromClone(l),
      new n.Exception.ConstraintDefinitionException('regula.override: The overriding composing-constraints you have specified have created a cyclic composition: ' + c.path);
      i = !1;
      var h = 0;
      while (h < r.composingConstraints.length && !i) {
        var p = r.composingConstraints[h],
        m = a[o[p.constraintType]];
        i = m.async,
        h++
      }
    }
    f !== null && function g(e) {
      for (var n = 0; n < e.parents.length; n++) {
        var r = e.parents[n];
        if (r.type !== t.ROOT) {
          var s = o[r.type],
          u = a[s];
          u.async = i,
          g(r)
        }
      }
    }(f),
    a[r.name] = {
      async: i,
      formSpecific: r.formSpecific,
      constraintType: s[r.name],
      custom: !0,
      compound: r.compound,
      params: r.params,
      composingConstraints: r.composingConstraints,
      defaultMessage: r.defaultMessage,
      validator: u
    },
    a[r.name].custom && r.validatorRedefined && e.createPublicValidator(r.name, a)
  }
  function l(t) {
    s[t.name] = u,
    o[u++] = t.name;
    var n = t.validator;
    t.formSpecific || (n = e.wrapValidatorWithEmptyCheck(t.validator)),
    a[t.name] = {
      async: t.async,
      formSpecific: t.formSpecific,
      validator: n,
      constraintType: s[t.name],
      custom: !0,
      compound: !1,
      params: t.params,
      defaultMessage: t.defaultMessage
    },
    e.createPublicValidator(t.name, a)
  }
  function c(t) {
    v(t.name, t.constraints, t.params);
    var n = !1,
    r = 0;
    while (r < t.constraints.length && !n) {
      var i = t.constraints[r],
      f = o[i.constraintType];
      n = n || a[f].async,
      r++
    }
    s[t.name] = u,
    o[u++] = t.name,
    a[t.name] = {
      async: n,
      formSpecific: t.formSpecific,
      constraintType: s[t.name],
      custom: !0,
      compound: !0,
      params: t.params,
      reportAsSingleViolation: t.reportAsSingleViolation,
      composingConstraints: t.constraints,
      defaultMessage: t.defaultMessage,
      validator: e.compoundValidator
    },
    e.createPublicValidator(t.name, a),
    d(t.name, t.constraints)
  }
  function h(e, t, r) {
    var i = {
      successful: !0,
      message: '',
      data: null
    },
    s = e.cloneNode(!1);
    if (s.tagName.toLowerCase() == 'form' && !a[t].formSpecific) i = {
      successful: !1,
      message: n.generateExceptionMessage(e, t, '@' + t + ' is not a form constraint, but you are trying to bind it to a form'),
      data: null
    };
     else if (s.tagName.toLowerCase() != 'form' && a[t].formSpecific) i = {
      successful: !1,
      message: n.generateExceptionMessage(e, t, '@' + t + ' is a form constraint, but you are trying to bind it to a non-form element'),
      data: null
    };
     else if ((typeof s.type == 'undefined' || s.type.toLowerCase() != 'checkbox' && s.type.toLowerCase() != 'radio') && t == 'Checked') i = {
      successful: !1,
      message: n.generateExceptionMessage(e, t, '@' + t + ' is only applicable to checkboxes and radio buttons. You are trying to bind it to an input element that is neither a checkbox nor a radio button.'),
      data: null
    };
     else if (s.tagName.toLowerCase() != 'select' && t == 'Selected') i = {
      successful: !1,
      message: n.generateExceptionMessage(e, t, '@' + t + ' is only applicable to select boxes. You are trying to bind it to an input element that is not a select box.'),
      data: null
    };
     else {
      var o = p(e, a[t], r);
      o.error ? i = {
        successful: !1,
        message: o.message,
        data: null
      }
       : i.data = r
    }
    return i
  }
  function p(e, t, r) {
    var s = {
      error: !1,
      message: ''
    };
    r.__size__ < t.params.length && (s = {
      error: !0,
      message: n.generateExceptionMessage(e, o[t.constraintType], '@' + o[t.constraintType] + ' expects at least ' + t.params.length + ' parameter(s). However, you have provided only ' + r.__size__),
      data: null
    });
    var u = [
    ];
    for (var a = 0; a < t.params.length; a++) {
      var f = t.params[a];
      typeof r[f] == 'undefined' && u.push(f)
    }
    return u.length > 0 && (s = {
      error: !0,
      message: n.generateExceptionMessage(e, o[t.constraintType], 'You seem to have provided some optional or required parameters for @' + o[t.constraintType] + ', but you are still missing the following ' + u.length + ' required parameter(s): ' + i.explode(u, ', ')),
      data: null
    }),
    s
  }
  function d(e, n) {
    var r = t.getNodeByType(s[e]);
    r == null && (t.addNode({
      type: s[e],
      name: e,
      parent: null
    }), r = t.getNodeByType(s[e]));
    for (var i = 0; i < r.children.length; i++) {
      var u = r.children[i],
      f = [
      ];
      for (var l = 0; l < u.parents.length; l++) u.parents[l] !== r && f.push(u.parents[l]);
      u.parents = f
    }
    r.children = [
    ];
    for (var i = 0; i < n.length; i++) {
      var c = o[n[i].constraintType],
      h = a[c];
      t.addNode({
        type: h.constraintType,
        name: o[h.constraintType],
        parent: r
      })
    }
  }
  function v(e, t, i) {
    for (var s = 0; s < t.length; s++) {
      if (typeof t[s].constraintType == 'undefined') throw new n.Exception.ConstraintDefinitionException('In compound constraint ' + e + ': A composing constraint has no constraint type specified.');
      var u = t[s],
      f = o[u.constraintType],
      l = {
        __size__: 0
      };
      u.params = u.params || {
      };
      for (var c in u.params) u.params.hasOwnProperty(c) && r.put(l, c, u.params[c]);
      var h = 0;
      for (var d in u.params) u.params.hasOwnProperty(d) && h++;
      u.params.__size__ = h;
      for (var v = 0; v < i.length; v++) r.put(l, i[v], null);
      var m = p(null, a[f], l);
      if (m.error) throw new n.Exception.ConstraintDefinitionException('In compound constraint ' + e + ': ' + m.message)
    }
  }
  var s = {
  },
  o = {
  },
  u = 0;
  (function (e) {
    for (var t = 0; t < e.length; t++) s[e[t]] = t,
    o[t] = e[t];
    u = t,
    s.Between = s.row,
    s.Matches = s.Pattern,
    s.Empty = s.Blank,
    s.NotEmpty = s.NotBlank,
    s.IsAlpha = s.Alpha,
    s.IsNumeric = s.Numeric,
    s.IsAlphaNumeric = s.AlphaNumeric
  }) (['Checked',
  'Selected',
  'Max',
  'Min',
  'Range',
  'Between',
  'NotBlank',
  'NotEmpty',
  'Blank',
  'Empty',
  'Pattern',
  'Matches',
  'Email',
  'Alpha',
  'IsAlpha',
  'Numeric',
  'IsNumeric',
  'AlphaNumeric',
  'IsAlphaNumeric',
  'Integer',
  'Real',
  'CompletelyFilled',
  'PasswordsMatch',
  'Required',
  'Length',
  'Digits',
  'Past',
  'Future',
  'Step',
  'URL',
  'HTML5Required',
  'HTML5Email',
  'HTML5URL',
  'HTML5MaxLength',
  'HTML5Pattern',
  'HTML5Min',
  'HTML5Max',
  'HTML5Step']);
  var a = {
    Checked: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.checked,
      constraintType: s.Checked,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} needs to be checked.'
    },
    Selected: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.selected,
      constraintType: s.Selected,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} needs to be selected.'
    },
    Max: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.max,
      constraintType: s.Max,
      custom: !1,
      compound: !1,
      params: [
        'value'
      ],
      defaultMessage: '{label} needs to be lesser than or equal to {value}.'
    },
    Min: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.min,
      constraintType: s.Min,
      custom: !1,
      compound: !1,
      params: [
        'value'
      ],
      defaultMessage: '{label} needs to be greater than or equal to {value}.'
    },
    Range: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.row,
      constraintType: s.row,
      custom: !1,
      compound: !1,
      params: [
        'min',
        'max'
      ],
      defaultMessage: '{label} needs to be between {min} and {max}.'
    },
    NotBlank: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.notBlank,
      constraintType: s.NotBlank,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} cannot be blank.'
    },
    Blank: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.blank,
      constraintType: s.Blank,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} needs to be blank.'
    },
    Pattern: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.matches,
      constraintType: s.Pattern,
      custom: !1,
      compound: !1,
      params: [
        'regex'
      ],
      defaultMessage: '{label} needs to match {regex}{flags}.'
    },
    Email: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.email,
      constraintType: s.Email,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} is not a valid email.'
    },
    Alpha: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.alpha,
      constraintType: s.Alpha,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} can only contain letters.'
    },
    Numeric: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.numeric,
      constraintType: s.Numeric,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: 'Only numbers are required'
    },
    AlphaNumeric: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.alphaNumeric,
      constraintType: s.AlphaNumeric,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} can only contain numbers and letters.'
    },
    Integer: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.integer,
      constraintType: s.Integer,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} must be an integer.'
    },
    Real: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.real,
      constraintType: s.Real,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} must be a real number.'
    },
    CompletelyFilled: {
      async: !1,
      html5: !1,
      formSpecific: !0,
      validator: e.Validator.completelyFilled,
      constraintType: s.CompletelyFilled,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} must be completely filled.'
    },
    PasswordsMatch: {
      async: !1,
      html5: !1,
      formSpecific: !0,
      validator: e.Validator.passwordsMatch,
      constraintType: s.PasswordsMatch,
      custom: !1,
      compound: !1,
      params: [
        'field1',
        'field2'
      ],
      defaultMessage: 'Passwords do not match.'
    },
    Required: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.required,
      constraintType: s.Required,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} is required.'
    },
    Length: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.length,
      constraintType: s.Length,
      custom: !1,
      compound: !1,
      params: [
        'min',
        'max'
      ],
      defaultMessage: '{label} length must be between {min} and {max}.'
    },
    Digits: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.digits,
      constraintType: s.Digits,
      custom: !1,
      compound: !1,
      params: [
        'integer',
        'fraction'
      ],
      defaultMessage: '{label} must have up to {integer} digits and {fraction} fractional digits.'
    },
    Past: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.past,
      constraintType: s.Past,
      custom: !1,
      compound: !1,
      params: [
        'format'
      ],
      defaultMessage: '{label} must be in the past.'
    },
    Future: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.future,
      constraintType: s.Future,
      custom: !1,
      compound: !1,
      params: [
        'format'
      ],
      defaultMessage: '{label} must be in the future.'
    },
    Step: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.step,
      constraintType: s.Step,
      custom: !1,
      compound: !1,
      params: [
        'min',
        'max',
        'value'
      ],
      defaultMessage: '{label} must be equal to {min} or greater, and equal to {max} or lesser, at increments of {value}.'
    },
    URL: {
      async: !1,
      html5: !1,
      formSpecific: !1,
      validator: e.Validator.url,
      constraintType: s.URL,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} must be a valid URL.'
    },
    HTML5Required: {
      async: !1,
      html5: !0,
      inputType: null,
      attribute: 'required',
      formSpecific: !1,
      validator: e.Validator.html5Required,
      constraintType: s.HTML5Required,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} is required.'
    },
    HTML5Email: {
      async: !1,
      html5: !0,
      inputType: 'email',
      attribute: null,
      formSpecific: !1,
      validator: e.Validator.html5Email,
      constraintType: s.HTML5Email,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} is not a valid email.'
    },
    HTML5Pattern: {
      async: !1,
      html5: !0,
      inputType: null,
      attribute: 'pattern',
      formSpecific: !1,
      validator: e.Validator.html5Pattern,
      constraintType: s.HTML5Pattern,
      custom: !1,
      compound: !1,
      params: [
        'pattern'
      ],
      defaultMessage: '{label} needs to match {pattern}.'
    },
    HTML5URL: {
      async: !1,
      html5: !0,
      inputType: 'url',
      attribute: null,
      formSpecific: !1,
      validator: e.Validator.html5URL,
      constraintType: s.HTML5URL,
      custom: !1,
      compound: !1,
      params: [
      ],
      defaultMessage: '{label} is not a valid URL.'
    },
    HTML5MaxLength: {
      async: !1,
      html5: !0,
      inputType: null,
      attribute: 'maxlength',
      formSpecific: !1,
      validator: e.Validator.html5MaxLength,
      constraintType: s.HTML5MaxLength,
      custom: !1,
      compound: !1,
      params: [
        'maxlength'
      ],
      defaultMessage: '{label} must be less than {maxlength} characters.'
    },
    HTML5Min: {
      async: !1,
      html5: !0,
      inputType: null,
      attribute: 'min',
      formSpecific: !1,
      validator: e.Validator.html5Min,
      constraintType: s.HTML5Min,
      custom: !1,
      compound: !1,
      params: [
        'min'
      ],
      defaultMessage: '{label} needs to be greater than or equal to {min}.'
    },
    HTML5Max: {
      async: !1,
      html5: !0,
      inputType: null,
      attribute: 'max',
      formSpecific: !1,
      validator: e.Validator.html5Max,
      constraintType: s.HTML5Max,
      custom: !1,
      compound: !1,
      params: [
        'max'
      ],
      defaultMessage: '{label} needs to be lesser than or equal to {max}.'
    },
    HTML5Step: {
      async: !1,
      html5: !0,
      inputType: null,
      attribute: 'step',
      formSpecific: !1,
      validator: e.Validator.html5Step,
      constraintType: s.HTML5Step,
      custom: !1,
      compound: !1,
      params: [
        'step'
      ],
      defaultMessage: '{label} must be equal to the minimum value or greater at increments of {step}.'
    }
  };
  return {
    Constraint: s,
    ReverseConstraint: o,
    firstCustomConstraintIndex: u,
    constraintDefinitions: a,
    override: f,
    custom: l,
    compound: c,
    verifyConstraintDefinition: h,
    verifyParameterCountMatches: p
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('parser/Parser', [
    'utils/MapUtils',
    'service/ExceptionService',
    'service/ConstraintService'
  ], t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.Parser = t(e.regulaModules.MapUtils, e.regulaModules.ExceptionService, e.regulaModules.ConstraintService))
}(this, function (e, t, n) {
  function r(e) {
    return e ? e.replace(/^\s+/, '').replace(/\s+$/, '')  : ''
  }
  function i(e) {
    return e[0]
  }
  function s(t) {
    var n = t.str,
    r = t.delimiters.split(''),
    i = t.returnDelimiters || !1,
    s = t.returnEmptyTokens || !1,
    o = [
    ],
    u = 0;
    for (var a = 0; a < n.length; a++) if (e.exists(r, n.charAt(a))) {
      var f = n.substring(u, a);
      f.length == 0 ? s && o.push(f)  : o.push(f),
      i && o.push(n.charAt(a)),
      u = a + 1
    }
    if (u < n.length) {
      var f = n.substring(u, n.length);
      f.length == 0 ? s && o.push(f)  : o.push(f)
    }
    return o
  }
  function o(o, u) {
    function l(e) {
      var t = {
        successful: !0,
        message: '',
        data: null
      },
      n = [
      ];
      while (e.length > 0 && t.successful) t = c(e),
      n.push(t.data);
      return t.data = n,
      t
    }
    function c(e) {
      var n = {
        successful: !0,
        message: '',
        data: null
      },
      i = e.shift();
      return r(i).length == 0 && (i = e.shift()),
      i == '@' ? n = h(e)  : n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid constraint. Constraint definitions need to start with \'@\'') + ' ' + n.message,
        data: null
      },
      n
    }
    function h(e) {
      var r = {
        Between: 'Range',
        Matches: 'Pattern',
        Empty: 'Blank',
        NotEmpty: 'NotBlank',
        IsAlpha: 'Alpha',
        IsNumeric: 'Integer',
        IsAlphaNumeric: 'AlphaNumeric'
      },
      i = p(e);
      if (i.successful) {
        a = i.data,
        a = r[a] ? r[a] : a;
        if (n.constraintDefinitions[a]) {
          i = m(e);
          if (i.successful) {
            i = n.verifyConstraintDefinition(o, a, i.data);
            if (i.successful) {
              var s = i.data;
              i.data = {
                element: o,
                constraintName: a,
                definedParameters: s
              }
            }
          }
        } else i = {
          successful: !1,
          message: t.generateExceptionMessage(o, a, 'I cannot find the specified constraint name. If this is a custom constraint, you need to define it before you bind to it') + ' ' + i.message,
          data: null
        }
      } else i = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid constraint name in constraint definition') + ' ' + i.message,
        data: null
      };
      return i
    }
    function p(e) {
      var n = r(e.shift()),
      i = d(n.charAt(0));
      if (i.successful) {
        var s = 1;
        while (s < n.length && i.successful) i = v(n.charAt(s)),
        s++;
        i.successful && (i.data = n)
      } else i = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid starting character for constraint name. Can only include A-Z, a-z, and _') + ' ' + i.message,
        data: null
      };
      return i
    }
    function d(e) {
      var n = {
        successful: !0,
        message: '',
        data: null
      };
      if (!/[A-Za-z_]/.test(e) || typeof e == 'undefined' || e == null) n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid starting character'),
        data: null
      };
      return n
    }
    function v(e) {
      var n = {
        successful: !0,
        message: '',
        data: null
      };
      return /[0-9A-Za-z_]/.test(e) || (n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid character in identifier. Can only include 0-9, A-Z, a-z, and _') + ' ' + n.message,
        data: null
      }),
      n
    }
    function m(n) {
      var s = {
        successful: !0,
        message: '',
        data: {
        }
      };
      if (i(n) == '(') {
        n.shift();
        var u = {
        };
        if (i(n) == ')') n.shift();
         else {
          s = g(n);
          if (s.successful) {
            e.put(u, s.data.name, s.data.value),
            r(i(n)).length == 0 && n.shift();
            while (n.length > 0 && i(n) == ',' && s.successful) n.shift(),
            s = g(n),
            s.successful && (e.put(u, s.data.name, s.data.value), r(i(n)).length == 0 && n.shift());
            if (s.successful) {
              var f = n.shift();
              r(f).length == 0 && (f = n.shift()),
              f != ')' ? s = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, 'Cannot find matching closing ) in parameter list') + ' ' + s.message,
                data: null
              }
               : s.data = u
            }
          } else s = {
            successful: !1,
            message: t.generateExceptionMessage(o, a, 'Invalid parameter definition') + ' ' + s.message,
            data: null
          }
        }
      } else i(n) !== undefined && i(n) != '@' && (s = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Unexpected character \'' + i(n) + '\'' + ' after constraint definition') + ' ' + s.message,
        data: null
      });
      return s
    }
    function g(e) {
      var n = y(e);
      if (n.successful) {
        var r = n.data,
        i = e.shift();
        i == '=' ? (n = b(e), n.successful ? n.data = {
          name: r,
          value: n.data
        }
         : n = {
          successful: !1,
          message: t.generateExceptionMessage(o, a, 'Invalid parameter value') + ' ' + n.message,
          data: null
        })  : (e.unshift(i), n = {
          successful: !1,
          message: t.generateExceptionMessage(o, a, '\'=\' expected after parameter name ' + n.message),
          data: null
        })
      } else n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid parameter name. You might have unmatched parentheses') + ' ' + n.message,
        data: null
      };
      return n
    }
    function y(e) {
      var n = r(e.shift());
      n.length == 0 && (n = e.shift());
      var i = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid starting character for parameter name. Can only include A-Z, a-z, and _'),
        data: null
      };
      if (typeof n != 'undefined') {
        i = d(n.charAt(0));
        if (i.successful) {
          var s = 1;
          while (s < n.length && i.successful) i = v(n.charAt(s)),
          s++;
          i.successful && (i.data = n)
        } else i = {
          successful: !1,
          message: t.generateExceptionMessage(o, a, 'Invalid starting character for parameter name. Can only include A-Z, a-z, and _') + ' ' + i.message,
          data: null
        }
      }
      return i
    }
    function b(e) {
      r(i(e)).length == 0 && e.shift();
      var n = {
        successful: !0,
        message: '',
        data: [
        ]
      };
      if (i(e) == ')') n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Parameter value expected') + ' ' + n.message,
        data: null
      };
       else {
        n = w(e);
        var s = n.message;
        n.successful || (n = C(e), n.message = n.message + ' ' + s, s = n.message, n.successful || (n = L(e), n.message = n.message + ' ' + s, s = n.message, n.successful || (n = A(e), n.message = n.message + ' ' + s, s = n.message, n.successful || (n = O(e), n.message = n.message + ' ' + s, s = n.message, n.successful || (n = {
          successful: !1,
          message: t.generateExceptionMessage(o, a, 'Parameter value must be a number, quoted string, regular expression, or a boolean') + ' ' + s,
          data: null
        })))))
      }
      return n
    }
    function w(e) {
      var n = E(e);
      return n.successful || (n = S(e), n.successful || (n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Parameter value is not a number') + ' ' + n.message,
        data: null
      })),
      n
    }
    function E(e) {
      var n = e.shift(),
      r = {
        successful: !0,
        message: '',
        data: null
      };
      return n == '-' ? (r = S(e), r.successful && (r.data = n + r.data))  : (e.unshift(n), r = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Not a negative number'),
        data: null
      }),
      r
    }
    function S(e) {
      var n = null;
      if (i(e) != '.') {
        n = T(e);
        if (i(e) == '.') {
          var r = n.data;
          n = x(e),
          n.successful && (n.data = r + n.data)
        }
      } else n = x(e);
      return n.successful || (n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Not a positive number') + ' ' + n.message,
        data: null
      }),
      n
    }
    function x(e) {
      var n = e.shift(),
      r = T(e);
      return r.successful ? r.data = n + r.data : r = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Not a valid fraction'),
        data: null
      },
      r
    }
    function T(e) {
      var n = r(e.shift()),
      i = N(n.charAt(0));
      if (i.successful) {
        var s = 1;
        while (s < n.length && i.successful) i = N(n.charAt(s)),
        s++;
        i.successful && (i.data = n)
      } else e.unshift(n),
      i = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Not a valid integer') + ' ' + i.message,
        data: [
        ]
      };
      return i
    }
    function N(e) {
      var n = {
        successful: !0,
        message: '',
        data: null
      };
      return /[0-9]/.test(e) || (n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Not a valid digit'),
        data: null
      }),
      n
    }
    function C(e) {
      var n = e.shift(),
      r = '',
      s = {
        successful: !0,
        message: '',
        data: null
      };
      if (n == '"') {
        var u = !1;
        while (e.length > 0 && s.successful && !u) i(e) == '"' ? (u = !0, e.shift())  : (s = k(e), r += s.data);
        u || (s = {
          successful: !1,
          message: t.generateExceptionMessage(o, a, 'Unterminated string literal'),
          data: null
        })
      } else e.unshift(n),
      s = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid quoted string'),
        data: null
      };
      return s.successful = s.successful && u,
      s.data = r,
      s
    }
    function k(e) {
      var t = '',
      n = e.shift();
      return n == '\\' && (t = e.shift()),
      {
        successful: !0,
        message: '',
        data: n + t
      }
    }
    function L(e) {
      var n = '',
      r = e.shift(),
      s = {
        successful: !0,
        message: '',
        data: null
      };
      if (r == '/') {
        n = r;
        var u = !1;
        while (e.length > 0 && s.successful && !u) i(e) == '/' ? (n += e.shift(), u = !0)  : (s = k(e), n += s.data);
        u || (s = {
          successful: !1,
          message: t.generateExceptionMessage(o, a, 'Unterminated regex literal'),
          data: null
        })
      } else e.unshift(r),
      s = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Not a regular expression'),
        data: null
      };
      return s.successful = s.successful && u,
      s.data = n,
      s
    }
    function A(e) {
      var n = e.shift(),
      i = {
        successful: !0,
        message: '',
        data: null
      };
      return r(n) == 'true' || r(n) == 'false' ? i = {
        successful: !0,
        message: '',
        data: n === 'true'
      }
       : (e.unshift(n), i = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Not a boolean'),
        data: null
      }),
      i
    }
    function O(e) {
      var n = [
      ],
      s = e.shift(),
      u = {
        successful: !0,
        message: '',
        data: null
      };
      if (s == '[') {
        r(i(e)).length == 0 && e.shift(),
        i(e) == ']' ? u = {
          successful: !0,
          message: '',
          data: ''
        }
         : u = M(e);
        if (u.successful) {
          n.push(u.data),
          r(i(e)).length == 0 && e.shift();
          while (e.length > 0 && i(e) == ',' && u.successful) e.shift(),
          u = M(e),
          n.push(u.data),
          r(i(e)).length == 0 && e.shift();
          u.data = n,
          s = e.shift(),
          r(s).length == 0 && e.shift(),
          s != ']' && (u = {
            successful: !1,
            message: t.generateExceptionMessage(o, a, 'Cannot find matching closing ] in group definition') + ' ' + u.message,
            data: null
          })
        } else u = {
          successful: !1,
          message: t.generateExceptionMessage(o, a, 'Invalid group definition') + ' ' + u.message,
          data: null
        }
      } else e.unshift(s),
      u = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Not a valid group definition'),
        data: null
      };
      return u
    }
    function M(e) {
      var n = {
        successful: !0,
        message: '',
        data: ''
      },
      i = r(e.shift());
      i.length == 0 && (i = e.shift()),
      n = d(i.charAt(0));
      if (n.successful) {
        var s = 1;
        while (s < i.length && n.successful) n = v(i.charAt(s)),
        s++;
        n.successful && (n.data = i)
      } else n = {
        successful: !1,
        message: t.generateExceptionMessage(o, a, 'Invalid starting character for group name. Can only include A-Z, a-z, and _') + ' ' + n.message,
        data: null
      };
      return n
    }
    var a = '',
    f = s({
      str: r(u.replace(/\s*\n\s*/g, '')),
      delimiters: '@()[]=,"\\/-\\.',
      returnDelimiters: !0,
      returnEmptyTokens: !1
    });
    return l(f)
  }
  return {
    parse: o
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('service/BindingService', [
    'utils/MapUtils',
    'service/GroupService',
    'utils/DOMUtils',
    'parser/Parser',
    'service/ConstraintService',
    'service/ExceptionService'
  ], t)  : (typeof e.regulaModules == 'undefined' && (e.regulaModules = {
  }), e.regulaModules.BindingService = t(e.regulaModules.MapUtils, e.regulaModules.GroupService, e.regulaModules.DOMUtils, e.regulaModules.Parser, e.regulaModules.ConstraintService, e.regulaModules.ExceptionService))
}(this, function (e, t, n, r, i, s) {
  function a() {
    o === null && f()
  }
  function f() {
    o = {
      Default: {
      }
    }
  }
  function l() {
    return o
  }
  function c(n, r) {
    if (e.isEmpty(o[r][n])) {
      delete o[r][n];
      if (e.isEmpty(o[r])) {
        delete o[r];
        var i = t.Group[r];
        delete t.Group[r],
        delete t.ReverseGroup[i],
        t.deletedGroupIndices.push(i)
      }
    }
  }
  function h(e) {
    var t = {
      successful: !0,
      message: '',
      data: null
    },
    n = typeof e.cloneNode != 'undefined' ? e.cloneNode(!1)  : e,
    r = null;
    return typeof n.tagName != 'undefined' && (r = n.tagName.toLowerCase()),
    r !== 'form' && r !== 'select' && r !== 'textarea' && r !== 'input' ? t = {
      successful: !1,
      message: r + '#' + e.id + ' is not an input, select, textarea, or form element! Validation constraints can only be attached to input, select, textarea, or form elements.',
      data: null
    }
     : r === 'input' && e.getAttribute('type') === null && (t = {
      successful: !1,
      message: r + '#' + e.id + ' does not have a type attribute.',
      data: null
    }),
    t
  }
  function p(e) {
    var t = e.element,
    i;
    t === null ? i = n.getElementsByAttribute(document.body, '*', 'data-constraints')  : i = [
      t
    ];
    var s = {
      successful: !0,
      message: '',
      data: null
    },
    o = 0;
    while (o < i.length && s.successful) {
      t = i[o],
      s = h(t);
      if (s.successful) {
        t.id || (t.id = n.generateRandomId());
        var u = t.getAttribute('data-constraints');
        if (u !== null) {
          s = r.parse(t, u);
          if (s.successful && s.data !== null) {
            var a = s.data,
            f = 0;
            while (s.successful && f < a.length) {
              var l = a[f];
              s = g(l.element, l.constraintName, l.definedParameters),
              f++
            }
          }
        }
        o++
      }
    }
    return s
  }
  function d(t) {
    function a(e, t, r) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        s.id || (s.id = n.generateRandomId()),
        e[s.id] || (e[s.id] = [
        ]);
        var o = {
          constraint: r.constraint,
          params: {
          }
        };
        r.value === null && (o.params[r.attribute] = n.getAttributeValueForElement(s, r.attribute)),
        e[s.id].push(o)
      }
    }
    var r = t.element,
    s = {
      successful: !0,
      message: '',
      data: null
    },
    o = [
      {
        attribute: 'required',
        value: null,
        constraint: i.Constraint.HTML5Required
      },
      {
        attribute: 'type',
        value: 'email',
        constraint: i.Constraint.HTML5Email
      },
      {
        attribute: 'type',
        value: 'url',
        constraint: i.Constraint.HTML5URL
      },
      {
        attribute: 'pattern',
        value: null,
        constraint: i.Constraint.HTML5Pattern
      },
      {
        attribute: 'maxlength',
        value: null,
        constraint: i.Constraint.HTML5MaxLength
      },
      {
        attribute: 'min',
        value: null,
        constraint: i.Constraint.HTML5Min
      },
      {
        attribute: 'max',
        value: null,
        constraint: i.Constraint.HTML5Max
      },
      {
        attribute: 'step',
        value: null,
        constraint: i.Constraint.HTML5Step
      }
    ],
    u = {
      email: i.Constraint.HTML5Email,
      url: i.Constraint.HTML5URL
    },
    f = {
    };
    if (r === null) for (var l = 0; l < o.length; l++) {
      var c = o[l],
      p = null;
      c.value == null ? p = n.getElementsByAttribute(document.body, '*', c.attribute)  : p = n.getElementsByAttribute(document.body, '*', c.attribute, c.value),
      a(f, p, c)
    } else {
      r.id || (r.id = n.generateRandomId()),
      s = h(r);
      if (s.successful) {
        f[r.id] = [
        ];
        for (var l = 0; l < o.length; l++) {
          var c = o[l];
          if (c.value === null) {
            if (n.getAttributeValueForElement(r, c.attribute) != null) {
              var d = {
                constraint: c.constraint,
                params: {
                }
              };
              d.params[c.attribute] = n.getAttributeValueForElement(r, c.attribute),
              f[r.id].push(d)
            }
          } else {
            var v = n.getAttributeValueForElement(r, c.attribute);
            v != null && typeof u[v] != 'undefined' && f[r.id].push({
              constraint: u[v],
              params: {
              }
            })
          }
        }
      }
    }
    return e.iterateOverMap(f, function (e, t, n) {
      var r = document.getElementById(e);
      for (var o = 0; o < t.length; o++) {
        var u = t[o];
        s = g(r, i.ReverseConstraint[u.constraint], u.params)
      }
    }),
    s
  }
  function v(e) {
    var t = {
      successful: !0,
      message: '',
      data: null
    },
    n = e.element,
    r = e.constraints || [
    ],
    i = n && n.tagName ? n.tagName.toLowerCase()  : null;
    if (!n) t = {
      successful: !1,
      message: 'regula.bind expects a non-null element attribute in the options argument. ' + s.explodeParameters(e),
      data: null
    };
     else if (n.nodeType !== 1) t = {
      successful: !1,
      message: 'regula.bind: element attribute is expected to be an HTMLElement, but was of unexpected type: ' + typeof n + '. ' + s.explodeParameters(e),
      data: null
    };
     else if (i != 'form' && i != 'select' && i != 'textarea' && i != 'input') t = {
      successful: !1,
      message: i + '#' + n.id + ' is not an input, select, textarea, or form element! Validation constraints can only be attached to input, select, textarea, or form elements. ' + s.explodeParameters(e),
      data: null
    };
     else if (r.length > 0) {
      var o = 0;
      while (o < r.length && t.successful) t = m(r[o], e),
      o++
    } else t = p({
      element: n
    });
    return t
  }
  function m(n, r) {
    function u(e, t) {
      var n = {
      },
      r = [
      ];
      for (var i = 0; i < e.length; i++) r.push(e[i]),
      n[e[i]] = !0;
      for (var s = 0; s < t.length; s++) n[t[s]] || r.push(t[s]);
      return r
    }
    function a(t, n) {
      var r = [
      ];
      for (var i = 0; i < n.length; i++) e.exists(t, n[i]) || r.push(n[i]);
      return r
    }
    function f(n, r, s) {
      var f = o[t.ReverseGroup[t.Group.Default]][n.id][i.ReverseConstraint[r]].groups,
      l = [
      ];
      s.groups ? l = s.groups : l.push(t.ReverseGroup[t.Group.Default]),
      e.exists(l, t.ReverseGroup[t.Group.Default]) || l.push(t.ReverseGroup[t.Group.Default]);
      var h = a(l, u(f, l));
      for (var p = 0; p < h.length; p++) {
        var d = h[p];
        delete o[d][n.id][i.ReverseConstraint[r]],
        c(n.id, d)
      }
    }
    var l = {
      successful: !0,
      message: '',
      data: null
    },
    h = r.element,
    p = n.overwriteConstraint || !1,
    d = n.overwriteParameters || !1,
    v = n.constraintType,
    m = n.params || {
    },
    y = {
      __size__: 0
    },
    b = m.groups;
    if (typeof v == 'undefined') l = {
      successful: !1,
      message: 'regula.bind expects a valid constraint type for each constraint in constraints attribute of the options argument. ' + s.explodeParameters(r),
      data: null
    };
     else if (m && m.groups) if (m.groups instanceof Array) {
      var w = [
      ],
      E = 0;
      while (E < m.groups.length && l.successful) typeof m['groups'][E] == 'string' ? w.push(m.groups[E])  : typeof t.ReverseGroup[m['groups'][E]] != 'undefined' ? w.push(t.ReverseGroup[m.groups[E]])  : l = {
        successful: !1,
        message: 'Invalid group: ' + m.groups[E] + '. ' + s.explodeParameters(r),
        data: null
      },
      E++;
      l.successful && (m.groups = w)
    } else l = {
      successful: !1,
      message: 'The groups parameter must be an array of enums or strings ' + s.explodeParameters(r),
      data: null
    };
    if (l.successful) {
      if (!o[t.ReverseGroup[t.Group.Default]][h.id] || !o[t.ReverseGroup[t.Group.Default]][h.id][i.ReverseConstraint[v]]) {
        for (var S in m) m.hasOwnProperty(S) && e.put(y, S, m[S]);
        l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y)
      } else if (p) {
        for (var S in m) m.hasOwnProperty(S) && e.put(y, S, m[S]);
        l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y),
        l.successful && f(h, v, m)
      } else {
        var x = o[t.ReverseGroup[t.Group.Default]][h.id][i.ReverseConstraint[v]];
        for (var S in x) x.hasOwnProperty(S) && e.put(y, S, x[S]);
        if (d) {
          for (var S in m) m.hasOwnProperty(S) && e.put(y, S, m[S]);
          l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y),
          l.successful && f(h, v, y)
        } else for (var S in m) m.hasOwnProperty(S) && (x[S] || e.put(y, S, m[S]))
      }
      l.successful && (l = g(h, i.ReverseConstraint[v], y))
    }
    return m.groups = b,
    l
  }
  function g(n, r, u) {
    var a = {
      successful: !0,
      message: '',
      data: null
    };
    u.groups || e.put(u, 'groups', [
      t.ReverseGroup[t.Group.Default]
    ]);
    var f = u.groups;
    f.indexOf(t.ReverseGroup[t.Group.Default]) === - 1 && (f.push(t.ReverseGroup[t.Group.Default]), u.groups = f);
    for (var l = 0; l < f.length; l++) {
      var c = f[l];
      if (!o[c]) {
        var h = - 1;
        t.deletedGroupIndices.length > 0 ? h = t.deletedGroupIndices.pop()  : h = t.firstCustomGroupIndex++,
        t.Group[c] = h,
        t.ReverseGroup[h] = c,
        o[c] = {
        }
      }
      o[c][n.id] || (o[c][n.id] = {
      }),
      o[c][n.id][r] = u
    }
    if (i.constraintDefinitions[r].html5) if (n.getAttribute('type') !== null && i.constraintDefinitions[r].inputType !== null && n.getAttribute('type') !== i.constraintDefinitions[r].inputType) a = {
      successful: !1,
      message: s.generateExceptionMessage(n, r, 'Element type of ' + n.getAttribute('type') + ' conflicts with type of constraint @' + r + ': ' + i.constraintDefinitions[r].inputType),
      data: null
    };
     else {
      var p = i.constraintDefinitions[r].attribute,
      d = i.constraintDefinitions[r].inputType;
      (p !== null && n.getAttribute(p) === null || d !== null && n.getAttribute('type') === null) && y(n, r, u)
    }
    return a
  }
  function y(e, t, n) {
    if (t === i.ReverseConstraint[i.Constraint.HTML5Required]) e.setAttribute('required', 'true');
     else {
      var r = i.constraintDefinitions[t];
      for (var s = 0; s < r.params.length; s++) e.setAttribute(r.params[s], n[r.params[s]])
    }
    var o = e.getAttribute('class');
    /regula-modified/.test(o) || e.setAttribute('class', o + ' regula-modified')
  }
  function b(e) {
    var t = !1;
    for (var n = 0; n < e.elements.length; n++) {
      var r = e.elements[n].id,
      u = e.constraints || [
      ];
      if (u.length == 0) for (var a in o) o.hasOwnProperty(a) && typeof o[a][r] != 'undefined' && (delete o[a][r], a !== 'Default' && c(r, a), t = !0);
       else for (var f = 0; f < u.length; f++) {
        var l = u[f];
        for (var a in o) o.hasOwnProperty(a) && typeof o[a][r] != 'undefined' && (delete o[a][r][i.ReverseConstraint[l]], a !== 'Default' && c(r, a), t = !0)
      }
    }
    if (e.elements.length > 0 && !t) throw new s.Exception.IllegalArgumentException('Element with id ' + r + ' does not have any constraints bound to it. ' + s.explodeParameters(e))
  }
  function w(e) {
    var n = e.elementId,
    r = e.group,
    s = e.constraint,
    u = typeof o[t.ReverseGroup[t.Group.Default]][n] != 'undefined';
    if (u && typeof r != 'undefined' && typeof s == 'undefined') {
      var a = t.ReverseGroup[r];
      u = typeof a != 'undefined' && typeof o[a][n] != 'undefined'
    } else if (u && typeof r == 'undefined' && typeof s != 'undefined') {
      var f = i.ReverseConstraint[s];
      u = typeof f != 'undefined' && typeof o[t.ReverseGroup[t.Group.Default]][n][f] != 'undefined'
    } else if (u && typeof r != 'undefined' && typeof s != 'undefined') {
      var a = t.ReverseGroup[r],
      f = i.ReverseConstraint[s];
      u = typeof a != 'undefined' && typeof f != 'undefined' && typeof o[a][n] != 'undefined' && typeof o[a][n][f] != 'undefined'
    }
    return u
  }
  var o = null,
  u = {
  };
  return {
    initializeBoundConstraints: a,
    resetBoundConstraints: f,
    getBoundConstraints: l,
    removeElementAndGroupFromBoundConstraintsIfEmpty: c,
    bindAfterParsing: p,
    bindHTML5ValidationConstraints: d,
    bindFromOptions: v,
    unbind: b,
    isBound: w
  }
}),
function (e, t) {
  typeof define == 'function' && define.amd ? define('regula', [
    'utils/MapUtils',
    'utils/DOMUtils',
    'service/BindingService',
    'service/ExceptionService',
    'service/ConstraintService',
    'service/ValidationService',
    'service/GroupService'
  ], t)  : (e.regula = t(e.regulaModules.MapUtils, e.regulaModules.DOMUtils, e.regulaModules.BindingService, e.regulaModules.ExceptionService, e.regulaModules.ConstraintService, e.regulaModules.ValidationService, e.regulaModules.GroupService), e.regula._modules = e.regulaModules, e.regulaModules = undefined)
}(this, function (e, t, n, r, i, s, o) {
  function f(t) {
    e.iterateOverMap(t, function (e, t, n) {
      typeof u[e] != 'undefined' && (u[e] = t)
    })
  }
  function l(e) {
    var i = {
      successful: !0,
      message: '',
      data: null
    };
    if (typeof e == 'undefined' || !e) n.resetBoundConstraints(),
    u.enableHTML5Validation && t.supportsHTML5Validation() && (i = n.bindHTML5ValidationConstraints({
      element: null
    })),
    i.successful && (i = n.bindAfterParsing({
      element: null
    }));
     else {
      var s = e.elements;
      if (typeof s == 'undefined' || !s) u.enableHTML5Validation && t.supportsHTML5Validation() && typeof e.element != 'undefined' && e.element !== null && (i = n.bindHTML5ValidationConstraints({
        element: e.element
      })),
      i.successful && (i = n.bindFromOptions(e));
       else {
        var o = 0;
        while (i.successful && o < s.length) e.element = s[o],
        u.enableHTML5Validation && t.supportsHTML5Validation() && (i = n.bindHTML5ValidationConstraints({
          element: e.element
        })),
        i.successful ? (i = n.bindFromOptions(e), i.successful || (i.message = 'regula.bind: Element ' + (o + 1) + ' of ' + s.length + ' failed: ' + i.message))  : i.message = 'regula.bind: Failed binding HTML5 validation constraints: Element ' + (o + 1) + ' of ' + s.length + ' failed: ' + i.message,
        o++
      }
    }
    if (!i.successful) throw new r.Exception.BindException(i.message)
  }
  function c(e) {
    if (typeof e == 'undefined' || !e) n.resetBoundConstraints();
     else {
      if (typeof e.elementId == 'undefined' && typeof e.elements == 'undefined') throw new r.Exception.IllegalArgumentException('regula.unbind requires an elementId attribute, or an elements attribute if options are provided');
      if (!(typeof e.elements == 'undefined' || e.elements instanceof Array)) throw new r.Exception.IllegalArgumentException('regula.unbind expects the elements attribute to be an array, if it is provided');
      if (typeof e.elements == 'undefined') {
        e.elements = [
          document.getElementById(e.elementId)
        ];
        if (e.elements[0] === null) throw new r.Exception.IllegalArgumentException('Element with id ' + e.elementId + ' does not have any constraints bound to it. ' + r.explodeParameters(e))
      }
      n.unbind(e)
    }
  }
  function h(e) {
    if (typeof e == 'undefined') throw new r.Exception.IllegalArgumentException('regula.isBound expects options');
    var t = e.element,
    i = e.elementId;
    if (typeof t == 'undefined' && typeof i == 'undefined') throw new r.Exception.IllegalArgumentException('regula.isBound expects at the very least, either an element or elementId attribute');
    if (e.hasOwnProperty('constraint') && typeof e.constraint == 'undefined') throw new r.Exception.IllegalArgumentException('Undefined constraint was supplied as a parameter');
    if (e.hasOwnProperty('group') && typeof e.group == 'undefined') throw new r.Exception.IllegalArgumentException('Undefined group was supplied as a parameter');
    return typeof t != 'undefined' && (i = t.id),
    n.isBound({
      elementId: i,
      group: e.group,
      constraint: e.constraint
    })
  }
  function p(e) {
    if (!e) throw new r.Exception.IllegalArgumentException('regula.override expects options');
    if (typeof e.constraintType == 'undefined') throw new r.Exception.IllegalArgumentException('regula.override expects a valid constraintType attribute in the options argument');
    var t = i.ReverseConstraint[e.constraintType];
    if (typeof t == 'undefined') throw new r.Exception.IllegalArgumentException('regula.override: I could not find the specified constraint. Perhaps it has not been defined? Function received: ' + r.explodeParameters(e));
    var n = !1,
    s = i.constraintDefinitions[t].formSpecific;
    i.constraintDefinitions[t].custom && (s = typeof e.formSpecific == 'undefined' ? i.constraintDefinitions[t].formSpecific : e.formSpecific);
    var o = i.constraintDefinitions[t].custom && typeof e.async != 'undefined' ? e.async : i.constraintDefinitions[t].async,
    u = i.constraintDefinitions[t].custom ? e.params || i.constraintDefinitions[t].params : i.constraintDefinitions[t].params,
    a = e.defaultMessage || i.constraintDefinitions[t].defaultMessage,
    f = i.constraintDefinitions[t].compound,
    l = e.constraints || i.constraintDefinitions[t].constraints,
    c = i.constraintDefinitions[t].validator;
    i.constraintDefinitions[t].custom && !i.constraintDefinitions[t].compound && typeof e.validator != 'undefined' && (c = e.validator, n = !0);
    if (typeof s != 'boolean') throw new r.Exception.IllegalArgumentException('regula.override expects the formSpecific attribute in the options argument to be a boolean');
    if (typeof c != 'function') throw new r.Exception.IllegalArgumentException('regula.override expects the validator attribute in the options argument to be a function');
    if (!(u instanceof Array)) throw new r.Exception.IllegalArgumentException('regula.override expects the params attribute in the options argument to be an array');
    if (typeof a != 'string') throw new r.Exception.IllegalArgumentException('regula.override expects the defaultMessage attribute in the options argument to be a string');
    i.override({
      async: o,
      formSpecific: s,
      name: t,
      constraintType: e.constraintType,
      compound: f,
      params: u,
      composingConstraints: l,
      defaultMessage: a,
      validator: c,
      validatorRedefined: n
    })
  }
  function d(e) {
    if (!e) throw new r.Exception.IllegalArgumentException('regula.custom expects options');
    var t = e.name,
    n = e.formSpecific || !1,
    s = e.validator,
    o = e.params || [
    ],
    u = e.defaultMessage || '',
    a = typeof e.async == 'undefined' ? !1 : e.async;
    if (!t) throw new r.Exception.IllegalArgumentException('regula.custom expects a name attribute in the options argument');
    if (typeof t != 'string') throw new r.Exception.IllegalArgumentException('regula.custom expects the name attribute in the options argument to be a string');
    if (t.replace(/\s/g, '').length == 0) throw new r.Exception.IllegalArgumentException('regula.custom cannot accept an empty string for the name attribute in the options argument');
    if (typeof n != 'boolean') throw new r.Exception.IllegalArgumentException('regula.custom expects the formSpecific attribute in the options argument to be a boolean');
    if (!s) throw new r.Exception.IllegalArgumentException('regula.custom expects a validator attribute in the options argument');
    if (typeof s != 'function') throw new r.Exception.IllegalArgumentException('regula.custom expects the validator attribute in the options argument to be a function');
    if (o.constructor.toString().indexOf('Array') < 0) throw new r.Exception.IllegalArgumentException('regula.custom expects the params attribute in the options argument to be an array');
    if (typeof u != 'string') throw new r.Exception.IllegalArgumentException('regula.custom expects the defaultMessage attribute in the options argument to be a string');
    if (i.constraintDefinitions[t]) throw new r.Exception.IllegalArgumentException('There is already a constraint called ' + t + '. If you wish to override this constraint, use regula.override');
    i.custom({
      async: a,
      name: t,
      formSpecific: n,
      validator: s,
      custom: !0,
      compound: !1,
      params: o,
      defaultMessage: u
    })
  }
  function v(e) {
    if (!e) throw new r.Exception.IllegalArgumentException('regula.compound expects options');
    var t = e.name,
    n = e.constraints || [
    ],
    s = e.formSpecific || !1,
    o = e.defaultMessage || '',
    u = e.params || [
    ],
    a = typeof e.reportAsSingleViolation == 'undefined' ? !1 : e.reportAsSingleViolation;
    if (!t) throw new r.Exception.IllegalArgumentException('regula.compound expects a name attribute in the options argument');
    if (typeof t != 'string') throw new r.Exception.IllegalArgumentException('regula.compound expects name to be a string parameter');
    if (u.constructor.toString().indexOf('Array') < 0) throw new r.Exception.IllegalArgumentException('regula.compound expects the params attribute in the options argument to be an array');
    if (n.length == 0) throw new r.Exception.IllegalArgumentException('regula.compound expects an array of composing constraints under a constraints attribute in the options argument');
    if (i.constraintDefinitions[t]) throw new r.Exception.IllegalArgumentException('regula.compound: There is already a constraint called ' + t + '. If you wish to override this constraint, use regula.override');
    i.compound({
      name: t,
      formSpecific: s,
      params: u,
      reportAsSingleViolation: a,
      constraints: n,
      defaultMessage: o
    })
  }
  function m(e, t) {
    s.init({
      config: u,
      ReverseConstraint: i.ReverseConstraint,
      constraintDefinitions: i.constraintDefinitions,
      boundConstraints: n.getBoundConstraints()
    });
    var o = [
    ];
    if (typeof e == 'undefined' || typeof e.groups == 'undefined' || e.groups instanceof Array) {
      if (typeof e != 'undefined' && typeof e.groups != 'undefined' && e.groups.length == 0) throw new r.Exception.IllegalArgumentException('regula.validate: If a groups attribute is provided, it must not be empty.');
      if (typeof e != 'undefined' && e.hasOwnProperty('constraintType') && typeof e.constraintType == 'undefined') throw new r.Exception.IllegalArgumentException('regula.validate: If a constraintType attribute is provided, it cannot be undefined.');
      typeof t == 'undefined' && typeof e == 'function' && (e = {
        callback: e
      }),
      typeof t != 'undefined' && (e.callback = t);
      if (typeof e != 'undefined' && typeof e.elements != 'undefined') {
        if (!(e.elements instanceof Array)) throw new r.Exception.IllegalArgumentException('regula.validate: If an elements attribute is provided, it must be an array.');
        if (e.elements.length == 0) throw new r.Exception.IllegalArgumentException('regula.validate: If an elements attribute is provided, it must not be empty.');
        o = s.validate(e)
      } else o = s.validate(e);
      return o
    }
    throw new r.Exception.IllegalArgumentException('regula.validate: If a groups attribute is provided, it must be an array.')
  }
  var u = {
    validateEmptyFields: !0,
    enableHTML5Validation: !0,
    debug: !1
  },
  a = {
    DMY: 'DMY',
    MDY: 'MDY',
    YMD: 'YMD'
  };
  return n.initializeBoundConstraints(),
  s.initializePublicValidators(i.constraintDefinitions),
  {
    configure: f,
    bind: l,
    unbind: c,
    isBound: h,
    validate: m,
    custom: d,
    compound: v,
    override: p,
    Constraint: i.Constraint,
    Group: o.Group,
    DateFormat: a,
    Exception: r.Exception
  }
});
!function (e) {
  'function' == typeof define && define.amd ? define(['jquery'], e)  : e(jQuery)
}(function (e) {
  function t(e) {
    return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1))  : 'object' != typeof e && e ? void n.error('Method ' + e + ' does not exist on jQuery.regula')  : i.bind.apply(this, arguments)
  }
  var n = e,
  i = {
    bind: function (t) {
      return this instanceof e && (t || (t = {
      }), this.get().length > 0 && n.extend(!0, t, {
        elements: this.get()
      })),
      regula.bind(t),
      this
    },
    unbind: function (t) {
      return this instanceof e && (t || (t = {
      }), this.get().length > 0 && n.extend(!0, t, {
        elements: this.get()
      })),
      regula.unbind(t),
      this
    },
    isBound: function (t) {
      return this instanceof e && (t || (t = {
      }), this.get().length > 0 && n.extend(!0, t, {
        element: this.get(0)
      })),
      regula.isBound(t),
      this
    },
    validate: function (t) {
      return this instanceof e && (t || (t = {
      }), this.get().length > 0 && n.extend(!0, t, {
        elements: this.get()
      })),
      regula.validate(t)
    },
    custom: function (e) {
      return regula.custom(e),
      this
    },
    compound: function (e) {
      return regula.compound(e),
      this
    },
    override: function (e) {
      return regula.override(e),
      this
    }
  };
  i.on = i.bind,
  i.off = i.unbind,
  n.fn.regula = t,
  n.regula = t
});
/**
 * @module       jQuery Form Plugin
 * @author       M. Alsup
 * @see          http://malsup.com/jquery/form/
 * @license      MIT and GPL
 * @version      3.51
 */
!function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['../jquery'], e)  : e('undefined' != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
  'use strict';
  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
  }
  function r(t) {
    var r = t.target,
    a = e(r);
    if (!a.is('[type=submit],[type=image]')) {
      var n = a.closest('[type=submit]');
      if (0 === n.length) return;
      r = n[0]
    }
    var i = this;
    if (i.clk = r, 'image' == r.type) if (void 0 !== t.offsetX) i.clk_x = t.offsetX,
    i.clk_y = t.offsetY;
     else if ('function' == typeof e.fn.offset) {
      var o = a.offset();
      i.clk_x = t.pageX - o.left,
      i.clk_y = t.pageY - o.top
    } else i.clk_x = t.pageX - r.offsetLeft,
    i.clk_y = t.pageY - r.offsetTop;
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null
    }, 100)
  }
  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
      window.console && window.console.log ? window.console.log(t)  : window.opera && window.opera.postError && window.opera.postError(t)
    }
  }
  var n = {
  };
  n.fileapi = void 0 !== e('<input type=\'file\'/>').get(0).files,
  n.formdata = void 0 !== window.FormData;
  var i = !!e.fn.prop;
  e.fn.attr2 = function () {
    if (!i) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return e && e.jquery || 'string' == typeof e ? e : this.attr.apply(this, arguments)
  },
  e.fn.ajaxSubmit = function (t) {
    function r(r) {
      var a,
      n,
      i = e.param(r, t.traditional).split('&'),
      o = i.length,
      s = [
      ];
      for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, ' '),
      n = i[a].split('='),
      s.push([decodeURIComponent(n[0]),
      decodeURIComponent(n[1])]);
      return s
    }
    function o(a) {
      for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
      if (t.extraData) {
        var o = r(t.extraData);
        for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
      }
      t.data = null;
      var s = e.extend(!0, {
      }, e.ajaxSettings, t, {
        contentType: !1,
        processData: !1,
        cache: !1,
        type: u || 'POST'
      });
      t.uploadProgress && (s.xhr = function () {
        var r = e.ajaxSettings.xhr();
        return r.upload && r.upload.addEventListener('progress', function (e) {
          var r = 0,
          a = e.loaded || e.position,
          n = e.total;
          e.lengthComputable && (r = Math.ceil(a / n * 100)),
          t.uploadProgress(e, a, n, r)
        }, !1),
        r
      }),
      s.data = null;
      var c = s.beforeSend;
      return s.beforeSend = function (e, r) {
        r.data = t.formData ? t.formData : n,
        c && c.call(this, e, r)
      },
      e.ajax(s)
    }
    function s(r) {
      function n(e) {
        var t = null;
        try {
          e.contentWindow && (t = e.contentWindow.document)
        } catch (r) {
          a('cannot get iframe.contentWindow document: ' + r)
        }
        if (t) return t;
        try {
          t = e.contentDocument ? e.contentDocument : e.document
        } catch (r) {
          a('cannot get iframe.contentDocument: ' + r),
          t = e.document
        }
        return t
      }
      function o() {
        function t() {
          try {
            var e = n(g).readyState;
            a('state = ' + e),
            e && 'uninitialized' == e.toLowerCase() && setTimeout(t, 50)
          } catch (r) {
            a('Server abort: ', r, ' (', r.name, ')'),
            s(k),
            j && clearTimeout(j),
            j = void 0
          }
        }
        var r = f.attr2('target'),
        i = f.attr2('action'),
        o = 'multipart/form-data',
        c = f.attr('enctype') || f.attr('encoding') || o;
        w.setAttribute('target', p),
        (!u || /post/i.test(u)) && w.setAttribute('method', 'POST'),
        i != m.url && w.setAttribute('action', m.url),
        m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
          encoding: 'multipart/form-data',
          enctype: 'multipart/form-data'
        }),
        m.timeout && (j = setTimeout(function () {
          T = !0,
          s(D)
        }, m.timeout));
        var l = [
        ];
        try {
          if (m.extraData) for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty('name') && m.extraData[d].hasOwnProperty('value') ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w) [0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w) [0]);
          m.iframeTarget || v.appendTo('body'),
          g.attachEvent ? g.attachEvent('onload', s)  : g.addEventListener('load', s, !1),
          setTimeout(t, 15);
          try {
            w.submit()
          } catch (h) {
            var x = document.createElement('form').submit;
            x.apply(w)
          }
        } finally {
          w.setAttribute('action', i),
          w.setAttribute('enctype', c),
          r ? w.setAttribute('target', r)  : f.removeAttr('target'),
          e(l).remove()
        }
      }
      function s(t) {
        if (!x.aborted && !F) {
          if (M = n(g), M || (a('cannot access response document'), t = k), t === D && x) return x.abort('timeout'),
          void S.reject(x, 'timeout');
          if (t == k && x) return x.abort('server abort'),
          void S.reject(x, 'error', 'server abort');
          if (M && M.location.href != m.iframeSrc || T) {
            g.detachEvent ? g.detachEvent('onload', s)  : g.removeEventListener('load', s, !1);
            var r,
            i = 'success';
            try {
              if (T) throw 'timeout';
              var o = 'xml' == m.dataType || M.XMLDocument || e.isXMLDoc(M);
              if (a('isXml=' + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a('requeing onLoad callback, DOM not available'),
              void setTimeout(s, 250);
              var u = M.body ? M.body : M.documentElement;
              x.responseText = u ? u.innerHTML : null,
              x.responseXML = M.XMLDocument ? M.XMLDocument : M,
              o && (m.dataType = 'xml'),
              x.getResponseHeader = function (e) {
                var t = {
                  'content-type': m.dataType
                };
                return t[e.toLowerCase()]
              },
              u && (x.status = Number(u.getAttribute('status')) || x.status, x.statusText = u.getAttribute('statusText') || x.statusText);
              var c = (m.dataType || '').toLowerCase(),
              l = /(json|script|text)/.test(c);
              if (l || m.textarea) {
                var f = M.getElementsByTagName('textarea') [0];
                if (f) x.responseText = f.value,
                x.status = Number(f.getAttribute('status')) || x.status,
                x.statusText = f.getAttribute('statusText') || x.statusText;
                 else if (l) {
                  var p = M.getElementsByTagName('pre') [0],
                  h = M.getElementsByTagName('body') [0];
                  p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                }
              } else 'xml' == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
              try {
                E = _(x, c, m)
              } catch (y) {
                i = 'parsererror',
                x.error = r = y || i
              }
            } catch (y) {
              a('error caught: ', y),
              i = 'error',
              x.error = r = y || i
            }
            x.aborted && (a('upload aborted'), i = null),
            x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? 'success' : 'error'),
            'success' === i ? (m.success && m.success.call(m.context, E, 'success', x), S.resolve(x.responseText, 'success', x), d && e.event.trigger('ajaxSuccess', [
              x,
              m
            ]))  : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, 'error', r), d && e.event.trigger('ajaxError', [
              x,
              m,
              r
            ])),
            d && e.event.trigger('ajaxComplete', [
              x,
              m
            ]),
            d && !--e.active && e.event.trigger('ajaxStop'),
            m.complete && m.complete.call(m.context, x, i),
            F = !0,
            m.timeout && clearTimeout(j),
            setTimeout(function () {
              m.iframeTarget ? v.attr('src', m.iframeSrc)  : v.remove(),
              x.responseXML = null
            }, 100)
          }
        }
      }
      var c,
      l,
      m,
      d,
      p,
      v,
      g,
      x,
      y,
      b,
      T,
      j,
      w = f[0],
      S = e.Deferred();
      if (S.abort = function (e) {
        x.abort(e)
      }, r) for (l = 0; l < h.length; l++) c = e(h[l]),
      i ? c.prop('disabled', !1)  : c.removeAttr('disabled');
      if (m = e.extend(!0, {
      }, e.ajaxSettings, t), m.context = m.context || m, p = 'jqFormIO' + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2('name'), b ? p = b : v.attr2('name', p))  : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
        position: 'absolute',
        top: '-1000px',
        left: '-1000px'
      })), g = v[0], x = {
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: 'n/a',
        getAllResponseHeaders: function () {
        },
        getResponseHeader: function () {
        },
        setRequestHeader: function () {
        },
        abort: function (t) {
          var r = 'timeout' === t ? 'timeout' : 'aborted';
          a('aborting upload... ' + r),
          this.aborted = 1;
          try {
            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand('Stop')
          } catch (n) {
          }
          v.attr('src', m.iframeSrc),
          x.error = r,
          m.error && m.error.call(m.context, x, r, t),
          d && e.event.trigger('ajaxError', [
            x,
            m,
            r
          ]),
          m.complete && m.complete.call(m.context, x, r)
        }
      }, d = m.global, d && 0 === e.active++ && e.event.trigger('ajaxStart'), d && e.event.trigger('ajaxSend', [
        x,
        m
      ]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--,
      S.reject(),
      S;
      if (x.aborted) return S.reject(),
      S;
      y = w.clk,
      y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {
      }, m.extraData[b] = y.value, 'image' == y.type && (m.extraData[b + '.x'] = w.clk_x, m.extraData[b + '.y'] = w.clk_y)));
      var D = 1,
      k = 2,
      A = e('meta[name=csrf-token]').attr('content'),
      L = e('meta[name=csrf-param]').attr('content');
      L && A && (m.extraData = m.extraData || {
      }, m.extraData[L] = A),
      m.forceSync ? o()  : setTimeout(o, 10);
      var E,
      M,
      F,
      O = 50,
      X = e.parseXML || function (e, t) {
        return window.ActiveXObject ? (t = new ActiveXObject('Microsoft.XMLDOM'), t.async = 'false', t.loadXML(e))  : t = (new DOMParser).parseFromString(e, 'text/xml'),
        t && t.documentElement && 'parsererror' != t.documentElement.nodeName ? t : null
      },
      C = e.parseJSON || function (e) {
        return window.eval('(' + e + ')')
      },
      _ = function (t, r, a) {
        var n = t.getResponseHeader('content-type') || '',
        i = 'xml' === r || !r && n.indexOf('xml') >= 0,
        o = i ? t.responseXML : t.responseText;
        return i && 'parsererror' === o.documentElement.nodeName && e.error && e.error('parsererror'),
        a && a.dataFilter && (o = a.dataFilter(o, r)),
        'string' == typeof o && ('json' === r || !r && n.indexOf('json') >= 0 ? o = C(o)  : ('script' === r || !r && n.indexOf('javascript') >= 0) && e.globalEval(o)),
        o
      };
      return S
    }
    if (!this.length) return a('ajaxSubmit: skipping submit process - no element selected'),
    this;
    var u,
    c,
    l,
    f = this;
    'function' == typeof t ? t = {
      success: t
    }
     : void 0 === t && (t = {
    }),
    u = t.type || this.attr2('method'),
    c = t.url || this.attr2('action'),
    l = 'string' == typeof c ? e.trim(c)  : '',
    l = l || window.location.href || '',
    l && (l = (l.match(/^([^#]+)/) || [
    ]) [1]),
    t = e.extend(!0, {
      url: l,
      success: e.ajaxSettings.success,
      type: u || e.ajaxSettings.type,
      iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, t);
    var m = {
    };
    if (this.trigger('form-pre-serialize', [
      this,
      t,
      m
    ]), m.veto) return a('ajaxSubmit: submit vetoed via form-pre-serialize trigger'),
    this;
    if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a('ajaxSubmit: submit aborted via beforeSerialize callback'),
    this;
    var d = t.traditional;
    void 0 === d && (d = e.ajaxSettings.traditional);
    var p,
    h = [
    ],
    v = this.formToArray(t.semantic, h);
    if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a('ajaxSubmit: submit aborted via beforeSubmit callback'),
    this;
    if (this.trigger('form-submit-validate', [
      v,
      this,
      t,
      m
    ]), m.veto) return a('ajaxSubmit: submit vetoed via form-submit-validate trigger'),
    this;
    var g = e.param(v, d);
    p && (g = g ? g + '&' + p : p),
    'GET' == t.type.toUpperCase() ? (t.url += (t.url.indexOf('?') >= 0 ? '&' : '?') + g, t.data = null)  : t.data = g;
    var x = [
    ];
    if (t.resetForm && x.push(function () {
      f.resetForm()
    }), t.clearForm && x.push(function () {
      f.clearForm(t.includeHidden)
    }), !t.dataType && t.target) {
      var y = t.success || function () {
      };
      x.push(function (r) {
        var a = t.replaceTarget ? 'replaceWith' : 'html';
        e(t.target) [a](r).each(y, arguments)
      })
    } else t.success && x.push(t.success);
    if (t.success = function (e, r, a) {
      for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [
        e,
        r,
        a || f,
        f
      ])
    }, t.error) {
      var b = t.error;
      t.error = function (e, r, a) {
        var n = t.context || this;
        b.apply(n, [
          e,
          r,
          a,
          f
        ])
      }
    }
    if (t.complete) {
      var T = t.complete;
      t.complete = function (e, r) {
        var a = t.context || this;
        T.apply(a, [
          e,
          r,
          f
        ])
      }
    }
    var j = e('input[type=file]:enabled', this).filter(function () {
      return '' !== e(this).val()
    }),
    w = j.length > 0,
    S = 'multipart/form-data',
    D = f.attr('enctype') == S || f.attr('encoding') == S,
    k = n.fileapi && n.formdata;
    a('fileAPI :' + k);
    var A,
    L = (w || D) && !k;
    t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
      A = s(v)
    })  : A = s(v)  : A = (w || D) && k ? o(v)  : e.ajax(t),
    f.removeData('jqxhr').data('jqxhr', A);
    for (var E = 0; E < h.length; E++) h[E] = null;
    return this.trigger('form-submit-notify', [
      this,
      t
    ]),
    this
  },
  e.fn.ajaxForm = function (n) {
    if (n = n || {
    }, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
      var i = {
        s: this.selector,
        c: this.context
      };
      return !e.isReady && i.s ? (a('DOM not ready, queuing ajaxForm'), e(function () {
        e(i.s, i.c).ajaxForm(n)
      }), this)  : (a('terminating; zero elements found by selector' + (e.isReady ? '' : ' (DOM not ready)')), this)
    }
    return n.delegation ? (e(document).off('submit.form-plugin', this.selector, t).off('click.form-plugin', this.selector, r).on('submit.form-plugin', this.selector, n, t).on('click.form-plugin', this.selector, n, r), this)  : this.ajaxFormUnbind().bind('submit.form-plugin', n, t).bind('click.form-plugin', n, r)
  },
  e.fn.ajaxFormUnbind = function () {
    return this.unbind('submit.form-plugin click.form-plugin')
  },
  e.fn.formToArray = function (t, r) {
    var a = [
    ];
    if (0 === this.length) return a;
    var i,
    o = this[0],
    s = this.attr('id'),
    u = t ? o.getElementsByTagName('*')  : o.elements;
    if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || [
    ]).concat(i))), !u || !u.length) return a;
    var c,
    l,
    f,
    m,
    d,
    p,
    h;
    for (c = 0, p = u.length; p > c; c++) if (d = u[c], f = d.name, f && !d.disabled) if (t && o.clk && 'image' == d.type) o.clk == d && (a.push({
      name: f,
      value: e(d).val(),
      type: d.type
    }), a.push({
      name: f + '.x',
      value: o.clk_x
    }, {
      name: f + '.y',
      value: o.clk_y
    }));
     else if (m = e.fieldValue(d, !0), m && m.constructor == Array) for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
      name: f,
      value: m[l]
    });
     else if (n.fileapi && 'file' == d.type) {
      r && r.push(d);
      var v = d.files;
      if (v.length) for (l = 0; l < v.length; l++) a.push({
        name: f,
        value: v[l],
        type: d.type
      });
       else a.push({
        name: f,
        value: '',
        type: d.type
      })
    } else null !== m && 'undefined' != typeof m && (r && r.push(d), a.push({
      name: f,
      value: m,
      type: d.type,
      required: d.required
    }));
    if (!t && o.clk) {
      var g = e(o.clk),
      x = g[0];
      f = x.name,
      f && !x.disabled && 'image' == x.type && (a.push({
        name: f,
        value: g.val()
      }), a.push({
        name: f + '.x',
        value: o.clk_x
      }, {
        name: f + '.y',
        value: o.clk_y
      }))
    }
    return a
  },
  e.fn.formSerialize = function (t) {
    return e.param(this.formToArray(t))
  },
  e.fn.fieldSerialize = function (t) {
    var r = [
    ];
    return this.each(function () {
      var a = this.name;
      if (a) {
        var n = e.fieldValue(this, t);
        if (n && n.constructor == Array) for (var i = 0, o = n.length; o > i; i++) r.push({
          name: a,
          value: n[i]
        });
         else null !== n && 'undefined' != typeof n && r.push({
          name: this.name,
          value: n
        })
      }
    }),
    e.param(r)
  },
  e.fn.fieldValue = function (t) {
    for (var r = [
    ], a = 0, n = this.length; n > a; a++) {
      var i = this[a],
      o = e.fieldValue(i, t);
      null === o || 'undefined' == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o)  : r.push(o))
    }
    return r
  },
  e.fieldValue = function (t, r) {
    var a = t.name,
    n = t.type,
    i = t.tagName.toLowerCase();
    if (void 0 === r && (r = !0), r && (!a || t.disabled || 'reset' == n || 'button' == n || ('checkbox' == n || 'radio' == n) && !t.checked || ('submit' == n || 'image' == n) && t.form && t.form.clk != t || 'select' == i && - 1 == t.selectedIndex)) return null;
    if ('select' == i) {
      var o = t.selectedIndex;
      if (0 > o) return null;
      for (var s = [
      ], u = t.options, c = 'select-one' == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
        var m = u[f];
        if (m.selected) {
          var d = m.value;
          if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
          s.push(d)
        }
      }
      return s
    }
    return e(t).val()
  },
  e.fn.clearForm = function (t) {
    return this.each(function () {
      e('input,select,textarea', this).clearFields(t)
    })
  },
  e.fn.clearFields = e.fn.clearInputs = function (t) {
    var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var a = this.type,
      n = this.tagName.toLowerCase();
      r.test(a) || 'textarea' == n ? this.value = '' : 'checkbox' == a || 'radio' == a ? this.checked = !1 : 'select' == n ? this.selectedIndex = - 1 : 'file' == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0))  : e(this).val('')  : t && (t === !0 && /hidden/.test(a) || 'string' == typeof t && e(this).is(t)) && (this.value = '')
    })
  },
  e.fn.resetForm = function () {
    return this.each(function () {
      ('function' == typeof this.reset || 'object' == typeof this.reset && !this.reset.nodeType) && this.reset()
    })
  },
  e.fn.enable = function (e) {
    return void 0 === e && (e = !0),
    this.each(function () {
      this.disabled = !e
    })
  },
  e.fn.selected = function (t) {
    return void 0 === t && (t = !0),
    this.each(function () {
      var r = this.type;
      if ('checkbox' == r || 'radio' == r) this.checked = t;
       else if ('option' == this.tagName.toLowerCase()) {
        var a = e(this).parent('select');
        t && a[0] && 'select-one' == a[0].type && a.find('option').selected(!1),
        this.selected = t
      }
    })
  },
  e.fn.ajaxSubmit.debug = !1
});
/**
 * @module       RDInputLabel
 * @author       Evgeniy Gusarov
 * @license      MIT
 */
(function () {
  !function (t, e, i) {
    var s,
    n;
    return n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isWebkit = /safari|chrome/i.test(navigator.userAgent),
    s = function () {
      function s(s, n) {
        this.options = t.extend(!0, {
        }, this.Defaults, n),
        this.$element = t(s).addClass('rd-input-label'),
        this.$target = t('#' + this.$element.attr('for')),
        this.$win = t(i),
        this.$doc = t(e),
        this.initialize()
      }
      return s.prototype.Defaults = {
        callbacks: null
      },
      s.prototype.initialize = function () {
        return this.$target.on('input', t.proxy(this.change, this)).on('focus', t.proxy(this.focus, this)).on('blur', t.proxy(this.blur, this)).on('hover', t.proxy(this.hover, this)).parents('form').on('reset', t.proxy(this.reset, this)),
        this.change(),
        this.hover(),
        this
      },
      s.prototype.hover = function () {
        return isWebkit && (this.$target.is(':-webkit-autofill') ? this.$element.addClass('auto-fill')  : this.$element.removeClass('auto-fill')),
        this
      },
      s.prototype.change = function () {
        return isWebkit && (this.$target.is(':-webkit-autofill') ? this.$element.addClass('auto-fill')  : this.$element.removeClass('auto-fill')),
        '' !== this.$target.val() ? (this.$element.hasClass('focus') || this.focus(), this.$element.addClass('not-empty'))  : this.$element.removeClass('not-empty'),
        this
      },
      s.prototype.focus = function () {
        return this.$element.addClass('focus'),
        this
      },
      s.prototype.reset = function () {
        return setTimeout(t.proxy(this.blur, this)),
        this
      },
      s.prototype.blur = function (t) {
        return '' === this.$target.val() && this.$element.removeClass('focus').removeClass('not-empty'),
        this
      },
      s
    }(),
    t.fn.extend({
      RDInputLabel: function (e) {
        return this.each(function () {
          var i;
          return i = t(this),
          i.data('RDInputLabel') ? void 0 : i.data('RDInputLabel', new s(this, e))
        })
      }
    }),
    i.RDInputLabel = s
  }(window.jQuery, document, window),
  'undefined' != typeof module && null !== module ? module.exports = window.RDInputLabel : 'function' == typeof define && define.amd && define(['jquery'], function () {
    'use strict';
    return window.RDInputLabel
  })
}).call(this);
/**
 * @module       Owl carousel
 * @version      2.2.1
 * @author       Bartosz Wojciechowski
 * @license      MIT
 */
!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null,
    this.options = a.extend({
    }, e.Defaults, c),
    this.$element = a(b),
    this._handlers = {
    },
    this._plugins = {
    },
    this._supress = {
    },
    this._current = null,
    this._speed = null,
    this._coordinates = [
    ],
    this._breakpoint = null,
    this._width = null,
    this._items = [
    ],
    this._clones = [
    ],
    this._mergers = [
    ],
    this._widths = [
    ],
    this._invalidated = {
    },
    this._pipe = [
    ],
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    },
    this._states = {
      current: {
      },
      tags: {
        initializing: [
          'busy'
        ],
        animating: [
          'busy'
        ],
        dragging: [
          'interacting'
        ]
      }
    },
    a.each(['onResize',
    'onThrottledResize'], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this)
    }, this)),
    a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
    }, this)),
    a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      })
    }, this)),
    this.setup(),
    this.initialize()
  }
  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {
    },
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: 'swing',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab'
  },
  e.Width = {
    Default: 'default',
    Inner: 'inner',
    Outer: 'outer'
  },
  e.Type = {
    Event: 'event',
    State: 'state'
  },
  e.Plugins = {
  },
  e.Workers = [
    {
      filter: [
        'width',
        'settings'
      ],
      run: function () {
        this._width = this.$element.width()
      }
    },
    {
      filter: [
        'width',
        'items',
        'settings'
      ],
      run: function (a) {
        a.current = this._items && this._items[this.relative(this._current)]
      }
    },
    {
      filter: [
        'items',
        'settings'
      ],
      run: function () {
        this.$stage.children('.cloned').remove()
      }
    },
    {
      filter: [
        'width',
        'items',
        'settings'
      ],
      run: function (a) {
        var b = this.settings.margin || '',
        c = !this.settings.autoWidth,
        d = this.settings.rtl,
        e = {
          width: 'auto',
          'margin-left': d ? b : '',
          'margin-right': d ? '' : b
        };
        !c && this.$stage.children().css(e),
        a.css = e
      }
    },
    {
      filter: [
        'width',
        'items',
        'settings'
      ],
      run: function (a) {
        var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        c = null,
        d = this._items.length,
        e = !this.settings.autoWidth,
        f = [
        ];
        for (a.items = {
          merge: !1,
          width: b
        }; d--; ) c = this._mergers[d],
        c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
        a.items.merge = c > 1 || a.items.merge,
        f[d] = e ? b * c : this._items[d].width();
        this._widths = f
      }
    },
    {
      filter: [
        'items',
        'settings'
      ],
      run: function () {
        var b = [
        ],
        c = this._items,
        d = this.settings,
        e = Math.max(2 * d.items, 4),
        f = 2 * Math.ceil(c.length / 2),
        g = d.loop && c.length ? d.rewind ? e : Math.max(e, f)  : 0,
        h = '',
        i = '';
        for (g /= 2; g--; ) b.push(this.normalize(b.length / 2, !0)),
        h += c[b[b.length - 1]][0].outerHTML,
        b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
        i = c[b[b.length - 1]][0].outerHTML + i;
        this._clones = b,
        a(h).addClass('cloned').appendTo(this.$stage),
        a(i).addClass('cloned').prependTo(this.$stage)
      }
    },
    {
      filter: [
        'width',
        'items',
        'settings'
      ],
      run: function () {
        for (var a = this.settings.rtl ? 1 : - 1, b = this._clones.length + this._items.length, c = - 1, d = 0, e = 0, f = [
        ]; ++c < b; ) d = f[c - 1] || 0,
        e = this._widths[this.relative(c)] + this.settings.margin,
        f.push(d + e * a);
        this._coordinates = f
      }
    },
    {
      filter: [
        'width',
        'items',
        'settings'
      ],
      run: function () {
        var a = this.settings.stagePadding,
        b = this._coordinates,
        c = {
          width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
          'padding-left': a || '',
          'padding-right': a || ''
        };
        this.$stage.css(c)
      }
    },
    {
      filter: [
        'width',
        'items',
        'settings'
      ],
      run: function (a) {
        var b = this._coordinates.length,
        c = !this.settings.autoWidth,
        d = this.$stage.children();
        if (c && a.items.merge) for (; b--; ) a.css.width = this._widths[this.relative(b)],
        d.eq(b).css(a.css);
         else c && (a.css.width = a.items.width, d.css(a.css))
      }
    },
    {
      filter: [
        'items'
      ],
      run: function () {
        this._coordinates.length < 1 && this.$stage.removeAttr('style')
      }
    },
    {
      filter: [
        'width',
        'items',
        'settings'
      ],
      run: function (a) {
        a.current = a.current ? this.$stage.children().index(a.current)  : 0,
        a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
        this.reset(a.current)
      }
    },
    {
      filter: [
        'position'
      ],
      run: function () {
        this.animate(this.coordinates(this._current))
      }
    },
    {
      filter: [
        'width',
        'position',
        'items',
        'settings'
      ],
      run: function () {
        var a,
        b,
        c,
        d,
        e = this.settings.rtl ? 1 : - 1,
        f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f,
        h = g + this.width() * e,
        i = [
        ];
        for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0,
        b = Math.abs(this._coordinates[c]) + f * e,
        (this.op(a, '<=', g) && this.op(a, '>', h) || this.op(b, '<', g) && this.op(b, '>', h)) && i.push(c);
        this.$stage.children('.active').removeClass('active'),
        this.$stage.children(':eq(' + i.join('), :eq(') + ')').addClass('active'),
        this.settings.center && (this.$stage.children('.center').removeClass('center'), this.$stage.children().eq(this.current()).addClass('center'))
      }
    }
  ],
  e.prototype.initialize = function () {
    if (this.enter('initializing'), this.trigger('initialize'), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is('pre-loading')) {
      var b,
      c,
      e;
      b = this.$element.find('img'),
      c = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : d,
      e = this.$element.children(c).width(),
      b.length && e <= 0 && this.preloadAutoWidthImages(b)
    }
    this.$element.addClass(this.options.loadingClass),
    this.$stage = a('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
    this.$element.append(this.$stage.parent()),
    this.replace(this.$element.children().not(this.$stage.parent())),
    this.$element.is(':visible') ? this.refresh()  : this.invalidate('width'),
    this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
    this.registerEventHandlers(),
    this.leave('initializing'),
    this.trigger('initialized')
  },
  e.prototype.setup = function () {
    var b = this.viewport(),
    c = this.options.responsive,
    d = - 1,
    e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a))
    }), e = a.extend({
    }, this.options, c[d]), 'function' == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + d)))  : e = a.extend({
    }, this.options),
    this.trigger('change', {
      property: {
        name: 'settings',
        value: e
      }
    }),
    this._breakpoint = d,
    this.settings = e,
    this.invalidate('settings'),
    this.trigger('changed', {
      property: {
        name: 'settings',
        value: this.settings
      }
    })
  },
  e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  },
  e.prototype.prepare = function (b) {
    var c = this.trigger('prepare', {
      content: b
    });
    return c.data || (c.data = a('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(b)),
    this.trigger('prepared', {
      content: c.data
    }),
    c.data
  },
  e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a]
    }, this._invalidated), e = {
    }; b < c; ) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
    b++;
    this._invalidated = {
    },
    !this.is('valid') && this.enter('valid')
  },
  e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  },
  e.prototype.refresh = function () {
    this.enter('refreshing'),
    this.trigger('refresh'),
    this.setup(),
    this.optionsLogic(),
    this.$element.addClass(this.options.refreshClass),
    this.update(),
    this.$element.removeClass(this.options.refreshClass),
    this.leave('refreshing'),
    this.trigger('refreshed')
  },
  e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer),
    this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  },
  e.prototype.onResize = function () {
    return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(':visible') && (this.enter('resizing'), this.trigger('resize').isDefaultPrevented() ? (this.leave('resizing'), !1)  : (this.invalidate('width'), this.refresh(), this.leave('resizing'), void this.trigger('resized')))))
  },
  e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + '.owl.core', a.proxy(this.onTransitionEnd, this)),
    this.settings.responsive !== !1 && this.on(b, 'resize', this._handlers.onThrottledResize),
    this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)), this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
      return !1
    })),
    this.settings.touchDrag && (this.$stage.on('touchstart.owl.core', a.proxy(this.onDragStart, this)), this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this)))
  },
  e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(','), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    })  : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is('animating') && (a.support.transform ? this.animate(d.x)  : this.$stage.stop(), this.invalidate('position')), this.$element.toggleClass(this.options.grabClass, 'mousedown' === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on('mouseup.owl.core touchend.owl.core', a.proxy(this.onDragEnd, this)), a(c).one('mousemove.owl.core touchmove.owl.core', a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on('mousemove.owl.core touchmove.owl.core', a.proxy(this.onDragMove, this)),
      Math.abs(d.x) < Math.abs(d.y) && this.is('valid') || (b.preventDefault(), this.enter('dragging'), this.trigger('drag'))
    }, this)))
  },
  e.prototype.onDragMove = function (a) {
    var b = null,
    c = null,
    d = null,
    e = this.difference(this._drag.pointer, this.pointer(a)),
    f = this.difference(this._drag.stage.start, e);
    this.is('dragging') && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b)  : (b = this.settings.rtl ? this.coordinates(this.maximum())  : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum())  : this.coordinates(this.maximum()), d = this.settings.pullDrag ? - 1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  },
  e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
    e = this._drag.stage.current,
    f = d.x > 0 ^ this.settings.rtl ? 'left' : 'right';
    a(c).off('.owl.core'),
    this.$element.removeClass(this.options.grabClass),
    (0 !== d.x && this.is('dragging') || !this.is('valid')) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate('position'), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one('click.owl.core', function () {
      return !1
    })),
    this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'))
  },
  e.prototype.closest = function (b, c) {
    var d = - 1,
    e = 30,
    f = this.width(),
    g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
      return 'left' === c && b > h - e && b < h + e ? d = a : 'right' === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, '<', h) && this.op(b, '>', g[a + 1] || h - f) && (d = 'left' === c ? a + 1 : a),
      d === - 1
    }, this)),
    this.settings.loop || (this.op(b, '>', g[this.minimum()]) ? d = b = this.minimum()  : this.op(b, '<', g[this.maximum()]) && (d = b = this.maximum())),
    d
  },
  e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is('animating') && this.onTransitionEnd(),
    c && (this.enter('animating'), this.trigger('translate')),
    a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: 'translate3d(' + b + 'px,0px,0px)',
      transition: this.speed() / 1000 + 's'
    })  : c ? this.$stage.animate({
      left: b + 'px'
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))  : this.$stage.css({
      left: b + 'px'
    })
  },
  e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0
  },
  e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger('change', {
        property: {
          name: 'position',
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)),
      this._current = a,
      this.invalidate('position'),
      this.trigger('changed', {
        property: {
          name: 'position',
          value: this._current
        }
      })
    }
    return this._current
  },
  e.prototype.invalidate = function (b) {
    return 'string' === a.type(b) && (this._invalidated[b] = !0, this.is('valid') && this.leave('valid')),
    a.map(this._invalidated, function (a, b) {
      return b
    })
  },
  e.prototype.reset = function (a) {
    a = this.normalize(a),
    a !== d && (this._speed = 0, this._current = a, this.suppress(['translate',
    'translated']), this.animate(this.coordinates(a)), this.release(['translate',
    'translated']))
  },
  e.prototype.normalize = function (a, b) {
    var c = this._items.length,
    e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
    a
  },
  e.prototype.relative = function (a) {
    return a -= this._clones.length / 2,
    this.normalize(a, !0)
  },
  e.prototype.maximum = function (a) {
    var b,
    c,
    d,
    e = this.settings,
    f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
     else if (e.autoWidth || e.merge) {
      for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)); );
      f = b + 1
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2),
    Math.max(f, 0)
  },
  e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2
  },
  e.prototype.items = function (a) {
    return a === d ? this._items.slice()  : (a = this.normalize(a, !0), this._items[a])
  },
  e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice()  : (a = this.normalize(a, !0), this._mergers[a])
  },
  e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
    e = c + this._items.length,
    f = function (a) {
      return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
    };
    return b === d ? a.map(this._clones, function (a, b) {
      return f(b)
    })  : a.map(this._clones, function (a, c) {
      return a === b ? f(c)  : null
    })
  },
  e.prototype.speed = function (a) {
    return a !== d && (this._speed = a),
    this._speed
  },
  e.prototype.coordinates = function (b) {
    var c,
    e = 1,
    f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b)
    }, this))  : (this.settings.center ? (this.settings.rtl && (e = - 1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e)  : c = this._coordinates[f] || 0, c = Math.ceil(c))
  },
  e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  },
  e.prototype.to = function (a, b) {
    var c = this.current(),
    d = null,
    e = a - this.relative(c),
    f = (e > 0) - (e < 0),
    g = this._items.length,
    h = this.minimum(),
    i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * - 1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c)))  : this.settings.rewind ? (i += 1, a = (a % i + i) % i)  : a = Math.max(h, Math.min(i, a)),
    this.speed(this.duration(c, a, b)),
    this.current(a),
    this.$element.is(':visible') && this.update()
  },
  e.prototype.next = function (a) {
    a = a || !1,
    this.to(this.relative(this.current()) + 1, a)
  },
  e.prototype.prev = function (a) {
    a = a || !1,
    this.to(this.relative(this.current()) - 1, a)
  },
  e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave('animating'),
    this.trigger('translated')
  },
  e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width()  : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn('Can not detect viewport width.'),
    d
  },
  e.prototype.replace = function (b) {
    this.$stage.empty(),
    this._items = [
    ],
    b && (b = b instanceof jQuery ? b : a(b)),
    this.settings.nestedItemSelector && (b = b.find('.' + this.settings.nestedItemSelector)),
    b.filter(function () {
      return 1 === this.nodeType
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b),
      this.$stage.append(b),
      this._items.push(b),
      this._mergers.push(1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1)
    }, this)),
    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
    this.invalidate('items')
  },
  e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0),
    b = b instanceof jQuery ? b : a(b),
    this.trigger('add', {
      content: b,
      position: c
    }),
    b = this.prepare(b),
    0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1))  : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1)),
    this._items[e] && this.reset(this._items[e].index()),
    this.invalidate('items'),
    this.trigger('added', {
      content: b,
      position: c
    })
  },
  e.prototype.remove = function (a) {
    a = this.normalize(a, !0),
    a !== d && (this.trigger('remove', {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate('items'), this.trigger('removed', {
      content: null,
      position: a
    }))
  },
  e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter('pre-loading'),
      c = a(c),
      a(new Image).one('load', a.proxy(function (a) {
        c.attr('src', a.target.src),
        c.css('opacity', 1),
        this.leave('pre-loading'),
        !this.is('pre-loading') && !this.is('initializing') && this.refresh()
      }, this)).attr('src', c.attr('src') || c.attr('data-src') || c.attr('data-src-retina'))
    }, this))
  },
  e.prototype.destroy = function () {
    this.$element.off('.owl.core'),
    this.$stage.off('.owl.core'),
    a(c).off('.owl.core'),
    this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, 'resize', this._handlers.onThrottledResize));
    for (var d in this._plugins) this._plugins[d].destroy();
    this.$stage.children('.cloned').remove(),
    this.$stage.unwrap(),
    this.$stage.children().contents().unwrap(),
    this.$stage.children().unwrap(),
    this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel')
  },
  e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case '<':
        return d ? a > c : a < c;
      case '>':
        return d ? a < c : a > c;
      case '>=':
        return d ? a <= c : a >= c;
      case '<=':
        return d ? a >= c : a <= c
    }
  },
  e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d)  : a.attachEvent && a.attachEvent('on' + b, c)
  },
  e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d)  : a.detachEvent && a.detachEvent('on' + b, c)
  },
  e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
    i = a.camelCase(a.grep(['on',
    b,
    d], function (a) {
      return a
    }).join('-').toLowerCase()),
    j = a.Event([b,
    'owl',
    d || 'carousel'].join('.').toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j)
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && 'function' == typeof this.settings[i] && this.settings[i].call(this, j)),
    j
  },
  e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || [
    ]), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0),
      this._states.current[b]++
    }, this))
  },
  e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || [
    ]), a.proxy(function (a, b) {
      this._states.current[b]--
    }, this))
  },
  e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {
      }), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && a.namespace.indexOf('owl') !== - 1 ? a.namespace && a.namespace.indexOf('owl') > - 1 : c.apply(this, arguments)
        },
        a.event.special[b.name].owl = !0
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)  : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d
    }, this)))
  },
  e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0
    }, this))
  },
  e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b]
    }, this))
  },
  e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event,
    a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
    a.pageX ? (c.x = a.pageX, c.y = a.pageY)  : (c.x = a.clientX, c.y = a.clientY),
    c
  },
  e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a))
  },
  e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    }
  },
  a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
      f = d.data('owl.carousel');
      f || (f = new e(this, 'object' == typeof b && b), d.data('owl.carousel', f), a.each(['next',
      'prev',
      'to',
      'destroy',
      'refresh',
      'replace',
      'add',
      'remove'], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }),
        f.$element.on(c + '.owl.carousel.core', a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [
          ].slice.call(arguments, 1)), this.release([c]))
        }, f))
      })),
      'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c)
    })
  },
  a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b,
    this._interval = null,
    this._visible = null,
    this._handlers = {
      'initialized.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch()
      }, this)
    },
    this._core.options = a.extend({
    }, e.Defaults, this._core.options),
    this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  },
  e.prototype.watch = function () {
    this._interval || (this._visible = this._core.$element.is(':visible'), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  },
  e.prototype.refresh = function () {
    this._core.$element.is(':visible') !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass('owl-hidden', !this._visible), this._visible && this._core.invalidate('width') && this._core.refresh())
  },
  e.prototype.destroy = function () {
    var a,
    c;
    b.clearInterval(this._interval);
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) 'function' != typeof this[c] && (this[c] = null)
  },
  a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b,
    this._loaded = [
    ],
    this._handlers = {
      'initialized.owl.carousel change.owl.carousel resized.owl.carousel': a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && 'position' == b.property.name || 'initialized' == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * - 1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
          this.load(b)
        }, this); f++ < e; ) this.load(h / 2 + this._core.relative(g)),
        h && a.each(this._core.clones(this._core.relative(g)), i),
        g++
      }, this)
    },
    this._core.options = a.extend({
    }, e.Defaults, this._core.options),
    this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    lazyLoad: !1
  },
  e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
    e = d && d.find('.owl-lazy');
    !e || a.inArray(d.get(0), this._loaded) > - 1 || (e.each(a.proxy(function (c, d) {
      var e,
      f = a(d),
      g = b.devicePixelRatio > 1 && f.attr('data-src-retina') || f.attr('data-src');
      this._core.trigger('load', {
        element: f,
        url: g
      }, 'lazy'),
      f.is('img') ? f.one('load.owl.lazy', a.proxy(function () {
        f.css('opacity', 1),
        this._core.trigger('loaded', {
          element: f,
          url: g
        }, 'lazy')
      }, this)).attr('src', g)  : (e = new Image, e.onload = a.proxy(function () {
        f.css({
          'background-image': 'url("' + g + '")',
          opacity: '1'
        }),
        this._core.trigger('loaded', {
          element: f,
          url: g
        }, 'lazy')
      }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  },
  e.prototype.destroy = function () {
    var a,
    b;
    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null)
  },
  a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b,
    this._handlers = {
      'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update()
      }, this),
      'changed.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && 'position' == a.property.name && this.update()
      }, this),
      'loaded.owl.lazy': a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest('.' + this._core.settings.itemClass).index() === this._core.current() && this.update()
      }, this)
    },
    this._core.options = a.extend({
    }, e.Defaults, this._core.options),
    this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: 'owl-height'
  },
  e.prototype.update = function () {
    var b = this._core._current,
    c = b + this._core.settings.items,
    d = this._core.$stage.children().toArray().slice(b, c),
    e = [
    ],
    f = 0;
    a.each(d, function (b, c) {
      e.push(a(c).height())
    }),
    f = Math.max.apply(null, e),
    this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
  },
  e.prototype.destroy = function () {
    var a,
    b;
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null)
  },
  a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b,
    this._videos = {
    },
    this._playing = null,
    this._handlers = {
      'initialized.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.register({
          type: 'state',
          name: 'playing',
          tags: [
            'interacting'
          ]
        })
      }, this),
      'resize.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
      }, this),
      'refreshed.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.is('resizing') && this._core.$stage.find('.cloned .owl-video-frame').remove()
      }, this),
      'changed.owl.carousel': a.proxy(function (a) {
        a.namespace && 'position' === a.property.name && this._playing && this.stop()
      }, this),
      'prepared.owl.carousel': a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find('.owl-video');
          c.length && (c.css('display', 'none'), this.fetch(c, a(b.content)))
        }
      }, this)
    },
    this._core.options = a.extend({
    }, e.Defaults, this._core.options),
    this._core.$element.on(this._handlers),
    this._core.$element.on('click.owl.video', '.owl-video-play-icon', a.proxy(function (a) {
      this.play(a)
    }, this))
  };
  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  },
  e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr('data-vimeo-id') ? 'vimeo' : a.attr('data-vzaar-id') ? 'vzaar' : 'youtube'
    }(),
    d = a.attr('data-vimeo-id') || a.attr('data-youtube-id') || a.attr('data-vzaar-id'),
    e = a.attr('data-width') || this._core.settings.videoWidth,
    f = a.attr('data-height') || this._core.settings.videoHeight,
    g = a.attr('href');
    if (!g) throw new Error('Missing video URL.');
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf('youtu') > - 1) c = 'youtube';
     else if (d[3].indexOf('vimeo') > - 1) c = 'vimeo';
     else {
      if (!(d[3].indexOf('vzaar') > - 1)) throw new Error('Video URL not supported.');
      c = 'vzaar'
    }
    d = d[6],
    this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    },
    b.attr('data-video', g),
    this.thumbnail(a, this._videos[g])
  },
  e.prototype.thumbnail = function (b, c) {
    var d,
    e,
    f,
    g = c.width && c.height ? 'style="width:' + c.width + 'px;height:' + c.height + 'px;"' : '',
    h = b.find('img'),
    i = 'src',
    j = '',
    k = this._core.settings,
    l = function (a) {
      e = '<div class="owl-video-play-icon"></div>',
      d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>',
      b.after(d),
      b.after(e)
    };
    if (b.wrap('<div class="owl-video-wrapper"' + g + '></div>'), this._core.settings.lazyLoad && (i = 'data-src', j = 'owl-lazy'), h.length) return l(h.attr(i)),
    h.remove(),
    !1;
    'youtube' === c.type ? (f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg', l(f))  : 'vimeo' === c.type ? a.ajax({
      type: 'GET',
      url: '//vimeo.com/api/v2/video/' + c.id + '.json',
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function (a) {
        f = a[0].thumbnail_large,
        l(f)
      }
    })  : 'vzaar' === c.type && a.ajax({
      type: 'GET',
      url: '//vzaar.com/api/videos/' + c.id + '.json',
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function (a) {
        f = a.framegrab_url,
        l(f)
      }
    })
  },
  e.prototype.stop = function () {
    this._core.trigger('stop', null, 'video'),
    this._playing.find('.owl-video-frame').remove(),
    this._playing.removeClass('owl-video-playing'),
    this._playing = null,
    this._core.leave('playing'),
    this._core.trigger('stopped', null, 'video')
  },
  e.prototype.play = function (b) {
    var c,
    d = a(b.target),
    e = d.closest('.' + this._core.settings.itemClass),
    f = this._videos[e.attr('data-video')],
    g = f.width || '100%',
    h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter('playing'), this._core.trigger('play', null, 'video'), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), 'youtube' === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + '?autoplay=1&rel=0&v=' + f.id + '" frameborder="0" allowfullscreen></iframe>' : 'vimeo' === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : 'vzaar' === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + '</div>').insertAfter(e.find('.owl-video')), this._playing = e.addClass('owl-video-playing'))
  },
  e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass('owl-video-frame')
  },
  e.prototype.destroy = function () {
    var a,
    b;
    this._core.$element.off('click.owl.video');
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null)
  },
  a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this.core = b,
    this.core.options = a.extend({
    }, e.Defaults, this.core.options),
    this.swapping = !0,
    this.previous = d,
    this.next = d,
    this.handlers = {
      'change.owl.carousel': a.proxy(function (a) {
        a.namespace && 'position' == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
      }, this),
      'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': a.proxy(function (a) {
        a.namespace && (this.swapping = 'translated' == a.type)
      }, this),
      'translate.owl.carousel': a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    },
    this.core.$element.on(this.handlers)
  };
  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  },
  e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
      c = a.proxy(this.clear, this),
      d = this.core.$stage.children().eq(this.previous),
      e = this.core.$stage.children().eq(this.next),
      f = this.core.settings.animateIn,
      g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + 'px'
      }).addClass('animated owl-animated-out').addClass(g)), f && e.one(a.support.animation.end, c).addClass('animated owl-animated-in').addClass(f))
    }
  },
  e.prototype.clear = function (b) {
    a(b.target).css({
      left: ''
    }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
    this.core.onTransitionEnd()
  },
  e.prototype.destroy = function () {
    var a,
    b;
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null)
  },
  a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  var e = function (b) {
    this._core = b,
    this._timeout = null,
    this._paused = !1,
    this._handlers = {
      'changed.owl.carousel': a.proxy(function (a) {
        a.namespace && 'settings' === a.property.name ? this._core.settings.autoplay ? this.play()  : this.stop()  : a.namespace && 'position' === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
      }, this),
      'initialized.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play()
      }, this),
      'play.owl.autoplay': a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c)
      }, this),
      'stop.owl.autoplay': a.proxy(function (a) {
        a.namespace && this.stop()
      }, this),
      'mouseover.owl.autoplay': a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause()
      }, this),
      'mouseleave.owl.autoplay': a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.play()
      }, this),
      'touchstart.owl.core': a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause()
      }, this),
      'touchend.owl.core': a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play()
      }, this)
    },
    this._core.$element.on(this._handlers),
    this._core.options = a.extend({
    }, e.Defaults, this._core.options)
  };
  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5000,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  },
  e.prototype.play = function (a, b) {
    this._paused = !1,
    this._core.is('rotating') || (this._core.enter('rotating'), this._setAutoPlayInterval())
  },
  e.prototype._getNextTimeout = function (d, e) {
    return this._timeout && b.clearTimeout(this._timeout),
    b.setTimeout(a.proxy(function () {
      this._paused || this._core.is('busy') || this._core.is('interacting') || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
    }, this), d || this._core.settings.autoplayTimeout)
  },
  e.prototype._setAutoPlayInterval = function () {
    this._timeout = this._getNextTimeout()
  },
  e.prototype.stop = function () {
    this._core.is('rotating') && (b.clearTimeout(this._timeout), this._core.leave('rotating'))
  },
  e.prototype.pause = function () {
    this._core.is('rotating') && (this._paused = !0)
  },
  e.prototype.destroy = function () {
    var a,
    b;
    this.stop();
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null)
  },
  a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  'use strict';
  var e = function (b) {
    this._core = b,
    this._initialized = !1,
    this._pages = [
    ],
    this._controls = {
    },
    this._templates = [
    ],
    this.$element = this._core.$element,
    this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    },
    this._handlers = {
      'prepared.owl.carousel': a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>')
      }, this),
      'added.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
      }, this),
      'remove.owl.carousel': a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
      }, this),
      'changed.owl.carousel': a.proxy(function (a) {
        a.namespace && 'position' == a.property.name && this.draw()
      }, this),
      'initialized.owl.carousel': a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger('initialize', null, 'navigation'), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger('initialized', null, 'navigation'))
      }, this),
      'refreshed.owl.carousel': a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger('refresh', null, 'navigation'), this.update(), this.draw(), this._core.trigger('refreshed', null, 'navigation'))
      }, this)
    },
    this._core.options = a.extend({
    }, e.Defaults, this._core.options),
    this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navText: [
      'prev',
      'next'
    ],
    navSpeed: !1,
    navElement: 'div',
    navContainer: !1,
    navContainerClass: 'owl-nav',
    navClass: [
      'owl-prev',
      'owl-next'
    ],
    slideBy: 1,
    dotClass: 'owl-dot',
    dotsClass: 'owl-dots',
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  },
  e.prototype.initialize = function () {
    var b,
    c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer)  : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)).addClass('disabled'),
    this._controls.$previous = a('<' + c.navElement + '>').addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on('click', a.proxy(function (a) {
      this.prev(c.navSpeed)
    }, this)),
    this._controls.$next = a('<' + c.navElement + '>').addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on('click', a.proxy(function (a) {
      this.next(c.navSpeed)
    }, this)),
    c.dotsData || (this._templates = [
      a('<div>').addClass(c.dotClass).append(a('<span>')).prop('outerHTML')
    ]),
    this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer)  : a('<div>').addClass(c.dotsClass).appendTo(this.$element)).addClass('disabled'),
    this._controls.$absolute.on('click', 'div', a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index()  : a(b.target).parent().index();
      b.preventDefault(),
      this.to(d, c.dotsSpeed)
    }, this));
    for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  },
  e.prototype.destroy = function () {
    var a,
    b,
    c,
    d;
    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
    for (b in this._controls) this._controls[b].remove();
    for (d in this.overides) this._core[d] = this._overrides[d];
    for (c in Object.getOwnPropertyNames(this)) 'function' != typeof this[c] && (this[c] = null)
  },
  e.prototype.update = function () {
    var a,
    b,
    c,
    d = this._core.clones().length / 2,
    e = d + this._core.items().length,
    f = this._core.maximum(!0),
    g = this._core.settings,
    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || 'page' == g.slideBy) for (this._pages = [
    ], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0,
        ++c
      }
      b += this._core.mergers(this._core.relative(a))
    }
  },
  e.prototype.draw = function () {
    var b,
    c = this._core.settings,
    d = this._core.items().length <= c.items,
    e = this._core.relative(this._core.current()),
    f = c.loop || c.rewind;
    this._controls.$relative.toggleClass('disabled', !c.nav || d),
    c.nav && (this._controls.$previous.toggleClass('disabled', !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass('disabled', !f && e >= this._core.maximum(!0))),
    this._controls.$absolute.toggleClass('disabled', !c.dots || d),
    c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join(''))  : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))  : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find('.active').removeClass('active'), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass('active'))
  },
  e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    }
  },
  e.prototype.current = function () {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b
    }, this)).pop()
  },
  e.prototype.getPosition = function (b) {
    var c,
    d,
    e = this._core.settings;
    return 'page' == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start)  : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy),
    c
  },
  e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core) (this.getPosition(!0), b)
  },
  e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core) (this.getPosition(!1), b)
  },
  e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core) (this._pages[(b % e + e) % e].start, c))  : a.proxy(this._overrides.to, this._core) (b, c)
  },
  a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  'use strict';
  var e = function (c) {
    this._core = c,
    this._hashes = {
    },
    this.$element = this._core.$element,
    this._handlers = {
      'initialized.owl.carousel': a.proxy(function (c) {
        c.namespace && 'URLHash' === this._core.settings.startPosition && a(b).trigger('hashchange.owl.navigation')
      }, this),
      'prepared.owl.carousel': a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
          if (!c) return;
          this._hashes[c] = b.content
        }
      }, this),
      'changed.owl.carousel': a.proxy(function (c) {
        if (c.namespace && 'position' === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
          e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null
          }).join();
          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e
        }
      }, this)
    },
    this._core.options = a.extend({
    }, e.Defaults, this._core.options),
    this.$element.on(this._handlers),
    a(b).on('hashchange.owl.navigation', a.proxy(function (a) {
      var c = b.location.hash.substring(1),
      e = this._core.$stage.children(),
      f = this._hashes[c] && e.index(this._hashes[c]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
    }, this))
  };
  e.Defaults = {
    URLhashListener: !1
  },
  e.prototype.destroy = function () {
    var c,
    d;
    a(b).off('hashchange.owl.navigation');
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) 'function' != typeof this[d] && (this[d] = null)
  },
  a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
    f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function (a, b) {
      if (g[b] !== d) return e = !c || b,
      !1
    }),
    e
  }
  function f(a) {
    return e(a, !0)
  }
  var g = a('<support>').get(0).style,
  h = 'Webkit Moz O ms'.split(' '),
  i = {
    transition: {
      end: {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        transition: 'transitionend'
      }
    },
    animation: {
      end: {
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'animationend',
        OAnimation: 'oAnimationEnd',
        animation: 'animationend'
      }
    }
  },
  j = {
    csstransforms: function () {
      return !!e('transform')
    },
    csstransforms3d: function () {
      return !!e('perspective')
    },
    csstransitions: function () {
      return !!e('transition')
    },
    cssanimations: function () {
      return !!e('animation')
    }
  };
  j.csstransitions() && (a.support.transition = new String(f('transition')), a.support.transition.end = i.transition.end[a.support.transition]),
  j.cssanimations() && (a.support.animation = new String(f('animation')), a.support.animation.end = i.animation.end[a.support.animation]),
  j.csstransforms() && (a.support.transform = new String(f('transform')), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/**
 * @module       Isotope PACKAGED
 * @license      GPLv3
 * @see          http://isotope.metafizzy.co
 * @version      2.2.2
 */
!function (t) {
  function e() {
  }
  function i(t) {
    function i(e) {
      e.prototype.option || (e.prototype.option = function (e) {
        t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
      })
    }
    function n(e, i) {
      t.fn[e] = function (n) {
        if ('string' == typeof n) {
          for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
            var p = this[a],
            h = t.data(p, e);
            if (h) if (t.isFunction(h[n]) && '_' !== n.charAt(0)) {
              var f = h[n].apply(h, s);
              if (void 0 !== f) return f
            } else r('no such method \'' + n + '\' for ' + e + ' instance');
             else r('cannot call methods on ' + e + ' prior to initialization; attempted to call \'' + n + '\'')
          }
          return this
        }
        return this.each(function () {
          var o = t.data(this, e);
          o ? (o.option(n), o._init())  : (o = new i(this, n), t.data(this, e, o))
        })
      }
    }
    if (t) {
      var r = 'undefined' == typeof console ? e : function (t) {
        console.error(t)
      };
      return t.bridget = function (t, e) {
        i(e),
        n(t, e)
      },
      t.bridget
    }
  }
  var o = Array.prototype.slice;
  'function' == typeof define && define.amd ? define('jquery-bridget/jquery.bridget', [
    'jquery'
  ], i)  : i('object' == typeof exports ? require('jquery')  : t.jQuery)
}(window),
function (t) {
  function e(e) {
    var i = t.event;
    return i.target = i.target || i.srcElement || e,
    i
  }
  var i = document.documentElement,
  o = function () {
  };
  i.addEventListener ? o = function (t, e, i) {
    t.addEventListener(e, i, !1)
  }
   : i.attachEvent && (o = function (t, i, o) {
    t[i + o] = o.handleEvent ? function () {
      var i = e(t);
      o.handleEvent.call(o, i)
    }
     : function () {
      var i = e(t);
      o.call(t, i)
    },
    t.attachEvent('on' + i, t[i + o])
  });
  var n = function () {
  };
  i.removeEventListener ? n = function (t, e, i) {
    t.removeEventListener(e, i, !1)
  }
   : i.detachEvent && (n = function (t, e, i) {
    t.detachEvent('on' + e, t[e + i]);
    try {
      delete t[e + i]
    } catch (o) {
      t[e + i] = void 0
    }
  });
  var r = {
    bind: o,
    unbind: n
  };
  'function' == typeof define && define.amd ? define('eventie/eventie', r)  : 'object' == typeof exports ? module.exports = r : t.eventie = r
}(window),
function () {
  'use strict';
  function t() {
  }
  function e(t, e) {
    for (var i = t.length; i--; ) if (t[i].listener === e) return i;
    return - 1
  }
  function i(t) {
    return function () {
      return this[t].apply(this, arguments)
    }
  }
  var o = t.prototype,
  n = this,
  r = n.EventEmitter;
  o.getListeners = function (t) {
    var e,
    i,
    o = this._getEvents();
    if (t instanceof RegExp) {
      e = {
      };
      for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
    } else e = o[t] || (o[t] = [
    ]);
    return e
  },
  o.flattenListeners = function (t) {
    var e,
    i = [
    ];
    for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
    return i
  },
  o.getListenersAsObject = function (t) {
    var e,
    i = this.getListeners(t);
    return i instanceof Array && (e = {
    }, e[t] = i),
    e || i
  },
  o.addListener = function (t, i) {
    var o,
    n = this.getListenersAsObject(t),
    r = 'object' == typeof i;
    for (o in n) n.hasOwnProperty(o) && - 1 === e(n[o], i) && n[o].push(r ? i : {
      listener: i,
      once: !1
    });
    return this
  },
  o.on = i('addListener'),
  o.addOnceListener = function (t, e) {
    return this.addListener(t, {
      listener: e,
      once: !0
    })
  },
  o.once = i('addOnceListener'),
  o.defineEvent = function (t) {
    return this.getListeners(t),
    this
  },
  o.defineEvents = function (t) {
    for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
    return this
  },
  o.removeListener = function (t, i) {
    var o,
    n,
    r = this.getListenersAsObject(t);
    for (n in r) r.hasOwnProperty(n) && - 1 !== (o = e(r[n], i)) && r[n].splice(o, 1);
    return this
  },
  o.off = i('removeListener'),
  o.addListeners = function (t, e) {
    return this.manipulateListeners(!1, t, e)
  },
  o.removeListeners = function (t, e) {
    return this.manipulateListeners(!0, t, e)
  },
  o.manipulateListeners = function (t, e, i) {
    var o,
    n,
    r = t ? this.removeListener : this.addListener,
    s = t ? this.removeListeners : this.addListeners;
    if ('object' != typeof e || e instanceof RegExp) for (o = i.length; o--; ) r.call(this, e, i[o]);
     else for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ('function' == typeof n ? r.call(this, o, n)  : s.call(this, o, n));
    return this
  },
  o.removeEvent = function (t) {
    var e,
    i = typeof t,
    o = this._getEvents();
    if ('string' === i) delete o[t];
     else if (t instanceof RegExp) for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
     else delete this._events;
    return this
  },
  o.removeAllListeners = i('removeEvent'),
  o.emitEvent = function (t, e) {
    var i,
    o,
    n,
    r = this.getListenersAsObject(t);
    for (n in r) if (r.hasOwnProperty(n)) for (o = r[n].length; o--; ) !0 === (i = r[n][o]).once && this.removeListener(t, i.listener),
    i.listener.apply(this, e || [
    ]) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
    return this
  },
  o.trigger = i('emitEvent'),
  o.emit = function (t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t, e)
  },
  o.setOnceReturnValue = function (t) {
    return this._onceReturnValue = t,
    this
  },
  o._getOnceReturnValue = function () {
    return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue
  },
  o._getEvents = function () {
    return this._events || (this._events = {
    })
  },
  t.noConflict = function () {
    return n.EventEmitter = r,
    t
  },
  'function' == typeof define && define.amd ? define('eventEmitter/EventEmitter', [
  ], function () {
    return t
  })  : 'object' == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
}.call(this),
function (t) {
  function e(t) {
    if (t) {
      if ('string' == typeof o[t]) return t;
      t = t.charAt(0).toUpperCase() + t.slice(1);
      for (var e, n = 0, r = i.length; r > n; n++) if (e = i[n] + t, 'string' == typeof o[e]) return e
    }
  }
  var i = 'Webkit Moz ms Ms O'.split(' '),
  o = document.documentElement.style;
  'function' == typeof define && define.amd ? define('get-style-property/get-style-property', [
  ], function () {
    return e
  })  : 'object' == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function (t, e) {
  function i(t) {
    var e = parseFloat(t);
    return - 1 === t.indexOf('%') && !isNaN(e) && e
  }
  function o() {
    for (var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, e = 0, i = s.length; i > e; e++) t[s[e]] = 0;
    return t
  }
  function n(e) {
    function n() {
      if (!f) {
        f = !0;
        var o = t.getComputedStyle;
        if (u = function () {
          var t = o ? function (t) {
            return o(t, null)
          }
           : function (t) {
            return t.currentStyle
          };
          return function (e) {
            var i = t(e);
            return i || r('Style returned ' + i + '. Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1'),
            i
          }
        }(), p = e('boxSizing')) {
          var n = document.createElement('div');
          n.style.width = '200px',
          n.style.padding = '1px 2px 3px 4px',
          n.style.borderStyle = 'solid',
          n.style.borderWidth = '1px 2px 3px 4px',
          n.style[p] = 'border-box';
          var s = document.body || document.documentElement;
          s.appendChild(n);
          var a = u(n);
          h = 200 === i(a.width),
          s.removeChild(n)
        }
      }
    }
    function a(e, i) {
      if (t.getComputedStyle || - 1 === i.indexOf('%')) return i;
      var o = e.style,
      n = o.left,
      r = e.runtimeStyle,
      s = r && r.left;
      return s && (r.left = e.currentStyle.left),
      o.left = i,
      i = o.pixelLeft,
      o.left = n,
      s && (r.left = s),
      i
    }
    var u,
    p,
    h,
    f = !1;
    return function (t) {
      if (n(), 'string' == typeof t && (t = document.querySelector(t)), t && 'object' == typeof t && t.nodeType) {
        var e = u(t);
        if ('none' === e.display) return o();
        var r = {
        };
        r.width = t.offsetWidth,
        r.height = t.offsetHeight;
        for (var f = r.isBorderBox = !(!p || !e[p] || 'border-box' !== e[p]), l = 0, d = s.length; d > l; l++) {
          var c = s[l],
          y = e[c];
          y = a(t, y);
          var m = parseFloat(y);
          r[c] = isNaN(m) ? 0 : m
        }
        var g = r.paddingLeft + r.paddingRight,
        v = r.paddingTop + r.paddingBottom,
        _ = r.marginLeft + r.marginRight,
        I = r.marginTop + r.marginBottom,
        z = r.borderLeftWidth + r.borderRightWidth,
        L = r.borderTopWidth + r.borderBottomWidth,
        x = f && h,
        E = i(e.width);
        !1 !== E && (r.width = E + (x ? 0 : g + z));
        var b = i(e.height);
        return !1 !== b && (r.height = b + (x ? 0 : v + L)),
        r.innerWidth = r.width - (g + z),
        r.innerHeight = r.height - (v + L),
        r.outerWidth = r.width + _,
        r.outerHeight = r.height + I,
        r
      }
    }
  }
  var r = 'undefined' == typeof console ? function () {
  }
   : function (t) {
    console.error(t)
  },
  s = [
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderBottomWidth'
  ];
  'function' == typeof define && define.amd ? define('get-size/get-size', [
    'get-style-property/get-style-property'
  ], n)  : 'object' == typeof exports ? module.exports = n(require('desandro-get-style-property'))  : t.getSize = n(t.getStyleProperty)
}(window),
function (t) {
  function e(t) {
    'function' == typeof t && (e.isReady ? t()  : s.push(t))
  }
  function i(t) {
    var i = 'readystatechange' === t.type && 'complete' !== r.readyState;
    e.isReady || i || o()
  }
  function o() {
    e.isReady = !0;
    for (var t = 0, i = s.length; i > t; t++) (0, s[t]) ()
  }
  function n(n) {
    return 'complete' === r.readyState ? o()  : (n.bind(r, 'DOMContentLoaded', i), n.bind(r, 'readystatechange', i), n.bind(t, 'load', i)),
    e
  }
  var r = t.document,
  s = [
  ];
  e.isReady = !1,
  'function' == typeof define && define.amd ? define('doc-ready/doc-ready', [
    'eventie/eventie'
  ], n)  : 'object' == typeof exports ? module.exports = n(require('eventie'))  : t.docReady = n(t.eventie)
}(window),
function (t) {
  'use strict';
  function e(t, e) {
    return t[n](e)
  }
  function i(t) {
    t.parentNode || document.createDocumentFragment().appendChild(t)
  }
  var o,
  n = function () {
    if (t.matches) return 'matches';
    if (t.matchesSelector) return 'matchesSelector';
    for (var e = [
      'webkit',
      'moz',
      'ms',
      'o'
    ], i = 0, o = e.length; o > i; i++) {
      var n = e[i] + 'MatchesSelector';
      if (t[n]) return n
    }
  }();
  if (n) {
    var r = e(document.createElement('div'), 'div');
    o = r ? e : function (t, o) {
      return i(t),
      e(t, o)
    }
  } else o = function (t, e) {
    i(t);
    for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++) if (o[n] === t) return !0;
    return !1
  };
  'function' == typeof define && define.amd ? define('matches-selector/matches-selector', [
  ], function () {
    return o
  })  : 'object' == typeof exports ? module.exports = o : window.matchesSelector = o
}(Element.prototype),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('fizzy-ui-utils/utils', [
    'doc-ready/doc-ready',
    'matches-selector/matches-selector'
  ], function (i, o) {
    return e(t, i, o)
  })  : 'object' == typeof exports ? module.exports = e(t, require('doc-ready'), require('desandro-matches-selector'))  : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function (t, e, i) {
  var o = {
  };
  o.extend = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t
  },
  o.modulo = function (t, e) {
    return (t % e + e) % e
  };
  var n = Object.prototype.toString;
  o.isArray = function (t) {
    return '[object Array]' == n.call(t)
  },
  o.makeArray = function (t) {
    var e = [
    ];
    if (o.isArray(t)) e = t;
     else if (t && 'number' == typeof t.length) for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
     else e.push(t);
    return e
  },
  o.indexOf = Array.prototype.indexOf ? function (t, e) {
    return t.indexOf(e)
  }
   : function (t, e) {
    for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
    return - 1
  },
  o.removeFrom = function (t, e) {
    var i = o.indexOf(t, e);
    - 1 != i && t.splice(i, 1)
  },
  o.isElement = 'function' == typeof HTMLElement || 'object' == typeof HTMLElement ? function (t) {
    return t instanceof HTMLElement
  }
   : function (t) {
    return t && 'object' == typeof t && 1 == t.nodeType && 'string' == typeof t.nodeName
  },
  o.setText = function () {
    var t;
    return function (e, i) {
      e[t = t || (void 0 !== document.documentElement.textContent ? 'textContent' : 'innerText')] = i
    }
  }(),
  o.getParent = function (t, e) {
    for (; t != document.body; ) if (t = t.parentNode, i(t, e)) return t
  },
  o.getQueryElement = function (t) {
    return 'string' == typeof t ? document.querySelector(t)  : t
  },
  o.handleEvent = function (t) {
    var e = 'on' + t.type;
    this[e] && this[e](t)
  },
  o.filterFindElements = function (t, e) {
    for (var n = [
    ], r = 0, s = (t = o.makeArray(t)).length; s > r; r++) {
      var a = t[r];
      if (o.isElement(a)) if (e) {
        i(a, e) && n.push(a);
        for (var u = a.querySelectorAll(e), p = 0, h = u.length; h > p; p++) n.push(u[p])
      } else n.push(a)
    }
    return n
  },
  o.debounceMethod = function (t, e, i) {
    var o = t.prototype[e],
    n = e + 'Timeout';
    t.prototype[e] = function () {
      var t = this[n];
      t && clearTimeout(t);
      var e = arguments,
      r = this;
      this[n] = setTimeout(function () {
        o.apply(r, e),
        delete r[n]
      }, i || 100)
    }
  },
  o.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + '-' + i
    }).toLowerCase()
  };
  var r = t.console;
  return o.htmlInit = function (i, n) {
    e(function () {
      for (var e = o.toDashed(n), s = document.querySelectorAll('.js-' + e), a = 'data-' + e + '-options', u = 0, p = s.length; p > u; u++) {
        var h,
        f = s[u],
        l = f.getAttribute(a);
        try {
          h = l && JSON.parse(l)
        } catch (t) {
          r && r.error('Error parsing ' + a + ' on ' + f.nodeName.toLowerCase() + (f.id ? '#' + f.id : '') + ': ' + t);
          continue
        }
        var d = new i(f, h),
        c = t.jQuery;
        c && c.data(f, n, d)
      }
    })
  },
  o
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('outlayer/item', [
    'eventEmitter/EventEmitter',
    'get-size/get-size',
    'get-style-property/get-style-property',
    'fizzy-ui-utils/utils'
  ], function (i, o, n, r) {
    return e(t, i, o, n, r)
  })  : 'object' == typeof exports ? module.exports = e(t, require('wolfy87-eventemitter'), require('get-size'), require('desandro-get-style-property'), require('fizzy-ui-utils'))  : (t.Outlayer = {
  }, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function (t, e, i, o, n) {
  'use strict';
  function r(t) {
    for (var e in t) return !1;
    return null,
    !0
  }
  function s(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }
  var a = t.getComputedStyle,
  u = a ? function (t) {
    return a(t, null)
  }
   : function (t) {
    return t.currentStyle
  },
  p = o('transition'),
  h = o('transform'),
  f = p && h,
  l = !!o('perspective'),
  d = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'otransitionend',
    transition: 'transitionend'
  }
  [
    p
  ],
  c = [
    'transform',
    'transition',
    'transitionDuration',
    'transitionProperty'
  ],
  y = function () {
    for (var t = {
    }, e = 0, i = c.length; i > e; e++) {
      var n = c[e],
      r = o(n);
      r && r !== n && (t[n] = r)
    }
    return t
  }();
  n.extend(s.prototype, e.prototype),
  s.prototype._create = function () {
    this._transn = {
      ingProperties: {
      },
      clean: {
      },
      onEnd: {
      }
    },
    this.css({
      position: 'absolute'
    })
  },
  s.prototype.handleEvent = function (t) {
    var e = 'on' + t.type;
    this[e] && this[e](t)
  },
  s.prototype.getSize = function () {
    this.size = i(this.element)
  },
  s.prototype.css = function (t) {
    var e = this.element.style;
    for (var i in t) e[y[i] || i] = t[i]
  },
  s.prototype.getPosition = function () {
    var t = u(this.element),
    e = this.layout.options,
    i = e.isOriginLeft,
    o = e.isOriginTop,
    n = t[i ? 'left' : 'right'],
    r = t[o ? 'top' : 'bottom'],
    s = this.layout.size,
    a = - 1 != n.indexOf('%') ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
    p = - 1 != r.indexOf('%') ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
    a = isNaN(a) ? 0 : a,
    p = isNaN(p) ? 0 : p,
    a -= i ? s.paddingLeft : s.paddingRight,
    p -= o ? s.paddingTop : s.paddingBottom,
    this.position.x = a,
    this.position.y = p
  },
  s.prototype.layoutPosition = function () {
    var t = this.layout.size,
    e = this.layout.options,
    i = {
    },
    o = e.isOriginLeft ? 'paddingLeft' : 'paddingRight',
    n = e.isOriginLeft ? 'left' : 'right',
    r = e.isOriginLeft ? 'right' : 'left',
    s = this.position.x + t[o];
    i[n] = this.getXValue(s),
    i[r] = '';
    var a = e.isOriginTop ? 'paddingTop' : 'paddingBottom',
    u = e.isOriginTop ? 'top' : 'bottom',
    p = e.isOriginTop ? 'bottom' : 'top',
    h = this.position.y + t[a];
    i[u] = this.getYValue(h),
    i[p] = '',
    this.css(i),
    this.emitEvent('layout', [
      this
    ])
  },
  s.prototype.getXValue = function (t) {
    var e = this.layout.options;
    return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + '%' : t + 'px'
  },
  s.prototype.getYValue = function (t) {
    var e = this.layout.options;
    return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + '%' : t + 'px'
  },
  s.prototype._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
    o = this.position.y,
    n = parseInt(t, 10),
    r = parseInt(e, 10),
    s = n === this.position.x && r === this.position.y;
    if (this.setPosition(t, e), !s || this.isTransitioning) {
      var a = t - i,
      u = e - o,
      p = {
      };
      p.transform = this.getTranslate(a, u),
      this.transition({
        to: p,
        onTransitionEnd: {
          transform: this.layoutPosition
        },
        isCleaning: !0
      })
    } else this.layoutPosition()
  },
  s.prototype.getTranslate = function (t, e) {
    var i = this.layout.options;
    return t = i.isOriginLeft ? t : - t,
    e = i.isOriginTop ? e : - e,
    l ? 'translate3d(' + t + 'px, ' + e + 'px, 0)' : 'translate(' + t + 'px, ' + e + 'px)'
  },
  s.prototype.goTo = function (t, e) {
    this.setPosition(t, e),
    this.layoutPosition()
  },
  s.prototype.moveTo = f ? s.prototype._transitionTo : s.prototype.goTo,
  s.prototype.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10),
    this.position.y = parseInt(e, 10)
  },
  s.prototype._nonTransition = function (t) {
    this.css(t.to),
    t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  },
  s.prototype._transition = function (t) {
    if (parseFloat(this.layout.options.transitionDuration)) {
      var e = this._transn;
      for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
      for (i in t.to) e.ingProperties[i] = !0,
      t.isCleaning && (e.clean[i] = !0);
      if (t.from) {
        this.css(t.from);
        this.element.offsetHeight;
        null
      }
      this.enableTransition(t.to),
      this.css(t.to),
      this.isTransitioning = !0
    } else this._nonTransition(t)
  };
  var m = 'opacity,' + (y.transform || 'transform').replace(/([A-Z])/g, function (t) {
    return '-' + t.toLowerCase()
  });
  s.prototype.enableTransition = function () {
    this.isTransitioning || (this.css({
      transitionProperty: m,
      transitionDuration: this.layout.options.transitionDuration
    }), this.element.addEventListener(d, this, !1))
  },
  s.prototype.transition = s.prototype[p ? '_transition' : '_nonTransition'],
  s.prototype.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t)
  },
  s.prototype.onotransitionend = function (t) {
    this.ontransitionend(t)
  };
  var g = {
    '-webkit-transform': 'transform',
    '-moz-transform': 'transform',
    '-o-transform': 'transform'
  };
  s.prototype.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
      i = g[t.propertyName] || t.propertyName;
      delete e.ingProperties[i],
      r(e.ingProperties) && this.disableTransition(),
      i in e.clean && (this.element.style[t.propertyName] = '', delete e.clean[i]),
      i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),
      this.emitEvent('transitionEnd', [
        this
      ])
    }
  },
  s.prototype.disableTransition = function () {
    this.removeTransitionStyles(),
    this.element.removeEventListener(d, this, !1),
    this.isTransitioning = !1
  },
  s.prototype._removeStyles = function (t) {
    var e = {
    };
    for (var i in t) e[i] = '';
    this.css(e)
  };
  var v = {
    transitionProperty: '',
    transitionDuration: ''
  };
  return s.prototype.removeTransitionStyles = function () {
    this.css(v)
  },
  s.prototype.removeElem = function () {
    this.element.parentNode.removeChild(this.element),
    this.css({
      display: ''
    }),
    this.emitEvent('remove', [
      this
    ])
  },
  s.prototype.remove = function () {
    if (p && parseFloat(this.layout.options.transitionDuration)) {
      var t = this;
      this.once('transitionEnd', function () {
        t.removeElem()
      }),
      this.hide()
    } else this.removeElem()
  },
  s.prototype.reveal = function () {
    delete this.isHidden,
    this.css({
      display: ''
    });
    var t = this.layout.options,
    e = {
    };
    e[this.getHideRevealTransitionEndProperty('visibleStyle')] = this.onRevealTransitionEnd,
    this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  },
  s.prototype.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent('reveal')
  },
  s.prototype.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return 'opacity';
    for (var i in e) return i
  },
  s.prototype.hide = function () {
    this.isHidden = !0,
    this.css({
      display: ''
    });
    var t = this.layout.options,
    e = {
    };
    e[this.getHideRevealTransitionEndProperty('hiddenStyle')] = this.onHideTransitionEnd,
    this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  },
  s.prototype.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: 'none'
    }), this.emitEvent('hide'))
  },
  s.prototype.destroy = function () {
    this.css({
      position: '',
      left: '',
      right: '',
      top: '',
      bottom: '',
      transition: '',
      transform: ''
    })
  },
  s
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('outlayer/outlayer', [
    'eventie/eventie',
    'eventEmitter/EventEmitter',
    'get-size/get-size',
    'fizzy-ui-utils/utils',
    './item'
  ], function (i, o, n, r, s) {
    return e(t, i, o, n, r, s)
  })  : 'object' == typeof exports ? module.exports = e(t, require('eventie'), require('wolfy87-eventemitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'))  : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n, r) {
  'use strict';
  function s(t, e) {
    var i = n.getQueryElement(t);
    if (i) {
      this.element = i,
      u && (this.$element = u(this.element)),
      this.options = n.extend({
      }, this.constructor.defaults),
      this.option(e);
      var o = ++h;
      this.element.outlayerGUID = o,
      f[o] = this,
      this._create(),
      this.options.isInitLayout && this.layout()
    } else a && a.error('Bad element for ' + this.constructor.namespace + ': ' + (i || t))
  }
  var a = t.console,
  u = t.jQuery,
  p = function () {
  },
  h = 0,
  f = {
  };
  return s.namespace = 'outlayer',
  s.Item = r,
  s.defaults = {
    containerStyle: {
      position: 'relative'
    },
    isInitLayout: !0,
    isOriginLeft: !0,
    isOriginTop: !0,
    isResizeBound: !0,
    isResizingContainer: !0,
    transitionDuration: '0.4s',
    hiddenStyle: {
      opacity: 0,
      transform: 'scale(0.001)'
    },
    visibleStyle: {
      opacity: 1,
      transform: 'scale(1)'
    }
  },
  n.extend(s.prototype, i.prototype),
  s.prototype.option = function (t) {
    n.extend(this.options, t)
  },
  s.prototype._create = function () {
    this.reloadItems(),
    this.stamps = [
    ],
    this.stamp(this.options.stamp),
    n.extend(this.element.style, this.options.containerStyle),
    this.options.isResizeBound && this.bindResize()
  },
  s.prototype.reloadItems = function () {
    this.items = this._itemize(this.element.children)
  },
  s.prototype._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [
    ], n = 0, r = e.length; r > n; n++) {
      var s = new i(e[n], this);
      o.push(s)
    }
    return o
  },
  s.prototype._filterFindItemElements = function (t) {
    return n.filterFindElements(t, this.options.itemSelector)
  },
  s.prototype.getItemElements = function () {
    for (var t = [
    ], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
    return t
  },
  s.prototype.layout = function () {
    this._resetLayout(),
    this._manageStamps();
    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, t),
    this._isLayoutInited = !0
  },
  s.prototype._init = s.prototype.layout,
  s.prototype._resetLayout = function () {
    this.getSize()
  },
  s.prototype.getSize = function () {
    this.size = o(this.element)
  },
  s.prototype._getMeasurement = function (t, e) {
    var i,
    r = this.options[t];
    r ? ('string' == typeof r ? i = this.element.querySelector(r)  : n.isElement(r) && (i = r), this[t] = i ? o(i) [e] : r)  : this[t] = 0
  },
  s.prototype.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t),
    this._layoutItems(t, e),
    this._postLayout()
  },
  s.prototype._getItemsForLayout = function (t) {
    for (var e = [
    ], i = 0, o = t.length; o > i; i++) {
      var n = t[i];
      n.isIgnored || e.push(n)
    }
    return e
  },
  s.prototype._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems('layout', t), t && t.length) {
      for (var i = [
      ], o = 0, n = t.length; n > o; o++) {
        var r = t[o],
        s = this._getItemLayoutPosition(r);
        s.item = r,
        s.isInstant = e || r.isLayoutInstant,
        i.push(s)
      }
      this._processLayoutQueue(i)
    }
  },
  s.prototype._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    }
  },
  s.prototype._processLayoutQueue = function (t) {
    for (var e = 0, i = t.length; i > e; e++) {
      var o = t[e];
      this._positionItem(o.item, o.x, o.y, o.isInstant)
    }
  },
  s.prototype._positionItem = function (t, e, i, o) {
    o ? t.goTo(e, i)  : t.moveTo(e, i)
  },
  s.prototype._postLayout = function () {
    this.resizeContainer()
  },
  s.prototype.resizeContainer = function () {
    if (this.options.isResizingContainer) {
      var t = this._getContainerSize();
      t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
    }
  },
  s.prototype._getContainerSize = p,
  s.prototype._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
      t = Math.max(t, 0),
      this.element.style[e ? 'width' : 'height'] = t + 'px'
    }
  },
  s.prototype._emitCompleteOnItems = function (t, e) {
    function i() {
      o.dispatchEvent(t + 'Complete', null, [
        e
      ])
    }
    var o = this,
    n = e.length;
    if (e && n) for (var r = 0, s = 0, a = e.length; a > s; s++) e[s].once(t, function () {
      ++r === n && i()
    });
     else i()
  },
  s.prototype.dispatchEvent = function (t, e, i) {
    var o = e ? [
      e
    ].concat(i)  : i;
    if (this.emitEvent(t, o), u) if (this.$element = this.$element || u(this.element), e) {
      var n = u.Event(e);
      n.type = t,
      this.$element.trigger(n, i)
    } else this.$element.trigger(t, i)
  },
  s.prototype.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  },
  s.prototype.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  },
  s.prototype.stamp = function (t) {
    if (t = this._find(t)) {
      this.stamps = this.stamps.concat(t);
      for (var e = 0, i = t.length; i > e; e++) {
        var o = t[e];
        this.ignore(o)
      }
    }
  },
  s.prototype.unstamp = function (t) {
    if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
      var o = t[e];
      n.removeFrom(this.stamps, o),
      this.unignore(o)
    }
  },
  s.prototype._find = function (t) {
    return t ? ('string' == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t))  : void 0
  },
  s.prototype._manageStamps = function () {
    if (this.stamps && this.stamps.length) {
      this._getBoundingRect();
      for (var t = 0, e = this.stamps.length; e > t; t++) {
        var i = this.stamps[t];
        this._manageStamp(i)
      }
    }
  },
  s.prototype._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
    e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  },
  s.prototype._manageStamp = p,
  s.prototype._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
    i = this._boundingRect,
    n = o(t);
    return {
      left: e.left - i.left - n.marginLeft,
      top: e.top - i.top - n.marginTop,
      right: i.right - e.right - n.marginRight,
      bottom: i.bottom - e.bottom - n.marginBottom
    }
  },
  s.prototype.handleEvent = function (t) {
    var e = 'on' + t.type;
    this[e] && this[e](t)
  },
  s.prototype.bindResize = function () {
    this.isResizeBound || (e.bind(t, 'resize', this), this.isResizeBound = !0)
  },
  s.prototype.unbindResize = function () {
    this.isResizeBound && e.unbind(t, 'resize', this),
    this.isResizeBound = !1
  },
  s.prototype.onresize = function () {
    this.resizeTimeout && clearTimeout(this.resizeTimeout);
    var t = this;
    this.resizeTimeout = setTimeout(function () {
      t.resize(),
      delete t.resizeTimeout
    }, 100)
  },
  s.prototype.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  },
  s.prototype.needsResizeLayout = function () {
    var t = o(this.element);
    return this.size && t && t.innerWidth !== this.size.innerWidth
  },
  s.prototype.addItems = function (t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)),
    e
  },
  s.prototype.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  },
  s.prototype.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i),
      this._resetLayout(),
      this._manageStamps(),
      this.layoutItems(e, !0),
      this.reveal(e),
      this.layoutItems(i)
    }
  },
  s.prototype.reveal = function (t) {
    this._emitCompleteOnItems('reveal', t);
    for (var e = t && t.length, i = 0; e && e > i; i++) t[i].reveal()
  },
  s.prototype.hide = function (t) {
    this._emitCompleteOnItems('hide', t);
    for (var e = t && t.length, i = 0; e && e > i; i++) t[i].hide()
  },
  s.prototype.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e)
  },
  s.prototype.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e)
  },
  s.prototype.getItem = function (t) {
    for (var e = 0, i = this.items.length; i > e; e++) {
      var o = this.items[e];
      if (o.element === t) return o
    }
  },
  s.prototype.getItems = function (t) {
    for (var e = [
    ], i = 0, o = (t = n.makeArray(t)).length; o > i; i++) {
      var r = t[i],
      s = this.getItem(r);
      s && e.push(s)
    }
    return e
  },
  s.prototype.remove = function (t) {
    var e = this.getItems(t);
    if (this._emitCompleteOnItems('remove', e), e && e.length) for (var i = 0, o = e.length; o > i; i++) {
      var r = e[i];
      r.remove(),
      n.removeFrom(this.items, r)
    }
  },
  s.prototype.destroy = function () {
    var t = this.element.style;
    t.height = '',
    t.position = '',
    t.width = '';
    for (var e = 0, i = this.items.length; i > e; e++) this.items[e].destroy();
    this.unbindResize();
    var o = this.element.outlayerGUID;
    delete f[o],
    delete this.element.outlayerGUID,
    u && u.removeData(this.element, this.constructor.namespace)
  },
  s.data = function (t) {
    var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
    return e && f[e]
  },
  s.create = function (t, e) {
    function i() {
      s.apply(this, arguments)
    }
    return Object.create ? i.prototype = Object.create(s.prototype)  : n.extend(i.prototype, s.prototype),
    i.prototype.constructor = i,
    i.defaults = n.extend({
    }, s.defaults),
    n.extend(i.defaults, e),
    i.prototype.settings = {
    },
    i.namespace = t,
    i.data = s.data,
    i.Item = function () {
      r.apply(this, arguments)
    },
    i.Item.prototype = new r,
    n.htmlInit(i, t),
    u && u.bridget && u.bridget(t, i),
    i
  },
  s.Item = r,
  s
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('isotope/js/item', [
    'outlayer/outlayer'
  ], e)  : 'object' == typeof exports ? module.exports = e(require('outlayer'))  : (t.Isotope = t.Isotope || {
  }, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
  'use strict';
  function e() {
    t.Item.apply(this, arguments)
  }(e.prototype = new t.Item)._create = function () {
    this.id = this.layout.itemGUID++,
    t.Item.prototype._create.call(this),
    this.sortData = {
    }
  },
  e.prototype.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id,
      this.sortData['original-order'] = this.id,
      this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
      e = this.layout._sorters;
      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this)
      }
    }
  };
  var i = e.prototype.destroy;
  return e.prototype.destroy = function () {
    i.apply(this, arguments),
    this.css({
      display: ''
    })
  },
  e
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('isotope/js/layout-mode', [
    'get-size/get-size',
    'outlayer/outlayer'
  ], e)  : 'object' == typeof exports ? module.exports = e(require('get-size'), require('outlayer'))  : (t.Isotope = t.Isotope || {
  }, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
  'use strict';
  function i(t) {
    this.isotope = t,
    t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }
  return function () {
    for (var t = [
      '_resetLayout',
      '_getItemLayoutPosition',
      '_manageStamp',
      '_getContainerSize',
      '_getElementOffset',
      'needsResizeLayout'
    ], o = 0, n = t.length; n > o; o++) {
      var r = t[o];
      i.prototype[r] = function (t) {
        return function () {
          return e.prototype[t].apply(this.isotope, arguments)
        }
      }(r)
    }
  }(),
  i.prototype.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element);
    return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
  },
  i.prototype._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments)
  },
  i.prototype.getColumnWidth = function () {
    this.getSegmentSize('column', 'Width')
  },
  i.prototype.getRowHeight = function () {
    this.getSegmentSize('row', 'Height')
  },
  i.prototype.getSegmentSize = function (t, e) {
    var i = t + e,
    o = 'outer' + e;
    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size['inner' + e]
    }
  },
  i.prototype.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  },
  i.prototype.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments)
  },
  i.prototype.getSize = function () {
    this.isotope.getSize(),
    this.size = this.isotope.size
  },
  i.modes = {
  },
  i.create = function (t, e) {
    function o() {
      i.apply(this, arguments)
    }
    return o.prototype = new i,
    e && (o.options = e),
    o.prototype.namespace = t,
    i.modes[t] = o,
    o
  },
  i
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('masonry/masonry', [
    'outlayer/outlayer',
    'get-size/get-size',
    'fizzy-ui-utils/utils'
  ], e)  : 'object' == typeof exports ? module.exports = e(require('outlayer'), require('get-size'), require('fizzy-ui-utils'))  : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function (t, e, i) {
  var o = t.create('masonry');
  return o.prototype._resetLayout = function () {
    this.getSize(),
    this._getMeasurement('columnWidth', 'outerWidth'),
    this._getMeasurement('gutter', 'outerWidth'),
    this.measureColumns();
    var t = this.cols;
    for (this.colYs = [
    ]; t--; ) this.colYs.push(0);
    this.maxY = 0
  },
  o.prototype.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
      i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var o = this.columnWidth += this.gutter,
    n = this.containerWidth + this.gutter,
    r = n / o,
    s = o - n % o,
    a = s && 1 > s ? 'round' : 'floor';
    r = Math[a](r),
    this.cols = Math.max(r, 1)
  },
  o.prototype.getContainerWidth = function () {
    var t = this.options.isFitWidth ? this.element.parentNode : this.element,
    i = e(t);
    this.containerWidth = i && i.innerWidth
  },
  o.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
    o = e && 1 > e ? 'round' : 'ceil',
    n = Math[o](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i.indexOf(r, s), u = {
      x: this.columnWidth * a,
      y: s
    }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
    return u
  },
  o.prototype._getColGroup = function (t) {
    if (2 > t) return this.colYs;
    for (var e = [
    ], i = this.cols + 1 - t, o = 0; i > o; o++) {
      var n = this.colYs.slice(o, o + t);
      e[o] = Math.max.apply(Math, n)
    }
    return e
  },
  o.prototype._manageStamp = function (t) {
    var i = e(t),
    o = this._getElementOffset(t),
    n = this.options.isOriginLeft ? o.left : o.right,
    r = n + i.outerWidth,
    s = Math.floor(n / this.columnWidth);
    s = Math.max(0, s);
    var a = Math.floor(r / this.columnWidth);
    a -= r % this.columnWidth ? 0 : 1,
    a = Math.min(this.cols - 1, a);
    for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
  },
  o.prototype._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
    t
  },
  o.prototype._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  },
  o.prototype.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(),
    t !== this.containerWidth
  },
  o
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('isotope/js/layout-modes/masonry', [
    '../layout-mode',
    'masonry/masonry'
  ], e)  : 'object' == typeof exports ? module.exports = e(require('../layout-mode'), require('masonry-layout'))  : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
  'use strict';
  var i = t.create('masonry'),
  o = i.prototype._getElementOffset,
  n = i.prototype.layout,
  r = i.prototype._getMeasurement;
  (function (t, e) {
    for (var i in e) t[i] = e[i]
  }) (i.prototype, e.prototype),
  i.prototype._getElementOffset = o,
  i.prototype.layout = n,
  i.prototype._getMeasurement = r;
  var s = i.prototype.measureColumns;
  i.prototype.measureColumns = function () {
    this.items = this.isotope.filteredItems,
    s.call(this)
  };
  var a = i.prototype._manageStamp;
  return i.prototype._manageStamp = function () {
    this.options.isOriginLeft = this.isotope.options.isOriginLeft,
    this.options.isOriginTop = this.isotope.options.isOriginTop,
    a.apply(this, arguments)
  },
  i
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('isotope/js/layout-modes/fit-rows', [
    '../layout-mode'
  ], e)  : 'object' == typeof exports ? module.exports = e(require('../layout-mode'))  : e(t.Isotope.LayoutMode)
}(window, function (t) {
  'use strict';
  var e = t.create('fitRows');
  return e.prototype._resetLayout = function () {
    this.x = 0,
    this.y = 0,
    this.maxY = 0,
    this._getMeasurement('gutter', 'outerWidth')
  },
  e.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
    i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
    this.x += e,
    o
  },
  e.prototype._getContainerSize = function () {
    return {
      height: this.maxY
    }
  },
  e
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define('isotope/js/layout-modes/vertical', [
    '../layout-mode'
  ], e)  : 'object' == typeof exports ? module.exports = e(require('../layout-mode'))  : e(t.Isotope.LayoutMode)
}(window, function (t) {
  'use strict';
  var e = t.create('vertical', {
    horizontalAlignment: 0
  });
  return e.prototype._resetLayout = function () {
    this.y = 0
  },
  e.prototype._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
    i = this.y;
    return this.y += t.size.outerHeight,
    {
      x: e,
      y: i
    }
  },
  e.prototype._getContainerSize = function () {
    return {
      height: this.y
    }
  },
  e
}),
function (t, e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['outlayer/outlayer',
  'get-size/get-size',
  'matches-selector/matches-selector',
  'fizzy-ui-utils/utils',
  'isotope/js/item',
  'isotope/js/layout-mode',
  'isotope/js/layout-modes/masonry',
  'isotope/js/layout-modes/fit-rows',
  'isotope/js/layout-modes/vertical'], function (i, o, n, r, s, a) {
    return e(t, i, o, n, r, s, a)
  })  : 'object' == typeof exports ? module.exports = e(t, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('./item'), require('./layout-mode'), require('./layout-modes/masonry'), require('./layout-modes/fit-rows'), require('./layout-modes/vertical'))  : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, r, s) {
  function a(t, e) {
    return function (i, o) {
      for (var n = 0, r = t.length; r > n; n++) {
        var s = t[n],
        a = i.sortData[s],
        u = o.sortData[s];
        if (a > u || u > a) {
          var p = (void 0 !== e[s] ? e[s] : e) ? 1 : - 1;
          return (a > u ? 1 : - 1) * p
        }
      }
      return 0
    }
  }
  var u = t.jQuery,
  p = String.prototype.trim ? function (t) {
    return t.trim()
  }
   : function (t) {
    return t.replace(/^\s+|\s+$/g, '')
  },
  h = document.documentElement.textContent ? function (t) {
    return t.textContent
  }
   : function (t) {
    return t.innerText
  },
  f = e.create('isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: !0,
    sortAscending: !0
  });
  f.Item = r,
  f.LayoutMode = s,
  f.prototype._create = function () {
    this.itemGUID = 0,
    this._sorters = {
    },
    this._getSorters(),
    e.prototype._create.call(this),
    this.modes = {
    },
    this.filteredItems = this.items,
    this.sortHistory = [
      'original-order'
    ];
    for (var t in s.modes) this._initLayoutMode(t)
  },
  f.prototype.reloadItems = function () {
    this.itemGUID = 0,
    e.prototype.reloadItems.call(this)
  },
  f.prototype._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0, o = t.length; o > i; i++) t[i].id = this.itemGUID++;
    return this._updateItemsSortData(t),
    t
  },
  f.prototype._initLayoutMode = function (t) {
    var e = s.modes[t],
    i = this.options[t] || {
    };
    this.options[t] = e.options ? n.extend(e.options, i)  : i,
    this.modes[t] = new e(this)
  },
  f.prototype.layout = function () {
    return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange()  : void this._layout()
  },
  f.prototype._layout = function () {
    var t = this._getIsInstant();
    this._resetLayout(),
    this._manageStamps(),
    this.layoutItems(this.filteredItems, t),
    this._isLayoutInited = !0
  },
  f.prototype.arrange = function (t) {
    function e() {
      o.reveal(i.needReveal),
      o.hide(i.needHide)
    }
    this.option(t),
    this._getIsInstant();
    var i = this._filter(this.items);
    this.filteredItems = i.matches;
    var o = this;
    this._bindArrangeComplete(),
    this._isInstant ? this._noTransition(e)  : e(),
    this._sort(),
    this._layout()
  },
  f.prototype._init = f.prototype.arrange,
  f.prototype._getIsInstant = function () {
    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    return this._isInstant = t,
    t
  },
  f.prototype._bindArrangeComplete = function () {
    function t() {
      e && i && o && n.dispatchEvent('arrangeComplete', null, [
        n.filteredItems
      ])
    }
    var e,
    i,
    o,
    n = this;
    this.once('layoutComplete', function () {
      e = !0,
      t()
    }),
    this.once('hideComplete', function () {
      i = !0,
      t()
    }),
    this.once('revealComplete', function () {
      o = !0,
      t()
    })
  },
  f.prototype._filter = function (t) {
    var e = this.options.filter;
    e = e || '*';
    for (var i = [
    ], o = [
    ], n = [
    ], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
      var u = t[s];
      if (!u.isIgnored) {
        var p = r(u);
        p && i.push(u),
        p && u.isHidden ? o.push(u)  : p || u.isHidden || n.push(u)
      }
    }
    return {
      matches: i,
      needReveal: o,
      needHide: n
    }
  },
  f.prototype._getFilterTest = function (t) {
    return u && this.options.isJQueryFiltering ? function (e) {
      return u(e.element).is(t)
    }
     : 'function' == typeof t ? function (e) {
      return t(e.element)
    }
     : function (e) {
      return o(e.element, t)
    }
  },
  f.prototype.updateSortData = function (t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t))  : e = this.items,
    this._getSorters(),
    this._updateItemsSortData(e)
  },
  f.prototype._getSorters = function () {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = l(i)
    }
  },
  f.prototype._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && e > i; i++) t[i].updateSortData()
  };
  var l = function () {
    function t(t, e) {
      return t ? function (e) {
        return e.getAttribute(t)
      }
       : function (t) {
        var i = t.querySelector(e);
        return i && h(i)
      }
    }
    return function (e) {
      if ('string' != typeof e) return e;
      var i = p(e).split(' '),
      o = i[0],
      n = o.match(/^\[(.+)\]$/),
      r = t(n && n[1], o),
      s = f.sortDataParsers[i[1]];
      return e = s ? function (t) {
        return t && s(r(t))
      }
       : function (t) {
        return t && r(t)
      }
    }
  }();
  f.sortDataParsers = {
    parseInt: function (t) {
      return parseInt(t, 10)
    },
    parseFloat: function (t) {
      return parseFloat(t)
    }
  },
  f.prototype._sort = function () {
    var t = this.options.sortBy;
    if (t) {
      var e = a([].concat.apply(t, this.sortHistory), this.options.sortAscending);
      this.filteredItems.sort(e),
      t != this.sortHistory[0] && this.sortHistory.unshift(t)
    }
  },
  f.prototype._mode = function () {
    var t = this.options.layoutMode,
    e = this.modes[t];
    if (!e) throw new Error('No layout mode: ' + t);
    return e.options = this.options[t],
    e
  },
  f.prototype._resetLayout = function () {
    e.prototype._resetLayout.call(this),
    this._mode()._resetLayout()
  },
  f.prototype._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t)
  },
  f.prototype._manageStamp = function (t) {
    this._mode()._manageStamp(t)
  },
  f.prototype._getContainerSize = function () {
    return this._mode()._getContainerSize()
  },
  f.prototype.needsResizeLayout = function () {
    return this._mode().needsResizeLayout()
  },
  f.prototype.appended = function (t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i)
    }
  },
  f.prototype.prepended = function (t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(),
      this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems),
      this.filteredItems = i.concat(this.filteredItems),
      this.items = e.concat(this.items)
    }
  },
  f.prototype._filterRevealAdded = function (t) {
    var e = this._filter(t);
    return this.hide(e.needHide),
    this.reveal(e.matches),
    this.layoutItems(e.matches, !0),
    e.matches
  },
  f.prototype.insert = function (t) {
    var e = this.addItems(t);
    if (e.length) {
      var i,
      o,
      n = e.length;
      for (i = 0; n > i; i++) o = e[i],
      this.element.appendChild(o.element);
      var r = this._filter(e).matches;
      for (i = 0; n > i; i++) e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
      this.reveal(r)
    }
  };
  var d = f.prototype.remove;
  return f.prototype.remove = function (t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    d.call(this, t);
    var i = e && e.length;
    if (i) for (var o = 0; i > o; o++) {
      var r = e[o];
      n.removeFrom(this.filteredItems, r)
    }
  },
  f.prototype.shuffle = function () {
    for (var t = 0, e = this.items.length; e > t; t++) this.items[t].sortData.random = Math.random();
    this.options.sortBy = 'random',
    this._sort(),
    this._layout()
  },
  f.prototype._noTransition = function (t) {
    var e = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var i = t.call(this);
    return this.options.transitionDuration = e,
    i
  },
  f.prototype.getFilteredItemElements = function () {
    for (var t = [
    ], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
    return t
  },
  f
});
/**
 * @module       RD Navbar
 * @author       Evgeniy Gusarov
 * @see          https://ua.linkedin.com/pub/evgeniy-gusarov/8a/a40/54a
 * @version      2.2.5
 */
(function () {
  var t;
  t = 'ontouchstart' in window,
  function (n, o, e) {
    var a;
    a = function () {
      function a(t, a) {
        this.options = n.extend(!0, {
        }, this.Defaults, a),
        this.$element = n(t),
        this.$clone = null,
        this.$win = n(e),
        this.$doc = n(o),
        this.currentLayout = this.options.layout,
        this.loaded = !1,
        this.focusOnHover = this.options.focusOnHover,
        this.focusTimer = !1,
        this.cloneTimer = !1,
        this.isStuck = !1,
        this.initialize()
      }
      return a.prototype.Defaults = {
        layout: 'rd-navbar-static',
        deviceLayout: 'rd-navbar-fixed',
        focusOnHover: !0,
        focusOnHoverTimeout: 800,
        linkedElements: [
          'html'
        ],
        domAppend: !0,
        stickUp: !0,
        stickUpClone: !0,
        stickUpOffset: '100%',
        anchorNav: !0,
        anchorNavSpeed: 400,
        anchorNavOffset: 0,
        anchorNavEasing: 'swing',
        autoHeight: !0,
        responsive: {
          0: {
            layout: 'rd-navbar-fixed',
            deviceLayout: 'rd-navbar-fixed',
            focusOnHover: !1,
            stickUp: !1
          },
          992: {
            layout: 'rd-navbar-static',
            deviceLayout: 'rd-navbar-static',
            focusOnHover: !0,
            stickUp: !0
          }
        },
        callbacks: {
          onToggleSwitch: !1,
          onToggleClose: !1,
          onDomAppend: !1,
          onDropdownOver: !1,
          onDropdownOut: !1,
          onDropdownToggle: !1,
          onDropdownClose: !1,
          onStuck: !1,
          onUnstuck: !1,
          onAnchorChange: !1
        }
      },
      a.prototype.initialize = function () {
        var n;
        return (n = this).$element.addClass('rd-navbar').addClass(n.options.layout),
        t && n.$element.addClass('rd-navbar--is-touch'),
        n.options.domAppend && n.createNav(n),
        n.options.stickUpClone && n.createClone(n),
        n.$element.addClass('rd-navbar-original'),
        n.addAdditionalClassToToggles('.rd-navbar-original', 'toggle-original', 'toggle-original-elements'),
        n.applyHandlers(n),
        n.offset = n.$element.offset().top,
        n.height = n.$element.outerHeight(),
        n.loaded = !0,
        n
      },
      a.prototype.resize = function (o, e) {
        var a,
        s;
        return s = t ? o.getOption('deviceLayout')  : o.getOption('layout'),
        a = o.$element.add(o.$clone),
        s === o.currentLayout && o.loaded || (o.switchClass(a, o.currentLayout, s), null != o.options.linkedElements && n.grep(o.options.linkedElements, function (t, n) {
          return o.switchClass(t, o.currentLayout + '-linked', s + '-linked')
        }), o.currentLayout = s),
        o.focusOnHover = o.getOption('focusOnHover'),
        o
      },
      a.prototype.stickUp = function (t, o) {
        function e() {
          'resize' === o.type ? t.switchClass(i, '', 'rd-navbar--is-stuck')  : i.addClass('rd-navbar--is-stuck'),
          t.isStuck = !0
        }
        var a,
        s,
        r,
        i,
        l;
        return s = t.getOption('stickUp'),
        (n('html').hasClass('ios') || t.$element.hasClass('rd-navbar-fixed')) && (s = !1),
        a = t.$doc.scrollTop(),
        i = null != t.$clone ? t.$clone : t.$element,
        r = t.getOption('stickUpOffset'),
        l = 'string' == typeof r ? r.indexOf('%') > 0 ? parseFloat(r) * t.height / 100 : parseFloat(r)  : r,
        s ? (a >= l && !t.isStuck || a < l && t.isStuck) && (t.$element.add(t.$clone).find('[data-rd-navbar-toggle]').each(function () {
          n.proxy(t.closeToggle, this) (t, !1)
        }).end().find('.rd-navbar-submenu').removeClass('opened').removeClass('focus'), a >= l && !t.isStuck && !t.$element.hasClass('rd-navbar-fixed') ? (t.options.callbacks.onStuck && t.options.callbacks.onStuck.call(t), navigator.platform.match(/(Mac)/i) ? setTimeout(e, 10)  : e())  : ('resize' === o.type ? t.switchClass(i, 'rd-navbar--is-stuck', '')  : i.removeClass('rd-navbar--is-stuck').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', n.proxy(t.resizeWrap, t, o)), t.isStuck = !1, t.options.callbacks.onUnstuck && t.options.callbacks.onUnstuck.call(t)))  : (t.$element.find('.rd-navbar-submenu').removeClass('opened').removeClass('focus'), t.isStuck && (t.switchClass(i, 'rd-navbar--is-stuck', ''), t.isStuck = !1, t.resizeWrap(o))),
        t
      },
      a.prototype.resizeWrap = function (t) {
        var n,
        o;
        if (null == (o = this).$clone && !o.isStuck) return n = o.$element.parent(),
        o.getOption('autoHeight') ? (o.height = o.$element.outerHeight(), 'resize' === t.type ? (n.addClass('rd-navbar--no-transition').css('height', o.height), n[0].offsetHeight, n.removeClass('rd-navbar--no-transition'))  : n.css('height', o.height))  : void n.css('height', 'auto')
      },
      a.prototype.createNav = function (t) {
        return t.$element.find('.rd-navbar-dropdown, .rd-navbar-megamenu').each(function () {
          var t;
          return t = n(this),
          this.getBoundingClientRect(),
          t.hasClass('rd-navbar-megamenu') ? t.parent().addClass('rd-navbar--has-megamenu')  : t.parent().addClass('rd-navbar--has-dropdown')
        }).parents('li').addClass('rd-navbar-submenu'),
        n('<span class="rd-navbar-submenu-toggle"></span>').insertAfter('.rd-navbar-nav li.rd-navbar-submenu > a'),
        t.options.callbacks.onDomAppend && t.options.callbacks.onDomAppend.call(this),
        t
      },
      a.prototype.createClone = function (t) {
        return t.$clone = t.$element.clone().insertAfter(t.$element).addClass('rd-navbar--is-clone'),
        t.addAdditionalClassToToggles('.rd-navbar--is-clone', 'toggle-cloned', 'toggle-cloned-elements'),
        t
      },
      a.prototype.closeToggle = function (t, o) {
        var e,
        a,
        s,
        r,
        i,
        l,
        c;
        return a = n(o.target),
        i = !1,
        l = this.getAttribute('data-rd-navbar-toggle'),
        t.options.stickUpClone && t.isStuck ? (r = '.toggle-cloned', s = '.toggle-cloned-elements', c = !a.hasClass('toggle-cloned'))  : (r = '.toggle-original', s = '.toggle-original-elements', c = !a.hasClass('toggle-original')),
        o.target !== this && !a.parents(r + '[data-rd-navbar-toggle]').length && !a.parents(s).length && l && c && ((e = n(this).parents('body').find(l).add(n(this).parents('.rd-navbar') [0])).each(function () {
          if (!i) return i = !0 === (o.target === this || n.contains(this, o.target))
        }), i || (e.add(this).removeClass('active'), t.options.callbacks.onToggleClose && t.options.callbacks.onToggleClose.call(this, t))),
        this
      },
      a.prototype.switchToggle = function (t, o) {
        var e,
        a,
        s;
        return o.preventDefault(),
        n(this).hasClass('toggle-cloned') ? (s = '.rd-navbar--is-clone', e = '.toggle-cloned-elements')  : (s = '.rd-navbar-original', e = '.toggle-original-elements'),
        (a = this.getAttribute('data-rd-navbar-toggle')) && (n(s + ' [data-rd-navbar-toggle]').not(this).each(function () {
          var t;
          if (t = this.getAttribute('data-rd-navbar-toggle')) return n(this).parents('body').find(s + ' ' + t + e).add(this).add(n.inArray('.rd-navbar', t.split(/\s*,\s*/i)) > - 1 && n(this).parents('body') [0]).removeClass('active')
        }), n(this).parents('body').find(s + ' ' + a + e).add(this).add(n.inArray('.rd-navbar', a.split(/\s*,\s*/i)) > - 1 && n(this).parents('.rd-navbar') [0]).toggleClass('active')),
        t.options.callbacks.onToggleSwitch && t.options.callbacks.onToggleSwitch.call(this, t),
        this
      },
      a.prototype.dropdownOver = function (t, o) {
        var e;
        if (t.focusOnHover) {
          if (e = n(this), clearTimeout(o), t.options.callbacks.onDropdownOver && !t.options.callbacks.onDropdownOver.call(this, t)) return this;
          e.addClass('focus').siblings().removeClass('opened').each(t.dropdownUnfocus)
        }
        return this
      },
      a.prototype.dropdownTouch = function (t, o) {
        var e,
        a;
        if (e = n(this), clearTimeout(o), t.focusOnHover) {
          if (a = !1, e.hasClass('focus') && (a = !0), !a) return e.addClass('focus').siblings().removeClass('opened').each(t.dropdownUnfocus),
          !1;
          t.options.callbacks.onDropdownOver && t.options.callbacks.onDropdownOver.call(this, t)
        }
        return this
      },
      a.prototype.dropdownOut = function (t, o) {
        return t.focusOnHover && (n(this).one('mouseenter.navbar', function () {
          return clearTimeout(o)
        }), t.options.callbacks.onDropdownOut && t.options.callbacks.onDropdownOut.call(this, t), clearTimeout(o), o = setTimeout(n.proxy(t.dropdownUnfocus, this, t), t.options.focusOnHoverTimeout)),
        this
      },
      a.prototype.dropdownUnfocus = function (t) {
        return n(this).find('li.focus').add(this).removeClass('focus'),
        this
      },
      a.prototype.dropdownClose = function (t, o) {
        return o.target === this || n(o.target).parents('.rd-navbar-submenu').length || (n(this).find('li.focus').add(this).removeClass('focus').removeClass('opened'), t.options.callbacks.onDropdownClose && t.options.callbacks.onDropdownClose.call(this, t)),
        this
      },
      a.prototype.dropdownToggle = function (t) {
        return n(this).toggleClass('opened').siblings().removeClass('opened'),
        t.options.callbacks.onDropdownToggle && t.options.callbacks.onDropdownToggle.call(this, t),
        this
      },
      a.prototype.goToAnchor = function (t, o) {
        var e,
        a;
        return a = this.hash,
        e = n(a),
        !!t.getOption('anchorNav') && (e.length && (o.preventDefault(), n('html, body').stop().animate({
          scrollTop: e.offset().top + t.getOption('anchorNavOffset') + 1
        }, t.getOption('anchorNavSpeed'), t.getOption('anchorNavEasing'), function () {
          return t.changeAnchor(a)
        })), this)
      },
      a.prototype.activateAnchor = function (t) {
        var o,
        e,
        a,
        s,
        r,
        i,
        l,
        c,
        d,
        p,
        u,
        h;
        if (s = this, u = s.$doc.scrollTop(), h = s.$win.height(), r = s.$doc.height(), p = s.getOption('anchorNavOffset'), !s.options.anchorNav) return !1;
        if (u + h > r - 50) return (o = n('[data-type="anchor"]').last()).length && o.offset().top >= u && (i = '#' + o.attr('id'), (e = n('.rd-navbar-nav a[href^="' + i + '"]').parent()).hasClass('active') || (e.addClass('active').siblings().removeClass('active'), s.options.callbacks.onAnchorChange && s.options.callbacks.onAnchorChange.call(o[0], s))),
        o;
        d = n('.rd-navbar-nav a[href^="#"]').get();
        for (l in d) c = d[l],
        i = (a = n(c)).attr('href'),
        (o = n(i)).length && o.offset().top + p <= u && o.offset().top + o.outerHeight() > u && (a.parent().addClass('active').siblings().removeClass('active'), s.options.callbacks.onAnchorChange && s.options.callbacks.onAnchorChange.call(o[0], s));
        return null
      },
      a.prototype.getAnchor = function () {
        return history && history.state ? history.state.id : null
      },
      a.prototype.changeAnchor = function (t) {
        return history && (history.state && history.state.id !== t ? history.replaceState({
          anchorId: t
        }, null, t)  : history.pushState({
          anchorId: t
        }, null, t)),
        this
      },
      a.prototype.applyHandlers = function (t) {
        return null != t.options.responsive && t.$win.on('resize.navbar', n.proxy(t.resize, t.$win[0], t)).on('resize.navbar', n.proxy(t.resizeWrap, t)).on('resize.navbar', n.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on('orientationchange.navbar', n.proxy(t.resize, t.$win[0], t)).trigger('resize.navbar'),
        t.$doc.on('scroll.navbar', n.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on('scroll.navbar', n.proxy(t.activateAnchor, t)),
        t.$element.add(t.$clone).find('[data-rd-navbar-toggle]').each(function () {
          var o;
          return (o = n(this)).on('click', n.proxy(t.switchToggle, this, t)),
          o.parents('body').on('click', n.proxy(t.closeToggle, this, t))
        }),
        t.$element.add(t.$clone).find('.rd-navbar-submenu').each(function () {
          var o,
          e;
          return o = n(this),
          e = o.parents('.rd-navbar--is-clone').length ? t.cloneTimer : t.focusTimer,
          o.on('mouseleave.navbar', n.proxy(t.dropdownOut, this, t, e)),
          o.find('> a').on('mouseenter.navbar', n.proxy(t.dropdownOver, this, t, e)),
          o.find('> a').on('touchstart.navbar', n.proxy(t.dropdownTouch, this, t, e)),
          o.find('> .rd-navbar-submenu-toggle').on('click', n.proxy(t.dropdownToggle, this, t)),
          o.parents('body').on('click', n.proxy(t.dropdownClose, this, t))
        }),
        t.$element.add(t.$clone).find('.rd-navbar-nav a[href^="#"]').each(function () {
          return n(this).on('click', n.proxy(t.goToAnchor, this, t))
        }),
        t.$element.find('.rd-navbar-dropdown, .rd-navbar-megamenu').each(function () {
          var t,
          o;
          t = n(this),
          (o = this.getBoundingClientRect()).left + t.outerWidth() >= e.innerWidth - 10 ? this.className += ' rd-navbar-open-left' : o.left - t.outerWidth() <= 10 && (this.className += ' rd-navbar-open-right')
        }),
        t
      },
      a.prototype.switchClass = function (t, o, e) {
        var a;
        return (a = t instanceof jQuery ? t : n(t)).addClass('rd-navbar--no-transition').removeClass(o).addClass(e),
        a[0].offsetHeight,
        a.removeClass('rd-navbar--no-transition')
      },
      a.prototype.getOption = function (t) {
        var n,
        o;
        for (n in this.options.responsive) n <= e.innerWidth && (o = n);
        return null != this.options.responsive && null != this.options.responsive[o][t] ? this.options.responsive[o][t] : this.options[t]
      },
      a.prototype.addAdditionalClassToToggles = function (t, o, e) {
        return n(t).find('[data-rd-navbar-toggle]').each(function () {
          var a;
          return n(this).addClass(o),
          a = this.getAttribute('data-rd-navbar-toggle'),
          n(this).parents('body').find(t).find(a).addClass(e)
        })
      },
      a
    }(),
    n.fn.extend({
      RDNavbar: function (t) {
        var o;
        if (!(o = n(this)).data('RDNavbar')) return o.data('RDNavbar', new a(this, t))
      }
    }),
    e.RDNavbar = a
  }(window.jQuery, document, window),
  'undefined' != typeof module && null !== module ? module.exports = window.RDNavbar : 'function' == typeof define && define.amd && define(['jquery'], function () {
    'use strict';
    return window.RDNavbar
  })
}).call(this);
/**
 * @module       UIToTop
 * @author       Matt Varone
 * @see          http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
 * @license      MIT
 */
!function (o) {
  o.fn.UItoTop = function (n) {
    var e = {
      text: '',
      min: 500,
      scrollSpeed: 800,
      containerID: 'ui-to-top',
      containerClass: 'ui-to-top fa fa-angle-up',
      easingType: 'easeIn'
    },
    t = o.extend(e, n),
    i = '#' + t.containerID;
    o('body').append('<a href="#" id="' + t.containerID + '" class="' + t.containerClass + '" >' + t.text + '</a>'),
    o(i).click(function () {
      return o('html, body').stop().animate({
        scrollTop: 0
      }, t.scrollSpeed, t.easingType),
      !1
    }),
    o(window).scroll(function () {
      var n = o(window).scrollTop();
      'undefined' == typeof document.body.style.maxHeight && o(i).css({
        position: 'absolute',
        top: o(window).scrollTop() + o(window).height() - 50
      }),
      n > t.min ? o(i).stop(!0, !0).addClass('active')  : o(i).removeClass('active')
    })
  }
}(jQuery);
/**
 * @module       Materianize Parallax
 * @see          http://materializecss.com/parallax-demo.html
 * @licesne      MIT
 */
!function (i) {
  i.fn.parallax = function () {
    var a = i(window).width();
    return this.each(function (t) {
      function n(t) {
        var n;
        n = a < 601 ? r.height() > 0 ? r.height()  : r.children('img').height()  : r.height() > 0 ? r.height()  : 500;
        var e = r.children('img').first(),
        l = e.height() - n,
        o = r.offset().top + n,
        h = r.offset().top,
        d = i(window).scrollTop(),
        s = window.innerHeight,
        c = (d + s - h) / (n + s),
        g = Math.round(l * c);
        t && e.css('display', 'block'),
        o > d && h < d + s && e.css('transform', 'translate3D(-50%,' + g + 'px, 0)')
      }
      var r = i(this).prepend('<div class="material-parallax parallax"><img src="images/_blank.png" alt=""></div>').find('.material-parallax');
      r.children('img').first().attr('src', r.parents('[data-parallax-img]').data('parallax-img')),
      r.children('img').one('load', function () {
        n(!0)
      }).each(function () {
        this.complete && i(this).trigger('load')
      }),
      i(window).scroll(function () {
        a = i(window).width(),
        n(!1)
      }),
      i(window).resize(function () {
        a = i(window).width(),
        n(!1)
      })
    })
  }
}(jQuery);
/**
 * @module       Swiper
 * @description  Most modern mobile touch slider and framework with hardware accelerated transitions
 * @author       Vladimir Kharlampidi
 * @see          http://www.idangero.us/swiper/
 * @licesne      MIT
 * @version      3.4.2
 */
!function () {
  'use strict';
  var e,
  a = function (t, s) {
    function r(e) {
      return Math.floor(e)
    }
    function i() {
      var e = y.params.autoplay,
      a = y.slides.eq(y.activeIndex);
      a.attr('data-swiper-autoplay') && (e = a.attr('data-swiper-autoplay') || y.params.autoplay),
      y.autoplayTimeoutId = setTimeout(function () {
        y.params.loop ? (y.fixLoop(), y._slideNext(), y.emit('onAutoplay', y))  : y.isEnd ? s.autoplayStopOnLast ? y.stopAutoplay()  : (y._slideTo(0), y.emit('onAutoplay', y))  : (y._slideNext(), y.emit('onAutoplay', y))
      }, e)
    }
    function n(a, t) {
      var s = e(a.target);
      if (!s.is(t)) if ('string' == typeof t) s = s.parents(t);
       else if (t.nodeType) {
        var r;
        return s.parents().each(function (e, a) {
          a === t && (r = t)
        }),
        r ? t : void 0
      }
      if (0 !== s.length) return s[0]
    }
    function o(e, a) {
      a = a || {
      };
      var t = new (window.MutationObserver || window.WebkitMutationObserver) (function (e) {
        e.forEach(function (e) {
          y.onResize(!0),
          y.emit('onObserverUpdate', y, e)
        })
      });
      t.observe(e, {
        attributes: void 0 === a.attributes || a.attributes,
        childList: void 0 === a.childList || a.childList,
        characterData: void 0 === a.characterData || a.characterData
      }),
      y.observers.push(t)
    }
    function l(e) {
      e.originalEvent && (e = e.originalEvent);
      var a = e.keyCode || e.charCode;
      if (!y.params.allowSwipeToNext && (y.isHorizontal() && 39 === a || !y.isHorizontal() && 40 === a)) return !1;
      if (!y.params.allowSwipeToPrev && (y.isHorizontal() && 37 === a || !y.isHorizontal() && 38 === a)) return !1;
      if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ('input' === document.activeElement.nodeName.toLowerCase() || 'textarea' === document.activeElement.nodeName.toLowerCase()))) {
        if (37 === a || 39 === a || 38 === a || 40 === a) {
          var t = !1;
          if (y.container.parents('.' + y.params.slideClass).length > 0 && 0 === y.container.parents('.' + y.params.slideActiveClass).length) return;
          var s = {
            left: window.pageXOffset,
            top: window.pageYOffset
          },
          r = window.innerWidth,
          i = window.innerHeight,
          n = y.container.offset();
          y.rtl && (n.left = n.left - y.container[0].scrollLeft);
          for (var o = [
            [n.left,
            n.top],
            [
              n.left + y.width,
              n.top
            ],
            [
              n.left,
              n.top + y.height
            ],
            [
              n.left + y.width,
              n.top + y.height
            ]
          ], l = 0; l < o.length; l++) {
            var p = o[l];
            p[0] >= s.left && p[0] <= s.left + r && p[1] >= s.top && p[1] <= s.top + i && (t = !0)
          }
          if (!t) return
        }
        y.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault()  : e.returnValue = !1), (39 === a && !y.rtl || 37 === a && y.rtl) && y.slideNext(), (37 === a && !y.rtl || 39 === a && y.rtl) && y.slidePrev())  : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault()  : e.returnValue = !1), 40 === a && y.slideNext(), 38 === a && y.slidePrev()),
        y.emit('onKeyPress', y, a)
      }
    }
    function p(e) {
      var a = 0,
      t = 0,
      s = 0,
      r = 0;
      return 'detail' in e && (t = e.detail),
      'wheelDelta' in e && (t = - e.wheelDelta / 120),
      'wheelDeltaY' in e && (t = - e.wheelDeltaY / 120),
      'wheelDeltaX' in e && (a = - e.wheelDeltaX / 120),
      'axis' in e && e.axis === e.HORIZONTAL_AXIS && (a = t, t = 0),
      s = 10 * a,
      r = 10 * t,
      'deltaY' in e && (r = e.deltaY),
      'deltaX' in e && (s = e.deltaX),
      (s || r) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, r *= 40)  : (s *= 800, r *= 800)),
      s && !a && (a = s < 1 ? - 1 : 1),
      r && !t && (t = r < 1 ? - 1 : 1),
      {
        spinX: a,
        spinY: t,
        pixelX: s,
        pixelY: r
      }
    }
    function d(e) {
      e.originalEvent && (e = e.originalEvent);
      var a = 0,
      t = y.rtl ? - 1 : 1,
      s = p(e);
      if (y.params.mousewheelForceToAxis) if (y.isHorizontal()) {
        if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;
        a = s.pixelX * t
      } else {
        if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;
        a = s.pixelY
      } else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? - s.pixelX * t : - s.pixelY;
      if (0 !== a) {
        if (y.params.mousewheelInvert && (a = - a), y.params.freeMode) {
          var r = y.getWrapperTranslate() + a * y.params.mousewheelSensitivity,
          i = y.isBeginning,
          n = y.isEnd;
          if (r >= y.minTranslate() && (r = y.minTranslate()), r <= y.maxTranslate() && (r = y.maxTranslate()), y.setWrapperTransition(0), y.setWrapperTranslate(r), y.updateProgress(), y.updateActiveIndex(), (!i && y.isBeginning || !n && y.isEnd) && y.updateClasses(), y.params.freeModeSticky ? (clearTimeout(y.mousewheel.timeout), y.mousewheel.timeout = setTimeout(function () {
            y.slideReset()
          }, 300))  : y.params.lazyLoading && y.lazy && y.lazy.load(), y.emit('onScroll', y, e), y.params.autoplay && y.params.autoplayDisableOnInteraction && y.stopAutoplay(), 0 === r || r === y.maxTranslate()) return
        } else {
          if ((new window.Date).getTime() - y.mousewheel.lastScrollTime > 60) if (a < 0) if (y.isEnd && !y.params.loop || y.animating) {
            if (y.params.mousewheelReleaseOnEdges) return !0
          } else y.slideNext(),
          y.emit('onScroll', y, e);
           else if (y.isBeginning && !y.params.loop || y.animating) {
            if (y.params.mousewheelReleaseOnEdges) return !0
          } else y.slidePrev(),
          y.emit('onScroll', y, e);
          y.mousewheel.lastScrollTime = (new window.Date).getTime()
        }
        return e.preventDefault ? e.preventDefault()  : e.returnValue = !1,
        !1
      }
    }
    function m(a, t) {
      a = e(a);
      var s,
      r,
      i,
      n = y.rtl ? - 1 : 1;
      s = a.attr('data-swiper-parallax') || '0',
      r = a.attr('data-swiper-parallax-x'),
      i = a.attr('data-swiper-parallax-y'),
      r || i ? (r = r || '0', i = i || '0')  : y.isHorizontal() ? (r = s, i = '0')  : (i = s, r = '0'),
      r = r.indexOf('%') >= 0 ? parseInt(r, 10) * t * n + '%' : r * t * n + 'px',
      i = i.indexOf('%') >= 0 ? parseInt(i, 10) * t + '%' : i * t + 'px',
      a.transform('translate3d(' + r + ', ' + i + ',0px)')
    }
    function u(e) {
      return 0 !== e.indexOf('on') && (e = e[0] !== e[0].toUpperCase() ? 'on' + e[0].toUpperCase() + e.substring(1)  : 'on' + e),
      e
    }
    if (!(this instanceof a)) return new a(t, s);
    var c = {
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      autoplay: !1,
      autoplayDisableOnInteraction: !0,
      autoplayStopOnLast: !1,
      iOSEdgeSwipeDetection: !1,
      iOSEdgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !0
      },
      flip: {
        slideShadows: !0,
        limitRotation: !0
      },
      cube: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      fade: {
        crossFade: !1
      },
      parallax: !1,
      zoom: !1,
      zoomMax: 3,
      zoomMin: 1,
      zoomToggle: !0,
      scrollbar: null,
      scrollbarHide: !0,
      scrollbarDraggable: !1,
      scrollbarSnapOnRelease: !1,
      keyboardControl: !1,
      mousewheelControl: !1,
      mousewheelReleaseOnEdges: !1,
      mousewheelInvert: !1,
      mousewheelForceToAxis: !1,
      mousewheelSensitivity: 1,
      mousewheelEventsTarged: 'container',
      hashnav: !1,
      hashnavWatchState: !1,
      history: !1,
      replaceState: !1,
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      onlyExternal: !1,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      pagination: null,
      paginationElement: 'span',
      paginationClickable: !1,
      paginationHide: !1,
      paginationBulletRender: null,
      paginationProgressRender: null,
      paginationFractionRender: null,
      paginationCustomRender: null,
      paginationType: 'bullets',
      resistance: !0,
      resistanceRatio: 0.85,
      nextButton: null,
      prevButton: null,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      lazyLoading: !1,
      lazyLoadingInPrevNext: !1,
      lazyLoadingInPrevNextAmount: 1,
      lazyLoadingOnTransitionStart: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      control: void 0,
      controlInverse: !1,
      controlBy: 'slide',
      normalizeSlideIndex: !0,
      allowSwipeToPrev: !0,
      allowSwipeToNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      passiveListeners: !0,
      containerModifierClass: 'swiper-container-',
      slideClass: 'swiper-slide',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      buttonDisabledClass: 'swiper-button-disabled',
      paginationCurrentClass: 'swiper-pagination-current',
      paginationTotalClass: 'swiper-pagination-total',
      paginationHiddenClass: 'swiper-pagination-hidden',
      paginationProgressbarClass: 'swiper-pagination-progressbar',
      paginationClickableClass: 'swiper-pagination-clickable',
      paginationModifierClass: 'swiper-pagination-',
      lazyLoadingClass: 'swiper-lazy',
      lazyStatusLoadingClass: 'swiper-lazy-loading',
      lazyStatusLoadedClass: 'swiper-lazy-loaded',
      lazyPreloaderClass: 'swiper-lazy-preloader',
      notificationClass: 'swiper-notification',
      preloaderClass: 'preloader',
      zoomContainerClass: 'swiper-zoom-container',
      observer: !1,
      observeParents: !1,
      a11y: !1,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      runCallbacksOnInit: !0
    },
    g = s && s.virtualTranslate;
    s = s || {
    };
    var h = {
    };
    for (var v in s) if ('object' != typeof s[v] || null === s[v] || s[v].nodeType || s[v] === window || s[v] === document || 'undefined' != typeof Dom7 && s[v] instanceof Dom7 || 'undefined' != typeof jQuery && s[v] instanceof jQuery) h[v] = s[v];
     else {
      h[v] = {
      };
      for (var f in s[v]) h[v][f] = s[v][f]
    }
    for (var w in c) if (void 0 === s[w]) s[w] = c[w];
     else if ('object' == typeof s[w]) for (var x in c[w]) void 0 === s[w][x] && (s[w][x] = c[w][x]);
    var y = this;
    if (y.params = s, y.originalParams = h, y.classNames = [
    ], void 0 !== e && 'undefined' != typeof Dom7 && (e = Dom7), (void 0 !== e || (e = 'undefined' == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (y.$ = e, y.currentBreakpoint = void 0, y.getActiveBreakpoint = function () {
      if (!y.params.breakpoints) return !1;
      var e,
      a = !1,
      t = [
      ];
      for (e in y.params.breakpoints) y.params.breakpoints.hasOwnProperty(e) && t.push(e);
      t.sort(function (e, a) {
        return parseInt(e, 10) > parseInt(a, 10)
      });
      for (var s = 0; s < t.length; s++) (e = t[s]) >= window.innerWidth && !a && (a = e);
      return a || 'max'
    }, y.setBreakpoint = function () {
      var e = y.getActiveBreakpoint();
      if (e && y.currentBreakpoint !== e) {
        var a = e in y.params.breakpoints ? y.params.breakpoints[e] : y.originalParams,
        t = y.params.loop && a.slidesPerView !== y.params.slidesPerView;
        for (var s in a) y.params[s] = a[s];
        y.currentBreakpoint = e,
        t && y.destroyLoop && y.reLoop(!0)
      }
    }, y.params.breakpoints && y.setBreakpoint(), y.container = e(t), 0 !== y.container.length)) {
      if (y.container.length > 1) {
        var T = [
        ];
        return y.container.each(function () {
          T.push(new a(this, s))
        }),
        T
      }
      y.container[0].swiper = y,
      y.container.data('swiper', y),
      y.classNames.push(y.params.containerModifierClass + y.params.direction),
      y.params.freeMode && y.classNames.push(y.params.containerModifierClass + 'free-mode'),
      y.support.flexbox || (y.classNames.push(y.params.containerModifierClass + 'no-flexbox'), y.params.slidesPerColumn = 1),
      y.params.autoHeight && y.classNames.push(y.params.containerModifierClass + 'autoheight'),
      (y.params.parallax || y.params.watchSlidesVisibility) && (y.params.watchSlidesProgress = !0),
      y.params.touchReleaseOnEdges && (y.params.resistanceRatio = 0),
      [
        'cube',
        'coverflow',
        'flip'
      ].indexOf(y.params.effect) >= 0 && (y.support.transforms3d ? (y.params.watchSlidesProgress = !0, y.classNames.push(y.params.containerModifierClass + '3d'))  : y.params.effect = 'slide'),
      'slide' !== y.params.effect && y.classNames.push(y.params.containerModifierClass + y.params.effect),
      'cube' === y.params.effect && (y.params.resistanceRatio = 0, y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.centeredSlides = !1, y.params.spaceBetween = 0, y.params.virtualTranslate = !0),
      'fade' !== y.params.effect && 'flip' !== y.params.effect || (y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.watchSlidesProgress = !0, y.params.spaceBetween = 0, void 0 === g && (y.params.virtualTranslate = !0)),
      y.params.grabCursor && y.support.touch && (y.params.grabCursor = !1),
      y.wrapper = y.container.children('.' + y.params.wrapperClass),
      y.params.pagination && (y.paginationContainer = e(y.params.pagination), y.params.uniqueNavElements && 'string' == typeof y.params.pagination && y.paginationContainer.length > 1 && 1 === y.container.find(y.params.pagination).length && (y.paginationContainer = y.container.find(y.params.pagination)), 'bullets' === y.params.paginationType && y.params.paginationClickable ? y.paginationContainer.addClass(y.params.paginationModifierClass + 'clickable')  : y.params.paginationClickable = !1, y.paginationContainer.addClass(y.params.paginationModifierClass + y.params.paginationType)),
      (y.params.nextButton || y.params.prevButton) && (y.params.nextButton && (y.nextButton = e(y.params.nextButton), y.params.uniqueNavElements && 'string' == typeof y.params.nextButton && y.nextButton.length > 1 && 1 === y.container.find(y.params.nextButton).length && (y.nextButton = y.container.find(y.params.nextButton))), y.params.prevButton && (y.prevButton = e(y.params.prevButton), y.params.uniqueNavElements && 'string' == typeof y.params.prevButton && y.prevButton.length > 1 && 1 === y.container.find(y.params.prevButton).length && (y.prevButton = y.container.find(y.params.prevButton)))),
      y.isHorizontal = function () {
        return 'horizontal' === y.params.direction
      },
      y.rtl = y.isHorizontal() && ('rtl' === y.container[0].dir.toLowerCase() || 'rtl' === y.container.css('direction')),
      y.rtl && y.classNames.push(y.params.containerModifierClass + 'rtl'),
      y.rtl && (y.wrongRTL = '-webkit-box' === y.wrapper.css('display')),
      y.params.slidesPerColumn > 1 && y.classNames.push(y.params.containerModifierClass + 'multirow'),
      y.device.android && y.classNames.push(y.params.containerModifierClass + 'android'),
      y.container.addClass(y.classNames.join(' ')),
      y.translate = 0,
      y.progress = 0,
      y.velocity = 0,
      y.lockSwipeToNext = function () {
        y.params.allowSwipeToNext = !1,
        !1 === y.params.allowSwipeToPrev && y.params.grabCursor && y.unsetGrabCursor()
      },
      y.lockSwipeToPrev = function () {
        y.params.allowSwipeToPrev = !1,
        !1 === y.params.allowSwipeToNext && y.params.grabCursor && y.unsetGrabCursor()
      },
      y.lockSwipes = function () {
        y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !1,
        y.params.grabCursor && y.unsetGrabCursor()
      },
      y.unlockSwipeToNext = function () {
        y.params.allowSwipeToNext = !0,
        !0 === y.params.allowSwipeToPrev && y.params.grabCursor && y.setGrabCursor()
      },
      y.unlockSwipeToPrev = function () {
        y.params.allowSwipeToPrev = !0,
        !0 === y.params.allowSwipeToNext && y.params.grabCursor && y.setGrabCursor()
      },
      y.unlockSwipes = function () {
        y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !0,
        y.params.grabCursor && y.setGrabCursor()
      },
      y.setGrabCursor = function (e) {
        y.container[0].style.cursor = 'move',
        y.container[0].style.cursor = e ? '-webkit-grabbing' : '-webkit-grab',
        y.container[0].style.cursor = e ? '-moz-grabbin' : '-moz-grab',
        y.container[0].style.cursor = e ? 'grabbing' : 'grab'
      },
      y.unsetGrabCursor = function () {
        y.container[0].style.cursor = ''
      },
      y.params.grabCursor && y.setGrabCursor(),
      y.imagesToLoad = [
      ],
      y.imagesLoaded = 0,
      y.loadImage = function (e, a, t, s, r, i) {
        function n() {
          i && i()
        }
        var o;
        e.complete && r ? n()  : a ? (o = new window.Image, o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a))  : n()
      },
      y.preloadImages = function () {
        y.imagesToLoad = y.container.find('img');
        for (var e = 0; e < y.imagesToLoad.length; e++) y.loadImage(y.imagesToLoad[e], y.imagesToLoad[e].currentSrc || y.imagesToLoad[e].getAttribute('src'), y.imagesToLoad[e].srcset || y.imagesToLoad[e].getAttribute('srcset'), y.imagesToLoad[e].sizes || y.imagesToLoad[e].getAttribute('sizes'), !0, function () {
          void 0 !== y && null !== y && y && (void 0 !== y.imagesLoaded && y.imagesLoaded++, y.imagesLoaded === y.imagesToLoad.length && (y.params.updateOnImagesReady && y.update(), y.emit('onImagesReady', y)))
        })
      },
      y.autoplayTimeoutId = void 0,
      y.autoplaying = !1,
      y.autoplayPaused = !1,
      y.startAutoplay = function () {
        return void 0 === y.autoplayTimeoutId && !!y.params.autoplay && !y.autoplaying && (y.autoplaying = !0, y.emit('onAutoplayStart', y), void i())
      },
      y.stopAutoplay = function (e) {
        y.autoplayTimeoutId && (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplaying = !1, y.autoplayTimeoutId = void 0, y.emit('onAutoplayStop', y))
      },
      y.pauseAutoplay = function (e) {
        y.autoplayPaused || (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplayPaused = !0, 0 === e ? (y.autoplayPaused = !1, i())  : y.wrapper.transitionEnd(function () {
          y && (y.autoplayPaused = !1, y.autoplaying ? i()  : y.stopAutoplay())
        }))
      },
      y.minTranslate = function () {
        return - y.snapGrid[0]
      },
      y.maxTranslate = function () {
        return - y.snapGrid[y.snapGrid.length - 1]
      },
      y.updateAutoHeight = function () {
        var e,
        a = [
        ],
        t = 0;
        if ('auto' !== y.params.slidesPerView && y.params.slidesPerView > 1) for (e = 0; e < Math.ceil(y.params.slidesPerView); e++) {
          var s = y.activeIndex + e;
          if (s > y.slides.length) break;
          a.push(y.slides.eq(s) [0])
        } else a.push(y.slides.eq(y.activeIndex) [0]);
        for (e = 0; e < a.length; e++) if (void 0 !== a[e]) {
          var r = a[e].offsetHeight;
          t = r > t ? r : t
        }
        t && y.wrapper.css('height', t + 'px')
      },
      y.updateContainerSize = function () {
        var e,
        a;
        e = void 0 !== y.params.width ? y.params.width : y.container[0].clientWidth,
        a = void 0 !== y.params.height ? y.params.height : y.container[0].clientHeight,
        0 === e && y.isHorizontal() || 0 === a && !y.isHorizontal() || (e = e - parseInt(y.container.css('padding-left'), 10) - parseInt(y.container.css('padding-right'), 10), a = a - parseInt(y.container.css('padding-top'), 10) - parseInt(y.container.css('padding-bottom'), 10), y.width = e, y.height = a, y.size = y.isHorizontal() ? y.width : y.height)
      },
      y.updateSlidesSize = function () {
        y.slides = y.wrapper.children('.' + y.params.slideClass),
        y.snapGrid = [
        ],
        y.slidesGrid = [
        ],
        y.slidesSizesGrid = [
        ];
        var e,
        a = y.params.spaceBetween,
        t = - y.params.slidesOffsetBefore,
        s = 0,
        i = 0;
        if (void 0 !== y.size) {
          'string' == typeof a && a.indexOf('%') >= 0 && (a = parseFloat(a.replace('%', '')) / 100 * y.size),
          y.virtualSize = - a,
          y.rtl ? y.slides.css({
            marginLeft: '',
            marginTop: ''
          })  : y.slides.css({
            marginRight: '',
            marginBottom: ''
          });
          var n;
          y.params.slidesPerColumn > 1 && (n = Math.floor(y.slides.length / y.params.slidesPerColumn) === y.slides.length / y.params.slidesPerColumn ? y.slides.length : Math.ceil(y.slides.length / y.params.slidesPerColumn) * y.params.slidesPerColumn, 'auto' !== y.params.slidesPerView && 'row' === y.params.slidesPerColumnFill && (n = Math.max(n, y.params.slidesPerView * y.params.slidesPerColumn)));
          var o,
          l = y.params.slidesPerColumn,
          p = n / l,
          d = p - (y.params.slidesPerColumn * p - y.slides.length);
          for (e = 0; e < y.slides.length; e++) {
            o = 0;
            var m = y.slides.eq(e);
            if (y.params.slidesPerColumn > 1) {
              var u,
              c,
              g;
              'column' === y.params.slidesPerColumnFill ? (c = Math.floor(e / l), g = e - c * l, (c > d || c === d && g === l - 1) && ++g >= l && (g = 0, c++), u = c + g * n / l, m.css({
                '-webkit-box-ordinal-group': u,
                '-moz-box-ordinal-group': u,
                '-ms-flex-order': u,
                '-webkit-order': u,
                order: u
              }))  : (g = Math.floor(e / p), c = e - g * p),
              m.css('margin-' + (y.isHorizontal() ? 'top' : 'left'), 0 !== g && y.params.spaceBetween && y.params.spaceBetween + 'px').attr('data-swiper-column', c).attr('data-swiper-row', g)
            }
            'none' !== m.css('display') && ('auto' === y.params.slidesPerView ? (o = y.isHorizontal() ? m.outerWidth(!0)  : m.outerHeight(!0), y.params.roundLengths && (o = r(o)))  : (o = (y.size - (y.params.slidesPerView - 1) * a) / y.params.slidesPerView, y.params.roundLengths && (o = r(o)), y.isHorizontal() ? y.slides[e].style.width = o + 'px' : y.slides[e].style.height = o + 'px'), y.slides[e].swiperSlideSize = o, y.slidesSizesGrid.push(o), y.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === s && 0 !== e && (t = t - y.size / 2 - a), 0 === e && (t = t - y.size / 2 - a), Math.abs(t) < 0.001 && (t = 0), i % y.params.slidesPerGroup == 0 && y.snapGrid.push(t), y.slidesGrid.push(t))  : (i % y.params.slidesPerGroup == 0 && y.snapGrid.push(t), y.slidesGrid.push(t), t = t + o + a), y.virtualSize += o + a, s = o, i++)
          }
          y.virtualSize = Math.max(y.virtualSize, y.size) + y.params.slidesOffsetAfter;
          var h;
          if (y.rtl && y.wrongRTL && ('slide' === y.params.effect || 'coverflow' === y.params.effect) && y.wrapper.css({
            width: y.virtualSize + y.params.spaceBetween + 'px'
          }), y.support.flexbox && !y.params.setWrapperSize || (y.isHorizontal() ? y.wrapper.css({
            width: y.virtualSize + y.params.spaceBetween + 'px'
          })  : y.wrapper.css({
            height: y.virtualSize + y.params.spaceBetween + 'px'
          })), y.params.slidesPerColumn > 1 && (y.virtualSize = (o + y.params.spaceBetween) * n, y.virtualSize = Math.ceil(y.virtualSize / y.params.slidesPerColumn) - y.params.spaceBetween, y.isHorizontal() ? y.wrapper.css({
            width: y.virtualSize + y.params.spaceBetween + 'px'
          })  : y.wrapper.css({
            height: y.virtualSize + y.params.spaceBetween + 'px'
          }), y.params.centeredSlides)) {
            for (h = [
            ], e = 0; e < y.snapGrid.length; e++) y.snapGrid[e] < y.virtualSize + y.snapGrid[0] && h.push(y.snapGrid[e]);
            y.snapGrid = h
          }
          if (!y.params.centeredSlides) {
            for (h = [
            ], e = 0; e < y.snapGrid.length; e++) y.snapGrid[e] <= y.virtualSize - y.size && h.push(y.snapGrid[e]);
            y.snapGrid = h,
            Math.floor(y.virtualSize - y.size) - Math.floor(y.snapGrid[y.snapGrid.length - 1]) > 1 && y.snapGrid.push(y.virtualSize - y.size)
          }
          0 === y.snapGrid.length && (y.snapGrid = [
            0
          ]),
          0 !== y.params.spaceBetween && (y.isHorizontal() ? y.rtl ? y.slides.css({
            marginLeft: a + 'px'
          })  : y.slides.css({
            marginRight: a + 'px'
          })  : y.slides.css({
            marginBottom: a + 'px'
          })),
          y.params.watchSlidesProgress && y.updateSlidesOffset()
        }
      },
      y.updateSlidesOffset = function () {
        for (var e = 0; e < y.slides.length; e++) y.slides[e].swiperSlideOffset = y.isHorizontal() ? y.slides[e].offsetLeft : y.slides[e].offsetTop
      },
      y.currentSlidesPerView = function () {
        var e,
        a,
        t = 1;
        if (y.params.centeredSlides) {
          var s,
          r = y.slides[y.activeIndex].swiperSlideSize;
          for (e = y.activeIndex + 1; e < y.slides.length; e++) y.slides[e] && !s && (r += y.slides[e].swiperSlideSize, t++, r > y.size && (s = !0));
          for (a = y.activeIndex - 1; a >= 0; a--) y.slides[a] && !s && (r += y.slides[a].swiperSlideSize, t++, r > y.size && (s = !0))
        } else for (e = y.activeIndex + 1; e < y.slides.length; e++) y.slidesGrid[e] - y.slidesGrid[y.activeIndex] < y.size && t++;
        return t
      },
      y.updateSlidesProgress = function (e) {
        if (void 0 === e && (e = y.translate || 0), 0 !== y.slides.length) {
          void 0 === y.slides[0].swiperSlideOffset && y.updateSlidesOffset();
          var a = - e;
          y.rtl && (a = e),
          y.slides.removeClass(y.params.slideVisibleClass);
          for (var t = 0; t < y.slides.length; t++) {
            var s = y.slides[t],
            r = (a + (y.params.centeredSlides ? y.minTranslate()  : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + y.params.spaceBetween);
            if (y.params.watchSlidesVisibility) {
              var i = - (a - s.swiperSlideOffset),
              n = i + y.slidesSizesGrid[t];
              (i >= 0 && i < y.size || n > 0 && n <= y.size || i <= 0 && n >= y.size) && y.slides.eq(t).addClass(y.params.slideVisibleClass)
            }
            s.progress = y.rtl ? - r : r
          }
        }
      },
      y.updateProgress = function (e) {
        void 0 === e && (e = y.translate || 0);
        var a = y.maxTranslate() - y.minTranslate(),
        t = y.isBeginning,
        s = y.isEnd;
        0 === a ? (y.progress = 0, y.isBeginning = y.isEnd = !0)  : (y.progress = (e - y.minTranslate()) / a, y.isBeginning = y.progress <= 0, y.isEnd = y.progress >= 1),
        y.isBeginning && !t && y.emit('onReachBeginning', y),
        y.isEnd && !s && y.emit('onReachEnd', y),
        y.params.watchSlidesProgress && y.updateSlidesProgress(e),
        y.emit('onProgress', y, y.progress)
      },
      y.updateActiveIndex = function () {
        var e,
        a,
        t,
        s = y.rtl ? y.translate : - y.translate;
        for (a = 0; a < y.slidesGrid.length; a++) void 0 !== y.slidesGrid[a + 1] ? s >= y.slidesGrid[a] && s < y.slidesGrid[a + 1] - (y.slidesGrid[a + 1] - y.slidesGrid[a]) / 2 ? e = a : s >= y.slidesGrid[a] && s < y.slidesGrid[a + 1] && (e = a + 1)  : s >= y.slidesGrid[a] && (e = a);
        y.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
        (t = Math.floor(e / y.params.slidesPerGroup)) >= y.snapGrid.length && (t = y.snapGrid.length - 1),
        e !== y.activeIndex && (y.snapIndex = t, y.previousIndex = y.activeIndex, y.activeIndex = e, y.updateClasses(), y.updateRealIndex())
      },
      y.updateRealIndex = function () {
        y.realIndex = parseInt(y.slides.eq(y.activeIndex).attr('data-swiper-slide-index') || y.activeIndex, 10)
      },
      y.updateClasses = function () {
        y.slides.removeClass(y.params.slideActiveClass + ' ' + y.params.slideNextClass + ' ' + y.params.slidePrevClass + ' ' + y.params.slideDuplicateActiveClass + ' ' + y.params.slideDuplicateNextClass + ' ' + y.params.slideDuplicatePrevClass);
        var a = y.slides.eq(y.activeIndex);
        a.addClass(y.params.slideActiveClass),
        s.loop && (a.hasClass(y.params.slideDuplicateClass) ? y.wrapper.children('.' + y.params.slideClass + ':not(.' + y.params.slideDuplicateClass + ')[data-swiper-slide-index="' + y.realIndex + '"]').addClass(y.params.slideDuplicateActiveClass)  : y.wrapper.children('.' + y.params.slideClass + '.' + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + y.realIndex + '"]').addClass(y.params.slideDuplicateActiveClass));
        var t = a.next('.' + y.params.slideClass).addClass(y.params.slideNextClass);
        y.params.loop && 0 === t.length && (t = y.slides.eq(0)).addClass(y.params.slideNextClass);
        var r = a.prev('.' + y.params.slideClass).addClass(y.params.slidePrevClass);
        if (y.params.loop && 0 === r.length && (r = y.slides.eq( - 1)).addClass(y.params.slidePrevClass), s.loop && (t.hasClass(y.params.slideDuplicateClass) ? y.wrapper.children('.' + y.params.slideClass + ':not(.' + y.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr('data-swiper-slide-index') + '"]').addClass(y.params.slideDuplicateNextClass)  : y.wrapper.children('.' + y.params.slideClass + '.' + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr('data-swiper-slide-index') + '"]').addClass(y.params.slideDuplicateNextClass), r.hasClass(y.params.slideDuplicateClass) ? y.wrapper.children('.' + y.params.slideClass + ':not(.' + y.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr('data-swiper-slide-index') + '"]').addClass(y.params.slideDuplicatePrevClass)  : y.wrapper.children('.' + y.params.slideClass + '.' + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr('data-swiper-slide-index') + '"]').addClass(y.params.slideDuplicatePrevClass)), y.paginationContainer && y.paginationContainer.length > 0) {
          var i,
          n = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup)  : y.snapGrid.length;
          if (y.params.loop ? ((i = Math.ceil((y.activeIndex - y.loopedSlides) / y.params.slidesPerGroup)) > y.slides.length - 1 - 2 * y.loopedSlides && (i -= y.slides.length - 2 * y.loopedSlides), i > n - 1 && (i -= n), i < 0 && 'bullets' !== y.params.paginationType && (i = n + i))  : i = void 0 !== y.snapIndex ? y.snapIndex : y.activeIndex || 0, 'bullets' === y.params.paginationType && y.bullets && y.bullets.length > 0 && (y.bullets.removeClass(y.params.bulletActiveClass), y.paginationContainer.length > 1 ? y.bullets.each(function () {
            e(this).index() === i && e(this).addClass(y.params.bulletActiveClass)
          })  : y.bullets.eq(i).addClass(y.params.bulletActiveClass)), 'fraction' === y.params.paginationType && (y.paginationContainer.find('.' + y.params.paginationCurrentClass).text(i + 1), y.paginationContainer.find('.' + y.params.paginationTotalClass).text(n)), 'progress' === y.params.paginationType) {
            var o = (i + 1) / n,
            l = o,
            p = 1;
            y.isHorizontal() || (p = o, l = 1),
            y.paginationContainer.find('.' + y.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + l + ') scaleY(' + p + ')').transition(y.params.speed)
          }
          'custom' === y.params.paginationType && y.params.paginationCustomRender && (y.paginationContainer.html(y.params.paginationCustomRender(y, i + 1, n)), y.emit('onPaginationRendered', y, y.paginationContainer[0]))
        }
        y.params.loop || (y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.isBeginning ? (y.prevButton.addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(y.prevButton))  : (y.prevButton.removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(y.prevButton))), y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.isEnd ? (y.nextButton.addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(y.nextButton))  : (y.nextButton.removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(y.nextButton))))
      },
      y.updatePagination = function () {
        if (y.params.pagination && y.paginationContainer && y.paginationContainer.length > 0) {
          var e = '';
          if ('bullets' === y.params.paginationType) {
            for (var a = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup)  : y.snapGrid.length, t = 0; t < a; t++) e += y.params.paginationBulletRender ? y.params.paginationBulletRender(y, t, y.params.bulletClass)  : '<' + y.params.paginationElement + ' class="' + y.params.bulletClass + '"></' + y.params.paginationElement + '>';
            y.paginationContainer.html(e),
            y.bullets = y.paginationContainer.find('.' + y.params.bulletClass),
            y.params.paginationClickable && y.params.a11y && y.a11y && y.a11y.initPagination()
          }
          'fraction' === y.params.paginationType && (e = y.params.paginationFractionRender ? y.params.paginationFractionRender(y, y.params.paginationCurrentClass, y.params.paginationTotalClass)  : '<span class="' + y.params.paginationCurrentClass + '"></span> / <span class="' + y.params.paginationTotalClass + '"></span>', y.paginationContainer.html(e)),
          'progress' === y.params.paginationType && (e = y.params.paginationProgressRender ? y.params.paginationProgressRender(y, y.params.paginationProgressbarClass)  : '<span class="' + y.params.paginationProgressbarClass + '"></span>', y.paginationContainer.html(e)),
          'custom' !== y.params.paginationType && y.emit('onPaginationRendered', y, y.paginationContainer[0])
        }
      },
      y.update = function (e) {
        function a() {
          y.rtl,
          y.translate,
          t = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate()),
          y.setWrapperTranslate(t),
          y.updateActiveIndex(),
          y.updateClasses()
        }
        if (y) {
          y.updateContainerSize(),
          y.updateSlidesSize(),
          y.updateProgress(),
          y.updatePagination(),
          y.updateClasses(),
          y.params.scrollbar && y.scrollbar && y.scrollbar.set();
          var t;
          e ? (y.controller && y.controller.spline && (y.controller.spline = void 0), y.params.freeMode ? (a(), y.params.autoHeight && y.updateAutoHeight())  : (('auto' === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0)  : y.slideTo(y.activeIndex, 0, !1, !0)) || a())  : y.params.autoHeight && y.updateAutoHeight()
        }
      },
      y.onResize = function (e) {
        y.params.onBeforeResize && y.params.onBeforeResize(y),
        y.params.breakpoints && y.setBreakpoint();
        var a = y.params.allowSwipeToPrev,
        t = y.params.allowSwipeToNext;
        y.params.allowSwipeToPrev = y.params.allowSwipeToNext = !0,
        y.updateContainerSize(),
        y.updateSlidesSize(),
        ('auto' === y.params.slidesPerView || y.params.freeMode || e) && y.updatePagination(),
        y.params.scrollbar && y.scrollbar && y.scrollbar.set(),
        y.controller && y.controller.spline && (y.controller.spline = void 0);
        var s = !1;
        if (y.params.freeMode) {
          var r = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate());
          y.setWrapperTranslate(r),
          y.updateActiveIndex(),
          y.updateClasses(),
          y.params.autoHeight && y.updateAutoHeight()
        } else y.updateClasses(),
        s = ('auto' === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0)  : y.slideTo(y.activeIndex, 0, !1, !0);
        y.params.lazyLoading && !s && y.lazy && y.lazy.load(),
        y.params.allowSwipeToPrev = a,
        y.params.allowSwipeToNext = t,
        y.params.onAfterResize && y.params.onAfterResize(y)
      },
      y.touchEventsDesktop = {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
      },
      window.navigator.pointerEnabled ? y.touchEventsDesktop = {
        start: 'pointerdown',
        move: 'pointermove',
        end: 'pointerup'
      }
       : window.navigator.msPointerEnabled && (y.touchEventsDesktop = {
        start: 'MSPointerDown',
        move: 'MSPointerMove',
        end: 'MSPointerUp'
      }),
      y.touchEvents = {
        start: y.support.touch || !y.params.simulateTouch ? 'touchstart' : y.touchEventsDesktop.start,
        move: y.support.touch || !y.params.simulateTouch ? 'touchmove' : y.touchEventsDesktop.move,
        end: y.support.touch || !y.params.simulateTouch ? 'touchend' : y.touchEventsDesktop.end
      },
      (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ('container' === y.params.touchEventsTarget ? y.container : y.wrapper).addClass('swiper-wp8-' + y.params.direction),
      y.initEvents = function (e) {
        var a = e ? 'off' : 'on',
        t = e ? 'removeEventListener' : 'addEventListener',
        r = 'container' === y.params.touchEventsTarget ? y.container[0] : y.wrapper[0],
        i = y.support.touch ? r : document,
        n = !!y.params.nested;
        if (y.browser.ie) r[t](y.touchEvents.start, y.onTouchStart, !1),
        i[t](y.touchEvents.move, y.onTouchMove, n),
        i[t](y.touchEvents.end, y.onTouchEnd, !1);
         else {
          if (y.support.touch) {
            var o = !('touchstart' !== y.touchEvents.start || !y.support.passiveListener || !y.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r[t](y.touchEvents.start, y.onTouchStart, o),
            r[t](y.touchEvents.move, y.onTouchMove, n),
            r[t](y.touchEvents.end, y.onTouchEnd, o)
          }(s.simulateTouch && !y.device.ios && !y.device.android || s.simulateTouch && !y.support.touch && y.device.ios) && (r[t]('mousedown', y.onTouchStart, !1), document[t]('mousemove', y.onTouchMove, n), document[t]('mouseup', y.onTouchEnd, !1))
        }
        window[t]('resize', y.onResize),
        y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.nextButton[a]('click', y.onClickNext), y.params.a11y && y.a11y && y.nextButton[a]('keydown', y.a11y.onEnterKey)),
        y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.prevButton[a]('click', y.onClickPrev), y.params.a11y && y.a11y && y.prevButton[a]('keydown', y.a11y.onEnterKey)),
        y.params.pagination && y.params.paginationClickable && (y.paginationContainer[a]('click', '.' + y.params.bulletClass, y.onClickIndex), y.params.a11y && y.a11y && y.paginationContainer[a]('keydown', '.' + y.params.bulletClass, y.a11y.onEnterKey)),
        (y.params.preventClicks || y.params.preventClicksPropagation) && r[t]('click', y.preventClicks, !0)
      },
      y.attachEvents = function () {
        y.initEvents()
      },
      y.detachEvents = function () {
        y.initEvents(!0)
      },
      y.allowClick = !0,
      y.preventClicks = function (e) {
        y.allowClick || (y.params.preventClicks && e.preventDefault(), y.params.preventClicksPropagation && y.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
      },
      y.onClickNext = function (e) {
        e.preventDefault(),
        y.isEnd && !y.params.loop || y.slideNext()
      },
      y.onClickPrev = function (e) {
        e.preventDefault(),
        y.isBeginning && !y.params.loop || y.slidePrev()
      },
      y.onClickIndex = function (a) {
        a.preventDefault();
        var t = e(this).index() * y.params.slidesPerGroup;
        y.params.loop && (t += y.loopedSlides),
        y.slideTo(t)
      },
      y.updateClickedSlide = function (a) {
        var t = n(a, '.' + y.params.slideClass),
        s = !1;
        if (t) for (var r = 0; r < y.slides.length; r++) y.slides[r] === t && (s = !0);
        if (!t || !s) return y.clickedSlide = void 0,
        void (y.clickedIndex = void 0);
        if (y.clickedSlide = t, y.clickedIndex = e(t).index(), y.params.slideToClickedSlide && void 0 !== y.clickedIndex && y.clickedIndex !== y.activeIndex) {
          var i,
          o = y.clickedIndex,
          l = 'auto' === y.params.slidesPerView ? y.currentSlidesPerView()  : y.params.slidesPerView;
          if (y.params.loop) {
            if (y.animating) return;
            i = parseInt(e(y.clickedSlide).attr('data-swiper-slide-index'), 10),
            y.params.centeredSlides ? o < y.loopedSlides - l / 2 || o > y.slides.length - y.loopedSlides + l / 2 ? (y.fixLoop(), o = y.wrapper.children('.' + y.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + y.params.slideDuplicateClass + ')').eq(0).index(), setTimeout(function () {
              y.slideTo(o)
            }, 0))  : y.slideTo(o)  : o > y.slides.length - l ? (y.fixLoop(), o = y.wrapper.children('.' + y.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + y.params.slideDuplicateClass + ')').eq(0).index(), setTimeout(function () {
              y.slideTo(o)
            }, 0))  : y.slideTo(o)
          } else y.slideTo(o)
        }
      };
      var b,
      C,
      S,
      z,
      M,
      P,
      E,
      I,
      k,
      D,
      L = 'input, select, textarea, button, video',
      B = Date.now(),
      H = [
      ];
      y.animating = !1,
      y.touches = {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      };
      var G,
      X;
      y.onTouchStart = function (a) {
        if (a.originalEvent && (a = a.originalEvent), (G = 'touchstart' === a.type) || !('which' in a) || 3 !== a.which) {
          if (y.params.noSwiping && n(a, '.' + y.params.noSwipingClass)) return void (y.allowClick = !0);
          if (!y.params.swipeHandler || n(a, y.params.swipeHandler)) {
            var t = y.touches.currentX = 'touchstart' === a.type ? a.targetTouches[0].pageX : a.pageX,
            s = y.touches.currentY = 'touchstart' === a.type ? a.targetTouches[0].pageY : a.pageY;
            if (!(y.device.ios && y.params.iOSEdgeSwipeDetection && t <= y.params.iOSEdgeSwipeThreshold)) {
              if (b = !0, C = !1, S = !0, M = void 0, X = void 0, y.touches.startX = t, y.touches.startY = s, z = Date.now(), y.allowClick = !0, y.updateContainerSize(), y.swipeDirection = void 0, y.params.threshold > 0 && (I = !1), 'touchstart' !== a.type) {
                var r = !0;
                e(a.target).is(L) && (r = !1),
                document.activeElement && e(document.activeElement).is(L) && document.activeElement.blur(),
                r && a.preventDefault()
              }
              y.emit('onTouchStart', y, a)
            }
          }
        }
      },
      y.onTouchMove = function (a) {
        if (a.originalEvent && (a = a.originalEvent), !G || 'mousemove' !== a.type) {
          if (a.preventedByNestedSwiper) return y.touches.startX = 'touchmove' === a.type ? a.targetTouches[0].pageX : a.pageX,
          void (y.touches.startY = 'touchmove' === a.type ? a.targetTouches[0].pageY : a.pageY);
          if (y.params.onlyExternal) return y.allowClick = !1,
          void (b && (y.touches.startX = y.touches.currentX = 'touchmove' === a.type ? a.targetTouches[0].pageX : a.pageX, y.touches.startY = y.touches.currentY = 'touchmove' === a.type ? a.targetTouches[0].pageY : a.pageY, z = Date.now()));
          if (G && y.params.touchReleaseOnEdges && !y.params.loop) if (y.isHorizontal()) {
            if (y.touches.currentX < y.touches.startX && y.translate <= y.maxTranslate() || y.touches.currentX > y.touches.startX && y.translate >= y.minTranslate()) return
          } else if (y.touches.currentY < y.touches.startY && y.translate <= y.maxTranslate() || y.touches.currentY > y.touches.startY && y.translate >= y.minTranslate()) return;
          if (G && document.activeElement && a.target === document.activeElement && e(a.target).is(L)) return C = !0,
          void (y.allowClick = !1);
          if (S && y.emit('onTouchMove', y, a), !(a.targetTouches && a.targetTouches.length > 1)) {
            if (y.touches.currentX = 'touchmove' === a.type ? a.targetTouches[0].pageX : a.pageX, y.touches.currentY = 'touchmove' === a.type ? a.targetTouches[0].pageY : a.pageY, void 0 === M) {
              var t;
              y.isHorizontal() && y.touches.currentY === y.touches.startY || !y.isHorizontal() && y.touches.currentX === y.touches.startX ? M = !1 : (t = 180 * Math.atan2(Math.abs(y.touches.currentY - y.touches.startY), Math.abs(y.touches.currentX - y.touches.startX)) / Math.PI, M = y.isHorizontal() ? t > y.params.touchAngle : 90 - t > y.params.touchAngle)
            }
            if (M && y.emit('onTouchMoveOpposite', y, a), void 0 === X && (y.touches.currentX === y.touches.startX && y.touches.currentY === y.touches.startY || (X = !0)), b) {
              if (M) return void (b = !1);
              if (X) {
                y.allowClick = !1,
                y.emit('onSliderMove', y, a),
                a.preventDefault(),
                y.params.touchMoveStopPropagation && !y.params.nested && a.stopPropagation(),
                C || (s.loop && y.fixLoop(), E = y.getWrapperTranslate(), y.setWrapperTransition(0), y.animating && y.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd'), y.params.autoplay && y.autoplaying && (y.params.autoplayDisableOnInteraction ? y.stopAutoplay()  : y.pauseAutoplay()), D = !1, !y.params.grabCursor || !0 !== y.params.allowSwipeToNext && !0 !== y.params.allowSwipeToPrev || y.setGrabCursor(!0)),
                C = !0;
                var r = y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY;
                r *= y.params.touchRatio,
                y.rtl && (r = - r),
                y.swipeDirection = r > 0 ? 'prev' : 'next',
                P = r + E;
                var i = !0;
                if (r > 0 && P > y.minTranslate() ? (i = !1, y.params.resistance && (P = y.minTranslate() - 1 + Math.pow( - y.minTranslate() + E + r, y.params.resistanceRatio)))  : r < 0 && P < y.maxTranslate() && (i = !1, y.params.resistance && (P = y.maxTranslate() + 1 - Math.pow(y.maxTranslate() - E - r, y.params.resistanceRatio))), i && (a.preventedByNestedSwiper = !0), !y.params.allowSwipeToNext && 'next' === y.swipeDirection && P < E && (P = E), !y.params.allowSwipeToPrev && 'prev' === y.swipeDirection && P > E && (P = E), y.params.threshold > 0) {
                  if (!(Math.abs(r) > y.params.threshold || I)) return void (P = E);
                  if (!I) return I = !0,
                  y.touches.startX = y.touches.currentX,
                  y.touches.startY = y.touches.currentY,
                  P = E,
                  void (y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY)
                }
                y.params.followFinger && ((y.params.freeMode || y.params.watchSlidesProgress) && y.updateActiveIndex(), y.params.freeMode && (0 === H.length && H.push({
                  position: y.touches[y.isHorizontal() ? 'startX' : 'startY'],
                  time: z
                }), H.push({
                  position: y.touches[y.isHorizontal() ? 'currentX' : 'currentY'],
                  time: (new window.Date).getTime()
                })), y.updateProgress(P), y.setWrapperTranslate(P))
              }
            }
          }
        }
      },
      y.onTouchEnd = function (a) {
        if (a.originalEvent && (a = a.originalEvent), S && y.emit('onTouchEnd', y, a), S = !1, b) {
          y.params.grabCursor && C && b && (!0 === y.params.allowSwipeToNext || !0 === y.params.allowSwipeToPrev) && y.setGrabCursor(!1);
          var t = Date.now(),
          s = t - z;
          if (y.allowClick && (y.updateClickedSlide(a), y.emit('onTap', y, a), s < 300 && t - B > 300 && (k && clearTimeout(k), k = setTimeout(function () {
            y && (y.params.paginationHide && y.paginationContainer.length > 0 && !e(a.target).hasClass(y.params.bulletClass) && y.paginationContainer.toggleClass(y.params.paginationHiddenClass), y.emit('onClick', y, a))
          }, 300)), s < 300 && t - B < 300 && (k && clearTimeout(k), y.emit('onDoubleTap', y, a))), B = Date.now(), setTimeout(function () {
            y && (y.allowClick = !0)
          }, 0), !b || !C || !y.swipeDirection || 0 === y.touches.diff || P === E) return void (b = C = !1);
          b = C = !1;
          var r;
          if (r = y.params.followFinger ? y.rtl ? y.translate : - y.translate : - P, y.params.freeMode) {
            if (r < - y.minTranslate()) return void y.slideTo(y.activeIndex);
            if (r > - y.maxTranslate()) return void (y.slides.length < y.snapGrid.length ? y.slideTo(y.snapGrid.length - 1)  : y.slideTo(y.slides.length - 1));
            if (y.params.freeModeMomentum) {
              if (H.length > 1) {
                var i = H.pop(),
                n = H.pop(),
                o = i.position - n.position,
                l = i.time - n.time;
                y.velocity = o / l,
                y.velocity = y.velocity / 2,
                Math.abs(y.velocity) < y.params.freeModeMinimumVelocity && (y.velocity = 0),
                (l > 150 || (new window.Date).getTime() - i.time > 300) && (y.velocity = 0)
              } else y.velocity = 0;
              y.velocity = y.velocity * y.params.freeModeMomentumVelocityRatio,
              H.length = 0;
              var p = 1000 * y.params.freeModeMomentumRatio,
              d = y.velocity * p,
              m = y.translate + d;
              y.rtl && (m = - m);
              var u,
              c = !1,
              g = 20 * Math.abs(y.velocity) * y.params.freeModeMomentumBounceRatio;
              if (m < y.maxTranslate()) y.params.freeModeMomentumBounce ? (m + y.maxTranslate() < - g && (m = y.maxTranslate() - g), u = y.maxTranslate(), c = !0, D = !0)  : m = y.maxTranslate();
               else if (m > y.minTranslate()) y.params.freeModeMomentumBounce ? (m - y.minTranslate() > g && (m = y.minTranslate() + g), u = y.minTranslate(), c = !0, D = !0)  : m = y.minTranslate();
               else if (y.params.freeModeSticky) {
                var h,
                v = 0;
                for (v = 0; v < y.snapGrid.length; v += 1) if (y.snapGrid[v] > - m) {
                  h = v;
                  break
                }
                m = Math.abs(y.snapGrid[h] - m) < Math.abs(y.snapGrid[h - 1] - m) || 'next' === y.swipeDirection ? y.snapGrid[h] : y.snapGrid[h - 1],
                y.rtl || (m = - m)
              }
              if (0 !== y.velocity) p = y.rtl ? Math.abs(( - m - y.translate) / y.velocity)  : Math.abs((m - y.translate) / y.velocity);
               else if (y.params.freeModeSticky) return void y.slideReset();
              y.params.freeModeMomentumBounce && c ? (y.updateProgress(u), y.setWrapperTransition(p), y.setWrapperTranslate(m), y.onTransitionStart(), y.animating = !0, y.wrapper.transitionEnd(function () {
                y && D && (y.emit('onMomentumBounce', y), y.setWrapperTransition(y.params.speed), y.setWrapperTranslate(u), y.wrapper.transitionEnd(function () {
                  y && y.onTransitionEnd()
                }))
              }))  : y.velocity ? (y.updateProgress(m), y.setWrapperTransition(p), y.setWrapperTranslate(m), y.onTransitionStart(), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function () {
                y && y.onTransitionEnd()
              })))  : y.updateProgress(m),
              y.updateActiveIndex()
            }
            return void ((!y.params.freeModeMomentum || s >= y.params.longSwipesMs) && (y.updateProgress(), y.updateActiveIndex()))
          }
          var f,
          w = 0,
          x = y.slidesSizesGrid[0];
          for (f = 0; f < y.slidesGrid.length; f += y.params.slidesPerGroup) void 0 !== y.slidesGrid[f + y.params.slidesPerGroup] ? r >= y.slidesGrid[f] && r < y.slidesGrid[f + y.params.slidesPerGroup] && (w = f, x = y.slidesGrid[f + y.params.slidesPerGroup] - y.slidesGrid[f])  : r >= y.slidesGrid[f] && (w = f, x = y.slidesGrid[y.slidesGrid.length - 1] - y.slidesGrid[y.slidesGrid.length - 2]);
          var T = (r - y.slidesGrid[w]) / x;
          if (s > y.params.longSwipesMs) {
            if (!y.params.longSwipes) return void y.slideTo(y.activeIndex);
            'next' === y.swipeDirection && (T >= y.params.longSwipesRatio ? y.slideTo(w + y.params.slidesPerGroup)  : y.slideTo(w)),
            'prev' === y.swipeDirection && (T > 1 - y.params.longSwipesRatio ? y.slideTo(w + y.params.slidesPerGroup)  : y.slideTo(w))
          } else {
            if (!y.params.shortSwipes) return void y.slideTo(y.activeIndex);
            'next' === y.swipeDirection && y.slideTo(w + y.params.slidesPerGroup),
            'prev' === y.swipeDirection && y.slideTo(w)
          }
        }
      },
      y._slideTo = function (e, a) {
        return y.slideTo(e, a, !0, !0)
      },
      y.slideTo = function (e, a, t, s) {
        void 0 === t && (t = !0),
        void 0 === e && (e = 0),
        e < 0 && (e = 0),
        y.snapIndex = Math.floor(e / y.params.slidesPerGroup),
        y.snapIndex >= y.snapGrid.length && (y.snapIndex = y.snapGrid.length - 1);
        var r = - y.snapGrid[y.snapIndex];
        if (y.params.autoplay && y.autoplaying && (s || !y.params.autoplayDisableOnInteraction ? y.pauseAutoplay(a)  : y.stopAutoplay()), y.updateProgress(r), y.params.normalizeSlideIndex) for (var i = 0; i < y.slidesGrid.length; i++) - Math.floor(100 * r) >= Math.floor(100 * y.slidesGrid[i]) && (e = i);
        return !(!y.params.allowSwipeToNext && r < y.translate && r < y.minTranslate() || !y.params.allowSwipeToPrev && r > y.translate && r > y.maxTranslate() && (y.activeIndex || 0) !== e || (void 0 === a && (a = y.params.speed), y.previousIndex = y.activeIndex || 0, y.activeIndex = e, y.updateRealIndex(), y.rtl && - r === y.translate || !y.rtl && r === y.translate ? (y.params.autoHeight && y.updateAutoHeight(), y.updateClasses(), 'slide' !== y.params.effect && y.setWrapperTranslate(r), 1)  : (y.updateClasses(), y.onTransitionStart(t), 0 === a || y.browser.lteIE9 ? (y.setWrapperTranslate(r), y.setWrapperTransition(0), y.onTransitionEnd(t))  : (y.setWrapperTranslate(r), y.setWrapperTransition(a), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function () {
          y && y.onTransitionEnd(t)
        }))), 0)))
      },
      y.onTransitionStart = function (e) {
        void 0 === e && (e = !0),
        y.params.autoHeight && y.updateAutoHeight(),
        y.lazy && y.lazy.onTransitionStart(),
        e && (y.emit('onTransitionStart', y), y.activeIndex !== y.previousIndex && (y.emit('onSlideChangeStart', y), y.activeIndex > y.previousIndex ? y.emit('onSlideNextStart', y)  : y.emit('onSlidePrevStart', y)))
      },
      y.onTransitionEnd = function (e) {
        y.animating = !1,
        y.setWrapperTransition(0),
        void 0 === e && (e = !0),
        y.lazy && y.lazy.onTransitionEnd(),
        e && (y.emit('onTransitionEnd', y), y.activeIndex !== y.previousIndex && (y.emit('onSlideChangeEnd', y), y.activeIndex > y.previousIndex ? y.emit('onSlideNextEnd', y)  : y.emit('onSlidePrevEnd', y))),
        y.params.history && y.history && y.history.setHistory(y.params.history, y.activeIndex),
        y.params.hashnav && y.hashnav && y.hashnav.setHash()
      },
      y.slideNext = function (e, a, t) {
        return y.params.loop ? !y.animating && (y.fixLoop(), y.container[0].clientLeft, y.slideTo(y.activeIndex + y.params.slidesPerGroup, a, e, t))  : y.slideTo(y.activeIndex + y.params.slidesPerGroup, a, e, t)
      },
      y._slideNext = function (e) {
        return y.slideNext(!0, e, !0)
      },
      y.slidePrev = function (e, a, t) {
        return y.params.loop ? !y.animating && (y.fixLoop(), y.container[0].clientLeft, y.slideTo(y.activeIndex - 1, a, e, t))  : y.slideTo(y.activeIndex - 1, a, e, t)
      },
      y._slidePrev = function (e) {
        return y.slidePrev(!0, e, !0)
      },
      y.slideReset = function (e, a, t) {
        return y.slideTo(y.activeIndex, a, e)
      },
      y.disableTouchControl = function () {
        return y.params.onlyExternal = !0,
        !0
      },
      y.enableTouchControl = function () {
        return y.params.onlyExternal = !1,
        !0
      },
      y.setWrapperTransition = function (e, a) {
        y.wrapper.transition(e),
        'slide' !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTransition(e),
        y.params.parallax && y.parallax && y.parallax.setTransition(e),
        y.params.scrollbar && y.scrollbar && y.scrollbar.setTransition(e),
        y.params.control && y.controller && y.controller.setTransition(e, a),
        y.emit('onSetTransition', y, e)
      },
      y.setWrapperTranslate = function (e, a, t) {
        var s = 0,
        i = 0;
        y.isHorizontal() ? s = y.rtl ? - e : e : i = e,
        y.params.roundLengths && (s = r(s), i = r(i)),
        y.params.virtualTranslate || (y.support.transforms3d ? y.wrapper.transform('translate3d(' + s + 'px, ' + i + 'px, 0px)')  : y.wrapper.transform('translate(' + s + 'px, ' + i + 'px)')),
        y.translate = y.isHorizontal() ? s : i;
        var n = y.maxTranslate() - y.minTranslate();
        (0 === n ? 0 : (e - y.minTranslate()) / n) !== y.progress && y.updateProgress(e),
        a && y.updateActiveIndex(),
        'slide' !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTranslate(y.translate),
        y.params.parallax && y.parallax && y.parallax.setTranslate(y.translate),
        y.params.scrollbar && y.scrollbar && y.scrollbar.setTranslate(y.translate),
        y.params.control && y.controller && y.controller.setTranslate(y.translate, t),
        y.emit('onSetTranslate', y, y.translate)
      },
      y.getTranslate = function (e, a) {
        var t,
        s,
        r,
        i;
        return void 0 === a && (a = 'x'),
        y.params.virtualTranslate ? y.rtl ? - y.translate : y.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? ((s = r.transform || r.webkitTransform).split(',').length > 6 && (s = s.split(', ').map(function (e) {
          return e.replace(',', '.')
        }).join(', ')), i = new window.WebKitCSSMatrix('none' === s ? '' : s))  : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'), t = i.toString().split(',')), 'x' === a && (s = window.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12])  : parseFloat(t[4])), 'y' === a && (s = window.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13])  : parseFloat(t[5])), y.rtl && s && (s = - s), s || 0)
      },
      y.getWrapperTranslate = function (e) {
        return void 0 === e && (e = y.isHorizontal() ? 'x' : 'y'),
        y.getTranslate(y.wrapper[0], e)
      },
      y.observers = [
      ],
      y.initObservers = function () {
        if (y.params.observeParents) for (var e = y.container.parents(), a = 0; a < e.length; a++) o(e[a]);
        o(y.container[0], {
          childList: !1
        }),
        o(y.wrapper[0], {
          attributes: !1
        })
      },
      y.disconnectObservers = function () {
        for (var e = 0; e < y.observers.length; e++) y.observers[e].disconnect();
        y.observers = [
        ]
      },
      y.createLoop = function () {
        y.wrapper.children('.' + y.params.slideClass + '.' + y.params.slideDuplicateClass).remove();
        var a = y.wrapper.children('.' + y.params.slideClass);
        'auto' !== y.params.slidesPerView || y.params.loopedSlides || (y.params.loopedSlides = a.length),
        y.loopedSlides = parseInt(y.params.loopedSlides || y.params.slidesPerView, 10),
        y.loopedSlides = y.loopedSlides + y.params.loopAdditionalSlides,
        y.loopedSlides > a.length && (y.loopedSlides = a.length);
        var t,
        s = [
        ],
        r = [
        ];
        for (a.each(function (t, i) {
          var n = e(this);
          t < y.loopedSlides && r.push(i),
          t < a.length && t >= a.length - y.loopedSlides && s.push(i),
          n.attr('data-swiper-slide-index', t)
        }), t = 0; t < r.length; t++) y.wrapper.append(e(r[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass));
        for (t = s.length - 1; t >= 0; t--) y.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass))
      },
      y.destroyLoop = function () {
        y.wrapper.children('.' + y.params.slideClass + '.' + y.params.slideDuplicateClass).remove(),
        y.slides.removeAttr('data-swiper-slide-index')
      },
      y.reLoop = function (e) {
        var a = y.activeIndex - y.loopedSlides;
        y.destroyLoop(),
        y.createLoop(),
        y.updateSlidesSize(),
        e && y.slideTo(a + y.loopedSlides, 0, !1)
      },
      y.fixLoop = function () {
        var e;
        y.activeIndex < y.loopedSlides ? (e = y.slides.length - 3 * y.loopedSlides + y.activeIndex, e += y.loopedSlides, y.slideTo(e, 0, !1, !0))  : ('auto' === y.params.slidesPerView && y.activeIndex >= 2 * y.loopedSlides || y.activeIndex > y.slides.length - 2 * y.params.slidesPerView) && (e = - y.slides.length + y.activeIndex + y.loopedSlides, e += y.loopedSlides, y.slideTo(e, 0, !1, !0))
      },
      y.appendSlide = function (e) {
        if (y.params.loop && y.destroyLoop(), 'object' == typeof e && e.length) for (var a = 0; a < e.length; a++) e[a] && y.wrapper.append(e[a]);
         else y.wrapper.append(e);
        y.params.loop && y.createLoop(),
        y.params.observer && y.support.observer || y.update(!0)
      },
      y.prependSlide = function (e) {
        y.params.loop && y.destroyLoop();
        var a = y.activeIndex + 1;
        if ('object' == typeof e && e.length) {
          for (var t = 0; t < e.length; t++) e[t] && y.wrapper.prepend(e[t]);
          a = y.activeIndex + e.length
        } else y.wrapper.prepend(e);
        y.params.loop && y.createLoop(),
        y.params.observer && y.support.observer || y.update(!0),
        y.slideTo(a, 0, !1)
      },
      y.removeSlide = function (e) {
        y.params.loop && (y.destroyLoop(), y.slides = y.wrapper.children('.' + y.params.slideClass));
        var a,
        t = y.activeIndex;
        if ('object' == typeof e && e.length) {
          for (var s = 0; s < e.length; s++) a = e[s],
          y.slides[a] && y.slides.eq(a).remove(),
          a < t && t--;
          t = Math.max(t, 0)
        } else a = e,
        y.slides[a] && y.slides.eq(a).remove(),
        a < t && t--,
        t = Math.max(t, 0);
        y.params.loop && y.createLoop(),
        y.params.observer && y.support.observer || y.update(!0),
        y.params.loop ? y.slideTo(t + y.loopedSlides, 0, !1)  : y.slideTo(t, 0, !1)
      },
      y.removeAllSlides = function () {
        for (var e = [
        ], a = 0; a < y.slides.length; a++) e.push(a);
        y.removeSlide(e)
      },
      y.effects = {
        fade: {
          setTranslate: function () {
            for (var e = 0; e < y.slides.length; e++) {
              var a = y.slides.eq(e),
              t = - a[0].swiperSlideOffset;
              y.params.virtualTranslate || (t -= y.translate);
              var s = 0;
              y.isHorizontal() || (s = t, t = 0);
              var r = y.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0)  : 1 + Math.min(Math.max(a[0].progress, - 1), 0);
              a.css({
                opacity: r
              }).transform('translate3d(' + t + 'px, ' + s + 'px, 0px)')
            }
          },
          setTransition: function (e) {
            if (y.slides.transition(e), y.params.virtualTranslate && 0 !== e) {
              var a = !1;
              y.slides.transitionEnd(function () {
                if (!a && y) {
                  a = !0,
                  y.animating = !1;
                  for (var e = [
                    'webkitTransitionEnd',
                    'transitionend',
                    'oTransitionEnd',
                    'MSTransitionEnd',
                    'msTransitionEnd'
                  ], t = 0; t < e.length; t++) y.wrapper.trigger(e[t])
                }
              })
            }
          }
        },
        flip: {
          setTranslate: function () {
            for (var a = 0; a < y.slides.length; a++) {
              var t = y.slides.eq(a),
              s = t[0].progress;
              y.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), - 1));
              var r = - 180 * s,
              i = 0,
              n = - t[0].swiperSlideOffset,
              o = 0;
              if (y.isHorizontal() ? y.rtl && (r = - r)  : (o = n, n = 0, i = - r, r = 0), t[0].style.zIndex = - Math.abs(Math.round(s)) + y.slides.length, y.params.flip.slideShadows) {
                var l = y.isHorizontal() ? t.find('.swiper-slide-shadow-left')  : t.find('.swiper-slide-shadow-top'),
                p = y.isHorizontal() ? t.find('.swiper-slide-shadow-right')  : t.find('.swiper-slide-shadow-bottom');
                0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? 'left' : 'top') + '"></div>'), t.append(l)),
                0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? 'right' : 'bottom') + '"></div>'), t.append(p)),
                l.length && (l[0].style.opacity = Math.max( - s, 0)),
                p.length && (p[0].style.opacity = Math.max(s, 0))
              }
              t.transform('translate3d(' + n + 'px, ' + o + 'px, 0px) rotateX(' + i + 'deg) rotateY(' + r + 'deg)')
            }
          },
          setTransition: function (a) {
            if (y.slides.transition(a).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(a), y.params.virtualTranslate && 0 !== a) {
              var t = !1;
              y.slides.eq(y.activeIndex).transitionEnd(function () {
                if (!t && y && e(this).hasClass(y.params.slideActiveClass)) {
                  t = !0,
                  y.animating = !1;
                  for (var a = [
                    'webkitTransitionEnd',
                    'transitionend',
                    'oTransitionEnd',
                    'MSTransitionEnd',
                    'msTransitionEnd'
                  ], s = 0; s < a.length; s++) y.wrapper.trigger(a[s])
                }
              })
            }
          }
        },
        cube: {
          setTranslate: function () {
            var a,
            t = 0;
            y.params.cube.shadow && (y.isHorizontal() ? (0 === (a = y.wrapper.find('.swiper-cube-shadow')).length && (a = e('<div class="swiper-cube-shadow"></div>'), y.wrapper.append(a)), a.css({
              height: y.width + 'px'
            }))  : 0 === (a = y.container.find('.swiper-cube-shadow')).length && (a = e('<div class="swiper-cube-shadow"></div>'), y.container.append(a)));
            for (var s = 0; s < y.slides.length; s++) {
              var r = y.slides.eq(s),
              i = 90 * s,
              n = Math.floor(i / 360);
              y.rtl && (i = - i, n = Math.floor( - i / 360));
              var o = Math.max(Math.min(r[0].progress, 1), - 1),
              l = 0,
              p = 0,
              d = 0;
              s % 4 == 0 ? (l = 4 * - n * y.size, d = 0)  : (s - 1) % 4 == 0 ? (l = 0, d = 4 * - n * y.size)  : (s - 2) % 4 == 0 ? (l = y.size + 4 * n * y.size, d = y.size)  : (s - 3) % 4 == 0 && (l = - y.size, d = 3 * y.size + 4 * y.size * n),
              y.rtl && (l = - l),
              y.isHorizontal() || (p = l, l = 0);
              var m = 'rotateX(' + (y.isHorizontal() ? 0 : - i) + 'deg) rotateY(' + (y.isHorizontal() ? i : 0) + 'deg) translate3d(' + l + 'px, ' + p + 'px, ' + d + 'px)';
              if (o <= 1 && o > - 1 && (t = 90 * s + 90 * o, y.rtl && (t = 90 * - s - 90 * o)), r.transform(m), y.params.cube.slideShadows) {
                var u = y.isHorizontal() ? r.find('.swiper-slide-shadow-left')  : r.find('.swiper-slide-shadow-top'),
                c = y.isHorizontal() ? r.find('.swiper-slide-shadow-right')  : r.find('.swiper-slide-shadow-bottom');
                0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? 'left' : 'top') + '"></div>'), r.append(u)),
                0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? 'right' : 'bottom') + '"></div>'), r.append(c)),
                u.length && (u[0].style.opacity = Math.max( - o, 0)),
                c.length && (c[0].style.opacity = Math.max(o, 0))
              }
            }
            if (y.wrapper.css({
              '-webkit-transform-origin': '50% 50% -' + y.size / 2 + 'px',
              '-moz-transform-origin': '50% 50% -' + y.size / 2 + 'px',
              '-ms-transform-origin': '50% 50% -' + y.size / 2 + 'px',
              'transform-origin': '50% 50% -' + y.size / 2 + 'px'
            }), y.params.cube.shadow) if (y.isHorizontal()) a.transform('translate3d(0px, ' + (y.width / 2 + y.params.cube.shadowOffset) + 'px, ' + - y.width / 2 + 'px) rotateX(90deg) rotateZ(0deg) scale(' + y.params.cube.shadowScale + ')');
             else {
              var g = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
              h = 1.5 - (Math.sin(2 * g * Math.PI / 360) / 2 + Math.cos(2 * g * Math.PI / 360) / 2),
              v = y.params.cube.shadowScale,
              f = y.params.cube.shadowScale / h,
              w = y.params.cube.shadowOffset;
              a.transform('scale3d(' + v + ', 1, ' + f + ') translate3d(0px, ' + (y.height / 2 + w) + 'px, ' + - y.height / 2 / f + 'px) rotateX(-90deg)')
            }
            var x = y.isSafari || y.isUiWebView ? - y.size / 2 : 0;
            y.wrapper.transform('translate3d(0px,0,' + x + 'px) rotateX(' + (y.isHorizontal() ? 0 : t) + 'deg) rotateY(' + (y.isHorizontal() ? - t : 0) + 'deg)')
          },
          setTransition: function (e) {
            y.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e),
            y.params.cube.shadow && !y.isHorizontal() && y.container.find('.swiper-cube-shadow').transition(e)
          }
        },
        coverflow: {
          setTranslate: function () {
            for (var a = y.translate, t = y.isHorizontal() ? - a + y.width / 2 : - a + y.height / 2, s = y.isHorizontal() ? y.params.coverflow.rotate : - y.params.coverflow.rotate, r = y.params.coverflow.depth, i = 0, n = y.slides.length; i < n; i++) {
              var o = y.slides.eq(i),
              l = y.slidesSizesGrid[i],
              p = (t - o[0].swiperSlideOffset - l / 2) / l * y.params.coverflow.modifier,
              d = y.isHorizontal() ? s * p : 0,
              m = y.isHorizontal() ? 0 : s * p,
              u = - r * Math.abs(p),
              c = y.isHorizontal() ? 0 : y.params.coverflow.stretch * p,
              g = y.isHorizontal() ? y.params.coverflow.stretch * p : 0;
              Math.abs(g) < 0.001 && (g = 0),
              Math.abs(c) < 0.001 && (c = 0),
              Math.abs(u) < 0.001 && (u = 0),
              Math.abs(d) < 0.001 && (d = 0),
              Math.abs(m) < 0.001 && (m = 0);
              var h = 'translate3d(' + g + 'px,' + c + 'px,' + u + 'px)  rotateX(' + m + 'deg) rotateY(' + d + 'deg)';
              if (o.transform(h), o[0].style.zIndex = 1 - Math.abs(Math.round(p)), y.params.coverflow.slideShadows) {
                var v = y.isHorizontal() ? o.find('.swiper-slide-shadow-left')  : o.find('.swiper-slide-shadow-top'),
                f = y.isHorizontal() ? o.find('.swiper-slide-shadow-right')  : o.find('.swiper-slide-shadow-bottom');
                0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? 'left' : 'top') + '"></div>'), o.append(v)),
                0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? 'right' : 'bottom') + '"></div>'), o.append(f)),
                v.length && (v[0].style.opacity = p > 0 ? p : 0),
                f.length && (f[0].style.opacity = - p > 0 ? - p : 0)
              }
            }
            y.browser.ie && (y.wrapper[0].style.perspectiveOrigin = t + 'px 50%')
          },
          setTransition: function (e) {
            y.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e)
          }
        }
      },
      y.lazy = {
        initialImageLoaded: !1,
        loadImageInSlide: function (a, t) {
          if (void 0 !== a && (void 0 === t && (t = !0), 0 !== y.slides.length)) {
            var s = y.slides.eq(a),
            r = s.find('.' + y.params.lazyLoadingClass + ':not(.' + y.params.lazyStatusLoadedClass + '):not(.' + y.params.lazyStatusLoadingClass + ')');
            !s.hasClass(y.params.lazyLoadingClass) || s.hasClass(y.params.lazyStatusLoadedClass) || s.hasClass(y.params.lazyStatusLoadingClass) || (r = r.add(s[0])),
            0 !== r.length && r.each(function () {
              var a = e(this);
              a.addClass(y.params.lazyStatusLoadingClass);
              var r = a.attr('data-background'),
              i = a.attr('data-src'),
              n = a.attr('data-srcset'),
              o = a.attr('data-sizes');
              y.loadImage(a[0], i || r, n, o, !1, function () {
                if (void 0 !== y && null !== y && y) {
                  if (r ? (a.css('background-image', 'url("' + r + '")'), a.removeAttr('data-background'))  : (n && (a.attr('srcset', n), a.removeAttr('data-srcset')), o && (a.attr('sizes', o), a.removeAttr('data-sizes')), i && (a.attr('src', i), a.removeAttr('data-src'))), a.addClass(y.params.lazyStatusLoadedClass).removeClass(y.params.lazyStatusLoadingClass), s.find('.' + y.params.lazyPreloaderClass + ', .' + y.params.preloaderClass).remove(), y.params.loop && t) {
                    var e = s.attr('data-swiper-slide-index');
                    if (s.hasClass(y.params.slideDuplicateClass)) {
                      var l = y.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + y.params.slideDuplicateClass + ')');
                      y.lazy.loadImageInSlide(l.index(), !1)
                    } else {
                      var p = y.wrapper.children('.' + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                      y.lazy.loadImageInSlide(p.index(), !1)
                    }
                  }
                  y.emit('onLazyImageReady', y, s[0], a[0])
                }
              }),
              y.emit('onLazyImageLoad', y, s[0], a[0])
            })
          }
        },
        load: function () {
          var a,
          t = y.params.slidesPerView;
          if ('auto' === t && (t = 0), y.lazy.initialImageLoaded || (y.lazy.initialImageLoaded = !0), y.params.watchSlidesVisibility) y.wrapper.children('.' + y.params.slideVisibleClass).each(function () {
            y.lazy.loadImageInSlide(e(this).index())
          });
           else if (t > 1) for (a = y.activeIndex; a < y.activeIndex + t; a++) y.slides[a] && y.lazy.loadImageInSlide(a);
           else y.lazy.loadImageInSlide(y.activeIndex);
          if (y.params.lazyLoadingInPrevNext) if (t > 1 || y.params.lazyLoadingInPrevNextAmount && y.params.lazyLoadingInPrevNextAmount > 1) {
            var s = y.params.lazyLoadingInPrevNextAmount,
            r = t,
            i = Math.min(y.activeIndex + r + Math.max(s, r), y.slides.length),
            n = Math.max(y.activeIndex - Math.max(r, s), 0);
            for (a = y.activeIndex + t; a < i; a++) y.slides[a] && y.lazy.loadImageInSlide(a);
            for (a = n; a < y.activeIndex; a++) y.slides[a] && y.lazy.loadImageInSlide(a)
          } else {
            var o = y.wrapper.children('.' + y.params.slideNextClass);
            o.length > 0 && y.lazy.loadImageInSlide(o.index());
            var l = y.wrapper.children('.' + y.params.slidePrevClass);
            l.length > 0 && y.lazy.loadImageInSlide(l.index())
          }
        },
        onTransitionStart: function () {
          y.params.lazyLoading && (y.params.lazyLoadingOnTransitionStart || !y.params.lazyLoadingOnTransitionStart && !y.lazy.initialImageLoaded) && y.lazy.load()
        },
        onTransitionEnd: function () {
          y.params.lazyLoading && !y.params.lazyLoadingOnTransitionStart && y.lazy.load()
        }
      },
      y.scrollbar = {
        isTouched: !1,
        setDragPosition: function (e) {
          var a = y.scrollbar,
          t = (y.isHorizontal() ? 'touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : 'touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.track.offset() [y.isHorizontal() ? 'left' : 'top'] - a.dragSize / 2,
          s = - y.minTranslate() * a.moveDivider,
          r = - y.maxTranslate() * a.moveDivider;
          t < s ? t = s : t > r && (t = r),
          t = - t / a.moveDivider,
          y.updateProgress(t),
          y.setWrapperTranslate(t, !0)
        },
        dragStart: function (e) {
          var a = y.scrollbar;
          a.isTouched = !0,
          e.preventDefault(),
          e.stopPropagation(),
          a.setDragPosition(e),
          clearTimeout(a.dragTimeout),
          a.track.transition(0),
          y.params.scrollbarHide && a.track.css('opacity', 1),
          y.wrapper.transition(100),
          a.drag.transition(100),
          y.emit('onScrollbarDragStart', y)
        },
        dragMove: function (e) {
          var a = y.scrollbar;
          a.isTouched && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1, a.setDragPosition(e), y.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), y.emit('onScrollbarDragMove', y))
        },
        dragEnd: function (e) {
          var a = y.scrollbar;
          a.isTouched && (a.isTouched = !1, y.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
            a.track.css('opacity', 0),
            a.track.transition(400)
          }, 1000)), y.emit('onScrollbarDragEnd', y), y.params.scrollbarSnapOnRelease && y.slideReset())
        },
        draggableEvents: !1 !== y.params.simulateTouch || y.support.touch ? y.touchEvents : y.touchEventsDesktop,
        enableDraggable: function () {
          var a = y.scrollbar,
          t = y.support.touch ? a.track : document;
          e(a.track).on(a.draggableEvents.start, a.dragStart),
          e(t).on(a.draggableEvents.move, a.dragMove),
          e(t).on(a.draggableEvents.end, a.dragEnd)
        },
        disableDraggable: function () {
          var a = y.scrollbar,
          t = y.support.touch ? a.track : document;
          e(a.track).off(a.draggableEvents.start, a.dragStart),
          e(t).off(a.draggableEvents.move, a.dragMove),
          e(t).off(a.draggableEvents.end, a.dragEnd)
        },
        set: function () {
          if (y.params.scrollbar) {
            var a = y.scrollbar;
            a.track = e(y.params.scrollbar),
            y.params.uniqueNavElements && 'string' == typeof y.params.scrollbar && a.track.length > 1 && 1 === y.container.find(y.params.scrollbar).length && (a.track = y.container.find(y.params.scrollbar)),
            a.drag = a.track.find('.swiper-scrollbar-drag'),
            0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)),
            a.drag[0].style.width = '',
            a.drag[0].style.height = '',
            a.trackSize = y.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight,
            a.divider = y.size / y.virtualSize,
            a.moveDivider = a.divider * (a.trackSize / y.size),
            a.dragSize = a.trackSize * a.divider,
            y.isHorizontal() ? a.drag[0].style.width = a.dragSize + 'px' : a.drag[0].style.height = a.dragSize + 'px',
            a.divider >= 1 ? a.track[0].style.display = 'none' : a.track[0].style.display = '',
            y.params.scrollbarHide && (a.track[0].style.opacity = 0)
          }
        },
        setTranslate: function () {
          if (y.params.scrollbar) {
            var e,
            a = y.scrollbar,
            t = (y.translate, a.dragSize);
            e = (a.trackSize - a.dragSize) * y.progress,
            y.rtl && y.isHorizontal() ? (e = - e, e > 0 ? (t = a.dragSize - e, e = 0)  : - e + a.dragSize > a.trackSize && (t = a.trackSize + e))  : e < 0 ? (t = a.dragSize + e, e = 0)  : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
            y.isHorizontal() ? (y.support.transforms3d ? a.drag.transform('translate3d(' + e + 'px, 0, 0)')  : a.drag.transform('translateX(' + e + 'px)'), a.drag[0].style.width = t + 'px')  : (y.support.transforms3d ? a.drag.transform('translate3d(0px, ' + e + 'px, 0)')  : a.drag.transform('translateY(' + e + 'px)'), a.drag[0].style.height = t + 'px'),
            y.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
              a.track[0].style.opacity = 0,
              a.track.transition(400)
            }, 1000))
          }
        },
        setTransition: function (e) {
          y.params.scrollbar && y.scrollbar.drag.transition(e)
        }
      },
      y.controller = {
        LinearSpline: function (e, a) {
          var t = function () {
            var e,
            a,
            t;
            return function (s, r) {
              for (a = - 1, e = s.length; e - a > 1; ) s[t = e + a >> 1] <= r ? a = t : e = t;
              return e
            }
          }();
          this.x = e,
          this.y = a,
          this.lastIndex = e.length - 1;
          var s,
          r;
          this.x.length,
          this.interpolate = function (e) {
            return e ? (r = t(this.x, e), s = r - 1, (e - this.x[s]) * (this.y[r] - this.y[s]) / (this.x[r] - this.x[s]) + this.y[s])  : 0
          }
        },
        getInterpolateFunction: function (e) {
          y.controller.spline || (y.controller.spline = y.params.loop ? new y.controller.LinearSpline(y.slidesGrid, e.slidesGrid)  : new y.controller.LinearSpline(y.snapGrid, e.snapGrid))
        },
        setTranslate: function (e, t) {
          function s(a) {
            e = a.rtl && 'horizontal' === a.params.direction ? - y.translate : y.translate,
            'slide' === y.params.controlBy && (y.controller.getInterpolateFunction(a), i = - y.controller.spline.interpolate( - e)),
            i && 'container' !== y.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (y.maxTranslate() - y.minTranslate()), i = (e - y.minTranslate()) * r + a.minTranslate()),
            y.params.controlInverse && (i = a.maxTranslate() - i),
            a.updateProgress(i),
            a.setWrapperTranslate(i, !1, y),
            a.updateActiveIndex()
          }
          var r,
          i,
          n = y.params.control;
          if (Array.isArray(n)) for (var o = 0; o < n.length; o++) n[o] !== t && n[o] instanceof a && s(n[o]);
           else n instanceof a && t !== n && s(n)
        },
        setTransition: function (e, t) {
          function s(a) {
            a.setWrapperTransition(e, y),
            0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
              i && (a.params.loop && 'slide' === y.params.controlBy && a.fixLoop(), a.onTransitionEnd())
            }))
          }
          var r,
          i = y.params.control;
          if (Array.isArray(i)) for (r = 0; r < i.length; r++) i[r] !== t && i[r] instanceof a && s(i[r]);
           else i instanceof a && t !== i && s(i)
        }
      },
      y.hashnav = {
        onHashCange: function (e, a) {
          var t = document.location.hash.replace('#', '');
          t !== y.slides.eq(y.activeIndex).attr('data-hash') && y.slideTo(y.wrapper.children('.' + y.params.slideClass + '[data-hash="' + t + '"]').index())
        },
        attachEvents: function (a) {
          var t = a ? 'off' : 'on';
          e(window) [t]('hashchange', y.hashnav.onHashCange)
        },
        setHash: function () {
          if (y.hashnav.initialized && y.params.hashnav) if (y.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, '#' + y.slides.eq(y.activeIndex).attr('data-hash') || '');
           else {
            var e = y.slides.eq(y.activeIndex),
            a = e.attr('data-hash') || e.attr('data-history');
            document.location.hash = a || ''
          }
        },
        init: function () {
          if (y.params.hashnav && !y.params.history) {
            y.hashnav.initialized = !0;
            var e = document.location.hash.replace('#', '');
            if (e) for (var a = 0, t = y.slides.length; a < t; a++) {
              var s = y.slides.eq(a);
              if ((s.attr('data-hash') || s.attr('data-history')) === e && !s.hasClass(y.params.slideDuplicateClass)) {
                var r = s.index();
                y.slideTo(r, 0, y.params.runCallbacksOnInit, !0)
              }
            }
            y.params.hashnavWatchState && y.hashnav.attachEvents()
          }
        },
        destroy: function () {
          y.params.hashnavWatchState && y.hashnav.attachEvents(!0)
        }
      },
      y.history = {
        init: function () {
          if (y.params.history) {
            if (!window.history || !window.history.pushState) return y.params.history = !1,
            void (y.params.hashnav = !0);
            y.history.initialized = !0,
            this.paths = this.getPathValues(),
            (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, y.params.runCallbacksOnInit), y.params.replaceState || window.addEventListener('popstate', this.setHistoryPopState))
          }
        },
        setHistoryPopState: function () {
          y.history.paths = y.history.getPathValues(),
          y.history.scrollToSlide(y.params.speed, y.history.paths.value, !1)
        },
        getPathValues: function () {
          var e = window.location.pathname.slice(1).split('/'),
          a = e.length;
          return {
            key: e[a - 2],
            value: e[a - 1]
          }
        },
        setHistory: function (e, a) {
          if (y.history.initialized && y.params.history) {
            var t = y.slides.eq(a),
            s = this.slugify(t.attr('data-history'));
            window.location.pathname.includes(e) || (s = e + '/' + s),
            y.params.replaceState ? window.history.replaceState(null, null, s)  : window.history.pushState(null, null, s)
          }
        },
        slugify: function (e) {
          return e.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
        },
        scrollToSlide: function (e, a, t) {
          if (a) for (var s = 0, r = y.slides.length; s < r; s++) {
            var i = y.slides.eq(s);
            if (this.slugify(i.attr('data-history')) === a && !i.hasClass(y.params.slideDuplicateClass)) {
              var n = i.index();
              y.slideTo(n, e, t)
            }
          } else y.slideTo(0, e, t)
        }
      },
      y.disableKeyboardControl = function () {
        y.params.keyboardControl = !1,
        e(document).off('keydown', l)
      },
      y.enableKeyboardControl = function () {
        y.params.keyboardControl = !0,
        e(document).on('keydown', l)
      },
      y.mousewheel = {
        event: !1,
        lastScrollTime: (new window.Date).getTime()
      },
      y.params.mousewheelControl && (y.mousewheel.event = navigator.userAgent.indexOf('firefox') > - 1 ? 'DOMMouseScroll' : function () {
        var e = 'onwheel' in document;
        if (!e) {
          var a = document.createElement('div');
          a.setAttribute('onwheel', 'return;'),
          e = 'function' == typeof a.onwheel
        }
        return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature('', '') && (e = document.implementation.hasFeature('Events.wheel', '3.0')),
        e
      }() ? 'wheel' : 'mousewheel'),
      y.disableMousewheelControl = function () {
        if (!y.mousewheel.event) return !1;
        var a = y.container;
        return 'container' !== y.params.mousewheelEventsTarged && (a = e(y.params.mousewheelEventsTarged)),
        a.off(y.mousewheel.event, d),
        y.params.mousewheelControl = !1,
        !0
      },
      y.enableMousewheelControl = function () {
        if (!y.mousewheel.event) return !1;
        var a = y.container;
        return 'container' !== y.params.mousewheelEventsTarged && (a = e(y.params.mousewheelEventsTarged)),
        a.on(y.mousewheel.event, d),
        y.params.mousewheelControl = !0,
        !0
      },
      y.parallax = {
        setTranslate: function () {
          y.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
            m(this, y.progress)
          }),
          y.slides.each(function () {
            var a = e(this);
            a.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
              m(this, Math.min(Math.max(a[0].progress, - 1), 1))
            })
          })
        },
        setTransition: function (a) {
          void 0 === a && (a = y.params.speed),
          y.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
            var t = e(this),
            s = parseInt(t.attr('data-swiper-parallax-duration'), 10) || a;
            0 === a && (s = 0),
            t.transition(s)
          })
        }
      },
      y.zoom = {
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          slide: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          image: void 0,
          imageWrap: void 0,
          zoomMax: y.params.zoomMax
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {
          },
          touchesCurrent: {
          }
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        },
        getDistanceBetweenTouches: function (e) {
          if (e.targetTouches.length < 2) return 1;
          var a = e.targetTouches[0].pageX,
          t = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          r = e.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(s - a, 2) + Math.pow(r - t, 2))
        },
        onGestureStart: function (a) {
          var t = y.zoom;
          if (!y.support.gestures) {
            if ('touchstart' !== a.type || 'touchstart' === a.type && a.targetTouches.length < 2) return;
            t.gesture.scaleStart = t.getDistanceBetweenTouches(a)
          }
          t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this), 0 === t.gesture.slide.length && (t.gesture.slide = y.slides.eq(y.activeIndex)), t.gesture.image = t.gesture.slide.find('img, svg, canvas'), t.gesture.imageWrap = t.gesture.image.parent('.' + y.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr('data-swiper-zoom') || y.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), t.isScaling = !0)  : t.gesture.image = void 0
        },
        onGestureChange: function (e) {
          var a = y.zoom;
          if (!y.support.gestures) {
            if ('touchmove' !== e.type || 'touchmove' === e.type && e.targetTouches.length < 2) return;
            a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
          }
          a.gesture.image && 0 !== a.gesture.image.length && (y.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, 0.5)), a.scale < y.params.zoomMin && (a.scale = y.params.zoomMin + 1 - Math.pow(y.params.zoomMin - a.scale + 1, 0.5)), a.gesture.image.transform('translate3d(0,0,0) scale(' + a.scale + ')'))
        },
        onGestureEnd: function (e) {
          var a = y.zoom;
          !y.support.gestures && ('touchend' !== e.type || 'touchend' === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), y.params.zoomMin), a.gesture.image.transition(y.params.speed).transform('translate3d(0,0,0) scale(' + a.scale + ')'), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0))
        },
        onTouchStart: function (e, a) {
          var t = e.zoom;
          t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ('android' === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = 'touchstart' === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = 'touchstart' === a.type ? a.targetTouches[0].pageY : a.pageY))
        },
        onTouchMove: function (e) {
          var a = y.zoom;
          if (a.gesture.image && 0 !== a.gesture.image.length && (y.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = y.getTranslate(a.gesture.imageWrap[0], 'x') || 0, a.image.startY = y.getTranslate(a.gesture.imageWrap[0], 'y') || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), y.rtl && (a.image.startX = - a.image.startX), y.rtl && (a.image.startY = - a.image.startY));
            var t = a.image.width * a.scale,
            s = a.image.height * a.scale;
            if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
              if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = - a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = - a.image.minY, a.image.touchesCurrent.x = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                if (y.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void (a.image.isTouched = !1);
                if (!y.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void (a.image.isTouched = !1)
              }
              e.preventDefault(),
              e.stopPropagation(),
              a.image.isMoved = !0,
              a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX,
              a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY,
              a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, 0.8)),
              a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, 0.8)),
              a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, 0.8)),
              a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, 0.8)),
              a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x),
              a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y),
              a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
              a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2,
              a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2,
              Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0),
              Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0),
              a.velocity.prevPositionX = a.image.touchesCurrent.x,
              a.velocity.prevPositionY = a.image.touchesCurrent.y,
              a.velocity.prevTime = Date.now(),
              a.gesture.imageWrap.transform('translate3d(' + a.image.currentX + 'px, ' + a.image.currentY + 'px,0)')
            }
          }
        },
        onTouchEnd: function (e, a) {
          var t = e.zoom;
          if (t.gesture.image && 0 !== t.gesture.image.length) {
            if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1,
            void (t.image.isMoved = !1);
            t.image.isTouched = !1,
            t.image.isMoved = !1;
            var s = 300,
            r = 300,
            i = t.velocity.x * s,
            n = t.image.currentX + i,
            o = t.velocity.y * r,
            l = t.image.currentY + o;
            0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)),
            0 !== t.velocity.y && (r = Math.abs((l - t.image.currentY) / t.velocity.y));
            var p = Math.max(s, r);
            t.image.currentX = n,
            t.image.currentY = l;
            var d = t.image.width * t.scale,
            m = t.image.height * t.scale;
            t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0),
            t.image.maxX = - t.image.minX,
            t.image.minY = Math.min(t.gesture.slideHeight / 2 - m / 2, 0),
            t.image.maxY = - t.image.minY,
            t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX),
            t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY),
            t.gesture.imageWrap.transition(p).transform('translate3d(' + t.image.currentX + 'px, ' + t.image.currentY + 'px,0)')
          }
        },
        onTransitionEnd: function (e) {
          var a = e.zoom;
          a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform('translate3d(0,0,0) scale(1)'), a.gesture.imageWrap.transform('translate3d(0,0,0)'), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1)
        },
        toggleZoom: function (a, t) {
          var s = a.zoom;
          if (s.gesture.slide || (s.gesture.slide = a.clickedSlide ? e(a.clickedSlide)  : a.slides.eq(a.activeIndex), s.gesture.image = s.gesture.slide.find('img, svg, canvas'), s.gesture.imageWrap = s.gesture.image.parent('.' + a.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
            var r,
            i,
            n,
            o,
            l,
            p,
            d,
            m,
            u,
            c,
            g,
            h,
            v,
            f,
            w,
            x,
            y,
            T;
            void 0 === s.image.touchesStart.x && t ? (r = 'touchend' === t.type ? t.changedTouches[0].pageX : t.pageX, i = 'touchend' === t.type ? t.changedTouches[0].pageY : t.pageY)  : (r = s.image.touchesStart.x, i = s.image.touchesStart.y),
            s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)'), s.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)'), s.gesture.slide = void 0)  : (s.scale = s.currentScale = s.gesture.imageWrap.attr('data-swiper-zoom') || a.params.zoomMax, t ? (y = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + y / 2 - r, p = o + T / 2 - i, u = s.gesture.image[0].offsetWidth, c = s.gesture.image[0].offsetHeight, g = u * s.scale, h = c * s.scale, v = Math.min(y / 2 - g / 2, 0), f = Math.min(T / 2 - h / 2, 0), w = - v, x = - f, d = l * s.scale, m = p * s.scale, d < v && (d = v), d > w && (d = w), m < f && (m = f), m > x && (m = x))  : (d = 0, m = 0), s.gesture.imageWrap.transition(300).transform('translate3d(' + d + 'px, ' + m + 'px,0)'), s.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + s.scale + ')'))
          }
        },
        attachEvents: function (a) {
          var t = a ? 'off' : 'on';
          if (y.params.zoom) {
            var s = (y.slides, !('touchstart' !== y.touchEvents.start || !y.support.passiveListener || !y.params.passiveListeners) && {
              passive: !0,
              capture: !1
            });
            y.support.gestures ? (y.slides[t]('gesturestart', y.zoom.onGestureStart, s), y.slides[t]('gesturechange', y.zoom.onGestureChange, s), y.slides[t]('gestureend', y.zoom.onGestureEnd, s))  : 'touchstart' === y.touchEvents.start && (y.slides[t](y.touchEvents.start, y.zoom.onGestureStart, s), y.slides[t](y.touchEvents.move, y.zoom.onGestureChange, s), y.slides[t](y.touchEvents.end, y.zoom.onGestureEnd, s)),
            y[t]('touchStart', y.zoom.onTouchStart),
            y.slides.each(function (a, s) {
              e(s).find('.' + y.params.zoomContainerClass).length > 0 && e(s) [t](y.touchEvents.move, y.zoom.onTouchMove)
            }),
            y[t]('touchEnd', y.zoom.onTouchEnd),
            y[t]('transitionEnd', y.zoom.onTransitionEnd),
            y.params.zoomToggle && y.on('doubleTap', y.zoom.toggleZoom)
          }
        },
        init: function () {
          y.zoom.attachEvents()
        },
        destroy: function () {
          y.zoom.attachEvents(!0)
        }
      },
      y._plugins = [
      ];
      for (var Y in y.plugins) {
        var A = y.plugins[Y](y, y.params[Y]);
        A && y._plugins.push(A)
      }
      return y.callPlugins = function (e) {
        for (var a = 0; a < y._plugins.length; a++) e in y._plugins[a] && y._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
      },
      y.emitterEventListeners = {
      },
      y.emit = function (e) {
        y.params[e] && y.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        var a;
        if (y.emitterEventListeners[e]) for (a = 0; a < y.emitterEventListeners[e].length; a++) y.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        y.callPlugins && y.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
      },
      y.on = function (e, a) {
        return e = u(e),
        y.emitterEventListeners[e] || (y.emitterEventListeners[e] = [
        ]),
        y.emitterEventListeners[e].push(a),
        y
      },
      y.off = function (e, a) {
        var t;
        if (e = u(e), void 0 === a) return y.emitterEventListeners[e] = [
        ],
        y;
        if (y.emitterEventListeners[e] && 0 !== y.emitterEventListeners[e].length) {
          for (t = 0; t < y.emitterEventListeners[e].length; t++) y.emitterEventListeners[e][t] === a && y.emitterEventListeners[e].splice(t, 1);
          return y
        }
      },
      y.once = function (e, a) {
        e = u(e);
        var t = function () {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
          y.off(e, t)
        };
        return y.on(e, t),
        y
      },
      y.a11y = {
        makeFocusable: function (e) {
          return e.attr('tabIndex', '0'),
          e
        },
        addRole: function (e, a) {
          return e.attr('role', a),
          e
        },
        addLabel: function (e, a) {
          return e.attr('aria-label', a),
          e
        },
        disable: function (e) {
          return e.attr('aria-disabled', !0),
          e
        },
        enable: function (e) {
          return e.attr('aria-disabled', !1),
          e
        },
        onEnterKey: function (a) {
          13 === a.keyCode && (e(a.target).is(y.params.nextButton) ? (y.onClickNext(a), y.isEnd ? y.a11y.notify(y.params.lastSlideMessage)  : y.a11y.notify(y.params.nextSlideMessage))  : e(a.target).is(y.params.prevButton) && (y.onClickPrev(a), y.isBeginning ? y.a11y.notify(y.params.firstSlideMessage)  : y.a11y.notify(y.params.prevSlideMessage)), e(a.target).is('.' + y.params.bulletClass) && e(a.target) [0].click())
        },
        liveRegion: e('<span class="' + y.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
        notify: function (e) {
          var a = y.a11y.liveRegion;
          0 !== a.length && (a.html(''), a.html(e))
        },
        init: function () {
          y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.a11y.makeFocusable(y.nextButton), y.a11y.addRole(y.nextButton, 'button'), y.a11y.addLabel(y.nextButton, y.params.nextSlideMessage)),
          y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.a11y.makeFocusable(y.prevButton), y.a11y.addRole(y.prevButton, 'button'), y.a11y.addLabel(y.prevButton, y.params.prevSlideMessage)),
          e(y.container).append(y.a11y.liveRegion)
        },
        initPagination: function () {
          y.params.pagination && y.params.paginationClickable && y.bullets && y.bullets.length && y.bullets.each(function () {
            var a = e(this);
            y.a11y.makeFocusable(a),
            y.a11y.addRole(a, 'button'),
            y.a11y.addLabel(a, y.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
          })
        },
        destroy: function () {
          y.a11y.liveRegion && y.a11y.liveRegion.length > 0 && y.a11y.liveRegion.remove()
        }
      },
      y.init = function () {
        y.params.loop && y.createLoop(),
        y.updateContainerSize(),
        y.updateSlidesSize(),
        y.updatePagination(),
        y.params.scrollbar && y.scrollbar && (y.scrollbar.set(), y.params.scrollbarDraggable && y.scrollbar.enableDraggable()),
        'slide' !== y.params.effect && y.effects[y.params.effect] && (y.params.loop || y.updateProgress(), y.effects[y.params.effect].setTranslate()),
        y.params.loop ? y.slideTo(y.params.initialSlide + y.loopedSlides, 0, y.params.runCallbacksOnInit)  : (y.slideTo(y.params.initialSlide, 0, y.params.runCallbacksOnInit), 0 === y.params.initialSlide && (y.parallax && y.params.parallax && y.parallax.setTranslate(), y.lazy && y.params.lazyLoading && (y.lazy.load(), y.lazy.initialImageLoaded = !0))),
        y.attachEvents(),
        y.params.observer && y.support.observer && y.initObservers(),
        y.params.preloadImages && !y.params.lazyLoading && y.preloadImages(),
        y.params.zoom && y.zoom && y.zoom.init(),
        y.params.autoplay && y.startAutoplay(),
        y.params.keyboardControl && y.enableKeyboardControl && y.enableKeyboardControl(),
        y.params.mousewheelControl && y.enableMousewheelControl && y.enableMousewheelControl(),
        y.params.hashnavReplaceState && (y.params.replaceState = y.params.hashnavReplaceState),
        y.params.history && y.history && y.history.init(),
        y.params.hashnav && y.hashnav && y.hashnav.init(),
        y.params.a11y && y.a11y && y.a11y.init(),
        y.emit('onInit', y)
      },
      y.cleanupStyles = function () {
        y.container.removeClass(y.classNames.join(' ')).removeAttr('style'),
        y.wrapper.removeAttr('style'),
        y.slides && y.slides.length && y.slides.removeClass([y.params.slideVisibleClass,
        y.params.slideActiveClass,
        y.params.slideNextClass,
        y.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row'),
        y.paginationContainer && y.paginationContainer.length && y.paginationContainer.removeClass(y.params.paginationHiddenClass),
        y.bullets && y.bullets.length && y.bullets.removeClass(y.params.bulletActiveClass),
        y.params.prevButton && e(y.params.prevButton).removeClass(y.params.buttonDisabledClass),
        y.params.nextButton && e(y.params.nextButton).removeClass(y.params.buttonDisabledClass),
        y.params.scrollbar && y.scrollbar && (y.scrollbar.track && y.scrollbar.track.length && y.scrollbar.track.removeAttr('style'), y.scrollbar.drag && y.scrollbar.drag.length && y.scrollbar.drag.removeAttr('style'))
      },
      y.destroy = function (e, a) {
        y.detachEvents(),
        y.stopAutoplay(),
        y.params.scrollbar && y.scrollbar && y.params.scrollbarDraggable && y.scrollbar.disableDraggable(),
        y.params.loop && y.destroyLoop(),
        a && y.cleanupStyles(),
        y.disconnectObservers(),
        y.params.zoom && y.zoom && y.zoom.destroy(),
        y.params.keyboardControl && y.disableKeyboardControl && y.disableKeyboardControl(),
        y.params.mousewheelControl && y.disableMousewheelControl && y.disableMousewheelControl(),
        y.params.a11y && y.a11y && y.a11y.destroy(),
        y.params.history && !y.params.replaceState && window.removeEventListener('popstate', y.history.setHistoryPopState),
        y.params.hashnav && y.hashnav && y.hashnav.destroy(),
        y.emit('onDestroy'),
        !1 !== e && (y = null)
      },
      y.init(),
      y
    }
  };
  a.prototype = {
    isSafari: function () {
      var e = window.navigator.userAgent.toLowerCase();
      return e.indexOf('safari') >= 0 && e.indexOf('chrome') < 0 && e.indexOf('android') < 0
    }(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
    isArray: function (e) {
      return '[object Array]' === Object.prototype.toString.apply(e)
    },
    browser: {
      ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
      lteIE9: function () {
        var e = document.createElement('div');
        return e.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->',
        1 === e.getElementsByTagName('i').length
      }()
    },
    device: function () {
      var e = window.navigator.userAgent,
      a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
      t = e.match(/(iPad).*OS\s([\d_]+)/),
      s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
      r = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      return {
        ios: t || r || s,
        android: a
      }
    }(),
    support: {
      touch: window.Modernizr && !0 === Modernizr.touch || !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch),
      transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
        var e = document.createElement('div').style;
        return 'webkitPerspective' in e || 'MozPerspective' in e || 'OPerspective' in e || 'MsPerspective' in e || 'perspective' in e
      }(),
      flexbox: function () {
        for (var e = document.createElement('div').style, a = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' '), t = 0; t < a.length; t++) if (a[t] in e) return !0
      }(),
      observer: 'MutationObserver' in window || 'WebkitMutationObserver' in window,
      passiveListener: function () {
        var e = !1;
        try {
          var a = Object.defineProperty({
          }, 'passive', {
            get: function () {
              e = !0
            }
          });
          window.addEventListener('testPassiveListener', null, a)
        } catch (e) {
        }
        return e
      }(),
      gestures: 'ongesturestart' in window
    },
    plugins: {
    }
  };
  for (var t = [
    'jQuery',
    'Zepto',
    'Dom7'
  ], s = 0; s < t.length; s++) window[t[s]] && function (e) {
    e.fn.swiper = function (t) {
      var s;
      return e(this).each(function () {
        var e = new a(this, t);
        s || (s = e)
      }),
      s
    }
  }(window[t[s]]);
  var r;
  (r = 'undefined' == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7) && ('transitionEnd' in r.fn || (r.fn.transitionEnd = function (e) {
    function a(i) {
      if (i.target === this) for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
    }
    var t,
    s = [
      'webkitTransitionEnd',
      'transitionend',
      'oTransitionEnd',
      'MSTransitionEnd',
      'msTransitionEnd'
    ],
    r = this;
    if (e) for (t = 0; t < s.length; t++) r.on(s[t], a);
    return this
  }), 'transform' in r.fn || (r.fn.transform = function (e) {
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;
      t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
    }
    return this
  }), 'transition' in r.fn || (r.fn.transition = function (e) {
    'string' != typeof e && (e += 'ms');
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;
      t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
    }
    return this
  }), 'outerWidth' in r.fn || (r.fn.outerWidth = function (e) {
    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'))  : this[0].offsetWidth : null
  })),
  window.Swiper = a
}(),
'undefined' != typeof module ? module.exports = window.Swiper : 'function' == typeof define && define.amd && define([], function () {
  'use strict';
  return window.Swiper
});
/**
 * @module       jQuery Count To
 * @author       Matt Huggins
 * @see          https://github.com/mhuggins/jquery-countTo
 * @license      MIT
 */
!function (t) {
  function e(t, e) {
    return t.toFixed(e.decimals)
  }
  var o = function (e, i) {
    this.$element = t(e),
    this.options = t.extend({
    }, o.DEFAULTS, this.dataOptions(), i),
    this.init()
  };
  o.DEFAULTS = {
    from: 0,
    to: 0,
    speed: 1000,
    refreshInterval: 100,
    decimals: 0,
    formatter: e,
    onUpdate: null,
    onComplete: null
  },
  o.prototype.init = function () {
    this.value = this.options.from,
    this.loops = Math.ceil(this.options.speed / this.options.refreshInterval),
    this.loopCount = 0,
    this.increment = (this.options.to - this.options.from) / this.loops
  },
  o.prototype.dataOptions = function () {
    var t = {
      from: this.$element.data('from'),
      to: this.$element.data('to'),
      speed: this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals: this.$element.data('decimals')
    },
    e = Object.keys(t);
    for (var o in e) {
      var i = e[o];
      'undefined' == typeof t[i] && delete t[i]
    }
    return t
  },
  o.prototype.update = function () {
    this.value += this.increment,
    this.loopCount++,
    this.render(),
    'function' == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value),
    this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, 'function' == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
  },
  o.prototype.render = function () {
    var t = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(t)
  },
  o.prototype.restart = function () {
    this.stop(),
    this.init(),
    this.start()
  },
  o.prototype.start = function () {
    this.stop(),
    this.render(),
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
  },
  o.prototype.stop = function () {
    this.interval && clearInterval(this.interval)
  },
  o.prototype.toggle = function () {
    this.interval ? this.stop()  : this.start()
  },
  t.fn.countTo = function (e) {
    return this.each(function () {
      var i = t(this),
      n = i.data('countTo'),
      s = !n || 'object' == typeof e,
      r = 'object' == typeof e ? e : {
      },
      a = 'string' == typeof e ? e : 'start';
      s && (n && n.stop(), i.data('countTo', n = new o(this, r))),
      n[a].call(n)
    })
  }
}(jQuery);
/**
 * @module       jquery-circle-progress
 * @author       Rostyslav Bryzgunov <kottenator@gmail.com>
 * @see          http://kottenator.github.io/jquery-circle-progress/
 * @licence      MIT
 * @version      1.2.2
 */
!function (i) {
  if ('function' == typeof define && define.amd) define(['jquery'], i);
   else if ('object' == typeof module && module.exports) {
    var t = require('jquery');
    i(t),
    module.exports = t
  } else i(jQuery)
}(function (i) {
  function t(i) {
    this.init(i)
  }
  t.prototype = {
    value: 0,
    size: 100,
    startAngle: - Math.PI,
    thickness: 'auto',
    fill: {
      gradient: [
        '#3aeabb',
        '#fdd250'
      ]
    },
    emptyFill: 'rgba(0, 0, 0, .1)',
    animation: {
      duration: 1200,
      easing: 'circleProgressEasing'
    },
    animationStartValue: 0,
    reverse: !1,
    lineCap: 'butt',
    insertMode: 'prepend',
    constructor: t,
    el: null,
    canvas: null,
    ctx: null,
    radius: 0,
    arcFill: null,
    lastFrameValue: 0,
    init: function (t) {
      i.extend(this, t),
      this.radius = this.size / 2,
      this.initWidget(),
      this.initFill(),
      this.draw(),
      this.el.trigger('circle-inited')
    },
    initWidget: function () {
      this.canvas || (this.canvas = i('<canvas>') ['prepend' == this.insertMode ? 'prependTo' : 'appendTo'](this.el) [0]);
      var t = this.canvas;
      if (t.width = this.size, t.height = this.size, this.ctx = t.getContext('2d'), window.devicePixelRatio > 1) {
        var e = window.devicePixelRatio;
        t.style.width = t.style.height = this.size + 'px',
        t.width = t.height = this.size * e,
        this.ctx.scale(e, e)
      }
    },
    initFill: function () {
      function t() {
        var t = i('<canvas>') [0];
        t.width = e.size,
        t.height = e.size,
        t.getContext('2d').drawImage(g, 0, 0, r, r),
        e.arcFill = e.ctx.createPattern(t, 'no-repeat'),
        e.drawFrame(e.lastFrameValue)
      }
      var e = this,
      a = this.fill,
      n = this.ctx,
      r = this.size;
      if (!a) throw Error('The fill is not specified!');
      if ('string' == typeof a && (a = {
        color: a
      }), a.color && (this.arcFill = a.color), a.gradient) {
        var s = a.gradient;
        if (1 == s.length) this.arcFill = s[0];
         else if (s.length > 1) {
          for (var l = a.gradientAngle || 0, o = a.gradientDirection || [
            r / 2 * (1 - Math.cos(l)),
            r / 2 * (1 + Math.sin(l)),
            r / 2 * (1 + Math.cos(l)),
            r / 2 * (1 - Math.sin(l))
          ], h = n.createLinearGradient.apply(n, o), c = 0; c < s.length; c++) {
            var d = s[c],
            u = c / (s.length - 1);
            i.isArray(d) && (u = d[1], d = d[0]),
            h.addColorStop(u, d)
          }
          this.arcFill = h
        }
      }
      if (a.image) {
        var g;
        a.image instanceof Image ? g = a.image : (g = new Image, g.src = a.image),
        g.complete ? t()  : g.onload = t
      }
    },
    draw: function () {
      this.animation ? this.drawAnimated(this.value)  : this.drawFrame(this.value)
    },
    drawFrame: function (i) {
      this.lastFrameValue = i,
      this.ctx.clearRect(0, 0, this.size, this.size),
      this.drawEmptyArc(i),
      this.drawArc(i)
    },
    drawArc: function (i) {
      if (0 !== i) {
        var t = this.ctx,
        e = this.radius,
        a = this.getThickness(),
        n = this.startAngle;
        t.save(),
        t.beginPath(),
        this.reverse ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n)  : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i),
        t.lineWidth = a,
        t.lineCap = this.lineCap,
        t.strokeStyle = this.arcFill,
        t.stroke(),
        t.restore()
      }
    },
    drawEmptyArc: function (i) {
      var t = this.ctx,
      e = this.radius,
      a = this.getThickness(),
      n = this.startAngle;
      i < 1 && (t.save(), t.beginPath(), i <= 0 ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI)  : this.reverse ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i)  : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n), t.lineWidth = a, t.strokeStyle = this.emptyFill, t.stroke(), t.restore())
    },
    drawAnimated: function (t) {
      var e = this,
      a = this.el,
      n = i(this.canvas);
      n.stop(!0, !1),
      a.trigger('circle-animation-start'),
      n.css({
        animationProgress: 0
      }).animate({
        animationProgress: 1
      }, i.extend({
      }, this.animation, {
        step: function (i) {
          var n = e.animationStartValue * (1 - i) + t * i;
          e.drawFrame(n),
          a.trigger('circle-animation-progress', [
            i,
            n
          ])
        }
      })).promise().always(function () {
        a.trigger('circle-animation-end')
      })
    },
    getThickness: function () {
      return i.isNumeric(this.thickness) ? this.thickness : this.size / 14
    },
    getValue: function () {
      return this.value
    },
    setValue: function (i) {
      this.animation && (this.animationStartValue = this.lastFrameValue),
      this.value = i,
      this.draw()
    }
  },
  i.circleProgress = {
    defaults: t.prototype
  },
  i.easing.circleProgressEasing = function (i) {
    return i < 0.5 ? (i = 2 * i, 0.5 * i * i * i)  : (i = 2 - 2 * i, 1 - 0.5 * i * i * i)
  },
  i.fn.circleProgress = function (e, a) {
    var n = 'circle-progress',
    r = this.data(n);
    if ('widget' == e) {
      if (!r) throw Error('Calling "widget" method on not initialized instance is forbidden');
      return r.canvas
    }
    if ('value' == e) {
      if (!r) throw Error('Calling "value" method on not initialized instance is forbidden');
      if ('undefined' == typeof a) return r.getValue();
      var s = arguments[1];
      return this.each(function () {
        i(this).data(n).setValue(s)
      })
    }
    return this.each(function () {
      var a = i(this),
      r = a.data(n),
      s = i.isPlainObject(e) ? e : {
      };
      if (r) r.init(s);
       else {
        var l = i.extend({
        }, a.data());
        'string' == typeof l.fill && (l.fill = JSON.parse(l.fill)),
        'string' == typeof l.animation && (l.animation = JSON.parse(l.animation)),
        s = i.extend(l, s),
        s.el = a,
        r = new t(s),
        a.data(n, r)
      }
    })
  }
});
/**
 * @module      TimeCircles
 * @author      Wim Barelds
 * @see         http://www.wimbarelds.nl/
 * @license     MIT
 * @version     1.5.3
 */
(function (f) {
  function A(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, d, e) {
      return b + b + d + d + e + e
    });
    return (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
      r: parseInt(a[1], 16),
      g: parseInt(a[2], 16),
      b: parseInt(a[3], 16)
    }
     : null
  }
  function B() {
    var a = document.createElement('canvas');
    return !(!a.getContext || !a.getContext('2d'))
  }
  function n() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
  }
  function z(a, c, b, d, e) {
    for (var h = {
    }, l = {
    }, f = {
    }, g = {
    }, m = {
    }, k = {
    }, r = null, q = 0; q < d.length; q++) {
      var p = d[q],
      r = null === r ? b / t[p] : t[r] / t[p],
      u = a / t[p],
      v = c / t[p];
      e && (u = 0 < u ? Math.floor(u)  : Math.ceil(u), v = 0 < v ? Math.floor(v)  : Math.ceil(v));
      'Days' !== p && (u %= r, v %= r);
      h[p] = u;
      f[p] = Math.abs(u);
      l[p] = v;
      k[p] = Math.abs(v);
      g[p] = Math.abs(u) / r;
      m[p] = Math.abs(v) / r;
      r = p
    }
    return {
      raw_time: h,
      raw_old_time: l,
      time: f,
      old_time: k,
      pct: g,
      old_pct: m
    }
  }
  function C(a) {
    for (var c = [
      'webkit',
      'moz'
    ], b = 0; b < c.length && !a.requestAnimationFrame; ++b) a.requestAnimationFrame = a[c[b] + 'RequestAnimationFrame'],
    a.cancelAnimationFrame = a[c[b] + 'CancelAnimationFrame'];
    a.requestAnimationFrame && a.cancelAnimationFrame || (a.requestAnimationFrame = function (c, b, h) {
      'undefined' === typeof h && (h = {
        data: {
          last_frame: 0
        }
      });
      var l = (new Date).getTime(),
      f = Math.max(0, 16 - (l - h.data.last_frame));
      b = a.setTimeout(function () {
        c(l + f)
      }, f);
      h.data.last_frame = l + f;
      return b
    }, a.cancelAnimationFrame = function (a) {
      clearTimeout(a)
    })
  }
  var m = window;
  Object.keys || (Object.keys = function () {
    var a = Object.prototype.hasOwnProperty,
    c = !{
      toString: null
    }.propertyIsEnumerable('toString'),
    b = 'toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor'.split(' '),
    d = b.length;
    return function (e) {
      if ('object' !== typeof e && ('function' !== typeof e || null === e)) throw new TypeError('Object.keys called on non-object');
      var h = [
      ],
      l;
      for (l in e) a.call(e, l) && h.push(l);
      if (c) for (l = 0; l < d; l++) a.call(e, b[l]) && h.push(b[l]);
      return h
    }
  }());
  var x = !1,
  y = [
    'Days',
    'Hours',
    'Minutes',
    'Seconds'
  ],
  D = {
    Seconds: 'Minutes',
    Minutes: 'Hours',
    Hours: 'Days',
    Days: 'Years'
  },
  t = {
    Seconds: 1,
    Minutes: 60,
    Hours: 3600,
    Days: 86400,
    Months: 2678400,
    Years: 31536000
  };
  Array.prototype.indexOf || (Array.prototype.indexOf = function (a, c) {
    var b = this.length >>> 0,
    d = Number(c) || 0,
    d = 0 > d ? Math.ceil(d)  : Math.floor(d);
    for (0 > d && (d += b); d < b; d++) if (d in this && this[d] === a) return d;
    return - 1
  });
  var w = {
  },
  g = function (a, c) {
    this.element = a;
    this.container;
    this.listeners = null;
    this.data = {
      paused: !1,
      last_frame: 0,
      animation_frame: null,
      interval_fallback: null,
      timer: !1,
      total_duration: null,
      prev_time: null,
      drawn_units: [
      ],
      text_elements: {
        Days: null,
        Hours: null,
        Minutes: null,
        Seconds: null
      },
      attributes: {
        canvas: null,
        context: null,
        item_size: null,
        line_width: null,
        radius: null,
        outer_radius: null
      },
      state: {
        fading: {
          Days: !1,
          Hours: !1,
          Minutes: !1,
          Seconds: !1
        }
      }
    };
    this.config = null;
    this.setOptions(c);
    this.initialize()
  };
  g.prototype.clearListeners = function () {
    this.listeners = {
      all: [
      ],
      visible: [
      ]
    }
  };
  g.prototype.addTime = function (a) {
    if (this.data.attributes.ref_date instanceof Date) {
      var c = this.data.attributes.ref_date;
      c.setSeconds(c.getSeconds() + a)
    } else isNaN(this.data.attributes.ref_date) || (this.data.attributes.ref_date += 1000 * a)
  };
  g.prototype.initialize = function (a) {
    this.data.drawn_units = [
    ];
    for (var c = 0; c < Object.keys(this.config.time).length; c++) {
      var b = Object.keys(this.config.time) [c];
      this.config.time[b].show && this.data.drawn_units.push(b)
    }
    f(this.element).children('div.time_circles').remove();
    'undefined' === typeof a && (a = !0);
    (a || null === this.listeners) && this.clearListeners();
    this.container = f('<div>');
    this.container.addClass('time_circles');
    this.container.appendTo(this.element);
    c = this.element.offsetHeight;
    a = this.element.offsetWidth;
    0 === c && (c = f(this.element).height());
    0 === a && (a = f(this.element).width());
    0 === c && 0 < a ? c = a / this.data.drawn_units.length : 0 === a && 0 < c && (a = c * this.data.drawn_units.length);
    b = document.createElement('canvas');
    b.width = a;
    b.height = c;
    this.data.attributes.canvas = f(b);
    this.data.attributes.canvas.appendTo(this.container);
    var d = B();
    d || 'undefined' === typeof G_vmlCanvasManager || (G_vmlCanvasManager.initElement(b), d = x = !0);
    d && (this.data.attributes.context = b.getContext('2d'));
    this.data.attributes.item_size = Math.min(a / this.data.drawn_units.length, c);
    this.data.attributes.line_width = this.data.attributes.item_size * this.config.fg_width;
    this.data.attributes.radius = (0.8 * this.data.attributes.item_size - this.data.attributes.line_width) / 2;
    this.data.attributes.outer_radius = this.data.attributes.radius + 0.5 * Math.max(this.data.attributes.line_width, this.data.attributes.line_width * this.config.bg_width);
    var c = 0,
    e;
    for (e in this.data.text_elements) this.config.time[e].show && (a = f('<div>'), a.addClass('textDiv_' + e), a.css('top', Math.round(0.35 * this.data.attributes.item_size)), a.css('left', Math.round(c++ * this.data.attributes.item_size)), a.css('width', this.data.attributes.item_size), a.appendTo(this.container), b = f('<h4>'), b.text(this.config.time[e].text), b.css('font-size', Math.round(this.config.text_size * this.data.attributes.item_size)), b.css('line-height', Math.round(this.config.text_size * this.data.attributes.item_size) + 'px'), b.appendTo(a), b = f('<span>'), b.css('font-size', Math.round(3 * this.config.text_size * this.data.attributes.item_size)), b.css('line-height', Math.round(this.config.text_size * this.data.attributes.item_size) + 'px'), b.appendTo(a), this.data.text_elements[e] = b);
    this.start();
    this.config.start || (this.data.paused = !0);
    var h = this;
    this.data.interval_fallback = m.setInterval(function () {
      h.update.call(h, !0)
    }, 100)
  };
  g.prototype.update = function (a) {
    if ('undefined' === typeof a) a = !1;
     else if (a && this.data.paused) return;
    x && this.data.attributes.context.clearRect(0, 0, this.data.attributes.canvas[0].width, this.data.attributes.canvas[0].hright);
    var c,
    b,
    d = this.data.prev_time;
    c = new Date;
    this.data.prev_time = c;
    null === d && (d = c);
    if (!this.config.count_past_zero && c > this.data.attributes.ref_date) {
      for (b = 0; b < this.data.drawn_units.length; b++) {
        var e = this.data.drawn_units[b];
        this.data.text_elements[e].text('0');
        var h = b * this.data.attributes.item_size + this.data.attributes.item_size / 2,
        l = this.data.attributes.item_size / 2,
        f = this.config.time[e].color;
        this.drawArc(h, l, f, 0)
      }
      this.stop()
    } else {
      c = (this.data.attributes.ref_date - c) / 1000;
      b = (this.data.attributes.ref_date - d) / 1000;
      var e = 'smooth' !== this.config.animation,
      d = z(c, b, this.data.total_duration, this.data.drawn_units, e),
      g = z(c, b, t.Years, y, e),
      k = b = 0,
      n = null,
      r = this.data.drawn_units.slice();
      for (b in y) e = y[b],
      Math.floor(g.raw_time[e]) !== Math.floor(g.raw_old_time[e]) && this.notifyListeners(e, Math.floor(g.time[e]), Math.floor(c), 'all'),
      0 > r.indexOf(e) || (Math.floor(d.raw_time[e]) !== Math.floor(d.raw_old_time[e]) && this.notifyListeners(e, Math.floor(d.time[e]), Math.floor(c), 'visible'), a || (this.data.text_elements[e].text(Math.floor(Math.abs(d.time[e]))), h = k * this.data.attributes.item_size + this.data.attributes.item_size / 2, l = this.data.attributes.item_size / 2, f = this.config.time[e].color, 'smooth' === this.config.animation ? (null === n || x || (Math.floor(d.time[n]) > Math.floor(d.old_time[n]) ? (this.radialFade(h, l, f, 1, e), this.data.state.fading[e] = !0)  : Math.floor(d.time[n]) < Math.floor(d.old_time[n]) && (this.radialFade(h, l, f, 0, e), this.data.state.fading[e] = !0)), this.data.state.fading[e] || this.drawArc(h, l, f, d.pct[e]))  : this.animateArc(h, l, f, d.pct[e], d.old_pct[e], (new Date).getTime() + 200)), n = e, k++);
      if (!this.data.paused && !a) {
        var q = this,
        p = function () {
          q.update.call(q)
        };
        'smooth' === this.config.animation ? this.data.animation_frame = m.requestAnimationFrame(p, q.element, q)  : (a = c % 1 * 1000, 0 > a && (a = 1000 + a), q.data.animation_frame = m.setTimeout(function () {
          q.data.animation_frame = m.requestAnimationFrame(p, q.element, q)
        }, a + 50))
      }
    }
  };
  g.prototype.animateArc = function (a, c, b, d, e, h) {
    if (null !== this.data.attributes.context) if (0.5 < Math.abs(e - d)) 0 === d ? this.radialFade(a, c, b, 1)  : this.radialFade(a, c, b, 0);
     else {
      var f = (200 - (h - (new Date).getTime())) / 200;
      1 < f && (f = 1);
      this.drawArc(a, c, b, e * (1 - f) + d * f);
      if (!(1 <= f)) {
        var g = this;
        m.requestAnimationFrame(function () {
          g.animateArc(a, c, b, d, e, h)
        }, this.element)
      }
    }
  };
  g.prototype.drawArc = function (a, c, b, d) {
    if (null !== this.data.attributes.context) {
      var e = Math.max(this.data.attributes.outer_radius, this.data.attributes.item_size / 2);
      x || this.data.attributes.context.clearRect(a - e, c - e, 2 * e, 2 * e);
      this.config.use_background && (this.data.attributes.context.beginPath(), this.data.attributes.context.arc(a, c, this.data.attributes.radius, 0, 2 * Math.PI, !1), this.data.attributes.context.lineWidth = this.data.attributes.line_width * this.config.bg_width, this.data.attributes.context.strokeStyle = this.config.circle_bg_color, this.data.attributes.context.stroke());
      var f,
      e = - 0.5 * Math.PI + this.config.start_angle / 360 * 2 * Math.PI;
      f = 2 * d * Math.PI;
      'Both' === this.config.direction ? (d = !1, e -= f / 2, f = e + f)  : 'Clockwise' === this.config.direction ? (d = !1, f = e + f)  : (d = !0, f = e - f);
      this.data.attributes.context.beginPath();
      this.data.attributes.context.arc(a, c, this.data.attributes.radius, e, f, d);
      this.data.attributes.context.lineWidth = this.data.attributes.line_width;
      this.data.attributes.context.strokeStyle = b;
      this.data.attributes.context.stroke()
    }
  };
  g.prototype.radialFade = function (a, c, b, d, e) {
    var f = A(b),
    g = this;
    b = 0.2 * (1 === d ? - 1 : 1);
    var k;
    for (k = 0; 1 >= d && 0 <= d; k++) (function () {
      var b = 'rgba(' + f.r + ', ' + f.g + ', ' + f.b + ', ' + Math.round(10 * d) / 10 + ')';
      m.setTimeout(function () {
        g.drawArc(a, c, b, 1)
      }, 50 * k)
    }) (),
    d += b;
    m.setTimeout(function () {
      g.data.state.fading[e] = !1
    }, 50 * k)
  };
  g.prototype.timeLeft = function () {
    return this.data.paused && 'number' === typeof this.data.timer ? this.data.timer : (this.data.attributes.ref_date - new Date) / 1000
  };
  g.prototype.start = function () {
    m.cancelAnimationFrame(this.data.animation_frame);
    m.clearTimeout(this.data.animation_frame);
    var a = f(this.element).data('date');
    'undefined' === typeof a && (a = f(this.element).attr('data-date'));
    if ('string' === typeof a) {
      var c = this.data.attributes;
      var b = a.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);
      null !== b && 0 < b.length ? (b = a.split(' '), a = b[0].split('-'), b = b[1].split(':'), a = new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]))  : (b = Date.parse(a), isNaN(b) ? (b = Date.parse(a.replace(/-/g, '/').replace('T', ' ')), a = isNaN(b) ? new Date : b)  : a = b);
      c.ref_date = a
    } else 'number' === typeof this.data.timer ? this.data.paused && (this.data.attributes.ref_date = (new Date).getTime() + 1000 * this.data.timer)  : (c = f(this.element).data('timer'), 'undefined' === typeof c && (c = f(this.element).attr('data-timer')), 'string' === typeof c && (c = parseFloat(c)), 'number' === typeof c ? (this.data.timer = c, this.data.attributes.ref_date = (new Date).getTime() + 1000 * c)  : this.data.attributes.ref_date = this.config.ref_date);
    this.data.paused = !1;
    this.update.call(this)
  };
  g.prototype.restart = function () {
    this.data.timer = !1;
    this.start()
  };
  g.prototype.stop = function () {
    'number' === typeof this.data.timer && (this.data.timer = this.timeLeft(this));
    this.data.paused = !0;
    m.cancelAnimationFrame(this.data.animation_frame)
  };
  g.prototype.destroy = function () {
    this.clearListeners();
    this.stop();
    m.clearInterval(this.data.interval_fallback);
    this.data.interval_fallback = null;
    this.container.remove();
    f(this.element).removeAttr('data-tc-id');
    f(this.element).removeData('tc-id')
  };
  g.prototype.setOptions = function (a) {
    null === this.config && (this.default_options.ref_date = new Date, this.config = f.extend(!0, {
    }, this.default_options));
    f.extend(!0, this.config, a);
    m = this.config.use_top_frame ? window.top : window;
    'undefined' !== typeof m.TC_Instance_List ? w = m.TC_Instance_List : m.TC_Instance_List = w;
    C(m);
    this.data.total_duration = this.config.total_duration;
    if ('string' === typeof this.data.total_duration) if ('undefined' !== typeof t[this.data.total_duration]) this.data.total_duration = t[this.data.total_duration];
     else if ('Auto' === this.data.total_duration) for (a = 0; a < Object.keys(this.config.time).length; a++) {
      var c = Object.keys(this.config.time) [a];
      if (this.config.time[c].show) {
        this.data.total_duration = t[D[c]];
        break
      }
    } else this.data.total_duration = t.Years,
    console.error('Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto')
  };
  g.prototype.addListener = function (a, c, b) {
    'function' === typeof a && ('undefined' === typeof b && (b = 'visible'), this.listeners[b].push({
      func: a,
      scope: c
    }))
  };
  g.prototype.notifyListeners = function (a, c, b, d) {
    for (var e = 0; e < this.listeners[d].length; e++) {
      var f = this.listeners[d][e];
      f.func.apply(f.scope, [
        a,
        c,
        b
      ])
    }
  };
  g.prototype.default_options = {
    ref_date: new Date,
    start: !0,
    animation: 'smooth',
    count_past_zero: !0,
    circle_bg_color: '#60686F',
    use_background: !0,
    fg_width: 0.1,
    bg_width: 1.2,
    text_size: 0.07,
    total_duration: 'Auto',
    direction: 'Clockwise',
    use_top_frame: !1,
    start_angle: 0,
    time: {
      Days: {
        show: !0,
        text: 'Days',
        color: '#FC6'
      },
      Hours: {
        show: !0,
        text: 'Hours',
        color: '#9CF'
      },
      Minutes: {
        show: !0,
        text: 'Minutes',
        color: '#BFB'
      },
      Seconds: {
        show: !0,
        text: 'Seconds',
        color: '#F99'
      }
    }
  };
  var k = function (a, c) {
    this.elements = a;
    this.options = c;
    this.foreach()
  };
  k.prototype.getInstance = function (a) {
    var c = f(a).data('tc-id');
    'undefined' === typeof c && (c = n() + n() + '-' + n() + '-' + n() + '-' + n() + '-' + n() + n() + n(), f(a).attr('data-tc-id', c));
    if ('undefined' === typeof w[c]) {
      var b = this.options,
      d = f(a).data('options');
      'string' === typeof d && (d = JSON.parse(d));
      'object' === typeof d && (b = f.extend(!0, {
      }, this.options, d));
      a = new g(a, b);
      w[c] = a
    } else a = w[c],
    'undefined' !== typeof this.options && a.setOptions(this.options);
    return a
  };
  k.prototype.addTime = function (a) {
    this.foreach(function (c) {
      c.addTime(a)
    })
  };
  k.prototype.foreach = function (a) {
    var c = this;
    this.elements.each(function () {
      var b = c.getInstance(this);
      'function' === typeof a && a(b)
    });
    return this
  };
  k.prototype.start = function () {
    this.foreach(function (a) {
      a.start()
    });
    return this
  };
  k.prototype.stop = function () {
    this.foreach(function (a) {
      a.stop()
    });
    return this
  };
  k.prototype.restart = function () {
    this.foreach(function (a) {
      a.restart()
    });
    return this
  };
  k.prototype.rebuild = function () {
    this.foreach(function (a) {
      a.initialize(!1)
    });
    return this
  };
  k.prototype.getTime = function () {
    return this.getInstance(this.elements[0]).timeLeft()
  };
  k.prototype.addListener = function (a, c) {
    'undefined' === typeof c && (c = 'visible');
    var b = this;
    this.foreach(function (d) {
      d.addListener(a, b.elements, c)
    });
    return this
  };
  k.prototype.destroy = function () {
    this.foreach(function (a) {
      a.destroy()
    });
    return this
  };
  k.prototype.end = function () {
    return this.elements
  };
  f.fn.TimeCircles = function (a) {
    return new k(this, a)
  }
}) (jQuery);
/**
 * @module       Lightgallery
 * @author       Sachin N
 * @see          http://sachinchoolur.github.io/lightGallery/
 * @license      GPLv3
 * @version      1.6.2 - 2017-10-03
 */
!function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(a.jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    function b(b, d) {
      if (this.el = b, this.$el = a(b), this.s = a.extend({
      }, c, d), this.s.dynamic && 'undefined' !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
      return this.modules = {
      },
      this.lGalleryOn = !1,
      this.lgBusy = !1,
      this.hideBartimeout = !1,
      this.isTouch = 'ontouchstart' in document.documentElement,
      this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
      this.s.dynamic ? this.$items = this.s.dynamicEl : 'this' === this.s.selector ? this.$items = this.$el : '' !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector)  : this.$items = this.$el.find(a(this.s.selector))  : this.$items = this.$el.children(),
      this.$slide = '',
      this.$outer = '',
      this.init(),
      this
    }
    var c = {
      mode: 'lg-slide',
      cssEasing: 'ease',
      easing: 'linear',
      speed: 600,
      height: '100%',
      width: '100%',
      addClass: '',
      startClass: 'lg-start-zoom',
      backdropDuration: 150,
      hideBarsDelay: 6000,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: '.lg-sub-html',
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: '',
      selectWithin: '',
      nextHtml: '',
      prevHtml: '',
      index: !1,
      iframeMaxWidth: '100%',
      download: !0,
      counter: !0,
      appendCounterTo: '.lg-toolbar',
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [
      ],
      galleryId: 1
    };
    b.prototype.init = function () {
      var b = this;
      b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
      var c = window.location.hash;
      c.indexOf('lg=' + this.s.galleryId) > 0 && (b.index = parseInt(c.split('&slide=') [1], 10), a('body').addClass('lg-from-hash'), a('body').hasClass('lg-on') || (setTimeout(function () {
        b.build(b.index)
      }), a('body').addClass('lg-on'))),
      b.s.dynamic ? (b.$el.trigger('onBeforeOpen.lg'), b.index = b.s.index || 0, a('body').hasClass('lg-on') || setTimeout(function () {
        b.build(b.index),
        a('body').addClass('lg-on')
      }))  : b.$items.on('click.lgcustom', function (c) {
        try {
          c.preventDefault(),
          c.preventDefault()
        } catch (a) {
          c.returnValue = !1
        }
        b.$el.trigger('onBeforeOpen.lg'),
        b.index = b.s.index || b.$items.index(this),
        a('body').hasClass('lg-on') || (b.build(b.index), a('body').addClass('lg-on'))
      })
    },
    b.prototype.build = function (b) {
      var c = this;
      c.structure(),
      a.each(a.fn.lightGallery.modules, function (b) {
        c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
      }),
      c.slide(b, !1, !1, !1),
      c.s.keyPress && c.keyPress(),
      c.$items.length > 1 ? (c.arrow(), setTimeout(function () {
        c.enableDrag(),
        c.enableSwipe()
      }, 50), c.s.mousewheel && c.mousewheel())  : c.$slide.on('click.lg', function () {
        c.$el.trigger('onSlideClick.lg')
      }),
      c.counter(),
      c.closeGallery(),
      c.$el.trigger('onAfterOpen.lg'),
      c.$outer.on('mousemove.lg click.lg touchstart.lg', function () {
        c.$outer.removeClass('lg-hide-items'),
        clearTimeout(c.hideBartimeout),
        c.hideBartimeout = setTimeout(function () {
          c.$outer.addClass('lg-hide-items')
        }, c.s.hideBarsDelay)
      }),
      c.$outer.trigger('mousemove.lg')
    },
    b.prototype.structure = function () {
      var b,
      c = '',
      d = '',
      e = 0,
      f = '',
      g = this;
      for (a('body').append('<div class="lg-backdrop"></div>'), a('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms'), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
      if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + '</button></div>'), '.lg-sub-html' === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + '</div></div>', a('body').append(b), this.$outer = a('.lg-outer'), this.$slide = this.$outer.find('.lg-item'), this.s.useLeft ? (this.$outer.addClass('lg-use-left'), this.s.mode = 'lg-slide')  : this.$outer.addClass('lg-use-css3'), g.setTop(), a(window).on('resize.lg orientationchange.lg', function () {
        setTimeout(function () {
          g.setTop()
        }, 100)
      }), this.$slide.eq(this.index).addClass('lg-current'), this.doCss() ? this.$outer.addClass('lg-css3')  : (this.$outer.addClass('lg-css'), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass('lg-grab'), this.s.showAfterLoad && this.$outer.addClass('lg-show-after-load'), this.doCss()) {
        var h = this.$outer.find('.lg-inner');
        h.css('transition-timing-function', this.s.cssEasing),
        h.css('transition-duration', this.s.speed + 'ms')
      }
      setTimeout(function () {
        a('.lg-backdrop').addClass('in')
      }),
      setTimeout(function () {
        g.$outer.addClass('lg-visible')
      }, this.s.backdropDuration),
      this.s.download && this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
      this.prevScrollTop = a(window).scrollTop()
    },
    b.prototype.setTop = function () {
      if ('100%' !== this.s.height) {
        var b = a(window).height(),
        c = (b - parseInt(this.s.height, 10)) / 2,
        d = this.$outer.find('.lg');
        b >= parseInt(this.s.height, 10) ? d.css('top', c + 'px')  : d.css('top', '0px')
      }
    },
    b.prototype.doCss = function () {
      var a = function () {
        var a = [
          'transition',
          'MozTransition',
          'WebkitTransition',
          'OTransition',
          'msTransition',
          'KhtmlTransition'
        ],
        b = document.documentElement,
        c = 0;
        for (c = 0; c < a.length; c++) if (a[c] in b.style) return !0
      };
      return !!a()
    },
    b.prototype.isVideo = function (a, b) {
      var c;
      if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr('data-html'), !a) return c ? {
        html5: !0
      }
       : (console.error('lightGallery :- data-src is not pvovided on slide item ' + (b + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html'), !1);
      var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
      e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
      f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
      g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
      return d ? {
        youtube: d
      }
       : e ? {
        vimeo: e
      }
       : f ? {
        dailymotion: f
      }
       : g ? {
        vk: g
      }
       : void 0
    },
    b.prototype.counter = function () {
      this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>')
    },
    b.prototype.addHtml = function (b) {
      var c,
      d,
      e = null;
      if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr('data-sub-html-url') ? c = d.attr('data-sub-html-url')  : (e = d.attr('data-sub-html'), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr('title') || d.find('img').first().attr('alt')))), !c) if ('undefined' != typeof e && null !== e) {
        var f = e.substring(0, 1);
        '.' !== f && '#' !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html()  : a(e).html())
      } else e = '';
      '.lg-sub-html' === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c)  : this.$outer.find(this.s.appendSubHtmlTo).html(e)  : c ? this.$slide.eq(b).load(c)  : this.$slide.eq(b).append(e),
      'undefined' != typeof e && null !== e && ('' === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html')  : this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html')),
      this.$el.trigger('onAfterAppendSubHtml.lg', [
        b
      ])
    },
    b.prototype.preload = function (a) {
      var b = 1,
      c = 1;
      for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
      for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
    },
    b.prototype.loadContent = function (b, c, d) {
      var e,
      f,
      g,
      h,
      i,
      j,
      k = this,
      l = !1,
      m = function (b) {
        for (var c = [
        ], d = [
        ], e = 0; e < b.length; e++) {
          var g = b[e].split(' ');
          '' === g[0] && g.splice(0, 1),
          d.push(g[0]),
          c.push(g[1])
        }
        for (var h = a(window).width(), i = 0; i < c.length; i++) if (parseInt(c[i], 10) > h) {
          f = d[i];
          break
        }
      };
      if (k.s.dynamic) {
        if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
          var n = k.s.dynamicEl[b].responsive.split(',');
          m(n)
        }
        h = k.s.dynamicEl[b].srcset,
        i = k.s.dynamicEl[b].sizes
      } else {
        if (k.$items.eq(b).attr('data-poster') && (l = !0, g = k.$items.eq(b).attr('data-poster')), j = k.$items.eq(b).attr('data-html'), f = k.$items.eq(b).attr('href') || k.$items.eq(b).attr('data-src'), k.$items.eq(b).attr('data-responsive')) {
          var o = k.$items.eq(b).attr('data-responsive').split(',');
          m(o)
        }
        h = k.$items.eq(b).attr('data-srcset'),
        i = k.$items.eq(b).attr('data-sizes')
      }
      var p = !1;
      k.s.dynamic ? k.s.dynamicEl[b].iframe && (p = !0)  : 'true' === k.$items.eq(b).attr('data-iframe') && (p = !0);
      var q = k.isVideo(f, b);
      if (!k.$slide.eq(b).hasClass('lg-loaded')) {
        if (p) k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
         else if (l) {
          var r = '';
          r = q && q.youtube ? 'lg-has-youtube' : q && q.vimeo ? 'lg-has-vimeo' : 'lg-has-html5',
          k.$slide.eq(b).prepend('<div class="lg-video-cont ' + r + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
        } else q ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger('hasVideo.lg', [
          b,
          f,
          j
        ]))  : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
        if (k.$el.trigger('onAferAppendSlide.lg', [
          b
        ]), e = k.$slide.eq(b).find('.lg-object'), i && e.attr('sizes', i), h) {
          e.attr('srcset', h);
          try {
            picturefill({
              elements: [
                e[0]
              ]
            })
          } catch (a) {
            console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.')
          }
        }
        '.lg-sub-html' !== this.s.appendSubHtmlTo && k.addHtml(b),
        k.$slide.eq(b).addClass('lg-loaded')
      }
      k.$slide.eq(b).find('.lg-object').on('load.lg error.lg', function () {
        var c = 0;
        d && !a('body').hasClass('lg-from-hash') && (c = d),
        setTimeout(function () {
          k.$slide.eq(b).addClass('lg-complete'),
          k.$el.trigger('onSlideItemLoad.lg', [
            b,
            d || 0
          ])
        }, c)
      }),
      q && q.html5 && !l && k.$slide.eq(b).addClass('lg-complete'),
      c === !0 && (k.$slide.eq(b).hasClass('lg-complete') ? k.preload(b)  : k.$slide.eq(b).find('.lg-object').on('load.lg error.lg', function () {
        k.preload(b)
      }))
    },
    b.prototype.slide = function (b, c, d, e) {
      var f = this.$outer.find('.lg-current').index(),
      g = this;
      if (!g.lGalleryOn || f !== b) {
        var h = this.$slide.length,
        i = g.lGalleryOn ? this.s.speed : 0;
        if (!g.lgBusy) {
          if (this.s.download) {
            var j;
            j = g.s.dynamic ? g.s.dynamicEl[b].downloadUrl !== !1 && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src)  : 'false' !== g.$items.eq(b).attr('data-download-url') && (g.$items.eq(b).attr('data-download-url') || g.$items.eq(b).attr('href') || g.$items.eq(b).attr('data-src')),
            j ? (a('#lg-download').attr('href', j), g.$outer.removeClass('lg-hide-download'))  : g.$outer.addClass('lg-hide-download')
          }
          if (this.$el.trigger('onBeforeSlide.lg', [
            f,
            b,
            c,
            d
          ]), g.lgBusy = !0, clearTimeout(g.hideBartimeout), '.lg-sub-html' === this.s.appendSubHtmlTo && setTimeout(function () {
            g.addHtml(b)
          }, i), this.arrowDisable(b), e || (b < f ? e = 'prev' : b > f && (e = 'next')), c) {
            this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
            var k,
            l;
            h > 2 ? (k = b - 1, l = b + 1, 0 === b && f === h - 1 ? (l = 0, k = h - 1)  : b === h - 1 && 0 === f && (l = 0, k = h - 1))  : (k = 0, l = 1),
            'prev' === e ? g.$slide.eq(l).addClass('lg-next-slide')  : g.$slide.eq(k).addClass('lg-prev-slide'),
            g.$slide.eq(b).addClass('lg-current')
          } else g.$outer.addClass('lg-no-trans'),
          this.$slide.removeClass('lg-prev-slide lg-next-slide'),
          'prev' === e ? (this.$slide.eq(b).addClass('lg-prev-slide'), this.$slide.eq(f).addClass('lg-next-slide'))  : (this.$slide.eq(b).addClass('lg-next-slide'), this.$slide.eq(f).addClass('lg-prev-slide')),
          setTimeout(function () {
            g.$slide.removeClass('lg-current'),
            g.$slide.eq(b).addClass('lg-current'),
            g.$outer.removeClass('lg-no-trans')
          }, 50);
          g.lGalleryOn ? (setTimeout(function () {
            g.loadContent(b, !0, 0)
          }, this.s.speed + 50), setTimeout(function () {
            g.lgBusy = !1,
            g.$el.trigger('onAfterSlide.lg', [
              f,
              b,
              c,
              d
            ])
          }, this.s.speed))  : (g.loadContent(b, !0, g.s.backdropDuration), g.lgBusy = !1, g.$el.trigger('onAfterSlide.lg', [
            f,
            b,
            c,
            d
          ])),
          g.lGalleryOn = !0,
          this.s.counter && a('#lg-counter-current').text(b + 1)
        }
        g.index = b
      }
    },
    b.prototype.goToNextSlide = function (a) {
      var b = this,
      c = b.s.loop;
      a && b.$slide.length < 3 && (c = !1),
      b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger('onBeforeNextSlide.lg', [
        b.index
      ]), b.slide(b.index, a, !1, 'next'))  : c ? (b.index = 0, b.$el.trigger('onBeforeNextSlide.lg', [
        b.index
      ]), b.slide(b.index, a, !1, 'next'))  : b.s.slideEndAnimatoin && !a && (b.$outer.addClass('lg-right-end'), setTimeout(function () {
        b.$outer.removeClass('lg-right-end')
      }, 400)))
    },
    b.prototype.goToPrevSlide = function (a) {
      var b = this,
      c = b.s.loop;
      a && b.$slide.length < 3 && (c = !1),
      b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger('onBeforePrevSlide.lg', [
        b.index,
        a
      ]), b.slide(b.index, a, !1, 'prev'))  : c ? (b.index = b.$items.length - 1, b.$el.trigger('onBeforePrevSlide.lg', [
        b.index,
        a
      ]), b.slide(b.index, a, !1, 'prev'))  : b.s.slideEndAnimatoin && !a && (b.$outer.addClass('lg-left-end'), setTimeout(function () {
        b.$outer.removeClass('lg-left-end')
      }, 400)))
    },
    b.prototype.keyPress = function () {
      var b = this;
      this.$items.length > 1 && a(window).on('keyup.lg', function (a) {
        b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()))
      }),
      a(window).on('keydown.lg', function (a) {
        b.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass('lg-thumb-open') ? b.$outer.removeClass('lg-thumb-open')  : b.destroy())
      })
    },
    b.prototype.arrow = function () {
      var a = this;
      this.$outer.find('.lg-prev').on('click.lg', function () {
        a.goToPrevSlide()
      }),
      this.$outer.find('.lg-next').on('click.lg', function () {
        a.goToNextSlide()
      })
    },
    b.prototype.arrowDisable = function (a) {
      !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled')  : this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled'), a > 0 ? this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled')  : this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled'))
    },
    b.prototype.setTranslate = function (a, b, c) {
      this.s.useLeft ? a.css('left', b)  : a.css({
        transform: 'translate3d(' + b + 'px, ' + c + 'px, 0px)'
      })
    },
    b.prototype.touchMove = function (b, c) {
      var d = c - b;
      Math.abs(d) > 15 && (this.$outer.addClass('lg-dragging'), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a('.lg-prev-slide'), - this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a('.lg-next-slide'), this.$slide.eq(this.index).width() + d, 0))
    },
    b.prototype.touchEnd = function (a) {
      var b = this;
      'lg-slide' !== b.s.mode && b.$outer.addClass('lg-slide'),
      this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0'),
      setTimeout(function () {
        b.$outer.removeClass('lg-dragging'),
        a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0)  : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0)  : Math.abs(a) < 5 && b.$el.trigger('onSlideClick.lg'),
        b.$slide.removeAttr('style')
      }),
      setTimeout(function () {
        b.$outer.hasClass('lg-dragging') || 'lg-slide' === b.s.mode || b.$outer.removeClass('lg-slide')
      }, b.s.speed + 100)
    },
    b.prototype.enableSwipe = function () {
      var a = this,
      b = 0,
      c = 0,
      d = !1;
      a.s.enableSwipe && a.doCss() && (a.$slide.on('touchstart.lg', function (c) {
        a.$outer.hasClass('lg-zoomed') || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
      }), a.$slide.on('touchmove.lg', function (e) {
        a.$outer.hasClass('lg-zoomed') || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
      }), a.$slide.on('touchend.lg', function () {
        a.$outer.hasClass('lg-zoomed') || (d ? (d = !1, a.touchEnd(c - b))  : a.$el.trigger('onSlideClick.lg'))
      }))
    },
    b.prototype.enableDrag = function () {
      var b = this,
      c = 0,
      d = 0,
      e = !1,
      f = !1;
      b.s.enableDrag && b.doCss() && (b.$slide.on('mousedown.lg', function (d) {
        b.$outer.hasClass('lg-zoomed') || (a(d.target).hasClass('lg-object') || a(d.target).hasClass('lg-video-play')) && (d.preventDefault(), b.lgBusy || (b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass('lg-grab').addClass('lg-grabbing'), b.$el.trigger('onDragstart.lg')))
      }), a(window).on('mousemove.lg', function (a) {
        e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger('onDragmove.lg'))
      }), a(window).on('mouseup.lg', function (g) {
        f ? (f = !1, b.touchEnd(d - c), b.$el.trigger('onDragend.lg'))  : (a(g.target).hasClass('lg-object') || a(g.target).hasClass('lg-video-play')) && b.$el.trigger('onSlideClick.lg'),
        e && (e = !1, b.$outer.removeClass('lg-grabbing').addClass('lg-grab'))
      }))
    },
    b.prototype.manageSwipeClass = function () {
      var a = this.index + 1,
      b = this.index - 1;
      this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)),
      this.$slide.removeClass('lg-next-slide lg-prev-slide'),
      b > - 1 && this.$slide.eq(b).addClass('lg-prev-slide'),
      this.$slide.eq(a).addClass('lg-next-slide')
    },
    b.prototype.mousewheel = function () {
      var a = this;
      a.$outer.on('mousewheel.lg', function (b) {
        b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide()  : a.goToNextSlide(), b.preventDefault())
      })
    },
    b.prototype.closeGallery = function () {
      var b = this,
      c = !1;
      this.$outer.find('.lg-close').on('click.lg', function () {
        b.destroy()
      }),
      b.s.closable && (b.$outer.on('mousedown.lg', function (b) {
        c = !!(a(b.target).is('.lg-outer') || a(b.target).is('.lg-item ') || a(b.target).is('.lg-img-wrap'))
      }), b.$outer.on('mouseup.lg', function (d) {
        (a(d.target).is('.lg-outer') || a(d.target).is('.lg-item ') || a(d.target).is('.lg-img-wrap') && c) && (b.$outer.hasClass('lg-dragging') || b.destroy())
      }))
    },
    b.prototype.destroy = function (b) {
      var c = this;
      b || (c.$el.trigger('onBeforeClose.lg'), a(window).scrollTop(c.prevScrollTop)),
      b && (c.s.dynamic || this.$items.off('click.lg click.lgcustom'), a.removeData(c.el, 'lightGallery')),
      this.$el.off('.lg.tm'),
      a.each(a.fn.lightGallery.modules, function (a) {
        c.modules[a] && c.modules[a].destroy()
      }),
      this.lGalleryOn = !1,
      clearTimeout(c.hideBartimeout),
      this.hideBartimeout = !1,
      a(window).off('.lg'),
      a('body').removeClass('lg-on lg-from-hash'),
      c.$outer && c.$outer.removeClass('lg-visible'),
      a('.lg-backdrop').removeClass('in'),
      setTimeout(function () {
        c.$outer && c.$outer.remove(),
        a('.lg-backdrop').remove(),
        b || c.$el.trigger('onCloseAfter.lg')
      }, c.s.backdropDuration + 50)
    },
    a.fn.lightGallery = function (c) {
      return this.each(function () {
        if (a.data(this, 'lightGallery')) try {
          a(this).data('lightGallery').init()
        } catch (a) {
          console.error('lightGallery has not initiated properly')
        } else a.data(this, 'lightGallery', new b(this, c))
      })
    },
    a.fn.lightGallery.modules = {
    }
  }()
}),
function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    var b = {
      autoplay: !1,
      pause: 5000,
      progressBar: !0,
      fourceAutoplay: !1,
      autoplayControls: !0,
      appendAutoplayControlsTo: '.lg-toolbar'
    },
    c = function (c) {
      return this.core = a(c).data('lightGallery'),
      this.$el = a(c),
      !(this.core.$items.length < 2) && (this.core.s = a.extend({
      }, b, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
    };
    c.prototype.init = function () {
      var a = this;
      a.core.s.autoplayControls && a.controls(),
      a.core.s.progressBar && a.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),
      a.progress(),
      a.core.s.autoplay && a.$el.one('onSlideItemLoad.lg.tm', function () {
        a.startlAuto()
      }),
      a.$el.on('onDragstart.lg.tm touchstart.lg.tm', function () {
        a.interval && (a.cancelAuto(), a.canceledOnTouch = !0)
      }),
      a.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm', function () {
        !a.interval && a.canceledOnTouch && (a.startlAuto(), a.canceledOnTouch = !1)
      })
    },
    c.prototype.progress = function () {
      var a,
      b,
      c = this;
      c.$el.on('onBeforeSlide.lg.tm', function () {
        c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find('.lg-progress-bar'), b = c.core.$outer.find('.lg-progress'), c.interval && (b.removeAttr('style'), a.removeClass('lg-start'), setTimeout(function () {
          b.css('transition', 'width ' + (c.core.s.speed + c.core.s.pause) + 'ms ease 0s'),
          a.addClass('lg-start')
        }, 20))),
        c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
        c.fromAuto = !1
      })
    },
    c.prototype.controls = function () {
      var b = this,
      c = '<span class="lg-autoplay-button lg-icon"></span>';
      a(this.core.s.appendAutoplayControlsTo).append(c),
      b.core.$outer.find('.lg-autoplay-button').on('click.lg', function () {
        a(b.core.$outer).hasClass('lg-show-autoplay') ? (b.cancelAuto(), b.core.s.fourceAutoplay = !1)  : b.interval || (b.startlAuto(), b.core.s.fourceAutoplay = b.fourceAutoplayTemp)
      })
    },
    c.prototype.startlAuto = function () {
      var a = this;
      a.core.$outer.find('.lg-progress').css('transition', 'width ' + (a.core.s.speed + a.core.s.pause) + 'ms ease 0s'),
      a.core.$outer.addClass('lg-show-autoplay'),
      a.core.$outer.find('.lg-progress-bar').addClass('lg-start'),
      a.interval = setInterval(function () {
        a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0,
        a.fromAuto = !0,
        a.core.slide(a.core.index, !1, !1, 'next')
      }, a.core.s.speed + a.core.s.pause)
    },
    c.prototype.cancelAuto = function () {
      clearInterval(this.interval),
      this.interval = !1,
      this.core.$outer.find('.lg-progress').removeAttr('style'),
      this.core.$outer.removeClass('lg-show-autoplay'),
      this.core.$outer.find('.lg-progress-bar').removeClass('lg-start')
    },
    c.prototype.destroy = function () {
      this.cancelAuto(),
      this.core.$outer.find('.lg-progress-bar').remove()
    },
    a.fn.lightGallery.modules.autoplay = c
  }()
}),
function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    var b = {
      fullScreen: !0
    },
    c = function (c) {
      return this.core = a(c).data('lightGallery'),
      this.$el = a(c),
      this.core.s = a.extend({
      }, b, this.core.s),
      this.init(),
      this
    };
    c.prototype.init = function () {
      var a = '';
      if (this.core.s.fullScreen) {
        if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
        a = '<span class="lg-fullscreen lg-icon"></span>',
        this.core.$outer.find('.lg-toolbar').append(a),
        this.fullScreen()
      }
    },
    c.prototype.requestFullscreen = function () {
      var a = document.documentElement;
      a.requestFullscreen ? a.requestFullscreen()  : a.msRequestFullscreen ? a.msRequestFullscreen()  : a.mozRequestFullScreen ? a.mozRequestFullScreen()  : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
    },
    c.prototype.exitFullscreen = function () {
      document.exitFullscreen ? document.exitFullscreen()  : document.msExitFullscreen ? document.msExitFullscreen()  : document.mozCancelFullScreen ? document.mozCancelFullScreen()  : document.webkitExitFullscreen && document.webkitExitFullscreen()
    },
    c.prototype.fullScreen = function () {
      var b = this;
      a(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg', function () {
        b.core.$outer.toggleClass('lg-fullscreen-on')
      }),
      this.core.$outer.find('.lg-fullscreen').on('click.lg', function () {
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b.exitFullscreen()  : b.requestFullscreen()
      })
    },
    c.prototype.destroy = function () {
      this.exitFullscreen(),
      a(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg')
    },
    a.fn.lightGallery.modules.fullscreen = c
  }()
}),
function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    var b = {
      pager: !1
    },
    c = function (c) {
      return this.core = a(c).data('lightGallery'),
      this.$el = a(c),
      this.core.s = a.extend({
      }, b, this.core.s),
      this.core.s.pager && this.core.$items.length > 1 && this.init(),
      this
    };
    c.prototype.init = function () {
      var b,
      c,
      d,
      e = this,
      f = '';
      if (e.core.$outer.find('.lg').append('<div class="lg-pager-outer"></div>'), e.core.s.dynamic) for (var g = 0; g < e.core.s.dynamicEl.length; g++) f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
       else e.core.$items.each(function () {
        f += e.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find('img').attr('src') + '" /></div></span>'
      });
      c = e.core.$outer.find('.lg-pager-outer'),
      c.html(f),
      b = e.core.$outer.find('.lg-pager-cont'),
      b.on('click.lg touchend.lg', function () {
        var b = a(this);
        e.core.index = b.index(),
        e.core.slide(e.core.index, !1, !0, !1)
      }),
      c.on('mouseover.lg', function () {
        clearTimeout(d),
        c.addClass('lg-pager-hover')
      }),
      c.on('mouseout.lg', function () {
        d = setTimeout(function () {
          c.removeClass('lg-pager-hover')
        })
      }),
      e.core.$el.on('onBeforeSlide.lg.tm', function (a, c, d) {
        b.removeClass('lg-pager-active'),
        b.eq(d).addClass('lg-pager-active')
      })
    },
    c.prototype.destroy = function () {
    },
    a.fn.lightGallery.modules.pager = c
  }()
}),
function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    var b = {
      thumbnail: !0,
      animateThumb: !0,
      currentPagerPosition: 'middle',
      thumbWidth: 100,
      thumbHeight: '80px',
      thumbContHeight: 100,
      thumbMargin: 5,
      exThumbImage: !1,
      showThumbByDefault: !0,
      toogleThumb: !0,
      pullCaptionUp: !0,
      enableThumbDrag: !0,
      enableThumbSwipe: !0,
      swipeThreshold: 50,
      loadYoutubeThumbnail: !0,
      youtubeThumbSize: 1,
      loadVimeoThumbnail: !0,
      vimeoThumbSize: 'thumbnail_small',
      loadDailymotionThumbnail: !0
    },
    c = function (c) {
      return this.core = a(c).data('lightGallery'),
      this.core.s = a.extend({
      }, b, this.core.s),
      this.$el = a(c),
      this.$thumbOuter = null,
      this.thumbOuterWidth = 0,
      this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin),
      this.thumbIndex = this.core.index,
      this.core.s.animateThumb && (this.core.s.thumbHeight = '100%'),
      this.left = 0,
      this.init(),
      this
    };
    c.prototype.init = function () {
      var a = this;
      this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function () {
        a.core.$outer.addClass('lg-thumb-open')
      }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass('lg-pull-caption-up'), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1)  : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
    },
    c.prototype.build = function () {
      function b(a, b, c) {
        var g,
        h = d.core.isVideo(a, c) || {
        },
        i = '';
        h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? '//img.youtube.com/vi/' + h.youtube[1] + '/' + d.core.s.youtubeThumbSize + '.jpg' : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = '//i.vimeocdn.com/video/error_' + f + '.jpg', i = h.vimeo[1])  : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? '//www.dailymotion.com/thumbnail/video/' + h.dailymotion[1] : b)  : g = b,
        e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + 'px; height: ' + d.core.s.thumbHeight + '; margin-right: ' + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>',
        i = ''
      }
      var c,
      d = this,
      e = '',
      f = '',
      g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
      switch (this.core.s.vimeoThumbSize) {
        case 'thumbnail_large':
          f = '640';
          break;
        case 'thumbnail_medium':
          f = '200x150';
          break;
        case 'thumbnail_small':
          f = '100x75'
      }
      if (d.core.$outer.addClass('lg-has-thumb'), d.core.$outer.find('.lg').append(g), d.$thumbOuter = d.core.$outer.find('.lg-thumb-outer'), d.thumbOuterWidth = d.$thumbOuter.width(), d.core.s.animateThumb && d.core.$outer.find('.lg-thumb').css({
        width: d.thumbTotalWidth + 'px',
        position: 'relative'
      }), this.core.s.animateThumb && d.$thumbOuter.css('height', d.core.s.thumbContHeight + 'px'), d.core.s.dynamic) for (var h = 0; h < d.core.s.dynamicEl.length; h++) b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
       else d.core.$items.each(function (c) {
        d.core.s.exThumbImage ? b(a(this).attr('href') || a(this).attr('data-src'), a(this).attr(d.core.s.exThumbImage), c)  : b(a(this).attr('href') || a(this).attr('data-src'), a(this).find('img').attr('src'), c)
      });
      d.core.$outer.find('.lg-thumb').html(e),
      c = d.core.$outer.find('.lg-thumb-item'),
      c.each(function () {
        var b = a(this),
        c = b.attr('data-vimeo-id');
        c && a.getJSON('//www.vimeo.com/api/v2/video/' + c + '.json?callback=?', {
          format: 'json'
        }, function (a) {
          b.find('img').attr('src', a[0][d.core.s.vimeoThumbSize])
        })
      }),
      c.eq(d.core.index).addClass('active'),
      d.core.$el.on('onBeforeSlide.lg.tm', function () {
        c.removeClass('active'),
        c.eq(d.core.index).addClass('active')
      }),
      c.on('click.lg touchend.lg', function () {
        var b = a(this);
        setTimeout(function () {
          (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(), d.core.slide(d.core.index, !1, !0, !1))
        }, 50)
      }),
      d.core.$el.on('onBeforeSlide.lg.tm', function () {
        d.animateThumb(d.core.index)
      }),
      a(window).on('resize.lg.thumb orientationchange.lg.thumb', function () {
        setTimeout(function () {
          d.animateThumb(d.core.index),
          d.thumbOuterWidth = d.$thumbOuter.width()
        }, 200)
      })
    },
    c.prototype.setTranslate = function (a) {
      this.core.$outer.find('.lg-thumb').css({
        transform: 'translate3d(-' + a + 'px, 0px, 0px)'
      })
    },
    c.prototype.animateThumb = function (a) {
      var b = this.core.$outer.find('.lg-thumb');
      if (this.core.s.animateThumb) {
        var c;
        switch (this.core.s.currentPagerPosition) {
          case 'left':
            c = 0;
            break;
          case 'middle':
            c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
            break;
          case 'right':
            c = this.thumbOuterWidth - this.core.s.thumbWidth
        }
        this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c,
        this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
        this.left < 0 && (this.left = 0),
        this.core.lGalleryOn ? (b.hasClass('on') || this.core.$outer.find('.lg-thumb').css('transition-duration', this.core.s.speed + 'ms'), this.core.doCss() || b.animate({
          left: - this.left + 'px'
        }, this.core.s.speed))  : this.core.doCss() || b.css('left', - this.left + 'px'),
        this.setTranslate(this.left)
      }
    },
    c.prototype.enableThumbDrag = function () {
      var b = this,
      c = 0,
      d = 0,
      e = !1,
      f = !1,
      g = 0;
      b.$thumbOuter.addClass('lg-grab'),
      b.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb', function (a) {
        b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(), c = a.pageX, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.thumbClickable = !1, b.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing'))
      }),
      a(window).on('mousemove.lg.thumb', function (a) {
        e && (g = b.left, f = !0, d = a.pageX, b.$thumbOuter.addClass('lg-dragging'), g -= d - c, g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth), g < 0 && (g = 0), b.setTranslate(g))
      }),
      a(window).on('mouseup.lg.thumb', function () {
        f ? (f = !1, b.$thumbOuter.removeClass('lg-dragging'), b.left = g, Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0))  : b.thumbClickable = !0,
        e && (e = !1, b.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab'))
      })
    },
    c.prototype.enableThumbSwipe = function () {
      var a = this,
      b = 0,
      c = 0,
      d = !1,
      e = 0;
      a.core.$outer.find('.lg-thumb').on('touchstart.lg', function (c) {
        a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), b = c.originalEvent.targetTouches[0].pageX, a.thumbClickable = !1)
      }),
      a.core.$outer.find('.lg-thumb').on('touchmove.lg', function (f) {
        a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(), c = f.originalEvent.targetTouches[0].pageX, d = !0, a.$thumbOuter.addClass('lg-dragging'), e = a.left, e -= c - b, e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth), e < 0 && (e = 0), a.setTranslate(e))
      }),
      a.core.$outer.find('.lg-thumb').on('touchend.lg', function () {
        a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1, a.$thumbOuter.removeClass('lg-dragging'), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), a.left = e)  : a.thumbClickable = !0
      })
    },
    c.prototype.toogle = function () {
      var a = this;
      a.core.s.toogleThumb && (a.core.$outer.addClass('lg-can-toggle'), a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a.core.$outer.find('.lg-toogle-thumb').on('click.lg', function () {
        a.core.$outer.toggleClass('lg-thumb-open')
      }))
    },
    c.prototype.thumbkeyPress = function () {
      var b = this;
      a(window).on('keydown.lg.thumb', function (a) {
        38 === a.keyCode ? (a.preventDefault(), b.core.$outer.addClass('lg-thumb-open'))  : 40 === a.keyCode && (a.preventDefault(), b.core.$outer.removeClass('lg-thumb-open'))
      })
    },
    c.prototype.destroy = function () {
      this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb'), this.$thumbOuter.remove(), this.core.$outer.removeClass('lg-has-thumb'))
    },
    a.fn.lightGallery.modules.Thumbnail = c
  }()
}),
function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    var b = {
      videoMaxWidth: '855px',
      youtubePlayerParams: !1,
      vimeoPlayerParams: !1,
      dailymotionPlayerParams: !1,
      vkPlayerParams: !1,
      videojs: !1,
      videojsOptions: {
      }
    },
    c = function (c) {
      return this.core = a(c).data('lightGallery'),
      this.$el = a(c),
      this.core.s = a.extend({
      }, b, this.core.s),
      this.videoLoaded = !1,
      this.init(),
      this
    };
    c.prototype.init = function () {
      var b = this;
      b.core.$el.on('hasVideo.lg.tm', function (a, c, d, e) {
        if (b.core.$slide.eq(c).find('.lg-video').append(b.loadVideo(d, 'lg-object', !0, c, e)), e) if (b.core.s.videojs) try {
          videojs(b.core.$slide.eq(c).find('.lg-html5').get(0), b.core.s.videojsOptions, function () {
            b.videoLoaded || this.play()
          })
        } catch (a) {
          console.error('Make sure you have included videojs')
        } else b.videoLoaded || b.core.$slide.eq(c).find('.lg-html5').get(0).play()
      }),
      b.core.$el.on('onAferAppendSlide.lg.tm', function (a, c) {
        var d = b.core.$slide.eq(c).find('.lg-video-cont');
        d.hasClass('lg-has-iframe') || (d.css('max-width', b.core.s.videoMaxWidth), b.videoLoaded = !0)
      });
      var c = function (a) {
        if (a.find('.lg-object').hasClass('lg-has-poster') && a.find('.lg-object').is(':visible')) if (a.hasClass('lg-has-video')) {
          var c = a.find('.lg-youtube').get(0),
          d = a.find('.lg-vimeo').get(0),
          e = a.find('.lg-dailymotion').get(0),
          f = a.find('.lg-html5').get(0);
          if (c) c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
           else if (d) try {
            $f(d).api('play')
          } catch (a) {
            console.error('Make sure you have included froogaloop2 js')
          } else if (e) e.contentWindow.postMessage('play', '*');
           else if (f) if (b.core.s.videojs) try {
            videojs(f).play()
          } catch (a) {
            console.error('Make sure you have included videojs')
          } else f.play();
          a.addClass('lg-video-playing')
        } else {
          a.addClass('lg-video-playing lg-has-video');
          var g,
          h,
          i = function (c, d) {
            if (a.find('.lg-video').append(b.loadVideo(c, '', !1, b.core.index, d)), d) if (b.core.s.videojs) try {
              videojs(b.core.$slide.eq(b.core.index).find('.lg-html5').get(0), b.core.s.videojsOptions, function () {
                this.play()
              })
            } catch (a) {
              console.error('Make sure you have included videojs')
            } else b.core.$slide.eq(b.core.index).find('.lg-html5').get(0).play()
          };
          b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src, h = b.core.s.dynamicEl[b.core.index].html, i(g, h))  : (g = b.core.$items.eq(b.core.index).attr('href') || b.core.$items.eq(b.core.index).attr('data-src'), h = b.core.$items.eq(b.core.index).attr('data-html'), i(g, h));
          var j = a.find('.lg-object');
          a.find('.lg-video').append(j),
          a.find('.lg-video-object').hasClass('lg-html5') || (a.removeClass('lg-complete'), a.find('.lg-video-object').on('load.lg error.lg', function () {
            a.addClass('lg-complete')
          }))
        }
      };
      b.core.doCss() && b.core.$items.length > 1 && (b.core.s.enableSwipe || b.core.s.enableDrag) ? b.core.$el.on('onSlideClick.lg.tm', function () {
        var a = b.core.$slide.eq(b.core.index);
        c(a)
      })  : b.core.$slide.on('click.lg', function () {
        c(a(this))
      }),
      b.core.$el.on('onBeforeSlide.lg.tm', function (c, d, e) {
        var f = b.core.$slide.eq(d),
        g = f.find('.lg-youtube').get(0),
        h = f.find('.lg-vimeo').get(0),
        i = f.find('.lg-dailymotion').get(0),
        j = f.find('.lg-vk').get(0),
        k = f.find('.lg-html5').get(0);
        if (g) g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
         else if (h) try {
          $f(h).api('pause')
        } catch (a) {
          console.error('Make sure you have included froogaloop2 js')
        } else if (i) i.contentWindow.postMessage('pause', '*');
         else if (k) if (b.core.s.videojs) try {
          videojs(k).pause()
        } catch (a) {
          console.error('Make sure you have included videojs')
        } else k.pause();
        j && a(j).attr('src', a(j).attr('src').replace('&autoplay', '&noplay'));
        var l;
        l = b.core.s.dynamic ? b.core.s.dynamicEl[e].src : b.core.$items.eq(e).attr('href') || b.core.$items.eq(e).attr('data-src');
        var m = b.core.isVideo(l, e) || {
        };
        (m.youtube || m.vimeo || m.dailymotion || m.vk) && b.core.$outer.addClass('lg-hide-download')
      }),
      b.core.$el.on('onAfterSlide.lg.tm', function (a, c) {
        b.core.$slide.eq(c).removeClass('lg-video-playing')
      })
    },
    c.prototype.loadVideo = function (b, c, d, e, f) {
      var g = '',
      h = 1,
      i = '',
      j = this.core.isVideo(b, e) || {
      };
      if (d && (h = this.videoLoaded ? 0 : 1), j.youtube) i = '?wmode=opaque&autoplay=' + h + '&enablejsapi=1',
      this.core.s.youtubePlayerParams && (i = i + '&' + a.param(this.core.s.youtubePlayerParams)),
      g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';
       else if (j.vimeo) i = '?autoplay=' + h + '&api=1',
      this.core.s.vimeoPlayerParams && (i = i + '&' + a.param(this.core.s.vimeoPlayerParams)),
      g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
       else if (j.dailymotion) i = '?wmode=opaque&autoplay=' + h + '&api=postMessage',
      this.core.s.dailymotionPlayerParams && (i = i + '&' + a.param(this.core.s.dailymotionPlayerParams)),
      g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';
       else if (j.html5) {
        var k = f.substring(0, 1);
        '.' !== k && '#' !== k || (f = a(f).html()),
        g = f
      } else j.vk && (i = '&autoplay=' + h, this.core.s.vkPlayerParams && (i = i + '&' + a.param(this.core.s.vkPlayerParams)), g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="http://vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
      return g
    },
    c.prototype.destroy = function () {
      this.videoLoaded = !1
    },
    a.fn.lightGallery.modules.video = c
  }()
}),
function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    var b = function () {
      var a = !1,
      b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
      return b && parseInt(b[2], 10) < 54 && (a = !0),
      a
    },
    c = {
      scale: 1,
      zoom: !0,
      actualSize: !0,
      enableZoomAfter: 300,
      useLeftForZoom: b()
    },
    d = function (b) {
      return this.core = a(b).data('lightGallery'),
      this.core.s = a.extend({
      }, c, this.core.s),
      this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()),
      this
    };
    d.prototype.init = function () {
      var b = this,
      c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
      b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
      b.core.s.useLeftForZoom ? b.core.$outer.addClass('lg-use-left-for-zoom')  : b.core.$outer.addClass('lg-use-transition-for-zoom'),
      this.core.$outer.find('.lg-toolbar').append(c),
      b.core.$el.on('onSlideItemLoad.lg.tm.zoom', function (c, d, e) {
        var f = b.core.s.enableZoomAfter + e;
        a('body').hasClass('lg-from-hash') && e ? f = 0 : a('body').removeClass('lg-from-hash'),
        b.zoomabletimeout = setTimeout(function () {
          b.core.$slide.eq(d).addClass('lg-zoomable')
        }, f + 30)
      });
      var d = 1,
      e = function (c) {
        var d,
        e,
        f = b.core.$outer.find('.lg-current .lg-image'),
        g = (a(window).width() - f.prop('offsetWidth')) / 2,
        h = (a(window).height() - f.prop('offsetHeight')) / 2 + a(window).scrollTop();
        d = b.pageX - g,
        e = b.pageY - h;
        var i = (c - 1) * d,
        j = (c - 1) * e;
        f.css('transform', 'scale3d(' + c + ', ' + c + ', 1)').attr('data-scale', c),
        b.core.s.useLeftForZoom ? f.parent().css({
          left: - i + 'px',
          top: - j + 'px'
        }).attr('data-x', i).attr('data-y', j)  : f.parent().css('transform', 'translate3d(-' + i + 'px, -' + j + 'px, 0)').attr('data-x', i).attr('data-y', j)
      },
      f = function () {
        d > 1 ? b.core.$outer.addClass('lg-zoomed')  : b.resetZoom(),
        d < 1 && (d = 1),
        e(d)
      },
      g = function (c, e, g, h) {
        var i,
        j = e.prop('offsetWidth');
        i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr('data-width') || e[0].naturalWidth || j;
        var k;
        b.core.$outer.hasClass('lg-zoomed') ? d = 1 : i > j && (k = i / j, d = k || 2),
        h ? (b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop())  : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX, b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY),
        f(),
        setTimeout(function () {
          b.core.$outer.removeClass('lg-grabbing').addClass('lg-grab')
        }, 10)
      },
      h = !1;
      b.core.$el.on('onAferAppendSlide.lg.tm.zoom', function (a, c) {
        var d = b.core.$slide.eq(c).find('.lg-image');
        d.on('dblclick', function (a) {
          g(a, d, c)
        }),
        d.on('touchstart', function (a) {
          h ? (clearTimeout(h), h = null, g(a, d, c))  : h = setTimeout(function () {
            h = null
          }, 300),
          a.preventDefault()
        })
      }),
      a(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom', function () {
        b.pageX = a(window).width() / 2,
        b.pageY = a(window).height() / 2 + a(window).scrollTop(),
        e(d)
      }),
      a('#lg-zoom-out').on('click.lg', function () {
        b.core.$outer.find('.lg-current .lg-image').length && (d -= b.core.s.scale, f())
      }),
      a('#lg-zoom-in').on('click.lg', function () {
        b.core.$outer.find('.lg-current .lg-image').length && (d += b.core.s.scale, f())
      }),
      a('#lg-actual-size').on('click.lg', function (a) {
        g(a, b.core.$slide.eq(b.core.index).find('.lg-image'), b.core.index, !0)
      }),
      b.core.$el.on('onBeforeSlide.lg.tm', function () {
        d = 1,
        b.resetZoom()
      }),
      b.zoomDrag(),
      b.zoomSwipe()
    },
    d.prototype.resetZoom = function () {
      this.core.$outer.removeClass('lg-zoomed'),
      this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y'),
      this.core.$slide.find('.lg-image').removeAttr('style data-scale'),
      this.pageX = a(window).width() / 2,
      this.pageY = a(window).height() / 2 + a(window).scrollTop()
    },
    d.prototype.zoomSwipe = function () {
      var a = this,
      b = {
      },
      c = {
      },
      d = !1,
      e = !1,
      f = !1;
      a.core.$slide.on('touchstart.lg', function (c) {
        if (a.core.$outer.hasClass('lg-zoomed')) {
          var d = a.core.$slide.eq(a.core.index).find('.lg-object');
          f = d.prop('offsetHeight') * d.attr('data-scale') > a.core.$outer.find('.lg').height(),
          e = d.prop('offsetWidth') * d.attr('data-scale') > a.core.$outer.find('.lg').width(),
          (e || f) && (c.preventDefault(), b = {
            x: c.originalEvent.targetTouches[0].pageX,
            y: c.originalEvent.targetTouches[0].pageY
          })
        }
      }),
      a.core.$slide.on('touchmove.lg', function (g) {
        if (a.core.$outer.hasClass('lg-zoomed')) {
          var h,
          i,
          j = a.core.$slide.eq(a.core.index).find('.lg-img-wrap');
          g.preventDefault(),
          d = !0,
          c = {
            x: g.originalEvent.targetTouches[0].pageX,
            y: g.originalEvent.targetTouches[0].pageY
          },
          a.core.$outer.addClass('lg-zoom-dragging'),
          i = f ? - Math.abs(j.attr('data-y')) + (c.y - b.y)  : - Math.abs(j.attr('data-y')),
          h = e ? - Math.abs(j.attr('data-x')) + (c.x - b.x)  : - Math.abs(j.attr('data-x')),
          (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({
            left: h + 'px',
            top: i + 'px'
          })  : j.css('transform', 'translate3d(' + h + 'px, ' + i + 'px, 0)'))
        }
      }),
      a.core.$slide.on('touchend.lg', function () {
        a.core.$outer.hasClass('lg-zoomed') && d && (d = !1, a.core.$outer.removeClass('lg-zoom-dragging'), a.touchendZoom(b, c, e, f))
      })
    },
    d.prototype.zoomDrag = function () {
      var b = this,
      c = {
      },
      d = {
      },
      e = !1,
      f = !1,
      g = !1,
      h = !1;
      b.core.$slide.on('mousedown.lg.zoom', function (d) {
        var f = b.core.$slide.eq(b.core.index).find('.lg-object');
        h = f.prop('offsetHeight') * f.attr('data-scale') > b.core.$outer.find('.lg').height(),
        g = f.prop('offsetWidth') * f.attr('data-scale') > b.core.$outer.find('.lg').width(),
        b.core.$outer.hasClass('lg-zoomed') && a(d.target).hasClass('lg-object') && (g || h) && (d.preventDefault(), c = {
          x: d.pageX,
          y: d.pageY
        }, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.core.$outer.removeClass('lg-grab').addClass('lg-grabbing'))
      }),
      a(window).on('mousemove.lg.zoom', function (a) {
        if (e) {
          var i,
          j,
          k = b.core.$slide.eq(b.core.index).find('.lg-img-wrap');
          f = !0,
          d = {
            x: a.pageX,
            y: a.pageY
          },
          b.core.$outer.addClass('lg-zoom-dragging'),
          j = h ? - Math.abs(k.attr('data-y')) + (d.y - c.y)  : - Math.abs(k.attr('data-y')),
          i = g ? - Math.abs(k.attr('data-x')) + (d.x - c.x)  : - Math.abs(k.attr('data-x')),
          b.core.s.useLeftForZoom ? k.css({
            left: i + 'px',
            top: j + 'px'
          })  : k.css('transform', 'translate3d(' + i + 'px, ' + j + 'px, 0)')
        }
      }),
      a(window).on('mouseup.lg.zoom', function (a) {
        e && (e = !1, b.core.$outer.removeClass('lg-zoom-dragging'), !f || c.x === d.x && c.y === d.y || (d = {
          x: a.pageX,
          y: a.pageY
        }, b.touchendZoom(c, d, g, h)), f = !1),
        b.core.$outer.removeClass('lg-grabbing').addClass('lg-grab')
      })
    },
    d.prototype.touchendZoom = function (a, b, c, d) {
      var e = this,
      f = e.core.$slide.eq(e.core.index).find('.lg-img-wrap'),
      g = e.core.$slide.eq(e.core.index).find('.lg-object'),
      h = - Math.abs(f.attr('data-x')) + (b.x - a.x),
      i = - Math.abs(f.attr('data-y')) + (b.y - a.y),
      j = (e.core.$outer.find('.lg').height() - g.prop('offsetHeight')) / 2,
      k = Math.abs(g.prop('offsetHeight') * Math.abs(g.attr('data-scale')) - e.core.$outer.find('.lg').height() + j),
      l = (e.core.$outer.find('.lg').width() - g.prop('offsetWidth')) / 2,
      m = Math.abs(g.prop('offsetWidth') * Math.abs(g.attr('data-scale')) - e.core.$outer.find('.lg').width() + l);
      (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= - k ? i = - k : i >= - j && (i = - j)), c && (h <= - m ? h = - m : h >= - l && (h = - l)), d ? f.attr('data-y', Math.abs(i))  : i = - Math.abs(f.attr('data-y')), c ? f.attr('data-x', Math.abs(h))  : h = - Math.abs(f.attr('data-x')), e.core.s.useLeftForZoom ? f.css({
        left: h + 'px',
        top: i + 'px'
      })  : f.css('transform', 'translate3d(' + h + 'px, ' + i + 'px, 0)'))
    },
    d.prototype.destroy = function () {
      var b = this;
      b.core.$el.off('.lg.zoom'),
      a(window).off('.lg.zoom'),
      b.core.$slide.off('.lg.zoom'),
      b.core.$el.off('.lg.tm.zoom'),
      b.resetZoom(),
      clearTimeout(b.zoomabletimeout),
      b.zoomabletimeout = !1
    },
    a.fn.lightGallery.modules.zoom = d
  }()
}),
function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    var b = {
      hash: !0
    },
    c = function (c) {
      return this.core = a(c).data('lightGallery'),
      this.core.s = a.extend({
      }, b, this.core.s),
      this.core.s.hash && (this.oldHash = window.location.hash, this.init()),
      this
    };
    c.prototype.init = function () {
      var b,
      c = this;
      c.core.$el.on('onAfterSlide.lg.tm', function (a, b, d) {
        history.replaceState ? history.replaceState(null, null, '#lg=' + c.core.s.galleryId + '&slide=' + d)  : window.location.hash = 'lg=' + c.core.s.galleryId + '&slide=' + d
      }),
      a(window).on('hashchange.lg.hash', function () {
        b = window.location.hash;
        var a = parseInt(b.split('&slide=') [1], 10);
        b.indexOf('lg=' + c.core.s.galleryId) > - 1 ? c.core.slide(a, !1, !1)  : c.core.lGalleryOn && c.core.destroy()
      })
    },
    c.prototype.destroy = function () {
      this.core.s.hash && (this.oldHash && this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash)  : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search)  : window.location.hash = '', this.core.$el.off('.lg.hash'))
    },
    a.fn.lightGallery.modules.hash = c
  }()
}),
function (a, b) {
  'function' == typeof define && define.amd ? define(['jquery'], function (a) {
    return b(a)
  })  : 'object' == typeof exports ? module.exports = b(require('jquery'))  : b(jQuery)
}(this, function (a) {
  !function () {
    'use strict';
    var b = {
      share: !0,
      facebook: !0,
      facebookDropdownText: 'Facebook',
      twitter: !0,
      twitterDropdownText: 'Twitter',
      googlePlus: !0,
      googlePlusDropdownText: 'GooglePlus',
      pinterest: !0,
      pinterestDropdownText: 'Pinterest'
    },
    c = function (c) {
      return this.core = a(c).data('lightGallery'),
      this.core.s = a.extend({
      }, b, this.core.s),
      this.core.s.share && this.init(),
      this
    };
    c.prototype.init = function () {
      var b = this,
      c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
      c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '',
      c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '',
      c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '',
      c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '',
      c += '</ul></span>',
      this.core.$outer.find('.lg-toolbar').append(c),
      this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>'),
      a('#lg-share').on('click.lg', function () {
        b.core.$outer.toggleClass('lg-dropdown-active')
      }),
      a('#lg-dropdown-overlay').on('click.lg', function () {
        b.core.$outer.removeClass('lg-dropdown-active')
      }),
      b.core.$el.on('onAfterSlide.lg.tm', function (c, d, e) {
        setTimeout(function () {
          a('#lg-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(b.getSahreProps(e, 'facebookShareUrl') || window.location.href)),
          a('#lg-share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + b.getSahreProps(e, 'tweetText') + '&url=' + encodeURIComponent(b.getSahreProps(e, 'twitterShareUrl') || window.location.href)),
          a('#lg-share-googleplus').attr('href', 'https://plus.google.com/share?url=' + encodeURIComponent(b.getSahreProps(e, 'googleplusShareUrl') || window.location.href)),
          a('#lg-share-pinterest').attr('href', 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(b.getSahreProps(e, 'pinterestShareUrl') || window.location.href) + '&media=' + encodeURIComponent(b.getSahreProps(e, 'src')) + '&description=' + b.getSahreProps(e, 'pinterestText'))
        }, 100)
      })
    },
    c.prototype.getSahreProps = function (a, b) {
      var c = '';
      if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
       else {
        var d = this.core.$items.eq(a).attr('href'),
        e = this.core.$items.eq(a).data(b);
        c = 'src' === b ? d || e : e
      }
      return c
    },
    c.prototype.destroy = function () {
    },
    a.fn.lightGallery.modules.share = c
  }()
});
/**
* @module       WOW
* @author       Matthieu Aussaguel
* @version      v1.1.2
* @license      MIT License
*/
(function () {
  var t,
  e,
  n,
  i,
  o,
  r = function (t, e) {
    return function () {
      return t.apply(e, arguments)
    }
  },
  s = [
  ].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
    return - 1
  };
  e = function () {
    function t() {
    }
    return t.prototype.extend = function (t, e) {
      var n,
      i;
      for (n in e) i = e[n],
      null == t[n] && (t[n] = i);
      return t
    },
    t.prototype.isMobile = function (t) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
    },
    t.prototype.createEvent = function (t, e, n, i) {
      var o;
      return null == e && (e = !1),
      null == n && (n = !1),
      null == i && (i = null),
      null != document.createEvent ? (o = document.createEvent('CustomEvent')).initCustomEvent(t, e, n, i)  : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t,
      o
    },
    t.prototype.emitEvent = function (t, e) {
      return null != t.dispatchEvent ? t.dispatchEvent(e)  : e in (null != t) ? t[e]()  : 'on' + e in (null != t) ? t['on' + e]()  : void 0
    },
    t.prototype.addEvent = function (t, e, n) {
      return null != t.addEventListener ? t.addEventListener(e, n, !1)  : null != t.attachEvent ? t.attachEvent('on' + e, n)  : t[e] = n
    },
    t.prototype.removeEvent = function (t, e, n) {
      return null != t.removeEventListener ? t.removeEventListener(e, n, !1)  : null != t.detachEvent ? t.detachEvent('on' + e, n)  : delete t[e]
    },
    t.prototype.innerHeight = function () {
      return 'innerHeight' in window ? window.innerHeight : document.documentElement.clientHeight
    },
    t
  }(),
  n = this.WeakMap || this.MozWeakMap || (n = function () {
    function t() {
      this.keys = [
      ],
      this.values = [
      ]
    }
    return t.prototype.get = function (t) {
      var e,
      n,
      i,
      o;
      for (e = n = 0, i = (o = this.keys).length; n < i; e = ++n) if (o[e] === t) return this.values[e]
    },
    t.prototype.set = function (t, e) {
      var n,
      i,
      o,
      r;
      for (n = i = 0, o = (r = this.keys).length; i < o; n = ++i) if (r[n] === t) return void (this.values[n] = e);
      return this.keys.push(t),
      this.values.push(e)
    },
    t
  }()),
  t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
    function t() {
      'undefined' != typeof console && null !== console && console.warn('MutationObserver is not supported by your browser.'),
      'undefined' != typeof console && null !== console && console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.')
    }
    return t.notSupported = !0,
    t.prototype.observe = function () {
    },
    t
  }()),
  i = this.getComputedStyle || function (t, e) {
    return this.getPropertyValue = function (e) {
      var n;
      return 'float' === e && (e = 'styleFloat'),
      o.test(e) && e.replace(o, function (t, e) {
        return e.toUpperCase()
      }),
      (null != (n = t.currentStyle) ? n[e] : void 0) || null
    },
    this
  },
  o = /(\-([a-z]){1})/g,
  this.WOW = function () {
    function o(t) {
      null == t && (t = {
      }),
      this.scrollCallback = r(this.scrollCallback, this),
      this.scrollHandler = r(this.scrollHandler, this),
      this.resetAnimation = r(this.resetAnimation, this),
      this.start = r(this.start, this),
      this.scrolled = !0,
      this.config = this.util().extend(t, this.defaults),
      null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)),
      this.animationNameCache = new n,
      this.wowEvent = this.util().createEvent(this.config.boxClass)
    }
    return o.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null,
      scrollContainer: null
    },
    o.prototype.init = function () {
      var t;
      return this.element = window.document.documentElement,
      'interactive' === (t = document.readyState) || 'complete' === t ? this.start()  : this.util().addEvent(document, 'DOMContentLoaded', this.start),
      this.finished = [
      ]
    },
    o.prototype.initCustom = function () {
      return this.element = window.document.documentElement,
      this.start(),
      this.finished = [
      ]
    },
    o.prototype.start = function () {
      var e,
      n,
      i,
      o;
      if (this.stopped = !1, this.boxes = function () {
        var t,
        n,
        i,
        o;
        for (o = [
        ], t = 0, n = (i = this.element.querySelectorAll('.' + this.config.boxClass)).length; t < n; t++) e = i[t],
        o.push(e);
        return o
      }.call(this), this.all = function () {
        var t,
        n,
        i,
        o;
        for (o = [
        ], t = 0, n = (i = this.boxes).length; t < n; t++) e = i[t],
        o.push(e);
        return o
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();
       else for (n = 0, i = (o = this.boxes).length; n < i; n++) e = o[n],
      this.applyStyle(e, !0);
      if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler), this.util().addEvent(window, 'resize', this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new t(function (t) {
        return function (e) {
          var n,
          i,
          o,
          r,
          s;
          for (s = [
          ], n = 0, i = e.length; n < i; n++) r = e[n],
          s.push(function () {
            var t,
            e,
            n,
            i;
            for (i = [
            ], t = 0, e = (n = r.addedNodes || [
            ]).length; t < e; t++) o = n[t],
            i.push(this.doSync(o));
            return i
          }.call(t));
          return s
        }
      }(this)).observe(document.body, {
        childList: !0,
        subtree: !0
      })
    },
    o.prototype.stop = function () {
      if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler), this.util().removeEvent(window, 'resize', this.scrollHandler), null != this.interval) return clearInterval(this.interval)
    },
    o.prototype.sync = function (e) {
      if (t.notSupported) return this.doSync(this.element)
    },
    o.prototype.doSync = function (t) {
      var e,
      n,
      i,
      o,
      r;
      if (null == t && (t = this.element), 1 === t.nodeType) {
        for (r = [
        ], n = 0, i = (o = (t = t.parentNode || t).querySelectorAll('.' + this.config.boxClass)).length; n < i; n++) e = o[n],
        s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle()  : this.applyStyle(e, !0), r.push(this.scrolled = !0))  : r.push(void 0);
        return r
      }
    },
    o.prototype.show = function (t) {
      return this.applyStyle(t),
      t.className = t.className + ' ' + this.config.animateClass,
      null != this.config.callback && this.config.callback(t),
      this.util().emitEvent(t, this.wowEvent),
      this.util().addEvent(t, 'animationend', this.resetAnimation),
      this.util().addEvent(t, 'oanimationend', this.resetAnimation),
      this.util().addEvent(t, 'webkitAnimationEnd', this.resetAnimation),
      this.util().addEvent(t, 'MSAnimationEnd', this.resetAnimation),
      t
    },
    o.prototype.applyStyle = function (t, e) {
      var n,
      i,
      o;
      return i = t.getAttribute('data-wow-duration'),
      n = t.getAttribute('data-wow-delay'),
      o = t.getAttribute('data-wow-iteration'),
      this.animate(function (r) {
        return function () {
          return r.customStyle(t, e, i, n, o)
        }
      }(this))
    },
    o.prototype.animate = 'requestAnimationFrame' in window ? function (t) {
      return window.requestAnimationFrame(t)
    }
     : function (t) {
      return t()
    },
    o.prototype.resetStyle = function () {
      var t,
      e,
      n,
      i,
      o;
      for (o = [
      ], e = 0, n = (i = this.boxes).length; e < n; e++) t = i[e],
      o.push(t.style.visibility = 'visible');
      return o
    },
    o.prototype.resetAnimation = function (t) {
      var e;
      if (t.type.toLowerCase().indexOf('animationend') >= 0) return e = t.target || t.srcElement,
      e.className = e.className.replace(this.config.animateClass, '').trim()
    },
    o.prototype.customStyle = function (t, e, n, i, o) {
      return e && this.cacheAnimationName(t),
      t.style.visibility = e ? 'hidden' : 'visible',
      n && this.vendorSet(t.style, {
        animationDuration: n
      }),
      i && this.vendorSet(t.style, {
        animationDelay: i
      }),
      o && this.vendorSet(t.style, {
        animationIterationCount: o
      }),
      this.vendorSet(t.style, {
        animationName: e ? 'none' : this.cachedAnimationName(t)
      }),
      t
    },
    o.prototype.vendors = [
      'moz',
      'webkit'
    ],
    o.prototype.vendorSet = function (t, e) {
      var n,
      i,
      o,
      r;
      i = [
      ];
      for (n in e) o = e[n],
      t['' + n] = o,
      i.push(function () {
        var e,
        i,
        s,
        l;
        for (l = [
        ], e = 0, i = (s = this.vendors).length; e < i; e++) r = s[e],
        l.push(t['' + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
        return l
      }.call(this));
      return i
    },
    o.prototype.vendorCSS = function (t, e) {
      var n,
      o,
      r,
      s,
      l,
      a;
      for (s = (l = i(t)).getPropertyCSSValue(e), n = 0, o = (r = this.vendors).length; n < o; n++) a = r[n],
      s = s || l.getPropertyCSSValue('-' + a + '-' + e);
      return s
    },
    o.prototype.animationName = function (t) {
      var e;
      try {
        e = this.vendorCSS(t, 'animation-name').cssText
      } catch (n) {
        e = i(t).getPropertyValue('animation-name')
      }
      return 'none' === e ? '' : e
    },
    o.prototype.cacheAnimationName = function (t) {
      return this.animationNameCache.set(t, this.animationName(t))
    },
    o.prototype.cachedAnimationName = function (t) {
      return this.animationNameCache.get(t)
    },
    o.prototype.scrollHandler = function () {
      return this.scrolled = !0
    },
    o.prototype.scrollCallback = function () {
      var t;
      if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
        var e,
        n,
        i,
        o;
        for (o = [
        ], e = 0, n = (i = this.boxes).length; e < n; e++) (t = i[e]) && (this.isVisible(t) ? this.show(t)  : o.push(t));
        return o
      }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
    },
    o.prototype.offsetTop = function (t) {
      for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
      for (e = t.offsetTop; t = t.offsetParent; ) e += t.offsetTop;
      return e
    },
    o.prototype.isVisible = function (t) {
      var e,
      n,
      i,
      o,
      r;
      return n = t.getAttribute('data-wow-offset') || this.config.offset,
      r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
      o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n,
      i = this.offsetTop(t),
      e = i + t.clientHeight,
      i <= o && e >= r
    },
    o.prototype.util = function () {
      return null != this._util ? this._util : this._util = new e
    },
    o.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    },
    o
  }()
}).call(this);
/**
 * @module       jQuery mousewheel plugin
 * @author       malihu
 * @see          http://manos.malihu.gr/jquery-custom-content-scroller/
 * @license      MIT
 * @version      3.1.15
 */
!function (e) {
  'function' == typeof define && define.amd ? define(['jquery'], e)  : 'undefined' != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function (e) {
  !function (t) {
    var o = 'function' == typeof define && define.amd,
    a = 'undefined' != typeof module && module.exports,
    n = 'https:' == document.location.protocol ? 'https:' : 'http:';
    o || (a ? require('jquery-mousewheel') (e)  : e.event.special.mousewheel || e('head').append(decodeURI('%3Cscript src=' + n + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E'))),
    t()
  }(function () {
    var t,
    o = 'mCustomScrollbar',
    a = {
      setTop: 0,
      setLeft: 0,
      axis: 'y',
      scrollbarPosition: 'inside',
      scrollInertia: 950,
      autoDraggerLength: !0,
      alwaysShowScrollbar: 0,
      snapOffset: 0,
      mouseWheel: {
        enable: !0,
        scrollAmount: 'auto',
        axis: 'y',
        deltaFactor: 'auto',
        disableOver: [
          'select',
          'option',
          'keygen',
          'datalist',
          'textarea'
        ]
      },
      scrollButtons: {
        scrollType: 'stepless',
        scrollAmount: 'auto'
      },
      keyboard: {
        enable: !0,
        scrollType: 'stepless',
        scrollAmount: 'auto'
      },
      contentTouchScroll: 25,
      documentTouchScroll: !0,
      advanced: {
        autoScrollOnFocus: 'input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable=\'true\']',
        updateOnContentResize: !0,
        updateOnImageLoad: 'auto',
        autoUpdateTimeout: 60
      },
      theme: 'light',
      callbacks: {
        onTotalScrollOffset: 0,
        onTotalScrollBackOffset: 0,
        alwaysTriggerOffsets: !0
      }
    },
    n = 0,
    i = {
    },
    r = window.attachEvent && !window.addEventListener ? 1 : 0,
    l = !1,
    s = [
      'mCSB_dragger_onDrag',
      'mCSB_scrollTools_onDrag',
      'mCS_img_loaded',
      'mCS_disabled',
      'mCS_destroyed',
      'mCS_no_scrollbar',
      'mCS-autoHide',
      'mCS-dir-rtl',
      'mCS_no_scrollbar_y',
      'mCS_no_scrollbar_x',
      'mCS_y_hidden',
      'mCS_x_hidden',
      'mCSB_draggerContainer',
      'mCSB_buttonUp',
      'mCSB_buttonDown',
      'mCSB_buttonLeft',
      'mCSB_buttonRight'
    ],
    c = {
      init: function (t) {
        var t = e.extend(!0, {
        }, a, t),
        o = d.call(this);
        if (t.live) {
          var r = t.liveSelector || this.selector || '.mCustomScrollbar',
          l = e(r);
          if ('off' === t.live) return void f(r);
          i[r] = setTimeout(function () {
            l.mCustomScrollbar(t),
            'once' === t.live && l.length && f(r)
          }, 500)
        } else f(r);
        return t.setWidth = t.set_width ? t.set_width : t.setWidth,
        t.setHeight = t.set_height ? t.set_height : t.setHeight,
        t.axis = t.horizontalScroll ? 'x' : m(t.axis),
        t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
        'object' != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
          enable: !0,
          scrollAmount: 'auto',
          axis: 'y',
          preventDefault: !1,
          deltaFactor: 'auto',
          normalizeDelta: !1,
          invert: !1
        }),
        t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
        t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
        t.scrollButtons.scrollType = h(t.scrollButtons.scrollType),
        u(t),
        e(o).each(function () {
          var o = e(this);
          if (!o.data('mCS')) {
            o.data('mCS', {
              idx: ++n,
              opt: t,
              scrollRatio: {
                y: null,
                x: null
              },
              overflowed: null,
              contentReset: {
                y: null,
                x: null
              },
              bindEvents: !1,
              tweenRunning: !1,
              sequential: {
              },
              langDir: o.css('direction'),
              cbOffsets: null,
              trigger: null,
              poll: {
                size: {
                  o: 0,
                  n: 0
                },
                img: {
                  o: 0,
                  n: 0
                },
                change: {
                  o: 0,
                  n: 0
                }
              }
            });
            var a = o.data('mCS'),
            i = a.opt,
            r = o.data('mcs-axis'),
            l = o.data('mcs-scrollbar-position'),
            d = o.data('mcs-theme');
            r && (i.axis = r),
            l && (i.scrollbarPosition = l),
            d && (i.theme = d, u(i)),
            p.call(this),
            a && i.callbacks.onCreate && 'function' == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this),
            e('#mCSB_' + a.idx + '_container img:not(.' + s[2] + ')').addClass(s[2]),
            c.update.call(null, o)
          }
        })
      },
      update: function (t, o) {
        var a = t || d.call(this);
        return e(a).each(function () {
          var t = e(this);
          if (t.data('mCS')) {
            var a = t.data('mCS'),
            n = a.opt,
            i = e('#mCSB_' + a.idx + '_container'),
            r = e('#mCSB_' + a.idx),
            l = [
              e('#mCSB_' + a.idx + '_dragger_vertical'),
              e('#mCSB_' + a.idx + '_dragger_horizontal')
            ];
            if (!i.length) return;
            a.tweenRunning && N(t),
            o && a && n.callbacks.onBeforeUpdate && 'function' == typeof n.callbacks.onBeforeUpdate && n.callbacks.onBeforeUpdate.call(this),
            t.hasClass(s[3]) && t.removeClass(s[3]),
            t.hasClass(s[4]) && t.removeClass(s[4]),
            r.css('max-height', 'none'),
            r.height() !== t.height() && r.css('max-height', t.height()),
            v.call(this),
            'y' === n.axis || n.advanced.autoExpandHorizontalScroll || i.css('width', g(i)),
            a.overflowed = C.call(this),
            T.call(this),
            n.autoDraggerLength && S.call(this),
            _.call(this),
            y.call(this);
            var c = [
              Math.abs(i[0].offsetTop),
              Math.abs(i[0].offsetLeft)
            ];
            'x' !== n.axis && (a.overflowed[0] ? l[0].height() > l[0].parent().height() ? b.call(this)  : (V(t, c[0].toString(), {
              dir: 'y',
              dur: 0,
              overwrite: 'none'
            }), a.contentReset.y = null)  : (b.call(this), 'y' === n.axis ? B.call(this)  : 'yx' === n.axis && a.overflowed[1] && V(t, c[1].toString(), {
              dir: 'x',
              dur: 0,
              overwrite: 'none'
            }))),
            'y' !== n.axis && (a.overflowed[1] ? l[1].width() > l[1].parent().width() ? b.call(this)  : (V(t, c[1].toString(), {
              dir: 'x',
              dur: 0,
              overwrite: 'none'
            }), a.contentReset.x = null)  : (b.call(this), 'x' === n.axis ? B.call(this)  : 'yx' === n.axis && a.overflowed[0] && V(t, c[0].toString(), {
              dir: 'y',
              dur: 0,
              overwrite: 'none'
            }))),
            o && a && (2 === o && n.callbacks.onImageLoad && 'function' == typeof n.callbacks.onImageLoad ? n.callbacks.onImageLoad.call(this)  : 3 === o && n.callbacks.onSelectorChange && 'function' == typeof n.callbacks.onSelectorChange ? n.callbacks.onSelectorChange.call(this)  : n.callbacks.onUpdate && 'function' == typeof n.callbacks.onUpdate && n.callbacks.onUpdate.call(this)),
            Y.call(this)
          }
        })
      },
      scrollTo: function (t, o) {
        if (void 0 !== t && null != t) {
          var a = d.call(this);
          return e(a).each(function () {
            var a = e(this);
            if (a.data('mCS')) {
              var n = a.data('mCS'),
              i = n.opt,
              r = {
                trigger: 'external',
                scrollInertia: i.scrollInertia,
                scrollEasing: 'mcsEaseInOut',
                moveDragger: !1,
                timeout: 60,
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
              },
              l = e.extend(!0, {
              }, r, o),
              s = q.call(this, t),
              c = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
              s[0] = j.call(this, s[0], 'y'),
              s[1] = j.call(this, s[1], 'x'),
              l.moveDragger && (s[0] *= n.scrollRatio.y, s[1] *= n.scrollRatio.x),
              l.dur = oe() ? 0 : c,
              setTimeout(function () {
                null !== s[0] && void 0 !== s[0] && 'x' !== i.axis && n.overflowed[0] && (l.dir = 'y', l.overwrite = 'all', V(a, s[0].toString(), l)),
                null !== s[1] && void 0 !== s[1] && 'y' !== i.axis && n.overflowed[1] && (l.dir = 'x', l.overwrite = 'none', V(a, s[1].toString(), l))
              }, l.timeout)
            }
          })
        }
      },
      stop: function () {
        var t = d.call(this);
        return e(t).each(function () {
          var t = e(this);
          t.data('mCS') && N(t)
        })
      },
      disable: function (t) {
        var o = d.call(this);
        return e(o).each(function () {
          var o = e(this);
          if (o.data('mCS')) {
            o.data('mCS');
            Y.call(this, 'remove'),
            B.call(this),
            t && b.call(this),
            T.call(this, !0),
            o.addClass(s[3])
          }
        })
      },
      destroy: function () {
        var t = d.call(this);
        return e(t).each(function () {
          var a = e(this);
          if (a.data('mCS')) {
            var n = a.data('mCS'),
            i = n.opt,
            r = e('#mCSB_' + n.idx),
            l = e('#mCSB_' + n.idx + '_container'),
            c = e('.mCSB_' + n.idx + '_scrollbar');
            i.live && f(i.liveSelector || e(t).selector),
            Y.call(this, 'remove'),
            B.call(this),
            b.call(this),
            a.removeData('mCS'),
            K(this, 'mcs'),
            c.remove(),
            l.find('img.' + s[2]).removeClass(s[2]),
            r.replaceWith(l.contents()),
            a.removeClass(o + ' _mCS_' + n.idx + ' ' + s[6] + ' ' + s[7] + ' ' + s[5] + ' ' + s[3]).addClass(s[4])
          }
        })
      }
    },
    d = function () {
      return 'object' != typeof e(this) || e(this).length < 1 ? '.mCustomScrollbar' : this
    },
    u = function (t) {
      var o = [
        'rounded',
        'rounded-dark',
        'rounded-dots',
        'rounded-dots-dark'
      ],
      a = [
        'rounded-dots',
        'rounded-dots-dark',
        '3d',
        '3d-dark',
        '3d-thick',
        '3d-thick-dark',
        'inset',
        'inset-dark',
        'inset-2',
        'inset-2-dark',
        'inset-3',
        'inset-3-dark'
      ],
      n = [
        'minimal',
        'minimal-dark'
      ],
      i = [
        'minimal',
        'minimal-dark'
      ],
      r = [
        'minimal',
        'minimal-dark'
      ];
      t.autoDraggerLength = !(e.inArray(t.theme, o) > - 1) && t.autoDraggerLength,
      t.autoExpandScrollbar = !(e.inArray(t.theme, a) > - 1) && t.autoExpandScrollbar,
      t.scrollButtons.enable = !(e.inArray(t.theme, n) > - 1) && t.scrollButtons.enable,
      t.autoHideScrollbar = e.inArray(t.theme, i) > - 1 || t.autoHideScrollbar,
      t.scrollbarPosition = e.inArray(t.theme, r) > - 1 ? 'outside' : t.scrollbarPosition
    },
    f = function (e) {
      i[e] && (clearTimeout(i[e]), K(i, e))
    },
    m = function (e) {
      return 'yx' === e || 'xy' === e || 'auto' === e ? 'yx' : 'x' === e || 'horizontal' === e ? 'x' : 'y'
    },
    h = function (e) {
      return 'stepped' === e || 'pixels' === e || 'step' === e || 'click' === e ? 'stepped' : 'stepless'
    },
    p = function () {
      var t = e(this),
      a = t.data('mCS'),
      n = a.opt,
      i = n.autoExpandScrollbar ? ' ' + s[1] + '_expand' : '',
      r = [
        '<div id=\'mCSB_' + a.idx + '_scrollbar_vertical\' class=\'mCSB_scrollTools mCSB_' + a.idx + '_scrollbar mCS-' + n.theme + ' mCSB_scrollTools_vertical' + i + '\'><div class=\'' + s[12] + '\'><div id=\'mCSB_' + a.idx + '_dragger_vertical\' class=\'mCSB_dragger\' style=\'position:absolute;\'><div class=\'mCSB_dragger_bar\' /></div><div class=\'mCSB_draggerRail\' /></div></div>',
        '<div id=\'mCSB_' + a.idx + '_scrollbar_horizontal\' class=\'mCSB_scrollTools mCSB_' + a.idx + '_scrollbar mCS-' + n.theme + ' mCSB_scrollTools_horizontal' + i + '\'><div class=\'' + s[12] + '\'><div id=\'mCSB_' + a.idx + '_dragger_horizontal\' class=\'mCSB_dragger\' style=\'position:absolute;\'><div class=\'mCSB_dragger_bar\' /></div><div class=\'mCSB_draggerRail\' /></div></div>'
      ],
      l = 'yx' === n.axis ? 'mCSB_vertical_horizontal' : 'x' === n.axis ? 'mCSB_horizontal' : 'mCSB_vertical',
      c = 'yx' === n.axis ? r[0] + r[1] : 'x' === n.axis ? r[1] : r[0],
      d = 'yx' === n.axis ? '<div id=\'mCSB_' + a.idx + '_container_wrapper\' class=\'mCSB_container_wrapper\' />' : '',
      u = n.autoHideScrollbar ? ' ' + s[6] : '',
      f = 'x' !== n.axis && 'rtl' === a.langDir ? ' ' + s[7] : '';
      n.setWidth && t.css('width', n.setWidth),
      n.setHeight && t.css('height', n.setHeight),
      n.setLeft = 'y' !== n.axis && 'rtl' === a.langDir ? '989999px' : n.setLeft,
      t.addClass(o + ' _mCS_' + a.idx + u + f).wrapInner('<div id=\'mCSB_' + a.idx + '\' class=\'mCustomScrollBox mCS-' + n.theme + ' ' + l + '\'><div id=\'mCSB_' + a.idx + '_container\' class=\'mCSB_container\' style=\'position:relative; top:' + n.setTop + '; left:' + n.setLeft + ';\' dir=\'' + a.langDir + '\' /></div>');
      var m = e('#mCSB_' + a.idx),
      h = e('#mCSB_' + a.idx + '_container');
      'y' === n.axis || n.advanced.autoExpandHorizontalScroll || h.css('width', g(h)),
      'outside' === n.scrollbarPosition ? ('static' === t.css('position') && t.css('position', 'relative'), t.css('overflow', 'visible'), m.addClass('mCSB_outside').after(c))  : (m.addClass('mCSB_inside').append(c), h.wrap(d)),
      x.call(this);
      var p = [
        e('#mCSB_' + a.idx + '_dragger_vertical'),
        e('#mCSB_' + a.idx + '_dragger_horizontal')
      ];
      p[0].css('min-height', p[0].height()),
      p[1].css('min-width', p[1].width())
    },
    g = function (t) {
      var o = [
        t[0].scrollWidth,
        Math.max.apply(Math, t.children().map(function () {
          return e(this).outerWidth(!0)
        }).get())
      ],
      a = t.parent().width();
      return o[0] > a ? o[0] : o[1] > a ? o[1] : '100%'
    },
    v = function () {
      var t = e(this).data('mCS'),
      o = t.opt,
      a = e('#mCSB_' + t.idx + '_container');
      if (o.advanced.autoExpandHorizontalScroll && 'y' !== o.axis) {
        a.css({
          width: 'auto',
          'min-width': 0,
          'overflow-x': 'scroll'
        });
        var n = Math.ceil(a[0].scrollWidth);
        3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && n > a.parent().width() ? a.css({
          width: n,
          'min-width': '100%',
          'overflow-x': 'inherit'
        })  : a.css({
          'overflow-x': 'inherit',
          position: 'absolute'
        }).wrap('<div class=\'mCSB_h_wrapper\' style=\'position:relative; left:0; width:999999px;\' />').css({
          width: Math.ceil(a[0].getBoundingClientRect().right + 0.4) - Math.floor(a[0].getBoundingClientRect().left),
          'min-width': '100%',
          position: 'relative'
        }).unwrap()
      }
    },
    x = function () {
      var t = e(this).data('mCS'),
      o = t.opt,
      a = e('.mCSB_' + t.idx + '_scrollbar:first'),
      n = ee(o.scrollButtons.tabindex) ? 'tabindex=\'' + o.scrollButtons.tabindex + '\'' : '',
      i = [
        '<a href=\'#\' class=\'' + s[13] + '\' ' + n + ' />',
        '<a href=\'#\' class=\'' + s[14] + '\' ' + n + ' />',
        '<a href=\'#\' class=\'' + s[15] + '\' ' + n + ' />',
        '<a href=\'#\' class=\'' + s[16] + '\' ' + n + ' />'
      ],
      r = [
        'x' === o.axis ? i[2] : i[0],
        'x' === o.axis ? i[3] : i[1],
        i[2],
        i[3]
      ];
      o.scrollButtons.enable && a.prepend(r[0]).append(r[1]).next('.mCSB_scrollTools').prepend(r[2]).append(r[3])
    },
    S = function () {
      var t = e(this).data('mCS'),
      o = e('#mCSB_' + t.idx),
      a = e('#mCSB_' + t.idx + '_container'),
      n = [
        e('#mCSB_' + t.idx + '_dragger_vertical'),
        e('#mCSB_' + t.idx + '_dragger_horizontal')
      ],
      i = [
        o.height() / a.outerHeight(!1),
        o.width() / a.outerWidth(!1)
      ],
      l = [
        parseInt(n[0].css('min-height')),
        Math.round(i[0] * n[0].parent().height()),
        parseInt(n[1].css('min-width')),
        Math.round(i[1] * n[1].parent().width())
      ],
      s = r && l[1] < l[0] ? l[0] : l[1],
      c = r && l[3] < l[2] ? l[2] : l[3];
      n[0].css({
        height: s,
        'max-height': n[0].parent().height() - 10
      }).find('.mCSB_dragger_bar').css({
        'line-height': l[0] + 'px'
      }),
      n[1].css({
        width: c,
        'max-width': n[1].parent().width() - 10
      })
    },
    _ = function () {
      var t = e(this).data('mCS'),
      o = e('#mCSB_' + t.idx),
      a = e('#mCSB_' + t.idx + '_container'),
      n = [
        e('#mCSB_' + t.idx + '_dragger_vertical'),
        e('#mCSB_' + t.idx + '_dragger_horizontal')
      ],
      i = [
        a.outerHeight(!1) - o.height(),
        a.outerWidth(!1) - o.width()
      ],
      r = [
        i[0] / (n[0].parent().height() - n[0].height()),
        i[1] / (n[1].parent().width() - n[1].width())
      ];
      t.scrollRatio = {
        y: r[0],
        x: r[1]
      }
    },
    w = function (e, t, o) {
      var a = o ? s[0] + '_expanded' : '',
      n = e.closest('.mCSB_scrollTools');
      'active' === t ? (e.toggleClass(s[0] + ' ' + a), n.toggleClass(s[1]), e[0]._draggable = e[0]._draggable ? 0 : 1)  : e[0]._draggable || ('hide' === t ? (e.removeClass(s[0]), n.removeClass(s[1]))  : (e.addClass(s[0]), n.addClass(s[1])))
    },
    C = function () {
      var t = e(this).data('mCS'),
      o = e('#mCSB_' + t.idx),
      a = e('#mCSB_' + t.idx + '_container'),
      n = null == t.overflowed ? a.height()  : a.outerHeight(!1),
      i = null == t.overflowed ? a.width()  : a.outerWidth(!1),
      r = a[0].scrollHeight,
      l = a[0].scrollWidth;
      return r > n && (n = r),
      l > i && (i = l),
      [
        n > o.height(),
        i > o.width()
      ]
    },
    b = function () {
      var t = e(this),
      o = t.data('mCS'),
      a = o.opt,
      n = e('#mCSB_' + o.idx),
      i = e('#mCSB_' + o.idx + '_container'),
      r = [
        e('#mCSB_' + o.idx + '_dragger_vertical'),
        e('#mCSB_' + o.idx + '_dragger_horizontal')
      ];
      if (N(t), ('x' !== a.axis && !o.overflowed[0] || 'y' === a.axis && o.overflowed[0]) && (r[0].add(i).css('top', 0), V(t, '_resetY')), 'y' !== a.axis && !o.overflowed[1] || 'x' === a.axis && o.overflowed[1]) {
        var l = dx = 0;
        'rtl' === o.langDir && (l = n.width() - i.outerWidth(!1), dx = Math.abs(l / o.scrollRatio.x)),
        i.css('left', l),
        r[1].css('left', dx),
        V(t, '_resetX')
      }
    },
    y = function () {
      function t() {
        i = setTimeout(function () {
          e.event.special.mousewheel ? (clearTimeout(i), D.call(o[0]))  : t()
        }, 100)
      }
      var o = e(this),
      a = o.data('mCS'),
      n = a.opt;
      if (!a.bindEvents) {
        if (M.call(this), n.contentTouchScroll && O.call(this), I.call(this), n.mouseWheel.enable) {
          var i;
          t()
        }
        L.call(this),
        P.call(this),
        n.advanced.autoScrollOnFocus && z.call(this),
        n.scrollButtons.enable && H.call(this),
        n.keyboard.enable && U.call(this),
        a.bindEvents = !0
      }
    },
    B = function () {
      var t = e(this),
      o = t.data('mCS'),
      a = o.opt,
      n = 'mCS_' + o.idx,
      i = '.mCSB_' + o.idx + '_scrollbar',
      r = e('#mCSB_' + o.idx + ',#mCSB_' + o.idx + '_container,#mCSB_' + o.idx + '_container_wrapper,' + i + ' .' + s[12] + ',#mCSB_' + o.idx + '_dragger_vertical,#mCSB_' + o.idx + '_dragger_horizontal,' + i + '>a'),
      l = e('#mCSB_' + o.idx + '_container');
      a.advanced.releaseDraggableSelectors && r.add(e(a.advanced.releaseDraggableSelectors)),
      a.advanced.extraDraggableSelectors && r.add(e(a.advanced.extraDraggableSelectors)),
      o.bindEvents && (e(document).add(e(!W() || top.document)).unbind('.' + n), r.each(function () {
        e(this).unbind('.' + n)
      }), clearTimeout(t[0]._focusTimeout), K(t[0], '_focusTimeout'), clearTimeout(o.sequential.step), K(o.sequential, 'step'), clearTimeout(l[0].onCompleteTimeout), K(l[0], 'onCompleteTimeout'), o.bindEvents = !1)
    },
    T = function (t) {
      var o = e(this),
      a = o.data('mCS'),
      n = a.opt,
      i = e('#mCSB_' + a.idx + '_container_wrapper'),
      r = i.length ? i : e('#mCSB_' + a.idx + '_container'),
      l = [
        e('#mCSB_' + a.idx + '_scrollbar_vertical'),
        e('#mCSB_' + a.idx + '_scrollbar_horizontal')
      ],
      c = [
        l[0].find('.mCSB_dragger'),
        l[1].find('.mCSB_dragger')
      ];
      'x' !== n.axis && (a.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children('a')).css('display', 'block'), r.removeClass(s[8] + ' ' + s[10]))  : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && c[0].css('display', 'none'), r.removeClass(s[10]))  : (l[0].css('display', 'none'), r.addClass(s[10])), r.addClass(s[8]))),
      'y' !== n.axis && (a.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children('a')).css('display', 'block'), r.removeClass(s[9] + ' ' + s[11]))  : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && c[1].css('display', 'none'), r.removeClass(s[11]))  : (l[1].css('display', 'none'), r.addClass(s[11])), r.addClass(s[9]))),
      a.overflowed[0] || a.overflowed[1] ? o.removeClass(s[5])  : o.addClass(s[5])
    },
    k = function (t) {
      var o = t.type,
      a = t.target.ownerDocument !== document && null !== frameElement ? [
        e(frameElement).offset().top,
        e(frameElement).offset().left
      ] : null,
      n = W() && t.target.ownerDocument !== top.document && null !== frameElement ? [
        e(t.view.frameElement).offset().top,
        e(t.view.frameElement).offset().left
      ] : [
        0,
        0
      ];
      switch (o) {
        case 'pointerdown':
        case 'MSPointerDown':
        case 'pointermove':
        case 'MSPointerMove':
        case 'pointerup':
        case 'MSPointerUp':
          return a ? [
            t.originalEvent.pageY - a[0] + n[0],
            t.originalEvent.pageX - a[1] + n[1],
            !1
          ] : [
            t.originalEvent.pageY,
            t.originalEvent.pageX,
            !1
          ];
        case 'touchstart':
        case 'touchmove':
        case 'touchend':
          var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
          r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
          return t.target.ownerDocument !== document ? [
            i.screenY,
            i.screenX,
            r > 1
          ] : [
            i.pageY,
            i.pageX,
            r > 1
          ];
        default:
          return a ? [
            t.pageY - a[0] + n[0],
            t.pageX - a[1] + n[1],
            !1
          ] : [
            t.pageY,
            t.pageX,
            !1
          ]
      }
    },
    M = function () {
      function t(e, t, a, n) {
        if (f[0].idleTimer = c.scrollInertia < 233 ? 250 : 0, o.attr('id') === u[1]) var r = 'x',
        l = (o[0].offsetLeft - t + n) * s.scrollRatio.x;
         else var r = 'y',
        l = (o[0].offsetTop - e + a) * s.scrollRatio.y;
        V(i, l.toString(), {
          dir: r,
          drag: !0
        })
      }
      var o,
      a,
      n,
      i = e(this),
      s = i.data('mCS'),
      c = s.opt,
      d = 'mCS_' + s.idx,
      u = [
        'mCSB_' + s.idx + '_dragger_vertical',
        'mCSB_' + s.idx + '_dragger_horizontal'
      ],
      f = e('#mCSB_' + s.idx + '_container'),
      m = e('#' + u[0] + ',#' + u[1]),
      h = c.advanced.releaseDraggableSelectors ? m.add(e(c.advanced.releaseDraggableSelectors))  : m,
      p = c.advanced.extraDraggableSelectors ? e(!W() || top.document).add(e(c.advanced.extraDraggableSelectors))  : e(!W() || top.document);
      m.bind('contextmenu.' + d, function (e) {
        e.preventDefault()
      }).bind('mousedown.' + d + ' touchstart.' + d + ' pointerdown.' + d + ' MSPointerDown.' + d, function (t) {
        if (t.stopImmediatePropagation(), t.preventDefault(), Z(t)) {
          l = !0,
          r && (document.onselectstart = function () {
            return !1
          }),
          R.call(f, !1),
          N(i);
          var s = (o = e(this)).offset(),
          d = k(t) [0] - s.top,
          u = k(t) [1] - s.left,
          m = o.height() + s.top,
          h = o.width() + s.left;
          d < m && d > 0 && u < h && u > 0 && (a = d, n = u),
          w(o, 'active', c.autoExpandScrollbar)
        }
      }).bind('touchmove.' + d, function (e) {
        e.stopImmediatePropagation(),
        e.preventDefault();
        var i = o.offset(),
        r = k(e) [0] - i.top,
        l = k(e) [1] - i.left;
        t(a, n, r, l)
      }),
      e(document).add(p).bind('mousemove.' + d + ' pointermove.' + d + ' MSPointerMove.' + d, function (e) {
        if (o) {
          var i = o.offset(),
          r = k(e) [0] - i.top,
          l = k(e) [1] - i.left;
          if (a === r && n === l) return;
          t(a, n, r, l)
        }
      }).add(h).bind('mouseup.' + d + ' touchend.' + d + ' pointerup.' + d + ' MSPointerUp.' + d, function (e) {
        o && (w(o, 'active', c.autoExpandScrollbar), o = null),
        l = !1,
        r && (document.onselectstart = null),
        R.call(f, !0)
      })
    },
    O = function () {
      function o(e) {
        if (!$(e) || l || k(e) [2]) t = 0;
         else {
          t = 1,
          w = 0,
          C = 0,
          c = 1,
          b.removeClass('mCS_touch_action');
          var o = O.offset();
          d = k(e) [0] - o.top,
          u = k(e) [1] - o.left,
          L = [
            k(e) [0],
            k(e) [1]
          ]
        }
      }
      function a(e) {
        if ($(e) && !l && !k(e) [2] && (B.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || w) && c)) {
          p = G();
          var t = M.offset(),
          o = k(e) [0] - t.top,
          a = k(e) [1] - t.left;
          if (D.push(o), E.push(a), L[2] = Math.abs(k(e) [0] - L[0]), L[3] = Math.abs(k(e) [1] - L[1]), y.overflowed[0]) var n = I[0].parent().height() - I[0].height(),
          i = d - o > 0 && o - d > - n * y.scrollRatio.y && (2 * L[3] < L[2] || 'yx' === B.axis);
          if (y.overflowed[1]) var r = I[1].parent().width() - I[1].width(),
          f = u - a > 0 && a - u > - r * y.scrollRatio.x && (2 * L[2] < L[3] || 'yx' === B.axis);
          i || f ? (H || e.preventDefault(), w = 1)  : (C = 1, b.addClass('mCS_touch_action')),
          H && e.preventDefault(),
          S = 'yx' === B.axis ? [
            d - o,
            u - a
          ] : 'x' === B.axis ? [
            null,
            u - a
          ] : [
            d - o,
            null
          ],
          O[0].idleTimer = 250,
          y.overflowed[0] && s(S[0], R, 'mcsLinearOut', 'y', 'all', !0),
          y.overflowed[1] && s(S[1], R, 'mcsLinearOut', 'x', A, !0)
        }
      }
      function n(e) {
        if (!$(e) || l || k(e) [2]) t = 0;
         else {
          t = 1,
          e.stopImmediatePropagation(),
          N(b),
          h = G();
          var o = M.offset();
          f = k(e) [0] - o.top,
          m = k(e) [1] - o.left,
          D = [
          ],
          E = [
          ]
        }
      }
      function i(e) {
        if ($(e) && !l && !k(e) [2]) {
          c = 0,
          e.stopImmediatePropagation(),
          w = 0,
          C = 0,
          g = G();
          var t = M.offset(),
          o = k(e) [0] - t.top,
          a = k(e) [1] - t.left;
          if (!(g - p > 30)) {
            var n = (x = 1000 / (g - h)) < 2.5,
            i = n ? [
              D[D.length - 2],
              E[E.length - 2]
            ] : [
              0,
              0
            ];
            v = n ? [
              o - i[0],
              a - i[1]
            ] : [
              o - f,
              a - m
            ];
            var d = [
              Math.abs(v[0]),
              Math.abs(v[1])
            ];
            x = n ? [
              Math.abs(v[0] / 4),
              Math.abs(v[1] / 4)
            ] : [
              x,
              x
            ];
            var u = [
              Math.abs(O[0].offsetTop) - v[0] * r(d[0] / x[0], x[0]),
              Math.abs(O[0].offsetLeft) - v[1] * r(d[1] / x[1], x[1])
            ];
            S = 'yx' === B.axis ? [
              u[0],
              u[1]
            ] : 'x' === B.axis ? [
              null,
              u[1]
            ] : [
              u[0],
              null
            ],
            _ = [
              4 * d[0] + B.scrollInertia,
              4 * d[1] + B.scrollInertia
            ];
            var b = parseInt(B.contentTouchScroll) || 0;
            S[0] = d[0] > b ? S[0] : 0,
            S[1] = d[1] > b ? S[1] : 0,
            y.overflowed[0] && s(S[0], _[0], 'mcsEaseOut', 'y', A, !1),
            y.overflowed[1] && s(S[1], _[1], 'mcsEaseOut', 'x', A, !1)
          }
        }
      }
      function r(e, t) {
        var o = [
          1.5 * t,
          2 * t,
          t / 1.5,
          t / 2
        ];
        return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
      }
      function s(e, t, o, a, n, i) {
        e && V(b, e.toString(), {
          dur: t,
          scrollEasing: o,
          dir: a,
          overwrite: n,
          drag: i
        })
      }
      var c,
      d,
      u,
      f,
      m,
      h,
      p,
      g,
      v,
      x,
      S,
      _,
      w,
      C,
      b = e(this),
      y = b.data('mCS'),
      B = y.opt,
      T = 'mCS_' + y.idx,
      M = e('#mCSB_' + y.idx),
      O = e('#mCSB_' + y.idx + '_container'),
      I = [
        e('#mCSB_' + y.idx + '_dragger_vertical'),
        e('#mCSB_' + y.idx + '_dragger_horizontal')
      ],
      D = [
      ],
      E = [
      ],
      R = 0,
      A = 'yx' === B.axis ? 'none' : 'all',
      L = [
      ],
      z = O.find('iframe'),
      P = [
        'touchstart.' + T + ' pointerdown.' + T + ' MSPointerDown.' + T,
        'touchmove.' + T + ' pointermove.' + T + ' MSPointerMove.' + T,
        'touchend.' + T + ' pointerup.' + T + ' MSPointerUp.' + T
      ],
      H = void 0 !== document.body.style.touchAction && '' !== document.body.style.touchAction;
      O.bind(P[0], function (e) {
        o(e)
      }).bind(P[1], function (e) {
        a(e)
      }),
      M.bind(P[0], function (e) {
        n(e)
      }).bind(P[2], function (e) {
        i(e)
      }),
      z.length && z.each(function () {
        e(this).bind('load', function () {
          W(this) && e(this.contentDocument || this.contentWindow.document).bind(P[0], function (e) {
            o(e),
            n(e)
          }).bind(P[1], function (e) {
            a(e)
          }).bind(P[2], function (e) {
            i(e)
          })
        })
      })
    },
    I = function () {
      function o() {
        return window.getSelection ? window.getSelection().toString()  : document.selection && 'Control' != document.selection.type ? document.selection.createRange().text : 0
      }
      function a(e, t, o) {
        c.type = o && n ? 'stepped' : 'stepless',
        c.scrollAmount = 10,
        F(i, e, t, 'mcsLinearOut', o ? 60 : null)
      }
      var n,
      i = e(this),
      r = i.data('mCS'),
      s = r.opt,
      c = r.sequential,
      d = 'mCS_' + r.idx,
      u = e('#mCSB_' + r.idx + '_container'),
      f = u.parent();
      u.bind('mousedown.' + d, function (e) {
        t || n || (n = 1, l = !0)
      }).add(document).bind('mousemove.' + d, function (e) {
        if (!t && n && o()) {
          var i = u.offset(),
          l = k(e) [0] - i.top + u[0].offsetTop,
          d = k(e) [1] - i.left + u[0].offsetLeft;
          l > 0 && l < f.height() && d > 0 && d < f.width() ? c.step && a('off', null, 'stepped')  : ('x' !== s.axis && r.overflowed[0] && (l < 0 ? a('on', 38)  : l > f.height() && a('on', 40)), 'y' !== s.axis && r.overflowed[1] && (d < 0 ? a('on', 37)  : d > f.width() && a('on', 39)))
        }
      }).bind('mouseup.' + d + ' dragend.' + d, function (e) {
        t || (n && (n = 0, a('off', null)), l = !1)
      })
    },
    D = function () {
      function t(t, i) {
        if (N(o), !A(o, t.target)) {
          var c = 'auto' !== n.mouseWheel.deltaFactor ? parseInt(n.mouseWheel.deltaFactor)  : r && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
          d = n.scrollInertia;
          if ('x' === n.axis || 'x' === n.mouseWheel.axis) var u = 'x',
          f = [
            Math.round(c * a.scrollRatio.x),
            parseInt(n.mouseWheel.scrollAmount)
          ],
          m = 'auto' !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? 0.9 * l.width()  : f[0],
          h = Math.abs(e('#mCSB_' + a.idx + '_container') [0].offsetLeft),
          p = s[1][0].offsetLeft,
          g = s[1].parent().width() - s[1].width(),
          v = 'y' === n.mouseWheel.axis ? t.deltaY || i : t.deltaX;
           else var u = 'y',
          f = [
            Math.round(c * a.scrollRatio.y),
            parseInt(n.mouseWheel.scrollAmount)
          ],
          m = 'auto' !== n.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? 0.9 * l.height()  : f[0],
          h = Math.abs(e('#mCSB_' + a.idx + '_container') [0].offsetTop),
          p = s[0][0].offsetTop,
          g = s[0].parent().height() - s[0].height(),
          v = t.deltaY || i;
          'y' === u && !a.overflowed[0] || 'x' === u && !a.overflowed[1] || ((n.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = - v), n.mouseWheel.normalizeDelta && (v = v < 0 ? - 1 : 1), (v > 0 && 0 !== p || v < 0 && p !== g || n.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !n.mouseWheel.normalizeDelta && (m = t.deltaFactor, d = 17), V(o, (h - v * m).toString(), {
            dir: u,
            dur: d
          }))
        }
      }
      if (e(this).data('mCS')) {
        var o = e(this),
        a = o.data('mCS'),
        n = a.opt,
        i = 'mCS_' + a.idx,
        l = e('#mCSB_' + a.idx),
        s = [
          e('#mCSB_' + a.idx + '_dragger_vertical'),
          e('#mCSB_' + a.idx + '_dragger_horizontal')
        ],
        c = e('#mCSB_' + a.idx + '_container').find('iframe');
        c.length && c.each(function () {
          e(this).bind('load', function () {
            W(this) && e(this.contentDocument || this.contentWindow.document).bind('mousewheel.' + i, function (e, o) {
              t(e, o)
            })
          })
        }),
        l.bind('mousewheel.' + i, function (e, o) {
          t(e, o)
        })
      }
    },
    E = new Object,
    W = function (t) {
      var o = !1,
      a = !1,
      n = null;
      if (void 0 === t ? a = '#empty' : void 0 !== e(t).attr('id') && (a = e(t).attr('id')), !1 !== a && void 0 !== E[a]) return E[a];
      if (t) {
        try {
          var i = t.contentDocument || t.contentWindow.document;
          n = i.body.innerHTML
        } catch (e) {
        }
        o = null !== n
      } else {
        try {
          n = (i = top.document).body.innerHTML
        } catch (e) {
        }
        o = null !== n
      }
      return !1 !== a && (E[a] = o),
      o
    },
    R = function (e) {
      var t = this.find('iframe');
      if (t.length) {
        var o = e ? 'auto' : 'none';
        t.css('pointer-events', o)
      }
    },
    A = function (t, o) {
      var a = o.nodeName.toLowerCase(),
      n = t.data('mCS').opt.mouseWheel.disableOver,
      i = [
        'select',
        'textarea'
      ];
      return e.inArray(a, n) > - 1 && !(e.inArray(a, i) > - 1 && !e(o).is(':focus'))
    },
    L = function () {
      var t,
      o = e(this),
      a = o.data('mCS'),
      n = 'mCS_' + a.idx,
      i = e('#mCSB_' + a.idx + '_container'),
      r = i.parent();
      e('.mCSB_' + a.idx + '_scrollbar .' + s[12]).bind('mousedown.' + n + ' touchstart.' + n + ' pointerdown.' + n + ' MSPointerDown.' + n, function (o) {
        l = !0,
        e(o.target).hasClass('mCSB_dragger') || (t = 1)
      }).bind('touchend.' + n + ' pointerup.' + n + ' MSPointerUp.' + n, function (e) {
        l = !1
      }).bind('click.' + n, function (n) {
        if (t && (t = 0, e(n.target).hasClass(s[12]) || e(n.target).hasClass('mCSB_draggerRail'))) {
          N(o);
          var l = e(this),
          c = l.find('.mCSB_dragger');
          if (l.parent('.mCSB_scrollTools_horizontal').length > 0) {
            if (!a.overflowed[1]) return;
            var d = 'x',
            u = n.pageX > c.offset().left ? - 1 : 1,
            f = Math.abs(i[0].offsetLeft) - u * (0.9 * r.width())
          } else {
            if (!a.overflowed[0]) return;
            var d = 'y',
            u = n.pageY > c.offset().top ? - 1 : 1,
            f = Math.abs(i[0].offsetTop) - u * (0.9 * r.height())
          }
          V(o, f.toString(), {
            dir: d,
            scrollEasing: 'mcsEaseInOut'
          })
        }
      })
    },
    z = function () {
      var t = e(this),
      o = t.data('mCS'),
      a = o.opt,
      n = 'mCS_' + o.idx,
      i = e('#mCSB_' + o.idx + '_container'),
      r = i.parent();
      i.bind('focusin.' + n, function (o) {
        var n = e(document.activeElement),
        l = i.find('.mCustomScrollBox').length;
        n.is(a.advanced.autoScrollOnFocus) && (N(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = l ? 17 * l : 0, t[0]._focusTimeout = setTimeout(function () {
          var e = [
            te(n) [0],
            te(n) [1]
          ],
          o = [
            i[0].offsetTop,
            i[0].offsetLeft
          ],
          l = [
            o[0] + e[0] >= 0 && o[0] + e[0] < r.height() - n.outerHeight(!1),
            o[1] + e[1] >= 0 && o[0] + e[1] < r.width() - n.outerWidth(!1)
          ],
          s = 'yx' !== a.axis || l[0] || l[1] ? 'all' : 'none';
          'x' === a.axis || l[0] || V(t, e[0].toString(), {
            dir: 'y',
            scrollEasing: 'mcsEaseInOut',
            overwrite: s,
            dur: 0
          }),
          'y' === a.axis || l[1] || V(t, e[1].toString(), {
            dir: 'x',
            scrollEasing: 'mcsEaseInOut',
            overwrite: s,
            dur: 0
          })
        }, t[0]._focusTimer))
      })
    },
    P = function () {
      var t = e(this).data('mCS'),
      o = 'mCS_' + t.idx,
      a = e('#mCSB_' + t.idx + '_container').parent();
      a.bind('scroll.' + o, function (o) {
        0 === a.scrollTop() && 0 === a.scrollLeft() || e('.mCSB_' + t.idx + '_scrollbar').css('visibility', 'hidden')
      })
    },
    H = function () {
      var t = e(this),
      o = t.data('mCS'),
      a = o.opt,
      n = o.sequential,
      i = 'mCS_' + o.idx,
      r = '.mCSB_' + o.idx + '_scrollbar';
      e(r + '>a').bind('contextmenu.' + i, function (e) {
        e.preventDefault()
      }).bind('mousedown.' + i + ' touchstart.' + i + ' pointerdown.' + i + ' MSPointerDown.' + i + ' mouseup.' + i + ' touchend.' + i + ' pointerup.' + i + ' MSPointerUp.' + i + ' mouseout.' + i + ' pointerout.' + i + ' MSPointerOut.' + i + ' click.' + i, function (i) {
        function r(e, o) {
          n.scrollAmount = a.scrollButtons.scrollAmount,
          F(t, e, o)
        }
        if (i.preventDefault(), Z(i)) {
          var s = e(this).attr('class');
          switch (n.type = a.scrollButtons.scrollType, i.type) {
            case 'mousedown':
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
              if ('stepped' === n.type) return;
              l = !0,
              o.tweenRunning = !1,
              r('on', s);
              break;
            case 'mouseup':
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseout':
            case 'pointerout':
            case 'MSPointerOut':
              if ('stepped' === n.type) return;
              l = !1,
              n.dir && r('off', s);
              break;
            case 'click':
              if ('stepped' !== n.type || o.tweenRunning) return;
              r('on', s)
          }
        }
      })
    },
    U = function () {
      function t(t) {
        function r(e, t) {
          i.type = n.keyboard.scrollType,
          i.scrollAmount = n.keyboard.scrollAmount,
          'stepped' === i.type && a.tweenRunning || F(o, e, t)
        }
        switch (t.type) {
          case 'blur':
            a.tweenRunning && i.dir && r('off', null);
            break;
          case 'keydown':
          case 'keyup':
            var l = t.keyCode ? t.keyCode : t.which,
            u = 'on';
            if ('x' !== n.axis && (38 === l || 40 === l) || 'y' !== n.axis && (37 === l || 39 === l)) {
              if ((38 === l || 40 === l) && !a.overflowed[0] || (37 === l || 39 === l) && !a.overflowed[1]) return;
              'keyup' === t.type && (u = 'off'),
              e(document.activeElement).is(d) || (t.preventDefault(), t.stopImmediatePropagation(), r(u, l))
            } else if (33 === l || 34 === l) {
              if ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), 'keyup' === t.type) {
                N(o);
                var f = 34 === l ? - 1 : 1;
                if ('x' === n.axis || 'yx' === n.axis && a.overflowed[1] && !a.overflowed[0]) var m = 'x',
                h = Math.abs(s[0].offsetLeft) - f * (0.9 * c.width());
                 else var m = 'y',
                h = Math.abs(s[0].offsetTop) - f * (0.9 * c.height());
                V(o, h.toString(), {
                  dir: m,
                  scrollEasing: 'mcsEaseInOut'
                })
              }
            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(d) && ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), 'keyup' === t.type)) {
              if ('x' === n.axis || 'yx' === n.axis && a.overflowed[1] && !a.overflowed[0]) var m = 'x',
              h = 35 === l ? Math.abs(c.width() - s.outerWidth(!1))  : 0;
               else var m = 'y',
              h = 35 === l ? Math.abs(c.height() - s.outerHeight(!1))  : 0;
              V(o, h.toString(), {
                dir: m,
                scrollEasing: 'mcsEaseInOut'
              })
            }
        }
      }
      var o = e(this),
      a = o.data('mCS'),
      n = a.opt,
      i = a.sequential,
      r = 'mCS_' + a.idx,
      l = e('#mCSB_' + a.idx),
      s = e('#mCSB_' + a.idx + '_container'),
      c = s.parent(),
      d = 'input,textarea,select,datalist,keygen,[contenteditable=\'true\']',
      u = s.find('iframe'),
      f = [
        'blur.' + r + ' keydown.' + r + ' keyup.' + r
      ];
      u.length && u.each(function () {
        e(this).bind('load', function () {
          W(this) && e(this.contentDocument || this.contentWindow.document).bind(f[0], function (e) {
            t(e)
          })
        })
      }),
      l.attr('tabindex', '0').bind(f[0], function (e) {
        t(e)
      })
    },
    F = function (t, o, a, n, i) {
      function r(e) {
        c.snapAmount && (d.scrollAmount = c.snapAmount instanceof Array ? 'x' === d.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
        var o = 'stepped' !== d.type,
        a = i || (e ? o ? m / 1.5 : h : 1000 / 60),
        s = e ? o ? 7.5 : 40 : 2.5,
        f = [
          Math.abs(u[0].offsetTop),
          Math.abs(u[0].offsetLeft)
        ],
        p = [
          l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y,
          l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x
        ],
        g = 'x' === d.dir[0] ? f[1] + d.dir[1] * (p[1] * s)  : f[0] + d.dir[1] * (p[0] * s),
        v = 'x' === d.dir[0] ? f[1] + d.dir[1] * parseInt(d.scrollAmount)  : f[0] + d.dir[1] * parseInt(d.scrollAmount),
        x = 'auto' !== d.scrollAmount ? v : g,
        S = n || (e ? o ? 'mcsLinearOut' : 'mcsEaseInOut' : 'mcsLinear'),
        _ = !!e;
        e && a < 17 && (x = 'x' === d.dir[0] ? f[1] : f[0]),
        V(t, x.toString(), {
          dir: d.dir[0],
          scrollEasing: S,
          dur: a,
          onComplete: _
        }),
        e ? d.dir = !1 : (clearTimeout(d.step), d.step = setTimeout(function () {
          r()
        }, a))
      }
      var l = t.data('mCS'),
      c = l.opt,
      d = l.sequential,
      u = e('#mCSB_' + l.idx + '_container'),
      f = 'stepped' === d.type,
      m = c.scrollInertia < 26 ? 26 : c.scrollInertia,
      h = c.scrollInertia < 1 ? 17 : c.scrollInertia;
      switch (o) {
        case 'on':
          if (d.dir = [
            a === s[16] || a === s[15] || 39 === a || 37 === a ? 'x' : 'y',
            a === s[13] || a === s[15] || 38 === a || 37 === a ? - 1 : 1
          ], N(t), ee(a) && 'stepped' === d.type) return;
          r(f);
          break;
        case 'off':
          clearTimeout(d.step),
          K(d, 'step'),
          N(t),
          (f || l.tweenRunning && d.dir) && r(!0)
      }
    },
    q = function (t) {
      var o = e(this).data('mCS').opt,
      a = [
      ];
      return 'function' == typeof t && (t = t()),
      t instanceof Array ? a = t.length > 1 ? [
        t[0],
        t[1]
      ] : 'x' === o.axis ? [
        null,
        t[0]
      ] : [
        t[0],
        null
      ] : (a[0] = t.y ? t.y : t.x || 'x' === o.axis ? null : t, a[1] = t.x ? t.x : t.y || 'y' === o.axis ? null : t),
      'function' == typeof a[0] && (a[0] = a[0]()),
      'function' == typeof a[1] && (a[1] = a[1]()),
      a
    },
    j = function (t, o) {
      if (null != t && void 0 !== t) {
        var a = e(this),
        n = a.data('mCS'),
        i = n.opt,
        r = e('#mCSB_' + n.idx + '_container'),
        l = r.parent(),
        s = typeof t;
        o || (o = 'x' === i.axis ? 'x' : 'y');
        var d = 'x' === o ? r.outerWidth(!1) - l.width()  : r.outerHeight(!1) - l.height(),
        u = 'x' === o ? r[0].offsetLeft : r[0].offsetTop,
        f = 'x' === o ? 'left' : 'top';
        switch (s) {
          case 'function':
            return t();
          case 'object':
            if (!(h = t.jquery ? t : e(t)).length) return;
            return 'x' === o ? te(h) [1] : te(h) [0];
          case 'string':
          case 'number':
            if (ee(t)) return Math.abs(t);
            if ( - 1 !== t.indexOf('%')) return Math.abs(d * parseInt(t) / 100);
            if ( - 1 !== t.indexOf('-=')) return Math.abs(u - parseInt(t.split('-=') [1]));
            if ( - 1 !== t.indexOf('+=')) {
              var m = u + parseInt(t.split('+=') [1]);
              return m >= 0 ? 0 : Math.abs(m)
            }
            if ( - 1 !== t.indexOf('px') && ee(t.split('px') [0])) return Math.abs(t.split('px') [0]);
            if ('top' === t || 'left' === t) return 0;
            if ('bottom' === t) return Math.abs(l.height() - r.outerHeight(!1));
            if ('right' === t) return Math.abs(l.width() - r.outerWidth(!1));
            if ('first' === t || 'last' === t) {
              var h = r.find(':' + t);
              return 'x' === o ? te(h) [1] : te(h) [0]
            }
            return e(t).length ? 'x' === o ? te(e(t)) [1] : te(e(t)) [0] : (r.css(f, t), void c.update.call(null, a[0]))
        }
      }
    },
    Y = function (t) {
      function o() {
        clearTimeout(u[0].autoUpdate),
        0 !== r.parents('html').length ? u[0].autoUpdate = setTimeout(function () {
          return d.advanced.updateOnSelectorChange && (l.poll.change.n = n(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void i(3))  : d.advanced.updateOnContentResize && (l.poll.size.n = r[0].scrollHeight + r[0].scrollWidth + u[0].offsetHeight + r[0].offsetHeight + r[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void i(1))  : !d.advanced.updateOnImageLoad || 'auto' === d.advanced.updateOnImageLoad && 'y' === d.axis || (l.poll.img.n = u.find('img').length, l.poll.img.n === l.poll.img.o) ? void ((d.advanced.updateOnSelectorChange || d.advanced.updateOnContentResize || d.advanced.updateOnImageLoad) && o())  : (l.poll.img.o = l.poll.img.n, void u.find('img').each(function () {
            a(this)
          }))
        }, d.advanced.autoUpdateTimeout)  : r = null
      }
      function a(t) {
        if (e(t).hasClass(s[2])) i();
         else {
          var o = new Image;
          o.onload = function (e, t) {
            return function () {
              return t.apply(e, arguments)
            }
          }(o, function () {
            this.onload = null,
            e(t).addClass(s[2]),
            i(2)
          }),
          o.src = t.src
        }
      }
      function n() {
        !0 === d.advanced.updateOnSelectorChange && (d.advanced.updateOnSelectorChange = '*');
        var e = 0,
        t = u.find(d.advanced.updateOnSelectorChange);
        return d.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
          e += this.offsetHeight + this.offsetWidth
        }),
        e
      }
      function i(e) {
        clearTimeout(u[0].autoUpdate),
        c.update.call(null, r[0], e)
      }
      var r = e(this),
      l = r.data('mCS'),
      d = l.opt,
      u = e('#mCSB_' + l.idx + '_container');
      if (t) return clearTimeout(u[0].autoUpdate),
      void K(u[0], 'autoUpdate');
      o()
    },
    X = function (e, t, o) {
      return Math.round(e / t) * t - o
    },
    N = function (t) {
      var o = t.data('mCS');
      e('#mCSB_' + o.idx + '_container,#mCSB_' + o.idx + '_container_wrapper,#mCSB_' + o.idx + '_dragger_vertical,#mCSB_' + o.idx + '_dragger_horizontal').each(function () {
        J.call(this)
      })
    },
    V = function (t, o, a) {
      function n(e) {
        return l && s.callbacks[e] && 'function' == typeof s.callbacks[e]
      }
      function i() {
        return [s.callbacks.alwaysTriggerOffsets || S >= _[0] + b,
        s.callbacks.alwaysTriggerOffsets || S <= - y]
      }
      function r() {
        var e = [
          f[0].offsetTop,
          f[0].offsetLeft
        ],
        o = [
          v[0].offsetTop,
          v[0].offsetLeft
        ],
        n = [
          f.outerHeight(!1),
          f.outerWidth(!1)
        ],
        i = [
          u.height(),
          u.width()
        ];
        t[0].mcs = {
          content: f,
          top: e[0],
          left: e[1],
          draggerTop: o[0],
          draggerLeft: o[1],
          topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(n[0]) - i[0])),
          leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(n[1]) - i[1])),
          direction: a.dir
        }
      }
      var l = t.data('mCS'),
      s = l.opt,
      c = {
        trigger: 'internal',
        dir: 'y',
        scrollEasing: 'mcsEaseOut',
        drag: !1,
        dur: s.scrollInertia,
        overwrite: 'all',
        callbacks: !0,
        onStart: !0,
        onUpdate: !0,
        onComplete: !0
      },
      d = [
        (a = e.extend(c, a)).dur,
        a.drag ? 0 : a.dur
      ],
      u = e('#mCSB_' + l.idx),
      f = e('#mCSB_' + l.idx + '_container'),
      m = f.parent(),
      h = s.callbacks.onTotalScrollOffset ? q.call(t, s.callbacks.onTotalScrollOffset)  : [
        0,
        0
      ],
      p = s.callbacks.onTotalScrollBackOffset ? q.call(t, s.callbacks.onTotalScrollBackOffset)  : [
        0,
        0
      ];
      if (l.trigger = a.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e('.mCSB_' + l.idx + '_scrollbar').css('visibility', 'visible'), m.scrollTop(0).scrollLeft(0)), '_resetY' !== o || l.contentReset.y || (n('onOverflowYNone') && s.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), '_resetX' !== o || l.contentReset.x || (n('onOverflowXNone') && s.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), '_resetY' !== o && '_resetX' !== o) {
        if (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (n('onOverflowY') && s.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (n('onOverflowX') && s.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), s.snapAmount) {
          var g = s.snapAmount instanceof Array ? 'x' === a.dir ? s.snapAmount[1] : s.snapAmount[0] : s.snapAmount;
          o = X(o, g, s.snapOffset)
        }
        switch (a.dir) {
          case 'x':
            var v = e('#mCSB_' + l.idx + '_dragger_horizontal'),
            x = 'left',
            S = f[0].offsetLeft,
            _ = [
              u.width() - f.outerWidth(!1),
              v.parent().width() - v.width()
            ],
            C = [
              o,
              0 === o ? 0 : o / l.scrollRatio.x
            ],
            b = h[1],
            y = p[1],
            B = b > 0 ? b / l.scrollRatio.x : 0,
            T = y > 0 ? y / l.scrollRatio.x : 0;
            break;
          case 'y':
            var v = e('#mCSB_' + l.idx + '_dragger_vertical'),
            x = 'top',
            S = f[0].offsetTop,
            _ = [
              u.height() - f.outerHeight(!1),
              v.parent().height() - v.height()
            ],
            C = [
              o,
              0 === o ? 0 : o / l.scrollRatio.y
            ],
            b = h[0],
            y = p[0],
            B = b > 0 ? b / l.scrollRatio.y : 0,
            T = y > 0 ? y / l.scrollRatio.y : 0
        }
        C[1] < 0 || 0 === C[0] && 0 === C[1] ? C = [
          0,
          0
        ] : C[1] >= _[1] ? C = [
          _[0],
          _[1]
        ] : C[0] = - C[0],
        t[0].mcs || (r(), n('onInit') && s.callbacks.onInit.call(t[0])),
        clearTimeout(f[0].onCompleteTimeout),
        Q(v[0], x, Math.round(C[1]), d[1], a.scrollEasing),
        !l.tweenRunning && (0 === S && C[0] >= 0 || S === _[0] && C[0] <= _[0]) || Q(f[0], x, Math.round(C[0]), d[0], a.scrollEasing, a.overwrite, {
          onStart: function () {
            a.callbacks && a.onStart && !l.tweenRunning && (n('onScrollStart') && (r(), s.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, w(v), l.cbOffsets = i())
          },
          onUpdate: function () {
            a.callbacks && a.onUpdate && n('whileScrolling') && (r(), s.callbacks.whileScrolling.call(t[0]))
          },
          onComplete: function () {
            if (a.callbacks && a.onComplete) {
              'yx' === s.axis && clearTimeout(f[0].onCompleteTimeout);
              var e = f[0].idleTimer || 0;
              f[0].onCompleteTimeout = setTimeout(function () {
                n('onScroll') && (r(), s.callbacks.onScroll.call(t[0])),
                n('onTotalScroll') && C[1] >= _[1] - B && l.cbOffsets[0] && (r(), s.callbacks.onTotalScroll.call(t[0])),
                n('onTotalScrollBack') && C[1] <= T && l.cbOffsets[1] && (r(), s.callbacks.onTotalScrollBack.call(t[0])),
                l.tweenRunning = !1,
                f[0].idleTimer = 0,
                w(v, 'hide')
              }, e)
            }
          }
        })
      }
    },
    Q = function (e, t, o, a, n, i, r) {
      function l() {
        S.stop || (g || f.call(), g = G() - p, s(), g >= S.time && (S.time = g > S.time ? g + d - (g - S.time)  : g + d - 1, S.time < g + 1 && (S.time = g + 1)), S.time < a ? S.id = u(l)  : h.call())
      }
      function s() {
        a > 0 ? (S.currVal = c(S.time, v, _, a, n), x[t] = Math.round(S.currVal) + 'px')  : x[t] = o + 'px',
        m.call()
      }
      function c(e, t, o, a, n) {
        switch (n) {
          case 'linear':
          case 'mcsLinear':
            return o * e / a + t;
          case 'mcsLinearOut':
            return e /= a,
            e--,
            o * Math.sqrt(1 - e * e) + t;
          case 'easeInOutSmooth':
            return (e /= a / 2) < 1 ? o / 2 * e * e + t : (e--, - o / 2 * (e * (e - 2) - 1) + t);
          case 'easeInOutStrong':
            return (e /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (2 - Math.pow(2, - 10 * e)) + t);
          case 'easeInOut':
          case 'mcsEaseInOut':
            return (e /= a / 2) < 1 ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
          case 'easeOutSmooth':
            return e /= a,
            e--,
            - o * (e * e * e * e - 1) + t;
          case 'easeOutStrong':
            return o * (1 - Math.pow(2, - 10 * e / a)) + t;
          case 'easeOut':
          case 'mcsEaseOut':
          default:
            var i = (e /= a) * e,
            r = i * e;
            return t + o * (0.499999999999997 * r * i + - 2.5 * i * i + 5.5 * r + - 6.5 * i + 4 * e)
        }
      }
      e._mTween || (e._mTween = {
        top: {
        },
        left: {
        }
      });
      var d,
      u,
      f = (r = r || {
      }).onStart || function () {
      },
      m = r.onUpdate || function () {
      },
      h = r.onComplete || function () {
      },
      p = G(),
      g = 0,
      v = e.offsetTop,
      x = e.style,
      S = e._mTween[t];
      'left' === t && (v = e.offsetLeft);
      var _ = o - v;
      S.stop = 0,
      'none' !== i && null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id)  : clearTimeout(S.id), S.id = null),
      d = 1000 / 60,
      S.time = g + d,
      u = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
        return s(),
        setTimeout(e, 0.01)
      },
      S.id = u(l)
    },
    G = function () {
      return window.performance && window.performance.now ? window.performance.now()  : window.performance && window.performance.webkitNow ? window.performance.webkitNow()  : Date.now ? Date.now()  : (new Date).getTime()
    },
    J = function () {
      var e = this;
      e._mTween || (e._mTween = {
        top: {
        },
        left: {
        }
      });
      for (var t = [
        'top',
        'left'
      ], o = 0; o < t.length; o++) {
        var a = t[o];
        e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id)  : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1)
      }
    },
    K = function (e, t) {
      try {
        delete e[t]
      } catch (o) {
        e[t] = null
      }
    },
    Z = function (e) {
      return !(e.which && 1 !== e.which)
    },
    $ = function (e) {
      var t = e.originalEvent.pointerType;
      return !(t && 'touch' !== t && 2 !== t)
    },
    ee = function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    },
    te = function (e) {
      var t = e.parents('.mCSB_container');
      return [e.offset().top - t.offset().top,
      e.offset().left - t.offset().left]
    },
    oe = function () {
      var e = function () {
        var e = [
          'webkit',
          'moz',
          'ms',
          'o'
        ];
        if ('hidden' in document) return 'hidden';
        for (var t = 0; t < e.length; t++) if (e[t] + 'Hidden' in document) return e[t] + 'Hidden';
        return null
      }();
      return !!e && document[e]
    };
    e.fn[o] = function (t) {
      return c[t] ? c[t].apply(this, Array.prototype.slice.call(arguments, 1))  : 'object' != typeof t && t ? void e.error('Method ' + t + ' does not exist')  : c.init.apply(this, arguments)
    },
    e[o] = function (t) {
      return c[t] ? c[t].apply(this, Array.prototype.slice.call(arguments, 1))  : 'object' != typeof t && t ? void e.error('Method ' + t + ' does not exist')  : c.init.apply(this, arguments)
    },
    e[o].defaults = a,
    window[o] = !0,
    e(window).bind('load', function () {
      e('.mCustomScrollbar') [o](),
      e.extend(e.expr[':'], {
        mcsInView: e.expr[':'].mcsInView || function (t) {
          var o,
          a,
          n = e(t),
          i = n.parents('.mCSB_container');
          if (i.length) return o = i.parent(),
          (a = [
            i[0].offsetTop,
            i[0].offsetLeft
          ]) [0] + te(n) [0] >= 0 && a[0] + te(n) [0] < o.height() - n.outerHeight(!1) && a[1] + te(n) [1] >= 0 && a[1] + te(n) [1] < o.width() - n.outerWidth(!1)
        },
        mcsInSight: e.expr[':'].mcsInSight || function (t, o, a) {
          var n,
          i,
          r,
          l,
          s = e(t),
          c = s.parents('.mCSB_container'),
          d = 'exact' === a[3] ? [
            [1,
            0],
            [
              1,
              0
            ]
          ] : [
            [0.9,
            0.1],
            [
              0.6,
              0.4
            ]
          ];
          if (c.length) return n = [
            s.outerHeight(!1),
            s.outerWidth(!1)
          ],
          r = [
            c[0].offsetTop + te(s) [0],
            c[0].offsetLeft + te(s) [1]
          ],
          i = [
            c.parent() [0].offsetHeight,
            c.parent() [0].offsetWidth
          ],
          l = [
            n[0] < i[0] ? d[0] : d[1],
            n[1] < i[1] ? d[0] : d[1]
          ],
          r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
        },
        mcsOverflow: e.expr[':'].mcsOverflow || function (t) {
          var o = e(t).data('mCS');
          if (o) return o.overflowed[0] || o.overflowed[1]
        }
      })
    })
  })
});
/**
 * @module       jscolor
 * @author       Jan Odvarko
 * @license      GPLv3
 * @version      2.0.4
 * @link         http://jscolor.com
 * @description  JavaScript Color Picker
 */
function jscolorInit(className) {
  var jsc = {
    register: function register() {
      jsc.attachDOMReadyEvent(jsc.init);
      jsc.attachEvent(document, 'mousedown', jsc.onDocumentMouseDown);
      jsc.attachEvent(document, 'touchstart', jsc.onDocumentTouchStart);
      jsc.attachEvent(window, 'resize', jsc.onWindowResize)
    },
    init: function init() {
      if (jsc.jscolor.lookupClass) {
        jsc.jscolor.installByClassName(jsc.jscolor.lookupClass)
      }
    },
    tryInstallOnElements: function tryInstallOnElements(elms, className) {
      var matchClass = new RegExp('(^|\\s)(' + className + ')(\\s*(\\{[^}]*\\})|\\s|$)', 'i');
      for (var i = 0; i < elms.length; i += 1) {
        if (elms[i].type !== undefined && elms[i].type.toLowerCase() == 'color') {
          if (jsc.isColorAttrSupported) {
            continue
          }
        }
        var m;
        if (!elms[i].jscolor && elms[i].className && (m = elms[i].className.match(matchClass))) {
          var targetElm = elms[i];
          var optsStr = null;
          var dataOptions = jsc.getDataAttr(targetElm, 'jscolor');
          if (dataOptions !== null) {
            optsStr = dataOptions
          } else if (m[4]) {
            optsStr = m[4]
          }
          var opts = {
          };
          if (optsStr) {
            try {
              opts = new Function('return (' + optsStr + ')') ()
            } catch (eParseError) {
              jsc.warn('Error parsing jscolor options: ' + eParseError + ':\n' + optsStr)
            }
          }
          targetElm.jscolor = new jsc.jscolor(targetElm, opts)
        }
      }
    },
    isColorAttrSupported: function () {
      var elm = document.createElement('input');
      if (elm.setAttribute) {
        elm.setAttribute('type', 'color');
        if (elm.type.toLowerCase() == 'color') {
          return true
        }
      }
      return false
    }(),
    isCanvasSupported: function () {
      var elm = document.createElement('canvas');
      return !!(elm.getContext && elm.getContext('2d'))
    }(),
    fetchElement: function fetchElement(mixed) {
      return typeof mixed === 'string' ? document.getElementById(mixed)  : mixed
    },
    isElementType: function isElementType(elm, type) {
      return elm.nodeName.toLowerCase() === type.toLowerCase()
    },
    getDataAttr: function getDataAttr(el, name) {
      var attrName = 'data-' + name;
      var attrValue = el.getAttribute(attrName);
      if (attrValue !== null) {
        return attrValue
      }
      return null
    },
    attachEvent: function attachEvent(el, evnt, func) {
      if (el.addEventListener) {
        el.addEventListener(evnt, func, false)
      } else if (el.attachEvent) {
        el.attachEvent('on' + evnt, func)
      }
    },
    detachEvent: function detachEvent(el, evnt, func) {
      if (el.removeEventListener) {
        el.removeEventListener(evnt, func, false)
      } else if (el.detachEvent) {
        el.detachEvent('on' + evnt, func)
      }
    },
    _attachedGroupEvents: {
    },
    attachGroupEvent: function attachGroupEvent(groupName, el, evnt, func) {
      if (!jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
        jsc._attachedGroupEvents[groupName] = [
        ]
      }
      jsc._attachedGroupEvents[groupName].push([el,
      evnt,
      func]);
      jsc.attachEvent(el, evnt, func)
    },
    detachGroupEvents: function detachGroupEvents(groupName) {
      if (jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
        for (var i = 0; i < jsc._attachedGroupEvents[groupName].length; i += 1) {
          var evt = jsc._attachedGroupEvents[groupName][i];
          jsc.detachEvent(evt[0], evt[1], evt[2])
        }
        delete jsc._attachedGroupEvents[groupName]
      }
    },
    attachDOMReadyEvent: function attachDOMReadyEvent(func) {
      var fired = false;
      var fireOnce = function fireOnce() {
        if (!fired) {
          fired = true;
          func()
        }
      };
      if (document.readyState === 'complete') {
        setTimeout(fireOnce, 1);
        return
      }
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fireOnce, false);
        window.addEventListener('load', fireOnce, false)
      } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function () {
          if (document.readyState === 'complete') {
            document.detachEvent('onreadystatechange', arguments.callee);
            fireOnce()
          }
        });
        window.attachEvent('onload', fireOnce);
        if (document.documentElement.doScroll && window == window.top) {
          var tryScroll = function tryScroll() {
            if (!document.body) {
              return
            }
            try {
              document.documentElement.doScroll('left');
              fireOnce()
            } catch (e) {
              setTimeout(tryScroll, 1)
            }
          };
          tryScroll()
        }
      }
    },
    warn: function warn(msg) {
      if (window.console && window.console.warn) {
        window.console.warn(msg)
      }
    },
    preventDefault: function preventDefault(e) {
      if (e.preventDefault) {
        e.preventDefault()
      }
      e.returnValue = false
    },
    captureTarget: function captureTarget(target) {
      if (target.setCapture) {
        jsc._capturedTarget = target;
        jsc._capturedTarget.setCapture()
      }
    },
    releaseTarget: function releaseTarget() {
      if (jsc._capturedTarget) {
        jsc._capturedTarget.releaseCapture();
        jsc._capturedTarget = null
      }
    },
    fireEvent: function fireEvent(el, evnt) {
      if (!el) {
        return
      }
      if (document.createEvent) {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent(evnt, true, true);
        el.dispatchEvent(ev)
      } else if (document.createEventObject) {
        var ev = document.createEventObject();
        el.fireEvent('on' + evnt, ev)
      } else if (el['on' + evnt]) {
        el['on' + evnt]()
      }
    },
    classNameToList: function classNameToList(className) {
      return className.replace(/^\s+|\s+$/g, '').split(/\s+/)
    },
    hasClass: function hasClass(elm, className) {
      if (!className) {
        return false
      }
      return - 1 != (' ' + elm.className.replace(/\s+/g, ' ') + ' ').indexOf(' ' + className + ' ')
    },
    setClass: function setClass(elm, className) {
      var classList = jsc.classNameToList(className);
      for (var i = 0; i < classList.length; i += 1) {
        if (!jsc.hasClass(elm, classList[i])) {
          elm.className += (elm.className ? ' ' : '') + classList[i]
        }
      }
    },
    unsetClass: function unsetClass(elm, className) {
      var classList = jsc.classNameToList(className);
      for (var i = 0; i < classList.length; i += 1) {
        var repl = new RegExp('^\\s*' + classList[i] + '\\s*|' + '\\s*' + classList[i] + '\\s*$|' + '\\s+' + classList[i] + '(\\s+)', 'g');
        elm.className = elm.className.replace(repl, '$1')
      }
    },
    getStyle: function getStyle(elm) {
      return window.getComputedStyle ? window.getComputedStyle(elm)  : elm.currentStyle
    },
    setStyle: function () {
      var helper = document.createElement('div');
      var getSupportedProp = function getSupportedProp(names) {
        for (var i = 0; i < names.length; i += 1) {
          if (names[i] in helper.style) {
            return names[i]
          }
        }
      };
      var props = {
        borderRadius: getSupportedProp(['borderRadius',
        'MozBorderRadius',
        'webkitBorderRadius']),
        boxShadow: getSupportedProp(['boxShadow',
        'MozBoxShadow',
        'webkitBoxShadow'])
      };
      return function (elm, prop, value) {
        switch (prop.toLowerCase()) {
          case 'opacity':
            var alphaOpacity = Math.round(parseFloat(value) * 100);
            elm.style.opacity = value;
            elm.style.filter = 'alpha(opacity=' + alphaOpacity + ')';
            break;
          default:
            elm.style[props[prop]] = value;
            break;
        }
      }
    }(),
    setBorderRadius: function setBorderRadius(elm, value) {
      jsc.setStyle(elm, 'borderRadius', value || '0')
    },
    setBoxShadow: function setBoxShadow(elm, value) {
      jsc.setStyle(elm, 'boxShadow', value || 'none')
    },
    getElementPos: function getElementPos(e, relativeToViewport) {
      var x = 0,
      y = 0;
      var rect = e.getBoundingClientRect();
      x = rect.left;
      y = rect.top;
      if (!relativeToViewport) {
        var viewPos = jsc.getViewPos();
        x += viewPos[0];
        y += viewPos[1]
      }
      return [x,
      y]
    },
    getElementSize: function getElementSize(e) {
      return [e.offsetWidth,
      e.offsetHeight]
    },
    getAbsPointerPos: function getAbsPointerPos(e) {
      if (!e) {
        e = window.event
      }
      var x = 0,
      y = 0;
      if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
        x = e.changedTouches[0].clientX;
        y = e.changedTouches[0].clientY
      } else if (typeof e.clientX === 'number') {
        x = e.clientX;
        y = e.clientY
      }
      return {
        x: x,
        y: y
      }
    },
    getRelPointerPos: function getRelPointerPos(e) {
      if (!e) {
        e = window.event
      }
      var target = e.target || e.srcElement;
      var targetRect = target.getBoundingClientRect();
      var x = 0,
      y = 0;
      var clientX = 0,
      clientY = 0;
      if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY
      } else if (typeof e.clientX === 'number') {
        clientX = e.clientX;
        clientY = e.clientY
      }
      x = clientX - targetRect.left;
      y = clientY - targetRect.top;
      return {
        x: x,
        y: y
      }
    },
    getViewPos: function getViewPos() {
      var doc = document.documentElement;
      return [(window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)]
    },
    getViewSize: function getViewSize() {
      var doc = document.documentElement;
      return [window.innerWidth || doc.clientWidth,
      window.innerHeight || doc.clientHeight]
    },
    redrawPosition: function redrawPosition() {
      if (jsc.picker && jsc.picker.owner) {
        var thisObj = jsc.picker.owner;
        var tp,
        vp;
        if (thisObj.fixed) {
          tp = jsc.getElementPos(thisObj.targetElement, true);
          vp = [
            0,
            0
          ]
        } else {
          tp = jsc.getElementPos(thisObj.targetElement);
          vp = jsc.getViewPos()
        }
        var ts = jsc.getElementSize(thisObj.targetElement);
        var vs = jsc.getViewSize();
        var ps = jsc.getPickerOuterDims(thisObj);
        var a,
        b,
        c;
        switch (thisObj.position.toLowerCase()) {
          case 'left':
            a = 1;
            b = 0;
            c = - 1;
            break;
          case 'right':
            a = 1;
            b = 0;
            c = 1;
            break;
          case 'top':
            a = 0;
            b = 1;
            c = - 1;
            break;
          default:
            a = 0;
            b = 1;
            c = 1;
            break;
        }
        var l = (ts[b] + ps[b]) / 2;
        if (!thisObj.smartPosition) {
          var pp = [
            tp[a],
            tp[b] + ts[b] - l + l * c
          ]
      } else {
        var pp = [
          - vp[a] + tp[a] + ps[a] > vs[a] ? - vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0 ? tp[a] + ts[a] - ps[a] : tp[a] : tp[a],
          - vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b] ? - vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0 ? tp[b] + ts[b] - l - l * c : tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l + l * c >= 0 ? tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l - l * c
        ]
    }
    var x = pp[a];
    var y = pp[b];
    var positionValue = thisObj.fixed ? 'fixed' : 'absolute';
    var contractShadow = (pp[0] + ps[0] > tp[0] || pp[0] < tp[0] + ts[0]) && pp[1] + ps[1] < tp[1] + ts[1];
    jsc._drawPosition(thisObj, x, y, positionValue, contractShadow)
  }
},
_drawPosition: function _drawPosition(thisObj, x, y, positionValue, contractShadow) {
  var vShadow = contractShadow ? 0 : thisObj.shadowBlur;
  jsc.picker.wrap.style.position = positionValue;
  jsc.picker.wrap.style.left = x + 'px';
  jsc.picker.wrap.style.top = y + 'px';
  jsc.setBoxShadow(jsc.picker.boxS, thisObj.shadow ? new jsc.BoxShadow(0, vShadow, thisObj.shadowBlur, 0, thisObj.shadowColor)  : null)
},
getPickerDims: function getPickerDims(thisObj) {
  var displaySlider = !!jsc.getSliderComponent(thisObj);
  var dims = [
    2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.width + (displaySlider ? 2 * thisObj.insetWidth + jsc.getPadToSliderPadding(thisObj) + thisObj.sliderSize : 0),
    2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.height + (thisObj.closable ? 2 * thisObj.insetWidth + thisObj.padding + thisObj.buttonHeight : 0)
  ];
  return dims
},
getPickerOuterDims: function getPickerOuterDims(thisObj) {
  var dims = jsc.getPickerDims(thisObj);
  return [dims[0] + 2 * thisObj.borderWidth,
  dims[1] + 2 * thisObj.borderWidth]
},
getPadToSliderPadding: function getPadToSliderPadding(thisObj) {
  return Math.max(thisObj.padding, 1.5 * (2 * thisObj.pointerBorderWidth + thisObj.pointerThickness))
},
getPadYComponent: function getPadYComponent(thisObj) {
  switch (thisObj.mode.charAt(1).toLowerCase()) {
    case 'v':
      return 'v';
      break;
  }
  return 's'
},
getSliderComponent: function getSliderComponent(thisObj) {
  if (thisObj.mode.length > 2) {
    switch (thisObj.mode.charAt(2).toLowerCase()) {
      case 's':
        return 's';
        break;
      case 'v':
        return 'v';
        break;
    }
  }
  return null
},
onDocumentMouseDown: function onDocumentMouseDown(e) {
  if (!e) {
    e = window.event
  }
  var target = e.target || e.srcElement;
  if (target._jscLinkedInstance) {
    if (target._jscLinkedInstance.showOnClick) {
      target._jscLinkedInstance.show()
    }
  } else if (target._jscControlName) {
    jsc.onControlPointerStart(e, target, target._jscControlName, 'mouse')
  } else {
    if (jsc.picker && jsc.picker.owner) {
      jsc.picker.owner.hide()
    }
  }
},
onDocumentTouchStart: function onDocumentTouchStart(e) {
  if (!e) {
    e = window.event
  }
  var target = e.target || e.srcElement;
  if (target._jscLinkedInstance) {
    if (target._jscLinkedInstance.showOnClick) {
      target._jscLinkedInstance.show()
    }
  } else if (target._jscControlName) {
    jsc.onControlPointerStart(e, target, target._jscControlName, 'touch')
  } else {
    if (jsc.picker && jsc.picker.owner) {
      jsc.picker.owner.hide()
    }
  }
},
onWindowResize: function onWindowResize(e) {
  jsc.redrawPosition()
},
onParentScroll: function onParentScroll(e) {
  if (jsc.picker && jsc.picker.owner) {
    jsc.picker.owner.hide()
  }
},
_pointerMoveEvent: {
  mouse: 'mousemove',
  touch: 'touchmove'
},
_pointerEndEvent: {
  mouse: 'mouseup',
  touch: 'touchend'
},
_pointerOrigin: null,
_capturedTarget: null,
onControlPointerStart: function onControlPointerStart(e, target, controlName, pointerType) {
  var thisObj = target._jscInstance;
  jsc.preventDefault(e);
  jsc.captureTarget(target);
  var registerDragEvents = function registerDragEvents(doc, offset) {
    jsc.attachGroupEvent('drag', doc, jsc._pointerMoveEvent[pointerType], jsc.onDocumentPointerMove(e, target, controlName, pointerType, offset));
    jsc.attachGroupEvent('drag', doc, jsc._pointerEndEvent[pointerType], jsc.onDocumentPointerEnd(e, target, controlName, pointerType))
  };
  registerDragEvents(document, [
    0,
    0
  ]);
  if (window.parent && window.frameElement) {
    var rect = window.frameElement.getBoundingClientRect();
    var ofs = [
      - rect.left,
      - rect.top
    ];
    registerDragEvents(window.parent.window.document, ofs)
  }
  var abs = jsc.getAbsPointerPos(e);
  var rel = jsc.getRelPointerPos(e);
  jsc._pointerOrigin = {
    x: abs.x - rel.x,
    y: abs.y - rel.y
  };
  switch (controlName) {
    case 'pad':
      switch (jsc.getSliderComponent(thisObj)) {
        case 's':
          if (thisObj.hsv[1] === 0) {
            thisObj.fromHSV(null, 100, null)
          };
          break;
        case 'v':
          if (thisObj.hsv[2] === 0) {
            thisObj.fromHSV(null, null, 100)
          };
          break;
      }
      jsc.setPad(thisObj, e, 0, 0);
      break;
    case 'sld':
      jsc.setSld(thisObj, e, 0);
      break;
    }
    jsc.dispatchFineChange(thisObj)
},
onDocumentPointerMove: function onDocumentPointerMove(e, target, controlName, pointerType, offset) {
  return function (e) {
    var thisObj = target._jscInstance;
    switch (controlName) {
      case 'pad':
        if (!e) {
          e = window.event
        }
        jsc.setPad(thisObj, e, offset[0], offset[1]);
        jsc.dispatchFineChange(thisObj);
        break;
      case 'sld':
        if (!e) {
          e = window.event
        }
        jsc.setSld(thisObj, e, offset[1]);
        jsc.dispatchFineChange(thisObj);
        break;
    }
  }
},
onDocumentPointerEnd: function onDocumentPointerEnd(e, target, controlName, pointerType) {
  return function (e) {
    var thisObj = target._jscInstance;
    jsc.detachGroupEvents('drag');
    jsc.releaseTarget();
    jsc.dispatchChange(thisObj)
  }
},
dispatchChange: function dispatchChange(thisObj) {
  if (thisObj.valueElement) {
    if (jsc.isElementType(thisObj.valueElement, 'input')) {
      jsc.fireEvent(thisObj.valueElement, 'change')
    }
  }
},
dispatchFineChange: function dispatchFineChange(thisObj) {
  if (thisObj.onFineChange) {
    var callback;
    if (typeof thisObj.onFineChange === 'string') {
      callback = new Function(thisObj.onFineChange)
    } else {
      callback = thisObj.onFineChange
    }
    callback.call(thisObj)
  }
},
setPad: function setPad(thisObj, e, ofsX, ofsY) {
  var pointerAbs = jsc.getAbsPointerPos(e);
  var x = ofsX + pointerAbs.x - jsc._pointerOrigin.x - thisObj.padding - thisObj.insetWidth;
  var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;
  var xVal = x * (360 / (thisObj.width - 1));
  var yVal = 100 - y * (100 / (thisObj.height - 1));
  switch (jsc.getPadYComponent(thisObj)) {
    case 's':
      thisObj.fromHSV(xVal, yVal, null, jsc.leaveSld);
      break;
    case 'v':
      thisObj.fromHSV(xVal, null, yVal, jsc.leaveSld);
      break;
  }
},
setSld: function setSld(thisObj, e, ofsY) {
  var pointerAbs = jsc.getAbsPointerPos(e);
  var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;
  var yVal = 100 - y * (100 / (thisObj.height - 1));
  switch (jsc.getSliderComponent(thisObj)) {
    case 's':
      thisObj.fromHSV(null, yVal, null, jsc.leavePad);
      break;
    case 'v':
      thisObj.fromHSV(null, null, yVal, jsc.leavePad);
      break;
  }
},
_vmlNS: 'jsc_vml_',
_vmlCSS: 'jsc_vml_css_',
_vmlReady: false,
initVML: function initVML() {
  if (!jsc._vmlReady) {
    var doc = document;
    if (!doc.namespaces[jsc._vmlNS]) {
      doc.namespaces.add(jsc._vmlNS, 'urn:schemas-microsoft-com:vml')
    }
    if (!doc.styleSheets[jsc._vmlCSS]) {
      var tags = [
        'shape',
        'shapetype',
        'group',
        'background',
        'path',
        'formulas',
        'handles',
        'fill',
        'stroke',
        'shadow',
        'textbox',
        'textpath',
        'imagedata',
        'line',
        'polyline',
        'curve',
        'rect',
        'roundrect',
        'oval',
        'arc',
        'image'
      ];
      var ss = doc.createStyleSheet();
      ss.owningElement.id = jsc._vmlCSS;
      for (var i = 0; i < tags.length; i += 1) {
        ss.addRule(jsc._vmlNS + '\\:' + tags[i], 'behavior:url(#default#VML);')
      }
    }
    jsc._vmlReady = true
  }
},
createPalette: function createPalette() {
  var paletteObj = {
    elm: null,
    draw: null
  };
  if (jsc.isCanvasSupported) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var drawFunc = function drawFunc(width, height, type) {
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var hGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      hGrad.addColorStop(0 / 6, '#F00');
      hGrad.addColorStop(1 / 6, '#FF0');
      hGrad.addColorStop(2 / 6, '#0F0');
      hGrad.addColorStop(3 / 6, '#0FF');
      hGrad.addColorStop(4 / 6, '#00F');
      hGrad.addColorStop(5 / 6, '#F0F');
      hGrad.addColorStop(6 / 6, '#F00');
      ctx.fillStyle = hGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      var vGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      switch (type.toLowerCase()) {
        case 's':
          vGrad.addColorStop(0, 'rgba(255,255,255,0)');
          vGrad.addColorStop(1, 'rgba(255,255,255,1)');
          break;
        case 'v':
          vGrad.addColorStop(0, 'rgba(0,0,0,0)');
          vGrad.addColorStop(1, 'rgba(0,0,0,1)');
          break;
      }
      ctx.fillStyle = vGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    };
    paletteObj.elm = canvas;
    paletteObj.draw = drawFunc
  } else {
    jsc.initVML();
    var vmlContainer = document.createElement('div');
    vmlContainer.style.position = 'relative';
    vmlContainer.style.overflow = 'hidden';
    var hGrad = document.createElement(jsc._vmlNS + ':fill');
    hGrad.type = 'gradient';
    hGrad.method = 'linear';
    hGrad.angle = '90';
    hGrad.colors = '16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0';
    var hRect = document.createElement(jsc._vmlNS + ':rect');
    hRect.style.position = 'absolute';
    hRect.style.left = - 1 + 'px';
    hRect.style.top = - 1 + 'px';
    hRect.stroked = false;
    hRect.appendChild(hGrad);
    vmlContainer.appendChild(hRect);
    var vGrad = document.createElement(jsc._vmlNS + ':fill');
    vGrad.type = 'gradient';
    vGrad.method = 'linear';
    vGrad.angle = '180';
    vGrad.opacity = '0';
    var vRect = document.createElement(jsc._vmlNS + ':rect');
    vRect.style.position = 'absolute';
    vRect.style.left = - 1 + 'px';
    vRect.style.top = - 1 + 'px';
    vRect.stroked = false;
    vRect.appendChild(vGrad);
    vmlContainer.appendChild(vRect);
    var drawFunc = function drawFunc(width, height, type) {
      vmlContainer.style.width = width + 'px';
      vmlContainer.style.height = height + 'px';
      hRect.style.width = vRect.style.width = width + 1 + 'px';
      hRect.style.height = vRect.style.height = height + 1 + 'px';
      hGrad.color = '#F00';
      hGrad.color2 = '#F00';
      switch (type.toLowerCase()) {
        case 's':
          vGrad.color = vGrad.color2 = '#FFF';
          break;
        case 'v':
          vGrad.color = vGrad.color2 = '#000';
          break;
      }
    };
    paletteObj.elm = vmlContainer;
    paletteObj.draw = drawFunc
  }
  return paletteObj
},
createSliderGradient: function createSliderGradient() {
  var sliderObj = {
    elm: null,
    draw: null
  };
  if (jsc.isCanvasSupported) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var drawFunc = function drawFunc(width, height, color1, color2) {
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, color1);
      grad.addColorStop(1, color2);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    };
    sliderObj.elm = canvas;
    sliderObj.draw = drawFunc
  } else {
    jsc.initVML();
    var vmlContainer = document.createElement('div');
    vmlContainer.style.position = 'relative';
    vmlContainer.style.overflow = 'hidden';
    var grad = document.createElement(jsc._vmlNS + ':fill');
    grad.type = 'gradient';
    grad.method = 'linear';
    grad.angle = '180';
    var rect = document.createElement(jsc._vmlNS + ':rect');
    rect.style.position = 'absolute';
    rect.style.left = - 1 + 'px';
    rect.style.top = - 1 + 'px';
    rect.stroked = false;
    rect.appendChild(grad);
    vmlContainer.appendChild(rect);
    var drawFunc = function drawFunc(width, height, color1, color2) {
      vmlContainer.style.width = width + 'px';
      vmlContainer.style.height = height + 'px';
      rect.style.width = width + 1 + 'px';
      rect.style.height = height + 1 + 'px';
      grad.color = color1;
      grad.color2 = color2
    };
    sliderObj.elm = vmlContainer;
    sliderObj.draw = drawFunc
  }
  return sliderObj
},
leaveValue: 1 << 0,
leaveStyle: 1 << 1,
leavePad: 1 << 2,
leaveSld: 1 << 3,
BoxShadow: function () {
  var BoxShadow = function BoxShadow(hShadow, vShadow, blur, spread, color, inset) {
    this.hShadow = hShadow;
    this.vShadow = vShadow;
    this.blur = blur;
    this.spread = spread;
    this.color = color;
    this.inset = !!inset
  };
  BoxShadow.prototype.toString = function () {
    var vals = [
      Math.round(this.hShadow) + 'px',
      Math.round(this.vShadow) + 'px',
      Math.round(this.blur) + 'px',
      Math.round(this.spread) + 'px',
      this.color
    ];
    if (this.inset) {
      vals.push('inset')
    }
    return vals.join(' ')
  };
  return BoxShadow
}(),
jscolor: function jscolor(targetElement, options) {
  this.value = null;
  this.valueElement = targetElement;
  this.styleElement = targetElement;
  this.required = true;
  this.refine = true;
  this.hash = false;
  this.uppercase = true;
  this.onFineChange = null;
  this.activeClass = 'jscolor-active';
  this.minS = 0;
  this.maxS = 100;
  this.minV = 0;
  this.maxV = 100;
  this.hsv = [
    0,
    0,
    100
  ];
  this.rgb = [
    255,
    255,
    255
  ];
  this.width = 181;
  this.height = 101;
  this.showOnClick = true;
  this.mode = 'HSV';
  this.position = 'bottom';
  this.smartPosition = true;
  this.sliderSize = 16;
  this.crossSize = 8;
  this.closable = false;
  this.closeText = 'Close';
  this.buttonColor = '#000000';
  this.buttonHeight = 18;
  this.padding = 12;
  this.backgroundColor = '#FFFFFF';
  this.borderWidth = 1;
  this.borderColor = '#BBBBBB';
  this.borderRadius = 8;
  this.insetWidth = 1;
  this.insetColor = '#BBBBBB';
  this.shadow = true;
  this.shadowBlur = 15;
  this.shadowColor = 'rgba(0,0,0,0.2)';
  this.pointerColor = '#4C4C4C';
  this.pointerBorderColor = '#FFFFFF';
  this.pointerBorderWidth = 1;
  this.pointerThickness = 2;
  this.zIndex = 1000;
  this.container = null;
  for (var opt in options) {
    if (options.hasOwnProperty(opt)) {
      this[opt] = options[opt]
    }
  }
  this.hide = function () {
    if (isPickerOwner()) {
      detachPicker()
    }
  };
  this.show = function () {
    drawPicker()
  };
  this.redraw = function () {
    if (isPickerOwner()) {
      drawPicker()
    }
  };
  this.importColor = function () {
    if (!this.valueElement) {
      this.exportColor()
    } else {
      if (jsc.isElementType(this.valueElement, 'input')) {
        if (!this.refine) {
          if (!this.fromString(this.valueElement.value, jsc.leaveValue)) {
            if (this.styleElement) {
              this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
              this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
              this.styleElement.style.color = this.styleElement._jscOrigStyle.color
            }
            this.exportColor(jsc.leaveValue | jsc.leaveStyle)
          }
        } else if (!this.required && /^\s*$/.test(this.valueElement.value)) {
          this.valueElement.value = '';
          if (this.styleElement) {
            this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
            this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
            this.styleElement.style.color = this.styleElement._jscOrigStyle.color
          }
          this.exportColor(jsc.leaveValue | jsc.leaveStyle)
        } else if (this.fromString(this.valueElement.value)) {
        } else {
          this.exportColor()
        }
      } else {
        this.exportColor()
      }
    }
  };
  this.exportColor = function (flags) {
    if (!(flags & jsc.leaveValue) && this.valueElement) {
      var value = this.toString();
      if (this.uppercase) {
        value = value.toUpperCase()
      }
      if (this.hash) {
        value = '#' + value
      }
      if (jsc.isElementType(this.valueElement, 'input')) {
        this.valueElement.value = value
      } else {
        this.valueElement.innerHTML = value
      }
    }
    if (!(flags & jsc.leaveStyle)) {
      if (this.styleElement) {
        this.styleElement.style.backgroundImage = 'none';
        this.styleElement.style.backgroundColor = '#' + this.toString();
        this.styleElement.style.color = this.isLight() ? '#000' : '#FFF'
      }
    }
    if (!(flags & jsc.leavePad) && isPickerOwner()) {
      redrawPad()
    }
    if (!(flags & jsc.leaveSld) && isPickerOwner()) {
      redrawSld()
    }
  };
  this.fromHSV = function (h, s, v, flags) {
    if (h !== null) {
      if (isNaN(h)) {
        return false
      }
      h = Math.max(0, Math.min(360, h))
    }
    if (s !== null) {
      if (isNaN(s)) {
        return false
      }
      s = Math.max(0, Math.min(100, this.maxS, s), this.minS)
    }
    if (v !== null) {
      if (isNaN(v)) {
        return false
      }
      v = Math.max(0, Math.min(100, this.maxV, v), this.minV)
    }
    this.rgb = HSV_RGB(h === null ? this.hsv[0] : this.hsv[0] = h, s === null ? this.hsv[1] : this.hsv[1] = s, v === null ? this.hsv[2] : this.hsv[2] = v);
    this.exportColor(flags)
  };
  this.fromRGB = function (r, g, b, flags) {
    if (r !== null) {
      if (isNaN(r)) {
        return false
      }
      r = Math.max(0, Math.min(255, r))
    }
    if (g !== null) {
      if (isNaN(g)) {
        return false
      }
      g = Math.max(0, Math.min(255, g))
    }
    if (b !== null) {
      if (isNaN(b)) {
        return false
      }
      b = Math.max(0, Math.min(255, b))
    }
    var hsv = RGB_HSV(r === null ? this.rgb[0] : r, g === null ? this.rgb[1] : g, b === null ? this.rgb[2] : b);
    if (hsv[0] !== null) {
      this.hsv[0] = Math.max(0, Math.min(360, hsv[0]))
    }
    if (hsv[2] !== 0) {
      this.hsv[1] = hsv[1] === null ? null : Math.max(0, this.minS, Math.min(100, this.maxS, hsv[1]))
    }
    this.hsv[2] = hsv[2] === null ? null : Math.max(0, this.minV, Math.min(100, this.maxV, hsv[2]));
    var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
    this.rgb[0] = rgb[0];
    this.rgb[1] = rgb[1];
    this.rgb[2] = rgb[2];
    this.exportColor(flags)
  };
  this.fromString = function (str, flags) {
    var m;
    if (m = str.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) {
      if (m[1].length === 6) {
        this.fromRGB(parseInt(m[1].substr(0, 2), 16), parseInt(m[1].substr(2, 2), 16), parseInt(m[1].substr(4, 2), 16), flags)
      } else {
        this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16), parseInt(m[1].charAt(1) + m[1].charAt(1), 16), parseInt(m[1].charAt(2) + m[1].charAt(2), 16), flags)
      }
      return true
    } else if (m = str.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
      var params = m[1].split(',');
      var re = /^\s*(\d*)(\.\d+)?\s*$/;
      var mR,
      mG,
      mB;
      if (params.length >= 3 && (mR = params[0].match(re)) && (mG = params[1].match(re)) && (mB = params[2].match(re))) {
        var r = parseFloat((mR[1] || '0') + (mR[2] || ''));
        var g = parseFloat((mG[1] || '0') + (mG[2] || ''));
        var b = parseFloat((mB[1] || '0') + (mB[2] || ''));
        this.fromRGB(r, g, b, flags);
        return true
      }
    }
    return false
  };
  this.toString = function () {
    return (256 | Math.round(this.rgb[0])).toString(16).substr(1) + (256 | Math.round(this.rgb[1])).toString(16).substr(1) + (256 | Math.round(this.rgb[2])).toString(16).substr(1)
  };
  this.toHEXString = function () {
    return '#' + this.toString().toUpperCase()
  };
  this.toRGBString = function () {
    return 'rgb(' + Math.round(this.rgb[0]) + ',' + Math.round(this.rgb[1]) + ',' + Math.round(this.rgb[2]) + ')'
  };
  this.isLight = function () {
    return 0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] > 255 / 2
  };
  this._processParentElementsInDOM = function () {
    if (this._linkedElementsProcessed) {
      return
    }
    this._linkedElementsProcessed = true;
    var elm = this.targetElement;
    do {
      var currStyle = jsc.getStyle(elm);
      if (currStyle && currStyle.position.toLowerCase() === 'fixed') {
        this.fixed = true
      }
      if (elm !== this.targetElement) {
        if (!elm._jscEventsAttached) {
          jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
          elm._jscEventsAttached = true
        }
      }
    } while ((elm = elm.parentNode) && !jsc.isElementType(elm, 'body'))
  };
  function RGB_HSV(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var n = Math.min(Math.min(r, g), b);
    var v = Math.max(Math.max(r, g), b);
    var m = v - n;
    if (m === 0) {
      return [null,
      0,
      100 * v]
    }
    var h = r === n ? 3 + (b - g) / m : g === n ? 5 + (r - b) / m : 1 + (g - r) / m;
    return [60 * (h === 6 ? 0 : h),
    100 * (m / v),
    100 * v]
  }
  function HSV_RGB(h, s, v) {
    var u = 255 * (v / 100);
    if (h === null) {
      return [u,
      u,
      u]
    }
    h /= 60;
    s /= 100;
    var i = Math.floor(h);
    var f = i % 2 ? h - i : 1 - (h - i);
    var m = u * (1 - s);
    var n = u * (1 - s * f);
    switch (i) {
      case 6:
      case 0:
        return [u,
        n,
        m];
      case 1:
        return [n,
        u,
        m];
      case 2:
        return [m,
        u,
        n];
      case 3:
        return [m,
        n,
        u];
      case 4:
        return [n,
        m,
        u];
      case 5:
        return [u,
        m,
        n];
    }
  }
  function detachPicker() {
    jsc.unsetClass(THIS.targetElement, THIS.activeClass);
    jsc.picker.wrap.parentNode.removeChild(jsc.picker.wrap);
    delete jsc.picker.owner
  }
  function drawPicker() {
    THIS._processParentElementsInDOM();
    if (!jsc.picker) {
      jsc.picker = {
        owner: null,
        wrap: document.createElement('div'),
        box: document.createElement('div'),
        boxS: document.createElement('div'),
        boxB: document.createElement('div'),
        pad: document.createElement('div'),
        padB: document.createElement('div'),
        padM: document.createElement('div'),
        padPal: jsc.createPalette(),
        cross: document.createElement('div'),
        crossBY: document.createElement('div'),
        crossBX: document.createElement('div'),
        crossLY: document.createElement('div'),
        crossLX: document.createElement('div'),
        sld: document.createElement('div'),
        sldB: document.createElement('div'),
        sldM: document.createElement('div'),
        sldGrad: jsc.createSliderGradient(),
        sldPtrS: document.createElement('div'),
        sldPtrIB: document.createElement('div'),
        sldPtrMB: document.createElement('div'),
        sldPtrOB: document.createElement('div'),
        btn: document.createElement('div'),
        btnT: document.createElement('span')
      };
      jsc.picker.pad.appendChild(jsc.picker.padPal.elm);
      jsc.picker.padB.appendChild(jsc.picker.pad);
      jsc.picker.cross.appendChild(jsc.picker.crossBY);
      jsc.picker.cross.appendChild(jsc.picker.crossBX);
      jsc.picker.cross.appendChild(jsc.picker.crossLY);
      jsc.picker.cross.appendChild(jsc.picker.crossLX);
      jsc.picker.padB.appendChild(jsc.picker.cross);
      jsc.picker.box.appendChild(jsc.picker.padB);
      jsc.picker.box.appendChild(jsc.picker.padM);
      jsc.picker.sld.appendChild(jsc.picker.sldGrad.elm);
      jsc.picker.sldB.appendChild(jsc.picker.sld);
      jsc.picker.sldB.appendChild(jsc.picker.sldPtrOB);
      jsc.picker.sldPtrOB.appendChild(jsc.picker.sldPtrMB);
      jsc.picker.sldPtrMB.appendChild(jsc.picker.sldPtrIB);
      jsc.picker.sldPtrIB.appendChild(jsc.picker.sldPtrS);
      jsc.picker.box.appendChild(jsc.picker.sldB);
      jsc.picker.box.appendChild(jsc.picker.sldM);
      jsc.picker.btn.appendChild(jsc.picker.btnT);
      jsc.picker.box.appendChild(jsc.picker.btn);
      jsc.picker.boxB.appendChild(jsc.picker.box);
      jsc.picker.wrap.appendChild(jsc.picker.boxS);
      jsc.picker.wrap.appendChild(jsc.picker.boxB)
    }
    var p = jsc.picker;
    var displaySlider = !!jsc.getSliderComponent(THIS);
    var dims = jsc.getPickerDims(THIS);
    var crossOuterSize = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize;
    var padToSliderPadding = jsc.getPadToSliderPadding(THIS);
    var borderRadius = Math.min(THIS.borderRadius, Math.round(THIS.padding * Math.PI));
    var padCursor = 'crosshair';
    p.wrap.style.clear = 'both';
    p.wrap.style.width = dims[0] + 2 * THIS.borderWidth + 'px';
    p.wrap.style.height = dims[1] + 2 * THIS.borderWidth + 'px';
    p.wrap.style.zIndex = THIS.zIndex;
    p.box.style.width = dims[0] + 'px';
    p.box.style.height = dims[1] + 'px';
    p.boxS.style.position = 'absolute';
    p.boxS.style.left = '0';
    p.boxS.style.top = '0';
    p.boxS.style.width = '100%';
    p.boxS.style.height = '100%';
    jsc.setBorderRadius(p.boxS, borderRadius + 'px');
    p.boxB.style.position = 'relative';
    p.boxB.style.border = THIS.borderWidth + 'px solid';
    p.boxB.style.borderColor = THIS.borderColor;
    p.boxB.style.background = THIS.backgroundColor;
    jsc.setBorderRadius(p.boxB, borderRadius + 'px');
    p.padM.style.background = p.sldM.style.background = '#FFF';
    jsc.setStyle(p.padM, 'opacity', '0');
    jsc.setStyle(p.sldM, 'opacity', '0');
    p.pad.style.position = 'relative';
    p.pad.style.width = THIS.width + 'px';
    p.pad.style.height = THIS.height + 'px';
    p.padPal.draw(THIS.width, THIS.height, jsc.getPadYComponent(THIS));
    p.padB.style.position = 'absolute';
    p.padB.style.left = THIS.padding + 'px';
    p.padB.style.top = THIS.padding + 'px';
    p.padB.style.border = THIS.insetWidth + 'px solid';
    p.padB.style.borderColor = THIS.insetColor;
    p.padM._jscInstance = THIS;
    p.padM._jscControlName = 'pad';
    p.padM.style.position = 'absolute';
    p.padM.style.left = '0';
    p.padM.style.top = '0';
    p.padM.style.width = THIS.padding + 2 * THIS.insetWidth + THIS.width + padToSliderPadding / 2 + 'px';
    p.padM.style.height = dims[1] + 'px';
    p.padM.style.cursor = padCursor;
    p.cross.style.position = 'absolute';
    p.cross.style.left = p.cross.style.top = '0';
    p.cross.style.width = p.cross.style.height = crossOuterSize + 'px';
    p.crossBY.style.position = p.crossBX.style.position = 'absolute';
    p.crossBY.style.background = p.crossBX.style.background = THIS.pointerBorderColor;
    p.crossBY.style.width = p.crossBX.style.height = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 'px';
    p.crossBY.style.height = p.crossBX.style.width = crossOuterSize + 'px';
    p.crossBY.style.left = p.crossBX.style.top = Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) - THIS.pointerBorderWidth + 'px';
    p.crossBY.style.top = p.crossBX.style.left = '0';
    p.crossLY.style.position = p.crossLX.style.position = 'absolute';
    p.crossLY.style.background = p.crossLX.style.background = THIS.pointerColor;
    p.crossLY.style.height = p.crossLX.style.width = crossOuterSize - 2 * THIS.pointerBorderWidth + 'px';
    p.crossLY.style.width = p.crossLX.style.height = THIS.pointerThickness + 'px';
    p.crossLY.style.left = p.crossLX.style.top = Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) + 'px';
    p.crossLY.style.top = p.crossLX.style.left = THIS.pointerBorderWidth + 'px';
    p.sld.style.overflow = 'hidden';
    p.sld.style.width = THIS.sliderSize + 'px';
    p.sld.style.height = THIS.height + 'px';
    p.sldGrad.draw(THIS.sliderSize, THIS.height, '#000', '#000');
    p.sldB.style.display = displaySlider ? 'block' : 'none';
    p.sldB.style.position = 'absolute';
    p.sldB.style.right = THIS.padding + 'px';
    p.sldB.style.top = THIS.padding + 'px';
    p.sldB.style.border = THIS.insetWidth + 'px solid';
    p.sldB.style.borderColor = THIS.insetColor;
    p.sldM._jscInstance = THIS;
    p.sldM._jscControlName = 'sld';
    p.sldM.style.display = displaySlider ? 'block' : 'none';
    p.sldM.style.position = 'absolute';
    p.sldM.style.right = '0';
    p.sldM.style.top = '0';
    p.sldM.style.width = THIS.sliderSize + padToSliderPadding / 2 + THIS.padding + 2 * THIS.insetWidth + 'px';
    p.sldM.style.height = dims[1] + 'px';
    p.sldM.style.cursor = 'default';
    p.sldPtrIB.style.border = p.sldPtrOB.style.border = THIS.pointerBorderWidth + 'px solid ' + THIS.pointerBorderColor;
    p.sldPtrOB.style.position = 'absolute';
    p.sldPtrOB.style.left = - (2 * THIS.pointerBorderWidth + THIS.pointerThickness) + 'px';
    p.sldPtrOB.style.top = '0';
    p.sldPtrMB.style.border = THIS.pointerThickness + 'px solid ' + THIS.pointerColor;
    p.sldPtrS.style.width = THIS.sliderSize + 'px';
    p.sldPtrS.style.height = sliderPtrSpace + 'px';
    function setBtnBorder() {
      var insetColors = THIS.insetColor.split(/\s+/);
      var outsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
      p.btn.style.borderColor = outsetColor
    }
    p.btn.style.display = THIS.closable ? 'block' : 'none';
    p.btn.style.position = 'absolute';
    p.btn.style.left = THIS.padding + 'px';
    p.btn.style.bottom = THIS.padding + 'px';
    p.btn.style.padding = '0 15px';
    p.btn.style.height = THIS.buttonHeight + 'px';
    p.btn.style.border = THIS.insetWidth + 'px solid';
    setBtnBorder();
    p.btn.style.color = THIS.buttonColor;
    p.btn.style.font = '12px sans-serif';
    p.btn.style.textAlign = 'center';
    try {
      p.btn.style.cursor = 'pointer'
    } catch (eOldIE) {
      p.btn.style.cursor = 'hand'
    }
    p.btn.onmousedown = function () {
      THIS.hide()
    };
    p.btnT.style.lineHeight = THIS.buttonHeight + 'px';
    p.btnT.innerHTML = '';
    p.btnT.appendChild(document.createTextNode(THIS.closeText));
    redrawPad();
    redrawSld();
    if (jsc.picker.owner && jsc.picker.owner !== THIS) {
      jsc.unsetClass(jsc.picker.owner.targetElement, THIS.activeClass)
    }
    jsc.picker.owner = THIS;
    if (jsc.isElementType(container, 'body')) {
      jsc.redrawPosition()
    } else {
      jsc._drawPosition(THIS, 0, 0, 'relative', false)
    }
    if (p.wrap.parentNode != container) {
      container.appendChild(p.wrap)
    }
    jsc.setClass(THIS.targetElement, THIS.activeClass)
  }
  function redrawPad() {
    switch (jsc.getPadYComponent(THIS)) {
      case 's':
        var yComponent = 1;
        break;
      case 'v':
        var yComponent = 2;
        break;
    }
    var x = Math.round(THIS.hsv[0] / 360 * (THIS.width - 1));
    var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
    var crossOuterSize = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize;
    var ofs = - Math.floor(crossOuterSize / 2);
    jsc.picker.cross.style.left = x + ofs + 'px';
    jsc.picker.cross.style.top = y + ofs + 'px';
    switch (jsc.getSliderComponent(THIS)) {
      case 's':
        var rgb1 = HSV_RGB(THIS.hsv[0], 100, THIS.hsv[2]);
        var rgb2 = HSV_RGB(THIS.hsv[0], 0, THIS.hsv[2]);
        var color1 = 'rgb(' + Math.round(rgb1[0]) + ',' + Math.round(rgb1[1]) + ',' + Math.round(rgb1[2]) + ')';
        var color2 = 'rgb(' + Math.round(rgb2[0]) + ',' + Math.round(rgb2[1]) + ',' + Math.round(rgb2[2]) + ')';
        jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
        break;
      case 'v':
        var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 100);
        var color1 = 'rgb(' + Math.round(rgb[0]) + ',' + Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ')';
        var color2 = '#000';
        jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
        break;
    }
}
function redrawSld() {
  var sldComponent = jsc.getSliderComponent(THIS);
  if (sldComponent) {
    switch (sldComponent) {
      case 's':
        var yComponent = 1;
        break;
      case 'v':
        var yComponent = 2;
        break;
    }
    var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
    jsc.picker.sldPtrOB.style.top = y - (2 * THIS.pointerBorderWidth + THIS.pointerThickness) - Math.floor(sliderPtrSpace / 2) + 'px'
  }
}
function isPickerOwner() {
  return jsc.picker && jsc.picker.owner === THIS
}
function blurValue() {
  THIS.importColor()
}
if (typeof targetElement === 'string') {
  var id = targetElement;
  var elm = document.getElementById(id);
  if (elm) {
    this.targetElement = elm
  } else {
    jsc.warn('Could not find target element with ID \'' + id + '\'')
  }
} else if (targetElement) {
  this.targetElement = targetElement
} else {
  jsc.warn('Invalid target element: \'' + targetElement + '\'')
}
if (this.targetElement._jscLinkedInstance) {
  jsc.warn('Cannot link jscolor twice to the same element. Skipping.');
  return
}
this.targetElement._jscLinkedInstance = this;
this.valueElement = jsc.fetchElement(this.valueElement);
this.styleElement = jsc.fetchElement(this.styleElement);
var THIS = this;
var container = this.container ? jsc.fetchElement(this.container)  : document.getElementsByTagName('body') [0];
var sliderPtrSpace = 3;
if (jsc.isElementType(this.targetElement, 'button')) {
  if (this.targetElement.onclick) {
    var origCallback = this.targetElement.onclick;
    this.targetElement.onclick = function (evt) {
      origCallback.call(this, evt);
      return false
    }
  } else {
    this.targetElement.onclick = function () {
      return false
    }
  }
}
if (this.valueElement) {
  if (jsc.isElementType(this.valueElement, 'input')) {
    var updateField = function updateField() {
      THIS.fromString(THIS.valueElement.value, jsc.leaveValue);
      jsc.dispatchFineChange(THIS)
    };
    jsc.attachEvent(this.valueElement, 'keyup', updateField);
    jsc.attachEvent(this.valueElement, 'input', updateField);
    jsc.attachEvent(this.valueElement, 'blur', blurValue);
    this.valueElement.setAttribute('autocomplete', 'off')
  }
}
if (this.styleElement) {
  this.styleElement._jscOrigStyle = {
    backgroundImage: this.styleElement.style.backgroundImage,
    backgroundColor: this.styleElement.style.backgroundColor,
    color: this.styleElement.style.color
  }
}
if (this.value) {
  this.fromString(this.value) || this.exportColor()
} else {
  this.importColor()
}
}
};
jsc.jscolor.lookupClass = 'jscolor';
jsc.jscolor.installByClassName = function (className) {
var inputElms = document.getElementsByTagName('input');
var buttonElms = document.getElementsByTagName('button');
jsc.tryInstallOnElements(inputElms, className);
jsc.tryInstallOnElements(buttonElms, className)
};
jsc.register();
window.jscolor = jsc.jscolor
}/**
 * @module CustomEvent polyfill
 */
(function () {
try {
new CustomEvent('IE has CustomEvent, but doesn\'t support constructor')
} catch (e) {
window.CustomEvent = function (event, params) {
var evt;
params = params || {
bubbles: false,
cancelable: false,
detail: undefined
};
evt = document.createEvent('CustomEvent');
evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
return evt
};
CustomEvent.prototype = Object.create(window.Event.prototype)
}
}) ();
/**
 * @module Promise polyfill
 */
var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
return typeof obj
}
 : function (obj) {
return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
};
(function (root) {
var setTimeoutFunc = setTimeout;
function noop() {
}
function bind(fn, thisArg) {
return function () {
fn.apply(thisArg, arguments)
}
}
function Promise(fn) {
if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
if (typeof fn !== 'function') throw new TypeError('not a function');
this._state = 0;
this._handled = false;
this._value = undefined;
this._deferreds = [
];
doResolve(fn, this)
}
function handle(self, deferred) {
while (self._state === 3) {
self = self._value
}
if (self._state === 0) {
self._deferreds.push(deferred);
return
}
self._handled = true;
Promise._immediateFn(function () {
var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
if (cb === null) {
(self._state === 1 ? resolve : reject) (deferred.promise, self._value);
return
}
var ret;
try {
ret = cb(self._value)
} catch (e) {
reject(deferred.promise, e);
return
}
resolve(deferred.promise, ret)
})
}
function resolve(self, newValue) {
try {
if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
var then = newValue.then;
if (newValue instanceof Promise) {
  self._state = 3;
  self._value = newValue;
  finale(self);
  return
} else if (typeof then === 'function') {
  doResolve(bind(then, newValue), self);
  return
}
}
self._state = 1;
self._value = newValue;
finale(self)
} catch (e) {
reject(self, e)
}
}
function reject(self, newValue) {
self._state = 2;
self._value = newValue;
finale(self)
}
function finale(self) {
if (self._state === 2 && self._deferreds.length === 0) {
Promise._immediateFn(function () {
if (!self._handled) {
  Promise._unhandledRejectionFn(self._value)
}
})
}
for (var i = 0, len = self._deferreds.length; i < len; i++) {
handle(self, self._deferreds[i])
}
self._deferreds = null
}
function Handler(onFulfilled, onRejected, promise) {
this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
this.onRejected = typeof onRejected === 'function' ? onRejected : null;
this.promise = promise
}
function doResolve(fn, self) {
var done = false;
try {
fn(function (value) {
if (done) return;
done = true;
resolve(self, value)
}, function (reason) {
if (done) return;
done = true;
reject(self, reason)
})
} catch (ex) {
if (done) return;
done = true;
reject(self, ex)
}
}
Promise.prototype['catch'] = function (onRejected) {
return this.then(null, onRejected)
};
Promise.prototype.then = function (onFulfilled, onRejected) {
var prom = new this.constructor(noop);
handle(this, new Handler(onFulfilled, onRejected, prom));
return prom
};
Promise.all = function (arr) {
var args = Array.prototype.slice.call(arr);
return new Promise(function (resolve, reject) {
if (args.length === 0) return resolve([]);
var remaining = args.length;
function res(i, val) {
try {
  if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
    var then = val.then;
    if (typeof then === 'function') {
      then.call(val, function (val) {
        res(i, val)
      }, reject);
      return
    }
  }
  args[i] = val;
  if (--remaining === 0) {
    resolve(args)
  }
} catch (ex) {
  reject(ex)
}
}
for (var i = 0; i < args.length; i++) {
res(i, args[i])
}
})
};
Promise.resolve = function (value) {
if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
return value
}
return new Promise(function (resolve) {
resolve(value)
})
};
Promise.reject = function (value) {
return new Promise(function (resolve, reject) {
reject(value)
})
};
Promise.race = function (values) {
return new Promise(function (resolve, reject) {
for (var i = 0, len = values.length; i < len; i++) {
values[i].then(resolve, reject)
}
})
};
Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
setImmediate(fn)
}
|| function (fn) {
setTimeoutFunc(fn, 0)
};
Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
if (typeof console !== 'undefined' && console) {
console.warn('Possible Unhandled Promise Rejection:', err)
}
};
Promise._setImmediateFn = function _setImmediateFn(fn) {
Promise._immediateFn = fn
};
Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
Promise._unhandledRejectionFn = fn
};
if (typeof module !== 'undefined' && module.exports) {
module.exports = Promise
} else if (root !== undefined && !root.Promise) {
root.Promise = Promise
}
if (!window.Promise) {
window.Promise = Promise
}
}) (undefined);
/**
 * @module Remove method polyfill
 */
(function (arr) {
arr.forEach(function (item) {
if (item.hasOwnProperty('remove')) {
return
}
Object.defineProperty(item, 'remove', {
configurable: true,
enumerable: true,
writable: true,
value: function remove() {
this.parentNode.removeChild(this)
}
})
})
}) ([Element.prototype,
CharacterData.prototype,
DocumentType.prototype]);
/**
 * @module       Theme Switcher
 * @author       Bazaev Yuri (ATOM)
 * @license      CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)
 * @version      0.3.0
 * @description  Themes switch and dynamic color change on the site
 */
var _slicedToArray = function () {
function sliceIterator(arr, i) {
var _arr = [
];
var _n = true;
var _d = false;
var _e = undefined;
try {
for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
_arr.push(_s.value);
if (i && _arr.length === i) break
}
} catch (err) {
_d = true;
_e = err
} finally {
try {
if (!_n && _i['return']) _i['return']()
} finally {
if (_d) throw _e
}
}
return _arr
}
return function (arr, i) {
if (Array.isArray(arr)) {
return arr
} else if (Symbol.iterator in Object(arr)) {
return sliceIterator(arr, i)
} else {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
}
}();
var _createClass = function () {
function defineProperties(target, props) {
for (var i = 0; i < props.length; i++) {
var descriptor = props[i];
descriptor.enumerable = descriptor.enumerable || false;
descriptor.configurable = true;
if ('value' in descriptor) descriptor.writable = true;
Object.defineProperty(target, descriptor.key, descriptor)
}
}
return function (Constructor, protoProps, staticProps) {
if (protoProps) defineProperties(Constructor.prototype, protoProps);
if (staticProps) defineProperties(Constructor, staticProps);
return Constructor
}
}();
function _classCallCheck(instance, Constructor) {
if (!(instance instanceof Constructor)) {
throw new TypeError('Cannot call a class as a function')
}
}
function themeSwitcherInit(options) {
var Switcher = function () {
function Switcher(options) {
_classCallCheck(this, Switcher);
var DEFAULTS = {
themes: {
},
themesNode: document.documentElement,
variablesFallback: false,
cookie: true,
active: null,
initial: null,
ids: {
  stylesLink: 'main-styles-link',
  stylesNode: 'main-styles-node'
},
classes: {
  active: 'active-theme'
},
attributes: {
  theme: 'data-theme-name',
  color: 'data-color-picker',
  reset: 'data-theme-reset'
},
selectors: {
  theme: '[data-theme-name]',
  color: '[data-color-picker]',
  reset: '[data-theme-reset]'
},
storage: {
  variables: {
  }
}
};
options = Switcher.mergeData(DEFAULTS, options);
for (var key in options) {
this[key] = options[key]
}
this.themeInitial();
this.themeActive();
this.initColors();
this.setTheme();
var switcher = this,
colorPicker = document.querySelectorAll(this.selectors.color),
themeButton = document.querySelectorAll(this.selectors.theme),
resetButton = document.querySelectorAll(this.selectors.reset);
for (var i = 0; i < colorPicker.length; i++) {
colorPicker[i].addEventListener('change', function () {
  switcher.setColor(this.name, this.value)
})
}
for (var _i = 0; _i < themeButton.length; _i++) {
themeButton[_i].addEventListener('click', function () {
  switcher.setTheme(this.getAttribute(switcher.attributes.theme));
  switcher.applyColors(switcher.active)
})
}
for (var _i2 = 0; _i2 < resetButton.length; _i2++) {
resetButton[_i2].addEventListener('click', function () {
  switcher.reset()
})
}
}
_createClass(Switcher, [
{
key: 'getCookie',
value: function getCookie(name) {
  if (this.cookie) {
    var matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1])  : undefined
  }
}
},
{
key: 'setCookie',
value: function setCookie(name, value) {
  if (this.cookie) {
    value = encodeURIComponent(value);
    document.cookie = name + '=' + value + '; path=/;'
  }
}
},
{
key: 'throwEventSwitching',
value: function throwEventSwitching() {
  var event = new CustomEvent('theme-switching', {
    cancelable: true
  });
  event.switcher = this;
  this.themesNode.dispatchEvent(event)
}
},
{
key: 'throwEventSwitched',
value: function throwEventSwitched() {
  var event = new CustomEvent('theme-switched', {
    cancelable: true
  });
  event.switcher = this;
  if (this.themesNode.dispatchEvent(event)) {
    this.switchThemeButtons()
  }
}
},
{
key: 'throwEventColorChange',
value: function throwEventColorChange(variable, value) {
  var event = new CustomEvent('theme-color-change', {
    cancelable: true
  });
  event.switcher = this;
  event.variable = variable;
  event.value = value;
  this.themesNode.dispatchEvent(event)
}
},
{
key: 'themeInitial',
value: function themeInitial() {
  var styles = document.getElementById(this.ids.stylesLink).getAttribute('href');
  for (var key in this.themes) {
    if (this.themes[key].styles === styles) {
      this.initial = key;
      break
    }
  }
}
},
{
key: 'stylesInline',
value: function stylesInline(string) {
  var stylesLink = document.getElementById(this.ids.stylesLink),
  stylesNode = document.getElementById(this.ids.stylesNode);
  if (!stylesNode) {
    var tmp = document.createElement('style');
    tmp.id = this.ids.stylesNode;
    stylesNode = document.head.appendChild(tmp)
  }
  this.newStyles = Switcher.removeSpaces(string);
  stylesNode.innerHTML = this.colorReplace(this.newStyles);
  if (stylesLink) stylesLink.remove()
}
},
{
key: 'stylesLink',
value: function stylesLink(href) {
  var stylesLink = document.getElementById(this.ids.stylesLink),
  stylesNode = document.getElementById(this.ids.stylesNode);
  if (stylesLink) stylesLink.id = this.ids.stylesLink + '-removing';
  var tmp = document.createElement('link');
  tmp.id = this.ids.stylesLink;
  tmp.rel = 'stylesheet';
  tmp.href = href;
  var stylesLinkNew = document.head.appendChild(tmp);
  return new Promise(function (resolve, reject) {
    stylesLinkNew.onload = function () {
      if (stylesNode) stylesNode.remove();
      if (stylesLink) stylesLink.remove();
      resolve()
    }
  })
}
},
{
key: 'themeActive',
value: function themeActive() {
  var cookie = this.getCookie('themeSwitcher-active');
  if (cookie && this.themes[cookie]) this.active = cookie;
   else this.active = this.initial
}
},
{
key: 'setTheme',
value: function setTheme(targetTheme) {
  var allowSwitching = false;
  if (!targetTheme) {
    allowSwitching = true
  } else if (targetTheme !== undefined && this.themes[targetTheme] && this.active !== targetTheme) {
    this.active = targetTheme;
    allowSwitching = true
  }
  if (allowSwitching) {
    this.throwEventSwitching();
    var _switcher = this;
    if (this.themes[this.active].variables) {
      Switcher.fileContent(this.themes[this.active].styles).then(function (response) {
        _switcher.stylesInline(response);
        _switcher.setCookie('themeSwitcher-active', _switcher.active);
        _switcher.throwEventSwitched()
      })
    } else {
      this.stylesLink(this.themes[this.active].styles).then(function () {
        _switcher.setCookie('themeSwitcher-active', _switcher.active);
        _switcher.throwEventSwitched()
      })
    }
  }
}
},
{
key: 'colorReplace',
value: function colorReplace(data) {
  var variables = this.themes[this.active].variables;
  if (!this.variablesFallback) {
    for (var key in variables) {
      var _Switcher$hexToRGB = Switcher.hexToRGB(variables[key]),
      _Switcher$hexToRGB2 = _slicedToArray(_Switcher$hexToRGB, 3),
      R = _Switcher$hexToRGB2[0],
      G = _Switcher$hexToRGB2[1],
      B = _Switcher$hexToRGB2[2];
      data = data.replace(new RegExp(variables[key], 'gi'), 'var(' + key + ',' + variables[key] + ')').replace(new RegExp('rgb\\(\\s*?' + R + ',\\s*?' + G + ',\\s*?' + B + '\\)', 'gi'), 'rgb(var(' + key + '-r,' + R + '),var(' + key + '-g,' + G + '),var(' + key + '-b,' + B + '))').replace(new RegExp('rgba\\(\\s*?' + R + ',\\s*?' + G + ',\\s*?' + B + ',\\s*?(.*?)\\)', 'gi'), 'rgba(var(' + key + '-r,' + R + '),var(' + key + '-g,' + G + '),var(' + key + '-b,' + B + '),$1)')
    }
  } else {
    for (var _key in this.storage.variables) {
      var _Switcher$hexToRGB3 = Switcher.hexToRGB(variables[_key]),
      _Switcher$hexToRGB4 = _slicedToArray(_Switcher$hexToRGB3, 3),
      oldR = _Switcher$hexToRGB4[0],
      oldG = _Switcher$hexToRGB4[1],
      oldB = _Switcher$hexToRGB4[2],
      _Switcher$hexToRGB5 = Switcher.hexToRGB(this.storage.variables[_key]),
      _Switcher$hexToRGB6 = _slicedToArray(_Switcher$hexToRGB5, 3),
      newR = _Switcher$hexToRGB6[0],
      newG = _Switcher$hexToRGB6[1],
      newB = _Switcher$hexToRGB6[2];
      data = data.replace(new RegExp(variables[_key], 'gi'), this.storage.variables[_key]).replace(new RegExp('rgb\\(\\s*?' + oldR + ',\\s*?' + oldG + ',\\s*?' + oldB + '\\)', 'gi'), 'rgb(' + newR + ',' + newG + ',' + newB + ')').replace(new RegExp('rgba\\(\\s*?' + oldR + ',\\s*?' + oldG + ',\\s*?' + oldB + ',\\s*?(.*?)\\)', 'gi'), 'rgba(' + newR + ',' + newG + ',' + newB + ',$1)')
    }
  }
  return data
}
},
{
key: 'setColor',
value: function setColor(variable, value) {
  var _Switcher$hexToRGB7 = Switcher.hexToRGB(value),
  _Switcher$hexToRGB8 = _slicedToArray(_Switcher$hexToRGB7, 3),
  red = _Switcher$hexToRGB8[0],
  green = _Switcher$hexToRGB8[1],
  blue = _Switcher$hexToRGB8[2];
  this.themesNode.style.setProperty(variable, value);
  this.themesNode.style.setProperty(variable + '-r', red);
  this.themesNode.style.setProperty(variable + '-g', green);
  this.themesNode.style.setProperty(variable + '-b', blue);
  this.setCookie('themeSwitcher' + variable, value);
  this.throwEventColorChange(variable, value)
}
},
{
key: 'initColors',
value: function initColors() {
  var variables = this.themes[this.active].variables;
  if (variables) {
    for (var key in variables) {
      var _colorPicker = document.querySelector(this.selectors.color + '[name="' + key + '"]'),
      valueCookie = this.getCookie('themeSwitcher' + key),
      valueTheme = variables[key];
      if (valueCookie) {
        _colorPicker.value = valueCookie;
        this.setColor(key, valueCookie)
      } else if (valueTheme) {
        _colorPicker.value = valueTheme;
        this.setColor(key, valueTheme)
      }
    }
  }
}
},
{
key: 'applyColors',
value: function applyColors(theme) {
  var variables = this.themes[theme].variables;
  if (variables) {
    for (var key in variables) {
      var _colorPicker2 = document.querySelector(this.selectors.color + '[name="' + key + '"]');
      _colorPicker2.value = variables[key];
      this.setColor(key, variables[key])
    }
  }
}
},
{
key: 'reset',
value: function reset() {
  this.setTheme(this.initial);
  this.applyColors(this.initial)
}
},
{
key: 'switchThemeButtons',
value: function switchThemeButtons() {
  var disable = document.querySelectorAll(this.selectors.theme),
  enable = document.querySelectorAll(this.selectors.theme + '[' + this.attributes.theme + '="' + this.active + '"]');
  for (var i = 0; i < disable.length; i++) {
    disable[i].classList.remove(this.classes.active)
  }
  for (var _i3 = 0; _i3 < enable.length; _i3++) {
    enable[_i3].classList.add(this.classes.active)
  }
}
}
], [
{
key: 'realType',
value: function realType(data) {
  return Object.prototype.toString.call(data).match(/\[object (.*)\]/) [1].toLowerCase()
}
},
{
key: 'mergeData',
value: function mergeData(dataIni, dataNew, allowTypeChange) {
  var mergedData = dataIni,
  typeNew = Switcher.realType(dataNew),
  typeIni = Switcher.realType(dataIni);
  if (typeNew === typeIni) {
    switch (typeNew) {
      case 'object':
        for (var key in dataNew) {
          if (key in dataIni) {
            mergedData[key] = Switcher.mergeData(dataIni[key], dataNew[key], allowTypeChange)
          } else {
            mergedData[key] = dataNew[key]
          }
        }
        break;
      default:
        mergedData = dataNew;
        break;
    }
  } else if (allowTypeChange) {
    mergedData = dataNew
  }
  return mergedData
}
},
{
key: 'hexToRGB',
value: function hexToRGB(hex) {
  var tmp = hex.match(/^#(([a-f0-9]{3}){1,2})$/i);
  return tmp ? tmp[1].length < 6 ? tmp[1].split('').map(function (item) {
    return parseInt(item += item, 16)
  })  : tmp[1].match(/[a-f0-9]{2}/gi).map(function (item) {
    return parseInt(item, 16)
  })  : undefined
}
},
{
key: 'removeSpaces',
value: function removeSpaces(string) {
  return string.replace(/\s/g, ' ').replace(/( ){2,}/g, ' ')
}
},
{
key: 'fileContent',
value: function fileContent(path) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', path, true);
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response)
      } else {
        throw new Error(this.statusText)
      }
    };
    xhr.onerror = function () {
      throw new Error('Network Error')
    };
    xhr.send(null)
  })
}
}
]); return Switcher
}();
return new Switcher(options)
};
/**
 * @module       jQuery page transition
 * @author       Roman Kravchuk (JeremyLuis)
 * @license      MIT
 * @version      1.1.3
 * @description  Smooth transition between pages
 */
function pageTransition(t) {
t = t || {
},
t.target = t.target || null,
t.delay = t.delay || 500,
t.duration = t.duration || 1000,
t.classIn = t.classIn || null,
t.classOut = t.classOut || null,
t.classActive = t.classActive || null,
t.onReady = t.onReady || null,
t.onTransitionStart = t.onTransitionStart || null,
t.onTransitionEnd = t.onTransitionEnd || null,
t.conditions = t.conditions || function (t, n) {
return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(n)
},
t.target && (setTimeout(function () {
t.onReady && t.onReady(t),
t.classIn && t.target.classList.add(t.classIn),
t.classActive && t.target.classList.add(t.classActive),
t.duration && (t.target.style.animationDuration = t.duration + 'ms'),
t.target.addEventListener('animationstart', function () {
setTimeout(function () {
  t.classIn && t.target.classList.remove(t.classIn),
  t.onTransitionEnd && t.onTransitionEnd(t)
}, t.duration)
})
}, t.delay), $('a').click(function (n) {
var a = n.currentTarget.getAttribute('href');
if (t.conditions(n, a)) {
var s = this.href;
n.preventDefault(),
t.onTransitionStart && t.onTransitionStart(t),
t.classIn && t.target.classList.remove(t.classIn),
t.classOut && t.target.classList.add(t.classOut),
setTimeout(function () {
  window.location = s,
  /firefox/i.test(navigator.userAgent) && setTimeout(function () {
    t.onReady && t.onReady(t),
    t.classOut && t.target.classList.remove(t.classOut)
  }, 1000),
  /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && (t.onReady && t.onReady(t), t.classOut && t.target.classList.remove(t.classOut))
}, t.duration)
}
}))
}/**
 * @module       typed.js 
 * @description  A JavaScript Typing Animation Library
 * @author       Matt Boldt <me@mattboldt.com>
 * @version      2.0.6
 * @link         https://github.com/mattboldt/typed.js
 * @license      MIT
 */
(function (t, e) {
'object' == typeof exports && 'object' == typeof module ? module.exports = e()  : 'function' == typeof define && define.amd ? define([], e)  : 'object' == typeof exports ? exports.Typed = e()  : t.Typed = e()
}) (this, function () {
return function (t) {
function e(n) {
if (s[n]) return s[n].exports;
var i = s[n] = {
  exports: {
  },
  id: n,
  loaded: !1
};
return t[n].call(i.exports, i, i.exports, e),
i.loaded = !0,
i.exports
}
var s = {
};
return e.m = t,
e.c = s,
e.p = '',
e(0)
}([function (t, e, s) {
'use strict';
function n(t, e) {
if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
Object.defineProperty(e, '__esModule', {
value: !0
});
var i = function () {
function t(t, e) {
  for (var s = 0; s < e.length; s++) {
    var n = e[s];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(t, n.key, n)
  }
}
return function (e, s, n) {
  return s && t(e.prototype, s),
  n && t(e, n),
  e
}
}(),
r = s(1),
o = s(3),
a = function () {
function t(e, s) {
  n(this, t),
  r.initializer.load(this, s, e),
  this.begin()
}
return i(t, [
  {
    key: 'toggle',
    value: function () {
      this.pause.status ? this.start()  : this.stop()
    }
  },
  {
    key: 'stop',
    value: function () {
      this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
    }
  },
  {
    key: 'start',
    value: function () {
      this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos)  : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
    }
  },
  {
    key: 'destroy',
    value: function () {
      this.reset(!1),
      this.options.onDestroy(this)
    }
  },
  {
    key: 'reset',
    value: function () {
      var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
      clearInterval(this.timeout),
      this.replaceText(''),
      this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null),
      this.strPos = 0,
      this.arrayPos = 0,
      this.curLoop = 0,
      t && (this.insertCursor(), this.options.onReset(this), this.begin())
    }
  },
  {
    key: 'begin',
    value: function () {
      var t = this;
      this.typingComplete = !1,
      this.shuffleStringsIfNeeded(this),
      this.insertCursor(),
      this.bindInputFocusEvents && this.bindFocusEvents(),
      this.timeout = setTimeout(function () {
        t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length)  : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
      }, this.startDelay)
    }
  },
  {
    key: 'typewrite',
    value: function (t, e) {
      var s = this;
      this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
      var n = this.humanizer(this.typeSpeed),
      i = 1;
      return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0)  : void (this.timeout = setTimeout(function () {
        e = o.htmlParser.typeHtmlChars(t, e, s);
        var n = 0,
        r = t.substr(e);
        if ('^' === r.charAt(0) && /^\^\d+/.test(r)) {
          var a = 1;
          r = /\d+/.exec(r) [0],
          a += r.length,
          n = parseInt(r),
          s.temporaryPause = !0,
          s.options.onTypingPaused(s.arrayPos, s),
          t = t.substring(0, e) + t.substring(e + a),
          s.toggleBlinking(!0)
        }
        if ('`' === r.charAt(0)) {
          for (; '`' !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length)); );
          var u = t.substring(0, e),
          l = t.substring(u.length + 1, e + i),
          c = t.substring(e + i + 1);
          t = u + l + c,
          i--
        }
        s.timeout = setTimeout(function () {
          s.toggleBlinking(!1),
          e === t.length ? s.doneTyping(t, e)  : s.keepTyping(t, e, i),
          s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
        }, n)
      }, n))
    }
  },
  {
    key: 'keepTyping',
    value: function (t, e, s) {
      0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)),
      e += s;
      var n = t.substr(0, e);
      this.replaceText(n),
      this.typewrite(t, e)
    }
  },
  {
    key: 'doneTyping',
    value: function (t, e) {
      var s = this;
      this.options.onStringTyped(this.arrayPos, this),
      this.toggleBlinking(!0),
      this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
        s.backspace(t, e)
      }, this.backDelay))
    }
  },
  {
    key: 'backspace',
    value: function (t, e) {
      var s = this;
      if (this.pause.status === !0) return void this.setPauseStatus(t, e, !0);
      if (this.fadeOut) return this.initFadeOut();
      this.toggleBlinking(!1);
      var n = this.humanizer(this.backSpeed);
      this.timeout = setTimeout(function () {
        e = o.htmlParser.backSpaceHtmlChars(t, e, s);
        var n = t.substr(0, e);
        if (s.replaceText(n), s.smartBackspace) {
          var i = s.strings[s.arrayPos + 1];
          i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
        }
        e > s.stopNum ? (e--, s.backspace(t, e))  : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin())  : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
      }, n)
    }
  },
  {
    key: 'complete',
    value: function () {
      this.options.onComplete(this),
      this.loop ? this.curLoop++ : this.typingComplete = !0
    }
  },
  {
    key: 'setPauseStatus',
    value: function (t, e, s) {
      this.pause.typewrite = s,
      this.pause.curString = t,
      this.pause.curStrPos = e
    }
  },
  {
    key: 'toggleBlinking',
    value: function (t) {
      if (this.cursor && !this.pause.status && this.cursorBlinking !== t) {
        this.cursorBlinking = t;
        var e = t ? 'infinite' : 0;
        this.cursor.style.animationIterationCount = e
      }
    }
  },
  {
    key: 'humanizer',
    value: function (t) {
      return Math.round(Math.random() * t / 2) + t
    }
  },
  {
    key: 'shuffleStringsIfNeeded',
    value: function () {
      this.shuffle && (this.sequence = this.sequence.sort(function () {
        return Math.random() - 0.5
      }))
    }
  },
  {
    key: 'initFadeOut',
    value: function () {
      var t = this;
      return this.el.className += ' ' + this.fadeOutClass,
      this.cursor && (this.cursor.className += ' ' + this.fadeOutClass),
      setTimeout(function () {
        t.arrayPos++,
        t.replaceText(''),
        t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)  : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
      }, this.fadeOutDelay)
    }
  },
  {
    key: 'replaceText',
    value: function (t) {
      this.attr ? this.el.setAttribute(this.attr, t)  : this.isInput ? this.el.value = t : 'html' === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
    }
  },
  {
    key: 'bindFocusEvents',
    value: function () {
      var t = this;
      this.isInput && (this.el.addEventListener('focus', function (e) {
        t.stop()
      }), this.el.addEventListener('blur', function (e) {
        t.el.value && 0 !== t.el.value.length || t.start()
      }))
    }
  },
  {
    key: 'insertCursor',
    value: function () {
      this.showCursor && (this.cursor || (this.cursor = document.createElement('span'), this.cursor.className = 'typed-cursor', this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
    }
  }
]),
t
}();
e['default'] = a,
t.exports = e['default']
},
function (t, e, s) {
'use strict';
function n(t) {
return t && t.__esModule ? t : {
  'default': t
}
}
function i(t, e) {
if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
Object.defineProperty(e, '__esModule', {
value: !0
});
var r = Object.assign || function (t) {
for (var e = 1; e < arguments.length; e++) {
  var s = arguments[e];
  for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
}
return t
},
o = function () {
function t(t, e) {
  for (var s = 0; s < e.length; s++) {
    var n = e[s];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(t, n.key, n)
  }
}
return function (e, s, n) {
  return s && t(e.prototype, s),
  n && t(e, n),
  e
}
}(),
a = s(2),
u = n(a),
l = function () {
function t() {
  i(this, t)
}
return o(t, [
  {
    key: 'load',
    value: function (t, e, s) {
      if ('string' == typeof s ? t.el = document.querySelector(s)  : t.el = s, t.options = r({
      }, u['default'], e), t.isInput = 'input' === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr)  : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
        return t.trim()
      }), 'string' == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement)  : t.stringsElement = t.options.stringsElement, t.stringsElement) {
        t.strings = [
        ],
        t.stringsElement.style.display = 'none';
        var n = Array.prototype.slice.apply(t.stringsElement.children),
        i = n.length;
        if (i) for (var o = 0; o < i; o += 1) {
          var a = n[o];
          t.strings.push(a.innerHTML.trim())
        }
      }
      t.strPos = 0,
      t.arrayPos = 0,
      t.stopNum = 0,
      t.loop = t.options.loop,
      t.loopCount = t.options.loopCount,
      t.curLoop = 0,
      t.shuffle = t.options.shuffle,
      t.sequence = [
      ],
      t.pause = {
        status: !1,
        typewrite: !0,
        curString: '',
        curStrPos: 0
      },
      t.typingComplete = !1;
      for (var o in t.strings) t.sequence[o] = o;
      t.currentElContent = this.getCurrentElContent(t),
      t.autoInsertCss = t.options.autoInsertCss,
      this.appendAnimationCss(t)
    }
  },
  {
    key: 'getCurrentElContent',
    value: function (t) {
      var e = '';
      return e = t.attr ? t.el.getAttribute(t.attr)  : t.isInput ? t.el.value : 'html' === t.contentType ? t.el.innerHTML : t.el.textContent
    }
  },
  {
    key: 'appendAnimationCss',
    value: function (t) {
      if (t.autoInsertCss && t.showCursor && t.fadeOut) {
        var e = document.createElement('style');
        e.type = 'text/css';
        var s = '';
        t.showCursor && (s += '\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      '),
        t.fadeOut && (s += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      '),
        0 !== e.length && (e.innerHTML = s, document.body.appendChild(e))
      }
    }
  }
]),
t
}();
e['default'] = l;
var c = new l;
e.initializer = c
},
function (t, e) {
'use strict';
Object.defineProperty(e, '__esModule', {
value: !0
});
var s = {
strings: [
  'These are the default values...',
  'You know what you should do?',
  'Use your own!',
  'Have a great day!'
],
stringsElement: null,
typeSpeed: 0,
startDelay: 0,
backSpeed: 0,
smartBackspace: !0,
shuffle: !1,
backDelay: 700,
fadeOut: !1,
fadeOutClass: 'typed-fade-out',
fadeOutDelay: 500,
loop: !1,
loopCount: 1 / 0,
showCursor: !0,
cursorChar: '|',
autoInsertCss: !0,
attr: null,
bindInputFocusEvents: !1,
contentType: 'html',
onComplete: function (t) {
},
preStringTyped: function (t, e) {
},
onStringTyped: function (t, e) {
},
onLastStringBackspaced: function (t) {
},
onTypingPaused: function (t, e) {
},
onTypingResumed: function (t, e) {
},
onReset: function (t) {
},
onStop: function (t, e) {
},
onStart: function (t, e) {
},
onDestroy: function (t) {
}
};
e['default'] = s,
t.exports = e['default']
},
function (t, e) {
'use strict';
function s(t, e) {
if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
Object.defineProperty(e, '__esModule', {
value: !0
});
var n = function () {
function t(t, e) {
  for (var s = 0; s < e.length; s++) {
    var n = e[s];
    n.enumerable = n.enumerable || !1,
    n.configurable = !0,
    'value' in n && (n.writable = !0),
    Object.defineProperty(t, n.key, n)
  }
}
return function (e, s, n) {
  return s && t(e.prototype, s),
  n && t(e, n),
  e
}
}(),
i = function () {
function t() {
  s(this, t)
}
return n(t, [
  {
    key: 'typeHtmlChars',
    value: function (t, e, s) {
      if ('html' !== s.contentType) return e;
      var n = t.substr(e).charAt(0);
      if ('<' === n || '&' === n) {
        var i = '';
        for (i = '<' === n ? '>' : ';'; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length)); );
        e++
      }
      return e
    }
  },
  {
    key: 'backSpaceHtmlChars',
    value: function (t, e, s) {
      if ('html' !== s.contentType) return e;
      var n = t.substr(e).charAt(0);
      if ('>' === n || ';' === n) {
        var i = '';
        for (i = '>' === n ? '<' : '&'; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0)); );
        e--
      }
      return e
    }
  }
]),
t
}();
e['default'] = i;
var r = new i;
e.htmlParser = r
}
])
});
/**
 * @module       Parallax.js
 * @author       Matthew Wagerfield - @wagerfield
 * @license      MIT
 */
!function (a, b, c) {
'use strict';
function g(a, b) {
this.element = a,
this.layers = a.getElementsByClassName('layer');
var c = {
calibrateX: this.data(this.element, 'calibrate-x'),
calibrateY: this.data(this.element, 'calibrate-y'),
invertX: this.data(this.element, 'invert-x'),
invertY: this.data(this.element, 'invert-y'),
limitX: this.data(this.element, 'limit-x'),
limitY: this.data(this.element, 'limit-y'),
scalarX: this.data(this.element, 'scalar-x'),
scalarY: this.data(this.element, 'scalar-y'),
frictionX: this.data(this.element, 'friction-x'),
frictionY: this.data(this.element, 'friction-y'),
originX: this.data(this.element, 'origin-x'),
originY: this.data(this.element, 'origin-y')
};
for (var d in c) null === c[d] && delete c[d];
this.extend(this, f, b, c),
this.calibrationTimer = null,
this.calibrationFlag = !0,
this.enabled = !1,
this.depths = [
],
this.raf = null,
this.bounds = null,
this.ex = 0,
this.ey = 0,
this.ew = 0,
this.eh = 0,
this.ecx = 0,
this.ecy = 0,
this.erx = 0,
this.ery = 0,
this.cx = 0,
this.cy = 0,
this.ix = 0,
this.iy = 0,
this.mx = 0,
this.my = 0,
this.vx = 0,
this.vy = 0,
this.onMouseMove = this.onMouseMove.bind(this),
this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
this.onOrientationTimer = this.onOrientationTimer.bind(this),
this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
this.onAnimationFrame = this.onAnimationFrame.bind(this),
this.onWindowResize = this.onWindowResize.bind(this),
this.initialise()
}
var d = 'Parallax',
e = 30,
f = {
relativeInput: !1,
clipRelativeInput: !1,
calibrationThreshold: 100,
calibrationDelay: 500,
supportDelay: 500,
calibrateX: !1,
calibrateY: !0,
invertX: !0,
invertY: !0,
limitX: !1,
limitY: !1,
scalarX: 10,
scalarY: 10,
frictionX: 0.1,
frictionY: 0.1,
originX: 0.5,
originY: 0.5
};
g.prototype.extend = function () {
if (arguments.length > 1) for (var a = arguments[0], b = 1, c = arguments.length; b < c; b++) {
var d = arguments[b];
for (var e in d) a[e] = d[e]
}
},
g.prototype.data = function (a, b) {
return this.deserialize(a.getAttribute('data-' + b))
},
g.prototype.deserialize = function (a) {
return 'true' === a || 'false' !== a && ('null' === a ? null : !isNaN(parseFloat(a)) && isFinite(a) ? parseFloat(a)  : a)
},
g.prototype.camelCase = function (a) {
return a.replace(/-+(.)?/g, function (a, b) {
return b ? b.toUpperCase()  : ''
})
},
g.prototype.transformSupport = function (d) {
for (var e = b.createElement('div'), f = !1, g = null, h = !1, i = null, j = null, k = 0, l = this.vendors.length; k < l; k++) if (null !== this.vendors[k] ? (i = this.vendors[k][0] + 'transform', j = this.vendors[k][1] + 'Transform')  : (i = 'transform', j = 'transform'), e.style[j] !== c) {
f = !0;
break
}
switch (d) {
case '2D':
  h = f;
  break;
case '3D':
  if (f) {
    var m = b.body || b.createElement('body'),
    n = b.documentElement,
    o = n.style.overflow;
    b.body || (n.style.overflow = 'hidden', n.appendChild(m), m.style.overflow = 'hidden', m.style.background = ''),
    m.appendChild(e),
    e.style[j] = 'translate3d(1px,1px,1px)',
    g = a.getComputedStyle(e).getPropertyValue(i),
    h = g !== c && g.length > 0 && 'none' !== g,
    n.style.overflow = o,
    m.removeChild(e)
  }
}
return h
},
g.prototype.ww = null,
g.prototype.wh = null,
g.prototype.wcx = null,
g.prototype.wcy = null,
g.prototype.wrx = null,
g.prototype.wry = null,
g.prototype.portrait = null,
g.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
g.prototype.vendors = [
null,
[
'-webkit-',
'webkit'
],
[
'-moz-',
'Moz'
],
[
'-o-',
'O'
],
[
'-ms-',
'ms'
]
],
g.prototype.motionSupport = !!a.DeviceMotionEvent,
g.prototype.orientationSupport = !!a.DeviceOrientationEvent,
g.prototype.orientationStatus = 0,
g.prototype.propertyCache = {
},
g.prototype.initialise = function () {
g.prototype.transform2DSupport === c && (g.prototype.transform2DSupport = g.prototype.transformSupport('2D'), g.prototype.transform3DSupport = g.prototype.transformSupport('3D')),
this.transform3DSupport && this.accelerate(this.element);
var b = a.getComputedStyle(this.element);
'static' === b.getPropertyValue('position') && (this.element.style.position = 'relative'),
this.updateLayers(),
this.updateDimensions(),
this.enable(),
this.queueCalibration(this.calibrationDelay)
},
g.prototype.updateLayers = function () {
this.layers = this.element.getElementsByClassName('layer'),
this.depths = [
];
for (var a = 0, b = this.layers.length; a < b; a++) {
var c = this.layers[a];
this.transform3DSupport && this.accelerate(c),
c.style.position = a ? 'absolute' : 'relative',
c.style.display = 'block',
c.style.left = 0,
c.style.top = 0,
this.depths.push(this.data(c, 'depth') || 0)
}
},
g.prototype.updateDimensions = function () {
this.ww = a.innerWidth,
this.wh = a.innerHeight,
this.wcx = this.ww * this.originX,
this.wcy = this.wh * this.originY,
this.wrx = Math.max(this.wcx, this.ww - this.wcx),
this.wry = Math.max(this.wcy, this.wh - this.wcy)
},
g.prototype.updateBounds = function () {
this.bounds = this.element.getBoundingClientRect(),
this.ex = this.bounds.left,
this.ey = this.bounds.top,
this.ew = this.bounds.width,
this.eh = this.bounds.height,
this.ecx = this.ew * this.originX,
this.ecy = this.eh * this.originY,
this.erx = Math.max(this.ecx, this.ew - this.ecx),
this.ery = Math.max(this.ecy, this.eh - this.ecy)
},
g.prototype.queueCalibration = function (a) {
clearTimeout(this.calibrationTimer),
this.calibrationTimer = setTimeout(this.onCalibrationTimer, a)
},
g.prototype.enable = function () {
this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, a.addEventListener('deviceorientation', this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay))  : (this.cx = 0, this.cy = 0, this.portrait = !1, a.addEventListener('mousemove', this.onMouseMove)), a.addEventListener('resize', this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
},
g.prototype.disable = function () {
this.enabled && (this.enabled = !1, this.orientationSupport ? a.removeEventListener('deviceorientation', this.onDeviceOrientation)  : a.removeEventListener('mousemove', this.onMouseMove), a.removeEventListener('resize', this.onWindowResize), cancelAnimationFrame(this.raf))
},
g.prototype.calibrate = function (a, b) {
this.calibrateX = a === c ? this.calibrateX : a,
this.calibrateY = b === c ? this.calibrateY : b
},
g.prototype.invert = function (a, b) {
this.invertX = a === c ? this.invertX : a,
this.invertY = b === c ? this.invertY : b
},
g.prototype.friction = function (a, b) {
this.frictionX = a === c ? this.frictionX : a,
this.frictionY = b === c ? this.frictionY : b
},
g.prototype.scalar = function (a, b) {
this.scalarX = a === c ? this.scalarX : a,
this.scalarY = b === c ? this.scalarY : b
},
g.prototype.limit = function (a, b) {
this.limitX = a === c ? this.limitX : a,
this.limitY = b === c ? this.limitY : b
},
g.prototype.origin = function (a, b) {
this.originX = a === c ? this.originX : a,
this.originY = b === c ? this.originY : b
},
g.prototype.clamp = function (a, b, c) {
return a = Math.max(a, b),
a = Math.min(a, c)
},
g.prototype.css = function (a, b, d) {
var e = this.propertyCache[b];
if (!e) for (var f = 0, g = this.vendors.length; f < g; f++) if (e = null !== this.vendors[f] ? this.camelCase(this.vendors[f][1] + '-' + b)  : b, a.style[e] !== c) {
this.propertyCache[b] = e;
break
}
a.style[e] = d
},
g.prototype.accelerate = function (a) {
this.css(a, 'transform', 'translate3d(0,0,0)'),
this.css(a, 'transform-style', 'preserve-3d'),
this.css(a, 'backface-visibility', 'hidden')
},
g.prototype.setPosition = function (a, b, c) {
b += 'px',
c += 'px',
this.transform3DSupport ? this.css(a, 'transform', 'translate3d(' + b + ',' + c + ',0)')  : this.transform2DSupport ? this.css(a, 'transform', 'translate(' + b + ',' + c + ')')  : (a.style.left = b, a.style.top = c)
},
g.prototype.onOrientationTimer = function () {
this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
},
g.prototype.onCalibrationTimer = function () {
this.calibrationFlag = !0
},
g.prototype.onWindowResize = function () {
this.updateDimensions()
},
g.prototype.onAnimationFrame = function () {
this.updateBounds();
var a = this.ix - this.cx,
b = this.iy - this.cy;
(Math.abs(a) > this.calibrationThreshold || Math.abs(b) > this.calibrationThreshold) && this.queueCalibration(0),
this.portrait ? (this.mx = this.calibrateX ? b : this.iy, this.my = this.calibrateY ? a : this.ix)  : (this.mx = this.calibrateX ? a : this.ix, this.my = this.calibrateY ? b : this.iy),
this.mx *= this.ew * (this.scalarX / 100),
this.my *= this.eh * (this.scalarY / 100),
isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, - this.limitX, this.limitX)),
isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, - this.limitY, this.limitY)),
this.vx += (this.mx - this.vx) * this.frictionX,
this.vy += (this.my - this.vy) * this.frictionY;
for (var c = 0, d = this.layers.length; c < d; c++) {
var e = this.layers[c],
f = this.depths[c],
g = this.vx * f * (this.invertX ? - 1 : 1),
h = this.vy * f * (this.invertY ? - 1 : 1);
this.setPosition(e, g, h)
}
this.raf = requestAnimationFrame(this.onAnimationFrame)
},
g.prototype.onDeviceOrientation = function (a) {
if (!this.desktop && null !== a.beta && null !== a.gamma) {
this.orientationStatus = 1;
var b = (a.beta || 0) / e,
c = (a.gamma || 0) / e,
d = this.wh > this.ww;
this.portrait !== d && (this.portrait = d, this.calibrationFlag = !0),
this.calibrationFlag && (this.calibrationFlag = !1, this.cx = b, this.cy = c),
this.ix = b,
this.iy = c
}
},
g.prototype.onMouseMove = function (a) {
var b = a.clientX,
c = a.clientY;
!this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (b = Math.max(b, this.ex), b = Math.min(b, this.ex + this.ew), c = Math.max(c, this.ey), c = Math.min(c, this.ey + this.eh)), this.ix = (b - this.ex - this.ecx) / this.erx, this.iy = (c - this.ey - this.ecy) / this.ery)  : (this.ix = (b - this.wcx) / this.wrx, this.iy = (c - this.wcy) / this.wry)
},
a[d] = g
}(window, document);
/** 
 * @module      Vide - v0.5.1
 * @license     MIT License
 * @link        http://vodkabears.github.io/vide/
 */
!function (a, b) {
'function' == typeof define && define.amd ? define(['jquery'], b)  : b('object' == typeof exports ? require('jquery')  : a.jQuery)
}(this, function (a) {
'use strict';
function b(a) {
var b,
c,
d,
e,
f,
g,
h,
i = {
};
for (f = a.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(','), h = 0, g = f.length; h < g && (c = f[h], c.search(/^(http|https|ftp):\/\//) === - 1 && c.search(':') !== - 1); h++) b = c.indexOf(':'),
d = c.substring(0, b),
e = c.substring(b + 1),
e || (e = void 0),
'string' == typeof e && (e = 'true' === e || 'false' !== e && e),
'string' == typeof e && (e = isNaN(e) ? e : + e),
i[d] = e;
return null == d && null == e ? a : i
}
function c(a) {
a = '' + a;
var b,
c,
d,
e = a.split(/\s+/),
f = '50%',
g = '50%';
for (d = 0, b = e.length; d < b; d++) c = e[d],
'left' === c ? f = '0%' : 'right' === c ? f = '100%' : 'top' === c ? g = '0%' : 'bottom' === c ? g = '100%' : 'center' === c ? 0 === d ? f = '50%' : g = '50%' : 0 === d ? f = c : g = c;
return {
x: f,
y: g
}
}
function d(b, c) {
var d = function () {
c(this.src)
};
a('<img src="' + b + '.gif">').on('load', d),
a('<img src="' + b + '.jpg">').on('load', d),
a('<img src="' + b + '.jpeg">').on('load', d),
a('<img src="' + b + '.png">').on('load', d)
}
function e(c, d, e) {
if (this.$element = a(c), 'string' == typeof d && (d = b(d)), e ? 'string' == typeof e && (e = b(e))  : e = {
}, 'string' == typeof d) d = d.replace(/\.\w*$/, '');
 else if ('object' == typeof d) for (var f in d) d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ''));
this.settings = a.extend({
}, g, e),
this.path = d;
try {
this.init()
} catch (i) {
if (i.message !== h) throw i
}
}
var f = 'vide',
g = {
volume: 1,
playbackRate: 1,
muted: !0,
loop: !0,
autoplay: !0,
position: '50% 50%',
posterType: 'detect',
resizing: !0,
bgColor: 'transparent',
className: ''
},
h = 'Not implemented';
e.prototype.init = function () {
var b,
e,
f = this,
g = f.path,
i = g,
j = '',
k = f.$element,
l = f.settings,
m = c(l.position),
n = l.posterType;
e = f.$wrapper = a('<div>').addClass(l.className).css({
position: 'absolute',
'z-index': - 1,
top: 0,
left: 0,
bottom: 0,
right: 0,
overflow: 'hidden',
'-webkit-background-size': 'cover',
'-moz-background-size': 'cover',
'-o-background-size': 'cover',
'background-size': 'cover',
'background-color': l.bgColor,
'background-repeat': 'no-repeat',
'background-position': m.x + ' ' + m.y
}),
'object' == typeof g && (g.poster ? i = g.poster : g.mp4 ? i = g.mp4 : g.webm ? i = g.webm : g.ogv && (i = g.ogv)),
'detect' === n ? d(i, function (a) {
e.css('background-image', 'url(' + a + ')')
})  : 'none' !== n && e.css('background-image', 'url(' + i + '.' + n + ')'),
'static' === k.css('position') && k.css('position', 'relative'),
k.prepend(e),
'object' == typeof g ? (g.mp4 && (j += '<source src="' + g.mp4 + '.mp4" type="video/mp4">'), g.webm && (j += '<source src="' + g.webm + '.webm" type="video/webm">'), g.ogv && (j += '<source src="' + g.ogv + '.ogv" type="video/ogg">'), b = f.$video = a('<video>' + j + '</video>'))  : b = f.$video = a('<video><source src="' + g + '.mp4" type="video/mp4"><source src="' + g + '.webm" type="video/webm"><source src="' + g + '.ogv" type="video/ogg"></video>');
try {
b.prop({
  autoplay: l.autoplay,
  loop: l.loop,
  volume: l.volume,
  muted: l.muted,
  defaultMuted: l.muted,
  playbackRate: l.playbackRate,
  defaultPlaybackRate: l.playbackRate
})
} catch (o) {
throw new Error(h)
}
b.css({
margin: 'auto',
position: 'absolute',
'z-index': - 1,
top: m.y,
left: m.x,
'-webkit-transform': 'translate(-' + m.x + ', -' + m.y + ')',
'-ms-transform': 'translate(-' + m.x + ', -' + m.y + ')',
'-moz-transform': 'translate(-' + m.x + ', -' + m.y + ')',
transform: 'translate(-' + m.x + ', -' + m.y + ')',
visibility: 'hidden',
opacity: 0
}).one('canplaythrough.vide', function () {
f.resize()
}).one('playing.vide', function () {
b.css({
  visibility: 'visible',
  opacity: 1
}),
e.css('background-image', 'none')
}),
k.on('resize.vide', function () {
l.resizing && f.resize()
}),
e.append(b)
},
e.prototype.getVideoObject = function () {
return this.$video[0]
},
e.prototype.resize = function () {
if (this.$video) {
var a = this.$wrapper,
b = this.$video,
c = b[0],
d = c.videoHeight,
e = c.videoWidth,
f = a.height(),
g = a.width();
g / e > f / d ? b.css({
  width: g + 2,
  height: 'auto'
})  : b.css({
  width: 'auto',
  height: f + 2
})
}
},
e.prototype.destroy = function () {
delete a[f].lookup[this.index],
this.$video && this.$video.off(f),
this.$element.off(f).removeData(f),
this.$wrapper.remove()
},
a[f] = {
lookup: [
]
},
a.fn[f] = function (b, c) {
var d;
return this.each(function () {
d = a.data(this, f),
d && d.destroy(),
d = new e(this, b, c),
d.index = a[f].lookup.push(d) - 1,
a.data(this, f, d)
}),
this
},
a(document).ready(function () {
var b = a(window);
b.on('resize.vide', function () {
for (var b, c = a[f].lookup.length, d = 0; d < c; d++) b = a[f].lookup[d],
b && b.settings.resizing && b.resize()
}),
b.on('unload.vide', function () {
return !1
}),
a(document).find('[data-vide-bg]').each(function (b, c) {
var d = a(c),
e = d.data('vide-options'),
g = d.data('vide-bg');
d[f](g, e)
})
})
});
/**
 * @module      jQuery Ripples plugin v0.6.1 / https://github.com/sirxemic/jquery.ripples
 * @license     MIT License
 * @author      sirxemic / https://sirxemic.com/
 */
!function (e, t) {
'object' == typeof exports && 'undefined' != typeof module ? t(require('jquery'))  : 'function' == typeof define && define.amd ? define(['jquery'], t)  : t(e.$)
}(this, function (e) {
'use strict';
function t(e) {
return '%' == e[e.length - 1]
}
function r(e) {
var t = e.split(' ');
if (1 !== t.length) return t.map(function (t) {
switch (e) {
  case 'center':
    return '50%';
  case 'top':
  case 'left':
    return '0';
  case 'right':
  case 'bottom':
    return '100%';
  default:
    return t
}
}); switch (e) {
case 'center':
  return ['50%',
  '50%'];
case 'top':
  return ['50%',
  '0'];
case 'bottom':
  return ['50%',
  '100%'];
case 'left':
  return ['0',
  '50%'];
case 'right':
  return ['100%',
  '50%'];
default:
  return [e,
  '50%']
}
}
function i(e, t, r) {
function i(e, t) {
var r = s.createShader(e);
if (s.shaderSource(r, t), s.compileShader(r), !s.getShaderParameter(r, s.COMPILE_STATUS)) throw new Error('compile error: ' + s.getShaderInfoLog(r));
return r
}
var o = {
};
if (o.id = s.createProgram(), s.attachShader(o.id, i(s.VERTEX_SHADER, e)), s.attachShader(o.id, i(s.FRAGMENT_SHADER, t)), s.linkProgram(o.id), !s.getProgramParameter(o.id, s.LINK_STATUS)) throw new Error('link error: ' + s.getProgramInfoLog(o.id));
o.uniforms = {
},
o.locations = {
},
s.useProgram(o.id),
s.enableVertexAttribArray(0);
for (var n, a, u = /uniform (\w+) (\w+)/g, h = e + t; null != (n = u.exec(h)); ) a = n[2],
o.locations[a] = s.getUniformLocation(o.id, a);
return o
}
function o(e, t) {
s.activeTexture(s.TEXTURE0 + (t || 0)),
s.bindTexture(s.TEXTURE_2D, e)
}
function n(e) {
var t = /url\(["']?([^"']*)["']?\)/.exec(e);
return null == t ? null : t[1]
}
function a(e) {
return e.match(/^data:/)
}
var s, u = (e = e && e.hasOwnProperty('default') ? e.default:
e) (window), h = function () {
function e(e, t) {
var i = 'OES_texture_' + e,
o = i + '_linear',
n = o in r,
a = [
  i
];
return n && a.push(o),
{
  type: t,
  linearSupport: n,
  extensions: a
}
}
var t = document.createElement('canvas');
if (!(s = t.getContext('webgl') || t.getContext('experimental-webgl'))) return null;
var r = {
};
if (['OES_texture_float',
'OES_texture_half_float',
'OES_texture_float_linear',
'OES_texture_half_float_linear'].forEach(function (e) {
var t = s.getExtension(e);
t && (r[e] = t)
}), !r.OES_texture_float) return null;
var i = [
];
i.push(e('float', s.FLOAT)),
r.OES_texture_half_float && i.push(e('half_float', r.OES_texture_half_float.HALF_FLOAT_OES));
var o = s.createTexture(),
n = s.createFramebuffer();
s.bindFramebuffer(s.FRAMEBUFFER, n),
s.bindTexture(s.TEXTURE_2D, o),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE);
for (var a = null, u = 0; u < i.length; u++) if (s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, 32, 32, 0, s.RGBA, i[u].type, null), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, o, 0), s.checkFramebufferStatus(s.FRAMEBUFFER) === s.FRAMEBUFFER_COMPLETE) {
a = i[u];
break
}
return a
}(), c = function (e, t) {
try {
return new ImageData(e, t)
} catch (r) {
return document.createElement('canvas').getContext('2d').createImageData(e, t)
}
}(32, 32); e('head').prepend('<style>.jquery-ripples { position: relative; z-index: 0; }</style>'); var d = function (t, r) {
function i() {
o.destroyed || (o.step(), requestAnimationFrame(i))
}
var o = this;
this.$el = e(t),
this.interactive = r.interactive,
this.resolution = r.resolution,
this.textureDelta = new Float32Array([1 / this.resolution,
1 / this.resolution]),
this.perturbance = r.perturbance,
this.dropRadius = r.dropRadius,
this.crossOrigin = r.crossOrigin,
this.imageUrl = r.imageUrl;
var n = document.createElement('canvas');
n.width = this.$el.innerWidth(),
n.height = this.$el.innerHeight(),
this.canvas = n,
this.$canvas = e(n),
this.$canvas.css({
position: 'absolute',
left: 0,
top: 0,
right: 0,
bottom: 0,
zIndex: - 1
}),
this.$el.addClass('jquery-ripples').append(n),
this.context = s = n.getContext('webgl') || n.getContext('experimental-webgl'),
h.extensions.forEach(function (e) {
s.getExtension(e)
}),
e(window).on('resize', function () {
o.updateSize()
}),
this.textures = [
],
this.framebuffers = [
],
this.bufferWriteIndex = 0,
this.bufferReadIndex = 1;
for (var a = new Float32Array(this.resolution * this.resolution * 4), u = 0; u < 2; u++) {
var c = s.createTexture(),
d = s.createFramebuffer();
s.bindFramebuffer(s.FRAMEBUFFER, d),
s.bindTexture(s.TEXTURE_2D, c),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, h.linearSupport ? s.LINEAR : s.NEAREST),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, h.linearSupport ? s.LINEAR : s.NEAREST),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this.resolution, this.resolution, 0, s.RGBA, h.type, a),
s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, c, 0),
this.textures.push(c),
this.framebuffers.push(d)
}
this.quad = s.createBuffer(),
s.bindBuffer(s.ARRAY_BUFFER, this.quad),
s.bufferData(s.ARRAY_BUFFER, new Float32Array([ - 1,
- 1,
1,
- 1,
1,
1,
- 1,
1]), s.STATIC_DRAW),
this.initShaders(),
this.initTexture(),
this.setTransparentTexture(),
this.loadImage(),
s.clearColor(0, 0, 0, 0),
s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA),
this.visible = !0,
this.running = !0,
this.inited = !0,
this.destroyed = !1,
this.setupPointerEvents(),
requestAnimationFrame(i)
}; d.DEFAULTS = {
imageUrl: null,
resolution: 256,
dropRadius: 20,
perturbance: 0.03,
interactive: !0,
crossOrigin: ''
}, d.prototype = {
setupPointerEvents: function () {
function e() {
  return r.visible && r.running && r.interactive
}
function t(t, i) {
  e() && r.dropAtPointer(t, r.dropRadius * (i ? 1.5 : 1), i ? 0.14 : 0.01)
}
var r = this;
this.$el.on('mousemove.ripples', function (e) {
  t(e)
}).on('touchmove.ripples, touchstart.ripples', function (e) {
  for (var r = e.originalEvent.changedTouches, i = 0; i < r.length; i++) t(r[i])
}).on('mousedown.ripples', function (e) {
  t(e, !0)
})
},
loadImage: function () {
var e = this;
s = this.context;
var t = this.imageUrl || n(this.originalCssBackgroundImage) || n(this.$el.css('backgroundImage'));
if (t != this.imageSource) if (this.imageSource = t, this.imageSource) {
  var r = new Image;
  r.onload = function () {
    function t(e) {
      return 0 == (e & e - 1)
    }
    s = e.context;
    var i = t(r.width) && t(r.height) ? s.REPEAT : s.CLAMP_TO_EDGE;
    s.bindTexture(s.TEXTURE_2D, e.backgroundTexture),
    s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, i),
    s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, i),
    s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, r),
    e.backgroundWidth = r.width,
    e.backgroundHeight = r.height,
    e.hideCssBackground()
  },
  r.onerror = function () {
    s = e.context,
    e.setTransparentTexture()
  },
  r.crossOrigin = a(this.imageSource) ? null : this.crossOrigin,
  r.src = this.imageSource
} else this.setTransparentTexture()
},
step: function () {
s = this.context,
this.visible && (this.computeTextureBoundaries(), this.running && this.update(), this.render())
},
drawQuad: function () {
s.bindBuffer(s.ARRAY_BUFFER, this.quad),
s.vertexAttribPointer(0, 2, s.FLOAT, !1, 0, 0),
s.drawArrays(s.TRIANGLE_FAN, 0, 4)
},
render: function () {
s.bindFramebuffer(s.FRAMEBUFFER, null),
s.viewport(0, 0, this.canvas.width, this.canvas.height),
s.enable(s.BLEND),
s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT),
s.useProgram(this.renderProgram.id),
o(this.backgroundTexture, 0),
o(this.textures[0], 1),
s.uniform1f(this.renderProgram.locations.perturbance, this.perturbance),
s.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft),
s.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight),
s.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio),
s.uniform1i(this.renderProgram.locations.samplerBackground, 0),
s.uniform1i(this.renderProgram.locations.samplerRipples, 1),
this.drawQuad(),
s.disable(s.BLEND)
},
update: function () {
s.viewport(0, 0, this.resolution, this.resolution),
s.bindFramebuffer(s.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]),
o(this.textures[this.bufferReadIndex]),
s.useProgram(this.updateProgram.id),
this.drawQuad(),
this.swapBufferIndices()
},
swapBufferIndices: function () {
this.bufferWriteIndex = 1 - this.bufferWriteIndex,
this.bufferReadIndex = 1 - this.bufferReadIndex
},
computeTextureBoundaries: function () {
var e,
i = this.$el.css('background-size'),
o = this.$el.css('background-attachment'),
n = r(this.$el.css('background-position'));
if ('fixed' == o ? ((e = {
  left: window.pageXOffset,
  top: window.pageYOffset
}).width = u.width(), e.height = u.height())  : ((e = this.$el.offset()).width = this.$el.innerWidth(), e.height = this.$el.innerHeight()), 'cover' == i) var a = Math.max(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
s = this.backgroundWidth * a,
h = this.backgroundHeight * a;
 else if ('contain' == i) var a = Math.min(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
s = this.backgroundWidth * a,
h = this.backgroundHeight * a;
 else {
  var s = (i = i.split(' ')) [0] || '',
  h = i[1] || s;
  t(s) ? s = e.width * parseFloat(s) / 100 : 'auto' != s && (s = parseFloat(s)),
  t(h) ? h = e.height * parseFloat(h) / 100 : 'auto' != h && (h = parseFloat(h)),
  'auto' == s && 'auto' == h ? (s = this.backgroundWidth, h = this.backgroundHeight)  : ('auto' == s && (s = this.backgroundWidth * (h / this.backgroundHeight)), 'auto' == h && (h = this.backgroundHeight * (s / this.backgroundWidth)))
}
var c = n[0],
d = n[1];
c = t(c) ? e.left + (e.width - s) * parseFloat(c) / 100 : e.left + parseFloat(c),
d = t(d) ? e.top + (e.height - h) * parseFloat(d) / 100 : e.top + parseFloat(d);
var f = this.$el.offset();
this.renderProgram.uniforms.topLeft = new Float32Array([(f.left - c) / s,
(f.top - d) / h]),
this.renderProgram.uniforms.bottomRight = new Float32Array([this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / s,
this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / h]);
var l = Math.max(this.canvas.width, this.canvas.height);
this.renderProgram.uniforms.containerRatio = new Float32Array([this.canvas.width / l,
this.canvas.height / l])
},
initShaders: function () {
var e = [
  'attribute vec2 vertex;',
  'varying vec2 coord;',
  'void main() {',
  'coord = vertex * 0.5 + 0.5;',
  'gl_Position = vec4(vertex, 0.0, 1.0);',
  '}'
].join('\n');
this.dropProgram = i(e, [
  'precision highp float;',
  'const float PI = 3.141592653589793;',
  'uniform sampler2D texture;',
  'uniform vec2 center;',
  'uniform float radius;',
  'uniform float strength;',
  'varying vec2 coord;',
  'void main() {',
  'vec4 info = texture2D(texture, coord);',
  'float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);',
  'drop = 0.5 - cos(drop * PI) * 0.5;',
  'info.r += drop * strength;',
  'gl_FragColor = info;',
  '}'
].join('\n')),
this.updateProgram = i(e, [
  'precision highp float;',
  'uniform sampler2D texture;',
  'uniform vec2 delta;',
  'varying vec2 coord;',
  'void main() {',
  'vec4 info = texture2D(texture, coord);',
  'vec2 dx = vec2(delta.x, 0.0);',
  'vec2 dy = vec2(0.0, delta.y);',
  'float average = (',
  'texture2D(texture, coord - dx).r +',
  'texture2D(texture, coord - dy).r +',
  'texture2D(texture, coord + dx).r +',
  'texture2D(texture, coord + dy).r',
  ') * 0.25;',
  'info.g += (average - info.r) * 2.0;',
  'info.g *= 0.995;',
  'info.r += info.g;',
  'gl_FragColor = info;',
  '}'
].join('\n')),
s.uniform2fv(this.updateProgram.locations.delta, this.textureDelta),
this.renderProgram = i(['precision highp float;',
'attribute vec2 vertex;',
'uniform vec2 topLeft;',
'uniform vec2 bottomRight;',
'uniform vec2 containerRatio;',
'varying vec2 ripplesCoord;',
'varying vec2 backgroundCoord;',
'void main() {',
'backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);',
'backgroundCoord.y = 1.0 - backgroundCoord.y;',
'ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;',
'gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);',
'}'].join('\n'), [
  'precision highp float;',
  'uniform sampler2D samplerBackground;',
  'uniform sampler2D samplerRipples;',
  'uniform vec2 delta;',
  'uniform float perturbance;',
  'varying vec2 ripplesCoord;',
  'varying vec2 backgroundCoord;',
  'void main() {',
  'float height = texture2D(samplerRipples, ripplesCoord).r;',
  'float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;',
  'float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;',
  'vec3 dx = vec3(delta.x, heightX - height, 0.0);',
  'vec3 dy = vec3(0.0, heightY - height, delta.y);',
  'vec2 offset = -normalize(cross(dy, dx)).xz;',
  'float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);',
  'gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;',
  '}'
].join('\n')),
s.uniform2fv(this.renderProgram.locations.delta, this.textureDelta)
},
initTexture: function () {
this.backgroundTexture = s.createTexture(),
s.bindTexture(s.TEXTURE_2D, this.backgroundTexture),
s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, 1),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR)
},
setTransparentTexture: function () {
s.bindTexture(s.TEXTURE_2D, this.backgroundTexture),
s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, c)
},
hideCssBackground: function () {
var e = this.$el[0].style.backgroundImage;
'none' != e && (this.originalInlineCss = e, this.originalCssBackgroundImage = this.$el.css('backgroundImage'), this.$el.css('backgroundImage', 'none'))
},
restoreCssBackground: function () {
this.$el.css('backgroundImage', this.originalInlineCss || '')
},
dropAtPointer: function (e, t, r) {
var i = parseInt(this.$el.css('border-left-width')) || 0,
o = parseInt(this.$el.css('border-top-width')) || 0;
this.drop(e.pageX - this.$el.offset().left - i, e.pageY - this.$el.offset().top - o, t, r)
},
drop: function (e, t, r, i) {
s = this.context;
var n = this.$el.innerWidth(),
a = this.$el.innerHeight(),
u = Math.max(n, a);
r /= u;
var h = new Float32Array([(2 * e - n) / u,
(a - 2 * t) / u]);
s.viewport(0, 0, this.resolution, this.resolution),
s.bindFramebuffer(s.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]),
o(this.textures[this.bufferReadIndex]),
s.useProgram(this.dropProgram.id),
s.uniform2fv(this.dropProgram.locations.center, h),
s.uniform1f(this.dropProgram.locations.radius, r),
s.uniform1f(this.dropProgram.locations.strength, i),
this.drawQuad(),
this.swapBufferIndices()
},
updateSize: function () {
var e = this.$el.innerWidth(),
t = this.$el.innerHeight();
e == this.canvas.width && t == this.canvas.height || (this.canvas.width = e, this.canvas.height = t)
},
destroy: function () {
this.$el.off('.ripples').removeClass('jquery-ripples').removeData('ripples'),
this.$canvas.remove(),
this.restoreCssBackground(),
this.destroyed = !0
},
show: function () {
this.visible = !0,
this.$canvas.show(),
this.hideCssBackground()
},
hide: function () {
this.visible = !1,
this.$canvas.hide(),
this.restoreCssBackground()
},
pause: function () {
this.running = !1
},
play: function () {
this.running = !0
},
set: function (e, t) {
switch (e) {
  case 'dropRadius':
  case 'perturbance':
  case 'interactive':
  case 'crossOrigin':
    this[e] = t;
    break;
  case 'imageUrl':
    this.imageUrl = t,
    this.loadImage()
}
}
};
var f = e.fn.ripples;
e.fn.ripples = function (t) {
if (!h) throw new Error('Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.');
var r = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1)  : void 0;
return this.each(function () {
var i = e(this),
o = i.data('ripples'),
n = e.extend({
}, d.DEFAULTS, i.data(), 'object' == typeof t && t);
(o || 'string' != typeof t) && (o ? 'string' == typeof t && d.prototype[t].apply(o, r)  : i.data('ripples', o = new d(this, n)))
})
},
e.fn.ripples.Constructor = d,
e.fn.ripples.noConflict = function () {
return e.fn.ripples = f,
this
}
});/**
 * @module      tilt hover effect
 * @license     MIT License
**/
'use strict'; var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
return typeof t
}
 : function (t) {
return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
}; !function (t) {
'function' == typeof define && define.amd ? define(['jquery'], t)  : 'object' === ('undefined' == typeof module ? 'undefined' : _typeof(module)) && module.exports ? module.exports = function (i, s) {
return void 0 === s && (s = 'undefined' != typeof window ? require('jquery')  : require('jquery') (i)),
t(s),
s
}
 : t(jQuery)
}(function (t) {
return t.fn.tilt = function (i) {
var s = function () {
this.ticking || (requestAnimationFrame(g.bind(this)), this.ticking = !0)
},
e = function () {
var i = this;
t(this).on('mousemove', o),
t(this).on('mouseenter', a),
this.settings.reset && t(this).on('mouseleave', l),
this.settings.glare && t(window).on('resize', d.bind(i))
},
n = function () {
var i = this;
void 0 !== this.timeout && clearTimeout(this.timeout),
t(this).css({
  transition: this.settings.speed + 'ms ' + this.settings.easing
}),
this.settings.glare && this.glareElement.css({
  transition: 'opacity ' + this.settings.speed + 'ms ' + this.settings.easing
}),
this.timeout = setTimeout(function () {
  t(i).css({
    transition: ''
  }),
  i.settings.glare && i.glareElement.css({
    transition: ''
  })
}, this.settings.speed)
},
a = function (i) {
this.ticking = !1,
t(this).css({
  'will-change': 'transform'
}),
n.call(this),
t(this).trigger('tilt.mouseEnter')
},
r = function (i) {
return 'undefined' == typeof i && (i = {
  pageX: t(this).offset().left + t(this).outerWidth() / 2,
  pageY: t(this).offset().top + t(this).outerHeight() / 2
}),
{
  x: i.pageX,
  y: i.pageY
}
},
o = function (t) {
this.mousePositions = r(t),
s.call(this)
},
l = function () {
n.call(this),
this.reset = !0,
s.call(this),
t(this).trigger('tilt.mouseLeave')
},
h = function () {
var i = t(this).outerWidth(),
s = t(this).outerHeight(),
e = t(this).offset().left,
n = t(this).offset().top,
a = (this.mousePositions.x - e) / i,
r = (this.mousePositions.y - n) / s,
o = (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2),
l = (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
h = Math.atan2(this.mousePositions.x - (e + i / 2), - (this.mousePositions.y - (n + s / 2))) * (180 / Math.PI);
return {
  tiltX: o,
  tiltY: l,
  percentageX: 100 * a,
  percentageY: 100 * r,
  angle: h
}
},
g = function () {
return this.transforms = h.call(this),
this.reset ? (this.reset = !1, t(this).css('transform', 'perspective(' + this.settings.perspective + 'px) rotateX(0deg) rotateY(0deg)'), void (this.settings.glare && (this.glareElement.css('transform', 'rotate(180deg) translate(-50%, -50%)'), this.glareElement.css('opacity', '0'))))  : (t(this).css('transform', 'perspective(' + this.settings.perspective + 'px) rotateX(' + ('x' === this.settings.disableAxis ? 0 : this.transforms.tiltY) + 'deg) rotateY(' + ('y' === this.settings.disableAxis ? 0 : this.transforms.tiltX) + 'deg) scale3d(' + this.settings.scale + ',' + this.settings.scale + ',' + this.settings.scale + ')'), this.settings.glare && (this.glareElement.css('transform', 'rotate(' + this.transforms.angle + 'deg) translate(-50%, -50%)'), this.glareElement.css('opacity', '' + this.transforms.percentageY * this.settings.maxGlare / 100)), t(this).trigger('change', [
  this.transforms
]), void (this.ticking = !1))
},
c = function () {
var i = this.settings.glarePrerender;
if (i || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find('.js-tilt-glare'), this.glareElement = t(this).find('.js-tilt-glare-inner'), !i) {
  var s = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  };
  this.glareElementWrapper.css(s).css({
    overflow: 'hidden',
    'pointer-events': 'none'
  }),
  this.glareElement.css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    'background-image': 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
    width: '' + 2 * t(this).outerWidth(),
    height: '' + 2 * t(this).outerWidth(),
    transform: 'rotate(180deg) translate(-50%, -50%)',
    'transform-origin': '0% 0%',
    opacity: '0'
  })
}
},
d = function () {
this.glareElement.css({
  width: '' + 2 * t(this).outerWidth(),
  height: '' + 2 * t(this).outerWidth()
})
};
return t.fn.tilt.destroy = function () {
t(this).each(function () {
  t(this).find('.js-tilt-glare').remove(),
  t(this).css({
    'will-change': '',
    transform: ''
  }),
  t(this).off('mousemove mouseenter mouseleave')
})
},
t.fn.tilt.getValues = function () {
var i = [
];
return t(this).each(function () {
  this.mousePositions = r.call(this),
  i.push(h.call(this))
}),
i
},
t.fn.tilt.reset = function () {
t(this).each(function () {
  var i = this;
  this.mousePositions = r.call(this),
  this.settings = t(this).data('settings'),
  l.call(this),
  setTimeout(function () {
    i.reset = !1
  }, this.settings.transition)
})
},
this.each(function () {
var s = this;
this.settings = t.extend({
  maxTilt: t(this).is('[data-tilt-max]') ? t(this).data('tilt-max')  : 20,
  perspective: t(this).is('[data-tilt-perspective]') ? t(this).data('tilt-perspective')  : 300,
  easing: t(this).is('[data-tilt-easing]') ? t(this).data('tilt-easing')  : 'cubic-bezier(.03,.98,.52,.99)',
  scale: t(this).is('[data-tilt-scale]') ? t(this).data('tilt-scale')  : '1',
  speed: t(this).is('[data-tilt-speed]') ? t(this).data('tilt-speed')  : '400',
  transition: !t(this).is('[data-tilt-transition]') || t(this).data('tilt-transition'),
  disableAxis: t(this).is('[data-tilt-disable-axis]') ? t(this).data('tilt-disable-axis')  : null,
  axis: t(this).is('[data-tilt-axis]') ? t(this).data('tilt-axis')  : null,
  reset: !t(this).is('[data-tilt-reset]') || t(this).data('tilt-reset'),
  glare: !!t(this).is('[data-tilt-glare]') && t(this).data('tilt-glare'),
  maxGlare: t(this).is('[data-tilt-maxglare]') ? t(this).data('tilt-maxglare')  : 1
}, i),
null !== this.settings.axis && (console.warn('Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information'), this.settings.disableAxis = this.settings.axis),
this.init = function () {
  t(s).data('settings', s.settings),
  s.settings.glare && c.call(s),
  e.call(s)
},
this.init()
})
},
t('[data-tilt]').tilt(),
!0
});
