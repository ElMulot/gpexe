(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~document"],{

/***/ "./node_modules/@ungap/url-search-params/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ungap/url-search-params/cjs/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! (c) Andrea Giammarchi - ISC */
var self = {};
try {
  (function (URLSearchParams, plus) {
    if (
      new URLSearchParams('q=%2B').get('q') !== plus ||
      new URLSearchParams({q: plus}).get('q') !== plus ||
      new URLSearchParams([['q', plus]]).get('q') !== plus ||
      new URLSearchParams('q=\n').toString() !== 'q=%0A' ||
      new URLSearchParams({q: ' &'}).toString() !== 'q=+%26' ||
      new URLSearchParams({q: '%zx'}).toString() !== 'q=%25zx'
    )
      throw URLSearchParams;
    self.URLSearchParams = URLSearchParams;
  }(URLSearchParams, '+'));
} catch(URLSearchParams) {
  (function (Object, String, isArray) {'use strict';
    var create = Object.create;
    var defineProperty = Object.defineProperty;
    var find = /[!'\(\)~]|%20|%00/g;
    var findPercentSign = /%(?![0-9a-fA-F]{2})/g;
    var plus = /\+/g;
    var replace = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    var proto = {
      append: function (key, value) {
        appendTo(this._ungap, key, value);
      },
      delete: function (key) {
        delete this._ungap[key];
      },
      get: function (key) {
        return this.has(key) ? this._ungap[key][0] : null;
      },
      getAll: function (key) {
        return this.has(key) ? this._ungap[key].slice(0) : [];
      },
      has: function (key) {
        return key in this._ungap;
      },
      set: function (key, value) {
        this._ungap[key] = [String(value)];
      },
      forEach: function (callback, thisArg) {
        var self = this;
        for (var key in self._ungap)
          self._ungap[key].forEach(invoke, key);
        function invoke(value) {
          callback.call(thisArg, value, String(key), self);
        }
      },
      toJSON: function () {
        return {};
      },
      toString: function () {
        var query = [];
        for (var key in this._ungap) {
          var encoded = encode(key);
          for (var
            i = 0,
            value = this._ungap[key];
            i < value.length; i++
          ) {
            query.push(encoded + '=' + encode(value[i]));
          }
        }
        return query.join('&');
      }
    };
    for (var key in proto)
      defineProperty(URLSearchParams.prototype, key, {
        configurable: true,
        writable: true,
        value: proto[key]
      });
    self.URLSearchParams = URLSearchParams;
    function URLSearchParams(query) {
      var dict = create(null);
      defineProperty(this, '_ungap', {value: dict});
      switch (true) {
        case !query:
          break;
        case typeof query === 'string':
          if (query.charAt(0) === '?') {
            query = query.slice(1);
          }
          for (var
            pairs = query.split('&'),
            i = 0,
            length = pairs.length; i < length; i++
          ) {
            var value = pairs[i];
            var index = value.indexOf('=');
            if (-1 < index) {
              appendTo(
                dict,
                decode(value.slice(0, index)),
                decode(value.slice(index + 1))
              );
            } else if (value.length){
              appendTo(
                dict,
                decode(value),
                ''
              );
            }
          }
          break;
        case isArray(query):
          for (var
            i = 0,
            length = query.length; i < length; i++
          ) {
            var value = query[i];
            appendTo(dict, value[0], value[1]);
          }
          break;
        case 'forEach' in query:
          query.forEach(addEach, dict);
          break;
        default:
          for (var key in query)
            appendTo(dict, key, query[key]);
      }
    }

    function addEach(value, key) {
      appendTo(this, key, value);
    }

    function appendTo(dict, key, value) {
      var res = isArray(value) ? value.join(',') : value;
      if (key in dict)
        dict[key].push(res);
      else
        dict[key] = [res];
    }

    function decode(str) {
      return decodeURIComponent(str.replace(findPercentSign, '%25').replace(plus, ' '));
    }

    function encode(str) {
      return encodeURIComponent(str).replace(find, replacer);
    }

    function replacer(match) {
      return replace[match];
    }

  }(Object, String, Array.isArray));
}

(function (URLSearchParamsProto) {

  var iterable = false;
  try { iterable = !!Symbol.iterator; } catch (o_O) {}

  /* istanbul ignore else */
  if (!('forEach' in URLSearchParamsProto)) {
    URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
      var self = this;
      var names = Object.create(null);
      this.toString()
          .replace(/=[\s\S]*?(?:&|$)/g, '=')
          .split('=')
          .forEach(function (name) {
            if (!name.length || name in names)
              return;
            (names[name] = self.getAll(name)).forEach(function(value) {
              callback.call(thisArg, value, name, self);
            });
          });
    };
  }

  /* istanbul ignore else */
  if (!('keys' in URLSearchParamsProto)) {
    URLSearchParamsProto.keys = function keys() {
      return iterator(this, function(value, key) { this.push(key); });
    };
  }

   /* istanbul ignore else */
  if (!('values' in URLSearchParamsProto)) {
    URLSearchParamsProto.values = function values() {
      return iterator(this, function(value, key) { this.push(value); });
    };
  }

  /* istanbul ignore else */
  if (!('entries' in URLSearchParamsProto)) {
    URLSearchParamsProto.entries = function entries() {
      return iterator(this, function(value, key) { this.push([key, value]); });
    };
  }

  /* istanbul ignore else */
  if (iterable && !(Symbol.iterator in URLSearchParamsProto)) {
    URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;
  }

  /* istanbul ignore else */
  if (!('sort' in URLSearchParamsProto)) {
    URLSearchParamsProto.sort = function sort() {
      var
        entries = this.entries(),
        entry = entries.next(),
        done = entry.done,
        keys = [],
        values = Object.create(null),
        i, key, value
      ;
      while (!done) {
        value = entry.value;
        key = value[0];
        keys.push(key);
        if (!(key in values)) {
          values[key] = [];
        }
        values[key].push(value[1]);
        entry = entries.next();
        done = entry.done;
      }
      // not the champion in efficiency
      // but these two bits just do the job
      keys.sort();
      for (i = 0; i < keys.length; i++) {
        this.delete(keys[i]);
      }
      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        this.append(key, values[key].shift());
      }
    };
  }

  function iterator(self, callback) {
    var items = [];
    self.forEach(callback, items);
    /* istanbul ignore next */
    return iterable ?
      items[Symbol.iterator]() :
      {
        next: function() {
          var value = items.shift();
          return {done: value === void 0, value: value};
        }
      };
  }

  /* istanbul ignore next */
  (function (Object) {
    var
      dP = Object.defineProperty,
      gOPD = Object.getOwnPropertyDescriptor,
      createSearchParamsPollute = function (search) {
        function append(name, value) {
          URLSearchParamsProto.append.call(this, name, value);
          name = this.toString();
          search.set.call(this._usp, name ? ('?' + name) : '');
        }
        function del(name) {
          URLSearchParamsProto.delete.call(this, name);
          name = this.toString();
          search.set.call(this._usp, name ? ('?' + name) : '');
        }
        function set(name, value) {
          URLSearchParamsProto.set.call(this, name, value);
          name = this.toString();
          search.set.call(this._usp, name ? ('?' + name) : '');
        }
        return function (sp, value) {
          sp.append = append;
          sp.delete = del;
          sp.set = set;
          return dP(sp, '_usp', {
            configurable: true,
            writable: true,
            value: value
          });
        };
      },
      createSearchParamsCreate = function (polluteSearchParams) {
        return function (obj, sp) {
          dP(
            obj, '_searchParams', {
              configurable: true,
              writable: true,
              value: polluteSearchParams(sp, obj)
            }
          );
          return sp;
        };
      },
      updateSearchParams = function (sp) {
        var append = sp.append;
        sp.append = URLSearchParamsProto.append;
        URLSearchParams.call(sp, sp._usp.search.slice(1));
        sp.append = append;
      },
      verifySearchParams = function (obj, Class) {
        if (!(obj instanceof Class)) throw new TypeError(
          "'searchParams' accessed on an object that " +
          "does not implement interface " + Class.name
        );
      },
      upgradeClass = function (Class) {
        var
          ClassProto = Class.prototype,
          searchParams = gOPD(ClassProto, 'searchParams'),
          href = gOPD(ClassProto, 'href'),
          search = gOPD(ClassProto, 'search'),
          createSearchParams
        ;
        if (!searchParams && search && search.set) {
          createSearchParams = createSearchParamsCreate(
            createSearchParamsPollute(search)
          );
          Object.defineProperties(
            ClassProto,
            {
              href: {
                get: function () {
                  return href.get.call(this);
                },
                set: function (value) {
                  var sp = this._searchParams;
                  href.set.call(this, value);
                  if (sp) updateSearchParams(sp);
                }
              },
              search: {
                get: function () {
                  return search.get.call(this);
                },
                set: function (value) {
                  var sp = this._searchParams;
                  search.set.call(this, value);
                  if (sp) updateSearchParams(sp);
                }
              },
              searchParams: {
                get: function () {
                  verifySearchParams(this, Class);
                  return this._searchParams || createSearchParams(
                    this,
                    new URLSearchParams(this.search.slice(1))
                  );
                },
                set: function (sp) {
                  verifySearchParams(this, Class);
                  createSearchParams(this, sp);
                }
              }
            }
          );
        }
      }
    ;
    try {
      upgradeClass(HTMLAnchorElement);
      if (/^function|object$/.test(typeof URL) && URL.prototype)
        upgradeClass(URL);
    } catch (meh) {}
  }(Object));

}(self.URLSearchParams.prototype, Object));
module.exports = self.URLSearchParams;


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/sticky-table-headers/js/jquery.stickytableheaders.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sticky-table-headers/js/jquery.stickytableheaders.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Copyright (c) Jonas Mosbech - https://github.com/jmosbech/StickyTableHeaders
	MIT license info: https://github.com/jmosbech/StickyTableHeaders/blob/master/license.txt */

