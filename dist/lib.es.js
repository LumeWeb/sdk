import * as V from "react";
import N, { useContext as F, forwardRef as ve, Children as me, isValidElement as Te, createElement as q, cloneElement as lt, Fragment as Ur, createContext as be, useLayoutEffect as Zr, useEffect as ct, useRef as H, useInsertionEffect as Ht, useCallback as et, useMemo as he, useState as Kr, useId as qt } from "react";
var tt = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function Xr() {
  if (_t)
    return Ee;
  _t = 1;
  var e = N, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, p, f) {
    var d, c = {}, g = null, b = null;
    f !== void 0 && (g = "" + f), p.key !== void 0 && (g = "" + p.key), p.ref !== void 0 && (b = p.ref);
    for (d in p)
      n.call(p, d) && !i.hasOwnProperty(d) && (c[d] = p[d]);
    if (l && l.defaultProps)
      for (d in p = l.defaultProps, p)
        c[d] === void 0 && (c[d] = p[d]);
    return { $$typeof: t, type: l, key: g, ref: b, props: c, _owner: a.current };
  }
  return Ee.Fragment = r, Ee.jsx = s, Ee.jsxs = s, Ee;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Jr() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    var e = N, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), C = Symbol.iterator, E = "@@iterator";
    function A(o) {
      if (o === null || typeof o != "object")
        return null;
      var u = C && o[C] || o[E];
      return typeof u == "function" ? u : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(o) {
      {
        for (var u = arguments.length, m = new Array(u > 1 ? u - 1 : 0), v = 1; v < u; v++)
          m[v - 1] = arguments[v];
        M("error", o, m);
      }
    }
    function M(o, u, m) {
      {
        var v = O.ReactDebugCurrentFrame, R = v.getStackAddendum();
        R !== "" && (u += "%s", m = m.concat([R]));
        var T = m.map(function(S) {
          return String(S);
        });
        T.unshift("Warning: " + u), Function.prototype.apply.call(console[o], console, T);
      }
    }
    var D = !1, se = !1, Y = !1, le = !1, ce = !1, Z;
    Z = Symbol.for("react.module.reference");
    function ye(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === i || ce || o === a || o === f || o === d || le || o === b || D || se || Y || typeof o == "object" && o !== null && (o.$$typeof === g || o.$$typeof === c || o.$$typeof === s || o.$$typeof === l || o.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === Z || o.getModuleId !== void 0));
    }
    function xe(o, u, m) {
      var v = o.displayName;
      if (v)
        return v;
      var R = u.displayName || u.name || "";
      return R !== "" ? m + "(" + R + ")" : m;
    }
    function k(o) {
      return o.displayName || "Context";
    }
    function z(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var u = o;
            return k(u) + ".Consumer";
          case s:
            var m = o;
            return k(m._context) + ".Provider";
          case p:
            return xe(o, o.render, "ForwardRef");
          case c:
            var v = o.displayName || null;
            return v !== null ? v : z(o.type) || "Memo";
          case g: {
            var R = o, T = R._payload, S = R._init;
            try {
              return z(S(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, K = 0, ee, we, ue, X, Ce, J, te;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function Sr() {
      {
        if (K === 0) {
          ee = console.log, we = console.info, ue = console.warn, X = console.error, Ce = console.group, J = console.groupCollapsed, te = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: L,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        K++;
      }
    }
    function Er() {
      {
        if (K--, K === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, o, {
              value: ee
            }),
            info: W({}, o, {
              value: we
            }),
            warn: W({}, o, {
              value: ue
            }),
            error: W({}, o, {
              value: X
            }),
            group: W({}, o, {
              value: Ce
            }),
            groupCollapsed: W({}, o, {
              value: J
            }),
            groupEnd: W({}, o, {
              value: te
            })
          });
        }
        K < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ge = O.ReactCurrentDispatcher, De;
    function Me(o, u, m) {
      {
        if (De === void 0)
          try {
            throw Error();
          } catch (R) {
            var v = R.stack.trim().match(/\n( *(at )?)/);
            De = v && v[1] || "";
          }
        return `
` + De + o;
      }
    }
    var Be = !1, je;
    {
      var Rr = typeof WeakMap == "function" ? WeakMap : Map;
      je = new Rr();
    }
    function bt(o, u) {
      if (!o || Be)
        return "";
      {
        var m = je.get(o);
        if (m !== void 0)
          return m;
      }
      var v;
      Be = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = Ge.current, Ge.current = null, Sr();
      try {
        if (u) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (U) {
              v = U;
            }
            Reflect.construct(o, [], S);
          } else {
            try {
              S.call();
            } catch (U) {
              v = U;
            }
            o.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            v = U;
          }
          o();
        }
      } catch (U) {
        if (U && v && typeof U.stack == "string") {
          for (var x = U.stack.split(`
`), $ = v.stack.split(`
`), _ = x.length - 1, I = $.length - 1; _ >= 1 && I >= 0 && x[_] !== $[I]; )
            I--;
          for (; _ >= 1 && I >= 0; _--, I--)
            if (x[_] !== $[I]) {
              if (_ !== 1 || I !== 1)
                do
                  if (_--, I--, I < 0 || x[_] !== $[I]) {
                    var G = `
` + x[_].replace(" at new ", " at ");
                    return o.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", o.displayName)), typeof o == "function" && je.set(o, G), G;
                  }
                while (_ >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        Be = !1, Ge.current = T, Er(), Error.prepareStackTrace = R;
      }
      var fe = o ? o.displayName || o.name : "", At = fe ? Me(fe) : "";
      return typeof o == "function" && je.set(o, At), At;
    }
    function Pr(o, u, m) {
      return bt(o, !1);
    }
    function kr(o) {
      var u = o.prototype;
      return !!(u && u.isReactComponent);
    }
    function Ae(o, u, m) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return bt(o, kr(o));
      if (typeof o == "string")
        return Me(o);
      switch (o) {
        case f:
          return Me("Suspense");
        case d:
          return Me("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case p:
            return Pr(o.render);
          case c:
            return Ae(o.type, u, m);
          case g: {
            var v = o, R = v._payload, T = v._init;
            try {
              return Ae(T(R), u, m);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, yt = {}, xt = O.ReactDebugCurrentFrame;
    function Oe(o) {
      if (o) {
        var u = o._owner, m = Ae(o.type, o._source, u ? u.type : null);
        xt.setExtraStackFrame(m);
      } else
        xt.setExtraStackFrame(null);
    }
    function Tr(o, u, m, v, R) {
      {
        var T = Function.call.bind(_e);
        for (var S in o)
          if (T(o, S)) {
            var x = void 0;
            try {
              if (typeof o[S] != "function") {
                var $ = Error((v || "React class") + ": " + m + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              x = o[S](u, S, v, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              x = _;
            }
            x && !(x instanceof Error) && (Oe(R), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", m, S, typeof x), Oe(null)), x instanceof Error && !(x.message in yt) && (yt[x.message] = !0, Oe(R), h("Failed %s type: %s", m, x.message), Oe(null));
          }
      }
    }
    var Mr = Array.isArray;
    function He(o) {
      return Mr(o);
    }
    function jr(o) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, m = u && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return m;
      }
    }
    function Ar(o) {
      try {
        return wt(o), !1;
      } catch {
        return !0;
      }
    }
    function wt(o) {
      return "" + o;
    }
    function Ct(o) {
      if (Ar(o))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jr(o)), wt(o);
    }
    var Se = O.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, St, Et, qe;
    qe = {};
    function Or(o) {
      if (_e.call(o, "ref")) {
        var u = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ir(o) {
      if (_e.call(o, "key")) {
        var u = Object.getOwnPropertyDescriptor(o, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Vr(o, u) {
      if (typeof o.ref == "string" && Se.current && u && Se.current.stateNode !== u) {
        var m = z(Se.current.type);
        qe[m] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(Se.current.type), o.ref), qe[m] = !0);
      }
    }
    function Lr(o, u) {
      {
        var m = function() {
          St || (St = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        m.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function $r(o, u) {
      {
        var m = function() {
          Et || (Et = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        m.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Nr = function(o, u, m, v, R, T, S) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: u,
        ref: m,
        props: S,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function Fr(o, u, m, v, R) {
      {
        var T, S = {}, x = null, $ = null;
        m !== void 0 && (Ct(m), x = "" + m), Ir(u) && (Ct(u.key), x = "" + u.key), Or(u) && ($ = u.ref, Vr(u, R));
        for (T in u)
          _e.call(u, T) && !_r.hasOwnProperty(T) && (S[T] = u[T]);
        if (o && o.defaultProps) {
          var _ = o.defaultProps;
          for (T in _)
            S[T] === void 0 && (S[T] = _[T]);
        }
        if (x || $) {
          var I = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          x && Lr(S, I), $ && $r(S, I);
        }
        return Nr(o, x, $, R, v, Se.current, S);
      }
    }
    var Ye = O.ReactCurrentOwner, Rt = O.ReactDebugCurrentFrame;
    function de(o) {
      if (o) {
        var u = o._owner, m = Ae(o.type, o._source, u ? u.type : null);
        Rt.setExtraStackFrame(m);
      } else
        Rt.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function Ze(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Pt() {
      {
        if (Ye.current) {
          var o = z(Ye.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function zr(o) {
      {
        if (o !== void 0) {
          var u = o.fileName.replace(/^.*[\\\/]/, ""), m = o.lineNumber;
          return `

Check your code at ` + u + ":" + m + ".";
        }
        return "";
      }
    }
    var kt = {};
    function Wr(o) {
      {
        var u = Pt();
        if (!u) {
          var m = typeof o == "string" ? o : o.displayName || o.name;
          m && (u = `

Check the top-level render call using <` + m + ">.");
        }
        return u;
      }
    }
    function Tt(o, u) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var m = Wr(u);
        if (kt[m])
          return;
        kt[m] = !0;
        var v = "";
        o && o._owner && o._owner !== Ye.current && (v = " It was passed a child from " + z(o._owner.type) + "."), de(o), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, v), de(null);
      }
    }
    function Mt(o, u) {
      {
        if (typeof o != "object")
          return;
        if (He(o))
          for (var m = 0; m < o.length; m++) {
            var v = o[m];
            Ze(v) && Tt(v, u);
          }
        else if (Ze(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var R = A(o);
          if (typeof R == "function" && R !== o.entries)
            for (var T = R.call(o), S; !(S = T.next()).done; )
              Ze(S.value) && Tt(S.value, u);
        }
      }
    }
    function Gr(o) {
      {
        var u = o.type;
        if (u == null || typeof u == "string")
          return;
        var m;
        if (typeof u == "function")
          m = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === c))
          m = u.propTypes;
        else
          return;
        if (m) {
          var v = z(u);
          Tr(m, o.props, "prop", v, o);
        } else if (u.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var R = z(u);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(o) {
      {
        for (var u = Object.keys(o.props), m = 0; m < u.length; m++) {
          var v = u[m];
          if (v !== "children" && v !== "key") {
            de(o), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), de(null);
            break;
          }
        }
        o.ref !== null && (de(o), h("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    function jt(o, u, m, v, R, T) {
      {
        var S = ye(o);
        if (!S) {
          var x = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = zr(R);
          $ ? x += $ : x += Pt();
          var _;
          o === null ? _ = "null" : He(o) ? _ = "array" : o !== void 0 && o.$$typeof === t ? (_ = "<" + (z(o.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof o, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, x);
        }
        var I = Fr(o, u, m, R, T);
        if (I == null)
          return I;
        if (S) {
          var G = u.children;
          if (G !== void 0)
            if (v)
              if (He(G)) {
                for (var fe = 0; fe < G.length; fe++)
                  Mt(G[fe], o);
                Object.freeze && Object.freeze(G);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(G, o);
        }
        return o === n ? Dr(I) : Gr(I), I;
      }
    }
    function Br(o, u, m) {
      return jt(o, u, m, !0);
    }
    function Hr(o, u, m) {
      return jt(o, u, m, !1);
    }
    var qr = Hr, Yr = Br;
    Re.Fragment = n, Re.jsx = qr, Re.jsxs = Yr;
  }()), Re;
}
process.env.NODE_ENV === "production" ? tt.exports = Xr() : tt.exports = Jr();
var P = tt.exports;
const Qr = N.createContext(void 0);
function aa() {
  const e = F(Qr);
  if (!e)
    throw new Error("useLume must be used within a LumeProvider");
  const { lume: t } = e;
  return t;
}
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $e.apply(this, arguments);
}
function en(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function tn(...e) {
  return (t) => e.forEach(
    (r) => en(r, t)
  );
}
const Yt = /* @__PURE__ */ ve((e, t) => {
  const { children: r, ...n } = e, a = me.toArray(r), i = a.find(nn);
  if (i) {
    const s = i.props.children, l = a.map((p) => p === i ? me.count(s) > 1 ? me.only(null) : /* @__PURE__ */ Te(s) ? s.props.children : null : p);
    return /* @__PURE__ */ q(rt, $e({}, n, {
      ref: t
    }), /* @__PURE__ */ Te(s) ? /* @__PURE__ */ lt(s, void 0, l) : null);
  }
  return /* @__PURE__ */ q(rt, $e({}, n, {
    ref: t
  }), r);
});
Yt.displayName = "Slot";
const rt = /* @__PURE__ */ ve((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ Te(r) ? /* @__PURE__ */ lt(r, {
    ...on(n, r.props),
    ref: t ? tn(t, r.ref) : r.ref
  }) : me.count(r) > 1 ? me.only(null) : null;
});
rt.displayName = "SlotClone";
const rn = ({ children: e }) => /* @__PURE__ */ q(Ur, null, e);
function nn(e) {
  return /* @__PURE__ */ Te(e) && e.type === rn;
}
function on(e, t) {
  const r = {
    ...t
  };
  for (const n in t) {
    const a = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? a && i ? r[n] = (...l) => {
      i(...l), a(...l);
    } : a && (r[n] = a) : n === "style" ? r[n] = {
      ...a,
      ...i
    } : n === "className" && (r[n] = [
      a,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function Ut(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Ut(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Zt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Ut(e)) && (n && (n += " "), n += t);
  return n;
}
const It = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Vt = Zt, an = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return Vt(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: a, defaultVariants: i } = t, s = Object.keys(a).map((f) => {
    const d = r == null ? void 0 : r[f], c = i == null ? void 0 : i[f];
    if (d === null)
      return null;
    const g = It(d) || It(c);
    return a[f][g];
  }), l = r && Object.entries(r).reduce((f, d) => {
    let [c, g] = d;
    return g === void 0 || (f[c] = g), f;
  }, {}), p = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, d) => {
    let { class: c, className: g, ...b } = d;
    return Object.entries(b).every((C) => {
      let [E, A] = C;
      return Array.isArray(A) ? A.includes({
        ...i,
        ...l
      }[E]) : {
        ...i,
        ...l
      }[E] === A;
    }) ? [
      ...f,
      c,
      g
    ] : f;
  }, []);
  return Vt(e, s, p, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function sn() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Kt(t)) && (n && (n += " "), n += r);
  return n;
}
function Kt(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = Kt(e[n])) && (r && (r += " "), r += t);
  return r;
}
var ut = "-";
function ln(e) {
  var t = un(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, a = n === void 0 ? {} : n;
  function i(l) {
    var p = l.split(ut);
    return p[0] === "" && p.length !== 1 && p.shift(), Xt(p, t) || cn(l);
  }
  function s(l, p) {
    var f = r[l] || [];
    return p && a[l] ? [].concat(f, a[l]) : f;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  };
}
function Xt(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), a = n ? Xt(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var i = e.join(ut);
    return (s = t.validators.find(function(l) {
      var p = l.validator;
      return p(i);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Lt = /^\[(.+)\]$/;
function cn(e) {
  if (Lt.test(e)) {
    var t = Lt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function un(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = fn(Object.entries(e.classGroups), r);
  return a.forEach(function(i) {
    var s = i[0], l = i[1];
    nt(l, n, s, t);
  }), n;
}
function nt(e, t, r, n) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var i = a === "" ? t : $t(t, a);
      i.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (dn(a)) {
        nt(a(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(function(s) {
      var l = s[0], p = s[1];
      nt(p, $t(t, l), r, n);
    });
  });
}
function $t(e, t) {
  var r = e;
  return t.split(ut).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function dn(e) {
  return e.isThemeGetter;
}
function fn(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], a = r[1], i = a.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(l) {
        var p = l[0], f = l[1];
        return [t + p, f];
      })) : s;
    });
    return [n, i];
  }) : e;
}
function pn(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(i, s) {
    r.set(i, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var l = r.get(s);
      if (l !== void 0)
        return l;
      if ((l = n.get(s)) !== void 0)
        return a(s, l), l;
    },
    set: function(s, l) {
      r.has(s) ? r.set(s, l) : a(s, l);
    }
  };
}
var Jt = "!";
function mn(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], a = t.length;
  return function(s) {
    for (var l = [], p = 0, f = 0, d, c = 0; c < s.length; c++) {
      var g = s[c];
      if (p === 0) {
        if (g === n && (r || s.slice(c, c + a) === t)) {
          l.push(s.slice(f, c)), f = c + a;
          continue;
        }
        if (g === "/") {
          d = c;
          continue;
        }
      }
      g === "[" ? p++ : g === "]" && p--;
    }
    var b = l.length === 0 ? s : s.substring(f), C = b.startsWith(Jt), E = C ? b.substring(1) : b, A = d && d > f ? d - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: C,
      baseClassName: E,
      maybePostfixModifierPosition: A
    };
  };
}
function gn(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var a = n[0] === "[";
    a ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function hn(e) {
  return {
    cache: pn(e.cacheSize),
    splitModifiers: mn(e),
    ...ln(e)
  };
}
var vn = /\s+/;
function bn(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, a = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(vn).map(function(s) {
    var l = r(s), p = l.modifiers, f = l.hasImportantModifier, d = l.baseClassName, c = l.maybePostfixModifierPosition, g = n(c ? d.substring(0, c) : d), b = !!c;
    if (!g) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (g = n(d), !g)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      b = !1;
    }
    var C = gn(p).join(":"), E = f ? C + Jt : C;
    return {
      isTailwindClass: !0,
      modifierId: E,
      classGroupId: g,
      originalClassName: s,
      hasPostfixModifier: b
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var l = s.modifierId, p = s.classGroupId, f = s.hasPostfixModifier, d = l + p;
    return i.has(d) ? !1 : (i.add(d), a(p, f).forEach(function(c) {
      return i.add(l + c);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function yn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, a, i, s = l;
  function l(f) {
    var d = t[0], c = t.slice(1), g = c.reduce(function(b, C) {
      return C(b);
    }, d());
    return n = hn(g), a = n.cache.get, i = n.cache.set, s = p, p(f);
  }
  function p(f) {
    var d = a(f);
    if (d)
      return d;
    var c = bn(f, n);
    return i(f, c), c;
  }
  return function() {
    return s(sn.apply(null, arguments));
  };
}
function j(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Qt = /^\[(?:([a-z-]+):)?(.+)\]$/i, xn = /^\d+\/\d+$/, wn = /* @__PURE__ */ new Set(["px", "full", "screen"]), Cn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Sn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, En = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function B(e) {
  return ne(e) || wn.has(e) || xn.test(e) || ot(e);
}
function ot(e) {
  return ie(e, "length", jn);
}
function Rn(e) {
  return ie(e, "size", er);
}
function Pn(e) {
  return ie(e, "position", er);
}
function kn(e) {
  return ie(e, "url", An);
}
function Ie(e) {
  return ie(e, "number", ne);
}
function ne(e) {
  return !Number.isNaN(Number(e));
}
function Tn(e) {
  return e.endsWith("%") && ne(e.slice(0, -1));
}
function Pe(e) {
  return Nt(e) || ie(e, "number", Nt);
}
function w(e) {
  return Qt.test(e);
}
function ke() {
  return !0;
}
function Q(e) {
  return Cn.test(e);
}
function Mn(e) {
  return ie(e, "", _n);
}
function ie(e, t, r) {
  var n = Qt.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : !1;
}
function jn(e) {
  return Sn.test(e);
}
function er() {
  return !1;
}
function An(e) {
  return e.startsWith("url(");
}
function Nt(e) {
  return Number.isInteger(Number(e));
}
function _n(e) {
  return En.test(e);
}
function On() {
  var e = j("colors"), t = j("spacing"), r = j("blur"), n = j("brightness"), a = j("borderColor"), i = j("borderRadius"), s = j("borderSpacing"), l = j("borderWidth"), p = j("contrast"), f = j("grayscale"), d = j("hueRotate"), c = j("invert"), g = j("gap"), b = j("gradientColorStops"), C = j("gradientColorStopPositions"), E = j("inset"), A = j("margin"), O = j("opacity"), h = j("padding"), M = j("saturate"), D = j("scale"), se = j("sepia"), Y = j("skew"), le = j("space"), ce = j("translate"), Z = function() {
    return ["auto", "contain", "none"];
  }, ye = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, xe = function() {
    return ["auto", w, t];
  }, k = function() {
    return [w, t];
  }, z = function() {
    return ["", B];
  }, W = function() {
    return ["auto", ne, w];
  }, K = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, ee = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, we = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, ue = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, X = function() {
    return ["", "0", w];
  }, Ce = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, J = function() {
    return [ne, Ie];
  }, te = function() {
    return [ne, w];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ke],
      spacing: [B],
      blur: ["none", "", Q, w],
      brightness: J(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Q, w],
      borderSpacing: k(),
      borderWidth: z(),
      contrast: J(),
      grayscale: X(),
      hueRotate: te(),
      invert: X(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Tn, ot],
      inset: xe(),
      margin: xe(),
      opacity: J(),
      padding: k(),
      saturate: J(),
      scale: J(),
      sepia: X(),
      skew: te(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", w]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Q]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ce()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ce()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(K(), [w])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ye()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ye()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ye()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Z()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [E]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [E]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [E]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [E]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [E]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [E]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [E]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [E]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [E]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Pe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: xe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", w]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ke]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Pe]
        }, w]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ke]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Pe]
        }, w]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", w]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", w]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(ue())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(ue(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(ue(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [h]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [h]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [h]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [h]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [h]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [h]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [h]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [h]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [h]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [A]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [A]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [A]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [A]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [A]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [A]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [A]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [A]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [A]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [le]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [le]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", w, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", w, B]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Q]
        }, Q, w]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [w, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", w, B]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [w, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Q, ot]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ie]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ke]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ne, Ie]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", w, B]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", w]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", w]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [O]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [O]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(ee(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", B]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", w, B]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", w]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [O]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(K(), [Pn])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Rn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kn]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [C]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [O]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(ee(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [O]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ee()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(ee())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [w, B]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [B]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: z()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [O]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [B]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Q, Mn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ke]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": we()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": we()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Q, w]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [M]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [se]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [O]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [M]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [se]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", w]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: te()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: te()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", w]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [D]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [D]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [D]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Pe, w]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ce]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ce]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Y]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", w]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", w]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [B, Ie]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var In = /* @__PURE__ */ yn(On);
function tr(...e) {
  return In(Zt(e));
}
const Vn = an(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "text-neutral-600 border border-current bg-transparent shadow-sm hover:border-white hover:text-white",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), oe = V.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...a }, i) => {
    const s = n ? Yt : "button";
    return /* @__PURE__ */ P.jsx(
      s,
      {
        className: "d411x41bq1lnhm670n " + tr(Vn({ variant: t, size: r, className: e })),
        ref: i,
        ...a
      }
    );
  }
);
oe.displayName = "Button";
const rr = be({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Fe = be({}), dt = be(null), nr = typeof document < "u", ft = nr ? Zr : ct, or = be({ strict: !1 });
function Ln(e, t, r, n) {
  const { visualElement: a } = F(Fe), i = F(or), s = F(dt), l = F(rr).reducedMotion, p = H();
  n = n || i.renderer, !p.current && n && (p.current = n(e, {
    visualState: t,
    parent: a,
    props: r,
    presenceContext: s,
    blockInitialAnimation: s ? s.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const f = p.current;
  Ht(() => {
    f && f.update(r, s);
  });
  const d = H(!!window.HandoffAppearAnimations);
  return ft(() => {
    f && (f.render(), d.current && f.animationState && f.animationState.animateChanges());
  }), ct(() => {
    f && (f.updateFeatures(), !d.current && f.animationState && f.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, d.current = !1);
  }), f;
}
function $n(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Nn(e, t, r) {
  return et(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : $n(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function at(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ar(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Fn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], zn = ["initial", ...Fn];
function pt(e) {
  return ar(e.animate) || zn.some((t) => at(e[t]));
}
function Wn(e) {
  return !!(pt(e) || e.variants);
}
function Gn(e, t) {
  if (pt(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || at(r) ? r : void 0,
      animate: at(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Dn(e) {
  const { initial: t, animate: r } = Gn(e, F(Fe));
  return he(() => ({ initial: t, animate: r }), [Ft(t), Ft(r)]);
}
function Ft(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const zt = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, it = {};
for (const e in zt)
  it[e] = {
    isEnabled: (t) => zt[e].some((r) => !!t[r])
  };
function Bn(e) {
  for (const t in e)
    it[t] = {
      ...it[t],
      ...e[t]
    };
}
const ir = be({}), Hn = be({}), qn = Symbol.for("motionComponentSymbol");
function Yn({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: a }) {
  e && Bn(e);
  function i(l, p) {
    let f;
    const d = {
      ...F(rr),
      ...l,
      layoutId: Un(l)
    }, { isStatic: c } = d, g = Dn(l), b = n(l, c);
    if (!c && nr) {
      g.visualElement = Ln(a, b, d, t);
      const C = F(Hn), E = F(or).strict;
      g.visualElement && (f = g.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        d,
        E,
        e,
        C
      ));
    }
    return V.createElement(
      Fe.Provider,
      { value: g },
      f && g.visualElement ? V.createElement(f, { visualElement: g.visualElement, ...d }) : null,
      r(a, l, Nn(b, g.visualElement, p), b, c, g.visualElement)
    );
  }
  const s = ve(i);
  return s[qn] = a, s;
}
function Un({ layoutId: e }) {
  const t = F(ir).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Zn(e) {
  function t(n, a = {}) {
    return Yn(e(n, a));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, a) => (r.has(a) || r.set(a, t(a)), r.get(a))
  });
}
const Kn = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function sr(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Kn.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Xn = {}, ze = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], lr = new Set(ze);
function cr(e, { layout: t, layoutId: r }) {
  return lr.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Xn[e] || e === "opacity");
}
const ae = (e) => !!(e && e.getVelocity), Jn = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Qn = ze.length;
function eo(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, a) {
  let i = "";
  for (let s = 0; s < Qn; s++) {
    const l = ze[s];
    if (e[l] !== void 0) {
      const p = Jn[l] || l;
      i += `${p}(${e[l]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), a ? i = a(e, n ? "" : i) : r && n && (i = "none"), i;
}
const to = (e) => (t) => typeof t == "string" && t.startsWith(e), ro = to("--"), no = (e, t) => t && typeof e == "number" ? t.transform(e) : e, oo = (e, t, r) => Math.min(Math.max(r, e), t), mt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ke = {
  ...mt,
  transform: (e) => oo(0, 1, e)
}, Ve = {
  ...mt,
  default: 1
};
function ao(e) {
  return typeof e == "string";
}
const gt = (e) => ({
  test: (t) => ao(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), re = gt("deg"), Xe = gt("%"), y = gt("px"), Wt = {
  ...Xe,
  parse: (e) => Xe.parse(e) / 100,
  transform: (e) => Xe.transform(e * 100)
}, Gt = {
  ...mt,
  transform: Math.round
}, io = {
  // Border props
  borderWidth: y,
  borderTopWidth: y,
  borderRightWidth: y,
  borderBottomWidth: y,
  borderLeftWidth: y,
  borderRadius: y,
  radius: y,
  borderTopLeftRadius: y,
  borderTopRightRadius: y,
  borderBottomRightRadius: y,
  borderBottomLeftRadius: y,
  // Positioning props
  width: y,
  maxWidth: y,
  height: y,
  maxHeight: y,
  size: y,
  top: y,
  right: y,
  bottom: y,
  left: y,
  // Spacing props
  padding: y,
  paddingTop: y,
  paddingRight: y,
  paddingBottom: y,
  paddingLeft: y,
  margin: y,
  marginTop: y,
  marginRight: y,
  marginBottom: y,
  marginLeft: y,
  // Transform props
  rotate: re,
  rotateX: re,
  rotateY: re,
  rotateZ: re,
  scale: Ve,
  scaleX: Ve,
  scaleY: Ve,
  scaleZ: Ve,
  skew: re,
  skewX: re,
  skewY: re,
  distance: y,
  translateX: y,
  translateY: y,
  translateZ: y,
  x: y,
  y,
  z: y,
  perspective: y,
  transformPerspective: y,
  opacity: Ke,
  originX: Wt,
  originY: Wt,
  originZ: y,
  // Misc
  zIndex: Gt,
  // SVG
  fillOpacity: Ke,
  strokeOpacity: Ke,
  numOctaves: Gt
};
function ur(e, t, r, n) {
  const { style: a, vars: i, transform: s, transformOrigin: l } = e;
  let p = !1, f = !1, d = !0;
  for (const c in t) {
    const g = t[c];
    if (ro(c)) {
      i[c] = g;
      continue;
    }
    const b = io[c], C = no(g, b);
    if (lr.has(c)) {
      if (p = !0, s[c] = C, !d)
        continue;
      g !== (b.default || 0) && (d = !1);
    } else
      c.startsWith("origin") ? (f = !0, l[c] = C) : a[c] = C;
  }
  if (t.transform || (p || n ? a.transform = eo(e.transform, r, d, n) : a.transform && (a.transform = "none")), f) {
    const { originX: c = "50%", originY: g = "50%", originZ: b = 0 } = l;
    a.transformOrigin = `${c} ${g} ${b}`;
  }
}
const ht = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function dr(e, t, r) {
  for (const n in t)
    !ae(t[n]) && !cr(n, r) && (e[n] = t[n]);
}
function so({ transformTemplate: e }, t, r) {
  return he(() => {
    const n = ht();
    return ur(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function lo(e, t, r) {
  const n = e.style || {}, a = {};
  return dr(a, n, e), Object.assign(a, so(e, t, r)), e.transformValues ? e.transformValues(a) : a;
}
function co(e, t, r) {
  const n = {}, a = lo(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = a, n;
}
const uo = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function Ne(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || uo.has(e);
}
let fr = (e) => !Ne(e);
function fo(e) {
  e && (fr = (t) => t.startsWith("on") ? !Ne(t) : e(t));
}
try {
  fo(require("@emotion/is-prop-valid").default);
} catch {
}
function po(e, t, r) {
  const n = {};
  for (const a in e)
    a === "values" && typeof e.values == "object" || (fr(a) || r === !0 && Ne(a) || !t && !Ne(a) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && a.startsWith("onDrag")) && (n[a] = e[a]);
  return n;
}
function Dt(e, t, r) {
  return typeof e == "string" ? e : y.transform(t + r * e);
}
function mo(e, t, r) {
  const n = Dt(t, e.x, e.width), a = Dt(r, e.y, e.height);
  return `${n} ${a}`;
}
const go = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ho = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function vo(e, t, r = 1, n = 0, a = !0) {
  e.pathLength = 1;
  const i = a ? go : ho;
  e[i.offset] = y.transform(-n);
  const s = y.transform(t), l = y.transform(r);
  e[i.array] = `${s} ${l}`;
}
function pr(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: a,
  originY: i,
  pathLength: s,
  pathSpacing: l = 1,
  pathOffset: p = 0,
  // This is object creation, which we try to avoid per-frame.
  ...f
}, d, c, g) {
  if (ur(e, f, d, g), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: b, style: C, dimensions: E } = e;
  b.transform && (E && (C.transform = b.transform), delete b.transform), E && (a !== void 0 || i !== void 0 || C.transform) && (C.transformOrigin = mo(E, a !== void 0 ? a : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (b.x = t), r !== void 0 && (b.y = r), n !== void 0 && (b.scale = n), s !== void 0 && vo(b, s, l, p, !1);
}
const mr = () => ({
  ...ht(),
  attrs: {}
}), gr = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function bo(e, t, r, n) {
  const a = he(() => {
    const i = mr();
    return pr(i, t, { enableHardwareAcceleration: !1 }, gr(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    dr(i, e.style, e), a.style = { ...i, ...a.style };
  }
  return a;
}
function yo(e = !1) {
  return (r, n, a, { latestValues: i }, s) => {
    const p = (sr(r) ? bo : co)(n, i, s, r), d = {
      ...po(n, typeof r == "string", e),
      ...p,
      ref: a
    }, { children: c } = n, g = he(() => ae(c) ? c.get() : c, [c]);
    return q(r, {
      ...d,
      children: g
    });
  };
}
const xo = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function wo(e, { style: t, vars: r }, n, a) {
  Object.assign(e.style, t, a && a.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const Co = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function So(e, t, r, n) {
  wo(e, t, void 0, n);
  for (const a in t.attrs)
    e.setAttribute(Co.has(a) ? a : xo(a), t.attrs[a]);
}
function hr(e, t) {
  const { style: r } = e, n = {};
  for (const a in r)
    (ae(r[a]) || t.style && ae(t.style[a]) || cr(a, e)) && (n[a] = r[a]);
  return n;
}
function Eo(e, t) {
  const r = hr(e, t);
  for (const n in e)
    if (ae(e[n]) || ae(t[n])) {
      const a = ze.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[a] = e[n];
    }
  return r;
}
function Ro(e, t, r, n = {}, a = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, a)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, a)), t;
}
function vr(e) {
  const t = H(null);
  return t.current === null && (t.current = e()), t.current;
}
const Po = (e) => !!(e && typeof e == "object" && e.mix && e.toValue);
function ko(e) {
  const t = ae(e) ? e.get() : e;
  return Po(t) ? t.toValue() : t;
}
function To({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, a, i) {
  const s = {
    latestValues: Mo(n, a, i, e),
    renderState: t()
  };
  return r && (s.mount = (l) => r(n, l, s)), s;
}
const br = (e) => (t, r) => {
  const n = F(Fe), a = F(dt), i = () => To(e, t, n, a);
  return r ? i() : vr(i);
};
function Mo(e, t, r, n) {
  const a = {}, i = n(e, {});
  for (const g in i)
    a[g] = ko(i[g]);
  let { initial: s, animate: l } = e;
  const p = pt(e), f = Wn(e);
  t && f && !p && e.inherit !== !1 && (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let d = r ? r.initial === !1 : !1;
  d = d || s === !1;
  const c = d ? l : s;
  return c && typeof c != "boolean" && !ar(c) && (Array.isArray(c) ? c : [c]).forEach((b) => {
    const C = Ro(e, b);
    if (!C)
      return;
    const { transitionEnd: E, transition: A, ...O } = C;
    for (const h in O) {
      let M = O[h];
      if (Array.isArray(M)) {
        const D = d ? M.length - 1 : 0;
        M = M[D];
      }
      M !== null && (a[h] = M);
    }
    for (const h in E)
      a[h] = E[h];
  }), a;
}
const jo = (e) => e;
class Bt {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function Ao(e) {
  let t = new Bt(), r = new Bt(), n = 0, a = !1, i = !1;
  const s = /* @__PURE__ */ new WeakSet(), l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (p, f = !1, d = !1) => {
      const c = d && a, g = c ? t : r;
      return f && s.add(p), g.add(p) && c && a && (n = t.order.length), p;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (p) => {
      r.remove(p), s.delete(p);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (p) => {
      if (a) {
        i = !0;
        return;
      }
      if (a = !0, [t, r] = [r, t], r.clear(), n = t.order.length, n)
        for (let f = 0; f < n; f++) {
          const d = t.order[f];
          d(p), s.has(d) && (l.schedule(d), e());
        }
      a = !1, i && (i = !1, l.process(p));
    }
  };
  return l;
}
const Le = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], _o = 40;
function Oo(e, t) {
  let r = !1, n = !0;
  const a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Le.reduce((c, g) => (c[g] = Ao(() => r = !0), c), {}), s = (c) => i[c].process(a), l = () => {
    const c = performance.now();
    r = !1, a.delta = n ? 1e3 / 60 : Math.max(Math.min(c - a.timestamp, _o), 1), a.timestamp = c, a.isProcessing = !0, Le.forEach(s), a.isProcessing = !1, r && t && (n = !1, e(l));
  }, p = () => {
    r = !0, n = !0, a.isProcessing || e(l);
  };
  return { schedule: Le.reduce((c, g) => {
    const b = i[g];
    return c[g] = (C, E = !1, A = !1) => (r || p(), b.schedule(C, E, A)), c;
  }, {}), cancel: (c) => Le.forEach((g) => i[g].cancel(c)), state: a, steps: i };
}
const { schedule: st, cancel: ia, state: sa, steps: la } = Oo(typeof requestAnimationFrame < "u" ? requestAnimationFrame : jo, !0), Io = {
  useVisualState: br({
    scrapeMotionValuesFromProps: Eo,
    createRenderState: mr,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      st.read(() => {
        try {
          r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          r.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), st.render(() => {
        pr(r, n, { enableHardwareAcceleration: !1 }, gr(t.tagName), e.transformTemplate), So(t, r);
      });
    }
  })
}, Vo = {
  useVisualState: br({
    scrapeMotionValuesFromProps: hr,
    createRenderState: ht
  })
};
function Lo(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...sr(e) ? Io : Vo,
    preloadedFeatures: r,
    useRender: yo(t),
    createVisualElement: n,
    Component: e
  };
}
const ge = Zn(Lo);
function yr() {
  const e = H(!1);
  return ft(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function $o() {
  const e = yr(), [t, r] = Kr(0), n = et(() => {
    e.current && r(t + 1);
  }, [t]);
  return [et(() => st.postRender(n), [n]), t];
}
class No extends V.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Fo({ children: e, isPresent: t }) {
  const r = qt(), n = H(null), a = H({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return Ht(() => {
    const { width: i, height: s, top: l, left: p } = a.current;
    if (t || !n.current || !i || !s)
      return;
    n.current.dataset.motionPopId = r;
    const f = document.createElement("style");
    return document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${p}px !important;
          }
        `), () => {
      document.head.removeChild(f);
    };
  }, [t]), V.createElement(No, { isPresent: t, childRef: n, sizeRef: a }, V.cloneElement(e, { ref: n }));
}
const Je = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: a, presenceAffectsLayout: i, mode: s }) => {
  const l = vr(zo), p = qt(), f = he(
    () => ({
      id: p,
      initial: t,
      isPresent: r,
      custom: a,
      onExitComplete: (d) => {
        l.set(d, !0);
        for (const c of l.values())
          if (!c)
            return;
        n && n();
      },
      register: (d) => (l.set(d, !1), () => l.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [r]
  );
  return he(() => {
    l.forEach((d, c) => l.set(c, !1));
  }, [r]), V.useEffect(() => {
    !r && !l.size && n && n();
  }, [r]), s === "popLayout" && (e = V.createElement(Fo, { isPresent: r }, e)), V.createElement(dt.Provider, { value: f }, e);
};
function zo() {
  return /* @__PURE__ */ new Map();
}
function Wo(e) {
  return ct(() => () => e(), []);
}
const pe = (e) => e.key || "";
function Go(e, t) {
  e.forEach((r) => {
    const n = pe(r);
    t.set(n, r);
  });
}
function Do(e) {
  const t = [];
  return me.forEach(e, (r) => {
    Te(r) && t.push(r);
  }), t;
}
const Qe = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: a, presenceAffectsLayout: i = !0, mode: s = "sync" }) => {
  const l = F(ir).forceRender || $o()[0], p = yr(), f = Do(e);
  let d = f;
  const c = H(/* @__PURE__ */ new Map()).current, g = H(d), b = H(/* @__PURE__ */ new Map()).current, C = H(!0);
  if (ft(() => {
    C.current = !1, Go(f, b), g.current = d;
  }), Wo(() => {
    C.current = !0, b.clear(), c.clear();
  }), C.current)
    return V.createElement(V.Fragment, null, d.map((h) => V.createElement(Je, { key: pe(h), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: s }, h)));
  d = [...d];
  const E = g.current.map(pe), A = f.map(pe), O = E.length;
  for (let h = 0; h < O; h++) {
    const M = E[h];
    A.indexOf(M) === -1 && !c.has(M) && c.set(M, void 0);
  }
  return s === "wait" && c.size && (d = []), c.forEach((h, M) => {
    if (A.indexOf(M) !== -1)
      return;
    const D = b.get(M);
    if (!D)
      return;
    const se = E.indexOf(M);
    let Y = h;
    if (!Y) {
      const le = () => {
        b.delete(M), c.delete(M);
        const ce = g.current.findIndex((Z) => Z.key === M);
        if (g.current.splice(ce, 1), !c.size) {
          if (g.current = f, p.current === !1)
            return;
          l(), n && n();
        }
      };
      Y = V.createElement(Je, { key: pe(D), isPresent: !1, onExitComplete: le, custom: t, presenceAffectsLayout: i, mode: s }, D), c.set(M, Y);
    }
    d.splice(se, 0, Y);
  }), d = d.map((h) => {
    const M = h.key;
    return c.has(M) ? h : V.createElement(Je, { key: pe(h), isPresent: !0, presenceAffectsLayout: i, mode: s }, h);
  }), process.env.NODE_ENV !== "production" && s === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), V.createElement(V.Fragment, null, c.size ? d : d.map((h) => lt(h)));
}, Bo = N.createContext(void 0);
function xr(e) {
  const t = N.useContext(Bo);
  if (t === void 0)
    throw new Error("useSwitchableComponent hook is being used outside of its context. Please ensure that it is wrapped within a <SwitchableComponentProvider>.");
  return N.useEffect(() => {
    e && t.visibleComponent && t.setVisibleComponent(e);
  }, [e]), t;
}
Symbol("DEFAULT_COMPONENT").toString();
function We(e, t) {
  return {
    render(r) {
      return /* @__PURE__ */ P.jsx(e, { ...r });
    },
    index: t || Symbol(e.name).toString()
  };
}
const wr = V.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ P.jsx(
    "input",
    {
      type: t,
      className: "d411x41bq1lnhm670n " + tr(
        "flex h-9 w-full text-white rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus:border-white",
        e
      ),
      ref: n,
      ...r
    }
  )
);
wr.displayName = "Input";
function vt(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Ho = ["color"], qo = /* @__PURE__ */ ve(function(e, t) {
  var r = e.color, n = r === void 0 ? "currentColor" : r, a = vt(e, Ho);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a, {
    ref: t
  }), q("path", {
    d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Yo = ["color"], Uo = /* @__PURE__ */ ve(function(e, t) {
  var r = e.color, n = r === void 0 ? "currentColor" : r, a = vt(e, Yo);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a, {
    ref: t
  }), q("path", {
    d: "M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H7V13H3.5C3.22386 13 3 12.7761 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H4V2.25C4 2.66421 4.33579 3 4.75 3H10.25C10.6642 3 11 2.66421 11 2.25V2H11.5C11.7761 2 12 2.22386 12 2.5V7H13V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM10.5 9C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9ZM13 8.5C13 8.77614 12.7761 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5ZM14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5C14 8.77614 14.2239 9 14.5 9ZM15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5ZM14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13ZM14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15ZM8.5 11C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11ZM9 12.5C9 12.7761 8.77614 13 8.5 13C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5ZM8.5 15C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM12.5 15C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), Zo = ["color"], Ko = /* @__PURE__ */ ve(function(e, t) {
  var r = e.color, n = r === void 0 ? "currentColor" : r, a = vt(e, Zo);
  return q("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a, {
    ref: t
  }), q("path", {
    d: "M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
const Xo = N.createContext(void 0);
function Cr() {
  const e = N.useContext(Xo);
  if (N.useEffect(() => {
    e != null && e.session ? localStorage.setItem("lume-session", e.session) : localStorage.removeItem("lume-session");
  }, [e == null ? void 0 : e.session]), N.useEffect(() => {
    const t = localStorage.getItem("lume-session");
    t && (e == null || e.setSession(t));
  }, []), e === void 0)
    throw new Error("useLumeIndentity hook is being used outside of its context. Please ensure that it is wrapped within a <LumeIdentityProvider>.");
  return {
    isSignedIn: !!e.session,
    signIn: (t) => {
      console.log("signing in with key", t), e.setSession("session");
    },
    signOut: () => {
      e.setSession(void 0);
    }
  };
}
const Jo = () => {
  const { setVisibleComponent: e } = xr();
  return /* @__PURE__ */ P.jsx(oe, { className: "d411x41bq1lnhm670n w-full h-12", variant: "outline", onClick: () => e(ra), children: /* @__PURE__ */ P.jsx("span", { className: "d411x41bq1lnhm670n text-center text-lg font-normal leading-normal", children: "Sign in with Account Key" }) });
}, Qo = () => {
  const { signIn: e } = Cr();
  return /* @__PURE__ */ P.jsxs(ge.form, { className: "d411x41bq1lnhm670n flex-col flex gap-y-4", onSubmit: (t) => {
    t.preventDefault();
    const n = t.target.elements.seedPhrase.value;
    e(n);
  }, children: [
    /* @__PURE__ */ P.jsx(wr, { className: "d411x41bq1lnhm670n h-12 w-full text-lg", name: "seedPhrase" }),
    /* @__PURE__ */ P.jsx(
      ge.div,
      {
        initial: { y: 50 },
        animate: { y: 0 },
        exit: { y: -50 },
        transition: { type: "just", delay: 0.1 },
        className: "d411x41bq1lnhm670n h-12",
        children: /* @__PURE__ */ P.jsx(oe, { className: "d411x41bq1lnhm670n w-full h-full", role: "submit", children: /* @__PURE__ */ P.jsx("span", { className: "d411x41bq1lnhm670n text-center text-lg font-normal leading-normal", children: "Sign in" }) })
      }
    )
  ] });
}, ea = () => {
  const { setVisibleComponent: e } = xr(), [t, r] = N.useState();
  return /* @__PURE__ */ P.jsx(
    ge.div,
    {
      initial: { y: 50 },
      animate: { y: 0 },
      exit: { y: -50, height: "auto" },
      transition: { type: "just", delay: 0.1 },
      className: "d411x41bq1lnhm670n min-h-12 h-full max-w-full",
      style: { maxWidth: t ?? "auto" },
      ref: (n) => setTimeout(() => r(n.getBoundingClientRect().width), 0),
      children: /* @__PURE__ */ P.jsx(oe, { className: "d411x41bq1lnhm670n w-full h-full", onClick: () => e(na), children: /* @__PURE__ */ P.jsx("span", { className: "d411x41bq1lnhm670n text-center text-lg font-normal leading-normal", children: "I get it, I'll keep it safe. Let's see the key." }) })
    }
  );
}, ta = ({ phraseLength: e = 12 }) => {
  const [t, r] = N.useState("idle"), [n, a] = N.useState(0), { signIn: i } = Cr(), s = N.useMemo(() => Array(e).fill("a phrase"), [e]), l = N.useMemo(() => s.join(" "), [s]), p = () => {
    navigator.clipboard.writeText(s.join(" ")), r("clicked"), setTimeout(() => r("idle"), 1e3);
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "d411x41bq1lnhm670n relative", children: [
    /* @__PURE__ */ P.jsx(Qe, { children: n === 1 ? /* @__PURE__ */ P.jsx(
      ge.div,
      {
        className: "z-10 absolute top-0 bottom-0 left-0 right-0 bg-black pointer-events-none",
        initial: { opacity: 0 },
        animate: { opacity: 0.75, top: -200, left: -20, right: -20, bottom: 120 },
        transition: { type: "tween", duration: 0.1 }
      }
    ) : null }),
    /* @__PURE__ */ P.jsxs("div", { className: "d411x41bq1lnhm670n z-20 relative mb-2.5 w-full h-full flex-wrap justify-center items-center gap-2.5 inline-flex", children: [
      s.map((f, d) => /* @__PURE__ */ P.jsxs("div", { className: "justify-center items-center gap-2.5 flex w-[calc(33%-10px)] h-10 rounded border border-current relative ring-current text-neutral-700", children: [
        /* @__PURE__ */ P.jsx("span", { className: "d411x41bq1lnhm670n  text-white text-md font-normal leading-normal w-full h-fit px-2.5 bg-transparent text-center", children: f }),
        /* @__PURE__ */ P.jsx("span", { className: "d411x41bq1lnhm670n left-[6px] top-0 absolute text-current text-xs font-normal leading-normal", children: d + 1 })
      ] }, `SeedPhrase_${d}`)),
      /* @__PURE__ */ P.jsx(Qe, { children: n === 1 ? /* @__PURE__ */ P.jsxs(
        ge.div,
        {
          className: "d411x41bq1lnhm670n text-red-400 flex flex-row gap-5 py-8",
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 50 },
          transition: { type: "linear", delay: 0.2, duration: 0.5 },
          children: [
            /* @__PURE__ */ P.jsx(Ko, { className: "d411x41bq1lnhm670n w-14 h-14" }),
            /* @__PURE__ */ P.jsx("span", { children: "Make sure to write this down for safe keeping." })
          ]
        }
      ) : null }),
      /* @__PURE__ */ P.jsxs(oe, { className: `w-full h-12 ${t === "clicked" ? "!text-primary !border-primary" : ""}`, variant: "outline", onClick: p, children: [
        t === "clicked" ? /* @__PURE__ */ P.jsx(qo, { className: "d411x41bq1lnhm670n w-5 h-5 mr-2.5" }) : /* @__PURE__ */ P.jsx(Uo, { className: "d411x41bq1lnhm670n w-5 h-5 mr-2.5" }),
        t === "clicked" ? "Copied!" : "Copy Account Key"
      ] })
    ] }),
    n === 0 ? /* @__PURE__ */ P.jsx(oe, { className: "d411x41bq1lnhm670n z-20 w-full h-12 text-white bg-neutral-700 hover:bg-neutral-800", variant: "secondary", onClick: () => a(1), children: "Continue" }) : null,
    /* @__PURE__ */ P.jsx(Qe, { children: n === 1 ? /* @__PURE__ */ P.jsx(
      ge.div,
      {
        className: "d411x41bq1lnhm670n z-20 w-full h-12",
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        transition: { type: "linear", delay: 2, duration: 0.5 },
        children: /* @__PURE__ */ P.jsx(oe, { className: "d411x41bq1lnhm670n w-full h-full", onClick: () => i(l), children: "Sign In" })
      }
    ) : null })
  ] });
};
We(Jo, "submit-button");
const ra = We(Qo, "seed-phrase-input");
We(ea, "setup-account-key");
const na = We(ta, "seed-phrase-form");
export {
  aa as useLume
};
//# sourceMappingURL=lib.es.js.map
