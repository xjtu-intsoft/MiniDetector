function _interopDefault(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}

function isPlainObject(e) {
    if ("object" != typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}

function createStore(e, t, r) {
    function n() {
        l === p && (l = p.slice());
    }
    function o() {
        if (y) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return f;
    }
    function i(e) {
        if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
        if (y) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
        var t = !0;
        return n(), l.push(e), function() {
            if (t) {
                if (y) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                t = !1, n();
                var r = l.indexOf(e);
                l.splice(r, 1);
            }
        };
    }
    function c(e) {
        if (!isPlainObject(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (y) throw new Error("Reducers may not dispatch actions.");
        try {
            y = !0, f = d(f, e);
        } finally {
            y = !1;
        }
        for (var t = p = l, r = 0; r < t.length; r++) {
            (0, t[r])();
        }
        return e;
    }
    function a(e) {
        if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
        d = e, c({
            type: ActionTypes.REPLACE
        });
    }
    function u() {
        var e, t = i;
        return e = {
            subscribe: function(e) {
                function r() {
                    e.next && e.next(o());
                }
                if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");
                return r(), {
                    unsubscribe: t(r)
                };
            }
        }, e[$$observable] = function() {
            return this;
        }, e;
    }
    var s;
    if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
    if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
        if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
        return r(createStore)(e, t);
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var d = e, f = t, p = [], l = p, y = !1;
    return c({
        type: ActionTypes.INIT
    }), s = {
        dispatch: c,
        subscribe: i,
        getState: o,
        replaceReducer: a
    }, s[$$observable] = u, s;
}

function warning(e) {
    "undefined" != typeof console && "function" == typeof console.error && console.error(e);
    try {
        throw new Error(e);
    } catch (e) {}
}

function getUndefinedStateErrorMessage(e, t) {
    var r = t && t.type;
    return "Given " + (r && 'action "' + String(r) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(e, t, r, n) {
    var o = Object.keys(t), i = r && r.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (0 === o.length) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    if (!isPlainObject(e)) return "The " + i + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following keys: "' + o.join('", "') + '"';
    var c = Object.keys(e).filter(function(e) {
        return !t.hasOwnProperty(e) && !n[e];
    });
    return c.forEach(function(e) {
        n[e] = !0;
    }), r && r.type === ActionTypes.REPLACE ? void 0 : c.length > 0 ? "Unexpected " + (c.length > 1 ? "keys" : "key") + ' "' + c.join('", "') + '" found in ' + i + '. Expected to find one of the known reducer keys instead: "' + o.join('", "') + '". Unexpected keys will be ignored.' : void 0;
}

function assertReducerShape(e) {
    Object.keys(e).forEach(function(t) {
        var r = e[t];
        if (void 0 === r(void 0, {
            type: ActionTypes.INIT
        })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
        if (void 0 === r(void 0, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
    });
}

function combineReducers(e) {
    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        "function" == typeof e[o] && (r[o] = e[o]);
    }
    var i, c = Object.keys(r);
    try {
        assertReducerShape(r);
    } catch (e) {
        i = e;
    }
    return function(e, t) {
        if (void 0 === e && (e = {}), i) throw i;
        for (var n = !1, o = {}, a = 0; a < c.length; a++) {
            var u = c[a], s = r[u], d = e[u], f = s(d, t);
            if (void 0 === f) {
                var p = getUndefinedStateErrorMessage(u, t);
                throw new Error(p);
            }
            o[u] = f, n = n || f !== d;
        }
        return n ? o : e;
    };
}

function bindActionCreator(e, t) {
    return function() {
        return t(e.apply(this, arguments));
    };
}

function bindActionCreators(e, t) {
    if ("function" == typeof e) return bindActionCreator(e, t);
    if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    var r = {};
    for (var n in e) {
        var o = e[n];
        "function" == typeof o && (r[n] = bindActionCreator(o, t));
    }
    return r;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function ownKeys(e, t) {
    var r = Object.keys(e);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(e)), 
    t && (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), r;
}

function _objectSpread2(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(r, !0).forEach(function(t) {
            _defineProperty(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function compose() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return 0 === t.length ? function(e) {
        return e;
    } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments));
        };
    });
}

function applyMiddleware() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return function(e) {
        return function() {
            var r = e.apply(void 0, arguments), n = function() {
                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            }, o = {
                getState: r.getState,
                dispatch: function() {
                    return n.apply(void 0, arguments);
                }
            }, i = t.map(function(e) {
                return e(o);
            });
            return n = compose.apply(void 0, i)(r.dispatch), _objectSpread2({}, r, {
                dispatch: n
            });
        };
    };
}

function isCrushed() {}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var $$observable = _interopDefault(require("./../../symbol-observable/lib/index.js")), randomString = function() {
    return Math.random().toString(36).substring(7).split("").join(".");
}, ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};

exports.__DO_NOT_USE__ActionTypes = ActionTypes, exports.applyMiddleware = applyMiddleware, 
exports.bindActionCreators = bindActionCreators, exports.combineReducers = combineReducers, 
exports.compose = compose, exports.createStore = createStore;