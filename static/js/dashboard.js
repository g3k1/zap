var Ki = Object.defineProperty;
var Yi = (e, t, r) =>
  t in e
    ? Ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var ne = (e, t, r) => (Yi(e, typeof t != "symbol" ? t + "" : t, r), r);
import {
  R as l,
  r as v,
  p as pr,
  _ as N,
  a0 as ra,
  w as Ji,
  H as ro,
  I as Xi,
  n as Zi,
  s as re,
  g as P,
  c as G,
  B as Qi,
  b as na,
  a6 as _i,
  a7 as el,
  a8 as Z,
  d as $,
  W,
  j as tl,
  a9 as Lt,
  U as no,
  aa as rl,
  h as nl,
  C as Le,
  e as Ae,
  A as al,
  ab as ao,
  ac as ol,
  a as il,
  M as Ir,
  ad as yn,
  ae as ll,
  af as sl,
  ag as aa,
  ah as cl,
  ai as ul,
  aj as dl,
  ak as pl,
  k as fl,
  l as ml,
  G as gl,
  m as vl,
} from "./chunk-c19d60b9.js";
import {
  _ as bl,
  w as ie,
  u as oe,
  j as ye,
  b as $t,
  c as Gt,
  d as zt,
  e as jt,
  f as et,
  x as qt,
  g as oo,
  I as hl,
  y as io,
  T as we,
  z as xl,
  M as En,
  S as wn,
  p as rr,
  q as yl,
  a as lo,
  h as El,
  m as so,
  k as wl,
  l as Dl,
  A as Qe,
  L as it,
  O as Il,
  R as Cl,
  r as Me,
  s as Sl,
  t as Al,
  v as Ol,
  P as Pl,
  F as Bl,
} from "./chunk-68bc4261.js";
import {
  c as Oe,
  I as ur,
  _ as ft,
  a as mt,
  b as Nl,
  M as tt,
  F as Fl,
  d as Rl,
  e as Dn,
  u as on,
  f as co,
  g as kl,
  P as gt,
  h as $e,
  i as uo,
  r as He,
} from "./chunk-61d077b0.js";
import { v as Ze, g as _ } from "./chunk-37259eac.js";
import { s as fe, g as In } from "./chunk-971f66c7.js";
function oa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ia(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? oa(Object(r), !0).forEach(function (n) {
          bl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : oa(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ve(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var la = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Hr = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  sa = {
    INIT: "@@redux/INIT" + Hr(),
    REPLACE: "@@redux/REPLACE" + Hr(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Hr();
    },
  };
function Tl(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function po(e, t, r) {
  var n;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ve(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(ve(1));
    return r(po)(e, t);
  }
  if (typeof e != "function") throw new Error(ve(2));
  var a = e,
    o = t,
    i = [],
    s = i,
    c = !1;
  function u() {
    s === i && (s = i.slice());
  }
  function p() {
    if (c) throw new Error(ve(3));
    return o;
  }
  function d(b) {
    if (typeof b != "function") throw new Error(ve(4));
    if (c) throw new Error(ve(5));
    var h = !0;
    return (
      u(),
      s.push(b),
      function () {
        if (!!h) {
          if (c) throw new Error(ve(6));
          (h = !1), u();
          var y = s.indexOf(b);
          s.splice(y, 1), (i = null);
        }
      }
    );
  }
  function f(b) {
    if (!Tl(b)) throw new Error(ve(7));
    if (typeof b.type > "u") throw new Error(ve(8));
    if (c) throw new Error(ve(9));
    try {
      (c = !0), (o = a(o, b));
    } finally {
      c = !1;
    }
    for (var h = (i = s), x = 0; x < h.length; x++) {
      var y = h[x];
      y();
    }
    return b;
  }
  function m(b) {
    if (typeof b != "function") throw new Error(ve(10));
    (a = b), f({ type: sa.REPLACE });
  }
  function g() {
    var b,
      h = d;
    return (
      (b = {
        subscribe: function (y) {
          if (typeof y != "object" || y === null) throw new Error(ve(11));
          function w() {
            y.next && y.next(p());
          }
          w();
          var E = h(w);
          return { unsubscribe: E };
        },
      }),
      (b[la] = function () {
        return this;
      }),
      b
    );
  }
  return (
    f({ type: sa.INIT }),
    (n = { dispatch: f, subscribe: d, getState: p, replaceReducer: m }),
    (n[la] = g),
    n
  );
}
function ca(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function ua(e, t) {
  if (typeof e == "function") return ca(e, t);
  if (typeof e != "object" || e === null) throw new Error(ve(16));
  var r = {};
  for (var n in e) {
    var a = e[n];
    typeof a == "function" && (r[n] = ca(a, t));
  }
  return r;
}
function fo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (n, a) {
        return function () {
          return n(a.apply(void 0, arguments));
        };
      });
}
function Ml() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return function () {
      var a = n.apply(void 0, arguments),
        o = function () {
          throw new Error(ve(15));
        },
        i = {
          getState: a.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        s = t.map(function (c) {
          return c(i);
        });
      return (
        (o = fo.apply(void 0, s)(a.dispatch)),
        ia(ia({}, a), {}, { dispatch: o })
      );
    };
  };
}
var mo = l.createContext(null);
function Ll(e) {
  e();
}
var go = Ll,
  $l = function (t) {
    return (go = t);
  },
  Gl = function () {
    return go;
  };
function zl() {
  var e = Gl(),
    t = null,
    r = null;
  return {
    clear: function () {
      (t = null), (r = null);
    },
    notify: function () {
      e(function () {
        for (var a = t; a; ) a.callback(), (a = a.next);
      });
    },
    get: function () {
      for (var a = [], o = t; o; ) a.push(o), (o = o.next);
      return a;
    },
    subscribe: function (a) {
      var o = !0,
        i = (r = { callback: a, next: null, prev: r });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (r = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
var da = {
  notify: function () {},
  get: function () {
    return [];
  },
};
function vo(e, t) {
  var r,
    n = da;
  function a(d) {
    return c(), n.subscribe(d);
  }
  function o() {
    n.notify();
  }
  function i() {
    p.onStateChange && p.onStateChange();
  }
  function s() {
    return Boolean(r);
  }
  function c() {
    r || ((r = t ? t.addNestedSub(i) : e.subscribe(i)), (n = zl()));
  }
  function u() {
    r && (r(), (r = void 0), n.clear(), (n = da));
  }
  var p = {
    addNestedSub: a,
    notifyNestedSubs: o,
    handleChangeWrapper: i,
    isSubscribed: s,
    trySubscribe: c,
    tryUnsubscribe: u,
    getListeners: function () {
      return n;
    },
  };
  return p;
}
var bo =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? v.exports.useLayoutEffect
    : v.exports.useEffect;
function jl(e) {
  var t = e.store,
    r = e.context,
    n = e.children,
    a = v.exports.useMemo(
      function () {
        var s = vo(t);
        return { store: t, subscription: s };
      },
      [t]
    ),
    o = v.exports.useMemo(
      function () {
        return t.getState();
      },
      [t]
    );
  bo(
    function () {
      var s = a.subscription;
      return (
        (s.onStateChange = s.notifyNestedSubs),
        s.trySubscribe(),
        o !== t.getState() && s.notifyNestedSubs(),
        function () {
          s.tryUnsubscribe(), (s.onStateChange = null);
        }
      );
    },
    [a, o]
  );
  var i = r || mo;
  return l.createElement(i.Provider, { value: a }, n);
}
var ho = { exports: {} },
  J = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cr = 60103,
  Sr = 60106,
  Wt = 60107,
  Ut = 60108,
  Ht = 60114,
  Vt = 60109,
  Kt = 60110,
  Yt = 60112,
  Jt = 60113,
  Cn = 60120,
  Xt = 60115,
  Zt = 60116,
  xo = 60121,
  yo = 60122,
  Eo = 60117,
  wo = 60129,
  Do = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var ce = Symbol.for;
  (Cr = ce("react.element")),
    (Sr = ce("react.portal")),
    (Wt = ce("react.fragment")),
    (Ut = ce("react.strict_mode")),
    (Ht = ce("react.profiler")),
    (Vt = ce("react.provider")),
    (Kt = ce("react.context")),
    (Yt = ce("react.forward_ref")),
    (Jt = ce("react.suspense")),
    (Cn = ce("react.suspense_list")),
    (Xt = ce("react.memo")),
    (Zt = ce("react.lazy")),
    (xo = ce("react.block")),
    (yo = ce("react.server.block")),
    (Eo = ce("react.fundamental")),
    (wo = ce("react.debug_trace_mode")),
    (Do = ce("react.legacy_hidden"));
}
function Be(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Cr:
        switch (((e = e.type), e)) {
          case Wt:
          case Ht:
          case Ut:
          case Jt:
          case Cn:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Kt:
              case Yt:
              case Zt:
              case Xt:
              case Vt:
                return e;
              default:
                return t;
            }
        }
      case Sr:
        return t;
    }
  }
}
var ql = Vt,
  Wl = Cr,
  Ul = Yt,
  Hl = Wt,
  Vl = Zt,
  Kl = Xt,
  Yl = Sr,
  Jl = Ht,
  Xl = Ut,
  Zl = Jt;
J.ContextConsumer = Kt;
J.ContextProvider = ql;
J.Element = Wl;
J.ForwardRef = Ul;
J.Fragment = Hl;
J.Lazy = Vl;
J.Memo = Kl;
J.Portal = Yl;
J.Profiler = Jl;
J.StrictMode = Xl;
J.Suspense = Zl;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (e) {
  return Be(e) === Kt;
};
J.isContextProvider = function (e) {
  return Be(e) === Vt;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
};
J.isForwardRef = function (e) {
  return Be(e) === Yt;
};
J.isFragment = function (e) {
  return Be(e) === Wt;
};
J.isLazy = function (e) {
  return Be(e) === Zt;
};
J.isMemo = function (e) {
  return Be(e) === Xt;
};
J.isPortal = function (e) {
  return Be(e) === Sr;
};
J.isProfiler = function (e) {
  return Be(e) === Ht;
};
J.isStrictMode = function (e) {
  return Be(e) === Ut;
};
J.isSuspense = function (e) {
  return Be(e) === Jt;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wt ||
    e === Ht ||
    e === wo ||
    e === Ut ||
    e === Jt ||
    e === Cn ||
    e === Do ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Zt ||
        e.$$typeof === Xt ||
        e.$$typeof === Vt ||
        e.$$typeof === Kt ||
        e.$$typeof === Yt ||
        e.$$typeof === Eo ||
        e.$$typeof === xo ||
        e[0] === yo))
  );
};
J.typeOf = Be;
(function (e) {
  e.exports = J;
})(ho);
var Ql = [
    "getDisplayName",
    "methodName",
    "renderCountProp",
    "shouldHandleStateChanges",
    "storeKey",
    "withRef",
    "forwardRef",
    "context",
  ],
  _l = ["reactReduxForwardedRef"],
  es = [],
  ts = [null, null];
function rs(e, t) {
  var r = e[1];
  return [t.payload, r + 1];
}
function pa(e, t, r) {
  bo(function () {
    return e.apply(void 0, t);
  }, r);
}
function ns(e, t, r, n, a, o, i) {
  (e.current = n),
    (t.current = a),
    (r.current = !1),
    o.current && ((o.current = null), i());
}
function as(e, t, r, n, a, o, i, s, c, u) {
  if (!!e) {
    var p = !1,
      d = null,
      f = function () {
        if (!p) {
          var b = t.getState(),
            h,
            x;
          try {
            h = n(b, a.current);
          } catch (y) {
            (x = y), (d = y);
          }
          x || (d = null),
            h === o.current
              ? i.current || c()
              : ((o.current = h),
                (s.current = h),
                (i.current = !0),
                u({ type: "STORE_UPDATED", payload: { error: x } }));
        }
      };
    (r.onStateChange = f), r.trySubscribe(), f();
    var m = function () {
      if (((p = !0), r.tryUnsubscribe(), (r.onStateChange = null), d)) throw d;
    };
    return m;
  }
}
var os = function () {
  return [null, 0];
};
function is(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.getDisplayName,
    a =
      n === void 0
        ? function (w) {
            return "ConnectAdvanced(" + w + ")";
          }
        : n,
    o = r.methodName,
    i = o === void 0 ? "connectAdvanced" : o,
    s = r.renderCountProp,
    c = s === void 0 ? void 0 : s,
    u = r.shouldHandleStateChanges,
    p = u === void 0 ? !0 : u,
    d = r.storeKey,
    f = d === void 0 ? "store" : d;
  r.withRef;
  var m = r.forwardRef,
    g = m === void 0 ? !1 : m,
    b = r.context,
    h = b === void 0 ? mo : b,
    x = pr(r, Ql),
    y = h;
  return function (E) {
    var C = E.displayName || E.name || "Component",
      I = a(C),
      F = N({}, x, {
        getDisplayName: a,
        methodName: i,
        renderCountProp: c,
        shouldHandleStateChanges: p,
        storeKey: f,
        displayName: I,
        wrappedComponentName: C,
        WrappedComponent: E,
      }),
      R = x.pure;
    function L(B) {
      return e(B.dispatch, F);
    }
    var T = R
      ? v.exports.useMemo
      : function (B) {
          return B();
        };
    function M(B) {
      var A = v.exports.useMemo(
          function () {
            var Ye = B.reactReduxForwardedRef,
              at = pr(B, _l);
            return [B.context, Ye, at];
          },
          [B]
        ),
        H = A[0],
        S = A[1],
        K = A[2],
        Y = v.exports.useMemo(
          function () {
            return H &&
              H.Consumer &&
              ho.exports.isContextConsumer(l.createElement(H.Consumer, null))
              ? H
              : y;
          },
          [H, y]
        ),
        Q = v.exports.useContext(Y),
        de =
          Boolean(B.store) &&
          Boolean(B.store.getState) &&
          Boolean(B.store.dispatch);
      Boolean(Q) && Boolean(Q.store);
      var ae = de ? B.store : Q.store,
        Ne = v.exports.useMemo(
          function () {
            return L(ae);
          },
          [ae]
        ),
        ke = v.exports.useMemo(
          function () {
            if (!p) return ts;
            var Ye = vo(ae, de ? null : Q.subscription),
              at = Ye.notifyNestedSubs.bind(Ye);
            return [Ye, at];
          },
          [ae, de, Q]
        ),
        X = ke[0],
        U = ke[1],
        te = v.exports.useMemo(
          function () {
            return de ? Q : N({}, Q, { subscription: X });
          },
          [de, Q, X]
        ),
        pe = v.exports.useReducer(rs, es, os),
        rt = pe[0],
        Te = rt[0],
        nt = pe[1];
      if (Te && Te.error) throw Te.error;
      var Et = v.exports.useRef(),
        Fe = v.exports.useRef(K),
        Ge = v.exports.useRef(),
        Ke = v.exports.useRef(!1),
        ze = T(
          function () {
            return Ge.current && K === Fe.current
              ? Ge.current
              : Ne(ae.getState(), K);
          },
          [ae, Te, K]
        );
      pa(ns, [Fe, Et, Ke, K, ze, Ge, U]),
        pa(as, [p, ae, X, Ne, Fe, Et, Ke, Ge, U, nt], [ae, X, Ne]);
      var wt = v.exports.useMemo(
          function () {
            return l.createElement(E, N({}, ze, { ref: S }));
          },
          [S, E, ze]
        ),
        Lr = v.exports.useMemo(
          function () {
            return p ? l.createElement(Y.Provider, { value: te }, wt) : wt;
          },
          [Y, wt, te]
        );
      return Lr;
    }
    var j = R ? l.memo(M) : M;
    if (((j.WrappedComponent = E), (j.displayName = M.displayName = I), g)) {
      var z = l.forwardRef(function (A, H) {
        return l.createElement(j, N({}, A, { reactReduxForwardedRef: H }));
      });
      return (z.displayName = I), (z.WrappedComponent = E), ra(z, E);
    }
    return ra(j, E);
  };
}
function fa(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Vr(e, t) {
  if (fa(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (var a = 0; a < r.length; a++)
    if (!Object.prototype.hasOwnProperty.call(t, r[a]) || !fa(e[r[a]], t[r[a]]))
      return !1;
  return !0;
}
function ls(e, t) {
  var r = {},
    n = function (i) {
      var s = e[i];
      typeof s == "function" &&
        (r[i] = function () {
          return t(s.apply(void 0, arguments));
        });
    };
  for (var a in e) n(a);
  return r;
}
function Sn(e) {
  return function (r, n) {
    var a = e(r, n);
    function o() {
      return a;
    }
    return (o.dependsOnOwnProps = !1), o;
  };
}
function ma(e) {
  return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0
    ? Boolean(e.dependsOnOwnProps)
    : e.length !== 1;
}
function Io(e, t) {
  return function (n, a) {
    a.displayName;
    var o = function (s, c) {
      return o.dependsOnOwnProps ? o.mapToProps(s, c) : o.mapToProps(s);
    };
    return (
      (o.dependsOnOwnProps = !0),
      (o.mapToProps = function (s, c) {
        (o.mapToProps = e), (o.dependsOnOwnProps = ma(e));
        var u = o(s, c);
        return (
          typeof u == "function" &&
            ((o.mapToProps = u), (o.dependsOnOwnProps = ma(u)), (u = o(s, c))),
          u
        );
      }),
      o
    );
  };
}
function ss(e) {
  return typeof e == "function" ? Io(e) : void 0;
}
function cs(e) {
  return e
    ? void 0
    : Sn(function (t) {
        return { dispatch: t };
      });
}
function us(e) {
  return e && typeof e == "object"
    ? Sn(function (t) {
        return ls(e, t);
      })
    : void 0;
}
const ds = [ss, cs, us];
function ps(e) {
  return typeof e == "function" ? Io(e) : void 0;
}
function fs(e) {
  return e
    ? void 0
    : Sn(function () {
        return {};
      });
}
const ms = [ps, fs];
function gs(e, t, r) {
  return N({}, r, e, t);
}
function vs(e) {
  return function (r, n) {
    n.displayName;
    var a = n.pure,
      o = n.areMergedPropsEqual,
      i = !1,
      s;
    return function (u, p, d) {
      var f = e(u, p, d);
      return i ? (!a || !o(f, s)) && (s = f) : ((i = !0), (s = f)), s;
    };
  };
}
function bs(e) {
  return typeof e == "function" ? vs(e) : void 0;
}
function hs(e) {
  return e
    ? void 0
    : function () {
        return gs;
      };
}
const xs = [bs, hs];
var ys = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Es(e, t, r, n) {
  return function (o, i) {
    return r(e(o, i), t(n, i), i);
  };
}
function ws(e, t, r, n, a) {
  var o = a.areStatesEqual,
    i = a.areOwnPropsEqual,
    s = a.areStatePropsEqual,
    c = !1,
    u,
    p,
    d,
    f,
    m;
  function g(w, E) {
    return (
      (u = w),
      (p = E),
      (d = e(u, p)),
      (f = t(n, p)),
      (m = r(d, f, p)),
      (c = !0),
      m
    );
  }
  function b() {
    return (
      (d = e(u, p)), t.dependsOnOwnProps && (f = t(n, p)), (m = r(d, f, p)), m
    );
  }
  function h() {
    return (
      e.dependsOnOwnProps && (d = e(u, p)),
      t.dependsOnOwnProps && (f = t(n, p)),
      (m = r(d, f, p)),
      m
    );
  }
  function x() {
    var w = e(u, p),
      E = !s(w, d);
    return (d = w), E && (m = r(d, f, p)), m;
  }
  function y(w, E) {
    var C = !i(E, p),
      I = !o(w, u, E, p);
    return (u = w), (p = E), C && I ? b() : C ? h() : I ? x() : m;
  }
  return function (E, C) {
    return c ? y(E, C) : g(E, C);
  };
}
function Ds(e, t) {
  var r = t.initMapStateToProps,
    n = t.initMapDispatchToProps,
    a = t.initMergeProps,
    o = pr(t, ys),
    i = r(e, o),
    s = n(e, o),
    c = a(e, o),
    u = o.pure ? ws : Es;
  return u(i, s, c, e, o);
}
var Is = [
  "pure",
  "areStatesEqual",
  "areOwnPropsEqual",
  "areStatePropsEqual",
  "areMergedPropsEqual",
];
function Kr(e, t, r) {
  for (var n = t.length - 1; n >= 0; n--) {
    var a = t[n](e);
    if (a) return a;
  }
  return function (o, i) {
    throw new Error(
      "Invalid value of type " +
        typeof e +
        " for " +
        r +
        " argument when connecting component " +
        i.wrappedComponentName +
        "."
    );
  };
}
function Cs(e, t) {
  return e === t;
}
function Ss(e) {
  var t = e === void 0 ? {} : e,
    r = t.connectHOC,
    n = r === void 0 ? is : r,
    a = t.mapStateToPropsFactories,
    o = a === void 0 ? ms : a,
    i = t.mapDispatchToPropsFactories,
    s = i === void 0 ? ds : i,
    c = t.mergePropsFactories,
    u = c === void 0 ? xs : c,
    p = t.selectorFactory,
    d = p === void 0 ? Ds : p;
  return function (m, g, b, h) {
    h === void 0 && (h = {});
    var x = h,
      y = x.pure,
      w = y === void 0 ? !0 : y,
      E = x.areStatesEqual,
      C = E === void 0 ? Cs : E,
      I = x.areOwnPropsEqual,
      F = I === void 0 ? Vr : I,
      R = x.areStatePropsEqual,
      L = R === void 0 ? Vr : R,
      T = x.areMergedPropsEqual,
      M = T === void 0 ? Vr : T,
      j = pr(x, Is),
      z = Kr(m, o, "mapStateToProps"),
      B = Kr(g, s, "mapDispatchToProps"),
      A = Kr(b, u, "mergeProps");
    return n(
      d,
      N(
        {
          methodName: "connect",
          getDisplayName: function (S) {
            return "Connect(" + S + ")";
          },
          shouldHandleStateChanges: Boolean(m),
          initMapStateToProps: z,
          initMapDispatchToProps: B,
          initMergeProps: A,
          pure: w,
          areStatesEqual: C,
          areOwnPropsEqual: F,
          areStatePropsEqual: L,
          areMergedPropsEqual: M,
        },
        j
      )
    );
  };
}
const Co = Ss();
$l(Ji.exports.unstable_batchedUpdates);
function As(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function So(e, t) {
  var r = v.exports.useState(function () {
      return { inputs: t, result: e() };
    })[0],
    n = v.exports.useRef(!0),
    a = v.exports.useRef(r),
    o = n.current || Boolean(t && a.current.inputs && As(t, a.current.inputs)),
    i = o ? a.current : { inputs: t, result: e() };
  return (
    v.exports.useEffect(
      function () {
        (n.current = !1), (a.current = i);
      },
      [i]
    ),
    i.result
  );
}
function Os(e, t) {
  return So(function () {
    return e;
  }, t);
}
var V = So,
  k = Os,
  Ps = !0,
  Yr = "Invariant failed";
function Bs(e, t) {
  if (!e) {
    if (Ps) throw new Error(Yr);
    var r = typeof t == "function" ? t() : t,
      n = r ? "".concat(Yr, ": ").concat(r) : Yr;
    throw new Error(n);
  }
}
var Pe = function (t) {
    var r = t.top,
      n = t.right,
      a = t.bottom,
      o = t.left,
      i = n - o,
      s = a - r,
      c = {
        top: r,
        right: n,
        bottom: a,
        left: o,
        width: i,
        height: s,
        x: o,
        y: r,
        center: { x: (n + o) / 2, y: (a + r) / 2 },
      };
    return c;
  },
  An = function (t, r) {
    return {
      top: t.top - r.top,
      left: t.left - r.left,
      bottom: t.bottom + r.bottom,
      right: t.right + r.right,
    };
  },
  ga = function (t, r) {
    return {
      top: t.top + r.top,
      left: t.left + r.left,
      bottom: t.bottom - r.bottom,
      right: t.right - r.right,
    };
  },
  Ns = function (t, r) {
    return {
      top: t.top + r.y,
      left: t.left + r.x,
      bottom: t.bottom + r.y,
      right: t.right + r.x,
    };
  },
  Jr = { top: 0, right: 0, bottom: 0, left: 0 },
  On = function (t) {
    var r = t.borderBox,
      n = t.margin,
      a = n === void 0 ? Jr : n,
      o = t.border,
      i = o === void 0 ? Jr : o,
      s = t.padding,
      c = s === void 0 ? Jr : s,
      u = Pe(An(r, a)),
      p = Pe(ga(r, i)),
      d = Pe(ga(p, c));
    return {
      marginBox: u,
      borderBox: Pe(r),
      paddingBox: p,
      contentBox: d,
      margin: a,
      border: i,
      padding: c,
    };
  },
  Ee = function (t) {
    var r = t.slice(0, -2),
      n = t.slice(-2);
    if (n !== "px") return 0;
    var a = Number(r);
    return isNaN(a) && Bs(!1), a;
  },
  Fs = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  fr = function (t, r) {
    var n = t.borderBox,
      a = t.border,
      o = t.margin,
      i = t.padding,
      s = Ns(n, r);
    return On({ borderBox: s, border: a, margin: o, padding: i });
  },
  mr = function (t, r) {
    return r === void 0 && (r = Fs()), fr(t, r);
  },
  Ao = function (t, r) {
    var n = {
        top: Ee(r.marginTop),
        right: Ee(r.marginRight),
        bottom: Ee(r.marginBottom),
        left: Ee(r.marginLeft),
      },
      a = {
        top: Ee(r.paddingTop),
        right: Ee(r.paddingRight),
        bottom: Ee(r.paddingBottom),
        left: Ee(r.paddingLeft),
      },
      o = {
        top: Ee(r.borderTopWidth),
        right: Ee(r.borderRightWidth),
        bottom: Ee(r.borderBottomWidth),
        left: Ee(r.borderLeftWidth),
      };
    return On({ borderBox: t, margin: n, padding: a, border: o });
  },
  Oo = function (t) {
    var r = t.getBoundingClientRect(),
      n = window.getComputedStyle(t);
    return Ao(r, n);
  },
  Rs = function (t) {
    var r = [],
      n = null,
      a = function () {
        for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++)
          s[c] = arguments[c];
        (r = s),
          !n &&
            (n = requestAnimationFrame(function () {
              (n = null), t.apply(void 0, r);
            }));
      };
    return (
      (a.cancel = function () {
        !n || (cancelAnimationFrame(n), (n = null));
      }),
      a
    );
  };
const Ft = Rs;
function Po(e, t) {}
Po.bind(null, "warn");
Po.bind(null, "error");
function je() {}
function ks(e, t) {
  return N({}, e, {}, t);
}
function Ie(e, t, r) {
  var n = t.map(function (a) {
    var o = ks(r, a.options);
    return (
      e.addEventListener(a.eventName, a.fn, o),
      function () {
        e.removeEventListener(a.eventName, a.fn, o);
      }
    );
  });
  return function () {
    n.forEach(function (o) {
      o();
    });
  };
}
var Ts = "Invariant failed";
function gr(e) {
  this.message = e;
}
gr.prototype.toString = function () {
  return this.message;
};
function D(e, t) {
  if (!e) throw new gr(Ts);
}
var Ms = (function (e) {
    ro(t, e);
    function t() {
      for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      return (
        (n = e.call.apply(e, [this].concat(o)) || this),
        (n.callbacks = null),
        (n.unbind = je),
        (n.onWindowError = function (s) {
          var c = n.getCallbacks();
          c.isDragging() && c.tryAbort();
          var u = s.error;
          u instanceof gr && s.preventDefault();
        }),
        (n.getCallbacks = function () {
          if (!n.callbacks)
            throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
          return n.callbacks;
        }),
        (n.setCallbacks = function (s) {
          n.callbacks = s;
        }),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.unbind = Ie(window, [
          { eventName: "error", fn: this.onWindowError },
        ]);
      }),
      (r.componentDidCatch = function (a) {
        if (a instanceof gr) {
          this.setState({});
          return;
        }
        throw a;
      }),
      (r.componentWillUnmount = function () {
        this.unbind();
      }),
      (r.render = function () {
        return this.props.children(this.setCallbacks);
      }),
      t
    );
  })(l.Component),
  Ls = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  vr = function (t) {
    return t + 1;
  },
  $s = function (t) {
    return (
      `
  You have lifted an item in position ` +
      vr(t.source.index) +
      `
`
    );
  },
  Bo = function (t, r) {
    var n = t.droppableId === r.droppableId,
      a = vr(t.index),
      o = vr(r.index);
    return n
      ? `
      You have moved the item from position ` +
          a +
          `
      to position ` +
          o +
          `
    `
      : `
    You have moved the item from position ` +
          a +
          `
    in list ` +
          t.droppableId +
          `
    to list ` +
          r.droppableId +
          `
    in position ` +
          o +
          `
  `;
  },
  No = function (t, r, n) {
    var a = r.droppableId === n.droppableId;
    return a
      ? `
      The item ` +
          t +
          `
      has been combined with ` +
          n.draggableId
      : `
      The item ` +
          t +
          `
      in list ` +
          r.droppableId +
          `
      has been combined with ` +
          n.draggableId +
          `
      in list ` +
          n.droppableId +
          `
    `;
  },
  Gs = function (t) {
    var r = t.destination;
    if (r) return Bo(t.source, r);
    var n = t.combine;
    return n
      ? No(t.draggableId, t.source, n)
      : "You are over an area that cannot be dropped on";
  },
  va = function (t) {
    return (
      `
  The item has returned to its starting position
  of ` +
      vr(t.index) +
      `
`
    );
  },
  zs = function (t) {
    if (t.reason === "CANCEL")
      return (
        `
      Movement cancelled.
      ` +
        va(t.source) +
        `
    `
      );
    var r = t.destination,
      n = t.combine;
    return r
      ? `
      You have dropped the item.
      ` +
          Bo(t.source, r) +
          `
    `
      : n
      ? `
      You have dropped the item.
      ` +
        No(t.draggableId, t.source, n) +
        `
    `
      : `
    The item has been dropped while not over a drop area.
    ` +
        va(t.source) +
        `
  `;
  },
  dr = {
    dragHandleUsageInstructions: Ls,
    onDragStart: $s,
    onDragUpdate: Gs,
    onDragEnd: zs,
  },
  le = { x: 0, y: 0 },
  ue = function (t, r) {
    return { x: t.x + r.x, y: t.y + r.y };
  },
  be = function (t, r) {
    return { x: t.x - r.x, y: t.y - r.y };
  },
  qe = function (t, r) {
    return t.x === r.x && t.y === r.y;
  },
  vt = function (t) {
    return { x: t.x !== 0 ? -t.x : 0, y: t.y !== 0 ? -t.y : 0 };
  },
  _e = function (t, r, n) {
    var a;
    return (
      n === void 0 && (n = 0),
      (a = {}),
      (a[t] = r),
      (a[t === "x" ? "y" : "x"] = n),
      a
    );
  },
  Rt = function (t, r) {
    return Math.sqrt(Math.pow(r.x - t.x, 2) + Math.pow(r.y - t.y, 2));
  },
  ba = function (t, r) {
    return Math.min.apply(
      Math,
      r.map(function (n) {
        return Rt(t, n);
      })
    );
  },
  Fo = function (t) {
    return function (r) {
      return { x: t(r.x), y: t(r.y) };
    };
  },
  js = function (e, t) {
    var r = Pe({
      top: Math.max(t.top, e.top),
      right: Math.min(t.right, e.right),
      bottom: Math.min(t.bottom, e.bottom),
      left: Math.max(t.left, e.left),
    });
    return r.width <= 0 || r.height <= 0 ? null : r;
  },
  Qt = function (t, r) {
    return {
      top: t.top + r.y,
      left: t.left + r.x,
      bottom: t.bottom + r.y,
      right: t.right + r.x,
    };
  },
  ha = function (t) {
    return [
      { x: t.left, y: t.top },
      { x: t.right, y: t.top },
      { x: t.left, y: t.bottom },
      { x: t.right, y: t.bottom },
    ];
  },
  qs = { top: 0, right: 0, bottom: 0, left: 0 },
  Ws = function (t, r) {
    return r ? Qt(t, r.scroll.diff.displacement) : t;
  },
  Us = function (t, r, n) {
    if (n && n.increasedBy) {
      var a;
      return N(
        {},
        t,
        ((a = {}), (a[r.end] = t[r.end] + n.increasedBy[r.line]), a)
      );
    }
    return t;
  },
  Hs = function (t, r) {
    return r && r.shouldClipSubject ? js(r.pageMarginBox, t) : Pe(t);
  },
  ct = function (e) {
    var t = e.page,
      r = e.withPlaceholder,
      n = e.axis,
      a = e.frame,
      o = Ws(t.marginBox, a),
      i = Us(o, n, r),
      s = Hs(i, a);
    return { page: t, withPlaceholder: r, active: s };
  },
  Pn = function (e, t) {
    e.frame || D(!1);
    var r = e.frame,
      n = be(t, r.scroll.initial),
      a = vt(n),
      o = N({}, r, {
        scroll: {
          initial: r.scroll.initial,
          current: t,
          diff: { value: n, displacement: a },
          max: r.scroll.max,
        },
      }),
      i = ct({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: o,
      }),
      s = N({}, e, { frame: o, subject: i });
    return s;
  };
function br(e) {
  return Object.values
    ? Object.values(e)
    : Object.keys(e).map(function (t) {
        return e[t];
      });
}
function Bn(e, t) {
  if (e.findIndex) return e.findIndex(t);
  for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
  return -1;
}
function Ve(e, t) {
  if (e.find) return e.find(t);
  var r = Bn(e, t);
  if (r !== -1) return e[r];
}
function Ro(e) {
  return Array.prototype.slice.call(e);
}
var ko = ie(function (e) {
    return e.reduce(function (t, r) {
      return (t[r.descriptor.id] = r), t;
    }, {});
  }),
  To = ie(function (e) {
    return e.reduce(function (t, r) {
      return (t[r.descriptor.id] = r), t;
    }, {});
  }),
  Ar = ie(function (e) {
    return br(e);
  }),
  Vs = ie(function (e) {
    return br(e);
  }),
  bt = ie(function (e, t) {
    var r = Vs(t)
      .filter(function (n) {
        return e === n.descriptor.droppableId;
      })
      .sort(function (n, a) {
        return n.descriptor.index - a.descriptor.index;
      });
    return r;
  });
function Nn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Or(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Pr = ie(function (e, t) {
    return t.filter(function (r) {
      return r.descriptor.id !== e.descriptor.id;
    });
  }),
  Ks = function (e) {
    var t = e.isMovingForward,
      r = e.draggable,
      n = e.destination,
      a = e.insideDestination,
      o = e.previousImpact;
    if (!n.isCombineEnabled) return null;
    var i = Nn(o);
    if (!i) return null;
    function s(b) {
      var h = {
        type: "COMBINE",
        combine: { draggableId: b, droppableId: n.descriptor.id },
      };
      return N({}, o, { at: h });
    }
    var c = o.displaced.all,
      u = c.length ? c[0] : null;
    if (t) return u ? s(u) : null;
    var p = Pr(r, a);
    if (!u) {
      if (!p.length) return null;
      var d = p[p.length - 1];
      return s(d.descriptor.id);
    }
    var f = Bn(p, function (b) {
      return b.descriptor.id === u;
    });
    f === -1 && D(!1);
    var m = f - 1;
    if (m < 0) return null;
    var g = p[m];
    return s(g.descriptor.id);
  },
  ht = function (e, t) {
    return e.descriptor.droppableId === t.descriptor.id;
  },
  Mo = { point: le, value: 0 },
  kt = { invisible: {}, visible: {}, all: [] },
  Ys = { displaced: kt, displacedBy: Mo, at: null },
  Ce = function (e, t) {
    return function (r) {
      return e <= r && r <= t;
    };
  },
  Lo = function (e) {
    var t = Ce(e.top, e.bottom),
      r = Ce(e.left, e.right);
    return function (n) {
      var a = t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
      if (a) return !0;
      var o = t(n.top) || t(n.bottom),
        i = r(n.left) || r(n.right),
        s = o && i;
      if (s) return !0;
      var c = n.top < e.top && n.bottom > e.bottom,
        u = n.left < e.left && n.right > e.right,
        p = c && u;
      if (p) return !0;
      var d = (c && i) || (u && o);
      return d;
    };
  },
  Js = function (e) {
    var t = Ce(e.top, e.bottom),
      r = Ce(e.left, e.right);
    return function (n) {
      var a = t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
      return a;
    };
  },
  Fn = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width",
  },
  $o = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height",
  },
  Xs = function (e) {
    return function (t) {
      var r = Ce(t.top, t.bottom),
        n = Ce(t.left, t.right);
      return function (a) {
        return e === Fn ? r(a.top) && r(a.bottom) : n(a.left) && n(a.right);
      };
    };
  },
  Zs = function (t, r) {
    var n = r.frame ? r.frame.scroll.diff.displacement : le;
    return Qt(t, n);
  },
  Qs = function (t, r, n) {
    return r.subject.active ? n(r.subject.active)(t) : !1;
  },
  _s = function (t, r, n) {
    return n(r)(t);
  },
  Rn = function (t) {
    var r = t.target,
      n = t.destination,
      a = t.viewport,
      o = t.withDroppableDisplacement,
      i = t.isVisibleThroughFrameFn,
      s = o ? Zs(r, n) : r;
    return Qs(s, n, i) && _s(s, a, i);
  },
  ec = function (t) {
    return Rn(N({}, t, { isVisibleThroughFrameFn: Lo }));
  },
  Go = function (t) {
    return Rn(N({}, t, { isVisibleThroughFrameFn: Js }));
  },
  tc = function (t) {
    return Rn(N({}, t, { isVisibleThroughFrameFn: Xs(t.destination.axis) }));
  },
  rc = function (t, r, n) {
    if (typeof n == "boolean") return n;
    if (!r) return !0;
    var a = r.invisible,
      o = r.visible;
    if (a[t]) return !1;
    var i = o[t];
    return i ? i.shouldAnimate : !0;
  };
function nc(e, t) {
  var r = e.page.marginBox,
    n = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
  return Pe(An(r, n));
}
function Tt(e) {
  var t = e.afterDragging,
    r = e.destination,
    n = e.displacedBy,
    a = e.viewport,
    o = e.forceShouldAnimate,
    i = e.last;
  return t.reduce(
    function (c, u) {
      var p = nc(u, n),
        d = u.descriptor.id;
      c.all.push(d);
      var f = ec({
        target: p,
        destination: r,
        viewport: a,
        withDroppableDisplacement: !0,
      });
      if (!f) return (c.invisible[u.descriptor.id] = !0), c;
      var m = rc(d, i, o),
        g = { draggableId: d, shouldAnimate: m };
      return (c.visible[d] = g), c;
    },
    { all: [], visible: {}, invisible: {} }
  );
}
function ac(e, t) {
  if (!e.length) return 0;
  var r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function xa(e) {
  var t = e.insideDestination,
    r = e.inHomeList,
    n = e.displacedBy,
    a = e.destination,
    o = ac(t, { inHomeList: r });
  return {
    displaced: kt,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: { droppableId: a.descriptor.id, index: o },
    },
  };
}
function hr(e) {
  var t = e.draggable,
    r = e.insideDestination,
    n = e.destination,
    a = e.viewport,
    o = e.displacedBy,
    i = e.last,
    s = e.index,
    c = e.forceShouldAnimate,
    u = ht(t, n);
  if (s == null)
    return xa({
      insideDestination: r,
      inHomeList: u,
      displacedBy: o,
      destination: n,
    });
  var p = Ve(r, function (b) {
    return b.descriptor.index === s;
  });
  if (!p)
    return xa({
      insideDestination: r,
      inHomeList: u,
      displacedBy: o,
      destination: n,
    });
  var d = Pr(t, r),
    f = r.indexOf(p),
    m = d.slice(f),
    g = Tt({
      afterDragging: m,
      destination: n,
      displacedBy: o,
      last: i,
      viewport: a.frame,
      forceShouldAnimate: c,
    });
  return {
    displaced: g,
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: { droppableId: n.descriptor.id, index: s },
    },
  };
}
function Ue(e, t) {
  return Boolean(t.effected[e]);
}
var oc = function (e) {
    var t = e.isMovingForward,
      r = e.destination,
      n = e.draggables,
      a = e.combine,
      o = e.afterCritical;
    if (!r.isCombineEnabled) return null;
    var i = a.draggableId,
      s = n[i],
      c = s.descriptor.index,
      u = Ue(i, o);
    return u ? (t ? c : c - 1) : t ? c + 1 : c;
  },
  ic = function (e) {
    var t = e.isMovingForward,
      r = e.isInHomeList,
      n = e.insideDestination,
      a = e.location;
    if (!n.length) return null;
    var o = a.index,
      i = t ? o + 1 : o - 1,
      s = n[0].descriptor.index,
      c = n[n.length - 1].descriptor.index,
      u = r ? c : c + 1;
    return i < s || i > u ? null : i;
  },
  lc = function (e) {
    var t = e.isMovingForward,
      r = e.isInHomeList,
      n = e.draggable,
      a = e.draggables,
      o = e.destination,
      i = e.insideDestination,
      s = e.previousImpact,
      c = e.viewport,
      u = e.afterCritical,
      p = s.at;
    if ((p || D(!1), p.type === "REORDER")) {
      var d = ic({
        isMovingForward: t,
        isInHomeList: r,
        location: p.destination,
        insideDestination: i,
      });
      return d == null
        ? null
        : hr({
            draggable: n,
            insideDestination: i,
            destination: o,
            viewport: c,
            last: s.displaced,
            displacedBy: s.displacedBy,
            index: d,
          });
    }
    var f = oc({
      isMovingForward: t,
      destination: o,
      displaced: s.displaced,
      draggables: a,
      combine: p.combine,
      afterCritical: u,
    });
    return f == null
      ? null
      : hr({
          draggable: n,
          insideDestination: i,
          destination: o,
          viewport: c,
          last: s.displaced,
          displacedBy: s.displacedBy,
          index: f,
        });
  },
  sc = function (e) {
    var t = e.displaced,
      r = e.afterCritical,
      n = e.combineWith,
      a = e.displacedBy,
      o = Boolean(t.visible[n] || t.invisible[n]);
    return Ue(n, r) ? (o ? le : vt(a.point)) : o ? a.point : le;
  },
  cc = function (e) {
    var t = e.afterCritical,
      r = e.impact,
      n = e.draggables,
      a = Or(r);
    a || D(!1);
    var o = a.draggableId,
      i = n[o].page.borderBox.center,
      s = sc({
        displaced: r.displaced,
        afterCritical: t,
        combineWith: o,
        displacedBy: r.displacedBy,
      });
    return ue(i, s);
  },
  zo = function (t, r) {
    return r.margin[t.start] + r.borderBox[t.size] / 2;
  },
  uc = function (t, r) {
    return r.margin[t.end] + r.borderBox[t.size] / 2;
  },
  kn = function (t, r, n) {
    return (
      r[t.crossAxisStart] +
      n.margin[t.crossAxisStart] +
      n.borderBox[t.crossAxisSize] / 2
    );
  },
  ya = function (t) {
    var r = t.axis,
      n = t.moveRelativeTo,
      a = t.isMoving;
    return _e(r.line, n.marginBox[r.end] + zo(r, a), kn(r, n.marginBox, a));
  },
  Ea = function (t) {
    var r = t.axis,
      n = t.moveRelativeTo,
      a = t.isMoving;
    return _e(r.line, n.marginBox[r.start] - uc(r, a), kn(r, n.marginBox, a));
  },
  dc = function (t) {
    var r = t.axis,
      n = t.moveInto,
      a = t.isMoving;
    return _e(r.line, n.contentBox[r.start] + zo(r, a), kn(r, n.contentBox, a));
  },
  pc = function (e) {
    var t = e.impact,
      r = e.draggable,
      n = e.draggables,
      a = e.droppable,
      o = e.afterCritical,
      i = bt(a.descriptor.id, n),
      s = r.page,
      c = a.axis;
    if (!i.length) return dc({ axis: c, moveInto: a.page, isMoving: s });
    var u = t.displaced,
      p = t.displacedBy,
      d = u.all[0];
    if (d) {
      var f = n[d];
      if (Ue(d, o)) return Ea({ axis: c, moveRelativeTo: f.page, isMoving: s });
      var m = fr(f.page, p.point);
      return Ea({ axis: c, moveRelativeTo: m, isMoving: s });
    }
    var g = i[i.length - 1];
    if (g.descriptor.id === r.descriptor.id) return s.borderBox.center;
    if (Ue(g.descriptor.id, o)) {
      var b = fr(g.page, vt(o.displacedBy.point));
      return ya({ axis: c, moveRelativeTo: b, isMoving: s });
    }
    return ya({ axis: c, moveRelativeTo: g.page, isMoving: s });
  },
  ln = function (e, t) {
    var r = e.frame;
    return r ? ue(t, r.scroll.diff.displacement) : t;
  },
  fc = function (t) {
    var r = t.impact,
      n = t.draggable,
      a = t.droppable,
      o = t.draggables,
      i = t.afterCritical,
      s = n.page.borderBox.center,
      c = r.at;
    return !a || !c
      ? s
      : c.type === "REORDER"
      ? pc({
          impact: r,
          draggable: n,
          draggables: o,
          droppable: a,
          afterCritical: i,
        })
      : cc({ impact: r, draggables: o, afterCritical: i });
  },
  Br = function (e) {
    var t = fc(e),
      r = e.droppable,
      n = r ? ln(r, t) : t;
    return n;
  },
  jo = function (e, t) {
    var r = be(t, e.scroll.initial),
      n = vt(r),
      a = Pe({
        top: t.y,
        bottom: t.y + e.frame.height,
        left: t.x,
        right: t.x + e.frame.width,
      }),
      o = {
        frame: a,
        scroll: {
          initial: e.scroll.initial,
          max: e.scroll.max,
          current: t,
          diff: { value: r, displacement: n },
        },
      };
    return o;
  };
function wa(e, t) {
  return e.map(function (r) {
    return t[r];
  });
}
function mc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r].visible[e];
    if (n) return n;
  }
  return null;
}
var gc = function (e) {
    var t = e.impact,
      r = e.viewport,
      n = e.destination,
      a = e.draggables,
      o = e.maxScrollChange,
      i = jo(r, ue(r.scroll.current, o)),
      s = n.frame ? Pn(n, ue(n.frame.scroll.current, o)) : n,
      c = t.displaced,
      u = Tt({
        afterDragging: wa(c.all, a),
        destination: n,
        displacedBy: t.displacedBy,
        viewport: i.frame,
        last: c,
        forceShouldAnimate: !1,
      }),
      p = Tt({
        afterDragging: wa(c.all, a),
        destination: s,
        displacedBy: t.displacedBy,
        viewport: r.frame,
        last: c,
        forceShouldAnimate: !1,
      }),
      d = {},
      f = {},
      m = [c, u, p];
    c.all.forEach(function (b) {
      var h = mc(b, m);
      if (h) {
        f[b] = h;
        return;
      }
      d[b] = !0;
    });
    var g = N({}, t, { displaced: { all: c.all, invisible: d, visible: f } });
    return g;
  },
  vc = function (e, t) {
    return ue(e.scroll.diff.displacement, t);
  },
  Tn = function (e) {
    var t = e.pageBorderBoxCenter,
      r = e.draggable,
      n = e.viewport,
      a = vc(n, t),
      o = be(a, r.page.borderBox.center);
    return ue(r.client.borderBox.center, o);
  },
  qo = function (e) {
    var t = e.draggable,
      r = e.destination,
      n = e.newPageBorderBoxCenter,
      a = e.viewport,
      o = e.withDroppableDisplacement,
      i = e.onlyOnMainAxis,
      s = i === void 0 ? !1 : i,
      c = be(n, t.page.borderBox.center),
      u = Qt(t.page.borderBox, c),
      p = {
        target: u,
        destination: r,
        withDroppableDisplacement: o,
        viewport: a,
      };
    return s ? tc(p) : Go(p);
  },
  bc = function (e) {
    var t = e.isMovingForward,
      r = e.draggable,
      n = e.destination,
      a = e.draggables,
      o = e.previousImpact,
      i = e.viewport,
      s = e.previousPageBorderBoxCenter,
      c = e.previousClientSelection,
      u = e.afterCritical;
    if (!n.isEnabled) return null;
    var p = bt(n.descriptor.id, a),
      d = ht(r, n),
      f =
        Ks({
          isMovingForward: t,
          draggable: r,
          destination: n,
          insideDestination: p,
          previousImpact: o,
        }) ||
        lc({
          isMovingForward: t,
          isInHomeList: d,
          draggable: r,
          draggables: a,
          destination: n,
          insideDestination: p,
          previousImpact: o,
          viewport: i,
          afterCritical: u,
        });
    if (!f) return null;
    var m = Br({
        impact: f,
        draggable: r,
        droppable: n,
        draggables: a,
        afterCritical: u,
      }),
      g = qo({
        draggable: r,
        destination: n,
        newPageBorderBoxCenter: m,
        viewport: i.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      });
    if (g) {
      var b = Tn({ pageBorderBoxCenter: m, draggable: r, viewport: i });
      return { clientSelection: b, impact: f, scrollJumpRequest: null };
    }
    var h = be(m, s),
      x = gc({
        impact: f,
        viewport: i,
        destination: n,
        draggables: a,
        maxScrollChange: h,
      });
    return { clientSelection: c, impact: x, scrollJumpRequest: h };
  },
  me = function (t) {
    var r = t.subject.active;
    return r || D(!1), r;
  },
  hc = function (e) {
    var t = e.isMovingForward,
      r = e.pageBorderBoxCenter,
      n = e.source,
      a = e.droppables,
      o = e.viewport,
      i = n.subject.active;
    if (!i) return null;
    var s = n.axis,
      c = Ce(i[s.start], i[s.end]),
      u = Ar(a)
        .filter(function (d) {
          return d !== n;
        })
        .filter(function (d) {
          return d.isEnabled;
        })
        .filter(function (d) {
          return Boolean(d.subject.active);
        })
        .filter(function (d) {
          return Lo(o.frame)(me(d));
        })
        .filter(function (d) {
          var f = me(d);
          return t
            ? i[s.crossAxisEnd] < f[s.crossAxisEnd]
            : f[s.crossAxisStart] < i[s.crossAxisStart];
        })
        .filter(function (d) {
          var f = me(d),
            m = Ce(f[s.start], f[s.end]);
          return c(f[s.start]) || c(f[s.end]) || m(i[s.start]) || m(i[s.end]);
        })
        .sort(function (d, f) {
          var m = me(d)[s.crossAxisStart],
            g = me(f)[s.crossAxisStart];
          return t ? m - g : g - m;
        })
        .filter(function (d, f, m) {
          return me(d)[s.crossAxisStart] === me(m[0])[s.crossAxisStart];
        });
    if (!u.length) return null;
    if (u.length === 1) return u[0];
    var p = u.filter(function (d) {
      var f = Ce(me(d)[s.start], me(d)[s.end]);
      return f(r[s.line]);
    });
    return p.length === 1
      ? p[0]
      : p.length > 1
      ? p.sort(function (d, f) {
          return me(d)[s.start] - me(f)[s.start];
        })[0]
      : u.sort(function (d, f) {
          var m = ba(r, ha(me(d))),
            g = ba(r, ha(me(f)));
          return m !== g ? m - g : me(d)[s.start] - me(f)[s.start];
        })[0];
  },
  Da = function (t, r) {
    var n = t.page.borderBox.center;
    return Ue(t.descriptor.id, r) ? be(n, r.displacedBy.point) : n;
  },
  xc = function (t, r) {
    var n = t.page.borderBox;
    return Ue(t.descriptor.id, r) ? Qt(n, vt(r.displacedBy.point)) : n;
  },
  yc = function (e) {
    var t = e.pageBorderBoxCenter,
      r = e.viewport,
      n = e.destination,
      a = e.insideDestination,
      o = e.afterCritical,
      i = a
        .filter(function (s) {
          return Go({
            target: xc(s, o),
            destination: n,
            viewport: r.frame,
            withDroppableDisplacement: !0,
          });
        })
        .sort(function (s, c) {
          var u = Rt(t, ln(n, Da(s, o))),
            p = Rt(t, ln(n, Da(c, o)));
          return u < p
            ? -1
            : p < u
            ? 1
            : s.descriptor.index - c.descriptor.index;
        });
    return i[0] || null;
  },
  _t = ie(function (t, r) {
    var n = r[t.line];
    return { value: n, point: _e(t.line, n) };
  }),
  Ec = function (t, r, n) {
    var a = t.axis;
    if (t.descriptor.mode === "virtual") return _e(a.line, r[a.line]);
    var o = t.subject.page.contentBox[a.size],
      i = bt(t.descriptor.id, n),
      s = i.reduce(function (p, d) {
        return p + d.client.marginBox[a.size];
      }, 0),
      c = s + r[a.line],
      u = c - o;
    return u <= 0 ? null : _e(a.line, u);
  },
  Wo = function (t, r) {
    return N({}, t, { scroll: N({}, t.scroll, { max: r }) });
  },
  Uo = function (t, r, n) {
    var a = t.frame;
    ht(r, t) && D(!1), t.subject.withPlaceholder && D(!1);
    var o = _t(t.axis, r.displaceBy).point,
      i = Ec(t, o, n),
      s = {
        placeholderSize: o,
        increasedBy: i,
        oldFrameMaxScroll: t.frame ? t.frame.scroll.max : null,
      };
    if (!a) {
      var c = ct({
        page: t.subject.page,
        withPlaceholder: s,
        axis: t.axis,
        frame: t.frame,
      });
      return N({}, t, { subject: c });
    }
    var u = i ? ue(a.scroll.max, i) : a.scroll.max,
      p = Wo(a, u),
      d = ct({
        page: t.subject.page,
        withPlaceholder: s,
        axis: t.axis,
        frame: p,
      });
    return N({}, t, { subject: d, frame: p });
  },
  wc = function (t) {
    var r = t.subject.withPlaceholder;
    r || D(!1);
    var n = t.frame;
    if (!n) {
      var a = ct({
        page: t.subject.page,
        axis: t.axis,
        frame: null,
        withPlaceholder: null,
      });
      return N({}, t, { subject: a });
    }
    var o = r.oldFrameMaxScroll;
    o || D(!1);
    var i = Wo(n, o),
      s = ct({
        page: t.subject.page,
        axis: t.axis,
        frame: i,
        withPlaceholder: null,
      });
    return N({}, t, { subject: s, frame: i });
  },
  Dc = function (e) {
    var t = e.previousPageBorderBoxCenter,
      r = e.moveRelativeTo,
      n = e.insideDestination,
      a = e.draggable,
      o = e.draggables,
      i = e.destination,
      s = e.viewport,
      c = e.afterCritical;
    if (!r) {
      if (n.length) return null;
      var u = {
          displaced: kt,
          displacedBy: Mo,
          at: {
            type: "REORDER",
            destination: { droppableId: i.descriptor.id, index: 0 },
          },
        },
        p = Br({
          impact: u,
          draggable: a,
          droppable: i,
          draggables: o,
          afterCritical: c,
        }),
        d = ht(a, i) ? i : Uo(i, a, o),
        f = qo({
          draggable: a,
          destination: d,
          newPageBorderBoxCenter: p,
          viewport: s.frame,
          withDroppableDisplacement: !1,
          onlyOnMainAxis: !0,
        });
      return f ? u : null;
    }
    var m = Boolean(t[i.axis.line] <= r.page.borderBox.center[i.axis.line]),
      g = (function () {
        var h = r.descriptor.index;
        return r.descriptor.id === a.descriptor.id || m ? h : h + 1;
      })(),
      b = _t(i.axis, a.displaceBy);
    return hr({
      draggable: a,
      insideDestination: n,
      destination: i,
      viewport: s,
      displacedBy: b,
      last: kt,
      index: g,
    });
  },
  Ic = function (e) {
    var t = e.isMovingForward,
      r = e.previousPageBorderBoxCenter,
      n = e.draggable,
      a = e.isOver,
      o = e.draggables,
      i = e.droppables,
      s = e.viewport,
      c = e.afterCritical,
      u = hc({
        isMovingForward: t,
        pageBorderBoxCenter: r,
        source: a,
        droppables: i,
        viewport: s,
      });
    if (!u) return null;
    var p = bt(u.descriptor.id, o),
      d = yc({
        pageBorderBoxCenter: r,
        viewport: s,
        destination: u,
        insideDestination: p,
        afterCritical: c,
      }),
      f = Dc({
        previousPageBorderBoxCenter: r,
        destination: u,
        draggable: n,
        draggables: o,
        moveRelativeTo: d,
        insideDestination: p,
        viewport: s,
        afterCritical: c,
      });
    if (!f) return null;
    var m = Br({
        impact: f,
        draggable: n,
        droppable: u,
        draggables: o,
        afterCritical: c,
      }),
      g = Tn({ pageBorderBoxCenter: m, draggable: n, viewport: s });
    return { clientSelection: g, impact: f, scrollJumpRequest: null };
  },
  he = function (e) {
    var t = e.at;
    return t
      ? t.type === "REORDER"
        ? t.destination.droppableId
        : t.combine.droppableId
      : null;
  },
  Cc = function (t, r) {
    var n = he(t);
    return n ? r[n] : null;
  },
  Sc = function (e) {
    var t = e.state,
      r = e.type,
      n = Cc(t.impact, t.dimensions.droppables),
      a = Boolean(n),
      o = t.dimensions.droppables[t.critical.droppable.id],
      i = n || o,
      s = i.axis.direction,
      c =
        (s === "vertical" && (r === "MOVE_UP" || r === "MOVE_DOWN")) ||
        (s === "horizontal" && (r === "MOVE_LEFT" || r === "MOVE_RIGHT"));
    if (c && !a) return null;
    var u = r === "MOVE_DOWN" || r === "MOVE_RIGHT",
      p = t.dimensions.draggables[t.critical.draggable.id],
      d = t.current.page.borderBoxCenter,
      f = t.dimensions,
      m = f.draggables,
      g = f.droppables;
    return c
      ? bc({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: p,
          destination: i,
          draggables: m,
          viewport: t.viewport,
          previousClientSelection: t.current.client.selection,
          previousImpact: t.impact,
          afterCritical: t.afterCritical,
        })
      : Ic({
          isMovingForward: u,
          previousPageBorderBoxCenter: d,
          draggable: p,
          isOver: i,
          draggables: m,
          droppables: g,
          viewport: t.viewport,
          afterCritical: t.afterCritical,
        });
  };
function Xe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ho(e) {
  var t = Ce(e.top, e.bottom),
    r = Ce(e.left, e.right);
  return function (a) {
    return t(a.y) && r(a.x);
  };
}
function Ac(e, t) {
  return (
    e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
  );
}
function Oc(e) {
  var t = e.pageBorderBox,
    r = e.draggable,
    n = e.candidates,
    a = r.page.borderBox.center,
    o = n
      .map(function (i) {
        var s = i.axis,
          c = _e(
            i.axis.line,
            t.center[s.line],
            i.page.borderBox.center[s.crossAxisLine]
          );
        return { id: i.descriptor.id, distance: Rt(a, c) };
      })
      .sort(function (i, s) {
        return s.distance - i.distance;
      });
  return o[0] ? o[0].id : null;
}
function Pc(e) {
  var t = e.pageBorderBox,
    r = e.draggable,
    n = e.droppables,
    a = Ar(n).filter(function (o) {
      if (!o.isEnabled) return !1;
      var i = o.subject.active;
      if (!i || !Ac(t, i)) return !1;
      if (Ho(i)(t.center)) return !0;
      var s = o.axis,
        c = i.center[s.crossAxisLine],
        u = t[s.crossAxisStart],
        p = t[s.crossAxisEnd],
        d = Ce(i[s.crossAxisStart], i[s.crossAxisEnd]),
        f = d(u),
        m = d(p);
      return !f && !m ? !0 : f ? u < c : p > c;
    });
  return a.length
    ? a.length === 1
      ? a[0].descriptor.id
      : Oc({ pageBorderBox: t, draggable: r, candidates: a })
    : null;
}
var Vo = function (t, r) {
    return Pe(Qt(t, r));
  },
  Bc = function (e, t) {
    var r = e.frame;
    return r ? Vo(t, r.scroll.diff.value) : t;
  };
function Ko(e) {
  var t = e.displaced,
    r = e.id;
  return Boolean(t.visible[r] || t.invisible[r]);
}
function Nc(e) {
  var t = e.draggable,
    r = e.closest,
    n = e.inHomeList;
  return r
    ? n && r.descriptor.index > t.descriptor.index
      ? r.descriptor.index - 1
      : r.descriptor.index
    : null;
}
var Fc = function (e) {
    var t = e.pageBorderBoxWithDroppableScroll,
      r = e.draggable,
      n = e.destination,
      a = e.insideDestination,
      o = e.last,
      i = e.viewport,
      s = e.afterCritical,
      c = n.axis,
      u = _t(n.axis, r.displaceBy),
      p = u.value,
      d = t[c.start],
      f = t[c.end],
      m = Pr(r, a),
      g = Ve(m, function (h) {
        var x = h.descriptor.id,
          y = h.page.borderBox.center[c.line],
          w = Ue(x, s),
          E = Ko({ displaced: o, id: x });
        return w ? (E ? f <= y : d < y - p) : E ? f <= y + p : d < y;
      }),
      b = Nc({ draggable: r, closest: g, inHomeList: ht(r, n) });
    return hr({
      draggable: r,
      insideDestination: a,
      destination: n,
      viewport: i,
      last: o,
      displacedBy: u,
      index: b,
    });
  },
  Rc = 4,
  kc = function (e) {
    var t = e.draggable,
      r = e.pageBorderBoxWithDroppableScroll,
      n = e.previousImpact,
      a = e.destination,
      o = e.insideDestination,
      i = e.afterCritical;
    if (!a.isCombineEnabled) return null;
    var s = a.axis,
      c = _t(a.axis, t.displaceBy),
      u = c.value,
      p = r[s.start],
      d = r[s.end],
      f = Pr(t, o),
      m = Ve(f, function (b) {
        var h = b.descriptor.id,
          x = b.page.borderBox,
          y = x[s.size],
          w = y / Rc,
          E = Ue(h, i),
          C = Ko({ displaced: n.displaced, id: h });
        return E
          ? C
            ? d > x[s.start] + w && d < x[s.end] - w
            : p > x[s.start] - u + w && p < x[s.end] - u - w
          : C
          ? d > x[s.start] + u + w && d < x[s.end] + u - w
          : p > x[s.start] + w && p < x[s.end] - w;
      });
    if (!m) return null;
    var g = {
      displacedBy: c,
      displaced: n.displaced,
      at: {
        type: "COMBINE",
        combine: { draggableId: m.descriptor.id, droppableId: a.descriptor.id },
      },
    };
    return g;
  },
  Yo = function (e) {
    var t = e.pageOffset,
      r = e.draggable,
      n = e.draggables,
      a = e.droppables,
      o = e.previousImpact,
      i = e.viewport,
      s = e.afterCritical,
      c = Vo(r.page.borderBox, t),
      u = Pc({ pageBorderBox: c, draggable: r, droppables: a });
    if (!u) return Ys;
    var p = a[u],
      d = bt(p.descriptor.id, n),
      f = Bc(p, c);
    return (
      kc({
        pageBorderBoxWithDroppableScroll: f,
        draggable: r,
        previousImpact: o,
        destination: p,
        insideDestination: d,
        afterCritical: s,
      }) ||
      Fc({
        pageBorderBoxWithDroppableScroll: f,
        draggable: r,
        destination: p,
        insideDestination: d,
        last: o.displaced,
        viewport: i,
        afterCritical: s,
      })
    );
  },
  Mn = function (e, t) {
    var r;
    return N({}, e, ((r = {}), (r[t.descriptor.id] = t), r));
  },
  Tc = function (t) {
    var r = t.previousImpact,
      n = t.impact,
      a = t.droppables,
      o = he(r),
      i = he(n);
    if (!o || o === i) return a;
    var s = a[o];
    if (!s.subject.withPlaceholder) return a;
    var c = wc(s);
    return Mn(a, c);
  },
  Mc = function (e) {
    var t = e.draggable,
      r = e.draggables,
      n = e.droppables,
      a = e.previousImpact,
      o = e.impact,
      i = Tc({ previousImpact: a, impact: o, droppables: n }),
      s = he(o);
    if (!s) return i;
    var c = n[s];
    if (ht(t, c) || c.subject.withPlaceholder) return i;
    var u = Uo(c, t, r);
    return Mn(i, u);
  },
  Bt = function (e) {
    var t = e.state,
      r = e.clientSelection,
      n = e.dimensions,
      a = e.viewport,
      o = e.impact,
      i = e.scrollJumpRequest,
      s = a || t.viewport,
      c = n || t.dimensions,
      u = r || t.current.client.selection,
      p = be(u, t.initial.client.selection),
      d = {
        offset: p,
        selection: u,
        borderBoxCenter: ue(t.initial.client.borderBoxCenter, p),
      },
      f = {
        selection: ue(d.selection, s.scroll.current),
        borderBoxCenter: ue(d.borderBoxCenter, s.scroll.current),
        offset: ue(d.offset, s.scroll.diff.value),
      },
      m = { client: d, page: f };
    if (t.phase === "COLLECTING")
      return N({ phase: "COLLECTING" }, t, {
        dimensions: c,
        viewport: s,
        current: m,
      });
    var g = c.draggables[t.critical.draggable.id],
      b =
        o ||
        Yo({
          pageOffset: f.offset,
          draggable: g,
          draggables: c.draggables,
          droppables: c.droppables,
          previousImpact: t.impact,
          viewport: s,
          afterCritical: t.afterCritical,
        }),
      h = Mc({
        draggable: g,
        impact: b,
        previousImpact: t.impact,
        draggables: c.draggables,
        droppables: c.droppables,
      }),
      x = N({}, t, {
        current: m,
        dimensions: { draggables: c.draggables, droppables: h },
        impact: b,
        viewport: s,
        scrollJumpRequest: i || null,
        forceShouldAnimate: i ? !1 : null,
      });
    return x;
  };
function Lc(e, t) {
  return e.map(function (r) {
    return t[r];
  });
}
var Jo = function (e) {
    var t = e.impact,
      r = e.viewport,
      n = e.draggables,
      a = e.destination,
      o = e.forceShouldAnimate,
      i = t.displaced,
      s = Lc(i.all, n),
      c = Tt({
        afterDragging: s,
        destination: a,
        displacedBy: t.displacedBy,
        viewport: r.frame,
        forceShouldAnimate: o,
        last: i,
      });
    return N({}, t, { displaced: c });
  },
  Xo = function (e) {
    var t = e.impact,
      r = e.draggable,
      n = e.droppable,
      a = e.draggables,
      o = e.viewport,
      i = e.afterCritical,
      s = Br({
        impact: t,
        draggable: r,
        draggables: a,
        droppable: n,
        afterCritical: i,
      });
    return Tn({ pageBorderBoxCenter: s, draggable: r, viewport: o });
  },
  Zo = function (e) {
    var t = e.state,
      r = e.dimensions,
      n = e.viewport;
    t.movementMode !== "SNAP" && D(!1);
    var a = t.impact,
      o = n || t.viewport,
      i = r || t.dimensions,
      s = i.draggables,
      c = i.droppables,
      u = s[t.critical.draggable.id],
      p = he(a);
    p || D(!1);
    var d = c[p],
      f = Jo({ impact: a, viewport: o, destination: d, draggables: s }),
      m = Xo({
        impact: f,
        draggable: u,
        droppable: d,
        draggables: s,
        viewport: o,
        afterCritical: t.afterCritical,
      });
    return Bt({
      impact: f,
      clientSelection: m,
      state: t,
      dimensions: i,
      viewport: o,
    });
  },
  $c = function (e) {
    return { index: e.index, droppableId: e.droppableId };
  },
  Qo = function (e) {
    var t = e.draggable,
      r = e.home,
      n = e.draggables,
      a = e.viewport,
      o = _t(r.axis, t.displaceBy),
      i = bt(r.descriptor.id, n),
      s = i.indexOf(t);
    s === -1 && D(!1);
    var c = i.slice(s + 1),
      u = c.reduce(function (m, g) {
        return (m[g.descriptor.id] = !0), m;
      }, {}),
      p = {
        inVirtualList: r.descriptor.mode === "virtual",
        displacedBy: o,
        effected: u,
      },
      d = Tt({
        afterDragging: c,
        destination: r,
        displacedBy: o,
        last: null,
        viewport: a.frame,
        forceShouldAnimate: !1,
      }),
      f = {
        displaced: d,
        displacedBy: o,
        at: { type: "REORDER", destination: $c(t.descriptor) },
      };
    return { impact: f, afterCritical: p };
  },
  Gc = function (e, t) {
    return { draggables: e.draggables, droppables: Mn(e.droppables, t) };
  },
  zc = function (e) {
    var t = e.draggable,
      r = e.offset,
      n = e.initialWindowScroll,
      a = fr(t.client, r),
      o = mr(a, n),
      i = N({}, t, {
        placeholder: N({}, t.placeholder, { client: a }),
        client: a,
        page: o,
      });
    return i;
  },
  jc = function (e) {
    var t = e.frame;
    return t || D(!1), t;
  },
  qc = function (e) {
    var t = e.additions,
      r = e.updatedDroppables,
      n = e.viewport,
      a = n.scroll.diff.value;
    return t.map(function (o) {
      var i = o.descriptor.droppableId,
        s = r[i],
        c = jc(s),
        u = c.scroll.diff.value,
        p = ue(a, u),
        d = zc({
          draggable: o,
          offset: p,
          initialWindowScroll: n.scroll.initial,
        });
      return d;
    });
  },
  Wc = function (e) {
    var t = e.state,
      r = e.published,
      n = r.modified.map(function (w) {
        var E = t.dimensions.droppables[w.droppableId],
          C = Pn(E, w.scroll);
        return C;
      }),
      a = N({}, t.dimensions.droppables, {}, ko(n)),
      o = To(
        qc({
          additions: r.additions,
          updatedDroppables: a,
          viewport: t.viewport,
        })
      ),
      i = N({}, t.dimensions.draggables, {}, o);
    r.removals.forEach(function (w) {
      delete i[w];
    });
    var s = { droppables: a, draggables: i },
      c = he(t.impact),
      u = c ? s.droppables[c] : null,
      p = s.draggables[t.critical.draggable.id],
      d = s.droppables[t.critical.droppable.id],
      f = Qo({ draggable: p, home: d, draggables: i, viewport: t.viewport }),
      m = f.impact,
      g = f.afterCritical,
      b = u && u.isCombineEnabled ? t.impact : m,
      h = Yo({
        pageOffset: t.current.page.offset,
        draggable: s.draggables[t.critical.draggable.id],
        draggables: s.draggables,
        droppables: s.droppables,
        previousImpact: b,
        viewport: t.viewport,
        afterCritical: g,
      }),
      x = N({ phase: "DRAGGING" }, t, {
        phase: "DRAGGING",
        impact: h,
        onLiftImpact: m,
        dimensions: s,
        afterCritical: g,
        forceShouldAnimate: !1,
      });
    if (t.phase === "COLLECTING") return x;
    var y = N({ phase: "DROP_PENDING" }, x, {
      phase: "DROP_PENDING",
      reason: t.reason,
      isWaiting: !1,
    });
    return y;
  },
  sn = function (t) {
    return t.movementMode === "SNAP";
  },
  Xr = function (t, r, n) {
    var a = Gc(t.dimensions, r);
    return !sn(t) || n
      ? Bt({ state: t, dimensions: a })
      : Zo({ state: t, dimensions: a });
  };
function Zr(e) {
  return e.isDragging && e.movementMode === "SNAP"
    ? N({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
    : e;
}
var Ia = { phase: "IDLE", completed: null, shouldFlush: !1 },
  Uc = function (e, t) {
    if ((e === void 0 && (e = Ia), t.type === "FLUSH"))
      return N({}, Ia, { shouldFlush: !0 });
    if (t.type === "INITIAL_PUBLISH") {
      e.phase !== "IDLE" && D(!1);
      var r = t.payload,
        n = r.critical,
        a = r.clientSelection,
        o = r.viewport,
        i = r.dimensions,
        s = r.movementMode,
        c = i.draggables[n.draggable.id],
        u = i.droppables[n.droppable.id],
        p = {
          selection: a,
          borderBoxCenter: c.client.borderBox.center,
          offset: le,
        },
        d = {
          client: p,
          page: {
            selection: ue(p.selection, o.scroll.initial),
            borderBoxCenter: ue(p.selection, o.scroll.initial),
            offset: ue(p.selection, o.scroll.diff.value),
          },
        },
        f = Ar(i.droppables).every(function (nt) {
          return !nt.isFixedOnPage;
        }),
        m = Qo({
          draggable: c,
          home: u,
          draggables: i.draggables,
          viewport: o,
        }),
        g = m.impact,
        b = m.afterCritical,
        h = {
          phase: "DRAGGING",
          isDragging: !0,
          critical: n,
          movementMode: s,
          dimensions: i,
          initial: d,
          current: d,
          isWindowScrollAllowed: f,
          impact: g,
          afterCritical: b,
          onLiftImpact: g,
          viewport: o,
          scrollJumpRequest: null,
          forceShouldAnimate: null,
        };
      return h;
    }
    if (t.type === "COLLECTION_STARTING") {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && D(!1);
      var x = N({ phase: "COLLECTING" }, e, { phase: "COLLECTING" });
      return x;
    }
    if (t.type === "PUBLISH_WHILE_DRAGGING")
      return (
        e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || D(!1),
        Wc({ state: e, published: t.payload })
      );
    if (t.type === "MOVE") {
      if (e.phase === "DROP_PENDING") return e;
      Xe(e) || D(!1);
      var y = t.payload.client;
      return qe(y, e.current.client.selection)
        ? e
        : Bt({ state: e, clientSelection: y, impact: sn(e) ? e.impact : null });
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return Zr(e);
      Xe(e) || D(!1);
      var w = t.payload,
        E = w.id,
        C = w.newScroll,
        I = e.dimensions.droppables[E];
      if (!I) return e;
      var F = Pn(I, C);
      return Xr(e, F, !1);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Xe(e) || D(!1);
      var R = t.payload,
        L = R.id,
        T = R.isEnabled,
        M = e.dimensions.droppables[L];
      M || D(!1), M.isEnabled === T && D(!1);
      var j = N({}, M, { isEnabled: T });
      return Xr(e, j, !0);
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
      if (e.phase === "DROP_PENDING") return e;
      Xe(e) || D(!1);
      var z = t.payload,
        B = z.id,
        A = z.isCombineEnabled,
        H = e.dimensions.droppables[B];
      H || D(!1), H.isCombineEnabled === A && D(!1);
      var S = N({}, H, { isCombineEnabled: A });
      return Xr(e, S, !0);
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
      if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
      Xe(e) || D(!1), e.isWindowScrollAllowed || D(!1);
      var K = t.payload.newScroll;
      if (qe(e.viewport.scroll.current, K)) return Zr(e);
      var Y = jo(e.viewport, K);
      return sn(e)
        ? Zo({ state: e, viewport: Y })
        : Bt({ state: e, viewport: Y });
    }
    if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
      if (!Xe(e)) return e;
      var Q = t.payload.maxScroll;
      if (qe(Q, e.viewport.scroll.max)) return e;
      var de = N({}, e.viewport, {
        scroll: N({}, e.viewport.scroll, { max: Q }),
      });
      return N({ phase: "DRAGGING" }, e, { viewport: de });
    }
    if (
      t.type === "MOVE_UP" ||
      t.type === "MOVE_DOWN" ||
      t.type === "MOVE_LEFT" ||
      t.type === "MOVE_RIGHT"
    ) {
      if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
      e.phase !== "DRAGGING" && D(!1);
      var ae = Sc({ state: e, type: t.type });
      return ae
        ? Bt({
            state: e,
            impact: ae.impact,
            clientSelection: ae.clientSelection,
            scrollJumpRequest: ae.scrollJumpRequest,
          })
        : e;
    }
    if (t.type === "DROP_PENDING") {
      var Ne = t.payload.reason;
      e.phase !== "COLLECTING" && D(!1);
      var ke = N({ phase: "DROP_PENDING" }, e, {
        phase: "DROP_PENDING",
        isWaiting: !0,
        reason: Ne,
      });
      return ke;
    }
    if (t.type === "DROP_ANIMATE") {
      var X = t.payload,
        U = X.completed,
        te = X.dropDuration,
        pe = X.newHomeClientOffset;
      e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || D(!1);
      var rt = {
        phase: "DROP_ANIMATING",
        completed: U,
        dropDuration: te,
        newHomeClientOffset: pe,
        dimensions: e.dimensions,
      };
      return rt;
    }
    if (t.type === "DROP_COMPLETE") {
      var Te = t.payload.completed;
      return { phase: "IDLE", completed: Te, shouldFlush: !1 };
    }
    return e;
  },
  Hc = function (t) {
    return { type: "BEFORE_INITIAL_CAPTURE", payload: t };
  },
  Vc = function (t) {
    return { type: "LIFT", payload: t };
  },
  Kc = function (t) {
    return { type: "INITIAL_PUBLISH", payload: t };
  },
  Yc = function (t) {
    return { type: "PUBLISH_WHILE_DRAGGING", payload: t };
  },
  Jc = function () {
    return { type: "COLLECTION_STARTING", payload: null };
  },
  Xc = function (t) {
    return { type: "UPDATE_DROPPABLE_SCROLL", payload: t };
  },
  Zc = function (t) {
    return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: t };
  },
  Qc = function (t) {
    return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: t };
  },
  _o = function (t) {
    return { type: "MOVE", payload: t };
  },
  _c = function (t) {
    return { type: "MOVE_BY_WINDOW_SCROLL", payload: t };
  },
  eu = function (t) {
    return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: t };
  },
  tu = function () {
    return { type: "MOVE_UP", payload: null };
  },
  ru = function () {
    return { type: "MOVE_DOWN", payload: null };
  },
  nu = function () {
    return { type: "MOVE_RIGHT", payload: null };
  },
  au = function () {
    return { type: "MOVE_LEFT", payload: null };
  },
  Ln = function () {
    return { type: "FLUSH", payload: null };
  },
  ou = function (t) {
    return { type: "DROP_ANIMATE", payload: t };
  },
  $n = function (t) {
    return { type: "DROP_COMPLETE", payload: t };
  },
  ei = function (t) {
    return { type: "DROP", payload: t };
  },
  iu = function (t) {
    return { type: "DROP_PENDING", payload: t };
  },
  ti = function () {
    return { type: "DROP_ANIMATION_FINISHED", payload: null };
  },
  lu = function (e) {
    return function (t) {
      var r = t.getState,
        n = t.dispatch;
      return function (a) {
        return function (o) {
          if (o.type !== "LIFT") {
            a(o);
            return;
          }
          var i = o.payload,
            s = i.id,
            c = i.clientSelection,
            u = i.movementMode,
            p = r();
          p.phase === "DROP_ANIMATING" && n($n({ completed: p.completed })),
            r().phase !== "IDLE" && D(!1),
            n(Ln()),
            n(Hc({ draggableId: s, movementMode: u }));
          var d = { shouldPublishImmediately: u === "SNAP" },
            f = { draggableId: s, scrollOptions: d },
            m = e.startPublishing(f),
            g = m.critical,
            b = m.dimensions,
            h = m.viewport;
          n(
            Kc({
              critical: g,
              dimensions: b,
              clientSelection: c,
              movementMode: u,
              viewport: h,
            })
          );
        };
      };
    };
  },
  su = function (e) {
    return function () {
      return function (t) {
        return function (r) {
          r.type === "INITIAL_PUBLISH" && e.dragging(),
            r.type === "DROP_ANIMATE" &&
              e.dropping(r.payload.completed.result.reason),
            (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(),
            t(r);
        };
      };
    };
  },
  Gn = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  Mt = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  zn = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  Je = zn.outOfTheWay + "s " + Gn.outOfTheWay,
  Nt = {
    fluid: "opacity " + Je,
    snap: "transform " + Je + ", opacity " + Je,
    drop: function (t) {
      var r = t + "s " + Gn.drop;
      return "transform " + r + ", opacity " + r;
    },
    outOfTheWay: "transform " + Je,
    placeholder: "height " + Je + ", width " + Je + ", margin " + Je,
  },
  Ca = function (t) {
    return qe(t, le) ? null : "translate(" + t.x + "px, " + t.y + "px)";
  },
  cn = {
    moveTo: Ca,
    drop: function (t, r) {
      var n = Ca(t);
      return n ? (r ? n + " scale(" + Mt.scale.drop + ")" : n) : null;
    },
  },
  un = zn.minDropTime,
  ri = zn.maxDropTime,
  cu = ri - un,
  Sa = 1500,
  uu = 0.6,
  du = function (e) {
    var t = e.current,
      r = e.destination,
      n = e.reason,
      a = Rt(t, r);
    if (a <= 0) return un;
    if (a >= Sa) return ri;
    var o = a / Sa,
      i = un + cu * o,
      s = n === "CANCEL" ? i * uu : i;
    return Number(s.toFixed(2));
  },
  pu = function (e) {
    var t = e.impact,
      r = e.draggable,
      n = e.dimensions,
      a = e.viewport,
      o = e.afterCritical,
      i = n.draggables,
      s = n.droppables,
      c = he(t),
      u = c ? s[c] : null,
      p = s[r.descriptor.droppableId],
      d = Xo({
        impact: t,
        draggable: r,
        draggables: i,
        afterCritical: o,
        droppable: u || p,
        viewport: a,
      }),
      f = be(d, r.client.borderBox.center);
    return f;
  },
  fu = function (e) {
    var t = e.draggables,
      r = e.reason,
      n = e.lastImpact,
      a = e.home,
      o = e.viewport,
      i = e.onLiftImpact;
    if (!n.at || r !== "DROP") {
      var s = Jo({
        draggables: t,
        impact: i,
        destination: a,
        viewport: o,
        forceShouldAnimate: !0,
      });
      return { impact: s, didDropInsideDroppable: !1 };
    }
    if (n.at.type === "REORDER")
      return { impact: n, didDropInsideDroppable: !0 };
    var c = N({}, n, { displaced: kt });
    return { impact: c, didDropInsideDroppable: !0 };
  },
  mu = function (e) {
    var t = e.getState,
      r = e.dispatch;
    return function (n) {
      return function (a) {
        if (a.type !== "DROP") {
          n(a);
          return;
        }
        var o = t(),
          i = a.payload.reason;
        if (o.phase === "COLLECTING") {
          r(iu({ reason: i }));
          return;
        }
        if (o.phase !== "IDLE") {
          var s = o.phase === "DROP_PENDING" && o.isWaiting;
          s && D(!1),
            o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || D(!1);
          var c = o.critical,
            u = o.dimensions,
            p = u.draggables[o.critical.draggable.id],
            d = fu({
              reason: i,
              lastImpact: o.impact,
              afterCritical: o.afterCritical,
              onLiftImpact: o.onLiftImpact,
              home: o.dimensions.droppables[o.critical.droppable.id],
              viewport: o.viewport,
              draggables: o.dimensions.draggables,
            }),
            f = d.impact,
            m = d.didDropInsideDroppable,
            g = m ? Nn(f) : null,
            b = m ? Or(f) : null,
            h = { index: c.draggable.index, droppableId: c.droppable.id },
            x = {
              draggableId: p.descriptor.id,
              type: p.descriptor.type,
              source: h,
              reason: i,
              mode: o.movementMode,
              destination: g,
              combine: b,
            },
            y = pu({
              impact: f,
              draggable: p,
              dimensions: u,
              viewport: o.viewport,
              afterCritical: o.afterCritical,
            }),
            w = {
              critical: o.critical,
              afterCritical: o.afterCritical,
              result: x,
              impact: f,
            },
            E = !qe(o.current.client.offset, y) || Boolean(x.combine);
          if (!E) {
            r($n({ completed: w }));
            return;
          }
          var C = du({
              current: o.current.client.offset,
              destination: y,
              reason: i,
            }),
            I = { newHomeClientOffset: y, dropDuration: C, completed: w };
          r(ou(I));
        }
      };
    };
  },
  ni = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  };
function gu(e) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: function (r) {
      (r.target !== window && r.target !== window.document) || e();
    },
  };
}
function vu(e) {
  var t = e.onWindowScroll;
  function r() {
    t(ni());
  }
  var n = Ft(r),
    a = gu(n),
    o = je;
  function i() {
    return o !== je;
  }
  function s() {
    i() && D(!1), (o = Ie(window, [a]));
  }
  function c() {
    i() || D(!1), n.cancel(), o(), (o = je);
  }
  return { start: s, stop: c, isActive: i };
}
var bu = function (t) {
    return (
      t.type === "DROP_COMPLETE" ||
      t.type === "DROP_ANIMATE" ||
      t.type === "FLUSH"
    );
  },
  hu = function (e) {
    var t = vu({
      onWindowScroll: function (n) {
        e.dispatch(_c({ newScroll: n }));
      },
    });
    return function (r) {
      return function (n) {
        !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(),
          t.isActive() && bu(n) && t.stop(),
          r(n);
      };
    };
  },
  xu = function (e) {
    var t = !1,
      r = !1,
      n = setTimeout(function () {
        r = !0;
      }),
      a = function (i) {
        t || r || ((t = !0), e(i), clearTimeout(n));
      };
    return (
      (a.wasCalled = function () {
        return t;
      }),
      a
    );
  },
  yu = function () {
    var e = [],
      t = function (o) {
        var i = Bn(e, function (u) {
          return u.timerId === o;
        });
        i === -1 && D(!1);
        var s = e.splice(i, 1),
          c = s[0];
        c.callback();
      },
      r = function (o) {
        var i = setTimeout(function () {
            return t(i);
          }),
          s = { timerId: i, callback: o };
        e.push(s);
      },
      n = function () {
        if (!!e.length) {
          var o = [].concat(e);
          (e.length = 0),
            o.forEach(function (i) {
              clearTimeout(i.timerId), i.callback();
            });
        }
      };
    return { add: r, flush: n };
  },
  Eu = function (t, r) {
    return t == null && r == null
      ? !0
      : t == null || r == null
      ? !1
      : t.droppableId === r.droppableId && t.index === r.index;
  },
  wu = function (t, r) {
    return t == null && r == null
      ? !0
      : t == null || r == null
      ? !1
      : t.draggableId === r.draggableId && t.droppableId === r.droppableId;
  },
  Du = function (t, r) {
    if (t === r) return !0;
    var n =
        t.draggable.id === r.draggable.id &&
        t.draggable.droppableId === r.draggable.droppableId &&
        t.draggable.type === r.draggable.type &&
        t.draggable.index === r.draggable.index,
      a =
        t.droppable.id === r.droppable.id &&
        t.droppable.type === r.droppable.type;
    return n && a;
  },
  It = function (t, r) {
    r();
  },
  nr = function (t, r) {
    return {
      draggableId: t.draggable.id,
      type: t.droppable.type,
      source: { droppableId: t.droppable.id, index: t.draggable.index },
      mode: r,
    };
  },
  Qr = function (t, r, n, a) {
    if (!t) {
      n(a(r));
      return;
    }
    var o = xu(n),
      i = { announce: o };
    t(r, i), o.wasCalled() || n(a(r));
  },
  Iu = function (e, t) {
    var r = yu(),
      n = null,
      a = function (f, m) {
        n && D(!1),
          It("onBeforeCapture", function () {
            var g = e().onBeforeCapture;
            if (g) {
              var b = { draggableId: f, mode: m };
              g(b);
            }
          });
      },
      o = function (f, m) {
        n && D(!1),
          It("onBeforeDragStart", function () {
            var g = e().onBeforeDragStart;
            g && g(nr(f, m));
          });
      },
      i = function (f, m) {
        n && D(!1);
        var g = nr(f, m);
        (n = {
          mode: m,
          lastCritical: f,
          lastLocation: g.source,
          lastCombine: null,
        }),
          r.add(function () {
            It("onDragStart", function () {
              return Qr(e().onDragStart, g, t, dr.onDragStart);
            });
          });
      },
      s = function (f, m) {
        var g = Nn(m),
          b = Or(m);
        n || D(!1);
        var h = !Du(f, n.lastCritical);
        h && (n.lastCritical = f);
        var x = !Eu(n.lastLocation, g);
        x && (n.lastLocation = g);
        var y = !wu(n.lastCombine, b);
        if ((y && (n.lastCombine = b), !(!h && !x && !y))) {
          var w = N({}, nr(f, n.mode), { combine: b, destination: g });
          r.add(function () {
            It("onDragUpdate", function () {
              return Qr(e().onDragUpdate, w, t, dr.onDragUpdate);
            });
          });
        }
      },
      c = function () {
        n || D(!1), r.flush();
      },
      u = function (f) {
        n || D(!1),
          (n = null),
          It("onDragEnd", function () {
            return Qr(e().onDragEnd, f, t, dr.onDragEnd);
          });
      },
      p = function () {
        if (!!n) {
          var f = N({}, nr(n.lastCritical, n.mode), {
            combine: null,
            destination: null,
            reason: "CANCEL",
          });
          u(f);
        }
      };
    return {
      beforeCapture: a,
      beforeStart: o,
      start: i,
      update: s,
      flush: c,
      drop: u,
      abort: p,
    };
  },
  Cu = function (e, t) {
    var r = Iu(e, t);
    return function (n) {
      return function (a) {
        return function (o) {
          if (o.type === "BEFORE_INITIAL_CAPTURE") {
            r.beforeCapture(o.payload.draggableId, o.payload.movementMode);
            return;
          }
          if (o.type === "INITIAL_PUBLISH") {
            var i = o.payload.critical;
            r.beforeStart(i, o.payload.movementMode),
              a(o),
              r.start(i, o.payload.movementMode);
            return;
          }
          if (o.type === "DROP_COMPLETE") {
            var s = o.payload.completed.result;
            r.flush(), a(o), r.drop(s);
            return;
          }
          if ((a(o), o.type === "FLUSH")) {
            r.abort();
            return;
          }
          var c = n.getState();
          c.phase === "DRAGGING" && r.update(c.critical, c.impact);
        };
      };
    };
  },
  Su = function (e) {
    return function (t) {
      return function (r) {
        if (r.type !== "DROP_ANIMATION_FINISHED") {
          t(r);
          return;
        }
        var n = e.getState();
        n.phase !== "DROP_ANIMATING" && D(!1),
          e.dispatch($n({ completed: n.completed }));
      };
    };
  },
  Au = function (e) {
    var t = null,
      r = null;
    function n() {
      r && (cancelAnimationFrame(r), (r = null)), t && (t(), (t = null));
    }
    return function (a) {
      return function (o) {
        if (
          ((o.type === "FLUSH" ||
            o.type === "DROP_COMPLETE" ||
            o.type === "DROP_ANIMATION_FINISHED") &&
            n(),
          a(o),
          o.type === "DROP_ANIMATE")
        ) {
          var i = {
            eventName: "scroll",
            options: { capture: !0, passive: !1, once: !0 },
            fn: function () {
              var c = e.getState();
              c.phase === "DROP_ANIMATING" && e.dispatch(ti());
            },
          };
          r = requestAnimationFrame(function () {
            (r = null), (t = Ie(window, [i]));
          });
        }
      };
    };
  },
  Ou = function (e) {
    return function () {
      return function (t) {
        return function (r) {
          (r.type === "DROP_COMPLETE" ||
            r.type === "FLUSH" ||
            r.type === "DROP_ANIMATE") &&
            e.stopPublishing(),
            t(r);
        };
      };
    };
  },
  Pu = function (e) {
    var t = !1;
    return function () {
      return function (r) {
        return function (n) {
          if (n.type === "INITIAL_PUBLISH") {
            (t = !0),
              e.tryRecordFocus(n.payload.critical.draggable.id),
              r(n),
              e.tryRestoreFocusRecorded();
            return;
          }
          if ((r(n), !!t)) {
            if (n.type === "FLUSH") {
              (t = !1), e.tryRestoreFocusRecorded();
              return;
            }
            if (n.type === "DROP_COMPLETE") {
              t = !1;
              var a = n.payload.completed.result;
              a.combine &&
                e.tryShiftRecord(a.draggableId, a.combine.draggableId),
                e.tryRestoreFocusRecorded();
            }
          }
        };
      };
    };
  },
  Bu = function (t) {
    return (
      t.type === "DROP_COMPLETE" ||
      t.type === "DROP_ANIMATE" ||
      t.type === "FLUSH"
    );
  },
  Nu = function (e) {
    return function (t) {
      return function (r) {
        return function (n) {
          if (Bu(n)) {
            e.stop(), r(n);
            return;
          }
          if (n.type === "INITIAL_PUBLISH") {
            r(n);
            var a = t.getState();
            a.phase !== "DRAGGING" && D(!1), e.start(a);
            return;
          }
          r(n), e.scroll(t.getState());
        };
      };
    };
  },
  Fu = function (e) {
    return function (t) {
      return function (r) {
        if ((t(r), r.type === "PUBLISH_WHILE_DRAGGING")) {
          var n = e.getState();
          n.phase === "DROP_PENDING" &&
            (n.isWaiting || e.dispatch(ei({ reason: n.reason })));
        }
      };
    };
  },
  Ru = fo,
  ku = function (e) {
    var t = e.dimensionMarshal,
      r = e.focusMarshal,
      n = e.styleMarshal,
      a = e.getResponders,
      o = e.announce,
      i = e.autoScroller;
    return po(
      Uc,
      Ru(Ml(su(n), Ou(t), lu(t), mu, Su, Au, Fu, Nu(i), hu, Pu(r), Cu(a, o)))
    );
  },
  _r = function () {
    return { additions: {}, removals: {}, modified: {} };
  };
function Tu(e) {
  var t = e.registry,
    r = e.callbacks,
    n = _r(),
    a = null,
    o = function () {
      a ||
        (r.collectionStarting(),
        (a = requestAnimationFrame(function () {
          a = null;
          var p = n,
            d = p.additions,
            f = p.removals,
            m = p.modified,
            g = Object.keys(d)
              .map(function (x) {
                return t.draggable.getById(x).getDimension(le);
              })
              .sort(function (x, y) {
                return x.descriptor.index - y.descriptor.index;
              }),
            b = Object.keys(m).map(function (x) {
              var y = t.droppable.getById(x),
                w = y.callbacks.getScrollWhileDragging();
              return { droppableId: x, scroll: w };
            }),
            h = { additions: g, removals: Object.keys(f), modified: b };
          (n = _r()), r.publish(h);
        })));
    },
    i = function (p) {
      var d = p.descriptor.id;
      (n.additions[d] = p),
        (n.modified[p.descriptor.droppableId] = !0),
        n.removals[d] && delete n.removals[d],
        o();
    },
    s = function (p) {
      var d = p.descriptor;
      (n.removals[d.id] = !0),
        (n.modified[d.droppableId] = !0),
        n.additions[d.id] && delete n.additions[d.id],
        o();
    },
    c = function () {
      !a || (cancelAnimationFrame(a), (a = null), (n = _r()));
    };
  return { add: i, remove: s, stop: c };
}
var ai = function (e) {
    var t = e.scrollHeight,
      r = e.scrollWidth,
      n = e.height,
      a = e.width,
      o = be({ x: r, y: t }, { x: a, y: n }),
      i = { x: Math.max(0, o.x), y: Math.max(0, o.y) };
    return i;
  },
  oi = function () {
    var e = document.documentElement;
    return e || D(!1), e;
  },
  ii = function () {
    var e = oi(),
      t = ai({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight,
      });
    return t;
  },
  Mu = function () {
    var e = ni(),
      t = ii(),
      r = e.y,
      n = e.x,
      a = oi(),
      o = a.clientWidth,
      i = a.clientHeight,
      s = n + o,
      c = r + i,
      u = Pe({ top: r, left: n, right: s, bottom: c }),
      p = {
        frame: u,
        scroll: {
          initial: e,
          current: e,
          max: t,
          diff: { value: le, displacement: le },
        },
      };
    return p;
  },
  Lu = function (e) {
    var t = e.critical,
      r = e.scrollOptions,
      n = e.registry,
      a = Mu(),
      o = a.scroll.current,
      i = t.droppable,
      s = n.droppable.getAllByType(i.type).map(function (d) {
        return d.callbacks.getDimensionAndWatchScroll(o, r);
      }),
      c = n.draggable.getAllByType(t.draggable.type).map(function (d) {
        return d.getDimension(o);
      }),
      u = { draggables: To(c), droppables: ko(s) },
      p = { dimensions: u, critical: t, viewport: a };
    return p;
  };
function Aa(e, t, r) {
  if (r.descriptor.id === t.id || r.descriptor.type !== t.type) return !1;
  var n = e.droppable.getById(r.descriptor.droppableId);
  return n.descriptor.mode === "virtual";
}
var $u = function (e, t) {
    var r = null,
      n = Tu({
        callbacks: {
          publish: t.publishWhileDragging,
          collectionStarting: t.collectionStarting,
        },
        registry: e,
      }),
      a = function (m, g) {
        e.droppable.exists(m) || D(!1),
          r && t.updateDroppableIsEnabled({ id: m, isEnabled: g });
      },
      o = function (m, g) {
        !r ||
          (e.droppable.exists(m) || D(!1),
          t.updateDroppableIsCombineEnabled({ id: m, isCombineEnabled: g }));
      },
      i = function (m, g) {
        !r ||
          (e.droppable.exists(m) || D(!1),
          t.updateDroppableScroll({ id: m, newScroll: g }));
      },
      s = function (m, g) {
        !r || e.droppable.getById(m).callbacks.scroll(g);
      },
      c = function () {
        if (!!r) {
          n.stop();
          var m = r.critical.droppable;
          e.droppable.getAllByType(m.type).forEach(function (g) {
            return g.callbacks.dragStopped();
          }),
            r.unsubscribe(),
            (r = null);
        }
      },
      u = function (m) {
        r || D(!1);
        var g = r.critical.draggable;
        m.type === "ADDITION" && Aa(e, g, m.value) && n.add(m.value),
          m.type === "REMOVAL" && Aa(e, g, m.value) && n.remove(m.value);
      },
      p = function (m) {
        r && D(!1);
        var g = e.draggable.getById(m.draggableId),
          b = e.droppable.getById(g.descriptor.droppableId),
          h = { draggable: g.descriptor, droppable: b.descriptor },
          x = e.subscribe(u);
        return (
          (r = { critical: h, unsubscribe: x }),
          Lu({ critical: h, registry: e, scrollOptions: m.scrollOptions })
        );
      },
      d = {
        updateDroppableIsEnabled: a,
        updateDroppableIsCombineEnabled: o,
        scrollDroppable: s,
        updateDroppableScroll: i,
        startPublishing: p,
        stopPublishing: c,
      };
    return d;
  },
  li = function (e, t) {
    return e.phase === "IDLE"
      ? !0
      : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t
      ? !1
      : e.completed.result.reason === "DROP";
  },
  Gu = function (e) {
    window.scrollBy(e.x, e.y);
  },
  zu = ie(function (e) {
    return Ar(e).filter(function (t) {
      return !(!t.isEnabled || !t.frame);
    });
  }),
  ju = function (t, r) {
    var n = Ve(zu(r), function (a) {
      return a.frame || D(!1), Ho(a.frame.pageMarginBox)(t);
    });
    return n;
  },
  qu = function (e) {
    var t = e.center,
      r = e.destination,
      n = e.droppables;
    if (r) {
      var a = n[r];
      return a.frame ? a : null;
    }
    var o = ju(t, n);
    return o;
  },
  We = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: function (t) {
      return Math.pow(t, 2);
    },
    durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  },
  Wu = function (e, t) {
    var r = e[t.size] * We.startFromPercentage,
      n = e[t.size] * We.maxScrollAtPercentage,
      a = { startScrollingFrom: r, maxScrollValueAt: n };
    return a;
  },
  si = function (e) {
    var t = e.startOfRange,
      r = e.endOfRange,
      n = e.current,
      a = r - t;
    if (a === 0) return 0;
    var o = n - t,
      i = o / a;
    return i;
  },
  jn = 1,
  Uu = function (e, t) {
    if (e > t.startScrollingFrom) return 0;
    if (e <= t.maxScrollValueAt) return We.maxPixelScroll;
    if (e === t.startScrollingFrom) return jn;
    var r = si({
        startOfRange: t.maxScrollValueAt,
        endOfRange: t.startScrollingFrom,
        current: e,
      }),
      n = 1 - r,
      a = We.maxPixelScroll * We.ease(n);
    return Math.ceil(a);
  },
  Oa = We.durationDampening.accelerateAt,
  Pa = We.durationDampening.stopDampeningAt,
  Hu = function (e, t) {
    var r = t,
      n = Pa,
      a = Date.now(),
      o = a - r;
    if (o >= Pa) return e;
    if (o < Oa) return jn;
    var i = si({ startOfRange: Oa, endOfRange: n, current: o }),
      s = e * We.ease(i);
    return Math.ceil(s);
  },
  Ba = function (e) {
    var t = e.distanceToEdge,
      r = e.thresholds,
      n = e.dragStartTime,
      a = e.shouldUseTimeDampening,
      o = Uu(t, r);
    return o === 0 ? 0 : a ? Math.max(Hu(o, n), jn) : o;
  },
  Na = function (e) {
    var t = e.container,
      r = e.distanceToEdges,
      n = e.dragStartTime,
      a = e.axis,
      o = e.shouldUseTimeDampening,
      i = Wu(t, a),
      s = r[a.end] < r[a.start];
    return s
      ? Ba({
          distanceToEdge: r[a.end],
          thresholds: i,
          dragStartTime: n,
          shouldUseTimeDampening: o,
        })
      : -1 *
          Ba({
            distanceToEdge: r[a.start],
            thresholds: i,
            dragStartTime: n,
            shouldUseTimeDampening: o,
          });
  },
  Vu = function (e) {
    var t = e.container,
      r = e.subject,
      n = e.proposedScroll,
      a = r.height > t.height,
      o = r.width > t.width;
    return !o && !a ? n : o && a ? null : { x: o ? 0 : n.x, y: a ? 0 : n.y };
  },
  Ku = Fo(function (e) {
    return e === 0 ? 0 : e;
  }),
  ci = function (e) {
    var t = e.dragStartTime,
      r = e.container,
      n = e.subject,
      a = e.center,
      o = e.shouldUseTimeDampening,
      i = {
        top: a.y - r.top,
        right: r.right - a.x,
        bottom: r.bottom - a.y,
        left: a.x - r.left,
      },
      s = Na({
        container: r,
        distanceToEdges: i,
        dragStartTime: t,
        axis: Fn,
        shouldUseTimeDampening: o,
      }),
      c = Na({
        container: r,
        distanceToEdges: i,
        dragStartTime: t,
        axis: $o,
        shouldUseTimeDampening: o,
      }),
      u = Ku({ x: c, y: s });
    if (qe(u, le)) return null;
    var p = Vu({ container: r, subject: n, proposedScroll: u });
    return p ? (qe(p, le) ? null : p) : null;
  },
  Yu = Fo(function (e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1;
  }),
  qn = (function () {
    var e = function (r, n) {
      return r < 0 ? r : r > n ? r - n : 0;
    };
    return function (t) {
      var r = t.current,
        n = t.max,
        a = t.change,
        o = ue(r, a),
        i = { x: e(o.x, n.x), y: e(o.y, n.y) };
      return qe(i, le) ? null : i;
    };
  })(),
  ui = function (t) {
    var r = t.max,
      n = t.current,
      a = t.change,
      o = { x: Math.max(n.x, r.x), y: Math.max(n.y, r.y) },
      i = Yu(a),
      s = qn({ max: o, current: n, change: i });
    return !s || (i.x !== 0 && s.x === 0) || (i.y !== 0 && s.y === 0);
  },
  Wn = function (t, r) {
    return ui({ current: t.scroll.current, max: t.scroll.max, change: r });
  },
  Ju = function (t, r) {
    if (!Wn(t, r)) return null;
    var n = t.scroll.max,
      a = t.scroll.current;
    return qn({ current: a, max: n, change: r });
  },
  Un = function (t, r) {
    var n = t.frame;
    return n
      ? ui({ current: n.scroll.current, max: n.scroll.max, change: r })
      : !1;
  },
  Xu = function (t, r) {
    var n = t.frame;
    return !n || !Un(t, r)
      ? null
      : qn({ current: n.scroll.current, max: n.scroll.max, change: r });
  },
  Zu = function (e) {
    var t = e.viewport,
      r = e.subject,
      n = e.center,
      a = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      i = ci({
        dragStartTime: a,
        container: t.frame,
        subject: r,
        center: n,
        shouldUseTimeDampening: o,
      });
    return i && Wn(t, i) ? i : null;
  },
  Qu = function (e) {
    var t = e.droppable,
      r = e.subject,
      n = e.center,
      a = e.dragStartTime,
      o = e.shouldUseTimeDampening,
      i = t.frame;
    if (!i) return null;
    var s = ci({
      dragStartTime: a,
      container: i.pageMarginBox,
      subject: r,
      center: n,
      shouldUseTimeDampening: o,
    });
    return s && Un(t, s) ? s : null;
  },
  Fa = function (e) {
    var t = e.state,
      r = e.dragStartTime,
      n = e.shouldUseTimeDampening,
      a = e.scrollWindow,
      o = e.scrollDroppable,
      i = t.current.page.borderBoxCenter,
      s = t.dimensions.draggables[t.critical.draggable.id],
      c = s.page.marginBox;
    if (t.isWindowScrollAllowed) {
      var u = t.viewport,
        p = Zu({
          dragStartTime: r,
          viewport: u,
          subject: c,
          center: i,
          shouldUseTimeDampening: n,
        });
      if (p) {
        a(p);
        return;
      }
    }
    var d = qu({
      center: i,
      destination: he(t.impact),
      droppables: t.dimensions.droppables,
    });
    if (!!d) {
      var f = Qu({
        dragStartTime: r,
        droppable: d,
        subject: c,
        center: i,
        shouldUseTimeDampening: n,
      });
      f && o(d.descriptor.id, f);
    }
  },
  _u = function (e) {
    var t = e.scrollWindow,
      r = e.scrollDroppable,
      n = Ft(t),
      a = Ft(r),
      o = null,
      i = function (p) {
        o || D(!1);
        var d = o,
          f = d.shouldUseTimeDampening,
          m = d.dragStartTime;
        Fa({
          state: p,
          scrollWindow: n,
          scrollDroppable: a,
          dragStartTime: m,
          shouldUseTimeDampening: f,
        });
      },
      s = function (p) {
        o && D(!1);
        var d = Date.now(),
          f = !1,
          m = function () {
            f = !0;
          };
        Fa({
          state: p,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: m,
          scrollDroppable: m,
        }),
          (o = { dragStartTime: d, shouldUseTimeDampening: f }),
          f && i(p);
      },
      c = function () {
        !o || (n.cancel(), a.cancel(), (o = null));
      };
    return { start: s, stop: c, scroll: i };
  },
  ed = function (e) {
    var t = e.move,
      r = e.scrollDroppable,
      n = e.scrollWindow,
      a = function (u, p) {
        var d = ue(u.current.client.selection, p);
        t({ client: d });
      },
      o = function (u, p) {
        if (!Un(u, p)) return p;
        var d = Xu(u, p);
        if (!d) return r(u.descriptor.id, p), null;
        var f = be(p, d);
        r(u.descriptor.id, f);
        var m = be(p, f);
        return m;
      },
      i = function (u, p, d) {
        if (!u || !Wn(p, d)) return d;
        var f = Ju(p, d);
        if (!f) return n(d), null;
        var m = be(d, f);
        n(m);
        var g = be(d, m);
        return g;
      },
      s = function (u) {
        var p = u.scrollJumpRequest;
        if (!!p) {
          var d = he(u.impact);
          d || D(!1);
          var f = o(u.dimensions.droppables[d], p);
          if (!!f) {
            var m = u.viewport,
              g = i(u.isWindowScrollAllowed, m, f);
            !g || a(u, g);
          }
        }
      };
    return s;
  },
  td = function (e) {
    var t = e.scrollDroppable,
      r = e.scrollWindow,
      n = e.move,
      a = _u({ scrollWindow: r, scrollDroppable: t }),
      o = ed({ move: n, scrollWindow: r, scrollDroppable: t }),
      i = function (u) {
        if (u.phase === "DRAGGING") {
          if (u.movementMode === "FLUID") {
            a.scroll(u);
            return;
          }
          !u.scrollJumpRequest || o(u);
        }
      },
      s = { scroll: i, start: a.start, stop: a.stop };
    return s;
  },
  ut = "data-rbd",
  dt = (function () {
    var e = ut + "-drag-handle";
    return {
      base: e,
      draggableId: e + "-draggable-id",
      contextId: e + "-context-id",
    };
  })(),
  dn = (function () {
    var e = ut + "-draggable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  rd = (function () {
    var e = ut + "-droppable";
    return { base: e, contextId: e + "-context-id", id: e + "-id" };
  })(),
  Ra = { contextId: ut + "-scroll-container-context-id" },
  nd = function (t) {
    return function (r) {
      return "[" + r + '="' + t + '"]';
    };
  },
  Ct = function (t, r) {
    return t
      .map(function (n) {
        var a = n.styles[r];
        return a ? n.selector + " { " + a + " }" : "";
      })
      .join(" ");
  },
  ad = "pointer-events: none;",
  od = function (e) {
    var t = nd(e),
      r = (function () {
        var s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: t(dt.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: s,
            dragging: ad,
            dropAnimating: s,
          },
        };
      })(),
      n = (function () {
        var s =
          `
      transition: ` +
          Nt.outOfTheWay +
          `;
    `;
        return {
          selector: t(dn.contextId),
          styles: { dragging: s, dropAnimating: s, userCancel: s },
        };
      })(),
      a = {
        selector: t(rd.contextId),
        styles: { always: "overflow-anchor: none;" },
      },
      o = {
        selector: "body",
        styles: {
          dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
        },
      },
      i = [n, r, a, o];
    return {
      always: Ct(i, "always"),
      resting: Ct(i, "resting"),
      dragging: Ct(i, "dragging"),
      dropAnimating: Ct(i, "dropAnimating"),
      userCancel: Ct(i, "userCancel"),
    };
  },
  xe =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? v.exports.useLayoutEffect
      : v.exports.useEffect,
  en = function () {
    var t = document.querySelector("head");
    return t || D(!1), t;
  },
  ka = function (t) {
    var r = document.createElement("style");
    return t && r.setAttribute("nonce", t), (r.type = "text/css"), r;
  };
function id(e, t) {
  var r = V(
      function () {
        return od(e);
      },
      [e]
    ),
    n = v.exports.useRef(null),
    a = v.exports.useRef(null),
    o = k(
      ie(function (d) {
        var f = a.current;
        f || D(!1), (f.textContent = d);
      }),
      []
    ),
    i = k(function (d) {
      var f = n.current;
      f || D(!1), (f.textContent = d);
    }, []);
  xe(
    function () {
      (!n.current && !a.current) || D(!1);
      var d = ka(t),
        f = ka(t);
      return (
        (n.current = d),
        (a.current = f),
        d.setAttribute(ut + "-always", e),
        f.setAttribute(ut + "-dynamic", e),
        en().appendChild(d),
        en().appendChild(f),
        i(r.always),
        o(r.resting),
        function () {
          var m = function (b) {
            var h = b.current;
            h || D(!1), en().removeChild(h), (b.current = null);
          };
          m(n), m(a);
        }
      );
    },
    [t, i, o, r.always, r.resting, e]
  );
  var s = k(
      function () {
        return o(r.dragging);
      },
      [o, r.dragging]
    ),
    c = k(
      function (d) {
        if (d === "DROP") {
          o(r.dropAnimating);
          return;
        }
        o(r.userCancel);
      },
      [o, r.dropAnimating, r.userCancel]
    ),
    u = k(
      function () {
        !a.current || o(r.resting);
      },
      [o, r.resting]
    ),
    p = V(
      function () {
        return { dragging: s, dropping: c, resting: u };
      },
      [s, c, u]
    );
  return p;
}
var di = function (e) {
  return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
};
function Nr(e) {
  return e instanceof di(e).HTMLElement;
}
function ld(e, t) {
  var r = "[" + dt.contextId + '="' + e + '"]',
    n = Ro(document.querySelectorAll(r));
  if (!n.length) return null;
  var a = Ve(n, function (o) {
    return o.getAttribute(dt.draggableId) === t;
  });
  return !a || !Nr(a) ? null : a;
}
function sd(e) {
  var t = v.exports.useRef({}),
    r = v.exports.useRef(null),
    n = v.exports.useRef(null),
    a = v.exports.useRef(!1),
    o = k(function (f, m) {
      var g = { id: f, focus: m };
      return (
        (t.current[f] = g),
        function () {
          var h = t.current,
            x = h[f];
          x !== g && delete h[f];
        }
      );
    }, []),
    i = k(
      function (f) {
        var m = ld(e, f);
        m && m !== document.activeElement && m.focus();
      },
      [e]
    ),
    s = k(function (f, m) {
      r.current === f && (r.current = m);
    }, []),
    c = k(
      function () {
        n.current ||
          !a.current ||
          (n.current = requestAnimationFrame(function () {
            n.current = null;
            var f = r.current;
            f && i(f);
          }));
      },
      [i]
    ),
    u = k(function (f) {
      r.current = null;
      var m = document.activeElement;
      !m || (m.getAttribute(dt.draggableId) === f && (r.current = f));
    }, []);
  xe(function () {
    return (
      (a.current = !0),
      function () {
        a.current = !1;
        var f = n.current;
        f && cancelAnimationFrame(f);
      }
    );
  }, []);
  var p = V(
    function () {
      return {
        register: o,
        tryRecordFocus: u,
        tryRestoreFocusRecorded: c,
        tryShiftRecord: s,
      };
    },
    [o, u, c, s]
  );
  return p;
}
function cd() {
  var e = { draggables: {}, droppables: {} },
    t = [];
  function r(d) {
    return (
      t.push(d),
      function () {
        var m = t.indexOf(d);
        m !== -1 && t.splice(m, 1);
      }
    );
  }
  function n(d) {
    t.length &&
      t.forEach(function (f) {
        return f(d);
      });
  }
  function a(d) {
    return e.draggables[d] || null;
  }
  function o(d) {
    var f = a(d);
    return f || D(!1), f;
  }
  var i = {
    register: function (f) {
      (e.draggables[f.descriptor.id] = f), n({ type: "ADDITION", value: f });
    },
    update: function (f, m) {
      var g = e.draggables[m.descriptor.id];
      !g ||
        (g.uniqueId === f.uniqueId &&
          (delete e.draggables[m.descriptor.id],
          (e.draggables[f.descriptor.id] = f)));
    },
    unregister: function (f) {
      var m = f.descriptor.id,
        g = a(m);
      !g ||
        (f.uniqueId === g.uniqueId &&
          (delete e.draggables[m], n({ type: "REMOVAL", value: f })));
    },
    getById: o,
    findById: a,
    exists: function (f) {
      return Boolean(a(f));
    },
    getAllByType: function (f) {
      return br(e.draggables).filter(function (m) {
        return m.descriptor.type === f;
      });
    },
  };
  function s(d) {
    return e.droppables[d] || null;
  }
  function c(d) {
    var f = s(d);
    return f || D(!1), f;
  }
  var u = {
    register: function (f) {
      e.droppables[f.descriptor.id] = f;
    },
    unregister: function (f) {
      var m = s(f.descriptor.id);
      !m || (f.uniqueId === m.uniqueId && delete e.droppables[f.descriptor.id]);
    },
    getById: c,
    findById: s,
    exists: function (f) {
      return Boolean(s(f));
    },
    getAllByType: function (f) {
      return br(e.droppables).filter(function (m) {
        return m.descriptor.type === f;
      });
    },
  };
  function p() {
    (e.draggables = {}), (e.droppables = {}), (t.length = 0);
  }
  return { draggable: i, droppable: u, subscribe: r, clean: p };
}
function ud() {
  var e = V(cd, []);
  return (
    v.exports.useEffect(
      function () {
        return function () {
          requestAnimationFrame(e.clean);
        };
      },
      [e]
    ),
    e
  );
}
var Hn = l.createContext(null),
  xr = function () {
    var e = document.body;
    return e || D(!1), e;
  },
  dd = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)",
  },
  pd = function (t) {
    return "rbd-announcement-" + t;
  };
function fd(e) {
  var t = V(
      function () {
        return pd(e);
      },
      [e]
    ),
    r = v.exports.useRef(null);
  v.exports.useEffect(
    function () {
      var o = document.createElement("div");
      return (
        (r.current = o),
        (o.id = t),
        o.setAttribute("aria-live", "assertive"),
        o.setAttribute("aria-atomic", "true"),
        N(o.style, dd),
        xr().appendChild(o),
        function () {
          setTimeout(function () {
            var c = xr();
            c.contains(o) && c.removeChild(o),
              o === r.current && (r.current = null);
          });
        }
      );
    },
    [t]
  );
  var n = k(function (a) {
    var o = r.current;
    if (o) {
      o.textContent = a;
      return;
    }
  }, []);
  return n;
}
var md = 0,
  gd = { separator: "::" };
function Vn(e, t) {
  return (
    t === void 0 && (t = gd),
    V(
      function () {
        return "" + e + t.separator + md++;
      },
      [t.separator, e]
    )
  );
}
function vd(e) {
  var t = e.contextId,
    r = e.uniqueId;
  return "rbd-hidden-text-" + t + "-" + r;
}
function bd(e) {
  var t = e.contextId,
    r = e.text,
    n = Vn("hidden-text", { separator: "-" }),
    a = V(
      function () {
        return vd({ contextId: t, uniqueId: n });
      },
      [n, t]
    );
  return (
    v.exports.useEffect(
      function () {
        var i = document.createElement("div");
        return (
          (i.id = a),
          (i.textContent = r),
          (i.style.display = "none"),
          xr().appendChild(i),
          function () {
            var c = xr();
            c.contains(i) && c.removeChild(i);
          }
        );
      },
      [a, r]
    ),
    a
  );
}
var Fr = l.createContext(null);
function pi(e) {
  var t = v.exports.useRef(e);
  return (
    v.exports.useEffect(function () {
      t.current = e;
    }),
    t
  );
}
function hd() {
  var e = null;
  function t() {
    return Boolean(e);
  }
  function r(i) {
    return i === e;
  }
  function n(i) {
    e && D(!1);
    var s = { abandon: i };
    return (e = s), s;
  }
  function a() {
    e || D(!1), (e = null);
  }
  function o() {
    e && (e.abandon(), a());
  }
  return { isClaimed: t, isActive: r, claim: n, release: a, tryAbandon: o };
}
var xd = 9,
  yd = 13,
  Kn = 27,
  fi = 32,
  Ed = 33,
  wd = 34,
  Dd = 35,
  Id = 36,
  Cd = 37,
  Sd = 38,
  Ad = 39,
  Od = 40,
  ar,
  Pd = ((ar = {}), (ar[yd] = !0), (ar[xd] = !0), ar),
  mi = function (e) {
    Pd[e.keyCode] && e.preventDefault();
  },
  Rr = (function () {
    var e = "visibilitychange";
    if (typeof document > "u") return e;
    var t = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e],
      r = Ve(t, function (n) {
        return "on" + n in document;
      });
    return r || e;
  })(),
  gi = 0,
  Ta = 5;
function Bd(e, t) {
  return Math.abs(t.x - e.x) >= Ta || Math.abs(t.y - e.y) >= Ta;
}
var Ma = { type: "IDLE" };
function Nd(e) {
  var t = e.cancel,
    r = e.completed,
    n = e.getPhase,
    a = e.setPhase;
  return [
    {
      eventName: "mousemove",
      fn: function (i) {
        var s = i.button,
          c = i.clientX,
          u = i.clientY;
        if (s === gi) {
          var p = { x: c, y: u },
            d = n();
          if (d.type === "DRAGGING") {
            i.preventDefault(), d.actions.move(p);
            return;
          }
          d.type !== "PENDING" && D(!1);
          var f = d.point;
          if (!!Bd(f, p)) {
            i.preventDefault();
            var m = d.actions.fluidLift(p);
            a({ type: "DRAGGING", actions: m });
          }
        }
      },
    },
    {
      eventName: "mouseup",
      fn: function (i) {
        var s = n();
        if (s.type !== "DRAGGING") {
          t();
          return;
        }
        i.preventDefault(), s.actions.drop({ shouldBlockNextClick: !0 }), r();
      },
    },
    {
      eventName: "mousedown",
      fn: function (i) {
        n().type === "DRAGGING" && i.preventDefault(), t();
      },
    },
    {
      eventName: "keydown",
      fn: function (i) {
        var s = n();
        if (s.type === "PENDING") {
          t();
          return;
        }
        if (i.keyCode === Kn) {
          i.preventDefault(), t();
          return;
        }
        mi(i);
      },
    },
    { eventName: "resize", fn: t },
    {
      eventName: "scroll",
      options: { passive: !0, capture: !1 },
      fn: function () {
        n().type === "PENDING" && t();
      },
    },
    {
      eventName: "webkitmouseforcedown",
      fn: function (i) {
        var s = n();
        if ((s.type === "IDLE" && D(!1), s.actions.shouldRespectForcePress())) {
          t();
          return;
        }
        i.preventDefault();
      },
    },
    { eventName: Rr, fn: t },
  ];
}
function Fd(e) {
  var t = v.exports.useRef(Ma),
    r = v.exports.useRef(je),
    n = V(
      function () {
        return {
          eventName: "mousedown",
          fn: function (d) {
            if (
              !d.defaultPrevented &&
              d.button === gi &&
              !(d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
            ) {
              var f = e.findClosestDraggableId(d);
              if (!!f) {
                var m = e.tryGetLock(f, i, { sourceEvent: d });
                if (!!m) {
                  d.preventDefault();
                  var g = { x: d.clientX, y: d.clientY };
                  r.current(), u(m, g);
                }
              }
            }
          },
        };
      },
      [e]
    ),
    a = V(
      function () {
        return {
          eventName: "webkitmouseforcewillbegin",
          fn: function (d) {
            if (!d.defaultPrevented) {
              var f = e.findClosestDraggableId(d);
              if (!!f) {
                var m = e.findOptionsForDraggable(f);
                !m ||
                  m.shouldRespectForcePress ||
                  !e.canGetLock(f) ||
                  d.preventDefault();
              }
            }
          },
        };
      },
      [e]
    ),
    o = k(
      function () {
        var d = { passive: !1, capture: !0 };
        r.current = Ie(window, [a, n], d);
      },
      [a, n]
    ),
    i = k(
      function () {
        var p = t.current;
        p.type !== "IDLE" && ((t.current = Ma), r.current(), o());
      },
      [o]
    ),
    s = k(
      function () {
        var p = t.current;
        i(),
          p.type === "DRAGGING" &&
            p.actions.cancel({ shouldBlockNextClick: !0 }),
          p.type === "PENDING" && p.actions.abort();
      },
      [i]
    ),
    c = k(
      function () {
        var d = { capture: !0, passive: !1 },
          f = Nd({
            cancel: s,
            completed: i,
            getPhase: function () {
              return t.current;
            },
            setPhase: function (g) {
              t.current = g;
            },
          });
        r.current = Ie(window, f, d);
      },
      [s, i]
    ),
    u = k(
      function (d, f) {
        t.current.type !== "IDLE" && D(!1),
          (t.current = { type: "PENDING", point: f, actions: d }),
          c();
      },
      [c]
    );
  xe(
    function () {
      return (
        o(),
        function () {
          r.current();
        }
      );
    },
    [o]
  );
}
var lt;
function Rd() {}
var kd =
  ((lt = {}), (lt[wd] = !0), (lt[Ed] = !0), (lt[Id] = !0), (lt[Dd] = !0), lt);
function Td(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [
    {
      eventName: "keydown",
      fn: function (o) {
        if (o.keyCode === Kn) {
          o.preventDefault(), r();
          return;
        }
        if (o.keyCode === fi) {
          o.preventDefault(), n();
          return;
        }
        if (o.keyCode === Od) {
          o.preventDefault(), e.moveDown();
          return;
        }
        if (o.keyCode === Sd) {
          o.preventDefault(), e.moveUp();
          return;
        }
        if (o.keyCode === Ad) {
          o.preventDefault(), e.moveRight();
          return;
        }
        if (o.keyCode === Cd) {
          o.preventDefault(), e.moveLeft();
          return;
        }
        if (kd[o.keyCode]) {
          o.preventDefault();
          return;
        }
        mi(o);
      },
    },
    { eventName: "mousedown", fn: r },
    { eventName: "mouseup", fn: r },
    { eventName: "click", fn: r },
    { eventName: "touchstart", fn: r },
    { eventName: "resize", fn: r },
    { eventName: "wheel", fn: r, options: { passive: !0 } },
    { eventName: Rr, fn: r },
  ];
}
function Md(e) {
  var t = v.exports.useRef(Rd),
    r = V(
      function () {
        return {
          eventName: "keydown",
          fn: function (o) {
            if (o.defaultPrevented || o.keyCode !== fi) return;
            var i = e.findClosestDraggableId(o);
            if (!i) return;
            var s = e.tryGetLock(i, p, { sourceEvent: o });
            if (!s) return;
            o.preventDefault();
            var c = !0,
              u = s.snapLift();
            t.current();
            function p() {
              c || D(!1), (c = !1), t.current(), n();
            }
            t.current = Ie(window, Td(u, p), { capture: !0, passive: !1 });
          },
        };
      },
      [e]
    ),
    n = k(
      function () {
        var o = { passive: !1, capture: !0 };
        t.current = Ie(window, [r], o);
      },
      [r]
    );
  xe(
    function () {
      return (
        n(),
        function () {
          t.current();
        }
      );
    },
    [n]
  );
}
var tn = { type: "IDLE" },
  Ld = 120,
  $d = 0.15;
function Gd(e) {
  var t = e.cancel,
    r = e.getPhase;
  return [
    { eventName: "orientationchange", fn: t },
    { eventName: "resize", fn: t },
    {
      eventName: "contextmenu",
      fn: function (a) {
        a.preventDefault();
      },
    },
    {
      eventName: "keydown",
      fn: function (a) {
        if (r().type !== "DRAGGING") {
          t();
          return;
        }
        a.keyCode === Kn && a.preventDefault(), t();
      },
    },
    { eventName: Rr, fn: t },
  ];
}
function zd(e) {
  var t = e.cancel,
    r = e.completed,
    n = e.getPhase;
  return [
    {
      eventName: "touchmove",
      options: { capture: !1 },
      fn: function (o) {
        var i = n();
        if (i.type !== "DRAGGING") {
          t();
          return;
        }
        i.hasMoved = !0;
        var s = o.touches[0],
          c = s.clientX,
          u = s.clientY,
          p = { x: c, y: u };
        o.preventDefault(), i.actions.move(p);
      },
    },
    {
      eventName: "touchend",
      fn: function (o) {
        var i = n();
        if (i.type !== "DRAGGING") {
          t();
          return;
        }
        o.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), r();
      },
    },
    {
      eventName: "touchcancel",
      fn: function (o) {
        if (n().type !== "DRAGGING") {
          t();
          return;
        }
        o.preventDefault(), t();
      },
    },
    {
      eventName: "touchforcechange",
      fn: function (o) {
        var i = n();
        i.type === "IDLE" && D(!1);
        var s = o.touches[0];
        if (!!s) {
          var c = s.force >= $d;
          if (!!c) {
            var u = i.actions.shouldRespectForcePress();
            if (i.type === "PENDING") {
              u && t();
              return;
            }
            if (u) {
              if (i.hasMoved) {
                o.preventDefault();
                return;
              }
              t();
              return;
            }
            o.preventDefault();
          }
        }
      },
    },
    { eventName: Rr, fn: t },
  ];
}
function jd(e) {
  var t = v.exports.useRef(tn),
    r = v.exports.useRef(je),
    n = k(function () {
      return t.current;
    }, []),
    a = k(function (m) {
      t.current = m;
    }, []),
    o = V(
      function () {
        return {
          eventName: "touchstart",
          fn: function (m) {
            if (!m.defaultPrevented) {
              var g = e.findClosestDraggableId(m);
              if (!!g) {
                var b = e.tryGetLock(g, s, { sourceEvent: m });
                if (!!b) {
                  var h = m.touches[0],
                    x = h.clientX,
                    y = h.clientY,
                    w = { x, y };
                  r.current(), d(b, w);
                }
              }
            }
          },
        };
      },
      [e]
    ),
    i = k(
      function () {
        var m = { capture: !0, passive: !1 };
        r.current = Ie(window, [o], m);
      },
      [o]
    ),
    s = k(
      function () {
        var f = t.current;
        f.type !== "IDLE" &&
          (f.type === "PENDING" && clearTimeout(f.longPressTimerId),
          a(tn),
          r.current(),
          i());
      },
      [i, a]
    ),
    c = k(
      function () {
        var f = t.current;
        s(),
          f.type === "DRAGGING" &&
            f.actions.cancel({ shouldBlockNextClick: !0 }),
          f.type === "PENDING" && f.actions.abort();
      },
      [s]
    ),
    u = k(
      function () {
        var m = { capture: !0, passive: !1 },
          g = { cancel: c, completed: s, getPhase: n },
          b = Ie(window, zd(g), m),
          h = Ie(window, Gd(g), m);
        r.current = function () {
          b(), h();
        };
      },
      [c, n, s]
    ),
    p = k(
      function () {
        var m = n();
        m.type !== "PENDING" && D(!1);
        var g = m.actions.fluidLift(m.point);
        a({ type: "DRAGGING", actions: g, hasMoved: !1 });
      },
      [n, a]
    ),
    d = k(
      function (m, g) {
        n().type !== "IDLE" && D(!1);
        var b = setTimeout(p, Ld);
        a({ type: "PENDING", point: g, actions: m, longPressTimerId: b }), u();
      },
      [u, n, a, p]
    );
  xe(
    function () {
      return (
        i(),
        function () {
          r.current();
          var g = n();
          g.type === "PENDING" && (clearTimeout(g.longPressTimerId), a(tn));
        }
      );
    },
    [n, i, a]
  ),
    xe(function () {
      var m = Ie(window, [
        {
          eventName: "touchmove",
          fn: function () {},
          options: { capture: !1, passive: !1 },
        },
      ]);
      return m;
    }, []);
}
var qd = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function vi(e, t) {
  if (t == null) return !1;
  var r = Boolean(qd[t.tagName.toLowerCase()]);
  if (r) return !0;
  var n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : vi(e, t.parentElement);
}
function Wd(e, t) {
  var r = t.target;
  return Nr(r) ? vi(e, r) : !1;
}
var Ud = function (e) {
  return Pe(e.getBoundingClientRect()).center;
};
function Hd(e) {
  return e instanceof di(e).Element;
}
var Vd = (function () {
  var e = "matches";
  if (typeof document > "u") return e;
  var t = [e, "msMatchesSelector", "webkitMatchesSelector"],
    r = Ve(t, function (n) {
      return n in Element.prototype;
    });
  return r || e;
})();
function bi(e, t) {
  return e == null ? null : e[Vd](t) ? e : bi(e.parentElement, t);
}
function Kd(e, t) {
  return e.closest ? e.closest(t) : bi(e, t);
}
function Yd(e) {
  return "[" + dt.contextId + '="' + e + '"]';
}
function Jd(e, t) {
  var r = t.target;
  if (!Hd(r)) return null;
  var n = Yd(e),
    a = Kd(r, n);
  return !a || !Nr(a) ? null : a;
}
function Xd(e, t) {
  var r = Jd(e, t);
  return r ? r.getAttribute(dt.draggableId) : null;
}
function Zd(e, t) {
  var r = "[" + dn.contextId + '="' + e + '"]',
    n = Ro(document.querySelectorAll(r)),
    a = Ve(n, function (o) {
      return o.getAttribute(dn.id) === t;
    });
  return !a || !Nr(a) ? null : a;
}
function Qd(e) {
  e.preventDefault();
}
function or(e) {
  var t = e.expected,
    r = e.phase,
    n = e.isLockActive;
  return e.shouldWarn, !(!n() || t !== r);
}
function hi(e) {
  var t = e.lockAPI,
    r = e.store,
    n = e.registry,
    a = e.draggableId;
  if (t.isClaimed()) return !1;
  var o = n.draggable.findById(a);
  return !(!o || !o.options.isEnabled || !li(r.getState(), a));
}
function _d(e) {
  var t = e.lockAPI,
    r = e.contextId,
    n = e.store,
    a = e.registry,
    o = e.draggableId,
    i = e.forceSensorStop,
    s = e.sourceEvent,
    c = hi({ lockAPI: t, store: n, registry: a, draggableId: o });
  if (!c) return null;
  var u = a.draggable.getById(o),
    p = Zd(r, u.descriptor.id);
  if (!p || (s && !u.options.canDragInteractiveElements && Wd(p, s)))
    return null;
  var d = t.claim(i || je),
    f = "PRE_DRAG";
  function m() {
    return u.options.shouldRespectForcePress;
  }
  function g() {
    return t.isActive(d);
  }
  function b(I, F) {
    or({ expected: I, phase: f, isLockActive: g, shouldWarn: !0 }) &&
      n.dispatch(F());
  }
  var h = b.bind(null, "DRAGGING");
  function x(I) {
    function F() {
      t.release(), (f = "COMPLETED");
    }
    f !== "PRE_DRAG" && (F(), f !== "PRE_DRAG" && D(!1)),
      n.dispatch(Vc(I.liftActionArgs)),
      (f = "DRAGGING");
    function R(L, T) {
      if (
        (T === void 0 && (T = { shouldBlockNextClick: !1 }),
        I.cleanup(),
        T.shouldBlockNextClick)
      ) {
        var M = Ie(window, [
          {
            eventName: "click",
            fn: Qd,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(M);
      }
      F(), n.dispatch(ei({ reason: L }));
    }
    return N(
      {
        isActive: function () {
          return or({
            expected: "DRAGGING",
            phase: f,
            isLockActive: g,
            shouldWarn: !1,
          });
        },
        shouldRespectForcePress: m,
        drop: function (T) {
          return R("DROP", T);
        },
        cancel: function (T) {
          return R("CANCEL", T);
        },
      },
      I.actions
    );
  }
  function y(I) {
    var F = Ft(function (L) {
        h(function () {
          return _o({ client: L });
        });
      }),
      R = x({
        liftActionArgs: { id: o, clientSelection: I, movementMode: "FLUID" },
        cleanup: function () {
          return F.cancel();
        },
        actions: { move: F },
      });
    return N({}, R, { move: F });
  }
  function w() {
    var I = {
      moveUp: function () {
        return h(tu);
      },
      moveRight: function () {
        return h(nu);
      },
      moveDown: function () {
        return h(ru);
      },
      moveLeft: function () {
        return h(au);
      },
    };
    return x({
      liftActionArgs: { id: o, clientSelection: Ud(p), movementMode: "SNAP" },
      cleanup: je,
      actions: I,
    });
  }
  function E() {
    var I = or({
      expected: "PRE_DRAG",
      phase: f,
      isLockActive: g,
      shouldWarn: !0,
    });
    I && t.release();
  }
  var C = {
    isActive: function () {
      return or({
        expected: "PRE_DRAG",
        phase: f,
        isLockActive: g,
        shouldWarn: !1,
      });
    },
    shouldRespectForcePress: m,
    fluidLift: y,
    snapLift: w,
    abort: E,
  };
  return C;
}
var ep = [Fd, Md, jd];
function tp(e) {
  var t = e.contextId,
    r = e.store,
    n = e.registry,
    a = e.customSensors,
    o = e.enableDefaultSensors,
    i = [].concat(o ? ep : [], a || []),
    s = v.exports.useState(function () {
      return hd();
    })[0],
    c = k(
      function (y, w) {
        y.isDragging && !w.isDragging && s.tryAbandon();
      },
      [s]
    );
  xe(
    function () {
      var y = r.getState(),
        w = r.subscribe(function () {
          var E = r.getState();
          c(y, E), (y = E);
        });
      return w;
    },
    [s, r, c]
  ),
    xe(
      function () {
        return s.tryAbandon;
      },
      [s.tryAbandon]
    );
  for (
    var u = k(
        function (x) {
          return hi({ lockAPI: s, registry: n, store: r, draggableId: x });
        },
        [s, n, r]
      ),
      p = k(
        function (x, y, w) {
          return _d({
            lockAPI: s,
            registry: n,
            contextId: t,
            store: r,
            draggableId: x,
            forceSensorStop: y,
            sourceEvent: w && w.sourceEvent ? w.sourceEvent : null,
          });
        },
        [t, s, n, r]
      ),
      d = k(
        function (x) {
          return Xd(t, x);
        },
        [t]
      ),
      f = k(
        function (x) {
          var y = n.draggable.findById(x);
          return y ? y.options : null;
        },
        [n.draggable]
      ),
      m = k(
        function () {
          !s.isClaimed() ||
            (s.tryAbandon(), r.getState().phase !== "IDLE" && r.dispatch(Ln()));
        },
        [s, r]
      ),
      g = k(s.isClaimed, [s]),
      b = V(
        function () {
          return {
            canGetLock: u,
            tryGetLock: p,
            findClosestDraggableId: d,
            findOptionsForDraggable: f,
            tryReleaseLock: m,
            isLockClaimed: g,
          };
        },
        [u, p, d, f, m, g]
      ),
      h = 0;
    h < i.length;
    h++
  )
    i[h](b);
}
var rp = function (t) {
  return {
    onBeforeCapture: t.onBeforeCapture,
    onBeforeDragStart: t.onBeforeDragStart,
    onDragStart: t.onDragStart,
    onDragEnd: t.onDragEnd,
    onDragUpdate: t.onDragUpdate,
  };
};
function St(e) {
  return e.current || D(!1), e.current;
}
function np(e) {
  var t = e.contextId,
    r = e.setCallbacks,
    n = e.sensors,
    a = e.nonce,
    o = e.dragHandleUsageInstructions,
    i = v.exports.useRef(null),
    s = pi(e),
    c = k(
      function () {
        return rp(s.current);
      },
      [s]
    ),
    u = fd(t),
    p = bd({ contextId: t, text: o }),
    d = id(t, a),
    f = k(function (L) {
      St(i).dispatch(L);
    }, []),
    m = V(
      function () {
        return ua(
          {
            publishWhileDragging: Yc,
            updateDroppableScroll: Xc,
            updateDroppableIsEnabled: Zc,
            updateDroppableIsCombineEnabled: Qc,
            collectionStarting: Jc,
          },
          f
        );
      },
      [f]
    ),
    g = ud(),
    b = V(
      function () {
        return $u(g, m);
      },
      [g, m]
    ),
    h = V(
      function () {
        return td(
          N(
            { scrollWindow: Gu, scrollDroppable: b.scrollDroppable },
            ua({ move: _o }, f)
          )
        );
      },
      [b.scrollDroppable, f]
    ),
    x = sd(t),
    y = V(
      function () {
        return ku({
          announce: u,
          autoScroller: h,
          dimensionMarshal: b,
          focusMarshal: x,
          getResponders: c,
          styleMarshal: d,
        });
      },
      [u, h, b, x, c, d]
    );
  i.current = y;
  var w = k(function () {
      var L = St(i),
        T = L.getState();
      T.phase !== "IDLE" && L.dispatch(Ln());
    }, []),
    E = k(function () {
      var L = St(i).getState();
      return L.isDragging || L.phase === "DROP_ANIMATING";
    }, []),
    C = V(
      function () {
        return { isDragging: E, tryAbort: w };
      },
      [E, w]
    );
  r(C);
  var I = k(function (L) {
      return li(St(i).getState(), L);
    }, []),
    F = k(function () {
      return Xe(St(i).getState());
    }, []),
    R = V(
      function () {
        return {
          marshal: b,
          focus: x,
          contextId: t,
          canLift: I,
          isMovementAllowed: F,
          dragHandleUsageInstructionsId: p,
          registry: g,
        };
      },
      [t, b, p, x, I, F, g]
    );
  return (
    tp({
      contextId: t,
      store: y,
      registry: g,
      customSensors: n,
      enableDefaultSensors: e.enableDefaultSensors !== !1,
    }),
    v.exports.useEffect(
      function () {
        return w;
      },
      [w]
    ),
    l.createElement(
      Fr.Provider,
      { value: R },
      l.createElement(jl, { context: Hn, store: y }, e.children)
    )
  );
}
var ap = 0;
function op() {
  return V(function () {
    return "" + ap++;
  }, []);
}
function xi(e) {
  var t = op(),
    r = e.dragHandleUsageInstructions || dr.dragHandleUsageInstructions;
  return l.createElement(Ms, null, function (n) {
    return l.createElement(
      np,
      {
        nonce: e.nonce,
        contextId: t,
        setCallbacks: n,
        dragHandleUsageInstructions: r,
        enableDefaultSensors: e.enableDefaultSensors,
        sensors: e.sensors,
        onBeforeCapture: e.onBeforeCapture,
        onBeforeDragStart: e.onBeforeDragStart,
        onDragStart: e.onDragStart,
        onDragUpdate: e.onDragUpdate,
        onDragEnd: e.onDragEnd,
      },
      e.children
    );
  });
}
var yi = function (t) {
    return function (r) {
      return t === r;
    };
  },
  ip = yi("scroll"),
  lp = yi("auto"),
  La = function (t, r) {
    return r(t.overflowX) || r(t.overflowY);
  },
  sp = function (t) {
    var r = window.getComputedStyle(t),
      n = { overflowX: r.overflowX, overflowY: r.overflowY };
    return La(n, ip) || La(n, lp);
  },
  cp = function () {
    return !1;
  },
  up = function e(t) {
    return t == null
      ? null
      : t === document.body
      ? cp()
        ? t
        : null
      : t === document.documentElement
      ? null
      : sp(t)
      ? t
      : e(t.parentElement);
  },
  pn = function (e) {
    return { x: e.scrollLeft, y: e.scrollTop };
  },
  dp = function e(t) {
    if (!t) return !1;
    var r = window.getComputedStyle(t);
    return r.position === "fixed" ? !0 : e(t.parentElement);
  },
  pp = function (e) {
    var t = up(e),
      r = dp(e);
    return { closestScrollable: t, isFixedOnPage: r };
  },
  fp = function (e) {
    var t = e.descriptor,
      r = e.isEnabled,
      n = e.isCombineEnabled,
      a = e.isFixedOnPage,
      o = e.direction,
      i = e.client,
      s = e.page,
      c = e.closest,
      u = (function () {
        if (!c) return null;
        var m = c.scrollSize,
          g = c.client,
          b = ai({
            scrollHeight: m.scrollHeight,
            scrollWidth: m.scrollWidth,
            height: g.paddingBox.height,
            width: g.paddingBox.width,
          });
        return {
          pageMarginBox: c.page.marginBox,
          frameClient: g,
          scrollSize: m,
          shouldClipSubject: c.shouldClipSubject,
          scroll: {
            initial: c.scroll,
            current: c.scroll,
            max: b,
            diff: { value: le, displacement: le },
          },
        };
      })(),
      p = o === "vertical" ? Fn : $o,
      d = ct({ page: s, withPlaceholder: null, axis: p, frame: u }),
      f = {
        descriptor: t,
        isCombineEnabled: n,
        isFixedOnPage: a,
        axis: p,
        isEnabled: r,
        client: i,
        page: s,
        frame: u,
        subject: d,
      };
    return f;
  },
  mp = function (t, r) {
    var n = Oo(t);
    if (!r || t !== r) return n;
    var a = n.paddingBox.top - r.scrollTop,
      o = n.paddingBox.left - r.scrollLeft,
      i = a + r.scrollHeight,
      s = o + r.scrollWidth,
      c = { top: a, right: s, bottom: i, left: o },
      u = An(c, n.border),
      p = On({
        borderBox: u,
        margin: n.margin,
        border: n.border,
        padding: n.padding,
      });
    return p;
  },
  gp = function (e) {
    var t = e.ref,
      r = e.descriptor,
      n = e.env,
      a = e.windowScroll,
      o = e.direction,
      i = e.isDropDisabled,
      s = e.isCombineEnabled,
      c = e.shouldClipSubject,
      u = n.closestScrollable,
      p = mp(t, u),
      d = mr(p, a),
      f = (function () {
        if (!u) return null;
        var g = Oo(u),
          b = { scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth };
        return {
          client: g,
          page: mr(g, a),
          scroll: pn(u),
          scrollSize: b,
          shouldClipSubject: c,
        };
      })(),
      m = fp({
        descriptor: r,
        isEnabled: !i,
        isCombineEnabled: s,
        isFixedOnPage: n.isFixedOnPage,
        direction: o,
        client: p,
        page: d,
        closest: f,
      });
    return m;
  },
  vp = { passive: !1 },
  bp = { passive: !0 },
  $a = function (e) {
    return e.shouldPublishImmediately ? vp : bp;
  };
function yr(e) {
  var t = v.exports.useContext(e);
  return t || D(!1), t;
}
var ir = function (t) {
  return (t && t.env.closestScrollable) || null;
};
function hp(e) {
  var t = v.exports.useRef(null),
    r = yr(Fr),
    n = Vn("droppable"),
    a = r.registry,
    o = r.marshal,
    i = pi(e),
    s = V(
      function () {
        return { id: e.droppableId, type: e.type, mode: e.mode };
      },
      [e.droppableId, e.mode, e.type]
    ),
    c = v.exports.useRef(s),
    u = V(
      function () {
        return ie(function (E, C) {
          t.current || D(!1);
          var I = { x: E, y: C };
          o.updateDroppableScroll(s.id, I);
        });
      },
      [s.id, o]
    ),
    p = k(function () {
      var E = t.current;
      return !E || !E.env.closestScrollable ? le : pn(E.env.closestScrollable);
    }, []),
    d = k(
      function () {
        var E = p();
        u(E.x, E.y);
      },
      [p, u]
    ),
    f = V(
      function () {
        return Ft(d);
      },
      [d]
    ),
    m = k(
      function () {
        var E = t.current,
          C = ir(E);
        (E && C) || D(!1);
        var I = E.scrollOptions;
        if (I.shouldPublishImmediately) {
          d();
          return;
        }
        f();
      },
      [f, d]
    ),
    g = k(
      function (E, C) {
        t.current && D(!1);
        var I = i.current,
          F = I.getDroppableRef();
        F || D(!1);
        var R = pp(F),
          L = { ref: F, descriptor: s, env: R, scrollOptions: C };
        t.current = L;
        var T = gp({
            ref: F,
            descriptor: s,
            env: R,
            windowScroll: E,
            direction: I.direction,
            isDropDisabled: I.isDropDisabled,
            isCombineEnabled: I.isCombineEnabled,
            shouldClipSubject: !I.ignoreContainerClipping,
          }),
          M = R.closestScrollable;
        return (
          M &&
            (M.setAttribute(Ra.contextId, r.contextId),
            M.addEventListener("scroll", m, $a(L.scrollOptions))),
          T
        );
      },
      [r.contextId, s, m, i]
    ),
    b = k(function () {
      var E = t.current,
        C = ir(E);
      return (E && C) || D(!1), pn(C);
    }, []),
    h = k(
      function () {
        var E = t.current;
        E || D(!1);
        var C = ir(E);
        (t.current = null),
          C &&
            (f.cancel(),
            C.removeAttribute(Ra.contextId),
            C.removeEventListener("scroll", m, $a(E.scrollOptions)));
      },
      [m, f]
    ),
    x = k(function (E) {
      var C = t.current;
      C || D(!1);
      var I = ir(C);
      I || D(!1), (I.scrollTop += E.y), (I.scrollLeft += E.x);
    }, []),
    y = V(
      function () {
        return {
          getDimensionAndWatchScroll: g,
          getScrollWhileDragging: b,
          dragStopped: h,
          scroll: x,
        };
      },
      [h, g, b, x]
    ),
    w = V(
      function () {
        return { uniqueId: n, descriptor: s, callbacks: y };
      },
      [y, s, n]
    );
  xe(
    function () {
      return (
        (c.current = w.descriptor),
        a.droppable.register(w),
        function () {
          t.current && h(), a.droppable.unregister(w);
        }
      );
    },
    [y, s, h, w, o, a.droppable]
  ),
    xe(
      function () {
        !t.current ||
          o.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
      },
      [e.isDropDisabled, o]
    ),
    xe(
      function () {
        !t.current ||
          o.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
      },
      [e.isCombineEnabled, o]
    );
}
function rn() {}
var Ga = { width: 0, height: 0, margin: qs },
  xp = function (t) {
    var r = t.isAnimatingOpenOnMount,
      n = t.placeholder,
      a = t.animate;
    return r || a === "close"
      ? Ga
      : {
          height: n.client.borderBox.height,
          width: n.client.borderBox.width,
          margin: n.client.margin,
        };
  },
  yp = function (t) {
    var r = t.isAnimatingOpenOnMount,
      n = t.placeholder,
      a = t.animate,
      o = xp({ isAnimatingOpenOnMount: r, placeholder: n, animate: a });
    return {
      display: n.display,
      boxSizing: "border-box",
      width: o.width,
      height: o.height,
      marginTop: o.margin.top,
      marginRight: o.margin.right,
      marginBottom: o.margin.bottom,
      marginLeft: o.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: a !== "none" ? Nt.placeholder : null,
    };
  };
function Ep(e) {
  var t = v.exports.useRef(null),
    r = k(function () {
      !t.current || (clearTimeout(t.current), (t.current = null));
    }, []),
    n = e.animate,
    a = e.onTransitionEnd,
    o = e.onClose,
    i = e.contextId,
    s = v.exports.useState(e.animate === "open"),
    c = s[0],
    u = s[1];
  v.exports.useEffect(
    function () {
      return c
        ? n !== "open"
          ? (r(), u(!1), rn)
          : t.current
          ? rn
          : ((t.current = setTimeout(function () {
              (t.current = null), u(!1);
            })),
            r)
        : rn;
    },
    [n, c, r]
  );
  var p = k(
      function (f) {
        f.propertyName === "height" && (a(), n === "close" && o());
      },
      [n, o, a]
    ),
    d = yp({
      isAnimatingOpenOnMount: c,
      animate: e.animate,
      placeholder: e.placeholder,
    });
  return l.createElement(e.placeholder.tagName, {
    style: d,
    "data-rbd-placeholder-context-id": i,
    onTransitionEnd: p,
    ref: e.innerRef,
  });
}
var wp = l.memo(Ep),
  Yn = l.createContext(null),
  Dp = (function (e) {
    ro(t, e);
    function t() {
      for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
        o[i] = arguments[i];
      return (
        (n = e.call.apply(e, [this].concat(o)) || this),
        (n.state = {
          isVisible: Boolean(n.props.on),
          data: n.props.on,
          animate: n.props.shouldAnimate && n.props.on ? "open" : "none",
        }),
        (n.onClose = function () {
          n.state.animate === "close" && n.setState({ isVisible: !1 });
        }),
        n
      );
    }
    t.getDerivedStateFromProps = function (a, o) {
      return a.shouldAnimate
        ? a.on
          ? { isVisible: !0, data: a.on, animate: "open" }
          : o.isVisible
          ? { isVisible: !0, data: o.data, animate: "close" }
          : { isVisible: !1, animate: "close", data: null }
        : { isVisible: Boolean(a.on), data: a.on, animate: "none" };
    };
    var r = t.prototype;
    return (
      (r.render = function () {
        if (!this.state.isVisible) return null;
        var a = {
          onClose: this.onClose,
          data: this.state.data,
          animate: this.state.animate,
        };
        return this.props.children(a);
      }),
      t
    );
  })(l.PureComponent),
  za = { dragging: 5e3, dropAnimating: 4500 },
  Ip = function (t, r) {
    return r ? Nt.drop(r.duration) : t ? Nt.snap : Nt.fluid;
  },
  Cp = function (t, r) {
    return t ? (r ? Mt.opacity.drop : Mt.opacity.combining) : null;
  },
  Sp = function (t) {
    return t.forceShouldAnimate != null
      ? t.forceShouldAnimate
      : t.mode === "SNAP";
  };
function Ap(e) {
  var t = e.dimension,
    r = t.client,
    n = e.offset,
    a = e.combineWith,
    o = e.dropping,
    i = Boolean(a),
    s = Sp(e),
    c = Boolean(o),
    u = c ? cn.drop(n, i) : cn.moveTo(n),
    p = {
      position: "fixed",
      top: r.marginBox.top,
      left: r.marginBox.left,
      boxSizing: "border-box",
      width: r.borderBox.width,
      height: r.borderBox.height,
      transition: Ip(s, o),
      transform: u,
      opacity: Cp(i, c),
      zIndex: c ? za.dropAnimating : za.dragging,
      pointerEvents: "none",
    };
  return p;
}
function Op(e) {
  return {
    transform: cn.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? null : "none",
  };
}
function Pp(e) {
  return e.type === "DRAGGING" ? Ap(e) : Op(e);
}
function Bp(e, t, r) {
  r === void 0 && (r = le);
  var n = window.getComputedStyle(t),
    a = t.getBoundingClientRect(),
    o = Ao(a, n),
    i = mr(o, r),
    s = { client: o, tagName: t.tagName.toLowerCase(), display: n.display },
    c = { x: o.marginBox.width, y: o.marginBox.height },
    u = { descriptor: e, placeholder: s, displaceBy: c, client: o, page: i };
  return u;
}
function Np(e) {
  var t = Vn("draggable"),
    r = e.descriptor,
    n = e.registry,
    a = e.getDraggableRef,
    o = e.canDragInteractiveElements,
    i = e.shouldRespectForcePress,
    s = e.isEnabled,
    c = V(
      function () {
        return {
          canDragInteractiveElements: o,
          shouldRespectForcePress: i,
          isEnabled: s,
        };
      },
      [o, s, i]
    ),
    u = k(
      function (m) {
        var g = a();
        return g || D(!1), Bp(r, g, m);
      },
      [r, a]
    ),
    p = V(
      function () {
        return { uniqueId: t, descriptor: r, options: c, getDimension: u };
      },
      [r, u, c, t]
    ),
    d = v.exports.useRef(p),
    f = v.exports.useRef(!0);
  xe(
    function () {
      return (
        n.draggable.register(d.current),
        function () {
          return n.draggable.unregister(d.current);
        }
      );
    },
    [n.draggable]
  ),
    xe(
      function () {
        if (f.current) {
          f.current = !1;
          return;
        }
        var m = d.current;
        (d.current = p), n.draggable.update(p, m);
      },
      [p, n.draggable]
    );
}
function Fp(e) {
  e.preventDefault();
}
function Rp(e) {
  var t = v.exports.useRef(null),
    r = k(function (L) {
      t.current = L;
    }, []),
    n = k(function () {
      return t.current;
    }, []),
    a = yr(Fr),
    o = a.contextId,
    i = a.dragHandleUsageInstructionsId,
    s = a.registry,
    c = yr(Yn),
    u = c.type,
    p = c.droppableId,
    d = V(
      function () {
        return { id: e.draggableId, index: e.index, type: u, droppableId: p };
      },
      [e.draggableId, e.index, u, p]
    ),
    f = e.children,
    m = e.draggableId,
    g = e.isEnabled,
    b = e.shouldRespectForcePress,
    h = e.canDragInteractiveElements,
    x = e.isClone,
    y = e.mapped,
    w = e.dropAnimationFinished;
  if (!x) {
    var E = V(
      function () {
        return {
          descriptor: d,
          registry: s,
          getDraggableRef: n,
          canDragInteractiveElements: h,
          shouldRespectForcePress: b,
          isEnabled: g,
        };
      },
      [d, s, n, h, b, g]
    );
    Np(E);
  }
  var C = V(
      function () {
        return g
          ? {
              tabIndex: 0,
              role: "button",
              "aria-describedby": i,
              "data-rbd-drag-handle-draggable-id": m,
              "data-rbd-drag-handle-context-id": o,
              draggable: !1,
              onDragStart: Fp,
            }
          : null;
      },
      [o, i, m, g]
    ),
    I = k(
      function (L) {
        y.type === "DRAGGING" &&
          (!y.dropping || (L.propertyName === "transform" && w()));
      },
      [w, y]
    ),
    F = V(
      function () {
        var L = Pp(y),
          T = y.type === "DRAGGING" && y.dropping ? I : null,
          M = {
            innerRef: r,
            draggableProps: {
              "data-rbd-draggable-context-id": o,
              "data-rbd-draggable-id": m,
              style: L,
              onTransitionEnd: T,
            },
            dragHandleProps: C,
          };
        return M;
      },
      [o, C, m, y, I, r]
    ),
    R = V(
      function () {
        return {
          draggableId: d.id,
          type: d.type,
          source: { index: d.index, droppableId: d.droppableId },
        };
      },
      [d.droppableId, d.id, d.index, d.type]
    );
  return f(F, y.snapshot, R);
}
var Ei = function (e, t) {
    return e === t;
  },
  wi = function (e) {
    var t = e.combine,
      r = e.destination;
    return r ? r.droppableId : t ? t.droppableId : null;
  },
  kp = function (t) {
    return t.combine ? t.combine.draggableId : null;
  },
  Tp = function (t) {
    return t.at && t.at.type === "COMBINE" ? t.at.combine.draggableId : null;
  };
function Mp() {
  var e = ie(function (a, o) {
      return { x: a, y: o };
    }),
    t = ie(function (a, o, i, s, c) {
      return {
        isDragging: !0,
        isClone: o,
        isDropAnimating: Boolean(c),
        dropAnimation: c,
        mode: a,
        draggingOver: i,
        combineWith: s,
        combineTargetFor: null,
      };
    }),
    r = ie(function (a, o, i, s, c, u, p) {
      return {
        mapped: {
          type: "DRAGGING",
          dropping: null,
          draggingOver: c,
          combineWith: u,
          mode: o,
          offset: a,
          dimension: i,
          forceShouldAnimate: p,
          snapshot: t(o, s, c, u, null),
        },
      };
    }),
    n = function (o, i) {
      if (o.isDragging) {
        if (o.critical.draggable.id !== i.draggableId) return null;
        var s = o.current.client.offset,
          c = o.dimensions.draggables[i.draggableId],
          u = he(o.impact),
          p = Tp(o.impact),
          d = o.forceShouldAnimate;
        return r(e(s.x, s.y), o.movementMode, c, i.isClone, u, p, d);
      }
      if (o.phase === "DROP_ANIMATING") {
        var f = o.completed;
        if (f.result.draggableId !== i.draggableId) return null;
        var m = i.isClone,
          g = o.dimensions.draggables[i.draggableId],
          b = f.result,
          h = b.mode,
          x = wi(b),
          y = kp(b),
          w = o.dropDuration,
          E = {
            duration: w,
            curve: Gn.drop,
            moveTo: o.newHomeClientOffset,
            opacity: y ? Mt.opacity.drop : null,
            scale: y ? Mt.scale.drop : null,
          };
        return {
          mapped: {
            type: "DRAGGING",
            offset: o.newHomeClientOffset,
            dimension: g,
            dropping: E,
            draggingOver: x,
            combineWith: y,
            mode: h,
            forceShouldAnimate: null,
            snapshot: t(h, m, x, y, E),
          },
        };
      }
      return null;
    };
  return n;
}
function Di(e) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null,
  };
}
var Lp = {
  mapped: {
    type: "SECONDARY",
    offset: le,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Di(null),
  },
};
function $p() {
  var e = ie(function (i, s) {
      return { x: i, y: s };
    }),
    t = ie(Di),
    r = ie(function (i, s, c) {
      return (
        s === void 0 && (s = null),
        {
          mapped: {
            type: "SECONDARY",
            offset: i,
            combineTargetFor: s,
            shouldAnimateDisplacement: c,
            snapshot: t(s),
          },
        }
      );
    }),
    n = function (s) {
      return s ? r(le, s, !0) : null;
    },
    a = function (s, c, u, p) {
      var d = u.displaced.visible[s],
        f = Boolean(p.inVirtualList && p.effected[s]),
        m = Or(u),
        g = m && m.draggableId === s ? c : null;
      if (!d) {
        if (!f) return n(g);
        if (u.displaced.invisible[s]) return null;
        var b = vt(p.displacedBy.point),
          h = e(b.x, b.y);
        return r(h, g, !0);
      }
      if (f) return n(g);
      var x = u.displacedBy.point,
        y = e(x.x, x.y);
      return r(y, g, d.shouldAnimate);
    },
    o = function (s, c) {
      if (s.isDragging)
        return s.critical.draggable.id === c.draggableId
          ? null
          : a(
              c.draggableId,
              s.critical.draggable.id,
              s.impact,
              s.afterCritical
            );
      if (s.phase === "DROP_ANIMATING") {
        var u = s.completed;
        return u.result.draggableId === c.draggableId
          ? null
          : a(c.draggableId, u.result.draggableId, u.impact, u.afterCritical);
      }
      return null;
    };
  return o;
}
var Gp = function () {
    var t = Mp(),
      r = $p(),
      n = function (o, i) {
        return t(o, i) || r(o, i) || Lp;
      };
    return n;
  },
  zp = { dropAnimationFinished: ti },
  jp = Co(Gp, zp, null, { context: Hn, pure: !0, areStatePropsEqual: Ei })(Rp);
function Ii(e) {
  var t = yr(Yn),
    r = t.isUsingCloneFor;
  return r === e.draggableId && !e.isClone ? null : l.createElement(jp, e);
}
function Ci(e) {
  var t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
    r = Boolean(e.disableInteractiveElementBlocking),
    n = Boolean(e.shouldRespectForcePress);
  return l.createElement(
    Ii,
    N({}, e, {
      isClone: !1,
      isEnabled: t,
      canDragInteractiveElements: r,
      shouldRespectForcePress: n,
    })
  );
}
function qp(e) {
  var t = v.exports.useContext(Fr);
  t || D(!1);
  var r = t.contextId,
    n = t.isMovementAllowed,
    a = v.exports.useRef(null),
    o = v.exports.useRef(null),
    i = e.children,
    s = e.droppableId,
    c = e.type,
    u = e.mode,
    p = e.direction,
    d = e.ignoreContainerClipping,
    f = e.isDropDisabled,
    m = e.isCombineEnabled,
    g = e.snapshot,
    b = e.useClone,
    h = e.updateViewportMaxScroll,
    x = e.getContainerForClone,
    y = k(function () {
      return a.current;
    }, []),
    w = k(function (M) {
      a.current = M;
    }, []);
  k(function () {
    return o.current;
  }, []);
  var E = k(function (M) {
      o.current = M;
    }, []),
    C = k(
      function () {
        n() && h({ maxScroll: ii() });
      },
      [n, h]
    );
  hp({
    droppableId: s,
    type: c,
    mode: u,
    direction: p,
    isDropDisabled: f,
    isCombineEnabled: m,
    ignoreContainerClipping: d,
    getDroppableRef: y,
  });
  var I = l.createElement(
      Dp,
      { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
      function (M) {
        var j = M.onClose,
          z = M.data,
          B = M.animate;
        return l.createElement(wp, {
          placeholder: z,
          onClose: j,
          innerRef: E,
          animate: B,
          contextId: r,
          onTransitionEnd: C,
        });
      }
    ),
    F = V(
      function () {
        return {
          innerRef: w,
          placeholder: I,
          droppableProps: {
            "data-rbd-droppable-id": s,
            "data-rbd-droppable-context-id": r,
          },
        };
      },
      [r, s, I, w]
    ),
    R = b ? b.dragging.draggableId : null,
    L = V(
      function () {
        return { droppableId: s, type: c, isUsingCloneFor: R };
      },
      [s, R, c]
    );
  function T() {
    if (!b) return null;
    var M = b.dragging,
      j = b.render,
      z = l.createElement(
        Ii,
        {
          draggableId: M.draggableId,
          index: M.source.index,
          isClone: !0,
          isEnabled: !0,
          shouldRespectForcePress: !1,
          canDragInteractiveElements: !0,
        },
        function (B, A) {
          return j(B, A, M);
        }
      );
    return Xi.createPortal(z, x());
  }
  return l.createElement(Yn.Provider, { value: L }, i(F, g), T());
}
var nn = function (t, r) {
    return t === r.droppable.type;
  },
  ja = function (t, r) {
    return r.draggables[t.draggable.id];
  },
  Wp = function () {
    var t = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
          isDraggingOver: !1,
          draggingOverWith: null,
          draggingFromThisWith: null,
          isUsingPlaceholder: !1,
        },
        useClone: null,
      },
      r = N({}, t, { shouldAnimatePlaceholder: !1 }),
      n = ie(function (i) {
        return {
          draggableId: i.id,
          type: i.type,
          source: { index: i.index, droppableId: i.droppableId },
        };
      }),
      a = ie(function (i, s, c, u, p, d) {
        var f = p.descriptor.id,
          m = p.descriptor.droppableId === i;
        if (m) {
          var g = d ? { render: d, dragging: n(p.descriptor) } : null,
            b = {
              isDraggingOver: c,
              draggingOverWith: c ? f : null,
              draggingFromThisWith: f,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: p.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: b,
            useClone: g,
          };
        }
        if (!s) return r;
        if (!u) return t;
        var h = {
          isDraggingOver: c,
          draggingOverWith: f,
          draggingFromThisWith: null,
          isUsingPlaceholder: !0,
        };
        return {
          placeholder: p.placeholder,
          shouldAnimatePlaceholder: !0,
          snapshot: h,
          useClone: null,
        };
      }),
      o = function (s, c) {
        var u = c.droppableId,
          p = c.type,
          d = !c.isDropDisabled,
          f = c.renderClone;
        if (s.isDragging) {
          var m = s.critical;
          if (!nn(p, m)) return r;
          var g = ja(m, s.dimensions),
            b = he(s.impact) === u;
          return a(u, d, b, b, g, f);
        }
        if (s.phase === "DROP_ANIMATING") {
          var h = s.completed;
          if (!nn(p, h.critical)) return r;
          var x = ja(h.critical, s.dimensions);
          return a(u, d, wi(h.result) === u, he(h.impact) === u, x, f);
        }
        if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
          var y = s.completed;
          if (!nn(p, y.critical)) return r;
          var w = he(y.impact) === u,
            E = Boolean(y.impact.at && y.impact.at.type === "COMBINE"),
            C = y.critical.droppable.id === u;
          return w ? (E ? t : r) : C ? t : r;
        }
        return r;
      };
    return o;
  },
  Up = { updateViewportMaxScroll: eu };
function Hp() {
  return document.body || D(!1), document.body;
}
var Vp = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Hp,
  },
  Jn = Co(Wp, Up, null, { context: Hn, pure: !0, areStatePropsEqual: Ei })(qp);
Jn.defaultProps = Vp;
function Kp(e) {
  return Zi({
    tag: "svg",
    attr: { viewBox: "0 0 16 16", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.495 9.052l.891 2.35h1.091L6.237 3h-1.02L2 11.402h1.095l.838-2.35h3.562zM5.811 4.453l.044.135 1.318 3.574H4.255l1.307-3.574.044-.135.038-.156.032-.152.021-.126h.023l.024.126.029.152.038.156zm7.984 6.011v.936h.96V7.498c0-.719-.18-1.272-.539-1.661-.359-.389-.889-.583-1.588-.583-.199 0-.401.019-.606.056a4.875 4.875 0 0 0-1.078.326 2.081 2.081 0 0 0-.343.188v.984c.266-.23.566-.411.904-.54a2.927 2.927 0 0 1 1.052-.193c.188 0 .358.028.513.085a.98.98 0 0 1 .396.267c.109.121.193.279.252.472.059.193.088.427.088.7l-1.811.252c-.344.047-.64.126-.888.237a1.947 1.947 0 0 0-.615.419 1.6 1.6 0 0 0-.36.58 2.134 2.134 0 0 0-.117.721c0 .246.042.475.124.688.082.213.203.397.363.551.16.154.36.276.598.366.238.09.513.135.826.135.402 0 .76-.092 1.075-.278.315-.186.572-.454.771-.806h.023zm-2.128-1.743c.176-.064.401-.114.674-.149l1.465-.205v.609c0 .246-.041.475-.123.688a1.727 1.727 0 0 1-.343.557 1.573 1.573 0 0 1-.524.372 1.63 1.63 0 0 1-.668.135c-.187 0-.353-.025-.495-.076a1.03 1.03 0 0 1-.357-.211.896.896 0 0 1-.22-.316A1.005 1.005 0 0 1 11 9.732a1.6 1.6 0 0 1 .055-.44.739.739 0 0 1 .202-.334 1.16 1.16 0 0 1 .41-.237z",
        },
      },
    ],
  })(e);
}
const Yp = re.div`
  width: 24rem;
  min-width: 13rem;
  height: 100%;
  max-height: 100vh;
  position: relative;
  overflow: auto;
  resize: horizontal;

  border-right: 1px solid var(--text-body);

  header {
    background: ${({ fill: e }) => (e != null ? e : P.blue)};
    width: 100%;
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    display: grid;
    place-items: center;
    text-align: center;
    position: sticky;
    top: 0;
    span {
      padding: 0.5rem 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      .searchIcon {
        cursor: pointer;
        background: ${P.background};
        fill: ${P.textTitle};
        padding: 0.2rem;
        border-radius: 50%;
      }
    }
  }
  .itemDraggableListContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    border-bottom: 1px solid var(--text-body);
    &.itemDraggableSelected {
      background: ${({ fill: e }) => e && G(0.8, e)};
    }
    .leftDotsIconContainer {
      width: 1rem;
      margin: 0 0.5rem;
      .leftDotsIcon {
        width: 1rem;
      }
    }
    button {
      min-width: 4rem;
      width: 100%;
      min-height: 3.25rem;
      background: transparent;
      border: 0;
      text-align: left;
      padding: 0 1rem;
      font-size: 1.15rem;
      color: var(--text-title);
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: ${G(0.9, P.textBody)};
      }
    }
  }
  #addFirstItemContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 1rem;
    span {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    #addFirstItemBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--triple-gradient);
      background-size: 250%;
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transition: background-position-x 1s;
      &:hover {
        background-position-x: 100%;
      }
    }
    #addFirstFunnelBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--yellow);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
    }
    #addFirstTriggerBtn {
      grid-area: btn;
      width: 10rem;
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--orange);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
    }
  }
`,
  Jp = {
    audios: "\xC1udios",
    mensagens: "Mensagens",
    medias: "M\xEDdias",
    funis: "Funis",
    docs: "Documentos",
    triggers: "Gatilhos",
  };
function xt({ fill: e, itemType: t }) {
  const {
      selectedItem: r,
      setSelectedItem: n,
      selectedTrigger: a,
      selectedFunnel: o,
      setSelectedFunnel: i,
      setSelectedTrigger: s,
      getItemFromStorage: c,
      getFunnelFromStorage: u,
      getTriggerFromStorage: p,
      changeItemPosition: d,
      getFunnelName: f,
    } = oe(),
    { isDarkTheme: m } = ye(),
    [g, b] = v.exports.useState(!0),
    { mensagensIndex: h, createNewMessage: x } = $t(),
    { audiosIndex: y, createNewAudio: w } = Gt(),
    { mediasIndex: E, createNewMedia: C } = zt(),
    { docsIndex: I, createNewDoc: F } = jt(),
    { funnelsIndex: R, createNewFunnel: L } = et(),
    {
      triggersIndex: T,
      createNewTrigger: M,
      toggleEnabledTrigger: j,
      updateTriggerFunnelId: z,
    } = qt(),
    [B, A] = v.exports.useState([]),
    [H, S] = v.exports.useState(""),
    K = { audios: y, mensagens: h, medias: E, docs: I, funis: R, triggers: T },
    Y = { mensagens: x, audios: w, medias: C, funis: L, docs: F, triggers: M };
  v.exports.useEffect(() => {
    A(K[t]), b(!1);
  }, [t, h, y, E, I, R, T]);
  function Q(X, U) {
    t === "funis"
      ? u(X).then((te) => {
          i(te);
        })
      : t === "triggers"
      ? p(X).then((te) => {
          s(te);
        })
      : c(X).then((te) => {
          n({ ...te, id: X, type: t, name: U });
        });
  }
  function de(X) {
    const { source: U, destination: te } = X;
    !te || U.index === te.index || d(U.index, te.index, t);
  }
  const [ae, Ne] = v.exports.useState(!1);
  function ke() {
    ae && S(""), Ne((X) => !X);
  }
  return (
    B[0],
    oo(),
    l.createElement(
      Yp,
      { fill: e != null ? e : "" },
      l.createElement(
        "header",
        null,
        l.createElement(
          "span",
          null,
          "Gerenciamento de ",
          Jp[t],
          " ",
          l.createElement(Qi, { className: "searchIcon", onClick: ke })
        ),
        !!ae &&
          l.createElement(hl, {
            value: H,
            onChange: (X) => S(X.target.value),
            autoFocus: !0,
          })
      ),
      g &&
        l.createElement(
          "div",
          {
            id: "loadingContainer",
            className: "w-ful h-full text-lg text-center pt-4",
          },
          "Carregando..."
        ),
      K && !g && (!B || B.length === 0)
        ? l.createElement(
            "div",
            { id: "addFirstItemContainer" },
            l.createElement(
              "span",
              null,
              "Nenhum",
              " ",
              t === "funis" ? "funil" : t === "triggers" ? "gatilho" : "item",
              " ",
              "cadastrado ainda, clique no bot\xE3o abaixo para adicionar seu primeiro"
            ),
            l.createElement(
              "button",
              {
                type: "button",
                id:
                  t === "funis"
                    ? "addFirstFunnelBtn"
                    : t === "triggers"
                    ? "addFirstTriggerBtn"
                    : "addFirstItemBtn",
                onClick: () => {
                  Y[t]();
                },
              },
              "+ Novo",
              " ",
              t === "funis" ? "Funil" : t === "triggers" ? "Gatilho" : "Item"
            )
          )
        : l.createElement(
            xi,
            { onDragEnd: de },
            l.createElement(Jn, { droppableId: "listedItems" }, (X) =>
              l.createElement(
                "div",
                { ...X.droppableProps, ref: X.innerRef },
                K &&
                  (B == null
                    ? void 0
                    : B.map(
                        (U, te) =>
                          na(U.name)
                            .toLowerCase()
                            .includes(na(H).toLowerCase()) &&
                          l.createElement(
                            Ci,
                            {
                              key: U.id,
                              draggableId: U.id,
                              index: te,
                              isDragDisabled: H.length > 0,
                            },
                            (pe) =>
                              l.createElement(
                                "div",
                                {
                                  className: `itemDraggableListContainer ${
                                    (r == null ? void 0 : r.id) === U.id ||
                                    (o == null ? void 0 : o.id) === U.id ||
                                    (a == null ? void 0 : a.id) === U.id
                                      ? "itemDraggableSelected"
                                      : ""
                                  }`,
                                  ref: pe.innerRef,
                                  ...pe.draggableProps,
                                  ...pe.dragHandleProps,
                                  style: pe.draggableProps.style,
                                },
                                l.createElement(
                                  "div",
                                  { className: "leftDotsIconContainer" },
                                  l.createElement(io, {
                                    className: "leftDotsIcon",
                                  })
                                ),
                                l.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    id: U.id,
                                    onClick: () => {
                                      Q(U.id, U.name);
                                    },
                                  },
                                  U.name,
                                  t === "triggers" &&
                                    U.type === "trigger" &&
                                    l.createElement(
                                      "div",
                                      {
                                        className:
                                          "flex items-center justify-between ml-4",
                                      },
                                      !U.ignoreCaseSensitive &&
                                        l.createElement(
                                          we,
                                          {
                                            title:
                                              "Gatilho diferencia mai\xFAsculas de min\xFAsculas",
                                          },
                                          l.createElement(
                                            "div",
                                            { className: "w-6" },
                                            l.createElement(Kp, {
                                              className: Oe(
                                                "w-full fill-zap-blue"
                                              ),
                                            })
                                          )
                                        ),
                                      !U.dontSendToGroups &&
                                        l.createElement(
                                          we,
                                          {
                                            title:
                                              "Gatilho poder\xE1 ser disparado em grupos",
                                          },
                                          l.createElement(
                                            "div",
                                            { className: "w-6" },
                                            l.createElement(xl, {
                                              className: Oe(
                                                "w-full fill-zap-red"
                                              ),
                                            })
                                          )
                                        ),
                                      !!U.dontSendToContact &&
                                        l.createElement(
                                          we,
                                          {
                                            title:
                                              "Gatilho n\xE3o ser\xE1 enviado para contatos salvos",
                                          },
                                          l.createElement(
                                            "div",
                                            { className: "w-6" },
                                            l.createElement(_i, {
                                              className: Oe(
                                                "w-full fill-gray-400"
                                              ),
                                            })
                                          )
                                        ),
                                      l.createElement(
                                        we,
                                        {
                                          title: U.funnelId
                                            ? `Funil: ${f(U.funnelId)}`
                                            : "Gatilho n\xE3o vinculado a um funil",
                                        },
                                        l.createElement(
                                          "div",
                                          { className: "w-6" },
                                          l.createElement(el, {
                                            className: Oe("w-full", {
                                              "fill-zap-gold": !!U.funnelId,
                                              "fill-gray-400": !U.funnelId,
                                            }),
                                          })
                                        )
                                      ),
                                      l.createElement(
                                        we,
                                        {
                                          title: U.enabled
                                            ? "Clique para desativar o gatilho"
                                            : "Clique para ativar o gatilho",
                                        },
                                        l.createElement(
                                          "div",
                                          null,
                                          l.createElement(ur, {
                                            zvTheme: m ? "dark" : "light",
                                            sx: { m: 1 },
                                            checked: !!U.enabled,
                                            onChange: () => {
                                              j(U.id);
                                            },
                                          })
                                        )
                                      )
                                    )
                                )
                              )
                          )
                      )),
                X.placeholder
              )
            )
          )
    )
  );
}
var Xp = new Map([
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"],
]);
function er(e, t) {
  var r = Zp(e);
  if (typeof r.path != "string") {
    var n = e.webkitRelativePath;
    Object.defineProperty(r, "path", {
      value:
        typeof t == "string"
          ? t
          : typeof n == "string" && n.length > 0
          ? n
          : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0,
    });
  }
  return r;
}
function Zp(e) {
  var t = e.name,
    r = t && t.lastIndexOf(".") !== -1;
  if (r && !e.type) {
    var n = t.split(".").pop().toLowerCase(),
      a = Xp.get(n);
    a &&
      Object.defineProperty(e, "type", {
        value: a,
        writable: !1,
        configurable: !1,
        enumerable: !0,
      });
  }
  return e;
}
var Qp = [".DS_Store", "Thumbs.db"];
function _p(e) {
  return ft(this, void 0, void 0, function () {
    return mt(this, function (t) {
      return Er(e) && ef(e)
        ? [2, af(e.dataTransfer, e.type)]
        : tf(e)
        ? [2, rf(e)]
        : Array.isArray(e) &&
          e.every(function (r) {
            return "getFile" in r && typeof r.getFile == "function";
          })
        ? [2, nf(e)]
        : [2, []];
    });
  });
}
function ef(e) {
  return Er(e.dataTransfer);
}
function tf(e) {
  return Er(e) && Er(e.target);
}
function Er(e) {
  return typeof e == "object" && e !== null;
}
function rf(e) {
  return fn(e.target.files).map(function (t) {
    return er(t);
  });
}
function nf(e) {
  return ft(this, void 0, void 0, function () {
    var t;
    return mt(this, function (r) {
      switch (r.label) {
        case 0:
          return [
            4,
            Promise.all(
              e.map(function (n) {
                return n.getFile();
              })
            ),
          ];
        case 1:
          return (
            (t = r.sent()),
            [
              2,
              t.map(function (n) {
                return er(n);
              }),
            ]
          );
      }
    });
  });
}
function af(e, t) {
  return ft(this, void 0, void 0, function () {
    var r, n;
    return mt(this, function (a) {
      switch (a.label) {
        case 0:
          return e === null
            ? [2, []]
            : e.items
            ? ((r = fn(e.items).filter(function (o) {
                return o.kind === "file";
              })),
              t !== "drop" ? [2, r] : [4, Promise.all(r.map(of))])
            : [3, 2];
        case 1:
          return (n = a.sent()), [2, qa(Si(n))];
        case 2:
          return [
            2,
            qa(
              fn(e.files).map(function (o) {
                return er(o);
              })
            ),
          ];
      }
    });
  });
}
function qa(e) {
  return e.filter(function (t) {
    return Qp.indexOf(t.name) === -1;
  });
}
function fn(e) {
  if (e === null) return [];
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    t.push(n);
  }
  return t;
}
function of(e) {
  if (typeof e.webkitGetAsEntry != "function") return Wa(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Ai(t) : Wa(e);
}
function Si(e) {
  return e.reduce(function (t, r) {
    return Nl(t, Array.isArray(r) ? Si(r) : [r]);
  }, []);
}
function Wa(e) {
  var t = e.getAsFile();
  if (!t) return Promise.reject(e + " is not a File");
  var r = er(t);
  return Promise.resolve(r);
}
function lf(e) {
  return ft(this, void 0, void 0, function () {
    return mt(this, function (t) {
      return [2, e.isDirectory ? Ai(e) : sf(e)];
    });
  });
}
function Ai(e) {
  var t = e.createReader();
  return new Promise(function (r, n) {
    var a = [];
    function o() {
      var i = this;
      t.readEntries(
        function (s) {
          return ft(i, void 0, void 0, function () {
            var c, u, p;
            return mt(this, function (d) {
              switch (d.label) {
                case 0:
                  if (s.length) return [3, 5];
                  d.label = 1;
                case 1:
                  return d.trys.push([1, 3, , 4]), [4, Promise.all(a)];
                case 2:
                  return (c = d.sent()), r(c), [3, 4];
                case 3:
                  return (u = d.sent()), n(u), [3, 4];
                case 4:
                  return [3, 6];
                case 5:
                  (p = Promise.all(s.map(lf))), a.push(p), o(), (d.label = 6);
                case 6:
                  return [2];
              }
            });
          });
        },
        function (s) {
          n(s);
        }
      );
    }
    o();
  });
}
function sf(e) {
  return ft(this, void 0, void 0, function () {
    return mt(this, function (t) {
      return [
        2,
        new Promise(function (r, n) {
          e.file(
            function (a) {
              var o = er(a, e.fullPath);
              r(o);
            },
            function (a) {
              n(a);
            }
          );
        }),
      ];
    });
  });
}
var cf = function (e, t) {
  if (e && t) {
    var r = Array.isArray(t) ? t : t.split(","),
      n = e.name || "",
      a = (e.type || "").toLowerCase(),
      o = a.replace(/\/.*$/, "");
    return r.some(function (i) {
      var s = i.trim().toLowerCase();
      return s.charAt(0) === "."
        ? n.toLowerCase().endsWith(s)
        : s.endsWith("/*")
        ? o === s.replace(/\/.*$/, "")
        : a === s;
    });
  }
  return !0;
};
function Ua(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ha(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ua(Object(r), !0).forEach(function (n) {
          Oi(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ua(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Oi(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Va(e, t) {
  return ff(e) || pf(e, t) || df(e, t) || uf();
}
function uf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function df(e, t) {
  if (!!e) {
    if (typeof e == "string") return Ka(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ka(e, t);
  }
}
function Ka(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pf(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      s;
    try {
      for (
        r = r.call(e);
        !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t));
        a = !0
      );
    } catch (c) {
      (o = !0), (s = c);
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw s;
      }
    }
    return n;
  }
}
function ff(e) {
  if (Array.isArray(e)) return e;
}
var mf = "file-invalid-type",
  gf = "file-too-large",
  vf = "file-too-small",
  bf = "too-many-files",
  hf = function (t) {
    t = Array.isArray(t) && t.length === 1 ? t[0] : t;
    var r = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
    return { code: mf, message: "File type must be ".concat(r) };
  },
  Ya = function (t) {
    return {
      code: gf,
      message: "File is larger than "
        .concat(t, " ")
        .concat(t === 1 ? "byte" : "bytes"),
    };
  },
  Ja = function (t) {
    return {
      code: vf,
      message: "File is smaller than "
        .concat(t, " ")
        .concat(t === 1 ? "byte" : "bytes"),
    };
  },
  xf = { code: bf, message: "Too many files" };
function Pi(e, t) {
  var r = e.type === "application/x-moz-file" || cf(e, t);
  return [r, r ? null : hf(t)];
}
function Bi(e, t, r) {
  if (At(e.size))
    if (At(t) && At(r)) {
      if (e.size > r) return [!1, Ya(r)];
      if (e.size < t) return [!1, Ja(t)];
    } else {
      if (At(t) && e.size < t) return [!1, Ja(t)];
      if (At(r) && e.size > r) return [!1, Ya(r)];
    }
  return [!0, null];
}
function At(e) {
  return e != null;
}
function yf(e) {
  var t = e.files,
    r = e.accept,
    n = e.minSize,
    a = e.maxSize,
    o = e.multiple,
    i = e.maxFiles;
  return (!o && t.length > 1) || (o && i >= 1 && t.length > i)
    ? !1
    : t.every(function (s) {
        var c = Pi(s, r),
          u = Va(c, 1),
          p = u[0],
          d = Bi(s, n, a),
          f = Va(d, 1),
          m = f[0];
        return p && m;
      });
}
function wr(e) {
  return typeof e.isPropagationStopped == "function"
    ? e.isPropagationStopped()
    : typeof e.cancelBubble < "u"
    ? e.cancelBubble
    : !1;
}
function lr(e) {
  return e.dataTransfer
    ? Array.prototype.some.call(e.dataTransfer.types, function (t) {
        return t === "Files" || t === "application/x-moz-file";
      })
    : !!e.target && !!e.target.files;
}
function Xa(e) {
  e.preventDefault();
}
function Ef(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function wf(e) {
  return e.indexOf("Edge/") !== -1;
}
function Df() {
  var e =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : window.navigator.userAgent;
  return Ef(e) || wf(e);
}
function Re() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    for (
      var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), i = 1;
      i < a;
      i++
    )
      o[i - 1] = arguments[i];
    return t.some(function (s) {
      return !wr(n) && s && s.apply(void 0, [n].concat(o)), wr(n);
    });
  };
}
function If() {
  return "showOpenFilePicker" in window;
}
function Cf(e) {
  return (
    (e = typeof e == "string" ? e.split(",") : e),
    [
      {
        description: "everything",
        accept: Array.isArray(e)
          ? e
              .filter(function (t) {
                return (
                  t === "audio/*" ||
                  t === "video/*" ||
                  t === "image/*" ||
                  t === "text/*" ||
                  /\w+\/[-+.\w]+/g.test(t)
                );
              })
              .reduce(function (t, r) {
                return Ha(Ha({}, t), {}, Oi({}, r, []));
              }, {})
          : {},
      },
    ]
  );
}
function Sf(e) {
  return (
    e instanceof DOMException &&
    (e.name === "AbortError" || e.code === e.ABORT_ERR)
  );
}
function Af(e) {
  return (
    e instanceof DOMException &&
    (e.name === "SecurityError" || e.code === e.SECURITY_ERR)
  );
}
var Of = ["children"],
  Pf = ["open"],
  Bf = [
    "refKey",
    "role",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "onClick",
    "onDragEnter",
    "onDragOver",
    "onDragLeave",
    "onDrop",
  ],
  Nf = ["refKey", "onChange", "onClick"];
function Ff(e) {
  return Tf(e) || kf(e) || Ni(e) || Rf();
}
function Rf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kf(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Tf(e) {
  if (Array.isArray(e)) return mn(e);
}
function an(e, t) {
  return $f(e) || Lf(e, t) || Ni(e, t) || Mf();
}
function Mf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ni(e, t) {
  if (!!e) {
    if (typeof e == "string") return mn(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return mn(e, t);
  }
}
function mn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Lf(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n = [],
      a = !0,
      o = !1,
      i,
      s;
    try {
      for (
        r = r.call(e);
        !(a = (i = r.next()).done) && (n.push(i.value), !(t && n.length === t));
        a = !0
      );
    } catch (c) {
      (o = !0), (s = c);
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw s;
      }
    }
    return n;
  }
}
function $f(e) {
  if (Array.isArray(e)) return e;
}
function Za(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Za(Object(r), !0).forEach(function (n) {
          gn(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Za(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function gn(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Dr(e, t) {
  if (e == null) return {};
  var r = Gf(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      (n = o[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function Gf(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    o;
  for (o = 0; o < n.length; o++)
    (a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var kr = v.exports.forwardRef(function (e, t) {
  var r = e.children,
    n = Dr(e, Of),
    a = zf(n),
    o = a.open,
    i = Dr(a, Pf);
  return (
    v.exports.useImperativeHandle(
      t,
      function () {
        return { open: o };
      },
      [o]
    ),
    l.createElement(v.exports.Fragment, null, r(ee(ee({}, i), {}, { open: o })))
  );
});
kr.displayName = "Dropzone";
var Fi = {
  disabled: !1,
  getFilesFromEvent: _p,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !0,
};
kr.defaultProps = Fi;
kr.propTypes = {
  children: Z.exports.func,
  accept: Z.exports.oneOfType([
    Z.exports.string,
    Z.exports.arrayOf(Z.exports.string),
  ]),
  multiple: Z.exports.bool,
  preventDropOnDocument: Z.exports.bool,
  noClick: Z.exports.bool,
  noKeyboard: Z.exports.bool,
  noDrag: Z.exports.bool,
  noDragEventsBubbling: Z.exports.bool,
  minSize: Z.exports.number,
  maxSize: Z.exports.number,
  maxFiles: Z.exports.number,
  disabled: Z.exports.bool,
  getFilesFromEvent: Z.exports.func,
  onFileDialogCancel: Z.exports.func,
  onFileDialogOpen: Z.exports.func,
  useFsAccessApi: Z.exports.bool,
  onDragEnter: Z.exports.func,
  onDragLeave: Z.exports.func,
  onDragOver: Z.exports.func,
  onDrop: Z.exports.func,
  onDropAccepted: Z.exports.func,
  onDropRejected: Z.exports.func,
  validator: Z.exports.func,
};
const pt = kr;
var vn = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: [],
};
function zf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = ee(ee({}, Fi), e),
    r = t.accept,
    n = t.disabled,
    a = t.getFilesFromEvent,
    o = t.maxSize,
    i = t.minSize,
    s = t.multiple,
    c = t.maxFiles,
    u = t.onDragEnter,
    p = t.onDragLeave,
    d = t.onDragOver,
    f = t.onDrop,
    m = t.onDropAccepted,
    g = t.onDropRejected,
    b = t.onFileDialogCancel,
    h = t.onFileDialogOpen,
    x = t.useFsAccessApi,
    y = t.preventDropOnDocument,
    w = t.noClick,
    E = t.noKeyboard,
    C = t.noDrag,
    I = t.noDragEventsBubbling,
    F = t.validator,
    R = v.exports.useMemo(
      function () {
        return typeof h == "function" ? h : Qa;
      },
      [h]
    ),
    L = v.exports.useMemo(
      function () {
        return typeof b == "function" ? b : Qa;
      },
      [b]
    ),
    T = v.exports.useRef(null),
    M = v.exports.useRef(null),
    j = v.exports.useReducer(jf, vn),
    z = an(j, 2),
    B = z[0],
    A = z[1],
    H = B.isFocused,
    S = B.isFileDialogActive,
    K = B.draggedFiles,
    Y = v.exports.useRef(
      typeof window < "u" && window.isSecureContext && x && If()
    ),
    Q = function () {
      !Y.current &&
        S &&
        setTimeout(function () {
          if (M.current) {
            var q = M.current.files;
            q.length || (A({ type: "closeDialog" }), L());
          }
        }, 300);
    };
  v.exports.useEffect(
    function () {
      return (
        window.addEventListener("focus", Q, !1),
        function () {
          window.removeEventListener("focus", Q, !1);
        }
      );
    },
    [M, S, L, Y]
  );
  var de = v.exports.useRef([]),
    ae = function (q) {
      (T.current && T.current.contains(q.target)) ||
        (q.preventDefault(), (de.current = []));
    };
  v.exports.useEffect(
    function () {
      return (
        y &&
          (document.addEventListener("dragover", Xa, !1),
          document.addEventListener("drop", ae, !1)),
        function () {
          y &&
            (document.removeEventListener("dragover", Xa),
            document.removeEventListener("drop", ae));
        }
      );
    },
    [T, y]
  );
  var Ne = v.exports.useCallback(
      function (O) {
        O.preventDefault(),
          O.persist(),
          ze(O),
          (de.current = [].concat(Ff(de.current), [O.target])),
          lr(O) &&
            Promise.resolve(a(O)).then(function (q) {
              (wr(O) && !I) ||
                (A({
                  draggedFiles: q,
                  isDragActive: !0,
                  type: "setDraggedFiles",
                }),
                u && u(O));
            });
      },
      [a, u, I]
    ),
    ke = v.exports.useCallback(
      function (O) {
        O.preventDefault(), O.persist(), ze(O);
        var q = lr(O);
        if (q && O.dataTransfer)
          try {
            O.dataTransfer.dropEffect = "copy";
          } catch {}
        return q && d && d(O), !1;
      },
      [d, I]
    ),
    X = v.exports.useCallback(
      function (O) {
        O.preventDefault(), O.persist(), ze(O);
        var q = de.current.filter(function (ge) {
            return T.current && T.current.contains(ge);
          }),
          se = q.indexOf(O.target);
        se !== -1 && q.splice(se, 1),
          (de.current = q),
          !(q.length > 0) &&
            (A({ isDragActive: !1, type: "setDraggedFiles", draggedFiles: [] }),
            lr(O) && p && p(O));
      },
      [T, p, I]
    ),
    U = v.exports.useCallback(
      function (O, q) {
        var se = [],
          ge = [];
        O.forEach(function (Se) {
          var Dt = Pi(Se, r),
            ot = an(Dt, 2),
            $r = ot[0],
            Gr = ot[1],
            zr = Bi(Se, i, o),
            tr = an(zr, 2),
            jr = tr[0],
            qr = tr[1],
            Wr = F ? F(Se) : null;
          if ($r && jr && !Wr) se.push(Se);
          else {
            var Ur = [Gr, qr];
            Wr && (Ur = Ur.concat(Wr)),
              ge.push({
                file: Se,
                errors: Ur.filter(function (Vi) {
                  return Vi;
                }),
              });
          }
        }),
          ((!s && se.length > 1) || (s && c >= 1 && se.length > c)) &&
            (se.forEach(function (Se) {
              ge.push({ file: Se, errors: [xf] });
            }),
            se.splice(0)),
          A({ acceptedFiles: se, fileRejections: ge, type: "setFiles" }),
          f && f(se, ge, q),
          ge.length > 0 && g && g(ge, q),
          se.length > 0 && m && m(se, q);
      },
      [A, s, r, i, o, c, f, m, g, F]
    ),
    te = v.exports.useCallback(
      function (O) {
        O.preventDefault(),
          O.persist(),
          ze(O),
          (de.current = []),
          lr(O) &&
            Promise.resolve(a(O)).then(function (q) {
              (wr(O) && !I) || U(q, O);
            }),
          A({ type: "reset" });
      },
      [a, U, I]
    ),
    pe = v.exports.useCallback(
      function () {
        if (Y.current) {
          A({ type: "openDialog" }), R();
          var O = { multiple: s, types: Cf(r) };
          window
            .showOpenFilePicker(O)
            .then(function (q) {
              return a(q);
            })
            .then(function (q) {
              U(q, null), A({ type: "closeDialog" });
            })
            .catch(function (q) {
              Sf(q)
                ? (L(q), A({ type: "closeDialog" }))
                : Af(q) &&
                  ((Y.current = !1),
                  M.current && ((M.current.value = null), M.current.click()));
            });
          return;
        }
        M.current &&
          (A({ type: "openDialog" }),
          R(),
          (M.current.value = null),
          M.current.click());
      },
      [A, R, L, x, U, r, s]
    ),
    rt = v.exports.useCallback(
      function (O) {
        !T.current ||
          !T.current.isEqualNode(O.target) ||
          ((O.keyCode === 32 || O.keyCode === 13) &&
            (O.preventDefault(), pe()));
      },
      [T, pe]
    ),
    Te = v.exports.useCallback(function () {
      A({ type: "focus" });
    }, []),
    nt = v.exports.useCallback(function () {
      A({ type: "blur" });
    }, []),
    Et = v.exports.useCallback(
      function () {
        w || (Df() ? setTimeout(pe, 0) : pe());
      },
      [w, pe]
    ),
    Fe = function (q) {
      return n ? null : q;
    },
    Ge = function (q) {
      return E ? null : Fe(q);
    },
    Ke = function (q) {
      return C ? null : Fe(q);
    },
    ze = function (q) {
      I && q.stopPropagation();
    },
    wt = v.exports.useMemo(
      function () {
        return function () {
          var O =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            q = O.refKey,
            se = q === void 0 ? "ref" : q,
            ge = O.role,
            Se = O.onKeyDown,
            Dt = O.onFocus,
            ot = O.onBlur,
            $r = O.onClick,
            Gr = O.onDragEnter,
            zr = O.onDragOver,
            tr = O.onDragLeave,
            jr = O.onDrop,
            qr = Dr(O, Bf);
          return ee(
            ee(
              gn(
                {
                  onKeyDown: Ge(Re(Se, rt)),
                  onFocus: Ge(Re(Dt, Te)),
                  onBlur: Ge(Re(ot, nt)),
                  onClick: Fe(Re($r, Et)),
                  onDragEnter: Ke(Re(Gr, Ne)),
                  onDragOver: Ke(Re(zr, ke)),
                  onDragLeave: Ke(Re(tr, X)),
                  onDrop: Ke(Re(jr, te)),
                  role: typeof ge == "string" && ge !== "" ? ge : "button",
                },
                se,
                T
              ),
              !n && !E ? { tabIndex: 0 } : {}
            ),
            qr
          );
        };
      },
      [T, rt, Te, nt, Et, Ne, ke, X, te, E, C, n]
    ),
    Lr = v.exports.useCallback(function (O) {
      O.stopPropagation();
    }, []),
    Ye = v.exports.useMemo(
      function () {
        return function () {
          var O =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            q = O.refKey,
            se = q === void 0 ? "ref" : q,
            ge = O.onChange,
            Se = O.onClick,
            Dt = Dr(O, Nf),
            ot = gn(
              {
                accept: r,
                multiple: s,
                type: "file",
                style: { display: "none" },
                onChange: Fe(Re(ge, te)),
                onClick: Fe(Re(Se, Lr)),
                autoComplete: "off",
                tabIndex: -1,
              },
              se,
              M
            );
          return ee(ee({}, ot), Dt);
        };
      },
      [M, r, s, te, n]
    ),
    at = K.length,
    ta =
      at > 0 &&
      yf({
        files: K,
        accept: r,
        minSize: i,
        maxSize: o,
        multiple: s,
        maxFiles: c,
      }),
    Hi = at > 0 && !ta;
  return ee(
    ee({}, B),
    {},
    {
      isDragAccept: ta,
      isDragReject: Hi,
      isFocused: H && !n,
      getRootProps: wt,
      getInputProps: Ye,
      rootRef: T,
      inputRef: M,
      open: Fe(pe),
    }
  );
}
function jf(e, t) {
  switch (t.type) {
    case "focus":
      return ee(ee({}, e), {}, { isFocused: !0 });
    case "blur":
      return ee(ee({}, e), {}, { isFocused: !1 });
    case "openDialog":
      return ee(ee({}, vn), {}, { isFileDialogActive: !0 });
    case "closeDialog":
      return ee(ee({}, e), {}, { isFileDialogActive: !1 });
    case "setDraggedFiles":
      var r = t.isDragActive,
        n = t.draggedFiles;
      return ee(ee({}, e), {}, { draggedFiles: n, isDragActive: r });
    case "setFiles":
      return ee(
        ee({}, e),
        {},
        { acceptedFiles: t.acceptedFiles, fileRejections: t.fileRejections }
      );
    case "reset":
      return ee({}, vn);
    default:
      return e;
  }
}
function Qa() {}
const qf = re.section`
  padding: 0 1.5rem;
  grid-area: actionSection;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  button {
    width: 8rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray5);
    & + button {
      margin-left: 0.5rem;
    }
    &#saveItemBtn {
      background: var(--blue);
    }
    &#cancelBtn {
      background: ${G(0.2, P.red)};
    }
  }
`;
function Tr({ conditionToShow: e, actionSave: t }) {
  const { setSelectedItem: r } = oe();
  return l.createElement(
    qf,
    null,
    e &&
      l.createElement(
        l.Fragment,
        null,
        l.createElement(
          "button",
          { type: "button", id: "saveItemBtn", onClick: t },
          "Salvar"
        ),
        l.createElement(
          "button",
          {
            type: "button",
            id: "cancelBtn",
            onClick: () => {
              r(void 0);
            },
          },
          "Cancelar"
        )
      )
  );
}
function Xn(e) {
  return new Promise((t, r) => {
    const n = new FileReader();
    (n.onload = () => t(n.result)),
      (n.onerror = (a) => {
        r(a);
      }),
      n.readAsDataURL(e);
  });
}
const Wf = re.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${G(0.8, $("audios"))};

    border: 2px dashed ${$("audios")};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${G(0.85, P.green)};
      filter: brightness(0.8);
    }
    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem auto;
    }
    h2 {
      color: ${$("audios")};
    }
    p {
      font-weight: 700;
      font-size: 1.25rem;
    }
    span {
      margin: 1rem auto;
      font-weight: 500;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    audio {
      border: 1px solid ${$("audios")};
      border-radius: 2rem;
      box-shadow: 0px 0px 10px ${$("audios")};
    }
    .howToConvertLink {
      display: none;
    }
    video {
      display: none;
      & + .howToConvertLink {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 0 2rem;
        text-align: center;
        a.warning {
          color: var(--red);
        }
      }
    }
    #sendAsForwardedContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      #sendAsForwardedSwitch {
        margin-bottom: 0.25rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
`,
  Zn = "/assets/dropFileIcon.svg",
  Qn = "/assets/greenCheck.svg";
function Uf() {
  const { selectedItem: e } = oe(),
    [t, r] = v.exports.useState(""),
    [n, a] = v.exports.useState(!1),
    [o, i] = v.exports.useState(!1),
    { updateAudioData: s } = Gt();
  v.exports.useEffect(() => {
    var u, p;
    r((u = e == null ? void 0 : e.data) != null ? u : ""),
      a((p = e == null ? void 0 : e.sendAsForwarded) != null ? p : !1),
      i(!1);
  }, [e]);
  async function c(u) {
    if (!u) return;
    const p = await Xn(u);
    r(String(p));
  }
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(
      Wf,
      { id: "mainContent" },
      l.createElement(
        pt,
        {
          accept: "audio/mpeg,audio/ogg,audio/x-m4a,video/mpeg",
          multiple: !1,
          onDrop: (u) => {
            c(u[0]);
          },
          onDragOver: () => i(!0),
          onDragLeave: () => i(!1),
          onDropRejected: (u) => {
            i(!1),
              u[0].errors.find((p) => p.code === "file-invalid-type")
                ? W.error(
                    l.createElement(
                      "a",
                      {
                        href: "https://zapvoice.com.br/converter-audio-ogg",
                        target: "_blank",
                        rel: "noreferrer",
                      },
                      "Formato n\xE3o aceito, clique aqui para aprender a converter seu \xE1udio da maneira certa"
                    )
                  )
                : u[0].errors.find((p) => p.code === "file-too-large")
                ? W.error(
                    "Arquivo maior que 16Mb (limite colocado pelo whatsapp web)"
                  )
                : W.error(u[0].errors[0].message);
          },
          onDropAccepted: (u) => {
            i(!1), W.success("Audio carregado");
          },
          maxSize: 16 * 1e3 * 1e3,
        },
        ({ getRootProps: u, getInputProps: p }) =>
          l.createElement(
            "div",
            { ...u({ className: `dropzone ${o ? "isDragginOn" : ""}` }) },
            l.createElement("input", { ...p() }),
            t && t !== (e == null ? void 0 : e.data)
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("img", { src: Qn, alt: "Clique em Salvar" }),
                  l.createElement("h2", null, "Arquivo carregado com sucesso!"),
                  l.createElement(
                    "span",
                    null,
                    'Clique abaixo em "Salvar" para finalizar.'
                  )
                )
              : l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("img", {
                    src: Zn,
                    alt: "Arraste seu arquivo ou clique aqui",
                  }),
                  l.createElement(
                    "p",
                    null,
                    "Clique aqui ou arraste o novo \xE1udio a ser salvo"
                  ),
                  l.createElement(
                    "span",
                    null,
                    "Formatos aceitos '.ogg' e '.mp3'"
                  )
                ),
            t &&
              l.createElement(
                l.Fragment,
                null,
                l.createElement(En, { base64: t }),
                l.createElement(
                  "div",
                  { className: "howToConvertLink" },
                  l.createElement(
                    "a",
                    {
                      download: !0,
                      href: t,
                      onClick: (d) => {
                        d.stopPropagation();
                      },
                    },
                    "Baixar o \xE1udio"
                  ),
                  l.createElement(
                    "a",
                    {
                      href: "https://zapvoice.com.br/converter-audio-ogg",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "warning",
                      onClick: (d) => {
                        d.stopPropagation();
                      },
                    },
                    "Seu \xE1udio est\xE1 em um formato que n\xE3o ser\xE1 mais aceito pelo whatsapp. Clique aqui e aprenda a converte-lo"
                  )
                )
              ),
            t &&
              l.createElement(
                "div",
                { id: "sendAsForwardedContainer" },
                l.createElement(wn, {
                  checked: !n,
                  id: "sendAsForwardedSwitch",
                  onClick: (d) => {
                    d.stopPropagation(), a(!n);
                  },
                }),
                l.createElement(
                  "h3",
                  null,
                  "Enviando \xE1udio como",
                  " ",
                  n ? "encaminhado" : "gravado"
                )
              )
          )
      )
    ),
    l.createElement(Tr, {
      conditionToShow:
        t !== (e == null ? void 0 : e.data) ||
        (e.sendAsForwarded !== void 0 && n !== e.sendAsForwarded) ||
        (e.sendAsForwarded === void 0 && n),
      actionSave: () => {
        e && s({ id: e.id, data: t, sendAsForwarded: n });
      },
    })
  );
}
const Hf = "/assets/homePageAudios.svg";
function Vf() {
  return l.createElement(
    l.Fragment,
    null,
    l.createElement("img", {
      src: Hf,
      alt: "Central de \xC1udios",
      className: "homeImg",
    }),
    l.createElement(
      "span",
      null,
      "Selecione um \xE1udio para editar na aba ao lado ou clique em \u201CNovo Item para adicionar um novo \xE1udio para o ZapVoice"
    )
  );
}
const Kf = tl`
`,
  yt = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  flex: 1;
  span {
    max-width: 22rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-subtitle);
    text-align: center;
  }
  img.homeImg {
    height: 10rem;
  }
`,
  Yf = re.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  place-items: center;
  margin: 0 auto;
  flex: 1;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--zap-background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &.mensagens {
        &:hover {
          outline: 1px solid
            ${G(0.5, $("mensagens"))};
        }
        &:focus {
          outline: 1.2px solid ${$("mensagens")};
        }
      }
      &.audios {
        &:hover {
          outline: 1px solid
            ${G(0.2, $("audios"))};
        }
        &:focus {
          outline: 1.5px solid ${$("audios")};
        }
      }
      &.medias {
        &:hover {
          outline: 1px solid
            ${G(0.2, $("medias"))};
        }
        &:focus {
          outline: 1.5px solid ${$("medias")};
        }
      }
      &.docs {
        &:hover {
          outline: 1px solid ${G(0.2, $("docs"))};
        }
        &:focus {
          outline: 1.5px solid ${$("docs")};
        }
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      background: ${G(0.7, P.red)};
      display: grid;
      place-items: center;
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${P.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${G(0.5, "black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;
function Mr({ children: e }) {
  const { selectedItem: t } = oe(),
    { updateMessageName: r, deleteMessage: n } = $t(),
    { updateAudioName: a, deleteAudio: o } = Gt(),
    { updateMediaName: i, deleteMedia: s } = zt(),
    { updateDocName: c, deleteDoc: u } = jt(),
    { funnelsIndex: p } = et(),
    { isDarkTheme: d } = ye(),
    [f, m] = v.exports.useState(""),
    [g, b] = v.exports.useState(!1);
  v.exports.useEffect(() => {
    var C;
    m((C = t == null ? void 0 : t.name) != null ? C : "Default Name");
  }, [t, m]);
  const h = { mensagens: r, audios: a, medias: i, docs: c },
    x = { mensagens: n, audios: o, medias: s, docs: u };
  function y() {
    b(!0);
  }
  function w() {
    b(!1);
  }
  function E() {
    if (!t) return;
    const C = p.reduce(
      (I, F) => (
        F.data && !!F.data.find((R) => R.id === t.id) && I.push(F.name), I
      ),
      []
    );
    if (C.length > 0) {
      W.error(
        l.createElement(
          "div",
          null,
          'O item "',
          f,
          '" que voc\xEA est\xE1 tentando apagar est\xE1 cadastrado no',
          C.length > 1 && "s",
          " seguinte",
          C.length > 1 && "s",
          " funi",
          C.length > 1 ? "s" : "l",
          ": ",
          l.createElement("br", null),
          l.createElement("br", null),
          l.createElement(
            "ul",
            null,
            C.map((I, F) => l.createElement("li", { key: F }, I))
          ),
          l.createElement("br", null),
          "Remova ele desse",
          C.length > 1 && "s",
          " antes de apagar"
        )
      );
      return;
    }
    y();
  }
  return l.createElement(
    Yf,
    null,
    l.createElement(tt, {
      details: {
        title: `Tem certeza que deseja deletar o item "${f}"?`,
        description:
          "Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o item",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: d ? P.gray3 : P.gray4,
        fillOk: P.red,
      },
      onRequestOk: async () => t && x[t.type](t.id),
      isOpen: g,
      onRequestClose: w,
    }),
    l.createElement(
      "section",
      { id: "inputAndDelete" },
      l.createElement("input", {
        type: "text",
        value: f,
        className: t == null ? void 0 : t.type,
        onChange: (C) => {
          m(C.target.value);
        },
        onBlur: () => {
          !f && (t == null ? void 0 : t.name) && m(t.name),
            f &&
              t &&
              f !== (t == null ? void 0 : t.name) &&
              h[t.type]({ id: t.id, name: f });
        },
      }),
      l.createElement(
        "button",
        { type: "button", id: "deleteItemBtn", onClick: E },
        l.createElement(Lt, { className: "trashIcon" })
      )
    ),
    e
  );
}
function Jf() {
  const { selectedItem: e } = oe();
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(xt, { fill: $("audios"), itemType: "audios" }),
    !e && l.createElement(yt, null, l.createElement(Vf, null)),
    !!e && l.createElement(Mr, null, l.createElement(Uf, null))
  );
}
const Xf = re.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  flex: 1;
  place-items: center;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--zap-background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        outline: 1px solid ${G(0.2, $("funis"))};
      }
      &:focus {
        outline: 1.5px solid ${$("funis")};
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      display: grid;
      place-items: center;
      background: ${G(0.7, P.red)};
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${P.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${G(0.5, "black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;
function Zf({ children: e }) {
  const { selectedFunnel: t, setSelectedFunnel: r } = oe(),
    { updateFunnelName: n, deleteFunnel: a } = et(),
    [o, i] = v.exports.useState(""),
    { isDarkTheme: s } = ye(),
    { triggersIndex: c } = qt(),
    [u, p] = v.exports.useState(!1);
  v.exports.useEffect(() => {
    var g;
    i((g = t == null ? void 0 : t.name) != null ? g : "Default Name");
  }, [t, i]);
  function d() {
    if (!t) return;
    const g = c.reduce(
      (b, h) => (h.funnelId === t.id && b.push(h.name), b),
      []
    );
    if (g.length > 0) {
      W.error(
        l.createElement(
          "div",
          null,
          'O funil "',
          o,
          '" que voc\xEA est\xE1 tentando apagar est\xE1 cadastrado no',
          g.length > 1 && "s",
          " seguinte",
          g.length > 1 && "s",
          " gatilho",
          g.length > 1 && "s",
          " : ",
          l.createElement("br", null),
          l.createElement("br", null),
          l.createElement(
            "ul",
            null,
            g.map((b, h) => l.createElement("li", { key: h }, b))
          ),
          l.createElement("br", null),
          "Remova ele desse",
          g.length > 1 && "s",
          " antes de apagar"
        )
      );
      return;
    }
    f();
  }
  function f() {
    p(!0);
  }
  function m() {
    p(!1);
  }
  return l.createElement(
    Xf,
    null,
    l.createElement(tt, {
      details: {
        title: `Tem certeza que deseja deletar o funil "${o}"?`,
        description:
          "Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o funil",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: s ? P.gray3 : P.gray4,
        fillOk: P.red,
      },
      onRequestOk: async () => t && a(t.id),
      isOpen: u,
      onRequestClose: m,
    }),
    l.createElement(
      "section",
      { id: "inputAndDelete" },
      l.createElement("input", {
        type: "text",
        value: o,
        className: t == null ? void 0 : t.type,
        onChange: (g) => {
          i(g.target.value);
        },
        onBlur: () => {
          !o && (t == null ? void 0 : t.name) && i(t.name),
            o &&
              t &&
              o !== (t == null ? void 0 : t.name) &&
              (r({ ...t, name: o }), n({ id: t.id, name: o }));
        },
      }),
      l.createElement(
        "button",
        { type: "button", id: "deleteFunnelBtn", onClick: d },
        l.createElement(Lt, { className: "trashIcon" })
      )
    ),
    e
  );
}
const Qf = "/assets/homePageFunnels.svg";
function _f() {
  return l.createElement(
    l.Fragment,
    null,
    l.createElement("img", {
      src: Qf,
      alt: "Central de Funis",
      className: "homeImg",
    }),
    l.createElement(
      "span",
      null,
      "Selecione um funil para editar na aba ao lado ou clique em \u201CNovo Funil\u201D para adicionar um novo funil para o ZapVoice"
    )
  );
}
const em = no`

  to{
    max-height: 10rem;
    overflow:visible;
  }
`,
  tm = re.div`
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  background: ${({ fill: e }) => e && rl(0.5, G(0.5, e))};
  transition: filter 0.2s;
  .iconsAndName {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    .leftDots {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      cursor: grab;
      fill: var(--text-title);
    }
    .typeIcon {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 1rem;
      fill: ${({ fill: e }) => e};
      stroke: black;
      stroke-width: 0.25rem;
      filter: ${`drop-shadow(0px 0px 3px ${G(0.8, "black")})`};
    }
    h2 {
      width: 100%;
    }
  }

  .delayAndActions {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0.5rem;
    .delay {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0 1rem;
      .delayIcon {
        fill: var(--text-title);
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
      }
      span {
        color: var(--text-title);
        font-weight: 500;
      }
    }
    button.actionFunnelContainer {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      border: none;
      border-radius: 0.25rem;
      box-shadow: 0px 0px 10px -5px black;
      &.changeItem {
        background: ${G(0.7, P.gold)};
        .changeItemBtn {
          width: 60%;
          height: 60%;
          fill: var(--gold);
          filter: drop-shadow(0px 0px 2px black);
        }
      }
      &.deleteItem {
        background: ${G(0.7, P.red)};
        .deleteItemBtn {
          width: 60%;
          height: 60%;
          fill: var(--red);
          filter: drop-shadow(0px 0px 2px black);
        }
      }
      &.showItem {
        background: ${({ fill: e }) => e && G(0.8, e)};

        .showItemBtn {
          width: 60%;
          height: 60%;
          fill: ${({ fill: e }) => e && nl(0.3, e)};
          filter: drop-shadow(0px 0px 2px black);
          transition: transform 0.3s;
          transform: ${({ isOpen: e }) =>
            e ? "rotate(-180deg)" : "rotate(0)"};
        }
      }
    }
  }
`,
  rm = re.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ fill: e }) => e && G(0.85, e)};
  width: 98%;
  height: 10rem;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  max-height: 0rem;
  overflow: hidden;

  ${({ isOpen: e }) =>
    e &&
    Le`
      animation: ${em} 0.3s ease-in forwards;
    `}

  margin: 0 auto;
  margin-top: -0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: ${({ isOpen: e }) => (e ? "1rem" : "0")};

  img,
  video {
    z-index: 1;
    display: block;
    position: absolute;
    height: 100%;
    width: auto;
    transition: transform 0.5s;
    &:hover {
      transform: scale(2);
    }
  }
  div.itemPreviewDocument {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    font-size: 1.25rem;

    .itemPreviewIcon {
      width: 3rem;
      height: 3rem;
    }
  }

  textarea {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    opacity: 1;
    cursor: auto;
  }
`;
function nm({
  item: e,
  showAndHideItem: t,
  openEditModal: r,
  deleteItemFromFunnel: n,
}) {
  const { isDarkTheme: a } = ye(),
    [o, i] = v.exports.useState(!1),
    s = Ae(e.type),
    c = Math.floor(e.delay / 1e3 / 60),
    u = (e.delay / 1e3) % 60;
  function p() {
    i(!0);
  }
  function d() {
    i(!1);
  }
  function f() {
    p();
  }
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(
      tm,
      { fill: $(e.type), isOpen: e.isOpen },
      l.createElement(tt, {
        details: {
          title: `Tem certeza que deseja remover o item "${e.name}" desse funil?`,
          description:
            "Caso deseje inserir outro em seu lugar ou apenas alterar o delay, basta utilizar a op\xE7\xE3o de editar!",
          okTitle: "Sim, remover!",
          cancelTitle: "Cancelar",
          fillCancel: a ? P.gray3 : P.gray4,
          fillOk: P.red,
        },
        onRequestOk: n,
        isOpen: o,
        onRequestClose: d,
      }),
      l.createElement(
        "div",
        { className: "iconsAndName" },
        l.createElement(io, { className: "leftDots" }),
        l.createElement(s, { className: "typeIcon" }),
        l.createElement("h2", null, e.name)
      ),
      l.createElement(
        "div",
        { className: "delayAndActions" },
        e.delay > 0 &&
          l.createElement(
            "div",
            { className: "delay" },
            l.createElement("span", null, c > 0 && `${c}m `, u, "s"),
            l.createElement(al, { className: "delayIcon" })
          ),
        l.createElement(
          "button",
          {
            type: "button",
            className: "actionFunnelContainer changeItem",
            onClick: r,
          },
          l.createElement(ao, { className: "changeItemBtn" })
        ),
        l.createElement(
          "button",
          {
            type: "button",
            className: "actionFunnelContainer deleteItem",
            onClick: f,
          },
          l.createElement(Lt, { className: "deleteItemBtn" })
        ),
        l.createElement(
          "button",
          {
            type: "button",
            className: "actionFunnelContainer showItem",
            onClick: t,
          },
          l.createElement(ol, { className: "showItemBtn" })
        )
      )
    ),
    e.data &&
      l.createElement(
        rm,
        { isOpen: e.isOpen, fill: $(e.type) },
        e.type !== "mensagens"
          ? l.createElement(En, { base64: e.data })
          : l.createElement("textarea", {
              defaultValue: e.data,
              id: "msgPreview",
              disabled: !0,
            })
      )
  );
}
const am = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h1 {
    align-self: flex-start;
    font-size: 2rem;
  }
  label {
    align-self: flex-start;
    font-size: 1.15rem;
    margin-top: 1rem;
    margin-bottom: 0.25rem;
  }
  label.delayLabel {
    margin-top: 0.25rem;
    align-self: center;
  }
  #typesContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .optionType {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      .imageContainer {
        margin: 0 auto;
      }
    }
  }
  .selectItemFunnel {
    width: 100%;
  }

  #delayContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .delayItemContainer {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      input[type="number"] {
        width: 100%;
        padding: 0.5rem 0;
        text-align: center;
        background: var(--shape);
        border: 1px solid var(--gray1);
        border-radius: 0.25rem;
        font-size: 1rem;
        outline: none;
        &:hover {
          border: 1px solid var(--blue);
          box-shadow: 0px 0px 1px var(--blue);
        }
        &:focus {
          border: 2px solid var(--blue);
          box-shadow: 0px 0px 1px var(--blue);
        }
        &:invalid {
          border: 2px solid var(--red);
          box-shadow: 0px 0px 1px var(--red);
        }
      }
    }
    span.separator {
      font-size: 1.5rem;
      font-weight: 700;
      transform: translateY(0.5rem);
    }
  }
  button#addItemFunnelBtn {
    margin-top: 1rem;
    background: ${G(0.5, P.blue)};
    color: var(--text-title);
    font-size: 1.15rem;
    font-weight: 700;
    padding: 0.75rem 3rem;
    border: none;
    border-radius: 0.25rem;
  }
`;
function om({
  isOpen: e,
  onRequestClose: t,
  editConfig: { itemToEdit: r, setItemToEdit: n },
}) {
  const [a, o] = v.exports.useState("mensagens"),
    [i, s] = v.exports.useState(),
    [c, u] = v.exports.useState(),
    [p, d] = v.exports.useState(),
    { mensagensIndex: f } = $t(),
    { audiosIndex: m } = Gt(),
    { mediasIndex: g } = zt(),
    { docsIndex: b } = jt(),
    { addItemForFunnel: h, editItemFromFunnel: x } = et(),
    { getItemFromStorage: y, getNameFromIndex: w } = oe(),
    E = { mensagens: f, audios: m, medias: g, docs: b };
  v.exports.useEffect(() => {
    a === "audios" &&
      !!(c != null && c.value) &&
      y(c == null ? void 0 : c.value).then(async (A) => {
        if (!A || A.type !== "audios" || !A.data) return;
        const H = await il(A.data);
        H && H > 0 && (T(Math.floor(H / 60)), R(Math.floor(H % 60)));
      });
  }, [c]);
  const [C, I] = v.exports.useState(!1),
    [F, R] = v.exports.useState(5),
    [L, T] = v.exports.useState(0),
    [M, j] = v.exports.useState(0);
  v.exports.useEffect(() => {
    async function A(H) {
      s([]),
        H && u(void 0),
        I(!0),
        s(E[a].map((S) => ({ label: S.name || `${a}-${S.id}`, value: S.id }))),
        I(!1);
    }
    A(
      !r ||
        (!!p && p.type !== a) ||
        (!!p && p.type === a && p.id !== (c == null ? void 0 : c.value))
    );
  }, [a]),
    v.exports.useEffect(() => {
      j(L * 60 + F);
    }, [L, F]),
    v.exports.useEffect(() => {
      if (!r) {
        d(void 0);
        return;
      }
      y(r.id).then((A) => {
        var Y;
        const H = (Y = w(A.id, A.type)) != null ? Y : "";
        o(A.type), u({ label: H, value: A.id }), d(A);
        const S = Math.floor(r.delay / 1e3 / 60),
          K = (r.delay / 1e3) % 60;
        T(S), R(K);
      });
    }, [r]);
  async function z() {
    if (!(c != null && c.value) || Number.isNaN(M) || !r) return;
    const A = c.value;
    await W.promise(
      x({
        beforeId: r.id,
        possibleId: r.possibleId,
        possibleIndex: r.possibleIndex,
        item: { itemId: A, delayInSeconds: M },
      }),
      {
        pending: "Salvando altera\xE7\xF5es, aguarde...",
        success: "Item editado com sucesso",
        error: "Algo deu errado ao tentar editar seu item",
      }
    ),
      t(),
      u(void 0),
      T(0),
      R(5),
      n && n(void 0);
  }
  async function B() {
    if (!(c != null && c.value) || Number.isNaN(M)) return;
    const A = c.value;
    await W.promise(h({ itemId: A, delayInSeconds: M }), {
      pending: "Inserindo item, aguarde...",
      success: "Item inserido com sucesso",
      error: "Algo deu errado ao tentar inserir seu item",
    }),
      t(),
      u(void 0),
      T(0),
      R(5),
      n && n(void 0);
  }
  return l.createElement(
    Ir,
    {
      closeTimeoutMS: 400,
      isOpen: e,
      onRequestClose: () => {
        t(), u(void 0), T(0), R(5), n && n(void 0);
      },
      overlayClassName: "react-modal-overlay",
      className: "react-modal-content",
    },
    l.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          t(), u(void 0), T(0), R(5), n && n(void 0);
        },
        className: "react-modal-close",
      },
      l.createElement(yn, { fill: P.red })
    ),
    l.createElement(
      am,
      null,
      l.createElement(
        "h1",
        null,
        p && l.createElement(ao, null),
        p ? " Editando o item" : "Adicionar Novo Item"
      ),
      l.createElement("label", { htmlFor: "typesContainer" }, "Tipo:"),
      l.createElement(
        "div",
        { id: "typesContainer" },
        l.createElement(rr, {
          className: "optionType optionMensagens",
          name: "Mensagens",
          fill: $("mensagens"),
          isActive: a === "mensagens",
          Icon: Ae("mensagens"),
          onClick: () => o("mensagens"),
        }),
        l.createElement(rr, {
          className: "optionType optionAudios",
          name: "Audios",
          fill: $("audios"),
          isActive: a === "audios",
          Icon: Ae("audios"),
          onClick: () => o("audios"),
        }),
        l.createElement(rr, {
          className: "optionType optionMedias",
          name: "M\xEDdias",
          fill: $("medias"),
          isActive: a === "medias",
          Icon: Ae("medias"),
          onClick: () => o("medias"),
        }),
        l.createElement(rr, {
          className: "optionType optionDocs",
          name: "Documentos",
          fill: $("docs"),
          isActive: a === "docs",
          Icon: Ae("docs"),
          onClick: () => o("docs"),
        })
      ),
      l.createElement("label", { htmlFor: "selectItemFunnel" }, "Item:"),
      l.createElement(yl, {
        props: {
          className: "selectItemFunnel",
          loadedOptions: i,
          isLoading: C,
          setIsLoading: I,
          selectedItemFunnel: c,
          setSelectedItemFunnel: u,
        },
      }),
      l.createElement("label", { htmlFor: "delayContainer" }, "Delay:"),
      l.createElement(
        "div",
        { id: "delayContainer" },
        l.createElement(
          "div",
          { className: "delayItemContainer", id: "delayMinutesContainer" },
          l.createElement(
            "label",
            { className: "delayLabel", htmlFor: "minutesDelay" },
            "Minutos"
          ),
          l.createElement("input", {
            type: "number",
            value: String(L),
            onChange: (A) =>
              T(
                Number(A.target.value) >= 0
                  ? Math.round(Number(A.target.value))
                  : 0
              ),
            id: "minutesDelay",
            min: 0,
          })
        ),
        l.createElement("span", { className: "separator" }, ":"),
        l.createElement(
          "div",
          { className: "delayItemContainer", id: "delaySecondsContainer" },
          l.createElement(
            "label",
            { className: "delayLabel", htmlFor: "secondsDelay" },
            "Segundos"
          ),
          l.createElement("input", {
            type: "number",
            value: String(F),
            onChange: (A) =>
              R(
                Number(A.target.value) >= 0
                  ? Math.round(Number(A.target.value))
                  : 0
              ),
            id: "secondsDelay",
            min: 0,
          })
        )
      ),
      l.createElement(
        "button",
        {
          type: "submit",
          id: "addItemFunnelBtn",
          disabled: !c,
          onClick: p ? z : B,
        },
        p ? "Salvar Altera\xE7\xF5es" : "Adicionar"
      )
    )
  );
}
const im = re.div`
  position: relative;
  div#headerAndAddBtn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    h2 {
      font-size: 1rem;
      font-weight: 500;
      strong {
        font-weight: 900;
        color: var(--yellow);
      }
    }
  }
  .btnAddItem {
    border: none;
    border-radius: 0.25rem;
    background: var(--veryperi);
    font-weight: 700;
    padding: 0.5rem 2rem;
    color: white;
  }
  div#funnelWrapper {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
    display: inline-block;
    padding-bottom: 4.5rem;
    padding-right: 0.25rem;
  }
  div#noItemYet {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      width: 50%;
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
  }
`;
function lm() {
  const {
      selectedFunnel: e,
      getNameFromIndex: t,
      getItemFromStorage: r,
    } = oe(),
    {
      removeItemFromFunnel: n,
      changeFunnelItemPosition: a,
      duplicateFunnel: o,
      fixAllFunnels: i,
    } = et(),
    [s, c] = v.exports.useState([]),
    [u, p] = v.exports.useState(0),
    [d, f] = v.exports.useState(!1),
    [m, g] = v.exports.useState(!1),
    [b, h] = v.exports.useState(),
    { isDarkTheme: x } = ye();
  v.exports.useEffect(() => {
    e != null && e.data
      ? (e.data.find((j) => j.id === void 0) && i(),
        c(
          e.data
            .filter((j) => j.id)
            .map((j) => {
              const z = Ze(),
                B = t(j.id, j.type);
              return { ...j, ...(B && { name: B }), indexId: z, isOpen: !1 };
            })
        ))
      : c([]);
  }, [e]),
    v.exports.useEffect(() => {
      if (!s) return;
      const j = s.reduce((z, B) => z + B.delay, 0);
      p(j);
    }, [s]);
  async function y(j) {
    const z = await Promise.all(
      s.map(async (B) => {
        if (B.indexId === j) {
          if (B.data) return { ...B, isOpen: !B.isOpen };
          const A = await r(B.id);
          return { ...B, data: A.data, isOpen: !0 };
        }
        return B;
      })
    );
    c(z);
  }
  async function w({ indexId: j, id: z }) {
    if (!e) return;
    const B = s.reduce(
      (A, H, S) =>
        H.indexId !== j ? A : { ...A, idFound: H.id, indexFound: S },
      {}
    );
    n({ id: z, possibleIndex: B.indexFound, possibleId: String(B.idFound) });
  }
  async function E({ indexId: j, id: z, delay: B }) {
    if (!e) return;
    const { idFound: A, indexFound: H } = s.reduce(
      (S, K, Y) => (
        K.indexId === j && ((S.idFound = K.id), (S.indexFound = Y)), S
      ),
      {}
    );
    f(!0), h({ id: z, possibleId: A, possibleIndex: H, delay: B });
  }
  function C() {
    f(!0);
  }
  function I() {
    f(!1);
  }
  function F() {
    g(!0);
  }
  function R() {
    g(!1);
  }
  function L(j) {
    const { source: z, destination: B } = j;
    !B || z.index === B.index || a(z.index, B.index);
  }
  const T = Math.floor(u / 1e3 / 60),
    M = Math.floor((u / 1e3) % 60);
  return l.createElement(
    im,
    { id: "mainContent" },
    l.createElement(om, {
      isOpen: d,
      onRequestClose: I,
      editConfig: { itemToEdit: b, setItemToEdit: h },
    }),
    l.createElement(tt, {
      details: {
        title: `Gostaria realmente de duplicar o funil "${
          e == null ? void 0 : e.name
        }"?`,
        description:
          "Ele ser\xE1 criado com os MESMOS ITENS do funil original e com o nome + 'copia' . Ap\xF3s a confirma\xE7\xE3o, o novo funil ser\xE1 aberto automaticamente.",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: x ? P.gray3 : P.gray4,
        fillOk: P.green,
      },
      onRequestOk: async () => {
        e && (await o(e.id)), R();
      },
      isOpen: m,
      onRequestClose: R,
    }),
    (e == null ? void 0 : e.data) && (s == null ? void 0 : s.length) > 0
      ? l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { id: "headerAndAddBtn" },
            l.createElement(
              "h2",
              null,
              "Itens adicionados:",
              l.createElement("strong", null, " ", s.length, " "),
              "Tempo total:",
              l.createElement(
                "strong",
                null,
                " ",
                T > 0 && `${T} min e `,
                " ",
                M,
                " ",
                "segs"
              )
            ),
            l.createElement(
              "button",
              {
                className:
                  "bg-zap-yellow text-white py-2 px-6 rounded text-md font-bold",
                onClick: () => {
                  F();
                },
              },
              "Duplicar Funil"
            ),
            l.createElement(
              "button",
              { type: "button", className: "btnAddItem", onClick: C },
              "+ Adicionar Item"
            )
          ),
          l.createElement(
            xi,
            { onDragEnd: L },
            l.createElement(Jn, { droppableId: "funnelItemsDroppable" }, (j) =>
              l.createElement(
                "div",
                { id: "funnelWrapper", ...j.droppableProps, ref: j.innerRef },
                s.map((z, B) =>
                  l.createElement(
                    Ci,
                    { key: z.indexId, draggableId: z.indexId, index: B },
                    (A) =>
                      l.createElement(
                        "div",
                        {
                          className: "itemDraggableFunnelListContainer",
                          ref: A.innerRef,
                          ...A.draggableProps,
                          ...A.dragHandleProps,
                          style: A.draggableProps.style,
                        },
                        l.createElement(nm, {
                          item: z,
                          showAndHideItem: () => y(z.indexId),
                          deleteItemFromFunnel: () =>
                            w({ indexId: z.indexId, id: z.id }),
                          openEditModal: () =>
                            E({ indexId: z.indexId, id: z.id, delay: z.delay }),
                        })
                      )
                  )
                ),
                j.placeholder
              )
            )
          )
        )
      : l.createElement(
          "div",
          { id: "noItemYet" },
          l.createElement(
            "span",
            null,
            "Voc\xEA ainda n\xE3o possui nenhum item adicionado neste funil. Caso queira adicionar um item, clique no bot\xE3o abaixo"
          ),
          l.createElement(
            "button",
            { type: "button", className: "btnAddItem", onClick: C },
            "+ Adicionar Primeiro Item"
          )
        )
  );
}
function sm() {
  const { selectedFunnel: e } = oe();
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(xt, { fill: $("funis"), itemType: "funis" }),
    !e && l.createElement(yt, null, l.createElement(_f, null)),
    !!e && l.createElement(Zf, null, l.createElement(lm, null))
  );
}
const cm = "/assets/imgLogin.png",
  um = no`
  from {
    border-color: var(--blue);
  }

  to {
    border-color: var(--purple);
  }
`,
  dm = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  #containerSwitchDarkMode {
    filter: opacity(0.5);
    transition: filter 0.2s;
    &:hover {
      filter: opacity(1);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    span {
      font-weight: 700;
    }
  }
  #loginFrame {
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
    height: 90%;
    max-width: 1200px;
    max-height: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--shape);
    @media (max-width: 600px) {
      max-height: 100%;
    }
    main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 2rem;
      h2 {
        font-size: 2rem;
        font-weight: 900;
        margin: 2.5rem 0;
        color: var(--text-title);
      }
      span {
        font-size: 1rem;
        color: var(--text-subtitle);

        margin: 0.5rem 0;
      }

      label#labelChave {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.5rem 0;
        border: 0;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        position: relative;
        input {
          width: 100%;
          height: 3rem;
          font-size: 1rem;
          font-weight: 500;
          margin: 0.5rem 0;
          padding: 0 1.5rem;
          border: 0;
          border-radius: 0.25rem;
          border: 1px solid var(--text-subtitle);
          color: var(--text-subtitle);
          background: var(--shape);

          animation: ${um} 1s alternate infinite;
          &:focus {
            border-color: var(--purple);
            outline: 1px solid var(--purple);
            & + span {
              top: -1rem;
              background: var(--shape);
              font-size: 95%;
            }
          }
          &:valid {
            border-color: var(--purple);
            outline: 1px solid var(--purple);
            & + span {
              top: -1rem;
              background: var(--shape);
              font-size: 95%;
            }
          }
        }
        span {
          position: absolute;
          top: 0.5rem;
          left: 1.5rem;
          font-size: 1rem;
          transition: 0.3s;
          padding: 0 0.5rem;
        }
      }
      button {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.5rem 0;
        border: 0;
        border-radius: 0.25rem;

        &#entrarBtn {
          background: var(--triple-gradient);
          background-size: 250%;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          transition: background-position-x 1s;
          &:hover {
            background-position-x: 100%;
          }
        }
        &#freeUserBtn {
          background: transparent;
          border: 1px solid var(--blue);
          color: var(--blue);
        }
      }

      h3 {
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-body);
        text-align: center;
        align-self: center;
      }
    }
    aside {
      width: 100%;
      height: 100%;
      background: url(${cm});
      background-size: cover;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`,
  pm = "/assets/logo-login.png";
function Ri() {
  return l.createElement(
    "div",
    {
      style: {
        marginTop: "0.5rem",
        width: "100%",
        textAlign: "center",
        color: "var(--text-subtitle)",
      },
    },
    "Copyright \xA9 2022 YVFL EMPREENDIMENTOS - Todos os direitos reservados"
  );
}
function fm() {
  const { isDarkTheme: e, setIsDarkTheme: t } = ye(),
    { isPremium: r, loginWithKey: n } = lo(),
    [a, o] = v.exports.useState(""),
    i = El();
  v.exports.useEffect(() => {
    r && i("/dashboard");
  });
  async function s() {
    if (!a) {
      W.error("Digite a chave que foi enviada para o seu email");
      return;
    }
    const { premium: c, data: u } = await W.promise(n(a), {
      pending: "Conectando ao servidor, aguarde...",
      error: "Algo deu errado ao tentar se conectar ao servidor!",
    });
    c
      ? (fe({ chave: a }),
        i("/dashboard"),
        W.success(String(`Seja bem vindo(a) ${u}`)))
      : W.error(String(u));
  }
  return l.createElement(
    dm,
    null,
    l.createElement(
      "div",
      { id: "containerSwitchDarkMode" },
      l.createElement("span", null, " MODO ", e ? "DARK" : "LIGHT"),
      l.createElement(wn, {
        id: "switchDarkMode",
        checked: e,
        onClick: () => t(!e),
      })
    ),
    l.createElement(
      "form",
      {
        id: "loginFrame",
        onSubmit: (c) => {
          c.preventDefault(), s();
        },
      },
      l.createElement(
        "main",
        null,
        l.createElement("img", { src: pm, alt: "ZapVoice" }),
        l.createElement(
          "h2",
          null,
          "Seja bem vindo(a)",
          l.createElement("br", null),
          " ao ZapVoice"
        ),
        l.createElement(
          "span",
          null,
          "Insira a sua chave de ativa\xE7\xE3o \u{1F511} ",
          l.createElement("br", null),
          "que voc\xEA recebeu por email (verifique o spam)"
        ),
        l.createElement(
          "label",
          { id: "labelChave", htmlFor: "chave" },
          l.createElement("input", {
            type: "text",
            id: "chave",
            required: !0,
            value: a,
            onChange: (c) => o(c.target.value),
          }),
          l.createElement("span", null, "Sua chave de ativa\xE7\xE3o")
        ),
        l.createElement(
          "button",
          { id: "entrarBtn", type: "submit" },
          "Entrar"
        ),
        l.createElement(
          "button",
          {
            id: "",
            type: "",
            onClick: () => {
              i("");
            },
          },
          ""
        ),
        l.createElement(
          "h3",
          null,
          ""
        )
      ),
      l.createElement("aside", null)
    ),
    l.createElement(Ri, null)
  );
}
const mm = "/assets/homePageMedias.svg";
function gm() {
  return l.createElement(
    l.Fragment,
    null,
    l.createElement("img", {
      src: mm,
      alt: "Central de M\xEDdias",
      className: "homeImg",
    }),
    l.createElement(
      "span",
      null,
      "Selecione um arquivo para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar um novo arquivo para o ZapVoice"
    )
  );
}
function vm() {
  const { selectedItem: e } = oe(),
    [t, r] = v.exports.useState(""),
    [n, a] = v.exports.useState(""),
    [o, i] = v.exports.useState(!1),
    { updateMediaData: s } = zt();
  v.exports.useEffect(() => {
    var u, p;
    r((u = e == null ? void 0 : e.data) != null ? u : ""),
      a((p = e == null ? void 0 : e.caption) != null ? p : ""),
      i(!1);
  }, [e]);
  async function c(u) {
    if (!u) return;
    const p = await Xn(u);
    r(String(p));
  }
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(
      "div",
      {
        id: "mainContent",
        className: "flex gap-2 items-center justify-center relative",
      },
      l.createElement(
        pt,
        {
          accept: "image/*,video/*",
          multiple: !1,
          onDrop: (u) => {
            c(u[0]);
          },
          onDragOver: () => i(!0),
          onDragLeave: () => i(!1),
          onDropRejected: (u) => {
            i(!1),
              u[0].errors.find((p) => p.code === "file-invalid-type")
                ? W.error("Formato de m\xEDdia n\xE3o aceito")
                : u[0].errors.find((p) => p.code === "file-too-large")
                ? W.error(
                    "M\xEDdia maior que 16Mb (limite colocado pelo whatsapp web)"
                  )
                : W.error(u[0].errors[0].message);
          },
          onDropAccepted: (u) => {
            i(!1), W.success("M\xEDdia carregada");
          },
          maxSize: 16 * 1e3 * 1e3,
        },
        ({ getRootProps: u, getInputProps: p }) =>
          l.createElement(
            "div",
            {
              ...u(),
              style: {
                background: G(0.9, $("medias")),
                border: `2px dashed ${$("medias")}`,
                ...(o && {
                  border: "2px dashed var(--blue)",
                  background: `${G(0.85, P.blue)}`,
                  filter: "brightness(0.8)",
                }),
              },
              className:
                "w-full h-full rounded-lg flex flex-col items-center justify-center",
            },
            l.createElement("input", { ...p() }),
            t && t !== (e == null ? void 0 : e.data)
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("img", {
                    src: Qn,
                    alt: "Clique em Salvar",
                    className: "w-12 h-12 my-4 mx-auto",
                  }),
                  l.createElement(
                    "h2",
                    { className: "text-zap-green" },
                    "Arquivo carregado com sucesso!"
                  ),
                  l.createElement(
                    "span",
                    null,
                    'Clique abaixo em "Salvar" para finalizar.'
                  )
                )
              : l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("img", {
                    src: Zn,
                    alt: "Arraste seu arquivo ou clique aqui",
                  }),
                  l.createElement(
                    "p",
                    { className: "font-bold text-sm" },
                    "Clique aqui ou arraste o novo arquivo a ser salvo"
                  ),
                  l.createElement(
                    "span",
                    { className: "my-4 mx-auto font-medium" },
                    "Formatos aceitos ",
                    l.createElement("br", null),
                    "Fotos: '.jpg' .'png' '.jpeg' '.svg' '.ico' .'webp' '.bmp'",
                    l.createElement("br", null),
                    "V\xEDdeos: '.m4v' '.mp4'"
                  )
                ),
            t &&
              l.createElement(
                "div",
                {
                  id: "preview",
                  className:
                    "relative w-full h-full flex items-center justify-center pb-4",
                },
                l.createElement(En, { base64: t })
              )
          )
      ),
      l.createElement("textarea", {
        className:
          "p-4 w-full h-full my-0 mx-auto outline-none border-0 rounded bg-[var(--zap-background)] hover:ring-1 hover:ring-[var(--green)] hover:opacity-60 focus:ring-1 focus:ring-[var(--green)] focus:opacity-100",
        style: { border: 0 },
        id: "newCaptionPreview",
        placeholder: "(Opcional) Insira uma legenda para a m\xEDdia",
        value: n,
        onChange: (u) => {
          a(u.target.value);
        },
      })
    ),
    l.createElement(Tr, {
      conditionToShow:
        t !== (e == null ? void 0 : e.data) ||
        n !== (e == null ? void 0 : e.caption),
      actionSave: () => {
        e && s({ id: e.id, data: t, caption: n });
      },
    })
  );
}
function bm() {
  const { selectedItem: e } = oe();
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(xt, { fill: $("medias"), itemType: "medias" }),
    !e && l.createElement(yt, null, l.createElement(gm, null)),
    !!e && l.createElement(Mr, null, l.createElement(vm, null))
  );
}
const hm = "/assets/homePageDocs.svg";
function xm() {
  return l.createElement(
    l.Fragment,
    null,
    l.createElement("img", {
      src: hm,
      alt: "Central de Documentos",
      className: "homeImg",
    }),
    l.createElement(
      "span",
      null,
      "Selecione um arquivo para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar um novo documento para o ZapVoice"
    )
  );
}
const ym = re.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${G(0.9, $("docs"))};

    border: 2px dashed ${$("docs")};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${G(0.85, P.green)};
      filter: brightness(0.8);
    }
    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem auto;
    }
    h2 {
      color: ${$("docs")};
    }
    p {
      font-weight: 700;
      font-size: 1.25rem;
    }
    span {
      margin: 1rem auto;
      font-weight: 500;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
  }
  #preview {
    position: relative;
    height: 15rem;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 1rem;
      font-size: 1.25rem;

      .itemPreviewIcon {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
function Em() {
  const { selectedItem: e } = oe(),
    [t, r] = v.exports.useState(""),
    [n, a] = v.exports.useState(""),
    [o, i] = v.exports.useState(!1),
    { updateDocData: s } = jt();
  v.exports.useEffect(() => {
    var u, p;
    r((u = e == null ? void 0 : e.data) != null ? u : ""),
      a((p = e == null ? void 0 : e.fileName) != null ? p : ""),
      i(!1);
  }, [e]);
  async function c(u) {
    if (!u) return;
    const p = await Xn(u);
    r(String(p)), a(u.name);
  }
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(
      ym,
      { id: "mainContent" },
      l.createElement(
        pt,
        {
          multiple: !1,
          onDrop: (u) => {
            c(u[0]);
          },
          onDragOver: () => i(!0),
          onDragLeave: () => i(!1),
          onDropRejected: (u) => {
            i(!1),
              u[0].errors.find((p) => p.code === "file-invalid-type")
                ? W.error("Formato de documento n\xE3o aceito")
                : u[0].errors.find((p) => p.code === "file-too-large")
                ? W.error(
                    "Arquivo maior que 64Mb (limite colocado pelo whatsapp web)"
                  )
                : W.error(u[0].errors[0].message);
          },
          onDropAccepted: (u) => {
            i(!1), W.success("Documento carregado");
          },
          maxSize: 64 * 1e3 * 1e3,
        },
        ({ getRootProps: u, getInputProps: p }) =>
          l.createElement(
            "div",
            { ...u({ className: `dropzone ${o ? "isDragginOn" : ""}` }) },
            l.createElement("input", { ...p() }),
            t && t !== (e == null ? void 0 : e.data)
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("img", { src: Qn, alt: "Clique em Salvar" }),
                  l.createElement("h2", null, "Arquivo carregado com sucesso!"),
                  l.createElement(
                    "span",
                    null,
                    'Clique abaixo em "Salvar" para finalizar.'
                  )
                )
              : l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("img", {
                    src: Zn,
                    alt: "Arraste seu arquivo ou clique aqui",
                  }),
                  l.createElement(
                    "p",
                    null,
                    "Clique aqui ou arraste o novo documento a ser salvo"
                  )
                ),
            t &&
              l.createElement(
                "div",
                { id: "preview" },
                l.createElement(
                  "a",
                  {
                    download: n,
                    href: t,
                    onClick: (d) => {
                      d.stopPropagation();
                    },
                  },
                  l.createElement(ll, { className: "itemPreviewIcon" }),
                  n
                )
              )
          )
      )
    ),
    l.createElement(Tr, {
      conditionToShow: t !== (e == null ? void 0 : e.data),
      actionSave: () => {
        e && s({ id: e.id, data: t, fileName: n });
      },
    })
  );
}
function wm() {
  const { selectedItem: e } = oe();
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(xt, { fill: $("docs"), itemType: "docs" }),
    !e && l.createElement(yt, null, l.createElement(xm, null)),
    !!e && l.createElement(Mr, null, l.createElement(Em, null))
  );
}
const Dm = "/assets/homePageMessages.svg";
function Im() {
  return l.createElement(
    l.Fragment,
    null,
    l.createElement("img", {
      src: Dm,
      alt: "Central de Mensagens",
      className: "homeImg",
    }),
    l.createElement(
      "span",
      null,
      "Selecione uma mensagem para editar na aba ao lado ou clique em \u201CNovo Item\u201D para adicionar uma nova mensagem para o ZapVoice"
    )
  );
}
const Cm = re.div`
  position: relative;
  display: flex;

  #msgPreview {
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    border: 0;
    border-radius: 0.25rem;
    background: var(--zap-background);

    &:hover {
      border: 1px solid ${G(0.5, $("mensagens"))};
      outline: 1px solid
        ${G(0.5, $("mensagens"))};
    }
    &:focus {
      border: 1.2px solid ${$("mensagens")};
      outline: 1.2px solid ${$("mensagens")};
    }
  }
`;
function Sm() {
  const [e, t] = v.exports.useState(""),
    { selectedItem: r } = oe(),
    { updateMessageData: n } = $t();
  return (
    v.exports.useEffect(() => {
      var a;
      t((a = r == null ? void 0 : r.data) != null ? a : "");
    }, [r]),
    l.createElement(
      l.Fragment,
      null,
      l.createElement(
        Cm,
        { id: "mainContent" },
        l.createElement("textarea", {
          id: "msgPreview",
          value: e,
          onChange: (a) => {
            t(a.target.value);
          },
        })
      ),
      l.createElement(Tr, {
        conditionToShow:
          e !== (r == null ? void 0 : r.data) &&
          (!!e || !!(r != null && r.data)),
        actionSave: () => {
          r && n({ id: r.id, data: e });
        },
      })
    )
  );
}
function Am() {
  const { selectedItem: e } = oe();
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(xt, { fill: $("mensagens"), itemType: "mensagens" }),
    !e && l.createElement(yt, null, l.createElement(Im, null)),
    !!e && l.createElement(Mr, null, l.createElement(Sm, null))
  );
}
const Om = re.header`
  height: 3.5rem;
  width: 100%;
  background: var(--header-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  @media (max-width: 1024px) {
    padding: 0 0.25rem;
  }

  img {
    height: 2.5rem;
    width: auto;
    filter: drop-shadow(0px 0px 15px #0000009a);
  }
  h1 {
    font-size: 0.75rem;
    color: #ffffff;
    font-weight: 300;
  }
  #openCentralBackupBtn {
    background: ${G(0.4, P.purple)};
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
  }
  #logoutBtn {
    background: ${G(0.4, P.red)};
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    margin-left: 1rem;
  }
  #containerSwitchDarkMode {
    display: flex;
    align-items: center;
    filter: opacity(0.5);
    transition: filter 0.2s;
    &:hover {
      filter: opacity(1);
    }
    span {
      font-weight: 700;
      color: white;
    }
  }
`;
function Pm({
  handleOpenCentralBackupModal: e,
  handleOpenWebhookConfigModal: t,
}) {
  const { isDarkTheme: r, setIsDarkTheme: n } = ye(),
    { outgoingWebhook: a } = so(),
    [o, i] = v.exports.useState(!1);
  function s() {
    i(!0);
  }
  function c() {
    i(!1);
  }
  return l.createElement(
    Om,
    null,
    l.createElement("img", { src: r ? wl : Dl, alt: "ZapVoice" }),
    l.createElement(
      "div",
      { id: "containerSwitchDarkMode" },
      l.createElement("span", null, " MODO ", r ? "DARK" : "LIGHT"),
      l.createElement(wn, {
        id: "switchDarkMode",
        checked: r,
        onClick: () => n(!r),
      })
    ),
    l.createElement(
      "div",
      { className: "flex items-center justify-end gap-2" },
      a &&
        l.createElement(
          "button",
          { type: "button", onClick: () => t() },
          l.createElement(Fl, { size: 24 })
        ),
      l.createElement(
        "button",
        { type: "button", id: "openCentralBackupBtn", onClick: e },
        "Central de Backups"
      ),
      l.createElement(
        "button",
        { type: "button", id: "logoutBtn", onClick: s },
        "Deslogar"
      )
    ),
    l.createElement(tt, {
      details: {
        title: "Tem certeza que deseja deslogar?",
        description:
          "Sua chave ser\xE1 removida, mas seus itens e configura\xE7\xF5es permanecer\xE3o NESSE COMPUTADOR. Caso precise transferir, fa\xE7a um backup antes.",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: r ? P.gray3 : P.gray4,
        fillOk: P.red,
      },
      onRequestOk: async () => {
        Qe("chave"), window.location.reload();
      },
      isOpen: o,
      onRequestClose: c,
    })
  );
}
const Bm = re.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 3.5rem 1fr 2rem;
`,
  Nm = re.div`
  padding: ${({ isMobile: e }) => (e ? "1rem" : "1rem 5rem")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.25rem;
    font-weight: 900;
  }
  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  main#mainDashboardLayout {
    height: 100%;
    width: 100%;
    ${({ isMobile: e }) =>
      e
        ? Le`
            display: flex;
            flex-direction: column;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          `
        : Le`
            display: grid;
            grid-template-columns: 11rem 1fr;
            grid-template-rows: 2rem 1fr;
            grid-template-areas:
              ". btn"
              "links content";
          `};

    #addNewItemBtn {
      grid-area: btn;
      width: ${({ isMobile: e }) => (e ? "100%" : "10rem")};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--triple-gradient);
      background-size: 250%;
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({ isMobile: e }) => (e ? "none" : "translateY(-1rem);")};
      transition: background-position-x 1s;
      &:hover {
        background-position-x: 100%;
      }
    }
    #addNewFunnelBtn {
      grid-area: btn;
      width: ${({ isMobile: e }) => (e ? "100%" : "10rem")};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--yellow);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({ isMobile: e }) => (e ? "none" : "translateY(-1rem);")};
    }
    #addNewTriggerBtn {
      grid-area: btn;
      width: ${({ isMobile: e }) => (e ? "100%" : "10rem")};
      height: 2.5rem;
      justify-self: flex-end;
      background: var(--orange);
      border: none;
      border-radius: 0.25rem;
      color: white;
      font-weight: 700;
      transform: ${({ isMobile: e }) => (e ? "none" : "translateY(-1rem);")};
    }
    #linksSection {
      ${({ isMobile: e }) =>
        e
          ? Le`
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            `
          : Le`
              grid-area: links;
            `};
      div#linksSectionContainer {
        ${({ isMobile: e }) =>
          e
            ? Le`
                display: flex;
                align-items: center;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                white-space: nowrap;
              `
            : Le`
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: space-evenly;
                height: 100%;
              `};

        a {
          flex: 1;
          text-decoration: none;
          display: inline-block;
          & + a {
            margin-top: ${({ isMobile: e }) => (e ? "0" : "0.5rem")};
            margin-left: ${({ isMobile: e }) => (e ? "0.5rem" : "0")};
          }
        }
      }
    }
    #panelContent {
      grid-area: content;
      background: var(--shape);
      display: flex;
      border-radius: 0.5rem;
      overflow: hidden;
      resize: both;
      ${({ isMobile: e }) =>
        e
          ? Le`
              width: 100%;
              flex: 0.9;
            `
          : Le`
              margin-left: 1rem;
              height: 65vh;
              min-height: 65vh;
            `};
    }
  }
`,
  Fm = re.div`
  border: none;
  width: 11.25rem;
  height: 100%;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.25rem;
  background: ${({ isActive: e, fill: t }) =>
    e && !!t ? G(0.8, t) : G(0.7, P.gray3)};

  transition: filter 0.2s;
  box-shadow: 0px 0px 20px -10px ${({ fill: e }) => e && G(0.1, e)};
  &:hover {
    filter: brightness(0.9);
    background: ${({ fill: e }) => e && G(0.8, e)};
  }

  .imageContainer {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({ isActive: e, fill: t }) =>
      e && !!t ? G(0.8, t) : G(0.7, P.gray4)};

    box-shadow: 0px 0px 10px -5px #0000005d;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    margin-right: 0.75rem;
    display: relative;
    .insideIcon {
      height: 1.5rem;
    }
  }
  span {
    color: var(--text-title);
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem;
    text-shadow: 0px 0px 5px #0000005d;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ isActive: e, fill: t }) => (e && !!t ? t : "var(--text-title)")};
  }
`;
function st({ name: e, Icon: t, fill: r, isActive: n }) {
  return l.createElement(
    Fm,
    { fill: r, isActive: !!n },
    l.createElement(
      "div",
      { className: "imageContainer" },
      l.createElement(t, { className: "insideIcon" })
    ),
    l.createElement("span", null, e)
  );
}
const bn = v.exports.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  return v.exports.Children.toArray(r).some(_a)
    ? v.exports.createElement(
        v.exports.Fragment,
        null,
        v.exports.Children.map(r, (a) =>
          _a(a)
            ? v.exports.createElement(
                hn,
                N({}, n, { ref: t }),
                a.props.children
              )
            : a
        )
      )
    : v.exports.createElement(hn, N({}, n, { ref: t }), r);
});
bn.displayName = "Slot";
const hn = v.exports.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  return v.exports.isValidElement(r)
    ? v.exports.cloneElement(r, { ...km(n, r.props), ref: Rl(t, r.ref) })
    : v.exports.Children.count(r) > 1
    ? v.exports.Children.only(null)
    : null;
});
hn.displayName = "SlotClone";
const Rm = ({ children: e }) =>
  v.exports.createElement(v.exports.Fragment, null, e);
function _a(e) {
  return v.exports.isValidElement(e) && e.type === Rm;
}
function km(e, t) {
  const r = { ...t };
  for (const n in t) {
    const a = e[n],
      o = t[n];
    /^on[A-Z]/.test(n)
      ? (r[n] = (...i) => {
          o == null || o(...i), a == null || a(...i);
        })
      : n === "style"
      ? (r[n] = { ...a, ...o })
      : n === "className" && (r[n] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Tm(e) {
  const t = e + "CollectionProvider",
    [r, n] = Dn(t),
    [a, o] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (f) => {
      const { scope: m, children: g } = f,
        b = l.useRef(null),
        h = l.useRef(new Map()).current;
      return l.createElement(a, { scope: m, itemMap: h, collectionRef: b }, g);
    },
    s = e + "CollectionSlot",
    c = l.forwardRef((f, m) => {
      const { scope: g, children: b } = f,
        h = o(s, g),
        x = on(m, h.collectionRef);
      return l.createElement(bn, { ref: x }, b);
    }),
    u = e + "CollectionItemSlot",
    p = "data-radix-collection-item";
  return [
    {
      Provider: i,
      Slot: c,
      ItemSlot: l.forwardRef((f, m) => {
        const { scope: g, children: b, ...h } = f,
          x = l.useRef(null),
          y = on(m, x),
          w = o(u, g);
        return (
          l.useEffect(
            () => (
              w.itemMap.set(x, { ref: x, ...h }),
              () => {
                w.itemMap.delete(x);
              }
            )
          ),
          l.createElement(bn, { [p]: "", ref: y }, b)
        );
      }),
    },
    function (f) {
      const m = o(e + "CollectionConsumer", f);
      return l.useCallback(() => {
        const g = m.collectionRef.current;
        if (!g) return [];
        const b = Array.from(g.querySelectorAll(`[${p}]`));
        return Array.from(m.itemMap.values()).sort(
          (h, x) => b.indexOf(h.ref.current) - b.indexOf(x.ref.current)
        );
      }, [m.collectionRef, m.itemMap]);
    },
    n,
  ];
}
const Mm = { bubbles: !1, cancelable: !0 },
  [xn, ki, Lm] = Tm("RovingFocusGroup"),
  [$m, Ti] = Dn("RovingFocusGroup", [Lm]),
  [Gm, zm] = $m("RovingFocusGroup"),
  jm = v.exports.forwardRef((e, t) =>
    v.exports.createElement(
      xn.Provider,
      { scope: e.__scopeRovingFocusGroup },
      v.exports.createElement(
        xn.Slot,
        { scope: e.__scopeRovingFocusGroup },
        v.exports.createElement(qm, N({}, e, { ref: t }))
      )
    )
  ),
  qm = v.exports.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: r,
        orientation: n,
        dir: a = "ltr",
        loop: o = !1,
        currentTabStopId: i,
        defaultCurrentTabStopId: s,
        onCurrentTabStopIdChange: c,
        onEntryFocus: u,
        ...p
      } = e,
      d = v.exports.useRef(null),
      f = on(t, d),
      [m = null, g] = co({ prop: i, defaultProp: s, onChange: c }),
      [b, h] = v.exports.useState(!1),
      x = kl(u),
      y = ki(r),
      w = v.exports.useRef(!1);
    return (
      v.exports.useEffect(() => {
        const E = d.current;
        if (E)
          return (
            E.addEventListener("rovingFocusGroup.onEntryFocus", x),
            () => E.removeEventListener("rovingFocusGroup.onEntryFocus", x)
          );
      }, [x]),
      v.exports.createElement(
        Gm,
        {
          scope: r,
          orientation: n,
          dir: a,
          loop: o,
          currentTabStopId: m,
          onItemFocus: v.exports.useCallback((E) => g(E), [g]),
          onItemShiftTab: v.exports.useCallback(() => h(!0), []),
        },
        v.exports.createElement(
          gt.div,
          N({ tabIndex: b ? -1 : 0, "data-orientation": n }, p, {
            ref: f,
            style: { outline: "none", ...e.style },
            onMouseDown: $e(e.onMouseDown, () => {
              w.current = !0;
            }),
            onFocus: $e(e.onFocus, (E) => {
              const C = !w.current;
              if (E.target === E.currentTarget && C && !b) {
                const I = new Event("rovingFocusGroup.onEntryFocus", Mm);
                if ((E.currentTarget.dispatchEvent(I), !I.defaultPrevented)) {
                  const F = y().filter((R) => R.focusable);
                  Mi(
                    [F.find((R) => R.active), F.find((R) => R.id === m), ...F]
                      .filter(Boolean)
                      .map((R) => R.ref.current)
                  );
                }
              }
              w.current = !1;
            }),
            onBlur: $e(e.onBlur, () => h(!1)),
          })
        )
      )
    );
  }),
  Wm = v.exports.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: r,
        focusable: n = !0,
        active: a = !1,
        ...o
      } = e,
      i = uo(),
      s = zm("RovingFocusGroupItem", r),
      c = s.currentTabStopId === i,
      u = ki(r);
    return v.exports.createElement(
      xn.ItemSlot,
      { scope: r, id: i, focusable: n, active: a },
      v.exports.createElement(
        gt.span,
        N({ tabIndex: c ? 0 : -1, "data-orientation": s.orientation }, o, {
          ref: t,
          onMouseDown: $e(e.onMouseDown, (p) => {
            n ? s.onItemFocus(i) : p.preventDefault();
          }),
          onFocus: $e(e.onFocus, () => s.onItemFocus(i)),
          onKeyDown: $e(e.onKeyDown, (p) => {
            if (p.key === "Tab" && p.shiftKey) return void s.onItemShiftTab();
            if (p.target !== p.currentTarget) return;
            const d = (function (g, b, h) {
              const x = (function (y, w) {
                return w !== "rtl"
                  ? y
                  : y === "ArrowLeft"
                  ? "ArrowRight"
                  : y === "ArrowRight"
                  ? "ArrowLeft"
                  : y;
              })(g.key, h);
              return (b === "vertical" &&
                ["ArrowLeft", "ArrowRight"].includes(x)) ||
                (b === "horizontal" && ["ArrowUp", "ArrowDown"].includes(x))
                ? void 0
                : Um[x];
            })(p, s.orientation, s.dir);
            if (d !== void 0) {
              p.preventDefault();
              let g = u()
                .filter((b) => b.focusable)
                .map((b) => b.ref.current);
              if (d === "last") g.reverse();
              else if (d === "prev" || d === "next") {
                d === "prev" && g.reverse();
                const b = g.indexOf(p.currentTarget);
                g = s.loop
                  ? ((m = b + 1), (f = g).map((h, x) => f[(m + x) % f.length]))
                  : g.slice(b + 1);
              }
              setTimeout(() => Mi(g));
            }
            var f, m;
          }),
        })
      )
    );
  }),
  Um = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
function Mi(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
const Hm = jm,
  Vm = Wm,
  [Km, Mg] = Dn("Tabs", [Ti]),
  Li = Ti(),
  [Ym, _n] = Km("Tabs"),
  Jm = v.exports.forwardRef((e, t) => {
    const {
        __scopeTabs: r,
        value: n,
        onValueChange: a,
        defaultValue: o,
        orientation: i = "horizontal",
        dir: s = "ltr",
        activationMode: c = "automatic",
        ...u
      } = e,
      [p, d] = co({ prop: n, onChange: a, defaultProp: o });
    return v.exports.createElement(
      Ym,
      {
        scope: r,
        baseId: uo(),
        value: p,
        onValueChange: d,
        orientation: i,
        dir: s,
        activationMode: c,
      },
      v.exports.createElement(
        gt.div,
        N({ "data-orientation": i }, u, { ref: t })
      )
    );
  }),
  Xm = v.exports.forwardRef((e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...a } = e,
      o = _n("TabsList", r),
      i = Li(r);
    return v.exports.createElement(
      Hm,
      N({ asChild: !0 }, i, {
        orientation: o.orientation,
        dir: o.dir,
        loop: n,
      }),
      v.exports.createElement(
        gt.div,
        N(
          { role: "tablist", "aria-orientation": o.orientation, dir: o.dir },
          a,
          { ref: t }
        )
      )
    );
  }),
  Zm = v.exports.forwardRef((e, t) => {
    const { __scopeTabs: r, value: n, disabled: a = !1, ...o } = e,
      i = _n("TabsTrigger", r),
      s = Li(r),
      c = $i(i.baseId, n),
      u = Gi(i.baseId, n),
      p = n === i.value;
    return v.exports.createElement(
      Vm,
      N({ asChild: !0 }, s, { focusable: !a, active: p }),
      v.exports.createElement(
        gt.button,
        N(
          {
            type: "button",
            role: "tab",
            "aria-selected": p,
            "aria-controls": u,
            "data-state": p ? "active" : "inactive",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            id: c,
          },
          o,
          {
            ref: t,
            onMouseDown: $e(e.onMouseDown, (d) => {
              a || d.button !== 0 || d.ctrlKey !== !1
                ? d.preventDefault()
                : i.onValueChange(n);
            }),
            onKeyDown: $e(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(n);
            }),
            onFocus: $e(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              p || a || !d || i.onValueChange(n);
            }),
          }
        )
      )
    );
  }),
  Qm = v.exports.forwardRef((e, t) => {
    const { __scopeTabs: r, value: n, children: a, ...o } = e,
      i = _n("TabsContent", r),
      s = $i(i.baseId, n),
      c = Gi(i.baseId, n),
      u = n === i.value;
    return v.exports.createElement(
      gt.div,
      N(
        {
          "data-state": u ? "active" : "inactive",
          "data-orientation": i.orientation,
          role: "tabpanel",
          "aria-labelledby": s,
          hidden: !u,
          id: c,
          tabIndex: 0,
        },
        o,
        { ref: t }
      ),
      u && a
    );
  });
function $i(e, t) {
  return `${e}-trigger-${t}`;
}
function Gi(e, t) {
  return `${e}-content-${t}`;
}
const zi = Jm,
  ji = Xm,
  qi = Zm,
  Wi = Qm,
  _m = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .createNewBackupBtn {
    margin: 2rem;
    border: none;
    font-size: 1rem;
    font-weight: 800;
    border-radius: 0.5rem;
    background: ${G(0.3, P.veryperi)};
  }
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${G(0.8, P.veryperi)};
    font-size: 1rem;
    border: 2px dashed ${P.veryperi};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${G(0.85, P.green)};
      filter: brightness(0.8);
    }
  }
  h1 {
    margin-bottom: 1rem;
  }
`,
  eg = He(zi, {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "15rem",
  }),
  tg = He(ji, {
    flexShrink: 0,
    display: "flex",
    borderBottom: `1px solid ${P.gray1}`,
  }),
  Ot = He(qi, {
    all: "unset",
    backgroundColor: "var(--shape)",
    padding: "0 1rem",
    height: 45,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    lineHeight: 1,
    color: "var(--text-title)",
    userSelect: "none",
    "&:first-child": { borderTopLeftRadius: 6 },
    "&:last-child": { borderTopRightRadius: 6 },
    "&:hover": { color: P.veryperi },
    '&[data-state="active"]': {
      color: P.veryperi,
      boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
    },
    "&:focus": { position: "relative", boxShadow: "0 0 0 2px black" },
  }),
  Pt = He(Wi, {
    flexGrow: 1,
    padding: "1rem",
    position: "relative",
    textAlign: "center",
    backgroundColor: "var(--shape)",
    color: "var(--text-title)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    outline: "none",
    "&:focus": { boxShadow: "0 0 0 2px black" },
    '&[data-state="active"]': {
      display: "grid",
      gridTemplateRows: "1.5rem 1fr",
    },
  });
async function rg(e) {
  return new Promise((t, r) => {
    const n = new FileReader();
    (n.onload = async function (a) {
      var o;
      try {
        const i =
            ((o = a == null ? void 0 : a.target) == null ? void 0 : o.result) &&
            String(a.target.result).length > 0
              ? JSON.parse(String(a.target.result))
              : [],
          s =
            i &&
            (i.mensagensIndex ||
              i.mediasIndex ||
              i.audiosIndex ||
              i.docsIndex) &&
            typeof i.objectsList == "object" &&
            i.objectsList.length > 0,
          c = i && i.mensagens && i.medias && i.audios;
        if (s || c) {
          const u = await _("chave"),
            p = await _("newChatWebhook");
          chrome != null && chrome.storage
            ? chrome.storage.local.clear()
            : localStorage.clear(),
            fe({ chave: u }),
            fe({ newChatWebhook: p });
        }
        s
          ? (fe({
              mensagensIndex: i.mensagensIndex,
              mediasIndex: i.mediasIndex,
              audiosIndex: i.audiosIndex,
              docsIndex: i.docsIndex,
            }),
            i.funis ? fe({ funis: i.funis }) : Qe("funis"),
            i.triggers ? fe({ triggers: i.triggers }) : Qe("triggers"),
            i.objectsList.forEach((u) => {
              !(u != null && u.id) || fe({ [u.id]: u });
            }),
            await _("LocalStorageReady"),
            t(!0))
          : c &&
            (i.funis ? fe({ funis: i.funis }) : Qe("funis"),
            delete i.funis,
            await Promise.all(
              Object.keys(i).map((u) => {
                const p = i[u] && i[u].length > 0 ? JSON.parse(i[u]) : [];
                if (p.length === 0) return;
                const d = p.map((f) => {
                  var g, b, h, x;
                  const m = {
                    name: (g = f.name) != null ? g : "Novo Item",
                    id: (b = f.id) != null ? b : Ze(),
                    type: (h = f.type) != null ? h : u,
                    ...(u === "audios" && {
                      sendAsForwarded: (x = f.sendAsForwarded) != null ? x : !1,
                    }),
                  };
                  return (
                    fe({
                      [m.id]: JSON.stringify({
                        type: m.type,
                        id: m.id,
                        data: f.data,
                        ...(m.sendAsForwarded && {
                          sendAsForwarded: m.sendAsForwarded,
                        }),
                      }),
                    }),
                    m
                  );
                });
                fe({ [`${u}Index`]: JSON.stringify(d) });
              })
            ),
            await _("LocalStorageReady"),
            t(!0));
      } catch (i) {
        W.error(String(i)), r(i);
      }
    }),
      (n.onerror = (a) => r(a)),
      n.readAsText(e);
  });
}
const ng = "/assets/loadingVeryperi.svg";
function ea({ embedId: e, loading: t, props: r, className: n }) {
  return l.createElement(
    "div",
    {
      className: Oe("h-[90%] w-[90%] mx-auto", n),
      style: { background: `url(${ng}) no-repeat center center` },
    },
    !t &&
      l.createElement(
        "a",
        {
          className: "w-full h-full",
          href: `https://www.youtube.com/watch?v=${e}`,
          target: "_blank",
        },
        l.createElement(
          "div",
          { className: "w-full h-full relative" },
          l.createElement("img", {
            className: "w-full h-full object-cover",
            src: `https://i.ytimg.com/vi/${e}/hqdefault.jpg`,
            alt: "Imagem do v\xEDdeo",
          }),
          l.createElement(sl, {
            className:
              "fill-[#FF0000] w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          })
        )
      )
  );
}
async function ag() {
  return new Promise(async (e, t) => {
    var c, u, p, d, f, m;
    const r = (c = await _("audiosIndex")) != null ? c : [],
      n = (u = await _("mensagensIndex")) != null ? u : [],
      a = (p = await _("mediasIndex")) != null ? p : [],
      o = (d = await _("docsIndex")) != null ? d : [],
      i = (f = await _("funis")) != null ? f : [],
      s = (m = await _("triggers")) != null ? m : [];
    if (
      (n && n.length > 0) ||
      (a && a.length > 0) ||
      (o && o.length > 0) ||
      (r && r.length > 0)
    ) {
      const g = [
          ...(await Promise.all(n.map(async (x) => await _(x.id)))),
          ...(await Promise.all(r.map(async (x) => await _(x.id)))),
          ...(await Promise.all(a.map(async (x) => await _(x.id)))),
          ...(await Promise.all(o.map(async (x) => await _(x.id)))),
        ],
        b = new Blob(
          [
            JSON.stringify({
              mensagensIndex: n,
              audiosIndex: r,
              mediasIndex: a,
              docsIndex: o,
              funis: i,
              triggers: s,
              objectsList: g.filter((x) => x),
            }),
          ],
          { type: "application/json" }
        ),
        h = URL.createObjectURL(b);
      e(h);
    } else
      W.error("N\xE3o h\xE1 nada aqui para exportar"),
        t(new Error("N\xE3o h\xE1 nada aqui para exportar"));
  });
}
class og {
  constructor() {
    ne(this, "completedBundlesUrls", []);
    ne(this, "currentBundleSize", 0);
    ne(this, "currentBundleItems", []);
    ne(this, "indexesBlobUrl", "");
    ne(this, "getIndexesAndSaveUrl", async () => {
      var s, c, u, p, d, f;
      const t = (s = await _("audiosIndex")) != null ? s : [],
        r = (c = await _("mensagensIndex")) != null ? c : [],
        n = (u = await _("mediasIndex")) != null ? u : [],
        a = (p = await _("docsIndex")) != null ? p : [],
        o = (d = await _("funis")) != null ? d : [],
        i = (f = await _("triggers")) != null ? f : [];
      return (
        (this.indexesBlobUrl = URL.createObjectURL(
          this.createBlob(
            JSON.stringify({
              audiosIndex: t,
              mensagensIndex: r,
              mediasIndex: n,
              docsIndex: a,
              funnelsIndex: o,
              triggersIndex: i,
            })
          )
        )),
        { audiosIndex: t, mensagensIndex: r, mediasIndex: n, docsIndex: a }
      );
    });
    ne(this, "getItem", async (t, r) => {
      var a;
      const n =
        (a = await _(t)) != null
          ? a
          : {
              id: t,
              type: r,
              data: "",
              ...(r === "audios" && { sendAsForwarded: !1 }),
              ...(r === "medias" && { caption: "" }),
              ...(r === "docs" && { fileName: "" }),
            };
      return {
        size: typeof n == "string" ? n.length : JSON.stringify(n).length,
        itemFromStorage: n,
      };
    });
    ne(this, "processItemToBundle", async (t, r) => {
      const n = await this.getItem(t, r),
        { size: a, itemFromStorage: o } = n;
      (this.currentBundleSize += a),
        this.currentBundleItems.push(o),
        this.currentBundleSize > 1e8 &&
          (this.completedBundlesUrls.push(
            URL.createObjectURL(
              this.createBlob(JSON.stringify(this.currentBundleItems))
            )
          ),
          (this.currentBundleItems = []),
          (this.currentBundleSize = 0));
    });
    ne(this, "generateBundles", async (t) => {
      for (const [r, n] of Object.entries(t))
        for (const a of n) await this.processItemToBundle(a.id, r);
    });
    ne(this, "generateLastBundle", () => {
      this.currentBundleItems.length > 0 &&
        (this.completedBundlesUrls.push(
          URL.createObjectURL(
            this.createBlob(JSON.stringify(this.currentBundleItems))
          )
        ),
        (this.currentBundleItems = []),
        (this.currentBundleSize = 0));
    });
    ne(this, "createBackup", async () => {
      const t = await this.getIndexesAndSaveUrl();
      await this.generateBundles(t), this.generateLastBundle();
      const r = String(
          new Date().toLocaleDateString("pt-BR").replaceAll("/", "-")
        ),
        n = this.completedBundlesUrls.map((a, o) => ({
          url: a,
          name: `backup-split-bundle(${o + 1} of ${
            this.completedBundlesUrls.length
          })-${r}.json`,
        }));
      this.downloadFromLink(
        this.indexesBlobUrl,
        `backup-split-indexes-${r}.json`
      );
      for (const a of n) {
        const { url: o, name: i } = a;
        this.downloadFromLink(o, i);
      }
      return { indexesBlobUrl: this.indexesBlobUrl, completedBundlesUrls: n };
    });
    ne(this, "downloadFromLink", (t, r) => {
      if (!t) {
        console.error("URL inv\xE1lida para download.");
        return;
      }
      const n = document.createElement("a");
      (n.href = t),
        (n.download = r),
        document.body.appendChild(n),
        n.click(),
        document.body.removeChild(n),
        t.startsWith("blob:") && URL.revokeObjectURL(t);
    });
    ne(this, "createBlob", (t) => new Blob([t], { type: "application/json" }));
  }
}
async function Ui(e) {
  return new Promise((t, r) => {
    const n = new FileReader();
    (n.onload = async function (a) {
      var o;
      try {
        const i =
          ((o = a == null ? void 0 : a.target) == null ? void 0 : o.result) &&
          String(a.target.result).length > 0
            ? JSON.parse(String(a.target.result))
            : [];
        t(i);
      } catch (i) {
        r(i);
      }
    }),
      (n.onerror = (a) => r(a)),
      n.readAsText(e);
  });
}
class ig {
  constructor(t, r) {
    ne(this, "pendingItemIds", []);
    ne(this, "bundleItems", []);
    ne(this, "removeFromPending", (t) => {
      this.pendingItemIds = this.pendingItemIds.filter((r) => r !== t);
    });
    ne(this, "idIsPending", (t) => this.pendingItemIds.includes(t));
    ne(this, "saveIndexes", async () => {
      fe({
        mensagensIndex: JSON.stringify(this.indexes.mensagensIndex),
        mediasIndex: JSON.stringify(this.indexes.mediasIndex),
        audiosIndex: JSON.stringify(this.indexes.audiosIndex),
        docsIndex: JSON.stringify(this.indexes.docsIndex),
      }),
        this.indexes.funnelsIndex
          ? fe({ funis: JSON.stringify(this.indexes.funnelsIndex) })
          : Qe("funis"),
        this.indexes.triggersIndex
          ? fe({ triggers: JSON.stringify(this.indexes.triggersIndex) })
          : Qe("triggers");
    });
    ne(this, "saveBundleItems", async () => {
      for (const t of this.bundleItems)
        typeof t == "object" && t.id && fe({ [t.id]: JSON.stringify(t) });
    });
    ne(this, "import", async () => {
      for (const t of this.bundleFiles) {
        const r = await Ui(t.file);
        if (typeof r == "object" && Array.isArray(r))
          for (const n of r)
            typeof n == "object" &&
              n.id &&
              this.idIsPending(n.id) &&
              (this.bundleItems.push(n), this.removeFromPending(n.id));
      }
      if (this.pendingItemIds.length === 0) {
        const t = await _("chave");
        chrome != null && chrome.storage
          ? chrome.storage.local.clear()
          : localStorage.clear(),
          fe({ chave: t }),
          await this.saveBundleItems(),
          await this.saveIndexes(),
          await _("LocalStorageReady");
        return;
      } else
        throw (
          (W.error(
            `Cancelado. Faltam ${this.pendingItemIds.length} itens para importar, verifique se n\xE3o esqueceu nenhum bundle.`
          ),
          new Error(
            `Cancelado. Faltam ${this.pendingItemIds.length} itens para importar, verifique se n\xE3o esqueceu nenhum bundle.`
          ))
        );
    });
    (this.indexes = t),
      (this.bundleFiles = r),
      (this.pendingItemIds = [
        ...t.audiosIndex.map((n) => n.id),
        ...t.mensagensIndex.map((n) => n.id),
        ...t.mediasIndex.map((n) => n.id),
        ...t.docsIndex.map((n) => n.id),
      ].filter((n) => !!n));
  }
}
async function lg(e) {
  return new Promise(async (t, r) => {
    try {
      const n = await crypto.subtle.digest("SHA-256", e),
        o = Array.from(new Uint8Array(n))
          .map((i) => i.toString(16).padStart(2, "0"))
          .join("");
      t(o);
    } catch (n) {
      console.error("Erro ao calcular o hash:", n), r(n);
    }
  });
}
async function sg(e) {
  return new Promise((t, r) => {
    const n = new FileReader();
    (n.onload = async function (a) {
      var s;
      const o = (s = a == null ? void 0 : a.target) == null ? void 0 : s.result;
      if (!o) return r("No arrayBuffer");
      if (!(o instanceof ArrayBuffer))
        return r("ArrayBuffer is not instance of ArrayBuffer");
      const i = await lg(o);
      t(i);
    }),
      (n.onerror = (a) => r(a)),
      n.readAsArrayBuffer(e);
  });
}
function cg({
  handleOpenModalConfirmation: e,
  handleCloseModalConfirmation: t,
  setConfirmationModalConfig: r,
}) {
  const [n, a] = v.exports.useState(),
    [o, i] = v.exports.useState([]),
    [s, c] = v.exports.useState(!1),
    [u, p] = v.exports.useState(!1);
  async function d(m) {
    const g = await Ui(m);
    if (
      !g ||
      !g.audiosIndex ||
      !g.mensagensIndex ||
      !g.mediasIndex ||
      !g.docsIndex ||
      !g.funnelsIndex ||
      !g.triggersIndex
    ) {
      W.error("Arquivo de Index inv\xE1lido");
      return;
    }
    const {
      audiosIndex: b,
      mediasIndex: h,
      mensagensIndex: x,
      docsIndex: y,
      funnelsIndex: w,
      triggersIndex: E,
    } = g;
    a({
      audiosIndex: b,
      mediasIndex: h,
      mensagensIndex: x,
      docsIndex: y,
      funnelsIndex: w,
      triggersIndex: E,
    }),
      W.success("Arquivo de Index carregados");
  }
  async function f(m) {
    const g = m.map(async (h) => {
        const x = await sg(h);
        return { file: h, hash: x };
      }),
      b = await Promise.all(g);
    i((h) => [...h, ...b.filter((x) => !h.find((y) => y.hash === x.hash))]);
  }
  return l.createElement(
    l.Fragment,
    null,
    l.createElement("h2", null, "Importar backup existente (SPLIT)"),
    l.createElement(
      "div",
      null,
      l.createElement(
        "div",
        { className: "flex items-center gap-4" },
        l.createElement(
          "div",
          null,
          l.createElement("h3", null, "Importar \xEDndices"),
          l.createElement(
            pt,
            {
              accept: "application/JSON",
              multiple: !1,
              onDrop: (m) => {
                d(m[0]);
              },
              onDragOver: () => c(!0),
              onDragLeave: () => c(!1),
              onDropRejected: (m) => {
                c(!1),
                  m[0].errors.find((g) => g.code === "file-invalid-type")
                    ? (console.log(m), W.error("Formato n\xE3o aceito"))
                    : W.error(m[0].errors[0].message);
              },
              onDropAccepted: (m) => {
                c(!1);
              },
            },
            ({ getRootProps: m, getInputProps: g }) =>
              l.createElement(
                "div",
                { ...m({ className: `dropzone ${s ? "isDragginOn" : ""}` }) },
                l.createElement("input", { ...g() }),
                l.createElement(
                  "p",
                  null,
                  "Clique aqui ou arraste o arquivo de indices"
                ),
                l.createElement(
                  "p",
                  { className: "mt-1 text-xs" },
                  "(backup-split-indexes...json)"
                ),
                n &&
                  l.createElement(
                    "span",
                    {
                      className:
                        "flex items-center p-2 rounded mb-2 bg-zap-green/20",
                    },
                    l.createElement(aa, null),
                    " Indices carregados"
                  )
              )
          )
        ),
        l.createElement(
          "div",
          null,
          l.createElement("h3", null, "Importar bundles"),
          l.createElement(
            pt,
            {
              accept: "application/JSON",
              multiple: !0,
              onDrop: (m) => {
                f(m);
              },
              onDragOver: () => p(!0),
              onDragLeave: () => p(!1),
              onDropRejected: (m) => {
                p(!1),
                  m[0].errors.find((g) => g.code === "file-invalid-type")
                    ? (console.log(m), W.error("Formato n\xE3o aceito"))
                    : W.error(m[0].errors[0].message);
              },
              onDropAccepted: (m) => {
                p(!1);
              },
            },
            ({ getRootProps: m, getInputProps: g }) =>
              l.createElement(
                "div",
                {
                  ...m({
                    className: `dropzone py-4 ${u ? "isDragginOn" : ""}`,
                  }),
                },
                l.createElement("input", { ...g() }),
                l.createElement(
                  "p",
                  null,
                  "Clique aqui ou arraste os bundles a serem importados"
                ),
                l.createElement(
                  "p",
                  { className: "mt-1 text-xs" },
                  "(backup-split-bundle(x of y)...json)"
                ),
                o &&
                  o.length > 0 &&
                  l.createElement(
                    "span",
                    {
                      className:
                        "flex items-center p-2 rounded mb-2 bg-zap-green/20",
                    },
                    l.createElement(aa, null),
                    " ",
                    o.length,
                    " Bundles carregados"
                  )
              )
          )
        )
      ),
      n &&
        o &&
        o.length > 0 &&
        l.createElement(
          "button",
          {
            type: "button",
            className:
              "p-2 mt-2 rounded bg-zap-green text-white font-black text-lg",
            onClick: () => {
              e(),
                r((m) => ({
                  ...m,
                  details: {
                    title: "Importar split",
                    description:
                      "Voc\xEA est\xE1 prestes a importar um backup split, isso pode sobrescrever itens existentes. Tem certeza que deseja continuar?",
                    cancelTitle: "Cancelar",
                    okTitle: "Importar",
                  },
                  onRequestOk: async () => {
                    const g = new ig(n, o);
                    await W.promise(g.import(), {
                      success: "Importa\xE7\xE3o realizada com sucesso",
                      pending: "Importando backup split...",
                      error: "Erro ao importar",
                    })
                      .then(() => {
                        setTimeout(() => window.location.reload(), 2500), t();
                      })
                      .catch(() => {
                        t();
                      });
                  },
                  onRequestClose() {
                    t(), W.error("Importa\xE7\xE3o cancelada");
                  },
                }));
            },
          },
          "Importar split"
        )
    )
  );
}
function ug({ isOpen: e, onRequestClose: t }) {
  const [r, n] = v.exports.useState(!1),
    [a, o] = v.exports.useState(!1),
    { isDarkTheme: i } = ye(),
    { splitBackup: s } = so(),
    [c, u] = v.exports.useState();
  function p() {
    o(!0);
  }
  function d() {
    o(!1);
  }
  function f() {
    t(), o(!1), u(void 0);
  }
  const m = {
      details: {
        title: "Carregando...",
        okTitle: "Carregando...",
        cancelTitle: "Carregando...",
        fillCancel: i ? P.gray3 : P.gray4,
        fillOk: P.red,
      },
      onRequestOk: async () => {
        console.log("Default onRequestOk ModalCentralBackup");
      },
      isOpen: !1,
      onRequestClose: d,
    },
    [g, b] = v.exports.useState(m);
  async function h(w) {
    !w ||
      (p(),
      b({
        ...g,
        details: {
          ...g.details,
          title: `Tem certeza que deseja importar as configura\xE7\xF5es do arquivo ${w.name}?`,
          description:
            "Fa\xE7a um Backup antes! Essa a\xE7\xE3o vai SUBSTITUIR TODAS as suas configura\xE7\xF5es atuais",
          okTitle: "Importar",
          cancelTitle: "Cancelar",
          fillOk: P.green,
        },
        onRequestOk: async () => {
          await W.promise(rg(w), {
            pending:
              "Importando o backup, n\xE3o feche ou recarregue a p\xE1gina...",
            success: "Backup importado com sucesso!",
            error: "Erro ao importar o backup",
          }),
            d(),
            t(),
            setTimeout(() => window.location.reload(), 2500);
        },
      }));
  }
  const [x, y] = v.exports.useState("");
  return (
    v.exports.useEffect(() => {
      x ||
        In("tutorial-backup")
          .then((w) => y(w))
          .catch((w) => {
            y("4TwT_pUaBco"), console.log(w);
          });
    }),
    l.createElement(
      Ir,
      {
        closeTimeoutMS: 400,
        isOpen: e,
        onRequestClose: f,
        overlayClassName: "react-modal-overlay",
        className: "react-modal-content",
      },
      l.createElement(
        "button",
        { type: "button", onClick: f, className: "react-modal-close" },
        l.createElement(yn, { fill: P.red })
      ),
      l.createElement(
        _m,
        null,
        l.createElement(tt, { ...g, isOpen: a }),
        l.createElement("h1", null, "Central de Backups"),
        l.createElement(
          eg,
          { defaultValue: "create", orientation: "horizontal" },
          l.createElement(
            tg,
            {
              "aria-label":
                "Tr\xEAs abas dispon\xEDveis: Criar um backup, Importar um backup existente e Tutorial completo sobre os backups",
            },
            l.createElement(
              Ot,
              { className: "tabTrigger", value: "create" },
              "Criar novo backup"
            ),
            l.createElement(
              Ot,
              { className: "tabTrigger", value: "import" },
              "Importar backup"
            ),
            l.createElement(
              Ot,
              { className: "tabTrigger", value: "tutorial" },
              "Tutorial completo"
            ),
            s &&
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  Ot,
                  { className: "tabTrigger", value: "create-split" },
                  "Criar Split (Avan\xE7ado)"
                ),
                l.createElement(
                  Ot,
                  { className: "tabTrigger", value: "import-split" },
                  "Importar Split (Avan\xE7ado)"
                )
              )
          ),
          l.createElement(
            Pt,
            { value: "create" },
            c
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    "div",
                    null,
                    l.createElement(
                      "span",
                      { className: "text-lg" },
                      "Seu backup est\xE1 pronto, clique no bot\xE3o abaixo para fazer o download"
                    )
                  ),
                  l.createElement(
                    "div",
                    { className: "flex items-center justify-center" },
                    l.createElement(
                      "a",
                      {
                        className:
                          "flex items-center justify-center gap-2 py-4 px-8 bg-zap-green rounded-md",
                        href: c,
                        download: `backup ${String(
                          new Date()
                            .toLocaleDateString("pt-BR")
                            .replaceAll("/", "-")
                        )}.json`,
                      },
                      l.createElement(cl, { className: "fill-white h-6 w-6" }),
                      l.createElement(
                        "span",
                        { className: "text-white text-base font-bold" },
                        "Fazer download"
                      )
                    )
                  )
                )
              : l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    "h2",
                    null,
                    "Clique no bot\xE3o para criar um novo backup"
                  ),
                  l.createElement(
                    "button",
                    {
                      type: "button",
                      className: "createNewBackupBtn",
                      onClick: () => {
                        b({
                          ...g,
                          details: {
                            ...g.details,
                            title: "Deseja realmente exportar um backup agora?",
                            okTitle: "Exportar",
                            cancelTitle: "Cancelar",
                            fillOk: P.green,
                          },
                          onRequestOk: async () => {
                            const w = await W.promise(ag(), {
                              pending: "Gerando seu backup, aguarde...",
                              success: "Backup gerado com sucesso!",
                              error: "Erro ao gerar o backup",
                            });
                            d(), u(w);
                          },
                        }),
                          p();
                      },
                    },
                    "Gerar um backup agora"
                  )
                )
          ),
          l.createElement(
            Pt,
            { value: "import" },
            l.createElement("h2", null, "Importar backup existente conteudo"),
            l.createElement(
              pt,
              {
                accept: "application/JSON",
                multiple: !1,
                onDrop: (w) => {
                  h(w[0]);
                },
                onDragOver: () => n(!0),
                onDragLeave: () => n(!1),
                onDropRejected: (w) => {
                  n(!1),
                    w[0].errors.find((E) => E.code === "file-invalid-type")
                      ? (console.log(w), W.error("Formato n\xE3o aceito"))
                      : W.error(w[0].errors[0].message);
                },
                onDropAccepted: (w) => {
                  n(!1);
                },
              },
              ({ getRootProps: w, getInputProps: E }) =>
                l.createElement(
                  "div",
                  { ...w({ className: `dropzone ${r ? "isDragginOn" : ""}` }) },
                  l.createElement("input", { ...E() }),
                  l.createElement(
                    "p",
                    null,
                    "Clique aqui ou arraste o backup a ser importado"
                  ),
                  l.createElement(
                    "span",
                    null,
                    "Lembre-se que ao importar, todas as configura\xE7\xF5es anteriores ser\xE3o substituidas"
                  )
                )
            )
          ),
          l.createElement(
            Pt,
            { value: "tutorial" },
            l.createElement(
              "h2",
              null,
              "Assista o tutorial de como utilizar o backup"
            ),
            l.createElement(ea, { embedId: x, loading: !x })
          ),
          l.createElement(
            Pt,
            { value: "create-split" },
            l.createElement(
              "h2",
              null,
              "Clique no bot\xE3o para criar um novo backup (SPLIT)"
            ),
            l.createElement(
              "span",
              null,
              "O Backup split dividir\xE1 seu backup em v\xE1rios arquivos, essa fun\xE7\xE3o foi criada para usu\xE1rios com muitos itens"
            ),
            l.createElement(
              "button",
              {
                type: "button",
                className: "createNewBackupBtn py-8",
                onClick: () => {
                  b({
                    ...g,
                    details: {
                      ...g.details,
                      title:
                        "Deseja realmente exportar um backup (SPLIT) agora?",
                      description:
                        "O Backup split dividir\xE1 seu backup em v\xE1rios arquivos, essa fun\xE7\xE3o foi criada para usu\xE1rios com muitos itens",
                      okTitle: "Exportar",
                      cancelTitle: "Cancelar",
                      fillOk: P.green,
                    },
                    onRequestOk: async () => {
                      const w = new og();
                      await W.promise(w.createBackup(), {
                        pending: "Gerando seu backup Split, aguarde...",
                        success: "Backup Split gerado com sucesso!",
                        error: "Erro ao gerar o backup Split",
                      }),
                        d();
                    },
                  }),
                    p();
                },
              },
              "Gerar um backup (SPLIT) agora"
            )
          ),
          l.createElement(
            Pt,
            { value: "import-split" },
            l.createElement(cg, {
              handleCloseModalConfirmation: d,
              handleOpenModalConfirmation: p,
              setConfirmationModalConfig: b,
            })
          )
        )
      )
    )
  );
}
const dg = re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .createNewBackupBtn {
    margin: 2rem;
    border: none;
    font-size: 1rem;
    font-weight: 800;
    border-radius: 0.5rem;
    background: ${G(0.3, P.veryperi)};
  }
  .dropzone {
    width: 100%;
    height: 100%;
    background: ${G(0.8, P.veryperi)};
    font-size: 1rem;
    border: 2px dashed ${P.veryperi};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &.isDragginOn {
      border: 2px dashed var(--green);
      background: ${G(0.85, P.green)};
      filter: brightness(0.8);
    }
  }
  h1 {
    margin-bottom: 1rem;
  }
`,
  pg = He(zi, {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "15rem",
  }),
  fg = He(ji, {
    flexShrink: 0,
    display: "flex",
    borderBottom: `1px solid ${P.gray1}`,
  }),
  mg = He(qi, {
    all: "unset",
    backgroundColor: "var(--shape)",
    padding: "0 1rem",
    height: 45,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    lineHeight: 1,
    color: "var(--text-title)",
    userSelect: "none",
    "&:first-child": { borderTopLeftRadius: 6 },
    "&:last-child": { borderTopRightRadius: 6 },
    "&:hover": { color: P.veryperi },
    '&[data-state="active"]': {
      color: P.veryperi,
      boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
    },
    "&:focus": { position: "relative", boxShadow: "0 0 0 2px black" },
  }),
  gg = He(Wi, {
    flexGrow: 1,
    padding: "1rem",
    position: "relative",
    textAlign: "center",
    backgroundColor: "var(--shape)",
    color: "var(--text-title)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    outline: "none",
    "&:focus": { boxShadow: "0 0 0 2px black" },
    '&[data-state="active"]': {
      display: "grid",
      gridTemplateRows: "1.5rem 1fr",
    },
  });
function vg({ savedUrl: e, revalidateStorageWebhooks: t }) {
  console.log({ savedUrl: e });
  const [r, n] = v.exports.useState(e);
  async function a(o) {
    if ((o.preventDefault(), !r)) {
      await W.promise(Qe("newChatWebhook"), {
        pending: "Removendo webhook...",
        success: "Webhook removido com sucesso!",
        error: "Erro ao remover webhook",
      }),
        t();
      return;
    }
    await W.promise(fe({ newChatWebhook: r }), {
      pending: "Salvando webhook...",
      success: "Webhook salvo com sucesso!",
      error: "Erro ao salvar webhook",
    }),
      t();
  }
  return l.createElement(
    "div",
    null,
    l.createElement("h2", null, "Webhook - Novo chat apareceu"),
    l.createElement(
      "p",
      null,
      "Disparado sempre que um novo chat aparece no WhatsApp."
    ),
    l.createElement("span", null, "Dados:"),
    l.createElement(
      "pre",
      null,
      JSON.stringify({
        phone: "string",
        name: "string",
        operatorPhone: "string",
      })
    ),
    l.createElement(
      "form",
      { onSubmit: a, className: "flex flex-col px-10 gap-4" },
      l.createElement("input", {
        type: "url",
        placeholder: "https://meu-webhook-exemplo.com.br/xpto",
        value: r,
        onChange: (o) => n(o.target.value),
        className: "border-2 border-gray-300 rounded-md p-2 bg-transparent",
      }),
      l.createElement(
        "button",
        {
          type: "submit",
          className: " text-lg font-bold py-2 px-4 bg-zap-green rounded-md",
        },
        "Salvar Webhook"
      )
    )
  );
}
function bg({ isOpen: e, onRequestClose: t }) {
  function r() {
    t();
  }
  const [n, a] = v.exports.useState(""),
    [o, i] = v.exports.useState({});
  function s() {
    i({});
  }
  return (
    v.exports.useEffect(() => {
      console.log("effect"),
        _("newChatWebhook").then((c) => {
          a(c != null ? c : "");
        });
    }, [o]),
    l.createElement(
      Ir,
      {
        closeTimeoutMS: 400,
        isOpen: e,
        onRequestClose: r,
        overlayClassName: "react-modal-overlay",
        className: "react-modal-content",
      },
      l.createElement(
        "button",
        { type: "button", onClick: r, className: "react-modal-close" },
        l.createElement(yn, { fill: P.red })
      ),
      l.createElement(
        dg,
        null,
        l.createElement("h1", null, "Central de Webhooks"),
        l.createElement(
          pg,
          { defaultValue: "new-chat", orientation: "horizontal" },
          l.createElement(
            fg,
            null,
            l.createElement(
              mg,
              { className: "tabTrigger", value: "new-chat" },
              "Novo Chat"
            )
          ),
          l.createElement(
            gg,
            { value: "new-chat" },
            l.createElement(vg, { savedUrl: n, revalidateStorageWebhooks: s })
          )
        )
      )
    )
  );
}
function hg() {
  const [e, t] = v.exports.useState(!1),
    [r, n] = v.exports.useState(!1),
    { setSelectedItem: a, setSelectedFunnel: o, setSelectedTrigger: i } = oe(),
    { createNewMessage: s } = $t(),
    { createNewAudio: c } = Gt(),
    { createNewMedia: u } = zt(),
    { createNewDoc: p } = jt(),
    { createNewFunnel: d } = et(),
    { createNewTrigger: f } = qt(),
    m = oo(),
    [g, b] = v.exports.useState("");
  v.exports.useEffect(() => {
    var R;
    const C =
      (R = m == null ? void 0 : m.pathname) == null
        ? void 0
        : R.match(/^\/dashboard\/(.*)$/);
    if (!C) return b("");
    const [I, F] = C;
    return b(F || "");
  }, [m]);
  const h = {
    mensagens: s,
    audios: c,
    medias: u,
    funis: d,
    docs: p,
    triggers: f,
  };
  function x() {
    t(!1);
  }
  function y() {
    t(!0);
  }
  function w() {
    n(!1);
  }
  function E() {
    n(!0);
  }
  return l.createElement(
    Bm,
    null,
    l.createElement(ug, { isOpen: e, onRequestClose: x }),
    l.createElement(bg, { isOpen: r, onRequestClose: w }),
    l.createElement(Pm, {
      handleOpenCentralBackupModal: y,
      handleOpenWebhookConfigModal: E,
    }),
    l.createElement(
      Nm,
      { isMobile: window.innerWidth < 1024 },
      l.createElement("h1", null, "Bem vindo(a) ao seu Painel de Controle!"),
      l.createElement(
        "h2",
        null,
        "O que voc\xEA deseja adicionar ou gerenciar?"
      ),
      l.createElement(
        "main",
        { id: "mainDashboardLayout" },
        g &&
          l.createElement(
            "button",
            {
              id:
                g === "funis"
                  ? "addNewFunnelBtn"
                  : g === "triggers"
                  ? "addNewTriggerBtn"
                  : "addNewItemBtn",
              type: "button",
              onClick: () => {
                h[g]();
              },
            },
            "+ Novo",
            " ",
            g === "funis" ? "Funil" : g === "triggers" ? "Gatilho" : "Item"
          ),
        l.createElement(
          "section",
          { id: "linksSection" },
          l.createElement(
            "div",
            { id: "linksSectionContainer" },
            l.createElement(
              it,
              {
                to: De.mensagens,
                onClick: () => {
                  a(void 0), o(void 0), i(void 0);
                },
              },
              l.createElement(st, {
                name: "Mensagens",
                Icon: Ae("mensagens"),
                isActive: g === "mensagens",
                fill: $("mensagens"),
              })
            ),
            l.createElement(
              it,
              {
                to: De.audios,
                onClick: () => {
                  a(void 0), o(void 0), i(void 0);
                },
              },
              l.createElement(st, {
                name: "\xC1udios",
                Icon: Ae("audios"),
                isActive: g === "audios",
                fill: $("audios"),
              })
            ),
            l.createElement(
              it,
              {
                to: De.medias,
                onClick: () => {
                  a(void 0), o(void 0), i(void 0);
                },
              },
              l.createElement(st, {
                name: "M\xEDdias",
                Icon: Ae("medias"),
                isActive: g === "medias",
                fill: $("medias"),
              })
            ),
            l.createElement(
              it,
              {
                to: De.docs,
                onClick: () => {
                  a(void 0), o(void 0), i(void 0);
                },
              },
              l.createElement(st, {
                name: "Documentos",
                Icon: Ae("docs"),
                isActive: g === "docs",
                fill: $("docs"),
              })
            ),
            l.createElement(
              it,
              {
                to: De.funis,
                onClick: () => {
                  a(void 0), o(void 0), i(void 0);
                },
              },
              l.createElement(st, {
                name: "Funis",
                Icon: Ae("funis"),
                isActive: g === "funis",
                fill: $("funis"),
              })
            ),
            l.createElement(
              it,
              {
                to: De.triggers,
                onClick: () => {
                  a(void 0), o(void 0), i(void 0);
                },
                className: "relative",
              },
              l.createElement(st, {
                name: "Gatilhos",
                Icon: Ae("triggers"),
                isActive: g === "triggers",
                fill: $("triggers"),
              }),
              l.createElement(
                "span",
                {
                  className:
                    "absolute top-0 right-0 bg-zap-veryperi font-bold px-2 rounded translate-x-2 translate-y-[-2px]",
                },
                "NOVO"
              )
            )
          )
        ),
        l.createElement(
          "section",
          { id: "panelContent" },
          l.createElement(Il, null)
        )
      )
    ),
    l.createElement(Ri, null)
  );
}
const xg = re.div`
  text-align: center;
  padding: 1.5rem;
  margin: 0 auto;
  position: relative;
  h1 {
    margin-bottom: 1rem;
  }
`;
function yg() {
  const [e, t] = v.exports.useState("");
  return (
    v.exports.useEffect(() => {
      e ||
        In("home-video")
          .then((r) => t(r))
          .catch((r) => {
            t("4TwT_pUaBco"), console.log(r);
          });
    }),
    l.createElement(
      xg,
      null,
      l.createElement(
        "h1",
        null,
        "Bem-vindo(a) ao novo ZapVoice, assista o v\xEDdeo abaixo para aprender a usa-lo"
      ),
      l.createElement(ea, { embedId: e, loading: !e })
    )
  );
}
const Eg = re.div`
  display: grid;
  grid-template-rows: 4.25rem 1fr 4.25rem;
  grid-template-areas: "inputAndDelete" "main" "actionSection";
  flex: 1;
  place-items: center;

  section#inputAndDelete {
    grid-area: inputAndDelete;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.5rem;
    input {
      width: 100%;

      height: 2.5rem;
      background: var(--zap-background);
      border: 0;
      border-radius: 0.25rem;
      outline: none;
      padding-left: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        outline: 1px solid
          ${G(0.2, $("triggers"))};
      }
      &:focus {
        outline: 1.5px solid ${$("triggers")};
      }
    }
    button {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      border: 0;
      border-radius: 0.25rem;
      display: grid;
      place-items: center;
      background: ${G(0.7, P.red)};
      &:hover {
        filter: saturate(2);
      }
      .trashIcon {
        fill: ${P.red};
        width: 65%;
        height: 65%;
        filter: ${`drop-shadow(0px 0px 3px ${G(0.5, "black")})`};
      }
    }
  }
  div#mainContent {
    grid-area: main;
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    &:last-child {
      grid-area: main/ main / 4;
    }
  }
`;
function eo({ children: e }) {
  const { selectedTrigger: t, setSelectedTrigger: r } = oe(),
    { updateTriggerName: n, deleteTrigger: a } = qt(),
    [o, i] = v.exports.useState(""),
    { isDarkTheme: s } = ye(),
    [c, u] = v.exports.useState(!1);
  v.exports.useEffect(() => {
    var f;
    i((f = t == null ? void 0 : t.name) != null ? f : "Default Name");
  }, [t, i]);
  function p() {
    u(!0);
  }
  function d() {
    u(!1);
  }
  return l.createElement(
    Eg,
    null,
    l.createElement(tt, {
      details: {
        title: `Tem certeza que deseja deletar o gatilho "${o}"?`,
        description:
          "Essa a\xE7\xE3o n\xE3o pode ser desfeita. Isso excluir\xE1 permanentemente o gatilho",
        okTitle: "Sim, tenho certeza",
        cancelTitle: "Cancelar",
        fillCancel: s ? P.gray3 : P.gray4,
        fillOk: P.red,
      },
      onRequestOk: async () => t && a(t.id),
      isOpen: c,
      onRequestClose: d,
    }),
    l.createElement(
      "section",
      { id: "inputAndDelete" },
      l.createElement("input", {
        type: "text",
        value: o,
        className: t == null ? void 0 : t.type,
        onChange: (f) => {
          i(f.target.value);
        },
        onBlur: () => {
          !o && (t == null ? void 0 : t.name) && i(t.name),
            o &&
              t &&
              o !== (t == null ? void 0 : t.name) &&
              (r({ ...t, name: o }), n({ triggerId: t.id, name: o }));
        },
      }),
      l.createElement(
        "button",
        {
          type: "button",
          id: "deleteTriggerBtn",
          onClick: () => {
            p();
          },
        },
        l.createElement(Lt, { className: "trashIcon" })
      )
    ),
    e
  );
}
function wg() {
  const [e, t] = v.exports.useState("");
  return (
    v.exports.useEffect(() => {
      e ||
        In("triggers-tutorial")
          .then((r) => t(r))
          .catch((r) => {
            t("4TwT_pUaBco"), console.log(r);
          });
    }),
    l.createElement(
      "div",
      {
        className:
          "w-full h-full flex flex-col items-center justify-center p-8",
      },
      l.createElement(
        "span",
        { className: "text-2xl font-bold bg-zap-purple px-2 rounded" },
        "NOVIDADE!"
      ),
      l.createElement(
        "span",
        { className: "text-2xl font-bold" },
        "Tutorial completo dos gatilhos"
      ),
      l.createElement(ea, { embedId: e, loading: !e })
    )
  );
}
function to({ className: e, ...t }) {
  const { isDarkTheme: r } = ye();
  return l.createElement("input", {
    type: "text",
    className: Oe(
      "outline-none ring-1 max-w-xs py-1 px-2 w-auto rounded-xl text-sm text-center font-bold hover:ring-zap-blue",
      { "bg-gray-400 ring-gray-700": r, "bg-gray-100 ring-gray-200": !r },
      e
    ),
    ...t,
  });
}
function Dg({
  keywords: e,
  keywordRuleId: t,
  handleUpdateKeywordsOfAKeywordRule: r,
}) {
  const { isDarkTheme: n } = ye();
  function a(d) {
    return d.map((f) => ({ keyword: f, id: Ze() }));
  }
  const [o, i] = v.exports.useState(a(e)),
    [s, c] = v.exports.useState(!1),
    [u, p] = v.exports.useState("");
  return (
    v.exports.useEffect(() => {
      i(a(e));
    }, [e]),
    l.createElement(
      "div",
      null,
      l.createElement(
        "div",
        { className: "flex max-w-md flex-wrap gap-3" },
        o &&
          o.map((d) =>
            l.createElement(
              "div",
              { key: d.id, className: "flex items-center gap-3" },
              l.createElement(
                "div",
                { className: "relative flex items-center" },
                l.createElement(to, {
                  type: "text",
                  className: "pr-5",
                  value: d.keyword,
                  size: d.keyword.length,
                  placeholder: "Adicionar texto",
                  onBlur: () => {
                    r(
                      t,
                      o.reduce(
                        (f, m) => (m.keyword && f.push(m.keyword), f),
                        []
                      )
                    );
                  },
                  onKeyDown: (f) => {
                    f.key === "Enter" && f.currentTarget.blur();
                  },
                  onChange: (f) => {
                    const m = f.target.value;
                    i((g) =>
                      g.map((b) => (b.id === d.id ? { ...b, keyword: m } : b))
                    );
                  },
                }),
                l.createElement(
                  "button",
                  {
                    className: Oe("absolute right-2 p-[2px] rounded-full", {
                      "bg-gray-700": n,
                      "bg-gray-200": !n,
                    }),
                    onClick: () => {
                      if (o.length === 1)
                        return W(
                          "Por favor, forne\xE7a pelo menos uma palavra-chave"
                        );
                      r(t, [
                        ...o.reduce(
                          (f, m) => (
                            m.keyword && m.id !== d.id && f.push(m.keyword), f
                          ),
                          []
                        ),
                      ]);
                    },
                  },
                  l.createElement(ul, null)
                )
              ),
              l.createElement("span", null, "ou")
            )
          ),
        !s &&
          l.createElement(
            "button",
            {
              type: "button",
              id: "addKeywordBtn",
              className:
                "outline-none max-w-xs text-left py-1 px-4 w-auto rounded-xl text-sm font-bold border-dashed border-[1px] hover:text-zap-blue",
              onClick: () => {
                c(!0);
              },
            },
            "+ Palavra-chave"
          ),
        s &&
          l.createElement(to, {
            autoFocus: !0,
            type: "text",
            value: u,
            size: u.length,
            placeholder: "Adicionar texto",
            onChange: (d) => {
              p(d.target.value);
            },
            onKeyDown: (d) => {
              d.key === "Enter" && d.currentTarget.blur();
            },
            onBlur: (d) => {
              const f = d.target.value;
              f &&
                r(t, [
                  ...o.reduce(
                    (m, g) => (g.keyword && m.push(g.keyword), m),
                    []
                  ),
                  f,
                ]),
                p(""),
                c(!1);
            },
          })
      )
    )
  );
}
function Ig({ children: e, className: t, ...r }) {
  return l.createElement(
    "select",
    {
      ...r,
      className: Oe(
        "bg-transparent border-b border-gray-200 font-bold cursor-pointer text-lg outline-none",
        t
      ),
    },
    e
  );
}
function sr({ children: e, className: t, ...r }) {
  return l.createElement(
    "option",
    { ...r, className: Oe("bg-[var(--zap-background)] font-semibold", t) },
    e
  );
}
const cr = {
  contains: "A mensagem cont\xE9m (Alguma)",
  equals: "A mensagem \xE9 igual a",
  not_contains: "A mensagem n\xE3o cont\xE9m (Nenhuma)",
  starts: "A mensagem come\xE7a com (Alguma)",
};
function Cg() {
  const { isDarkTheme: e } = ye(),
    { selectedTrigger: t, getFunnelName: r } = oe(),
    { funnelsIndex: n } = et(),
    {
      updateTriggerKeyWordRules: a,
      updateTriggerFunnelId: o,
      updateTriggerSecondsBeforeSend: i,
      updateDontSendToContactTrigger: s,
      updateDontSendToGroupsTrigger: c,
      updateIgnoreCaseSensitiveTrigger: u,
    } = qt(),
    [p, d] = v.exports.useState(t == null ? void 0 : t.funnelId),
    [f, m] = v.exports.useState(
      (t == null ? void 0 : t.secondsBeforeSend) || 0
    ),
    [g, b] = v.exports.useState(!!(t != null && t.ignoreCaseSensitive)),
    [h, x] = v.exports.useState(!!(t != null && t.dontSendToContact)),
    [y, w] = v.exports.useState(!!(t != null && t.dontSendToGroups)),
    [E, C] = v.exports.useState(
      t == null ? void 0 : t.keywordRules.map((S) => ({ ...S, id: Ze() }))
    ),
    [I, F] = v.exports.useState(!1);
  function R() {
    F((S) => !S);
  }
  function L() {
    b(!!(t != null && t.ignoreCaseSensitive)),
      x(!!(t != null && t.dontSendToContact)),
      w(!!(t != null && t.dontSendToGroups)),
      m((t == null ? void 0 : t.secondsBeforeSend) || 0),
      d(t == null ? void 0 : t.funnelId),
      !(t != null && t.keywordRules) ||
      (t == null ? void 0 : t.keywordRules.length) === 0
        ? C([{ id: Ze(), type: "contains", keywords: [] }])
        : C(
            t == null ? void 0 : t.keywordRules.map((S) => ({ ...S, id: Ze() }))
          );
  }
  v.exports.useEffect(() => {
    L();
  }, [t]);
  const T = v.exports.useRef(null),
    M = (S, K) => {
      C((Y) =>
        Y == null
          ? void 0
          : Y.map((Q) => (Q.id === S ? { ...Q, keywords: K } : Q))
      );
    },
    j = (S, K) => {
      C((Y) =>
        Y == null ? void 0 : Y.map((Q) => (Q.id === S ? { ...Q, type: K } : Q))
      );
    },
    z = () => {
      C((S) => [...(S || []), { id: Ze(), type: "contains", keywords: [] }]);
    },
    B = (S) => {
      C((K) => (K == null ? void 0 : K.filter((Y) => Y.id !== S)));
    },
    A = () => {
      if (t) {
        if (!E || E.filter((S) => S.keywords.length === 0).length > 0) {
          W.error(
            "Voc\xEA n\xE3o pode salvar um gatilho com palavras-chaves vazias"
          );
          return;
        }
        a({ triggerId: t.id, keywordRules: E || [] }),
          o({ triggerId: t.id, funnelId: p }),
          i({ triggerId: t.id, secondsBeforeSend: f }),
          u({ triggerId: t.id, ignoreCaseSensitive: g }),
          s({ triggerId: t.id, dontSendToContact: h }),
          c({ triggerId: t.id, dontSendToGroups: y });
      }
    },
    H =
      !!(t != null && t.ignoreCaseSensitive) !== g ||
      !!(t != null && t.dontSendToContact) !== h ||
      !!(t != null && t.dontSendToGroups) !== y ||
      (t == null ? void 0 : t.secondsBeforeSend) !== f ||
      (t == null ? void 0 : t.funnelId) !== p;
  return l.createElement(
    "div",
    { id: "mainContent", className: "w-full h-full flex flex-col items-left" },
    l.createElement(
      "div",
      { className: "flex pb-2 text-base  items-start gap-10" },
      l.createElement(
        "div",
        { className: "flex flex-col gap-1 items-start " },
        l.createElement(
          we,
          {
            title:
              "Selecione o funil que ser\xE1 disparado quando o gatilho for ativado",
          },
          l.createElement(
            "label",
            { htmlFor: "funnelSelect", className: "flex items-center" },
            l.createElement("span", null, "Funil a ser disparado:"),
            l.createElement(
              "select",
              {
                id: "funnelSelect",
                value: p || "",
                onChange: (S) => {
                  S.target.value !== "" ? d(S.target.value) : d(void 0);
                },
                className:
                  "bg-transparent border-b border-zap-gold w-full font-bold cursor-pointer text-base outline-none",
              },
              l.createElement(
                "option",
                {
                  value: "",
                  className: "bg-[var(--zap-background)] font-semibold",
                },
                "N\xE3o atribuido"
              ),
              n == null
                ? void 0
                : n.map((S) =>
                    l.createElement(
                      "option",
                      {
                        key: S.id,
                        value: S.id,
                        className: "bg-[var(--zap-background)] font-semibold",
                      },
                      S.name
                    )
                  )
            )
          )
        ),
        l.createElement(
          we,
          {
            title:
              "Este valor em segundos ser\xE1 utilizado como um tempo de espera antes de iniciar o funil, evitando que a a\xE7\xE3o pare\xE7a instant\xE2nea e automatizada.",
            className: "flex",
          },
          l.createElement(
            "label",
            { htmlFor: "secondsDelayInput" },
            l.createElement("span", null, "Atraso antes do envio (segundos):"),
            l.createElement("input", {
              id: "secondsDelayInput",
              type: "number",
              value: f,
              onChange: (S) => {
                m(Number(S.target.value));
              },
              className:
                "bg-transparent border-b w-20 border-zap-gold font-bold cursor-pointer text-center outline-none",
            })
          )
        )
      ),
      l.createElement(
        "div",
        { className: "flex flex-col" },
        l.createElement(
          we,
          {
            title: h
              ? "Clique para ativar o envio para contatos salvos"
              : "Clique para desativar o envio para contatos salvos",
          },
          l.createElement(
            "label",
            {
              htmlFor: "dontSendToContactSwitch",
              className: "cursor-pointer flex items-center gap-2",
            },
            l.createElement(ur, {
              zvTheme: e ? "dark" : "light",
              sx: { m: 1 },
              checked: !!h,
              id: "dontSendToContactSwitch",
              onChange: () => {
                x((S) => !S);
              },
            }),
            l.createElement(
              "span",
              { className: "text-xs" },
              "N\xE3o enviar p/ contatos salvos (privado)"
            )
          )
        ),
        l.createElement(
          we,
          {
            title: y
              ? "Clique para ativar o envio para Grupos"
              : "Clique para desativar o envio para Grupos",
          },
          l.createElement(
            "label",
            {
              htmlFor: "dontSendToGroupsSwitch",
              className: "cursor-pointer flex items-center gap-2",
            },
            l.createElement(ur, {
              zvTheme: e ? "dark" : "light",
              sx: { m: 1 },
              checked: !!y,
              id: "dontSendToGroupsSwitch",
              onChange: () => {
                w((S) => !S);
              },
            }),
            l.createElement(
              "span",
              { className: "text-xs" },
              "N\xE3o enviar p/ Grupos"
            )
          )
        ),
        l.createElement(
          we,
          {
            title: g
              ? "Clique para n\xE3o ignorar mai\xFAsculas e minusculas"
              : "Clique para ignorar mai\xFAsculas e minusculas",
          },
          l.createElement(
            "label",
            {
              htmlFor: "ignoreCaseSensitiveSwitch",
              className: "cursor-pointer flex items-center gap-2",
            },
            l.createElement(ur, {
              zvTheme: e ? "dark" : "light",
              sx: { m: 1 },
              checked: !!g,
              id: "ignoreCaseSensitiveSwitch",
              onChange: () => {
                b((S) => !S);
              },
            }),
            l.createElement(
              "span",
              { className: "text-xs" },
              "Ignorar Mai\xFAsculas e Minusculas"
            )
          )
        )
      )
    ),
    l.createElement(
      "div",
      {
        className: Oe("", {
          "contents w-full": !I,
          "grid place-items-center fixed top-0 left-0 w-full h-full p-10": !!I,
        }),
      },
      !!I &&
        l.createElement("div", {
          className: "absolute backdrop-blur-sm w-full h-full",
          onClick: () => F(!1),
        }),
      l.createElement(
        "div",
        {
          className:
            "relative flex flex-col h-full w-full overflow-y-auto pt-4 pb-10 px-8 rounded border bg-[var(--zap-background)]",
        },
        l.createElement(
          we,
          { title: I ? "Fechar modo tela cheia" : "Abrir modo tela cheia" },
          l.createElement(
            "button",
            {
              onClick: R,
              type: "button",
              className: "w-8 h-8 absolute right-2 top-2 p-1 ring-2 rounded",
            },
            I
              ? l.createElement(pl, {
                  className: "w-full h-full fill-zap-green sticky top-0",
                })
              : l.createElement(dl, {
                  className: "w-full h-full fill-zap-green sticky top-0",
                })
          )
        ),
        E &&
          E.length > 0 &&
          (E == null
            ? void 0
            : E.map((S, K) =>
                l.createElement(
                  "div",
                  { key: S.id },
                  K > 0 &&
                    l.createElement(
                      "div",
                      { className: "my-4 relative opacity-75" },
                      l.createElement("div", {
                        className:
                          "absolute top-[50%] left-0 w-full border-b border-gray-200",
                      }),
                      l.createElement(
                        "span",
                        {
                          className:
                            "relative text-base ml-4 bg-[var(--shape)] px-4 border border-gray-200 rounded",
                        },
                        "e"
                      )
                    ),
                  l.createElement(
                    "div",
                    { className: "relative mb-4" },
                    E.length > 1 &&
                      l.createElement(
                        "button",
                        {
                          className: "absolute right-2 top-2 w-4 h-4",
                          onClick: () => B(S.id),
                        },
                        l.createElement(Lt, {
                          className: "fill-zap-red w-full h-full",
                        })
                      ),
                    l.createElement(
                      "div",
                      { className: "flex items-center gap-2" },
                      K === 0 &&
                        l.createElement(
                          "span",
                          { className: "self-start text-bold text-lg" },
                          "Se "
                        ),
                      l.createElement(
                        Ig,
                        {
                          value: S.type,
                          onChange: (Y) => j(S.id, Y.target.value),
                        },
                        E.length === 1 &&
                          l.createElement(
                            sr,
                            { value: "equals" },
                            String(cr.equals).toLowerCase()
                          ),
                        l.createElement(
                          sr,
                          { value: "contains" },
                          String(cr.contains).toLowerCase()
                        ),
                        l.createElement(
                          sr,
                          { value: "starts" },
                          String(cr.starts).toLowerCase()
                        ),
                        l.createElement(
                          sr,
                          { value: "not_contains" },
                          String(cr.not_contains).toLowerCase()
                        )
                      )
                    ),
                    l.createElement(
                      "div",
                      { className: "flex flex-col gap-2 mt-4" },
                      l.createElement(Dg, {
                        keywords: S.keywords,
                        handleUpdateKeywordsOfAKeywordRule: M,
                        keywordRuleId: S.id,
                      })
                    )
                  )
                )
              )),
        E &&
          !(E != null && E.find((S) => S.type === "equals")) &&
          E.length < 5 &&
          l.createElement(
            we,
            {
              title:
                "Ao adicionar uma nova condi\xE7\xE3o, cada uma delas \xE9 tratada como um 'E', permitindo que voc\xEA crie gatilhos mais precisos e espec\xEDficos.",
            },
            l.createElement(
              "button",
              {
                className:
                  "outline-none w-full p-2 mt-8 mx-auto rounded-xl text-lg font-bold border-dashed border-[1px] hover:text-zap-blue text-center",
                ref: T,
                onClick: () => {
                  z(),
                    setTimeout(() => {
                      var S;
                      (S = T.current) == null || S.scrollIntoView();
                    });
                },
              },
              "+ Condi\xE7\xE3o da mensagem"
            )
          )
      )
    ),
    E &&
      E.length > 0 &&
      l.createElement(
        "div",
        { className: "flex items-center justify-evenly w-full py-2 relative" },
        l.createElement(
          "button",
          {
            className:
              "bg-zap-red  text-[var(--text-title)] font-bold text-lg py-1 px-4 rounded-xl",
            onClick: L,
          },
          "Cancelar"
        ),
        l.createElement(
          "button",
          {
            className: Oe(
              "bg-zap-blue text-[var(--text-title)] font-bold text-lg py-1 px-4 rounded-xl",
              { "bg-zap-green after:content-['_\u{1F446}'] ": H }
            ),
            onClick: A,
          },
          "Salvar"
        )
      )
  );
}
function Sg() {
  return l.createElement(
    "div",
    {
      className:
        "w-full h-full flex flex-col px-10 gap-2 items-center justify-center ",
    },
    l.createElement(
      "p",
      { className: " text-base text-center" },
      "Os gatilhos s\xE3o uma funcionalidade poderosa, contudo est\xE3o dispon\xEDveis"
    ),
    l.createElement(
      "p",
      { className: " text-base text-center underline mb-4" },
      "Apenas para usu\xE1rios Premium"
    ),
    l.createElement(
      "a",
      {
        href: "https://zapvoice.com.br",
        target: "_blank",
        className: "bg-zap-veryperi font-bold text-lg px-4 py-2 rounded",
      },
      "Adquira sua licen\xE7a clicando aqui"
    )
  );
}
function Ag() {
  const { selectedTrigger: e } = oe(),
    { isPremium: t } = lo();
  return l.createElement(
    l.Fragment,
    null,
    l.createElement(xt, { fill: $("triggers"), itemType: "triggers" }),
    !e && l.createElement(yt, null, l.createElement(wg, null)),
    !!t && !!e && l.createElement(eo, null, l.createElement(Cg, null)),
    !t && !!e && l.createElement(eo, null, l.createElement(Sg, null))
  );
}
const De = {
  mensagens: "/dashboard/mensagens",
  audios: "/dashboard/audios",
  medias: "/dashboard/medias",
  docs: "/dashboard/docs",
  funis: "/dashboard/funis",
  triggers: "/dashboard/triggers",
};
function Og() {
  const e = fm;
  return l.createElement(
    Cl,
    null,
    l.createElement(Me, { path: "/", element: l.createElement(e, null) }),
    l.createElement(
      Me,
      { path: "/dashboard", element: l.createElement(hg, null) },
      l.createElement(Me, { index: !0, element: l.createElement(yg, null) }),
      l.createElement(Me, {
        path: De.audios,
        element: l.createElement(Jf, null),
      }),
      l.createElement(Me, {
        path: De.medias,
        element: l.createElement(bm, null),
      }),
      l.createElement(Me, {
        path: De.docs,
        element: l.createElement(wm, null),
      }),
      l.createElement(Me, {
        path: De.mensagens,
        element: l.createElement(Am, null),
      }),
      l.createElement(Me, {
        path: De.funis,
        element: l.createElement(sm, null),
      }),
      l.createElement(Me, {
        path: De.triggers,
        element: l.createElement(Ag, null),
      })
    )
  );
}
function Pg() {
  const { isDarkTheme: e } = ye();
  return l.createElement(
    Sl,
    null,
    l.createElement(
      Al,
      null,
      l.createElement(fl, {
        theme: e ? "dark" : "light",
        hideProgressBar: !1,
        newestOnTop: !1,
        closeOnClick: !0,
        rtl: !1,
        pauseOnFocusLoss: !1,
        draggable: !0,
        pauseOnHover: !0,
        position: "top-center",
        autoClose: 2e3,
      }),
      l.createElement(ml, null),
      l.createElement(gl, { isDarkTheme: e }),
      l.createElement(Kf, null),
      l.createElement(Og, null)
    )
  );
}
Ir.setAppElement("#root");
vl.createRoot(document.getElementById("root")).render(
  l.createElement(
    l.StrictMode,
    null,
    l.createElement(
      Ol,
      null,
      l.createElement(
        Pl,
        null,
        l.createElement(Bl, null, l.createElement(Pg, null))
      )
    )
  )
);
