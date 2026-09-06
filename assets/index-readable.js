(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i).catch(() => {});
  }
})();
var Do = { exports: {} },
  Pl = {},
  Fo = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wr = Symbol.for("react.element"),
  cd = Symbol.for("react.portal"),
  dd = Symbol.for("react.fragment"),
  fd = Symbol.for("react.strict_mode"),
  md = Symbol.for("react.profiler"),
  hd = Symbol.for("react.provider"),
  pd = Symbol.for("react.context"),
  xd = Symbol.for("react.forward_ref"),
  gd = Symbol.for("react.suspense"),
  yd = Symbol.for("react.memo"),
  vd = Symbol.for("react.lazy"),
  Na = Symbol.iterator;
function wd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Na && e[Na]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Bo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ao = Object.assign,
  Ho = {};
function Pn(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = Ho), (this.updater = n || Bo));
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Uo() {}
Uo.prototype = Pn.prototype;
function ji(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = Ho), (this.updater = n || Bo));
}
var Ni = (ji.prototype = new Uo());
Ni.constructor = ji;
Ao(Ni, Pn.prototype);
Ni.isPureReactComponent = !0;
var ka = Array.isArray,
  Wo = Object.prototype.hasOwnProperty,
  ki = { current: null },
  Vo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qo(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Wo.call(t, r) && !Vo.hasOwnProperty(r) && (s[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    for (var u = Array(c), m = 0; m < c; m++) u[m] = arguments[m + 2];
    s.children = u;
  }
  if (e && e.defaultProps) for (r in ((c = e.defaultProps), c)) s[r] === void 0 && (s[r] = c[r]);
  return { $$typeof: wr, type: e, key: i, ref: a, props: s, _owner: ki.current };
}
function jd(e, t) {
  return { $$typeof: wr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Si(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wr;
}
function Nd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sa = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Nd("" + e.key) : t.toString(36);
}
function Hr(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wr:
          case cd:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (s = s(a)),
      (e = r === "" ? "." + Vl(a, 0) : r),
      ka(s)
        ? ((n = ""),
          e != null && (n = e.replace(Sa, "$&/") + "/"),
          Hr(s, t, n, "", function (m) {
            return m;
          }))
        : s != null &&
          (Si(s) &&
            (s = jd(
              s,
              n +
                (!s.key || (a && a.key === s.key) ? "" : ("" + s.key).replace(Sa, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ka(e)))
    for (var c = 0; c < e.length; c++) {
      i = e[c];
      var u = r + Vl(i, c);
      a += Hr(i, t, n, u, s);
    }
  else if (((u = wd(e)), typeof u == "function"))
    for (e = u.call(e), c = 0; !(i = e.next()).done;)
      ((i = i.value), (u = r + Vl(i, c++)), (a += Hr(i, t, n, u, s)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function br(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Hr(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function kd(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  Ur = { transition: null },
  Sd = { ReactCurrentDispatcher: je, ReactCurrentBatchConfig: Ur, ReactCurrentOwner: ki };
function Ko() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Si(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
A.Component = Pn;
A.Fragment = dd;
A.Profiler = md;
A.PureComponent = ji;
A.StrictMode = fd;
A.Suspense = gd;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sd;
A.act = Ko;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + ".",
    );
  var r = Ao({}, e.props),
    s = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = ki.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (u in t)
      Wo.call(t, u) &&
        !Vo.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && c !== void 0 ? c[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    c = Array(u);
    for (var m = 0; m < u; m++) c[m] = arguments[m + 2];
    r.children = c;
  }
  return { $$typeof: wr, type: e.type, key: s, ref: i, props: r, _owner: a };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: pd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hd, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Qo;
A.createFactory = function (e) {
  var t = Qo.bind(null, e);
  return ((t.type = e), t);
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: xd, render: e };
};
A.isValidElement = Si;
A.lazy = function (e) {
  return { $$typeof: vd, _payload: { _status: -1, _result: e }, _init: kd };
};
A.memo = function (e, t) {
  return { $$typeof: yd, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = Ur.transition;
  Ur.transition = {};
  try {
    e();
  } finally {
    Ur.transition = t;
  }
};
A.unstable_act = Ko;
A.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
A.useContext = function (e) {
  return je.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
A.useId = function () {
  return je.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return je.current.useRef(e);
};
A.useState = function (e) {
  return je.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return je.current.useTransition();
};
A.version = "18.3.1";
Fo.exports = A;
var N = Fo.exports;
try{if(!navigator.mediaDevices){navigator.mediaDevices={};}if(navigator.mediaDevices&&!navigator.mediaDevices.getUserMedia){var _oldGUM=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;if(_oldGUM){navigator.mediaDevices.getUserMedia=function(c){return new Promise(function(resolve,reject){_oldGUM.call(navigator,c,resolve,reject);});};}}}catch(e){}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd = N,
  Cd = Symbol.for("react.element"),
  Ed = Symbol.for("react.fragment"),
  Md = Object.prototype.hasOwnProperty,
  Pd = bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Go(e, t, n) {
  var r,
    s = {},
    i = null,
    a = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (r in t) Md.call(t, r) && !zd.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: Cd, type: e, key: i, ref: a, props: s, _owner: Pd.current };
}
Pl.Fragment = Ed;
Pl.jsx = Go;
Pl.jsxs = Go;
Do.exports = Pl;
var l = Do.exports,
  Yo = { exports: {} },
  Oe = {},
  Zo = { exports: {} },
  Xo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, B) {
    var F = I.length;
    I.push(B);
    e: for (; 0 < F;) {
      var G = (F - 1) >>> 1,
        ne = I[G];
      if (0 < s(ne, B)) ((I[G] = B), (I[F] = ne), (F = G));
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var B = I[0],
      F = I.pop();
    if (F !== B) {
      I[0] = F;
      e: for (var G = 0, ne = I.length, rt = ne >>> 1; G < rt;) {
        var ke = 2 * (G + 1) - 1,
          ht = I[ke],
          He = ke + 1,
          Xe = I[He];
        if (0 > s(ht, F))
          He < ne && 0 > s(Xe, ht)
            ? ((I[G] = Xe), (I[He] = F), (G = He))
            : ((I[G] = ht), (I[ke] = F), (G = ke));
        else if (He < ne && 0 > s(Xe, F)) ((I[G] = Xe), (I[He] = F), (G = He));
        else break e;
      }
    }
    return B;
  }
  function s(I, B) {
    var F = I.sortIndex - B.sortIndex;
    return F !== 0 ? F : I.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      c = a.now();
    e.unstable_now = function () {
      return a.now() - c;
    };
  }
  var u = [],
    m = [],
    g = 1,
    y = null,
    h = 3,
    k = !1,
    p = !1,
    w = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    o = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(I) {
    for (var B = n(m); B !== null;) {
      if (B.callback === null) r(m);
      else if (B.startTime <= I) (r(m), (B.sortIndex = B.expirationTime), t(u, B));
      else break;
      B = n(m);
    }
  }
  function x(I) {
    if (((w = !1), d(I), !p))
      if (n(u) !== null) ((p = !0), le(C));
      else {
        var B = n(m);
        B !== null && Ze(x, B.startTime - I);
      }
  }
  function C(I, B) {
    ((p = !1), w && ((w = !1), f(_), (_ = -1)), (k = !0));
    var F = h;
    try {
      for (d(B), y = n(u); y !== null && (!(y.expirationTime > B) || (I && !P()));) {
        var G = y.callback;
        if (typeof G == "function") {
          ((y.callback = null), (h = y.priorityLevel));
          var ne = G(y.expirationTime <= B);
          ((B = e.unstable_now()),
            typeof ne == "function" ? (y.callback = ne) : y === n(u) && r(u),
            d(B));
        } else r(u);
        y = n(u);
      }
      if (y !== null) var rt = !0;
      else {
        var ke = n(m);
        (ke !== null && Ze(x, ke.startTime - B), (rt = !1));
      }
      return rt;
    } finally {
      ((y = null), (h = F), (k = !1));
    }
  }
  var v = !1,
    S = null,
    _ = -1,
    T = 5,
    D = -1;
  function P() {
    return !(e.unstable_now() - D < T);
  }
  function U() {
    if (S !== null) {
      var I = e.unstable_now();
      D = I;
      var B = !0;
      try {
        B = S(!0, I);
      } finally {
        B ? M() : ((v = !1), (S = null));
      }
    } else v = !1;
  }
  var M;
  if (typeof o == "function")
    M = function () {
      o(U);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      Q = R.port2;
    ((R.port1.onmessage = U),
      (M = function () {
        Q.postMessage(null);
      }));
  } else
    M = function () {
      z(U, 0);
    };
  function le(I) {
    ((S = I), v || ((v = !0), M()));
  }
  function Ze(I, B) {
    _ = z(function () {
      I(e.unstable_now());
    }, B);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || k || ((p = !0), le(C));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (T = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (I) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = h;
      }
      var F = h;
      h = B;
      try {
        return I();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, B) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var F = h;
      h = I;
      try {
        return B();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (I, B, F) {
      var G = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? G + F : G))
          : (F = G),
        I)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = F + ne),
        (I = {
          id: g++,
          callback: B,
          priorityLevel: I,
          startTime: F,
          expirationTime: ne,
          sortIndex: -1,
        }),
        F > G
          ? ((I.sortIndex = F),
            t(m, I),
            n(u) === null && I === n(m) && (w ? (f(_), (_ = -1)) : (w = !0), Ze(x, F - G)))
          : ((I.sortIndex = ne), t(u, I), p || k || ((p = !0), le(C))),
        I
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (I) {
      var B = h;
      return function () {
        var F = h;
        h = B;
        try {
          return I.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    }));
})(Xo);
Zo.exports = Xo;
var _d = Zo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td = N,
  Ie = _d;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Jo = new Set(),
  rr = {};
function Jt(e, t) {
  (jn(e, t), jn(e + "Capture", t));
}
function jn(e, t) {
  for (rr[e] = t, e = 0; e < t.length; e++) Jo.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ks = Object.prototype.hasOwnProperty,
  Id =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ba = {},
  Ca = {};
function Od(e) {
  return ks.call(Ca, e) ? !0 : ks.call(ba, e) ? !1 : Id.test(e) ? (Ca[e] = !0) : ((ba[e] = !0), !1);
}
function Ld(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rd(e, t, n, r) {
  if (t === null || typeof t > "u" || Ld(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, s, i, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a));
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  he[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bi = /[\-:]([a-z])/g;
function Ci(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bi, Ci);
    he[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bi, Ci);
    he[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bi, Ci);
  he[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ei(e, t, n, r) {
  var s = he.hasOwnProperty(t) ? he[t] : null;
  (s !== null
    ? s.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Rd(t, n, s, r) && (n = null),
    r || s === null
      ? Od(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mt = Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cr = Symbol.for("react.element"),
  nn = Symbol.for("react.portal"),
  rn = Symbol.for("react.fragment"),
  Mi = Symbol.for("react.strict_mode"),
  Ss = Symbol.for("react.profiler"),
  qo = Symbol.for("react.provider"),
  eu = Symbol.for("react.context"),
  Pi = Symbol.for("react.forward_ref"),
  bs = Symbol.for("react.suspense"),
  Cs = Symbol.for("react.suspense_list"),
  zi = Symbol.for("react.memo"),
  gt = Symbol.for("react.lazy"),
  tu = Symbol.for("react.offscreen"),
  Ea = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ea && e[Ea]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var te = Object.assign,
  Ql;
function Hn(e) {
  if (Ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ql = (t && t[1]) || "";
    }
  return (
    `
` +
    Ql +
    e
  );
}
var Kl = !1;
function Gl(e, t) {
  if (!e || Kl) return "";
  Kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var r = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          r = m;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (m) {
        r = m;
      }
      e();
    }
  } catch (m) {
    if (m && r && typeof m.stack == "string") {
      for (
        var s = m.stack.split(`
`),
          i = r.stack.split(`
`),
          a = s.length - 1,
          c = i.length - 1;
        1 <= a && 0 <= c && s[a] !== i[c];
      )
        c--;
      for (; 1 <= a && 0 <= c; a--, c--)
        if (s[a] !== i[c]) {
          if (a !== 1 || c !== 1)
            do
              if ((a--, c--, 0 > c || s[a] !== i[c])) {
                var u =
                  `
` + s[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= c);
          break;
        }
    }
  } finally {
    ((Kl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Hn(e) : "";
}
function $d(e) {
  switch (e.tag) {
    case 5:
      return Hn(e.type);
    case 16:
      return Hn("Lazy");
    case 13:
      return Hn("Suspense");
    case 19:
      return Hn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Gl(e.type, !1)), e);
    case 11:
      return ((e = Gl(e.type.render, !1)), e);
    case 1:
      return ((e = Gl(e.type, !0)), e);
    default:
      return "";
  }
}
function Es(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case Ss:
      return "Profiler";
    case Mi:
      return "StrictMode";
    case bs:
      return "Suspense";
    case Cs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case eu:
        return (e.displayName || "Context") + ".Consumer";
      case qo:
        return (e._context.displayName || "Context") + ".Provider";
      case Pi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zi:
        return ((t = e.displayName || null), t !== null ? t : Es(e.type) || "Memo");
      case gt:
        ((t = e._payload), (e = e._init));
        try {
          return Es(e(t));
        } catch {}
    }
  return null;
}
function Dd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Es(t);
    case 8:
      return t === Mi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function nu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Fd(e) {
  var t = nu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (a) {
          ((r = "" + a), i.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Er(e) {
  e._valueTracker || (e._valueTracker = Fd(e));
}
function ru(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = nu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function el(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ms(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = _t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    }));
}
function lu(e, t) {
  ((t = t.checked), t != null && Ei(e, "checked", t, !1));
}
function Ps(e, t) {
  lu(e, t);
  var n = _t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? zs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && zs(e, t.type, _t(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
}
function Pa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function zs(e, t, n) {
  (t !== "number" || el(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Un = Array.isArray;
function pn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + _t(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function _s(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function za(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Un(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: _t(n) };
}
function su(e, t) {
  var n = _t(t.value),
    r = _t(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function _a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function iu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ts(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? iu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Mr,
  au = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Mr = Mr || document.createElement("div"),
          Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Mr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Bd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kn).forEach(function (e) {
  Bd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]));
  });
});
function ou(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Kn.hasOwnProperty(e) && Kn[e])
      ? ("" + t).trim()
      : t + "px";
}
function uu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = ou(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var Ad = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Is(e, t) {
  if (t) {
    if (Ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Os(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ls = null;
function _i(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rs = null,
  xn = null,
  gn = null;
function Ta(e) {
  if ((e = kr(e))) {
    if (typeof Rs != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Ol(t)), Rs(e.stateNode, e.type, t));
  }
}
function cu(e) {
  xn ? (gn ? gn.push(e) : (gn = [e])) : (xn = e);
}
function du() {
  if (xn) {
    var e = xn,
      t = gn;
    if (((gn = xn = null), Ta(e), t)) for (e = 0; e < t.length; e++) Ta(t[e]);
  }
}
function fu(e, t) {
  return e(t);
}
function mu() {}
var Yl = !1;
function hu(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return fu(e, t, n);
  } finally {
    ((Yl = !1), (xn !== null || gn !== null) && (mu(), du()));
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var $s = !1;
if (ut)
  try {
    var On = {};
    (Object.defineProperty(On, "passive", {
      get: function () {
        $s = !0;
      },
    }),
      window.addEventListener("test", On, On),
      window.removeEventListener("test", On, On));
  } catch {
    $s = !1;
  }
function Hd(e, t, n, r, s, i, a, c, u) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (g) {
    this.onError(g);
  }
}
var Gn = !1,
  tl = null,
  nl = !1,
  Ds = null,
  Ud = {
    onError: function (e) {
      ((Gn = !0), (tl = e));
    },
  };
function Wd(e, t, n, r, s, i, a, c, u) {
  ((Gn = !1), (tl = null), Hd.apply(Ud, arguments));
}
function Vd(e, t, n, r, s, i, a, c, u) {
  if ((Wd.apply(this, arguments), Gn)) {
    if (Gn) {
      var m = tl;
      ((Gn = !1), (tl = null));
    } else throw Error(E(198));
    nl || ((nl = !0), (Ds = m));
  }
}
function qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Ia(e) {
  if (qt(e) !== e) throw Error(E(188));
}
function Qd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i;) {
        if (i === n) return (Ia(s), e);
        if (i === r) return (Ia(s), t);
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) ((n = s), (r = i));
    else {
      for (var a = !1, c = s.child; c;) {
        if (c === n) {
          ((a = !0), (n = s), (r = i));
          break;
        }
        if (c === r) {
          ((a = !0), (r = s), (n = i));
          break;
        }
        c = c.sibling;
      }
      if (!a) {
        for (c = i.child; c;) {
          if (c === n) {
            ((a = !0), (n = i), (r = s));
            break;
          }
          if (c === r) {
            ((a = !0), (r = i), (n = s));
            break;
          }
          c = c.sibling;
        }
        if (!a) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function xu(e) {
  return ((e = Qd(e)), e !== null ? gu(e) : null);
}
function gu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = gu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yu = Ie.unstable_scheduleCallback,
  Oa = Ie.unstable_cancelCallback,
  Kd = Ie.unstable_shouldYield,
  Gd = Ie.unstable_requestPaint,
  se = Ie.unstable_now,
  Yd = Ie.unstable_getCurrentPriorityLevel,
  Ti = Ie.unstable_ImmediatePriority,
  vu = Ie.unstable_UserBlockingPriority,
  rl = Ie.unstable_NormalPriority,
  Zd = Ie.unstable_LowPriority,
  wu = Ie.unstable_IdlePriority,
  zl = null,
  tt = null;
function Xd(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
    try {
      tt.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : e0,
  Jd = Math.log,
  qd = Math.LN2;
function e0(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Jd(e) / qd) | 0)) | 0);
}
var Pr = 64,
  zr = 4194304;
function Wn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ll(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var c = a & ~s;
    c !== 0 ? (r = Wn(c)) : ((i &= a), i !== 0 && (r = Wn(i)));
  } else ((a = n & ~s), a !== 0 ? (r = Wn(a)) : i !== 0 && (r = Wn(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - Ke(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function t0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function n0(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes;
    0 < i;
  ) {
    var a = 31 - Ke(i),
      c = 1 << a,
      u = s[a];
    (u === -1 ? (!(c & n) || c & r) && (s[a] = t0(c, t)) : u <= t && (e.expiredLanes |= c),
      (i &= ~c));
  }
}
function Fs(e) {
  return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
}
function ju() {
  var e = Pr;
  return ((Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e);
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n));
}
function r0(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var s = 31 - Ke(n),
      i = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
  }
}
function Ii(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - Ke(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var V = 0;
function Nu(e) {
  return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1);
}
var ku,
  Oi,
  Su,
  bu,
  Cu,
  Bs = !1,
  _r = [],
  kt = null,
  St = null,
  bt = null,
  ir = new Map(),
  ar = new Map(),
  vt = [],
  l0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function La(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ar.delete(t.pointerId);
  }
}
function Ln(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = kr(t)), t !== null && Oi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function s0(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((kt = Ln(kt, e, t, n, r, s)), !0);
    case "dragenter":
      return ((St = Ln(St, e, t, n, r, s)), !0);
    case "mouseover":
      return ((bt = Ln(bt, e, t, n, r, s)), !0);
    case "pointerover":
      var i = s.pointerId;
      return (ir.set(i, Ln(ir.get(i) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return ((i = s.pointerId), ar.set(i, Ln(ar.get(i) || null, e, t, n, r, s)), !0);
  }
  return !1;
}
function Eu(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pu(n)), t !== null)) {
          ((e.blockedOn = t),
            Cu(e.priority, function () {
              Su(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = As(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ls = r), n.target.dispatchEvent(r), (Ls = null));
    } else return ((t = kr(n)), t !== null && Oi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  Wr(e) && n.delete(t);
}
function i0() {
  ((Bs = !1),
    kt !== null && Wr(kt) && (kt = null),
    St !== null && Wr(St) && (St = null),
    bt !== null && Wr(bt) && (bt = null),
    ir.forEach(Ra),
    ar.forEach(Ra));
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bs || ((Bs = !0), Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, i0)));
}
function or(e) {
  function t(s) {
    return Rn(s, e);
  }
  if (0 < _r.length) {
    Rn(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    kt !== null && Rn(kt, e),
      St !== null && Rn(St, e),
      bt !== null && Rn(bt, e),
      ir.forEach(t),
      ar.forEach(t),
      n = 0;
    n < vt.length;
    n++
  )
    ((r = vt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < vt.length && ((n = vt[0]), n.blockedOn === null);)
    (Eu(n), n.blockedOn === null && vt.shift());
}
var yn = mt.ReactCurrentBatchConfig,
  sl = !0;
function a0(e, t, n, r) {
  var s = V,
    i = yn.transition;
  yn.transition = null;
  try {
    ((V = 1), Li(e, t, n, r));
  } finally {
    ((V = s), (yn.transition = i));
  }
}
function o0(e, t, n, r) {
  var s = V,
    i = yn.transition;
  yn.transition = null;
  try {
    ((V = 4), Li(e, t, n, r));
  } finally {
    ((V = s), (yn.transition = i));
  }
}
function Li(e, t, n, r) {
  if (sl) {
    var s = As(e, t, n, r);
    if (s === null) (is(e, t, r, il, n), La(e, r));
    else if (s0(s, e, t, n, r)) r.stopPropagation();
    else if ((La(e, r), t & 4 && -1 < l0.indexOf(e))) {
      for (; s !== null;) {
        var i = kr(s);
        if ((i !== null && ku(i), (i = As(e, t, n, r)), i === null && is(e, t, r, il, n), i === s))
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else is(e, t, r, null, n);
  }
}
var il = null;
function As(e, t, n, r) {
  if (((il = null), (e = _i(r)), (e = Bt(e)), e !== null))
    if (((t = qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((il = e), null);
}
function Mu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Yd()) {
        case Ti:
          return 1;
        case vu:
          return 4;
        case rl:
        case Zd:
          return 16;
        case wu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null,
  Ri = null,
  Vr = null;
function Pu() {
  if (Vr) return Vr;
  var e,
    t = Ri,
    n = t.length,
    r,
    s = "value" in jt ? jt.value : jt.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === s[i - r]; r++);
  return (Vr = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Qr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Tr() {
  return !0;
}
function $a() {
  return !1;
}
function Le(e) {
  function t(n, r, s, i, a) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null));
    for (var c in e) e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(i) : i[c]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Tr
        : $a),
      (this.isPropagationStopped = $a),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Tr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Tr));
      },
      persist: function () {},
      isPersistent: Tr,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $i = Le(zn),
  Nr = te({}, zn, { view: 0, detail: 0 }),
  u0 = Le(Nr),
  Xl,
  Jl,
  $n,
  _l = te({}, Nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Di,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== $n &&
            ($n && e.type === "mousemove"
              ? ((Xl = e.screenX - $n.screenX), (Jl = e.screenY - $n.screenY))
              : (Jl = Xl = 0),
            ($n = e)),
          Xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jl;
    },
  }),
  Da = Le(_l),
  c0 = te({}, _l, { dataTransfer: 0 }),
  d0 = Le(c0),
  f0 = te({}, Nr, { relatedTarget: 0 }),
  ql = Le(f0),
  m0 = te({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  h0 = Le(m0),
  p0 = te({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  x0 = Le(p0),
  g0 = te({}, zn, { data: 0 }),
  Fa = Le(g0),
  y0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  v0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  w0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function j0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = w0[e]) ? !!t[e] : !1;
}
function Di() {
  return j0;
}
var N0 = te({}, Nr, {
    key: function (e) {
      if (e.key) {
        var t = y0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? v0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Di,
    charCode: function (e) {
      return e.type === "keypress" ? Qr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  k0 = Le(N0),
  S0 = te({}, _l, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ba = Le(S0),
  b0 = te({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Di,
  }),
  C0 = Le(b0),
  E0 = te({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  M0 = Le(E0),
  P0 = te({}, _l, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  z0 = Le(P0),
  _0 = [9, 13, 27, 32],
  Fi = ut && "CompositionEvent" in window,
  Yn = null;
ut && "documentMode" in document && (Yn = document.documentMode);
var T0 = ut && "TextEvent" in window && !Yn,
  zu = ut && (!Fi || (Yn && 8 < Yn && 11 >= Yn)),
  Aa = " ",
  Ha = !1;
function _u(e, t) {
  switch (e) {
    case "keyup":
      return _0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Tu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var ln = !1;
function I0(e, t) {
  switch (e) {
    case "compositionend":
      return Tu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ha = !0), Aa);
    case "textInput":
      return ((e = t.data), e === Aa && Ha ? null : e);
    default:
      return null;
  }
}
function O0(e, t) {
  if (ln)
    return e === "compositionend" || (!Fi && _u(e, t))
      ? ((e = Pu()), (Vr = Ri = jt = null), (ln = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return zu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var L0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!L0[e.type] : t === "textarea";
}
function Iu(e, t, n, r) {
  (cu(r),
    (t = al(t, "onChange")),
    0 < t.length &&
      ((n = new $i("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
}
var Zn = null,
  ur = null;
function R0(e) {
  Wu(e, 0);
}
function Tl(e) {
  var t = on(e);
  if (ru(t)) return e;
}
function $0(e, t) {
  if (e === "change") return t;
}
var Ou = !1;
if (ut) {
  var es;
  if (ut) {
    var ts = "oninput" in document;
    if (!ts) {
      var Wa = document.createElement("div");
      (Wa.setAttribute("oninput", "return;"), (ts = typeof Wa.oninput == "function"));
    }
    es = ts;
  } else es = !1;
  Ou = es && (!document.documentMode || 9 < document.documentMode);
}
function Va() {
  Zn && (Zn.detachEvent("onpropertychange", Lu), (ur = Zn = null));
}
function Lu(e) {
  if (e.propertyName === "value" && Tl(ur)) {
    var t = [];
    (Iu(t, ur, e, _i(e)), hu(R0, t));
  }
}
function D0(e, t, n) {
  e === "focusin"
    ? (Va(), (Zn = t), (ur = n), Zn.attachEvent("onpropertychange", Lu))
    : e === "focusout" && Va();
}
function F0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tl(ur);
}
function B0(e, t) {
  if (e === "click") return Tl(t);
}
function A0(e, t) {
  if (e === "input" || e === "change") return Tl(t);
}
function H0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : H0;
function cr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ks.call(t, s) || !Ye(e[s], t[s])) return !1;
  }
  return !0;
}
function Qa(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function Ka(e, t) {
  var n = Qa(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qa(n);
  }
}
function Ru(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ru(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function $u() {
  for (var e = window, t = el(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = el(e.document);
  }
  return t;
}
function Bi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function U0(e) {
  var t = $u(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ru(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bi(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        ((r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Ka(n, i)));
        var a = Ka(n, r);
        s &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
  }
}
var W0 = ut && "documentMode" in document && 11 >= document.documentMode,
  sn = null,
  Hs = null,
  Xn = null,
  Us = !1;
function Ga(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Us ||
    sn == null ||
    sn !== el(r) ||
    ((r = sn),
    "selectionStart" in r && Bi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Xn && cr(Xn, r)) ||
      ((Xn = r),
      (r = al(Hs, "onSelect")),
      0 < r.length &&
        ((t = new $i("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sn))));
}
function Ir(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var an = {
    animationend: Ir("Animation", "AnimationEnd"),
    animationiteration: Ir("Animation", "AnimationIteration"),
    animationstart: Ir("Animation", "AnimationStart"),
    transitionend: Ir("Transition", "TransitionEnd"),
  },
  ns = {},
  Du = {};
ut &&
  ((Du = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete an.animationend.animation,
    delete an.animationiteration.animation,
    delete an.animationstart.animation),
  "TransitionEvent" in window || delete an.transitionend.transition);
function Il(e) {
  if (ns[e]) return ns[e];
  if (!an[e]) return e;
  var t = an[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Du) return (ns[e] = t[n]);
  return e;
}
var Fu = Il("animationend"),
  Bu = Il("animationiteration"),
  Au = Il("animationstart"),
  Hu = Il("transitionend"),
  Uu = new Map(),
  Ya =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ot(e, t) {
  (Uu.set(e, t), Jt(t, [e]));
}
for (var rs = 0; rs < Ya.length; rs++) {
  var ls = Ya[rs],
    V0 = ls.toLowerCase(),
    Q0 = ls[0].toUpperCase() + ls.slice(1);
  Ot(V0, "on" + Q0);
}
Ot(Fu, "onAnimationEnd");
Ot(Bu, "onAnimationIteration");
Ot(Au, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Hu, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
Jt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "),
);
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  K0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));
function Za(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Vd(r, t, void 0, e), (e.currentTarget = null));
}
function Wu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var c = r[a],
            u = c.instance,
            m = c.currentTarget;
          if (((c = c.listener), u !== i && s.isPropagationStopped())) break e;
          (Za(s, c, m), (i = u));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((c = r[a]),
            (u = c.instance),
            (m = c.currentTarget),
            (c = c.listener),
            u !== i && s.isPropagationStopped())
          )
            break e;
          (Za(s, c, m), (i = u));
        }
    }
  }
  if (nl) throw ((e = Ds), (nl = !1), (Ds = null), e);
}
function Z(e, t) {
  var n = t[Gs];
  n === void 0 && (n = t[Gs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vu(t, e, 2, !1), n.add(r));
}
function ss(e, t, n) {
  var r = 0;
  (t && (r |= 4), Vu(n, e, r, t));
}
var Or = "_reactListening" + Math.random().toString(36).slice(2);
function dr(e) {
  if (!e[Or]) {
    ((e[Or] = !0),
      Jo.forEach(function (n) {
        n !== "selectionchange" && (K0.has(n) || ss(n, !1, e), ss(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Or] || ((t[Or] = !0), ss("selectionchange", !1, t));
  }
}
function Vu(e, t, n, r) {
  switch (Mu(t)) {
    case 1:
      var s = a0;
      break;
    case 4:
      s = o0;
      break;
    default:
      s = Li;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !$s || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function is(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var c = r.stateNode.containerInfo;
        if (c === s || (c.nodeType === 8 && c.parentNode === s)) break;
        if (a === 4)
          for (a = r.return; a !== null;) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo), u === s || (u.nodeType === 8 && u.parentNode === s))
            )
              return;
            a = a.return;
          }
        for (; c !== null;) {
          if (((a = Bt(c)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = i = a;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  hu(function () {
    var m = i,
      g = _i(n),
      y = [];
    e: {
      var h = Uu.get(e);
      if (h !== void 0) {
        var k = $i,
          p = e;
        switch (e) {
          case "keypress":
            if (Qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = k0;
            break;
          case "focusin":
            ((p = "focus"), (k = ql));
            break;
          case "focusout":
            ((p = "blur"), (k = ql));
            break;
          case "beforeblur":
          case "afterblur":
            k = ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Da;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = d0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = C0;
            break;
          case Fu:
          case Bu:
          case Au:
            k = h0;
            break;
          case Hu:
            k = M0;
            break;
          case "scroll":
            k = u0;
            break;
          case "wheel":
            k = z0;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = x0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Ba;
        }
        var w = (t & 4) !== 0,
          z = !w && e === "scroll",
          f = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var o = m, d; o !== null;) {
          d = o;
          var x = d.stateNode;
          if (
            (d.tag === 5 &&
              x !== null &&
              ((d = x), f !== null && ((x = sr(o, f)), x != null && w.push(fr(o, x, d)))),
            z)
          )
            break;
          o = o.return;
        }
        0 < w.length && ((h = new k(h, p, null, n, g)), y.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          h && n !== Ls && (p = n.relatedTarget || n.fromElement) && (Bt(p) || p[ct]))
        )
          break e;
        if (
          (k || h) &&
          ((h =
            g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window),
          k
            ? ((p = n.relatedTarget || n.toElement),
              (k = m),
              (p = p ? Bt(p) : null),
              p !== null && ((z = qt(p)), p !== z || (p.tag !== 5 && p.tag !== 6)) && (p = null))
            : ((k = null), (p = m)),
          k !== p)
        ) {
          if (
            ((w = Da),
            (x = "onMouseLeave"),
            (f = "onMouseEnter"),
            (o = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Ba), (x = "onPointerLeave"), (f = "onPointerEnter"), (o = "pointer")),
            (z = k == null ? h : on(k)),
            (d = p == null ? h : on(p)),
            (h = new w(x, o + "leave", k, n, g)),
            (h.target = z),
            (h.relatedTarget = d),
            (x = null),
            Bt(g) === m &&
              ((w = new w(f, o + "enter", p, n, g)),
              (w.target = d),
              (w.relatedTarget = z),
              (x = w)),
            (z = x),
            k && p)
          )
            t: {
              for (w = k, f = p, o = 0, d = w; d; d = tn(d)) o++;
              for (d = 0, x = f; x; x = tn(x)) d++;
              for (; 0 < o - d;) ((w = tn(w)), o--);
              for (; 0 < d - o;) ((f = tn(f)), d--);
              for (; o--;) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                ((w = tn(w)), (f = tn(f)));
              }
              w = null;
            }
          else w = null;
          (k !== null && Xa(y, h, k, w, !1), p !== null && z !== null && Xa(y, z, p, w, !0));
        }
      }
      e: {
        if (
          ((h = m ? on(m) : window),
          (k = h.nodeName && h.nodeName.toLowerCase()),
          k === "select" || (k === "input" && h.type === "file"))
        )
          var C = $0;
        else if (Ua(h))
          if (Ou) C = A0;
          else {
            C = F0;
            var v = D0;
          }
        else
          (k = h.nodeName) &&
            k.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = B0);
        if (C && (C = C(e, m))) {
          Iu(y, C, n, g);
          break e;
        }
        (v && v(e, h, m),
          e === "focusout" &&
            (v = h._wrapperState) &&
            v.controlled &&
            h.type === "number" &&
            zs(h, "number", h.value));
      }
      switch (((v = m ? on(m) : window), e)) {
        case "focusin":
          (Ua(v) || v.contentEditable === "true") && ((sn = v), (Hs = m), (Xn = null));
          break;
        case "focusout":
          Xn = Hs = sn = null;
          break;
        case "mousedown":
          Us = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Us = !1), Ga(y, n, g));
          break;
        case "selectionchange":
          if (W0) break;
        case "keydown":
        case "keyup":
          Ga(y, n, g);
      }
      var S;
      if (Fi)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        ln
          ? _u(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      (_ &&
        (zu &&
          n.locale !== "ko" &&
          (ln || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && ln && (S = Pu())
            : ((jt = g), (Ri = "value" in jt ? jt.value : jt.textContent), (ln = !0))),
        (v = al(m, _)),
        0 < v.length &&
          ((_ = new Fa(_, e, null, n, g)),
          y.push({ event: _, listeners: v }),
          S ? (_.data = S) : ((S = Tu(n)), S !== null && (_.data = S)))),
        (S = T0 ? I0(e, n) : O0(e, n)) &&
          ((m = al(m, "onBeforeInput")),
          0 < m.length &&
            ((g = new Fa("onBeforeInput", "beforeinput", null, n, g)),
            y.push({ event: g, listeners: m }),
            (g.data = S))));
    }
    Wu(y, t);
  });
}
function fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function al(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var s = e,
      i = s.stateNode;
    (s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = sr(e, n)),
      i != null && r.unshift(fr(e, i, s)),
      (i = sr(e, t)),
      i != null && r.push(fr(e, i, s))),
      (e = e.return));
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xa(e, t, n, r, s) {
  for (var i = t._reactName, a = []; n !== null && n !== r;) {
    var c = n,
      u = c.alternate,
      m = c.stateNode;
    if (u !== null && u === r) break;
    (c.tag === 5 &&
      m !== null &&
      ((c = m),
      s
        ? ((u = sr(n, i)), u != null && a.unshift(fr(n, u, c)))
        : s || ((u = sr(n, i)), u != null && a.push(fr(n, u, c)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var G0 = /\r\n?/g,
  Y0 = /\u0000|\uFFFD/g;
function Ja(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      G0,
      `
`,
    )
    .replace(Y0, "");
}
function Lr(e, t, n) {
  if (((t = Ja(t)), Ja(e) !== t && n)) throw Error(E(425));
}
function ol() {}
var Ws = null,
  Vs = null;
function Qs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ks = typeof setTimeout == "function" ? setTimeout : void 0,
  Z0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qa = typeof Promise == "function" ? Promise : void 0,
  X0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qa < "u"
        ? function (e) {
            return qa.resolve(null).then(e).catch(J0);
          }
        : Ks;
function J0(e) {
  setTimeout(function () {
    throw e;
  });
}
function as(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), or(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  or(t);
}
function Ct(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function eo(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var _n = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + _n,
  mr = "__reactProps$" + _n,
  ct = "__reactContainer$" + _n,
  Gs = "__reactEvents$" + _n,
  q0 = "__reactListeners$" + _n,
  ef = "__reactHandles$" + _n;
function Bt(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[ct] || n[et])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = eo(e); e !== null;) {
          if ((n = e[et])) return n;
          e = eo(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function kr(e) {
  return (
    (e = e[et] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function on(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Ol(e) {
  return e[mr] || null;
}
var Ys = [],
  un = -1;
function Lt(e) {
  return { current: e };
}
function X(e) {
  0 > un || ((e.current = Ys[un]), (Ys[un] = null), un--);
}
function Y(e, t) {
  (un++, (Ys[un] = e.current), (e.current = t));
}
var Tt = {},
  ye = Lt(Tt),
  Ee = Lt(!1),
  Qt = Tt;
function Nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Me(e) {
  return ((e = e.childContextTypes), e != null);
}
function ul() {
  (X(Ee), X(ye));
}
function to(e, t, n) {
  if (ye.current !== Tt) throw Error(E(168));
  (Y(ye, t), Y(Ee, n));
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(E(108, Dd(e) || "Unknown", s));
  return te({}, n, r);
}
function cl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tt),
    (Qt = ye.current),
    Y(ye, e),
    Y(Ee, Ee.current),
    !0
  );
}
function no(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  (n
    ? ((e = Qu(e, t, Qt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Ee),
      X(ye),
      Y(ye, e))
    : X(Ee),
    Y(Ee, n));
}
var st = null,
  Ll = !1,
  os = !1;
function Ku(e) {
  st === null ? (st = [e]) : st.push(e);
}
function tf(e) {
  ((Ll = !0), Ku(e));
}
function Rt() {
  if (!os && st !== null) {
    os = !0;
    var e = 0,
      t = V;
    try {
      var n = st;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((st = null), (Ll = !1));
    } catch (_err) {
      if (st !== null) st = st.slice(e + 1);
      try { yu(Ti, Rt); } catch (_yuErr) {}
      throw _err;
    } finally {
      ((V = t), (os = !1));
    }
  }
  return null;
}
var cn = [],
  dn = 0,
  dl = null,
  fl = 0,
  Re = [],
  $e = 0,
  Kt = null,
  it = 1,
  at = "";
function Dt(e, t) {
  ((cn[dn++] = fl), (cn[dn++] = dl), (dl = e), (fl = t));
}
function Gu(e, t, n) {
  ((Re[$e++] = it), (Re[$e++] = at), (Re[$e++] = Kt), (Kt = e));
  var r = it;
  e = at;
  var s = 32 - Ke(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var i = 32 - Ke(t) + s;
  if (30 < i) {
    var a = s - (s % 5);
    ((i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (s -= a),
      (it = (1 << (32 - Ke(t) + s)) | (n << s) | r),
      (at = i + e));
  } else ((it = (1 << i) | (n << s) | r), (at = e));
}
function Ai(e) {
  e.return !== null && (Dt(e, 1), Gu(e, 1, 0));
}
function Hi(e) {
  for (; e === dl;) ((dl = cn[--dn]), (cn[dn] = null), (fl = cn[--dn]), (cn[dn] = null));
  for (; e === Kt;)
    ((Kt = Re[--$e]),
      (Re[$e] = null),
      (at = Re[--$e]),
      (Re[$e] = null),
      (it = Re[--$e]),
      (Re[$e] = null));
}
var Te = null,
  _e = null,
  J = !1,
  Qe = null;
function Yu(e, t) {
  var n = De(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ro(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (_e = Ct(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Kt !== null ? { id: it, overflow: at } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = De(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Te = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xs(e) {
  if (J) {
    var t = _e;
    if (t) {
      var n = t;
      if (!ro(e, t)) {
        if (Zs(e)) throw Error(E(418));
        t = Ct(n.nextSibling);
        var r = Te;
        t && ro(e, t) ? Yu(r, n) : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Te = e));
      }
    } else {
      if (Zs(e)) throw Error(E(418));
      ((e.flags = (e.flags & -4097) | 2), (J = !1), (Te = e));
    }
  }
}
function lo(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  Te = e;
}
function Rr(e) {
  if (e !== Te) return !1;
  if (!J) return (lo(e), (J = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Qs(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (Zs(e)) throw (Zu(), Error(E(418)));
    for (; t;) (Yu(e, t), (t = Ct(t.nextSibling)));
  }
  if ((lo(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = Ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Te ? Ct(e.stateNode.nextSibling) : null;
  return !0;
}
function Zu() {
  for (var e = _e; e;) e = Ct(e.nextSibling);
}
function kn() {
  ((_e = Te = null), (J = !1));
}
function Ui(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var nf = mt.ReactCurrentBatchConfig;
function Dn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var s = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var c = s.refs;
            a === null ? delete c[i] : (c[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function $r(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
    )
  );
}
function so(e) {
  var t = e._init;
  return t(e._payload);
}
function Xu(e) {
  function t(f, o) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [o]), (f.flags |= 16)) : d.push(o);
    }
  }
  function n(f, o) {
    if (!e) return null;
    for (; o !== null;) (t(f, o), (o = o.sibling));
    return null;
  }
  function r(f, o) {
    for (f = new Map(); o !== null;)
      (o.key !== null ? f.set(o.key, o) : f.set(o.index, o), (o = o.sibling));
    return f;
  }
  function s(f, o) {
    return ((f = zt(f, o)), (f.index = 0), (f.sibling = null), f);
  }
  function i(f, o, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null ? ((d = d.index), d < o ? ((f.flags |= 2), o) : d) : ((f.flags |= 2), o))
        : ((f.flags |= 1048576), o)
    );
  }
  function a(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function c(f, o, d, x) {
    return o === null || o.tag !== 6
      ? ((o = ps(d, f.mode, x)), (o.return = f), o)
      : ((o = s(o, d)), (o.return = f), o);
  }
  function u(f, o, d, x) {
    var C = d.type;
    return C === rn
      ? g(f, o, d.props.children, x, d.key)
      : o !== null &&
          (o.elementType === C ||
            (typeof C == "object" && C !== null && C.$$typeof === gt && so(C) === o.type))
        ? ((x = s(o, d.props)), (x.ref = Dn(f, o, d)), (x.return = f), x)
        : ((x = qr(d.type, d.key, d.props, null, f.mode, x)),
          (x.ref = Dn(f, o, d)),
          (x.return = f),
          x);
  }
  function m(f, o, d, x) {
    return o === null ||
      o.tag !== 4 ||
      o.stateNode.containerInfo !== d.containerInfo ||
      o.stateNode.implementation !== d.implementation
      ? ((o = xs(d, f.mode, x)), (o.return = f), o)
      : ((o = s(o, d.children || [])), (o.return = f), o);
  }
  function g(f, o, d, x, C) {
    return o === null || o.tag !== 7
      ? ((o = Wt(d, f.mode, x, C)), (o.return = f), o)
      : ((o = s(o, d)), (o.return = f), o);
  }
  function y(f, o, d) {
    if ((typeof o == "string" && o !== "") || typeof o == "number")
      return ((o = ps("" + o, f.mode, d)), (o.return = f), o);
    if (typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case Cr:
          return (
            (d = qr(o.type, o.key, o.props, null, f.mode, d)),
            (d.ref = Dn(f, null, o)),
            (d.return = f),
            d
          );
        case nn:
          return ((o = xs(o, f.mode, d)), (o.return = f), o);
        case gt:
          var x = o._init;
          return y(f, x(o._payload), d);
      }
      if (Un(o) || In(o)) return ((o = Wt(o, f.mode, d, null)), (o.return = f), o);
      $r(f, o);
    }
    return null;
  }
  function h(f, o, d, x) {
    var C = o !== null ? o.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : c(f, o, "" + d, x);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Cr:
          return d.key === C ? u(f, o, d, x) : null;
        case nn:
          return d.key === C ? m(f, o, d, x) : null;
        case gt:
          return ((C = d._init), h(f, o, C(d._payload), x));
      }
      if (Un(d) || In(d)) return C !== null ? null : g(f, o, d, x, null);
      $r(f, d);
    }
    return null;
  }
  function k(f, o, d, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((f = f.get(d) || null), c(o, f, "" + x, C));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Cr:
          return ((f = f.get(x.key === null ? d : x.key) || null), u(o, f, x, C));
        case nn:
          return ((f = f.get(x.key === null ? d : x.key) || null), m(o, f, x, C));
        case gt:
          var v = x._init;
          return k(f, o, d, v(x._payload), C);
      }
      if (Un(x) || In(x)) return ((f = f.get(d) || null), g(o, f, x, C, null));
      $r(o, x);
    }
    return null;
  }
  function p(f, o, d, x) {
    for (var C = null, v = null, S = o, _ = (o = 0), T = null; S !== null && _ < d.length; _++) {
      S.index > _ ? ((T = S), (S = null)) : (T = S.sibling);
      var D = h(f, S, d[_], x);
      if (D === null) {
        S === null && (S = T);
        break;
      }
      (e && S && D.alternate === null && t(f, S),
        (o = i(D, o, _)),
        v === null ? (C = D) : (v.sibling = D),
        (v = D),
        (S = T));
    }
    if (_ === d.length) return (n(f, S), J && Dt(f, _), C);
    if (S === null) {
      for (; _ < d.length; _++)
        ((S = y(f, d[_], x)),
          S !== null && ((o = i(S, o, _)), v === null ? (C = S) : (v.sibling = S), (v = S)));
      return (J && Dt(f, _), C);
    }
    for (S = r(f, S); _ < d.length; _++)
      ((T = k(S, f, _, d[_], x)),
        T !== null &&
          (e && T.alternate !== null && S.delete(T.key === null ? _ : T.key),
          (o = i(T, o, _)),
          v === null ? (C = T) : (v.sibling = T),
          (v = T)));
    return (
      e &&
        S.forEach(function (P) {
          return t(f, P);
        }),
      J && Dt(f, _),
      C
    );
  }
  function w(f, o, d, x) {
    var C = In(d);
    if (typeof C != "function") throw Error(E(150));
    if (((d = C.call(d)), d == null)) throw Error(E(151));
    for (
      var v = (C = null), S = o, _ = (o = 0), T = null, D = d.next();
      S !== null && !D.done;
      _++, D = d.next()
    ) {
      S.index > _ ? ((T = S), (S = null)) : (T = S.sibling);
      var P = h(f, S, D.value, x);
      if (P === null) {
        S === null && (S = T);
        break;
      }
      (e && S && P.alternate === null && t(f, S),
        (o = i(P, o, _)),
        v === null ? (C = P) : (v.sibling = P),
        (v = P),
        (S = T));
    }
    if (D.done) return (n(f, S), J && Dt(f, _), C);
    if (S === null) {
      for (; !D.done; _++, D = d.next())
        ((D = y(f, D.value, x)),
          D !== null && ((o = i(D, o, _)), v === null ? (C = D) : (v.sibling = D), (v = D)));
      return (J && Dt(f, _), C);
    }
    for (S = r(f, S); !D.done; _++, D = d.next())
      ((D = k(S, f, _, D.value, x)),
        D !== null &&
          (e && D.alternate !== null && S.delete(D.key === null ? _ : D.key),
          (o = i(D, o, _)),
          v === null ? (C = D) : (v.sibling = D),
          (v = D)));
    return (
      e &&
        S.forEach(function (U) {
          return t(f, U);
        }),
      J && Dt(f, _),
      C
    );
  }
  function z(f, o, d, x) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === rn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Cr:
          e: {
            for (var C = d.key, v = o; v !== null;) {
              if (v.key === C) {
                if (((C = d.type), C === rn)) {
                  if (v.tag === 7) {
                    (n(f, v.sibling), (o = s(v, d.props.children)), (o.return = f), (f = o));
                    break e;
                  }
                } else if (
                  v.elementType === C ||
                  (typeof C == "object" && C !== null && C.$$typeof === gt && so(C) === v.type)
                ) {
                  (n(f, v.sibling),
                    (o = s(v, d.props)),
                    (o.ref = Dn(f, v, d)),
                    (o.return = f),
                    (f = o));
                  break e;
                }
                n(f, v);
                break;
              } else t(f, v);
              v = v.sibling;
            }
            d.type === rn
              ? ((o = Wt(d.props.children, f.mode, x, d.key)), (o.return = f), (f = o))
              : ((x = qr(d.type, d.key, d.props, null, f.mode, x)),
                (x.ref = Dn(f, o, d)),
                (x.return = f),
                (f = x));
          }
          return a(f);
        case nn:
          e: {
            for (v = d.key; o !== null;) {
              if (o.key === v)
                if (
                  o.tag === 4 &&
                  o.stateNode.containerInfo === d.containerInfo &&
                  o.stateNode.implementation === d.implementation
                ) {
                  (n(f, o.sibling), (o = s(o, d.children || [])), (o.return = f), (f = o));
                  break e;
                } else {
                  n(f, o);
                  break;
                }
              else t(f, o);
              o = o.sibling;
            }
            ((o = xs(d, f.mode, x)), (o.return = f), (f = o));
          }
          return a(f);
        case gt:
          return ((v = d._init), z(f, o, v(d._payload), x));
      }
      if (Un(d)) return p(f, o, d, x);
      if (In(d)) return w(f, o, d, x);
      $r(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        o !== null && o.tag === 6
          ? (n(f, o.sibling), (o = s(o, d)), (o.return = f), (f = o))
          : (n(f, o), (o = ps(d, f.mode, x)), (o.return = f), (f = o)),
        a(f))
      : n(f, o);
  }
  return z;
}
var Sn = Xu(!0),
  Ju = Xu(!1),
  ml = Lt(null),
  hl = null,
  fn = null,
  Wi = null;
function Vi() {
  Wi = fn = hl = null;
}
function Qi(e) {
  var t = ml.current;
  (X(ml), (e._currentValue = t));
}
function Js(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function vn(e, t) {
  ((hl = e),
    (Wi = fn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), (e.firstContext = null)));
}
function Be(e) {
  var t = e._currentValue;
  if (Wi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fn === null)) {
      if (hl === null) throw Error(E(308));
      ((fn = e), (hl.dependencies = { lanes: 0, firstContext: e }));
    } else fn = fn.next = e;
  return t;
}
var At = null;
function Ki(e) {
  At === null ? (At = [e]) : At.push(e);
}
function qu(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Ki(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    dt(e, r)
  );
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function Gi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ec(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function ot(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Et(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      dt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Ki(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    dt(e, n)
  );
}
function Kr(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ii(e, n));
  }
}
function io(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (s = i = a) : (i = i.next = a), (n = n.next));
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function pl(e, t, n, r) {
  var s = e.updateQueue;
  yt = !1;
  var i = s.firstBaseUpdate,
    a = s.lastBaseUpdate,
    c = s.shared.pending;
  if (c !== null) {
    s.shared.pending = null;
    var u = c,
      m = u.next;
    ((u.next = null), a === null ? (i = m) : (a.next = m), (a = u));
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (c = g.lastBaseUpdate),
      c !== a && (c === null ? (g.firstBaseUpdate = m) : (c.next = m), (g.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var y = s.baseState;
    ((a = 0), (g = m = u = null), (c = i));
    do {
      var h = c.lane,
        k = c.eventTime;
      if ((r & h) === h) {
        g !== null &&
          (g = g.next =
            {
              eventTime: k,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var p = e,
            w = c;
          switch (((h = t), (k = n), w.tag)) {
            case 1:
              if (((p = w.payload), typeof p == "function")) {
                y = p.call(k, y, h);
                break e;
              }
              y = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (((p = w.payload), (h = typeof p == "function" ? p.call(k, y, h) : p), h == null))
                break e;
              y = te({}, y, h);
              break e;
            case 2:
              yt = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64), (h = s.effects), h === null ? (s.effects = [c]) : h.push(c));
      } else
        ((k = {
          eventTime: k,
          lane: h,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          g === null ? ((m = g = k), (u = y)) : (g = g.next = k),
          (a |= h));
      if (((c = c.next), c === null)) {
        if (((c = s.shared.pending), c === null)) break;
        ((h = c), (c = h.next), (h.next = null), (s.lastBaseUpdate = h), (s.shared.pending = null));
      }
    } while (!0);
    if (
      (g === null && (u = y),
      (s.baseState = u),
      (s.firstBaseUpdate = m),
      (s.lastBaseUpdate = g),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((a |= s.lane), (s = s.next));
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    ((Yt |= a), (e.lanes = a), (e.memoizedState = y));
  }
}
function ao(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function")) throw Error(E(191, s));
        s.call(r);
      }
    }
}
var Sr = {},
  nt = Lt(Sr),
  hr = Lt(Sr),
  pr = Lt(Sr);
function Ht(e) {
  if (e === Sr) throw Error(E(174));
  return e;
}
function Yi(e, t) {
  switch ((Y(pr, t), Y(hr, e), Y(nt, Sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ts(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ts(t, e)));
  }
  (X(nt), Y(nt, t));
}
function bn() {
  (X(nt), X(hr), X(pr));
}
function tc(e) {
  Ht(pr.current);
  var t = Ht(nt.current),
    n = Ts(t, e.type);
  t !== n && (Y(hr, e), Y(nt, n));
}
function Zi(e) {
  hr.current === e && (X(nt), X(hr));
}
var q = Lt(0);
function xl(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var us = [];
function Xi() {
  for (var e = 0; e < us.length; e++) us[e]._workInProgressVersionPrimary = null;
  us.length = 0;
}
var Gr = mt.ReactCurrentDispatcher,
  cs = mt.ReactCurrentBatchConfig,
  Gt = 0,
  ee = null,
  ae = null,
  ue = null,
  gl = !1,
  Jn = !1,
  xr = 0,
  rf = 0;
function pe() {
  throw Error(E(321));
}
function Ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function qi(e, t, n, r, s, i) {
  if (
    ((Gt = i),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gr.current = e === null || e.memoizedState === null ? of : uf),
    (e = n(r, s)),
    Jn)
  ) {
    i = 0;
    do {
      if (((Jn = !1), (xr = 0), 25 <= i)) throw Error(E(301));
      ((i += 1), (ue = ae = null), (t.updateQueue = null), (Gr.current = cf), (e = n(r, s)));
    } while (Jn);
  }
  if (
    ((Gr.current = yl),
    (t = ae !== null && ae.next !== null),
    (Gt = 0),
    (ue = ae = ee = null),
    (gl = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function ea() {
  var e = xr !== 0;
  return ((xr = 0), e);
}
function qe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return (ue === null ? (ee.memoizedState = ue = e) : (ue = ue.next = e), ue);
}
function Ae() {
  if (ae === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ue === null ? ee.memoizedState : ue.next;
  if (t !== null) ((ue = t), (ae = e));
  else {
    if (e === null) throw Error(E(310));
    ((ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      ue === null ? (ee.memoizedState = ue = e) : (ue = ue.next = e));
  }
  return ue;
}
function gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ds(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ae,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var a = s.next;
      ((s.next = i.next), (i.next = a));
    }
    ((r.baseQueue = s = i), (n.pending = null));
  }
  if (s !== null) {
    ((i = s.next), (r = r.baseState));
    var c = (a = null),
      u = null,
      m = i;
    do {
      var g = m.lane;
      if ((Gt & g) === g)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
          (r = m.hasEagerState ? m.eagerState : e(r, m.action)));
      else {
        var y = {
          lane: g,
          action: m.action,
          hasEagerState: m.hasEagerState,
          eagerState: m.eagerState,
          next: null,
        };
        (u === null ? ((c = u = y), (a = r)) : (u = u.next = y), (ee.lanes |= g), (Yt |= g));
      }
      m = m.next;
    } while (m !== null && m !== i);
    (u === null ? (a = r) : (u.next = c),
      Ye(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((i = s.lane), (ee.lanes |= i), (Yt |= i), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fs(e) {
  var t = Ae(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var a = (s = s.next);
    do ((i = e(i, a.action)), (a = a.next));
    while (a !== s);
    (Ye(i, t.memoizedState) || (Ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function nc() {}
function rc(e, t) {
  var n = ee,
    r = Ae(),
    s = t(),
    i = !Ye(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (Ce = !0)),
    (r = r.queue),
    ta(ic.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), yr(9, sc.bind(null, n, r, s, t), void 0, null), ce === null))
      throw Error(E(349));
    Gt & 30 || lc(n, t, s);
  }
  return s;
}
function lc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ee.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function sc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), ac(t) && oc(e));
}
function ic(e, t, n) {
  return n(function () {
    ac(t) && oc(e);
  });
}
function ac(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function oc(e) {
  var t = dt(e, 1);
  t !== null && Ge(t, e, 1, -1);
}
function oo(e) {
  var t = qe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = af.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function uc() {
  return Ae().memoizedState;
}
function Yr(e, t, n, r) {
  var s = qe();
  ((ee.flags |= e), (s.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Rl(e, t, n, r) {
  var s = Ae();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var a = ae.memoizedState;
    if (((i = a.destroy), r !== null && Ji(r, a.deps))) {
      s.memoizedState = yr(t, n, i, r);
      return;
    }
  }
  ((ee.flags |= e), (s.memoizedState = yr(1 | t, n, i, r)));
}
function uo(e, t) {
  return Yr(8390656, 8, e, t);
}
function ta(e, t) {
  return Rl(2048, 8, e, t);
}
function cc(e, t) {
  return Rl(4, 2, e, t);
}
function dc(e, t) {
  return Rl(4, 4, e, t);
}
function fc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mc(e, t, n) {
  return ((n = n != null ? n.concat([e]) : null), Rl(4, 4, fc.bind(null, t, e), n));
}
function na() {}
function hc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function pc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ji(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xc(e, t, n) {
  return Gt & 21
    ? (Ye(n, t) || ((n = ju()), (ee.lanes |= n), (Yt |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function lf(e, t) {
  var n = V;
  ((V = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = cs.transition;
  cs.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((V = n), (cs.transition = r));
  }
}
function gc() {
  return Ae().memoizedState;
}
function sf(e, t, n) {
  var r = Pt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), yc(e)))
    vc(t, n);
  else if (((n = qu(e, t, n, r)), n !== null)) {
    var s = we();
    (Ge(n, e, r, s), wc(n, t, r));
  }
}
function af(e, t, n) {
  var r = Pt(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yc(e)) vc(t, s);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var a = t.lastRenderedState,
          c = i(a, n);
        if (((s.hasEagerState = !0), (s.eagerState = c), Ye(c, a))) {
          var u = t.interleaved;
          (u === null ? ((s.next = s), Ki(t)) : ((s.next = u.next), (u.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = qu(e, t, s, r)), n !== null && ((s = we()), Ge(n, e, r, s), wc(n, t, r)));
  }
}
function yc(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function vc(e, t) {
  Jn = gl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function wc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ii(e, n));
  }
}
var yl = {
    readContext: Be,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  of = {
    readContext: Be,
    useCallback: function (e, t) {
      return ((qe().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Be,
    useEffect: uo,
    useImperativeHandle: function (e, t, n) {
      return ((n = n != null ? n.concat([e]) : null), Yr(4194308, 4, fc.bind(null, t, e), n));
    },
    useLayoutEffect: function (e, t) {
      return Yr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qe();
      return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
    },
    useReducer: function (e, t, n) {
      var r = qe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = sf.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qe();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: oo,
    useDebugValue: na,
    useDeferredValue: function (e) {
      return (qe().memoizedState = e);
    },
    useTransition: function () {
      var e = oo(!1),
        t = e[0];
      return ((e = lf.bind(null, e[1])), (qe().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        s = qe();
      if (J) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(E(349));
        Gt & 30 || lc(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        uo(ic.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        yr(9, sc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qe(),
        t = ce.identifierPrefix;
      if (J) {
        var n = at,
          r = it;
        ((n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = rf++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  uf = {
    readContext: Be,
    useCallback: hc,
    useContext: Be,
    useEffect: ta,
    useImperativeHandle: mc,
    useInsertionEffect: cc,
    useLayoutEffect: dc,
    useMemo: pc,
    useReducer: ds,
    useRef: uc,
    useState: function () {
      return ds(gr);
    },
    useDebugValue: na,
    useDeferredValue: function (e) {
      var t = Ae();
      return xc(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ds(gr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: nc,
    useSyncExternalStore: rc,
    useId: gc,
    unstable_isNewReconciler: !1,
  },
  cf = {
    readContext: Be,
    useCallback: hc,
    useContext: Be,
    useEffect: ta,
    useImperativeHandle: mc,
    useInsertionEffect: cc,
    useLayoutEffect: dc,
    useMemo: pc,
    useReducer: fs,
    useRef: uc,
    useState: function () {
      return fs(gr);
    },
    useDebugValue: na,
    useDeferredValue: function (e) {
      var t = Ae();
      return ae === null ? (t.memoizedState = e) : xc(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = fs(gr)[0],
        t = Ae().memoizedState;
      return [e, t];
    },
    useMutableSource: nc,
    useSyncExternalStore: rc,
    useId: gc,
    unstable_isNewReconciler: !1,
  };
function We(e, t) {
  if (e && e.defaultProps) {
    ((t = te({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qs(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var $l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      s = Pt(e),
      i = ot(r, s);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = Et(e, i, s)),
      t !== null && (Ge(t, e, s, r), Kr(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      s = Pt(e),
      i = ot(r, s);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Et(e, i, s)),
      t !== null && (Ge(t, e, s, r), Kr(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Pt(e),
      s = ot(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Et(e, s, r)),
      t !== null && (Ge(t, e, r, n), Kr(t, e, r)));
  },
};
function co(e, t, n, r, s, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !cr(n, r) || !cr(s, i)
        : !0
  );
}
function jc(e, t, n) {
  var r = !1,
    s = Tt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Be(i))
      : ((s = Me(t) ? Qt : ye.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Nn(e, s) : Tt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function fo(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $l.enqueueReplaceState(t, t.state, null));
}
function ei(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Gi(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (s.context = Be(i))
    : ((i = Me(t) ? Qt : ye.current), (s.context = Nn(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (qs(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
      t !== s.state && $l.enqueueReplaceState(s, s.state, null),
      pl(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Cn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += $d(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function ms(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var df = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
  ((n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (wl || ((wl = !0), (di = r)), ti(e, t));
    }),
    n
  );
}
function kc(e, t, n) {
  ((n = ot(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        ti(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (ti(e, t), typeof r != "function" && (Mt === null ? (Mt = new Set([this])) : Mt.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
      }),
    n
  );
}
function mo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new df();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = bf.bind(null, e, t, n)), t.then(e, e));
}
function ho(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function po(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = ot(-1, 1)), (t.tag = 2), Et(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ff = mt.ReactCurrentOwner,
  Ce = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Ju(t, null, n, r) : Sn(t, e.child, n, r);
}
function xo(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    vn(t, s),
    (r = qi(e, t, n, r, i, s)),
    (n = ea()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), ft(e, t, s))
      : (J && n && Ai(t), (t.flags |= 1), ve(e, t, r, s), t.child)
  );
}
function go(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ca(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Sc(e, t, i, r, s))
      : ((e = qr(n.type, null, r, t, t.mode, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var a = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : cr), n(a, r) && e.ref === t.ref))
      return ft(e, t, s);
  }
  return ((t.flags |= 1), (e = zt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function Sc(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (cr(i, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0)) e.flags & 131072 && (Ce = !0);
      else return ((t.lanes = e.lanes), ft(e, t, s));
  }
  return ni(e, t, n, r, s);
}
function bc(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(hn, ze),
        (ze |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          Y(hn, ze),
          (ze |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Y(hn, ze),
        (ze |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(hn, ze),
      (ze |= r));
  return (ve(e, t, s, n), t.child);
}
function Cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ni(e, t, n, r, s) {
  var i = Me(n) ? Qt : ye.current;
  return (
    (i = Nn(t, i)),
    vn(t, s),
    (n = qi(e, t, n, r, i, s)),
    (r = ea()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), ft(e, t, s))
      : (J && r && Ai(t), (t.flags |= 1), ve(e, t, n, s), t.child)
  );
}
function yo(e, t, n, r, s) {
  if (Me(n)) {
    var i = !0;
    cl(t);
  } else i = !1;
  if ((vn(t, s), t.stateNode === null)) (Zr(e, t), jc(t, n, r), ei(t, n, r, s), (r = !0));
  else if (e === null) {
    var a = t.stateNode,
      c = t.memoizedProps;
    a.props = c;
    var u = a.context,
      m = n.contextType;
    typeof m == "object" && m !== null
      ? (m = Be(m))
      : ((m = Me(n) ? Qt : ye.current), (m = Nn(t, m)));
    var g = n.getDerivedStateFromProps,
      y = typeof g == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    (y ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((c !== r || u !== m) && fo(t, a, r, m)),
      (yt = !1));
    var h = t.memoizedState;
    ((a.state = h),
      pl(t, r, a, s),
      (u = t.memoizedState),
      c !== r || h !== u || Ee.current || yt
        ? (typeof g == "function" && (qs(t, n, g, r), (u = t.memoizedState)),
          (c = yt || co(t, n, c, r, h, u, m))
            ? (y ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = m),
          (r = c))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
  } else {
    ((a = t.stateNode),
      ec(e, t),
      (c = t.memoizedProps),
      (m = t.type === t.elementType ? c : We(t.type, c)),
      (a.props = m),
      (y = t.pendingProps),
      (h = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Be(u))
        : ((u = Me(n) ? Qt : ye.current), (u = Nn(t, u))));
    var k = n.getDerivedStateFromProps;
    ((g = typeof k == "function" || typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((c !== y || h !== u) && fo(t, a, r, u)),
      (yt = !1),
      (h = t.memoizedState),
      (a.state = h),
      pl(t, r, a, s));
    var p = t.memoizedState;
    c !== y || h !== p || Ee.current || yt
      ? (typeof k == "function" && (qs(t, n, k, r), (p = t.memoizedState)),
        (m = yt || co(t, n, m, r, h, p, u) || !1)
          ? (g ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, p, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (c === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (a.props = r),
        (a.state = p),
        (a.context = u),
        (r = m))
      : (typeof a.componentDidUpdate != "function" ||
          (c === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ri(e, t, n, r, i, s);
}
function ri(e, t, n, r, s, i) {
  Cc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return (s && no(t, n, !1), ft(e, t, i));
  ((r = t.stateNode), (ff.current = t));
  var c = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Sn(t, e.child, null, i)), (t.child = Sn(t, null, c, i)))
      : ve(e, t, c, i),
    (t.memoizedState = r.state),
    s && no(t, n, !0),
    t.child
  );
}
function Ec(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? to(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && to(e, t.context, !1),
    Yi(e, t.containerInfo));
}
function vo(e, t, n, r, s) {
  return (kn(), Ui(s), (t.flags |= 256), ve(e, t, n, r), t.child);
}
var li = { dehydrated: null, treeContext: null, retryLane: 0 };
function si(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mc(e, t, n) {
  var r = t.pendingProps,
    s = q.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    c;
  if (
    ((c = a) || (c = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    c ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (s |= 1),
    Y(q, s & 1),
    e === null)
  )
    return (
      Xs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Bl(a, r, 0, null)),
              (e = Wt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = si(n)),
              (t.memoizedState = li),
              e)
            : ra(t, a))
    );
  if (((s = e.memoizedState), s !== null && ((c = s.dehydrated), c !== null)))
    return mf(e, t, a, r, c, s, n);
  if (i) {
    ((i = r.fallback), (a = t.mode), (s = e.child), (c = s.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== s
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = zt(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      c !== null ? (i = zt(c, i)) : ((i = Wt(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? si(n)
          : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = li),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = zt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ra(e, t) {
  return (
    (t = Bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dr(e, t, n, r) {
  return (
    r !== null && Ui(r),
    Sn(t, e.child, null, n),
    (e = ra(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mf(e, t, n, r, s, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ms(Error(E(422)))), Dr(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = Bl({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Wt(i, s, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Sn(t, e.child, null, a),
          (t.child.memoizedState = si(a)),
          (t.memoizedState = li),
          i);
  if (!(t.mode & 1)) return Dr(e, t, a, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var c = r.dgst;
    return ((r = c), (i = Error(E(419))), (r = ms(i, r, void 0)), Dr(e, t, a, r));
  }
  if (((c = (a & e.childLanes) !== 0), Ce || c)) {
    if (((r = ce), r !== null)) {
      switch (a & -a) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | a) ? 0 : s),
        s !== 0 && s !== i.retryLane && ((i.retryLane = s), dt(e, s), Ge(r, e, s, -1)));
    }
    return (ua(), (r = ms(Error(E(421)))), Dr(e, t, a, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = Cf.bind(null, e)), (s._reactRetry = t), null)
    : ((e = i.treeContext),
      (_e = Ct(s.nextSibling)),
      (Te = t),
      (J = !0),
      (Qe = null),
      e !== null &&
        ((Re[$e++] = it),
        (Re[$e++] = at),
        (Re[$e++] = Kt),
        (it = e.id),
        (at = e.overflow),
        (Kt = t)),
      (t = ra(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Js(e.return, t, n));
}
function hs(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function Pc(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((ve(e, t, r.children, n), (r = q.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && wo(e, n, t);
        else if (e.tag === 19) wo(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((Y(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null;)
          ((e = n.alternate), e !== null && xl(e) === null && (s = n), (n = n.sibling));
        ((n = s),
          n === null ? ((s = t.child), (t.child = null)) : ((s = n.sibling), (n.sibling = null)),
          hs(t, !1, s, n, i));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null;) {
          if (((e = s.alternate), e !== null && xl(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        hs(t, !0, n, null, i);
        break;
      case "together":
        hs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zr(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ft(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Yt |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
      ((e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function hf(e, t, n) {
  switch (t.tag) {
    case 3:
      (Ec(t), kn());
      break;
    case 5:
      tc(t);
      break;
    case 1:
      Me(t.type) && cl(t);
      break;
    case 4:
      Yi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (Y(ml, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Mc(e, t, n)
            : (Y(q, q.current & 1), (e = ft(e, t, n)), e !== null ? e.sibling : null);
      Y(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        Y(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), bc(e, t, n));
  }
  return ft(e, t, n);
}
var zc, ii, _c, Tc;
zc = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
ii = function () {};
_c = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), Ht(nt.current));
    var i = null;
    switch (n) {
      case "input":
        ((s = Ms(e, s)), (r = Ms(e, r)), (i = []));
        break;
      case "select":
        ((s = te({}, s, { value: void 0 })), (r = te({}, r, { value: void 0 })), (i = []));
        break;
      case "textarea":
        ((s = _s(e, s)), (r = _s(e, r)), (i = []));
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol);
    }
    Is(n, r);
    var a;
    n = null;
    for (m in s)
      if (!r.hasOwnProperty(m) && s.hasOwnProperty(m) && s[m] != null)
        if (m === "style") {
          var c = s[m];
          for (a in c) c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          m !== "dangerouslySetInnerHTML" &&
            m !== "children" &&
            m !== "suppressContentEditableWarning" &&
            m !== "suppressHydrationWarning" &&
            m !== "autoFocus" &&
            (rr.hasOwnProperty(m) ? i || (i = []) : (i = i || []).push(m, null));
    for (m in r) {
      var u = r[m];
      if (
        ((c = s != null ? s[m] : void 0),
        r.hasOwnProperty(m) && u !== c && (u != null || c != null))
      )
        if (m === "style")
          if (c) {
            for (a in c)
              !c.hasOwnProperty(a) || (u && u.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""));
            for (a in u) u.hasOwnProperty(a) && c[a] !== u[a] && (n || (n = {}), (n[a] = u[a]));
          } else (n || (i || (i = []), i.push(m, n)), (n = u));
        else
          m === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (c = c ? c.__html : void 0),
              u != null && c !== u && (i = i || []).push(m, u))
            : m === "children"
              ? (typeof u != "string" && typeof u != "number") || (i = i || []).push(m, "" + u)
              : m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                (rr.hasOwnProperty(m)
                  ? (u != null && m === "onScroll" && Z("scroll", e), i || c === u || (i = []))
                  : (i = i || []).push(m, u));
    }
    n && (i = i || []).push("style", n);
    var m = i;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Tc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fn(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;) (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null;)
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null;)
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function pf(e, t, n) {
  var r = t.pendingProps;
  switch ((Hi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (xe(t), null);
    case 1:
      return (Me(t.type) && ul(), xe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        bn(),
        X(Ee),
        X(ye),
        Xi(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (hi(Qe), (Qe = null)))),
        ii(e, t),
        xe(t),
        null
      );
    case 5:
      Zi(t);
      var s = Ht(pr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (_c(e, t, n, r, s), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return (xe(t), null);
        }
        if (((e = Ht(nt.current)), Rr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[et] = t), (r[mr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Z("cancel", r), Z("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Vn.length; s++) Z(Vn[s], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Z("error", r), Z("load", r));
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              (Ma(r, i), Z("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }), Z("invalid", r));
              break;
            case "textarea":
              (za(r, i), Z("invalid", r));
          }
          (Is(n, i), (s = null));
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var c = i[a];
              a === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (i.suppressHydrationWarning !== !0 && Lr(r.textContent, c, e),
                    (s = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (i.suppressHydrationWarning !== !0 && Lr(r.textContent, c, e),
                    (s = ["children", "" + c]))
                : rr.hasOwnProperty(a) && c != null && a === "onScroll" && Z("scroll", r);
            }
          switch (n) {
            case "input":
              (Er(r), Pa(r, i, !0));
              break;
            case "textarea":
              (Er(r), _a(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ol);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((a = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = iu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e), r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[et] = t),
            (e[mr] = r),
            zc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = Os(n, r)), n)) {
              case "dialog":
                (Z("cancel", e), Z("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Z("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < Vn.length; s++) Z(Vn[s], e);
                s = r;
                break;
              case "source":
                (Z("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (Z("error", e), Z("load", e), (s = r));
                break;
              case "details":
                (Z("toggle", e), (s = r));
                break;
              case "input":
                (Ma(e, r), (s = Ms(e, r)), Z("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = te({}, r, { value: void 0 })),
                  Z("invalid", e));
                break;
              case "textarea":
                (za(e, r), (s = _s(e, r)), Z("invalid", e));
                break;
              default:
                s = r;
            }
            (Is(n, s), (c = s));
            for (i in c)
              if (c.hasOwnProperty(i)) {
                var u = c[i];
                i === "style"
                  ? uu(e, u)
                  : i === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && au(e, u))
                    : i === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && lr(e, u)
                        : typeof u == "number" && lr(e, "" + u)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (rr.hasOwnProperty(i)
                          ? u != null && i === "onScroll" && Z("scroll", e)
                          : u != null && Ei(e, i, u, a));
              }
            switch (n) {
              case "input":
                (Er(e), Pa(e, r, !1));
                break;
              case "textarea":
                (Er(e), _a(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? pn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && pn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = ol);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (xe(t), null);
    case 6:
      if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Ht(pr.current)), Ht(nt.current), Rr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (i = r.nodeValue !== n) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                Lr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Lr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r));
      }
      return (xe(t), null);
    case 13:
      if (
        (X(q),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && _e !== null && t.mode & 1 && !(t.flags & 128))
          (Zu(), kn(), (t.flags |= 98560), (i = !1));
        else if (((i = Rr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(E(317));
            i[et] = t;
          } else (kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (xe(t), (i = !1));
        } else (Qe !== null && (hi(Qe), (Qe = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || q.current & 1 ? oe === 0 && (oe = 3) : ua())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (bn(), ii(e, t), e === null && dr(t.stateNode.containerInfo), xe(t), null);
    case 10:
      return (Qi(t.type._context), xe(t), null);
    case 17:
      return (Me(t.type) && ul(), xe(t), null);
    case 19:
      if ((X(q), (i = t.memoizedState), i === null)) return (xe(t), null);
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Fn(i, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((a = xl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Fn(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling));
                return (Y(q, (q.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            se() > En &&
            ((t.flags |= 128), (r = !0), Fn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !J)
            )
              return (xe(t), null);
          } else
            2 * se() - i.renderingStartTime > En &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last), n !== null ? (n.sibling = a) : (t.child = a), (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = se()),
          (t.sibling = null),
          (n = q.current),
          Y(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        oa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function xf(e, t) {
  switch ((Hi(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        bn(),
        X(Ee),
        X(ye),
        Xi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Zi(t), null);
    case 13:
      if ((X(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        kn();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return (X(q), null);
    case 4:
      return (bn(), null);
    case 10:
      return (Qi(t.type._context), null);
    case 22:
    case 23:
      return (oa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Fr = !1,
  ge = !1,
  gf = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function ai(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var jo = !1;
function yf(e, t) {
  if (((Ws = sl), (e = $u()), Bi(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            c = -1,
            u = -1,
            m = 0,
            g = 0,
            y = e,
            h = null;
          t: for (;;) {
            for (
              var k;
              y !== n || (s !== 0 && y.nodeType !== 3) || (c = a + s),
                y !== i || (r !== 0 && y.nodeType !== 3) || (u = a + r),
                y.nodeType === 3 && (a += y.nodeValue.length),
                (k = y.firstChild) !== null;
            )
              ((h = y), (y = k));
            for (;;) {
              if (y === e) break t;
              if (
                (h === n && ++m === s && (c = a),
                h === i && ++g === r && (u = a),
                (k = y.nextSibling) !== null)
              )
                break;
              ((y = h), (h = y.parentNode));
            }
            y = k;
          }
          n = c === -1 || u === -1 ? null : { start: c, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vs = { focusedElem: e, selectionRange: n }, sl = !1, L = t; L !== null;)
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (L = e));
    else
      for (; L !== null;) {
        t = L;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var w = p.memoizedProps,
                    z = p.memoizedState,
                    f = t.stateNode,
                    o = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : We(t.type, w), z);
                  f.__reactInternalSnapshotBeforeUpdate = o;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (x) {
          re(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (L = e));
          break;
        }
        L = t.return;
      }
  return ((p = jo), (jo = !1), p);
}
function qn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        ((s.destroy = void 0), i !== void 0 && ai(t, n, i));
      }
      s = s.next;
    } while (s !== r);
  }
}
function Dl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ic(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ic(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[et], delete t[mr], delete t[Gs], delete t[q0], delete t[ef])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function No(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Oc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ui(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ol)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ui(e, t, n), e = e.sibling; e !== null;) (ui(e, t, n), (e = e.sibling));
}
function ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ci(e, t, n), e = e.sibling; e !== null;) (ci(e, t, n), (e = e.sibling));
}
var fe = null,
  Ve = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null;) (Lc(e, t, n), (n = n.sibling));
}
function Lc(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
    try {
      tt.onCommitFiberUnmount(zl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || mn(n, t);
    case 6:
      var r = fe,
        s = Ve;
      ((fe = null),
        xt(e, t, n),
        (fe = r),
        (Ve = s),
        fe !== null &&
          (Ve
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode)));
      break;
    case 18:
      fe !== null &&
        (Ve
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8 ? as(e.parentNode, n) : e.nodeType === 1 && as(e, n),
            or(e))
          : as(fe, n.stateNode));
      break;
    case 4:
      ((r = fe),
        (s = Ve),
        (fe = n.stateNode.containerInfo),
        (Ve = !0),
        xt(e, t, n),
        (fe = r),
        (Ve = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        s = r = r.next;
        do {
          var i = s,
            a = i.destroy;
          ((i = i.tag), a !== void 0 && (i & 2 || i & 4) && ai(n, t, a), (s = s.next));
        } while (s !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (!ge && (mn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
        } catch (c) {
          re(n, t, c);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), xt(e, t, n), (ge = r))
        : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function ko(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new gf()),
      t.forEach(function (r) {
        var s = Ef.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          a = t,
          c = a;
        e: for (; c !== null;) {
          switch (c.tag) {
            case 5:
              ((fe = c.stateNode), (Ve = !1));
              break e;
            case 3:
              ((fe = c.stateNode.containerInfo), (Ve = !0));
              break e;
            case 4:
              ((fe = c.stateNode.containerInfo), (Ve = !0));
              break e;
          }
          c = c.return;
        }
        if (fe === null) throw Error(E(160));
        (Lc(i, a, s), (fe = null), (Ve = !1));
        var u = s.alternate;
        (u !== null && (u.return = null), (s.return = null));
      } catch (m) {
        re(s, t, m);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (Rc(t, e), (t = t.sibling));
}
function Rc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Je(e), r & 4)) {
        try {
          (qn(3, e, e.return), Dl(3, e));
        } catch (w) {
          re(e, e.return, w);
        }
        try {
          qn(5, e, e.return);
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 1:
      (Ue(t, e), Je(e), r & 512 && n !== null && mn(n, n.return));
      break;
    case 5:
      if ((Ue(t, e), Je(e), r & 512 && n !== null && mn(n, n.return), e.flags & 32)) {
        var s = e.stateNode;
        try {
          lr(s, "");
        } catch (w) {
          re(e, e.return, w);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          c = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (c === "input" && i.type === "radio" && i.name != null && lu(s, i), Os(c, a));
            var m = Os(c, i);
            for (a = 0; a < u.length; a += 2) {
              var g = u[a],
                y = u[a + 1];
              g === "style"
                ? uu(s, y)
                : g === "dangerouslySetInnerHTML"
                  ? au(s, y)
                  : g === "children"
                    ? lr(s, y)
                    : Ei(s, g, y, m);
            }
            switch (c) {
              case "input":
                Ps(s, i);
                break;
              case "textarea":
                su(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var k = i.value;
                k != null
                  ? pn(s, !!i.multiple, k, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? pn(s, !!i.multiple, i.defaultValue, !0)
                      : pn(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[mr] = i;
          } catch (w) {
            re(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Je(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        ((s = e.stateNode), (i = e.memoizedProps));
        try {
          s.nodeValue = i;
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((Ue(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          or(t.containerInfo);
        } catch (w) {
          re(e, e.return, w);
        }
      break;
    case 4:
      (Ue(t, e), Je(e));
      break;
    case 13:
      (Ue(t, e),
        Je(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i || (s.alternate !== null && s.alternate.memoizedState !== null) || (ia = se())),
        r & 4 && ko(e));
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (m = ge) || g), Ue(t, e), (ge = m)) : Ue(t, e),
        Je(e),
        r & 8192)
      ) {
        if (((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !g && e.mode & 1))
          for (L = e, g = e.child; g !== null;) {
            for (y = L = g; L !== null;) {
              switch (((h = L), (k = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qn(4, h, h.return);
                  break;
                case 1:
                  mn(h, h.return);
                  var p = h.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount());
                    } catch (w) {
                      re(r, n, w);
                    }
                  }
                  break;
                case 5:
                  mn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    bo(y);
                    continue;
                  }
              }
              k !== null ? ((k.return = h), (L = k)) : bo(y);
            }
            g = g.sibling;
          }
        e: for (g = null, y = e; ;) {
          if (y.tag === 5) {
            if (g === null) {
              g = y;
              try {
                ((s = y.stateNode),
                  m
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((c = y.stateNode),
                      (u = y.memoizedProps.style),
                      (a = u != null && u.hasOwnProperty("display") ? u.display : null),
                      (c.style.display = ou("display", a))));
              } catch (w) {
                re(e, e.return, w);
              }
            }
          } else if (y.tag === 6) {
            if (g === null)
              try {
                y.stateNode.nodeValue = m ? "" : y.memoizedProps;
              } catch (w) {
                re(e, e.return, w);
              }
          } else if (
            ((y.tag !== 22 && y.tag !== 23) || y.memoizedState === null || y === e) &&
            y.child !== null
          ) {
            ((y.child.return = y), (y = y.child));
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null;) {
            if (y.return === null || y.return === e) break e;
            (g === y && (g = null), (y = y.return));
          }
          (g === y && (g = null), (y.sibling.return = y.return), (y = y.sibling));
        }
      }
      break;
    case 19:
      (Ue(t, e), Je(e), r & 4 && ko(e));
      break;
    case 21:
      break;
    default:
      (Ue(t, e), Je(e));
  }
}
function Je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (Oc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (lr(s, ""), (r.flags &= -33));
          var i = No(e);
          ci(e, i, s);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            c = No(e);
          ui(e, c, a);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      re(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vf(e, t, n) {
  ((L = e), $c(e));
}
function $c(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null;) {
    var s = L,
      i = s.child;
    if (s.tag === 22 && r) {
      var a = s.memoizedState !== null || Fr;
      if (!a) {
        var c = s.alternate,
          u = (c !== null && c.memoizedState !== null) || ge;
        c = Fr;
        var m = ge;
        if (((Fr = a), (ge = u) && !m))
          for (L = s; L !== null;)
            ((a = L),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Co(s)
                : u !== null
                  ? ((u.return = a), (L = u))
                  : Co(s));
        for (; i !== null;) ((L = i), $c(i), (i = i.sibling));
        ((L = s), (Fr = c), (ge = m));
      }
      So(e);
    } else s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (L = i)) : So(e);
  }
}
function So(e) {
  for (; L !== null;) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || Dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var s = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
                  r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ao(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ao(t, a, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var g = m.memoizedState;
                  if (g !== null) {
                    var y = g.dehydrated;
                    y !== null && or(y);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        ge || (t.flags & 512 && oi(t));
      } catch (h) {
        re(t, t.return, h);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function bo(e) {
  for (; L !== null;) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function Co(e) {
  for (; L !== null;) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Dl(4, t);
          } catch (u) {
            re(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              re(t, s, u);
            }
          }
          var i = t.return;
          try {
            oi(t);
          } catch (u) {
            re(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            oi(t);
          } catch (u) {
            re(t, a, u);
          }
      }
    } catch (u) {
      re(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      ((c.return = t.return), (L = c));
      break;
    }
    L = t.return;
  }
}
var wf = Math.ceil,
  vl = mt.ReactCurrentDispatcher,
  la = mt.ReactCurrentOwner,
  Fe = mt.ReactCurrentBatchConfig,
  W = 0,
  ce = null,
  ie = null,
  me = 0,
  ze = 0,
  hn = Lt(0),
  oe = 0,
  vr = null,
  Yt = 0,
  Fl = 0,
  sa = 0,
  er = null,
  be = null,
  ia = 0,
  En = 1 / 0,
  lt = null,
  wl = !1,
  di = null,
  Mt = null,
  Br = !1,
  Nt = null,
  jl = 0,
  tr = 0,
  fi = null,
  Xr = -1,
  Jr = 0;
function we() {
  return W & 6 ? se() : Xr !== -1 ? Xr : (Xr = se());
}
function Pt(e) {
  return e.mode & 1
    ? W & 2 && me !== 0
      ? me & -me
      : nf.transition !== null
        ? (Jr === 0 && (Jr = ju()), Jr)
        : ((e = V), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Mu(e.type))), e)
    : 1;
}
function Ge(e, t, n, r) {
  if (50 < tr) throw ((tr = 0), (fi = null), Error(E(185)));
  (jr(e, n, r),
    (!(W & 2) || e !== ce) &&
      (e === ce && (!(W & 2) && (Fl |= n), oe === 4 && wt(e, me)),
      Pe(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((En = se() + 500), Ll && Rt())));
}
function Pe(e, t) {
  var n = e.callbackNode;
  n0(e, t);
  var r = ll(e, e === ce ? me : 0);
  if (r === 0) (n !== null && Oa(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Oa(n), t === 1))
      (e.tag === 0 ? tf(Eo.bind(null, e)) : Ku(Eo.bind(null, e)),
        X0(function () {
          !(W & 6) && Rt();
        }),
        (n = null));
    else {
      switch (Nu(r)) {
        case 1:
          n = Ti;
          break;
        case 4:
          n = vu;
          break;
        case 16:
          n = rl;
          break;
        case 536870912:
          n = wu;
          break;
        default:
          n = rl;
      }
      n = Vc(n, Dc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Dc(e, t) {
  if (((Xr = -1), (Jr = 0), W & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (wn() && e.callbackNode !== n) return null;
  var r = ll(e, e === ce ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var s = W;
    W |= 2;
    var i = Bc();
    (ce !== e || me !== t) && ((lt = null), (En = se() + 500), Ut(e, t));
    do
      try {
        kf();
        break;
      } catch (c) {
        Fc(e, c);
      }
    while (!0);
    (Vi(), (vl.current = i), (W = s), ie !== null ? (t = 0) : ((ce = null), (me = 0), (t = oe)));
  }
  if (t !== 0) {
    if ((t === 2 && ((s = Fs(e)), s !== 0 && ((r = s), (t = mi(e, s)))), t === 1))
      throw ((n = vr), Ut(e, 0), wt(e, r), Pe(e, se()), n);
    if (t === 6) wt(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !jf(s) &&
          ((t = Nl(e, r)), t === 2 && ((i = Fs(e)), i !== 0 && ((r = i), (t = mi(e, i)))), t === 1))
      )
        throw ((n = vr), Ut(e, 0), wt(e, r), Pe(e, se()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Ft(e, be, lt);
          break;
        case 3:
          if ((wt(e, r), (r & 130023424) === r && ((t = ia + 500 - se()), 10 < t))) {
            if (ll(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (we(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = Ks(Ft.bind(null, e, be, lt), t);
            break;
          }
          Ft(e, be, lt);
          break;
        case 4:
          if ((wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r;) {
            var a = 31 - Ke(r);
            ((i = 1 << a), (a = t[a]), a > s && (s = a), (r &= ~i));
          }
          if (
            ((r = s),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * wf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ks(Ft.bind(null, e, be, lt), r);
            break;
          }
          Ft(e, be, lt);
          break;
        case 5:
          Ft(e, be, lt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return (Pe(e, se()), e.callbackNode === n ? Dc.bind(null, e) : null);
}
function mi(e, t) {
  var n = er;
  return (
    e.current.memoizedState.isDehydrated && (Ut(e, t).flags |= 256),
    (e = Nl(e, t)),
    e !== 2 && ((t = be), (be = n), t !== null && hi(t)),
    e
  );
}
function hi(e) {
  be === null ? (be = e) : be.push.apply(be, e);
}
function jf(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Ye(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function wt(e, t) {
  for (
    t &= ~sa, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Eo(e) {
  if (W & 6) throw Error(E(327));
  wn();
  var t = ll(e, 0);
  if (!(t & 1)) return (Pe(e, se()), null);
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fs(e);
    r !== 0 && ((t = r), (n = mi(e, r)));
  }
  if (n === 1) throw ((n = vr), Ut(e, 0), wt(e, t), Pe(e, se()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ft(e, be, lt),
    Pe(e, se()),
    null
  );
}
function aa(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    ((W = n), W === 0 && ((En = se() + 500), Ll && Rt()));
  }
}
function Zt(e) {
  Nt !== null && Nt.tag === 0 && !(W & 6) && wn();
  var t = W;
  W |= 1;
  var n = Fe.transition,
    r = V;
  try {
    if (((Fe.transition = null), (V = 1), e)) return e();
  } finally {
    ((V = r), (Fe.transition = n), (W = t), !(W & 6) && Rt());
  }
}
function oa() {
  ((ze = hn.current), X(hn));
}
function Ut(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Z0(n)), ie !== null))
    for (n = ie.return; n !== null;) {
      var r = n;
      switch ((Hi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ul());
          break;
        case 3:
          (bn(), X(Ee), X(ye), Xi());
          break;
        case 5:
          Zi(r);
          break;
        case 4:
          bn();
          break;
        case 13:
          X(q);
          break;
        case 19:
          X(q);
          break;
        case 10:
          Qi(r.type._context);
          break;
        case 22:
        case 23:
          oa();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (ie = e = zt(e.current, null)),
    (me = ze = t),
    (oe = 0),
    (vr = null),
    (sa = Fl = Yt = 0),
    (be = er = null),
    At !== null)
  ) {
    for (t = 0; t < At.length; t++)
      if (((n = At[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          ((i.next = s), (r.next = a));
        }
        n.pending = r;
      }
    At = null;
  }
  return e;
}
function Fc(e, t) {
  do {
    var n = ie;
    try {
      if ((Vi(), (Gr.current = yl), gl)) {
        for (var r = ee.memoizedState; r !== null;) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        gl = !1;
      }
      if (
        ((Gt = 0),
        (ue = ae = ee = null),
        (Jn = !1),
        (xr = 0),
        (la.current = null),
        n === null || n.return === null)
      ) {
        ((oe = 1), (vr = t), (ie = null));
        break;
      }
      e: {
        var i = e,
          a = n.return,
          c = n,
          u = t;
        if (
          ((t = me),
          (c.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var m = u,
            g = c,
            y = g.tag;
          if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var h = g.alternate;
            h
              ? ((g.updateQueue = h.updateQueue),
                (g.memoizedState = h.memoizedState),
                (g.lanes = h.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var k = ho(a);
          if (k !== null) {
            ((k.flags &= -257), po(k, a, c, i, t), k.mode & 1 && mo(i, m, t), (t = k), (u = m));
            var p = t.updateQueue;
            if (p === null) {
              var w = new Set();
              (w.add(u), (t.updateQueue = w));
            } else p.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (mo(i, m, t), ua());
              break e;
            }
            u = Error(E(426));
          }
        } else if (J && c.mode & 1) {
          var z = ho(a);
          if (z !== null) {
            (!(z.flags & 65536) && (z.flags |= 256), po(z, a, c, i, t), Ui(Cn(u, c)));
            break e;
          }
        }
        ((i = u = Cn(u, c)), oe !== 4 && (oe = 2), er === null ? (er = [i]) : er.push(i), (i = a));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var f = Nc(i, u, t);
              io(i, f);
              break e;
            case 1:
              c = u;
              var o = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof o.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Mt === null || !Mt.has(d))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var x = kc(i, c, t);
                io(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hc(n);
    } catch (C) {
      ((t = C), ie === n && n !== null && (ie = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Bc() {
  var e = vl.current;
  return ((vl.current = yl), e === null ? yl : e);
}
function ua() {
  ((oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ce === null || (!(Yt & 268435455) && !(Fl & 268435455)) || wt(ce, me));
}
function Nl(e, t) {
  var n = W;
  W |= 2;
  var r = Bc();
  (ce !== e || me !== t) && ((lt = null), Ut(e, t));
  do
    try {
      Nf();
      break;
    } catch (_err) {
      Fc(e, _err);
    }
  while (!0);
  if ((Vi(), (W = n), (vl.current = r), ie !== null)) throw Error(E(261));
  return ((ce = null), (me = 0), oe);
}
function Nf() {
  for (; ie !== null;) Ac(ie);
}
function kf() {
  for (; ie !== null && !Kd();) Ac(ie);
}
function Ac(e) {
  var t = Wc(e.alternate, e, ze);
  ((e.memoizedProps = e.pendingProps), t === null ? Hc(e) : (ie = t), (la.current = null));
}
function Hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xf(n, t)), n !== null)) {
        ((n.flags &= 32767), (ie = n));
        return;
      }
      if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((oe = 6), (ie = null));
        return;
      }
    } else if (((n = pf(n, t, ze)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Ft(e, t, n) {
  var r = V,
    s = Fe.transition;
  try {
    ((Fe.transition = null), (V = 1), Sf(e, t, n, r));
  } finally {
    ((Fe.transition = s), (V = r));
  }
  return null;
}
function Sf(e, t, n, r) {
  do wn();
  while (Nt !== null);
  if (W & 6) throw Error(E(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(E(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (r0(e, i),
    e === ce && ((ie = ce = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Br ||
      ((Br = !0),
      Vc(rl, function () {
        return (wn(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Fe.transition), (Fe.transition = null));
    var a = V;
    V = 1;
    var c = W;
    ((W |= 4),
      (la.current = null),
      yf(e, n),
      Rc(n, e),
      U0(Vs),
      (sl = !!Ws),
      (Vs = Ws = null),
      (e.current = n),
      vf(n),
      Gd(),
      (W = c),
      (V = a),
      (Fe.transition = i));
  } else e.current = n;
  if (
    (Br && ((Br = !1), (Nt = e), (jl = s)),
    (i = e.pendingLanes),
    i === 0 && (Mt = null),
    Xd(n.stateNode),
    Pe(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (wl) throw ((wl = !1), (e = di), (di = null), e);
  return (
    jl & 1 && e.tag !== 0 && wn(),
    (i = e.pendingLanes),
    i & 1 ? (e === fi ? tr++ : ((tr = 0), (fi = e))) : (tr = 0),
    Rt(),
    null
  );
}
function wn() {
  if (Nt !== null) {
    var e = Nu(jl),
      t = Fe.transition,
      n = V;
    try {
      if (((Fe.transition = null), (V = 16 > e ? 16 : e), Nt === null)) var r = !1;
      else {
        if (((e = Nt), (Nt = null), (jl = 0), W & 6)) throw Error(E(331));
        var s = W;
        for (W |= 4, L = e.current; L !== null;) {
          var i = L,
            a = i.child;
          if (L.flags & 16) {
            var c = i.deletions;
            if (c !== null) {
              for (var u = 0; u < c.length; u++) {
                var m = c[u];
                for (L = m; L !== null;) {
                  var g = L;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qn(8, g, i);
                  }
                  var y = g.child;
                  if (y !== null) ((y.return = g), (L = y));
                  else
                    for (; L !== null;) {
                      g = L;
                      var h = g.sibling,
                        k = g.return;
                      if ((Ic(g), g === m)) {
                        L = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = k), (L = h));
                        break;
                      }
                      L = k;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var w = p.child;
                if (w !== null) {
                  p.child = null;
                  do {
                    var z = w.sibling;
                    ((w.sibling = null), (w = z));
                  } while (w !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) ((a.return = i), (L = a));
          else
            e: for (; L !== null;) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                ((f.return = i.return), (L = f));
                break e;
              }
              L = i.return;
            }
        }
        var o = e.current;
        for (L = o; L !== null;) {
          a = L;
          var d = a.child;
          if (a.subtreeFlags & 2064 && d !== null) ((d.return = a), (L = d));
          else
            e: for (a = o; L !== null;) {
              if (((c = L), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dl(9, c);
                  }
                } catch (C) {
                  re(c, c.return, C);
                }
              if (c === a) {
                L = null;
                break e;
              }
              var x = c.sibling;
              if (x !== null) {
                ((x.return = c.return), (L = x));
                break e;
              }
              L = c.return;
            }
        }
        if (((W = s), Rt(), tt && typeof tt.onPostCommitFiberRoot == "function"))
          try {
            tt.onPostCommitFiberRoot(zl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((V = n), (Fe.transition = t));
    }
  }
  return !1;
}
function Mo(e, t, n) {
  ((t = Cn(n, t)),
    (t = Nc(e, t, 1)),
    (e = Et(e, t, 1)),
    (t = we()),
    e !== null && (jr(e, 1, t), Pe(e, t)));
}
function re(e, t, n) {
  if (e.tag === 3) Mo(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Mo(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Mt === null || !Mt.has(r)))
        ) {
          ((e = Cn(n, e)),
            (e = kc(t, e, 1)),
            (t = Et(t, e, 1)),
            (e = we()),
            t !== null && (jr(t, 1, e), Pe(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function bf(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (me & n) === n &&
      (oe === 4 || (oe === 3 && (me & 130023424) === me && 500 > se() - ia) ? Ut(e, 0) : (sa |= n)),
    Pe(e, t));
}
function Uc(e, t) {
  t === 0 && (e.mode & 1 ? ((t = zr), (zr <<= 1), !(zr & 130023424) && (zr = 4194304)) : (t = 1));
  var n = we();
  ((e = dt(e, t)), e !== null && (jr(e, t, n), Pe(e, n)));
}
function Cf(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Uc(e, n));
}
function Ef(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  (r !== null && r.delete(t), Uc(e, n));
}
var Wc;
Wc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ce = !1), hf(e, t, n));
      Ce = !!(e.flags & 131072);
    }
  else ((Ce = !1), J && t.flags & 1048576 && Gu(t, fl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Zr(e, t), (e = t.pendingProps));
      var s = Nn(t, ye.current);
      (vn(t, n), (s = qi(null, t, r, e, s, n)));
      var i = ea();
      return (
        (t.flags |= 1),
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((i = !0), cl(t)) : (i = !1),
            (t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
            Gi(t),
            (s.updater = $l),
            (t.stateNode = s),
            (s._reactInternals = t),
            ei(t, r, e, n),
            (t = ri(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && Ai(t), ve(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zr(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Pf(r)),
          (e = We(r, e)),
          s)
        ) {
          case 0:
            t = ni(null, t, r, e, n);
            break e;
          case 1:
            t = yo(null, t, r, e, n);
            break e;
          case 11:
            t = xo(null, t, r, e, n);
            break e;
          case 14:
            t = go(null, t, r, We(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : We(r, s)),
        ni(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : We(r, s)),
        yo(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Ec(t), e === null)) throw Error(E(387));
        ((r = t.pendingProps), (i = t.memoizedState), (s = i.element), ec(e, t), pl(t, r, null, n));
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((s = Cn(Error(E(423)), t)), (t = vo(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Cn(Error(E(424)), t)), (t = vo(e, t, r, n, s)));
            break e;
          } else
            for (
              _e = Ct(t.stateNode.containerInfo.firstChild),
                Te = t,
                J = !0,
                Qe = null,
                n = Ju(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((kn(), r === s)) {
            t = ft(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tc(t),
        e === null && Xs(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = s.children),
        Qs(r, s) ? (a = null) : i !== null && Qs(r, i) && (t.flags |= 32),
        Cc(e, t),
        ve(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && Xs(t), null);
    case 13:
      return Mc(e, t, n);
    case 4:
      return (
        Yi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : We(r, s)),
        xo(e, t, r, s, n)
      );
    case 7:
      return (ve(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ve(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ve(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (a = s.value),
          Y(ml, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Ye(i.value, a)) {
            if (i.children === s.children && !Ee.current) {
              t = ft(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null;) {
              var c = i.dependencies;
              if (c !== null) {
                a = i.child;
                for (var u = c.firstContext; u !== null;) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      ((u = ot(-1, n & -n)), (u.tag = 2));
                      var m = i.updateQueue;
                      if (m !== null) {
                        m = m.shared;
                        var g = m.pending;
                        (g === null ? (u.next = u) : ((u.next = g.next), (g.next = u)),
                          (m.pending = u));
                      }
                    }
                    ((i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Js(i.return, n, t),
                      (c.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(E(341));
                ((a.lanes |= n),
                  (c = a.alternate),
                  c !== null && (c.lanes |= n),
                  Js(a, n, t),
                  (a = i.sibling));
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null;) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    ((i.return = a.return), (a = i));
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        (ve(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        vn(t, n),
        (s = Be(s)),
        (r = r(s)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return ((r = t.type), (s = We(r, t.pendingProps)), (s = We(r.type, s)), go(e, t, r, s, n));
    case 15:
      return Sc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : We(r, s)),
        Zr(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), cl(t)) : (e = !1),
        vn(t, n),
        jc(t, r, s),
        ei(t, r, s, n),
        ri(null, t, r, !0, e, n)
      );
    case 19:
      return Pc(e, t, n);
    case 22:
      return bc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Vc(e, t) {
  return yu(e, t);
}
function Mf(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function De(e, t, n, r) {
  return new Mf(e, t, n, r);
}
function ca(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Pf(e) {
  if (typeof e == "function") return ca(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pi)) return 11;
    if (e === zi) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = De(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function qr(e, t, n, r, s, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) ca(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case rn:
        return Wt(n.children, s, i, t);
      case Mi:
        ((a = 8), (s |= 8));
        break;
      case Ss:
        return ((e = De(12, n, t, s | 2)), (e.elementType = Ss), (e.lanes = i), e);
      case bs:
        return ((e = De(13, n, t, s)), (e.elementType = bs), (e.lanes = i), e);
      case Cs:
        return ((e = De(19, n, t, s)), (e.elementType = Cs), (e.lanes = i), e);
      case tu:
        return Bl(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qo:
              a = 10;
              break e;
            case eu:
              a = 9;
              break e;
            case Pi:
              a = 11;
              break e;
            case zi:
              a = 14;
              break e;
            case gt:
              ((a = 16), (r = null));
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return ((t = De(a, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
}
function Wt(e, t, n, r) {
  return ((e = De(7, e, r, t)), (e.lanes = n), e);
}
function Bl(e, t, n, r) {
  return (
    (e = De(22, e, r, t)),
    (e.elementType = tu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ps(e, t, n) {
  return ((e = De(6, e, null, t)), (e.lanes = n), e);
}
function xs(e, t, n) {
  return (
    (t = De(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zf(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zl(0)),
    (this.expirationTimes = Zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function da(e, t, n, r, s, i, a, c, u) {
  return (
    (e = new zf(e, t, n, c, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = De(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gi(i),
    e
  );
}
function _f(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qc(e) {
  if (!e) return Tt;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Qu(e, n, t);
  }
  return t;
}
function Kc(e, t, n, r, s, i, a, c, u) {
  return (
    (e = da(n, r, !0, e, s, i, a, c, u)),
    (e.context = Qc(null)),
    (n = e.current),
    (r = we()),
    (s = Pt(n)),
    (i = ot(r, s)),
    (i.callback = t ?? null),
    Et(n, i, s),
    (e.current.lanes = s),
    jr(e, s, r),
    Pe(e, r),
    e
  );
}
function Al(e, t, n, r) {
  var s = t.current,
    i = we(),
    a = Pt(s);
  return (
    (n = Qc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Et(s, t, a)),
    e !== null && (Ge(e, s, a, i), Kr(e, s, a)),
    a
  );
}
function kl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Po(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fa(e, t) {
  (Po(e, t), (e = e.alternate) && Po(e, t));
}
function Tf() {
  return null;
}
var Gc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ma(e) {
  this._internalRoot = e;
}
Hl.prototype.render = ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Al(e, t, null, null);
};
Hl.prototype.unmount = ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Zt(function () {
      Al(null, e, null, null);
    }),
      (t[ct] = null));
  }
};
function Hl(e) {
  this._internalRoot = e;
}
Hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++);
    (vt.splice(n, 0, e), n === 0 && Eu(e));
  }
};
function ha(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zo() {}
function If(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var m = kl(a);
        i.call(m);
      };
    }
    var a = Kc(t, r, e, 0, null, !1, !1, "", zo);
    return (
      (e._reactRootContainer = a),
      (e[ct] = a.current),
      dr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      a
    );
  }
  for (; (s = e.lastChild);) e.removeChild(s);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var m = kl(u);
      c.call(m);
    };
  }
  var u = da(e, 0, !1, null, null, !1, !1, "", zo);
  return (
    (e._reactRootContainer = u),
    (e[ct] = u.current),
    dr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      Al(t, u, n, r);
    }),
    u
  );
}
function Wl(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof s == "function") {
      var c = s;
      s = function () {
        var u = kl(a);
        c.call(u);
      };
    }
    Al(t, a, e, s);
  } else a = If(n, t, e, s, r);
  return kl(a);
}
ku = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wn(t.pendingLanes);
        n !== 0 && (Ii(t, n | 1), Pe(t, se()), !(W & 6) && ((En = se() + 500), Rt()));
      }
      break;
    case 13:
      (Zt(function () {
        var r = dt(e, 1);
        if (r !== null) {
          var s = we();
          Ge(r, e, 1, s);
        }
      }),
        fa(e, 1));
  }
};
Oi = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = we();
      Ge(t, e, 134217728, n);
    }
    fa(e, 134217728);
  }
};
Su = function (e) {
  if (e.tag === 13) {
    var t = Pt(e),
      n = dt(e, t);
    if (n !== null) {
      var r = we();
      Ge(n, e, t, r);
    }
    fa(e, t);
  }
};
bu = function () {
  return V;
};
Cu = function (e, t) {
  var n = V;
  try {
    return ((V = e), t());
  } finally {
    V = n;
  }
};
Rs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ps(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Ol(r);
            if (!s) throw Error(E(90));
            (ru(r), Ps(r, s));
          }
        }
      }
      break;
    case "textarea":
      su(e, n);
      break;
    case "select":
      ((t = n.value), t != null && pn(e, !!n.multiple, t, !1));
  }
};
fu = aa;
mu = Zt;
var Of = { usingClientEntryPoint: !1, Events: [kr, on, Ol, cu, du, aa] },
  Bn = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Lf = {
    bundleType: Bn.bundleType,
    version: Bn.version,
    rendererPackageName: Bn.rendererPackageName,
    rendererConfig: Bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = xu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Bn.findFiberByHostInstance || Tf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ar.isDisabled && Ar.supportsFiber)
    try {
      ((zl = Ar.inject(Lf)), (tt = Ar));
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Of;
Oe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ha(t)) throw Error(E(200));
  return _f(e, t, null, n);
};
Oe.createRoot = function (e, t) {
  if (!ha(e)) throw Error(E(299));
  var n = !1,
    r = "",
    s = Gc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = da(e, 1, !1, null, null, n, !1, r, s)),
    (e[ct] = t.current),
    dr(e.nodeType === 8 ? e.parentNode : e),
    new ma(t)
  );
};
Oe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return ((e = xu(t)), (e = e === null ? null : e.stateNode), e);
};
Oe.flushSync = function (e) {
  return Zt(e);
};
Oe.hydrate = function (e, t, n) {
  if (!Ul(t)) throw Error(E(200));
  return Wl(null, e, t, !0, n);
};
Oe.hydrateRoot = function (e, t, n) {
  if (!ha(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    a = Gc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Kc(t, null, e, 1, n ?? null, s, !1, i, a)),
    (e[ct] = t.current),
    dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new Hl(t);
};
Oe.render = function (e, t, n) {
  if (!Ul(t)) throw Error(E(200));
  return Wl(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function (e) {
  if (!Ul(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Zt(function () {
        Wl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[ct] = null));
        });
      }),
      !0)
    : !1;
};
Oe.unstable_batchedUpdates = aa;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ul(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Wl(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function Yc() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc);
    } catch (e) {
      console.error(e);
    }
}
(Yc(), (Yo.exports = Oe));
var Rf = Yo.exports,
  Zc,
  _o = Rf;
((Zc = _o.createRoot), _o.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var $f = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Df = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  O = (e, t) => {
    const n = N.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: a,
          className: c = "",
          children: u,
          ...m
        },
        g,
      ) =>
        N.createElement(
          "svg",
          {
            ref: g,
            ...$f,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: a && Number(s) > 0 ? (Number(i) * 24) / Number(s) : i,
            className: ["lucide", `lucide-${Df(e)}`, c].join(" "),
            ...m,
          },
          [...t.map(([y, h]) => N.createElement(y, h)), ...(Array.isArray(u) ? u : [u])],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pa = O("Activity", [["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ff = O("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xc = O("Battery", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = O("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Af = O("Bold", [
  ["path", { d: "M14 12a4 4 0 0 0 0-8H6v8", key: "v2sylx" }],
  ["path", { d: "M15 20a4 4 0 0 0 0-8H6v8Z", key: "1ef5ya" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hf = O("Bookmark", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uf = O("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = O("Calculator", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const To = O("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xa = O("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sl = O("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jc = O("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gs = O("CloudRain", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const An = O("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ga = O("Cpu", [
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", key: "o3kz5p" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qc = O("FilePlus", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M9 15h6", key: "cctwl0" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bl = O("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vf = O("FolderPlus", [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ya = O("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qn = O("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = O("Grid3x3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = O("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = O("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = O("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Io = O("Inbox", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = O("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = O("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rd = O("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = O("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const va = O("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = O("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = O("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = O("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wa = O("Music", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = O("Palette", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oo = O("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pi = O("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xi = O("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gi = O("Play", [["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = O("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lo = O("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const em = O("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tm = O("Repeat", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = O("RotateCw", [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xt = O("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yi = O("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nm = O("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rm = O("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lm = O("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sm = O("Shuffle", [
  ["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22", key: "1wmou1" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2", key: "10bdb2" }],
  ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8", key: "vgxac0" }],
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const im = O("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const am = O("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ys = O("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn",
    },
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const om = O("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mn = O("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ja = O("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const um = O("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const id = O("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cl = O("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cm = O("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = O("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const El = O("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ml = O("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const It = O("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ad = O("Zap", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fm = O("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mm = O("ZoomOut", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
  ]),
  od = N.createContext(null),
  hm = () => N.useContext(od),
  Vt = () => Math.random().toString(36).slice(2, 11),
  nr = {
    "/home/灵者": [
      {
        id: "1",
        name: "Documents",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "2",
        name: "Downloads",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "3",
        name: "Music",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "4",
        name: "Pictures",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "5",
        name: "Videos",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "6",
        name: "桌面",
        type: "folder",
        size: "系统文件夹",
        system: !0,
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "7",
        name: "readme.txt",
        type: "document",
        size: "160 B",
        modified: new Date().toISOString().split("T")[0],
        content: `欢迎使用灵界 1.2026810.916.Extremely unstable!

这是一个以 AI 为核心的全新智能系统体验。
在这里，一切都是为你量身打造的。

祝你使用愉快!`,
      },
      {
        id: "8",
        name: "project.plan",
        type: "document",
        size: "95 B",
        modified: new Date().toISOString().split("T")[0],
        content: `灵界 1.2026810.916.Extremely unstable 开发计划

1. 帮助台
2. 空间桌面
3. 应用星环
4. 规则问答指引`,
      },
      {
        id: "9",
        name: "录音",
        type: "folder",
        size: "系统文件夹",
        system: !0,
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "10",
        name: "LJ OS",
        type: "folder",
        size: "系统文件夹",
        system: !0,
        modified: new Date().toISOString().split("T")[0],
      },
    ],
    "/home/灵者/LJ OS": [],
    "/home/灵者/Documents": [
      {
        id: "d1",
        name: "Work",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "d2",
        name: "Personal",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
      {
        id: "d3",
        name: "灵界OS手册.txt",
        type: "document",
        size: "102 B",
        modified: new Date().toISOString().split("T")[0],
        content: `灵界 1.2026810.916.Extremely unstable 用户手册

目录
1. 帮助台
2. 空间桌面
3. 应用星环
4. 规则问答指引`,
      },
      {
        id: "d4",
        name: "笔记.txt",
        type: "document",
        size: "68 B",
        modified: new Date().toISOString().split("T")[0],
        content: `今日笔记
- 体验灵界 1.2026810.916.Extremely unstable
- 探索新一代智能系统`,
      },
    ],
    "/home/灵者/Pictures": [
      {
        id: "p1",
        name: "Screenshots",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
    ],
    "/home/灵者/Music": [
      {
        id: "m1",
        name: "Playlist",
        type: "folder",
        size: "0项",
        modified: new Date().toISOString().split("T")[0],
      },
    ],
    "/home/灵者/Videos": [],
    "/home/灵者/Downloads": [],
    "/home/灵者/桌面": [],
    "/home/灵者/录音": [],
  },
  pm = () => {
    let e;
    try { e = localStorage.getItem("lingjie-fs"); } catch(_) { return calcFS(nr); }
    if (e)
      try {
        const t = JSON.parse(e);
        t["/home/灵者/Desktop"] &&
          !t["/home/灵者/桌面"] &&
          ((t["/home/灵者/桌面"] = t["/home/灵者/Desktop"]), delete t["/home/灵者/Desktop"]);
        t["/home/灵者"] &&
          (t["/home/灵者"] = t["/home/灵者"].map((n) =>
            n.name === "Desktop" ? { ...n, name: "桌面" } : n,
          ));
        t["/home/灵者"] && (t["/home/灵者"] = t["/home/灵者"].map((n) =>
          n.name === "录音" || n.name === "桌面" || n.name === "LJ OS"
            ? { ...n, system: !0, size: "系统文件夹" }
            : n,
        ));
        if (t["/home/灵者"] && !t["/home/灵者"].some((n) => n.name === "LJ OS")) {
          t["/home/灵者"].push({
            id: "ljos",
            name: "LJ OS",
            type: "folder",
            size: "系统文件夹",
            system: !0,
            modified: new Date().toISOString().split("T")[0],
          });
          t["/home/灵者/LJ OS"] = [];
        }
        if (t["/home/灵者/录音"] && t["/home/灵者/录音"].some((n) => n.name === "LJ" || n.name === "LJ OS")) {
          t["/home/灵者/录音"] = t["/home/灵者/录音"].filter((n) => n.name !== "LJ" && n.name !== "LJ OS");
          delete t["/home/灵者/录音/LJ"];
          delete t["/home/灵者/录音/LJ OS"];
        }
        if (t["/home/灵者"] && !t["/home/灵者"].some((n) => n.name === "录音")) {
          t["/home/灵者"].push({
            id: "recfolder",
            name: "录音",
            type: "folder",
            size: "系统文件夹",
            system: !0,
            modified: new Date().toISOString().split("T")[0],
          });
          t["/home/灵者/录音"] = [];
        }
        const r = calcFS(t);
        try { localStorage.setItem("lingjie-fs", JSON.stringify(r)); } catch(_) {}
        return r;
      } catch {
        const r = calcFS(nr);
        try { localStorage.setItem("lingjie-fs", JSON.stringify(r)); } catch(_) {}
        return r;
      }
    const fs = calcFS(nr);
    return ( (() => { try { localStorage.setItem("lingjie-fs", JSON.stringify(fs)); } catch(_) {} })(), fs);
  },
  calcFS = (e) => {
    const t = { ...e };
    return (
      Object.keys(t).forEach((n) => {
        if (n === "/home/灵者") return;
        const r = n.split("/"),
          s = r.pop(),
          i = r.join("/");
        t[i] &&
          (t[i] = t[i].map((a) =>
            a.type === "folder" && a.name === s && !a.system
              ? { ...a, size: `${(t[n] || []).length}项` }
              : a.type !== "folder" && a.name === s && a.content
                ? { ...a, size: `${new Blob([a.content]).size} B` }
                : a,
          ));
      }),
      t
    );
  },
  xm = (e) => {
    ( (() => { try { localStorage.setItem("lingjie-fs", JSON.stringify(e)); } catch(_) {} })(),
      window.dispatchEvent(new Event("lingjie-fs-updated")));
  },
  // IndexedDB 录音存储
  openDB = () => {
    return new Promise((resolve, reject) => {
      const r = indexedDB.open("LingjieRecordings", 1);
      r.onupgradeneeded = () => {
        const db = r.result;
        if (!db.objectStoreNames.contains("recordings")) {
          db.createObjectStore("recordings", { keyPath: "id", autoIncrement: true });
        }
      };
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    });
  }, saveRecording = async (blob) => {
    const db = await openDB();
    try {
      return await new Promise((resolve, reject) => {
        const tx = db.transaction("recordings", "readwrite");
        const store = tx.objectStore("recordings");
        const req = store.add({ blob, timestamp: Date.now() });
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    } finally { try { db.close(); } catch(_) {} }
  }, getRecording = async (id) => {
    const db = await openDB();
    try {
      return await new Promise((resolve, reject) => {
        const tx = db.transaction("recordings", "readonly");
        const store = tx.objectStore("recordings");
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    } finally { try { db.close(); } catch(_) {} }
  }, getAllRecordings = async () => {
    const db = await openDB();
    try {
      return await new Promise((resolve, reject) => {
        const tx = db.transaction("recordings", "readonly");
        const store = tx.objectStore("recordings");
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    } finally { try { db.close(); } catch(_) {} }
  }, Vm = () => {
    const [recording, setRecording] = N.useState(false);
    const [time, setTime] = N.useState(0);
    const [done, setDone] = N.useState(false);
    const [blobUrl, setBlobUrl] = N.useState(null);
    const [recordError, setRecordError] = N.useState(null);
    const intervalRef = N.useRef(null);
    const mediaRecorderRef = N.useRef(null);
    const chunksRef = N.useRef([]);
    const blobUrlRef = N.useRef(null);
    const streamRef = N.useRef(null);
    const pickMimeType = () => {
      const candidates = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/ogg;codecs=opus",
        "audio/mp4",
        "audio/3gpp",
        "audio/amr",
        "audio/aac",
      ];
      for (const m of candidates) {
        if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m)) {
          return m;
        }
      }
      return "";
    };
    const saveRecordingFile = async (blob, ext) => {
      try {
        const id = await saveRecording(blob);
        const fs = pm();
        const recordingDir = fs["/home/灵者/录音"] || [];
        const count = recordingDir.length + 1;
        recordingDir.push({
          id: "rec" + Date.now(),
          name: count + "." + ext,
          type: "music",
          size: (blob.size / 1024).toFixed(1) + " KB",
          modified: new Date().toISOString().split("T")[0],
          recordingId: id,
        });
        fs["/home/灵者/录音"] = recordingDir;
        try { localStorage.setItem("lingjie-fs", JSON.stringify(fs)); } catch(_) {}
        if (blobUrlRef.current) { try { URL.revokeObjectURL(blobUrlRef.current); } catch(_) {} }
        const newBlobUrl = URL.createObjectURL(blob);
        blobUrlRef.current = newBlobUrl;
        setBlobUrl(newBlobUrl);
        setDone(true);
      } catch (err) {
        console.error("Save failed:", err);
        setRecordError("保存失败：" + (err.message || "未知错误"));
      }
    };
    const startRecording = async () => {
      setRecordError(null);
      setDone(false);
      setBlobUrl(null);
      setTime(0);
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setRecordError("当前环境不支持录音功能");
          return;
        }
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
        const mimeType = pickMimeType();
        const mrOptions = mimeType ? { mimeType: mimeType } : undefined;
        let mr;
        try {
          mr = new MediaRecorder(stream, mrOptions);
        } catch(e1) {
          try { mr = new MediaRecorder(stream); } catch(e2) {
            stream.getTracks().forEach(t => t.stop());
            streamRef.current = null;
            setRecordError("录音初始化失败：" + (e2.message || "不支持的格式"));
            return;
          }
        }
        chunksRef.current = [];
        mr.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
        mr.onstop = async () => {
          if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
          if (chunksRef.current.length === 0) {
            setRecordError("录音数据为空，请重试");
            setRecording(false);
            return;
          }
          const blob = new Blob(chunksRef.current, { type: mr.mimeType || "audio/webm" });
          const ext = (mr.mimeType || "audio/webm").split(";")[0].split("/")[1] || "webm";
          await saveRecordingFile(blob, ext);
        };
        mr.onerror = (ev) => {
          setRecordError("录音出错：" + (ev.error ? ev.error.message : "未知错误"));
          setRecording(false);
          if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
        };
        mr.start(1000);
        mediaRecorderRef.current = mr;
        setRecording(true);
        let sec = 0;
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          sec++;
          setTime(sec);
          if (sec >= 120) {
            if (mr.state === "recording") mr.stop();
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setRecording(false);
          }
        }, 1000);
      } catch (err) {
        console.error("Recording failed:", err);
        if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
        if (err && err.name === "NotAllowedError") {
          setRecordError("麦克风权限被拒绝，请在系统设置中允许录音权限后重试");
        } else if (err && err.name === "NotFoundError") {
          setRecordError("未检测到麦克风设备");
        } else {
          setRecordError("录音失败：" + (err.message || "未知错误"));
        }
      }
    };
    const stopRecording = () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setRecording(false);
    };
    N.useEffect(() => {
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
          try { mediaRecorderRef.current.stop(); } catch(_) {}
        }
        if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
        if (blobUrlRef.current) { try { URL.revokeObjectURL(blobUrlRef.current); } catch(_) {} }
      };
    }, []);
    const fmt = (t) => {
      const m = Math.floor(t / 60);
      const s = t % 60;
      return `${m}:${s.toString().padStart(2, "0")}`;
    };
    return l.jsxs("div", {
      className: "w-full h-full flex flex-col items-center justify-center",
      style: { background: "#000" },
      children: [
        l.jsx("h1", {
          className: "text-4xl font-bold mb-12",
          style: { color: "#fff" },
          children: "录音",
        }),
        l.jsx("div", {
          className: "text-6xl font-mono mb-16",
          style: { color: "#fff" },
          children: fmt(time),
        }),
        recordError && l.jsx("div", {
          style: { color: "#ff6b6b", fontSize: 13, marginBottom: 16, textAlign: "center", maxWidth: 280, lineHeight: 1.5 },
          children: recordError,
        }),
        !done
          ? l.jsx("button", {
              onClick: recording ? stopRecording : startRecording,
              className: "w-20 h-20 rounded-full flex items-center justify-center transition-all",
              style: {
                background: recording ? "#666" : "#ff0000",
                border: "none",
                cursor: "pointer",
              },
              children: recording
                ? l.jsx("div", { style: { width: 28, height: 28, background: "#fff", borderRadius: 4 } })
                : l.jsx("div", { style: { width: 28, height: 28, background: "#fff", borderRadius: "50%" } }),
            })
          : l.jsxs("div", {
              className: "flex flex-col items-center gap-4",
              children: [
                l.jsx("p", {
                  style: { color: "#0f0", fontSize: 16 },
                  children: `✅ 录音已保存`,
                }),
                l.jsx("p", {
                  style: { color: "#aaa", fontSize: 13, marginTop: 4 },
                  children: `打开「文件管理器」→「录音」文件夹，双击即可播放`,
                }),
                l.jsx("button", {
                  onClick: () => { setDone(false); setBlobUrl(null); setTime(0); setRecordError(null); },
                  className: "px-6 py-3 rounded-lg text-white text-base",
                  style: { background: "#ff0000", border: "none", cursor: "pointer" },
                  children: "新录音",
                }),
              ],
            }),
      ],
    });
  }, vi = (e) => {
    var n;
    const t = ((n = e.split(".").pop()) == null ? void 0 : n.toLowerCase()) || "";
    return ["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(t)
      ? "image"
      : ["mp3", "wav", "flac", "ogg", "m4a", "aac"].includes(t)
        ? "music"
        : ["mp4", "avi", "mkv", "mov", "webm"].includes(t)
          ? "video"
          : "document";
  },
  vs = (e) =>
    e.type === "folder"
      ? l.jsx(ya, { className: "w-10 h-10 text-white" })
      : e.type === "image"
        ? l.jsx(nd, { className: "w-10 h-10 text-white" })
        : e.type === "music"
          ? l.jsx(wa, { className: "w-10 h-10 text-white" })
          : e.type === "video"
            ? l.jsx(bl, { className: "w-10 h-10 text-white" })
            : l.jsx(bl, { className: "w-10 h-10 text-white" }),
  ud = (e) => {
    if (!e || e <= 0 || isNaN(e)) return "0 B";
    const t = 1024,
      n = ["B", "KB", "MB", "GB", "TB"],
      r = Math.min(Math.floor(Math.log(e) / Math.log(t)), n.length - 1);
    return parseFloat((e / Math.pow(t, r)).toFixed(1)) + " " + n[r];
  },
  wi = [
    {
      id: "aurora",
      name: "蓝紫渐变粉紫",
      style: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    },
    {
      id: "ocean",
      name: "深蓝渐变浅蓝",
      style: "linear-gradient(135deg, #0052d4 0%, #4364f7 50%, #6fb1fc 100%)",
    },
    {
      id: "sunset",
      name: "红橙渐变浅橙",
      style: "linear-gradient(135deg, #ff512f 0%, #f09819 50%, #ffb347 100%)",
    },
    { id: "forest", name: "深青渐变绿", style: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)" },
    {
      id: "galaxy",
      name: "深蓝黑渐变深紫",
      style: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    },
    {
      id: "cherry",
      name: "浅粉渐变粉",
      style: "linear-gradient(135deg, #ffc3a0 0%, #ffafbd 50%, #ffc3a0 100%)",
    },
    {
      id: "mountain",
      name: "深蓝灰渐变浅蓝",
      style: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 50%, #c4e0e5 100%)",
    },
    { id: "lavender", name: "紫渐变浅粉", style: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
    {
      id: "midnight",
      name: "深灰渐变灰",
      style: "linear-gradient(135deg, #232526 0%, #414345 50%, #232526 100%)",
    },
    { id: "tropical", name: "青绿渐变亮绿", style: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
  ],
  Ro = ({ icon: e, label: t, onClick: n }) =>
    l.jsxs("button", {
      onClick: n,
      className:
        "group flex items-center gap-3 w-44 h-16 px-4 rounded-2xl macos-glass hover:bg-white/20 transition-all duration-200 active:scale-95 hover:-translate-y-1 animate-fade-in-up",
      children: [
        l.jsx("div", {
          className:
            "w-10 h-10 flex items-center justify-center text-white/90 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
          children: e,
        }),
        l.jsxs("div", {
          className: "text-left min-w-0",
          children: [
            l.jsx("span", {
              className: "block text-sm text-white/90 group-hover:text-white truncate",
              children: t,
            }),
            l.jsx("span", { className: "block text-[11px] text-white/45", children: "空间应用" }),
          ],
        }),
      ],
    }),
  gm = ({ username: unameProp }) => {
    const [e, t] = N.useState([
        "\x1B[1;36m灵界 1.2026810.916.Extremely unstable Terminal\x1B[0m",
        "\x1B[1;36mCopyright (c) 2026 谢子涵\x1B[0m",
        '输入 "help" 获取帮助',
        "",
      ]),
      [n, r] = N.useState(""),
      [s, i] = N.useState([]),
      [a, c] = N.useState(-1),
      [u, m] = N.useState("/home/灵者"),
      displayName = unameProp || (() => { try { return localStorage.getItem("lingjie-username") || "灵者"; } catch(e) { return "灵者"; } })(),
      g = N.useRef(null),
      y = () => {
        let w;
        try { w = localStorage.getItem("lingjie-fs"); } catch(_) { return nr; }
        if (w)
          try {
            return JSON.parse(w);
          } catch {
            return nr;
          }
        return nr;
      },
      h = (w) => {
        try { localStorage.setItem("lingjie-fs", JSON.stringify(w)); } catch(_) {}
      };
    N.useEffect(() => {
      g.current && (g.current.scrollTop = g.current.scrollHeight);
    }, [e]);
    const k = (w) => {
        const z = w.trim().split(" "),
          f = z[0].toLowerCase(),
          o = z.slice(1);
        let d = [];
        const x = y();
        switch (f) {
          case "help":
            d = [
              "\x1B[1;33m可用命令:\x1B[0m",
              "  help              - 显示帮助",
              "  clear / cls       - 清屏",
              "  ls [path]         - 列出文件",
              "  pwd               - 显示当前目录",
              "  cd <path>         - 切换目录",
              "  mkdir <name>      - 创建目录",
              "  touch <name>      - 创建文件",
              "  rm <name>         - 删除文件/空目录",
              "  cat <file>        - 查看文件内容",
              "  echo <text>       - 输出文本",
              "  whoami            - 显示当前用户",
              "  date / time       - 显示日期时间",
              "  weather           - 打开天气应用",
              "  uname [-a]        - 显示系统信息",
              "  neofetch          - 图形化系统信息",
              "  history           - 显示命令历史",
              "",
            ];
            break;
          case "clear":
          case "cls":
            t([]);
            return;
          case "pwd":
            d = [u, ""];
            break;
          case "cd":
            if (!o[0] || o[0] === "~") m("/home/灵者");
            else if (o[0] === "..") {
              const v = u.split("/");
              v.length > 3 && m(v.slice(0, -1).join("/"));
            } else if (o[0].startsWith("/"))
              x[o[0]] ? m(o[0]) : (d = [`cd: ${o[0]}: 没有那个文件或目录`, ""]);
            else {
              const v = `${u}/${o[0]}`.replace("//", "/");
              x[v] ? m(v) : (d = [`cd: ${o[0]}: 没有那个文件或目录`, ""]);
            }
            break;
          case "ls": {
            const v = x[u] || [];
            o[0] === "-la" || o[0] === "-l"
              ? (d = [
                  "total " + v.length,
                  ...v.map(
                    (S) =>
                      `${S.type === "folder" ? "drwxr-xr-x" : "-rw-r--r--"}  1 ${displayName} ${displayName} ${String(S.size || "").padStart(8)} ${S.modified} \x1B[1;34m${S.name}\x1B[0m`,
                  ),
                  "",
                ])
              : (d = [
                  v
                    .map((S) => (S.type === "folder" ? `\x1B[1;34m${S.name}\x1B[0m` : S.name))
                    .join("  ") || "(空)",
                  "",
                ]);
            break;
          }
          case "mkdir":
            if (!o[0]) d = ["mkdir: 缺少操作数", ""];
            else {
              const v = `${u}/${o[0]}`.replace("//", "/");
              x[v]
                ? (d = [`mkdir: 无法创建目录 '${o[0]}': 文件已存在`, ""])
                : ((x[u] = [
                    ...(x[u] || []),
                    {
                      id: Vt(),
                      name: o[0],
                      type: "folder",
                      size: "0项",
                      modified: new Date().toISOString().split("T")[0],
                    },
                  ]),
                  (x[v] = []),
                  h(x),
                  (d = [`目录 '${o[0]}' 创建成功`, ""]));
            }
            break;
          case "touch":
            if (!o[0]) d = ["touch: 缺少文件名", ""];
            else {
              const v = (x[u] || []).find((S) => S.name === o[0]);
              (v
                ? ((x[u] = (x[u] || []).map((S) =>
                    S.name === o[0]
                      ? { ...S, modified: new Date().toISOString().split("T")[0] }
                      : S,
                  )),
                  h(x))
                : ((x[u] = [
                    ...(x[u] || []),
                    {
                      id: Vt(),
                      name: o[0],
                      type: vi(o[0]),
                      size: "0 B",
                      modified: new Date().toISOString().split("T")[0],
                      content: "",
                    },
                  ]),
                  h(x)),
                (d = [`文件 '${o[0]}' ${v ? "已更新" : "创建成功"}`, ""]));
            }
            break;
          case "rm":
            if (!o[0]) d = ["rm: 缺少操作数", ""];
            else {
              const v = (x[u] || []).find((S) => S.name === o[0]);
              if (!v) d = [`rm: 无法删除 '${o[0]}': 没有那个文件或目录`, ""];
              else {
                if (((x[u] = (x[u] || []).filter((S) => S.name !== o[0])), v.type === "folder")) {
                  const S = `${u}/${o[0]}`.replace("//", "/");
                  delete x[S];
                }
                (h(x), (d = [`已删除 '${o[0]}'`, ""]));
              }
            }
            break;
          case "cat":
            if (!o[0]) d = ["cat: 缺少文件名", ""];
            else {
              const v = (x[u] || []).find((S) => S.name === o[0]);
              v
                ? v.type === "folder"
                  ? (d = [`cat: ${o[0]}: 是一个目录`, ""])
                  : (d = [
                      (v.content || "(空文件)").split(`
`),
                      "",
                    ].flat())
                : (d = [`cat: ${o[0]}: 没有那个文件或目录`, ""]);
            }
            break;
          case "echo":
            if (o.length > 1 && o[o.length - 2] === ">" && o[0] !== ">") {
              const v = o[o.length - 1],
                S = o.slice(0, -2).join(" ");
              ((x[u] = [
                ...(x[u] || []).filter((_) => _.name !== v),
                {
                  id: Vt(),
                  name: v,
                  type: vi(v),
                  size: ud(new Blob([S]).size),
                  modified: new Date().toISOString().split("T")[0],
                  content: S,
                },
              ]),
                h(x),
                (d = []));
            } else d = [o.join(" ") || "", ""];
            break;
          case "whoami":
            d = [displayName, ""];
            break;
          case "date":
            d = [
              new Date().toLocaleDateString("zh-CN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              "",
            ];
            break;
          case "time":
            d = [new Date().toLocaleTimeString("zh-CN", { hour12: !1 }), ""];
            break;
          case "weather":
            d = ["\x1B[1;32m正在打开天气应用...\x1B[0m", ""];
            window.dispatchEvent(new CustomEvent("lingjie-open-weather"));
            break;
          case "uname":
            d = o.includes("-a")
              ? ["灵界 1.2026810.916.Extremely unstable", ""]
              : ["灵界 1.2026810.916.Extremely unstable", ""];
            break;
          case "neofetch": {
            const _u = displayName;
            const _apps = "14";
            const _sec = (() => { try { const m = localStorage.getItem("lingjie-lock-method") || "none"; return m === "password" ? "密码锁" : m === "gesture" ? "手势锁" : "无"; } catch(_) { return "无"; } })();
            const _arch = "\x1B[1;36m       ___\x1B[0m        " + _u + "\x1B[1;36m@\x1B[0m灵界";
            const _arch2 = "\x1B[1;36m      /   \\\\\x1B[0m       -----------";
            const _arch3 = "\x1B[1;36m     |  L  |\x1B[0m       \x1B[1;33m系统\x1B[0m: 灵界 1.2026810.916.Extremely unstable";
            const _arch4 = "\x1B[1;36m      \\\\___/\x1B[0m       \x1B[1;33m内置应用\x1B[0m: " + _apps + " 个";
            const _arch5 = "               \x1B[1;33m安全\x1B[0m: " + _sec;
            const _arch6 = "               \x1B[1;33m开发者\x1B[0m: 谢子涵";
            const _arch7 = "               \x1B[1;33m许可证\x1B[0m: MIT License";
            d = [_arch, _arch2, _arch3, _arch4, _arch5, _arch6, _arch7, "", ""];
            break;
          }
          case "history":
            d =
              s.length > 0
                ? s.map((v, S) => `  ${S + 1}  ${v}`).concat([""])
                : ["没有命令历史", ""];
            break;
          case "蓝屏":
          case "lanping":
          case "lan ping":
          case "bsod":
          case "bluescreen":
          case "blue screen":
            d = ["触发蓝屏彩蛋...", "3 秒后进入蓝屏页面", ""];
            setTimeout(() => {
              try { sessionStorage.setItem("lingjie-bsod-easter-egg", "Easter Egg"); } catch {}
              location.reload();
            }, 3000);
            break;
          case "":
            break;
          default:
            if (w.trim() === "谢子涵不牛逼") {
              d = ["才怪", ""];
              break;
            }
            if (f === "谢子涵" || f === "xiezihan") {
              d = ["\x1B[1;33m牛逼\x1B[0m", ""];
              break;
            }
            d = [`灵壳: ${f}: 未找到命令`, ""];
        }
        const C = u === "/home/灵者" ? "~" : u.replace("/home/灵者", "~");
        (t((v) => [
          ...v,
          `\x1B[1;36m${displayName}\x1B[0m@\x1B[1;36m灵界\x1B[0m:\x1B[1;34m${C}\x1B[0m$ ${w}`,
          ...d,
        ]),
          w.trim() && i((v) => [...v, w]),
          c(-1));
      },
      p = (w) => {
        if (w.key === "Enter") (k(n), r(""));
        else if (w.key === "ArrowUp") {
          if ((w.preventDefault(), s.length > 0)) {
            const z = a < s.length - 1 ? a + 1 : a;
            (c(z), r(s[s.length - 1 - z] || ""));
          }
        } else if (w.key === "ArrowDown")
          if ((w.preventDefault(), a > 0)) {
            const z = a - 1;
            (c(z), r(s[s.length - 1 - z] || ""));
          } else a === 0 && (c(-1), r(""));
      };
    return l.jsx("div", {
      className: "flex flex-col h-full bg-gray-900/95 font-mono text-sm",
      children: l.jsxs("div", {
        ref: g,
        className: "flex-1 overflow-auto p-3 space-y-0.5",
        children: [
          e.map((w, z) =>
            l.jsx(
              "div",
              {
                className: "text-white whitespace-pre",
                dangerouslySetInnerHTML: {
                  __html: w
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/\x1b\[1;36m/g, '<span class="text-white font-semibold">')
                    .replace(/\x1b\[1;34m/g, '<span class="text-white font-semibold">')
                    .replace(/\x1b\[1;33m/g, '<span class="text-white font-semibold">')
                    .replace(/\x1b\[1;35m/g, '<span class="text-white font-semibold">')
                    .replace(/\x1b\[1;31m/g, '<span class="text-red-400 font-semibold">')
                    .replace(/\x1b\[1;32m/g, '<span class="text-green-400 font-semibold">')
                    .replace(/\x1b\[0m/g, "</span>"),
                },
              },
              z,
            ),
          ),
          l.jsxs("div", {
            className: "flex items-center text-white",
            children: [
              l.jsx("span", { className: "text-white", children: displayName + "@灵界" }),
              l.jsx("span", { className: "text-white", children: ":" }),
              l.jsx("span", {
                className: "text-white",
                children: u === "/home/灵者" ? "~" : u.replace("/home/灵者", "~"),
              }),
              l.jsx("span", { className: "text-white", children: "$ " }),
              l.jsx("input", {
                type: "text",
                value: n,
                onChange: (w) => r(w.target.value),
                onKeyDown: p,
                className:
                  "flex-1 bg-transparent outline-none border-none text-white caret-green-400",
                autoFocus: !0,
              }),
            ],
          }),
        ],
      }),
    });
  },
  ym = () => {
    const [e, t] = N.useState(pm),
      [n, r] = N.useState("/home/灵者"),
      toastTimerRef = N.useRef(null),
      [s, i] = N.useState(["/home/灵者"]),
      [a, c] = N.useState(0),
      [u, m] = N.useState([]),
      [g, y] = N.useState("grid"),
      [h, k] = N.useState("name"),
      [p, w] = N.useState(""),
      [z, f] = N.useState(null),
      [o, d] = N.useState(""),
      [x, C] = N.useState(null),
      [v, S] = N.useState(null),
      [sysBlock, setSysBlock] = N.useState(!1),
      [renameBlock, setRenameBlock] = N.useState(!1),
      [deleteBlock, setDeleteBlock] = N.useState(!1),
      [deleteConfirm, setDeleteConfirm] = N.useState(null),
      [_, T] = N.useState(""),
      [D, P] = N.useState(null),
      [U, M] = N.useState(""),
      [R, Q] = N.useState(null),
      [recordingPlayer, setRecordingPlayer] = N.useState(null),
      [toastType, setToastType] = N.useState("success"),
      [toastClosing, setToastClosing] = N.useState(!1),
      le = (j, type) => {
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        setToastClosing(!1);
        (Q(j), setToastType(type || "success"), toastTimerRef.current = setTimeout(() => setToastClosing(!0), 2e3));
      },
      ct = (j) => {
        const $ = { ...j };
        return (
          Object.keys($).forEach((K) => {
            if (K === "/home/灵者") return;
            const H = K.split("/"),
              Se = H.pop(),
              pt = H.join("/");
            $[pt] &&
              ($[pt] = $[pt].map(($t) =>
                $t.type === "folder" && $t.name === Se && !$t.system
                  ? { ...$t, size: `${($[K] || []).length}项` }
                  : $t.type !== "folder" && $t.name === Se && $t.content
                    ? { ...$t, size: `${new Blob([$t.content]).size} B` }
                    : $t,
              ));
          }),
          $
        );
      },
      Ze = (j) => {
        const $ = ct(j);
        (t($), xm($));
      };
    N.useEffect(() => {
      return () => { if (toastTimerRef.current) clearTimeout(toastTimerRef.current); };
    }, []);
    N.useEffect(() => {
      const j = () => {
        try {
          const $ = JSON.parse(localStorage.getItem("lingjie-fm-open-request") || "null");
          if (!$ || typeof $ !== "object") return;
          const K = pm(),
            H = $.path || "/home/灵者/桌面";
          (t(K), r(H), i(["/home/灵者", H]), c(1), m([]), S(null), T(""));
          if ($.fileId) {
            const Se = (K[H] || []).find((pt) => pt.id === $.fileId);
            Se && Se.content !== void 0 && (S(Se), T(Se.content || ""));
          }
          localStorage.removeItem("lingjie-fm-open-request");
        } catch {}
      };
      return (
        j(),
        window.addEventListener("lingjie-open-file-manager-item", j),
        () => window.removeEventListener("lingjie-open-file-manager-item", j)
      );
    }, []);
    const I = e[n] || [],
      F = [...I.filter((j) => j.name.toLowerCase().includes(p.toLowerCase()))].sort((j, $) =>
        j.type === "folder" && $.type !== "folder"
          ? -1
          : j.type !== "folder" && $.type === "folder"
            ? 1
            : h === "name"
              ? (j.name || "").localeCompare($.name || "")
              : h === "size"
                ? (j.size || "").localeCompare($.size || "")
                : (j.modified || "").localeCompare($.modified || ""),
      ),
      G = (j) => {
        let fs = e;
        if (e[j] === void 0) {
          const parts = j.split("/");
          parts.pop();
          const parent = parts.join("/");
          if (e[parent] && e[parent].some((item) => item.type === "folder" && j.endsWith("/" + item.name))) {
            fs = { ...e, [j]: [] };
            Ze(fs);
          } else {
            return;
          }
        }
        r(j);
        const $ = s.slice(0, a + 1);
        ($.push(j), i($), c($.length - 1), m([]));
      },
      ne = () => {
        a > 0 && (c(a - 1), r(s[a - 1]), m([]));
      },
      rt = () => {
        a < s.length - 1 && (c(a + 1), r(s[a + 1]), m([]));
      },
      ke = () => {
        const j = n.split("/");
        if (j.length > 3) {
          const $ = j.slice(0, -1).join("/");
          G($);
        }
      },
      ht = () => {
        if (!o.trim()) return;
        const name = o.trim();
        if ((e[n] || []).some((item) => item.name === name)) {
          le(`"${name}" 已存在`, "error");
          return;
        }
        const j = z === "folder" ? "folder" : vi(name),
          $ = {
            id: Vt(),
            name: name,
            type: j,
            size: z === "folder" ? "0项" : "0 B",
            modified: new Date().toISOString().split("T")[0],
            content: z === "file" ? "" : void 0,
          },
          K = `${n}/${name}`,
          H = { ...e };
        ((H[n] = [...(H[n] || []), $]),
          j === "folder" && (H[K] = []),
          Ze(H),
          f(null),
          d(""),
          le(`${z === "folder" ? "文件夹" : "文件"} "${name}" 创建成功`));
      },
      He = (j) => {
        const sysItems = I.filter((H) => j.includes(H.id)).filter((H) => H.system);
        if (sysItems.length > 0) {
          if (sysItems.some((H) => H.name === "LJ OS")) {
            try { sessionStorage.setItem("lingjie-bsod", "系统关键文件缺失"); sessionStorage.setItem("lingjie-bsod-time", Date.now()); sessionStorage.setItem("lingjie-bsod-type", "critical-missing"); } catch(e) {}
            window.dispatchEvent(new CustomEvent("lingjie-bsod", { detail: "系统关键文件缺失" }));
            return;
          }
          setDeleteBlock(!0);
          return;
        }
        const $ = { ...e };
        (I.filter((H) => j.includes(H.id)).forEach((H) => {
          if ((($[n] = ($[n] || []).filter((Se) => Se.id !== H.id)), H.type === "folder")) {
            const Se = `${n}/${H.name}`;
            (delete $[Se],
              Object.keys($).forEach((pt) => {
                pt.startsWith(Se + "/") && delete $[pt];
              }));
          }
        }),
          Ze($),
          m([]),
          le(`已删除 ${j.length} 个项目`));
      },
      Xe = () => {
        if (!D || !U.trim()) return;
        const newName = U.trim();
        if (newName !== D.name && (e[n] || []).some((H) => H.name === newName)) {
          le(`"${newName}" 已存在`, "error");
          return;
        }
        const j = { ...e },
          $ = `${n}/${D.name}`,
          K = `${n}/${newName}`;
        ((j[n] = (j[n] || []).map((H) =>
          H.id === D.id
            ? { ...H, name: newName, modified: new Date().toISOString().split("T")[0] }
            : H,
        )),
          D.type === "folder" && j[$] && ((j[K] = j[$]), delete j[$]),
          Ze(j),
          P(null),
          M(""),
          le("重命名成功"));
      },
      en = (j) => {
        if (j.system && j.name === "LJ OS") { setSysBlock(!0); return; }
        if (j.type === "folder") { G(`${n}/${j.name}`); return; }
        if (j.type === "music" && j.recordingId) {
          getRecording(j.recordingId).then((rec) => {
            if (rec && rec.blob) {
              setRecordingPlayer((prev) => {
                if (prev && prev.url) { try { URL.revokeObjectURL(prev.url); } catch(_) {} }
                return { url: URL.createObjectURL(rec.blob), name: j.name };
              });
            }
          }).catch(() => {});
          return;
        }
        j.content !== void 0 && (S(j), T(j.content || ""));
      },
      b = () => {
        if (!v) return;
        const j = { ...e },
          $ = new Blob([_]).size;
        ((j[n] = (j[n] || []).map((K) =>
          K.id === v.id
            ? { ...K, content: _, size: ud($), modified: new Date().toISOString().split("T")[0] }
            : K,
        )),
          Ze(j),
          S(null),
          T(""),
          le("文件已保存"));
      };
    return l.jsxs("div", {
      className: "flex flex-col h-full bg-gray-900/95",
      children: [
        l.jsxs("div", {
          className: "flex items-center gap-2 p-2 bg-gray-800/50 border-b border-gray-700",
          children: [
            l.jsx("button", {
              onClick: ne,
              disabled: a === 0,
              className:
                "p-1.5 rounded hover:bg-gray-700 text-white hover:text-white disabled:opacity-30 transition-all",
              children: l.jsx(xa, { className: "w-4 h-4" }),
            }),
            l.jsx("button", {
              onClick: rt,
              disabled: a >= s.length - 1,
              className:
                "p-1.5 rounded hover:bg-gray-700 text-white hover:text-white disabled:opacity-30 transition-all",
              children: l.jsx(Sl, { className: "w-4 h-4" }),
            }),
            l.jsx("button", {
              onClick: ke,
              disabled: n === "/home/灵者",
              className:
                "p-1.5 rounded hover:bg-gray-700 text-white hover:text-white disabled:opacity-30 transition-all",
              children: l.jsx(Sl, { className: "w-4 h-4 rotate-180" }),
            }),
            l.jsx("div", {
              className: "flex-1 flex items-center bg-gray-800 rounded px-3 py-1.5",
              children: l.jsx("span", { className: "text-white text-sm", children: n }),
            }),
            l.jsxs("div", {
              className: "flex items-center bg-gray-800 rounded px-3 py-1.5",
              children: [
                l.jsx(Xt, { className: "w-4 h-4 text-white mr-2" }),
                l.jsx("input", {
                  type: "text",
                  value: p,
                  onChange: (j) => w(j.target.value),
                  placeholder: "搜索...",
                  className: "bg-transparent outline-none border-none text-white text-sm w-32",
                }),
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          className: "flex items-center gap-2 p-2 bg-gray-800/30 border-b border-gray-700",
          children: [
            l.jsxs("button", {
              onClick: () => f("folder"),
              className:
                "flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-700 text-white hover:text-white text-xs transition-colors",
              children: [l.jsx(Vf, { className: "w-4 h-4" }), "新建文件夹"],
            }),
            l.jsxs("button", {
              onClick: () => f("file"),
              className:
                "flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-700 text-white hover:text-white text-xs transition-colors",
              children: [l.jsx(qc, { className: "w-4 h-4" }), "新建文件"],
            }),
            l.jsx("div", { className: "w-px h-5 bg-gray-600 mx-1" }),
            l.jsxs("button", {
              onClick: () => u.length > 0 && setDeleteConfirm(u),
              className:
                "flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-700 text-white hover:text-white text-xs transition-colors disabled:opacity-30",
              disabled: u.length === 0,
              children: [l.jsx(Cl, { className: "w-4 h-4" }), "删除"],
            }),
            l.jsxs("button", {
              onClick: () => {
                const j = I.find(($) => $.id === u[0]);
                if (j && (j.name === "录音" || j.name === "桌面" || j.name === "LJ OS")) { setRenameBlock(!0); return; }
                j && (P(j), M(j.name));
              },
              disabled: u.length !== 1,
              className:
                "flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-700 text-white hover:text-white text-xs transition-colors disabled:opacity-30",
              children: [l.jsx(xi, { className: "w-4 h-4" }), "重命名"],
            }),
            l.jsxs("div", {
              className: "ml-auto flex items-center gap-2",
              children: [
                l.jsxs("select", {
                  value: h,
                  onChange: (j) => k(j.target.value),
                  className: "bg-gray-800 text-white text-xs rounded px-2 py-1 outline-none",
                  children: [
                    l.jsx("option", { value: "name", children: "按名称" }),
                    l.jsx("option", { value: "size", children: "按大小" }),
                    l.jsx("option", { value: "modified", children: "按时间" }),
                  ],
                }),
                l.jsxs("div", {
                  className: "flex bg-gray-800 rounded",
                  children: [
                    l.jsx("button", {
                      onClick: () => y("grid"),
                      className: `p-1.5 rounded-l transition-colors ${g === "grid" ? "bg-gray-600 text-white" : "text-white"}`,
                      children: l.jsx(Qf, { className: "w-4 h-4" }),
                    }),
                    l.jsx("button", {
                      onClick: () => y("list"),
                      className: `p-1.5 rounded-r transition-colors ${g === "list" ? "bg-gray-600 text-white" : "text-white"}`,
                      children: l.jsx(rd, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        l.jsx("div", {
          className: "flex-1 overflow-auto p-4",
          children:
            F.length === 0
              ? l.jsxs("div", {
                  className: "flex flex-col items-center justify-center h-full text-white",
                  children: [
                    l.jsx(ya, { className: "w-16 h-16 mb-4 opacity-30" }),
                    l.jsx("p", { children: "空文件夹" }),
                  ],
                })
              : g === "grid"
                ? l.jsx("div", {
                    className: "grid grid-cols-5 gap-4",
                    children: F.map((j) =>
                      l.jsxs(
                        "button",
                        {
                          onClick: ($) => {
                            $.ctrlKey || $.metaKey
                              ? m((K) =>
                                  K.includes(j.id) ? K.filter((H) => H !== j.id) : [...K, j.id],
                                )
                              : m([j.id]);
                          },
                          onDoubleClick: () => en(j),
                          className: `flex flex-col items-center p-3 rounded-lg transition-all ${u.includes(j.id) ? "bg-blue-500/30 ring-1 ring-blue-400" : "hover:bg-gray-700/50"}`,
                          children: [
                            vs(j),
                            l.jsx("span", {
                              className: "text-xs text-white mt-2 text-center truncate w-full",
                              children: j.name,
                            }),
                            l.jsx("span", { className: "text-xs text-white", children: j.size }),
                          ],
                        },
                        j.id,
                      ),
                    ),
                  })
                : l.jsx("div", {
                    className: "space-y-1",
                    children: F.map((j) =>
                      l.jsxs(
                        "button",
                        {
                          onClick: ($) => {
                            $.ctrlKey || $.metaKey
                              ? m((K) =>
                                  K.includes(j.id) ? K.filter((H) => H !== j.id) : [...K, j.id],
                                )
                              : m([j.id]);
                          },
                          onDoubleClick: () => en(j),
                          className: `flex items-center w-full p-2 rounded-lg transition-all ${u.includes(j.id) ? "bg-blue-500/30 ring-1 ring-blue-400" : "hover:bg-gray-700/50"}`,
                          children: [
                            l.jsx("span", { className: "w-8 h-8 mr-3", children: vs(j) }),
                            l.jsx("span", {
                              className: "flex-1 text-left text-sm text-white",
                              children: j.name,
                            }),
                            l.jsx("span", {
                              className: "text-xs text-white w-20 text-right",
                              children: j.size,
                            }),
                            l.jsx("span", {
                              className: "text-xs text-white w-28 text-right",
                              children: j.modified,
                            }),
                          ],
                        },
                        j.id,
                      ),
                    ),
                  }),
        }),
        l.jsxs("div", {
          className:
            "flex items-center justify-between p-2 bg-gray-800/50 border-t border-gray-700 text-xs text-white",
          children: [
            l.jsxs("span", { children: [F.length, " 项目"] }),
            l.jsx("span", { children: u.length > 0 ? `已选择 ${u.length} 项` : "未选择" }),
          ],
        }),
        z &&
          l.jsx("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
            onClick: () => f(null),
            children: l.jsxs("div", {
              className: "bg-gray-800 rounded-xl p-4 w-80",
              onClick: (j) => j.stopPropagation(),
              children: [
                l.jsxs("h3", {
                  className: "text-white font-medium mb-4",
                  children: ["新建", z === "folder" ? "文件夹" : "文件"],
                }),
                l.jsx("input", {
                  type: "text",
                  value: o,
                  onChange: (j) => d(j.target.value),
                  onKeyDown: (j) => j.key === "Enter" && ht(),
                  placeholder: z === "folder" ? "新文件夹" : "新文件.txt",
                  className:
                    "w-full px-3 py-2 bg-gray-700 rounded-lg text-white outline-none focus:ring-1 focus:ring-blue-500 mb-4",
                  autoFocus: !0,
                }),
                l.jsxs("div", {
                  className: "flex justify-end gap-2",
                  children: [
                    l.jsx("button", {
                      onClick: () => f(null),
                      className:
                        "px-4 py-2 rounded-lg text-white hover:text-white transition-colors",
                      children: "取消",
                    }),
                    l.jsx("button", {
                      onClick: ht,
                      className:
                        "px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-colors",
                      children: "创建",
                    }),
                  ],
                }),
              ],
            }),
          }),
        x &&
          l.jsx("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
            onClick: () => C(null),
            children: l.jsxs("div", {
              className: "bg-gray-800 rounded-xl p-6 w-96",
              onClick: (j) => j.stopPropagation(),
              children: [
                l.jsxs("div", {
                  className: "flex items-center gap-4 mb-6",
                  children: [
                    l.jsx("div", { className: "w-16 h-16", children: vs(x) }),
                    l.jsxs("div", {
                      children: [
                        l.jsx("h3", { className: "text-white font-medium", children: x.name }),
                        l.jsx("p", { className: "text-sm text-white", children: x.type }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "space-y-3 text-sm",
                  children: [
                    l.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        l.jsx("span", { className: "text-white", children: "大小" }),
                        l.jsx("span", { className: "text-white", children: x.size }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        l.jsx("span", { className: "text-white", children: "修改时间" }),
                        l.jsx("span", { className: "text-white", children: x.modified }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        l.jsx("span", { className: "text-white", children: "路径" }),
                        l.jsx("span", { className: "text-white", children: n }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "flex gap-2 mt-6",
                  children: [
                    l.jsx("button", {
                      onClick: () => {
                        (en(x), C(null));
                      },
                      className:
                        "flex-1 px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-colors",
                      children: "打开",
                    }),
                    l.jsx("button", {
                      onClick: () => C(null),
                      className:
                        "flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors",
                      children: "关闭",
                    }),
                  ],
                }),
              ],
            }),
          }),
        v &&
          l.jsx("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
            onClick: () => S(null),
            children: l.jsxs("div", {
              className: "bg-gray-800 rounded-xl p-4 w-[600px] h-[500px] flex flex-col",
              onClick: (j) => j.stopPropagation(),
              children: [
                l.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    l.jsx("h3", { className: "text-white font-medium", children: v.name }),
                    l.jsx("button", {
                      onClick: () => S(null),
                      className: "text-white hover:text-white",
                      children: l.jsx(It, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                l.jsx("textarea", {
                  value: _,
                  onChange: (j) => T(j.target.value),
                  className:
                    "flex-1 w-full bg-gray-700 rounded-lg text-white p-3 outline-none resize-none font-mono text-sm",
                }),
                l.jsxs("div", {
                  className: "flex justify-end gap-2 mt-4",
                  children: [
                    l.jsx("button", {
                      onClick: () => S(null),
                      className:
                        "px-4 py-2 rounded-lg text-white hover:text-white transition-colors",
                      children: "取消",
                    }),
                    l.jsx("button", {
                      onClick: b,
                      className:
                        "px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-colors",
                      children: "保存",
                    }),
                  ],
                }),
              ],
            }),
          }),
        recordingPlayer &&
          l.jsx("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
            onClick: () => { if (recordingPlayer && recordingPlayer.url) { try { URL.revokeObjectURL(recordingPlayer.url); } catch(_) {} } setRecordingPlayer(null); },
            children: l.jsxs("div", {
              className: "bg-gray-800 rounded-xl p-8 w-96 flex flex-col items-center gap-6",
              onClick: (j) => j.stopPropagation(),
              children: [
                l.jsx("h3", { className: "text-white font-medium text-lg", children: recordingPlayer.name }),
                l.jsx("audio", {
                  src: recordingPlayer.url,
                  controls: true,
                  autoPlay: true,
                  className: "w-full",
                  style: { borderRadius: 8 },
                }),
                l.jsx("button", {
                  onClick: () => { if (recordingPlayer && recordingPlayer.url) { try { URL.revokeObjectURL(recordingPlayer.url); } catch(_) {} } setRecordingPlayer(null); },
                  className: "px-6 py-2 rounded-lg text-white transition-colors",
                  style: { background: "#ff4444" },
                  children: "关闭",
                }),
              ],
            }),
          }),
        deleteConfirm &&
          l.jsx("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 lingjie-anim-fade-in",
            onClick: () => setDeleteConfirm(null),
            children: l.jsxs("div", {
              className: "bg-gray-800 rounded-xl p-4 w-80 lingjie-anim-scale-in",
              onClick: (j) => j.stopPropagation(),
              children: [
                l.jsx("h3", {
                  className: "text-white font-medium mb-4 text-center",
                  children: (function () {
                    const items = I.filter((H) => deleteConfirm.includes(H.id));
                    if (items.length === 1) return "是否删除" + items[0].name;
                    if (items.length > 1) return "是否删除这" + items.length + "个项目";
                    return "是否删除所选项目";
                  })(),
                }),
                l.jsxs("div", {
                  className: "flex justify-center gap-4",
                  children: [
                    l.jsx("button", {
                      onClick: () => {
                        He(deleteConfirm);
                        setDeleteConfirm(null);
                      },
                      className:
                        "px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-400 transition-colors",
                      children: "确定",
                    }),
                    l.jsx("button", {
                      onClick: () => setDeleteConfirm(null),
                      className:
                        "px-4 py-2 rounded-lg text-white hover:text-white transition-colors",
                      children: "取消",
                    }),
                  ],
                }),
              ],
            }),
          }),
        D &&
          l.jsx("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 lingjie-anim-fade-in",
            onClick: () => P(null),
            children: l.jsxs("div", {
              className: "bg-gray-800 rounded-xl p-4 w-80 lingjie-anim-scale-in",
              onClick: (j) => j.stopPropagation(),
              children: [
                l.jsx("h3", { className: "text-white font-medium mb-4", children: "重命名" }),
                l.jsx("input", {
                  type: "text",
                  value: U,
                  onChange: (j) => M(j.target.value),
                  onKeyDown: (j) => j.key === "Enter" && Xe(),
                  className:
                    "w-full px-3 py-2 bg-gray-700 rounded-lg text-white outline-none focus:ring-1 focus:ring-blue-500 mb-4",
                  autoFocus: !0,
                }),
                l.jsxs("div", {
                  className: "flex justify-end gap-2",
                  children: [
                    l.jsx("button", {
                      onClick: () => P(null),
                      className:
                        "px-4 py-2 rounded-lg text-white hover:text-white transition-colors",
                      children: "取消",
                    }),
                    l.jsx("button", {
                      onClick: Xe,
                      className:
                        "px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-colors",
                      children: "确定",
                    }),
                  ],
                }),
              ],
            }),
          }),
        R &&
          l.jsx("div", {
            className:
              "absolute bottom-2 right-2 " + (toastClosing ? "lingjie-anim-toast-out" : "lingjie-anim-toast-in") + " " + (toastType === "error" ? "bg-red-500/90" : "bg-green-500/90") + " text-white px-4 py-2 rounded-lg text-sm z-50",
            onAnimationEnd: toastClosing ? () => { Q(null); setToastClosing(!1); } : undefined,
            children: R,
          }),
        sysBlock &&
          l.jsx("div", {
            className: "fixed inset-0 z-[10001] flex items-center justify-center bg-black/50 backdrop-blur-sm lingjie-anim-fade-in",
            onClick: () => setSysBlock(!1),
            children: l.jsxs("div", {
              className: "w-80 bg-gray-800/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 animate-scale-in",
              onClick: (b) => b.stopPropagation(),
              children: [
                l.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    l.jsxs("div", { className: "flex items-center gap-2", children: [
                      l.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg", children: "L" }),
                      l.jsx("span", { className: "text-white font-medium", children: "灵界 OS" }),
                    ] }),
                    l.jsx("button", { onClick: () => setSysBlock(!1), className: "w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/30 text-red-400 text-xl leading-none transition-all", children: "×" }),
                  ],
                }),
                l.jsx("p", { className: "text-red-500 text-center text-lg font-medium", children: "禁止访问" }),
              ],
            }),
          }),
        renameBlock &&
          l.jsx("div", {
            className: "fixed inset-0 z-[10001] flex items-center justify-center bg-black/50 backdrop-blur-sm",
            onClick: () => setRenameBlock(!1),
            children: l.jsxs("div", {
              className: "w-80 bg-gray-800/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 animate-scale-in",
              onClick: (b) => b.stopPropagation(),
              children: [
                l.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    l.jsxs("div", { className: "flex items-center gap-2", children: [
                      l.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg", children: "L" }),
                      l.jsx("span", { className: "text-white font-medium", children: "灵界 OS" }),
                    ] }),
                    l.jsx("button", { onClick: () => setRenameBlock(!1), className: "w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/30 text-red-400 text-xl leading-none transition-all", children: "×" }),
                  ],
                }),
                l.jsx("p", { className: "text-red-500 text-center text-lg font-medium", children: "禁止重命名" }),
              ],
            }),
          }),
        deleteBlock &&
          l.jsx("div", {
            className: "fixed inset-0 z-[10001] flex items-center justify-center bg-black/50 backdrop-blur-sm",
            onClick: () => setDeleteBlock(!1),
            children: l.jsxs("div", {
              className: "w-80 bg-gray-800/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 animate-scale-in",
              onClick: (b) => b.stopPropagation(),
              children: [
                l.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    l.jsxs("div", { className: "flex items-center gap-2", children: [
                      l.jsx("div", { className: "w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg", children: "L" }),
                      l.jsx("span", { className: "text-white font-medium", children: "灵界 OS" }),
                    ] }),
                    l.jsx("button", { onClick: () => setDeleteBlock(!1), className: "w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/30 text-red-400 text-xl leading-none transition-all", children: "×" }),
                  ],
                }),
                l.jsx("p", { className: "text-red-500 text-center text-lg font-medium", children: "禁止删除" }),
              ],
            }),
          }),
      ],
    });
  },
  $o = (e) => {
    const t = Math.max(0, e),
      n = Math.floor(t / 3600),
      r = Math.floor((t % 3600) / 60),
      s = t % 60;
    return [n, r, s].map((i) => String(i).padStart(2, "0")).join(":");
  },
  vm = () => {
    const [e, t] = N.useState(new Date()),
      [n, r] = N.useState(0),
      [s, i] = N.useState(!1),
      [a, c] = N.useState(5),
      [u, m] = N.useState(0),
      [g, y] = N.useState(5 * 60),
      [h, k] = N.useState(!1),
      [p, w] = N.useState(!1);
    (N.useEffect(() => {
      const x = setInterval(() => t(new Date()), 1e3);
      return () => clearInterval(x);
    }, []),
      N.useEffect(() => {
        if (!s) return;
        const x = setInterval(() => {
          r((C) => C + 1);
        }, 1e3);
        return () => clearInterval(x);
      }, [s]),
      N.useEffect(() => {
        if (!h) return;
        const x = setInterval(() => {
          y((C) => (C <= 1 ? (k(!1), w(!0), 0) : C - 1));
        }, 1e3);
        return () => clearInterval(x);
      }, [h]));
    const z = () => {
        const x = Math.max(0, a) * 60 + Math.max(0, u);
        ((g === 0 || g === x) && y(x), (x > 0 || g > 0) && (w(!1), k(!0)));
      },
      f = () => {
        const x = Math.max(0, a) * 60 + Math.max(0, u);
        (k(!1), w(!1), y(x));
      },
      o = (x) => {
        const C = Math.min(999, Math.max(0, x || 0));
        (c(C), h || (y(C * 60 + u), w(!1)));
      },
      d = (x) => {
        const C = Math.min(59, Math.max(0, x || 0));
        (m(C), h || (y(a * 60 + C), w(!1)));
      };
    return l.jsx("div", {
      className: "h-full bg-white/5 backdrop-blur-2xl text-white overflow-auto",
      children: l.jsxs("div", {
        className: "p-6 space-y-6",
        children: [
          l.jsxs("div", {
            className:
              "relative rounded-2xl bg-gradient-to-br from-blue-500/25 via-cyan-500/10 to-purple-500/20 border border-blue-400/20 p-6 animate-fade-in-up animate-glow-pulse shimmer-sweep",
            children: [
              l.jsx("div", {
                className:
                  "absolute right-8 top-8 w-24 h-24 rounded-full bg-cyan-400/10 blur-2xl animate-float-soft",
              }),
              l.jsx("div", {
                className:
                  "absolute right-20 bottom-6 w-16 h-16 rounded-full bg-purple-400/10 blur-xl animate-float-soft motion-delay-200",
              }),
              l.jsxs("div", {
                className: "flex items-center gap-3 text-white mb-4",
                children: [
                  l.jsx(Jc, { className: "w-6 h-6 animate-spin-slow" }),
                  l.jsx("span", { className: "text-sm", children: "时间" }),
                ],
              }),
              l.jsx("div", {
                className: "relative text-6xl font-light tracking-wider animate-tick-pop",
                children: e.toLocaleTimeString("zh-CN", { hour12: !1 }),
              }),
              l.jsx("div", {
                className: "mt-3 text-white",
                children: e.toLocaleDateString("zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                }),
              }),
            ],
          }),
          l.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            children: [
              l.jsxs("div", {
                className:
                  "rounded-2xl bg-gray-800/70 border border-gray-700 p-6 animate-fade-in-up motion-delay-100 hover-lift hover:border-green-400/40",
                children: [
                  l.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("h3", { className: "text-xl font-semibold", children: "计时" }),
                          l.jsx("p", {
                            className: "text-sm text-white mt-1",
                            children: "用于正向记录经过时间",
                          }),
                        ],
                      }),
                      l.jsx(pa, {
                        className: `w-8 h-8 text-white ${s ? "animate-pulse" : "animate-float-soft"}`,
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: `text-5xl font-mono text-center py-8 bg-gray-900/70 rounded-xl transition-all duration-300 ${s ? "animate-tick-pop ring-1 ring-green-400/40 text-white" : ""}`,
                    children: $o(n),
                  }),
                  l.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      l.jsxs("button", {
                        onClick: () => i(!s),
                        className: `flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${s ? "bg-yellow-500 hover:bg-yellow-400" : "bg-green-500 hover:bg-green-400"}`,
                        children: [
                          s
                            ? l.jsx(pi, { className: "w-5 h-5" })
                            : l.jsx(gi, { className: "w-5 h-5" }),
                          s ? "暂停" : "开始",
                        ],
                      }),
                      l.jsx("button", {
                        onClick: () => {
                          (i(!1), r(0));
                        },
                        className:
                          "px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95",
                        children: "重置",
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "rounded-2xl bg-gray-800/70 border border-gray-700 p-6 animate-fade-in-up motion-delay-200 hover-lift hover:border-orange-400/40",
                children: [
                  l.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("h3", { className: "text-xl font-semibold", children: "倒计时" }),
                          l.jsx("p", {
                            className: "text-sm text-white mt-1",
                            children: "设置时长后开始倒数",
                          }),
                        ],
                      }),
                      l.jsx(ad, {
                        className: `w-8 h-8 text-white ${h ? "animate-pulse" : "animate-float-soft"}`,
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: `text-5xl font-mono text-center py-8 rounded-xl transition-all duration-300 ${p ? "bg-red-500/20 text-white ring-1 ring-red-400/50 animate-warning-pulse" : h ? "bg-gray-900/70 animate-tick-pop ring-1 ring-orange-400/40 text-white" : "bg-gray-900/70"}`,
                    children: $o(g),
                  }),
                  p &&
                    l.jsx("div", {
                      className: "mt-3 text-center text-white text-sm animate-scale-in",
                      children: "倒计时结束",
                    }),
                  l.jsxs("div", {
                    className: "grid grid-cols-2 gap-3 mt-6",
                    children: [
                      l.jsxs("label", {
                        className: "block",
                        children: [
                          l.jsx("span", { className: "text-sm text-white", children: "分钟" }),
                          l.jsx("input", {
                            type: "number",
                            min: "0",
                            max: "999",
                            value: a,
                            disabled: h,
                            onChange: (x) => o(Number(x.target.value)),
                            className:
                              "mt-2 w-full px-4 py-3 bg-gray-700 rounded-xl text-white outline-none focus:ring-1 focus:ring-blue-400 disabled:opacity-60",
                          }),
                        ],
                      }),
                      l.jsxs("label", {
                        className: "block",
                        children: [
                          l.jsx("span", { className: "text-sm text-white", children: "秒" }),
                          l.jsx("input", {
                            type: "number",
                            min: "0",
                            max: "59",
                            value: u,
                            disabled: h,
                            onChange: (x) => d(Number(x.target.value)),
                            className:
                              "mt-2 w-full px-4 py-3 bg-gray-700 rounded-xl text-white outline-none focus:ring-1 focus:ring-blue-400 disabled:opacity-60",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      l.jsxs("button", {
                        onClick: () => (h ? k(!1) : z()),
                        className: `flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${h ? "bg-yellow-500 hover:bg-yellow-400" : "bg-orange-500 hover:bg-orange-400"}`,
                        children: [
                          h
                            ? l.jsx(pi, { className: "w-5 h-5" })
                            : l.jsx(gi, { className: "w-5 h-5" }),
                          h ? "暂停" : "开始",
                        ],
                      }),
                      l.jsx("button", {
                        onClick: f,
                        className:
                          "px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95",
                        children: "重置",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  EasterEgg = () => {
    const letters = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: 20 + Math.random() * 60,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 2,
    }));
    return l.jsx("div", {
      className: "h-full w-full overflow-hidden relative",
      style: { background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 30%, #f59e0b 70%, #fbbf24 100%)" },
      children: letters.map((letter) =>
        l.jsx("div", {
          className: "absolute text-white font-black",
          style: {
            left: `${letter.x}%`,
            top: `${letter.y}%`,
            fontSize: `${letter.size}px`,
            animation: `spin ${letter.duration}s linear infinite`,
            animationDelay: `${letter.delay}s`,
            opacity: 0.6 + Math.random() * 0.4,
          },
          children: "L",
        }, letter.id)
      ),
    });
  },
  TimeCalibration = () => {
    const [calibrated, setCalibrated] = N.useState(!1);
    const [timeOffset, setTimeOffset] = N.useState(0);
    const [currentTime, setCurrentTime] = N.useState(new Date());
    const [loading, setLoading] = N.useState(!1);
    const [error, setError] = N.useState("");
    const [warning, setWarning] = N.useState("");
    const [deviceTime, setDeviceTime] = N.useState(new Date());
    const mountedRef = N.useRef(!0);
    N.useEffect(() => { mountedRef.current = !0; return () => { mountedRef.current = !1; }; }, []);

    N.useEffect(() => {
      const timer = setInterval(() => {
        const now = Date.now();
        setCurrentTime(new Date(now + timeOffset));
        setDeviceTime(new Date(now));
      }, 1000);
      return () => clearInterval(timer);
    }, [timeOffset]);

    const formatTime = (d) => d.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const formatDate = (d) => d.toLocaleDateString("zh-CN", { month: "short", day: "numeric", weekday: "short" });

    const handleCalibrate = () => {
      setLoading(!0);
      setError("");
      setWarning("");

      const tryApis = [
        {
          name: "cloudflare",
          fetch: () => {
            const t0 = Date.now();
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 5000);
            return fetch("https://cloudflare.com/cdn-cgi/trace", { signal: controller.signal })
              .then((r) => r.text())
              .then((text) => {
                clearTimeout(timer);
                const t1 = Date.now();
                const m = text.match(/ts=([\d.]+)/);
                if (!m) throw new Error("invalid");
                const serverTime = new Date(parseFloat(m[1]) * 1000);
                if (isNaN(serverTime.getTime())) throw new Error("invalid");
                const rtt = t1 - t0;
                const localTime = t0 + rtt / 2;
                const offset = serverTime.getTime() - localTime;
                return { offset, serverTime, source: "cloudflare" };
              })
              .catch((e) => { clearTimeout(timer); throw e; });
          },
        },
        {
          name: "jsdelivr",
          fetch: () => {
            const t0 = Date.now();
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 5000);
            return fetch("https://cdn.jsdelivr.net/npm/react/package.json", { method: "HEAD", signal: controller.signal })
              .then((response) => {
                clearTimeout(timer);
                const t1 = Date.now();
                const dateHeader = response.headers.get("Date");
                if (!dateHeader) throw new Error("no date header");
                const serverTime = new Date(dateHeader);
                if (isNaN(serverTime.getTime())) throw new Error("invalid");
                const rtt = t1 - t0;
                const localTime = t0 + rtt / 2;
                const offset = serverTime.getTime() - localTime;
                return { offset, serverTime, source: "jsdelivr" };
              })
              .catch((e) => { clearTimeout(timer); throw e; });
          },
        },
        {
          name: "worldtime",
          fetch: () => {
            const t0 = Date.now();
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 5000);
            return fetch("https://worldtimeapi.org/api/timezone/Asia/Shanghai", { signal: controller.signal })
              .then((r) => r.json())
              .then((data) => {
                clearTimeout(timer);
                const t1 = Date.now();
                const serverTime = data.utc_datetime ? new Date(data.utc_datetime) : null;
                if (!serverTime || isNaN(serverTime.getTime())) throw new Error("invalid");
                const rtt = t1 - t0;
                const localTime = t0 + rtt / 2;
                const offset = serverTime.getTime() - localTime;
                return { offset, serverTime, source: "worldtime" };
              })
              .catch((e) => { clearTimeout(timer); throw e; });
          },
        },
      ];

      let idx = 0;
      const tryNext = () => {
        if (idx >= tryApis.length) {
          if (!mountedRef.current) return;
          setError("所有时间服务器均不可用，请检查网络连接");
          setLoading(!1);
          return;
        }
        tryApis[idx]
          .fetch()
          .then(({ offset, serverTime, source }) => {
            if (!mountedRef.current) return;
            const offsetMin = Math.round(offset / 1000 / 60 * 10) / 10;
            const warnMsg = Math.abs(offset) > 300000
              ? `校准结果与设备时间相差 ${Math.abs(offsetMin)} 分钟，时间源 [${source}] 可能异常`
              : "";
            setTimeOffset(offset);
            setCurrentTime(new Date(Date.now() + offset));
            setCalibrated(!0);
            if (warnMsg) setWarning(warnMsg);
            try {
              localStorage.setItem("lingjie-time-offset", String(offset));
              localStorage.setItem("lingjie-time-source", source);
              localStorage.setItem("lingjie-time-calibrated-at", String(Date.now()));
            } catch (e) {}
            window.dispatchEvent(
              new CustomEvent("lingjie-time-calibrated", { detail: serverTime.getTime() }),
            );
            setTimeout(() => {
              if (mountedRef.current) {
                setCalibrated(!1);
                setWarning("");
              }
            }, 5000);
            setLoading(!1);
          })
          .catch(() => {
            if (!mountedRef.current) return;
            idx++;
            tryNext();
          });
      };

      tryNext();
    };

    return l.jsxs("div", {
      className: "h-full w-full flex flex-col items-center justify-center p-6",
      style: { background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #f59e0b 100%)" },
      children: [
        l.jsx("div", {
          className: "text-white text-4xl font-bold mb-2",
          children: formatTime(currentTime),
        }),
        l.jsx("div", {
          className: "text-white/80 text-sm mb-2",
          children: formatDate(currentTime),
        }),
        l.jsx("div", {
          className: "text-white/50 text-xs mb-6",
          children: `设备时间：${formatTime(deviceTime)}`,
        }),
        l.jsx("button", {
          onClick: handleCalibrate,
          disabled: loading,
          className: calibrated
            ? "px-8 py-4 bg-green-500 text-white rounded-2xl transition-all text-lg font-bold backdrop-blur-md border border-green-400 scale-105"
            : "px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-2xl transition-all text-lg font-medium backdrop-blur-md border border-white/30 disabled:opacity-50",
          children: loading ? "校准中..." : calibrated ? "✓ 校准成功" : "校准时间（北京时间）",
        }),
        error && l.jsx("div", {
          className: "text-red-300 text-sm mt-3",
          children: error,
        }),
        warning && l.jsx("div", {
          className: "text-yellow-300 text-sm mt-3 max-w-xs text-center",
          children: warning,
        }),
      ],
    });
  },
  _ljByteLen = (v) => {
    if (v == null) return 0;
    if (typeof v === "number" || typeof v === "boolean") return 8;
    if (v && typeof v.size === "number" && typeof v.slice === "function") return v.size || 0;
    if (typeof ArrayBuffer !== "undefined" && v instanceof ArrayBuffer) return v.byteLength || 0;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView && ArrayBuffer.isView(v)) return v.byteLength || 0;
    if (typeof v === "string") {
      try { return new TextEncoder().encode(v).length; } catch (_) { return v.length; }
    }
    if (Array.isArray(v)) {
      let n = 0;
      for (let i = 0; i < v.length; i++) n += _ljByteLen(v[i]);
      return n;
    }
    if (typeof v === "object") {
      let n = 0;
      for (const k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) n += _ljByteLen(k) + _ljByteLen(v[k]);
      }
      return n;
    }
    try { return new TextEncoder().encode(String(v)).length; } catch (_) { return 0; }
  },
  _ljFmtMB = (bytes) => {
    if (!bytes || bytes <= 0) return null;
    const mb = bytes / (1024 * 1024);
    return (mb < 0.01 ? mb.toFixed(3) : mb.toFixed(2)) + " MB";
  },
  _ljLsKeySize = (key) => {
    try {
      const v = localStorage.getItem(key);
      if (v == null) return 0;
      return _ljByteLen(key) + _ljByteLen(v);
    } catch (_) { return 0; }
  },
  _ljSsSize = () => {
    let n = 0;
    try {
      for (let i = 0; i < sessionStorage.length; i++) {
        const k = sessionStorage.key(i);
        if (!k) continue;
        n += _ljByteLen(k) + _ljByteLen(sessionStorage.getItem(k) || "");
      }
    } catch (_) {}
    return n;
  },
  _ljIdbStoreSize = (dbName, storeName) =>
    new Promise((resolve) => {
      let settled = !1, created = !1;
      const done = (n) => { if (!settled) { settled = !0; resolve(n || 0); } };
      try {
        if (typeof indexedDB === "undefined") { done(0); return; }
        const req = indexedDB.open(dbName);
        req.onupgradeneeded = () => { created = !0; };
        req.onerror = () => done(0);
        req.onsuccess = () => {
          const db = req.result;
          if (created) {
            try { db.close(); } catch (_) {}
            try { indexedDB.deleteDatabase(dbName); } catch (_) {}
            done(0);
            return;
          }
          try {
            if (!storeName || !db.objectStoreNames.contains(storeName)) {
              try { db.close(); } catch (_) {}
              done(0);
              return;
            }
            const tx = db.transaction(storeName, "readonly");
            const r = tx.objectStore(storeName).getAll();
            r.onsuccess = () => {
              const n = _ljByteLen(r.result || []);
              try { db.close(); } catch (_) {}
              done(n);
            };
            r.onerror = () => { try { db.close(); } catch (_) {} done(0); };
          } catch (_) { try { db.close(); } catch (e) {} done(0); }
        };
      } catch (_) { done(0); }
    }),
  _ljCacheSize = async () => {
    if (typeof caches === "undefined") return 0;
    try {
      const names = await caches.keys();
      let total = 0;
      for (let i = 0; i < names.length; i++) {
        const cache = await caches.open(names[i]);
        const reqs = await cache.keys();
        for (let j = 0; j < reqs.length; j++) {
          try {
            const res = await cache.match(reqs[j]);
            if (res) {
              const b = await res.clone().blob();
              total += b.size || 0;
            }
          } catch (_) {}
        }
      }
      return total;
    } catch (_) { return 0; }
  },
  _ljSettingsKeys = [
    "lingjie-username", "lingjie-wallpaper", "lingjie-accent-color", "lingjie-volume",
    "lingjie-brightness", "lingjie-widgets", "lingjie-lock-password", "lingjie-refresh-rate",
    "lingjie-window-render-opt", "lingjie-random-wallpaper", "lingjie-startup-sound",
    "lingjie-lock-quote", "lingjie-fps-monitor", "lingjie-sec-mode", "lingjie-gesture-lock",
    "lingjie-time-offset", "lingjie-time-source", "lingjie-time-calibrated-at",
    "lingjie-lock-fail-count", "lingjie-lockout-until", "lingjie-lockout-count",
    "lingjie-lock-method",
  ],
  _ljCollectStorage = async () => {
    let quota = 0, usage = 0, estimateOk = !1;
    try {
      if (navigator.storage && navigator.storage.estimate) {
        const est = await navigator.storage.estimate();
        quota = est.quota || 0;
        usage = est.usage || 0;
        estimateOk = !0;
      }
    } catch (_) {}
    const recordings = await _ljIdbStoreSize("LingjieRecordings", "recordings");
    const apps = await _ljIdbStoreSize("lingjie-installed-apps", "apps");
    const photos = await _ljIdbStoreSize("lingjie-camera-photos", "photos");
    const wallpapers = await _ljIdbStoreSize("lingjie-wallpaper-cache", "wallpapers");
    const fs = _ljLsKeySize("lingjie-fs");
    const notes = _ljLsKeySize("lingjie-notes");
    const bookmarks = _ljLsKeySize("lingjie-bookmarks-v2");
    let settings = 0;
    for (let i = 0; i < _ljSettingsKeys.length; i++) settings += _ljLsKeySize(_ljSettingsKeys[i]);
    const known = { "lingjie-fs": 1, "lingjie-notes": 1, "lingjie-bookmarks-v2": 1, "lingjie-fm-open-request": 1 };
    for (let i = 0; i < _ljSettingsKeys.length; i++) known[_ljSettingsKeys[i]] = 1;
    let otherLs = 0, lsTotal = 0;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k) continue;
        const sz = _ljLsKeySize(k);
        lsTotal += sz;
        if (!known[k]) otherLs += sz;
      }
    } catch (_) {}
    const ss = _ljSsSize();
    const cacheApi = await _ljCacheSize();
    const temp = ss + cacheApi + wallpapers + _ljLsKeySize("lingjie-fm-open-request");
    const idb = recordings + apps + photos + wallpapers;
    const types = [
      { id: "fs", label: "文件系统", bytes: fs },
      { id: "recordings", label: "录音", bytes: recordings },
      { id: "photos", label: "照片与视频", bytes: photos },
      { id: "apps", label: "已安装应用", bytes: apps },
      { id: "wallpaper", label: "壁纸缓存", bytes: wallpapers },
      { id: "notes", label: "笔记", bytes: notes },
      { id: "bookmarks", label: "书签", bytes: bookmarks },
      { id: "settings", label: "系统设置", bytes: settings + otherLs },
    ];
    const zones = [
      { id: "idb", label: "IndexedDB", bytes: idb },
      { id: "ls", label: "本地存储", bytes: lsTotal },
      { id: "cache", label: "临时缓存", bytes: temp },
    ];
    const breakdown = types.reduce((s, t) => s + t.bytes, 0) + ss + cacheApi;
    return { quota, usage, estimateOk, used: estimateOk ? usage : breakdown, zones, types, temp };
  },
  _ljIdbClearStore = (dbName, storeName) =>
    new Promise((resolve) => {
      try {
        const req = indexedDB.open(dbName);
        let created = !1;
        req.onupgradeneeded = () => { created = !0; };
        req.onerror = () => resolve();
        req.onsuccess = () => {
          const db = req.result;
          if (created) {
            try { db.close(); } catch (_) {}
            try { indexedDB.deleteDatabase(dbName); } catch (_) {}
            resolve();
            return;
          }
          try {
            if (!db.objectStoreNames.contains(storeName)) { try { db.close(); } catch (_) {} resolve(); return; }
            const tx = db.transaction(storeName, "readwrite");
            tx.objectStore(storeName).clear();
            tx.oncomplete = () => { try { db.close(); } catch (_) {} resolve(); };
            tx.onerror = () => { try { db.close(); } catch (_) {} resolve(); };
          } catch (_) { try { db.close(); } catch (e) {} resolve(); }
        };
      } catch (_) { resolve(); }
    }),
  _ljClearCaches = async () => {
    try { sessionStorage.clear(); } catch (_) {}
    try { localStorage.removeItem("lingjie-fm-open-request"); } catch (_) {}
    await _ljIdbClearStore("lingjie-wallpaper-cache", "wallpapers");
    try {
      if (typeof caches !== "undefined") {
        const names = await caches.keys();
        await Promise.all(names.map((n) => caches.delete(n)));
      }
    } catch (_) {}
  },
  _ljClearStorageTarget = async (id) => {
    if (id === "cache") { await _ljClearCaches(); return; }
    if (id === "idb") {
      await _ljIdbClearStore("LingjieRecordings", "recordings");
      await _ljIdbClearStore("lingjie-installed-apps", "apps");
      await _ljIdbClearStore("lingjie-camera-photos", "photos");
      await _ljIdbClearStore("lingjie-wallpaper-cache", "wallpapers");
      try { const fs = pm(); fs["/home/灵者/录音"] = []; xm(fs); } catch (_) {}
      try { _ljlNotifyInstalled(); } catch (_) {}
      try { window.dispatchEvent(new CustomEvent("lingjie-camera-media-changed")); } catch (_) {}
      return;
    }
    if (id === "ls") {
      try {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
        keys.forEach((k) => { if (k) try { localStorage.removeItem(k); } catch (e) {} });
      } catch (_) {}
      try { xm(calcFS(JSON.parse(JSON.stringify(nr)))); } catch (_) {}
      return;
    }
    if (id === "fs") {
      xm(calcFS(JSON.parse(JSON.stringify(nr))));
      return;
    }
    if (id === "recordings") {
      await _ljIdbClearStore("LingjieRecordings", "recordings");
      try { const fs = pm(); fs["/home/灵者/录音"] = []; xm(fs); } catch (_) {}
      return;
    }
    if (id === "photos") {
      await _ljIdbClearStore("lingjie-camera-photos", "photos");
      try { window.dispatchEvent(new CustomEvent("lingjie-camera-media-changed")); } catch (_) {}
      return;
    }
    if (id === "apps") {
      await _ljIdbClearStore("lingjie-installed-apps", "apps");
      try { _ljlNotifyInstalled(); } catch (_) {}
      return;
    }
    if (id === "wallpaper") {
      await _ljIdbClearStore("lingjie-wallpaper-cache", "wallpapers");
      return;
    }
    if (id === "notes") {
      try { localStorage.removeItem("lingjie-notes"); } catch (_) {}
      return;
    }
    if (id === "bookmarks") {
      try { localStorage.removeItem("lingjie-bookmarks-v2"); } catch (_) {}
      return;
    }
    if (id === "settings") {
      try {
        _ljSettingsKeys.forEach((k) => { try { localStorage.removeItem(k); } catch (e) {} });
        const skip = { "lingjie-fs": 1, "lingjie-notes": 1, "lingjie-bookmarks-v2": 1 };
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
        keys.forEach((k) => { if (k && k.indexOf("lingjie-") === 0 && !skip[k]) try { localStorage.removeItem(k); } catch (e) {} });
      } catch (_) {}
    }
  },
  _ljStorageConfirmMeta = {
    cache: { title: "清空临时缓存", desc: "将清除会话数据、壁纸缓存和浏览器 Cache。文件、媒体和应用数据不受影响。" },
    idb: { title: "清空 IndexedDB", desc: "将清除录音、照片与视频、已安装应用和壁纸缓存。此操作不可逆。" },
    ls: { title: "清空本地存储", desc: "将清除文件、笔记、书签和系统设置，锁屏密码也会被清除。此操作不可逆。" },
    fs: { title: "清空文件系统", desc: "将文件管理器恢复为初始目录。此操作不可逆。" },
    recordings: { title: "清空录音", desc: "将删除全部录音文件。此操作不可逆。" },
    photos: { title: "清空照片与视频", desc: "将删除相机拍摄的照片和视频。此操作不可逆。" },
    apps: { title: "清空已安装应用", desc: "将卸载全部第三方应用。此操作不可逆。" },
    wallpaper: { title: "清空壁纸缓存", desc: "将清除缓存的壁纸数据。" },
    notes: { title: "清空笔记", desc: "将删除全部笔记。此操作不可逆。" },
    bookmarks: { title: "清空书签", desc: "将删除浏览器书签。此操作不可逆。" },
    settings: { title: "清空系统设置", desc: "将清除个性化、锁屏等设置，文件和媒体不受影响。此操作不可逆。" },
  },
  _ljSensPending = { fn: null },
  wm = () => {
    const {
        wallpaper: e,
        setWallpaper: t,
        accentColor: n,
        setAccentColor: r,
        volume: s,
        setVolume: i,
        brightness: a,
        setBrightness: c,
        triggerFactoryReset: Vm,
        windowRenderOptimization: renderOpt,
        setWindowRenderOptimization: setRenderOpt,
      startupSound: startupSoundVal,
      setStartupSound: setStartupSoundVal,
      lockQuote: lockQuoteVal,
      setLockQuote: setLockQuoteVal,
      fpsMonitor: fpsMonitorVal,
      setFpsMonitor: setFpsMonitorVal,
      secMode,
      setSecMode,
      gesturePwd,
      setGesturePwd,
      lockPassword: ge,
      setLockPassword: Ye,
      gestureSetup,
      setGestureSetup,
      gestureSteps,
      setGestureSteps,
      gestureConfirmSteps,
      setGestureConfirmSteps,
      gestureSetupPhase,
      setGestureSetupPhase,
      gestureError,
      setGestureError,
      setShowPwdModal: be,
      setPwdStep: $e,
      setPwdInput: ot,
      setPwdConfirm: vt,
      setPwdErrFlag: $t,
      setPwdErrMsg: Wt,
      username,
      setUsername,
      randomWallpaper: rwVal,
      setRandomWallpaper: setRw,
      } = hm(),
      [u, m] = N.useState("personalization"),
      [Wm, Xm] = N.useState(!1),
      [usernameInput, setUsernameInput] = N.useState(""),
      [frAuth, setFrAuth] = N.useState(!1),
      [frPwd, setFrPwd] = N.useState(""),
      [frErr, setFrErr] = N.useState(""),
      [frKb, setFrKb] = N.useState(!1),
      [no, oo] = N.useState(() => { try { return localStorage.getItem('lingjie-refresh-rate') || 'default'; } catch(e) { return 'default'; } }),
      [usernameToast, setUsernameToast] = N.useState(!1),
      [logoClickCount, setLogoClickCount] = N.useState(0),
      logoClickTimerRef = N.useRef(null),
      [storageInfo, setStorageInfo] = N.useState(null),
      [storageLoading, setStorageLoading] = N.useState(!1),
      [storageUpdatedAt, setStorageUpdatedAt] = N.useState(null),
      [storageConfirm, setStorageConfirm] = N.useState(null),
      [storageBusy, setStorageBusy] = N.useState(!1),
      [sensAuth, setSensAuth] = N.useState(null),
      [sensPwd, setSensPwd] = N.useState(""),
      [sensErr, setSensErr] = N.useState(""),
      [sensKb, setSensKb] = N.useState(!1);
    const runAfterAuth = (fn, hint) => {
      let savedPwd = null, savedGesture = null;
      try { savedPwd = localStorage.getItem("lingjie-lock-password"); } catch (e) {}
      try { savedGesture = localStorage.getItem("lingjie-gesture-lock"); } catch (e) {}
      if (savedPwd) {
        _ljSensPending.fn = fn;
        setSensAuth({ hint: hint || "此操作需要验证锁屏密码" });
        setSensPwd("");
        setSensErr("");
        setSensKb(!1);
        return;
      }
      if (savedGesture) {
        _ljSensPending.fn = fn;
        setGestureSetup(!0);
        setGestureSteps([]);
        setGestureConfirmSteps([]);
        setGestureSetupPhase("verify-sensitive");
        setGestureError("");
        return;
      }
      fn();
    };
    const finishSensPwd = () => {
      let saved;
      try { saved = localStorage.getItem("lingjie-lock-password"); } catch (e) { saved = null; }
      if (sensPwd.length !== 4) { setSensErr("请输入4位密码"); return; }
      if (sensPwd === saved) {
        const fn = _ljSensPending.fn;
        _ljSensPending.fn = null;
        setSensAuth(null);
        setSensKb(!1);
        setSensPwd("");
        setSensErr("");
        if (fn) fn();
      } else {
        setSensErr("密码错误");
      }
    };
    N.useEffect(() => { setUsernameInput(username); }, [username]);
    N.useEffect(() => { return () => { if (logoClickTimerRef.current) clearTimeout(logoClickTimerRef.current); }; }, []);
    const refreshStorage = N.useCallback(() => {
      setStorageLoading(!0);
      _ljCollectStorage().then((info) => {
        setStorageInfo(info);
        setStorageUpdatedAt(new Date());
        setStorageLoading(!1);
      }).catch(() => { setStorageLoading(!1); });
    }, []);
    N.useEffect(() => { if (u === "storage") refreshStorage(); }, [u, refreshStorage]);
    const installedApps = _useInstalledApps();
    const S = [
        { id: "personalization", label: "个性化", icon: l.jsx(Jf, { className: "w-4 h-4" }) },
        { id: "display", label: "显示", icon: l.jsx(Xf, { className: "w-4 h-4" }) },
        { id: "sound", label: "声音", icon: l.jsx(El, { className: "w-4 h-4" }) },
        { id: "security", label: "安全", icon: l.jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [l.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })] }) },
        { id: "other", label: "其他", icon: l.jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [l.jsx("circle", { cx: "12", cy: "12", r: "3" }), l.jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })] }) },
        { id: "storage", label: "存储", icon: l.jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [l.jsx("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }), l.jsx("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }), l.jsx("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })] }) },
        { id: "apps", label: "应用", icon: l.jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [l.jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }), l.jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }), l.jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }), l.jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" })] }) },
        { id: "about", label: "关于", icon: l.jsx(Kf, { className: "w-4 h-4" }) },
      ],
      _ = {
        blue: "#3b82f6",
        purple: "#a855f7",
        green: "#22c55e",
        orange: "#f97316",
        red: "#ef4444",
        pink: "#ec4899",
        cyan: "#06b6d4",
      };
    return l.jsxs("div", {
      className: "flex h-full bg-gray-900/95",
      children: [
        l.jsx("div", {
          className: "w-56 bg-gray-800/50 border-r border-gray-700 p-2 overflow-auto",
          children: S.map((T) =>
            l.jsxs(
              "button",
              {
                onClick: () => m(T.id),
                className: `flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left transition-all ${u === T.id ? "bg-blue-500/20 text-white" : "text-white hover:bg-gray-700/50 hover:text-white"}`,
                children: [T.icon, l.jsx("span", { className: "text-sm", children: T.label })],
              },
              T.id,
            ),
          ),
        }),
        l.jsxs("div", {
          className: "flex-1 overflow-auto p-6",
          children: [
            u === "personalization" &&
              l.jsxs("div", {
                className: "space-y-6 lingjie-tab-enter",
                children: [
                  l.jsx("h2", {
                    className: "text-xl font-semibold text-white",
                    children: "个性化",
                  }),
                  l.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("label", {
                            className: "text-sm text-white",
                            children: "强调色",
                          }),
                          l.jsx("div", {
                            className: "flex gap-2 mt-2",
                            children: Object.keys(_).map((T) =>
                              l.jsx(
                                "button",
                                {
                                  onClick: () => r(T),
                                  className: `w-8 h-8 rounded-full ring-offset-2 transition-all ${n === T ? "ring-2 ring-white" : ""}`,
                                  style: { backgroundColor: _[T] },
                                },
                                T,
                              ),
                            ),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        children: [
                          l.jsx("label", {
                            className: "text-sm text-white mb-2 block",
                            children: "壁纸",
                          }),
                          l.jsx("div", {
                            className: "grid grid-cols-5 gap-3 mt-2",
                            children: wi.map((T) =>
                              l.jsxs(
                                "button",
                                {
                                  onClick: () => t(T.id),
                                  className: `h-20 rounded-lg transition-all overflow-hidden relative group ${e === T.id ? "ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900" : "hover:ring-1 hover:ring-white/30"}`,
                                  style: { background: T.style },
                                  children: [
                                    l.jsx("div", {
                                      className:
                                        "absolute inset-0 flex items-end p-1.5 bg-gradient-to-t from-black/50 to-transparent",
                                      children: l.jsx("span", {
                                        className: "text-white text-xs font-medium drop-shadow",
                                        children: T.name,
                                      }),
                                    }),
                                    e === T.id &&
                                      l.jsx("div", {
                                        className:
                                          "absolute top-1 right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center",
                                        children: l.jsx(To, { className: "w-3 h-3 text-white" }),
                                      }),
                                  ],
                                },
                                T.id,
                              ),
                            ),
                          }),
                          l.jsxs("div", {
                            className: "flex items-center justify-between mt-4 px-1",
                            children: [
                              l.jsxs("div", { children: [
                                l.jsx("span", { className: "text-sm text-white", children: "开机随机壁纸" }),
                                l.jsx("p", { className: "text-xs text-white/40 mt-0.5", children: "每次启动时从默认壁纸中随机选择" }),
                              ]}),
                              l.jsx("button", {
                                onClick: () => setRw(!rwVal),
                                className: `w-11 h-6 rounded-full transition-all duration-300 ${rwVal ? "bg-blue-500" : "bg-white/20"} relative`,
                                children: l.jsx("div", {
                                  className: `w-5 h-5 rounded-full bg-white shadow transition-all duration-300 ${rwVal ? "translate-x-5.5" : "translate-x-0.5"}`,
                                  style: { position: "absolute", top: "2px", left: rwVal ? "22px" : "2px" },
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            u === "display" &&
              l.jsxs("div", {
                className: "space-y-6 lingjie-tab-enter",
                children: [
                  l.jsx("h2", { className: "text-xl font-semibold text-white", children: "显示" }),
                  l.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsxs("div", {
                            className: "flex justify-between text-sm mb-2",
                            children: [
                              l.jsx("span", { className: "text-white", children: "亮度" }),
                              l.jsxs("span", { className: "text-white", children: [a, "%"] }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "range",
                            min: "30",
                            max: "100",
                            value: a,
                            onChange: (T) => c(Number(T.target.value)),
                            className:
                              "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            u === "sound" &&
              l.jsxs("div", {
                className: "space-y-6 lingjie-tab-enter",
                children: [
                  l.jsx("h2", { className: "text-xl font-semibold text-white", children: "声音" }),
                  l.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsxs("div", {
                            className: "flex justify-between text-sm mb-2",
                            children: [
                              l.jsx("span", { className: "text-white", children: "主音量" }),
                              l.jsxs("span", { className: "text-white", children: [s, "%"] }),
                            ],
                          }),
                          l.jsx("input", {
                            type: "range",
                            min: "0",
                            max: "100",
                            value: s,
                            onChange: (T) => i(Number(T.target.value)),
                            className:
                              "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            u === "apps" &&
              l.jsxs("div", {
                className: "space-y-6 lingjie-tab-enter",
                children: [
                  l.jsx("h2", {
                    className: "text-xl font-semibold text-white",
                    children: "已安装应用",
                  }),
                  installedApps === null
                    ? l.jsx("p", { className: "text-sm text-white/60", children: "加载中..." })
                    : installedApps.length === 0
                      ? l.jsx("div", {
                          className: "rounded-xl border border-dashed border-white/20 p-8 text-center",
                          children: l.jsx("p", { className: "text-sm text-white/50", children: "尚未安装任何应用" }),
                        })
                      : l.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            l.jsx("p", { className: "text-xs text-white/40", children: "点击卸载按钮将删除应用及其所有数据。" }),
                            ...installedApps.map((app) =>
                              l.jsxs("div", {
                                className: "flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3",
                                children: [
                                  l.jsx("img", { src: app.iconUrl, alt: app.name, className: "w-10 h-10 rounded-lg object-cover" }),
                                  l.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      l.jsx("p", { className: "text-white text-sm font-medium truncate", children: app.name }),
                                      l.jsx("p", { className: "text-[11px] text-white/45", children: "第三方应用" }),
                                    ],
                                  }),
                                  l.jsx("button", {
                                    onClick: () => { runAfterAuth(() => { _ljlUninstall(app.id); }, "卸载应用需要验证身份"); },
                                    className: "px-3 py-1.5 rounded-full bg-red-500/20 text-red-300 hover:bg-red-500/30 text-xs transition-all",
                                    children: "卸载",
                                  }),
                                ],
                              }, app.id),
                            ),
                          ],
                        }),
                ],
              }),
            u === "about" &&
              l.jsxs("div", {
                className: "space-y-6 lingjie-tab-enter",
                children: [
                  l.jsx("h2", {
                    className: "text-xl font-semibold text-white",
                    children: "关于灵界 1.2026810.916.Extremely unstable",
                  }),
                  l.jsxs("div", {
                    className: "text-center py-8",
                    children: [
                      l.jsxs("div", {
                        className: "relative inline-flex items-center justify-center gap-2",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 shadow-xl cursor-pointer select-none",
                            style: { background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 30%, #f59e0b 70%, #fbbf24 100%)" },
                            onClick: (e) => {
                              if (window.__eastereggOpen) return;
                              e.stopPropagation();
                              const newCount = logoClickCount + 1;
                              if (logoClickTimerRef.current) clearTimeout(logoClickTimerRef.current);
                              const timer = setTimeout(() => { setLogoClickCount(0); }, 800);
                              logoClickTimerRef.current = timer;
                              setLogoClickCount(newCount);
                              if (newCount >= 5) {
                                setLogoClickCount(0);
                                clearTimeout(timer);
                                logoClickTimerRef.current = null;
                                window.dispatchEvent(new CustomEvent("lingjie-open-easter-egg"));
                              }
                            },
                            children: l.jsx("span", {
                              className: "text-white text-3xl font-black",
                              style: { transform: "rotate(0.2014deg)", textShadow: "0 2px 12px rgba(0,0,0,0.25)" },
                              children: "L",
                            }),
                          }),
                          logoClickCount > 0 && l.jsx("div", {
                            className: "text-white text-2xl font-bold mb-4",
                            children: logoClickCount,
                          }),
                        ],
                      }),
                      l.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "灵界 1.2026810.916.Extremely unstable",
                      }),
                      l.jsx("p", {
                        className: "text-sm text-white mb-2",
                        children: "本系统制作人:谢子涵个人制作",
                      }),
                      l.jsx("p", { className: "text-white", children: "空间智能系统" }),
                      l.jsxs("div", {
                        className: "flex items-center justify-center gap-2 mt-2",
                        children: [
                          l.jsx("span", { className: "text-sm text-white/70", children: "系统制作人签名:" }),
                          l.jsx("img", {
                            src: "assets/signature.png",
                            alt: "谢子涵签名",
                            style: { height: "55px", width: "auto", display: "block" },
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4 space-y-3 text-sm",
                    children: [
                      l.jsx("p", {
                        className: "text-white",
                        children:
                          "灵界1.2026810.916.Extremely unstable是一个美观为核心的全新智能系统体验。内置多个应用，支持密码与手势锁屏安全保护。笔记、照片、设置等用户数据保存在本机；天气、翻译、音乐、时间校准等功能会向对应公开服务发送必要请求。",
                      }),
                      l.jsx("p", {
                        className: "text-white",
                        children: "\u7248\u6743\uff1a\xa9 2026 \u8c22\u5b50\u6db5\u3002",
                      }),
                      l.jsx("p", {
                        className: "text-white/70 text-xs mt-1",
                        children: "\u8bb8\u53ef\u8bc1\uff1aMIT License",
                      }),
                      l.jsx("p", {
                        className: "text-white/50 text-xs mt-1",
                        children: "\u8be6\u7ec6\u8bb8\u53ef\u4fe1\u606f\u8bf7\u53c2\u9605\u672c\u7cfb\u7edf(apk)\u4e2d\u7684 LICENSE \u6587\u4ef6\u3002",
                      }),
                    ],
                  }),
                ],
              }),
            u === "security" &&
              l.jsxs("div", {
                className: "space-y-6 lingjie-tab-enter",
                children: [
                  l.jsx("h2", {
                    className: "text-xl font-semibold text-white",
                    children: "安全",
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", { className: "text-white font-medium", children: "锁屏方式" }),
                              l.jsx("p", { className: "text-white/50 text-xs mt-1", children: "选择锁屏时的验证方式" }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          l.jsx("button", {
                            onClick: () => {
                            if (secMode === "password") return;
                            if (secMode === "gesture" && gesturePwd) {
                              setGestureSetup(!0); setGestureSteps([]); setGestureConfirmSteps([]); setGestureSetupPhase("verify-switch-pwd"); setGestureError("");
                            } else {
                              be(!0); $e("step1-new"); ot(""); vt(""); $t(!1); Wt("");
                            }
                          },
                            className: secMode === "password"
                              ? "px-4 py-2 bg-blue-500/30 text-blue-400 border border-blue-500/50 rounded-lg text-sm transition-all"
                              : "px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10",
                            children: "密码",
                          }),
                          l.jsx("button", {
                            onClick: () => {
                            if (secMode === "gesture") return;
                            if (secMode === "password" && ge) {
                              be(!0); $e("verify-switch-gesture"); ot(""); $t(!1); Wt("");
                            } else {
                              setGestureSetup(!0); setGestureSteps([]); setGestureConfirmSteps([]); setGestureSetupPhase("draw"); setGestureError("");
                            }
                          },
                            className: secMode === "gesture"
                              ? "px-4 py-2 bg-blue-500/30 text-blue-400 border border-blue-500/50 rounded-lg text-sm transition-all"
                              : "px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10",
                            children: "手势",
                          }),
                          l.jsx("button", {
                            onClick: () => {
                            if (secMode === "password" && ge) {
                              be(!0); $e("clear-old"); ot(""); $t(!1); Wt("");
                            } else if (secMode === "gesture" && gesturePwd) {
                              setGestureSetup(!0); setGestureSteps([]); setGestureConfirmSteps([]); setGestureSetupPhase("verify-none"); setGestureError("");
                            } else {
                              setSecMode("none"); try { localStorage.setItem("lingjie-sec-mode", "none"); } catch(e) {}
                            }
                          },
                            className: secMode === "none"
                              ? "px-4 py-2 bg-blue-500/30 text-blue-400 border border-blue-500/50 rounded-lg text-sm transition-all"
                              : "px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10",
                            children: "无",
                          }),
                        ],
                      }),
                    ],
                  }),
                  secMode === "password" && l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", { className: "text-white font-medium", children: ge ? "修改密码" : "设置密码" }),
                              l.jsx("p", { className: "text-white/50 text-xs mt-1", children: ge ? "更改当前的4位数字密码" : "设置4位数字密码以保护锁屏" }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              be(!0);
                              $e(ge ? "step1-old" : "step1-new");
                              ot("");
                              vt("");
                              $t(!1);
                              Wt("");
                            },
                            className: "px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-lg text-sm transition-all hover:bg-blue-500/30",
                            children: ge ? "修改" : "设置",
                          }),
                        ],
                      }),
                    ],
                  }),
                  secMode === "password" && ge && l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", { className: "text-white font-medium", children: "清除密码" }),
                              l.jsx("p", { className: "text-white/50 text-xs mt-1", children: "移除锁屏密码，锁屏后无需验证" }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              be(!0);
                              $e("clear-old");
                              ot("");
                              $t(!1);
                              Wt("");
                            },
                            className: "px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg text-sm transition-all hover:bg-red-500/30",
                            children: "清除",
                          }),
                        ],
                      }),
                    ],
                  }),
                  secMode === "gesture" && l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", { className: "text-white font-medium", children: gesturePwd ? "修改手势" : "设置手势" }),
                              l.jsx("p", { className: "text-white/50 text-xs mt-1", children: gesturePwd ? "更改当前的手势图案" : "绘制手势图案以保护锁屏（至少4个点）" }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              if (gesturePwd) {
                                setGestureSetup(!0); setGestureSteps([]); setGestureConfirmSteps([]); setGestureSetupPhase("verify-modify"); setGestureError("");
                              } else {
                                setGestureSetup(!0); setGestureSteps([]); setGestureConfirmSteps([]); setGestureSetupPhase("draw"); setGestureError("");
                              }
                            },
                            className: "px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-lg text-sm transition-all hover:bg-blue-500/30",
                            children: gesturePwd ? "修改" : "设置",
                          }),
                        ],
                      }),
                    ],
                  }),
                  secMode === "gesture" && gesturePwd && l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", { className: "text-white font-medium", children: "清除手势" }),
                              l.jsx("p", { className: "text-white/50 text-xs mt-1", children: "移除手势锁，锁屏后无需验证" }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              setGestureSetup(!0);
                              setGestureSteps([]);
                              setGestureConfirmSteps([]);
                              setGestureSetupPhase("verify-none");
                              setGestureError("");
                            },
                            className: "px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg text-sm transition-all hover:bg-red-500/30",
                            children: "清除",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            u === "other" &&
              l.jsxs("div", {
                className: "space-y-6 lingjie-tab-enter",
                children: [
                  l.jsx("h2", {
                    className: "text-xl font-semibold text-white",
                    children: "其他",
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", {
                                className: "text-white font-medium",
                                children: "屏幕刷新率",
                              }),
                              l.jsx("p", {
                                className: "text-white/50 text-xs mt-1",
                                children: no === 'default' ? '默认（设备最高刷新率）' : '24Hz（低功耗，可能卡顿）',
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          l.jsx("button", {
                            onClick: () => { oo('default'); try { localStorage.setItem('lingjie-refresh-rate', 'default'); window.dispatchEvent(new Event('lingjie-refresh-rate-changed')); } catch(e) {} },
                            className: no === 'default'
                              ? 'px-4 py-2 bg-blue-500/30 text-blue-400 border border-blue-500/50 rounded-lg text-sm transition-all'
                              : 'px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10',
                            children: "默认",
                          }),
                          l.jsx("button", {
                            onClick: () => { oo('24hz'); try { localStorage.setItem('lingjie-refresh-rate', '24hz'); window.dispatchEvent(new Event('lingjie-refresh-rate-changed')); } catch(e) {} },
                            className: no === '24hz'
                              ? 'px-4 py-2 bg-blue-500/30 text-blue-400 border border-blue-500/50 rounded-lg text-sm transition-all'
                              : 'px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10',
                            children: "24Hz",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", {
                                className: "text-white font-medium",
                                children: "窗口渲染优化",
                              }),
                              l.jsx("p", {
                                className: "text-white/50 text-xs mt-1",
                                children: "仅渲染当前活跃窗口，其他窗口冻结为静态贴图以节省性能",
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              const newVal = !renderOpt;
                              setRenderOpt(newVal);
                              try { localStorage.setItem("lingjie-window-render-opt", String(newVal)); } catch(e) {}
                            },
                            className: renderOpt
                              ? "px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg text-sm transition-all"
                              : "px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10",
                            children: renderOpt ? "已开启" : "已关闭",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsx("div", {
                            children: l.jsx("p", {
                              className: "text-white font-medium",
                              children: "开机提示音",
                            }),
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              setStartupSoundVal(!startupSoundVal);
                            },
                            className: startupSoundVal
                              ? "px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg text-sm transition-all"
                              : "px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10",
                            children: startupSoundVal ? "已开启" : "已关闭",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", {
                                className: "text-white font-medium",
                                children: "锁屏箴言",
                              }),
                              l.jsx("p", {
                                className: "text-white/50 text-xs mt-1",
                                children: "在锁屏界面底部显示鼓励性文字",
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              const newVal = !lockQuoteVal;
                              setLockQuoteVal(newVal);
                            },
                            className: lockQuoteVal
                              ? "px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg text-sm transition-all"
                              : "px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10",
                            children: lockQuoteVal ? "已开启" : "已关闭",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", {
                                className: "text-white font-medium",
                                children: "帧率显示",
                              }),
                              l.jsx("p", {
                                className: "text-white/50 text-xs mt-1",
                                children: "在屏幕右上角实时显示帧率（每秒刷新）",
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              const newVal = !fpsMonitorVal;
                              setFpsMonitorVal(newVal);
                            },
                            className: fpsMonitorVal
                              ? "px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg text-sm transition-all"
                              : "px-4 py-2 bg-white/5 text-white/60 border border-white/10 rounded-lg text-sm transition-all hover:bg-white/10",
                            children: fpsMonitorVal ? "已开启" : "已关闭",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", {
                                className: "text-white font-medium",
                                children: "用户名",
                              }),
                              l.jsx("p", {
                                className: "text-white/50 text-xs mt-1",
                                children: "修改系统显示的用户名（最多6个字符）",
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          l.jsx("input", {
                            type: "text",
                            maxLength: 6,
                            value: usernameInput,
                            onChange: (ev) => setUsernameInput(ev.target.value),
                            className: "flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm outline-none focus:border-blue-500/50 transition-all",
                            placeholder: "输入用户名",
                          }),
                          l.jsx("button", {
                            onClick: () => { setUsername(usernameInput); setUsernameToast(!0); setTimeout(() => setUsernameToast(!1), 1500); },
                            className: "px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-lg text-sm transition-all hover:bg-blue-500/30",
                            children: "保存",
                          }),
                        ],
                      }),
                      usernameToast && l.jsx("p", { className: "text-green-400 text-xs mt-2 lingjie-anim-toast-in", children: "修改成功" }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", {
                                className: "text-white font-medium",
                                children: "恢复出厂设置",
                              }),
                              l.jsx("p", {
                                className: "text-white/50 text-xs mt-1",
                                children: "清除所有数据并恢复系统初始状态",
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => Xm(!0),
                            className:
                              "px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm transition-all",
                            children: "恢复出厂设置",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            u === "storage" &&
              l.jsxs("div", {
                className: "space-y-6 lingjie-tab-enter",
                children: [
                  l.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      l.jsx("h2", { className: "text-xl font-semibold text-white", children: "存储" }),
                      l.jsx("button", {
                        onClick: refreshStorage,
                        disabled: storageLoading || storageBusy,
                        className: "px-3 py-1.5 bg-white/5 text-white/70 border border-white/10 rounded-lg text-xs hover:bg-white/10 transition-all disabled:opacity-50",
                        children: storageLoading ? "刷新中..." : "刷新",
                      }),
                    ],
                  }),
                  l.jsx("p", {
                    className: "text-white/40 text-xs",
                    children: storageUpdatedAt
                      ? "最后更新 " + storageUpdatedAt.toLocaleString("zh-CN", { hour12: !1 })
                      : "尚未统计",
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-end justify-between mb-3",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("p", { className: "text-white font-medium", children: "总用量" }),
                              l.jsx("p", {
                                className: "text-white/50 text-xs mt-1",
                                children: storageInfo && storageInfo.estimateOk
                                  ? "基于浏览器 Storage Estimate"
                                  : "当前环境未提供配额估算，显示本地分项合计",
                              }),
                            ],
                          }),
                          l.jsx("p", {
                            className: "text-white text-lg font-semibold",
                            children: !storageInfo || storageLoading
                              ? "..."
                              : (_ljFmtMB(storageInfo.used) || "无数据"),
                          }),
                        ],
                      }),
                      l.jsx("div", {
                        className: "h-2 bg-white/10 rounded-full overflow-hidden",
                        children: l.jsx("div", {
                          className: "h-full bg-blue-500 rounded-full transition-all",
                          style: {
                            width: storageInfo && storageInfo.quota
                              ? Math.min(100, Math.max(0, (storageInfo.used / storageInfo.quota) * 100)) + "%"
                              : storageInfo && storageInfo.used
                                ? "8%"
                                : "0%",
                          },
                        }),
                      }),
                      l.jsx("p", {
                        className: "text-white/40 text-xs mt-2",
                        children: storageInfo && storageInfo.quota
                          ? "已用 " + (_ljFmtMB(storageInfo.used) || "0 MB") + " / 配额 " + (_ljFmtMB(storageInfo.quota) || "无数据")
                          : "配额不可用",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4 space-y-3",
                    children: [
                      l.jsx("p", { className: "text-white font-medium", children: "存储区" }),
                      !(storageInfo && storageInfo.zones && storageInfo.zones.some((z) => z.bytes > 0))
                        ? l.jsx("p", { className: "text-white/40 text-sm py-4 text-center", children: "空" })
                        : storageInfo.zones.map((z) =>
                            l.jsxs("div", {
                              className: "flex items-center justify-between gap-3",
                              children: [
                                l.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  l.jsx("p", { className: "text-white text-sm", children: z.label }),
                                  l.jsx("p", { className: "text-white/40 text-xs mt-0.5", children: _ljFmtMB(z.bytes) || "无数据" }),
                                  l.jsx("div", {
                                    className: "h-1.5 bg-white/10 rounded-full overflow-hidden mt-1.5",
                                    children: l.jsx("div", {
                                      className: "h-full bg-cyan-400/80 rounded-full",
                                      style: {
                                        width: storageInfo.used
                                          ? Math.min(100, Math.max(2, (z.bytes / storageInfo.used) * 100)) + "%"
                                          : "0%",
                                      },
                                    }),
                                  }),
                                ] }),
                                l.jsx("button", {
                                  onClick: () => setStorageConfirm(z.id),
                                  disabled: storageBusy || !z.bytes,
                                  className: "px-3 py-1.5 bg-red-500/20 text-red-300 rounded-lg text-xs hover:bg-red-500/30 transition-all disabled:opacity-40",
                                  children: z.id === "cache" ? "清缓存" : "清空",
                                }),
                              ],
                            }, z.id),
                          ),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-800/50 rounded-xl p-4 space-y-3",
                    children: [
                      l.jsx("p", { className: "text-white font-medium", children: "应用与数据类型" }),
                      !(storageInfo && storageInfo.types && storageInfo.types.some((t) => t.bytes > 0))
                        ? l.jsx("p", { className: "text-white/40 text-sm py-4 text-center", children: "空" })
                        : storageInfo.types.map((t) =>
                            l.jsxs("div", {
                              className: "flex items-center justify-between gap-3 rounded-lg bg-white/5 border border-white/10 p-3",
                              children: [
                                l.jsxs("div", { className: "flex-1 min-w-0", children: [
                                  l.jsx("p", { className: "text-white text-sm", children: t.label }),
                                  l.jsx("p", { className: "text-white/40 text-xs mt-0.5", children: _ljFmtMB(t.bytes) || "无数据" }),
                                ] }),
                                l.jsx("button", {
                                  onClick: () => setStorageConfirm(t.id),
                                  disabled: storageBusy || !t.bytes,
                                  className: "px-3 py-1.5 bg-red-500/20 text-red-300 rounded-lg text-xs hover:bg-red-500/30 transition-all disabled:opacity-40",
                                  children: t.id === "wallpaper" ? "清缓存" : "清空",
                                }),
                              ],
                            }, t.id),
                          ),
                    ],
                  }),
                ],
              }),
          ],
        }),
        storageConfirm &&
          l.jsx("div", {
            className: "fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm",
            onClick: () => { if (!storageBusy) setStorageConfirm(null); },
            children: l.jsxs("div", {
              className: "w-80 bg-gray-800/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 animate-scale-in",
              onClick: (b) => b.stopPropagation(),
              children: [
                l.jsx("h3", {
                  className: "text-white text-lg font-medium text-center mb-2",
                  children: (_ljStorageConfirmMeta[storageConfirm] || {}).title || "确认清空",
                }),
                l.jsx("p", {
                  className: "text-white/60 text-sm text-center mb-6",
                  children: ((_ljStorageConfirmMeta[storageConfirm] || {}).desc || "此操作不可逆。") + " 若已设置锁屏密码或手势，确定后还需验证身份。",
                }),
                l.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    l.jsx("button", {
                      onClick: () => setStorageConfirm(null),
                      disabled: storageBusy,
                      className: "flex-1 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-black/80 transition-all",
                      children: "取消",
                    }),
                    l.jsx("button", {
                      onClick: () => {
                        const target = storageConfirm;
                        const doClear = () => {
                          setStorageBusy(!0);
                          _ljClearStorageTarget(target).then(() => {
                            setStorageConfirm(null);
                            setStorageBusy(!1);
                            refreshStorage();
                          }).catch(() => {
                            setStorageConfirm(null);
                            setStorageBusy(!1);
                            refreshStorage();
                          });
                        };
                        runAfterAuth(doClear, "清空存储需要验证身份");
                      },
                      disabled: storageBusy,
                      className: "flex-1 py-2.5 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-all disabled:opacity-50",
                      children: storageBusy ? "处理中..." : "确定",
                    }),
                  ],
                }),
              ],
            }),
          }),
        Wm &&
          l.jsx("div", {
            className:
              "fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm",
            onClick: () => Xm(!1),
            children: l.jsxs("div", {
              className:
                "w-80 bg-gray-800/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 animate-scale-in",
              onClick: (b) => b.stopPropagation(),
              children: [
                l.jsx("div", {
                  className:
                    "w-12 h-12 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-4",
                  children: l.jsx("svg", {
                    className: "w-6 h-6 text-red-400",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      l.jsx("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
                      l.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
                      l.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
                    ],
                  }),
                }),
                l.jsx("h3", {
                  className: "text-white text-lg font-medium text-center mb-2",
                  children: "恢复出厂设置",
                }),
                l.jsx("p", {
                  className: "text-white/60 text-sm text-center mb-6",
                  children: "此操作不可逆，将清除所有数据。需要验证锁屏密码或手势。",
                }),
                l.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    l.jsx("button", {
                      onClick: () => Xm(!1),
                      className:
                        "flex-1 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-black/80 transition-all",
                      children: "否",
                    }),
                    l.jsx("button", {
                      onClick: () => {
                        let savedPwd;
                        try { savedPwd = localStorage.getItem("lingjie-lock-password"); } catch(e) { savedPwd = null; }
                        let savedGesture;
                        try { savedGesture = localStorage.getItem("lingjie-gesture-lock"); } catch(e) { savedGesture = null; }
                        if (savedPwd) { setFrAuth(!0); setFrPwd(""); setFrErr(""); return; }
                        if (savedGesture) {
                          Xm(!1);
                          setGestureSetup(!0); setGestureSteps([]); setGestureConfirmSteps([]); setGestureSetupPhase("verify-factory-reset"); setGestureError("");
                          return;
                        }
                        Xm(!1); Vm();
                      },
                      className:
                        "flex-1 py-2.5 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition-all",
                      children: "是",
                    }),
                  ],
                }),
              ],
            }),
          }),
        frAuth &&
          l.jsx("div", {
            className: "fixed inset-0 z-[10001] flex items-center justify-center bg-black/50 backdrop-blur-sm",
            onClick: () => setFrAuth(!1),
            children: l.jsxs("div", {
              className: "w-80 bg-gray-800/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 animate-scale-in",
              onClick: (b) => b.stopPropagation(),
              children: [
                l.jsx("h3", { className: "text-white text-lg font-medium text-center mb-1", children: "请输入锁屏密码" }),
                l.jsx("p", { className: "text-white/50 text-xs text-center mb-4", children: "恢复出厂设置需要验证密码" }),
                l.jsx("div", {
                  onClick: () => setFrKb(!0),
                  className: "w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 border cursor-pointer text-center tracking-[0.3em] select-none",
                  style: frErr
                    ? { borderColor: "rgb(239, 68, 68)", backgroundColor: "rgba(239, 68, 68, 0.15)" }
                    : { borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)" },
                  children: frPwd.length > 0 ? "•".repeat(frPwd.length) : l.jsx("span", { className: "text-white/30", children: "输入密码" })
                }),
                frErr && l.jsx("p", { className: "text-red-500 text-xs mt-2", children: frErr }),
                l.jsxs("div", { className: "flex gap-3 mt-4", children: [
                  l.jsx("button", { onClick: () => setFrAuth(!1), className: "flex-1 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-black/80 transition-all", children: "取消" }),
                  l.jsx("button", { onClick: () => { let saved; try { saved = localStorage.getItem("lingjie-lock-password"); } catch(e) { saved = null; } if (frPwd.length !== 4) { setFrErr("请输入4位密码"); return; } if (frPwd === saved) { setFrAuth(!1); Xm(!1); Vm(); } else { setFrErr("密码错误"); } }, className: "flex-1 py-2.5 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-all", children: "确认" }),
                ] }),
              ],
            }),
          }),
        frKb && l.jsx(Pj, { value: frPwd, onChange: (v) => { setFrPwd(v); setFrErr(""); }, onClose: () => setFrKb(!1), onConfirm: () => { let saved; try { saved = localStorage.getItem("lingjie-lock-password"); } catch(e) { saved = null; } if (frPwd.length !== 4) { setFrErr("请输入4位密码"); return; } if (frPwd === saved) { setFrAuth(!1); Xm(!1); Vm(); } else { setFrErr("密码错误"); } }, title: "输入密码" }),
        sensAuth &&
          l.jsx("div", {
            className: "fixed inset-0 z-[10001] flex items-center justify-center bg-black/50 backdrop-blur-sm",
            onClick: () => { if (!storageBusy) { _ljSensPending.fn = null; setSensAuth(null); setSensKb(!1); } },
            children: l.jsxs("div", {
              className: "w-80 bg-gray-800/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 animate-scale-in",
              onClick: (b) => b.stopPropagation(),
              children: [
                l.jsx("h3", { className: "text-white text-lg font-medium text-center mb-1", children: "请输入锁屏密码" }),
                l.jsx("p", { className: "text-white/50 text-xs text-center mb-4", children: (sensAuth && sensAuth.hint) || "此操作需要验证密码" }),
                l.jsx("div", {
                  onClick: () => setSensKb(!0),
                  className: "w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 border cursor-pointer text-center tracking-[0.3em] select-none",
                  style: sensErr
                    ? { borderColor: "rgb(239, 68, 68)", backgroundColor: "rgba(239, 68, 68, 0.15)" }
                    : { borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)" },
                  children: sensPwd.length > 0 ? "•".repeat(sensPwd.length) : l.jsx("span", { className: "text-white/30", children: "输入密码" })
                }),
                sensErr && l.jsx("p", { className: "text-red-500 text-xs mt-2", children: sensErr }),
                l.jsxs("div", { className: "flex gap-3 mt-4", children: [
                  l.jsx("button", { onClick: () => { _ljSensPending.fn = null; setSensAuth(null); setSensKb(!1); }, className: "flex-1 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-black/80 transition-all", children: "取消" }),
                  l.jsx("button", { onClick: finishSensPwd, className: "flex-1 py-2.5 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-all", children: "确认" }),
                ] }),
              ],
            }),
          }),
        sensKb && l.jsx(Pj, { value: sensPwd, onChange: (v) => { setSensPwd(v); setSensErr(""); }, onClose: () => setSensKb(!1), onConfirm: finishSensPwd, title: "输入密码" }),
      ],
    });
  },
  Pj = ({ value, onChange, onClose, onConfirm, title }) => {
    const [isUpper, setIsUpper] = N.useState(false);
    const [isMax, setIsMax] = N.useState(false);
    const W = typeof window !== "undefined" ? window.innerWidth : 1200;
    const H = typeof window !== "undefined" ? window.innerHeight : 800;
    const [pos, setPos] = N.useState({ x: Math.max(8, (W - Math.min(420, W * 0.94)) / 2), y: Math.max(8, (H - 360) / 2) });
    const [dragStart, setDragStart] = N.useState(null);
    const onTitleDown = (e) => { if (e.button !== 0 || isMax) return; e.preventDefault(); setDragStart({ mx: e.clientX - pos.x, my: e.clientY - pos.y }); };
    N.useEffect(() => { if (!dragStart) return; const mv = (e) => setPos({ x: Math.max(0, Math.min(window.innerWidth - 80, e.clientX - dragStart.mx)), y: Math.max(0, Math.min(window.innerHeight - 60, e.clientY - dragStart.my)) }); const up = () => setDragStart(null); window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up); return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); }; }, [dragStart]);
    const letters = isUpper ? "qwertyuiopasdfghjklzxcvbnm".toUpperCase().split("") : "qwertyuiopasdfghjklzxcvbnm".split("");
    const kbIcon = l.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-full h-full", children: [
      l.jsx("rect", { x: 2, y: 4, width: 20, height: 16, rx: 2 }), l.jsx("path", { d: "M6 8h.01" }), l.jsx("path", { d: "M10 8h.01" }), l.jsx("path", { d: "M14 8h.01" }), l.jsx("path", { d: "M18 8h.01" }),
      l.jsx("path", { d: "M8 12h.01" }), l.jsx("path", { d: "M12 12h.01" }), l.jsx("path", { d: "M16 12h.01" }), l.jsx("path", { d: "M8 16h8" }),
    ] });
    const keyBtn = (char) => l.jsx("button", { key: char, onClick: (e) => { e.stopPropagation(); if (value.length < 4) onChange(value + char); }, className: "h-10 w-9 rounded-lg bg-white/10 hover:bg-white/25 text-white font-bold text-sm transition-colors active:scale-95 flex items-center justify-center", children: char });
    const winW = isMax ? "100%" : "min(420px, 94vw)";
    const winH = isMax ? "calc(100% - 48px)" : "auto";
    const winLeft = isMax ? 0 : pos.x;
    const winTop = isMax ? 0 : pos.y;
    return l.jsx("div", { className: `fixed flex flex-col rounded-2xl overflow-hidden animate-scale-in ${isMax ? "inset-0 rounded-none" : ""}`, style: Object.assign({ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.12)", left: winLeft, top: winTop, width: winW, maxHeight: isMax ? winH : "80vh", zIndex: 2147483647, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }, dragStart ? { cursor: "grabbing", userSelect: "none" } : {}), children: [
      l.jsxs("div", { className: "flex items-center justify-between px-3 py-2 bg-white/5 backdrop-blur-xl border-b border-white/10 cursor-move select-none touch-none shimmer-sweep shrink-0", onPointerDown: onTitleDown, onDoubleClick: () => setIsMax(!isMax), children: [
        l.jsxs("div", { className: "flex items-center gap-2", children: [
          l.jsx("span", { className: "w-5 h-5 text-white/65 [&>svg]:w-full [&>svg]:h-full shrink-0", children: kbIcon }),
          l.jsx("span", { className: "text-sm text-white/80 font-medium truncate", children: "灵界 OS 密码输入法" }),
        ] }),
        l.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
          l.jsx("button", { onClick: (e) => { e.stopPropagation(); onClose(); }, className: "w-6 h-6 rounded-full flex items-center justify-center hover:brightness-110 transition-all shrink-0", style: { backgroundColor: "#ff5f57" }, title: "关闭", children: l.jsx(It, { className: "w-3 h-3 text-white" }) }),
          l.jsx("button", { onClick: (e) => { e.stopPropagation(); onClose(); }, className: "w-6 h-6 rounded-full flex items-center justify-center hover:brightness-110 transition-all shrink-0", style: { backgroundColor: "#febc2e" }, title: "最小化", children: l.jsx(Zf, { className: "w-3 h-3 text-white" }) }),
          l.jsx("button", { onClick: (e) => { e.stopPropagation(); setIsMax(!isMax); }, className: "w-6 h-6 rounded-full flex items-center justify-center hover:brightness-110 transition-all shrink-0", style: { backgroundColor: "#28c840" }, title: isMax ? "还原" : "最大化", children: l.jsx(om, { className: "w-3 h-3 text-white" }) }),
        ] }),
      ] }),
      l.jsx("div", { className: "flex-1 overflow-y-auto p-3", children: l.jsxs("div", { className: "space-y-2", children: [
        l.jsx("p", { className: "text-white/60 text-xs text-center", children: title || "输入密码" }),
        l.jsx("div", { className: "w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white text-center text-xl tracking-[0.5em] font-mono min-h-[48px] flex items-center justify-center", children: value.length > 0 ? "•".repeat(value.length) : l.jsx("span", { className: "text-white/30", children: "____" }) }),
        l.jsx("div", { className: "flex flex-wrap gap-1.5 justify-center", children: "1234567890".split("").map((c) => keyBtn(c)) }),
        l.jsx("div", { className: "flex flex-wrap gap-1.5 justify-center", children: letters.slice(0, 10).map((c) => keyBtn(c)) }),
        l.jsx("div", { className: "flex flex-wrap gap-1.5 justify-center", children: letters.slice(10, 19).map((c) => keyBtn(c)) }),
        l.jsx("div", { className: "flex flex-wrap gap-1.5 justify-center", children: letters.slice(19, 26).map((c) => keyBtn(c)) }),
        l.jsxs("div", { className: "flex gap-1.5 pt-1", children: [
          l.jsx("button", { onClick: (e) => { e.stopPropagation(); setIsUpper(!isUpper); }, className: "h-10 w-16 rounded-lg font-bold text-xs transition-colors flex items-center justify-center shrink-0 " + (isUpper ? "bg-blue-500 text-white" : "bg-white/10 text-white hover:bg-white/20"), children: isUpper ? "ABC" : "abc" }),
          l.jsx("button", { onClick: (e) => { e.stopPropagation(); onChange(""); }, className: "h-10 flex-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 text-sm transition-colors", children: "清空" }),
          l.jsx("button", { onClick: (e) => { e.stopPropagation(); onChange(value.slice(0, -1)); }, className: "h-10 w-14 rounded-lg bg-white/10 hover:bg-red-500/30 text-white font-medium text-sm transition-colors flex items-center justify-center shrink-0", children: "⌫" }),
          l.jsx("button", { onClick: (e) => { e.stopPropagation(); if (onConfirm) { onConfirm(); } else { onClose(); } }, className: "h-10 flex-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition-colors", children: "确认" }),
        ] }),
      ] }) }),
    ] });
  },
  jm = () => {
    const { volume: a, setVolume: c } = hm(),
      [e, t] = N.useState(!1),
      [n, r] = N.useState(0),
      [s, i] = N.useState(0),
      [u, m] = N.useState(!1),
      [g, y] = N.useState("off"),
      [p, w] = N.useState("player"),
      [f, q] = N.useState([]),
      [ht, it] = N.useState("trending"),
      [jt, kt] = N.useState(""),
      [lt, mt] = N.useState(!1),
      [nt, ot] = N.useState(null),
      audioRef = N.useRef(null),
      z = N.useRef(null),
      endedHandlerRef = N.useRef(null),
      repeatModeRef = N.useRef(g),
      playReqIdRef = N.useRef(0),
      playErrorHandlerRef = N.useRef(null);
    N.useEffect(() => { repeatModeRef.current = g; }, [g]);
    const o = (v) => {
      const S = Math.floor(v / 60),
        _ = Math.floor(v % 60);
      return `${S}:${_.toString().padStart(2, "0")}`;
    };
    // iTunes Search API - 免费无认证，稳定可靠
    const loadSongs = async (mode, query) => {
      mt(!0); ot(null);
      try {
        // 默认加载热门歌曲列表
        const searchTerm = mode === "search" ? query : "top hits 2026";
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&limit=25&media=music&country=US`;
        const res = await fetch(url);
        const data = await res.json();
        const songs = (data.results || []).filter(track => track.previewUrl).map((track, idx) => ({
          id: track.trackId || idx,
          title: track.trackName || "未知",
          artist: track.artistName || "未知艺术家",
          album: track.collectionName || "",
          duration: 30,
          durationStr: "0:30",
          previewUrl: track.previewUrl,
          genre: track.primaryGenreName || "",
        }));
        if (songs.length === 0) {
          ot("未找到可播放的歌曲");
        } else {
          q(songs); r(0); i(0); t(!1);
        }
      } catch (err) {
        ot("加载失败，请检查网络");
        console.error("iTunes API error:", err);
      } finally {
        mt(!1);
      }
    };
    N.useEffect(() => {
      let mounted = !0;
      loadSongs("trending").then(() => { if (!mounted) return; });
      return () => {
        mounted = !1;
        if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      };
    }, []);
    const playSong = async (index) => {
      if (!f.length) return;
      const song = f[index];
      if (!song || !song.previewUrl) return;
      const myReqId = ++playReqIdRef.current;
      try {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.removeEventListener("timeupdate", z.current);
          if (endedHandlerRef.current) audioRef.current.removeEventListener("ended", endedHandlerRef.current);
          audioRef.current.removeEventListener("error", playErrorHandlerRef.current || (() => {}));
        }
        const audio = new Audio(song.previewUrl);
        audio.volume = a / 100;
        audio.crossOrigin = "anonymous";
        z.current = () => {
          if (audioRef.current) {
            i(audioRef.current.currentTime || 0);
          }
        };
        audio.addEventListener("timeupdate", z.current);
        const endedHandler = () => {
          if (playReqIdRef.current !== myReqId) return;
          const curRepeat = repeatModeRef.current;
          if (curRepeat === "one") {
            audio.currentTime = 0;
            audio.play().catch(() => {});
          } else if (curRepeat === "all" || index < f.length - 1) {
            playSong((index + 1) % f.length);
          } else {
            t(!1);
          }
        };
        audio.addEventListener("ended", endedHandler);
        endedHandlerRef.current = endedHandler;
        const playErrorHandler = (err) => {
          if (playReqIdRef.current !== myReqId) return;
          console.error("Playback error:", err);
          ot("播放失败");
          t(!1);
        };
        audio.addEventListener("error", playErrorHandler);
        playErrorHandlerRef.current = playErrorHandler;
        audioRef.current = audio;
        await audio.play();
        if (playReqIdRef.current !== myReqId) {
          audio.pause();
          return;
        }
        r(index); t(!0);
      } catch (err) {
        if (playReqIdRef.current !== myReqId) return;
        console.error("Failed to play song:", err);
        ot("播放失败，请重试");
      }
    };
    N.useEffect(() => {
      if (audioRef.current && e === !1) {
        audioRef.current.pause();
      }
    }, [e]);
    N.useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = a / 100;
      }
    }, [a]);
    const d = (v) => {
      playSong(v);
    };
    const x = () => {
      if (u) {
        const v = Math.floor(Math.random() * f.length);
        playSong(v);
      } else if (f.length > 0) {
        playSong((n + 1) % f.length);
      }
    };
    const C = () => {
      if (f.length > 0) {
        playSong((n - 1 + f.length) % f.length);
      }
    };
    const togglePlayPause = () => {
      if (e) {
        if (audioRef.current) { audioRef.current.pause(); }
        t(!1);
      } else {
        if (audioRef.current && audioRef.current.src) {
          audioRef.current.play().then(() => { t(!0); }).catch((err) => { console.error("Resume error:", err); });
        } else if (f.length > 0) {
          playSong(n);
        }
      }
    };
    const handleSeek = (v) => {
      const val = Number(v.target.value);
      i(val);
      if (audioRef.current) {
        audioRef.current.currentTime = val;
      }
    };
    const handleSearch = () => {
      if (!jt.trim()) return;
      it("search");
      loadSongs("search", jt.trim());
    };
    const handleTrending = () => {
      it("trending"); kt("");
      loadSongs("trending");
    };
    return l.jsxs("div", {
      className: "flex h-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900",
      children: [
        l.jsxs("div", {
          className: "w-64 bg-gray-800/50 border-r border-gray-700 p-4 flex flex-col",
          children: [
            l.jsxs("div", {
              className: "flex gap-2 mb-4",
              children: [
                l.jsx("button", {
                  onClick: () => w("player"),
                  className: `flex-1 py-2 rounded-lg text-sm transition-colors ${p === "player" ? "bg-blue-500 text-white" : "bg-gray-700 text-white"}`,
                  children: "正在播放",
                }),
                l.jsx("button", {
                  onClick: () => w("library"),
                  className: `flex-1 py-2 rounded-lg text-sm transition-colors ${p === "library" ? "bg-blue-500 text-white" : "bg-gray-700 text-white"}`,
                  children: "歌曲库",
                }),
              ],
            }),
            l.jsx("h3", { className: "text-white font-semibold mb-2", children: "播放列表" }),
            l.jsxs("div", {
              className: "flex gap-1 mb-2",
              children: [
                l.jsx("input", {
                  type: "text",
                  value: jt,
                  onChange: (v) => kt(v.target.value),
                  onKeyDown: (v) => v.key === "Enter" && handleSearch(),
                  placeholder: "搜索歌曲...",
                  className: "flex-1 bg-gray-700 text-white text-xs rounded-lg px-2 py-1.5 outline-none placeholder-gray-500",
                }),
                l.jsx("button", {
                  onClick: handleSearch,
                  className: "px-2 py-1.5 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-400 transition-colors",
                  children: "搜索",
                }),
                l.jsx("button", {
                  onClick: handleTrending,
                  className: "px-2 py-1.5 bg-gray-600 text-white text-xs rounded-lg hover:bg-gray-500 transition-colors",
                  children: "热门",
                }),
              ],
            }),
            lt && l.jsx("div", {
              className: "text-center text-white text-sm py-4",
              children: "加载中...",
            }),
            nt && l.jsx("div", {
              className: "text-center text-white text-xs py-2",
              children: nt,
            }),
            l.jsx("div", {
              className: "flex-1 overflow-auto space-y-1",
              children: f.map((v, S) =>
                l.jsxs(
                  "button",
                  {
                    onClick: () => d(S),
                    className: `w-full text-left p-2 rounded-lg transition-all ${n === S ? "bg-blue-500/20 text-white" : "text-white hover:bg-gray-700/50 hover:text-white"}`,
                    children: [
                      l.jsx("p", { className: "text-sm font-medium truncate", children: v.title }),
                      l.jsx("p", { className: "text-xs opacity-60 truncate", children: v.artist }),
                    ],
                  },
                  v.id,
                ),
              ),
            }),
          ],
        }),
        l.jsx("div", {
          className: "flex-1 flex flex-col items-center justify-start p-6 overflow-y-auto",
          children:
            p === "player"
              ? l.jsxs(l.Fragment, {
                  children: [
                    f.length > 0 ? l.jsx("div", {
                      className: `w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl shadow-2xl mb-4 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 ${e ? "animate-pulse" : ""}`,
                      style: { animationDuration: "3s" },
                      children: l.jsx(wa, { className: "w-16 h-16 text-white/50" }),
                    }) : l.jsx("div", {
                      className: "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl shadow-2xl mb-4 bg-gray-800 flex items-center justify-center flex-shrink-0",
                      children: l.jsx("span", { className: "text-white text-sm", children: "暂无歌曲" }),
                    }),
                    l.jsxs("div", {
                      className: "text-center mb-3",
                      children: (() => {
                        const song = f[n];
                        return [
                          l.jsx("h2", {
                            className: "text-xl sm:text-2xl font-bold text-white truncate max-w-xs sm:max-w-sm md:max-w-md",
                            children: song?.title || "等待播放",
                          }),
                          l.jsx("p", { className: "text-white text-sm", children: song?.artist || "" }),
                          song?.genre ? l.jsx("p", { className: "text-white text-xs", children: song.genre }) : null,
                        ];
                      })(),
                    }),
                    l.jsxs("div", {
                      className: "w-full max-w-md mb-3",
                      children: [
                        l.jsx("input", {
                          type: "range",
                          min: "0",
                          max: f[n]?.duration || 0,
                          value: s,
                          onChange: handleSeek,
                          className:
                            "w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500",
                        }),
                        l.jsxs("div", {
                          className: "flex justify-between text-xs text-white mt-1",
                          children: [
                            l.jsx("span", { children: o(s) }),
                            l.jsx("span", { children: f[n]?.durationStr || "0:00" }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex items-center gap-4 mb-3",
                      children: [
                        l.jsx("button", {
                          onClick: () => m(!u),
                          className: `p-2 rounded-full transition-all ${u ? "text-white" : "text-white hover:text-white"}`,
                          children: l.jsx(sm, { className: "w-5 h-5" }),
                        }),
                        l.jsx("button", {
                          onClick: C,
                          className: "p-2 text-white hover:text-white transition-colors",
                          children: l.jsx(im, { className: "w-6 h-6" }),
                        }),
                        l.jsx("button", {
                          onClick: togglePlayPause,
                          className:
                            "p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:scale-105 transition-transform shadow-lg",
                          children: e
                            ? l.jsx(pi, { className: "w-6 h-6" })
                            : l.jsx(gi, { className: "w-6 h-6 ml-0.5" }),
                        }),
                        l.jsx("button", {
                          onClick: x,
                          className: "p-2 text-white hover:text-white transition-colors",
                          children: l.jsx(am, { className: "w-6 h-6" }),
                        }),
                        l.jsxs("button", {
                          onClick: () => y(g === "off" ? "all" : g === "all" ? "one" : "off"),
                          className: `p-2 rounded-full transition-all relative ${g !== "off" ? "text-white" : "text-white hover:text-white"}`,
                          children: [
                            l.jsx(tm, { className: "w-5 h-5" }),
                            g === "one" &&
                              l.jsx("span", {
                                className: "absolute -top-1 -right-1 text-xs",
                                children: "1",
                              }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex items-center gap-2 w-48",
                      children: [
                        l.jsx(El, { className: "w-4 h-4 text-white" }),
                        l.jsx("input", {
                          type: "range",
                          min: "0",
                          max: "100",
                          value: a,
                          onChange: (v) => {
                            c(Number(v.target.value));
                          },
                          className:
                            "flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500",
                        }),
                      ],
                    }),
                    l.jsx("p", {
                      className: "text-white text-xs mt-2 mb-2",
                      children: "音乐来源：iTunes · 30秒预览",
                    }),
                  ],
                })
              : l.jsxs("div", {
                  className: "w-full max-w-2xl h-full overflow-y-auto",
                  children: [
                    l.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        l.jsx("h2", {
                          className: "text-xl font-semibold text-white",
                          children: "歌曲库",
                        }),
                        l.jsx("p", {
                          className: "text-white text-xs",
                          children: "来源：iTunes · 30秒预览",
                        }),
                      ],
                    }),
                    lt && l.jsx("div", {
                      className: "text-center text-white text-sm py-4",
                      children: "加载中...",
                    }),
                    nt && l.jsx("div", {
                      className: "text-center text-white text-xs py-2",
                      children: nt,
                    }),
                    l.jsx("div", {
                      className: "space-y-1 pb-4",
                      children: f.map((v, S) =>
                        l.jsxs(
                          "div",
                          {
                            className: `flex items-center p-3 rounded-lg transition-all cursor-pointer ${n === S ? "bg-blue-500/20" : "hover:bg-gray-700/50"}`,
                            onClick: () => d(S),
                            children: [
                              l.jsx("span", {
                                className: "w-8 text-white text-sm",
                                children: S + 1,
                              }),
                              l.jsx("div", {
                                className: "w-10 h-10 rounded mr-3 flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-purple-500/30",
                                children: l.jsx(wa, { className: "w-5 h-5 text-white/50" }),
                              }),
                              l.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  l.jsx("p", {
                                    className: "text-white text-sm",
                                    children: v.title,
                                  }),
                                  l.jsxs("p", {
                                    className: "text-white text-xs",
                                    children: [
                                      v.artist,
                                      v.genre ? ` · ${v.genre}` : "",
                                    ],
                                  }),
                                ],
                              }),
                              l.jsx("span", {
                                className: "text-white text-sm",
                                children: v.durationStr,
                              }),
                            ],
                          },
                          v.id,
                        ),
                      ),
                    }),
                  ],
                }),
        }),
      ],
    });
  },
  Nm = () => {
    const [e, t] = N.useState("0"),
      [n, r] = N.useState(null),
      [s, i] = N.useState(null),
      [a, c] = N.useState(!1),
      [u, m] = N.useState([]),
      [g, y] = N.useState(null),
      [h, k] = N.useState("deg"),
      [p, w] = N.useState(!1),
      z = () => {
        (t("0"), r(null), i(null), c(!1));
      },
      f = () => {
        t("0");
      },
      o = (M) => {
        if (a || e === "错误" || e === "不能除以 0" || e === "NaN" || e === "Infinity") { t(M); c(!1); }
        else t(e === "0" ? M : e + M);
      },
      d = () => {
        if (a || e === "错误" || e === "不能除以 0") { t("0."); c(!1); }
        else e.indexOf(".") === -1 && t(e + ".");
      },
      x = () => {
        const v = parseFloat(e);
        if (isNaN(v)) return;
        t(String(-v));
      },
      C = () => {
        const v = parseFloat(e);
        if (isNaN(v)) { t("错误"); c(!0); return; }
        t(String(v / 100));
      },
      v = (M) => {
        const R = parseFloat(e);
        if (isNaN(R)) { t("错误"); c(!0); return; }
        if (n === null) r(R);
        else if (s) {
          const Q = n || 0;
          let le;
          switch (s) {
            case "+":
              le = Q + R;
              break;
            case "-":
              le = Q - R;
              break;
            case "×":
              le = Q * R;
              break;
            case "÷":
              if (R === 0) {
                t("不能除以 0");
                r(null);
                i(null);
                c(!0);
                return;
              }
              le = Q / R;
              break;
            default:
              le = R;
          }
          (t(String(le)), r(le));
        }
        (c(!0), i(M));
      },
      S = () => {
        if (!s || n === null) return;
        const M = parseFloat(e);
        if (isNaN(M)) { t("错误"); r(null); i(null); c(!0); return; }
        if (s === "÷" && M === 0) {
          t("不能除以 0");
          r(null);
          i(null);
          c(!0);
          return;
        }
        let R;
        switch (s) {
          case "+":
            R = n + M;
            break;
          case "-":
            R = n - M;
            break;
          case "×":
            R = n * M;
            break;
          case "÷":
            R = n / M;
            break;
          default:
            R = M;
        }
        const Q = `${n} ${s} ${M} = ${R}`;
        (m((le) => [Q, ...le.slice(0, 9)]), t(String(R)), r(null), i(null), c(!0));
      },
      _ = (M) => {
        const R = parseFloat(e);
        if (isNaN(R) && M !== "pi" && M !== "e") { t("错误"); c(!0); return; }
        let Q;
        switch (M) {
          case "sin":
            Q = Math.sin(h === "deg" ? (R * Math.PI) / 180 : R);
            break;
          case "cos":
            Q = Math.cos(h === "deg" ? (R * Math.PI) / 180 : R);
            break;
          case "tan":
            Q = Math.tan(h === "deg" ? (R * Math.PI) / 180 : R);
            break;
          case "log":
            Q = R <= 0 ? NaN : Math.log10(R);
            break;
          case "ln":
            Q = R <= 0 ? NaN : Math.log(R);
            break;
          case "sqrt":
            Q = R < 0 ? NaN : Math.sqrt(R);
            break;
          case "x2":
            Q = R * R;
            break;
          case "x3":
            Q = R * R * R;
            break;
          case "1/x":
            Q = R === 0 ? NaN : 1 / R;
            break;
          case "n!":
            Q = T(Math.min(170, Math.floor(R)));
            break;
          case "pi":
            Q = Math.PI;
            break;
          case "e":
            Q = Math.E;
            break;
          case "abs":
            Q = Math.abs(R);
            break;
          default:
            return;
        }
        (t(isNaN(Q) || !isFinite(Q) ? "错误" : String(Q)), c(!0));
      },
      T = (M) => { if (M < 0) return NaN; if (M === 0 || M === 1) return 1; let fact = 1; for (let j = 2; j <= M; j++) fact *= j; return fact; },
      D = (M) => {
        switch (M) {
          case "MC":
            y(null);
            break;
          case "MR":
            g !== null && (t(String(g)), c(!0));
            break;
          case "MS": {
            const v = parseFloat(e);
            y(isNaN(v) ? null : v);
            break;
          }
          case "M+": {
            const v = parseFloat(e);
            if (!isNaN(v)) y(g !== null ? g + v : v);
            break;
          }
        }
      },
      P = [
        ["C", "CE", "±", "%"],
        ["7", "8", "9", "÷"],
        ["4", "5", "6", "×"],
        ["1", "2", "3", "-"],
        ["0", ".", "=", "+"],
      ],
      U = [
        ["sin", "cos", "tan", "log"],
        ["ln", "sqrt", "x2", "x3"],
        ["1/x", "n!", "pi", "e"],
        ["abs", "deg/rad", "MC", "MR"],
      ];
    return l.jsxs("div", {
      className: "flex flex-col h-full bg-gray-900/95 p-4",
      children: [
        l.jsxs("div", {
          className: "bg-gray-800/50 rounded-xl p-4 mb-3",
          children: [
            l.jsx("div", {
              className: "text-sm text-white text-right h-5",
              children: n !== null && `${n} ${s}`,
            }),
            l.jsx("div", {
              className: "text-4xl font-light text-white tracking-wider text-right overflow-hidden",
              children: e,
            }),
            l.jsxs("div", {
              className: "flex justify-between text-xs text-white mt-1",
              children: [
                l.jsx("span", { children: g !== null ? "M" : "" }),
                l.jsx("span", { children: h.toUpperCase() }),
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          className: "flex gap-2 mb-3",
          children: [
            l.jsx("button", {
              onClick: () => w(!1),
              className: `flex-1 py-1.5 rounded-lg text-xs transition-colors ${p ? "bg-gray-700 text-white" : "bg-blue-500 text-white"}`,
              children: "标准",
            }),
            l.jsx("button", {
              onClick: () => w(!0),
              className: `flex-1 py-1.5 rounded-lg text-xs transition-colors ${p ? "bg-blue-500 text-white" : "bg-gray-700 text-white"}`,
              children: "科学",
            }),
          ],
        }),
        p &&
          l.jsx("div", {
            className: "grid grid-cols-4 gap-1.5 mb-3",
            children: U.flat().map((M, R) =>
              l.jsx(
                "button",
                {
                  onClick: () => {
                    M === "deg/rad"
                      ? k(h === "deg" ? "rad" : "deg")
                      : M === "MC"
                        ? D("MC")
                        : M === "MR"
                          ? D("MR")
                          : _(M);
                  },
                  className:
                    "bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-lg py-2 transition-colors",
                  children: M,
                },
                R,
              ),
            ),
          }),
        l.jsx("div", {
          className: "flex-1 grid grid-cols-4 gap-1.5",
          children: P.flat().map((M, R) =>
            l.jsx(
              "button",
              {
                onClick: () => {
                  M === "C"
                    ? z()
                    : M === "CE"
                      ? f()
                      : M === "±"
                        ? x()
                        : M === "%"
                          ? C()
                          : ["+", "-", "×", "÷"].includes(M)
                            ? v(M)
                            : M === "="
                              ? S()
                              : M === "."
                                ? d()
                                : o(M);
                },
                className: `rounded-xl text-lg font-medium transition-all active:scale-95 ${["÷", "×", "-", "+", "="].includes(M) ? "bg-blue-500 hover:bg-blue-400 text-white" : ["C", "CE"].includes(M) ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"} ${M === "0" ? "col-span-1" : ""}`,
                children: M,
              },
              R,
            ),
          ),
        }),
        u.length > 0 &&
          l.jsx("div", {
            className: "mt-3 bg-gray-800/30 rounded-lg p-2 max-h-24 overflow-auto",
            children: u.map((M, R) =>
              l.jsx("div", { className: "text-xs text-white", children: M }, R),
            ),
          }),
      ],
    });
  },
  ws = [
    {
      id: "1",
      title: "欢迎使用灵界笔记",
      content: `灵界笔记是一个功能强大的笔记应用。

支持以下功能:
- 基本格式化
- 分类和标签
- 收藏功能

开始记录你的灵感吧!`,
      date: "2026-07-07",
      category: "工作",
      tags: ["帮助", "入门"],
      starred: !0,
    },
    {
      id: "2",
      title: "待办事项",
      content: `- 完成项目报告
- 学习灵界 1.2026810.916.Extremely unstable 新功能
- 整理空间桌面
- 体验应用星环
- 试用帮助台`,
      date: "2026-07-06",
      category: "个人",
      tags: ["待办"],
      starred: !1,
    },
    {
      id: "3",
      title: "灵界 1.2026810.916.Extremely unstable 功能清单",
      content: `1. 帮助台
2. 应用星环
3. 空间应用卡片
4. 规则问答助手
5. 时间
6. 真实天气`,
      date: "2026-07-05",
      category: "工作",
      tags: ["项目", "OS"],
      starred: !0,
    },
  ],
  km = () => {
    try {
      const e = localStorage.getItem("lingjie-notes");
      if (e)
        try {
          return JSON.parse(e);
        } catch {
          return ws;
        }
      return ws;
    } catch { return ws; }
  },
  Sm = (e) => {
    try { localStorage.setItem("lingjie-notes", JSON.stringify(e)); } catch(_) {}
  },
  bm = () => {
    const [e, t] = N.useState(km),
      [n, r] = N.useState(null),
      [s, i] = N.useState(""),
      [a, c] = N.useState(null),
      [u, m] = N.useState("");
    N.useEffect(() => { try { if (!localStorage.getItem("lingjie-notes")) Sm(ws); } catch(_) {} }, []);
    const g = ["工作", "个人", "学习", "其他"],
      y = e.filter((o) => {
        const d =
            o.title.toLowerCase().includes(s.toLowerCase()) ||
            o.content.toLowerCase().includes(s.toLowerCase()),
          x = !a || (a === "starred" ? o.starred : o.category === a);
        return d && x;
      }),
      h = (o) => {
        (t(o), Sm(o));
      },
      k = () => {
        const o = {
          id: Vt(),
          title: "新笔记",
          content: "",
          date: new Date().toISOString().split("T")[0],
          category: "工作",
          tags: [],
          starred: !1,
        };
        (h([o, ...e]), r(o));
      },
      p = (o) => {
        if (!n) return;
        const d = { ...n, ...o, date: new Date().toISOString().split("T")[0] };
        (r(d), h(e.map((x) => (x.id === d.id ? d : x))));
      },
      w = (o) => {
        const d = e.filter((x) => x.id !== o);
        (h(d), (n == null ? void 0 : n.id) === o && r(d[0] || null));
      },
      z = () => {
        u && n && !n.tags.includes(u) && (p({ tags: [...n.tags, u] }), m(""));
      },
      f = (o) => {
        n && p({ tags: n.tags.filter((d) => d !== o) });
      };
    return (
      N.useEffect(() => {
        !n && e.length > 0 && r(e[0]);
      }, []),
      l.jsxs("div", {
        className: "flex h-full bg-gray-900/95",
        children: [
          l.jsxs("div", {
            className: "w-64 bg-gray-800/50 border-r border-gray-700 flex flex-col",
            children: [
              l.jsxs("div", {
                className: "p-3 border-b border-gray-700",
                children: [
                  l.jsxs("div", {
                    className: "flex items-center bg-gray-700 rounded-lg px-3 py-2 mb-2",
                    children: [
                      l.jsx(Xt, { className: "w-4 h-4 text-white mr-2" }),
                      l.jsx("input", {
                        type: "text",
                        value: s,
                        onChange: (o) => i(o.target.value),
                        placeholder: "搜索笔记...",
                        className: "flex-1 bg-transparent outline-none text-sm text-white",
                      }),
                    ],
                  }),
                  l.jsxs("button", {
                    onClick: k,
                    className:
                      "w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-all",
                    children: [
                      l.jsx(qc, { className: "w-4 h-4" }),
                      l.jsx("span", { className: "text-sm", children: "新建笔记" }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "p-2",
                children: [
                  l.jsxs("button", {
                    onClick: () => c(null),
                    className: `w-full text-left text-sm px-2 py-1 rounded ${a ? "text-white hover:text-white" : "bg-gray-700 text-white"}`,
                    children: ["全部笔记 (", e.length, ")"],
                  }),
                  l.jsxs("button", {
                    onClick: () => c("starred"),
                    className: `w-full text-left text-sm px-2 py-1 rounded mt-1 ${a === "starred" ? "bg-gray-700 text-white" : "text-white hover:text-white"}`,
                    children: ["收藏 (", e.filter((o) => o.starred).length, ")"],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "p-2 border-t border-gray-700",
                children: [
                  l.jsx("p", { className: "text-xs text-white mb-2 px-2", children: "分类" }),
                  g.map((o) =>
                    l.jsx(
                      "button",
                      {
                        onClick: () => c(o),
                        className: `w-full text-left text-sm px-2 py-1 rounded ${a === o ? "bg-gray-700 text-white" : "text-white hover:text-white"}`,
                        children: o,
                      },
                      o,
                    ),
                  ),
                ],
              }),
              l.jsxs("div", {
                className: "flex-1 overflow-auto p-2 border-t border-gray-700",
                children: [
                  l.jsx("p", {
                    className: "text-xs text-white mb-2 px-2",
                    children: "笔记列表",
                  }),
                  y.map((o) =>
                    l.jsxs(
                      "button",
                      {
                        onClick: () => r(o),
                        className: `w-full text-left p-2 rounded-lg transition-all ${(n == null ? void 0 : n.id) === o.id ? "bg-blue-500/20 text-white" : "text-white hover:bg-gray-700/50 hover:text-white"}`,
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [
                              o.starred &&
                                l.jsx(Mn, { className: "w-3 h-3 text-white fill-yellow-500" }),
                              l.jsx("p", {
                                className: "text-sm font-medium truncate",
                                children: o.title,
                              }),
                            ],
                          }),
                          l.jsx("p", { className: "text-xs opacity-60 mt-0.5", children: o.date }),
                        ],
                      },
                      o.id,
                    ),
                  ),
                ],
              }),
            ],
          }),
          n
            ? l.jsxs("div", {
                className: "flex-1 flex flex-col",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 p-2 border-b border-gray-700 bg-gray-800/30",
                    children: [
                      l.jsx("button", {
                        onClick: () => p({ starred: !n.starred }),
                        className: `p-1.5 rounded transition-colors ${n.starred ? "text-white" : "text-white hover:text-white"}`,
                        children: l.jsx(Mn, {
                          className: `w-4 h-4 ${n.starred ? "fill-yellow-500" : ""}`,
                        }),
                      }),
                      l.jsx("select", {
                        value: n.category,
                        onChange: (o) => p({ category: o.target.value }),
                        className:
                          "bg-gray-700 text-white text-sm rounded px-2 py-1 outline-none",
                        children: g.map((o) => l.jsx("option", { value: o, children: o }, o)),
                      }),
                      l.jsxs("div", {
                        className: "ml-auto flex items-center gap-2",
                        children: [
                          l.jsx("span", { className: "text-xs text-white", children: n.date }),
                          l.jsx("button", {
                            onClick: () => w(n.id),
                            className:
                              "p-1.5 rounded text-white hover:text-white transition-colors",
                            children: l.jsx(Cl, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("input", {
                    type: "text",
                    value: n.title,
                    onChange: (o) => p({ title: o.target.value }),
                    className:
                      "bg-transparent border-none outline-none text-2xl font-semibold text-white p-4 pb-2",
                    placeholder: "标题",
                  }),
                  l.jsxs("div", {
                    className: "flex items-center gap-2 px-4 mb-2",
                    children: [
                      n.tags.map((o) =>
                        l.jsxs(
                          "span",
                          {
                            className:
                              "flex items-center gap-1 px-2 py-0.5 bg-gray-700 rounded-full text-xs text-white",
                            children: [
                              l.jsx(um, { className: "w-3 h-3" }),
                              o,
                              l.jsx("button", {
                                onClick: () => f(o),
                                className: "hover:text-white",
                                children: l.jsx(It, { className: "w-3 h-3" }),
                              }),
                            ],
                          },
                          o,
                        ),
                      ),
                      l.jsx("div", {
                        className: "flex items-center",
                        children: l.jsx("input", {
                          type: "text",
                          value: u,
                          onChange: (o) => m(o.target.value),
                          onKeyPress: (o) => { if (o.key === "Enter") { o.preventDefault(); z(); } },
                          onKeyDown: (o) => { if (o.key === "Enter") { o.preventDefault(); z(); } },
                          placeholder: "添加标签",
                          className: "w-20 bg-transparent outline-none text-xs text-white",
                        }),
                      }),
                    ],
                  }),
                  l.jsx("textarea", {
                    value: n.content,
                    onChange: (o) => p({ content: o.target.value }),
                    className:
                      "flex-1 bg-transparent border-none outline-none text-white p-4 pt-2 resize-none leading-relaxed",
                    placeholder: "开始输入...",
                  }),
                ],
              })
            : l.jsx("div", {
                className: "flex-1 flex items-center justify-center text-white",
                children: l.jsxs("div", {
                  className: "text-center",
                  children: [
                    l.jsx(bl, { className: "w-16 h-16 mx-auto mb-4 opacity-30" }),
                    l.jsx("p", { children: "选择或创建一个笔记" }),
                  ],
                }),
              }),
        ],
      })
    );
  },
  js = [
    { title: "Bing", url: "https://www.bing.com" },
    { title: "Bing 搜索", url: "https://www.bing.com/search?q=灵界+OS&iframe=1" },
    { title: "Wikipedia", url: "https://www.wikipedia.org" },
    { title: "GitHub", url: "https://github.com" },
    { title: "网易", url: "https://www.163.com" },
  ],
  Cm = () => {
    try {
      const e = localStorage.getItem("lingjie-bookmarks-v2");
      if (e)
        try {
          return JSON.parse(e);
        } catch {
          return js;
        }
      return js;
    } catch { return js; }
  },
  Em = (e) => {
    try { localStorage.setItem("lingjie-bookmarks-v2", JSON.stringify(e)); } catch(_) {}
  },
  Mm = () => {
    const [e, t] = N.useState("");
    const [Te, Ue] = N.useState(null);
    const [Ve, We] = N.useState("灵界浏览器");
    const [Xe, Ye] = N.useState(false);
    const [Ze, $e] = N.useState(null);
    const [errInfo, setErrInfo] = N.useState(null);
    const [reloadKey, setReloadKey] = N.useState(0);
    const iframeRef = N.useRef(null);
    const loadTimerRef = N.useRef(null);
    const teRef = N.useRef(null);
    teRef.current = Te;
    const n = ["灵", "界", "浏", "览", "器"],
      r = ["text-white", "text-white", "text-white", "text-white", "text-white"],
      s = (a) => {
        let c = (a || "").trim();
        if (!c) return "";
        c = c.replace(/^(https?:\/\/)+/i, "");
        if (/[?？\s\u4e00-\u9fa5]/.test(c) || !c.includes(".")) {
          return { type: "search", query: c };
        }
        return { type: "url", url: "https://" + c };
      },
      i = (a) => {
        a.preventDefault();
        const parsed = s(e);
        if (!parsed) return;
        if (parsed.type === "search") {
          navigateTo("https://www.baidu.com/s?wd=" + encodeURIComponent(parsed.query), "百度搜索：" + parsed.query);
        } else {
          navigateTo(parsed.url, parsed.url);
        }
      };
    const navSearch = (a) => {
      a.preventDefault();
      const c = (e || "").trim();
      if (!c) return;
      if (/[?？\s\u4e00-\u9fa5]/.test(c) || !c.includes(".")) {
        navigateTo("https://www.baidu.com/s?wd=" + encodeURIComponent(c), "百度搜索：" + c);
      } else {
        const url = c.startsWith("http") ? c : "https://" + c;
        navigateTo(url, url);
      }
    };
    const goBack = () => {
      if (iframeRef.current) {
        try { iframeRef.current.contentWindow.history.back(); } catch(err) {}
      }
    };
    const goHome = () => {
      clearLoadTimer();
      setErrInfo(null);
      Ue(null); $e(null); We("灵界浏览器"); t("");
    };
    const clearLoadTimer = () => {
      if (loadTimerRef.current) { clearTimeout(loadTimerRef.current); loadTimerRef.current = null; }
    };
    const startLoadTimer = (url) => {
      clearLoadTimer();
      loadTimerRef.current = setTimeout(() => {
        if (teRef.current === url) {
          Ye(false);
          setErrInfo({ type: "timeout", url: url || "" });
        }
      }, 15000);
    };
    const navigateTo = (url, title) => {
      clearLoadTimer();
      setErrInfo(null);
      Ye(!0);
      Ue(url);
      $e(null);
      We(title || url);
      t(url);
      startLoadTimer(url);
    };
    const handleIframeLoad = () => {
      Ye(false);
      clearLoadTimer();
      let href = null;
      try { href = iframeRef.current && iframeRef.current.contentWindow.location.href; } catch (err2) {}
      if (!Ze && href === "about:blank") {
        setErrInfo({ type: "blocked", url: Te || "" });
      } else {
        setErrInfo(null);
      }
    };
    const retryLoad = () => {
      if (!errInfo || !errInfo.url) return;
      const url = errInfo.url;
      clearLoadTimer();
      setErrInfo(null);
      Ye(!0);
      setReloadKey((k) => k + 1);
      Ue(url);
      We(url);
      startLoadTimer(url);
    };
    return l.jsx("div", {
      className: "h-full flex flex-col bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 overflow-hidden",
      children:
        (Te || Ze)
          ? l.jsxs("div", { className: "flex flex-col h-full", children: [
              l.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 bg-black/40 border-b border-white/10 flex-shrink-0", children: [
                l.jsx("button", { onClick: goBack, className: "p-1.5 rounded-lg hover:bg-white/10 text-white/60 transition-colors", title: "后退", children: l.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: l.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" }) }) }),
                l.jsx("button", { onClick: goHome, className: "p-1.5 rounded-lg hover:bg-white/10 text-white/60 transition-colors", title: "主页", children: l.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: l.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" }) }) }),
                l.jsx("form", { onSubmit: navSearch, className: "flex-1 flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5", children: [
                  l.jsx("input", { value: e, onChange: (a) => t(a.target.value), placeholder: "输入网址或搜索...", className: "flex-1 bg-transparent outline-none border-none text-white placeholder-white/35 text-sm" }),
                  l.jsx("button", { type: "submit", className: "px-3 py-1 rounded-full bg-white/15 text-white text-sm hover:bg-white/25 active:scale-95 transition-all", children: "前往" }),
                ] }),
              ] }),
              l.jsx("div", { className: "flex-1 relative bg-white", children: [
                Ze
                  ? l.jsx("iframe", { key: reloadKey, ref: iframeRef, srcDoc: Ze, className: "w-full h-full border-none", onLoad: handleIframeLoad, title: Ve })
                  : Te
                    ? l.jsx("iframe", { key: reloadKey, ref: iframeRef, src: Te, className: "w-full h-full border-none", onLoad: handleIframeLoad, title: Ve })
                    : null,
                Xe && !errInfo && l.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-white/80", children: l.jsx("div", { className: "text-gray-500 text-sm", children: "加载中..." }) }),
                errInfo &&
                  l.jsx("div", {
                    className: "absolute inset-0 z-10 flex items-center justify-center bg-white/95 p-8 lingjie-anim-fade-in",
                    children: l.jsxs("div", {
                      className: "max-w-md w-full text-center",
                      children: [
                        l.jsx("div", {
                          className: "w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center",
                          style: { background: errInfo.type === "timeout" ? "#fef3c7" : "#fee2e2", color: errInfo.type === "timeout" ? "#d97706" : "#dc2626" },
                          children: errInfo.type === "timeout"
                            ? l.jsx("svg", { className: "w-8 h-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: l.jsxs("g", { children: [l.jsx("circle", { cx: "12", cy: "12", r: "10" }), l.jsx("path", { d: "M12 6v6l4 2" })] }) })
                            : l.jsx("svg", { className: "w-8 h-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: l.jsx("path", { d: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }) }),
                        }),
                        l.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: errInfo.type === "timeout" ? "页面加载超时" : "该网站无法在应用内打开" }),
                        l.jsx("p", { className: "text-sm text-gray-500 mb-1 break-all", children: errInfo.url }),
                        l.jsx("p", { className: "text-sm text-gray-600 leading-relaxed mb-6", children: errInfo.type === "timeout" ? "页面响应时间过长，可能是网络不稳定或网站本身较慢，请稍后重试。" : "该网站设置了安全策略（X-Frame-Options / frame-ancestors），拒绝被嵌入显示。您可以返回主页访问其他网站。" }),
                        l.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
                          l.jsx("button", { onClick: retryLoad, className: "px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors", children: "重试" }),
                          l.jsx("button", { onClick: goHome, className: "px-5 py-2.5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium transition-colors", children: "返回主页" }),
                        ] }),
                      ],
                    }),
                  }),
              ] }),
            ] })
          : l.jsxs("div", {
              className: "h-full flex items-center justify-center p-8",
              children: [
                l.jsxs("div", {
                  className: "w-full max-w-2xl text-center animate-fade-in-up",
                  children: [
                    l.jsx("h1", {
                      className: "text-5xl md:text-6xl font-black tracking-widest mb-10 select-none",
                      children: n.map((a, c) =>
                        l.jsx(
                          "span",
                          { className: `${r[c]} drop-shadow-[0_0_18px_rgba(255,255,255,0.28)]`, children: a },
                          c,
                        ),
                      ),
                    }),
                    l.jsxs("form", {
                      onSubmit: i,
                      className:
                        "flex items-center gap-3 bg-white/10 border border-white/15 rounded-full px-5 py-4 shadow-2xl backdrop-blur-xl",
                      children: [
                        l.jsx(Xt, { className: "w-5 h-5 text-white/50 flex-shrink-0" }),
                        l.jsx("input", {
                          value: e,
                          onChange: (a) => t(a.target.value),
                          placeholder: "输入网址或问题，例如 www.google.com / 谷歌是谁发明的？",
                          className:
                            "flex-1 bg-transparent outline-none border-none text-white placeholder-white/35 text-base",
                        }),
                        l.jsx("button", {
                          type: "submit",
                          className:
                            "px-5 py-2 rounded-full bg-white/15 backdrop-blur-md text-white font-medium hover:bg-white/25 active:scale-95 transition-all",
                          children: "前往",
                        }),
                      ],
                    }),
                    l.jsx("p", {
                      className: "mt-5 text-sm text-white/45",
                      children: "输入网站会直接打开；输入问题会搜索并显示结果。",
                    }),
                  ],
                }),
              ],
            }),
    });
  },
  Qm = () => {
    const [e, t] = N.useState(""),
      [n, r] = N.useState(!1),
      [s, i] = N.useState(!1),
      [ft, rt] = N.useState("environment"), // environment=后置, user=前置
      [torchOn, setTorchOn] = N.useState(!1),
      [torchSupported, setTorchSupported] = N.useState(!1),
      [mode, setMode] = N.useState("photo"), // photo=拍照, video=录像
      [recording, setRecording] = N.useState(!1),
      [recordTime, setRecordTime] = N.useState(0),
      a = N.useRef(null),
      c = N.useRef(null),
      mountedRef = N.useRef(!0),
      switchTimeoutRef = N.useRef(null),
      facingRef = N.useRef("environment"),
      recordingRef = N.useRef(!1),
      videoRecorderRef = N.useRef(null),
      audioRecorderRef = N.useRef(null),
      recordTimerRef = N.useRef(null),
      recordChunksRef = N.useRef({ video: [], audio: [] }),
      videoRecorderMimeRef = N.useRef("video/webm"),
      audioRecorderMimeRef = N.useRef("audio/webm"),
      recordStartRef = N.useRef(0),
      formatTime = (sec) => {
        const mm = Math.floor(sec / 60),
          ss = sec % 60;
        return (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
      },
      u = () => typeof indexedDB < "u",
      m = () =>
        typeof navigator < "u" && navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
      g = () =>
        new Promise((x, C) => {
          if (!u()) {
            C(new Error("当前浏览器不支持 IndexedDB，无法保存照片。"));
            return;
          }
          const v = indexedDB.open("lingjie-camera-photos", 1);
          ((v.onupgradeneeded = () => {
            const S = v.result;
            S.objectStoreNames.contains("photos") ||
              S.createObjectStore("photos", { keyPath: "id" });
          }),
            (v.onsuccess = () => x(v.result)),
            (v.onerror = () => C(v.error || new Error("IndexedDB 打开失败"))));
        }),
      y = async (x) => {
        const C = await g();
        try {
          await new Promise((v, S) => {
            const _ = C.transaction("photos", "readwrite");
            _.objectStore("photos").put({
              id: String(Date.now()) + "-" + Math.random().toString(16).slice(2),
              blob: x,
              type: x.type || "image/jpeg",
              createdAt: Date.now(),
            });
            ((_.oncomplete = () => v()),
              (_.onerror = () => S(_.error || new Error("照片保存失败"))));
          });
        } finally {
          C.close();
        }
        try { window.dispatchEvent(new CustomEvent("lingjie-camera-media-changed")); } catch(_) {}
      },
      // === 录像相关 ===
      startRecording = async () => {
        if (!c.current || !n || recordingRef.current) return;
        if (typeof window < "u" && !window.MediaRecorder) {
          t("当前浏览器不支持录像（缺少 MediaRecorder API）。");
          return;
        }
        t("");
        const stream = c.current,
          videoTrack = stream.getVideoTracks()[0],
          audioTrack = stream.getAudioTracks()[0];
        if (!videoTrack) { t("未获取到视频轨道，无法录像。"); return; }
        const vCandidates = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp8", "video/webm", "video/mp4"];
        const aCandidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"];
        const pickMime = (list) => {
          if (!window.MediaRecorder || !window.MediaRecorder.isTypeSupported) return list[list.length - 1] || null;
          for (let i = 0; i < list.length; i++) {
            try { if (window.MediaRecorder.isTypeSupported(list[i])) return list[i]; } catch(_) {}
          }
          return null;
        };
        const vMime = pickMime(vCandidates) || "video/webm",
          aMime = audioTrack ? (pickMime(aCandidates) || "audio/webm") : null;
        videoRecorderMimeRef.current = vMime;
        audioRecorderMimeRef.current = aMime || "audio/webm";
        recordChunksRef.current = { video: [], audio: [] };
        try {
          const vRec = new MediaRecorder(new MediaStream([videoTrack]), { mimeType: vMime });
          vRec.ondataavailable = (ev) => { if (ev.data && ev.data.size) recordChunksRef.current.video.push(ev.data); };
          vRec.onerror = () => {};
          let aRec = null;
          if (audioTrack && aMime) {
            try {
              aRec = new MediaRecorder(new MediaStream([audioTrack]), { mimeType: aMime });
              aRec.ondataavailable = (ev) => { if (ev.data && ev.data.size) recordChunksRef.current.audio.push(ev.data); };
              aRec.onerror = () => {};
            } catch(_) { aRec = null; }
          }
          videoRecorderRef.current = vRec;
          audioRecorderRef.current = aRec;
          recordStartRef.current = Date.now();
          recordingRef.current = !0;
          setRecording(!0);
          setRecordTime(0);
          recordTimerRef.current = setInterval(() => { setRecordTime(Math.floor((Date.now() - recordStartRef.current) / 1000)); }, 500);
          vRec.start(1000);
          if (aRec) aRec.start(1000);
        } catch (err) {
          recordingRef.current = !1;
          setRecording(!1);
          t(err && err.message ? err.message : "录像启动失败");
        }
      },
      stopRecording = async () => {
        if (!recordingRef.current) return;
        recordingRef.current = !1;
        if (recordTimerRef.current) { clearInterval(recordTimerRef.current); recordTimerRef.current = null; }
        setRecording(!1);
        setRecordTime(0);
        const vRec = videoRecorderRef.current,
          aRec = audioRecorderRef.current,
          waiters = [];
        if (vRec && vRec.state === "recording") {
          waiters.push(new Promise((res) => { vRec.onstop = () => res(); }));
          try { vRec.stop(); } catch(_) {}
        }
        if (aRec && aRec.state === "recording") {
          waiters.push(new Promise((res) => { aRec.onstop = () => res(); }));
          try { aRec.stop(); } catch(_) {}
        }
        if (waiters.length) {
          try { await Promise.race([Promise.all(waiters), new Promise((res) => setTimeout(res, 2500))]); } catch(_) {}
        }
        const vChunks = recordChunksRef.current.video,
          aChunks = recordChunksRef.current.audio;
        videoRecorderRef.current = null;
        audioRecorderRef.current = null;
        recordChunksRef.current = { video: [], audio: [] };
        const duration = Math.max(0, Math.round((Date.now() - recordStartRef.current) / 1000));
        const vBlob = vChunks.length ? new Blob(vChunks, { type: videoRecorderMimeRef.current || "video/webm" }) : null,
          aBlob = aChunks.length ? new Blob(aChunks, { type: audioRecorderMimeRef.current || "audio/webm" }) : null;
        if (!vBlob) {
          if (mountedRef.current) t("录像失败：未捕获到视频数据");
          return;
        }
        try {
          const db = await g();
          try {
            await new Promise((resolve, reject) => {
              const tx = db.transaction("photos", "readwrite");
              tx.objectStore("photos").put({
                id: String(Date.now()) + "-" + Math.random().toString(16).slice(2),
                kind: "video",
                blob: vBlob,
                audioBlob: aBlob || null,
                type: vBlob.type || "video/webm",
                audioType: aBlob ? (aBlob.type || "audio/webm") : "",
                duration: duration,
                createdAt: Date.now(),
              });
              tx.oncomplete = () => resolve();
              tx.onerror = () => reject(tx.error || new Error("录像保存失败"));
            });
          } finally {
            db.close();
          }
          try { window.dispatchEvent(new CustomEvent("lingjie-camera-media-changed")); } catch(_) {}
          if (mountedRef.current) t("录像已保存到“相册”应用。");
        } catch (err) {
          if (mountedRef.current) t(err && err.message ? err.message : "录像保存失败");
        }
      },
      toggleMode = () => {
        setMode((prev) => (prev === "video" ? "photo" : "video"));
      },
      h = async () => {
        if (recordingRef.current) {
          try { await stopRecording(); } catch(_) {}
        }
        (c.current && (c.current.getTracks().forEach((x) => { x.stop(); }), (c.current = null)), r(!1), setTorchOn(!1), setTorchSupported(!1));
      },
      k = async (facing) => {
        const curFacing = facing || facingRef.current || "environment";
        if (!m()) {
          t("当前浏览器不支持摄像头 API，无法拍照。");
          return;
        }
        if (!u()) {
          t("当前浏览器不支持 IndexedDB，无法保存照片。");
          return;
        }
        if (
          typeof window < "u" &&
          !window.isSecureContext &&
          location.hostname !== "localhost" &&
          location.hostname !== "127.0.0.1"
        ) {
          t("摄像头需要 HTTPS 或 localhost 环境。请用 node server.mjs 启动后访问 localhost。");
          return;
        }
        try {
          t("");
          let x;
          const videoReq = { facingMode: { ideal: curFacing } };
          try {
            x = await navigator.mediaDevices.getUserMedia({ video: videoReq, audio: !0 });
          } catch {
            try {
              x = await navigator.mediaDevices.getUserMedia({ video: videoReq, audio: !1 });
            } catch {
              x = await navigator.mediaDevices.getUserMedia({ video: videoReq });
            }
          }
          ((c.current = x),
            mountedRef.current && a.current && ((a.current.srcObject = x), await a.current.play()),
            mountedRef.current && r(!0));
          try {
            const vTrack = x.getVideoTracks()[0];
            if (vTrack) {
              const caps = vTrack.getCapabilities ? vTrack.getCapabilities() : {};
              if (caps && caps.torch) {
                setTorchSupported(!0);
              }
            }
          } catch(_) {}
        } catch (x) {
          let C = "摄像头启动失败。";
          (x && x.name === "NotAllowedError"
            ? (C = "你拒绝了摄像头权限，相机无法拍照。请在浏览器权限设置中允许摄像头。")
            : x && x.name === "NotFoundError"
              ? (C = "没有找到可用摄像头。")
              : x && x.name === "NotReadableError"
                ? (C = "摄像头被其他应用占用，请关闭占用摄像头的应用后重试。")
                : x && x.message && (C = x.message),
            t(C));
        }
      },
      p = async () => {
        if (!a.current || !n) return;
        t("");
        i(!0);
        try {
          const x = a.current,
            C = document.createElement("canvas");
          ((C.width = x.videoWidth || 1280), (C.height = x.videoHeight || 720));
          const v = C.getContext("2d");
          if (!v) throw new Error("当前浏览器不支持 Canvas，无法拍照。");
          v.drawImage(x, 0, 0, C.width, C.height);
          const S = await new Promise((_, T) => {
            C.toBlob
              ? C.toBlob((D) => (D ? _(D) : T(new Error("照片生成失败"))), "image/jpeg", 0.92)
              : T(new Error("当前浏览器不支持 canvas.toBlob，无法保存 Blob。"));
          });
          (await y(S), t("照片已保存到“相册”应用。"));
        } catch (x) {
          t(x instanceof Error ? x.message : "拍照失败");
        } finally {
          i(!1);
        }
      },
      w = () => {
        (h(), k());
      },
      // 切换前置/后置摄像头
      ot = async () => {
        if (recording) return;
        if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current);
        await h();
        const newFacing = facingRef.current === "environment" ? "user" : "environment";
        facingRef.current = newFacing;
        rt(newFacing);
        switchTimeoutRef.current = setTimeout(() => { if (mountedRef.current) k(newFacing); }, 200); // 用新方向重新启动
      },
      // 手电筒开关
      toggleTorch = async () => {
        if (!c.current) return;
        const track = c.current.getVideoTracks()[0];
        if (!track) return;
        try {
          const caps = track.getCapabilities ? track.getCapabilities() : {};
          if (!caps || !caps.torch) return;
          const newVal = !torchOn;
          await track.applyConstraints({ advanced: [{ torch: newVal }] });
          setTorchOn(newVal);
        } catch(_) {}
      };
    return (
      N.useEffect(() => (mountedRef.current = !0, k(), () => { mountedRef.current = !1; if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current); h(); }), []),
      l.jsxs("div", {
        className: "h-full bg-gray-950 text-white flex flex-col overflow-hidden",
        children: [
          l.jsxs("div", {
            className:
              "flex items-center justify-between px-4 py-3 bg-white/10 border-b border-white/10",
            children: [
              l.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  l.jsx("div", {
                    className:
                      "w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg",
                    children: l.jsx(nd, { className: "w-5 h-5 text-white" }),
                  }),
                  l.jsxs("div", {
                    children: [
                      l.jsx("p", { className: "font-medium", children: "相机" }),
                      l.jsx("p", {
                        className: "text-xs text-white/45",
                        children: "拍摄与录像，自动保存到相册",
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx("button", {
                onClick: w,
                className:
                  "px-4 py-2 rounded-full bg-white/10 text-white/75 hover:bg-white/20 text-sm",
                children: "重启相机",
              }),
            ],
          }),
          e &&
            l.jsx("div", {
              className: `mx-4 mt-3 rounded-xl border px-4 py-3 text-sm ${e.includes("已保存") ? "border-green-400/30 bg-green-500/15 text-white" : "border-red-400/30 bg-red-500/15 text-white"}`,
              children: e,
            }),
          l.jsxs("div", {
            className:
              "relative flex-1 flex flex-col items-center justify-center p-4 overflow-hidden",
            children: [
              l.jsx("div", {
                className:
                  "relative w-full h-full rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-2xl",
                children: l.jsxs("div", {
                  className: "absolute inset-0",
                  children: [
                    l.jsx("video", {
                      ref: a,
                      autoPlay: !0,
                      muted: !0,
                      playsInline: !0,
                      className: "w-full h-full object-cover",
                    }),
                    !n &&
                      l.jsx("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-black/70",
                        children: l.jsxs("div", {
                          className: "text-center px-8",
                          children: [
                            l.jsx(nd, { className: "w-16 h-16 mx-auto mb-4 text-white/35" }),
                            l.jsx("p", { className: "text-white/70", children: "等待摄像头启动" }),
                            l.jsx("button", {
                              onClick: w,
                              className:
                                "mt-4 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-sm active:scale-95",
                              children: "启动相机",
                            }),
                          ],
                        }),
                      }),
                    l.jsx("div", {
                      className:
                        "absolute inset-4 rounded-[1.5rem] border border-white/20 pointer-events-none",
                    }),
                    l.jsx("button", {
                      onClick: (C) => {
                        C.stopPropagation();
                        toggleMode();
                      },
                      disabled: recording,
                      style: {
                        position: "absolute",
                        left: "16px",
                        top: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 14px",
                        borderRadius: "9999px",
                        border: "none",
                        background: mode === "video" ? "rgba(239,68,68,0.8)" : "rgba(0,0,0,0.55)",
                        color: "#fff",
                        fontSize: "12px",
                        cursor: "pointer",
                        opacity: recording ? 0.5 : 1,
                        touchAction: "manipulation",
                        WebkitTapHighlightColor: "transparent",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      },
                      children: [
                        l.jsx("span", { children: mode === "video" ? "🎥" : "📷" }),
                        l.jsx("span", { children: mode === "video" ? "录像模式" : "拍照模式" }),
                      ],
                    }),
                    mode === "video" && recording &&
                      l.jsx("div", {
                        style: {
                          position: "absolute",
                          top: "16px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "6px 14px",
                          borderRadius: "9999px",
                          background: "rgba(239,68,68,0.9)",
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: 600,
                          zIndex: 5,
                        },
                        children: [
                          l.jsx("span", {
                            style: { width: "8px", height: "8px", borderRadius: "9999px", background: "#fff" },
                          }),
                          l.jsx("span", { children: "REC " + formatTime(recordTime) }),
                        ],
                      }),
                    l.jsx("button", {
                      onClick: (C) => {
                        C.stopPropagation();
                        ot();
                      },
                      disabled: recording,
                      style: {
                        position: "absolute",
                        left: "50%",
                        top: "16px",
                        transform: "translateX(-50%)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 14px",
                        borderRadius: "9999px",
                        border: "none",
                        background: "rgba(0,0,0,0.55)",
                        color: "#fff",
                        fontSize: "12px",
                        cursor: "pointer",
                        opacity: recording ? 0.5 : 1,
                        touchAction: "manipulation",
                        WebkitTapHighlightColor: "transparent",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      },
                      children: [
                        l.jsx(em, { className: "w-3.5 h-3.5" }),
                        l.jsx("span", {
                          children: ft === "environment" ? "切换前置" : "切换后置",
                        }),
                      ],
                    }),
                    torchSupported && n && l.jsx("button", {
                      onClick: (C) => {
                        C.stopPropagation();
                        toggleTorch();
                      },
                      disabled: recording,
                      style: {
                        position: "absolute",
                        right: "16px",
                        top: "16px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "9999px",
                        border: "none",
                        background: torchOn ? "rgba(250,204,21,0.85)" : "rgba(0,0,0,0.55)",
                        color: torchOn ? "#000" : "#fff",
                        fontSize: "18px",
                        cursor: "pointer",
                        opacity: recording ? 0.5 : 1,
                        touchAction: "manipulation",
                        WebkitTapHighlightColor: "transparent",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: l.jsx("span", { children: "🔦" }),
                    }),
                  ],
                }),
              }),
              mode === "photo"
                ? l.jsx("button", {
                    onClick: p,
                    disabled: !n || s,
                    className:
                      "absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border-4 border-white/35 shadow-2xl active:scale-95 disabled:opacity-40 flex items-center justify-center",
                    children: l.jsx("span", {
                      className: `w-14 h-14 rounded-full ${s ? "bg-blue-400 animate-pulse" : "bg-gradient-to-br from-white to-gray-200"}`,
                    }),
                  })
                : l.jsx("button", {
                    onClick: (C) => {
                      C.stopPropagation();
                      if (recording) { stopRecording(); } else { startRecording(); }
                    },
                    disabled: !n,
                    className:
                      "absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border-4 border-white/35 shadow-2xl active:scale-95 disabled:opacity-40 flex items-center justify-center",
                    children: recording
                      ? l.jsx("span", { className: "w-10 h-10 rounded-lg bg-red-500 animate-pulse" })
                      : l.jsx("span", { className: "w-14 h-14 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]" }),
                  }),
            ],
          }),
        ],
      })
    );
  },
  zm = () => {
    const { setWallpaper: e } = hm(),
      [t, n] = N.useState([]),
      [r, s] = N.useState(null),
      [i, a] = N.useState(null),
      [c, u] = N.useState(1),
      [m, g] = N.useState(0),
      [y, h] = N.useState(""),
      [k, p] = N.useState([
        {
          id: "sample-1",
          url: "assets/sample-1-landscape.jpeg",
          title: "风景照片",
          createdAt: Date.now() - 1,
          type: "系统图片",
          source: "sample",
        },
        {
          id: "sample-2",
          url: "assets/sample-2-beach.jpeg",
          title: "海滩",
          createdAt: Date.now() - 2,
          type: "系统图片",
          source: "sample",
        },
        {
          id: "sample-3",
          url: "assets/sample-3-puppy.jpeg",
          title: "可爱的小狗",
          createdAt: Date.now() - 3,
          type: "系统图片",
          source: "sample",
        },
        {
          id: "sample-4",
          url: "assets/sample-4-seaside.jpeg",
          title: "海边晨曦",
          createdAt: Date.now() - 4,
          type: "系统图片",
          source: "sample",
        },
      ]),
      w = N.useRef([]),
      z = () => typeof indexedDB < "u",
      f = () =>
        new Promise((U, M) => {
          if (!z()) {
            M(new Error("当前浏览器不支持 IndexedDB，无法读取相机照片。"));
            return;
          }
          const R = indexedDB.open("lingjie-camera-photos", 1);
          ((R.onupgradeneeded = () => {
            const Q = R.result;
            Q.objectStoreNames.contains("photos") ||
              Q.createObjectStore("photos", { keyPath: "id" });
          }),
            (R.onsuccess = () => U(R.result)),
            (R.onerror = () => M(R.error || new Error("IndexedDB 打开失败"))));
        }),
      o = async () => {
        try {
          h("");
          const U = await f();
          let M = [];
          try {
            M = await new Promise((R, Q) => {
              const le = U.transaction("photos", "readonly").objectStore("photos").getAll();
              ((le.onsuccess = () => R(le.result || [])), (le.onerror = () => Q(le.error)));
            });
          } finally {
            U.close();
          }
          (w.current.forEach((R) => URL.revokeObjectURL(R)), (w.current = []));
          const R = M.map((Q) => {
            const le = URL.createObjectURL(Q.blob);
            w.current.push(le);
            const isVideo = Q.kind === "video";
            let audioUrl = null;
            if (isVideo && Q.audioBlob) {
              audioUrl = URL.createObjectURL(Q.audioBlob);
              w.current.push(audioUrl);
            }
            return {
              id: Q.id,
              url: le,
              audioUrl: audioUrl,
              kind: isVideo ? "video" : "photo",
              title: isVideo ? "相机录像" : "相机照片",
              duration: Q.duration || 0,
              createdAt: Q.createdAt,
              type: Q.type || "image/jpeg",
              source: "camera",
            };
          }).sort((Q, le) => le.createdAt - Q.createdAt);
          n(R);
        } catch (U) {
          h(U instanceof Error ? U.message : "照片读取失败");
        }
      },
      d = async (U) => {
        if (U.source === "sample") {
          p((M) => M.filter((R) => R.id !== U.id));
          s(null);
          a(null);
          return;
        }
        try {
          const M = await f();
          try {
            await new Promise((R, Q) => {
              const le = M.transaction("photos", "readwrite");
              (le.objectStore("photos").delete(U.id),
                (le.oncomplete = () => R()),
                (le.onerror = () => Q(le.error || new Error("删除失败"))));
            });
          } finally {
            M.close();
          }
          (await o(), s(null), a(null));
        } catch (M) {
          h(M instanceof Error ? M.message : "删除失败");
        }
      },
      x = (U) => {
        (U.source === "camera"
          ? ( (() => { try { localStorage.setItem("lingjie-wallpaper", "photo:" + U.id); } catch(_) {} })(), e(U.url))
          : ( (() => { try { localStorage.setItem("lingjie-wallpaper", U.url); } catch(_) {} })(), e(U.url)),
          a(null),
          h("已设置为壁纸"));
      },
      C = (U) =>
        new Date(U).toLocaleString("zh-CN", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      v = [...t, ...k].sort((U, M) => M.createdAt - U.createdAt),
      photoCount = t.filter((U) => U.kind !== "video").length,
      videoCount = t.length - photoCount,
      S = () => {
        o();
      },
      _ = () => {
        (s(null), u(1), g(0));
      };
    N.useEffect(() => {
      o();
      const handler = () => o();
      window.addEventListener("lingjie-camera-media-changed", handler);
      return () => {
        window.removeEventListener("lingjie-camera-media-changed", handler);
        w.current.forEach((U) => URL.revokeObjectURL(U));
      };
    }, []);
    return l.jsxs("div", {
      className: "h-full bg-gray-900/95 flex flex-col text-white",
      onClick: () => i && a(null),
      children: [
        l.jsxs("div", {
          className:
            "flex items-center justify-between p-3 bg-gray-800/50 border-b border-gray-700",
          children: [
            l.jsxs("div", {
              children: [
                l.jsx("h2", { className: "text-lg font-semibold", children: "相册" }),
                l.jsxs("p", {
                  className: "text-xs text-white",
                  children: ["照片 ", photoCount, " 张 · 录像 ", videoCount, " 个 · 系统图片 ", k.length, " 张"],
                }),
              ],
            }),
            l.jsx("button", {
              onClick: (U) => {
                (U.stopPropagation(), S());
              },
              className:
                "px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white/80",
              children: "刷新",
            }),
          ],
        }),
        y &&
          l.jsx("div", {
            className: `mx-4 mt-3 rounded-xl px-4 py-2 text-sm ${y.includes("已设置") ? "bg-green-500/15 text-white border border-green-400/30" : "bg-red-500/15 text-white border border-red-400/30"}`,
            children: y,
          }),
        l.jsx("div", {
          className: "flex-1 overflow-auto p-4",
          onClick: () => a(null),
          children:
            v.length === 0
              ? l.jsxs("div", {
                  className: "h-full flex flex-col items-center justify-center text-white",
                  children: [
                    l.jsx(nd, { className: "w-16 h-16 mb-4 opacity-30" }),
                    l.jsx("p", { children: "还没有照片或录像" }),
                  ],
                })
              : l.jsx("div", {
                  className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
                  children: v.map((U) =>
                    l.jsxs(
                      "div",
                      {
                        className:
                          "relative aspect-video rounded-xl overflow-hidden bg-gray-800 group border border-white/10",
                        onClick: (M) => M.stopPropagation(),
                        children: [
                          l.jsx("button", {
                            onClick: () => {
                              (a(null), s(U));
                            },
                            className: "absolute inset-0 z-0",
                            children: U.kind === "video"
                              ? l.jsxs("div", {
                                  className: "relative w-full h-full",
                                  children: [
                                    l.jsx("video", {
                                      src: U.url,
                                      muted: !0,
                                      playsInline: !0,
                                      preload: "metadata",
                                      className: "w-full h-full object-cover transition-transform group-hover:scale-105",
                                    }),
                                    l.jsx("div", {
                                      className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                      children: l.jsx("div", {
                                        className: "w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/30",
                                        children: l.jsx("span", { className: "text-white text-sm ml-0.5", children: "▶" }),
                                      }),
                                    }),
                                  ],
                                })
                              : l.jsx("img", {
                                  src: U.url,
                                  alt: U.title,
                                  className:
                                    "w-full h-full object-cover transition-transform group-hover:scale-105",
                                }),
                          }),
                          l.jsxs("div", {
                            className:
                              "absolute inset-x-0 bottom-0 z-10 p-2 bg-gradient-to-t from-black/75 to-transparent pointer-events-none",
                            children: [
                              l.jsx("p", {
                                className: "text-xs text-white truncate",
                                children: U.title,
                              }),
                              l.jsx("p", {
                                className: "text-[10px] text-white/55",
                                children: U.source === "camera" ? C(U.createdAt) : U.type,
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: (M) => {
                              (M.stopPropagation(), a(i === U.id ? null : U.id));
                            },
                            className:
                              "absolute top-2 right-2 z-20 w-9 h-9 rounded-full bg-white/15 backdrop-blur-xl border border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_8px_22px_rgba(0,0,0,0.45)] text-white hover:bg-white/25 flex items-center justify-center text-lg leading-none active:scale-95",
                            children: "⋮",
                          }),
                          i === U.id &&
                            l.jsxs("div", {
                              className:
                                "absolute top-11 right-2 z-30 w-36 rounded-2xl bg-black border border-white/15 shadow-[0_14px_34px_rgba(0,0,0,0.55)] overflow-hidden",
                              onClick: (M) => M.stopPropagation(),
                              children: [
                                l.jsx("button", {
                                  onClick: (M) => {
                                    (M.stopPropagation(), d(U));
                                  },
                                  className:
                                    "block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-white/10",
                                  children: "删除",
                                }),
                                U.kind !== "video" &&
                                  l.jsx("button", {
                                    onClick: (M) => {
                                      (M.stopPropagation(), x(U));
                                    },
                                    className:
                                      "block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10",
                                    children: "设置为壁纸",
                                  }),
                              ],
                            }),
                        ],
                      },
                      U.id,
                    ),
                  ),
                }),
        }),
        r &&
          l.jsx("div", {
            className: "fixed inset-0 bg-black flex items-center justify-center z-[9999] p-4",
            onClick: _,
            children: l.jsxs("div", {
              className: "relative w-full h-full flex items-center justify-center",
              onClick: (U) => U.stopPropagation(),
              children: [
                r.kind === "video"
                  ? l.jsxs("div", {
                      className: "flex flex-col items-center justify-center gap-4 max-w-[92vw]",
                      children: [
                        l.jsx("video", {
                          src: r.url,
                          controls: !0,
                          autoPlay: !0,
                          playsInline: !0,
                          className: "max-w-[92vw] max-h-[72vh] rounded-2xl shadow-2xl object-contain",
                        }),
                        r.audioUrl &&
                          l.jsx("audio", {
                            src: r.audioUrl,
                            controls: !0,
                            autoPlay: !0,
                            className: "w-[80vw] max-w-md",
                          }),
                      ],
                    })
                  : l.jsx("img", {
                      src: r.url,
                      alt: "",
                      className:
                        "max-w-[92vw] max-h-[72vh] rounded-2xl shadow-2xl object-contain transition-transform",
                      style: { transform: `scale(${c}) rotate(${m}deg)` },
                    }),
                l.jsxs("div", {
                  className: "absolute top-4 right-4 flex gap-2",
                  children: [
                    r.kind !== "video" &&
                      l.jsx("button", {
                        onClick: () => x(r),
                        className:
                          "px-4 py-2 rounded-full bg-blue-500/80 backdrop-blur-xl border border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_8px_22px_rgba(0,0,0,0.45)] text-white text-sm hover:bg-blue-400 active:scale-95",
                        children: "设为壁纸",
                      }),
                    l.jsx("button", {
                      onClick: () => d(r),
                      className:
                        "px-4 py-2 rounded-full bg-red-500/80 backdrop-blur-xl border border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_8px_22px_rgba(0,0,0,0.45)] text-white text-sm hover:bg-red-400 active:scale-95",
                      children: "删除",
                    }),
                    l.jsx("button", {
                      onClick: _,
                      className:
                        "px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_8px_22px_rgba(0,0,0,0.45)] text-white text-sm active:scale-95",
                      children: "关闭",
                    }),
                  ],
                }),
                r.kind !== "video" &&
                  l.jsxs("div", {
                    className:
                      "absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-2xl border border-black/80 px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_14px_34px_rgba(0,0,0,0.55)]",
                    children: [
                      l.jsx("button", {
                        onClick: () => u(Math.max(0.5, c - 0.25)),
                        className:
                          "min-w-12 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_8px_22px_rgba(0,0,0,0.45)] text-white text-sm hover:bg-white/25 active:scale-95",
                        children: "缩小",
                      }),
                      l.jsx("button", {
                        onClick: () => u(Math.min(3, c + 0.25)),
                        className:
                          "min-w-12 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_8px_22px_rgba(0,0,0,0.45)] text-white text-sm hover:bg-white/25 active:scale-95",
                        children: "放大",
                      }),
                      l.jsx("button", {
                        onClick: () => g((m + 90) % 360),
                        className:
                          "min-w-12 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_8px_22px_rgba(0,0,0,0.45)] text-white text-sm hover:bg-white/25 active:scale-95",
                        children: "旋转",
                      }),
                    ],
                  }),
              ],
            }),
          }),
      ],
    });
  },
  Om = ({ className: e }) =>
    l.jsxs("svg", {
      className: e,
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: 2,
      children: [
        l.jsx("path", { d: "M9 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5" }),
        l.jsx("path", { d: "M3 10l7-7 7 7" }),
        l.jsx("path", { d: "M21 21v-8a4 4 0 0 0-4-4h-8" }),
      ],
    }),
  Lm = ({ onClose: e }) => {
    const { setWallpaper: _setWallpaper } = hm();
    N.useEffect(() => {
      if (window.__lingjieLockViewport) return;
      window.__lingjieLockViewport = !0;
      const gs = (ev) => ev.preventDefault();
      const gc = (ev) => ev.preventDefault();
      const ge = (ev) => ev.preventDefault();
      const wh = (ev) => { ev.ctrlKey && ev.preventDefault(); };
      document.addEventListener("gesturestart", gs, { passive: !1 });
      document.addEventListener("gesturechange", gc, { passive: !1 });
      document.addEventListener("gestureend", ge, { passive: !1 });
      document.addEventListener("wheel", wh, { passive: !1 });
      return () => {
        document.removeEventListener("gesturestart", gs);
        document.removeEventListener("gesturechange", gc);
        document.removeEventListener("gestureend", ge);
        document.removeEventListener("wheel", wh);
        window.__lingjieLockViewport = !1;
      };
    }, []);
    const [t, n] = N.useState([
        { role: "assistant", content: "你好呀，我是小灵，有什么可以帮到你的吗？" },
      ]),
      [r, s] = N.useState(""),
      [i, a] = N.useState(!1),
      [dr, pr] = N.useState(!1),
      [imgGenToast, setImgGenToast] = N.useState(""),
      c = N.useRef(null);
    N.useEffect(() => {
      var h;
      (h = c.current) == null || h.scrollTo({ top: c.current.scrollHeight, behavior: "smooth" });
    }, [t, i]);
    const u = () => "这个问题我暂时回答不了呢。不过我对灵界 OS 的功能很熟悉，你可以问我比如「怎么设置手势锁」「笔记怎么用」「怎么换壁纸」之类的，试试看吧！";
    const b = () => "回复出错了，请稍后再试。";
    const m = async (h) => {
        let rulesText = "";
        try {
          rulesText = await fetch("./AI.txt", { cache: "no-store" })
            .then((e) => e.ok ? e.text() : "");
        } catch {}
        const rules = rulesText ? rulesText.split("\n").filter((l) => l.trim()).map((l) => {
          const sep = l.indexOf("|答案:");
          if (sep < 0) return null;
          const qs = l.substring(l.indexOf(":") + 1, sep).split("|");
          const a = l.substring(sep + 4).trim();
          return { patterns: qs, answer: a };
        }).filter(Boolean) : [];
        const input = h[h.length - 1].content.trim();
        for (const rule of rules) {
          for (const p of rule.patterns) {
            try { if (new RegExp(p, "i").test(input)) return rule.answer; } catch {}
          }
        }
        return "我暂时还不清楚这个问题，你可以试试问我关于灵界 OS 各个应用的使用方法哦！";
      },
      y = async () => {
        const h = r.trim();
        if (!h || i) return;
        const k = [...t, { role: "user", content: h }];
        (n(k), s(""), a(!0));
        try {
          let p = await m(k);
          n((w) => [...w, { role: "assistant", content: p.trim() }]);
        } catch (p) {
          n((w) => [...w, { role: "assistant", content: "回复出错了，请稍后再试。" }]);
        } finally {
          a(!1);
        }
      };
    return l.jsxs("div", {
      className:
        "fixed top-20 left-1/2 -translate-x-1/2 w-[420px] max-w-[calc(100vw-32px)] h-[560px] z-[1200] rounded-[28px] overflow-hidden animate-scale-in",
      style: {
        background: "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        backdropFilter: "blur(30px) saturate(160%)",
        WebkitBackdropFilter: "blur(30px) saturate(160%)",
      },
      children: [
        l.jsxs("div", {
          className: "flex items-center justify-between px-5 py-4 border-b border-white/10",
          children: [
            l.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                l.jsx("div", {
                  className:
                    "w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg animate-glow-pulse",
                  children: l.jsx(Uf, { className: "w-5 h-5 text-white" }),
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("p", { className: "text-white font-medium", children: "小灵" }),
                    l.jsx("p", {
                      className: "text-xs text-white/45",
                      children: "基于规则匹配",
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                l.jsx("button", {
                  onClick: () => {
                    setImgGenToast("该功能已在 2026 年 8 月 5 日 7点28分29秒 正式停用");
                    setTimeout(() => setImgGenToast(""), 5000);
                  },
                  className:
                    "px-3 py-1.5 rounded-full text-xs text-white/40 hover:text-white/60 hover:bg-white/5 transition-all active:scale-95",
                  children: "图片生成",
                }),
                l.jsx("button", {
                  onClick: () => pr(!0),
                  className:
                    "px-3 py-1.5 rounded-full text-xs text-white/70 hover:text-white hover:bg-white/10 transition-all active:scale-95",
                  children: "免责声明",
                }),
                l.jsx("button", {
                  onClick: e,
                  className:
                    "p-2 rounded-full text-white/55 hover:text-white hover:bg-white/10 transition-all active:scale-95",
                  children: l.jsx(It, { className: "w-4 h-4" }),
                }),
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          ref: c,
          className: "h-[420px] overflow-y-auto px-5 py-4 space-y-3",
          children: [
            t.map((h, k) =>
              l.jsx(
                "div",
                {
                  className: `flex ${h.role === "user" ? "justify-end" : "justify-start"}`,
                  children: l.jsx("div", {
                    className: `max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${h.role === "user" ? "bg-blue-500 text-white rounded-br-md" : h.error ? "ai-error-message rounded-bl-md" : "bg-white/10 text-white/90 border border-white/10 rounded-bl-md"}`,
                    children: h.content,
                  }),
                },
                k,
              ),
            ),
            i &&
              l.jsx("div", {
                className: "flex justify-start",
                children: l.jsx("div", {
                  className:
                    "bg-white/10 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3 text-white/70 text-sm",
                  children: "正在思考...",
                }),
              }),
          ],
        }),
        l.jsx("div", {
          className: "p-4 border-t border-white/10",
          children: l.jsxs("div", {
            className:
              "flex items-center gap-2 bg-white/10 border border-white/10 rounded-2xl px-3 py-2",
            children: [
              l.jsx("input", {
                value: r,
                onChange: (h) => s(h.target.value),
                onKeyDown: (h) => h.key === "Enter" && y(),
                placeholder: "和小灵说点什么...",
                className:
                  "flex-1 bg-transparent outline-none text-white placeholder-white/35 text-sm",
              }),
              l.jsx("button", {
                onClick: y,
                disabled: i || !r.trim(),
                className:
                  "w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md text-white flex items-center justify-center disabled:opacity-40 transition-all hover:scale-105 active:scale-95",
                children: l.jsx(yi, { className: "w-4 h-4" }),
              }),
            ],
          }),
        }),
        dr &&
          l.jsx("div", {
            className:
              "fixed inset-0 z-[10001] flex items-center justify-center bg-black/40 backdrop-blur-sm",
            onClick: () => pr(!1),
            children: l.jsxs("div", {
              className:
                "w-[420px] max-w-[calc(100vw-32px)] bg-black/40 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl p-6 animate-scale-in max-h-[80vh] overflow-y-auto",
              onClick: (h) => h.stopPropagation(),
              children: [
                l.jsx("h3", {
                  className: "text-white text-lg font-medium text-center mb-4",
                  children: "免责声明",
                }),
                l.jsxs("div", {
                  className: "space-y-4 text-white/90 text-sm leading-relaxed",
                  children: [
                    l.jsxs("div", {
                      children: [
                        l.jsx("p", { className: "text-white font-medium mb-1", children: "【AI 对话】" }),
                        l.jsx("p", {
                          className: "text-white/80",
                          children: "小灵不是 AI 大模型，也不是大语言模型。小灵的回复由谢子涵编写的规则匹配生成，通过加载「AI.txt」文件进行关键词匹配并返回预设回复，对话在本地完成，不调用任何外部 AI 服务。回复仅供功能说明，不构成法律、医疗或其他专业意见。请勿输入违法或侵权内容。",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsx("button", {
                  onClick: () => pr(!1),
                  className:
                    "w-full mt-6 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-xl transition-all text-sm font-medium",
                  children: "我已了解",
                }),
              ],
            }),
          }),
        imgGenToast &&
          l.jsx("div", {
            className: "fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-500/90 text-white px-5 py-2.5 rounded-xl text-sm z-[10005] lingjie-anim-toast-in shadow-lg max-w-[90vw] text-center",
            children: imgGenToast,
          }),
      ],
    });
  },
  Rm = (e, t = !0) =>
    e === 0
      ? { condition: t ? "晴朗" : "晴夜", icon: ja }
      : [1, 2].includes(e)
        ? { condition: "少云", icon: An }
        : e === 3
          ? { condition: "阴天", icon: An }
          : [45, 48].includes(e)
            ? { condition: "雾", icon: An }
            : [51, 53, 55, 56, 57].includes(e)
              ? { condition: "毛毛雨", icon: gs }
              : [61, 63, 65, 66, 67, 80, 81, 82].includes(e)
                ? { condition: "降雨", icon: gs }
                : [71, 73, 75, 77, 85, 86].includes(e)
                  ? { condition: "降雪", icon: An }
                  : [95, 96, 99].includes(e)
                    ? { condition: "雷雨", icon: gs }
                    : { condition: "多云", icon: An },
  $m = [
    {
      name: "北京市",
      cities: [{ name: "北京市", districts: ["东城区", "西城区", "朝阳区", "丰台区", "海淀区"] }],
    },
    {
      name: "上海市",
      cities: [{ name: "上海市", districts: ["黄浦区", "徐汇区", "长宁区", "静安区", "浦东新区"] }],
    },
    {
      name: "天津市",
      cities: [{ name: "天津市", districts: ["和平区", "河东区", "河西区", "南开区", "滨海新区"] }],
    },
    {
      name: "重庆市",
      cities: [
        { name: "重庆市", districts: ["渝中区", "江北区", "沙坪坝区", "九龙坡区", "南岸区"] },
      ],
    },
    {
      name: "广东省",
      cities: [
        { name: "广州市", districts: ["越秀区", "海珠区", "天河区", "白云区", "番禺区"] },
        { name: "深圳市", districts: ["罗湖区", "福田区", "南山区", "宝安区", "龙岗区"] },
        { name: "珠海市", districts: ["香洲区", "斗门区", "金湾区"] },
        { name: "佛山市", districts: ["禅城区", "南海区", "顺德区"] },
        { name: "东莞市", districts: ["莞城街道", "南城街道", "东城街道"] },
      ],
    },
    {
      name: "江苏省",
      cities: [
        { name: "南京市", districts: ["玄武区", "秦淮区", "建邺区", "鼓楼区", "栖霞区"] },
        { name: "苏州市", districts: ["姑苏区", "虎丘区", "吴中区", "相城区", "吴江区"] },
        { name: "无锡市", districts: ["锡山区", "惠山区", "滨湖区", "梁溪区", "新吴区"] },
        { name: "常州市", districts: ["天宁区", "钟楼区", "新北区", "武进区"] },
        { name: "徐州市", districts: ["鼓楼区", "云龙区", "贾汪区", "泉山区", "铜山区"] },
      ],
    },
    {
      name: "浙江省",
      cities: [
        { name: "杭州市", districts: ["上城区", "拱墅区", "西湖区", "滨江区", "萧山区"] },
        { name: "宁波市", districts: ["海曙区", "江北区", "北仑区", "镇海区", "鄞州区"] },
        { name: "温州市", districts: ["鹿城区", "龙湾区", "瓯海区"] },
        { name: "嘉兴市", districts: ["南湖区", "秀洲区"] },
        { name: "绍兴市", districts: ["越城区", "柯桥区", "上虞区"] },
      ],
    },
    {
      name: "四川省",
      cities: [
        { name: "成都市", districts: ["锦江区", "青羊区", "金牛区", "武侯区", "成华区"] },
        { name: "绵阳市", districts: ["涪城区", "游仙区", "安州区"] },
        { name: "德阳市", districts: ["旌阳区", "罗江区"] },
        { name: "乐山市", districts: ["市中区", "沙湾区"] },
      ],
    },
    {
      name: "湖北省",
      cities: [
        { name: "武汉市", districts: ["江岸区", "江汉区", "硚口区", "汉阳区", "武昌区"] },
        { name: "宜昌市", districts: ["西陵区", "伍家岗区", "点军区"] },
        { name: "襄阳市", districts: ["襄城区", "樊城区", "襄州区"] },
      ],
    },
    {
      name: "湖南省",
      cities: [
        { name: "长沙市", districts: ["芙蓉区", "天心区", "岳麓区", "开福区", "雨花区"] },
        { name: "株洲市", districts: ["荷塘区", "芦淞区", "石峰区", "天元区"] },
        { name: "湘潭市", districts: ["雨湖区", "岳塘区"] },
      ],
    },
    {
      name: "河南省",
      cities: [
        { name: "郑州市", districts: ["中原区", "二七区", "管城回族区", "金水区", "上街区"] },
        { name: "洛阳市", districts: ["老城区", "西工区", "瀍河回族区", "涧西区", "洛龙区"] },
        { name: "开封市", districts: ["龙亭区", "顺河回族区", "鼓楼区", "禹王台区"] },
      ],
    },
    {
      name: "山东省",
      cities: [
        { name: "济南市", districts: ["历下区", "市中区", "槐荫区", "天桥区", "历城区"] },
        { name: "青岛市", districts: ["市南区", "市北区", "黄岛区", "崂山区", "李沧区"] },
        { name: "烟台市", districts: ["芝罘区", "福山区", "牟平区", "莱山区"] },
        { name: "潍坊市", districts: ["潍城区", "寒亭区", "坊子区", "奎文区"] },
      ],
    },
    {
      name: "陕西省",
      cities: [
        { name: "西安市", districts: ["新城区", "碑林区", "莲湖区", "灞桥区", "未央区"] },
        { name: "宝鸡市", districts: ["渭滨区", "金台区", "陈仓区"] },
        { name: "咸阳市", districts: ["秦都区", "杨陵区", "渭城区"] },
      ],
    },
    {
      name: "福建省",
      cities: [
        { name: "福州市", districts: ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区"] },
        { name: "厦门市", districts: ["思明区", "海沧区", "湖里区", "集美区", "同安区"] },
        { name: "泉州市", districts: ["鲤城区", "丰泽区", "洛江区", "泉港区"] },
      ],
    },
    {
      name: "辽宁省",
      cities: [
        { name: "沈阳市", districts: ["和平区", "沈河区", "大东区", "皇姑区", "铁西区"] },
        { name: "大连市", districts: ["中山区", "西岗区", "沙河口区", "甘井子区", "旅顺口区"] },
        { name: "鞍山市", districts: ["铁东区", "铁西区", "立山区", "千山区"] },
      ],
    },
    {
      name: "河北省",
      cities: [
        { name: "石家庄市", districts: ["长安区", "桥西区", "新华区", "裕华区"] },
        { name: "唐山市", districts: ["路南区", "路北区", "古冶区", "开平区"] },
        { name: "保定市", districts: ["竞秀区", "莲池区", "满城区"] },
      ],
    },
    {
      name: "安徽省",
      cities: [
        { name: "合肥市", districts: ["瑶海区", "庐阳区", "蜀山区", "包河区"] },
        { name: "芜湖市", districts: ["镜湖区", "鸠江区", "弋江区", "湾沚区"] },
        { name: "蚌埠市", districts: ["龙子湖区", "蚌山区", "禹会区", "淮上区"] },
      ],
    },
  ],
  Dm = Array.from(new Set($m.flatMap((e) => e.cities.map((t) => t.name)))),
  Fm = () => {
    const [e, t] = N.useState("北京市"),
      [n, r] = N.useState(null),
      [s, i] = N.useState(!0),
      [a, c] = N.useState(""),
      [u, m] = N.useState(!1),
      mountedRef = N.useRef(!0);
    N.useEffect(() => { mountedRef.current = !0; return () => { mountedRef.current = !1; }; }, []);
    const g = async (p) => {
      (i(!0), c(""));
      try {
        const w = p.trim(),
          z = w.endsWith("市") ? w : `${w}市`,
          f = w.replace(/(特别行政区|自治州|地区|盟|市|县|区)$/u, ""),
          o = Array.from(new Set([w, f].filter(Boolean)));
          let d = [];
          for (const T of o)
            if (
              ((d =
                (
                  await (
                    async () => {
                      const res = await fetch(
                        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(T)}&count=10&language=zh&format=json`,
                      );
                      if (!res.ok) return { results: [] };
                      return res.json();
                    }
                  )()
                ).results || []),
              d.length > 0)
            )
              break;
          const x = d.find((T) => T.country_code === "CN") || d[0];
          if (!x) throw new Error("未找到该城市");
          const C = new URL("https://api.open-meteo.com/v1/forecast");
          (C.searchParams.set("latitude", x.latitude),
            C.searchParams.set("longitude", x.longitude),
            C.searchParams.set("current", "temperature_2m,weather_code,is_day"),
            C.searchParams.set("timezone", "auto"));
          const weatherRes = await fetch(C.toString());
          if (!weatherRes.ok) throw new Error("天气数据获取失败");
          const S = await weatherRes.json(),
            _ = S && S.current ? Rm(S.current.weather_code, !!S.current.is_day) : { condition: "未知", icon: An };
          if (!mountedRef.current) return;
          (t(z),
            r({
              temp: S && S.current ? Math.round(S.current.temperature_2m) : 0,
              condition: _.condition,
              icon: _.icon,
            }));
        } catch (w) {
          if (!mountedRef.current) return;
          c(w instanceof Error ? w.message : "天气获取失败");
        } finally {
          if (mountedRef.current) i(!1);
        }
      };
    N.useEffect(() => {
      g("北京市");
    }, []);
    const y = () => {
        m(!0);
      },
      h = (p) => {
        (m(!1), g(p));
      };
    if (s && !n)
      return l.jsx("div", {
        className:
          "h-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white",
        children: l.jsx("div", {
          className: "animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full",
        }),
      });
    const k = (n == null ? void 0 : n.icon) || ja;
    return l.jsxs("div", {
      className:
        "relative h-full bg-gradient-to-br from-blue-500 to-cyan-400 flex flex-col items-center justify-center text-white overflow-hidden",
      children: [
        l.jsx("div", {
          className:
            "absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none animate-float-soft",
        }),
        l.jsx("div", {
          className:
            "absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none animate-float-soft motion-delay-200",
        }),
        l.jsx("button", {
          onClick: y,
          className:
            "absolute top-6 right-6 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full text-sm transition-all hover:-translate-y-0.5 active:scale-95",
          children: "切换城市",
        }),
        l.jsxs("div", {
          className: "relative z-10 text-center animate-fade-in-up",
          children: [
            l.jsx("p", { className: "text-white/80 text-lg mb-2", children: e }),
            l.jsxs("div", {
              className: "flex items-center justify-center gap-4 mb-2",
              children: [
                l.jsx(k, { className: "w-16 h-16 animate-float-soft" }),
                l.jsxs("span", {
                  className: "text-8xl font-light tracking-tighter",
                  children: [(n == null ? void 0 : n.temp) ?? "--", "°"],
                }),
              ],
            }),
            l.jsx("p", {
              className: "text-2xl opacity-90 mb-8",
              children: (n == null ? void 0 : n.condition) ?? "",
            }),
          ],
        }),
        l.jsx("div", {
          className: "absolute bottom-6 text-white/50 text-xs animate-fade-in-up motion-delay-200",
          children: "数据来自 Open-Meteo API",
        }),
        a &&
          l.jsx("div", {
            className:
              "absolute top-20 left-1/2 -translate-x-1/2 bg-red-500/80 text-white text-sm px-4 py-2 rounded-full animate-fade-in-up",
            children: a,
          }),
        u &&
          l.jsx("div", {
            className:
              "absolute inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center animate-fade-in",
            onClick: () => m(!1),
            children: l.jsxs("div", {
              className:
                "w-80 max-h-[70vh] bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white animate-scale-in",
              onClick: (p) => p.stopPropagation(),
              children: [
                l.jsxs("div", {
                  className: "flex items-center justify-between px-4 py-3 border-b border-gray-100",
                  children: [
                    l.jsx("button", {
                      onClick: () => m(!1),
                      className: "text-sm text-white hover:text-white",
                      children: "取消",
                    }),
                    l.jsx("h3", { className: "font-medium text-sm", children: "选择城市" }),
                    l.jsx("div", { className: "w-8" }),
                  ],
                }),
                l.jsx("div", {
                  className: "overflow-y-auto max-h-[60vh]",
                  children: l.jsx("div", {
                    className: "divide-y divide-gray-50",
                    children: Dm.map((p) =>
                      l.jsxs(
                        "button",
                        {
                          onClick: () => h(p),
                          className:
                            "w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors text-sm flex items-center justify-between",
                          children: [
                            l.jsx("span", { children: p }),
                            e === p &&
                              l.jsx("span", {
                                className: "text-xs text-white",
                                children: "当前",
                              }),
                          ],
                        },
                        p,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Xm = () => {
    const [e, t] = N.useState(Array(9).fill(null)),
      [n, r] = N.useState(!1),
      [s, i] = N.useState(null),
      [a, c] = N.useState(!1),
      [mode, setMode] = N.useState("pve"),
      [turn, setTurn] = N.useState("X"),
      aiTimeoutRef = N.useRef(null);
    N.useEffect(() => () => { if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current); }, []);
      const u = (m) => {
        const g = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (const [y, h, k] of g) if (m[y] && m[y] === m[h] && m[y] === m[k]) return m[y];
        return null;
      },
      m = (g) => g.every((y) => y !== null),
      g = (y, h, k) => {
        const p = u(y);
        if (p === "O") return 10 - h;
        if (p === "X") return h - 10;
        if (m(y)) return 0;
        if (k) {
          let w = -Infinity;
          for (let z = 0; z < 9; z++)
            if (!y[z]) {
              y[z] = "O";
              w = Math.max(w, g(y, h + 1, !1));
              y[z] = null;
            }
          return w;
        } else {
          let w = Infinity;
          for (let z = 0; z < 9; z++)
            if (!y[z]) {
              y[z] = "X";
              w = Math.min(w, g(y, h + 1, !0));
              y[z] = null;
            }
          return w;
        }
      },
      y = (h) => {
        let k = -1,
          p = -Infinity;
        for (let w = 0; w < 9; w++)
          if (!h[w]) {
            h[w] = "O";
            const z = g(h, 0, !1);
            h[w] = null;
            if (z > p) {
              p = z;
              k = w;
            }
          }
        return k;
      },
      h = (k) => {
        if (e[k] || n || a) return;
        const cur = mode === "pvp" ? turn : "X";
        const p = [...e];
        p[k] = cur;
        t(p);
        const w = u(p);
        if (w || m(p)) {
          i(w);
          r(!0);
          return;
        }
        if (mode === "pvp") { setTurn(cur === "X" ? "O" : "X"); return; }
        c(!0);
        if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current);
        aiTimeoutRef.current = setTimeout(() => {
          const z = y(p);
          if (z < 0) { c(!1); return; }
          p[z] = "O";
          t([...p]);
          const f = u(p);
          if (f || m(p)) {
            i(f);
            r(!0);
          }
          c(!1);
        }, 400);
      };
    return l.jsxs("div", {
      className: "h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 select-none",
      children: [
        l.jsx("h2", { className: "text-xl font-bold mb-2", children: "井字棋" }),
        l.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          l.jsx("button", { onClick: () => { if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current); setMode("pve"); t(Array(9).fill(null)); r(!1); i(null); c(!1); setTurn("X"); }, className: "px-3 py-1.5 text-xs rounded-full font-medium transition-all " + (mode === "pve" ? "bg-white/40 text-white shadow-md ring-1 ring-white/40" : "bg-white/10 text-white/70 hover:bg-white/20"), children: "人机对战" }),
          l.jsx("button", { onClick: () => { if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current); setMode("pvp"); t(Array(9).fill(null)); r(!1); i(null); c(!1); setTurn("X"); }, className: "px-3 py-1.5 text-xs rounded-full font-medium transition-all " + (mode === "pvp" ? "bg-white/40 text-white shadow-md ring-1 ring-white/40" : "bg-white/10 text-white/70 hover:bg-white/20"), children: "双人对战" }),
        ] }),
        l.jsx("p", { className: "text-sm text-white/50 mb-6", children: n ? (s ? (s === "X" ? (mode === "pvp" ? "黑方 (X) 赢了！" : "你赢了！") : (mode === "pvp" ? "白方 (O) 赢了！" : "AI 赢了！")) : "平局！") : a ? "AI 思考中..." : mode === "pvp" ? (turn === "X" ? "黑方 (X) 回合" : "白方 (O) 回合") : "你的回合 (X)" }),
        l.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: e.map((k, p) => l.jsx("button", { key: p, onClick: () => h(p), className: `w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold transition-all active:scale-95 ${k ? "bg-white/20" : "bg-white/10 hover:bg-white/20"}`, children: k })) }),
        l.jsx("button", { onClick: () => { if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current); t(Array(9).fill(null)); r(!1); i(null); c(!1); setTurn("X"); }, className: "px-5 py-2 rounded-full bg-white/15 hover:bg-white/25 text-sm transition-all active:scale-95", children: "重新开始" }),
      ],
    });
  },
  // 五子棋应用
  Wz = () => {
    const GZ = 15,
      dirs = [[1, 0], [0, 1], [1, 1], [1, -1]];
    const [mode, setMode] = N.useState("pve"),
      [diff, setDiff] = N.useState("easy"),
      [board, setBoard] = N.useState(Array(GZ * GZ).fill(null)),
      [turn, setTurn] = N.useState("black"),
      [winner, setWinner] = N.useState(null),
      [over, setOver] = N.useState(false),
      aiTimerRef = N.useRef(null);
    const boardRef = N.useRef(board);
    boardRef.current = board;
    const inB = (x, y) => x >= 0 && x < GZ && y >= 0 && y < GZ,
      at = (b, x, y) => (inB(x, y) ? b[y * GZ + x] : null);
    const checkWin = (b, x, y) => {
      const c = b[y * GZ + x];
      if (!c) return null;
      for (const [dx, dy] of dirs) {
        let cnt = 1;
        for (let s = 1; s < 5; s++) { const nx = x + dx * s, ny = y + dy * s; if (at(b, nx, ny) === c) cnt++; else break; }
        for (let s = 1; s < 5; s++) { const nx = x - dx * s, ny = y - dy * s; if (at(b, nx, ny) === c) cnt++; else break; }
        if (cnt >= 5) return c;
      }
      return null;
    };
    const lineScore = (b, x, y, dx, dy, c) => {
      let cnt = 1, blocked = 0, nx = x + dx, ny = y + dy;
      while (at(b, nx, ny) === c) { cnt++; nx += dx; ny += dy; }
      if (!inB(nx, ny) || at(b, nx, ny) !== null) blocked++;
      nx = x - dx; ny = y - dy;
      while (at(b, nx, ny) === c) { cnt++; nx -= dx; ny -= dy; }
      if (!inB(nx, ny) || at(b, nx, ny) !== null) blocked++;
      if (cnt >= 5) return 1e5;
      if (blocked === 0) { if (cnt === 4) return 1e4; if (cnt === 3) return 3e3; if (cnt === 2) return 2e2; return 10; }
      if (blocked === 1) { if (cnt === 4) return 3e3; if (cnt === 3) return 5e2; if (cnt === 2) return 20; return 5; }
      return cnt >= 4 ? 100 : cnt === 3 ? 50 : cnt === 2 ? 10 : 1;
    };
    const scorePoint = (b, idx, c) => {
      const x = idx % GZ, y = Math.floor(idx / GZ);
      let s = 0;
      for (const [dx, dy] of dirs) s += lineScore(b, x, y, dx, dy, c);
      return s;
    };
    const hasNeighbor = (b, idx) => {
      const x = idx % GZ, y = Math.floor(idx / GZ);
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { if (!dx && !dy) continue; if (at(b, x + dx, y + dy)) return true; }
      return false;
    };
    const aiPick = (b) => {
      const empties = [];
      for (let i = 0; i < b.length; i++) if (!b[i]) empties.push(i);
      if (!empties.length) return -1;
      const pool = empties.filter((i) => hasNeighbor(b, i));
      const cands = pool.length ? pool : empties;
      if (diff === "easy" && Math.random() < 0.45) return cands[Math.floor(Math.random() * cands.length)];
      let best = cands[0], bestS = -Infinity;
      for (const i of cands) {
        const atk = scorePoint(b, i, "white"), def = scorePoint(b, i, "black");
        let s = atk * 1.2 + def;
        if (diff === "easy") s = s * (0.5 + Math.random() * 0.5);
        else if (diff === "medium") s = s * (0.85 + Math.random() * 0.15);
        if (s > bestS) { bestS = s; best = i; }
      }
      return best;
    };
    const reset = () => { if (aiTimerRef.current) clearTimeout(aiTimerRef.current); setBoard(Array(GZ * GZ).fill(null)); setTurn("black"); setWinner(null); setOver(false); };
    const handleClick = (idx) => {
      if (over || board[idx]) return;
      const isPve = mode === "pve";
      if (isPve && turn !== "black") return;
      const b = board.slice();
      b[idx] = turn;
      setBoard(b);
      const x = idx % GZ, y = Math.floor(idx / GZ);
      const w = checkWin(b, x, y);
      if (w || !b.includes(null)) { setWinner(w || "draw"); setOver(true); return; }
      if (isPve) {
        setTurn("white");
        aiTimerRef.current = setTimeout(() => {
          const cb = boardRef.current;
          if (!cb.includes(null)) return;
          const ai = aiPick(cb);
          if (ai < 0) return;
          const nb = cb.slice();
          nb[ai] = "white";
          setBoard(nb);
          const ax = ai % GZ, ay = Math.floor(ai / GZ);
          const aw = checkWin(nb, ax, ay);
          if (aw || !nb.includes(null)) { setWinner(aw || "draw"); setOver(true); return; }
          setTurn("black");
        }, 350);
      } else {
        setTurn(turn === "black" ? "white" : "black");
      }
    };
    const status = over ? (winner === "draw" ? "平局！" : winner === "black" ? "黑棋胜！" : "白棋胜！") : mode === "pvp" ? (turn === "black" ? "黑棋回合" : "白棋回合") : turn === "black" ? "你的回合 (黑)" : "电脑思考中...";
    const btnOn = "px-3 py-1.5 text-xs rounded-full font-medium transition-all bg-white/40 text-white shadow-md ring-1 ring-white/40",
      btnOff = "px-3 py-1.5 text-xs rounded-full transition-all bg-white/10 text-white/70 hover:bg-white/20";
    const cell = (idx) => {
      const v = board[idx];
      const canPlay = !over && !v && (mode === "pvp" || turn === "black");
      const dot = v === "black" ? l.jsx("div", { className: "rounded-full bg-black shadow-md", style: { width: "70%", height: "70%" } }) : v === "white" ? l.jsx("div", { className: "rounded-full bg-white border border-black/30 shadow-md", style: { width: "70%", height: "70%" } }) : null;
      return l.jsx("button", {
        key: idx,
        onClick: () => handleClick(idx),
        className: "group relative flex items-center justify-center transition-all active:scale-90",
        style: { background: (Math.floor(idx / GZ) + idx) % 2 ? "rgba(0,0,0,0.16)" : "rgba(0,0,0,0.05)", width: 26, height: 26 },
        children: [dot, canPlay && l.jsx("div", { className: "pointer-events-none absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity", style: { background: "rgba(255,255,255,0.45)", width: "62%", height: "62%" }, children: null })],
      });
    };
    return l.jsxs("div", {
      className: "h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-white p-4 select-none overflow-auto",
      children: [
        l.jsx("h2", { className: "text-xl font-bold mb-1", children: "五子棋" }),
        l.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          l.jsx("button", { onClick: () => { reset(); setMode("pve"); }, className: mode === "pve" ? btnOn : btnOff, children: "人机对战" }),
          l.jsx("button", { onClick: () => { reset(); setMode("pvp"); }, className: mode === "pvp" ? btnOn : btnOff, children: "双人对战" }),
        ] }),
        mode === "pve" && l.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          ["easy", "medium", "hard"].map((d) => l.jsx("button", { key: d, onClick: () => { reset(); setDiff(d); }, className: diff === d ? btnOn : btnOff, children: d === "easy" ? "简单" : d === "medium" ? "中等" : "困难" })),
        ] }),
        l.jsx("p", { className: "text-sm mb-3 text-white/70", children: status }),
        l.jsx("div", { className: "grid mb-4", style: { gridTemplateColumns: "repeat(15, 26px)", gap: 2, background: "#d4a76a", borderRadius: 10, padding: 6, border: "1px solid rgba(255,255,255,0.15)" }, children: board.map((v, idx) => cell(idx)) }),
        l.jsx("button", { onClick: reset, className: "px-5 py-2 rounded-full bg-white/15 hover:bg-white/25 text-sm transition-all active:scale-95", children: "重新开始" }),
      ],
    });
  },
  // 系统介绍弹窗组件 - z-index:50, 低于应用窗口(100起步)
  Wm = ({ onClose: e }) =>
    l.jsxs("div", {
      className: "lingjie-anim-fade-in",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        padding: "16px",
      },
      onClick: e,
      children: [
        l.jsx("div", {
          className: "lingjie-anim-scale-in",
          style: {
            width: "100%",
            maxWidth: "520px",
            maxHeight: "80vh",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            background: "rgba(30,30,40,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "24px",
            padding: "24px",
            color: "#fff",
            fontFamily: "system-ui,-apple-system,sans-serif",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            touchAction: "pan-y",
          },
          onClick: (t) => t.stopPropagation(),
          children: l.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              fontSize: "14px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.8)",
            },
            children: [
              l.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
                children: [
                  l.jsx("h2", {
                    style: {
                      margin: "0",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#fff",
                    },
                    children: "系统介绍与说明",
                  }),
                  l.jsx("button", {
                    onClick: e,
                    style: {
                      width: "32px",
                      height: "32px",
                      border: "none",
                      borderRadius: "9999px",
                      background: "transparent",
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "18px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      touchAction: "manipulation",
                      WebkitTapHighlightColor: "transparent",
                    },
                    children: "\u2715",
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "灵界 1.2026810.916.Extremely unstable",
                  }),
                  l.jsx("p", {
                    style: { margin: "0" },
                    children:
                      "灵界 1.2026810.916.Extremely unstable 是由谢子涵个人独立开发的 Web 操作系统，全部代码由谢子涵一人编写，没有任何人参与协助。系统围绕帮助台、应用星环两大核心构建。笔记、文件、照片、录音、设置等用户内容保存在本机（localStorage / IndexedDB）。天气、翻译、音乐预览、时间校准、网页搜索会向第三方公开接口发送必要请求，详见「数据与隐私」。系统以 HTML/CSS/JavaScript 构建，可在任何现代浏览器中运行，支持触屏和鼠标两种操作方式。内置 17 个应用（含应用安装器）、助手「小灵」。",
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "制作人信息",
                  }),
                  l.jsx("p", {
                    style: { margin: "0" },
                    children:
                      "本系统由谢子涵个人独立制作。系统架构、UI 设计、全部应用代码、AI 助手小灵的规则编写，全部由谢子涵一人完成。没有任何人参与协助，不依赖任何团队或公司。",
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "核心架构",
                  }),
                  l.jsxs("ul", {
                    style: { margin: "0", paddingLeft: "18px" },
                    children: [
                      l.jsx("li", {
                        children:
                          "帮助台（功能问答指引）：位于屏幕顶部中央，是整个系统的规则匹配问答中枢。点击即可与助手「小灵」进行对话，支持功能介绍、应用使用指导、日常问答等场景。小灵的回复基于本地规则匹配生成，所有对话均在本地完成。",
                      }),
                      l.jsx("li", {
                        children:
                          "应用星环：位于屏幕底部的应用启动栏，以毛玻璃质感的圆角图标呈现。点击任意图标即可打开对应应用，正在运行的应用会显示底部指示条。应用星环支持最多同时打开多个应用窗口，窗口可拖拽移动、最小化和关闭。",
                      }),
                      l.jsx("li", {
                        children:
                          "空间桌面：桌面会同步显示文件管理器中「桌面」文件夹的内容。在文件管理器桌面文件夹中创建的文件或文件夹会实时出现在桌面上，点击桌面文件即可直接打开查看或编辑。",
                      }),
                      l.jsx("li", {
                        children:
                          "电源控制面板：位于右下角，集成了锁定空间、灵界重启和关闭灵界三个功能入口。密码和手势管理已移至「设置」应用的「安全」选项卡中。重启和关机会播放优雅的过渡动画，重启后会自动进入锁屏状态。",
                      }),
                      l.jsx("li", {
                        children:
                          "锁屏系统：点击「锁定空间」或桌面「一键锁屏」小组件后进入锁屏界面。未设置密码或手势时，滑动即可解锁；设置密码后需输入4位密码解锁；设置手势后需绘制手势图案解锁。错误超过3次会临时锁定，密码和手势管理可在「设置」应用的「安全」选项卡中操作。",
                      }),
                      l.jsx("li", {
                        children:
                          "存储管理：位于「设置 → 存储」。可查看总用量（MB）、IndexedDB / 本地存储 / 临时缓存分区，以及文件系统、录音、照片与视频、已安装应用、壁纸缓存、笔记、书签、系统设置等分项。支持手动刷新、显示最后更新时间；清空前需确认，若已设置锁屏密码或手势还需验证身份，清缓存只清除临时数据。",
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "内置应用一览",
                  }),
                  l.jsxs("ul", {
                    style: { margin: "0", paddingLeft: "18px" },
                    children: [
                      l.jsx("li", {
                        children:
                          "文件管理器：完整的文件管理系统，支持新建文件和文件夹、重命名、删除、查看文件内容。支持编辑 TXT 文本文件。桌面文件夹的内容会同步显示在系统桌面上。",
                      }),
                      l.jsx("li", {
                        children:
                          "终端：功能完整的命令行界面，支持 ls、cd、pwd、mkdir、touch、rm、cat、echo、whoami、date、uname、history 等常用命令。输入 help 查看全部可用命令。",
                      }),
                      l.jsx("li", {
                        children:
                          "设置：可调整系统壁纸（内置10种渐变壁纸，也支持将相册中的图片设为壁纸）、音量、亮度等系统参数。「安全」选项卡支持密码锁、手势锁及锁屏方式管理。「存储」选项卡可查看总用量、各存储区和应用数据类型占用，支持手动刷新、清缓存和分区清空。",
                      }),
                      l.jsx("li", {
                        children:
                          "笔记：轻量级文本笔记应用，支持新建、编辑、删除笔记，数据保存在本地。",
                      }),
                      l.jsx("li", {
                        children:
                          "浏览器：内置网页浏览器，输入网址可直接在窗口内打开网站；输入问题或关键词会自动跳转到百度搜索。",
                      }),
                      l.jsx("li", {
                        children:
                          "天气：通过 Open-Meteo API 获取全球各城市的实时天气数据，包括温度和天气状况。支持城市切换，数据真实有效。",
                      }),
                      l.jsx("li", {
                        children:
                          "音乐：内置音乐播放器界面，提供播放控制和播放列表功能。",
                      }),
                      l.jsx("li", {
                        children:
                          "计算器：标准计算器，支持加减乘除、百分比、正负切换等基本运算。",
                      }),
                      l.jsx("li", {
                        children:
                          "翻译：中英互译应用，通过 MyMemory API 实时翻译，支持单词和整句翻译，自动检测中文或英文输入。",
                      }),
                      l.jsx("li", {
                        children:
                          "时间：集成时钟、计时器和正计时三种模式，满足日常时间管理需求。",
                      }),
                      l.jsx("li", {
                        children:
                          "相册：查看和管理图片与视频，包括系统内置的示例图片、相机拍摄的照片和相机录制的视频。点击录像会同时播放视频和录音。每张照片右上角有3点菜单，可删除或设为壁纸（录像可删除，不能设壁纸）。画图应用保存的图片也会出现在这里。",
                      }),
                      l.jsx("li", {
                        children:
                          "相机：调用设备摄像头拍照和录像。左上角按钮可切换拍照/录像模式，默认使用后置摄像头，可切换前置。录像时会同时录制视频和麦克风录音，停止后自动保存到相册，点击录像即可同时播放视频和录音。照片和录像均以 Blob 格式直接保存到 IndexedDB，不转 Base64，保证质量。",
                      }),
                      l.jsx("li", {
                        children:
                          "画图：内置绘画工具，提供8种颜色选择（红、黄、蓝、绿、青、蓝、紫、白）、画笔粗细调节（1-30px）、橡皮擦、清空画布和保存功能。保存的图片会存入相册。",
                      }),
                      l.jsx("li", {
                        children:
                          "井字棋：经典的 3×3 井字棋游戏，支持人机对战和双人对战两种模式。人机模式下用户先手 X，AI 后手 O，AI 采用 Minimax 算法，几乎不会输，挑战看能否打败它！",
                      }),
                      l.jsx("li", {
                        children:
                          "五子棋：15×15 棋盘的五子棋游戏，支持人机对战（简单/中等/困难三档难度）和双人对战两种模式。人机模式下你执黑先行，AI 执白后手，先在横、竖或斜线上连成五子即获胜。",
                      }),
                      l.jsx("li", {
                        children: l.jsxs("div", {
                          children: [
                            l.jsx("p", {
                              style: { margin: "0 0 6px 0" },
                              children:
                                "应用安装器：灵界 OS 的应用扩展工具。打开后选择「.ljl」应用包即可安装第三方应用，应用图标支持所有常见图片格式（PNG/JPG/GIF/WebP/BMP/SVG 等，安装时自动转换为 PNG），安装成功后应用会出现在应用星环和空间桌面，并可在「设置 → 应用」中查看和卸载。应用数据保存在本地 IndexedDB 中，卸载即彻底删除。",
                            }),
                            l.jsx("p", {
                              style: { margin: "0 0 4px 0", color: "#fff", fontWeight: 500 },
                              children: "如何制作 .ljl 应用包",
                            }),
                            l.jsx("p", {
                              style: { margin: "0 0 4px 0" },
                              children: ".ljl 本质是一个 ZIP 压缩包（把压缩包后缀直接改成 .ljl 即可），需包含以下文件：",
                            }),
                            l.jsxs("ul", {
                              style: { margin: "0", paddingLeft: "18px" },
                              children: [
                                l.jsx("li", {
                                  children: "1.txt：应用名称（纯文本，不超过 6 个字符，安装后显示在应用星环上）",
                                }),
                                l.jsx("li", {
                                  children:
                                    "icon.png：应用图标（支持 PNG、JPG、GIF、WebP、BMP、SVG 等所有常见图片格式，安装时自动转换为 PNG；建议 512×512 以内的简洁方形图标；过大的图片安装时会自动压缩到 128px）",
                                }),
                                l.jsx("li", {
                                  children: "index.html：应用页面（必填，窗口内渲染的内容，建议配合下方 js/css 文件使用）",
                                }),
                                l.jsx("li", {
                                  children: "index.js：应用脚本（可选，页面加载完成后自动执行）",
                                }),
                                l.jsx("li", {
                                  children: "index.css：应用样式（可选）",
                                }),
                              ],
                            }),
                            l.jsx("p", {
                              style: { margin: "6px 0 0 0" },
                              children:
                                 "制作步骤：① 编写 index.html 页面，需要逻辑时再写 index.js，需要样式时写 index.css；② 准备应用图标（icon.png 或其他常见图片格式，如 JPG/GIF/WebP/BMP/SVG，安装时自动转换为 PNG）和 1.txt 名称文件；③ 将以上文件一起打包成 ZIP 压缩包；④ 把压缩包重命名为「xxx.ljl」；⑤ 打开应用安装器选择该文件即可完成安装。第三方应用在受限沙箱中运行，请只安装你信任的应用包。因第三方应用内容产生的法律责任由提供或安装该应用的用户自行承担。",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "AI 助手「小灵」",
                  }),
                  l.jsx("p", {
                    style: { margin: "0" },
                    children:
                      "小灵是灵界 OS 内置的助手，由谢子涵编写规则。它通过加载「AI.txt」文件，将用户输入的关键词与预设规则进行匹配，然后返回对应的回复。对话在本地完成，不调用任何 AI 大模型。回复仅供功能说明，不构成法律、医疗或其他专业意见。",
                  }),
                  l.jsxs("ul", {
                    style: { margin: "8px 0 0 0", paddingLeft: "18px" },
                    children: [
                      l.jsx("li", {
                        children: "会什么：介绍灵界 OS 系统功能和各应用使用方法（文件管理器、终端、设置、存储管理、笔记、浏览器、天气、计算器、翻译、相机、相册、画图、井字棋、五子棋、时间等）、回答日常问候、提供系统操作指引。",
                      }),
                      l.jsx("li", {
                        children: "不会什么：不能联网搜索实时信息、不能进行数学计算、不能执行代码、不能记住上下文（每条消息独立匹配）、不能理解复杂逻辑推理、不能进行自由对话（只能按规则匹配关键词）。超出规则范围的问题会返回固定兜底回复。",
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "操作指南",
                  }),
                  l.jsxs("ul", {
                    style: { margin: "0", paddingLeft: "18px" },
                    children: [
                      l.jsx("li", {
                        children:
                          "点击底部应用星环中的图标即可打开对应应用，支持同时打开多个应用",
                      }),
                      l.jsx("li", {
                        children:
                          "应用窗口可以拖拽标题栏移动位置，支持最小化和关闭",
                      }),
                      l.jsx("li", {
                        children:
                          "桌面文件点击会自动打开文件管理器查看内容",
                      }),
                      l.jsx("li", {
                        children:
                          "在文件管理器桌面文件夹中创建的文件会实时同步显示在桌面上",
                      }),
                      l.jsx("li", {
                        children:
                          "帮助台位于屏幕顶部中央，点击即可与助手小灵对话",
                      }),
                      l.jsx("li", {
                        children:
                          "系统介绍按钮位于屏幕右上角，随时可查看本说明",
                      }),
                      l.jsx("li", {
                        children:
                          "右下角的电源按钮可打开电源控制面板，进行锁定、重启或关机操作。密码和手势管理请打开「设置」应用的「安全」选项卡；存储用量与清理请打开「设置」应用的「存储」选项卡",
                      }),
                      l.jsx("li", {
                        children:
                          "锁屏后，如未设置密码或手势，滑动即可解锁；如已设置密码，输入4位密码后点击解锁；如已设置手势，绘制手势图案即可解锁。密码和手势管理请在「设置」应用的「安全」选项卡中操作",
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "数据与隐私",
                  }),
                  l.jsx("p", {
                    style: { margin: "0" },
                    children:
                      "灵界 OS 采用本地优先策略：笔记、书签、虚拟文件系统和系统设置保存在 localStorage；录音、相机照片与视频、已安装应用、壁纸缓存保存在 IndexedDB（媒体以 Blob 保存）。相机、麦克风仅在你主动使用相机或录音时，经浏览器授权后在本机采集，系统不会把这些媒体上传到自有服务器。以下功能会向第三方发送必要请求：天气（城市名 → Open-Meteo）、翻译（待译文本 → MyMemory）、音乐（搜索词 → iTunes Search API，仅 30 秒预览）、时间校准（向时间服务请求当前时间）、浏览器搜索（关键词 → 百度）。小灵对话在本地规则匹配，不调用外部 AI。打开「设置 → 存储」可查看占用并清理。",
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "免责声明",
                  }),
                  l.jsx("p", {
                    style: { margin: "0" },
                    children:
                      "本系统按「现状」提供，不含任何明示或默示担保。小灵基于本地规则匹配回复，不是法律、医疗或专业建议。天气、翻译、音乐、时间校准、网页浏览会使用第三方公开服务，其可用性、准确性和条款由各服务方负责。第三方 .ljl 应用由安装者自行判断来源与内容。请勿输入或传播违法、侵权或违反公序良俗的内容。因使用本系统、第三方服务或第三方应用产生的法律责任由用户自行承担。",
                  }),
                ],
              }),
              l.jsxs("div", {
                children: [
                  l.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                    },
                    children: "系统版本",
                  }),
                  l.jsx("p", {
                    style: { margin: "0" },
                    children:
                      "当前版本：灵界 1.2026810.916.Extremely unstable（本地版）。系统持续更新中，如有问题或建议，欢迎反馈给谢子涵。",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Dk = ({ openFiles: OF } = {}) => {
    const [e, t] = N.useState(() => pm()),
      n = "/home/灵者/桌面",
      r = N.useRef(0),
      s = () => {
        try {
          t(pm());
        } catch {}
      },
      i = (a) => {
        const c = Date.now();
        if (c - r.current < 350) return;
        r.current = c;
        const u = a
          ? {
              path: a.type === "folder" ? `${n}/${a.name}` : n,
              fileId: a.type === "folder" ? null : a.id,
            }
          : { path: n };
        ( (() => { try { localStorage.setItem("lingjie-fm-open-request", JSON.stringify(u)); } catch(_) {} })(),
          window.dispatchEvent(new Event("lingjie-open-file-manager-item")),
          OF && OF());
      };
    N.useEffect(() => {
      s();
      const a = () => s(),
        c = setInterval(s, 800);
      return (
        window.addEventListener("lingjie-fs-updated", a),
        window.addEventListener("storage", a),
        () => {
          (window.removeEventListener("lingjie-fs-updated", a),
            window.removeEventListener("storage", a),
            clearInterval(c));
        }
      );
    }, []);
    const a = e[n] || [],
      c = (u) =>
        l.jsxs(
          "button",
          {
            type: "button",
            onTouchStart: (m) => {
              (m.stopPropagation(), i(u));
            },
            onPointerDown: (m) => {
              (m.stopPropagation(), i(u));
            },
            onMouseDown: (m) => {
              (m.stopPropagation(), i(u));
            },
            onClick: (m) => {
              (m.stopPropagation(), i(u));
            },
            style: {
              width: "76px",
              height: "84px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "8px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.15)",
              background:
                u.type === "folder"
                  ? "linear-gradient(135deg, rgba(253,224,71,0.15), rgba(245,158,11,0.1))"
                  : "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(37,99,235,0.08))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              opacity: 1,
              pointerEvents: "auto",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
              color: "#fff",
              position: "relative",
              zIndex: 60,
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            },
            className: "desktop-file-shortcut active:scale-90 hover:scale-105 hover:shadow-lg",
            children: [
              l.jsx("div", {
                style: {
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background:
                    u.type === "folder"
                      ? "linear-gradient(135deg, #fde047, #f59e0b)"
                      : "linear-gradient(135deg, #38bdf8, #2563eb)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.3)",
                  fontSize: u.type === "folder" ? "20px" : "11px",
                  fontWeight: 700,
                  color: u.type === "folder" ? "#78350f" : "#fff",
                },
                children: u.type === "folder" ? "📁" : "TXT",
              }),
              l.jsx("div", {
                style: {
                  maxWidth: "68px",
                  padding: "2px 6px",
                  borderRadius: "6px",
                  background: "rgba(0,0,0,0.35)",
                  fontSize: "10px",
                  lineHeight: "14px",
                  color: "#fff",
                  textAlign: "center",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
                children: u.name,
              }),
            ],
          },
          u.id,
        );
    return l.jsx("div", {
      className: "absolute inset-0 z-[60] pointer-events-none",
      children: l.jsx("div", {
        className:
          "absolute left-1/2 top-1/2 w-[min(780px,78vw)] max-h-[50vh] -translate-x-1/2 -translate-y-1/2 pointer-events-auto",
        style: { zIndex: 60 },
        children:
          a.length === 0
            ? null
            : l.jsx("div", {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "10px",
                  pointerEvents: "auto",
                },
                children: a.map((u) => c(u)),
              }),
      }),
    });
  },
  Bm = () => {
    const [e, t] = N.useState("loading");
    return (
      N.useEffect(() => {
        const n = setTimeout(() => t("off"), 2e3);
        return () => clearTimeout(n);
      }, []),
      l.jsx("div", {
        className: "fixed inset-0 z-[9999]",
        children:
          e === "loading"
            ? l.jsxs("div", {
                className:
                  "absolute inset-0 flex flex-col items-center justify-center animate-fade-in",
                style: {
                  background:
                    "linear-gradient(135deg, #FFD60A 0%, #FF9F0A 30%, #FF2D55 70%, #FF375F 100%)",
                },
                children: [
                  l.jsx("div", {
                    className: "rounded-full animate-spin mb-8",
                    style: { width: 32, height: 32, border: "4px solid rgba(255,255,255,0.3)", borderTopColor: "#fff" },
                  }),
                  l.jsx("p", {
                    className:
                      "text-white/90 text-base font-medium tracking-[0.3em]",
                    children: "正在关机中",
                  }),
                ],
              })
            : l.jsx("div", {
                className: "absolute inset-0 bg-black",
              }),
      })
    );
  },
  Bsod = ({ errorCode: e, onRestart: t }) =>
    l.jsx("div", {
      className:
        "fixed inset-0 z-[99999] flex flex-col items-center justify-center px-8 text-white",
      style: { background: "#0078d4", fontFamily: "system-ui, -apple-system, sans-serif", zIndex: 99999, position: "fixed", inset: 0 },
      onClick: (ev) => ev.stopPropagation(),
      children: l.jsxs("div", {
        className: "max-w-2xl w-full",
        children: [
          l.jsx("div", {
            style: { fontSize: "120px", lineHeight: 1, marginBottom: "20px" },
            children: ":(",
          }),
          l.jsx("h1", {
            style: { fontSize: "32px", fontWeight: 600, marginBottom: "16px" },
            children: "出错啦！",
          }),
          l.jsx("p", {
            style: { fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", marginBottom: "12px" },
            children: "没事，别担心",
          }),
          l.jsx("p", {
            style: { fontSize: "14px", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: "8px" },
            children: `报错是这个：${e || "未知错误"}`,
          }),
          l.jsx("p", {
            style: { fontSize: "14px", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: "32px" },
            children: "你可以试着重启",
          }),
          l.jsx("button", {
            onClick: t,
            style: {
              padding: "12px 40px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "15px",
              cursor: "pointer",
            },
            children: "重启灵界 OS",
          }),
        ],
      }),
    }),
  Am = ({ mode: Fm = "restart" }) => {
    const [e, t] = N.useState("loading");
    const [o, d] = N.useState(0);
    const Rm = Fm === "factory-reset";
    return (
      N.useEffect(() => {
        if (e === "loading") {
          const n = setTimeout(() => t("blackout"), 2e3);
          return () => clearTimeout(n);
        }
        if (e === "blackout") {
          const n = setTimeout(() => t("boot"), 2.6e3);
          return () => clearTimeout(n);
        }
        if (e === "boot") {
          const n = setTimeout(() => t("logoprogress"), 4.5e3);
          return () => clearTimeout(n);
        }
        if (e === "logoprogress") {
          let i = 0;
          let reloadTimer = null;
          const a = setInterval(() => {
            ((i += Math.random() * 4 + 1.5),
              i >= 100
                ? ((i = 100),
                  d(100),
                  clearInterval(a),
                  (function() {
                    var _sndOn = false;
                    try { _sndOn = localStorage.getItem("lingjie-startup-sound") === "true"; } catch(e) {}
                    if (_sndOn) {
                      try { sessionStorage.setItem("lingjie-play-startup-sound", "1"); } catch(e) {}
                    }
                    reloadTimer = setTimeout(function() {
                      if (Rm) {
                        try { Object.keys(localStorage).forEach((k) => localStorage.removeItem(k)); } catch {}
                        try { indexedDB.deleteDatabase("lingjie-camera-photos"); } catch {}
                        try { indexedDB.deleteDatabase("LingjieRecordings"); } catch {}
                        sessionStorage.setItem("lingjie-restart-lock", "1");
                      } else {
                        sessionStorage.setItem("lingjie-restart-lock", "1");
                      }
                      window.location.reload();
                    }, 500);
                  })())
                : d(Math.floor(i)));
          }, 80);
          return () => { clearInterval(a); if (reloadTimer) clearTimeout(reloadTimer); };
        }
      }, [e]),
      l.jsx("div", {
        className: "fixed inset-0 z-[9999]",
        children:
          e === "loading"
            ? l.jsxs("div", {
                className:
                  "absolute inset-0 flex flex-col items-center justify-center animate-fade-in",
                style: {
                  background:
                    "linear-gradient(135deg, #FFD60A 0%, #FF9F0A 30%, #FF2D55 70%, #FF375F 100%)",
                },
                children: [
                  l.jsx("div", {
                    className: "rounded-full animate-spin mb-8",
                    style: { width: 32, height: 32, border: "4px solid rgba(255,255,255,0.3)", borderTopColor: "#fff" },
                  }),
                  l.jsx("p", {
                    className:
                      "text-white/90 text-base font-medium tracking-[0.3em]",
                    children: Rm ? "正在恢复出厂设置" : "正在关机中",
                  }),
                ],
              })
            : e === "blackout"
              ? l.jsx("div", { className: "absolute inset-0 bg-black" })
              : e === "boot"
                ? l.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    style: { background: "#000" },
                    children: l.jsxs("div", {
                      className: "flex flex-col items-center justify-center",
                      style: { width: "100%", height: "100%" },
                      children: [
                        l.jsx("h1", {
                          style: {
                            color: "#fff",
                            fontSize: "2rem",
                            fontWeight: 300,
                            letterSpacing: "0.12em",
                            fontFamily: "system-ui,-apple-system,sans-serif",
                            margin: 0,
                          },
                          children: "LingOS",
                        }),
                        l.jsx("p", {
                          style: {
                            color: "#fff",
                            fontSize: "0.7rem",
                            position: "absolute",
                            bottom: "24px",
                            margin: 0,
                            opacity: 0.6,
                          },
                          children: "Powered by React",
                        }),
                      ],
                    }),
                  })
                : l.jsxs("div", {
                  className:
                    "absolute inset-0 flex flex-col items-center justify-center",
                  style: {
                    background:
                      "linear-gradient(135deg, #FFD60A 0%, #FF9F0A 30%, #FF2D55 70%, #FF375F 100%)",
                  },
                  children: [
                    l.jsx("div", {
                      className: "relative mb-8 animate-restart-logo-in",
                      children: l.jsx("div", {
                        className:
                          "relative w-28 h-28 rounded-[1.75rem] bg-[#FF3B30] border border-white/20 flex items-center justify-center",
                        style: { boxShadow: "0 8px 32px rgba(255,59,48,0.45)" },
                        children: l.jsx("span", {
                          className: "text-5xl font-black text-white",
                          style: {
                            transform: "rotate(0.2014deg)",
                            textShadow: "0 2px 12px rgba(0,0,0,0.25)",
                          },
                          children: "L",
                        }),
                      }),
                    }),
                    l.jsxs("div", {
                      className: "flex flex-col items-center gap-3 animate-fade-in",
                      children: [
                        l.jsx("div", {
                          className: "w-48 h-1 bg-white/20 rounded-full overflow-hidden",
                          children: l.jsx("div", {
                            className: "h-full bg-white rounded-full transition-all duration-150",
                            style: { width: `${o}%` },
                          }),
                        }),
                        l.jsx("span", {
                          className: "text-white text-sm opacity-80",
                          children: o + "%",
                        }),
                      ],
                    }),
                  ],
                }),
      })
    );
  },
  Gm = () => {
    const e = N.useRef(null),
      [t, n] = N.useState("#FF3B30"),
      [r, s] = N.useState(4),
      [i, a] = N.useState(!1),
      [c, o] = N.useState(!1),
      [Dt, Rt] = N.useState(!1),
      [Ct, kt] = N.useState(!1),
      u = N.useRef(null),
      m = N.useRef(!1),
      g = N.useRef(null),
      col = N.useRef("#FF3B30"),
      wth = N.useRef(4),
      ers = N.useRef(!1);
    N.useEffect(() => {
      col.current = t;
    }, [t]),
      N.useEffect(() => {
        wth.current = r;
      }, [r]),
      N.useEffect(() => {
        ers.current = i;
      }, [i]);
    const ev = {
        start: (k) => {
          k.preventDefault();
          m.current = !0;
          const p = e.current.getBoundingClientRect();
          g.current = [
            (k.clientX - p.left) * (e.current.width / p.width),
            (k.clientY - p.top) * (e.current.height / p.height),
          ];
        },
        move: (k) => {
          if (!m.current || !u.current) return;
          k.preventDefault();
          window.__lingjie_paint_dirty = !0;
          const p = e.current.getBoundingClientRect();
          const z = u.current;
          z.beginPath();
          z.moveTo(g.current[0], g.current[1]);
          z.lineTo(
            (k.clientX - p.left) * (e.current.width / p.width),
            (k.clientY - p.top) * (e.current.height / p.height),
          );
          z.strokeStyle = ers.current ? "#ffffff" : col.current;
          z.lineWidth = wth.current;
          z.lineCap = "round";
          z.lineJoin = "round";
          z.stroke();
          g.current = [
            (k.clientX - p.left) * (e.current.width / p.width),
            (k.clientY - p.top) * (e.current.height / p.height),
          ];
        },
        end: () => {
          m.current = !1;
        },
      };
    N.useEffect(() => {
      const k = e.current;
      if (!k) return;
      const p = k.getContext("2d");
      p.fillStyle = "#ffffff";
      p.fillRect(0, 0, k.width, k.height);
      u.current = p;
    }, []);
    const D = () => {
        const k = e.current;
        if (!k) return;
        var _prevDrawn = window.__lingjie_paint_dirty;
        window.__lingjie_paint_dirty = !1;
        k.toBlob((p) => {
          if (!p) { window.__lingjie_paint_dirty = _prevDrawn; return; }
          const w = indexedDB.open("lingjie-camera-photos", 1);
          (w.onupgradeneeded = () => {
            const z = w.result;
            z.objectStoreNames.contains("photos") ||
              z.createObjectStore("photos", { keyPath: "id" });
          }),
            (w.onerror = () => { window.__lingjie_paint_dirty = _prevDrawn; console.error("Paint save: IndexedDB open failed"); }),
            (w.onsuccess = () => {
              const z = w.result,
                f = z.transaction("photos", "readwrite");
              f.objectStore("photos").put({
                id: "paint-" + Date.now() + "-" + Math.random().toString(16).slice(2),
                blob: p,
                type: "image/png",
                createdAt: Date.now(),
              });
              ((f.oncomplete = () => {
                (Rt(!0),
                  o(!0),
                  setTimeout(() => {
                    (Rt(!1), o(!1));
                  }, 2000),
                  z.close());
              }),
                (f.onerror = () => { window.__lingjie_paint_dirty = _prevDrawn; console.error("Paint save: transaction failed"); z.close(); }));
            });
        });
      };
    return l.jsxs("div", {
      className: "h-full flex flex-col bg-[#1a1a2e]",
      children: [
        l.jsxs("div", {
          className:
            "flex items-center gap-3 px-3 py-2 bg-black/30 border-b border-white/10 flex-wrap",
          children: [
            l.jsx("button", {
              onClick: () => kt(!0),
              className:
                "px-3 py-1.5 rounded-lg text-xs bg-white/10 text-white/70 hover:bg-white/20 border border-white/10 transition-all flex items-center gap-2",
              children: l.jsxs(l.Fragment, {
                children: [
                  l.jsx("span", {
                    className: "w-3.5 h-3.5 rounded-full border border-white/30",
                    style: { background: i ? "#ffffff" : t },
                  }),
                  "切换颜色",
                ],
              }),
            }),
            l.jsx("div", { className: "w-px h-6 bg-white/15" }),
            l.jsx("span", {
              className: "text-white/50 text-xs",
              children: "粗细",
            }),
            l.jsx("input", {
              type: "range",
              min: "1",
              max: "30",
              value: r,
              onChange: (k) => {
                const v = Number(k.target.value);
                s(v), (wth.current = v);
              },
              className: "w-24 accent-cyan-400",
            }),
            l.jsx("span", {
              className: "text-white/60 text-xs w-6",
              children: r,
            }),
            l.jsx("div", { className: "w-px h-6 bg-white/15" }),
            l.jsx("button", {
              onClick: () => {
                const v = !i;
                a(v), (ers.current = v);
              },
              className: `px-3 py-1.5 rounded-lg text-xs transition-all ${i ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40" : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/10"}`,
              children: "橡皮擦",
            }),
            l.jsx("button", {
              onClick: () => {
                const k = e.current;
                if (k) {
                  const p = k.getContext("2d");
                  p.fillStyle = "#ffffff";
                  p.fillRect(0, 0, k.width, k.height);
                  window.__lingjie_paint_dirty = !1;
                }
              },
              className:
                "px-3 py-1.5 rounded-lg text-xs bg-white/10 text-white/70 hover:bg-white/20 border border-white/10 transition-all",
              children: "清空",
            }),
            l.jsx("div", { className: "flex-1" }),
            l.jsx("button", {
              onClick: D,
              className:
                "px-4 py-1.5 rounded-lg text-xs bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/30 transition-all active:scale-95",
              children: "保存",
            }),
          ],
        }),
        l.jsx("div", {
          className: "flex-1 overflow-hidden flex items-center justify-center",
          children: l.jsx("canvas", {
            ref: e,
            width: 800,
            height: 600,
            className: "w-full h-full touch-none",
            style: { background: "#ffffff", cursor: "crosshair" },
            onPointerDown: ev.start,
            onPointerMove: ev.move,
            onPointerUp: ev.end,
            onPointerLeave: ev.end,
          }),
        }),
        Dt &&
          l.jsx("div", {
            className:
              "absolute inset-0 flex items-center justify-center pointer-events-none z-50",
            children: l.jsxs("div", {
              className:
                "bg-black/80 backdrop-blur-xl border border-white/15 rounded-2xl px-8 py-6 flex flex-col items-center gap-3 animate-scale-in",
              children: [
                l.jsx("div", {
                  className:
                    "w-12 h-12 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center",
                  children: l.jsx("svg", {
                    className: "w-6 h-6 text-green-400",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: l.jsx("path", { d: "M5 13l4 4L19 7" }),
                  }),
                }),
                l.jsx("p", {
                  className: "text-black text-lg font-medium",
                  children: "保存成功",
                }),
                l.jsx("p", {
                  className: "text-black/50 text-xs",
                  children: "图片已保存到相册",
                }),
              ],
            }),
          }),
        Ct &&
          l.jsx("div", {
            className:
              "absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50",
            onClick: () => kt(!1),
            children: l.jsxs("div", {
              className:
                "bg-white border border-white/15 rounded-2xl px-6 py-5 flex flex-col items-center gap-4 animate-scale-in shadow-2xl",
              onClick: (k) => k.stopPropagation(),
              children: [
                l.jsx("p", {
                  className: "text-black text-base font-medium",
                  children: "你想要什么颜色？",
                }),
                l.jsx("div", {
                  className: "grid grid-cols-4 gap-3",
                  children: [
                    { c: "#FF3B30", n: "红" },
                    { c: "#FFCC00", n: "黄" },
                    { c: "#007AFF", n: "蓝" },
                    { c: "#34C759", n: "绿" },
                    { c: "#00C7BE", n: "青" },
                    { c: "#5856D6", n: "蓝" },
                    { c: "#AF52DE", n: "紫" },
                    { c: "#FFFFFF", n: "白" },
                  ].map((k) =>
                    l.jsxs(
                      "button",
                      {
                        onClick: () => {
                          n(k.c),
                            a(!1),
                            (col.current = k.c),
                            (ers.current = !1),
                            kt(!1);
                        },
                        className: "flex flex-col items-center gap-1 transition-all active:scale-90",
                        children: [
                          l.jsx("div", {
                            className: `w-8 h-8 rounded-full border-2 ${t === k.c && !i ? "border-black scale-110" : "border-black/15"}`,
                            style: { background: k.c },
                          }),
                          l.jsx("span", {
                            className: "text-black/60 text-xs",
                            children: k.n,
                          }),
                        ],
                      },
                      k.c,
                    ),
                  ),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Hm = () => "",
  // 翻译应用
  tw = () => {
    const BANNED_WORDS = [
      "鸡巴", "傻逼", "傻b", "妈的", "操你妈", "草泥马", "婊子", "贱人", "狗日的", "王八蛋", "杂种", "畜生",
      "fuck", "shit", "bitch", "asshole", "dick", "cunt", "motherfucker", "pussy",
    ];
    const containsBannedWord = (text) => {
      const lower = (text || "").toLowerCase();
      return BANNED_WORDS.some((w) => lower.includes(w.toLowerCase()));
    };
    const [e, t] = N.useState(""),
      [n, r] = N.useState(""),
      [s, i] = N.useState(!1),
      [a, c] = N.useState(!1);
    const u = async (v) => {
      const S = v.trim();
      if (!S) { r(""); c(!1); return; }
      if (containsBannedWord(S)) {
        r("检测到不适宜词汇，已拒绝翻译");
        c(!1);
        return;
      }
      i(!0); c(!1); r("");
      const isChinese = /[\u4e00-\u9fff]/.test(S);
      const langpair = isChinese ? "zh|en" : "en|zh";
      try {
        const resp = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(S) + "&langpair=" + langpair);
        if (!resp.ok) throw new Error("翻译请求失败");
        const data = await resp.json();
        if (data && data.responseStatus === 200 && data.responseData && data.responseData.translatedText) {
          if (containsBannedWord(data.responseData.translatedText)) {
            r("翻译结果包含不适宜词汇，已屏蔽");
            c(!1);
          } else {
            r(data.responseData.translatedText);
            c(!0);
          }
        } else {
          r("翻译失败，请稍后重试");
          c(!1);
        }
      } catch (err) {
        r("翻译失败：" + (err instanceof Error ? err.message : "网络错误"));
        c(!1);
      } finally {
        i(!1);
      }
    };
    return l.jsxs("div", {
      className: "h-full flex flex-col bg-black/30",
      children: [
        l.jsx("div", {
          className: "px-5 py-3 border-b border-white/10 text-center",
          children: l.jsx("p", { className: "text-white/90 text-sm font-medium", children: "中英互译" }),
        }),
        l.jsx("div", {
          className: "px-5 pt-4 pb-2",
          children: l.jsx("p", { className: "text-yellow-300/70 text-xs text-center", children: "支持单词和句子翻译 · 由 MyMemory API 提供" }),
        }),
        l.jsxs("div", {
          className: "flex-1 flex flex-col items-center justify-center px-6 gap-6",
          children: [
            l.jsxs("div", {
              className: "w-full max-w-md flex flex-col gap-3",
              children: [
                l.jsxs("div", { className: "flex items-center gap-2", children: [
                  l.jsx("span", { className: "text-xs text-white/40 w-8 shrink-0", children: "输入" }),
                  l.jsx("input", {
                    type: "text",
                    value: e,
                    onChange: (v) => { t(v.target.value); },
                    onKeyPress: (v) => { if (v.key === "Enter") u(v.target.value); },
                    placeholder: "输入中文或英文...",
                    className: "flex-1 px-4 py-3 bg-black/40 backdrop-blur-xl border rounded-xl text-white text-center text-base outline-none transition-colors border-white/20 focus:border-white/50 placeholder-white/25",
                  }),
                ]}),
                l.jsx("button", {
                  onClick: () => u(e),
                  disabled: s,
                  className: "w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors text-sm font-medium disabled:opacity-50",
                  children: s ? "翻译中..." : "翻译",
                }),
              ],
            }),
            n && l.jsxs("div", {
              className: "w-full max-w-md p-5 rounded-2xl animate-fade-in-up",
              style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" },
              children: [
                l.jsx("p", { className: "text-white/40 text-xs mb-2", children: "翻译结果" }),
                l.jsx("p", {
                  className: `text-xl font-medium ${a ? "text-white" : "text-red-400"}`,
                  children: n,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  // 倒计时小组件
  qw = () => {
    const [e, t] = N.useState(60),
      [n, r] = N.useState(60),
      [s, i] = N.useState(!1);
    N.useEffect(() => {
      let a;
      if (s && n > 0) {
        a = setInterval(() => {
          r((c) => {
            if (c <= 1) { i(!1); return 0; }
            return c - 1;
          });
        }, 1e3);
      }
      return () => a && clearInterval(a);
    }, [s, n]);
    const a = (c) => { const u = Math.min(99999, Math.max(0, parseInt(c.target.value, 10) || 0)); t(u); r(u); };
    return l.jsxs("div", {
      className: "w-full h-full flex flex-col items-center justify-center gap-2 p-3",
      children: [
        l.jsx("p", { className: "text-2xl font-mono font-bold", children: String(Math.floor(n / 60)).padStart(2, "0") + ":" + String(n % 60).padStart(2, "0") }),
        l.jsxs("div", { className: "flex items-center gap-2", children: [
          l.jsx("input", { type: "number", min: 0, max: 99999, value: e, onChange: a, className: "w-16 text-center text-sm bg-black/5 rounded-lg px-2 py-1 outline-none" }),
          l.jsx("span", { className: "text-xs text-black/40", children: "秒" }),
        ]}),
        l.jsxs("div", { className: "flex items-center gap-2", children: [
          s
            ? l.jsx("button", { onClick: () => i(!1), className: "px-3 py-1 text-xs rounded-full bg-black/10 hover:bg-black/20 transition-all", children: "暂停" })
            : l.jsx("button", { onClick: () => { if (n > 0) i(!0); }, className: "px-3 py-1 text-xs rounded-full bg-black/10 hover:bg-black/20 transition-all", children: "开始" }),
          l.jsx("button", { onClick: () => { i(!1); r(e); }, className: "px-3 py-1 text-xs rounded-full bg-black/10 hover:bg-black/20 transition-all", children: "重置" }),
        ]}),
      ],
    });
  },
   // 一键锁屏小组件
  _ljQuickLockWidget = ({ onLock }) => {
    return l.jsxs("div", {
      className: "w-full h-full flex flex-col items-center justify-center gap-2 p-3",
      children: [
        l.jsx("button", {
          type: "button",
          onClick: (e) => {
            e.stopPropagation();
            if (typeof onLock === "function") onLock();
          },
          className: "w-full py-3 rounded-xl bg-black/10 hover:bg-black/20 active:scale-95 transition-all text-sm font-medium text-black/80",
          children: "立即锁屏",
        }),
        l.jsx("p", { className: "text-[10px] text-black/40 text-center", children: "点一下即可锁定空间" }),
      ],
    });
  },
  // 正计时小组件
  ew = () => {
    const [e, t] = N.useState(0),
      [n, r] = N.useState(!1);
    N.useEffect(() => {
      let s;
      if (n) {
        s = setInterval(() => t((i) => i + 1), 1e3);
      }
      return () => s && clearInterval(s);
    }, [n]);
    return l.jsxs("div", {
      className: "w-full h-full flex flex-col items-center justify-center gap-2 p-3",
      children: [
        l.jsx("p", { className: "text-2xl font-mono font-bold", children: String(Math.floor(e / 60)).padStart(2, "0") + ":" + String(e % 60).padStart(2, "0") }),
        l.jsxs("div", { className: "flex items-center gap-2", children: [
          n
            ? l.jsx("button", { onClick: () => r(!1), className: "px-3 py-1 text-xs rounded-full bg-black/10 hover:bg-black/20 transition-all", children: "暂停" })
            : l.jsx("button", { onClick: () => r(!0), className: "px-3 py-1 text-xs rounded-full bg-black/10 hover:bg-black/20 transition-all", children: "开始" }),
          l.jsx("button", { onClick: () => { r(!1); t(0); }, className: "px-3 py-1 text-xs rounded-full bg-black/10 hover:bg-black/20 transition-all", children: "重置" }),
        ]}),
      ],
    });
  },
  // 随机音乐小组件
  GesturePad = ({ onComplete, error }) => {
    const dotsRef = N.useRef([]);
    const [selected, setSelected] = N.useState([]);
    const [isDrawing, setIsDrawing] = N.useState(!1);
    const dotPositions = [
      [0, 0], [1, 0], [2, 0],
      [0, 1], [1, 1], [2, 1],
      [0, 2], [1, 2], [2, 2],
    ];
    const dotSize = 60;
    const gap = 30;
    const gridSize = dotSize * 3 + gap * 2;
    const getDotCenter = (idx) => {
      const [col, row] = dotPositions[idx];
      return [col * (dotSize + gap) + dotSize / 2, row * (dotSize + gap) + dotSize / 2];
    };
    const getDotAtPoint = (x, y) => {
      for (let i = 0; i < 9; i++) {
        const [cx, cy] = getDotCenter(i);
        const dx = x - cx, dy = y - cy;
        if (dx * dx + dy * dy < (dotSize / 2) * (dotSize / 2)) return i;
      }
      return -1;
    };
    N.useEffect(() => {
      if (error) {
        const t = setTimeout(() => { setSelected([]); }, 500);
        return () => clearTimeout(t);
      }
    }, [error]);
    const handleStart = (e) => {
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
      const dot = getDotAtPoint(x, y);
      if (dot >= 0) {
        setSelected([dot]);
        setIsDrawing(!0);
      }
    };
    const handleMove = (e) => {
      if (!isDrawing) return;
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
      const dot = getDotAtPoint(x, y);
      if (dot >= 0 && !selected.includes(dot)) {
        setSelected([...selected, dot]);
      }
    };
    const handleEnd = () => {
      if (!isDrawing) return;
      setIsDrawing(!1);
      if (selected.length > 0 && onComplete) {
        onComplete([...selected]);
        setSelected([]);
      }
    };
    return l.jsx("div", {
      style: { width: gridSize, height: gridSize, position: "relative", touchAction: "none", userSelect: "none" },
      onPointerDown: handleStart,
      onPointerMove: handleMove,
      onPointerUp: handleEnd,
      onPointerLeave: handleEnd,
      children: dotPositions.map((_, i) => {
        const [cx, cy] = getDotCenter(i);
        const isSelected = selected.includes(i);
        return l.jsx("div", {
          style: {
            position: "absolute",
            left: cx - dotSize / 2,
            top: cy - dotSize / 2,
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            background: isSelected ? (error ? "rgba(239,68,68,0.4)" : "rgba(59,130,246,0.5)") : "rgba(255,255,255,0.1)",
            border: isSelected ? (error ? "2px solid #ef4444" : "2px solid #3b82f6") : "2px solid rgba(255,255,255,0.2)",
            transition: "all 0.15s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          children: isSelected && l.jsx("div", {
            style: { width: dotSize / 3, height: dotSize / 3, borderRadius: "50%", background: error ? "#ef4444" : "#3b82f6" },
          }),
        }, i);
      }),
    });
  },
  FpsDisplay = () => {
    const [fps, setFps] = N.useState(60);
    N.useEffect(() => {
      let frameCount = 0;
      let lastTime = performance.now();
      let rafId;
      const tick = () => {
        frameCount++;
        const now = performance.now();
        if (now - lastTime >= 1000) {
          setFps(frameCount);
          frameCount = 0;
          lastTime = now;
        }
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafId);
    }, []);
    const color = fps < 10 ? "#ef4444" : fps < 30 ? "#fbbf24" : "#22c55e";
    return l.jsx("div", {
      style: {
        position: "fixed",
        top: "64px",
        right: "16px",
        zIndex: 9999,
        padding: "4px 12px",
        borderRadius: "12px",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.15)",
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: "monospace, system-ui",
        color: color,
        pointerEvents: "none",
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "0.5px",
      },
      children: fps + " FPS",
    });
  },

  rw = () => {
    const { volume: ow } = hm(),
      [e, t] = N.useState([]),
      [n, r] = N.useState(null),
      [s, i] = N.useState(!1),
      [loadErr, setLoadErr] = N.useState(!1),
      a = N.useRef(null),
      endedHandlerRef = N.useRef(null);
    N.useEffect(() => {
      let mounted = !0;
      setLoadErr(!1);
      fetch("https://itunes.apple.com/search?term=top+hits+2026&limit=25&media=music&country=US")
        .then((c) => c.json())
        .then((c) => {
          if (!mounted) return;
          const u = (c.results || []).filter((m) => m.previewUrl).map((m, g) => ({
            id: m.trackId || g,
            title: m.trackName || "未知",
            artist: m.artistName || "未知",
            previewUrl: m.previewUrl,
          }));
          t(u);
        }).catch(() => { if (mounted) setLoadErr(!0); });
      return () => { mounted = !1; if (a.current) { a.current.pause(); a.current = null; } };
    }, []);
    const c = () => {
      if (!e.length) return;
      const u = e[Math.floor(Math.random() * e.length)];
      if (!u || !u.previewUrl) return;
      if (a.current) {
        a.current.pause();
        if (endedHandlerRef.current) { a.current.removeEventListener("ended", endedHandlerRef.current); endedHandlerRef.current = null; }
      }
      const m = new Audio(u.previewUrl);
      m.volume = (ow * 0.5) / 100;
      const onEnded = () => i(!1);
      endedHandlerRef.current = onEnded;
      m.addEventListener("ended", onEnded);
      a.current = m;
      m.play().then(() => { r(u); i(!0); }).catch(() => {});
    };
    N.useEffect(() => {
      if (a.current) {
        a.current.volume = (ow * 0.5) / 100;
      }
    }, [ow]);
    const u = () => { if (a.current) { a.current.pause(); if (endedHandlerRef.current) { a.current.removeEventListener("ended", endedHandlerRef.current); endedHandlerRef.current = null; } a.current = null; } i(!1); r(null); };
    return l.jsxs("div", {
      className: "w-full h-full flex flex-col items-center justify-center gap-2 p-3",
      children: [
        l.jsx(wa, { className: "w-6 h-6 text-black" }),
        n
          ? l.jsxs("div", { className: "text-center", children: [
            l.jsx("p", { className: "text-xs font-medium truncate max-w-full", children: n.title }),
            l.jsx("p", { className: "text-[10px] text-black/50", children: n.artist }),
          ]})
          : l.jsx("p", { className: "text-xs text-black/50", children: loadErr ? "加载失败" : e.length ? "点击随机播放" : "加载中..." }),
        s
          ? l.jsx("button", { onClick: u, className: "px-3 py-1 text-xs rounded-full bg-black/10 hover:bg-black/20 transition-all", children: "停止" })
          : l.jsx("button", { onClick: c, className: "px-3 py-1 text-xs rounded-full bg-black/10 hover:bg-black/20 transition-all", children: "随机播放" }),
      ],
    });
  },
  _ljlInstallDB = (function () {
    let _db = null;
    function _open() {
      if (_db) return Promise.resolve(_db);
      return new Promise(function (resolve, reject) {
        try {
          const req = indexedDB.open("lingjie-installed-apps", 1);
          req.onupgradeneeded = function () {
            const db = req.result;
            if (!db.objectStoreNames.contains("apps")) db.createObjectStore("apps", { keyPath: "id" });
          };
          req.onsuccess = function () { _db = req.result; resolve(_db); };
          req.onerror = function () { reject(req.error || new Error("IndexedDB 打开失败")); };
        } catch (err) { reject(err); }
      });
    }
    return {
      getAll: function () {
        return _open().then(function (db) {
          return new Promise(function (resolve, reject) {
            const t = db.transaction("apps", "readonly");
            const req = t.objectStore("apps").getAll();
            req.onsuccess = function () { resolve(req.result || []); };
            req.onerror = function () { reject(req.error); };
          });
        });
      },
      put: function (app) {
        return _open().then(function (db) {
          return new Promise(function (resolve, reject) {
            const t = db.transaction("apps", "readwrite");
            t.objectStore("apps").put(app);
            t.oncomplete = function () { resolve(); };
            t.onerror = function () { reject(t.error); };
          });
        });
      },
      remove: function (id) {
        return _open().then(function (db) {
          return new Promise(function (resolve, reject) {
            const t = db.transaction("apps", "readwrite");
            t.objectStore("apps").delete(id);
            t.oncomplete = function () { resolve(); };
            t.onerror = function () { reject(t.error); };
          });
        });
      },
    };
  })(),
  _ljlNotifyInstalled = function () {
    try { window.dispatchEvent(new Event("lingjie-installed-apps-changed")); } catch (e) {}
  },
  _ljlUninstall = function (id) {
    _ljlInstallDB.remove(id).then(function () {
      try { window.dispatchEvent(new CustomEvent("lingjie-close-app-window", { detail: { id: id } })); } catch (e) {}
      _ljlNotifyInstalled();
    }).catch(function () { _ljlNotifyInstalled(); });
  },
  _ljlBuildHtml = function (app) {
    const css = app.css ? "<style>" + app.css + "</style>" : "";
    const js = app.js ? "<script>" + app.js.replace(/<\/script>/gi, "<\\/script>") + "<\/script>" : "";
    return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;width:100%;height:100%}</style>' + css + "</head><body>" + (app.html || "") + js + "</body></html>";
  },
  _InstalledAppFrame = ({ app }) => {
    return l.jsx("iframe", {
      srcDoc: _ljlBuildHtml(app),
      title: app.name,
      className: "w-full h-full",
      style: { width: "100%", height: "100%", border: "none", background: "#fff", display: "block" },
      sandbox: "allow-scripts",
    });
  },
  _ljlIconDataUrl = function (b64) {
    let mime = "image/png";
    try {
      const bin = atob(b64);
      const b0 = bin.charCodeAt(0),
        b1 = bin.charCodeAt(1),
        b2 = bin.charCodeAt(2),
        b3 = bin.charCodeAt(3);
      if (b0 === 0x89 && b1 === 0x50 && b2 === 0x4e && b3 === 0x47) mime = "image/png";
      else if (b0 === 0xff && b1 === 0xd8) mime = "image/jpeg";
      else if (bin.slice(0, 6) === "GIF89a" || bin.slice(0, 6) === "GIF87a") mime = "image/gif";
      else if (bin.slice(0, 4) === "RIFF" && bin.slice(8, 12) === "WEBP") mime = "image/webp";
      else if (/^\s*<svg/i.test(bin)) mime = "image/svg+xml";
    } catch (e) {}
    return "data:" + mime + ";base64," + b64;
  },
  _ljlResizeIcon = function (blob, maxSize) {
    const max = maxSize || 128;
    return new Promise(function (resolve) {
      let objectUrl = null;
      try { objectUrl = URL.createObjectURL(blob); } catch (e) { resolve(null); return; }
      const img = new Image();
      const cleanup = function () { if (objectUrl) { try { URL.revokeObjectURL(objectUrl); } catch (e) {} } };
      img.onload = function () {
        try {
          let w = img.naturalWidth || 0,
            h = img.naturalHeight || 0;
          if (!w || !h) { w = 128; h = 128; }
          const scale = Math.min(1, max / Math.max(w, h));
          w = Math.max(1, Math.round(w * scale));
          h = Math.max(1, Math.round(h * scale));
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (!ctx) { cleanup(); resolve(null); return; }
          ctx.drawImage(img, 0, 0, w, h);
          cleanup();
          resolve(canvas.toDataURL("image/png"));
        } catch (e) { cleanup(); resolve(null); }
      };
      img.onerror = function () { cleanup(); resolve(null); };
      img.src = objectUrl;
    });
  },
  _ljlDefaultIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect width='128' height='128' rx='24' fill='%233b82f6'/%3E%3Ctext x='64' y='82' font-size='52' text-anchor='middle' fill='white' font-family='sans-serif'%3EApp%3C/text%3E%3C/svg%3E",
  _ljlBuildAppItem = function (app) {
    return {
      id: "ljl-" + app.id,
      title: app.name,
      icon: l.jsx("img", { src: app.iconUrl, alt: app.name, className: "w-8 h-8 object-cover rounded-lg" }),
      component: l.jsx(_InstalledAppFrame, { app: app }),
      minWidth: 400,
      minHeight: 320,
      defaultWidth: 800,
      defaultHeight: 600,
    };
  },
  _useInstalledApps = function () {
    const [apps, setApps] = N.useState(null);
    N.useEffect(function () {
      let cancelled = false;
      const refresh = function () {
        _ljlInstallDB.getAll().then(function (list) { if (!cancelled) setApps(list || []); }).catch(function () { if (!cancelled) setApps([]); });
      };
      refresh();
      window.addEventListener("lingjie-installed-apps-changed", refresh);
      return function () { cancelled = true; window.removeEventListener("lingjie-installed-apps-changed", refresh); };
    }, []);
    return apps;
  },
  _InstallerApp = () => {
    const [phase, setPhase] = N.useState("idle"),
      [error, setError] = N.useState(""),
      [appName, setAppName] = N.useState(""),
      [iconUrl, setIconUrl] = N.useState(""),
      fileRef = N.useRef(null);
    const readFile = function (file) {
      if (!file) return;
      if (!window.JSZip) { setError("解压库未加载，请刷新页面重试"); return; }
      setError("");
      setPhase("unzip");
      const reader = new FileReader();
      reader.onload = async function (ev) {
        try {
          const zip = await window.JSZip.loadAsync(ev.target.result);
          const nameEntry = zip.file("1.txt");
          let iconEntry = zip.file("icon.png");
          if (!iconEntry) {
            const iconMatches = zip.file(/^icon\.(png|jpe?g|gif|webp|bmp|svg|ico)$/i);
            if (iconMatches && iconMatches.length) iconEntry = iconMatches[0];
          }
          const htmlEntry = zip.file("index.html");
          if (!nameEntry) throw new Error("应用名称无效");
          const name = (await nameEntry.async("string") || "").trim();
          if (!name || name.length > 6) throw new Error("应用名称无效");
          if (!iconEntry || !htmlEntry) throw new Error("应用包不完整（需包含应用图标和 index.html）");
          setAppName(name);
          setPhase("install");
          const iconBlob = await iconEntry.async("blob");
          const iconData = (await _ljlResizeIcon(iconBlob)) || _ljlDefaultIcon;
          const html = await htmlEntry.async("string");
          const jsEntry = zip.file("index.js");
          const cssEntry = zip.file("index.css");
          const js = jsEntry ? await jsEntry.async("string") : "";
          const css = cssEntry ? await cssEntry.async("string") : "";
          setIconUrl(iconData);
          const app = {
            id: "ljlapp_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
            name: name,
            iconUrl: iconData,
            html: html,
            js: js,
            css: css,
            installedAt: Date.now(),
          };
          await _ljlInstallDB.put(app);
          _ljlNotifyInstalled();
          setPhase("success");
        } catch (err) {
          setError(err && err.message ? err.message : "安装失败");
          setPhase("idle");
        }
      };
      reader.onerror = function () { setError("读取文件失败"); setPhase("idle"); };
      reader.readAsArrayBuffer(file);
    };
    return l.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-5 p-6 bg-gray-900/95 overflow-auto", children: [
      l.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 flex items-center justify-center", children: l.jsx("svg", { className: "w-8 h-8 text-white", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [l.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), l.jsx("polyline", { points: "7 10 12 15 17 10" }), l.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })] }) }),
      l.jsx("h2", { className: "text-xl font-semibold text-white", children: "应用安装器" }),
      l.jsx("p", { className: "text-sm text-white/60 text-center max-w-xs", children: "选择 .ljl 应用包进行安装。应用包内包含应用名称（1.txt）、应用图标（支持 PNG/JPG/GIF/WebP/BMP/SVG 等常见图片格式，安装时自动转换为 PNG）以及代码（index.html / index.js / index.css）。请只安装你信任的来源；第三方应用内容由其提供者负责。" }),
      l.jsx("input", { ref: fileRef, type: "file", accept: ".ljl,application/zip,application/octet-stream", className: "hidden", onChange: function (ev) { readFile(ev.target.files && ev.target.files[0]); } }),
      phase === "success"
        ? l.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
            iconUrl ? l.jsx("img", { src: iconUrl, alt: appName, className: "w-16 h-16 rounded-2xl object-cover border border-white/20" }) : null,
            l.jsx("p", { className: "text-white font-medium", children: "\"" + appName + "\" 安装成功" }),
            l.jsx("p", { className: "text-xs text-white/50", children: "已添加到空间应用层和应用星云" }),
            l.jsx("button", { onClick: function () { setPhase("idle"); setAppName(""); setIconUrl(""); if (fileRef.current) fileRef.current.value = ""; }, className: "mt-1 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm transition-all", children: "继续安装" }),
          ]})
        : l.jsx("button", { onClick: function () { if (fileRef.current) fileRef.current.click(); }, className: "px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-medium shadow-lg shadow-blue-500/25 transition-all", children: "选择文件" }),
        phase === "idle" && l.jsxs("div", {
  className: "mt-4 p-4 bg-white/5 border border-white/10 rounded-xl max-w-md w-full",
  children: [
    l.jsxs("div", {
      className: "flex items-center gap-2 text-white/80 text-sm font-medium mb-2",
      children: [
        l.jsx("span", { className: "text-lg", children: "📦" }),
        l.jsx("span", { children: "如何制作 .ljl 应用包？" }),
      ],
    }),
    l.jsx("div", {
      className: "text-xs text-white/50 space-y-1.5 leading-relaxed",
      children: [
        l.jsx("p", { children: "① 新建文件夹，放入以下文件：" }),
        l.jsx("p", { className: "font-mono text-white/40 pl-4", children: "1.txt（应用名称，纯文本，直接在这个 txt 里面写名称 比如:计算器）" }),
        l.jsx("p", { className: "font-mono text-white/40 pl-4", children: "icon.png（应用图标，支持 PNG/JPG/GIF/WebP/BMP/SVG 等常见图片格式，安装时自动转换为 PNG）" }),
        l.jsx("p", { className: "font-mono text-white/40 pl-4", children: "index.html（应用页面，必需）" }),
        l.jsx("p", { className: "font-mono text-white/40 pl-4", children: "index.js（可选，脚本）" }),
        l.jsx("p", { className: "font-mono text-white/40 pl-4", children: "index.css（可选，样式）" }),
        l.jsx("p", { className: "mt-2", children: "② 全部选中 → 压缩为 ZIP → 改后缀为 .ljl" }),
        l.jsx("p", { className: "text-white/30 mt-1", children: "💡 可以用文本编辑器写代码，用画图工具做图标" }),
      ],
    }),
  ],
}),
      phase === "unzip" && l.jsx("p", { className: "text-sm text-white/70", children: "正在解压应用包..." }),
      phase === "install" && l.jsx("p", { className: "text-sm text-white/70", children: "正在安装..." }),
      error && l.jsx("p", { className: "text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2", children: error }),
    ] });
  },
  Um = function () {
  const _ljBsodOnLoad = (function() { try { return !!(sessionStorage.getItem("lingjie-bsod") || sessionStorage.getItem("lingjie-bsod-easter-egg")); } catch(e) { return !1; } })();
  const _hasRestartAnim = (function() { try { return !!sessionStorage.getItem("lingjie-restart-anim"); } catch(e) { return !1; } })();
  const [e, t] = N.useState([]),
    [n, r] = N.useState(100),
    [timeOffset, setTimeOffset] = N.useState(() => { try { const v = localStorage.getItem("lingjie-time-offset"); return v ? parseInt(v, 10) : 0; } catch(e) { return 0; } }),
    timeOffsetRef = N.useRef((() => { try { const v = localStorage.getItem("lingjie-time-offset"); return v ? parseInt(v, 10) : 0; } catch(e) { return 0; } })()),
    wallpaperBlobUrlRef = N.useRef(null),
    [s, i] = N.useState(new Date()),
    [a, c] = N.useState(!1),
    [u, m] = N.useState(!1),
    [g, y] = N.useState(() => {
      const hasRestartAnim = (() => { try { return sessionStorage.getItem("lingjie-restart-anim"); } catch(e) { return null; } })();
      return !_ljBsodOnLoad && !hasRestartAnim;
    }),
    [unlocking, setUnlocking] = N.useState(!1),
    [unlockPhase, setUnlockPhase] = N.useState(!1),
    [slideX, setSlideX] = N.useState(0),
    [h, k] = N.useState(""),
    [p, w] = N.useState(() => {
      const shouldRestart = (() => { try { return sessionStorage.getItem("lingjie-restart-anim"); } catch(e) { return null; } })();
      if (shouldRestart) {
        try { sessionStorage.removeItem("lingjie-restart-anim"); } catch {}
        return "restart";
      }
      return null;
    }),
    [z, f] = N.useState("closing"),
    [o, d] = N.useState(0),
    [x, C] = N.useState(!1),
    [searchClosing, setSearchClosing] = N.useState(!1),
    [v, S] = N.useState(""),
    [_, T] = N.useState(!1),
    [D, P] = N.useState(() => {
        const rw = (function() { try { return localStorage.getItem("lingjie-random-wallpaper") === "true"; } catch(e) { return !1; } })();
        if (rw) {
          const ids = ["aurora","ocean","sunset","forest","galaxy","cherry","mountain","lavender","midnight","tropical"];
          const saved = (function() { try { return localStorage.getItem("lingjie-wallpaper"); } catch(e) { return null; } })();
          if (!saved || ids.indexOf(saved) !== -1) {
            const pick = ids[Math.floor(Math.random() * ids.length)];
            try { localStorage.setItem("lingjie-wallpaper", pick); } catch(e) {}
            return pick;
          }
          return saved;
        }
        return (function() { try { return localStorage.getItem("lingjie-wallpaper"); } catch(e) { return null; } })() || "mountain";
      }),
    [rwState, setRwState] = N.useState(() => { try { return localStorage.getItem("lingjie-random-wallpaper") === "true"; } catch(e) { return !1; } }),
    [U, M] = N.useState(() => { try { return localStorage.getItem("lingjie-accent-color") || "blue"; } catch(e) { return "blue"; } }),
    [R, Q] = N.useState(() => { try { const v = localStorage.getItem("lingjie-volume"); return v !== null ? parseInt(v, 10) : 75; } catch(e) { return 75; } }),
    [le, Ze] = N.useState(() => { try { const v = localStorage.getItem("lingjie-brightness"); return v !== null ? parseInt(v, 10) : 100; } catch(e) { return 100; } }),
    [Yo, Zo] = N.useState(() => { try { return localStorage.getItem("lingjie-window-render-opt") === "true"; } catch(e) { return !1; } }),
    [startupSound, setStartupSound] = N.useState(() => { try { return localStorage.getItem("lingjie-startup-sound") === "true"; } catch(e) { return !1; } }),
    [lockQuote, setLockQuote] = N.useState(() => { try { return localStorage.getItem("lingjie-lock-quote") === "true"; } catch(e) { return !1; } }),
    [fpsMonitor, setFpsMonitor] = N.useState(() => { try { return localStorage.getItem("lingjie-fps-monitor") === "true"; } catch(e) { return !1; } }),
    [secMode, setSecMode] = N.useState(() => { try { return localStorage.getItem("lingjie-sec-mode") || (localStorage.getItem("lingjie-lock-password") ? "password" : "none"); } catch(e) { return "none"; } }),
    [gesturePwd, setGesturePwd] = N.useState(() => { try { return localStorage.getItem("lingjie-gesture-lock") || ""; } catch(e) { return ""; } }),
    [gestureSetup, setGestureSetup] = N.useState(!1),
    [gestureSteps, setGestureSteps] = N.useState([]),
    [gestureConfirmSteps, setGestureConfirmSteps] = N.useState([]),
    [gestureSetupPhase, setGestureSetupPhase] = N.useState("draw"),
    [gestureError, setGestureError] = N.useState(""),
    [me, Me] = N.useState(!1),
    [ge, Ye] = N.useState(() => { try { return localStorage.getItem("lingjie-lock-password") || ""; } catch(e) { return ""; } }),
    [username, setUsername] = N.useState(() => { try { return localStorage.getItem("lingjie-username") || "灵者"; } catch(e) { return "灵者"; } }),
    [ae, be] = N.useState(!1),
    [Fe, $e] = N.useState("step1-old"),
    [zt, Ut] = N.useState(!1),
    [ztClosing, setZtClosing] = N.useState(!1),
    [Ie, ot] = N.useState(""),
    [Je, vt] = N.useState(""),
    [bt, $t] = N.useState(!1),
    [kt, Wt] = N.useState(""),
    [lockKb, setLockKb] = N.useState(!1),
    [panelKb, setPanelKb] = N.useState(!1),
    [paintCloseConfirm, setPaintCloseConfirm] = N.useState(!1);
    const activeZRef = N.useRef(100);
    const [installedApps, setInstalledApps] = N.useState([]);
    N.useEffect(() => {
      let cancelled = false;
      const refresh = () => {
        _ljlInstallDB.getAll().then((list) => { if (!cancelled) setInstalledApps(list || []); }).catch(() => {});
      };
      refresh();
      window.addEventListener("lingjie-installed-apps-changed", refresh);
      return () => { cancelled = true; window.removeEventListener("lingjie-installed-apps-changed", refresh); };
    }, []);
    const [winLimitDismissed, setWinLimitDismissed] = N.useState(!1);
    N.useEffect(() => {
      const onCloseWindow = (ev) => {
        const id = ev.detail && ev.detail.id;
        if (!id) return;
        const winId = "ljl-" + id;
        t((Ws) => {
          if (!Ws.some((w) => w.id === winId)) return Ws;
          if (Ws.length <= 1) return [];
          const idx = Ws.findIndex((w) => w.id === winId);
          const next = Ws.filter((w) => w.id !== winId);
          const newActive = next[Math.min(idx, next.length - 1)];
          newActive.isMinimized = !1;
          activeZRef.current += 1;
          newActive.zIndex = activeZRef.current;
          return next;
        });
      };
      window.addEventListener("lingjie-close-app-window", onCloseWindow);
      return () => window.removeEventListener("lingjie-close-app-window", onCloseWindow);
    }, [t]);
    const [winLimitClosing, setWinLimitClosing] = N.useState(!1);
    const [timePanel, setTimePanel] = N.useState(!1);
    const [timeCalibrated, setTimeCalibrated] = N.useState(!1);
    const [powerPanel2Closing, setPowerPanel2Closing] = N.useState(!1);
    const [timePanelClosing, setTimePanelClosing] = N.useState(!1);
    const [widgetMenuClosing, setWidgetMenuClosing] = N.useState(!1);
    const [timerMenu, setTimerMenu] = N.useState(!1);
    const [timerMenuClosing, setTimerMenuClosing] = N.useState(!1);
    const [timerInput, setTimerInput] = N.useState("");
    const [timerAction, setTimerAction] = N.useState(null);
    const [timerCountdown, setTimerCountdown] = N.useState(0);
    const timerRef = N.useRef(null);
    const timerActionRef = N.useRef(null);
    const [lockFailCount, setLockFailCount] = N.useState(() => { try { return parseInt(localStorage.getItem("lingjie-lock-fail-count") || "0", 10) || 0; } catch(e) { return 0; } });
    const [lockoutUntil, setLockoutUntil] = N.useState(() => {
      try {
        const v = parseInt(localStorage.getItem("lingjie-lockout-until") || "0", 10);
        if (v > Date.now()) return v;
        if (v > 0) { localStorage.removeItem("lingjie-lockout-until"); localStorage.removeItem("lingjie-lock-fail-count"); }
        return 0;
      } catch(e) { return 0; }
    });
    const [lockoutCount, setLockoutCount] = N.useState(() => { try { return parseInt(localStorage.getItem("lingjie-lockout-count") || "0", 10) || 0; } catch(e) { return 0; } });
    const [lockCountdown, setLockCountdown] = N.useState(() => {
      try {
        const v = parseInt(localStorage.getItem("lingjie-lockout-until") || "0", 10);
        if (v > Date.now()) return Math.ceil((v - Date.now()) / 1000);
        return 0;
      } catch(e) { return 0; }
    });
    const [quoteIdx, setQuoteIdx] = N.useState(() => Math.floor(Math.random() * 15));
    N.useEffect(() => { if (g) setQuoteIdx(Math.floor(Math.random() * 15)); }, [g]);
    const [Eo, setEo] = N.useState(() => { try { return localStorage.getItem('lingjie-refresh-rate') || 'default'; } catch(e) { return 'default'; } });
    const [bsod, setBsod] = N.useState(() => {
        try {
          const e = sessionStorage.getItem("lingjie-bsod") || sessionStorage.getItem("lingjie-bsod-easter-egg");
          try { sessionStorage.removeItem("lingjie-bsod-easter-egg"); } catch {}
          return e ? e : null;
        } catch(e) { return null; }
      }),
    [Qt, Yt] = N.useState(!1),
    [qt, Zt] = N.useState(() => {
      try {
        const b = localStorage.getItem("lingjie-widgets");
        return b ? JSON.parse(b) : [];
      } catch(e) { return []; }
    });
  (N.useEffect(() => {
    const b = setInterval(() => i(new Date(Date.now() + timeOffsetRef.current)), 1e3);
    return () => clearInterval(b);
  }, []),
  N.useEffect(() => {
    if (timerCountdown > 0) {
      timerRef.current = setInterval(() => {
        setTimerCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            const action = timerActionRef.current;
            timerActionRef.current = null;
            setTimerAction(null);
            setTimerCountdown(0);
            if (action === "restart") {
              y(!1); w("restart"); f("closing"); d(0);
            } else if (action === "shutdown") {
              y(!1); w("shutdown");
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1e3);
      return () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };
    }
  }, [timerCountdown]),
  N.useEffect(() => {
    let mounted = !0;
    const autoCalibrate = () => {
      const fetchWithTimeout = (url, options, ms) => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), ms);
        return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timer));
      };
      const tryApis = [
        {
          fetch: () => {
            const t0 = Date.now();
            return fetchWithTimeout("https://cloudflare.com/cdn-cgi/trace", {}, 5000)
              .then((r) => r.text())
              .then((text) => {
                const t1 = Date.now();
                const m = text.match(/ts=([\d.]+)/);
                if (!m) throw new Error("invalid");
                const serverTime = new Date(parseFloat(m[1]) * 1000);
                if (isNaN(serverTime.getTime())) throw new Error("invalid");
                const rtt = t1 - t0;
                const localTime = t0 + rtt / 2;
                return { serverTime, localTime };
              });
          },
        },
        {
          fetch: () => {
            const t0 = Date.now();
            return fetchWithTimeout("https://cdn.jsdelivr.net/npm/react/package.json", { method: "HEAD" }, 5000)
              .then((response) => {
                const t1 = Date.now();
                const dateHeader = response.headers.get("Date");
                if (!dateHeader) throw new Error("no date header");
                const serverTime = new Date(dateHeader);
                if (isNaN(serverTime.getTime())) throw new Error("invalid");
                const rtt = t1 - t0;
                const localTime = t0 + rtt / 2;
                return { serverTime, localTime };
              });
          },
        },
        {
          fetch: () => {
            const t0 = Date.now();
            return fetchWithTimeout("https://worldtimeapi.org/api/timezone/Asia/Shanghai", {}, 5000)
              .then((r) => r.json())
              .then((data) => {
                const t1 = Date.now();
                const serverTime = data.utc_datetime ? new Date(data.utc_datetime) : null;
                if (!serverTime || isNaN(serverTime.getTime())) throw new Error("invalid");
                const rtt = t1 - t0;
                const localTime = t0 + rtt / 2;
                return { serverTime, localTime };
              });
          },
        },
      ];
      let idx = 0;
      const tryNext = () => {
        if (!mounted) return;
        if (idx >= tryApis.length) return;
        tryApis[idx]
          .fetch()
          .then(({ serverTime, localTime }) => {
            if (!mounted) return;
            const diff = Math.abs(serverTime.getTime() - localTime);
            let offset;
            if (diff <= 10000) {
              offset = 0;
            } else {
              offset = serverTime.getTime() - localTime;
            }
            timeOffsetRef.current = offset;
            setTimeOffset(offset);
            i(new Date(Date.now() + offset));
            try {
              localStorage.setItem("lingjie-time-offset", String(offset));
              localStorage.setItem("lingjie-time-source", "auto");
              localStorage.setItem("lingjie-time-calibrated-at", String(Date.now()));
            } catch (e) {}
          })
          .catch(() => { idx++; tryNext(); });
      };
      tryNext();
    };
    autoCalibrate();
    return () => { mounted = !1; };
  }, []),
  N.useEffect(() => {
    if (lockoutUntil === 0) return;
    const updateCountdown = () => {
      const remaining = Math.ceil((lockoutUntil - Date.now()) / 1000);
      if (remaining <= 0) {
        setLockCountdown(0);
        setLockoutUntil(0);
        setLockFailCount(0);
        Wt("");
        try {
          localStorage.removeItem("lingjie-lockout-until");
          localStorage.removeItem("lingjie-lock-fail-count");
        } catch(e) {}
      } else {
        setLockCountdown(remaining);
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [lockoutUntil]),
  N.useEffect(() => {
    // 真正的 24Hz 帧率锁定：节流 requestAnimationFrame
    const TARGET_FPS = 24;
    const FRAME_INTERVAL = 1000 / TARGET_FPS; // ~41.67ms
    let lastFrameTime = 0;
    let realRAF = window.requestAnimationFrame;
    let realCAF = window.cancelAnimationFrame;
    let pendingIds = new Map(); // wrappedId -> {realId, callback, scheduled}

    function throttledRAF(callback) {
      const id = Symbol();
      function schedule() {
        const now = performance.now();
        const elapsed = now - lastFrameTime;
        const delay = Math.max(0, FRAME_INTERVAL - elapsed);
        const timerId = setTimeout(() => {
          lastFrameTime = performance.now();
          pendingIds.delete(id);
          try { callback(lastFrameTime); } catch(e) {}
        }, delay);
        pendingIds.set(id, { timerId, callback });
      }
      schedule();
      return id;
    }

    function throttledCAF(id) {
      const entry = pendingIds.get(id);
      if (entry) {
        clearTimeout(entry.timerId);
        pendingIds.delete(id);
      }
    }

    let styleEl = document.getElementById('lingjie-refresh-rate-style');
    if (Eo === '24hz') {
      // 保存原始 RAF，替换为节流版本
      window.__lingjieOriginalRAF = realRAF;
      window.__lingjieOriginalCAF = realCAF;
      window.requestAnimationFrame = throttledRAF;
      window.cancelAnimationFrame = throttledCAF;
      // 同时注入 CSS 禁用原生动画/过渡，防止它们绕过 RAF 节流
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'lingjie-refresh-rate-style';
        styleEl.textContent = '*,*::before,*::after{animation:none!important;transition-duration:0.04s!important}';
        document.head.appendChild(styleEl);
      }
    } else {
      // 恢复原始 RAF（先恢复 CAF，防止外部代码持有 Symbol ID 时崩溃）
      if (window.__lingjieOriginalRAF) {
        var _origCAF = window.__lingjieOriginalCAF;
        // 包装 CAF：如果收到 Symbol（24Hz 时期遗留的 ID），静默忽略
        window.cancelAnimationFrame = function(id) {
          if (typeof id === 'number') { try { _origCAF.call(window, id); } catch(e) {} }
        };
        window.requestAnimationFrame = window.__lingjieOriginalRAF;
        delete window.__lingjieOriginalRAF;
        delete window.__lingjieOriginalCAF;
      }
      if (styleEl) styleEl.remove();
    }
    return () => {
      // 清理：恢复原始 RAF，移除样式
      if (window.__lingjieOriginalRAF) {
        var _origCAF2 = window.__lingjieOriginalCAF;
        window.cancelAnimationFrame = function(id) {
          if (typeof id === 'number') { try { _origCAF2.call(window, id); } catch(e) {} }
        };
        window.requestAnimationFrame = window.__lingjieOriginalRAF;
        delete window.__lingjieOriginalRAF;
        delete window.__lingjieOriginalCAF;
      }
      pendingIds.forEach((entry) => clearTimeout(entry.timerId));
      pendingIds.clear();
      const el = document.getElementById('lingjie-refresh-rate-style');
      if (el) el.remove();
    };
  }, [Eo]),
  N.useEffect(() => {
    // 监听刷新率变化（设置页面修改时同步）
    const handler = () => {
      try {
        const v = localStorage.getItem('lingjie-refresh-rate') || 'default';
        setEo(v);
      } catch(e) {}
    };
    window.addEventListener('storage', handler);
    window.addEventListener('lingjie-refresh-rate-changed', handler);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('lingjie-refresh-rate-changed', handler);
    };
  }, []),
  N.useEffect(() => {
      // 窗口数量降到5及以下时，重置通知关闭状态，允许下次再次提醒
      if (e.length <= 5 && winLimitDismissed) {
        setWinLimitDismissed(!1);
      }
    }, [e.length, winLimitDismissed]),
  N.useEffect(() => {
      sessionStorage.removeItem("lingjie-restart-lock");
      try {
        if (sessionStorage.getItem("lingjie-play-startup-sound") === "1") {
          sessionStorage.removeItem("lingjie-play-startup-sound");
          var _sndOn = false;
          try { _sndOn = localStorage.getItem("lingjie-startup-sound") === "true"; } catch(e) {}
          if (_sndOn) {
            try {
              var _audio = new Audio("./assets/startup-sound.mp3");
              _audio.play().catch(function() {});
            } catch(e) {}
          }
        }
      } catch(e) {}
    }, []),
    N.useEffect(() => {
      const handler = (e) => {
        try {
          sessionStorage.setItem("lingjie-bsod", e.detail || "未知错误");
          sessionStorage.setItem("lingjie-bsod-time", Date.now());
          sessionStorage.setItem("lingjie-bsod-locked", "1");
        } catch(_) {}
        location.reload();
      };
      window.addEventListener("lingjie-bsod", handler);
      return () => window.removeEventListener("lingjie-bsod", handler);
    }, []),
    N.useEffect(() => {
      const handler = () => {
        const eastereggApp = {
          id: "easteregg",
          title: "彩蛋",
          component: l.jsx(EasterEgg, {}),
          minWidth: 400,
          minHeight: 400,
          defaultWidth: 600,
          defaultHeight: 500,
          noIcon: true,
        };
        F(eastereggApp);
        window.__eastereggOpen = true;
      };
      window.addEventListener("lingjie-open-easter-egg", handler);
      return () => window.removeEventListener("lingjie-open-easter-egg", handler);
    }, []),
    N.useEffect(() => {
      const handler = () => {
        if (window.__timeCalibrationOpen) return;
        const timeCalibrationApp = {
          id: "timecalibration",
          title: "时间校准",
          component: l.jsx(TimeCalibration, {}),
          minWidth: 300,
          minHeight: 200,
          defaultWidth: 400,
          defaultHeight: 300,
          noMinMax: true,
          noIcon: true,
        };
        F(timeCalibrationApp);
        window.__timeCalibrationOpen = true;
      };
      window.addEventListener("lingjie-open-time-calibration", handler);
      return () => window.removeEventListener("lingjie-open-time-calibration", handler);
    }, []),
    N.useEffect(() => {
      const handler = (e) => {
        const serverTime = e.detail;
        const offset = serverTime - Date.now();
        timeOffsetRef.current = offset;
        setTimeOffset(offset);
        i(new Date(Date.now() + offset));
      };
      window.addEventListener("lingjie-time-calibrated", handler);
      return () => window.removeEventListener("lingjie-time-calibrated", handler);
    }, []),
    N.useEffect(() => {
      const handler = () => {
        const weatherApp = B.find((b) => b.id === "weather");
        if (weatherApp) F(weatherApp);
      };
      window.addEventListener("lingjie-open-weather", handler);
      return () => window.removeEventListener("lingjie-open-weather", handler);
    }, []),
    N.useEffect(() => {
      if (wallpaperBlobUrlRef.current && D !== wallpaperBlobUrlRef.current) {
        try { URL.revokeObjectURL(wallpaperBlobUrlRef.current); } catch(_) {}
        wallpaperBlobUrlRef.current = null;
      }
      if (typeof D == "string" && D.startsWith("photo:")) {
        let cancelled = !1;
        const b = D.slice(6),
          j = indexedDB.open("lingjie-camera-photos", 1);
        j.onsuccess = () => {
          if (cancelled) { try { j.result.close(); } catch(_) {} return; }
          const $ = j.result,
            K = $.transaction("photos", "readonly").objectStore("photos").get(b);
          ((K.onsuccess = () => {
            if (cancelled) return;
            if (K.result && K.result.blob) {
              if (wallpaperBlobUrlRef.current) { try { URL.revokeObjectURL(wallpaperBlobUrlRef.current); } catch(_) {} }
              const blobUrl = URL.createObjectURL(K.result.blob);
              wallpaperBlobUrlRef.current = blobUrl;
              P(blobUrl);
            }
          }),
            (K.onerror = () => {}),
            $.close && setTimeout(() => $.close(), 500));
        };
        j.onerror = () => {};
        return () => { cancelled = !0; };
      } else if (D === "ai-wallpaper") {
        let cancelled = !1;
        const j = indexedDB.open("lingjie-wallpaper-cache", 1);
        j.onupgradeneeded = function() {
          var z = j.result;
          if (!z.objectStoreNames.contains("wallpapers"))
            z.createObjectStore("wallpapers", { keyPath: "id" });
        };
        j.onsuccess = () => {
          if (cancelled) { try { j.result.close(); } catch(_) {} return; }
          const $ = j.result,
            K = $.transaction("wallpapers", "readonly").objectStore("wallpapers").get("current");
          ((K.onsuccess = () => {
            if (cancelled) return;
            if (K.result && K.result.blob) {
              if (wallpaperBlobUrlRef.current) { try { URL.revokeObjectURL(wallpaperBlobUrlRef.current); } catch(_) {} }
              const blobUrl = URL.createObjectURL(K.result.blob);
              wallpaperBlobUrlRef.current = blobUrl;
              P(blobUrl);
            }
          }),
            (K.onerror = () => {}),
            $.close && setTimeout(() => $.close(), 500));
        };
        j.onerror = () => {};
        return () => { cancelled = !0; };
      }
    }, [D]),
    N.useEffect(() => {
      return () => { if (wallpaperBlobUrlRef.current) { try { URL.revokeObjectURL(wallpaperBlobUrlRef.current); } catch(_) {} wallpaperBlobUrlRef.current = null; } };
    }, []));
  const I =
      typeof D == "string" && /^(blob:|https?:|data:image|assets\/)/.test(D)
        ? { style: `url("${D}") center/cover no-repeat` }
        : wi.find((b) => b.id === D) || wi[0],
    B = [
      {
        id: "files",
        title: "文件管理器",
        icon: l.jsx(ya, { className: "w-10 h-10" }),
        component: l.jsx(ym, {}),
        minWidth: 700,
        minHeight: 450,
        defaultWidth: 900,
        defaultHeight: 550,
      },
      {
        id: "translate",
        title: "翻译",
        icon: l.jsx(Qn, { className: "w-10 h-10" }),
        component: l.jsx(tw, {}),
        minWidth: 450,
        minHeight: 400,
        defaultWidth: 520,
        defaultHeight: 500,
      },
      {
        id: "terminal",
        title: "终端",
        icon: l.jsx(id, { className: "w-10 h-10" }),
        component: l.jsx(gm, { username }),
        minWidth: 550,
        minHeight: 400,
        defaultWidth: 750,
        defaultHeight: 500,
      },
      {
        id: "settings",
        title: "设置",
        icon: l.jsx(nm, { className: "w-10 h-10" }),
        component: l.jsx(wm, {}),
        minWidth: 700,
        minHeight: 500,
        defaultWidth: 900,
        defaultHeight: 600,
      },
      {
        id: "music",
        title: "音乐",
        icon: l.jsx(wa, { className: "w-10 h-10" }),
        component: l.jsx(jm, {}),
        minWidth: 700,
        minHeight: 500,
        defaultWidth: 900,
        defaultHeight: 550,
      },
      {
        id: "calculator",
        title: "计算器",
        icon: l.jsx(Wf, { className: "w-10 h-10" }),
        component: l.jsx(Nm, {}),
        minWidth: 300,
        minHeight: 450,
        defaultWidth: 340,
        defaultHeight: 580,
      },
      {
        id: "notes",
        title: "笔记",
        icon: l.jsx(bl, { className: "w-10 h-10" }),
        component: l.jsx(bm, {}),
        minWidth: 600,
        minHeight: 450,
        defaultWidth: 850,
        defaultHeight: 550,
      },
      {
        id: "browser",
        title: "浏览器",
        icon: l.jsx(Qn, { className: "w-10 h-10" }),
        component: l.jsx(Mm, {}),
        minWidth: 700,
        minHeight: 500,
        defaultWidth: 1e3,
        defaultHeight: 650,
      },
      {
        id: "photos",
        title: "相册",
        icon: l.jsx(nd, { className: "w-10 h-10" }),
        component: l.jsx(zm, {}),
        minWidth: 650,
        minHeight: 450,
        defaultWidth: 850,
        defaultHeight: 550,
      },
      {
        id: "camera",
        title: "相机",
        icon: l.jsx(nd, { className: "w-10 h-10" }),
        component: l.jsx(Qm, {}),
        minWidth: 420,
        minHeight: 560,
        defaultWidth: 520,
        defaultHeight: 680,
      },
      {
        id: "time",
        title: "时间",
        icon: l.jsx(Jc, { className: "w-10 h-10" }),
        component: l.jsx(vm, {}),
        minWidth: 650,
        minHeight: 500,
        defaultWidth: 850,
        defaultHeight: 600,
      },
      {
        id: "weather",
        title: "天气",
        icon: l.jsx(ja, { className: "w-10 h-10" }),
        component: l.jsx(Fm, {}),
        minWidth: 400,
        minHeight: 500,
        defaultWidth: 450,
        defaultHeight: 650,
      },
      {
        id: "tictactoe",
        title: "井字棋",
        icon: l.jsx("svg", { className: "w-10 h-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [l.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), l.jsx("path", { d: "M3 9h18M3 15h18M9 3v18M15 3v18" }), l.jsx("path", { d: "M6 6l3 3M6 9l3-3" }), l.jsx("circle", { cx: "18", cy: "6", r: "1.5", fill: "currentColor" }), l.jsx("circle", { cx: "18", cy: "18", r: "1.5", fill: "currentColor" })] }),
        component: l.jsx(Xm, {}),
        minWidth: 320,
        minHeight: 420,
        defaultWidth: 380,
        defaultHeight: 520,
      },
      {
        id: "gobang",
        title: "五子棋",
        icon: l.jsx("svg", { className: "w-10 h-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [l.jsx("circle", { cx: "9", cy: "9", r: "3.5", fill: "currentColor" }), l.jsx("circle", { cx: "15", cy: "15", r: "3.5" })] }),
        component: l.jsx(Wz, {}),
        minWidth: 380,
        minHeight: 520,
        defaultWidth: 540,
        defaultHeight: 660,
      },
      {
        id: "paint",
        title: "画图",
        icon: l.jsx(xi, { className: "w-10 h-10" }),
        component: l.jsx(Gm, {}),
        minWidth: 500,
        minHeight: 400,
        defaultWidth: 700,
        defaultHeight: 600,
      },
      {
        id: "recorder",
        title: "录音",
        icon: l.jsx(wa, { className: "w-10 h-10" }),
        component: l.jsx(Vm, {}),
        minWidth: 400,
        minHeight: 500,
        defaultWidth: 450,
        defaultHeight: 550,
      },
      {
        id: "installer",
        title: "应用安装器",
        icon: l.jsx("svg", { className: "w-10 h-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [l.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), l.jsx("polyline", { points: "7 10 12 15 17 10" }), l.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })] }),
        component: l.jsx(_InstallerApp, {}),
        minWidth: 480,
        minHeight: 420,
        defaultWidth: 540,
        defaultHeight: 520,
      },
    ],
    appItems = [...B, ...installedApps.map(_ljlBuildAppItem)],
    F = (b) => {
      const j = e.find((H) => H.id === b.id);
      if (j) {
        (ke(j.id),
          j.isMinimized &&
            t((H) => H.map((Se) => (Se.id === j.id ? { ...Se, isMinimized: !1 } : Se))));
        return;
      }
      const $ = activeZRef.current + 1;
      activeZRef.current = $;
      r($);
      const vw = window.innerWidth || 1024,
        vh = window.innerHeight || 768,
        isPortrait = vw < vh,
        margin = isPortrait ? 8 : 16,
        bottomSafe = isPortrait ? 80 : 112,
        topSafe = 76,
        ww = Math.min(b.defaultWidth, Math.max(280, vw - margin * 2)),
        hh = Math.min(b.defaultHeight, Math.max(320, vh - topSafe - bottomSafe)),
        shouldMaximize = isPortrait && vw < 500,
        finalWW = shouldMaximize ? vw - margin * 2 : ww,
        finalHH = shouldMaximize ? vh - topSafe - bottomSafe : hh,
        maxX = Math.max(0, vw - finalWW - margin),
        maxY = Math.max(topSafe, vh - bottomSafe - finalHH),
        cx = Math.min(maxX, Math.max(margin, (vw - finalWW) / 2 + e.length * 18)),
        cy = Math.min(
          maxY,
          Math.max(topSafe, (vh - bottomSafe - finalHH) / 2 + topSafe / 2 + e.length * 14),
        );
      const K = {
        id: b.id,
        title: b.title,
        icon: b.icon,
        component: b.component,
        x: cx,
        y: cy,
        width: finalWW,
        height: finalHH,
        minWidth: Math.min(b.minWidth, finalWW),
        minHeight: Math.min(b.minHeight, finalHH),
        isMaximized: !1,
        isMinimized: !1,
        zIndex: $,
      };
      (t((H) => [...H, K]), c(!1));
    },
    G = (b) => {
      if (b === "easteregg") window.__eastereggOpen = false;
      if (b === "timecalibration") window.__timeCalibrationOpen = false;
      const closingWin = e.find(($) => $.id === b);
      const wasActive = closingWin ? closingWin.zIndex === n : false;
      t((j) => j.map(($) => $.id === b ? { ...$, _closing: !0 } : $));
      setTimeout(() => {
        t((j) => {
          const remaining = j.filter(($) => $.id !== b);
          if (wasActive && remaining.length > 0) {
            const maxZ = remaining.reduce((mx, w) => Math.max(mx, w.zIndex || 0), 0);
            activeZRef.current = maxZ;
            r(maxZ);
          }
          return remaining;
        });
      }, 200);
    },
    ne = (b) => {
      t((j) => j.map(($) => ($.id === b ? { ...$, isMinimized: !0 } : $)));
    },
    rt = (b) => {
      t((j) => j.map(($) => ($.id === b ? { ...$, isMaximized: !$.isMaximized } : $)));
    },
    ke = N.useCallback((b) => {
      const newZ = activeZRef.current + 1;
      activeZRef.current = newZ;
      r(newZ);
      t((K) => K.map((H) => (H.id === b ? { ...H, zIndex: newZ } : H)));
    }, [t]),
    ht = N.useCallback(
      (b, j) => {
        (j.preventDefault(), j.stopPropagation());
        const el = j.currentTarget.parentElement;
        if (!el) return;
        try {
          j.currentTarget.setPointerCapture && j.currentTarget.setPointerCapture(j.pointerId);
        } catch {}
        const $ = j.clientX,
          K = j.clientY,
          H = parseFloat(el.style.left) || el.offsetLeft || 0,
          Se = parseFloat(el.style.top) || el.offsetTop || 0,
          pt = el.offsetWidth || parseFloat(el.style.width) || 0,
          $t = el.offsetHeight || parseFloat(el.style.height) || 0;
        let rafId = null,
          lastX = $,
          lastY = K,
          finalX = H,
          finalY = Se;
        ke(b);
        el.style.transition = "none";
        el.style.willChange = "left, top";
        const Tn = (de) => {
            de.preventDefault();
            ((lastX = de.clientX), (lastY = de.clientY));
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
              rafId = null;
              const maxW = Math.max(0, window.innerWidth - pt),
                maxH = Math.max(0, window.innerHeight - 112 - $t);
              finalX = Math.min(maxW, Math.max(0, H + lastX - $));
              finalY = Math.min(maxH, Math.max(0, Se + lastY - K));
              el.style.left = finalX + "px";
              el.style.top = finalY + "px";
            });
          },
          de = () => {
            (document.removeEventListener("pointermove", Tn),
              document.removeEventListener("pointerup", de),
              document.removeEventListener("pointercancel", de));
            if (rafId) cancelAnimationFrame(rafId);
            const maxW = Math.max(0, window.innerWidth - pt),
              maxH = Math.max(0, window.innerHeight - 112 - $t);
            finalX = Math.min(maxW, Math.max(0, finalX));
            finalY = Math.min(maxH, Math.max(0, finalY));
            el.style.left = finalX + "px";
            el.style.top = finalY + "px";
            el.style.transition = "";
            el.style.willChange = "";
            t((Lt) => Lt.map((Xe) => (Xe.id === b ? { ...Xe, x: finalX, y: finalY } : Xe)));
          };
        (document.addEventListener("pointermove", Tn, { passive: !1 }),
          document.addEventListener("pointerup", de),
          document.addEventListener("pointercancel", de));
      },
      [ke, t],
    ),
    He = N.useCallback((b, j, dir, minW, minH) => {
      j.preventDefault();
      j.stopPropagation();
      const el = j.currentTarget.parentElement;
      if (!el) return;
      try { j.currentTarget.setPointerCapture && j.currentTarget.setPointerCapture(j.pointerId); } catch {}
      const sx = j.clientX, sy = j.clientY,
        sw = el.offsetWidth || parseFloat(el.style.width) || 0,
        sh = el.offsetHeight || parseFloat(el.style.height) || 0,
        sl = parseFloat(el.style.left) || el.offsetLeft || 0,
        st = parseFloat(el.style.top) || el.offsetTop || 0;
      ke(b);
      el.style.transition = "none";
      el.style.willChange = "width,height,left,top";
      let rafId = null, lx = sx, ly = sy,
        fw = sw, fh = sh, fx = sl, fy = st;
      const mv = (ev) => {
        ev.preventDefault();
        lx = ev.clientX; ly = ev.clientY;
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          rafId = null;
          const dx = lx - sx, dy = ly - sy;
          if (dir === "r" || dir === "br") fw = Math.max(minW || 300, sw + dx);
          if (dir === "b" || dir === "br" || dir === "bl") fh = Math.max(minH || 200, sh + dy);
          if (dir === "l" || dir === "bl") { fw = Math.max(minW || 300, sw - dx); fx = sl + (sw - fw); }
          el.style.width = fw + "px";
          el.style.height = fh + "px";
          el.style.left = fx + "px";
          el.style.top = fy + "px";
        });
      };
      const up = () => {
        document.removeEventListener("pointermove", mv);
        document.removeEventListener("pointerup", up);
        document.removeEventListener("pointercancel", up);
        if (rafId) cancelAnimationFrame(rafId);
        el.style.transition = "";
        el.style.willChange = "";
        t((Lt) => Lt.map((Xe) => (Xe.id === b ? { ...Xe, width: fw, height: fh, x: fx, y: fy } : Xe)));
      };
      document.addEventListener("pointermove", mv, { passive: !1 });
      document.addEventListener("pointerup", up);
      document.addEventListener("pointercancel", up);
    }, [ke, t]),
    Xe = (b) => b.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
    en = (b) => b.toLocaleDateString("zh-CN", { month: "short", day: "numeric", weekday: "short" });
  const doFactoryReset = () => {
    try {
      localStorage.removeItem("lingjie-wallpaper");
      localStorage.removeItem("lingjie-accent-color");
      localStorage.removeItem("lingjie-volume");
      localStorage.removeItem("lingjie-brightness");
      localStorage.removeItem("lingjie-widgets");
      localStorage.removeItem("lingjie-lock-password");
      localStorage.removeItem("lingjie-refresh-rate");
      localStorage.removeItem("lingjie-window-render-opt");
      localStorage.removeItem("lingjie-username");
      localStorage.removeItem("lingjie-random-wallpaper");
      localStorage.removeItem("lingjie-startup-sound");
      localStorage.removeItem("lingjie-lock-quote");
      localStorage.removeItem("lingjie-fps-monitor");
      localStorage.removeItem("lingjie-sec-mode");
      localStorage.removeItem("lingjie-gesture-lock");
    } catch(e) {}
    setTimeout(() => { (t([]), w("factory-reset"), f("closing"), d(0)); }, 100);
  };
  const handlePwdConfirm = () => {
    if (Ie.length !== 4) { ($t(!0), Wt("请输入4位密码")); return; }
    if (Fe === "step1-old" || Fe === "clear-old" || Fe === "verify-switch-gesture") {
      if (Ie === ge) {
        if (Fe === "clear-old") {
          (Ye(""), (() => { try { localStorage.removeItem("lingjie-lock-password"); } catch(e) {} })(), setSecMode("none"), (() => { try { localStorage.setItem("lingjie-sec-mode", "none"); } catch(e) {} })(), be(!1), ot(""));
        } else if (Fe === "verify-switch-gesture") {
          (be(!1), ot(""), setGestureSetup(!0), setGestureSteps([]), setGestureConfirmSteps([]), setGestureSetupPhase("draw"), setGestureError(""));
        } else {
          ($e("step1-new"), ot(""));
        }
      } else {
        ($t(!0), Wt(Fe === "clear-old" ? "密码错误" : Fe === "verify-switch-gesture" ? "密码错误" : "旧密码错误"), ot(""));
      }
    } else if (Fe === "step1-new") {
      (vt(Ie), $e("step2-confirm"), ot(""));
    } else if (Fe === "step2-confirm") {
      if (Ie === Je) {
        (Ye(Je), (() => { try { localStorage.setItem("lingjie-lock-password", Je); } catch(e) {} })(), setSecMode("password"), (() => { try { localStorage.setItem("lingjie-sec-mode", "password"); } catch(e) {} })(), (() => { try { localStorage.removeItem("lingjie-gesture-lock"); } catch(e) {} })(), setGesturePwd(""), be(!1), ot(""), vt(""));
      } else {
        ($t(!0), Wt("两次密码不一致"), ot(""), $e("step1-new"));
      }
    }
  };
  return l.jsxs(l.Fragment, {
    children: [
      bsod !== null && l.jsx(Bsod, {
        errorCode: bsod,
        onRestart: () => {
          try { sessionStorage.removeItem("lingjie-bsod-easter-egg"); sessionStorage.removeItem("lingjie-bsod"); sessionStorage.removeItem("lingjie-bsod-locked"); } catch(e) {}
          setBsod(null);
          y(!1); w("restart"); f("closing"); d(0);
        },
      }),
      !bsod && unlocking && l.jsx("div", {
        className: "fixed inset-0",
        style: { background: I.style, filter: `brightness(${le}%)`, zIndex: 100 },
      }),
      !bsod && g
    ? l.jsx("div", {
        className:
          "fixed inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out",
        style: unlocking
          ? { background: "transparent", transform: unlockPhase ? "scale(0.85)" : "scale(1)", opacity: unlockPhase ? 0 : 1, pointerEvents: "none", zIndex: 200 }
          : { background: I.style },
        onClick: () => {
          if (zt) { Ut(!1); return; }
        },
        children: [
          lockCountdown > 0 && l.jsx("div", {
            style: { position: "absolute", top: 20, right: 20, zIndex: 10, display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 12, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.15)" },
            children: [
              l.jsx("span", { style: { color: "rgba(255,255,255,0.6)", fontSize: 13 }, children: "锁定中" }),
              l.jsx("span", { style: { color: "#fff", fontSize: 18, fontWeight: 600, fontVariantNumeric: "tabular-nums", minWidth: 32, textAlign: "center" }, children: lockCountdown + "s" }),
            ],
          }),
          l.jsx("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: l.jsx("div", {
              className:
                "absolute w-[900px] h-[900px] -top-48 -left-48 bg-white/10 rounded-full blur-3xl animate-pulse",
            }),
          }),
          l.jsxs("div", {
            className: "text-center relative z-10",
            children: [
              l.jsx("div", {
                className:
                  "w-28 h-28 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl",
                children: l.jsx(dm, { className: "w-14 h-14 text-white" }),
              }),
              l.jsx("p", { className: "text-white/60 mb-2", children: en(s) }),
              l.jsx("p", {
                className: "text-6xl font-light text-white mb-8 drop-shadow-lg",
                children: Xe(s),
              }),
              l.jsx("h1", {
                className: "text-3xl font-light text-white mb-2 drop-shadow",
                children: username,
              }),
              secMode === "gesture" && gesturePwd
                ? l.jsxs("div", {
                    children: [
                      l.jsx("p", {
                        className: "text-white/60 mb-6",
                        children: lockoutUntil > Date.now() ? "手势错误次数过多，请等待" : "绘制手势解锁",
                      }),
                      l.jsx("div", {
                        style: { display: "flex", justifyContent: "center", opacity: lockoutUntil > Date.now() ? 0.4 : 1, pointerEvents: lockoutUntil > Date.now() ? "none" : "auto" },
                        children: l.jsx(GesturePad, {
                          onComplete: (steps) => {
                            if (lockoutUntil > Date.now()) {
                              Wt("手势错误次数过多，请等待倒计时结束");
                              return;
                            }
                            if (steps.join(",") === gesturePwd) {
                              (setUnlocking(!0), setUnlockPhase(!1), requestAnimationFrame(() => { try { setUnlockPhase(!0); } catch(_) {} }), setTimeout(() => { try { y(!1); } catch(_) {} }, 650), setTimeout(() => { try { setUnlocking(!1); setUnlockPhase(!1); } catch(_) {} }, 750));
                              setLockFailCount(0);
                              setLockoutCount(0);
                              try {
                                localStorage.removeItem("lingjie-lockout-until");
                                localStorage.removeItem("lingjie-lockout-count");
                                localStorage.removeItem("lingjie-lock-fail-count");
                              } catch(e) {}
                            } else {
                              const newFail = lockFailCount + 1;
                              if (newFail >= 3) {
                                const newLockoutCount = lockoutCount + 1;
                                const dur = newLockoutCount === 1 ? 30 : 60;
                                const until = Date.now() + dur * 1000;
                                setLockoutUntil(until);
                                setLockoutCount(newLockoutCount);
                                setLockFailCount(0);
                                setLockCountdown(dur);
                                Wt("手势错误次数过多，已锁定");
                                try {
                                  localStorage.setItem("lingjie-lockout-until", until.toString());
                                  localStorage.setItem("lingjie-lockout-count", newLockoutCount.toString());
                                  localStorage.removeItem("lingjie-lock-fail-count");
                                } catch(e) {}
                              } else {
                                setLockFailCount(newFail);
                                Wt("手势错误（剩余 " + (3 - newFail) + " 次机会）");
                                try { localStorage.setItem("lingjie-lock-fail-count", newFail.toString()); } catch(e) {}
                              }
                            }
                          },
                          error: kt,
                        }),
                      }),
                      kt &&
                        l.jsx("p", {
                          className: "text-red-500 text-sm mt-4 text-center",
                          children: kt,
                        }),
                    ],
                  })
                : secMode === "password" && ge
                ? l.jsxs("div", {
                    children: [
                      l.jsx("p", {
                        className: "text-white/60 mb-8",
                        children: "输入密码解锁",
                      }),
                      l.jsx("div", {
                        onClick: () => { if (lockoutUntil === 0) setLockKb(!0); },
                        className: "w-72 px-4 py-3 bg-black/30 backdrop-blur-xl border rounded-xl text-white text-center text-2xl tracking-[0.5em] outline-none transition-colors cursor-pointer select-none",
                        style: kt
                          ? { borderColor: "rgba(248, 113, 113, 0.6)", opacity: lockoutUntil > 0 ? 0.5 : 1, pointerEvents: lockoutUntil > 0 ? "none" : "auto" }
                          : { borderColor: "rgba(255,255,255,0.2)", opacity: lockoutUntil > 0 ? 0.5 : 1, pointerEvents: lockoutUntil > 0 ? "none" : "auto" },
                        children: h.length > 0 ? "•".repeat(h.length) : l.jsx("span", { className: "text-white/30", children: "输入密码" })
                      }),
                      kt &&
                        l.jsx("p", {
                          className: "text-red-500 text-sm mt-2",
                          children: kt,
                        }),
                      l.jsx("button", {
                        onClick: () => {
                          if (lockoutUntil > 0) {
                            Wt("密码错误次数过多，请等待倒计时结束");
                            return;
                          }
                          if (h.length !== 4) {
                            Wt("请输入4位密码");
                            return;
                          }
                          if (h === ge) {
                            (k(""), setUnlocking(!0), setUnlockPhase(!1), requestAnimationFrame(() => { try { setUnlockPhase(!0); } catch(_) {} }), setTimeout(() => { try { y(!1); } catch(_) {} }, 650), setTimeout(() => { try { setUnlocking(!1); setUnlockPhase(!1); } catch(_) {} }, 750));
                            setLockFailCount(0);
                            setLockoutCount(0);
                            try {
                              localStorage.removeItem("lingjie-lockout-until");
                              localStorage.removeItem("lingjie-lockout-count");
                              localStorage.removeItem("lingjie-lock-fail-count");
                            } catch(e) {}
                          } else {
                            const newFail = lockFailCount + 1;
                            if (newFail >= 3) {
                              const newLockoutCount = lockoutCount + 1;
                              const dur = newLockoutCount === 1 ? 30 : 60;
                              const until = Date.now() + dur * 1000;
                              setLockoutUntil(until);
                              setLockoutCount(newLockoutCount);
                              setLockFailCount(0);
                              setLockCountdown(dur);
                              Wt("密码错误次数过多，已锁定");
                              try {
                                localStorage.setItem("lingjie-lockout-until", until.toString());
                                localStorage.setItem("lingjie-lockout-count", newLockoutCount.toString());
                                localStorage.removeItem("lingjie-lock-fail-count");
                              } catch(e) {}
                            } else {
                              setLockFailCount(newFail);
                              Wt("密码错误（剩余 " + (3 - newFail) + " 次机会）");
                              try { localStorage.setItem("lingjie-lock-fail-count", newFail.toString()); } catch(e) {}
                            }
                            k("");
                          }
                        },
                        className:
                          "mt-4 px-6 py-2 bg-white/20 backdrop-blur hover:bg-white/30 text-white rounded-lg transition-colors",
                        children: "解锁",
                      }),
                    ],
                  })
                : l.jsx("div", {
                    className: "select-none",
                    children: (() => {
                      const barW = 280, knobW = 56, maxSlide = barW - knobW;
                      return l.jsxs("div", {
                        className: "relative mx-auto",
                        style: { width: barW + "px", height: knobW + "px", borderRadius: knobW + "px", background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 30%, #f59e0b 70%, #fbbf24 100%)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" },
                        children: [
                          l.jsx("span", {
                            className: "absolute inset-0 flex items-center justify-center text-white/80 text-sm font-medium pointer-events-none",
                            style: { opacity: Math.max(0, 1 - slideX / maxSlide * 1.5) },
                            children: "滑动以解锁",
                          }),
                          l.jsx("div", {
                            className: "absolute top-0 left-0 flex items-center justify-center cursor-grab active:cursor-grabbing",
                            style: {
                              width: knobW + "px",
                              height: knobW + "px",
                              borderRadius: "50%",
                              background: "linear-gradient(135deg, #f9a8d4 0%, #ffffff 100%)",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                              transform: `translateX(${slideX}px)`,
                              transition: slideX === 0 || slideX >= maxSlide ? "transform 0.3s ease" : "none",
                              touchAction: "none",
                            },
                            onPointerDown: (e) => {
                              if (zt) return;
                              const startX = e.clientX;
                              const startSlide = slideX;
                              let curSlide = startSlide;
                              const knobEl = e.currentTarget;
                              if (!knobEl) return;
                              try { knobEl.setPointerCapture && knobEl.setPointerCapture(e.pointerId); } catch(_) {}
                              const onMove = (ev) => {
                                let nx = startSlide + (ev.clientX - startX);
                                if (nx < 0) nx = 0;
                                if (nx > maxSlide) nx = maxSlide;
                                curSlide = nx;
                                setSlideX(nx);
                              };
                              const onUp = (ev) => {
                                try { knobEl && knobEl.releasePointerCapture && knobEl.releasePointerCapture(e.pointerId); } catch(_) {}
                                if (knobEl) { try { knobEl.removeEventListener("pointermove", onMove); } catch(_) {} try { knobEl.removeEventListener("pointerup", onUp); } catch(_) {} }
                                if (curSlide >= maxSlide * 0.92) {
                                  setSlideX(maxSlide);
                                  setUnlocking(!0);
                                  setUnlockPhase(!1);
                                  requestAnimationFrame(() => { try { setUnlockPhase(!0); } catch(_) {} });
                                  setTimeout(() => { try { y(!1); } catch(_) {} }, 650);
                                  setTimeout(() => { try { setUnlocking(!1); setUnlockPhase(!1); setSlideX(0); } catch(_) {} }, 750);
                                } else {
                                  setSlideX(0);
                                }
                              };
                              try { knobEl.addEventListener("pointermove", onMove); knobEl.addEventListener("pointerup", onUp); } catch(_) {}
                            },
                            children: l.jsx("span", { className: "text-yellow-400 text-lg font-bold", style: { transform: "rotate(0.2014deg)", display: "inline-block" }, children: "L" }),
                          }),
                        ],
                      });
                    })(),
                  }),
            ],
          }),
          lockQuote && l.jsx("div", {
            style: {
              position: "fixed",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 997,
              maxWidth: "calc(100vw - 120px)",
              padding: "14px 28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              textAlign: "center",
              pointerEvents: "none",
            },
            children: l.jsx("p", {
              style: {
                color: "rgba(255,255,255,0.9)",
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: 1.6,
                margin: 0,
                textShadow: "0 1px 4px rgba(0,0,0,0.2)",
              },
              children: (() => {
                const quotes = [
                  "永远要相信美好的事情会发生",
                  "你比想象中更勇敢，比看起来更坚强",
                  "每一个清晨都是重新开始的机会",
                  "即使是最小的星星，也在努力发光",
                  "今天的努力，是明天最好的礼物",
                  "生活不会辜负每一份坚持",
                  "你走过的每一步，都算数",
                  "保持热爱，奔赴山海",
                  "所有的美好，都值得耐心等待",
                  "做自己的太阳，无需凭借别人的光",
                  "愿你眼中有星辰，心中有大海",
                  "无论多远的路，只要走就在靠近",
                  "把每一个今天，活成最好的版本",
                  "温柔且有力量，清醒且知进取",
                  "星河滚烫，你是人间理想",
                ];
                const idx = quoteIdx % quotes.length;
                return quotes[idx];
              })(),
            }),
          }),
          timerCountdown > 0 && l.jsxs("div", {
            style: { position: "fixed", bottom: "24px", left: "16px", zIndex: 99999, pointerEvents: "auto" },
            children: [
              l.jsxs("div", {
                className: "bg-black/80 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3",
                children: [
                  l.jsx("div", { className: "w-2 h-2 rounded-full bg-orange-400 animate-pulse" }),
                  l.jsxs("span", {
                    className: "text-white text-sm font-medium",
                    children: [timerCountdown, " 秒后自动", timerAction === "restart" ? "重启" : "关机"],
                  }),
                  l.jsx("button", {
                    onClick: () => {
                      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
                      timerActionRef.current = null;
                      setTimerCountdown(0);
                      setTimerAction(null);
                    },
                    className: "ml-2 text-white/50 hover:text-white text-xs px-2 py-1 rounded-lg hover:bg-white/10 transition-all",
                    children: "取消",
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: "fixed bottom-5 right-5 z-[998] flex items-center gap-2",
            onClick: (b) => b.stopPropagation(),
            children: [
              zt &&
                l.jsxs("div", {
                  className: "absolute bottom-16 right-0 w-64 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-3 " + (ztClosing ? "lingjie-anim-fade-out-down" : "animate-fade-in-up"),
                  onAnimationEnd: ztClosing ? () => { Ut(!1); setZtClosing(!1); } : undefined,
                  onClick: (b) => b.stopPropagation(),
                  children: [
                    l.jsx("div", {
                      className: "text-[10px] text-black/40 uppercase tracking-widest px-4 py-2",
                      children: "灵界 OS · 电源控制",
                    }),
                    l.jsxs("button", {
                      onClick: () => {
                        if (lockoutUntil > Date.now()) return;
                        (Ut(!1), y(!1), w("restart"), f("closing"), d(0));
                      },
                      className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all " + (lockoutUntil > Date.now() ? "text-black/25 cursor-not-allowed" : "text-black/80 hover:bg-black/5 hover:text-black"),
                      children: [
                        l.jsx(sd, { className: "w-4 h-4 text-black" }),
                        "灵界重启",
                        l.jsx("span", {
                          className: "ml-auto text-[10px] text-black/25",
                          children: "↻",
                        }),
                      ],
                    }),
                    l.jsxs("button", {
                      onClick: () => {
                        if (lockoutUntil > Date.now()) return;
                        (Ut(!1), y(!1), w("shutdown"));
                      },
                      className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all " + (lockoutUntil > Date.now() ? "text-black/25 cursor-not-allowed" : "text-black/80 hover:bg-black/5 hover:text-black"),
                      children: [
                        l.jsx(Lo, { className: "w-4 h-4 text-black" }),
                        "关闭灵界",
                        l.jsx("span", {
                          className: "ml-auto text-[10px] text-black/25",
                          children: "⟲",
                        }),
                      ],
                    }),
                    l.jsxs("button", {
                      onClick: () => {
                        if (lockoutUntil > Date.now()) return;
                        setTimerMenu(!timerMenu);
                        setTimerMenuClosing(!1);
                      },
                      className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-black/80 hover:bg-black/5 hover:text-black",
                      children: [
                        l.jsxs("svg", { className: "w-4 h-4 text-black", viewBox: "0 0 24 24", fill: "currentColor", children: [l.jsx("circle", { cx: "5", cy: "12", r: "2", key: "d1" }), l.jsx("circle", { cx: "12", cy: "12", r: "2", key: "d2" }), l.jsx("circle", { cx: "19", cy: "12", r: "2", key: "d3" })] }),
                        "定时重启/关机",
                      ],
                    }),
                    timerMenu && l.jsxs("div", {
                      className: "mt-1 px-4 py-3 bg-black/5 rounded-2xl space-y-2",
                      onClick: (b) => b.stopPropagation(),
                      children: [
                        l.jsx("input", {
                          type: "number",
                          min: "0",
                          max: "1000",
                          placeholder: "0~1000 秒",
                          value: timerInput,
                          onChange: (b) => { const v = Math.min(1000, Math.max(0, parseInt(b.target.value, 10) || 0)); setTimerInput(String(v)); },
                          className: "w-full text-center text-sm bg-white/60 rounded-lg px-3 py-2 outline-none text-black",
                        }),
                        l.jsxs("div", { className: "flex gap-2", children: [
                          l.jsx("button", {
                            onClick: () => {
                              const sec = parseInt(timerInput, 10) || 0;
                              if (sec <= 0 || sec > 1000) return;
                              timerActionRef.current = "restart";
                              setTimerAction("restart");
                              setTimerCountdown(sec);
                              setTimerMenu(!1);
                              setTimerInput("");
                              Ut(!1);
                            },
                            className: "flex-1 px-3 py-2 text-xs rounded-lg bg-blue-500/80 text-white hover:bg-blue-500 transition-all",
                            children: "定时重启",
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              const sec = parseInt(timerInput, 10) || 0;
                              if (sec <= 0 || sec > 1000) return;
                              timerActionRef.current = "shutdown";
                              setTimerAction("shutdown");
                              setTimerCountdown(sec);
                              setTimerMenu(!1);
                              setTimerInput("");
                              Ut(!1);
                            },
                            className: "flex-1 px-3 py-2 text-xs rounded-lg bg-red-500/80 text-white hover:bg-red-500 transition-all",
                            children: "定时关机",
                          }),
                        ]}),
                      ],
                    }),
                    lockoutUntil > Date.now() && l.jsx("div", {
                      className: "px-4 py-2 text-[11px] text-red-500/80 text-center",
                      children: "系统已锁定，无法重启或关机",
                    }),
                  ],
                }),
              l.jsxs("button", {
                onClick: (b) => {
                  b.stopPropagation();
                  if (zt) { setZtClosing(!0); }
                  else { Ut(!0); }
                },
                className:
                  "w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center",
                children: l.jsx(Lo, { className: "w-4 h-4" }),
              }),
            ],
          }),
        ],
      })
    : l.jsx(od.Provider, {
        value: {
          wallpaper: D,
          setWallpaper: (b) => {
            (P(b),
              typeof b == "string" &&
                !b.startsWith("blob:") &&
                (() => { try { localStorage.setItem("lingjie-wallpaper", b); } catch(e) {} })());
          },
          accentColor: U,
          setAccentColor: (b) => {
            M(b);
            try { localStorage.setItem("lingjie-accent-color", b); } catch(e) {}
          },
          volume: R,
          setVolume: (b) => {
            Q(b);
            try { localStorage.setItem("lingjie-volume", String(b)); } catch(e) {}
          },
          brightness: le,
          setBrightness: (b) => {
            Ze(b);
            try { localStorage.setItem("lingjie-brightness", String(b)); } catch(e) {}
          },
          triggerFactoryReset: doFactoryReset,
          windowRenderOptimization: Yo,
          setWindowRenderOptimization: (b) => {
            Zo(b);
            try { localStorage.setItem("lingjie-window-render-opt", String(b)); } catch(e) {}
          },
          startupSound,
          setStartupSound: (b) => {
            setStartupSound(b);
            try { localStorage.setItem("lingjie-startup-sound", b ? "true" : "false"); } catch(e) {}
          },
          lockQuote,
          setLockQuote: (b) => {
            setLockQuote(b);
            try { localStorage.setItem("lingjie-lock-quote", b ? "true" : "false"); } catch(e) {}
          },
          fpsMonitor,
          setFpsMonitor: (b) => {
            setFpsMonitor(b);
            try { localStorage.setItem("lingjie-fps-monitor", b ? "true" : "false"); } catch(e) {}
          },
          secMode,
          setSecMode,
          gesturePwd,
          setGesturePwd,
          lockPassword: ge,
          setLockPassword: Ye,
          gestureSetup,
          setGestureSetup,
          gestureSteps,
          setGestureSteps,
          gestureConfirmSteps,
          setGestureConfirmSteps,
          gestureSetupPhase,
          setGestureSetupPhase,
          gestureError,
          setGestureError,
          setShowPwdModal: be,
          setPwdStep: $e,
          setPwdInput: ot,
          setPwdConfirm: vt,
          setPwdErrFlag: $t,
          setPwdErrMsg: Wt,
          username,
          setUsername: (b) => {
            const trimmed = (b || "").trim();
            const finalName = trimmed || "灵者";
            setUsername(finalName);
            try { localStorage.setItem("lingjie-username", finalName); } catch(e) {}
          },
          randomWallpaper: rwState,
          setRandomWallpaper: (b) => {
            setRwState(b);
            try { localStorage.setItem("lingjie-random-wallpaper", b ? "true" : "false"); } catch(e) {}
          },
        },
        children: l.jsxs("div", {
          className: "fixed inset-0 overflow-hidden transition-all duration-700",
          style: { background: I.style, filter: `brightness(${le}%)` },
          onClick: () => {
            c(!1);
            if (u) setPowerPanel2Closing(!0);
            if (x) setSearchClosing(!0);
            if (Qt) setWidgetMenuClosing(!0);
            if (timerMenu) setTimerMenu(!1);
          },
          children: [
            fpsMonitor && l.jsx(FpsDisplay, {}),
            timerCountdown > 0 && l.jsxs("div", {
              style: { position: "fixed", bottom: "16px", left: "16px", zIndex: 99999, pointerEvents: "auto" },
              className: "lingjie-anim-fade-in-up",
              children: [
                l.jsxs("div", {
                  className: "bg-black/80 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3",
                  children: [
                    l.jsx("div", {
                      className: "w-2 h-2 rounded-full bg-orange-400 animate-pulse",
                    }),
                    l.jsxs("span", {
                      className: "text-white text-sm font-medium",
                      children: [
                        timerCountdown,
                        " 秒后自动",
                        timerAction === "restart" ? "重启" : "关机",
                      ],
                    }),
                    l.jsx("button", {
                      onClick: () => {
                        if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
                        timerActionRef.current = null;
                        setTimerCountdown(0);
                        setTimerAction(null);
                      },
                      className: "ml-2 text-white/50 hover:text-white text-xs px-2 py-1 rounded-lg hover:bg-white/10 transition-all",
                      children: "取消",
                    }),
                  ],
                }),
              ],
            }),
            l.jsx("div", { className: "absolute inset-0 bg-black/10 pointer-events-none" }),
            l.jsx("div", {
              className:
                "absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none animate-float-soft",
            }),
            l.jsx("div", {
              className:
                "absolute bottom-12 left-1/3 w-72 h-72 rounded-full bg-cyan-300/10 blur-3xl pointer-events-none animate-float-soft motion-delay-300",
            }),
            // 系统介绍按钮 + 添加小组件按钮 - z-index:60
            l.jsxs("div", {
              style: {
                position: "fixed",
                top: "16px",
                right: "16px",
                zIndex: 60,
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                alignItems: "center",
              },
              children: [
                l.jsxs("div", {
                  style: { position: "relative" },
                  children: [
                    l.jsx("button", {
                      onTouchStart: (b) => { b.stopPropagation(); },
                      onPointerDown: (b) => { b.stopPropagation(); },
                      onClick: (b) => {
                        b.stopPropagation();
                        if (Qt) { setWidgetMenuClosing(!0); }
                        else { Yt(!0); }
                      },
                      style: {
                        height: "40px",
                        padding: "0 16px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(255,255,255,0.3)",
                        background: (Qt || widgetMenuClosing) ? "rgba(255,255,255,0.9)" : "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))",
                        color: (Qt || widgetMenuClosing) ? "#000" : "#fff",
                        fontSize: "14px",
                        fontWeight: 500,
                        backdropFilter: "blur(20px) saturate(150%)",
                        WebkitBackdropFilter: "blur(20px) saturate(150%)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2), inset 0 1px rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                        touchAction: "manipulation",
                        WebkitTapHighlightColor: "transparent",
                      },
                      children: l.jsx("span", {
                        style: { fontSize: "14px", fontWeight: 500, color: (Qt || widgetMenuClosing) ? "#000" : "#fff" },
                        children: "添加小组件",
                      }),
                    }),
                    (Qt || widgetMenuClosing) &&
                      l.jsxs("div", {
                        className:
                          "absolute top-full left-0 mt-2 w-52 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-2xl p-2 " + (widgetMenuClosing ? "lingjie-anim-fade-out-down" : "animate-fade-in-up"),
                        onAnimationEnd: widgetMenuClosing ? () => { Yt(!1); setWidgetMenuClosing(!1); } : undefined,
                        onClick: (b) => b.stopPropagation(),
                        children: [
                          l.jsx("div", {
                            className: "text-[10px] text-black/40 uppercase tracking-widest px-3 py-2",
                            children: "选择小组件",
                          }),
                          l.jsxs("button", {
                            onClick: () => {
                              const b = qt.find((j) => j.type === "countdown");
                              if (!b) { const w = [...qt, { id: "widget-countdown", type: "countdown" }]; Zt(w); try { localStorage.setItem("lingjie-widgets", JSON.stringify(w)); } catch(_) {} }
                              setWidgetMenuClosing(!0);
                            },
                            className:
                              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-black/80 hover:bg-black/5 transition-all text-sm",
                            children: [l.jsx(Jc, { className: "w-4 h-4 text-black" }), "倒计时"],
                          }),
                          l.jsxs("button", {
                            onClick: () => {
                              const b = qt.find((j) => j.type === "stopwatch");
                              if (!b) { const w = [...qt, { id: "widget-stopwatch", type: "stopwatch" }]; Zt(w); try { localStorage.setItem("lingjie-widgets", JSON.stringify(w)); } catch(_) {} }
                              setWidgetMenuClosing(!0);
                            },
                            className:
                              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-black/80 hover:bg-black/5 transition-all text-sm",
                            children: [l.jsx(Jc, { className: "w-4 h-4 text-black" }), "正计时"],
                          }),
                          l.jsxs("button", {
                            onClick: () => {
                              const b = qt.find((j) => j.type === "random_music");
                              if (!b) { const w = [...qt, { id: "widget-music", type: "random_music" }]; Zt(w); try { localStorage.setItem("lingjie-widgets", JSON.stringify(w)); } catch(_) {} }
                              setWidgetMenuClosing(!0);
                            },
                            className:
                              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-black/80 hover:bg-black/5 transition-all text-sm",
                            children: [l.jsx(sm, { className: "w-4 h-4 text-black" }), "随机播放一首歌"],
                          }),
                          l.jsxs("button", {
                            onClick: () => {
                              const b = qt.find((j) => j.type === "quick_lock");
                              if (!b) { const w = [...qt, { id: "widget-quick-lock", type: "quick_lock" }]; Zt(w); try { localStorage.setItem("lingjie-widgets", JSON.stringify(w)); } catch(_) {} }
                              setWidgetMenuClosing(!0);
                            },
                            className:
                              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-black/80 hover:bg-black/5 transition-all text-sm",
                            children: [l.jsx(ld, { className: "w-4 h-4 text-black" }), "一键锁屏"],
                          }),
                        ],
                      }),
                  ],
                }),
                l.jsx("button", {
                  onTouchStart: (b) => { b.stopPropagation(); },
                  onPointerDown: (b) => { b.stopPropagation(); },
                  onClick: (b) => {
                    b.stopPropagation();
                    Me(!0);
                  },
                  style: {
                    height: "40px",
                    padding: "0 16px",
                    borderRadius: "9999px",
                    border: "none",
                    background: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 500,
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                  },
                  children: l.jsx("span", {
                    style: { fontSize: "14px", fontWeight: 500, color: "#fff" },
                    children: "系统介绍",
                  }),
                }),
              ],
            }),
            e.some((mw) => mw.isMinimized) &&
              l.jsxs("div", {
                style: { position: "fixed", top: 68, right: 16, zIndex: 200, display: "flex", flexDirection: "column", gap: 8, alignItems: "center", maxHeight: "calc(100vh - 200px)", overflowY: "auto" },
                className: "lingjie-anim-slide-in-right",
                onClick: (b) => b.stopPropagation(),
                children: [
                  l.jsx("p", {
                    style: { fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.5px", margin: "0 0 4px 0", fontWeight: 500 },
                    children: "最小化应用",
                  }),
                  e.filter((mw) => mw.isMinimized).map((mw) =>
                    l.jsx("button", {
                      onPointerDown: (b) => b.stopPropagation(),
                      onClick: (b) => {
                        b.stopPropagation();
                        t((H) => H.map((K) => (K.id === mw.id ? { ...K, isMinimized: !1 } : K)));
                        ke(mw.id);
                      },
                      style: { width: 56, height: 56, borderRadius: 16, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "rgba(255,255,255,0.8)", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" },
                      title: mw.title,
                      children: l.jsx("span", {
                        className: "[&>svg]:w-full [&>svg]:h-full",
                        style: { width: 28, height: 28, display: "block" },
                        children: mw.icon,
                      }),
                    }, mw.id),
                  ),
                ],
              }),
            l.jsxs("button", {
              onClick: (b) => {
                (b.stopPropagation(), T(!0));
              },
              style: { translate: '-50% 0' },
              className:
                "fixed top-4 left-1/2 z-[1190] h-14 px-6 rounded-full bg-black/70 text-white macos-glass animate-island-breathe flex items-center gap-4 transition-all hover:h-16 hover:px-7 active:scale-95",
              children: [
                l.jsx("div", { className: "lingjie-island-flow-layer" }),
                l.jsx("div", {
                  className:
                    "w-9 h-9 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 flex items-center justify-center animate-glow-pulse relative z-[1]",
                  children: l.jsx(ys, { className: "w-5 h-5" }),
                }),
                l.jsxs("div", {
                  className: "text-left relative z-[1]",
                  children: [
                    l.jsx("p", {
                      className: "text-sm font-semibold leading-tight",
                      children: "帮助台",
                    }),
                    l.jsx("p", {
                      className: "text-[11px] text-white/55 leading-tight",
                      children: "功能问答指引",
                    }),
                  ],
                }),
              ],
            }),
            _ && l.jsx(Lm, { onClose: () => T(!1) }),
            me && l.jsx(Wm, { onClose: () => Me(!1) }),
            l.jsx(Dk, { openFiles: () => { if (B[0]) F(B[0]); } }),
            l.jsxs("div", {
              className:
                "absolute top-28 bottom-28 left-5 flex flex-col gap-3 z-10 overflow-y-auto pr-2",
              children: [
                l.jsxs("div", {
                  className: "mb-1 px-2",
                  children: [
                    l.jsx("p", {
                      className: "text-white/90 text-sm font-medium",
                      children: "空间应用层",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "grid grid-cols-1 gap-2",
                  children: appItems.map((b) =>
                    l.jsx(
                      Ro,
                      {
                        icon: b.icon,
                        label: b.title,
                        onClick: (j) => {
                          (j.stopPropagation(), F(b));
                        },
                      },
                      b.id,
                    ),
                  ),
                }),
              ],
            }),
            qt.length > 0 &&
              l.jsx("div", {
                className: "fixed top-28 right-5 flex flex-col gap-3 z-50",
                onClick: (b) => b.stopPropagation(),
                children: qt.map((b) => {
                  var c;
                  if (b.type === "countdown") c = l.jsx(qw, {});
                  else if (b.type === "stopwatch") c = l.jsx(ew, {});
                  else if (b.type === "random_music") c = l.jsx(rw, {});
                  else if (b.type === "quick_lock") c = l.jsx(_ljQuickLockWidget, { onLock: () => y(!0) });
                  return l.jsxs("div", {
                    className: "w-52 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-2xl overflow-hidden animate-fade-in-up",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between px-3 py-2 border-b border-black/5",
                        children: [
                          l.jsx("span", { className: "text-xs font-medium text-black/60", children: b.type === "countdown" ? "倒计时" : b.type === "stopwatch" ? "正计时" : b.type === "quick_lock" ? "一键锁屏" : "随机音乐" }),
                          l.jsx("button", {
                            onClick: (j) => { j.stopPropagation(); const w = qt.filter((K) => K.id !== b.id); Zt(w); try { localStorage.setItem("lingjie-widgets", JSON.stringify(w)); } catch(_) {} },
                            className: "text-black/30 hover:text-black/60 text-xs",
                            children: "✕",
                          }),
                        ],
                      }),
                      l.jsx("div", { className: "flex-1 min-h-0", children: c || null }),
                    ],
                  }, b.id);
                }),
              }),
            e.map(
              (b) => {
                const isActiveWindow = b.zIndex === n && !b.isMinimized;
                return l.jsxs(
                  "div",
                  {
                    className: `absolute flex flex-col rounded-2xl overflow-hidden transition-[width,height,left,top,transform,box-shadow,opacity] duration-300 ${b.isMaximized ? "inset-0 rounded-none" : ""} ${b._closing ? "lingjie-anim-scale-out pointer-events-none" : b.isMinimized ? "pointer-events-none scale-50 opacity-0" : "animate-scale-in pointer-events-auto"}${Yo && !isActiveWindow && !b.isMinimized && !b._closing ? " is-frozen" : ""}`,
                    style: {
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: (Yo && !isActiveWindow && !b.isMinimized) ? "none" : "blur(20px)",
                      WebkitBackdropFilter: (Yo && !isActiveWindow && !b.isMinimized) ? "none" : "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      left: b.isMaximized ? 0 : b.x,
                      top: b.isMaximized ? 0 : b.y,
                      width: b.isMaximized ? "100%" : b.width,
                      height: b.isMaximized ? "calc(100% - 48px)" : b.height,
                      zIndex: b.zIndex,
                    },
                    "data-window-id": b.id,
                    onClick: () => ke(b.id),
                    children: [
                      l.jsxs("div", {
                        className:
                          "flex items-center justify-between px-3 py-2 bg-white/5 " + (Yo && !isActiveWindow ? "" : "backdrop-blur-xl ") + "border-b border-white/10 cursor-move select-none shimmer-sweep touch-none",
                        onPointerDown: (j) => ht(b.id, j),
                        onDoubleClick: () => rt(b.id),
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              !b.noIcon && l.jsx("span", {
                                className: "w-5 h-5 text-white/65 [&>svg]:w-full [&>svg]:h-full",
                                children: b.icon,
                              }),
                              l.jsx("span", {
                                className: "text-sm text-white/80 font-medium",
                                children: b.title,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              l.jsx("button", {
                                onClick: (j) => {
                                  j.stopPropagation();
                                  const doClose = () => G(b.id);
                                  if (Yo && !isActiveWindow) { ke(b.id); setTimeout(doClose, 50); return; }
                                  if (b.id === "paint" && window.__lingjie_paint_dirty) {
                                    setPaintCloseConfirm(b.id);
                                    return;
                                  }
                                  doClose();
                                },
                                className:
                                  "w-6 h-6 rounded-full flex items-center justify-center hover:brightness-110 transition-all shrink-0",
                                style: { backgroundColor: "#ff5f57" },
                                title: "关闭",
                                children: l.jsx(It, { className: "w-3 h-3 text-white" }),
                              }),
                              !b.noMinMax && l.jsx("button", {
                                onClick: (j) => {
                                  (j.stopPropagation(), ne(b.id));
                                },
                                className:
                                  "w-6 h-6 rounded-full flex items-center justify-center hover:brightness-110 transition-all shrink-0",
                                style: { backgroundColor: "#febc2e" },
                                title: "最小化",
                                children: l.jsx(Zf, { className: "w-3 h-3 text-white" }),
                              }),
                              !b.noMinMax && l.jsx("button", {
                                onClick: (j) => {
                                  j.stopPropagation();
                                  if (Yo && !isActiveWindow) { ke(b.id); setTimeout(() => rt(b.id), 50); return; }
                                  rt(b.id);
                                },
                                className:
                                  "w-6 h-6 rounded-full flex items-center justify-center hover:brightness-110 transition-all shrink-0",
                                style: { backgroundColor: "#28c840" },
                                title: b.isMaximized ? "还原" : "最大化",
                                children: l.jsx(om, { className: "w-3 h-3 text-white" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Yo && !isActiveWindow
                        ? l.jsx("div", { className: "flex-1 overflow-hidden", style: { backgroundColor: "rgba(0,0,0,0.5)" } })
                        : l.jsx("div", { className: "flex-1 overflow-hidden", children: b.component }),
                      !b.isMaximized && l.jsx(l.Fragment, { children: [
                        l.jsx("div", {
                          className: "absolute top-0 right-0 h-full touch-none",
                          style: { width: "7.5px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 50 },
                          onPointerDown: (j) => { j.stopPropagation(); He(b.id, j, "r", b.minWidth, b.minHeight); },
                        }, "rh-r"),
                        l.jsx("div", {
                          className: "absolute bottom-0 left-0 w-full touch-none",
                          style: { height: "7.5px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 50 },
                          onPointerDown: (j) => { j.stopPropagation(); He(b.id, j, "b", b.minWidth, b.minHeight); },
                        }, "rh-b"),
                        l.jsx("div", {
                          className: "absolute top-0 left-0 h-full touch-none",
                          style: { width: "7.5px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 50 },
                          onPointerDown: (j) => { j.stopPropagation(); He(b.id, j, "l", b.minWidth, b.minHeight); },
                        }, "rh-l"),
                        l.jsx("div", {
                          className: "absolute bottom-0 right-0 touch-none",
                          style: { width: "12px", height: "12px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 51 },
                          onPointerDown: (j) => { j.stopPropagation(); He(b.id, j, "br", b.minWidth, b.minHeight); },
                        }, "rh-br"),
                        l.jsx("div", {
                          className: "absolute bottom-0 left-0 touch-none",
                          style: { width: "12px", height: "12px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 51 },
                          onPointerDown: (j) => { j.stopPropagation(); He(b.id, j, "bl", b.minWidth, b.minHeight); },
                        }, "rh-bl"),
                      ]}),
                    ],
                  },
                  b.id,
                );
              }
            ),
            e.length > 5 && (!winLimitDismissed || winLimitClosing) && (() => {
              const activeWin = e.find((w) => w.zIndex === n && !w.isMinimized);
              return l.jsxs("div", {
                style: {
                  position: "fixed",
                  bottom: "96px",
                  right: "16px",
                  zIndex: 500,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "6px",
                  animation: winLimitClosing ? "lingjieFadeOutDown 0.2s ease-in forwards" : "lingjieBootFadeIn 0.3s ease-out",
                },
                onAnimationEnd: winLimitClosing ? () => { setWinLimitDismissed(!0); setWinLimitClosing(!1); } : undefined,
                onClick: (ev) => ev.stopPropagation(),
                children: [
                  l.jsxs("div", {
                    style: {
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      borderRadius: "16px",
                      padding: "14px 20px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      maxWidth: "320px",
                      position: "relative",
                    },
                    children: [
                      l.jsx("button", {
                        onClick: (ev) => { ev.stopPropagation(); setWinLimitClosing(!0); },
                        style: {
                          position: "absolute",
                          top: "6px",
                          right: "8px",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "none",
                          background: "rgba(0,0,0,0.06)",
                          color: "rgba(0,0,0,0.4)",
                          fontSize: "12px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          lineHeight: 1,
                        },
                        children: "\u2715",
                      }),
                      l.jsx("div", {
                        style: {
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "#FFD60A",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#000",
                          lineHeight: 1,
                        },
                        children: "!",
                      }),
                      l.jsx("p", {
                        style: { margin: 0, fontSize: "13px", fontWeight: 600, color: "#1a1a1a", textAlign: "center" },
                        children: "\u5f53\u524d\u7a97\u53e3\u6570\u91cf\u5df2\u8d85\u8fc7 5 \u4e2a\uff0c\u53ef\u80fd\u4f1a\u5361\u987f",
                      }),
                      l.jsx("p", {
                        style: { margin: 0, fontSize: "11px", color: "#FF3B30", textAlign: "center" },
                        children: "\u5efa\u8bae\u5173\u95ed\u90e8\u5206\u7a97\u53e3\u4ee5\u91ca\u653e\u7cfb\u7edf\u8d44\u6e90",
                      }),
                      l.jsxs("div", {
                        style: { display: "flex", gap: "8px", marginTop: "4px" },
                        children: [
                          l.jsx("button", {
                            onClick: (ev) => {
                              ev.stopPropagation();
                              if (activeWin) { G(activeWin.id); }
                            },
                            style: {
                              border: "1px solid #FF3B30",
                              borderRadius: "10px",
                              background: "transparent",
                              color: "#FF3B30",
                              fontSize: "12px",
                              fontWeight: 500,
                              padding: "6px 14px",
                              cursor: "pointer",
                              whiteSpace: "nowrap",
                            },
                            children: "\u5173\u95ed\u5f53\u524d\u7a97\u53e3",
                          }),
                          l.jsx("button", {
                            onClick: (ev) => {
                              ev.stopPropagation();
                              if (activeWin) {
                                t((w) => w.filter((win) => win.id === activeWin.id));
                                setWinLimitClosing(!0);
                              }
                            },
                            style: {
                              border: "1px solid #FF3B30",
                              borderRadius: "10px",
                              background: "transparent",
                              color: "#FF3B30",
                              fontSize: "12px",
                              fontWeight: 500,
                              padding: "6px 14px",
                              cursor: "pointer",
                              whiteSpace: "nowrap",
                            },
                            children: "\u5173\u95ed\u5176\u4ed6\u7a97\u53e3",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            })(),
            (x || searchClosing) &&
              l.jsx("div", {
                className:
                  "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-32 z-[1000] " + (searchClosing ? "lingjie-anim-fade-out" : "animate-scale-in"),
                onAnimationEnd: searchClosing ? () => { C(!1); setSearchClosing(!1); } : undefined,
                onClick: () => setSearchClosing(!0),
                children: l.jsxs("div", {
                  className:
                    "w-full max-w-2xl bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl " + (searchClosing ? "lingjie-anim-scale-out" : "animate-fade-in-up"),
                  onClick: (b) => b.stopPropagation(),
                  children: [
                    l.jsxs("div", {
                      className: "flex items-center px-4 py-4 border-b border-white/10",
                      children: [
                        l.jsx(Xt, { className: "w-5 h-5 text-white/40 mr-3" }),
                        l.jsx("input", {
                          type: "text",
                          value: v,
                          onChange: (b) => S(b.target.value),
                          placeholder: "搜索应用、文件、设置...",
                          className:
                            "flex-1 bg-transparent outline-none border-none text-white text-lg placeholder-white/40",
                          autoFocus: !0,
                        }),
                      ],
                    }),
                    v &&
                      l.jsxs("div", {
                        className: "p-4",
                        children: [
                          l.jsx("p", { className: "text-xs text-white/40 mb-2", children: "应用" }),
                          l.jsx("div", {
                            className: "grid grid-cols-4 gap-2",
                            children: B.filter((b) => b.title.includes(v)).map((b) =>
                              l.jsxs(
                                "button",
                                {
                                  onClick: () => {
                                    (F(b), C(!1), S(""));
                                  },
                                  className:
                                    "flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95",
                                  children: [
                                    l.jsx("span", {
                                      className: "text-white mb-1 [&>svg]:w-8 [&>svg]:h-8",
                                      children: b.icon,
                                    }),
                                    l.jsx("span", {
                                      className: "text-xs text-white/70",
                                      children: b.title,
                                    }),
                                  ],
                                },
                                b.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            a &&
              l.jsxs("div", {
                className:
                  "fixed bottom-28 left-1/2 -translate-x-1/2 w-[560px] max-w-[calc(100vw-32px)] rounded-[32px] z-[999] overflow-hidden animate-fade-in-up",
                style: {
                  background: "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 28px 80px rgba(0,0,0,0.35), inset 0 1px rgba(255,255,255,0.25)",
                  backdropFilter: "blur(30px) saturate(160%)",
                  WebkitBackdropFilter: "blur(30px) saturate(160%)",
                },
                onClick: (b) => b.stopPropagation(),
                children: [
                  l.jsx("div", { className: "lingjie-nebula-flow-layer" }),
                  l.jsx("div", {
                    className: "p-4 border-b border-white/10 relative z-[1]",
                    children: l.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        l.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            l.jsx("div", {
                              className:
                                "w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 rounded-2xl flex items-center justify-center animate-glow-pulse",
                              children: l.jsx(ys, { className: "w-6 h-6 text-white" }),
                            }),
                            l.jsxs("div", {
                              children: [
                                l.jsx("p", {
                                  className: "text-white font-medium",
                                  children: "应用星云",
                                }),
                                l.jsx("p", {
                                  className: "text-xs text-white/50",
                                  children: "灵界 OS 的空间应用入口",
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsx("button", {
                          onClick: () => { c(!1); m(!1); },
                          className:
                            "p-2 rounded-full text-white/45 hover:text-white hover:bg-white/10 transition-all",
                          children: l.jsx(It, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("div", {
                    className: "grid grid-cols-4 gap-3 p-5 overflow-auto relative z-[1]",
                    children: appItems.map((b) => {
                      const j = e.some(($) => $.id === b.id && !$.isMinimized);
                      return l.jsxs(
                        "button",
                        {
                          onClick: () => F(b),
                          className:
                            "relative flex flex-col items-center p-4 rounded-2xl bg-white/5 hover:bg-white/12 transition-all hover:-translate-y-1 hover:scale-105 active:scale-95",
                          children: [
                            l.jsx("span", {
                              className: "text-white/75 mb-2 [&>svg]:w-8 [&>svg]:h-8",
                              children: b.icon,
                            }),
                            l.jsx("span", {
                              className: "text-xs text-white/80",
                              children: b.title,
                            }),
                            j &&
                              l.jsx("span", {
                                className:
                                  "absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-300 animate-pulse",
                              }),
                          ],
                        },
                        b.id,
                      );
                    }),
                  }),
                ],
              }),
            l.jsxs("div", {
              className:
                "fixed bottom-5 left-1/2 -translate-x-1/2 h-16 macos-glass rounded-full flex items-center gap-2 px-4 z-[998] lingjie-dock-glow",
              children: [
                l.jsx("div", { className: "lingjie-dock-flow-layer" }),
                l.jsx("button", {
                  onClick: (b) => {
                    b.stopPropagation();
                    c(!a);
                    if (u) setPowerPanel2Closing(!0);
                    if (x) setSearchClosing(!0);
                    if (Qt) setWidgetMenuClosing(!0);
                  },
                  className: `lingjie-dock-btn w-11 h-11 rounded-full transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center ${a ? "bg-white/20 text-white backdrop-blur-md" : "bg-white/10 text-white hover:bg-white/20"}`,
                  children: l.jsx(ys, { className: "w-5 h-5" }),
                }),
                l.jsx("button", {
                  onClick: (b) => {
                    b.stopPropagation();
                    if (x) { setSearchClosing(!0); }
                    else { C(!0); }
                  },
                  className: `lingjie-dock-btn w-11 h-11 rounded-full transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center ${(x || searchClosing) ? "bg-white/20 text-white backdrop-blur-md" : "bg-white/10 text-white/75 hover:bg-white/20 hover:text-white"}`,
                  children: l.jsx(Xt, { className: "w-5 h-5" }),
                }),
                l.jsx("div", { className: "w-px h-8 bg-white/15 mx-1" }),
                B.slice(0, 8).map((b) => {
                  const j = e.find((K) => K.id === b.id),
                    $ = (j == null ? void 0 : j.zIndex) === n && !(j != null && j.isMinimized);
                  return l.jsxs(
                    "button",
                    {
                      onClick: (K) => {
                        (K.stopPropagation(), F(b));
                      },
                      className: `lingjie-dock-btn relative w-11 h-11 rounded-full transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center ${$ ? "bg-white/20 text-white shadow-lg backdrop-blur-md" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"}`,
                      title: b.title,
                      children: [
                        l.jsx("span", {
                          className: "w-5 h-5 block [&>svg]:w-full [&>svg]:h-full",
                          children: b.icon,
                        }),
                        j &&
                          l.jsx("span", {
                            className: `absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 ${j.isMinimized ? "w-1.5 h-1.5 bg-white/35" : "w-5 h-1 bg-cyan-300 lingjie-running-dot"}`,
                          }),
                      ],
                    },
                    b.id,
                  );
                }),
              ],
            }),
            l.jsxs("div", {
              className: "fixed bottom-5 right-5 z-[998] flex items-center gap-2",
              onClick: () => {
                if (u) setPowerPanel2Closing(!0);
                if (timePanel) setTimePanelClosing(!0);
              },
              children: [
                (u || powerPanel2Closing) &&
                  l.jsxs("div", {
                    className:
                      "absolute bottom-16 right-0 w-72 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-3 " + (powerPanel2Closing ? "lingjie-anim-fade-out-down" : "animate-fade-in-up"),
                    onAnimationEnd: powerPanel2Closing ? () => { m(!1); setPowerPanel2Closing(!1); } : undefined,
                    onClick: (b) => b.stopPropagation(),
                    children: [
                      l.jsx("div", {
                        className: "text-[10px] text-black/40 uppercase tracking-widest px-4 py-2",
                        children: "灵界 OS · 电源控制",
                      }),
                      l.jsxs("button", {
                        onClick: () => {
                          (y(!0), m(!1));
                        },
                        className:
                          "w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-black/80 hover:bg-black/5 transition-all",
                        children: [l.jsx(ld, { className: "w-4 h-4 text-black" }), "锁定空间"],
                      }),
                      l.jsxs("button", {
                        onClick: () => {
                          if (lockoutUntil > Date.now()) return;
                          (m(!1), w("restart"), f("closing"), d(0));
                        },
                        className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all " + (lockoutUntil > Date.now() ? "text-black/25 cursor-not-allowed" : "text-black/80 hover:bg-black/5 hover:text-black"),
                        children: [
                          l.jsx(sd, { className: "w-4 h-4 text-black" }),
                          "灵界重启",
                          l.jsx("span", {
                            className: "ml-auto text-[10px] text-black/25",
                            children: "↻",
                          }),
                        ],
                      }),
                      l.jsxs("button", {
                        onClick: () => {
                          if (lockoutUntil > Date.now()) return;
                          (m(!1), w("shutdown"));
                        },
                        className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all " + (lockoutUntil > Date.now() ? "text-black/25 cursor-not-allowed" : "text-black/80 hover:bg-black/5 hover:text-black"),
                        children: [
                          l.jsx(Lo, { className: "w-4 h-4 text-black" }),
                          "关闭灵界",
                          l.jsx("span", {
                            className: "ml-auto text-[10px] text-black/25",
                            children: "⟲",
                          }),
                        ],
                      }),
                      l.jsxs("button", {
                        onClick: () => {
                          if (lockoutUntil > Date.now()) return;
                          setTimerMenu(!timerMenu);
                          setTimerMenuClosing(!1);
                        },
                        className: "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-black/80 hover:bg-black/5 hover:text-black",
                        children: [
                          l.jsxs("svg", { className: "w-4 h-4 text-black", viewBox: "0 0 24 24", fill: "currentColor", children: [l.jsx("circle", { cx: "5", cy: "12", r: "2", key: "d1" }), l.jsx("circle", { cx: "12", cy: "12", r: "2", key: "d2" }), l.jsx("circle", { cx: "19", cy: "12", r: "2", key: "d3" })] }),
                          "定时重启/关机",
                        ],
                      }),
                      timerMenu && l.jsxs("div", {
                        className: "mt-1 px-4 py-3 bg-black/5 rounded-2xl space-y-2",
                        onClick: (b) => b.stopPropagation(),
                        children: [
                          l.jsx("input", {
                            type: "number",
                            min: "0",
                            max: "1000",
                            placeholder: "0~1000 秒",
                            value: timerInput,
                            onChange: (b) => { const v = Math.min(1000, Math.max(0, parseInt(b.target.value, 10) || 0)); setTimerInput(String(v)); },
                            className: "w-full text-center text-sm bg-white/60 rounded-lg px-3 py-2 outline-none text-black",
                          }),
                          l.jsxs("div", { className: "flex gap-2", children: [
                            l.jsx("button", {
                              onClick: () => {
                                const sec = parseInt(timerInput, 10) || 0;
                                if (sec <= 0 || sec > 1000) return;
                                timerActionRef.current = "restart";
                                setTimerAction("restart");
                                setTimerCountdown(sec);
                                setTimerMenu(!1);
                                setTimerInput("");
                                m(!1);
                              },
                              className: "flex-1 px-3 py-2 text-xs rounded-lg bg-blue-500/80 text-white hover:bg-blue-500 transition-all",
                              children: "定时重启",
                            }),
                            l.jsx("button", {
                              onClick: () => {
                                const sec = parseInt(timerInput, 10) || 0;
                                if (sec <= 0 || sec > 1000) return;
                                timerActionRef.current = "shutdown";
                                setTimerAction("shutdown");
                                setTimerCountdown(sec);
                                setTimerMenu(!1);
                                setTimerInput("");
                                m(!1);
                              },
                              className: "flex-1 px-3 py-2 text-xs rounded-lg bg-red-500/80 text-white hover:bg-red-500 transition-all",
                              children: "定时关机",
                            }),
                          ]}),
                        ],
                      }),
                      lockoutUntil > Date.now() && l.jsx("div", {
                        className: "px-4 py-2 text-[11px] text-red-500/80 text-center",
                        children: "系统已锁定，无法重启或关机",
                      }),
                    ],
                  }),
                (timePanel || timePanelClosing) &&
                  l.jsxs("div", {
                    className:
                      "absolute bottom-16 right-0 w-80 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-4 " + (timePanelClosing ? "lingjie-anim-fade-out-down" : "animate-fade-in-up"),
                    onAnimationEnd: timePanelClosing ? () => { setTimePanel(!1); setTimePanelClosing(!1); } : undefined,
                    onClick: (b) => b.stopPropagation(),
                    children: [
                      l.jsx("div", {
                        className: "text-[10px] text-black/40 uppercase tracking-widest px-2 py-2",
                        children: "灵界 OS · 时间校准",
                      }),
                      l.jsxs("div", {
                        className: "px-2 py-3",
                        children: [
                          l.jsx("div", {
                            className: "text-sm text-black/70 mb-3",
                            children: "当前时间：",
                          }),
                          l.jsx("div", {
                            className: "text-2xl font-bold text-black mb-1",
                            children: Xe(s),
                          }),
                          l.jsx("div", {
                            className: "text-xs text-black/50 mb-4",
                            children: en(s),
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              const fetchWithTimeout = (url, options, ms) => {
                                const controller = new AbortController();
                                const timer = setTimeout(() => controller.abort(), ms);
                                return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timer));
                              };
                              const tryApis = [
                                {
                                  name: "cloudflare",
                                  fetch: () => {
                                    const t0 = Date.now();
                                    return fetchWithTimeout("https://cloudflare.com/cdn-cgi/trace", {}, 5000)
                                      .then((r) => r.text())
                                      .then((text) => {
                                        const t1 = Date.now();
                                        const m = text.match(/ts=([\d.]+)/);
                                        if (!m) throw new Error("invalid");
                                        const serverTime = new Date(parseFloat(m[1]) * 1000);
                                        if (isNaN(serverTime.getTime())) throw new Error("invalid");
                                        const rtt = t1 - t0;
                                        const localTime = t0 + rtt / 2;
                                        return { offset: serverTime.getTime() - localTime, serverTime };
                                      });
                                  },
                                },
                                {
                                  name: "jsdelivr",
                                  fetch: () => {
                                    const t0 = Date.now();
                                    return fetchWithTimeout("https://cdn.jsdelivr.net/npm/react/package.json", { method: "HEAD" }, 5000)
                                      .then((response) => {
                                        const t1 = Date.now();
                                        const dateHeader = response.headers.get("Date");
                                        if (!dateHeader) throw new Error("no date header");
                                        const serverTime = new Date(dateHeader);
                                        if (isNaN(serverTime.getTime())) throw new Error("invalid");
                                        const rtt = t1 - t0;
                                        const localTime = t0 + rtt / 2;
                                        return { offset: serverTime.getTime() - localTime, serverTime };
                                      });
                                  },
                                },
                                {
                                  name: "worldtime",
                                  fetch: () => {
                                    const t0 = Date.now();
                                    return fetchWithTimeout("https://worldtimeapi.org/api/timezone/Asia/Shanghai", {}, 5000)
                                      .then((r) => r.json())
                                      .then((data) => {
                                        const t1 = Date.now();
                                        const serverTime = data.utc_datetime ? new Date(data.utc_datetime) : null;
                                        if (!serverTime || isNaN(serverTime.getTime())) throw new Error("invalid");
                                        const rtt = t1 - t0;
                                        const localTime = t0 + rtt / 2;
                                        return { offset: serverTime.getTime() - localTime, serverTime };
                                      });
                                  },
                                },
                              ];
                              let currentIndex = 0;
                              const tryNext = () => {
                                if (currentIndex >= tryApis.length) {
                                  setTimeCalibrated(!1);
                                  alert("时间校准失败：所有时间服务器均不可用，请检查网络连接");
                                  return;
                                }
                                const api = tryApis[currentIndex];
                                api.fetch()
                                  .then(({ offset, serverTime }) => {
                                    const offsetMin = Math.round(offset / 1000 / 60 * 10) / 10;
                                    if (Math.abs(offset) > 300000) {
                                      alert(`校准结果与设备时间相差 ${Math.abs(offsetMin)} 分钟，时间源 [${api.name}] 可能异常，请谨慎使用`);
                                    }
                                    timeOffsetRef.current = offset;
                                    setTimeOffset(offset);
                                    i(new Date(Date.now() + offset));
                                    setTimeCalibrated(!0);
                                    try {
                                      localStorage.setItem("lingjie-time-offset", String(offset));
                                      localStorage.setItem("lingjie-time-source", api.name);
                                      localStorage.setItem("lingjie-time-calibrated-at", String(Date.now()));
                                    } catch (e) {}
                                    setTimeout(() => setTimeCalibrated(!1), 2000);
                                    window.dispatchEvent(new CustomEvent("lingjie-time-calibrated", { detail: serverTime.getTime() }));
                                  })
                                  .catch(() => {
                                    currentIndex++;
                                    tryNext();
                                  });
                              };
                              tryNext();
                            },
                            className:
                              "w-full px-4 py-3 bg-blue-500/90 hover:bg-blue-500 text-white rounded-2xl transition-all text-sm font-medium",
                            children: timeCalibrated ? "✓ 校准成功" : "校准时间（北京时间）",
                          }),
                        ],
                      }),
                    ],
                  }),
                l.jsxs("div", {
                  className:
                    "macos-glass rounded-full h-14 px-4 flex items-center gap-3 text-white/70 relative overflow-hidden lingjie-status-glow",
                  children: [
                    l.jsx("div", { className: "lingjie-island-flow-layer" }),
                    l.jsx(Ml, { className: "w-4 h-4 relative z-[1]" }),
                    l.jsx(El, { className: "w-4 h-4 relative z-[1]" }),
                    l.jsx(Xc, { className: "w-4 h-4 relative z-[1]" }),
                    l.jsxs("button", {
                      onClick: (b) => {
                        b.stopPropagation();
                        window.dispatchEvent(new CustomEvent("lingjie-open-time-calibration"));
                        if (u) setPowerPanel2Closing(!0); else m(!1);
                        c(!1);
                      },
                      className: "text-right leading-tight hover:opacity-80 transition-opacity relative z-[1]",
                      children: [
                        l.jsx("p", { className: "text-xs text-white", children: Xe(s) }),
                        l.jsx("p", { className: "text-[10px] text-white/55", children: en(s) }),
                      ],
                    }),
                    l.jsx("button", {
                      onClick: (b) => {
                        b.stopPropagation();
                        if (u) { setPowerPanel2Closing(!0); }
                        else { m(!0); }
                        c(!1);
                        if (timePanel) setTimePanelClosing(!0); else setTimePanel(!1);
                      },
                      className:
                        "w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center relative z-[1]",
                      children: l.jsx(Lo, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
              ],
            }),
            p === "shutdown" && l.jsx(Bm, {}),
            p === "restart" && l.jsx(Am, { mode: "restart" }),
            p === "factory-reset" && l.jsx(Am, { mode: "factory-reset" }),
            gestureSetup &&
              l.jsx("div", {
                className: "fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm lingjie-anim-fade-in",
                style: { zIndex: 2147483647 },
                onClick: () => { setGestureSetup(!1); setGestureError(""); },
                children: l.jsxs("div", {
                  className: "bg-gray-900/90 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl p-8 animate-scale-in",
                  onClick: (b) => b.stopPropagation(),
                  children: [
                    l.jsx("h3", {
                      className: "text-white text-lg font-medium text-center mb-2",
                      children: gestureSetupPhase === "draw" ? "绘制手势图案" : (gestureSetupPhase === "verify-none" || gestureSetupPhase === "verify-switch-pwd" || gestureSetupPhase === "verify-modify" || gestureSetupPhase === "verify-factory-reset" || gestureSetupPhase === "verify-sensitive") ? "验证手势" : "确认手势图案",
                    }),
                    l.jsx("p", {
                      className: "text-white/50 text-xs text-center mb-6",
                      children: gestureSetupPhase === "draw" ? "连接至少4个点形成图案" : gestureSetupPhase === "verify-none" ? "请绘制当前手势以验证身份" : gestureSetupPhase === "verify-switch-pwd" ? "请绘制当前手势以切换到密码模式" : gestureSetupPhase === "verify-modify" ? "请绘制当前手势以验证身份" : gestureSetupPhase === "verify-factory-reset" ? "恢复出厂设置需要验证手势" : gestureSetupPhase === "verify-sensitive" ? "此操作需要验证手势" : "请再次绘制相同图案",
                    }),
                    l.jsx(GesturePad, {
                      onComplete: (steps) => {
                        if (gestureSetupPhase === "verify-none") {
                          if (steps.join(",") === gesturePwd) {
                            setGesturePwd("");
                            try { localStorage.removeItem("lingjie-gesture-lock"); } catch(e) {}
                            setSecMode("none");
                            try { localStorage.setItem("lingjie-sec-mode", "none"); } catch(e) {}
                            setGestureSetup(!1);
                            setGestureError("");
                          } else {
                            setGestureError("手势错误，请重试");
                            setGestureSteps([]);
                          }
                        } else if (gestureSetupPhase === "verify-switch-pwd") {
                          if (steps.join(",") === gesturePwd) {
                            setGestureSetup(!1);
                            setGestureError("");
                            be(!0); $e("step1-new"); ot(""); vt(""); $t(!1); Wt("");
                          } else {
                            setGestureError("手势错误，请重试");
                            setGestureSteps([]);
                          }
                        } else if (gestureSetupPhase === "verify-factory-reset") {
                          if (steps.join(",") === gesturePwd) {
                            setGestureSetup(!1);
                            setGestureError("");
                            doFactoryReset();
                          } else {
                            setGestureError("手势错误，请重试");
                            setGestureSteps([]);
                          }
                        } else if (gestureSetupPhase === "verify-sensitive") {
                          if (steps.join(",") === gesturePwd) {
                            const fn = _ljSensPending.fn;
                            _ljSensPending.fn = null;
                            setGestureSetup(!1);
                            setGestureError("");
                            if (fn) fn();
                          } else {
                            setGestureError("手势错误，请重试");
                            setGestureSteps([]);
                          }
                        } else if (gestureSetupPhase === "verify-modify") {
                          if (steps.join(",") === gesturePwd) {
                            setGestureSetupPhase("draw");
                            setGestureError("");
                            setGestureSteps([]);
                          } else {
                            setGestureError("手势错误，请重试");
                            setGestureSteps([]);
                          }
                        } else if (gestureSetupPhase === "draw") {
                          if (steps.length < 4) {
                            setGestureError("至少连接4个点");
                            return;
                          }
                          setGestureSteps(steps);
                          setGestureSetupPhase("confirm");
                          setGestureError("");
                        } else {
                          if (steps.join(",") === gestureSteps.join(",")) {
                            const pwd = steps.join(",");
                            setGesturePwd(pwd);
                            try { localStorage.setItem("lingjie-gesture-lock", pwd); } catch(e) {}
                            try { localStorage.setItem("lingjie-sec-mode", "gesture"); } catch(e) {}
                            try { localStorage.removeItem("lingjie-lock-password"); } catch(e) {}
                            Ye("");
                            setSecMode("gesture");
                            setGestureSetup(!1);
                            setGestureError("");
                          } else {
                            setGestureError("两次图案不一致，请重新绘制");
                            setGestureSteps([]);
                            setGestureSetupPhase("draw");
                          }
                        }
                      },
                      error: gestureError,
                    }),
                    l.jsxs("div", {
                      className: "flex gap-2 mt-4",
                      children: [
                        l.jsx("button", {
                onClick: () => { _ljSensPending.fn = null; setGestureSetup(!1); setGestureError(""); },
                          className: "flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 rounded-xl transition-colors text-sm",
                          children: "取消",
                        }),
                        gestureError && l.jsx("p", { className: "text-red-500 text-xs text-center w-full", children: gestureError }),
                      ],
                    }),
                  ],
                }),
              }),
            ae &&
              l.jsx("div", {
                className:
                  "fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm lingjie-anim-fade-in",
                style: { zIndex: 2147483647 },
                onClick: () => be(!1),
                children: l.jsxs("div", {
                  className:
                    "w-80 bg-black/50 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl p-6 animate-scale-in",
                  onClick: (b) => b.stopPropagation(),
                  children: [
                    l.jsx("h3", {
                      className: "text-white text-lg font-medium text-center mb-1",
                      children:
                        Fe === "step1-old"
                          ? "输入旧密码"
                          : Fe === "clear-old"
                            ? "清除密码"
                            : Fe === "verify-switch-gesture"
                              ? "验证密码"
                              : Fe === "step1-new"
                                ? ge ? "输入新密码" : "设置新密码"
                                : "确认新密码",
                    }),
                    l.jsx("p", {
                      className: "text-white/40 text-xs text-center mb-4",
                      children:
                        Fe === "step1-old"
                          ? "请输入当前的锁屏密码"
                          : Fe === "clear-old"
                            ? "请输入当前密码以确认清除"
                            : Fe === "verify-switch-gesture"
                              ? "请输入密码以切换到手势模式"
                              : Fe === "step1-new"
                                ? "请输入4位密码"
                                : "请再次输入新密码",
                    }),
                    l.jsx("div", {
                      onClick: () => setPanelKb(!0),
                      className: "w-full px-4 py-3 bg-black/30 border rounded-xl text-white text-center text-2xl tracking-[0.5em] outline-none transition-colors cursor-pointer select-none",
                      style: bt
                        ? { borderColor: "rgba(248, 113, 113, 0.6)" }
                        : { borderColor: "rgba(255,255,255,0.2)" },
                      children: Ie.length > 0 ? "•".repeat(Ie.length) : l.jsx("span", { className: "text-white/30", children: "输入密码" })
                    }),
                    kt &&
                      l.jsx("p", {
                        className: "text-red-500 text-sm mt-2 text-center",
                        children: kt,
                      }),
                    l.jsxs("div", {
                      className: "flex gap-2 mt-4",
                      children: [
                        l.jsx("button", {
                          onClick: () => be(!1),
                          className:
                            "flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 rounded-xl transition-colors text-sm",
                          children: "取消",
                        }),
                        l.jsx("button", {
                          onClick: handlePwdConfirm,
                          className:
                            "flex-1 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-colors text-sm",
                          children: Fe === "clear-old" ? "清除" : Fe === "verify-switch-gesture" ? "验证" : "确定",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
      }),
      paintCloseConfirm &&
        l.jsx("div", {
          className: "lingjie-anim-fade-in",
          style: { position: "fixed", inset: 0, zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" },
          onClick: () => setPaintCloseConfirm(!1),
          children: l.jsxs("div", {
            className: "lingjie-anim-scale-in",
            style: { background: "#fff", borderRadius: 16, padding: "24px 24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, maxWidth: 360, width: "calc(100vw - 48px)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" },
            onClick: (b) => b.stopPropagation(),
            children: [
              l.jsx("div", {
                style: { width: 48, height: 48, borderRadius: "50%", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center" },
                children: l.jsx("svg", {
                  style: { width: 24, height: 24, color: "#f59e0b" },
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: l.jsx("path", { d: "M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
                }),
              }),
              l.jsx("p", {
                style: { color: "#000", fontSize: 16, fontWeight: 500, textAlign: "center", margin: 0 },
                children: "您有未保存的绘画，确认关闭吗？",
              }),
              l.jsxs("div", {
                style: { display: "flex", gap: 12, width: "100%" },
                children: [
                  l.jsx("button", {
                    onClick: () => setPaintCloseConfirm(!1),
                    style: { flex: 1, padding: "12px 16px", borderRadius: 12, background: "#f3f4f6", color: "#374151", fontSize: 14, fontWeight: 500, border: "none", cursor: "pointer" },
                    children: "取消",
                  }),
                  l.jsx("button", {
                    onClick: () => {
                      window.__lingjie_paint_dirty = !1;
                      G(paintCloseConfirm);
                      setPaintCloseConfirm(!1);
                    },
                    style: { flex: 1, padding: "12px 16px", borderRadius: 12, background: "#ef4444", color: "#fff", fontSize: 14, fontWeight: 500, border: "none", cursor: "pointer" },
                    children: "确认关闭",
                  }),
                ],
              }),
            ],
          }),
        }),
      lockKb && l.jsx(Pj, { value: h, onChange: (v) => { k(v); Wt(""); }, onClose: () => setLockKb(!1), onConfirm: () => { if (lockoutUntil > 0) { Wt("密码错误次数过多，请等待倒计时结束"); return; } if (h.length !== 4) { Wt("请输入4位密码"); return; } if (h === ge) { k(""); setLockKb(!1); setUnlocking(!0); setUnlockPhase(!1); requestAnimationFrame(() => { try { setUnlockPhase(!0); } catch(_) {} }); setTimeout(() => { try { y(!1); } catch(_) {} }, 650); setTimeout(() => { try { setUnlocking(!1); setUnlockPhase(!1); } catch(_) {} }, 750); setLockFailCount(0); setLockoutCount(0); try { localStorage.removeItem("lingjie-lockout-until"); localStorage.removeItem("lingjie-lockout-count"); localStorage.removeItem("lingjie-lock-fail-count"); } catch(e) {} } else { const newFail = lockFailCount + 1; if (newFail >= 3) { const newLockoutCount = lockoutCount + 1; const dur = newLockoutCount === 1 ? 30 : 60; const until = Date.now() + dur * 1000; setLockoutUntil(until); setLockoutCount(newLockoutCount); setLockFailCount(0); setLockCountdown(dur); Wt("密码错误次数过多，已锁定"); try { localStorage.setItem("lingjie-lockout-until", until.toString()); localStorage.setItem("lingjie-lockout-count", newLockoutCount.toString()); localStorage.removeItem("lingjie-lock-fail-count"); } catch(e) {} } else { setLockFailCount(newFail); Wt("密码错误（剩余 " + (3 - newFail) + " 次机会）"); try { localStorage.setItem("lingjie-lock-fail-count", newFail.toString()); } catch(e) {} } k(""); } }, title: "输入密码" }),
      panelKb && l.jsx(Pj, { value: Ie, onChange: (v) => { ot(v); Wt(""); $t(!1); }, onClose: () => setPanelKb(!1), onConfirm: () => { setPanelKb(!1); handlePwdConfirm(); }, title: ge ? "验证密码" : "设置密码" }),
    ],
  });
}
if (!(function(){ try { return sessionStorage.getItem("lingjie-bsod") || sessionStorage.getItem("lingjie-bsod-easter-egg") || sessionStorage.getItem("lingjie-bsod-locked"); } catch(e) { return null; } })()) {
  Zc(document.getElementById("root")).render(l.jsx(N.StrictMode, { children: l.jsx(Um, {}) }));
} else {
  try { window.__LINGJIE_READY = true; } catch(e) {}
}
try { window.__lingjieModuleLoaded && window.__lingjieModuleLoaded(); } catch(e) {}
try { window.__LINGJIE_READY = true; } catch(e) {}