;(function ($, window, undefined) {
	'use strict';

	var name = 'stickyTableHeaders',
		id = 0,
		defaults = {
			fixedOffset: 0,
			leftOffset: 0,
			marginTop: 0,
			objDocument: document,
			objHead: 'head',
			objWindow: window,
			scrollableArea: window,
			cacheHeaderHeight: false,
			zIndex: 3
		};

	function Plugin (el, options) {
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var base = this;

		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;
		base.id = id++;

		// Listen for destroyed, call teardown
		base.$el.bind('destroyed',
			$.proxy(base.teardown, base));

		// Cache DOM refs for performance reasons
		base.$clonedHeader = null;
		base.$originalHeader = null;

		// Cache header height for performance reasons
		base.cachedHeaderHeight = null;

		// Keep track of state
		base.isSticky = false;
		base.hasBeenSticky = false;
		base.leftOffset = null;
		base.topOffset = null;

		base.init = function () {
			base.setOptions(options);

			base.$el.each(function () {
				var $this = $(this);

				// remove padding on <table> to fix issue #7
				$this.css('padding', 0);

				base.$originalHeader = $('thead:first', this);
				base.$clonedHeader = base.$originalHeader.clone();
				$this.trigger('clonedHeader.' + name, [base.$clonedHeader]);

				base.$clonedHeader.addClass('tableFloatingHeader');
				base.$clonedHeader.css({display: 'none', opacity: 0.0});

				base.$originalHeader.addClass('tableFloatingHeaderOriginal');

				base.$originalHeader.after(base.$clonedHeader);

				base.$printStyle = $('<style type="text/css" media="print">' +
					'.tableFloatingHeader{display:none !important;}' +
					'.tableFloatingHeaderOriginal{position:static !important;}' +
					'</style>');
				base.$head.append(base.$printStyle);
			});
			
			base.$clonedHeader.find("input, select").attr("disabled", true);

			base.updateWidth();
			base.toggleHeaders();
			base.bind();
		};

		base.destroy = function (){
			base.$el.unbind('destroyed', base.teardown);
			base.teardown();
		};

		base.teardown = function(){
			if (base.isSticky) {
				base.$originalHeader.css('position', 'static');
			}
			$.removeData(base.el, 'plugin_' + name);
			base.unbind();

			base.$clonedHeader.remove();
			base.$originalHeader.removeClass('tableFloatingHeaderOriginal');
			base.$originalHeader.css('visibility', 'visible');
			base.$printStyle.remove();

			base.el = null;
			base.$el = null;
		};

		base.bind = function(){
			base.$scrollableArea.on('scroll.' + name, base.toggleHeaders);
			if (!base.isWindowScrolling) {
				base.$window.on('scroll.' + name + base.id, base.setPositionValues);
				base.$window.on('resize.' + name + base.id, base.toggleHeaders);
			}
			base.$scrollableArea.on('resize.' + name, base.toggleHeaders);
			base.$scrollableArea.on('resize.' + name, base.updateWidth);
		};

		base.unbind = function(){
			// unbind window events by specifying handle so we don't remove too much
			base.$scrollableArea.off('.' + name, base.toggleHeaders);
			if (!base.isWindowScrolling) {
				base.$window.off('.' + name + base.id, base.setPositionValues);
				base.$window.off('.' + name + base.id, base.toggleHeaders);
			}
			base.$scrollableArea.off('.' + name, base.updateWidth);
		};

		// We debounce the functions bound to the scroll and resize events
		base.debounce = function (fn, delay) {
			var timer = null;
			return function () {
				var context = this, args = arguments;
				clearTimeout(timer);
				timer = setTimeout(function () {
					fn.apply(context, args);
				}, delay);
			};
		};

		base.toggleHeaders = base.debounce(function () {
			if (base.$el) {
				base.$el.each(function () {
					var $this = $(this),
						newLeft,
						newTopOffset = base.isWindowScrolling ? (
									isNaN(base.options.fixedOffset) ?
									base.options.fixedOffset.outerHeight() :
									base.options.fixedOffset
								) :
								base.$scrollableArea.offset().top + (!isNaN(base.options.fixedOffset) ? base.options.fixedOffset : 0),
						offset = $this.offset(),

						scrollTop = base.$scrollableArea.scrollTop() + newTopOffset,
						scrollLeft = base.$scrollableArea.scrollLeft(),

						headerHeight,

						scrolledPastTop = base.isWindowScrolling ?
								scrollTop > offset.top :
								newTopOffset > offset.top,
						notScrolledPastBottom;

					if (scrolledPastTop) {
						headerHeight = base.options.cacheHeaderHeight ? base.cachedHeaderHeight : base.$clonedHeader.height();
						notScrolledPastBottom = (base.isWindowScrolling ? scrollTop : 0) <
							(offset.top + $this.height() - headerHeight - (base.isWindowScrolling ? 0 : newTopOffset));
					}

					if (scrolledPastTop && notScrolledPastBottom) {
						newLeft = offset.left - scrollLeft + base.options.leftOffset;
						base.$originalHeader.css({
							'position': 'fixed',
							'margin-top': base.options.marginTop,
                                                        'top': 0,
							'left': newLeft,
							'z-index': base.options.zIndex
						});
						base.leftOffset = newLeft;
						base.topOffset = newTopOffset;
						base.$clonedHeader.css('display', '');
						if (!base.isSticky) {
							base.isSticky = true;
							// make sure the width is correct: the user might have resized the browser while in static mode
							base.updateWidth();
							$this.trigger('enabledStickiness.' + name);
						}
						base.setPositionValues();
					} else if (base.isSticky) {
						base.$originalHeader.css('position', 'static');
						base.$clonedHeader.css('display', 'none');
						base.isSticky = false;
						base.resetWidth($('td,th', base.$clonedHeader), $('td,th', base.$originalHeader));
						$this.trigger('disabledStickiness.' + name);
					}
				});
			}
		}, 0);

		base.setPositionValues = base.debounce(function () {
			var winScrollTop = base.$window.scrollTop(),
				winScrollLeft = base.$window.scrollLeft();
			if (!base.isSticky ||
					winScrollTop < 0 || winScrollTop + base.$window.height() > base.$document.height() ||
					winScrollLeft < 0 || winScrollLeft + base.$window.width() > base.$document.width()) {
				return;
			}
			base.$originalHeader.css({
				'top': base.topOffset - (base.isWindowScrolling ? 0 : winScrollTop),
				'left': base.leftOffset - (base.isWindowScrolling ? 0 : winScrollLeft)
			});
		}, 0);

		base.updateWidth = base.debounce(function () {
			if (!base.isSticky) {
				return;
			}
			// Copy cell widths from clone
			if (!base.$originalHeaderCells) {
				base.$originalHeaderCells = $('th,td', base.$originalHeader);
			}
			if (!base.$clonedHeaderCells) {
				base.$clonedHeaderCells = $('th,td', base.$clonedHeader);
			}
			var cellWidths = base.getWidth(base.$clonedHeaderCells);
			base.setWidth(cellWidths, base.$clonedHeaderCells, base.$originalHeaderCells);

			// Copy row width from whole table
			base.$originalHeader.css('width', base.$clonedHeader.width());

			// If we're caching the height, we need to update the cached value when the width changes
			if (base.options.cacheHeaderHeight) {
				base.cachedHeaderHeight = base.$clonedHeader.height();
			}
		}, 0);

		base.getWidth = function ($clonedHeaders) {
			var widths = [];
			$clonedHeaders.each(function (index) {
				var width, $this = $(this);

				if ($this.css('box-sizing') === 'border-box') {
					var boundingClientRect = $this[0].getBoundingClientRect();
					if(boundingClientRect.width) {
						width = boundingClientRect.width; // #39: border-box bug
					} else {
						width = boundingClientRect.right - boundingClientRect.left; // ie8 bug: getBoundingClientRect() does not have a width property
					}
				} else {
					var $origTh = $('th', base.$originalHeader);
					if ($origTh.css('border-collapse') === 'collapse') {
						if (window.getComputedStyle) {
							width = parseFloat(window.getComputedStyle(this, null).width);
						} else {
							// ie8 only
							var leftPadding = parseFloat($this.css('padding-left'));
							var rightPadding = parseFloat($this.css('padding-right'));
							// Needs more investigation - this is assuming constant border around this cell and it's neighbours.
							var border = parseFloat($this.css('border-width'));
							width = $this.outerWidth() - leftPadding - rightPadding - border;
						}
					} else {
						width = $this.width();
					}
				}

				widths[index] = width;
			});
			return widths;
		};

		base.setWidth = function (widths, $clonedHeaders, $origHeaders) {
			$clonedHeaders.each(function (index) {
				var width = widths[index];
				$origHeaders.eq(index).css({
					'min-width': width,
					'max-width': width
				});
			});
		};

		base.resetWidth = function ($clonedHeaders, $origHeaders) {
			$clonedHeaders.each(function (index) {
				var $this = $(this);
				$origHeaders.eq(index).css({
					'min-width': $this.css('min-width'),
					'max-width': $this.css('max-width')
				});
			});
		};

		base.setOptions = function (options) {
			base.options = $.extend({}, defaults, options);
			base.$window = $(base.options.objWindow);
			base.$head = $(base.options.objHead);
			base.$document = $(base.options.objDocument);
			base.$scrollableArea = $(base.options.scrollableArea);
			base.isWindowScrolling = base.$scrollableArea[0] === base.$window[0];
		};

		base.updateOptions = function (options) {
			base.setOptions(options);
			// scrollableArea might have changed
			base.unbind();
			base.bind();
			base.updateWidth();
			base.toggleHeaders();
		};

		// Run initializer
		base.init();
	}

	// A plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[name] = function ( options ) {
		return this.each(function () {
			var instance = $.data(this, 'plugin_' + name);
			if (instance) {
				if (typeof options === 'string') {
					instance[options].apply(instance);
				} else {
					instance.updateOptions(options);
				}
			} else if(options !== 'destroy') {
				$.data(this, 'plugin_' + name, new Plugin( this, options ));
			}
		});
	};

})(jQuery, window);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2Nqcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnJlZXppbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ub3QtYS1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RpY2t5LXRhYmxlLWhlYWRlcnMvanMvanF1ZXJ5LnN0aWNreXRhYmxlaGVhZGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkMsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsTUFBTTtBQUNOLGlFQUFpRTtBQUNqRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLENBQUMiLCJmaWxlIjoidmVuZG9yc35kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISAoYykgQW5kcmVhIEdpYW1tYXJjaGkgLSBJU0MgKi9cbnZhciBzZWxmID0ge307XG50cnkge1xuICAoZnVuY3Rpb24gKFVSTFNlYXJjaFBhcmFtcywgcGx1cykge1xuICAgIGlmIChcbiAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoJ3E9JTJCJykuZ2V0KCdxJykgIT09IHBsdXMgfHxcbiAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe3E6IHBsdXN9KS5nZXQoJ3EnKSAhPT0gcGx1cyB8fFxuICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyhbWydxJywgcGx1c11dKS5nZXQoJ3EnKSAhPT0gcGx1cyB8fFxuICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcygncT1cXG4nKS50b1N0cmluZygpICE9PSAncT0lMEEnIHx8XG4gICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKHtxOiAnICYnfSkudG9TdHJpbmcoKSAhPT0gJ3E9KyUyNicgfHxcbiAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe3E6ICclengnfSkudG9TdHJpbmcoKSAhPT0gJ3E9JTI1engnXG4gICAgKVxuICAgICAgdGhyb3cgVVJMU2VhcmNoUGFyYW1zO1xuICAgIHNlbGYuVVJMU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zO1xuICB9KFVSTFNlYXJjaFBhcmFtcywgJysnKSk7XG59IGNhdGNoKFVSTFNlYXJjaFBhcmFtcykge1xuICAoZnVuY3Rpb24gKE9iamVjdCwgU3RyaW5nLCBpc0FycmF5KSB7J3VzZSBzdHJpY3QnO1xuICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICAgIHZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICB2YXIgZmluZCA9IC9bISdcXChcXCl+XXwlMjB8JTAwL2c7XG4gICAgdmFyIGZpbmRQZXJjZW50U2lnbiA9IC8lKD8hWzAtOWEtZkEtRl17Mn0pL2c7XG4gICAgdmFyIHBsdXMgPSAvXFwrL2c7XG4gICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnfic6ICclN0UnLFxuICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgfTtcbiAgICB2YXIgcHJvdG8gPSB7XG4gICAgICBhcHBlbmQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGFwcGVuZFRvKHRoaXMuX3VuZ2FwLCBrZXksIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBkZWxldGU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3VuZ2FwW2tleV07XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhrZXkpID8gdGhpcy5fdW5nYXBba2V5XVswXSA6IG51bGw7XG4gICAgICB9LFxuICAgICAgZ2V0QWxsOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhrZXkpID8gdGhpcy5fdW5nYXBba2V5XS5zbGljZSgwKSA6IFtdO1xuICAgICAgfSxcbiAgICAgIGhhczogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5IGluIHRoaXMuX3VuZ2FwO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdW5nYXBba2V5XSA9IFtTdHJpbmcodmFsdWUpXTtcbiAgICAgIH0sXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VsZi5fdW5nYXApXG4gICAgICAgICAgc2VsZi5fdW5nYXBba2V5XS5mb3JFYWNoKGludm9rZSwga2V5KTtcbiAgICAgICAgZnVuY3Rpb24gaW52b2tlKHZhbHVlKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgU3RyaW5nKGtleSksIHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0sXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcXVlcnkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX3VuZ2FwKSB7XG4gICAgICAgICAgdmFyIGVuY29kZWQgPSBlbmNvZGUoa2V5KTtcbiAgICAgICAgICBmb3IgKHZhclxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3VuZ2FwW2tleV07XG4gICAgICAgICAgICBpIDwgdmFsdWUubGVuZ3RoOyBpKytcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHF1ZXJ5LnB1c2goZW5jb2RlZCArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnkuam9pbignJicpO1xuICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIga2V5IGluIHByb3RvKVxuICAgICAgZGVmaW5lUHJvcGVydHkoVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZSwga2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBwcm90b1trZXldXG4gICAgICB9KTtcbiAgICBzZWxmLlVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcztcbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXMocXVlcnkpIHtcbiAgICAgIHZhciBkaWN0ID0gY3JlYXRlKG51bGwpO1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ191bmdhcCcsIHt2YWx1ZTogZGljdH0pO1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgIXF1ZXJ5OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHR5cGVvZiBxdWVyeSA9PT0gJ3N0cmluZyc6XG4gICAgICAgICAgaWYgKHF1ZXJ5LmNoYXJBdCgwKSA9PT0gJz8nKSB7XG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKHZhclxuICAgICAgICAgICAgcGFpcnMgPSBxdWVyeS5zcGxpdCgnJicpLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSBwYWlycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrK1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpcnNbaV07XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCc9Jyk7XG4gICAgICAgICAgICBpZiAoLTEgPCBpbmRleCkge1xuICAgICAgICAgICAgICBhcHBlbmRUbyhcbiAgICAgICAgICAgICAgICBkaWN0LFxuICAgICAgICAgICAgICAgIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLFxuICAgICAgICAgICAgICAgIGRlY29kZSh2YWx1ZS5zbGljZShpbmRleCArIDEpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGgpe1xuICAgICAgICAgICAgICBhcHBlbmRUbyhcbiAgICAgICAgICAgICAgICBkaWN0LFxuICAgICAgICAgICAgICAgIGRlY29kZSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgaXNBcnJheShxdWVyeSk6XG4gICAgICAgICAgZm9yICh2YXJcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKytcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHF1ZXJ5W2ldO1xuICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgdmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZvckVhY2gnIGluIHF1ZXJ5OlxuICAgICAgICAgIHF1ZXJ5LmZvckVhY2goYWRkRWFjaCwgZGljdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHF1ZXJ5KVxuICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwga2V5LCBxdWVyeVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFYWNoKHZhbHVlLCBrZXkpIHtcbiAgICAgIGFwcGVuZFRvKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvKGRpY3QsIGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciByZXMgPSBpc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywnKSA6IHZhbHVlO1xuICAgICAgaWYgKGtleSBpbiBkaWN0KVxuICAgICAgICBkaWN0W2tleV0ucHVzaChyZXMpO1xuICAgICAgZWxzZVxuICAgICAgICBkaWN0W2tleV0gPSBbcmVzXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKGZpbmRQZXJjZW50U2lnbiwgJyUyNScpLnJlcGxhY2UocGx1cywgJyAnKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoZmluZCwgcmVwbGFjZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgfVxuXG4gIH0oT2JqZWN0LCBTdHJpbmcsIEFycmF5LmlzQXJyYXkpKTtcbn1cblxuKGZ1bmN0aW9uIChVUkxTZWFyY2hQYXJhbXNQcm90bykge1xuXG4gIHZhciBpdGVyYWJsZSA9IGZhbHNlO1xuICB0cnkgeyBpdGVyYWJsZSA9ICEhU3ltYm9sLml0ZXJhdG9yOyB9IGNhdGNoIChvX08pIHt9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKCEoJ2ZvckVhY2gnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdGhpcy50b1N0cmluZygpXG4gICAgICAgICAgLnJlcGxhY2UoLz1bXFxzXFxTXSo/KD86JnwkKS9nLCAnPScpXG4gICAgICAgICAgLnNwbGl0KCc9JylcbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKCFuYW1lLmxlbmd0aCB8fCBuYW1lIGluIG5hbWVzKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAobmFtZXNbbmFtZV0gPSBzZWxmLmdldEFsbChuYW1lKSkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCBzZWxmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoISgna2V5cycgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8ua2V5cyA9IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3IodGhpcywgZnVuY3Rpb24odmFsdWUsIGtleSkgeyB0aGlzLnB1c2goa2V5KTsgfSk7XG4gICAgfTtcbiAgfVxuXG4gICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoISgndmFsdWVzJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by52YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3IodGhpcywgZnVuY3Rpb24odmFsdWUsIGtleSkgeyB0aGlzLnB1c2godmFsdWUpOyB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKCEoJ2VudHJpZXMnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmVudHJpZXMgPSBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHsgdGhpcy5wdXNoKFtrZXksIHZhbHVlXSk7IH0pO1xuICAgIH07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoaXRlcmFibGUgJiYgIShTeW1ib2wuaXRlcmF0b3IgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG9bU3ltYm9sLml0ZXJhdG9yXSA9IFVSTFNlYXJjaFBhcmFtc1Byb3RvLmVudHJpZXM7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoISgnc29ydCcgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uc29ydCA9IGZ1bmN0aW9uIHNvcnQoKSB7XG4gICAgICB2YXJcbiAgICAgICAgZW50cmllcyA9IHRoaXMuZW50cmllcygpLFxuICAgICAgICBlbnRyeSA9IGVudHJpZXMubmV4dCgpLFxuICAgICAgICBkb25lID0gZW50cnkuZG9uZSxcbiAgICAgICAga2V5cyA9IFtdLFxuICAgICAgICB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICBpLCBrZXksIHZhbHVlXG4gICAgICA7XG4gICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgdmFsdWUgPSBlbnRyeS52YWx1ZTtcbiAgICAgICAga2V5ID0gdmFsdWVbMF07XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICBpZiAoIShrZXkgaW4gdmFsdWVzKSkge1xuICAgICAgICAgIHZhbHVlc1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzW2tleV0ucHVzaCh2YWx1ZVsxXSk7XG4gICAgICAgIGVudHJ5ID0gZW50cmllcy5uZXh0KCk7XG4gICAgICAgIGRvbmUgPSBlbnRyeS5kb25lO1xuICAgICAgfVxuICAgICAgLy8gbm90IHRoZSBjaGFtcGlvbiBpbiBlZmZpY2llbmN5XG4gICAgICAvLyBidXQgdGhlc2UgdHdvIGJpdHMganVzdCBkbyB0aGUgam9iXG4gICAgICBrZXlzLnNvcnQoKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlKGtleXNbaV0pO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZXNba2V5XS5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXRlcmF0b3Ioc2VsZiwgY2FsbGJhY2spIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICBzZWxmLmZvckVhY2goY2FsbGJhY2ssIGl0ZW1zKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiBpdGVyYWJsZSA/XG4gICAgICBpdGVtc1tTeW1ib2wuaXRlcmF0b3JdKCkgOlxuICAgICAge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHZvaWQgMCwgdmFsdWU6IHZhbHVlfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIChmdW5jdGlvbiAoT2JqZWN0KSB7XG4gICAgdmFyXG4gICAgICBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgICAgIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zUG9sbHV0ZSA9IGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAgICAgZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uYXBwZW5kLmNhbGwodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgIG5hbWUgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2VhcmNoLnNldC5jYWxsKHRoaXMuX3VzcCwgbmFtZSA/ICgnPycgKyBuYW1lKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZWwobmFtZSkge1xuICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmRlbGV0ZS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgICAgICAgIG5hbWUgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2VhcmNoLnNldC5jYWxsKHRoaXMuX3VzcCwgbmFtZSA/ICgnPycgKyBuYW1lKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5zZXQuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgbmFtZSA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICBzZWFyY2guc2V0LmNhbGwodGhpcy5fdXNwLCBuYW1lID8gKCc/JyArIG5hbWUpIDogJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3AsIHZhbHVlKSB7XG4gICAgICAgICAgc3AuYXBwZW5kID0gYXBwZW5kO1xuICAgICAgICAgIHNwLmRlbGV0ZSA9IGRlbDtcbiAgICAgICAgICBzcC5zZXQgPSBzZXQ7XG4gICAgICAgICAgcmV0dXJuIGRQKHNwLCAnX3VzcCcsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zQ3JlYXRlID0gZnVuY3Rpb24gKHBvbGx1dGVTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIHNwKSB7XG4gICAgICAgICAgZFAoXG4gICAgICAgICAgICBvYmosICdfc2VhcmNoUGFyYW1zJywge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogcG9sbHV0ZVNlYXJjaFBhcmFtcyhzcCwgb2JqKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHNwO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZVNlYXJjaFBhcmFtcyA9IGZ1bmN0aW9uIChzcCkge1xuICAgICAgICB2YXIgYXBwZW5kID0gc3AuYXBwZW5kO1xuICAgICAgICBzcC5hcHBlbmQgPSBVUkxTZWFyY2hQYXJhbXNQcm90by5hcHBlbmQ7XG4gICAgICAgIFVSTFNlYXJjaFBhcmFtcy5jYWxsKHNwLCBzcC5fdXNwLnNlYXJjaC5zbGljZSgxKSk7XG4gICAgICAgIHNwLmFwcGVuZCA9IGFwcGVuZDtcbiAgICAgIH0sXG4gICAgICB2ZXJpZnlTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbiAob2JqLCBDbGFzcykge1xuICAgICAgICBpZiAoIShvYmogaW5zdGFuY2VvZiBDbGFzcykpIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCInc2VhcmNoUGFyYW1zJyBhY2Nlc3NlZCBvbiBhbiBvYmplY3QgdGhhdCBcIiArXG4gICAgICAgICAgXCJkb2VzIG5vdCBpbXBsZW1lbnQgaW50ZXJmYWNlIFwiICsgQ2xhc3MubmFtZVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHVwZ3JhZGVDbGFzcyA9IGZ1bmN0aW9uIChDbGFzcykge1xuICAgICAgICB2YXJcbiAgICAgICAgICBDbGFzc1Byb3RvID0gQ2xhc3MucHJvdG90eXBlLFxuICAgICAgICAgIHNlYXJjaFBhcmFtcyA9IGdPUEQoQ2xhc3NQcm90bywgJ3NlYXJjaFBhcmFtcycpLFxuICAgICAgICAgIGhyZWYgPSBnT1BEKENsYXNzUHJvdG8sICdocmVmJyksXG4gICAgICAgICAgc2VhcmNoID0gZ09QRChDbGFzc1Byb3RvLCAnc2VhcmNoJyksXG4gICAgICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zXG4gICAgICAgIDtcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMgJiYgc2VhcmNoICYmIHNlYXJjaC5zZXQpIHtcbiAgICAgICAgICBjcmVhdGVTZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXNDcmVhdGUoXG4gICAgICAgICAgICBjcmVhdGVTZWFyY2hQYXJhbXNQb2xsdXRlKHNlYXJjaClcbiAgICAgICAgICApO1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgICAgICAgICAgQ2xhc3NQcm90byxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaHJlZjoge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGhyZWYuZ2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHNwID0gdGhpcy5fc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgICAgICAgaHJlZi5zZXQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoc3ApIHVwZGF0ZVNlYXJjaFBhcmFtcyhzcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2guZ2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHNwID0gdGhpcy5fc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgICAgICAgc2VhcmNoLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChzcCkgdXBkYXRlU2VhcmNoUGFyYW1zKHNwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNlYXJjaFBhcmFtczoge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmVyaWZ5U2VhcmNoUGFyYW1zKHRoaXMsIENsYXNzKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWFyY2hQYXJhbXMgfHwgY3JlYXRlU2VhcmNoUGFyYW1zKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKHRoaXMuc2VhcmNoLnNsaWNlKDEpKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHNwKSB7XG4gICAgICAgICAgICAgICAgICB2ZXJpZnlTZWFyY2hQYXJhbXModGhpcywgQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zKHRoaXMsIHNwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgO1xuICAgIHRyeSB7XG4gICAgICB1cGdyYWRlQ2xhc3MoSFRNTEFuY2hvckVsZW1lbnQpO1xuICAgICAgaWYgKC9eZnVuY3Rpb258b2JqZWN0JC8udGVzdCh0eXBlb2YgVVJMKSAmJiBVUkwucHJvdG90eXBlKVxuICAgICAgICB1cGdyYWRlQ2xhc3MoVVJMKTtcbiAgICB9IGNhdGNoIChtZWgpIHt9XG4gIH0oT2JqZWN0KSk7XG5cbn0oc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLCBPYmplY3QpKTtcbm1vZHVsZS5leHBvcnRzID0gc2VsZi5VUkxTZWFyY2hQYXJhbXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCAnICsgKG5hbWUgPyBuYW1lICsgJyAnIDogJycpICsgJ2ludm9jYXRpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YScpLmZhc3RLZXk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGludGVybmFsU3RhdGVHZXR0ZXJGb3IgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoYXQsIHtcbiAgICAgICAgdHlwZTogQ09OU1RSVUNUT1JfTkFNRSxcbiAgICAgICAgaW5kZXg6IGNyZWF0ZShudWxsKSxcbiAgICAgICAgZmlyc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgbGFzdDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplOiAwXG4gICAgICB9KTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMpIHRoYXQuc2l6ZSA9IDA7XG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBpdGVyYXRlKGl0ZXJhYmxlLCB0aGF0W0FEREVSXSwgdGhhdCwgSVNfTUFQKTtcbiAgICB9KTtcblxuICAgIHZhciBnZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihDT05TVFJVQ1RPUl9OQU1FKTtcblxuICAgIHZhciBkZWZpbmUgPSBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICB2YXIgcHJldmlvdXMsIGluZGV4O1xuICAgICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgZW50cnkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmxhc3QgPSBlbnRyeSA9IHtcbiAgICAgICAgICBpbmRleDogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIHByZXZpb3VzOiBwcmV2aW91cyA9IHN0YXRlLmxhc3QsXG4gICAgICAgICAgbmV4dDogdW5kZWZpbmVkLFxuICAgICAgICAgIHJlbW92ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGlmICghc3RhdGUuZmlyc3QpIHN0YXRlLmZpcnN0ID0gZW50cnk7XG4gICAgICAgIGlmIChwcmV2aW91cykgcHJldmlvdXMubmV4dCA9IGVudHJ5O1xuICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUrKztcbiAgICAgICAgZWxzZSB0aGF0LnNpemUrKztcbiAgICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSBzdGF0ZS5pbmRleFtpbmRleF0gPSBlbnRyeTtcbiAgICAgIH0gcmV0dXJuIHRoYXQ7XG4gICAgfTtcblxuICAgIHZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICAvLyBmYXN0IGNhc2VcbiAgICAgIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgICAgIHZhciBlbnRyeTtcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gc3RhdGUuaW5kZXhbaW5kZXhdO1xuICAgICAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gICAgICBmb3IgKGVudHJ5ID0gc3RhdGUuZmlyc3Q7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm5leHQpIHtcbiAgICAgICAgaWYgKGVudHJ5LmtleSA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgICAgdmFyIGRhdGEgPSBzdGF0ZS5pbmRleDtcbiAgICAgICAgdmFyIGVudHJ5ID0gc3RhdGUuZmlyc3Q7XG4gICAgICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wcmV2aW91cykgZW50cnkucHJldmlvdXMgPSBlbnRyeS5wcmV2aW91cy5uZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmluZGV4XTtcbiAgICAgICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZmlyc3QgPSBzdGF0ZS5sYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUgPSAwO1xuICAgICAgICBlbHNlIHRoYXQuc2l6ZSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubmV4dDtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnByZXZpb3VzO1xuICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5pbmRleFtlbnRyeS5pbmRleF07XG4gICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubmV4dCA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucHJldmlvdXMgPSBwcmV2O1xuICAgICAgICAgIGlmIChzdGF0ZS5maXJzdCA9PSBlbnRyeSkgc3RhdGUuZmlyc3QgPSBuZXh0O1xuICAgICAgICAgIGlmIChzdGF0ZS5sYXN0ID09IGVudHJ5KSBzdGF0ZS5sYXN0ID0gcHJldjtcbiAgICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUtLTtcbiAgICAgICAgICBlbHNlIHRoYXQuc2l6ZS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uZXh0IDogc3RhdGUuZmlyc3QpIHtcbiAgICAgICAgICBib3VuZEZ1bmN0aW9uKGVudHJ5LnZhbHVlLCBlbnRyeS5rZXksIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yZW1vdmVkKSBlbnRyeSA9IGVudHJ5LnByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBJU19NQVAgPyB7XG4gICAgICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnZhbHVlO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmUodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gOiB7XG4gICAgICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmUodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCkge1xuICAgIHZhciBJVEVSQVRPUl9OQU1FID0gQ09OU1RSVUNUT1JfTkFNRSArICcgSXRlcmF0b3InO1xuICAgIHZhciBnZXRJbnRlcm5hbENvbGxlY3Rpb25TdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgdmFyIGdldEludGVybmFsSXRlcmF0b3JTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoSVRFUkFUT1JfTkFNRSk7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgIGRlZmluZUl0ZXJhdG9yKEMsIENPTlNUUlVDVE9SX05BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgICAgIHR5cGU6IElURVJBVE9SX05BTUUsXG4gICAgICAgIHRhcmdldDogaXRlcmF0ZWQsXG4gICAgICAgIHN0YXRlOiBnZXRJbnRlcm5hbENvbGxlY3Rpb25TdGF0ZShpdGVyYXRlZCksXG4gICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgIGxhc3Q6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxJdGVyYXRvclN0YXRlKHRoaXMpO1xuICAgICAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICAgICAgdmFyIGVudHJ5ID0gc3RhdGUubGFzdDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnJlbW92ZWQpIGVudHJ5ID0gZW50cnkucHJldmlvdXM7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCFzdGF0ZS50YXJnZXQgfHwgIShzdGF0ZS5sYXN0ID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm5leHQgOiBzdGF0ZS5zdGF0ZS5maXJzdCkpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBlbnRyeS5rZXksIGRvbmU6IGZhbHNlIH07XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHsgdmFsdWU6IGVudHJ5LnZhbHVlLCBkb25lOiBmYWxzZSB9O1xuICAgICAgcmV0dXJuIHsgdmFsdWU6IFtlbnRyeS5rZXksIGVudHJ5LnZhbHVlXSwgZG9uZTogZmFsc2UgfTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoQ09OU1RSVUNUT1JfTkFNRSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FLCB3cmFwcGVyLCBjb21tb24pIHtcbiAgdmFyIElTX01BUCA9IENPTlNUUlVDVE9SX05BTUUuaW5kZXhPZignTWFwJykgIT09IC0xO1xuICB2YXIgSVNfV0VBSyA9IENPTlNUUlVDVE9SX05BTUUuaW5kZXhPZignV2VhaycpICE9PSAtMTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIE5hdGl2ZUNvbnN0cnVjdG9yID0gZ2xvYmFsW0NPTlNUUlVDVE9SX05BTUVdO1xuICB2YXIgTmF0aXZlUHJvdG90eXBlID0gTmF0aXZlQ29uc3RydWN0b3IgJiYgTmF0aXZlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICB2YXIgQ29uc3RydWN0b3IgPSBOYXRpdmVDb25zdHJ1Y3RvcjtcbiAgdmFyIGV4cG9ydGVkID0ge307XG5cbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgbmF0aXZlTWV0aG9kID0gTmF0aXZlUHJvdG90eXBlW0tFWV07XG4gICAgcmVkZWZpbmUoTmF0aXZlUHJvdG90eXBlLCBLRVksXG4gICAgICBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgICAgbmF0aXZlTWV0aG9kLmNhbGwodGhpcywgdmFsdWUgPT09IDAgPyAwIDogdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gOiBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gZmFsc2UgOiBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gdW5kZWZpbmVkIDogbmF0aXZlTWV0aG9kLmNhbGwodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IGZhbHNlIDogbmF0aXZlTWV0aG9kLmNhbGwodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG4gICAgICB9IDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgbmF0aXZlTWV0aG9kLmNhbGwodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gIGlmIChpc0ZvcmNlZChDT05TVFJVQ1RPUl9OQU1FLCB0eXBlb2YgTmF0aXZlQ29uc3RydWN0b3IgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgTmF0aXZlUHJvdG90eXBlLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDb25zdHJ1Y3RvciA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlLlJFUVVJUkVEID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0ZvcmNlZChDT05TVFJVQ1RPUl9OQU1FLCB0cnVlKSkge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7IG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihpdGVyYWJsZSk7IH0pO1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gd3JhcHBlcihmdW5jdGlvbiAoZHVtbXksIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UoZHVtbXksIENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlQ29uc3RydWN0b3IoKSwgZHVtbXksIENvbnN0cnVjdG9yKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgaXRlcmF0ZShpdGVyYWJsZSwgdGhhdFtBRERFUl0sIHRoYXQsIElTX01BUCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBOYXRpdmVQcm90b3R5cGU7XG4gICAgICBOYXRpdmVQcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG5cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcblxuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgTmF0aXZlUHJvdG90eXBlLmNsZWFyKSBkZWxldGUgTmF0aXZlUHJvdG90eXBlLmNsZWFyO1xuICB9XG5cbiAgZXhwb3J0ZWRbQ09OU1RSVUNUT1JfTkFNRV0gPSBDb25zdHJ1Y3RvcjtcbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBDb25zdHJ1Y3RvciAhPSBOYXRpdmVDb25zdHJ1Y3RvciB9LCBleHBvcnRlZCk7XG5cbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUpO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHZhciByZWdleHAgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGYpIHsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiBmYWxzZTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEMsIGFyZ3NMZW5ndGgsIGFyZ3MpIHtcbiAgaWYgKCEoYXJnc0xlbmd0aCBpbiBmYWN0b3JpZXMpKSB7XG4gICAgZm9yICh2YXIgbGlzdCA9IFtdLCBpID0gMDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9IEZ1bmN0aW9uKCdDLGEnLCAncmV0dXJuIG5ldyBDKCcgKyBsaXN0LmpvaW4oJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1thcmdzTGVuZ3RoXShDLCBhcmdzKTtcbn07XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIGZuID0gYUZ1bmN0aW9uKHRoaXMpO1xuICB2YXIgcGFydEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gZnVuY3Rpb24gYm91bmQoLyogYXJncy4uLiAqLykge1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZEZ1bmN0aW9uID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCJ2YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgRlJFRVpJTkcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnJlZXppbmcnKTtcblxudmFyIE1FVEFEQVRBID0gdWlkKCdtZXRhJyk7XG52YXIgaWQgPSAwO1xuXG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHNldE1ldGFkYXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIGRlZmluZVByb3BlcnR5KGl0LCBNRVRBREFUQSwgeyB2YWx1ZToge1xuICAgIG9iamVjdElEOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3ZWFrRGF0YToge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG5cbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIGEgcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQURBVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGFkYXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBREFUQV0ub2JqZWN0SUQ7XG59O1xuXG52YXIgZ2V0V2Vha0RhdGEgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQURBVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGFkYXRhKGl0KTtcbiAgLy8gcmV0dXJuIHRoZSBzdG9yZSBvZiB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBREFUQV0ud2Vha0RhdGE7XG59O1xuXG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpJTkcgJiYgbWV0YS5SRVFVSVJFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEFEQVRBKSkgc2V0TWV0YWRhdGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBSRVFVSVJFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWtEYXRhOiBnZXRXZWFrRGF0YSxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5oaWRkZW5LZXlzW01FVEFEQVRBXSA9IHRydWU7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcblxudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcbiAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59O1xuXG52YXIgaXRlcmF0ZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBmbiwgdGhhdCwgQVNfRU5UUklFUywgSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGZuLCB0aGF0LCBBU19FTlRSSUVTID8gMiA6IDEpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gQVNfRU5UUklFU1xuICAgICAgICAgID8gYm91bmRGdW5jdGlvbihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSlcbiAgICAgICAgICA6IGJvdW5kRnVuY3Rpb24oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7XG4gIH1cblxuICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmUpIHtcbiAgICByZXN1bHQgPSBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBib3VuZEZ1bmN0aW9uLCBzdGVwLnZhbHVlLCBBU19FTlRSSUVTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbn07XG5cbml0ZXJhdGUuc3RvcCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgcmVzdWx0KTtcbn07XG4iLCJ2YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1JlZ0V4cChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJUaGUgbWV0aG9kIGRvZXNuJ3QgYWNjZXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnNcIik7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmNsdWRlcztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdpbmNsdWRlcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciB0ZXN0ID0gW107XG52YXIgbmF0aXZlU29ydCA9IHRlc3Quc29ydDtcblxuLy8gSUU4LVxudmFyIEZBSUxTX09OX1VOREVGSU5FRCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KHVuZGVmaW5lZCk7XG59KTtcbi8vIFY4IGJ1Z1xudmFyIEZBSUxTX09OX05VTEwgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydChudWxsKTtcbn0pO1xuLy8gT2xkIFdlYktpdFxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdzb3J0Jyk7XG5cbnZhciBGT1JDRUQgPSBGQUlMU19PTl9VTkRFRklORUQgfHwgIUZBSUxTX09OX05VTEwgfHwgIVNUUklDVF9NRVRIT0Q7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc29ydGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29ydFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICByZXR1cm4gY29tcGFyZWZuID09PSB1bmRlZmluZWRcbiAgICAgID8gbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpKVxuICAgICAgOiBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQnKTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4kKHsgdGFyZ2V0OiAnRnVuY3Rpb24nLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGJpbmQ6IGJpbmRcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbicpO1xudmFyIGNvbGxlY3Rpb25TdHJvbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gYE1hcGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW1hcC1vYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxlY3Rpb24oJ01hcCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBpbml0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwgY29sbGVjdGlvblN0cm9uZyk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhflN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2Yobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICAgIHJldHVybiBzZWFyY2hlciAhPT0gdW5kZWZpbmVkID8gc2VhcmNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsIi8qISBDb3B5cmlnaHQgKGMpIEpvbmFzIE1vc2JlY2ggLSBodHRwczovL2dpdGh1Yi5jb20vam1vc2JlY2gvU3RpY2t5VGFibGVIZWFkZXJzXHJcblx0TUlUIGxpY2Vuc2UgaW5mbzogaHR0cHM6Ly9naXRodWIuY29tL2ptb3NiZWNoL1N0aWNreVRhYmxlSGVhZGVycy9ibG9iL21hc3Rlci9saWNlbnNlLnR4dCAqL1xyXG5cclxuOyhmdW5jdGlvbiAoJCwgd2luZG93LCB1bmRlZmluZWQpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBuYW1lID0gJ3N0aWNreVRhYmxlSGVhZGVycycsXHJcblx0XHRpZCA9IDAsXHJcblx0XHRkZWZhdWx0cyA9IHtcclxuXHRcdFx0Zml4ZWRPZmZzZXQ6IDAsXHJcblx0XHRcdGxlZnRPZmZzZXQ6IDAsXHJcblx0XHRcdG1hcmdpblRvcDogMCxcclxuXHRcdFx0b2JqRG9jdW1lbnQ6IGRvY3VtZW50LFxyXG5cdFx0XHRvYmpIZWFkOiAnaGVhZCcsXHJcblx0XHRcdG9ialdpbmRvdzogd2luZG93LFxyXG5cdFx0XHRzY3JvbGxhYmxlQXJlYTogd2luZG93LFxyXG5cdFx0XHRjYWNoZUhlYWRlckhlaWdodDogZmFsc2UsXHJcblx0XHRcdHpJbmRleDogM1xyXG5cdFx0fTtcclxuXHJcblx0ZnVuY3Rpb24gUGx1Z2luIChlbCwgb3B0aW9ucykge1xyXG5cdFx0Ly8gVG8gYXZvaWQgc2NvcGUgaXNzdWVzLCB1c2UgJ2Jhc2UnIGluc3RlYWQgb2YgJ3RoaXMnXHJcblx0XHQvLyB0byByZWZlcmVuY2UgdGhpcyBjbGFzcyBmcm9tIGludGVybmFsIGV2ZW50cyBhbmQgZnVuY3Rpb25zLlxyXG5cdFx0dmFyIGJhc2UgPSB0aGlzO1xyXG5cclxuXHRcdC8vIEFjY2VzcyB0byBqUXVlcnkgYW5kIERPTSB2ZXJzaW9ucyBvZiBlbGVtZW50XHJcblx0XHRiYXNlLiRlbCA9ICQoZWwpO1xyXG5cdFx0YmFzZS5lbCA9IGVsO1xyXG5cdFx0YmFzZS5pZCA9IGlkKys7XHJcblxyXG5cdFx0Ly8gTGlzdGVuIGZvciBkZXN0cm95ZWQsIGNhbGwgdGVhcmRvd25cclxuXHRcdGJhc2UuJGVsLmJpbmQoJ2Rlc3Ryb3llZCcsXHJcblx0XHRcdCQucHJveHkoYmFzZS50ZWFyZG93biwgYmFzZSkpO1xyXG5cclxuXHRcdC8vIENhY2hlIERPTSByZWZzIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcblx0XHRiYXNlLiRjbG9uZWRIZWFkZXIgPSBudWxsO1xyXG5cdFx0YmFzZS4kb3JpZ2luYWxIZWFkZXIgPSBudWxsO1xyXG5cclxuXHRcdC8vIENhY2hlIGhlYWRlciBoZWlnaHQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuXHRcdGJhc2UuY2FjaGVkSGVhZGVySGVpZ2h0ID0gbnVsbDtcclxuXHJcblx0XHQvLyBLZWVwIHRyYWNrIG9mIHN0YXRlXHJcblx0XHRiYXNlLmlzU3RpY2t5ID0gZmFsc2U7XHJcblx0XHRiYXNlLmhhc0JlZW5TdGlja3kgPSBmYWxzZTtcclxuXHRcdGJhc2UubGVmdE9mZnNldCA9IG51bGw7XHJcblx0XHRiYXNlLnRvcE9mZnNldCA9IG51bGw7XHJcblxyXG5cdFx0YmFzZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRiYXNlLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdFx0XHRiYXNlLiRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0XHQvLyByZW1vdmUgcGFkZGluZyBvbiA8dGFibGU+IHRvIGZpeCBpc3N1ZSAjN1xyXG5cdFx0XHRcdCR0aGlzLmNzcygncGFkZGluZycsIDApO1xyXG5cclxuXHRcdFx0XHRiYXNlLiRvcmlnaW5hbEhlYWRlciA9ICQoJ3RoZWFkOmZpcnN0JywgdGhpcyk7XHJcblx0XHRcdFx0YmFzZS4kY2xvbmVkSGVhZGVyID0gYmFzZS4kb3JpZ2luYWxIZWFkZXIuY2xvbmUoKTtcclxuXHRcdFx0XHQkdGhpcy50cmlnZ2VyKCdjbG9uZWRIZWFkZXIuJyArIG5hbWUsIFtiYXNlLiRjbG9uZWRIZWFkZXJdKTtcclxuXHJcblx0XHRcdFx0YmFzZS4kY2xvbmVkSGVhZGVyLmFkZENsYXNzKCd0YWJsZUZsb2F0aW5nSGVhZGVyJyk7XHJcblx0XHRcdFx0YmFzZS4kY2xvbmVkSGVhZGVyLmNzcyh7ZGlzcGxheTogJ25vbmUnLCBvcGFjaXR5OiAwLjB9KTtcclxuXHJcblx0XHRcdFx0YmFzZS4kb3JpZ2luYWxIZWFkZXIuYWRkQ2xhc3MoJ3RhYmxlRmxvYXRpbmdIZWFkZXJPcmlnaW5hbCcpO1xyXG5cclxuXHRcdFx0XHRiYXNlLiRvcmlnaW5hbEhlYWRlci5hZnRlcihiYXNlLiRjbG9uZWRIZWFkZXIpO1xyXG5cclxuXHRcdFx0XHRiYXNlLiRwcmludFN0eWxlID0gJCgnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiIG1lZGlhPVwicHJpbnRcIj4nICtcclxuXHRcdFx0XHRcdCcudGFibGVGbG9hdGluZ0hlYWRlcntkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9JyArXHJcblx0XHRcdFx0XHQnLnRhYmxlRmxvYXRpbmdIZWFkZXJPcmlnaW5hbHtwb3NpdGlvbjpzdGF0aWMgIWltcG9ydGFudDt9JyArXHJcblx0XHRcdFx0XHQnPC9zdHlsZT4nKTtcclxuXHRcdFx0XHRiYXNlLiRoZWFkLmFwcGVuZChiYXNlLiRwcmludFN0eWxlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRiYXNlLiRjbG9uZWRIZWFkZXIuZmluZChcImlucHV0LCBzZWxlY3RcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuXHRcdFx0YmFzZS51cGRhdGVXaWR0aCgpO1xyXG5cdFx0XHRiYXNlLnRvZ2dsZUhlYWRlcnMoKTtcclxuXHRcdFx0YmFzZS5iaW5kKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UuZGVzdHJveSA9IGZ1bmN0aW9uICgpe1xyXG5cdFx0XHRiYXNlLiRlbC51bmJpbmQoJ2Rlc3Ryb3llZCcsIGJhc2UudGVhcmRvd24pO1xyXG5cdFx0XHRiYXNlLnRlYXJkb3duKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UudGVhcmRvd24gPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiAoYmFzZS5pc1N0aWNreSkge1xyXG5cdFx0XHRcdGJhc2UuJG9yaWdpbmFsSGVhZGVyLmNzcygncG9zaXRpb24nLCAnc3RhdGljJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0JC5yZW1vdmVEYXRhKGJhc2UuZWwsICdwbHVnaW5fJyArIG5hbWUpO1xyXG5cdFx0XHRiYXNlLnVuYmluZCgpO1xyXG5cclxuXHRcdFx0YmFzZS4kY2xvbmVkSGVhZGVyLnJlbW92ZSgpO1xyXG5cdFx0XHRiYXNlLiRvcmlnaW5hbEhlYWRlci5yZW1vdmVDbGFzcygndGFibGVGbG9hdGluZ0hlYWRlck9yaWdpbmFsJyk7XHJcblx0XHRcdGJhc2UuJG9yaWdpbmFsSGVhZGVyLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblx0XHRcdGJhc2UuJHByaW50U3R5bGUucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRiYXNlLmVsID0gbnVsbDtcclxuXHRcdFx0YmFzZS4kZWwgPSBudWxsO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLmJpbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRiYXNlLiRzY3JvbGxhYmxlQXJlYS5vbignc2Nyb2xsLicgKyBuYW1lLCBiYXNlLnRvZ2dsZUhlYWRlcnMpO1xyXG5cdFx0XHRpZiAoIWJhc2UuaXNXaW5kb3dTY3JvbGxpbmcpIHtcclxuXHRcdFx0XHRiYXNlLiR3aW5kb3cub24oJ3Njcm9sbC4nICsgbmFtZSArIGJhc2UuaWQsIGJhc2Uuc2V0UG9zaXRpb25WYWx1ZXMpO1xyXG5cdFx0XHRcdGJhc2UuJHdpbmRvdy5vbigncmVzaXplLicgKyBuYW1lICsgYmFzZS5pZCwgYmFzZS50b2dnbGVIZWFkZXJzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRiYXNlLiRzY3JvbGxhYmxlQXJlYS5vbigncmVzaXplLicgKyBuYW1lLCBiYXNlLnRvZ2dsZUhlYWRlcnMpO1xyXG5cdFx0XHRiYXNlLiRzY3JvbGxhYmxlQXJlYS5vbigncmVzaXplLicgKyBuYW1lLCBiYXNlLnVwZGF0ZVdpZHRoKTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS51bmJpbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHQvLyB1bmJpbmQgd2luZG93IGV2ZW50cyBieSBzcGVjaWZ5aW5nIGhhbmRsZSBzbyB3ZSBkb24ndCByZW1vdmUgdG9vIG11Y2hcclxuXHRcdFx0YmFzZS4kc2Nyb2xsYWJsZUFyZWEub2ZmKCcuJyArIG5hbWUsIGJhc2UudG9nZ2xlSGVhZGVycyk7XHJcblx0XHRcdGlmICghYmFzZS5pc1dpbmRvd1Njcm9sbGluZykge1xyXG5cdFx0XHRcdGJhc2UuJHdpbmRvdy5vZmYoJy4nICsgbmFtZSArIGJhc2UuaWQsIGJhc2Uuc2V0UG9zaXRpb25WYWx1ZXMpO1xyXG5cdFx0XHRcdGJhc2UuJHdpbmRvdy5vZmYoJy4nICsgbmFtZSArIGJhc2UuaWQsIGJhc2UudG9nZ2xlSGVhZGVycyk7XHJcblx0XHRcdH1cclxuXHRcdFx0YmFzZS4kc2Nyb2xsYWJsZUFyZWEub2ZmKCcuJyArIG5hbWUsIGJhc2UudXBkYXRlV2lkdGgpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBXZSBkZWJvdW5jZSB0aGUgZnVuY3Rpb25zIGJvdW5kIHRvIHRoZSBzY3JvbGwgYW5kIHJlc2l6ZSBldmVudHNcclxuXHRcdGJhc2UuZGVib3VuY2UgPSBmdW5jdGlvbiAoZm4sIGRlbGF5KSB7XHJcblx0XHRcdHZhciB0aW1lciA9IG51bGw7XHJcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XHJcblx0XHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHRcdH0sIGRlbGF5KTtcclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblxyXG5cdFx0YmFzZS50b2dnbGVIZWFkZXJzID0gYmFzZS5kZWJvdW5jZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChiYXNlLiRlbCkge1xyXG5cdFx0XHRcdGJhc2UuJGVsLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdFx0bmV3TGVmdCxcclxuXHRcdFx0XHRcdFx0bmV3VG9wT2Zmc2V0ID0gYmFzZS5pc1dpbmRvd1Njcm9sbGluZyA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNOYU4oYmFzZS5vcHRpb25zLmZpeGVkT2Zmc2V0KSA/XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJhc2Uub3B0aW9ucy5maXhlZE9mZnNldC5vdXRlckhlaWdodCgpIDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmFzZS5vcHRpb25zLmZpeGVkT2Zmc2V0XHJcblx0XHRcdFx0XHRcdFx0XHQpIDpcclxuXHRcdFx0XHRcdFx0XHRcdGJhc2UuJHNjcm9sbGFibGVBcmVhLm9mZnNldCgpLnRvcCArICghaXNOYU4oYmFzZS5vcHRpb25zLmZpeGVkT2Zmc2V0KSA/IGJhc2Uub3B0aW9ucy5maXhlZE9mZnNldCA6IDApLFxyXG5cdFx0XHRcdFx0XHRvZmZzZXQgPSAkdGhpcy5vZmZzZXQoKSxcclxuXHJcblx0XHRcdFx0XHRcdHNjcm9sbFRvcCA9IGJhc2UuJHNjcm9sbGFibGVBcmVhLnNjcm9sbFRvcCgpICsgbmV3VG9wT2Zmc2V0LFxyXG5cdFx0XHRcdFx0XHRzY3JvbGxMZWZ0ID0gYmFzZS4kc2Nyb2xsYWJsZUFyZWEuc2Nyb2xsTGVmdCgpLFxyXG5cclxuXHRcdFx0XHRcdFx0aGVhZGVySGVpZ2h0LFxyXG5cclxuXHRcdFx0XHRcdFx0c2Nyb2xsZWRQYXN0VG9wID0gYmFzZS5pc1dpbmRvd1Njcm9sbGluZyA/XHJcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxUb3AgPiBvZmZzZXQudG9wIDpcclxuXHRcdFx0XHRcdFx0XHRcdG5ld1RvcE9mZnNldCA+IG9mZnNldC50b3AsXHJcblx0XHRcdFx0XHRcdG5vdFNjcm9sbGVkUGFzdEJvdHRvbTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc2Nyb2xsZWRQYXN0VG9wKSB7XHJcblx0XHRcdFx0XHRcdGhlYWRlckhlaWdodCA9IGJhc2Uub3B0aW9ucy5jYWNoZUhlYWRlckhlaWdodCA/IGJhc2UuY2FjaGVkSGVhZGVySGVpZ2h0IDogYmFzZS4kY2xvbmVkSGVhZGVyLmhlaWdodCgpO1xyXG5cdFx0XHRcdFx0XHRub3RTY3JvbGxlZFBhc3RCb3R0b20gPSAoYmFzZS5pc1dpbmRvd1Njcm9sbGluZyA/IHNjcm9sbFRvcCA6IDApIDxcclxuXHRcdFx0XHRcdFx0XHQob2Zmc2V0LnRvcCArICR0aGlzLmhlaWdodCgpIC0gaGVhZGVySGVpZ2h0IC0gKGJhc2UuaXNXaW5kb3dTY3JvbGxpbmcgPyAwIDogbmV3VG9wT2Zmc2V0KSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNjcm9sbGVkUGFzdFRvcCAmJiBub3RTY3JvbGxlZFBhc3RCb3R0b20pIHtcclxuXHRcdFx0XHRcdFx0bmV3TGVmdCA9IG9mZnNldC5sZWZ0IC0gc2Nyb2xsTGVmdCArIGJhc2Uub3B0aW9ucy5sZWZ0T2Zmc2V0O1xyXG5cdFx0XHRcdFx0XHRiYXNlLiRvcmlnaW5hbEhlYWRlci5jc3Moe1xyXG5cdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0J21hcmdpbi10b3AnOiBiYXNlLm9wdGlvbnMubWFyZ2luVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiAwLFxyXG5cdFx0XHRcdFx0XHRcdCdsZWZ0JzogbmV3TGVmdCxcclxuXHRcdFx0XHRcdFx0XHQnei1pbmRleCc6IGJhc2Uub3B0aW9ucy56SW5kZXhcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJhc2UubGVmdE9mZnNldCA9IG5ld0xlZnQ7XHJcblx0XHRcdFx0XHRcdGJhc2UudG9wT2Zmc2V0ID0gbmV3VG9wT2Zmc2V0O1xyXG5cdFx0XHRcdFx0XHRiYXNlLiRjbG9uZWRIZWFkZXIuY3NzKCdkaXNwbGF5JywgJycpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIWJhc2UuaXNTdGlja3kpIHtcclxuXHRcdFx0XHRcdFx0XHRiYXNlLmlzU3RpY2t5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHQvLyBtYWtlIHN1cmUgdGhlIHdpZHRoIGlzIGNvcnJlY3Q6IHRoZSB1c2VyIG1pZ2h0IGhhdmUgcmVzaXplZCB0aGUgYnJvd3NlciB3aGlsZSBpbiBzdGF0aWMgbW9kZVxyXG5cdFx0XHRcdFx0XHRcdGJhc2UudXBkYXRlV2lkdGgoKTtcclxuXHRcdFx0XHRcdFx0XHQkdGhpcy50cmlnZ2VyKCdlbmFibGVkU3RpY2tpbmVzcy4nICsgbmFtZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YmFzZS5zZXRQb3NpdGlvblZhbHVlcygpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChiYXNlLmlzU3RpY2t5KSB7XHJcblx0XHRcdFx0XHRcdGJhc2UuJG9yaWdpbmFsSGVhZGVyLmNzcygncG9zaXRpb24nLCAnc3RhdGljJyk7XHJcblx0XHRcdFx0XHRcdGJhc2UuJGNsb25lZEhlYWRlci5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0XHRcdFx0XHRiYXNlLmlzU3RpY2t5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGJhc2UucmVzZXRXaWR0aCgkKCd0ZCx0aCcsIGJhc2UuJGNsb25lZEhlYWRlciksICQoJ3RkLHRoJywgYmFzZS4kb3JpZ2luYWxIZWFkZXIpKTtcclxuXHRcdFx0XHRcdFx0JHRoaXMudHJpZ2dlcignZGlzYWJsZWRTdGlja2luZXNzLicgKyBuYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMCk7XHJcblxyXG5cdFx0YmFzZS5zZXRQb3NpdGlvblZhbHVlcyA9IGJhc2UuZGVib3VuY2UoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgd2luU2Nyb2xsVG9wID0gYmFzZS4kd2luZG93LnNjcm9sbFRvcCgpLFxyXG5cdFx0XHRcdHdpblNjcm9sbExlZnQgPSBiYXNlLiR3aW5kb3cuc2Nyb2xsTGVmdCgpO1xyXG5cdFx0XHRpZiAoIWJhc2UuaXNTdGlja3kgfHxcclxuXHRcdFx0XHRcdHdpblNjcm9sbFRvcCA8IDAgfHwgd2luU2Nyb2xsVG9wICsgYmFzZS4kd2luZG93LmhlaWdodCgpID4gYmFzZS4kZG9jdW1lbnQuaGVpZ2h0KCkgfHxcclxuXHRcdFx0XHRcdHdpblNjcm9sbExlZnQgPCAwIHx8IHdpblNjcm9sbExlZnQgKyBiYXNlLiR3aW5kb3cud2lkdGgoKSA+IGJhc2UuJGRvY3VtZW50LndpZHRoKCkpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0YmFzZS4kb3JpZ2luYWxIZWFkZXIuY3NzKHtcclxuXHRcdFx0XHQndG9wJzogYmFzZS50b3BPZmZzZXQgLSAoYmFzZS5pc1dpbmRvd1Njcm9sbGluZyA/IDAgOiB3aW5TY3JvbGxUb3ApLFxyXG5cdFx0XHRcdCdsZWZ0JzogYmFzZS5sZWZ0T2Zmc2V0IC0gKGJhc2UuaXNXaW5kb3dTY3JvbGxpbmcgPyAwIDogd2luU2Nyb2xsTGVmdClcclxuXHRcdFx0fSk7XHJcblx0XHR9LCAwKTtcclxuXHJcblx0XHRiYXNlLnVwZGF0ZVdpZHRoID0gYmFzZS5kZWJvdW5jZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICghYmFzZS5pc1N0aWNreSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDb3B5IGNlbGwgd2lkdGhzIGZyb20gY2xvbmVcclxuXHRcdFx0aWYgKCFiYXNlLiRvcmlnaW5hbEhlYWRlckNlbGxzKSB7XHJcblx0XHRcdFx0YmFzZS4kb3JpZ2luYWxIZWFkZXJDZWxscyA9ICQoJ3RoLHRkJywgYmFzZS4kb3JpZ2luYWxIZWFkZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghYmFzZS4kY2xvbmVkSGVhZGVyQ2VsbHMpIHtcclxuXHRcdFx0XHRiYXNlLiRjbG9uZWRIZWFkZXJDZWxscyA9ICQoJ3RoLHRkJywgYmFzZS4kY2xvbmVkSGVhZGVyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgY2VsbFdpZHRocyA9IGJhc2UuZ2V0V2lkdGgoYmFzZS4kY2xvbmVkSGVhZGVyQ2VsbHMpO1xyXG5cdFx0XHRiYXNlLnNldFdpZHRoKGNlbGxXaWR0aHMsIGJhc2UuJGNsb25lZEhlYWRlckNlbGxzLCBiYXNlLiRvcmlnaW5hbEhlYWRlckNlbGxzKTtcclxuXHJcblx0XHRcdC8vIENvcHkgcm93IHdpZHRoIGZyb20gd2hvbGUgdGFibGVcclxuXHRcdFx0YmFzZS4kb3JpZ2luYWxIZWFkZXIuY3NzKCd3aWR0aCcsIGJhc2UuJGNsb25lZEhlYWRlci53aWR0aCgpKTtcclxuXHJcblx0XHRcdC8vIElmIHdlJ3JlIGNhY2hpbmcgdGhlIGhlaWdodCwgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGNhY2hlZCB2YWx1ZSB3aGVuIHRoZSB3aWR0aCBjaGFuZ2VzXHJcblx0XHRcdGlmIChiYXNlLm9wdGlvbnMuY2FjaGVIZWFkZXJIZWlnaHQpIHtcclxuXHRcdFx0XHRiYXNlLmNhY2hlZEhlYWRlckhlaWdodCA9IGJhc2UuJGNsb25lZEhlYWRlci5oZWlnaHQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgMCk7XHJcblxyXG5cdFx0YmFzZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgkY2xvbmVkSGVhZGVycykge1xyXG5cdFx0XHR2YXIgd2lkdGhzID0gW107XHJcblx0XHRcdCRjbG9uZWRIZWFkZXJzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdFx0dmFyIHdpZHRoLCAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdGlmICgkdGhpcy5jc3MoJ2JveC1zaXppbmcnKSA9PT0gJ2JvcmRlci1ib3gnKSB7XHJcblx0XHRcdFx0XHR2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gJHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRcdFx0XHRpZihib3VuZGluZ0NsaWVudFJlY3Qud2lkdGgpIHtcclxuXHRcdFx0XHRcdFx0d2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGg7IC8vICMzOTogYm9yZGVyLWJveCBidWdcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0IC0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQ7IC8vIGllOCBidWc6IGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGRvZXMgbm90IGhhdmUgYSB3aWR0aCBwcm9wZXJ0eVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgJG9yaWdUaCA9ICQoJ3RoJywgYmFzZS4kb3JpZ2luYWxIZWFkZXIpO1xyXG5cdFx0XHRcdFx0aWYgKCRvcmlnVGguY3NzKCdib3JkZXItY29sbGFwc2UnKSA9PT0gJ2NvbGxhcHNlJykge1xyXG5cdFx0XHRcdFx0XHRpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aCA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcywgbnVsbCkud2lkdGgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGllOCBvbmx5XHJcblx0XHRcdFx0XHRcdFx0dmFyIGxlZnRQYWRkaW5nID0gcGFyc2VGbG9hdCgkdGhpcy5jc3MoJ3BhZGRpbmctbGVmdCcpKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgcmlnaHRQYWRkaW5nID0gcGFyc2VGbG9hdCgkdGhpcy5jc3MoJ3BhZGRpbmctcmlnaHQnKSk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gTmVlZHMgbW9yZSBpbnZlc3RpZ2F0aW9uIC0gdGhpcyBpcyBhc3N1bWluZyBjb25zdGFudCBib3JkZXIgYXJvdW5kIHRoaXMgY2VsbCBhbmQgaXQncyBuZWlnaGJvdXJzLlxyXG5cdFx0XHRcdFx0XHRcdHZhciBib3JkZXIgPSBwYXJzZUZsb2F0KCR0aGlzLmNzcygnYm9yZGVyLXdpZHRoJykpO1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoID0gJHRoaXMub3V0ZXJXaWR0aCgpIC0gbGVmdFBhZGRpbmcgLSByaWdodFBhZGRpbmcgLSBib3JkZXI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoID0gJHRoaXMud2lkdGgoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHdpZHRoc1tpbmRleF0gPSB3aWR0aDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB3aWR0aHM7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2Uuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGhzLCAkY2xvbmVkSGVhZGVycywgJG9yaWdIZWFkZXJzKSB7XHJcblx0XHRcdCRjbG9uZWRIZWFkZXJzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdFx0dmFyIHdpZHRoID0gd2lkdGhzW2luZGV4XTtcclxuXHRcdFx0XHQkb3JpZ0hlYWRlcnMuZXEoaW5kZXgpLmNzcyh7XHJcblx0XHRcdFx0XHQnbWluLXdpZHRoJzogd2lkdGgsXHJcblx0XHRcdFx0XHQnbWF4LXdpZHRoJzogd2lkdGhcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UucmVzZXRXaWR0aCA9IGZ1bmN0aW9uICgkY2xvbmVkSGVhZGVycywgJG9yaWdIZWFkZXJzKSB7XHJcblx0XHRcdCRjbG9uZWRIZWFkZXJzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0XHQkb3JpZ0hlYWRlcnMuZXEoaW5kZXgpLmNzcyh7XHJcblx0XHRcdFx0XHQnbWluLXdpZHRoJzogJHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcclxuXHRcdFx0XHRcdCdtYXgtd2lkdGgnOiAkdGhpcy5jc3MoJ21heC13aWR0aCcpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRiYXNlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHRiYXNlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cdFx0XHRiYXNlLiR3aW5kb3cgPSAkKGJhc2Uub3B0aW9ucy5vYmpXaW5kb3cpO1xyXG5cdFx0XHRiYXNlLiRoZWFkID0gJChiYXNlLm9wdGlvbnMub2JqSGVhZCk7XHJcblx0XHRcdGJhc2UuJGRvY3VtZW50ID0gJChiYXNlLm9wdGlvbnMub2JqRG9jdW1lbnQpO1xyXG5cdFx0XHRiYXNlLiRzY3JvbGxhYmxlQXJlYSA9ICQoYmFzZS5vcHRpb25zLnNjcm9sbGFibGVBcmVhKTtcclxuXHRcdFx0YmFzZS5pc1dpbmRvd1Njcm9sbGluZyA9IGJhc2UuJHNjcm9sbGFibGVBcmVhWzBdID09PSBiYXNlLiR3aW5kb3dbMF07XHJcblx0XHR9O1xyXG5cclxuXHRcdGJhc2UudXBkYXRlT3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdGJhc2Uuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuXHRcdFx0Ly8gc2Nyb2xsYWJsZUFyZWEgbWlnaHQgaGF2ZSBjaGFuZ2VkXHJcblx0XHRcdGJhc2UudW5iaW5kKCk7XHJcblx0XHRcdGJhc2UuYmluZCgpO1xyXG5cdFx0XHRiYXNlLnVwZGF0ZVdpZHRoKCk7XHJcblx0XHRcdGJhc2UudG9nZ2xlSGVhZGVycygpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBSdW4gaW5pdGlhbGl6ZXJcclxuXHRcdGJhc2UuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gQSBwbHVnaW4gd3JhcHBlciBhcm91bmQgdGhlIGNvbnN0cnVjdG9yLFxyXG5cdC8vIHByZXZlbnRpbmcgYWdhaW5zdCBtdWx0aXBsZSBpbnN0YW50aWF0aW9uc1xyXG5cdCQuZm5bbmFtZV0gPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGluc3RhbmNlID0gJC5kYXRhKHRoaXMsICdwbHVnaW5fJyArIG5hbWUpO1xyXG5cdFx0XHRpZiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGluc3RhbmNlLnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYob3B0aW9ucyAhPT0gJ2Rlc3Ryb3knKSB7XHJcblx0XHRcdFx0JC5kYXRhKHRoaXMsICdwbHVnaW5fJyArIG5hbWUsIG5ldyBQbHVnaW4oIHRoaXMsIG9wdGlvbnMgKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG59KShqUXVlcnksIHdpbmRvdyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=