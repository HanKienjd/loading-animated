import he, { useRef as on, useDebugValue as Gt, createElement as an, useContext as sn, useMemo as cn } from "react";
var yt = { exports: {} }, Ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function un() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), T = Symbol.iterator, D = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = T && n[T] || n[D];
      return typeof s == "function" ? s : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          u[h - 1] = arguments[h];
        C("error", n, u);
      }
    }
    function C(n, s, u) {
      {
        var h = R.ReactDebugCurrentFrame, _ = h.getStackAddendum();
        _ !== "" && (s += "%s", u = u.concat([_]));
        var P = u.map(function(E) {
          return String(E);
        });
        P.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, P);
      }
    }
    var O = !1, N = !1, k = !1, g = !1, J = !1, Z;
    Z = Symbol.for("react.module.reference");
    function it(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || J || n === a || n === d || n === p || g || n === S || O || N || k || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === m || n.$$typeof === c || n.$$typeof === l || n.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Z || n.getModuleId !== void 0));
    }
    function st(n, s, u) {
      var h = n.displayName;
      if (h)
        return h;
      var _ = s.displayName || s.name || "";
      return _ !== "" ? u + "(" + _ + ")" : u;
    }
    function Me(n) {
      return n.displayName || "Context";
    }
    function V(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            var s = n;
            return Me(s) + ".Consumer";
          case c:
            var u = n;
            return Me(u._context) + ".Provider";
          case f:
            return st(n, n.render, "ForwardRef");
          case m:
            var h = n.displayName || null;
            return h !== null ? h : V(n.type) || "Memo";
          case b: {
            var _ = n, P = _._payload, E = _._init;
            try {
              return V(E(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ue = 0, Le, ge, Ae, Y, oe, ae, L;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ne() {
      {
        if (ue === 0) {
          Le = console.log, ge = console.info, Ae = console.warn, Y = console.error, oe = console.group, ae = console.groupCollapsed, L = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ue++;
      }
    }
    function ve() {
      {
        if (ue--, ue === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, n, {
              value: Le
            }),
            info: Q({}, n, {
              value: ge
            }),
            warn: Q({}, n, {
              value: Ae
            }),
            error: Q({}, n, {
              value: Y
            }),
            group: Q({}, n, {
              value: oe
            }),
            groupCollapsed: Q({}, n, {
              value: ae
            }),
            groupEnd: Q({}, n, {
              value: L
            })
          });
        }
        ue < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = R.ReactCurrentDispatcher, ie;
    function G(n, s, u) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (_) {
            var h = _.stack.trim().match(/\n( *(at )?)/);
            ie = h && h[1] || "";
          }
        return `
` + ie + n;
      }
    }
    var H = !1, se;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      se = new be();
    }
    function q(n, s) {
      if (!n || H)
        return "";
      {
        var u = se.get(n);
        if (u !== void 0)
          return u;
      }
      var h;
      H = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = ee.current, ee.current = null, Ne();
      try {
        if (s) {
          var E = function() {
            throw Error();
          };
          if (Object.defineProperty(E.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(E, []);
            } catch (te) {
              h = te;
            }
            Reflect.construct(n, [], E);
          } else {
            try {
              E.call();
            } catch (te) {
              h = te;
            }
            n.call(E.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            h = te;
          }
          n();
        }
      } catch (te) {
        if (te && h && typeof te.stack == "string") {
          for (var w = te.stack.split(`
`), W = h.stack.split(`
`), I = w.length - 1, j = W.length - 1; I >= 1 && j >= 0 && w[I] !== W[j]; )
            j--;
          for (; I >= 1 && j >= 0; I--, j--)
            if (w[I] !== W[j]) {
              if (I !== 1 || j !== 1)
                do
                  if (I--, j--, j < 0 || w[I] !== W[j]) {
                    var B = `
` + w[I].replace(" at new ", " at ");
                    return n.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", n.displayName)), typeof n == "function" && se.set(n, B), B;
                  }
                while (I >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        H = !1, ee.current = P, ve(), Error.prepareStackTrace = _;
      }
      var ke = n ? n.displayName || n.name : "", Ut = ke ? G(ke) : "";
      return typeof n == "function" && se.set(n, Ut), Ut;
    }
    function $r(n, s, u) {
      return q(n, !1);
    }
    function Fr(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function We(n, s, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return q(n, Fr(n));
      if (typeof n == "string")
        return G(n);
      switch (n) {
        case d:
          return G("Suspense");
        case p:
          return G("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            return $r(n.render);
          case m:
            return We(n.type, s, u);
          case b: {
            var h = n, _ = h._payload, P = h._init;
            try {
              return We(P(_), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, Dt = {}, It = R.ReactDebugCurrentFrame;
    function Ve(n) {
      if (n) {
        var s = n._owner, u = We(n.type, n._source, s ? s.type : null);
        It.setExtraStackFrame(u);
      } else
        It.setExtraStackFrame(null);
    }
    function Mr(n, s, u, h, _) {
      {
        var P = Function.call.bind(ze);
        for (var E in n)
          if (P(n, E)) {
            var w = void 0;
            try {
              if (typeof n[E] != "function") {
                var W = Error((h || "React class") + ": " + u + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              w = n[E](s, E, h, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              w = I;
            }
            w && !(w instanceof Error) && (Ve(_), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", u, E, typeof w), Ve(null)), w instanceof Error && !(w.message in Dt) && (Dt[w.message] = !0, Ve(_), v("Failed %s type: %s", u, w.message), Ve(null));
          }
      }
    }
    var Lr = Array.isArray;
    function ct(n) {
      return Lr(n);
    }
    function Wr(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function zr(n) {
      try {
        return jt(n), !1;
      } catch {
        return !0;
      }
    }
    function jt(n) {
      return "" + n;
    }
    function $t(n) {
      if (zr(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wr(n)), jt(n);
    }
    var De = R.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Mt, ut;
    ut = {};
    function Yr(n) {
      if (ze.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Br(n) {
      if (ze.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Ur(n, s) {
      if (typeof n.ref == "string" && De.current && s && De.current.stateNode !== s) {
        var u = V(De.current.type);
        ut[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(De.current.type), n.ref), ut[u] = !0);
      }
    }
    function Gr(n, s) {
      {
        var u = function() {
          Ft || (Ft = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Hr(n, s) {
      {
        var u = function() {
          Mt || (Mt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var qr = function(n, s, u, h, _, P, E) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: u,
        props: E,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Xr(n, s, u, h, _) {
      {
        var P, E = {}, w = null, W = null;
        u !== void 0 && ($t(u), w = "" + u), Br(s) && ($t(s.key), w = "" + s.key), Yr(s) && (W = s.ref, Ur(s, _));
        for (P in s)
          ze.call(s, P) && !Vr.hasOwnProperty(P) && (E[P] = s[P]);
        if (n && n.defaultProps) {
          var I = n.defaultProps;
          for (P in I)
            E[P] === void 0 && (E[P] = I[P]);
        }
        if (w || W) {
          var j = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          w && Gr(E, j), W && Hr(E, j);
        }
        return qr(n, w, W, _, h, De.current, E);
      }
    }
    var ft = R.ReactCurrentOwner, Lt = R.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var s = n._owner, u = We(n.type, n._source, s ? s.type : null);
        Lt.setExtraStackFrame(u);
      } else
        Lt.setExtraStackFrame(null);
    }
    var lt;
    lt = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Wt() {
      {
        if (ft.current) {
          var n = V(ft.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Kr(n) {
      {
        if (n !== void 0) {
          var s = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + s + ":" + u + ".";
        }
        return "";
      }
    }
    var zt = {};
    function Jr(n) {
      {
        var s = Wt();
        if (!s) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Vt(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = Jr(s);
        if (zt[u])
          return;
        zt[u] = !0;
        var h = "";
        n && n._owner && n._owner !== ft.current && (h = " It was passed a child from " + V(n._owner.type) + "."), we(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, h), we(null);
      }
    }
    function Yt(n, s) {
      {
        if (typeof n != "object")
          return;
        if (ct(n))
          for (var u = 0; u < n.length; u++) {
            var h = n[u];
            dt(h) && Vt(h, s);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = M(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var P = _.call(n), E; !(E = P.next()).done; )
              dt(E.value) && Vt(E.value, s);
        }
      }
    }
    function Zr(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === m))
          u = s.propTypes;
        else
          return;
        if (u) {
          var h = V(s);
          Mr(u, n.props, "prop", h, n);
        } else if (s.PropTypes !== void 0 && !lt) {
          lt = !0;
          var _ = V(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qr(n) {
      {
        for (var s = Object.keys(n.props), u = 0; u < s.length; u++) {
          var h = s[u];
          if (h !== "children" && h !== "key") {
            we(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function Bt(n, s, u, h, _, P) {
      {
        var E = it(n);
        if (!E) {
          var w = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Kr(_);
          W ? w += W : w += Wt();
          var I;
          n === null ? I = "null" : ct(n) ? I = "array" : n !== void 0 && n.$$typeof === t ? (I = "<" + (V(n.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : I = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, w);
        }
        var j = Xr(n, s, u, _, P);
        if (j == null)
          return j;
        if (E) {
          var B = s.children;
          if (B !== void 0)
            if (h)
              if (ct(B)) {
                for (var ke = 0; ke < B.length; ke++)
                  Yt(B[ke], n);
                Object.freeze && Object.freeze(B);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(B, n);
        }
        return n === o ? Qr(j) : Zr(j), j;
      }
    }
    function en(n, s, u) {
      return Bt(n, s, u, !0);
    }
    function tn(n, s, u) {
      return Bt(n, s, u, !1);
    }
    var rn = tn, nn = en;
    Ie.Fragment = o, Ie.jsx = rn, Ie.jsxs = nn;
  }()), Ie;
}
var je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function fn() {
  if (qt)
    return je;
  qt = 1;
  var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, f, d) {
    var p, m = {}, b = null, S = null;
    d !== void 0 && (b = "" + d), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (p in f)
      o.call(f, p) && !i.hasOwnProperty(p) && (m[p] = f[p]);
    if (l && l.defaultProps)
      for (p in f = l.defaultProps, f)
        m[p] === void 0 && (m[p] = f[p]);
    return { $$typeof: t, type: l, key: b, ref: S, props: m, _owner: a.current };
  }
  return je.Fragment = r, je.jsx = c, je.jsxs = c, je;
}
process.env.NODE_ENV === "production" ? yt.exports = fn() : yt.exports = un();
var re = yt.exports, z = function() {
  return z = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, z.apply(this, arguments);
};
function Ee(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, i; o < a; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function ln(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var dn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, pn = /* @__PURE__ */ ln(
  function(e) {
    return dn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", Fe = "-moz-", x = "-webkit-", dr = "comm", et = "rule", Rt = "decl", hn = "@import", pr = "@keyframes", mn = "@layer", hr = Math.abs, Ct = String.fromCharCode, vt = Object.assign;
function gn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function mr(e) {
  return e.trim();
}
function ne(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function y(e, t, r) {
  return e.replace(t, r);
}
function He(e, t, r) {
  return e.indexOf(t, r);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function _e(e, t, r) {
  return e.slice(t, r);
}
function K(e) {
  return e.length;
}
function gr(e) {
  return e.length;
}
function $e(e, t) {
  return t.push(e), e;
}
function yn(e, t) {
  return e.map(t).join("");
}
function Xt(e, t) {
  return e.filter(function(r) {
    return !ne(r, t);
  });
}
var tt = 1, xe = 1, yr = 0, U = 0, $ = 0, Te = "";
function rt(e, t, r, o, a, i, c, l) {
  return { value: e, root: t, parent: r, type: o, props: a, children: i, line: tt, column: xe, length: c, return: "", siblings: l };
}
function ce(e, t) {
  return vt(rt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Se(e) {
  for (; e.root; )
    e = ce(e.root, { children: [e] });
  $e(e, e.siblings);
}
function vn() {
  return $;
}
function bn() {
  return $ = U > 0 ? F(Te, --U) : 0, xe--, $ === 10 && (xe = 1, tt--), $;
}
function X() {
  return $ = U < yr ? F(Te, U++) : 0, xe++, $ === 10 && (xe = 1, tt++), $;
}
function de() {
  return F(Te, U);
}
function qe() {
  return U;
}
function nt(e, t) {
  return _e(Te, e, t);
}
function bt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function wn(e) {
  return tt = xe = 1, yr = K(Te = e), U = 0, [];
}
function kn(e) {
  return Te = "", e;
}
function pt(e) {
  return mr(nt(U - 1, wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Sn(e) {
  for (; ($ = de()) && $ < 33; )
    X();
  return bt(e) > 2 || bt($) > 3 ? "" : " ";
}
function En(e, t) {
  for (; --t && X() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return nt(e, qe() + (t < 6 && de() == 32 && X() == 32));
}
function wt(e) {
  for (; X(); )
    switch ($) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wt($);
        break;
      case 40:
        e === 41 && wt(e);
        break;
      case 92:
        X();
        break;
    }
  return U;
}
function _n(e, t) {
  for (; X() && e + $ !== 57; )
    if (e + $ === 84 && de() === 47)
      break;
  return "/*" + nt(t, U - 1) + "*" + Ct(e === 47 ? e : X());
}
function xn(e) {
  for (; !bt(de()); )
    X();
  return nt(e, U);
}
function Rn(e) {
  return kn(Xe("", null, null, null, [""], e = wn(e), 0, [0], e));
}
function Xe(e, t, r, o, a, i, c, l, f) {
  for (var d = 0, p = 0, m = c, b = 0, S = 0, T = 0, D = 1, M = 1, R = 1, v = 0, C = "", O = a, N = i, k = o, g = C; M; )
    switch (T = v, v = X()) {
      case 40:
        if (T != 108 && F(g, m - 1) == 58) {
          He(g += y(pt(v), "&", "&\f"), "&\f", hr(d ? l[d - 1] : 0)) != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += pt(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Sn(T);
        break;
      case 92:
        g += En(qe() - 1, 7);
        continue;
      case 47:
        switch (de()) {
          case 42:
          case 47:
            $e(Cn(_n(X(), qe()), t, r, f), f);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * D:
        l[d++] = K(g) * R;
      case 125 * D:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            M = 0;
          case 59 + p:
            R == -1 && (g = y(g, /\f/g, "")), S > 0 && K(g) - m && $e(S > 32 ? Jt(g + ";", o, r, m - 1, f) : Jt(y(g, " ", "") + ";", o, r, m - 2, f), f);
            break;
          case 59:
            g += ";";
          default:
            if ($e(k = Kt(g, t, r, d, p, a, l, C, O = [], N = [], m, i), i), v === 123)
              if (p === 0)
                Xe(g, t, k, k, O, i, m, l, N);
              else
                switch (b === 99 && F(g, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xe(e, k, k, o && $e(Kt(e, k, k, 0, 0, a, l, C, a, O = [], m, N), N), a, N, m, l, o ? O : N);
                    break;
                  default:
                    Xe(g, k, k, k, [""], N, 0, l, N);
                }
        }
        d = p = S = 0, D = R = 1, C = g = "", m = c;
        break;
      case 58:
        m = 1 + K(g), S = T;
      default:
        if (D < 1) {
          if (v == 123)
            --D;
          else if (v == 125 && D++ == 0 && bn() == 125)
            continue;
        }
        switch (g += Ct(v), v * D) {
          case 38:
            R = p > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            l[d++] = (K(g) - 1) * R, R = 1;
            break;
          case 64:
            de() === 45 && (g += pt(X())), b = de(), p = m = K(C = g += xn(qe())), v++;
            break;
          case 45:
            T === 45 && K(g) == 2 && (D = 0);
        }
    }
  return i;
}
function Kt(e, t, r, o, a, i, c, l, f, d, p, m) {
  for (var b = a - 1, S = a === 0 ? i : [""], T = gr(S), D = 0, M = 0, R = 0; D < o; ++D)
    for (var v = 0, C = _e(e, b + 1, b = hr(M = c[D])), O = e; v < T; ++v)
      (O = mr(M > 0 ? S[v] + " " + C : y(C, /&\f/g, S[v]))) && (f[R++] = O);
  return rt(e, t, r, a === 0 ? et : l, f, d, p, m);
}
function Cn(e, t, r, o) {
  return rt(e, t, r, dr, Ct(vn()), _e(e, 2, -2), 0, o);
}
function Jt(e, t, r, o, a) {
  return rt(e, t, r, Rt, _e(e, 0, o), _e(e, o + 1, -1), o, a);
}
function vr(e, t, r) {
  switch (gn(e, t)) {
    case 5103:
      return x + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return x + e + e;
    case 4789:
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return x + e + Fe + e + A + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return x + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return x + e + A + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return x + e + A + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return x + e + A + e + e;
    case 6165:
      return x + e + A + "flex-" + e + e;
    case 5187:
      return x + e + y(e, /(\w+).+(:[^]+)/, x + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return x + e + A + "flex-item-" + y(e, /flex-|-self/g, "") + (ne(e, /flex-|baseline/) ? "" : A + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return x + e + A + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return x + e + A + y(e, "shrink", "negative") + e;
    case 5292:
      return x + e + A + y(e, "basis", "preferred-size") + e;
    case 6060:
      return x + "box-" + y(e, "-grow", "") + x + e + A + y(e, "grow", "positive") + e;
    case 4554:
      return x + y(e, /([^-])(transform)/g, "$1" + x + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, x + "$1"), /(image-set)/, x + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, x + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, x + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + x + e + e;
    case 4200:
      if (!ne(e, /flex-|baseline/))
        return A + "grid-column-align" + _e(e, t) + e;
      break;
    case 2592:
    case 3360:
      return A + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, ne(o.props, /grid-\w+-end/);
      }) ? ~He(e + (r = r[t].value), "span", 0) ? e : A + y(e, "-start", "") + e + A + "grid-row-span:" + (~He(r, "span", 0) ? ne(r, /\d+/) : +ne(r, /\d+/) - +ne(e, /\d+/)) + ";" : A + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return ne(o.props, /grid-\w+-start/);
      }) ? e : A + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, x + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (K(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + x + "$2-$3$1" + Fe + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~He(e, "stretch", 0) ? vr(y(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, l, f, d) {
        return A + a + ":" + i + d + (c ? A + a + "-span:" + (l ? f : +f - +i) + d : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return y(e, ":", ":" + x) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + x + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + x + "$2$3$1" + A + "$2box$3") + e;
        case 100:
          return y(e, ":", ":" + A) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ze(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Pn(e, t, r, o) {
  switch (e.type) {
    case mn:
      if (e.children.length)
        break;
    case hn:
    case Rt:
      return e.return = e.return || e.value;
    case dr:
      return "";
    case pr:
      return e.return = e.value + "{" + Ze(e.children, o) + "}";
    case et:
      if (!K(e.value = e.props.join(",")))
        return "";
  }
  return K(r = Ze(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Tn(e) {
  var t = gr(e);
  return function(r, o, a, i) {
    for (var c = "", l = 0; l < t; l++)
      c += e[l](r, o, a, i) || "";
    return c;
  };
}
function On(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function An(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Rt:
        e.return = vr(e.value, e.length, r);
        return;
      case pr:
        return Ze([ce(e, { value: y(e.value, "@", "@" + x) })], o);
      case et:
        if (e.length)
          return yn(r = e.props, function(a) {
            switch (ne(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Se(ce(e, { props: [y(a, /:(read-\w+)/, ":" + Fe + "$1")] })), Se(ce(e, { props: [a] })), vt(e, { props: Xt(r, o) });
                break;
              case "::placeholder":
                Se(ce(e, { props: [y(a, /:(plac\w+)/, ":" + x + "input-$1")] })), Se(ce(e, { props: [y(a, /:(plac\w+)/, ":" + Fe + "$1")] })), Se(ce(e, { props: [y(a, /:(plac\w+)/, A + "input-$1")] })), Se(ce(e, { props: [a] })), vt(e, { props: Xt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Nn = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", br = "active", wr = "data-styled-version", ot = "6.1.8", Pt = `/*!sc*/
`, Tt = typeof window < "u" && "HTMLElement" in window, Dn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Zt = /invalid hook call/i, Ye = /* @__PURE__ */ new Set(), In = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var l = [], f = 1; f < arguments.length; f++)
          l[f - 1] = arguments[f];
        Zt.test(c) ? (i = !1, Ye.delete(o)) : a.apply(void 0, Ee([c], l, !1));
      }, on(), i && !Ye.has(o) && (console.warn(o), Ye.add(o));
    } catch (c) {
      Zt.test(c.message) && Ye.delete(o);
    } finally {
      console.error = a;
    }
  }
}, at = Object.freeze([]), Re = Object.freeze({});
function jn(e, t, r) {
  return r === void 0 && (r = Re), e.theme !== r.theme && e.theme || t || r.theme;
}
var kt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), $n = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fn = /(^-|-$)/g;
function Qt(e) {
  return e.replace($n, "-").replace(Fn, "");
}
var Mn = /(a)(d)/gi, Be = 52, er = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function St(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Be; t = t / Be | 0)
    r = er(t % Be) + r;
  return (er(t % Be) + r).replace(Mn, "$1-$2");
}
var ht, kr = 5381, fe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Sr = function(e) {
  return fe(kr, e);
};
function Ln(e) {
  return St(Sr(e) >>> 0);
}
function Er(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function mt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var _r = typeof Symbol == "function" && Symbol.for, xr = _r ? Symbol.for("react.memo") : 60115, Wn = _r ? Symbol.for("react.forward_ref") : 60112, zn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Vn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Rr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Yn = ((ht = {})[Wn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, ht[xr] = Rr, ht);
function tr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === xr ? Rr : "$$typeof" in e ? Yn[e.$$typeof] : zn;
  var t;
}
var Bn = Object.defineProperty, Un = Object.getOwnPropertyNames, rr = Object.getOwnPropertySymbols, Gn = Object.getOwnPropertyDescriptor, Hn = Object.getPrototypeOf, nr = Object.prototype;
function Cr(e, t, r) {
  if (typeof t != "string") {
    if (nr) {
      var o = Hn(t);
      o && o !== nr && Cr(e, o, r);
    }
    var a = Un(t);
    rr && (a = a.concat(rr(t)));
    for (var i = tr(e), c = tr(t), l = 0; l < a.length; ++l) {
      var f = a[l];
      if (!(f in Vn || r && r[f] || c && f in c || i && f in i)) {
        var d = Gn(t, f);
        try {
          Bn(e, f, d);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ce(e) {
  return typeof e == "function";
}
function Ot(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function le(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function or(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function Pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Et(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Pe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = Et(e[o], t[o]);
  else if (Pe(t))
    for (var o in t)
      e[o] = Et(e[o], t[o]);
  return e;
}
function At(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var qn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Xn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, i = e.length; a < i; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Oe(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Xn.apply(void 0, Ee([qn[e]], t, !1)).trim());
}
var Kn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; t >= i; )
        if ((i <<= 1) < 0)
          throw Oe(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), f = (c = 0, r.length); c < f; c++)
      this.tag.insertRule(l, r[c]) && (this.groupSizes[t]++, l++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), i = a + o, c = a; c < i; c++)
      r += "".concat(this.tag.getRule(c)).concat(Pt);
    return r;
  }, e;
}(), Ke = /* @__PURE__ */ new Map(), Qe = /* @__PURE__ */ new Map(), Je = 1, Ue = function(e) {
  if (Ke.has(e))
    return Ke.get(e);
  for (; Qe.has(Je); )
    Je++;
  var t = Je++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Oe(16, "".concat(t));
  return Ke.set(e, t), Qe.set(t, e), t;
}, Jn = function(e, t) {
  Je = t + 1, Ke.set(e, t), Qe.set(t, e);
}, Zn = "style[".concat(me, "][").concat(wr, '="').concat(ot, '"]'), Qn = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), eo = function(e, t, r) {
  for (var o, a = r.split(","), i = 0, c = a.length; i < c; i++)
    (o = a[i]) && e.registerName(t, o);
}, to = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Pt), a = [], i = 0, c = o.length; i < c; i++) {
    var l = o[i].trim();
    if (l) {
      var f = l.match(Qn);
      if (f) {
        var d = 0 | parseInt(f[1], 10), p = f[2];
        d !== 0 && (Jn(p, d), eo(e, p, f[3]), e.getTag().insertRules(d, a)), a.length = 0;
      } else
        a.push(l);
    }
  }
};
function ro() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Pr = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(l) {
    var f = Array.from(l.querySelectorAll("style[".concat(me, "]")));
    return f[f.length - 1];
  }(r), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(me, br), o.setAttribute(wr, ot);
  var c = ro();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, i), o;
}, no = function() {
  function e(t) {
    this.element = Pr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === r)
          return c;
      }
      throw Oe(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), oo = function() {
  function e(t) {
    this.element = Pr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), ao = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ar = Tt, io = { isServer: !Tt, useCSSOMInjection: !Dn }, Tr = function() {
  function e(t, r, o) {
    t === void 0 && (t = Re), r === void 0 && (r = {});
    var a = this;
    this.options = z(z({}, io), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Tt && ar && (ar = !1, function(i) {
      for (var c = document.querySelectorAll(Zn), l = 0, f = c.length; l < f; l++) {
        var d = c[l];
        d && d.getAttribute(me) !== br && (to(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this)), At(this, function() {
      return function(i) {
        for (var c = i.getTag(), l = c.length, f = "", d = function(m) {
          var b = function(R) {
            return Qe.get(R);
          }(m);
          if (b === void 0)
            return "continue";
          var S = i.names.get(b), T = c.getGroup(m);
          if (S === void 0 || T.length === 0)
            return "continue";
          var D = "".concat(me, ".g").concat(m, '[id="').concat(b, '"]'), M = "";
          S !== void 0 && S.forEach(function(R) {
            R.length > 0 && (M += "".concat(R, ","));
          }), f += "".concat(T).concat(D, '{content:"').concat(M, '"}').concat(Pt);
        }, p = 0; p < l; p++)
          d(p);
        return f;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return Ue(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(z(z({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new ao(a) : o ? new no(a) : new oo(a);
    }(this.options), new Kn(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ue(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Ue(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ue(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), so = /&/g, co = /^\s*\/\/.*$/gm;
function Or(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Or(r.children, t)), r;
  });
}
function uo(e) {
  var t, r, o, a = e === void 0 ? Re : e, i = a.options, c = i === void 0 ? Re : i, l = a.plugins, f = l === void 0 ? at : l, d = function(b, S, T) {
    return T.startsWith(r) && T.endsWith(r) && T.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, p = f.slice();
  p.push(function(b) {
    b.type === et && b.value.includes("&") && (b.props[0] = b.props[0].replace(so, r).replace(o, d));
  }), c.prefix && p.push(An), p.push(Pn);
  var m = function(b, S, T, D) {
    S === void 0 && (S = ""), T === void 0 && (T = ""), D === void 0 && (D = "&"), t = D, r = S, o = new RegExp("\\".concat(r, "\\b"), "g");
    var M = b.replace(co, ""), R = Rn(T || S ? "".concat(T, " ").concat(S, " { ").concat(M, " }") : M);
    c.namespace && (R = Or(R, c.namespace));
    var v = [];
    return Ze(R, Tn(p.concat(On(function(C) {
      return v.push(C);
    })))), v;
  };
  return m.hash = f.length ? f.reduce(function(b, S) {
    return S.name || Oe(15), fe(b, S.name);
  }, kr).toString() : "", m;
}
var fo = new Tr(), _t = uo(), Ar = he.createContext({ shouldForwardProp: void 0, styleSheet: fo, stylis: _t });
Ar.Consumer;
he.createContext(void 0);
function ir() {
  return sn(Ar);
}
var sr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = _t);
      var c = o.name + i.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, i(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, At(this, function() {
      throw Oe(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = _t), this.name + t.hash;
  }, e;
}(), lo = function(e) {
  return e >= "A" && e <= "Z";
};
function cr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    lo(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Nr = function(e) {
  return e == null || e === !1 || e === "";
}, Dr = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !Nr(i) && (Array.isArray(i) && i.isCss || Ce(i) ? o.push("".concat(cr(a), ":"), i, ";") : Pe(i) ? o.push.apply(o, Ee(Ee(["".concat(a, " {")], Dr(i), !1), ["}"], !1)) : o.push("".concat(cr(a), ": ").concat((t = a, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Nn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function pe(e, t, r, o) {
  if (Nr(e))
    return [];
  if (Ot(e))
    return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof sr || Pe(a) || a === null || console.error("".concat(Er(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), pe(a, t, r, o);
  }
  var i;
  return e instanceof sr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Pe(e) ? Dr(e) : Array.isArray(e) ? Array.prototype.concat.apply(at, e.map(function(c) {
    return pe(c, t, r, o);
  })) : [e.toString()];
}
function po(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ce(r) && !Ot(r))
      return !1;
  }
  return !0;
}
var ho = Sr(ot), mo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && po(t), this.componentId = r, this.baseHash = fe(ho, r), this.baseStyle = o, Tr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        a = le(a, this.staticRulesId);
      else {
        var i = or(pe(this.rules, t, r, o)), c = St(fe(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var l = o(i, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, l);
        }
        a = le(a, c), this.staticRulesId = c;
      }
    else {
      for (var f = fe(this.baseHash, o.hash), d = "", p = 0; p < this.rules.length; p++) {
        var m = this.rules[p];
        if (typeof m == "string")
          d += m, process.env.NODE_ENV !== "production" && (f = fe(f, m));
        else if (m) {
          var b = or(pe(m, t, r, o));
          f = fe(f, b + p), d += b;
        }
      }
      if (d) {
        var S = St(f >>> 0);
        r.hasNameForId(this.componentId, S) || r.insertRules(this.componentId, S, o(d, ".".concat(S), void 0, this.componentId)), a = le(a, S);
      }
    }
    return a;
  }, e;
}(), Ir = he.createContext(void 0);
Ir.Consumer;
var gt = {}, ur = /* @__PURE__ */ new Set();
function go(e, t, r) {
  var o = Ot(e), a = e, i = !mt(e), c = t.attrs, l = c === void 0 ? at : c, f = t.componentId, d = f === void 0 ? function(O, N) {
    var k = typeof O != "string" ? "sc" : Qt(O);
    gt[k] = (gt[k] || 0) + 1;
    var g = "".concat(k, "-").concat(Ln(ot + k + gt[k]));
    return N ? "".concat(N, "-").concat(g) : g;
  }(t.displayName, t.parentComponentId) : f, p = t.displayName, m = p === void 0 ? function(O) {
    return mt(O) ? "styled.".concat(O) : "Styled(".concat(Er(O), ")");
  }(e) : p, b = t.displayName && t.componentId ? "".concat(Qt(t.displayName), "-").concat(t.componentId) : t.componentId || d, S = o && a.attrs ? a.attrs.concat(l).filter(Boolean) : l, T = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var D = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      T = function(O, N) {
        return D(O, N) && M(O, N);
      };
    } else
      T = D;
  }
  var R = new mo(r, b, o ? a.componentStyle : void 0);
  function v(O, N) {
    return function(k, g, J) {
      var Z = k.attrs, it = k.componentStyle, st = k.defaultProps, Me = k.foldedComponentIds, V = k.styledComponentId, Q = k.target, ue = he.useContext(Ir), Le = ir(), ge = k.shouldForwardProp || Le.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Gt(V);
      var Ae = jn(g, ue, st) || Re, Y = function(ve, ee, ie) {
        for (var G, H = z(z({}, ee), { className: void 0, theme: ie }), se = 0; se < ve.length; se += 1) {
          var be = Ce(G = ve[se]) ? G(H) : G;
          for (var q in be)
            H[q] = q === "className" ? le(H[q], be[q]) : q === "style" ? z(z({}, H[q]), be[q]) : be[q];
        }
        return ee.className && (H.className = le(H.className, ee.className)), H;
      }(Z, g, Ae), oe = Y.as || Q, ae = {};
      for (var L in Y)
        Y[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && Y.theme === Ae || (L === "forwardedAs" ? ae.as = Y.forwardedAs : ge && !ge(L, oe) || (ae[L] = Y[L], ge || process.env.NODE_ENV !== "development" || pn(L) || ur.has(L) || !kt.has(oe) || (ur.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(ve, ee) {
        var ie = ir(), G = ve.generateAndInjectStyles(ee, ie.styleSheet, ie.stylis);
        return process.env.NODE_ENV !== "production" && Gt(G), G;
      }(it, Y);
      process.env.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(ye);
      var Ne = le(Me, V);
      return ye && (Ne += " " + ye), Y.className && (Ne += " " + Y.className), ae[mt(oe) && !kt.has(oe) ? "class" : "className"] = Ne, ae.ref = J, an(oe, ae);
    }(C, O, N);
  }
  v.displayName = m;
  var C = he.forwardRef(v);
  return C.attrs = S, C.componentStyle = R, C.displayName = m, C.shouldForwardProp = T, C.foldedComponentIds = o ? le(a.foldedComponentIds, a.styledComponentId) : "", C.styledComponentId = b, C.target = o ? a.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = o ? function(N) {
      for (var k = [], g = 1; g < arguments.length; g++)
        k[g - 1] = arguments[g];
      for (var J = 0, Z = k; J < Z.length; J++)
        Et(N, Z[J], !0);
      return N;
    }({}, a.defaultProps, O) : O;
  } }), process.env.NODE_ENV !== "production" && (In(m, b), C.warnTooManyClasses = /* @__PURE__ */ function(O, N) {
    var k = {}, g = !1;
    return function(J) {
      if (!g && (k[J] = !0, Object.keys(k).length >= 200)) {
        var Z = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(O).concat(Z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, k = {};
      }
    };
  }(m, b)), At(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && Cr(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function fr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var lr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function yo(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Ce(e) || Pe(e))
    return lr(pe(fr(at, Ee([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? pe(o) : lr(pe(fr(o, t)));
}
function xt(e, t, r) {
  if (r === void 0 && (r = Re), !t)
    throw Oe(1, t);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(t, r, yo.apply(void 0, Ee([a], i, !1)));
  };
  return o.attrs = function(a) {
    return xt(e, t, z(z({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return xt(e, t, z(z({}, r), a));
  }, o;
}
var jr = function(e) {
  return xt(go, e);
}, Nt = jr;
kt.forEach(function(e) {
  Nt[e] = jr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ge = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ge] || (window[Ge] = 0), window[Ge] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ge] += 1);
const vo = (e) => {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (t) {
    let r = parseInt(t[1], 16), o = parseInt(t[2], 16), a = parseInt(t[3], 16);
    r /= 255, o /= 255, a /= 255;
    const i = Math.max(r, o, a), c = Math.min(r, o, a);
    let l, f;
    const d = (i + c) / 2;
    if (i == c)
      l = f = 0;
    else {
      const p = i - c;
      switch (f = d > 0.5 ? p / (2 - i - c) : p / (i + c), i) {
        case r:
          l = (o - a) / p + (o < a ? 6 : 0);
          break;
        case o:
          l = (a - r) / p + 2;
          break;
        case a:
          l = (r - o) / p + 4;
          break;
        default:
          l = 0;
      }
      l /= 6;
    }
    return {
      h: l,
      s: f,
      l: d
    };
  } else
    throw new Error("Non valid HEX color");
}, bo = Nt.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`, wo = ({ className: e, color: t }) => {
  const r = cn(
    () => new Array(6).fill(t).map((o, a) => {
      const { h: i, s: c, l } = vo(o), d = [Math.min(360, i * 360 + 10 * a), c * 100, l * 100].map(Math.round);
      return `hsl(${d[0]}, ${d[1]}%, ${d[2]}%)`;
    }),
    [t]
  );
  return /* @__PURE__ */ re.jsxs("svg", { className: e, viewBox: "0 0 128 128", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ re.jsx(
      "circle",
      {
        className: "pl__ring1",
        cx: "64",
        cy: "64",
        r: "60",
        fill: "none",
        stroke: r[0],
        strokeWidth: "8",
        transform: "rotate(-90,64,64)",
        strokeLinecap: "round",
        strokeDasharray: "377 377",
        strokeDashoffset: "-376.4"
      }
    ),
    /* @__PURE__ */ re.jsx(
      "circle",
      {
        className: "pl__ring2",
        cx: "64",
        cy: "64",
        r: "52.5",
        fill: "none",
        stroke: r[1],
        strokeWidth: "7",
        transform: "rotate(-90,64,64)",
        strokeLinecap: "round",
        strokeDasharray: "329.9 329.9",
        strokeDashoffset: "-329.3"
      }
    ),
    /* @__PURE__ */ re.jsx(
      "circle",
      {
        className: "pl__ring3",
        cx: "64",
        cy: "64",
        r: "46",
        fill: "none",
        stroke: r[2],
        strokeWidth: "6",
        transform: "rotate(-90,64,64)",
        strokeLinecap: "round",
        strokeDasharray: "289 289",
        strokeDashoffset: "-288.6"
      }
    ),
    /* @__PURE__ */ re.jsx(
      "circle",
      {
        className: "pl__ring4",
        cx: "64",
        cy: "64",
        r: "40.5",
        fill: "none",
        stroke: r[3],
        strokeWidth: "5",
        transform: "rotate(-90,64,64)",
        strokeLinecap: "round",
        strokeDasharray: "254.5 254.5",
        strokeDashoffset: "-254"
      }
    ),
    /* @__PURE__ */ re.jsx(
      "circle",
      {
        className: "pl__ring5",
        cx: "64",
        cy: "64",
        r: "36",
        fill: "none",
        stroke: r[4],
        strokeWidth: "4",
        transform: "rotate(-90,64,64)",
        strokeLinecap: "round",
        strokeDasharray: "226.2 226.2",
        strokeDashoffset: "-225.8"
      }
    ),
    /* @__PURE__ */ re.jsx(
      "circle",
      {
        className: "pl__ring6",
        cx: "64",
        cy: "64",
        r: "32.5",
        fill: "none",
        stroke: r[5],
        strokeWidth: "3",
        transform: "rotate(-90,64,64)",
        strokeLinecap: "round",
        strokeDasharray: "204.2 204.2",
        strokeDashoffset: "-203.9"
      }
    )
  ] });
}, ko = Nt(wo)`
  width: ${(e) => e.size || "8em"};
  height: ${(e) => e.size || "8em"};
  circle {
    transform-box: fill-box;
    transform-origin: 50% 50%;
  }
  .pl__ring1 {
    animation: ring1 4s 0s ease-in-out infinite;
  }
  .pl__ring2 {
    animation: ring2 4s 0.04s ease-in-out infinite;
  }
  .pl__ring3 {
    animation: ring3 4s 0.08s ease-in-out infinite;
  }
  .pl__ring4 {
    animation: ring4 4s 0.12s ease-in-out infinite;
  }
  .pl__ring5 {
    animation: ring5 4s 0.16s ease-in-out infinite;
  }
  .pl__ring6 {
    animation: ring6 4s 0.2s ease-in-out infinite;
  }

  /* Animations */
  @keyframes ring1 {
    from {
      stroke-dashoffset: -376.237129776;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -94.247778;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -376.237129776;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -94.247778;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -376.237129776;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring2 {
    from {
      stroke-dashoffset: -329.207488554;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -82.46680575;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -329.207488554;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -82.46680575;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -329.207488554;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring3 {
    from {
      stroke-dashoffset: -288.4484661616;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -72.2566298;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -288.4484661616;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -72.2566298;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -288.4484661616;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring4 {
    from {
      stroke-dashoffset: -253.9600625988;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -63.61725015;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -253.9600625988;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -63.61725015;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -253.9600625988;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring5 {
    from {
      stroke-dashoffset: -225.7422778656;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -56.5486668;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -225.7422778656;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -56.5486668;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -225.7422778656;
      transform: rotate(4.75turn);
    }
  }
  @keyframes ring6 {
    from {
      stroke-dashoffset: -203.795111962;
      transform: rotate(-0.25turn);
      animation-timing-function: ease-in;
    }
    23% {
      stroke-dashoffset: -51.05087975;
      transform: rotate(1turn);
      animation-timing-function: ease-out;
    }
    46%,
    50% {
      stroke-dashoffset: -203.795111962;
      transform: rotate(2.25turn);
      animation-timing-function: ease-in;
    }
    73% {
      stroke-dashoffset: -51.05087975;
      transform: rotate(3.5turn);
      animation-timing-function: ease-out;
    }
    96%,
    to {
      stroke-dashoffset: -203.795111962;
      transform: rotate(4.75turn);
    }
  }
`, Eo = ({ color: e, size: t }) => /* @__PURE__ */ re.jsx(bo, { children: /* @__PURE__ */ re.jsx(ko, { color: e, size: t }) });
export {
  Eo as Loading
};
