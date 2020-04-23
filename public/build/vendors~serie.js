(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~serie"],{

/***/ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-select/dist/js/bootstrap-select.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Bootstrap-select v1.13.12 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2019 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return (factory(a0));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (jQuery) {

(function ($) {
  'use strict';

  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];

  var uriAttrs = [
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ];

  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;

  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', 'tabindex', 'style', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
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
    img: ['src', 'alt', 'title', 'width', 'height'],
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
    ul: []
  }

  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;

  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute (attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase()

    if ($.inArray(attrName, allowedAttributeList) !== -1) {
      if ($.inArray(attrName, uriAttrs) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN))
      }

      return true
    }

    var regExp = $(allowedAttributeList).filter(function (index, value) {
      return value instanceof RegExp
    })

    // Check if a regular expression validates the attribute.
    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true
      }
    }

    return false
  }

  function sanitizeHtml (unsafeElements, whiteList, sanitizeFn) {
    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeElements);
    }

    var whitelistKeys = Object.keys(whiteList);

    for (var i = 0, len = unsafeElements.length; i < len; i++) {
      var elements = unsafeElements[i].querySelectorAll('*');

      for (var j = 0, len2 = elements.length; j < len2; j++) {
        var el = elements[j];
        var elName = el.nodeName.toLowerCase();

        if (whitelistKeys.indexOf(elName) === -1) {
          el.parentNode.removeChild(el);

          continue;
        }

        var attributeList = [].slice.call(el.attributes);
        var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);

        for (var k = 0, len3 = attributeList.length; k < len3; k++) {
          var attr = attributeList[k];

          if (!allowedAttribute(attr, whitelistedAttributes)) {
            el.removeAttribute(attr.nodeName);
          }
        }
      }
    }
  }

  // Polyfill for browsers with no classList support
  // Remove in v2
  if (!('classList' in document.createElement('_'))) {
    (function (view) {
      if (!('Element' in view)) return;

      var classListProp = 'classList',
          protoProp = 'prototype',
          elemCtrProto = view.Element[protoProp],
          objCtr = Object,
          classListGetter = function () {
            var $elem = $(this);

            return {
              add: function (classes) {
                classes = Array.prototype.slice.call(arguments).join(' ');
                return $elem.addClass(classes);
              },
              remove: function (classes) {
                classes = Array.prototype.slice.call(arguments).join(' ');
                return $elem.removeClass(classes);
              },
              toggle: function (classes, force) {
                return $elem.toggleClass(classes, force);
              },
              contains: function (classes) {
                return $elem.hasClass(classes);
              }
            }
          };

      if (objCtr.defineProperty) {
        var classListPropDesc = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };
        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) { // IE 8 doesn't support enumerable:true
          // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
          // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
          if (ex.number === undefined || ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }
    }(window));
  }

  var testElement = document.createElement('_');

  testElement.classList.add('c1', 'c2');

  if (!testElement.classList.contains('c2')) {
    var _add = DOMTokenList.prototype.add,
        _remove = DOMTokenList.prototype.remove;

    DOMTokenList.prototype.add = function () {
      Array.prototype.forEach.call(arguments, _add.bind(this));
    }

    DOMTokenList.prototype.remove = function () {
      Array.prototype.forEach.call(arguments, _remove.bind(this));
    }
  }

  testElement.classList.toggle('c3', false);

  // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
  // support the second argument.
  if (testElement.classList.contains('c3')) {
    var _toggle = DOMTokenList.prototype.toggle;

    DOMTokenList.prototype.toggle = function (token, force) {
      if (1 in arguments && !this.contains(token) === !force) {
        return force;
      } else {
        return _toggle.call(this, token);
      }
    };
  }

  testElement = null;

  // shallow array comparison
  function isEqual (array1, array2) {
    return array1.length === array2.length && array1.every(function (element, index) {
      return element === array2[index];
    });
  };

  // <editor-fold desc="Shims">
  if (!String.prototype.startsWith) {
    (function () {
      'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
      var defineProperty = (function () {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {
        }
        return result;
      }());
      var toString = {}.toString;
      var startsWith = function (search) {
        if (this == null) {
          throw new TypeError();
        }
        var string = String(this);
        if (search && toString.call(search) == '[object RegExp]') {
          throw new TypeError();
        }
        var stringLength = string.length;
        var searchString = String(search);
        var searchLength = searchString.length;
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // `ToInteger`
        var pos = position ? Number(position) : 0;
        if (pos != pos) { // better `isNaN`
          pos = 0;
        }
        var start = Math.min(Math.max(pos, 0), stringLength);
        // Avoid the `indexOf` call if no match is possible
        if (searchLength + start > stringLength) {
          return false;
        }
        var index = -1;
        while (++index < searchLength) {
          if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
            return false;
          }
        }
        return true;
      };
      if (defineProperty) {
        defineProperty(String.prototype, 'startsWith', {
          'value': startsWith,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.startsWith = startsWith;
      }
    }());
  }

  if (!Object.keys) {
    Object.keys = function (
      o, // object
      k, // key
      r  // result array
    ) {
      // initialize object and result
      r = [];
      // iterate over object keys
      for (k in o) {
        // fill result array with non-prototypical keys
        r.hasOwnProperty.call(o, k) && r.push(k);
      }
      // return result
      return r;
    };
  }

  if (HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty('selectedOptions')) {
    Object.defineProperty(HTMLSelectElement.prototype, 'selectedOptions', {
      get: function () {
        return this.querySelectorAll(':checked');
      }
    });
  }

  function getSelectedOptions (select, ignoreDisabled) {
    var selectedOptions = select.selectedOptions,
        options = [],
        opt;

    if (ignoreDisabled) {
      for (var i = 0, len = selectedOptions.length; i < len; i++) {
        opt = selectedOptions[i];

        if (!(opt.disabled || opt.parentNode.tagName === 'OPTGROUP' && opt.parentNode.disabled)) {
          options.push(opt);
        }
      }

      return options;
    }

    return selectedOptions;
  }

  // much faster than $.val()
  function getSelectValues (select, selectedOptions) {
    var value = [],
        options = selectedOptions || select.selectedOptions,
        opt;

    for (var i = 0, len = options.length; i < len; i++) {
      opt = options[i];

      if (!(opt.disabled || opt.parentNode.tagName === 'OPTGROUP' && opt.parentNode.disabled)) {
        value.push(opt.value || opt.text);
      }
    }

    if (!select.multiple) {
      return !value.length ? null : value[0];
    }

    return value;
  }

  // set data-selected on select element if the value has been programmatically selected
  // prior to initialization of bootstrap-select
  // * consider removing or replacing an alternative method *
  var valHooks = {
    useDefault: false,
    _set: $.valHooks.select.set
  };

  $.valHooks.select.set = function (elem, value) {
    if (value && !valHooks.useDefault) $(elem).data('selected', true);

    return valHooks._set.apply(this, arguments);
  };

  var changedArguments = null;

  var EventIsSupported = (function () {
    try {
      new Event('change');
      return true;
    } catch (e) {
      return false;
    }
  })();

  $.fn.triggerNative = function (eventName) {
    var el = this[0],
        event;

    if (el.dispatchEvent) { // for modern browsers & IE9+
      if (EventIsSupported) {
        // For modern browsers
        event = new Event(eventName, {
          bubbles: true
        });
      } else {
        // For IE since it doesn't support Event constructor
        event = document.createEvent('Event');
        event.initEvent(eventName, true, false);
      }

      el.dispatchEvent(event);
    } else if (el.fireEvent) { // for IE8
      event = document.createEventObject();
      event.eventType = eventName;
      el.fireEvent('on' + eventName, event);
    } else {
      // fall back to jQuery.trigger
      this.trigger(eventName);
    }
  };
  // </editor-fold>

  function stringSearch (li, searchString, method, normalize) {
    var stringTypes = [
          'display',
          'subtext',
          'tokens'
        ],
        searchSuccess = false;

    for (var i = 0; i < stringTypes.length; i++) {
      var stringType = stringTypes[i],
          string = li[stringType];

      if (string) {
        string = string.toString();

        // Strip HTML tags. This isn't perfect, but it's much faster than any other method
        if (stringType === 'display') {
          string = string.replace(/<[^>]+>/g, '');
        }

        if (normalize) string = normalizeToBase(string);
        string = string.toUpperCase();

        if (method === 'contains') {
          searchSuccess = string.indexOf(searchString) >= 0;
        } else {
          searchSuccess = string.startsWith(searchString);
        }

        if (searchSuccess) break;
      }
    }

    return searchSuccess;
  }

  function toInteger (value) {
    return parseInt(value, 10) || 0;
  }

  // Borrowed from Lodash (_.deburr)
  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to compose unicode character classes. */
  var rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboMarksExtendedRange = '\\u1ab0-\\u1aff',
      rsComboMarksSupplementRange = '\\u1dc0-\\u1dff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;

  /** Used to compose unicode capture groups. */
  var rsCombo = '[' + rsComboRange + ']';

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  function deburrLetter (key) {
    return deburredLetters[key];
  };

  function normalizeToBase (string) {
    string = string.toString();
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
  }

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function (map) {
    var escaper = function (match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + Object.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };

  var htmlEscape = createEscaper(escapeMap);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var keyCodeMap = {
    32: ' ',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    59: ';',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    96: '0',
    97: '1',
    98: '2',
    99: '3',
    100: '4',
    101: '5',
    102: '6',
    103: '7',
    104: '8',
    105: '9'
  };

  var keyCodes = {
    ESCAPE: 27, // KeyboardEvent.which value for Escape (Esc) key
    ENTER: 13, // KeyboardEvent.which value for Enter key
    SPACE: 32, // KeyboardEvent.which value for space key
    TAB: 9, // KeyboardEvent.which value for tab key
    ARROW_UP: 38, // KeyboardEvent.which value for up arrow key
    ARROW_DOWN: 40 // KeyboardEvent.which value for down arrow key
  }

  var version = {
    success: false,
    major: '3'
  };

  try {
    version.full = ($.fn.dropdown.Constructor.VERSION || '').split(' ')[0].split('.');
    version.major = version.full[0];
    version.success = true;
  } catch (err) {
    // do nothing
  }

  var selectId = 0;

  var EVENT_KEY = '.bs.select';

  var classNames = {
    DISABLED: 'disabled',
    DIVIDER: 'divider',
    SHOW: 'open',
    DROPUP: 'dropup',
    MENU: 'dropdown-menu',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    // to-do: replace with more advanced template/customization options
    BUTTONCLASS: 'btn-default',
    POPOVERHEADER: 'popover-title',
    ICONBASE: 'glyphicon',
    TICKICON: 'glyphicon-ok'
  }

  var Selector = {
    MENU: '.' + classNames.MENU
  }

  var elementTemplates = {
    span: document.createElement('span'),
    i: document.createElement('i'),
    subtext: document.createElement('small'),
    a: document.createElement('a'),
    li: document.createElement('li'),
    whitespace: document.createTextNode('\u00A0'),
    fragment: document.createDocumentFragment()
  }

  elementTemplates.a.setAttribute('role', 'option');
  elementTemplates.subtext.className = 'text-muted';

  elementTemplates.text = elementTemplates.span.cloneNode(false);
  elementTemplates.text.className = 'text';

  elementTemplates.checkMark = elementTemplates.span.cloneNode(false);

  var REGEXP_ARROW = new RegExp(keyCodes.ARROW_UP + '|' + keyCodes.ARROW_DOWN);
  var REGEXP_TAB_OR_ESCAPE = new RegExp('^' + keyCodes.TAB + '$|' + keyCodes.ESCAPE);

  var generateOption = {
    li: function (content, classes, optgroup) {
      var li = elementTemplates.li.cloneNode(false);

      if (content) {
        if (content.nodeType === 1 || content.nodeType === 11) {
          li.appendChild(content);
        } else {
          li.innerHTML = content;
        }
      }

      if (typeof classes !== 'undefined' && classes !== '') li.className = classes;
      if (typeof optgroup !== 'undefined' && optgroup !== null) li.classList.add('optgroup-' + optgroup);

      return li;
    },

    a: function (text, classes, inline) {
      var a = elementTemplates.a.cloneNode(true);

      if (text) {
        if (text.nodeType === 11) {
          a.appendChild(text);
        } else {
          a.insertAdjacentHTML('beforeend', text);
        }
      }

      if (typeof classes !== 'undefined' && classes !== '') a.className = classes;
      if (version.major === '4') a.classList.add('dropdown-item');
      if (inline) a.setAttribute('style', inline);

      return a;
    },

    text: function (options, useFragment) {
      var textElement = elementTemplates.text.cloneNode(false),
          subtextElement,
          iconElement;

      if (options.content) {
        textElement.innerHTML = options.content;
      } else {
        textElement.textContent = options.text;

        if (options.icon) {
          var whitespace = elementTemplates.whitespace.cloneNode(false);

          // need to use <i> for icons in the button to prevent a breaking change
          // note: switch to span in next major release
          iconElement = (useFragment === true ? elementTemplates.i : elementTemplates.span).cloneNode(false);
          iconElement.className = options.iconBase + ' ' + options.icon;

          elementTemplates.fragment.appendChild(iconElement);
          elementTemplates.fragment.appendChild(whitespace);
        }

        if (options.subtext) {
          subtextElement = elementTemplates.subtext.cloneNode(false);
          subtextElement.textContent = options.subtext;
          textElement.appendChild(subtextElement);
        }
      }

      if (useFragment === true) {
        while (textElement.childNodes.length > 0) {
          elementTemplates.fragment.appendChild(textElement.childNodes[0]);
        }
      } else {
        elementTemplates.fragment.appendChild(textElement);
      }

      return elementTemplates.fragment;
    },

    label: function (options) {
      var textElement = elementTemplates.text.cloneNode(false),
          subtextElement,
          iconElement;

      textElement.innerHTML = options.label;

      if (options.icon) {
        var whitespace = elementTemplates.whitespace.cloneNode(false);

        iconElement = elementTemplates.span.cloneNode(false);
        iconElement.className = options.iconBase + ' ' + options.icon;

        elementTemplates.fragment.appendChild(iconElement);
        elementTemplates.fragment.appendChild(whitespace);
      }

      if (options.subtext) {
        subtextElement = elementTemplates.subtext.cloneNode(false);
        subtextElement.textContent = options.subtext;
        textElement.appendChild(subtextElement);
      }

      elementTemplates.fragment.appendChild(textElement);

      return elementTemplates.fragment;
    }
  }

  var Selectpicker = function (element, options) {
    var that = this;

    // bootstrap-select has been initialized - revert valHooks.select.set back to its original function
    if (!valHooks.useDefault) {
      $.valHooks.select.set = valHooks._set;
      valHooks.useDefault = true;
    }

    this.$element = $(element);
    this.$newElement = null;
    this.$button = null;
    this.$menu = null;
    this.options = options;
    this.selectpicker = {
      main: {},
      search: {},
      current: {}, // current changes if a search is in progress
      view: {},
      keydown: {
        keyHistory: '',
        resetKeyHistory: {
          start: function () {
            return setTimeout(function () {
              that.selectpicker.keydown.keyHistory = '';
            }, 800);
          }
        }
      }
    };
    // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
    // data-attribute)
    if (this.options.title === null) {
      this.options.title = this.$element.attr('title');
    }

    // Format window padding
    var winPad = this.options.windowPadding;
    if (typeof winPad === 'number') {
      this.options.windowPadding = [winPad, winPad, winPad, winPad];
    }

    // Expose public methods
    this.val = Selectpicker.prototype.val;
    this.render = Selectpicker.prototype.render;
    this.refresh = Selectpicker.prototype.refresh;
    this.setStyle = Selectpicker.prototype.setStyle;
    this.selectAll = Selectpicker.prototype.selectAll;
    this.deselectAll = Selectpicker.prototype.deselectAll;
    this.destroy = Selectpicker.prototype.destroy;
    this.remove = Selectpicker.prototype.remove;
    this.show = Selectpicker.prototype.show;
    this.hide = Selectpicker.prototype.hide;

    this.init();
  };

  Selectpicker.VERSION = '1.13.12';

  // part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.
  Selectpicker.DEFAULTS = {
    noneSelectedText: 'Nothing selected',
    noneResultsText: 'No results matched {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? '{0} item selected' : '{0} items selected';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
        (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
      ];
    },
    selectAllText: 'Select All',
    deselectAllText: 'Deselect All',
    doneButton: false,
    doneButtonText: 'Close',
    multipleSeparator: ', ',
    styleBase: 'btn',
    style: classNames.BUTTONCLASS,
    size: 'auto',
    title: null,
    selectedTextFormat: 'values',
    width: false,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true,
    showContent: true,
    dropupAuto: true,
    header: false,
    liveSearch: false,
    liveSearchPlaceholder: null,
    liveSearchNormalize: false,
    liveSearchStyle: 'contains',
    actionsBox: false,
    iconBase: classNames.ICONBASE,
    tickIcon: classNames.TICKICON,
    showTick: false,
    template: {
      caret: '<span class="caret"></span>'
    },
    maxOptions: false,
    mobile: false,
    selectOnTab: false,
    dropdownAlignRight: false,
    windowPadding: 0,
    virtualScroll: 600,
    display: false,
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };

  Selectpicker.prototype = {

    constructor: Selectpicker,

    init: function () {
      var that = this,
          id = this.$element.attr('id');

      selectId++;
      this.selectId = 'bs-select-' + selectId;

      this.$element[0].classList.add('bs-select-hidden');

      this.multiple = this.$element.prop('multiple');
      this.autofocus = this.$element.prop('autofocus');

      if (this.$element[0].classList.contains('show-tick')) {
        this.options.showTick = true;
      }

      this.$newElement = this.createDropdown();
      this.$element
        .after(this.$newElement)
        .prependTo(this.$newElement);

      this.$button = this.$newElement.children('button');
      this.$menu = this.$newElement.children(Selector.MENU);
      this.$menuInner = this.$menu.children('.inner');
      this.$searchbox = this.$menu.find('input');

      this.$element[0].classList.remove('bs-select-hidden');

      if (this.options.dropdownAlignRight === true) this.$menu[0].classList.add(classNames.MENURIGHT);

      if (typeof id !== 'undefined') {
        this.$button.attr('data-id', id);
      }

      this.checkDisabled();
      this.clickListener();

      if (this.options.liveSearch) {
        this.liveSearchListener();
        this.focusedParent = this.$searchbox[0];
      } else {
        this.focusedParent = this.$menuInner[0];
      }

      this.setStyle();
      this.render();
      this.setWidth();
      if (this.options.container) {
        this.selectPosition();
      } else {
        this.$element.on('hide' + EVENT_KEY, function () {
          if (that.isVirtual()) {
            // empty menu on close
            var menuInner = that.$menuInner[0],
                emptyMenu = menuInner.firstChild.cloneNode(false);

            // replace the existing UL with an empty one - this is faster than $.empty() or innerHTML = ''
            menuInner.replaceChild(emptyMenu, menuInner.firstChild);
            menuInner.scrollTop = 0;
          }
        });
      }
      this.$menu.data('this', this);
      this.$newElement.data('this', this);
      if (this.options.mobile) this.mobile();

      this.$newElement.on({
        'hide.bs.dropdown': function (e) {
          that.$element.trigger('hide' + EVENT_KEY, e);
        },
        'hidden.bs.dropdown': function (e) {
          that.$element.trigger('hidden' + EVENT_KEY, e);
        },
        'show.bs.dropdown': function (e) {
          that.$element.trigger('show' + EVENT_KEY, e);
        },
        'shown.bs.dropdown': function (e) {
          that.$element.trigger('shown' + EVENT_KEY, e);
        }
      });

      if (that.$element[0].hasAttribute('required')) {
        this.$element.on('invalid' + EVENT_KEY, function () {
          that.$button[0].classList.add('bs-invalid');

          that.$element
            .on('shown' + EVENT_KEY + '.invalid', function () {
              that.$element
                .val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
                .off('shown' + EVENT_KEY + '.invalid');
            })
            .on('rendered' + EVENT_KEY, function () {
              // if select is no longer invalid, remove the bs-invalid class
              if (this.validity.valid) that.$button[0].classList.remove('bs-invalid');
              that.$element.off('rendered' + EVENT_KEY);
            });

          that.$button.on('blur' + EVENT_KEY, function () {
            that.$element.trigger('focus').trigger('blur');
            that.$button.off('blur' + EVENT_KEY);
          });
        });
      }

      setTimeout(function () {
        that.createLi();
        that.$element.trigger('loaded' + EVENT_KEY);
      });
    },

    createDropdown: function () {
      // Options
      // If we are multiple or showTick option is set, then add the show-tick class
      var showTick = (this.multiple || this.options.showTick) ? ' show-tick' : '',
          multiselectable = this.multiple ? ' aria-multiselectable="true"' : '',
          inputGroup = '',
          autofocus = this.autofocus ? ' autofocus' : '';

      if (version.major < 4 && this.$element.parent().hasClass('input-group')) {
        inputGroup = ' input-group-btn';
      }

      // Elements
      var drop,
          header = '',
          searchbox = '',
          actionsbox = '',
          donebutton = '';

      if (this.options.header) {
        header =
          '<div class="' + classNames.POPOVERHEADER + '">' +
            '<button type="button" class="close" aria-hidden="true">&times;</button>' +
              this.options.header +
          '</div>';
      }

      if (this.options.liveSearch) {
        searchbox =
          '<div class="bs-searchbox">' +
            '<input type="search" class="form-control" autocomplete="off"' +
              (
                this.options.liveSearchPlaceholder === null ? ''
                :
                ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"'
              ) +
              ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list">' +
          '</div>';
      }

      if (this.multiple && this.options.actionsBox) {
        actionsbox =
          '<div class="bs-actionsbox">' +
            '<div class="btn-group btn-group-sm btn-block">' +
              '<button type="button" class="actions-btn bs-select-all btn ' + classNames.BUTTONCLASS + '">' +
                this.options.selectAllText +
              '</button>' +
              '<button type="button" class="actions-btn bs-deselect-all btn ' + classNames.BUTTONCLASS + '">' +
                this.options.deselectAllText +
              '</button>' +
            '</div>' +
          '</div>';
      }

      if (this.multiple && this.options.doneButton) {
        donebutton =
          '<div class="bs-donebutton">' +
            '<div class="btn-group btn-block">' +
              '<button type="button" class="btn btn-sm ' + classNames.BUTTONCLASS + '">' +
                this.options.doneButtonText +
              '</button>' +
            '</div>' +
          '</div>';
      }

      drop =
        '<div class="dropdown bootstrap-select' + showTick + inputGroup + '">' +
          '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + (this.options.display === 'static' ? 'data-display="static"' : '') + 'data-toggle="dropdown"' + autofocus + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false">' +
            '<div class="filter-option">' +
              '<div class="filter-option-inner">' +
                '<div class="filter-option-inner-inner"></div>' +
              '</div> ' +
            '</div>' +
            (
              version.major === '4' ? ''
              :
              '<span class="bs-caret">' +
                this.options.template.caret +
              '</span>'
            ) +
          '</button>' +
          '<div class="' + classNames.MENU + ' ' + (version.major === '4' ? '' : classNames.SHOW) + '">' +
            header +
            searchbox +
            actionsbox +
            '<div class="inner ' + classNames.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + multiselectable + '>' +
                '<ul class="' + classNames.MENU + ' inner ' + (version.major === '4' ? classNames.SHOW : '') + '" role="presentation">' +
                '</ul>' +
            '</div>' +
            donebutton +
          '</div>' +
        '</div>';

      return $(drop);
    },

    setPositionData: function () {
      this.selectpicker.view.canHighlight = [];
      this.selectpicker.view.size = 0;

      for (var i = 0; i < this.selectpicker.current.data.length; i++) {
        var li = this.selectpicker.current.data[i],
            canHighlight = true;

        if (li.type === 'divider') {
          canHighlight = false;
          li.height = this.sizeInfo.dividerHeight;
        } else if (li.type === 'optgroup-label') {
          canHighlight = false;
          li.height = this.sizeInfo.dropdownHeaderHeight;
        } else {
          li.height = this.sizeInfo.liHeight;
        }

        if (li.disabled) canHighlight = false;

        this.selectpicker.view.canHighlight.push(canHighlight);

        if (canHighlight) {
          this.selectpicker.view.size++;
          li.posinset = this.selectpicker.view.size;
        }

        li.position = (i === 0 ? 0 : this.selectpicker.current.data[i - 1].position) + li.height;
      }
    },

    isVirtual: function () {
      return (this.options.virtualScroll !== false) && (this.selectpicker.main.elements.length >= this.options.virtualScroll) || this.options.virtualScroll === true;
    },

    createView: function (isSearching, setSize, refresh) {
      var that = this,
          scrollTop = 0,
          active = [],
          selected,
          prevActive;

      this.selectpicker.current = isSearching ? this.selectpicker.search : this.selectpicker.main;

      this.setPositionData();

      if (setSize) {
        if (refresh) {
          scrollTop = this.$menuInner[0].scrollTop;
        } else if (!that.multiple) {
          var element = that.$element[0],
              selectedIndex = (element.options[element.selectedIndex] || {}).liIndex;

          if (typeof selectedIndex === 'number' && that.options.size !== false) {
            var selectedData = that.selectpicker.main.data[selectedIndex],
                position = selectedData && selectedData.position;

            if (position) {
              scrollTop = position - ((that.sizeInfo.menuInnerHeight + that.sizeInfo.liHeight) / 2);
            }
          }
        }
      }

      scroll(scrollTop, true);

      this.$menuInner.off('scroll.createView').on('scroll.createView', function (e, updateValue) {
        if (!that.noScroll) scroll(this.scrollTop, updateValue);
        that.noScroll = false;
      });

      function scroll (scrollTop, init) {
        var size = that.selectpicker.current.elements.length,
            chunks = [],
            chunkSize,
            chunkCount,
            firstChunk,
            lastChunk,
            currentChunk,
            prevPositions,
            positionIsDifferent,
            previousElements,
            menuIsDifferent = true,
            isVirtual = that.isVirtual();

        that.selectpicker.view.scrollTop = scrollTop;

        chunkSize = Math.ceil(that.sizeInfo.menuInnerHeight / that.sizeInfo.liHeight * 1.5); // number of options in a chunk
        chunkCount = Math.round(size / chunkSize) || 1; // number of chunks

        for (var i = 0; i < chunkCount; i++) {
          var endOfChunk = (i + 1) * chunkSize;

          if (i === chunkCount - 1) {
            endOfChunk = size;
          }

          chunks[i] = [
            (i) * chunkSize + (!i ? 0 : 1),
            endOfChunk
          ];

          if (!size) break;

          if (currentChunk === undefined && scrollTop - 1 <= that.selectpicker.current.data[endOfChunk - 1].position - that.sizeInfo.menuInnerHeight) {
            currentChunk = i;
          }
        }

        if (currentChunk === undefined) currentChunk = 0;

        prevPositions = [that.selectpicker.view.position0, that.selectpicker.view.position1];

        // always display previous, current, and next chunks
        firstChunk = Math.max(0, currentChunk - 1);
        lastChunk = Math.min(chunkCount - 1, currentChunk + 1);

        that.selectpicker.view.position0 = isVirtual === false ? 0 : (Math.max(0, chunks[firstChunk][0]) || 0);
        that.selectpicker.view.position1 = isVirtual === false ? size : (Math.min(size, chunks[lastChunk][1]) || 0);

        positionIsDifferent = prevPositions[0] !== that.selectpicker.view.position0 || prevPositions[1] !== that.selectpicker.view.position1;

        if (that.activeIndex !== undefined) {
          prevActive = that.selectpicker.main.elements[that.prevActiveIndex];
          active = that.selectpicker.main.elements[that.activeIndex];
          selected = that.selectpicker.main.elements[that.selectedIndex];

          if (init) {
            if (that.activeIndex !== that.selectedIndex) {
              that.defocusItem(active);
            }
            that.activeIndex = undefined;
          }

          if (that.activeIndex && that.activeIndex !== that.selectedIndex) {
            that.defocusItem(selected);
          }
        }

        if (that.prevActiveIndex !== undefined && that.prevActiveIndex !== that.activeIndex && that.prevActiveIndex !== that.selectedIndex) {
          that.defocusItem(prevActive);
        }

        if (init || positionIsDifferent) {
          previousElements = that.selectpicker.view.visibleElements ? that.selectpicker.view.visibleElements.slice() : [];

          if (isVirtual === false) {
            that.selectpicker.view.visibleElements = that.selectpicker.current.elements;
          } else {
            that.selectpicker.view.visibleElements = that.selectpicker.current.elements.slice(that.selectpicker.view.position0, that.selectpicker.view.position1);
          }

          that.setOptionStatus();

          // if searching, check to make sure the list has actually been updated before updating DOM
          // this prevents unnecessary repaints
          if (isSearching || (isVirtual === false && init)) menuIsDifferent = !isEqual(previousElements, that.selectpicker.view.visibleElements);

          // if virtual scroll is disabled and not searching,
          // menu should never need to be updated more than once
          if ((init || isVirtual === true) && menuIsDifferent) {
            var menuInner = that.$menuInner[0],
                menuFragment = document.createDocumentFragment(),
                emptyMenu = menuInner.firstChild.cloneNode(false),
                marginTop,
                marginBottom,
                elements = that.selectpicker.view.visibleElements,
                toSanitize = [];

            // replace the existing UL with an empty one - this is faster than $.empty()
            menuInner.replaceChild(emptyMenu, menuInner.firstChild);

            for (var i = 0, visibleElementsLen = elements.length; i < visibleElementsLen; i++) {
              var element = elements[i],
                  elText,
                  elementData;

              if (that.options.sanitize) {
                elText = element.lastChild;

                if (elText) {
                  elementData = that.selectpicker.current.data[i + that.selectpicker.view.position0];

                  if (elementData && elementData.content && !elementData.sanitized) {
                    toSanitize.push(elText);
                    elementData.sanitized = true;
                  }
                }
              }

              menuFragment.appendChild(element);
            }

            if (that.options.sanitize && toSanitize.length) {
              sanitizeHtml(toSanitize, that.options.whiteList, that.options.sanitizeFn);
            }

            if (isVirtual === true) {
              marginTop = (that.selectpicker.view.position0 === 0 ? 0 : that.selectpicker.current.data[that.selectpicker.view.position0 - 1].position);
              marginBottom = (that.selectpicker.view.position1 > size - 1 ? 0 : that.selectpicker.current.data[size - 1].position - that.selectpicker.current.data[that.selectpicker.view.position1 - 1].position);

              menuInner.firstChild.style.marginTop = marginTop + 'px';
              menuInner.firstChild.style.marginBottom = marginBottom + 'px';
            } else {
              menuInner.firstChild.style.marginTop = 0;
              menuInner.firstChild.style.marginBottom = 0;
            }

            menuInner.firstChild.appendChild(menuFragment);

            // if an option is encountered that is wider than the current menu width, update the menu width accordingly
            // switch to ResizeObserver with increased browser support
            if (isVirtual === true && that.sizeInfo.hasScrollBar) {
              var menuInnerInnerWidth = menuInner.firstChild.offsetWidth;

              if (init && menuInnerInnerWidth < that.sizeInfo.menuInnerInnerWidth && that.sizeInfo.totalMenuWidth > that.sizeInfo.selectWidth) {
                menuInner.firstChild.style.minWidth = that.sizeInfo.menuInnerInnerWidth + 'px';
              } else if (menuInnerInnerWidth > that.sizeInfo.menuInnerInnerWidth) {
                // set to 0 to get actual width of menu
                that.$menu[0].style.minWidth = 0;

                var actualMenuWidth = menuInner.firstChild.offsetWidth;

                if (actualMenuWidth > that.sizeInfo.menuInnerInnerWidth) {
                  that.sizeInfo.menuInnerInnerWidth = actualMenuWidth;
                  menuInner.firstChild.style.minWidth = that.sizeInfo.menuInnerInnerWidth + 'px';
                }

                // reset to default CSS styling
                that.$menu[0].style.minWidth = '';
              }
            }
          }
        }

        that.prevActiveIndex = that.activeIndex;

        if (!that.options.liveSearch) {
          that.$menuInner.trigger('focus');
        } else if (isSearching && init) {
          var index = 0,
              newActive;

          if (!that.selectpicker.view.canHighlight[index]) {
            index = 1 + that.selectpicker.view.canHighlight.slice(1).indexOf(true);
          }

          newActive = that.selectpicker.view.visibleElements[index];

          that.defocusItem(that.selectpicker.view.currentActive);

          that.activeIndex = (that.selectpicker.current.data[index] || {}).index;

          that.focusItem(newActive);
        }
      }

      $(window)
        .off('resize' + EVENT_KEY + '.' + this.selectId + '.createView')
        .on('resize' + EVENT_KEY + '.' + this.selectId + '.createView', function () {
          var isActive = that.$newElement.hasClass(classNames.SHOW);

          if (isActive) scroll(that.$menuInner[0].scrollTop);
        });
    },

    focusItem: function (li, liData, noStyle) {
      if (li) {
        liData = liData || this.selectpicker.main.data[this.activeIndex];
        var a = li.firstChild;

        if (a) {
          a.setAttribute('aria-setsize', this.selectpicker.view.size);
          a.setAttribute('aria-posinset', liData.posinset);

          if (noStyle !== true) {
            this.focusedParent.setAttribute('aria-activedescendant', a.id);
            li.classList.add('active');
            a.classList.add('active');
          }
        }
      }
    },

    defocusItem: function (li) {
      if (li) {
        li.classList.remove('active');
        if (li.firstChild) li.firstChild.classList.remove('active');
      }
    },

    setPlaceholder: function () {
      var updateIndex = false;

      if (this.options.title && !this.multiple) {
        if (!this.selectpicker.view.titleOption) this.selectpicker.view.titleOption = document.createElement('option');

        // this option doesn't create a new <li> element, but does add a new option at the start,
        // so startIndex should increase to prevent having to check every option for the bs-title-option class
        updateIndex = true;

        var element = this.$element[0],
            isSelected = false,
            titleNotAppended = !this.selectpicker.view.titleOption.parentNode;

        if (titleNotAppended) {
          // Use native JS to prepend option (faster)
          this.selectpicker.view.titleOption.className = 'bs-title-option';
          this.selectpicker.view.titleOption.value = '';

          // Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
          // the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
          // if so, the select will have the data-selected attribute
          var $opt = $(element.options[element.selectedIndex]);
          isSelected = $opt.attr('selected') === undefined && this.$element.data('selected') === undefined;
        }

        if (titleNotAppended || this.selectpicker.view.titleOption.index !== 0) {
          element.insertBefore(this.selectpicker.view.titleOption, element.firstChild);
        }

        // Set selected *after* appending to select,
        // otherwise the option doesn't get selected in IE
        // set using selectedIndex, as setting the selected attr to true here doesn't work in IE11
        if (isSelected) element.selectedIndex = 0;
      }

      return updateIndex;
    },

    createLi: function () {
      var that = this,
          iconBase = this.options.iconBase,
          optionSelector = ':not([hidden]):not([data-hidden="true"])',
          mainElements = [],
          mainData = [],
          widestOptionLength = 0,
          optID = 0,
          startIndex = this.setPlaceholder() ? 1 : 0; // append the titleOption if necessary and skip the first option in the loop

      if (this.options.hideDisabled) optionSelector += ':not(:disabled)';

      if ((that.options.showTick || that.multiple) && !elementTemplates.checkMark.parentNode) {
        elementTemplates.checkMark.className = iconBase + ' ' + that.options.tickIcon + ' check-mark';
        elementTemplates.a.appendChild(elementTemplates.checkMark);
      }

      var selectOptions = this.$element[0].querySelectorAll('select > *' + optionSelector);

      function addDivider (config) {
        var previousData = mainData[mainData.length - 1];

        // ensure optgroup doesn't create back-to-back dividers
        if (
          previousData &&
          previousData.type === 'divider' &&
          (previousData.optID || config.optID)
        ) {
          return;
        }

        config = config || {};
        config.type = 'divider';

        mainElements.push(
          generateOption.li(
            false,
            classNames.DIVIDER,
            (config.optID ? config.optID + 'div' : undefined)
          )
        );

        mainData.push(config);
      }

      function addOption (option, config) {
        config = config || {};

        config.divider = option.getAttribute('data-divider') === 'true';

        if (config.divider) {
          addDivider({
            optID: config.optID
          });
        } else {
          var liIndex = mainData.length,
              cssText = option.style.cssText,
              inlineStyle = cssText ? htmlEscape(cssText) : '',
              optionClass = (option.className || '') + (config.optgroupClass || '');

          if (config.optID) optionClass = 'opt ' + optionClass;

          config.text = option.textContent;

          config.content = option.getAttribute('data-content');
          config.tokens = option.getAttribute('data-tokens');
          config.subtext = option.getAttribute('data-subtext');
          config.icon = option.getAttribute('data-icon');
          config.iconBase = iconBase;

          var textElement = generateOption.text(config);
          var liElement = generateOption.li(
            generateOption.a(
              textElement,
              optionClass,
              inlineStyle
            ),
            '',
            config.optID
          );

          if (liElement.firstChild) {
            liElement.firstChild.id = that.selectId + '-' + liIndex;
          }

          mainElements.push(liElement);

          option.liIndex = liIndex;

          config.display = config.content || config.text;
          config.type = 'option';
          config.index = liIndex;
          config.option = option;
          config.disabled = config.disabled || option.disabled;

          mainData.push(config);

          var combinedLength = 0;

          // count the number of characters in the option - not perfect, but should work in most cases
          if (config.display) combinedLength += config.display.length;
          if (config.subtext) combinedLength += config.subtext.length;
          // if there is an icon, ensure this option's width is checked
          if (config.icon) combinedLength += 1;

          if (combinedLength > widestOptionLength) {
            widestOptionLength = combinedLength;

            // guess which option is the widest
            // use this when calculating menu width
            // not perfect, but it's fast, and the width will be updating accordingly when scrolling
            that.selectpicker.view.widestOption = mainElements[mainElements.length - 1];
          }
        }
      }

      function addOptgroup (index, selectOptions) {
        var optgroup = selectOptions[index],
            previous = selectOptions[index - 1],
            next = selectOptions[index + 1],
            options = optgroup.querySelectorAll('option' + optionSelector);

        if (!options.length) return;

        var config = {
              label: htmlEscape(optgroup.label),
              subtext: optgroup.getAttribute('data-subtext'),
              icon: optgroup.getAttribute('data-icon'),
              iconBase: iconBase
            },
            optgroupClass = ' ' + (optgroup.className || ''),
            headerIndex,
            lastIndex;

        optID++;

        if (previous) {
          addDivider({ optID: optID });
        }

        var labelElement = generateOption.label(config);

        mainElements.push(
          generateOption.li(labelElement, 'dropdown-header' + optgroupClass, optID)
        );

        mainData.push({
          display: config.label,
          subtext: config.subtext,
          type: 'optgroup-label',
          optID: optID
        });

        for (var j = 0, len = options.length; j < len; j++) {
          var option = options[j];

          if (j === 0) {
            headerIndex = mainData.length - 1;
            lastIndex = headerIndex + len;
          }

          addOption(option, {
            headerIndex: headerIndex,
            lastIndex: lastIndex,
            optID: optID,
            optgroupClass: optgroupClass,
            disabled: optgroup.disabled
          });
        }

        if (next) {
          addDivider({ optID: optID });
        }
      }

      for (var len = selectOptions.length; startIndex < len; startIndex++) {
        var item = selectOptions[startIndex];

        if (item.tagName !== 'OPTGROUP') {
          addOption(item, {});
        } else {
          addOptgroup(startIndex, selectOptions);
        }
      }

      this.selectpicker.main.elements = mainElements;
      this.selectpicker.main.data = mainData;

      this.selectpicker.current = this.selectpicker.main;
    },

    findLis: function () {
      return this.$menuInner.find('.inner > li');
    },

    render: function () {
      // ensure titleOption is appended and selected (if necessary) before getting selectedOptions
      this.setPlaceholder();

      var that = this,
          element = this.$element[0],
          selectedOptions = getSelectedOptions(element, this.options.hideDisabled),
          selectedCount = selectedOptions.length,
          button = this.$button[0],
          buttonInner = button.querySelector('.filter-option-inner-inner'),
          multipleSeparator = document.createTextNode(this.options.multipleSeparator),
          titleFragment = elementTemplates.fragment.cloneNode(false),
          showCount,
          countMax,
          hasContent = false;

      button.classList.toggle('bs-placeholder', that.multiple ? !selectedCount : !getSelectValues(element, selectedOptions));

      this.tabIndex();

      if (this.options.selectedTextFormat === 'static') {
        titleFragment = generateOption.text({ text: this.options.title }, true);
      } else {
        showCount = this.multiple && this.options.selectedTextFormat.indexOf('count') !== -1 && selectedCount > 1;

        // determine if the number of selected options will be shown (showCount === true)
        if (showCount) {
          countMax = this.options.selectedTextFormat.split('>');
          showCount = (countMax.length > 1 && selectedCount > countMax[1]) || (countMax.length === 1 && selectedCount >= 2);
        }

        // only loop through all selected options if the count won't be shown
        if (showCount === false) {
          for (var selectedIndex = 0; selectedIndex < selectedCount; selectedIndex++) {
            if (selectedIndex < 50) {
              var option = selectedOptions[selectedIndex],
                  titleOptions = {},
                  thisData = {
                    content: option.getAttribute('data-content'),
                    subtext: option.getAttribute('data-subtext'),
                    icon: option.getAttribute('data-icon')
                  };

              if (this.multiple && selectedIndex > 0) {
                titleFragment.appendChild(multipleSeparator.cloneNode(false));
              }

              if (option.title) {
                titleOptions.text = option.title;
              } else if (thisData.content && that.options.showContent) {
                titleOptions.content = thisData.content.toString();
                hasContent = true;
              } else {
                if (that.options.showIcon) {
                  titleOptions.icon = thisData.icon;
                  titleOptions.iconBase = this.options.iconBase;
                }
                if (that.options.showSubtext && !that.multiple && thisData.subtext) titleOptions.subtext = ' ' + thisData.subtext;
                titleOptions.text = option.textContent.trim();
              }

              titleFragment.appendChild(generateOption.text(titleOptions, true));
            } else {
              break;
            }
          }

          // add ellipsis
          if (selectedCount > 49) {
            titleFragment.appendChild(document.createTextNode('...'));
          }
        } else {
          var optionSelector = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
          if (this.options.hideDisabled) optionSelector += ':not(:disabled)';

          // If this is a multiselect, and selectedTextFormat is count, then show 1 of 2 selected, etc.
          var totalCount = this.$element[0].querySelectorAll('select > option' + optionSelector + ', optgroup' + optionSelector + ' option' + optionSelector).length,
              tr8nText = (typeof this.options.countSelectedText === 'function') ? this.options.countSelectedText(selectedCount, totalCount) : this.options.countSelectedText;

          titleFragment = generateOption.text({
            text: tr8nText.replace('{0}', selectedCount.toString()).replace('{1}', totalCount.toString())
          }, true);
        }
      }

      if (this.options.title == undefined) {
        // use .attr to ensure undefined is returned if title attribute is not set
        this.options.title = this.$element.attr('title');
      }

      // If the select doesn't have a title, then use the default, or if nothing is set at all, use noneSelectedText
      if (!titleFragment.childNodes.length) {
        titleFragment = generateOption.text({
          text: typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText
        }, true);
      }

      // strip all HTML tags and trim the result, then unescape any escaped tags
      button.title = titleFragment.textContent.replace(/<[^>]*>?/g, '').trim();

      if (this.options.sanitize && hasContent) {
        sanitizeHtml([titleFragment], that.options.whiteList, that.options.sanitizeFn);
      }

      buttonInner.innerHTML = '';
      buttonInner.appendChild(titleFragment);

      if (version.major < 4 && this.$newElement[0].classList.contains('bs3-has-addon')) {
        var filterExpand = button.querySelector('.filter-expand'),
            clone = buttonInner.cloneNode(true);

        clone.className = 'filter-expand';

        if (filterExpand) {
          button.replaceChild(clone, filterExpand);
        } else {
          button.appendChild(clone);
        }
      }

      this.$element.trigger('rendered' + EVENT_KEY);
    },

    /**
     * @param [style]
     * @param [status]
     */
    setStyle: function (newStyle, status) {
      var button = this.$button[0],
          newElement = this.$newElement[0],
          style = this.options.style.trim(),
          buttonClass;

      if (this.$element.attr('class')) {
        this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
      }

      if (version.major < 4) {
        newElement.classList.add('bs3');

        if (newElement.parentNode.classList.contains('input-group') &&
            (newElement.previousElementSibling || newElement.nextElementSibling) &&
            (newElement.previousElementSibling || newElement.nextElementSibling).classList.contains('input-group-addon')
        ) {
          newElement.classList.add('bs3-has-addon');
        }
      }

      if (newStyle) {
        buttonClass = newStyle.trim();
      } else {
        buttonClass = style;
      }

      if (status == 'add') {
        if (buttonClass) button.classList.add.apply(button.classList, buttonClass.split(' '));
      } else if (status == 'remove') {
        if (buttonClass) button.classList.remove.apply(button.classList, buttonClass.split(' '));
      } else {
        if (style) button.classList.remove.apply(button.classList, style.split(' '));
        if (buttonClass) button.classList.add.apply(button.classList, buttonClass.split(' '));
      }
    },

    liHeight: function (refresh) {
      if (!refresh && (this.options.size === false || this.sizeInfo)) return;

      if (!this.sizeInfo) this.sizeInfo = {};

      var newElement = document.createElement('div'),
          menu = document.createElement('div'),
          menuInner = document.createElement('div'),
          menuInnerInner = document.createElement('ul'),
          divider = document.createElement('li'),
          dropdownHeader = document.createElement('li'),
          li = document.createElement('li'),
          a = document.createElement('a'),
          text = document.createElement('span'),
          header = this.options.header && this.$menu.find('.' + classNames.POPOVERHEADER).length > 0 ? this.$menu.find('.' + classNames.POPOVERHEADER)[0].cloneNode(true) : null,
          search = this.options.liveSearch ? document.createElement('div') : null,
          actions = this.options.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
          doneButton = this.options.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null,
          firstOption = this.$element.find('option')[0];

      this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth;

      text.className = 'text';
      a.className = 'dropdown-item ' + (firstOption ? firstOption.className : '');
      newElement.className = this.$menu[0].parentNode.className + ' ' + classNames.SHOW;
      newElement.style.width = 0; // ensure button width doesn't affect natural width of menu when calculating
      if (this.options.width === 'auto') menu.style.minWidth = 0;
      menu.className = classNames.MENU + ' ' + classNames.SHOW;
      menuInner.className = 'inner ' + classNames.SHOW;
      menuInnerInner.className = classNames.MENU + ' inner ' + (version.major === '4' ? classNames.SHOW : '');
      divider.className = classNames.DIVIDER;
      dropdownHeader.className = 'dropdown-header';

      text.appendChild(document.createTextNode('\u200b'));
      a.appendChild(text);
      li.appendChild(a);
      dropdownHeader.appendChild(text.cloneNode(true));

      if (this.selectpicker.view.widestOption) {
        menuInnerInner.appendChild(this.selectpicker.view.widestOption.cloneNode(true));
      }

      menuInnerInner.appendChild(li);
      menuInnerInner.appendChild(divider);
      menuInnerInner.appendChild(dropdownHeader);
      if (header) menu.appendChild(header);
      if (search) {
        var input = document.createElement('input');
        search.className = 'bs-searchbox';
        input.className = 'form-control';
        search.appendChild(input);
        menu.appendChild(search);
      }
      if (actions) menu.appendChild(actions);
      menuInner.appendChild(menuInnerInner);
      menu.appendChild(menuInner);
      if (doneButton) menu.appendChild(doneButton);
      newElement.appendChild(menu);

      document.body.appendChild(newElement);

      var liHeight = li.offsetHeight,
          dropdownHeaderHeight = dropdownHeader ? dropdownHeader.offsetHeight : 0,
          headerHeight = header ? header.offsetHeight : 0,
          searchHeight = search ? search.offsetHeight : 0,
          actionsHeight = actions ? actions.offsetHeight : 0,
          doneButtonHeight = doneButton ? doneButton.offsetHeight : 0,
          dividerHeight = $(divider).outerHeight(true),
          // fall back to jQuery if getComputedStyle is not supported
          menuStyle = window.getComputedStyle ? window.getComputedStyle(menu) : false,
          menuWidth = menu.offsetWidth,
          $menu = menuStyle ? null : $(menu),
          menuPadding = {
            vert: toInteger(menuStyle ? menuStyle.paddingTop : $menu.css('paddingTop')) +
                  toInteger(menuStyle ? menuStyle.paddingBottom : $menu.css('paddingBottom')) +
                  toInteger(menuStyle ? menuStyle.borderTopWidth : $menu.css('borderTopWidth')) +
                  toInteger(menuStyle ? menuStyle.borderBottomWidth : $menu.css('borderBottomWidth')),
            horiz: toInteger(menuStyle ? menuStyle.paddingLeft : $menu.css('paddingLeft')) +
                  toInteger(menuStyle ? menuStyle.paddingRight : $menu.css('paddingRight')) +
                  toInteger(menuStyle ? menuStyle.borderLeftWidth : $menu.css('borderLeftWidth')) +
                  toInteger(menuStyle ? menuStyle.borderRightWidth : $menu.css('borderRightWidth'))
          },
          menuExtras = {
            vert: menuPadding.vert +
                  toInteger(menuStyle ? menuStyle.marginTop : $menu.css('marginTop')) +
                  toInteger(menuStyle ? menuStyle.marginBottom : $menu.css('marginBottom')) + 2,
            horiz: menuPadding.horiz +
                  toInteger(menuStyle ? menuStyle.marginLeft : $menu.css('marginLeft')) +
                  toInteger(menuStyle ? menuStyle.marginRight : $menu.css('marginRight')) + 2
          },
          scrollBarWidth;

      menuInner.style.overflowY = 'scroll';

      scrollBarWidth = menu.offsetWidth - menuWidth;

      document.body.removeChild(newElement);

      this.sizeInfo.liHeight = liHeight;
      this.sizeInfo.dropdownHeaderHeight = dropdownHeaderHeight;
      this.sizeInfo.headerHeight = headerHeight;
      this.sizeInfo.searchHeight = searchHeight;
      this.sizeInfo.actionsHeight = actionsHeight;
      this.sizeInfo.doneButtonHeight = doneButtonHeight;
      this.sizeInfo.dividerHeight = dividerHeight;
      this.sizeInfo.menuPadding = menuPadding;
      this.sizeInfo.menuExtras = menuExtras;
      this.sizeInfo.menuWidth = menuWidth;
      this.sizeInfo.menuInnerInnerWidth = menuWidth - menuPadding.horiz;
      this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth;
      this.sizeInfo.scrollBarWidth = scrollBarWidth;
      this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight;

      this.setPositionData();
    },

    getSelectPosition: function () {
      var that = this,
          $window = $(window),
          pos = that.$newElement.offset(),
          $container = $(that.options.container),
          containerPos;

      if (that.options.container && $container.length && !$container.is('body')) {
        containerPos = $container.offset();
        containerPos.top += parseInt($container.css('borderTopWidth'));
        containerPos.left += parseInt($container.css('borderLeftWidth'));
      } else {
        containerPos = { top: 0, left: 0 };
      }

      var winPad = that.options.windowPadding;

      this.sizeInfo.selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
      this.sizeInfo.selectOffsetBot = $window.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - containerPos.top - winPad[2];
      this.sizeInfo.selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
      this.sizeInfo.selectOffsetRight = $window.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - containerPos.left - winPad[1];
      this.sizeInfo.selectOffsetTop -= winPad[0];
      this.sizeInfo.selectOffsetLeft -= winPad[3];
    },

    setMenuSize: function (isAuto) {
      this.getSelectPosition();

      var selectWidth = this.sizeInfo.selectWidth,
          liHeight = this.sizeInfo.liHeight,
          headerHeight = this.sizeInfo.headerHeight,
          searchHeight = this.sizeInfo.searchHeight,
          actionsHeight = this.sizeInfo.actionsHeight,
          doneButtonHeight = this.sizeInfo.doneButtonHeight,
          divHeight = this.sizeInfo.dividerHeight,
          menuPadding = this.sizeInfo.menuPadding,
          menuInnerHeight,
          menuHeight,
          divLength = 0,
          minHeight,
          _minHeight,
          maxHeight,
          menuInnerMinHeight,
          estimate;

      if (this.options.dropupAuto) {
        // Get the estimated height of the menu without scrollbars.
        // This is useful for smaller menus, where there might be plenty of room
        // below the button without setting dropup, but we can't know
        // the exact height of the menu until createView is called later
        estimate = liHeight * this.selectpicker.current.elements.length + menuPadding.vert;
        this.$newElement.toggleClass(classNames.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && estimate + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot);
      }

      if (this.options.size === 'auto') {
        _minHeight = this.selectpicker.current.elements.length > 3 ? this.sizeInfo.liHeight * 3 + this.sizeInfo.menuExtras.vert - 2 : 0;
        menuHeight = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert;
        minHeight = _minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight;
        menuInnerMinHeight = Math.max(_minHeight - menuPadding.vert, 0);

        if (this.$newElement.hasClass(classNames.DROPUP)) {
          menuHeight = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert;
        }

        maxHeight = menuHeight;
        menuInnerHeight = menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert;
      } else if (this.options.size && this.options.size != 'auto' && this.selectpicker.current.elements.length > this.options.size) {
        for (var i = 0; i < this.options.size; i++) {
          if (this.selectpicker.current.data[i].type === 'divider') divLength++;
        }

        menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert;
        menuInnerHeight = menuHeight - menuPadding.vert;
        maxHeight = menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight;
        minHeight = menuInnerMinHeight = '';
      }

      this.$menu.css({
        'max-height': maxHeight + 'px',
        'overflow': 'hidden',
        'min-height': minHeight + 'px'
      });

      this.$menuInner.css({
        'max-height': menuInnerHeight + 'px',
        'overflow-y': 'auto',
        'min-height': menuInnerMinHeight + 'px'
      });

      // ensure menuInnerHeight is always a positive number to prevent issues calculating chunkSize in createView
      this.sizeInfo.menuInnerHeight = Math.max(menuInnerHeight, 1);

      if (this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight) {
        this.sizeInfo.hasScrollBar = true;
        this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth;
      }

      if (this.options.dropdownAlignRight === 'auto') {
        this.$menu.toggleClass(classNames.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < (this.sizeInfo.totalMenuWidth - selectWidth));
      }

      if (this.dropdown && this.dropdown._popper) this.dropdown._popper.update();
    },

    setSize: function (refresh) {
      this.liHeight(refresh);

      if (this.options.header) this.$menu.css('padding-top', 0);
      if (this.options.size === false) return;

      var that = this,
          $window = $(window);

      this.setMenuSize();

      if (this.options.liveSearch) {
        this.$searchbox
          .off('input.setMenuSize propertychange.setMenuSize')
          .on('input.setMenuSize propertychange.setMenuSize', function () {
            return that.setMenuSize();
          });
      }

      if (this.options.size === 'auto') {
        $window
          .off('resize' + EVENT_KEY + '.' + this.selectId + '.setMenuSize' + ' scroll' + EVENT_KEY + '.' + this.selectId + '.setMenuSize')
          .on('resize' + EVENT_KEY + '.' + this.selectId + '.setMenuSize' + ' scroll' + EVENT_KEY + '.' + this.selectId + '.setMenuSize', function () {
            return that.setMenuSize();
          });
      } else if (this.options.size && this.options.size != 'auto' && this.selectpicker.current.elements.length > this.options.size) {
        $window.off('resize' + EVENT_KEY + '.' + this.selectId + '.setMenuSize' + ' scroll' + EVENT_KEY + '.' + this.selectId + '.setMenuSize');
      }

      that.createView(false, true, refresh);
    },

    setWidth: function () {
      var that = this;

      if (this.options.width === 'auto') {
        requestAnimationFrame(function () {
          that.$menu.css('min-width', '0');

          that.$element.on('loaded' + EVENT_KEY, function () {
            that.liHeight();
            that.setMenuSize();

            // Get correct width if element is hidden
            var $selectClone = that.$newElement.clone().appendTo('body'),
                btnWidth = $selectClone.css('width', 'auto').children('button').outerWidth();

            $selectClone.remove();

            // Set width to whatever's larger, button title or longest option
            that.sizeInfo.selectWidth = Math.max(that.sizeInfo.totalMenuWidth, btnWidth);
            that.$newElement.css('width', that.sizeInfo.selectWidth + 'px');
          });
        });
      } else if (this.options.width === 'fit') {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '').addClass('fit-width');
      } else if (this.options.width) {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', this.options.width);
      } else {
        // Remove inline min-width/width so width can be changed
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '');
      }
      // Remove fit-width class if width is changed programmatically
      if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
        this.$newElement[0].classList.remove('fit-width');
      }
    },

    selectPosition: function () {
      this.$bsContainer = $('<div class="bs-container" />');

      var that = this,
          $container = $(this.options.container),
          pos,
          containerPos,
          actualHeight,
          getPlacement = function ($element) {
            var containerPosition = {},
                // fall back to dropdown's default display setting if display is not manually set
                display = that.options.display || (
                  // Bootstrap 3 doesn't have $.fn.dropdown.Constructor.Default
                  $.fn.dropdown.Constructor.Default ? $.fn.dropdown.Constructor.Default.display
                  : false
                );

            that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass(classNames.DROPUP, $element.hasClass(classNames.DROPUP));
            pos = $element.offset();

            if (!$container.is('body')) {
              containerPos = $container.offset();
              containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
              containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
            } else {
              containerPos = { top: 0, left: 0 };
            }

            actualHeight = $element.hasClass(classNames.DROPUP) ? 0 : $element[0].offsetHeight;

            // Bootstrap 4+ uses Popper for menu positioning
            if (version.major < 4 || display === 'static') {
              containerPosition.top = pos.top - containerPos.top + actualHeight;
              containerPosition.left = pos.left - containerPos.left;
            }

            containerPosition.width = $element[0].offsetWidth;

            that.$bsContainer.css(containerPosition);
          };

      this.$button.on('click.bs.dropdown.data-api', function () {
        if (that.isDisabled()) {
          return;
        }

        getPlacement(that.$newElement);

        that.$bsContainer
          .appendTo(that.options.container)
          .toggleClass(classNames.SHOW, !that.$button.hasClass(classNames.SHOW))
          .append(that.$menu);
      });

      $(window)
        .off('resize' + EVENT_KEY + '.' + this.selectId + ' scroll' + EVENT_KEY + '.' + this.selectId)
        .on('resize' + EVENT_KEY + '.' + this.selectId + ' scroll' + EVENT_KEY + '.' + this.selectId, function () {
          var isActive = that.$newElement.hasClass(classNames.SHOW);

          if (isActive) getPlacement(that.$newElement);
        });

      this.$element.on('hide' + EVENT_KEY, function () {
        that.$menu.data('height', that.$menu.height());
        that.$bsContainer.detach();
      });
    },

    setOptionStatus: function (selectedOnly) {
      var that = this;

      that.noScroll = false;

      if (that.selectpicker.view.visibleElements && that.selectpicker.view.visibleElements.length) {
        for (var i = 0; i < that.selectpicker.view.visibleElements.length; i++) {
          var liData = that.selectpicker.current.data[i + that.selectpicker.view.position0],
              option = liData.option;

          if (option) {
            if (selectedOnly !== true) {
              that.setDisabled(
                liData.index,
                liData.disabled
              );
            }

            that.setSelected(
              liData.index,
              option.selected
            );
          }
        }
      }
    },

    /**
     * @param {number} index - the index of the option that is being changed
     * @param {boolean} selected - true if the option is being selected, false if being deselected
     */
    setSelected: function (index, selected) {
      var li = this.selectpicker.main.elements[index],
          liData = this.selectpicker.main.data[index],
          activeIndexIsSet = this.activeIndex !== undefined,
          thisIsActive = this.activeIndex === index,
          prevActive,
          a,
          // if current option is already active
          // OR
          // if the current option is being selected, it's NOT multiple, and
          // activeIndex is undefined:
          //  - when the menu is first being opened, OR
          //  - after a search has been performed, OR
          //  - when retainActive is false when selecting a new option (i.e. index of the newly selected option is not the same as the current activeIndex)
          keepActive = thisIsActive || (selected && !this.multiple && !activeIndexIsSet);

      liData.selected = selected;

      a = li.firstChild;

      if (selected) {
        this.selectedIndex = index;
      }

      li.classList.toggle('selected', selected);

      if (keepActive) {
        this.focusItem(li, liData);
        this.selectpicker.view.currentActive = li;
        this.activeIndex = index;
      } else {
        this.defocusItem(li);
      }

      if (a) {
        a.classList.toggle('selected', selected);

        if (selected) {
          a.setAttribute('aria-selected', true);
        } else {
          if (this.multiple) {
            a.setAttribute('aria-selected', false);
          } else {
            a.removeAttribute('aria-selected');
          }
        }
      }

      if (!keepActive && !activeIndexIsSet && selected && this.prevActiveIndex !== undefined) {
        prevActive = this.selectpicker.main.elements[this.prevActiveIndex];

        this.defocusItem(prevActive);
      }
    },

    /**
     * @param {number} index - the index of the option that is being disabled
     * @param {boolean} disabled - true if the option is being disabled, false if being enabled
     */
    setDisabled: function (index, disabled) {
      var li = this.selectpicker.main.elements[index],
          a;

      this.selectpicker.main.data[index].disabled = disabled;

      a = li.firstChild;

      li.classList.toggle(classNames.DISABLED, disabled);

      if (a) {
        if (version.major === '4') a.classList.toggle(classNames.DISABLED, disabled);

        if (disabled) {
          a.setAttribute('aria-disabled', disabled);
          a.setAttribute('tabindex', -1);
        } else {
          a.removeAttribute('aria-disabled');
          a.setAttribute('tabindex', 0);
        }
      }
    },

    isDisabled: function () {
      return this.$element[0].disabled;
    },

    checkDisabled: function () {
      if (this.isDisabled()) {
        this.$newElement[0].classList.add(classNames.DISABLED);
        this.$button.addClass(classNames.DISABLED).attr('tabindex', -1).attr('aria-disabled', true);
      } else {
        if (this.$button[0].classList.contains(classNames.DISABLED)) {
          this.$newElement[0].classList.remove(classNames.DISABLED);
          this.$button.removeClass(classNames.DISABLED).attr('aria-disabled', false);
        }

        if (this.$button.attr('tabindex') == -1 && !this.$element.data('tabindex')) {
          this.$button.removeAttr('tabindex');
        }
      }
    },

    tabIndex: function () {
      if (this.$element.data('tabindex') !== this.$element.attr('tabindex') &&
        (this.$element.attr('tabindex') !== -98 && this.$element.attr('tabindex') !== '-98')) {
        this.$element.data('tabindex', this.$element.attr('tabindex'));
        this.$button.attr('tabindex', this.$element.data('tabindex'));
      }

      this.$element.attr('tabindex', -98);
    },

    clickListener: function () {
      var that = this,
          $document = $(document);

      $document.data('spaceSelect', false);

      this.$button.on('keyup', function (e) {
        if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
          e.preventDefault();
          $document.data('spaceSelect', false);
        }
      });

      this.$newElement.on('show.bs.dropdown', function () {
        if (version.major > 3 && !that.dropdown) {
          that.dropdown = that.$button.data('bs.dropdown');
          that.dropdown._menu = that.$menu[0];
        }
      });

      this.$button.on('click.bs.dropdown.data-api', function () {
        if (!that.$newElement.hasClass(classNames.SHOW)) {
          that.setSize();
        }
      });

      function setFocus () {
        if (that.options.liveSearch) {
          that.$searchbox.trigger('focus');
        } else {
          that.$menuInner.trigger('focus');
        }
      }

      function checkPopperExists () {
        if (that.dropdown && that.dropdown._popper && that.dropdown._popper.state.isCreated) {
          setFocus();
        } else {
          requestAnimationFrame(checkPopperExists);
        }
      }

      this.$element.on('shown' + EVENT_KEY, function () {
        if (that.$menuInner[0].scrollTop !== that.selectpicker.view.scrollTop) {
          that.$menuInner[0].scrollTop = that.selectpicker.view.scrollTop;
        }

        if (version.major > 3) {
          requestAnimationFrame(checkPopperExists);
        } else {
          setFocus();
        }
      });

      // ensure posinset and setsize are correct before selecting an option via a click
      this.$menuInner.on('mouseenter', 'li a', function (e) {
        var hoverLi = this.parentElement,
            position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0,
            index = Array.prototype.indexOf.call(hoverLi.parentElement.children, hoverLi),
            hoverData = that.selectpicker.current.data[index + position0];

        that.focusItem(hoverLi, hoverData, true);
      });

      this.$menuInner.on('click', 'li a', function (e, retainActive) {
        var $this = $(this),
            element = that.$element[0],
            position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0,
            clickedData = that.selectpicker.current.data[$this.parent().index() + position0],
            clickedIndex = clickedData.index,
            prevValue = getSelectValues(element),
            prevIndex = element.selectedIndex,
            prevOption = element.options[prevIndex],
            triggerChange = true;

        // Don't close on multi choice menu
        if (that.multiple && that.options.maxOptions !== 1) {
          e.stopPropagation();
        }

        e.preventDefault();

        // Don't run if the select is disabled
        if (!that.isDisabled() && !$this.parent().hasClass(classNames.DISABLED)) {
          var option = clickedData.option,
              $option = $(option),
              state = option.selected,
              $optgroup = $option.parent('optgroup'),
              $optgroupOptions = $optgroup.find('option'),
              maxOptions = that.options.maxOptions,
              maxOptionsGrp = $optgroup.data('maxOptions') || false;

          if (clickedIndex === that.activeIndex) retainActive = true;

          if (!retainActive) {
            that.prevActiveIndex = that.activeIndex;
            that.activeIndex = undefined;
          }

          if (!that.multiple) { // Deselect all others if not multi select box
            if (prevOption) prevOption.selected = false;
            option.selected = true;
            that.setSelected(clickedIndex, true);
          } else { // Toggle the one we have chosen if we are multi select.
            option.selected = !state;

            that.setSelected(clickedIndex, !state);
            $this.trigger('blur');

            if (maxOptions !== false || maxOptionsGrp !== false) {
              var maxReached = maxOptions < getSelectedOptions(element).length,
                  maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;

              if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
                if (maxOptions && maxOptions == 1) {
                  element.selectedIndex = -1;
                  option.selected = true;
                  that.setOptionStatus(true);
                } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                  for (var i = 0; i < $optgroupOptions.length; i++) {
                    var _option = $optgroupOptions[i];
                    _option.selected = false;
                    that.setSelected(_option.liIndex, false);
                  }

                  option.selected = true;
                  that.setSelected(clickedIndex, true);
                } else {
                  var maxOptionsText = typeof that.options.maxOptionsText === 'string' ? [that.options.maxOptionsText, that.options.maxOptionsText] : that.options.maxOptionsText,
                      maxOptionsArr = typeof maxOptionsText === 'function' ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText,
                      maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                      maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                      $notify = $('<div class="notify"></div>');
                  // If {var} is set in array, replace it
                  /** @deprecated */
                  if (maxOptionsArr[2]) {
                    maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                    maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                  }

                  option.selected = false;

                  that.$menu.append($notify);

                  if (maxOptions && maxReached) {
                    $notify.append($('<div>' + maxTxt + '</div>'));
                    triggerChange = false;
                    that.$element.trigger('maxReached' + EVENT_KEY);
                  }

                  if (maxOptionsGrp && maxReachedGrp) {
                    $notify.append($('<div>' + maxTxtGrp + '</div>'));
                    triggerChange = false;
                    that.$element.trigger('maxReachedGrp' + EVENT_KEY);
                  }

                  setTimeout(function () {
                    that.setSelected(clickedIndex, false);
                  }, 10);

                  $notify[0].classList.add('fadeOut');

                  setTimeout(function () {
                    $notify.remove();
                  }, 1050);
                }
              }
            }
          }

          if (!that.multiple || (that.multiple && that.options.maxOptions === 1)) {
            that.$button.trigger('focus');
          } else if (that.options.liveSearch) {
            that.$searchbox.trigger('focus');
          }

          // Trigger select 'change'
          if (triggerChange) {
            if (that.multiple || prevIndex !== element.selectedIndex) {
              // $option.prop('selected') is current option state (selected/unselected). prevValue is the value of the select prior to being changed.
              changedArguments = [option.index, $option.prop('selected'), prevValue];
              that.$element
                .triggerNative('change');
            }
          }
        }
      });

      this.$menu.on('click', 'li.' + classNames.DISABLED + ' a, .' + classNames.POPOVERHEADER + ', .' + classNames.POPOVERHEADER + ' :not(.close)', function (e) {
        if (e.currentTarget == this) {
          e.preventDefault();
          e.stopPropagation();
          if (that.options.liveSearch && !$(e.target).hasClass('close')) {
            that.$searchbox.trigger('focus');
          } else {
            that.$button.trigger('focus');
          }
        }
      });

      this.$menuInner.on('click', '.divider, .dropdown-header', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (that.options.liveSearch) {
          that.$searchbox.trigger('focus');
        } else {
          that.$button.trigger('focus');
        }
      });

      this.$menu.on('click', '.' + classNames.POPOVERHEADER + ' .close', function () {
        that.$button.trigger('click');
      });

      this.$searchbox.on('click', function (e) {
        e.stopPropagation();
      });

      this.$menu.on('click', '.actions-btn', function (e) {
        if (that.options.liveSearch) {
          that.$searchbox.trigger('focus');
        } else {
          that.$button.trigger('focus');
        }

        e.preventDefault();
        e.stopPropagation();

        if ($(this).hasClass('bs-select-all')) {
          that.selectAll();
        } else {
          that.deselectAll();
        }
      });

      this.$element
        .on('change' + EVENT_KEY, function () {
          that.render();
          that.$element.trigger('changed' + EVENT_KEY, changedArguments);
          changedArguments = null;
        })
        .on('focus' + EVENT_KEY, function () {
          if (!that.options.mobile) that.$button.trigger('focus');
        });
    },

    liveSearchListener: function () {
      var that = this,
          noResults = document.createElement('li');

      this.$button.on('click.bs.dropdown.data-api', function () {
        if (!!that.$searchbox.val()) {
          that.$searchbox.val('');
        }
      });

      this.$searchbox.on('click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api', function (e) {
        e.stopPropagation();
      });

      this.$searchbox.on('input propertychange', function () {
        var searchValue = that.$searchbox.val();

        that.selectpicker.search.elements = [];
        that.selectpicker.search.data = [];

        if (searchValue) {
          var i,
              searchMatch = [],
              q = searchValue.toUpperCase(),
              cache = {},
              cacheArr = [],
              searchStyle = that._searchStyle(),
              normalizeSearch = that.options.liveSearchNormalize;

          if (normalizeSearch) q = normalizeToBase(q);

          that._$lisSelected = that.$menuInner.find('.selected');

          for (var i = 0; i < that.selectpicker.main.data.length; i++) {
            var li = that.selectpicker.main.data[i];

            if (!cache[i]) {
              cache[i] = stringSearch(li, q, searchStyle, normalizeSearch);
            }

            if (cache[i] && li.headerIndex !== undefined && cacheArr.indexOf(li.headerIndex) === -1) {
              if (li.headerIndex > 0) {
                cache[li.headerIndex - 1] = true;
                cacheArr.push(li.headerIndex - 1);
              }

              cache[li.headerIndex] = true;
              cacheArr.push(li.headerIndex);

              cache[li.lastIndex + 1] = true;
            }

            if (cache[i] && li.type !== 'optgroup-label') cacheArr.push(i);
          }

          for (var i = 0, cacheLen = cacheArr.length; i < cacheLen; i++) {
            var index = cacheArr[i],
                prevIndex = cacheArr[i - 1],
                li = that.selectpicker.main.data[index],
                liPrev = that.selectpicker.main.data[prevIndex];

            if (li.type !== 'divider' || (li.type === 'divider' && liPrev && liPrev.type !== 'divider' && cacheLen - 1 !== i)) {
              that.selectpicker.search.data.push(li);
              searchMatch.push(that.selectpicker.main.elements[index]);
            }
          }

          that.activeIndex = undefined;
          that.noScroll = true;
          that.$menuInner.scrollTop(0);
          that.selectpicker.search.elements = searchMatch;
          that.createView(true);

          if (!searchMatch.length) {
            noResults.className = 'no-results';
            noResults.innerHTML = that.options.noneResultsText.replace('{0}', '"' + htmlEscape(searchValue) + '"');
            that.$menuInner[0].firstChild.appendChild(noResults);
          }
        } else {
          that.$menuInner.scrollTop(0);
          that.createView(false);
        }
      });
    },

    _searchStyle: function () {
      return this.options.liveSearchStyle || 'contains';
    },

    val: function (value) {
      var element = this.$element[0];

      if (typeof value !== 'undefined') {
        var prevValue = getSelectValues(element);

        changedArguments = [null, null, prevValue];

        this.$element
          .val(value)
          .trigger('changed' + EVENT_KEY, changedArguments);

        if (this.$newElement.hasClass(classNames.SHOW)) {
          if (this.multiple) {
            this.setOptionStatus(true);
          } else {
            var liSelectedIndex = (element.options[element.selectedIndex] || {}).liIndex;

            if (typeof liSelectedIndex === 'number') {
              this.setSelected(this.selectedIndex, false);
              this.setSelected(liSelectedIndex, true);
            }
          }
        }

        this.render();

        changedArguments = null;

        return this.$element;
      } else {
        return this.$element.val();
      }
    },

    changeAll: function (status) {
      if (!this.multiple) return;
      if (typeof status === 'undefined') status = true;

      var element = this.$element[0],
          previousSelected = 0,
          currentSelected = 0,
          prevValue = getSelectValues(element);

      element.classList.add('bs-select-hidden');

      for (var i = 0, len = this.selectpicker.current.elements.length; i < len; i++) {
        var liData = this.selectpicker.current.data[i],
            option = liData.option;

        if (option && !liData.disabled && liData.type !== 'divider') {
          if (liData.selected) previousSelected++;
          option.selected = status;
          if (status) currentSelected++;
        }
      }

      element.classList.remove('bs-select-hidden');

      if (previousSelected === currentSelected) return;

      this.setOptionStatus();

      changedArguments = [null, null, prevValue];

      this.$element
        .triggerNative('change');
    },

    selectAll: function () {
      return this.changeAll(true);
    },

    deselectAll: function () {
      return this.changeAll(false);
    },

    toggle: function (e) {
      e = e || window.event;

      if (e) e.stopPropagation();

      this.$button.trigger('click.bs.dropdown.data-api');
    },

    keydown: function (e) {
      var $this = $(this),
          isToggle = $this.hasClass('dropdown-toggle'),
          $parent = isToggle ? $this.closest('.dropdown') : $this.closest(Selector.MENU),
          that = $parent.data('this'),
          $items = that.findLis(),
          index,
          isActive,
          liActive,
          activeLi,
          offset,
          updateScroll = false,
          downOnTab = e.which === keyCodes.TAB && !isToggle && !that.options.selectOnTab,
          isArrowKey = REGEXP_ARROW.test(e.which) || downOnTab,
          scrollTop = that.$menuInner[0].scrollTop,
          isVirtual = that.isVirtual(),
          position0 = isVirtual === true ? that.selectpicker.view.position0 : 0;

      // do nothing if a function key is pressed
      if (e.which >= 112 && e.which <= 123) return;

      isActive = that.$newElement.hasClass(classNames.SHOW);

      if (
        !isActive &&
        (
          isArrowKey ||
          (e.which >= 48 && e.which <= 57) ||
          (e.which >= 96 && e.which <= 105) ||
          (e.which >= 65 && e.which <= 90)
        )
      ) {
        that.$button.trigger('click.bs.dropdown.data-api');

        if (that.options.liveSearch) {
          that.$searchbox.trigger('focus');
          return;
        }
      }

      if (e.which === keyCodes.ESCAPE && isActive) {
        e.preventDefault();
        that.$button.trigger('click.bs.dropdown.data-api').trigger('focus');
      }

      if (isArrowKey) { // if up or down
        if (!$items.length) return;

        liActive = that.selectpicker.main.elements[that.activeIndex];
        index = liActive ? Array.prototype.indexOf.call(liActive.parentElement.children, liActive) : -1;

        if (index !== -1) {
          that.defocusItem(liActive);
        }

        if (e.which === keyCodes.ARROW_UP) { // up
          if (index !== -1) index--;
          if (index + position0 < 0) index += $items.length;

          if (!that.selectpicker.view.canHighlight[index + position0]) {
            index = that.selectpicker.view.canHighlight.slice(0, index + position0).lastIndexOf(true) - position0;
            if (index === -1) index = $items.length - 1;
          }
        } else if (e.which === keyCodes.ARROW_DOWN || downOnTab) { // down
          index++;
          if (index + position0 >= that.selectpicker.view.canHighlight.length) index = 0;

          if (!that.selectpicker.view.canHighlight[index + position0]) {
            index = index + 1 + that.selectpicker.view.canHighlight.slice(index + position0 + 1).indexOf(true);
          }
        }

        e.preventDefault();

        var liActiveIndex = position0 + index;

        if (e.which === keyCodes.ARROW_UP) { // up
          // scroll to bottom and highlight last option
          if (position0 === 0 && index === $items.length - 1) {
            that.$menuInner[0].scrollTop = that.$menuInner[0].scrollHeight;

            liActiveIndex = that.selectpicker.current.elements.length - 1;
          } else {
            activeLi = that.selectpicker.current.data[liActiveIndex];
            offset = activeLi.position - activeLi.height;

            updateScroll = offset < scrollTop;
          }
        } else if (e.which === keyCodes.ARROW_DOWN || downOnTab) { // down
          // scroll to top and highlight first option
          if (index === 0) {
            that.$menuInner[0].scrollTop = 0;

            liActiveIndex = 0;
          } else {
            activeLi = that.selectpicker.current.data[liActiveIndex];
            offset = activeLi.position - that.sizeInfo.menuInnerHeight;

            updateScroll = offset > scrollTop;
          }
        }

        liActive = that.selectpicker.current.elements[liActiveIndex];

        that.activeIndex = that.selectpicker.current.data[liActiveIndex].index;

        that.focusItem(liActive);

        that.selectpicker.view.currentActive = liActive;

        if (updateScroll) that.$menuInner[0].scrollTop = offset;

        if (that.options.liveSearch) {
          that.$searchbox.trigger('focus');
        } else {
          $this.trigger('focus');
        }
      } else if (
        (!$this.is('input') && !REGEXP_TAB_OR_ESCAPE.test(e.which)) ||
        (e.which === keyCodes.SPACE && that.selectpicker.keydown.keyHistory)
      ) {
        var searchMatch,
            matches = [],
            keyHistory;

        e.preventDefault();

        that.selectpicker.keydown.keyHistory += keyCodeMap[e.which];

        if (that.selectpicker.keydown.resetKeyHistory.cancel) clearTimeout(that.selectpicker.keydown.resetKeyHistory.cancel);
        that.selectpicker.keydown.resetKeyHistory.cancel = that.selectpicker.keydown.resetKeyHistory.start();

        keyHistory = that.selectpicker.keydown.keyHistory;

        // if all letters are the same, set keyHistory to just the first character when searching
        if (/^(.)\1+$/.test(keyHistory)) {
          keyHistory = keyHistory.charAt(0);
        }

        // find matches
        for (var i = 0; i < that.selectpicker.current.data.length; i++) {
          var li = that.selectpicker.current.data[i],
              hasMatch;

          hasMatch = stringSearch(li, keyHistory, 'startsWith', true);

          if (hasMatch && that.selectpicker.view.canHighlight[i]) {
            matches.push(li.index);
          }
        }

        if (matches.length) {
          var matchIndex = 0;

          $items.removeClass('active').find('a').removeClass('active');

          // either only one key has been pressed or they are all the same key
          if (keyHistory.length === 1) {
            matchIndex = matches.indexOf(that.activeIndex);

            if (matchIndex === -1 || matchIndex === matches.length - 1) {
              matchIndex = 0;
            } else {
              matchIndex++;
            }
          }

          searchMatch = matches[matchIndex];

          activeLi = that.selectpicker.main.data[searchMatch];

          if (scrollTop - activeLi.position > 0) {
            offset = activeLi.position - activeLi.height;
            updateScroll = true;
          } else {
            offset = activeLi.position - that.sizeInfo.menuInnerHeight;
            // if the option is already visible at the current scroll position, just keep it the same
            updateScroll = activeLi.position > scrollTop + that.sizeInfo.menuInnerHeight;
          }

          liActive = that.selectpicker.main.elements[searchMatch];

          that.activeIndex = matches[matchIndex];

          that.focusItem(liActive);

          if (liActive) liActive.firstChild.focus();

          if (updateScroll) that.$menuInner[0].scrollTop = offset;

          $this.trigger('focus');
        }
      }

      // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
      if (
        isActive &&
        (
          (e.which === keyCodes.SPACE && !that.selectpicker.keydown.keyHistory) ||
          e.which === keyCodes.ENTER ||
          (e.which === keyCodes.TAB && that.options.selectOnTab)
        )
      ) {
        if (e.which !== keyCodes.SPACE) e.preventDefault();

        if (!that.options.liveSearch || e.which !== keyCodes.SPACE) {
          that.$menuInner.find('.active a').trigger('click', true); // retain active class
          $this.trigger('focus');

          if (!that.options.liveSearch) {
            // Prevent screen from scrolling if the user hits the spacebar
            e.preventDefault();
            // Fixes spacebar selection of dropdown items in FF & IE
            $(document).data('spaceSelect', true);
          }
        }
      }
    },

    mobile: function () {
      this.$element[0].classList.add('mobile-device');
    },

    refresh: function () {
      // update options if data attributes have been changed
      var config = $.extend({}, this.options, this.$element.data());
      this.options = config;

      this.checkDisabled();
      this.setStyle();
      this.render();
      this.createLi();
      this.setWidth();

      this.setSize(true);

      this.$element.trigger('refreshed' + EVENT_KEY);
    },

    hide: function () {
      this.$newElement.hide();
    },

    show: function () {
      this.$newElement.show();
    },

    remove: function () {
      this.$newElement.remove();
      this.$element.remove();
    },

    destroy: function () {
      this.$newElement.before(this.$element).remove();

      if (this.$bsContainer) {
        this.$bsContainer.remove();
      } else {
        this.$menu.remove();
      }

      this.$element
        .off(EVENT_KEY)
        .removeData('selectpicker')
        .removeClass('bs-select-hidden selectpicker');

      $(window).off(EVENT_KEY + '.' + this.selectId);
    }
  };

  // SELECTPICKER PLUGIN DEFINITION
  // ==============================
  function Plugin (option) {
    // get the args of the outer function..
    var args = arguments;
    // The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
    // to get lost/corrupted in android 2.3 and IE9 #715 #775
    var _option = option;

    [].shift.apply(args);

    // if the version was not set successfully
    if (!version.success) {
      // try to retreive it again
      try {
        version.full = ($.fn.dropdown.Constructor.VERSION || '').split(' ')[0].split('.');
      } catch (err) {
        // fall back to use BootstrapVersion if set
        if (Selectpicker.BootstrapVersion) {
          version.full = Selectpicker.BootstrapVersion.split(' ')[0].split('.');
        } else {
          version.full = [version.major, '0', '0'];

          console.warn(
            'There was an issue retrieving Bootstrap\'s version. ' +
            'Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. ' +
            'If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.',
            err
          );
        }
      }

      version.major = version.full[0];
      version.success = true;
    }

    if (version.major === '4') {
      // some defaults need to be changed if using Bootstrap 4
      // check to see if they have already been manually changed before forcing them to update
      var toUpdate = [];

      if (Selectpicker.DEFAULTS.style === classNames.BUTTONCLASS) toUpdate.push({ name: 'style', className: 'BUTTONCLASS' });
      if (Selectpicker.DEFAULTS.iconBase === classNames.ICONBASE) toUpdate.push({ name: 'iconBase', className: 'ICONBASE' });
      if (Selectpicker.DEFAULTS.tickIcon === classNames.TICKICON) toUpdate.push({ name: 'tickIcon', className: 'TICKICON' });

      classNames.DIVIDER = 'dropdown-divider';
      classNames.SHOW = 'show';
      classNames.BUTTONCLASS = 'btn-light';
      classNames.POPOVERHEADER = 'popover-header';
      classNames.ICONBASE = '';
      classNames.TICKICON = 'bs-ok-default';

      for (var i = 0; i < toUpdate.length; i++) {
        var option = toUpdate[i];
        Selectpicker.DEFAULTS[option.name] = classNames[option.className];
      }
    }

    var value;
    var chain = this.each(function () {
      var $this = $(this);
      if ($this.is('select')) {
        var data = $this.data('selectpicker'),
            options = typeof _option == 'object' && _option;

        if (!data) {
          var dataAttributes = $this.data();

          for (var dataAttr in dataAttributes) {
            if (dataAttributes.hasOwnProperty(dataAttr) && $.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
              delete dataAttributes[dataAttr];
            }
          }

          var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, dataAttributes, options);
          config.template = $.extend({}, Selectpicker.DEFAULTS.template, ($.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}), dataAttributes.template, options.template);
          $this.data('selectpicker', (data = new Selectpicker(this, config)));
        } else if (options) {
          for (var i in options) {
            if (options.hasOwnProperty(i)) {
              data.options[i] = options[i];
            }
          }
        }

        if (typeof _option == 'string') {
          if (data[_option] instanceof Function) {
            value = data[_option].apply(data, args);
          } else {
            value = data.options[_option];
          }
        }
      }
    });

    if (typeof value !== 'undefined') {
      // noinspection JSUnusedAssignment
      return value;
    } else {
      return chain;
    }
  }

  var old = $.fn.selectpicker;
  $.fn.selectpicker = Plugin;
  $.fn.selectpicker.Constructor = Selectpicker;

  // SELECTPICKER NO CONFLICT
  // ========================
  $.fn.selectpicker.noConflict = function () {
    $.fn.selectpicker = old;
    return this;
  };

  $(document)
    .off('keydown.bs.dropdown.data-api', '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select .dropdown-menu')
    .on('keydown' + EVENT_KEY, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', Selectpicker.prototype.keydown)
    .on('focusin.modal', '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (e) {
      e.stopPropagation();
    });

  // SELECTPICKER DATA-API
  // =====================
  $(window).on('load' + EVENT_KEY + '.data-api', function () {
    $('.selectpicker').each(function () {
      var $selectpicker = $(this);
      Plugin.call($selectpicker, $selectpicker.data());
    })
  });
})(jQuery);


}));
//# sourceMappingURL=bootstrap-select.js.map

/***/ }),

/***/ "./node_modules/bootstrap-select/dist/js/i18n/defaults-fr_FR.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-select/dist/js/i18n/defaults-fr_FR.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Bootstrap-select v1.13.12 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2019 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return (factory(a0));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (jQuery) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Aucune sélection',
    noneResultsText: 'Aucun résultat pour {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected > 1) ? '{0} éléments sélectionnés' : '{0} élément sélectionné';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll > 1) ? 'Limite atteinte ({n} éléments max)' : 'Limite atteinte ({n} élément max)',
        (numGroup > 1) ? 'Limite du groupe atteinte ({n} éléments max)' : 'Limite du groupe atteinte ({n} élément max)'
      ];
    },
    multipleSeparator: ', ',
    selectAllText: 'Tout sélectionner',
    deselectAllText: 'Tout désélectionner'
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-fr_FR.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNlbGVjdC9kaXN0L2pzL2Jvb3RzdHJhcC1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zZWxlY3QvZGlzdC9qcy9pMThuL2RlZmF1bHRzLWZyX0ZSLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxJQUEwQztBQUNoRDtBQUNBLElBQUksaUNBQU8sQ0FBQyx5RUFBUSxDQUFDLG1DQUFFO0FBQ3ZCO0FBQ0EsS0FBSztBQUFBLG9HQUFDO0FBQ04sR0FBRyxNQUFNLEVBT047QUFDSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUlBQXVJOztBQUV2STtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdEQUFnRCxTQUFTO0FBQ3pEOztBQUVBLDZDQUE2QyxVQUFVO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0RBQW9ELFVBQVU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxhQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyx5QkFBeUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxFQUFFO0FBQzVDO0FBQ0Esb0NBQW9DLEVBQUUsb0JBQW9CLEVBQUU7QUFDNUQsS0FBSztBQUNMO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRSwrQkFBK0IsRUFBRTtBQUM1RSxpREFBaUQsRUFBRSxxQ0FBcUMsRUFBRTtBQUMxRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkVBQTJFOztBQUUzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEZBQTRGO0FBQzVGLHVEQUF1RDs7QUFFdkQsdUJBQXVCLGdCQUFnQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBaUUsd0JBQXdCO0FBQ3pGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEseUVBQXlFOztBQUV6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCw2Q0FBNkMsU0FBUztBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQztBQUNBOztBQUVBLDBDQUEwQyxrQkFBa0I7QUFDNUQ7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2QywyQkFBMkI7QUFDeEUsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQywrQkFBK0I7QUFDcEU7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLEVBQUUsdUNBQXVDLEVBQUU7QUFDaEYsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QixtREFBbUQ7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQ0FBaUMsNkJBQTZCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLDBEQUEwRCxFQUFFO0FBQzVELDZEQUE2RCxFQUFFO0FBQy9EO0FBQ0EseUJBQXlCLElBQUk7QUFDN0I7QUFDQTtBQUNBLDhDQUE4QyxJQUFJO0FBQ2xELG9EQUFvRCxJQUFJO0FBQ3hEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHlCQUF5Qix3Q0FBd0M7QUFDakU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsRUFBRTtBQUMzRTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLCtFQUErRTs7QUFFL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzRUFBc0UsU0FBUztBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHlEQUF5RDtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyx5REFBeUQ7QUFDbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQ0FBMkM7QUFDbEU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRkFBaUYsMENBQTBDO0FBQzNILGlGQUFpRiwwQ0FBMEM7QUFDM0gsaUZBQWlGLDBDQUEwQzs7QUFFM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MseURBQXlEO0FBQzNGLHVDQUF1Qyx3R0FBd0c7QUFDL0k7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7O0FBR0QsQ0FBQztBQUNELDRDOzs7Ozs7Ozs7OztBQ3ZrR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLElBQTBDO0FBQ2hEO0FBQ0EsSUFBSSxpQ0FBTyxDQUFDLHlFQUFRLENBQUMsbUNBQUU7QUFDdkI7QUFDQSxLQUFLO0FBQUEsb0dBQUM7QUFDTixHQUFHLE1BQU0sRUFPTjtBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEVBQUU7QUFDN0M7QUFDQSxtQ0FBbUMsRUFBRSw0QkFBNEIsRUFBRTtBQUNuRSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBDQUEwQyxFQUFFLHFDQUFxQyxFQUFFO0FBQ25GLHNEQUFzRCxFQUFFLCtDQUErQyxFQUFFO0FBQ3pHO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QsQ0FBQztBQUNELDBDIiwiZmlsZSI6InZlbmRvcnN+c2VyaWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogQm9vdHN0cmFwLXNlbGVjdCB2MS4xMy4xMiAoaHR0cHM6Ly9kZXZlbG9wZXIuc25hcGFwcG9pbnRtZW50cy5jb20vYm9vdHN0cmFwLXNlbGVjdClcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTItMjAxOSBTbmFwQXBwb2ludG1lbnRzLCBMTENcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vc25hcGFwcG9pbnRtZW50cy9ib290c3RyYXAtc2VsZWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgaWYgKHJvb3QgPT09IHVuZGVmaW5lZCAmJiB3aW5kb3cgIT09IHVuZGVmaW5lZCkgcm9vdCA9IHdpbmRvdztcclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxyXG4gICAgZGVmaW5lKFtcImpxdWVyeVwiXSwgZnVuY3Rpb24gKGEwKSB7XHJcbiAgICAgIHJldHVybiAoZmFjdG9yeShhMCkpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XHJcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcclxuICAgIC8vIGxpa2UgTm9kZS5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcclxuICB9XHJcbn0odGhpcywgZnVuY3Rpb24gKGpRdWVyeSkge1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gWydzYW5pdGl6ZScsICd3aGl0ZUxpc3QnLCAnc2FuaXRpemVGbiddO1xyXG5cclxuICB2YXIgdXJpQXR0cnMgPSBbXHJcbiAgICAnYmFja2dyb3VuZCcsXHJcbiAgICAnY2l0ZScsXHJcbiAgICAnaHJlZicsXHJcbiAgICAnaXRlbXR5cGUnLFxyXG4gICAgJ2xvbmdkZXNjJyxcclxuICAgICdwb3N0ZXInLFxyXG4gICAgJ3NyYycsXHJcbiAgICAneGxpbms6aHJlZidcclxuICBdO1xyXG5cclxuICB2YXIgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pO1xyXG5cclxuICB2YXIgRGVmYXVsdFdoaXRlbGlzdCA9IHtcclxuICAgIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXHJcbiAgICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsICd0YWJpbmRleCcsICdzdHlsZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxyXG4gICAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcclxuICAgIGFyZWE6IFtdLFxyXG4gICAgYjogW10sXHJcbiAgICBicjogW10sXHJcbiAgICBjb2w6IFtdLFxyXG4gICAgY29kZTogW10sXHJcbiAgICBkaXY6IFtdLFxyXG4gICAgZW06IFtdLFxyXG4gICAgaHI6IFtdLFxyXG4gICAgaDE6IFtdLFxyXG4gICAgaDI6IFtdLFxyXG4gICAgaDM6IFtdLFxyXG4gICAgaDQ6IFtdLFxyXG4gICAgaDU6IFtdLFxyXG4gICAgaDY6IFtdLFxyXG4gICAgaTogW10sXHJcbiAgICBpbWc6IFsnc3JjJywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcclxuICAgIGxpOiBbXSxcclxuICAgIG9sOiBbXSxcclxuICAgIHA6IFtdLFxyXG4gICAgcHJlOiBbXSxcclxuICAgIHM6IFtdLFxyXG4gICAgc21hbGw6IFtdLFxyXG4gICAgc3BhbjogW10sXHJcbiAgICBzdWI6IFtdLFxyXG4gICAgc3VwOiBbXSxcclxuICAgIHN0cm9uZzogW10sXHJcbiAgICB1OiBbXSxcclxuICAgIHVsOiBbXVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxyXG4gICAqXHJcbiAgICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xyXG4gICAqL1xyXG4gIHZhciBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZSk6fFteJjovPyNdKig/OlsvPyNdfCQpKS9naTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXHJcbiAgICpcclxuICAgKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXHJcbiAgICovXHJcbiAgdmFyIERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbYS16MC05Ky9dKz0qJC9pO1xyXG5cclxuICBmdW5jdGlvbiBhbGxvd2VkQXR0cmlidXRlIChhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkge1xyXG4gICAgdmFyIGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgaWYgKCQuaW5BcnJheShhdHRyTmFtZSwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpICE9PSAtMSkge1xyXG4gICAgICBpZiAoJC5pbkFycmF5KGF0dHJOYW1lLCB1cmlBdHRycykgIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oYXR0ci5ub2RlVmFsdWUubWF0Y2goU0FGRV9VUkxfUEFUVEVSTikgfHwgYXR0ci5ub2RlVmFsdWUubWF0Y2goREFUQV9VUkxfUEFUVEVSTikpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlZ0V4cCA9ICQoYWxsb3dlZEF0dHJpYnV0ZUxpc3QpLmZpbHRlcihmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cFxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVnRXhwLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBpZiAoYXR0ck5hbWUubWF0Y2gocmVnRXhwW2ldKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNhbml0aXplSHRtbCAodW5zYWZlRWxlbWVudHMsIHdoaXRlTGlzdCwgc2FuaXRpemVGbikge1xyXG4gICAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlRWxlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3aGl0ZWxpc3RLZXlzID0gT2JqZWN0LmtleXMod2hpdGVMaXN0KTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdW5zYWZlRWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgdmFyIGVsZW1lbnRzID0gdW5zYWZlRWxlbWVudHNbaV0ucXVlcnlTZWxlY3RvckFsbCgnKicpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaiA9IDAsIGxlbjIgPSBlbGVtZW50cy5sZW5ndGg7IGogPCBsZW4yOyBqKyspIHtcclxuICAgICAgICB2YXIgZWwgPSBlbGVtZW50c1tqXTtcclxuICAgICAgICB2YXIgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHdoaXRlbGlzdEtleXMuaW5kZXhPZihlbE5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcblxyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXR0cmlidXRlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgdmFyIHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrID0gMCwgbGVuMyA9IGF0dHJpYnV0ZUxpc3QubGVuZ3RoOyBrIDwgbGVuMzsgaysrKSB7XHJcbiAgICAgICAgICB2YXIgYXR0ciA9IGF0dHJpYnV0ZUxpc3Rba107XHJcblxyXG4gICAgICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHIsIHdoaXRlbGlzdGVkQXR0cmlidXRlcykpIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUG9seWZpbGwgZm9yIGJyb3dzZXJzIHdpdGggbm8gY2xhc3NMaXN0IHN1cHBvcnRcclxuICAvLyBSZW1vdmUgaW4gdjJcclxuICBpZiAoISgnY2xhc3NMaXN0JyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdfJykpKSB7XHJcbiAgICAoZnVuY3Rpb24gKHZpZXcpIHtcclxuICAgICAgaWYgKCEoJ0VsZW1lbnQnIGluIHZpZXcpKSByZXR1cm47XHJcblxyXG4gICAgICB2YXIgY2xhc3NMaXN0UHJvcCA9ICdjbGFzc0xpc3QnLFxyXG4gICAgICAgICAgcHJvdG9Qcm9wID0gJ3Byb3RvdHlwZScsXHJcbiAgICAgICAgICBlbGVtQ3RyUHJvdG8gPSB2aWV3LkVsZW1lbnRbcHJvdG9Qcm9wXSxcclxuICAgICAgICAgIG9iakN0ciA9IE9iamVjdCxcclxuICAgICAgICAgIGNsYXNzTGlzdEdldHRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbiAoY2xhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbGVtLmFkZENsYXNzKGNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoY2xhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbGVtLnJlbW92ZUNsYXNzKGNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbiAoY2xhc3NlcywgZm9yY2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkZWxlbS50b2dnbGVDbGFzcyhjbGFzc2VzLCBmb3JjZSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjb250YWluczogZnVuY3Rpb24gKGNsYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkZWxlbS5oYXNDbGFzcyhjbGFzc2VzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICBpZiAob2JqQ3RyLmRlZmluZVByb3BlcnR5KSB7XHJcbiAgICAgICAgdmFyIGNsYXNzTGlzdFByb3BEZXNjID0ge1xyXG4gICAgICAgICAgZ2V0OiBjbGFzc0xpc3RHZXR0ZXIsXHJcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgb2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7IC8vIElFIDggZG9lc24ndCBzdXBwb3J0IGVudW1lcmFibGU6dHJ1ZVxyXG4gICAgICAgICAgLy8gYWRkaW5nIHVuZGVmaW5lZCB0byBmaWdodCB0aGlzIGlzc3VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9pc3N1ZXMvMzZcclxuICAgICAgICAgIC8vIG1vZGVybmllIElFOC1NU1c3IG1hY2hpbmUgaGFzIElFOCA4LjAuNjAwMS4xODcwMiBhbmQgaXMgYWZmZWN0ZWRcclxuICAgICAgICAgIGlmIChleC5udW1iZXIgPT09IHVuZGVmaW5lZCB8fCBleC5udW1iZXIgPT09IC0weDdGRjVFQzU0KSB7XHJcbiAgICAgICAgICAgIGNsYXNzTGlzdFByb3BEZXNjLmVudW1lcmFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgb2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChvYmpDdHJbcHJvdG9Qcm9wXS5fX2RlZmluZUdldHRlcl9fKSB7XHJcbiAgICAgICAgZWxlbUN0clByb3RvLl9fZGVmaW5lR2V0dGVyX18oY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0R2V0dGVyKTtcclxuICAgICAgfVxyXG4gICAgfSh3aW5kb3cpKTtcclxuICB9XHJcblxyXG4gIHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ18nKTtcclxuXHJcbiAgdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYzEnLCAnYzInKTtcclxuXHJcbiAgaWYgKCF0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2MyJykpIHtcclxuICAgIHZhciBfYWRkID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZS5hZGQsXHJcbiAgICAgICAgX3JlbW92ZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUucmVtb3ZlO1xyXG5cclxuICAgIERPTVRva2VuTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgX2FkZC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBET01Ub2tlbkxpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIF9yZW1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjMycsIGZhbHNlKTtcclxuXHJcbiAgLy8gUG9seWZpbGwgZm9yIElFIDEwIGFuZCBGaXJlZm94IDwyNCwgd2hlcmUgY2xhc3NMaXN0LnRvZ2dsZSBkb2VzIG5vdFxyXG4gIC8vIHN1cHBvcnQgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICBpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjMycpKSB7XHJcbiAgICB2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xyXG5cclxuICAgIERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKHRva2VuLCBmb3JjZSkge1xyXG4gICAgICBpZiAoMSBpbiBhcmd1bWVudHMgJiYgIXRoaXMuY29udGFpbnModG9rZW4pID09PSAhZm9yY2UpIHtcclxuICAgICAgICByZXR1cm4gZm9yY2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIF90b2dnbGUuY2FsbCh0aGlzLCB0b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0ZXN0RWxlbWVudCA9IG51bGw7XHJcblxyXG4gIC8vIHNoYWxsb3cgYXJyYXkgY29tcGFyaXNvblxyXG4gIGZ1bmN0aW9uIGlzRXF1YWwgKGFycmF5MSwgYXJyYXkyKSB7XHJcbiAgICByZXR1cm4gYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aCAmJiBhcnJheTEuZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50ID09PSBhcnJheTJbaW5kZXhdO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gPGVkaXRvci1mb2xkIGRlc2M9XCJTaGltc1wiPlxyXG4gIGlmICghU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKSB7XHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAndXNlIHN0cmljdCc7IC8vIG5lZWRlZCB0byBzdXBwb3J0IGBhcHBseWAvYGNhbGxgIHdpdGggYHVuZGVmaW5lZGAvYG51bGxgXHJcbiAgICAgIHZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gSUUgOCBvbmx5IHN1cHBvcnRzIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG9uIERPTSBlbGVtZW50c1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB2YXIgb2JqZWN0ID0ge307XHJcbiAgICAgICAgICB2YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xyXG4gICAgICAgICAgdmFyIHJlc3VsdCA9ICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG9iamVjdCwgb2JqZWN0KSAmJiAkZGVmaW5lUHJvcGVydHk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSgpKTtcclxuICAgICAgdmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XHJcbiAgICAgIHZhciBzdGFydHNXaXRoID0gZnVuY3Rpb24gKHNlYXJjaCkge1xyXG4gICAgICAgIGlmICh0aGlzID09IG51bGwpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcclxuICAgICAgICBpZiAoc2VhcmNoICYmIHRvU3RyaW5nLmNhbGwoc2VhcmNoKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcclxuICAgICAgICB2YXIgc2VhcmNoU3RyaW5nID0gU3RyaW5nKHNlYXJjaCk7XHJcbiAgICAgICAgdmFyIHNlYXJjaExlbmd0aCA9IHNlYXJjaFN0cmluZy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gYFRvSW50ZWdlcmBcclxuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24gPyBOdW1iZXIocG9zaXRpb24pIDogMDtcclxuICAgICAgICBpZiAocG9zICE9IHBvcykgeyAvLyBiZXR0ZXIgYGlzTmFOYFxyXG4gICAgICAgICAgcG9zID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gTWF0aC5taW4oTWF0aC5tYXgocG9zLCAwKSwgc3RyaW5nTGVuZ3RoKTtcclxuICAgICAgICAvLyBBdm9pZCB0aGUgYGluZGV4T2ZgIGNhbGwgaWYgbm8gbWF0Y2ggaXMgcG9zc2libGVcclxuICAgICAgICBpZiAoc2VhcmNoTGVuZ3RoICsgc3RhcnQgPiBzdHJpbmdMZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gLTE7XHJcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBzZWFyY2hMZW5ndGgpIHtcclxuICAgICAgICAgIGlmIChzdHJpbmcuY2hhckNvZGVBdChzdGFydCArIGluZGV4KSAhPSBzZWFyY2hTdHJpbmcuY2hhckNvZGVBdChpbmRleCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgICAgaWYgKGRlZmluZVByb3BlcnR5KSB7XHJcbiAgICAgICAgZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgJ3N0YXJ0c1dpdGgnLCB7XHJcbiAgICAgICAgICAndmFsdWUnOiBzdGFydHNXaXRoLFxyXG4gICAgICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXHJcbiAgICAgICAgICAnd3JpdGFibGUnOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoID0gc3RhcnRzV2l0aDtcclxuICAgICAgfVxyXG4gICAgfSgpKTtcclxuICB9XHJcblxyXG4gIGlmICghT2JqZWN0LmtleXMpIHtcclxuICAgIE9iamVjdC5rZXlzID0gZnVuY3Rpb24gKFxyXG4gICAgICBvLCAvLyBvYmplY3RcclxuICAgICAgaywgLy8ga2V5XHJcbiAgICAgIHIgIC8vIHJlc3VsdCBhcnJheVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIGluaXRpYWxpemUgb2JqZWN0IGFuZCByZXN1bHRcclxuICAgICAgciA9IFtdO1xyXG4gICAgICAvLyBpdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcclxuICAgICAgZm9yIChrIGluIG8pIHtcclxuICAgICAgICAvLyBmaWxsIHJlc3VsdCBhcnJheSB3aXRoIG5vbi1wcm90b3R5cGljYWwga2V5c1xyXG4gICAgICAgIHIuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSAmJiByLnB1c2goayk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIHJlc3VsdFxyXG4gICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoSFRNTFNlbGVjdEVsZW1lbnQgJiYgIUhUTUxTZWxlY3RFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRPcHRpb25zJykpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MU2VsZWN0RWxlbWVudC5wcm90b3R5cGUsICdzZWxlY3RlZE9wdGlvbnMnLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRPcHRpb25zIChzZWxlY3QsIGlnbm9yZURpc2FibGVkKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWRPcHRpb25zID0gc2VsZWN0LnNlbGVjdGVkT3B0aW9ucyxcclxuICAgICAgICBvcHRpb25zID0gW10sXHJcbiAgICAgICAgb3B0O1xyXG5cclxuICAgIGlmIChpZ25vcmVEaXNhYmxlZCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgb3B0ID0gc2VsZWN0ZWRPcHRpb25zW2ldO1xyXG5cclxuICAgICAgICBpZiAoIShvcHQuZGlzYWJsZWQgfHwgb3B0LnBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ09QVEdST1VQJyAmJiBvcHQucGFyZW50Tm9kZS5kaXNhYmxlZCkpIHtcclxuICAgICAgICAgIG9wdGlvbnMucHVzaChvcHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9ucztcclxuICB9XHJcblxyXG4gIC8vIG11Y2ggZmFzdGVyIHRoYW4gJC52YWwoKVxyXG4gIGZ1bmN0aW9uIGdldFNlbGVjdFZhbHVlcyAoc2VsZWN0LCBzZWxlY3RlZE9wdGlvbnMpIHtcclxuICAgIHZhciB2YWx1ZSA9IFtdLFxyXG4gICAgICAgIG9wdGlvbnMgPSBzZWxlY3RlZE9wdGlvbnMgfHwgc2VsZWN0LnNlbGVjdGVkT3B0aW9ucyxcclxuICAgICAgICBvcHQ7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG9wdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgb3B0ID0gb3B0aW9uc1tpXTtcclxuXHJcbiAgICAgIGlmICghKG9wdC5kaXNhYmxlZCB8fCBvcHQucGFyZW50Tm9kZS50YWdOYW1lID09PSAnT1BUR1JPVVAnICYmIG9wdC5wYXJlbnROb2RlLmRpc2FibGVkKSkge1xyXG4gICAgICAgIHZhbHVlLnB1c2gob3B0LnZhbHVlIHx8IG9wdC50ZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2VsZWN0Lm11bHRpcGxlKSB7XHJcbiAgICAgIHJldHVybiAhdmFsdWUubGVuZ3RoID8gbnVsbCA6IHZhbHVlWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIHNldCBkYXRhLXNlbGVjdGVkIG9uIHNlbGVjdCBlbGVtZW50IGlmIHRoZSB2YWx1ZSBoYXMgYmVlbiBwcm9ncmFtbWF0aWNhbGx5IHNlbGVjdGVkXHJcbiAgLy8gcHJpb3IgdG8gaW5pdGlhbGl6YXRpb24gb2YgYm9vdHN0cmFwLXNlbGVjdFxyXG4gIC8vICogY29uc2lkZXIgcmVtb3Zpbmcgb3IgcmVwbGFjaW5nIGFuIGFsdGVybmF0aXZlIG1ldGhvZCAqXHJcbiAgdmFyIHZhbEhvb2tzID0ge1xyXG4gICAgdXNlRGVmYXVsdDogZmFsc2UsXHJcbiAgICBfc2V0OiAkLnZhbEhvb2tzLnNlbGVjdC5zZXRcclxuICB9O1xyXG5cclxuICAkLnZhbEhvb2tzLnNlbGVjdC5zZXQgPSBmdW5jdGlvbiAoZWxlbSwgdmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSAmJiAhdmFsSG9va3MudXNlRGVmYXVsdCkgJChlbGVtKS5kYXRhKCdzZWxlY3RlZCcsIHRydWUpO1xyXG5cclxuICAgIHJldHVybiB2YWxIb29rcy5fc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGNoYW5nZWRBcmd1bWVudHMgPSBudWxsO1xyXG5cclxuICB2YXIgRXZlbnRJc1N1cHBvcnRlZCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBuZXcgRXZlbnQoJ2NoYW5nZScpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcblxyXG4gICQuZm4udHJpZ2dlck5hdGl2ZSA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgIHZhciBlbCA9IHRoaXNbMF0sXHJcbiAgICAgICAgZXZlbnQ7XHJcblxyXG4gICAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHsgLy8gZm9yIG1vZGVybiBicm93c2VycyAmIElFOStcclxuICAgICAgaWYgKEV2ZW50SXNTdXBwb3J0ZWQpIHtcclxuICAgICAgICAvLyBGb3IgbW9kZXJuIGJyb3dzZXJzXHJcbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnROYW1lLCB7XHJcbiAgICAgICAgICBidWJibGVzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRm9yIElFIHNpbmNlIGl0IGRvZXNuJ3Qgc3VwcG9ydCBFdmVudCBjb25zdHJ1Y3RvclxyXG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH0gZWxzZSBpZiAoZWwuZmlyZUV2ZW50KSB7IC8vIGZvciBJRThcclxuICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xyXG4gICAgICBldmVudC5ldmVudFR5cGUgPSBldmVudE5hbWU7XHJcbiAgICAgIGVsLmZpcmVFdmVudCgnb24nICsgZXZlbnROYW1lLCBldmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBmYWxsIGJhY2sgdG8galF1ZXJ5LnRyaWdnZXJcclxuICAgICAgdGhpcy50cmlnZ2VyKGV2ZW50TmFtZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyA8L2VkaXRvci1mb2xkPlxyXG5cclxuICBmdW5jdGlvbiBzdHJpbmdTZWFyY2ggKGxpLCBzZWFyY2hTdHJpbmcsIG1ldGhvZCwgbm9ybWFsaXplKSB7XHJcbiAgICB2YXIgc3RyaW5nVHlwZXMgPSBbXHJcbiAgICAgICAgICAnZGlzcGxheScsXHJcbiAgICAgICAgICAnc3VidGV4dCcsXHJcbiAgICAgICAgICAndG9rZW5zJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VhcmNoU3VjY2VzcyA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nVHlwZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHN0cmluZ1R5cGUgPSBzdHJpbmdUeXBlc1tpXSxcclxuICAgICAgICAgIHN0cmluZyA9IGxpW3N0cmluZ1R5cGVdO1xyXG5cclxuICAgICAgaWYgKHN0cmluZykge1xyXG4gICAgICAgIHN0cmluZyA9IHN0cmluZy50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvLyBTdHJpcCBIVE1MIHRhZ3MuIFRoaXMgaXNuJ3QgcGVyZmVjdCwgYnV0IGl0J3MgbXVjaCBmYXN0ZXIgdGhhbiBhbnkgb3RoZXIgbWV0aG9kXHJcbiAgICAgICAgaWYgKHN0cmluZ1R5cGUgPT09ICdkaXNwbGF5Jykge1xyXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLzxbXj5dKz4vZywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vcm1hbGl6ZSkgc3RyaW5nID0gbm9ybWFsaXplVG9CYXNlKHN0cmluZyk7XHJcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChtZXRob2QgPT09ICdjb250YWlucycpIHtcclxuICAgICAgICAgIHNlYXJjaFN1Y2Nlc3MgPSBzdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcpID49IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlYXJjaFN1Y2Nlc3MgPSBzdHJpbmcuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaFN1Y2Nlc3MpIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlYXJjaFN1Y2Nlc3M7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b0ludGVnZXIgKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgLy8gQm9ycm93ZWQgZnJvbSBMb2Rhc2ggKF8uZGVidXJyKVxyXG4gIC8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cclxuICB2YXIgZGVidXJyZWRMZXR0ZXJzID0ge1xyXG4gICAgLy8gTGF0aW4tMSBTdXBwbGVtZW50IGJsb2NrLlxyXG4gICAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXHJcbiAgICAnXFx4ZTAnOiAnYScsICAnXFx4ZTEnOiAnYScsICdcXHhlMic6ICdhJywgJ1xceGUzJzogJ2EnLCAnXFx4ZTQnOiAnYScsICdcXHhlNSc6ICdhJyxcclxuICAgICdcXHhjNyc6ICdDJywgICdcXHhlNyc6ICdjJyxcclxuICAgICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcclxuICAgICdcXHhjOCc6ICdFJywgICdcXHhjOSc6ICdFJywgJ1xceGNhJzogJ0UnLCAnXFx4Y2InOiAnRScsXHJcbiAgICAnXFx4ZTgnOiAnZScsICAnXFx4ZTknOiAnZScsICdcXHhlYSc6ICdlJywgJ1xceGViJzogJ2UnLFxyXG4gICAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcclxuICAgICdcXHhlYyc6ICdpJywgICdcXHhlZCc6ICdpJywgJ1xceGVlJzogJ2knLCAnXFx4ZWYnOiAnaScsXHJcbiAgICAnXFx4ZDEnOiAnTicsICAnXFx4ZjEnOiAnbicsXHJcbiAgICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcclxuICAgICdcXHhmMic6ICdvJywgICdcXHhmMyc6ICdvJywgJ1xceGY0JzogJ28nLCAnXFx4ZjUnOiAnbycsICdcXHhmNic6ICdvJywgJ1xceGY4JzogJ28nLFxyXG4gICAgJ1xceGQ5JzogJ1UnLCAgJ1xceGRhJzogJ1UnLCAnXFx4ZGInOiAnVScsICdcXHhkYyc6ICdVJyxcclxuICAgICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXHJcbiAgICAnXFx4ZGQnOiAnWScsICAnXFx4ZmQnOiAneScsICdcXHhmZic6ICd5JyxcclxuICAgICdcXHhjNic6ICdBZScsICdcXHhlNic6ICdhZScsXHJcbiAgICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxyXG4gICAgJ1xceGRmJzogJ3NzJyxcclxuICAgIC8vIExhdGluIEV4dGVuZGVkLUEgYmxvY2suXHJcbiAgICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcclxuICAgICdcXHUwMTAxJzogJ2EnLCAgJ1xcdTAxMDMnOiAnYScsICdcXHUwMTA1JzogJ2EnLFxyXG4gICAgJ1xcdTAxMDYnOiAnQycsICAnXFx1MDEwOCc6ICdDJywgJ1xcdTAxMGEnOiAnQycsICdcXHUwMTBjJzogJ0MnLFxyXG4gICAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxyXG4gICAgJ1xcdTAxMGUnOiAnRCcsICAnXFx1MDExMCc6ICdEJywgJ1xcdTAxMGYnOiAnZCcsICdcXHUwMTExJzogJ2QnLFxyXG4gICAgJ1xcdTAxMTInOiAnRScsICAnXFx1MDExNCc6ICdFJywgJ1xcdTAxMTYnOiAnRScsICdcXHUwMTE4JzogJ0UnLCAnXFx1MDExYSc6ICdFJyxcclxuICAgICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXHJcbiAgICAnXFx1MDExYyc6ICdHJywgICdcXHUwMTFlJzogJ0cnLCAnXFx1MDEyMCc6ICdHJywgJ1xcdTAxMjInOiAnRycsXHJcbiAgICAnXFx1MDExZCc6ICdnJywgICdcXHUwMTFmJzogJ2cnLCAnXFx1MDEyMSc6ICdnJywgJ1xcdTAxMjMnOiAnZycsXHJcbiAgICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXHJcbiAgICAnXFx1MDEyOCc6ICdJJywgICdcXHUwMTJhJzogJ0knLCAnXFx1MDEyYyc6ICdJJywgJ1xcdTAxMmUnOiAnSScsICdcXHUwMTMwJzogJ0knLFxyXG4gICAgJ1xcdTAxMjknOiAnaScsICAnXFx1MDEyYic6ICdpJywgJ1xcdTAxMmQnOiAnaScsICdcXHUwMTJmJzogJ2knLCAnXFx1MDEzMSc6ICdpJyxcclxuICAgICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXHJcbiAgICAnXFx1MDEzNic6ICdLJywgICdcXHUwMTM3JzogJ2snLCAnXFx1MDEzOCc6ICdrJyxcclxuICAgICdcXHUwMTM5JzogJ0wnLCAgJ1xcdTAxM2InOiAnTCcsICdcXHUwMTNkJzogJ0wnLCAnXFx1MDEzZic6ICdMJywgJ1xcdTAxNDEnOiAnTCcsXHJcbiAgICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxyXG4gICAgJ1xcdTAxNDMnOiAnTicsICAnXFx1MDE0NSc6ICdOJywgJ1xcdTAxNDcnOiAnTicsICdcXHUwMTRhJzogJ04nLFxyXG4gICAgJ1xcdTAxNDQnOiAnbicsICAnXFx1MDE0Nic6ICduJywgJ1xcdTAxNDgnOiAnbicsICdcXHUwMTRiJzogJ24nLFxyXG4gICAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXHJcbiAgICAnXFx1MDE0ZCc6ICdvJywgICdcXHUwMTRmJzogJ28nLCAnXFx1MDE1MSc6ICdvJyxcclxuICAgICdcXHUwMTU0JzogJ1InLCAgJ1xcdTAxNTYnOiAnUicsICdcXHUwMTU4JzogJ1InLFxyXG4gICAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXHJcbiAgICAnXFx1MDE1YSc6ICdTJywgICdcXHUwMTVjJzogJ1MnLCAnXFx1MDE1ZSc6ICdTJywgJ1xcdTAxNjAnOiAnUycsXHJcbiAgICAnXFx1MDE1Yic6ICdzJywgICdcXHUwMTVkJzogJ3MnLCAnXFx1MDE1Zic6ICdzJywgJ1xcdTAxNjEnOiAncycsXHJcbiAgICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcclxuICAgICdcXHUwMTYzJzogJ3QnLCAgJ1xcdTAxNjUnOiAndCcsICdcXHUwMTY3JzogJ3QnLFxyXG4gICAgJ1xcdTAxNjgnOiAnVScsICAnXFx1MDE2YSc6ICdVJywgJ1xcdTAxNmMnOiAnVScsICdcXHUwMTZlJzogJ1UnLCAnXFx1MDE3MCc6ICdVJywgJ1xcdTAxNzInOiAnVScsXHJcbiAgICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcclxuICAgICdcXHUwMTc0JzogJ1cnLCAgJ1xcdTAxNzUnOiAndycsXHJcbiAgICAnXFx1MDE3Nic6ICdZJywgICdcXHUwMTc3JzogJ3knLCAnXFx1MDE3OCc6ICdZJyxcclxuICAgICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxyXG4gICAgJ1xcdTAxN2EnOiAneicsICAnXFx1MDE3Yyc6ICd6JywgJ1xcdTAxN2UnOiAneicsXHJcbiAgICAnXFx1MDEzMic6ICdJSicsICdcXHUwMTMzJzogJ2lqJyxcclxuICAgICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxyXG4gICAgJ1xcdTAxNDknOiBcIiduXCIsICdcXHUwMTdmJzogJ3MnXHJcbiAgfTtcclxuXHJcbiAgLyoqIFVzZWQgdG8gbWF0Y2ggTGF0aW4gVW5pY29kZSBsZXR0ZXJzIChleGNsdWRpbmcgbWF0aGVtYXRpY2FsIG9wZXJhdG9ycykuICovXHJcbiAgdmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcclxuXHJcbiAgLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xyXG4gIHZhciByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcclxuICAgICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxyXG4gICAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxyXG4gICAgICByc0NvbWJvTWFya3NFeHRlbmRlZFJhbmdlID0gJ1xcXFx1MWFiMC1cXFxcdTFhZmYnLFxyXG4gICAgICByc0NvbWJvTWFya3NTdXBwbGVtZW50UmFuZ2UgPSAnXFxcXHUxZGMwLVxcXFx1MWRmZicsXHJcbiAgICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSArIHJzQ29tYm9NYXJrc0V4dGVuZGVkUmFuZ2UgKyByc0NvbWJvTWFya3NTdXBwbGVtZW50UmFuZ2U7XHJcblxyXG4gIC8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cclxuICB2YXIgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJztcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxyXG4gICAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3MgZm9yIHN5bWJvbHNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrc19mb3JfU3ltYm9scykuXHJcbiAgICovXHJcbiAgdmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGRlYnVyckxldHRlciAoa2V5KSB7XHJcbiAgICByZXR1cm4gZGVidXJyZWRMZXR0ZXJzW2tleV07XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbm9ybWFsaXplVG9CYXNlIChzdHJpbmcpIHtcclxuICAgIHN0cmluZyA9IHN0cmluZy50b1N0cmluZygpO1xyXG4gICAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmcucmVwbGFjZShyZUxhdGluLCBkZWJ1cnJMZXR0ZXIpLnJlcGxhY2UocmVDb21ib01hcmssICcnKTtcclxuICB9XHJcblxyXG4gIC8vIExpc3Qgb2YgSFRNTCBlbnRpdGllcyBmb3IgZXNjYXBpbmcuXHJcbiAgdmFyIGVzY2FwZU1hcCA9IHtcclxuICAgICcmJzogJyZhbXA7JyxcclxuICAgICc8JzogJyZsdDsnLFxyXG4gICAgJz4nOiAnJmd0OycsXHJcbiAgICAnXCInOiAnJnF1b3Q7JyxcclxuICAgIFwiJ1wiOiAnJiN4Mjc7JyxcclxuICAgICdgJzogJyYjeDYwOydcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbnMgZm9yIGVzY2FwaW5nIGFuZCB1bmVzY2FwaW5nIHN0cmluZ3MgdG8vZnJvbSBIVE1MIGludGVycG9sYXRpb24uXHJcbiAgdmFyIGNyZWF0ZUVzY2FwZXIgPSBmdW5jdGlvbiAobWFwKSB7XHJcbiAgICB2YXIgZXNjYXBlciA9IGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICByZXR1cm4gbWFwW21hdGNoXTtcclxuICAgIH07XHJcbiAgICAvLyBSZWdleGVzIGZvciBpZGVudGlmeWluZyBhIGtleSB0aGF0IG5lZWRzIHRvIGJlIGVzY2FwZWQuXHJcbiAgICB2YXIgc291cmNlID0gJyg/OicgKyBPYmplY3Qua2V5cyhtYXApLmpvaW4oJ3wnKSArICcpJztcclxuICAgIHZhciB0ZXN0UmVnZXhwID0gUmVnRXhwKHNvdXJjZSk7XHJcbiAgICB2YXIgcmVwbGFjZVJlZ2V4cCA9IFJlZ0V4cChzb3VyY2UsICdnJyk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XHJcbiAgICAgIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB2YXIgaHRtbEVzY2FwZSA9IGNyZWF0ZUVzY2FwZXIoZXNjYXBlTWFwKTtcclxuXHJcbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29uc3RhbnRzXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcblxyXG4gIHZhciBrZXlDb2RlTWFwID0ge1xyXG4gICAgMzI6ICcgJyxcclxuICAgIDQ4OiAnMCcsXHJcbiAgICA0OTogJzEnLFxyXG4gICAgNTA6ICcyJyxcclxuICAgIDUxOiAnMycsXHJcbiAgICA1MjogJzQnLFxyXG4gICAgNTM6ICc1JyxcclxuICAgIDU0OiAnNicsXHJcbiAgICA1NTogJzcnLFxyXG4gICAgNTY6ICc4JyxcclxuICAgIDU3OiAnOScsXHJcbiAgICA1OTogJzsnLFxyXG4gICAgNjU6ICdBJyxcclxuICAgIDY2OiAnQicsXHJcbiAgICA2NzogJ0MnLFxyXG4gICAgNjg6ICdEJyxcclxuICAgIDY5OiAnRScsXHJcbiAgICA3MDogJ0YnLFxyXG4gICAgNzE6ICdHJyxcclxuICAgIDcyOiAnSCcsXHJcbiAgICA3MzogJ0knLFxyXG4gICAgNzQ6ICdKJyxcclxuICAgIDc1OiAnSycsXHJcbiAgICA3NjogJ0wnLFxyXG4gICAgNzc6ICdNJyxcclxuICAgIDc4OiAnTicsXHJcbiAgICA3OTogJ08nLFxyXG4gICAgODA6ICdQJyxcclxuICAgIDgxOiAnUScsXHJcbiAgICA4MjogJ1InLFxyXG4gICAgODM6ICdTJyxcclxuICAgIDg0OiAnVCcsXHJcbiAgICA4NTogJ1UnLFxyXG4gICAgODY6ICdWJyxcclxuICAgIDg3OiAnVycsXHJcbiAgICA4ODogJ1gnLFxyXG4gICAgODk6ICdZJyxcclxuICAgIDkwOiAnWicsXHJcbiAgICA5NjogJzAnLFxyXG4gICAgOTc6ICcxJyxcclxuICAgIDk4OiAnMicsXHJcbiAgICA5OTogJzMnLFxyXG4gICAgMTAwOiAnNCcsXHJcbiAgICAxMDE6ICc1JyxcclxuICAgIDEwMjogJzYnLFxyXG4gICAgMTAzOiAnNycsXHJcbiAgICAxMDQ6ICc4JyxcclxuICAgIDEwNTogJzknXHJcbiAgfTtcclxuXHJcbiAgdmFyIGtleUNvZGVzID0ge1xyXG4gICAgRVNDQVBFOiAyNywgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxyXG4gICAgRU5URVI6IDEzLCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFbnRlciBrZXlcclxuICAgIFNQQUNFOiAzMiwgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XHJcbiAgICBUQUI6IDksIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcclxuICAgIEFSUk9XX1VQOiAzOCwgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XHJcbiAgICBBUlJPV19ET1dOOiA0MCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBkb3duIGFycm93IGtleVxyXG4gIH1cclxuXHJcbiAgdmFyIHZlcnNpb24gPSB7XHJcbiAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgIG1ham9yOiAnMydcclxuICB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgdmVyc2lvbi5mdWxsID0gKCQuZm4uZHJvcGRvd24uQ29uc3RydWN0b3IuVkVSU0lPTiB8fCAnJykuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpO1xyXG4gICAgdmVyc2lvbi5tYWpvciA9IHZlcnNpb24uZnVsbFswXTtcclxuICAgIHZlcnNpb24uc3VjY2VzcyA9IHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAvLyBkbyBub3RoaW5nXHJcbiAgfVxyXG5cclxuICB2YXIgc2VsZWN0SWQgPSAwO1xyXG5cclxuICB2YXIgRVZFTlRfS0VZID0gJy5icy5zZWxlY3QnO1xyXG5cclxuICB2YXIgY2xhc3NOYW1lcyA9IHtcclxuICAgIERJU0FCTEVEOiAnZGlzYWJsZWQnLFxyXG4gICAgRElWSURFUjogJ2RpdmlkZXInLFxyXG4gICAgU0hPVzogJ29wZW4nLFxyXG4gICAgRFJPUFVQOiAnZHJvcHVwJyxcclxuICAgIE1FTlU6ICdkcm9wZG93bi1tZW51JyxcclxuICAgIE1FTlVSSUdIVDogJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnLFxyXG4gICAgTUVOVUxFRlQ6ICdkcm9wZG93bi1tZW51LWxlZnQnLFxyXG4gICAgLy8gdG8tZG86IHJlcGxhY2Ugd2l0aCBtb3JlIGFkdmFuY2VkIHRlbXBsYXRlL2N1c3RvbWl6YXRpb24gb3B0aW9uc1xyXG4gICAgQlVUVE9OQ0xBU1M6ICdidG4tZGVmYXVsdCcsXHJcbiAgICBQT1BPVkVSSEVBREVSOiAncG9wb3Zlci10aXRsZScsXHJcbiAgICBJQ09OQkFTRTogJ2dseXBoaWNvbicsXHJcbiAgICBUSUNLSUNPTjogJ2dseXBoaWNvbi1vaydcclxuICB9XHJcblxyXG4gIHZhciBTZWxlY3RvciA9IHtcclxuICAgIE1FTlU6ICcuJyArIGNsYXNzTmFtZXMuTUVOVVxyXG4gIH1cclxuXHJcbiAgdmFyIGVsZW1lbnRUZW1wbGF0ZXMgPSB7XHJcbiAgICBzcGFuOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcbiAgICBpOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyksXHJcbiAgICBzdWJ0ZXh0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpLFxyXG4gICAgYTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLFxyXG4gICAgbGk6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyksXHJcbiAgICB3aGl0ZXNwYWNlOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXFx1MDBBMCcpLFxyXG4gICAgZnJhZ21lbnQ6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxyXG4gIH1cclxuXHJcbiAgZWxlbWVudFRlbXBsYXRlcy5hLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcclxuICBlbGVtZW50VGVtcGxhdGVzLnN1YnRleHQuY2xhc3NOYW1lID0gJ3RleHQtbXV0ZWQnO1xyXG5cclxuICBlbGVtZW50VGVtcGxhdGVzLnRleHQgPSBlbGVtZW50VGVtcGxhdGVzLnNwYW4uY2xvbmVOb2RlKGZhbHNlKTtcclxuICBlbGVtZW50VGVtcGxhdGVzLnRleHQuY2xhc3NOYW1lID0gJ3RleHQnO1xyXG5cclxuICBlbGVtZW50VGVtcGxhdGVzLmNoZWNrTWFyayA9IGVsZW1lbnRUZW1wbGF0ZXMuc3Bhbi5jbG9uZU5vZGUoZmFsc2UpO1xyXG5cclxuICB2YXIgUkVHRVhQX0FSUk9XID0gbmV3IFJlZ0V4cChrZXlDb2Rlcy5BUlJPV19VUCArICd8JyArIGtleUNvZGVzLkFSUk9XX0RPV04pO1xyXG4gIHZhciBSRUdFWFBfVEFCX09SX0VTQ0FQRSA9IG5ldyBSZWdFeHAoJ14nICsga2V5Q29kZXMuVEFCICsgJyR8JyArIGtleUNvZGVzLkVTQ0FQRSk7XHJcblxyXG4gIHZhciBnZW5lcmF0ZU9wdGlvbiA9IHtcclxuICAgIGxpOiBmdW5jdGlvbiAoY29udGVudCwgY2xhc3Nlcywgb3B0Z3JvdXApIHtcclxuICAgICAgdmFyIGxpID0gZWxlbWVudFRlbXBsYXRlcy5saS5jbG9uZU5vZGUoZmFsc2UpO1xyXG5cclxuICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBpZiAoY29udGVudC5ub2RlVHlwZSA9PT0gMSB8fCBjb250ZW50Lm5vZGVUeXBlID09PSAxMSkge1xyXG4gICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxpLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGNsYXNzZXMgIT09ICd1bmRlZmluZWQnICYmIGNsYXNzZXMgIT09ICcnKSBsaS5jbGFzc05hbWUgPSBjbGFzc2VzO1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGdyb3VwICE9PSAndW5kZWZpbmVkJyAmJiBvcHRncm91cCAhPT0gbnVsbCkgbGkuY2xhc3NMaXN0LmFkZCgnb3B0Z3JvdXAtJyArIG9wdGdyb3VwKTtcclxuXHJcbiAgICAgIHJldHVybiBsaTtcclxuICAgIH0sXHJcblxyXG4gICAgYTogZnVuY3Rpb24gKHRleHQsIGNsYXNzZXMsIGlubGluZSkge1xyXG4gICAgICB2YXIgYSA9IGVsZW1lbnRUZW1wbGF0ZXMuYS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgIGlmICh0ZXh0Lm5vZGVUeXBlID09PSAxMSkge1xyXG4gICAgICAgICAgYS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBjbGFzc2VzICE9PSAndW5kZWZpbmVkJyAmJiBjbGFzc2VzICE9PSAnJykgYS5jbGFzc05hbWUgPSBjbGFzc2VzO1xyXG4gICAgICBpZiAodmVyc2lvbi5tYWpvciA9PT0gJzQnKSBhLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWl0ZW0nKTtcclxuICAgICAgaWYgKGlubGluZSkgYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW5saW5lKTtcclxuXHJcbiAgICAgIHJldHVybiBhO1xyXG4gICAgfSxcclxuXHJcbiAgICB0ZXh0OiBmdW5jdGlvbiAob3B0aW9ucywgdXNlRnJhZ21lbnQpIHtcclxuICAgICAgdmFyIHRleHRFbGVtZW50ID0gZWxlbWVudFRlbXBsYXRlcy50ZXh0LmNsb25lTm9kZShmYWxzZSksXHJcbiAgICAgICAgICBzdWJ0ZXh0RWxlbWVudCxcclxuICAgICAgICAgIGljb25FbGVtZW50O1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMuY29udGVudCkge1xyXG4gICAgICAgIHRleHRFbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbnMudGV4dDtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbikge1xyXG4gICAgICAgICAgdmFyIHdoaXRlc3BhY2UgPSBlbGVtZW50VGVtcGxhdGVzLndoaXRlc3BhY2UuY2xvbmVOb2RlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAvLyBuZWVkIHRvIHVzZSA8aT4gZm9yIGljb25zIGluIHRoZSBidXR0b24gdG8gcHJldmVudCBhIGJyZWFraW5nIGNoYW5nZVxyXG4gICAgICAgICAgLy8gbm90ZTogc3dpdGNoIHRvIHNwYW4gaW4gbmV4dCBtYWpvciByZWxlYXNlXHJcbiAgICAgICAgICBpY29uRWxlbWVudCA9ICh1c2VGcmFnbWVudCA9PT0gdHJ1ZSA/IGVsZW1lbnRUZW1wbGF0ZXMuaSA6IGVsZW1lbnRUZW1wbGF0ZXMuc3BhbikuY2xvbmVOb2RlKGZhbHNlKTtcclxuICAgICAgICAgIGljb25FbGVtZW50LmNsYXNzTmFtZSA9IG9wdGlvbnMuaWNvbkJhc2UgKyAnICcgKyBvcHRpb25zLmljb247XHJcblxyXG4gICAgICAgICAgZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XHJcbiAgICAgICAgICBlbGVtZW50VGVtcGxhdGVzLmZyYWdtZW50LmFwcGVuZENoaWxkKHdoaXRlc3BhY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VidGV4dCkge1xyXG4gICAgICAgICAgc3VidGV4dEVsZW1lbnQgPSBlbGVtZW50VGVtcGxhdGVzLnN1YnRleHQuY2xvbmVOb2RlKGZhbHNlKTtcclxuICAgICAgICAgIHN1YnRleHRFbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9ucy5zdWJ0ZXh0O1xyXG4gICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VidGV4dEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHVzZUZyYWdtZW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgd2hpbGUgKHRleHRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBlbGVtZW50VGVtcGxhdGVzLmZyYWdtZW50O1xyXG4gICAgfSxcclxuXHJcbiAgICBsYWJlbDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIHRleHRFbGVtZW50ID0gZWxlbWVudFRlbXBsYXRlcy50ZXh0LmNsb25lTm9kZShmYWxzZSksXHJcbiAgICAgICAgICBzdWJ0ZXh0RWxlbWVudCxcclxuICAgICAgICAgIGljb25FbGVtZW50O1xyXG5cclxuICAgICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy5sYWJlbDtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmljb24pIHtcclxuICAgICAgICB2YXIgd2hpdGVzcGFjZSA9IGVsZW1lbnRUZW1wbGF0ZXMud2hpdGVzcGFjZS5jbG9uZU5vZGUoZmFsc2UpO1xyXG5cclxuICAgICAgICBpY29uRWxlbWVudCA9IGVsZW1lbnRUZW1wbGF0ZXMuc3Bhbi5jbG9uZU5vZGUoZmFsc2UpO1xyXG4gICAgICAgIGljb25FbGVtZW50LmNsYXNzTmFtZSA9IG9wdGlvbnMuaWNvbkJhc2UgKyAnICcgKyBvcHRpb25zLmljb247XHJcblxyXG4gICAgICAgIGVsZW1lbnRUZW1wbGF0ZXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnRUZW1wbGF0ZXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQod2hpdGVzcGFjZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChvcHRpb25zLnN1YnRleHQpIHtcclxuICAgICAgICBzdWJ0ZXh0RWxlbWVudCA9IGVsZW1lbnRUZW1wbGF0ZXMuc3VidGV4dC5jbG9uZU5vZGUoZmFsc2UpO1xyXG4gICAgICAgIHN1YnRleHRFbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9ucy5zdWJ0ZXh0O1xyXG4gICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKHN1YnRleHRFbGVtZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XHJcblxyXG4gICAgICByZXR1cm4gZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBTZWxlY3RwaWNrZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vIGJvb3RzdHJhcC1zZWxlY3QgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgLSByZXZlcnQgdmFsSG9va3Muc2VsZWN0LnNldCBiYWNrIHRvIGl0cyBvcmlnaW5hbCBmdW5jdGlvblxyXG4gICAgaWYgKCF2YWxIb29rcy51c2VEZWZhdWx0KSB7XHJcbiAgICAgICQudmFsSG9va3Muc2VsZWN0LnNldCA9IHZhbEhvb2tzLl9zZXQ7XHJcbiAgICAgIHZhbEhvb2tzLnVzZURlZmF1bHQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgdGhpcy4kbmV3RWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLiRidXR0b24gPSBudWxsO1xyXG4gICAgdGhpcy4kbWVudSA9IG51bGw7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5zZWxlY3RwaWNrZXIgPSB7XHJcbiAgICAgIG1haW46IHt9LFxyXG4gICAgICBzZWFyY2g6IHt9LFxyXG4gICAgICBjdXJyZW50OiB7fSwgLy8gY3VycmVudCBjaGFuZ2VzIGlmIGEgc2VhcmNoIGlzIGluIHByb2dyZXNzXHJcbiAgICAgIHZpZXc6IHt9LFxyXG4gICAgICBrZXlkb3duOiB7XHJcbiAgICAgICAga2V5SGlzdG9yeTogJycsXHJcbiAgICAgICAgcmVzZXRLZXlIaXN0b3J5OiB7XHJcbiAgICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC5zZWxlY3RwaWNrZXIua2V5ZG93bi5rZXlIaXN0b3J5ID0gJyc7XHJcbiAgICAgICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gSWYgd2UgaGF2ZSBubyB0aXRsZSB5ZXQsIHRyeSB0byBwdWxsIGl0IGZyb20gdGhlIGh0bWwgdGl0bGUgYXR0cmlidXRlIChqUXVlcnkgZG9lc250JyBwaWNrIGl0IHVwIGFzIGl0J3Mgbm90IGFcclxuICAgIC8vIGRhdGEtYXR0cmlidXRlKVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy50aXRsZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9ybWF0IHdpbmRvdyBwYWRkaW5nXHJcbiAgICB2YXIgd2luUGFkID0gdGhpcy5vcHRpb25zLndpbmRvd1BhZGRpbmc7XHJcbiAgICBpZiAodHlwZW9mIHdpblBhZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLndpbmRvd1BhZGRpbmcgPSBbd2luUGFkLCB3aW5QYWQsIHdpblBhZCwgd2luUGFkXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHBvc2UgcHVibGljIG1ldGhvZHNcclxuICAgIHRoaXMudmFsID0gU2VsZWN0cGlja2VyLnByb3RvdHlwZS52YWw7XHJcbiAgICB0aGlzLnJlbmRlciA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUucmVuZGVyO1xyXG4gICAgdGhpcy5yZWZyZXNoID0gU2VsZWN0cGlja2VyLnByb3RvdHlwZS5yZWZyZXNoO1xyXG4gICAgdGhpcy5zZXRTdHlsZSA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUuc2V0U3R5bGU7XHJcbiAgICB0aGlzLnNlbGVjdEFsbCA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUuc2VsZWN0QWxsO1xyXG4gICAgdGhpcy5kZXNlbGVjdEFsbCA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUuZGVzZWxlY3RBbGw7XHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBTZWxlY3RwaWNrZXIucHJvdG90eXBlLmRlc3Ryb3k7XHJcbiAgICB0aGlzLnJlbW92ZSA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUucmVtb3ZlO1xyXG4gICAgdGhpcy5zaG93ID0gU2VsZWN0cGlja2VyLnByb3RvdHlwZS5zaG93O1xyXG4gICAgdGhpcy5oaWRlID0gU2VsZWN0cGlja2VyLnByb3RvdHlwZS5oaWRlO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH07XHJcblxyXG4gIFNlbGVjdHBpY2tlci5WRVJTSU9OID0gJzEuMTMuMTInO1xyXG5cclxuICAvLyBwYXJ0IG9mIHRoaXMgaXMgZHVwbGljYXRlZCBpbiBpMThuL2RlZmF1bHRzLWVuX1VTLmpzLiBNYWtlIHN1cmUgdG8gdXBkYXRlIGJvdGguXHJcbiAgU2VsZWN0cGlja2VyLkRFRkFVTFRTID0ge1xyXG4gICAgbm9uZVNlbGVjdGVkVGV4dDogJ05vdGhpbmcgc2VsZWN0ZWQnLFxyXG4gICAgbm9uZVJlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBtYXRjaGVkIHswfScsXHJcbiAgICBjb3VudFNlbGVjdGVkVGV4dDogZnVuY3Rpb24gKG51bVNlbGVjdGVkLCBudW1Ub3RhbCkge1xyXG4gICAgICByZXR1cm4gKG51bVNlbGVjdGVkID09IDEpID8gJ3swfSBpdGVtIHNlbGVjdGVkJyA6ICd7MH0gaXRlbXMgc2VsZWN0ZWQnO1xyXG4gICAgfSxcclxuICAgIG1heE9wdGlvbnNUZXh0OiBmdW5jdGlvbiAobnVtQWxsLCBudW1Hcm91cCkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIChudW1BbGwgPT0gMSkgPyAnTGltaXQgcmVhY2hlZCAoe259IGl0ZW0gbWF4KScgOiAnTGltaXQgcmVhY2hlZCAoe259IGl0ZW1zIG1heCknLFxyXG4gICAgICAgIChudW1Hcm91cCA9PSAxKSA/ICdHcm91cCBsaW1pdCByZWFjaGVkICh7bn0gaXRlbSBtYXgpJyA6ICdHcm91cCBsaW1pdCByZWFjaGVkICh7bn0gaXRlbXMgbWF4KSdcclxuICAgICAgXTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXHJcbiAgICBkZXNlbGVjdEFsbFRleHQ6ICdEZXNlbGVjdCBBbGwnLFxyXG4gICAgZG9uZUJ1dHRvbjogZmFsc2UsXHJcbiAgICBkb25lQnV0dG9uVGV4dDogJ0Nsb3NlJyxcclxuICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG4gICAgc3R5bGVCYXNlOiAnYnRuJyxcclxuICAgIHN0eWxlOiBjbGFzc05hbWVzLkJVVFRPTkNMQVNTLFxyXG4gICAgc2l6ZTogJ2F1dG8nLFxyXG4gICAgdGl0bGU6IG51bGwsXHJcbiAgICBzZWxlY3RlZFRleHRGb3JtYXQ6ICd2YWx1ZXMnLFxyXG4gICAgd2lkdGg6IGZhbHNlLFxyXG4gICAgY29udGFpbmVyOiBmYWxzZSxcclxuICAgIGhpZGVEaXNhYmxlZDogZmFsc2UsXHJcbiAgICBzaG93U3VidGV4dDogZmFsc2UsXHJcbiAgICBzaG93SWNvbjogdHJ1ZSxcclxuICAgIHNob3dDb250ZW50OiB0cnVlLFxyXG4gICAgZHJvcHVwQXV0bzogdHJ1ZSxcclxuICAgIGhlYWRlcjogZmFsc2UsXHJcbiAgICBsaXZlU2VhcmNoOiBmYWxzZSxcclxuICAgIGxpdmVTZWFyY2hQbGFjZWhvbGRlcjogbnVsbCxcclxuICAgIGxpdmVTZWFyY2hOb3JtYWxpemU6IGZhbHNlLFxyXG4gICAgbGl2ZVNlYXJjaFN0eWxlOiAnY29udGFpbnMnLFxyXG4gICAgYWN0aW9uc0JveDogZmFsc2UsXHJcbiAgICBpY29uQmFzZTogY2xhc3NOYW1lcy5JQ09OQkFTRSxcclxuICAgIHRpY2tJY29uOiBjbGFzc05hbWVzLlRJQ0tJQ09OLFxyXG4gICAgc2hvd1RpY2s6IGZhbHNlLFxyXG4gICAgdGVtcGxhdGU6IHtcclxuICAgICAgY2FyZXQ6ICc8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPidcclxuICAgIH0sXHJcbiAgICBtYXhPcHRpb25zOiBmYWxzZSxcclxuICAgIG1vYmlsZTogZmFsc2UsXHJcbiAgICBzZWxlY3RPblRhYjogZmFsc2UsXHJcbiAgICBkcm9wZG93bkFsaWduUmlnaHQ6IGZhbHNlLFxyXG4gICAgd2luZG93UGFkZGluZzogMCxcclxuICAgIHZpcnR1YWxTY3JvbGw6IDYwMCxcclxuICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgc2FuaXRpemU6IHRydWUsXHJcbiAgICBzYW5pdGl6ZUZuOiBudWxsLFxyXG4gICAgd2hpdGVMaXN0OiBEZWZhdWx0V2hpdGVsaXN0XHJcbiAgfTtcclxuXHJcbiAgU2VsZWN0cGlja2VyLnByb3RvdHlwZSA9IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogU2VsZWN0cGlja2VyLFxyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgaWQgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICBzZWxlY3RJZCsrO1xyXG4gICAgICB0aGlzLnNlbGVjdElkID0gJ2JzLXNlbGVjdC0nICsgc2VsZWN0SWQ7XHJcblxyXG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoJ2JzLXNlbGVjdC1oaWRkZW4nKTtcclxuXHJcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB0aGlzLiRlbGVtZW50LnByb3AoJ211bHRpcGxlJyk7XHJcbiAgICAgIHRoaXMuYXV0b2ZvY3VzID0gdGhpcy4kZWxlbWVudC5wcm9wKCdhdXRvZm9jdXMnKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmNsYXNzTGlzdC5jb250YWlucygnc2hvdy10aWNrJykpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd1RpY2sgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiRuZXdFbGVtZW50ID0gdGhpcy5jcmVhdGVEcm9wZG93bigpO1xyXG4gICAgICB0aGlzLiRlbGVtZW50XHJcbiAgICAgICAgLmFmdGVyKHRoaXMuJG5ld0VsZW1lbnQpXHJcbiAgICAgICAgLnByZXBlbmRUbyh0aGlzLiRuZXdFbGVtZW50KTtcclxuXHJcbiAgICAgIHRoaXMuJGJ1dHRvbiA9IHRoaXMuJG5ld0VsZW1lbnQuY2hpbGRyZW4oJ2J1dHRvbicpO1xyXG4gICAgICB0aGlzLiRtZW51ID0gdGhpcy4kbmV3RWxlbWVudC5jaGlsZHJlbihTZWxlY3Rvci5NRU5VKTtcclxuICAgICAgdGhpcy4kbWVudUlubmVyID0gdGhpcy4kbWVudS5jaGlsZHJlbignLmlubmVyJyk7XHJcbiAgICAgIHRoaXMuJHNlYXJjaGJveCA9IHRoaXMuJG1lbnUuZmluZCgnaW5wdXQnKTtcclxuXHJcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYnMtc2VsZWN0LWhpZGRlbicpO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bkFsaWduUmlnaHQgPT09IHRydWUpIHRoaXMuJG1lbnVbMF0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLk1FTlVSSUdIVCk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGlkICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRoaXMuJGJ1dHRvbi5hdHRyKCdkYXRhLWlkJywgaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcclxuICAgICAgdGhpcy5jbGlja0xpc3RlbmVyKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxpdmVTZWFyY2gpIHtcclxuICAgICAgICB0aGlzLmxpdmVTZWFyY2hMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZFBhcmVudCA9IHRoaXMuJHNlYXJjaGJveFswXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvY3VzZWRQYXJlbnQgPSB0aGlzLiRtZW51SW5uZXJbMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3R5bGUoKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgdGhpcy5zZXRXaWR0aCgpO1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UG9zaXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdoaWRlJyArIEVWRU5UX0tFWSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHRoYXQuaXNWaXJ0dWFsKCkpIHtcclxuICAgICAgICAgICAgLy8gZW1wdHkgbWVudSBvbiBjbG9zZVxyXG4gICAgICAgICAgICB2YXIgbWVudUlubmVyID0gdGhhdC4kbWVudUlubmVyWzBdLFxyXG4gICAgICAgICAgICAgICAgZW1wdHlNZW51ID0gbWVudUlubmVyLmZpcnN0Q2hpbGQuY2xvbmVOb2RlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIGV4aXN0aW5nIFVMIHdpdGggYW4gZW1wdHkgb25lIC0gdGhpcyBpcyBmYXN0ZXIgdGhhbiAkLmVtcHR5KCkgb3IgaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgbWVudUlubmVyLnJlcGxhY2VDaGlsZChlbXB0eU1lbnUsIG1lbnVJbm5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgbWVudUlubmVyLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kbWVudS5kYXRhKCd0aGlzJywgdGhpcyk7XHJcbiAgICAgIHRoaXMuJG5ld0VsZW1lbnQuZGF0YSgndGhpcycsIHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1vYmlsZSkgdGhpcy5tb2JpbGUoKTtcclxuXHJcbiAgICAgIHRoaXMuJG5ld0VsZW1lbnQub24oe1xyXG4gICAgICAgICdoaWRlLmJzLmRyb3Bkb3duJzogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignaGlkZScgKyBFVkVOVF9LRVksIGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2hpZGRlbi5icy5kcm9wZG93bic6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2hpZGRlbicgKyBFVkVOVF9LRVksIGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3Nob3cuYnMuZHJvcGRvd24nOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdzaG93JyArIEVWRU5UX0tFWSwgZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc2hvd24uYnMuZHJvcGRvd24nOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdzaG93bicgKyBFVkVOVF9LRVksIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhhdC4kZWxlbWVudFswXS5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJykpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdpbnZhbGlkJyArIEVWRU5UX0tFWSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGhhdC4kYnV0dG9uWzBdLmNsYXNzTGlzdC5hZGQoJ2JzLWludmFsaWQnKTtcclxuXHJcbiAgICAgICAgICB0aGF0LiRlbGVtZW50XHJcbiAgICAgICAgICAgIC5vbignc2hvd24nICsgRVZFTlRfS0VZICsgJy5pbnZhbGlkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHRoYXQuJGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC52YWwodGhhdC4kZWxlbWVudC52YWwoKSkgLy8gc2V0IHRoZSB2YWx1ZSB0byBoaWRlIHRoZSB2YWxpZGF0aW9uIG1lc3NhZ2UgaW4gQ2hyb21lIHdoZW4gbWVudSBpcyBvcGVuZWRcclxuICAgICAgICAgICAgICAgIC5vZmYoJ3Nob3duJyArIEVWRU5UX0tFWSArICcuaW52YWxpZCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ3JlbmRlcmVkJyArIEVWRU5UX0tFWSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIC8vIGlmIHNlbGVjdCBpcyBubyBsb25nZXIgaW52YWxpZCwgcmVtb3ZlIHRoZSBicy1pbnZhbGlkIGNsYXNzXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRpdHkudmFsaWQpIHRoYXQuJGJ1dHRvblswXS5jbGFzc0xpc3QucmVtb3ZlKCdicy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgdGhhdC4kZWxlbWVudC5vZmYoJ3JlbmRlcmVkJyArIEVWRU5UX0tFWSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHRoYXQuJGJ1dHRvbi5vbignYmx1cicgKyBFVkVOVF9LRVksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdmb2N1cycpLnRyaWdnZXIoJ2JsdXInKTtcclxuICAgICAgICAgICAgdGhhdC4kYnV0dG9uLm9mZignYmx1cicgKyBFVkVOVF9LRVkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoYXQuY3JlYXRlTGkoKTtcclxuICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2xvYWRlZCcgKyBFVkVOVF9LRVkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlRHJvcGRvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICAvLyBJZiB3ZSBhcmUgbXVsdGlwbGUgb3Igc2hvd1RpY2sgb3B0aW9uIGlzIHNldCwgdGhlbiBhZGQgdGhlIHNob3ctdGljayBjbGFzc1xyXG4gICAgICB2YXIgc2hvd1RpY2sgPSAodGhpcy5tdWx0aXBsZSB8fCB0aGlzLm9wdGlvbnMuc2hvd1RpY2spID8gJyBzaG93LXRpY2snIDogJycsXHJcbiAgICAgICAgICBtdWx0aXNlbGVjdGFibGUgPSB0aGlzLm11bHRpcGxlID8gJyBhcmlhLW11bHRpc2VsZWN0YWJsZT1cInRydWVcIicgOiAnJyxcclxuICAgICAgICAgIGlucHV0R3JvdXAgPSAnJyxcclxuICAgICAgICAgIGF1dG9mb2N1cyA9IHRoaXMuYXV0b2ZvY3VzID8gJyBhdXRvZm9jdXMnIDogJyc7XHJcblxyXG4gICAgICBpZiAodmVyc2lvbi5tYWpvciA8IDQgJiYgdGhpcy4kZWxlbWVudC5wYXJlbnQoKS5oYXNDbGFzcygnaW5wdXQtZ3JvdXAnKSkge1xyXG4gICAgICAgIGlucHV0R3JvdXAgPSAnIGlucHV0LWdyb3VwLWJ0bic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEVsZW1lbnRzXHJcbiAgICAgIHZhciBkcm9wLFxyXG4gICAgICAgICAgaGVhZGVyID0gJycsXHJcbiAgICAgICAgICBzZWFyY2hib3ggPSAnJyxcclxuICAgICAgICAgIGFjdGlvbnNib3ggPSAnJyxcclxuICAgICAgICAgIGRvbmVidXR0b24gPSAnJztcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGVhZGVyKSB7XHJcbiAgICAgICAgaGVhZGVyID1cclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiJyArIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUiArICdcIj4nICtcclxuICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9idXR0b24+JyArXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmhlYWRlciArXHJcbiAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5saXZlU2VhcmNoKSB7XHJcbiAgICAgICAgc2VhcmNoYm94ID1cclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYnMtc2VhcmNoYm94XCI+JyArXHJcbiAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCInICtcclxuICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubGl2ZVNlYXJjaFBsYWNlaG9sZGVyID09PSBudWxsID8gJydcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICcgcGxhY2Vob2xkZXI9XCInICsgaHRtbEVzY2FwZSh0aGlzLm9wdGlvbnMubGl2ZVNlYXJjaFBsYWNlaG9sZGVyKSArICdcIidcclxuICAgICAgICAgICAgICApICtcclxuICAgICAgICAgICAgICAnIHJvbGU9XCJjb21ib2JveFwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHRoaXMuc2VsZWN0SWQgKyAnXCIgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCI+JyArXHJcbiAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5vcHRpb25zLmFjdGlvbnNCb3gpIHtcclxuICAgICAgICBhY3Rpb25zYm94ID1cclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYnMtYWN0aW9uc2JveFwiPicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc20gYnRuLWJsb2NrXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWN0aW9ucy1idG4gYnMtc2VsZWN0LWFsbCBidG4gJyArIGNsYXNzTmFtZXMuQlVUVE9OQ0xBU1MgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VsZWN0QWxsVGV4dCArXHJcbiAgICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFjdGlvbnMtYnRuIGJzLWRlc2VsZWN0LWFsbCBidG4gJyArIGNsYXNzTmFtZXMuQlVUVE9OQ0xBU1MgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZGVzZWxlY3RBbGxUZXh0ICtcclxuICAgICAgICAgICAgICAnPC9idXR0b24+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLm9wdGlvbnMuZG9uZUJ1dHRvbikge1xyXG4gICAgICAgIGRvbmVidXR0b24gPVxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJicy1kb25lYnV0dG9uXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ibG9ja1wiPicgK1xyXG4gICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gJyArIGNsYXNzTmFtZXMuQlVUVE9OQ0xBU1MgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZG9uZUJ1dHRvblRleHQgK1xyXG4gICAgICAgICAgICAgICc8L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRyb3AgPVxyXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZHJvcGRvd24gYm9vdHN0cmFwLXNlbGVjdCcgKyBzaG93VGljayArIGlucHV0R3JvdXAgKyAnXCI+JyArXHJcbiAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgdGhpcy5vcHRpb25zLnN0eWxlQmFzZSArICcgZHJvcGRvd24tdG9nZ2xlXCIgJyArICh0aGlzLm9wdGlvbnMuZGlzcGxheSA9PT0gJ3N0YXRpYycgPyAnZGF0YS1kaXNwbGF5PVwic3RhdGljXCInIDogJycpICsgJ2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIicgKyBhdXRvZm9jdXMgKyAnIHJvbGU9XCJjb21ib2JveFwiIGFyaWEtb3ducz1cIicgKyB0aGlzLnNlbGVjdElkICsgJ1wiIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmlsdGVyLW9wdGlvblwiPicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmlsdGVyLW9wdGlvbi1pbm5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmaWx0ZXItb3B0aW9uLWlubmVyLWlubmVyXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PiAnICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgdmVyc2lvbi5tYWpvciA9PT0gJzQnID8gJydcclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiYnMtY2FyZXRcIj4nICtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50ZW1wbGF0ZS5jYXJldCArXHJcbiAgICAgICAgICAgICAgJzwvc3Bhbj4nXHJcbiAgICAgICAgICAgICkgK1xyXG4gICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCInICsgY2xhc3NOYW1lcy5NRU5VICsgJyAnICsgKHZlcnNpb24ubWFqb3IgPT09ICc0JyA/ICcnIDogY2xhc3NOYW1lcy5TSE9XKSArICdcIj4nICtcclxuICAgICAgICAgICAgaGVhZGVyICtcclxuICAgICAgICAgICAgc2VhcmNoYm94ICtcclxuICAgICAgICAgICAgYWN0aW9uc2JveCArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW5uZXIgJyArIGNsYXNzTmFtZXMuU0hPVyArICdcIiByb2xlPVwibGlzdGJveFwiIGlkPVwiJyArIHRoaXMuc2VsZWN0SWQgKyAnXCIgdGFiaW5kZXg9XCItMVwiICcgKyBtdWx0aXNlbGVjdGFibGUgKyAnPicgK1xyXG4gICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cIicgKyBjbGFzc05hbWVzLk1FTlUgKyAnIGlubmVyICcgKyAodmVyc2lvbi5tYWpvciA9PT0gJzQnID8gY2xhc3NOYW1lcy5TSE9XIDogJycpICsgJ1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nICtcclxuICAgICAgICAgICAgICAgICc8L3VsPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgIGRvbmVidXR0b24gK1xyXG4gICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgcmV0dXJuICQoZHJvcCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFBvc2l0aW9uRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodCA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci52aWV3LnNpemUgPSAwO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgbGkgPSB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbaV0sXHJcbiAgICAgICAgICAgIGNhbkhpZ2hsaWdodCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChsaS50eXBlID09PSAnZGl2aWRlcicpIHtcclxuICAgICAgICAgIGNhbkhpZ2hsaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgbGkuaGVpZ2h0ID0gdGhpcy5zaXplSW5mby5kaXZpZGVySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGkudHlwZSA9PT0gJ29wdGdyb3VwLWxhYmVsJykge1xyXG4gICAgICAgICAgY2FuSGlnaGxpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICBsaS5oZWlnaHQgPSB0aGlzLnNpemVJbmZvLmRyb3Bkb3duSGVhZGVySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsaS5oZWlnaHQgPSB0aGlzLnNpemVJbmZvLmxpSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxpLmRpc2FibGVkKSBjYW5IaWdobGlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RwaWNrZXIudmlldy5jYW5IaWdobGlnaHQucHVzaChjYW5IaWdobGlnaHQpO1xyXG5cclxuICAgICAgICBpZiAoY2FuSGlnaGxpZ2h0KSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdHBpY2tlci52aWV3LnNpemUrKztcclxuICAgICAgICAgIGxpLnBvc2luc2V0ID0gdGhpcy5zZWxlY3RwaWNrZXIudmlldy5zaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkucG9zaXRpb24gPSAoaSA9PT0gMCA/IDAgOiB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbaSAtIDFdLnBvc2l0aW9uKSArIGxpLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpc1ZpcnR1YWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMudmlydHVhbFNjcm9sbCAhPT0gZmFsc2UpICYmICh0aGlzLnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzLmxlbmd0aCA+PSB0aGlzLm9wdGlvbnMudmlydHVhbFNjcm9sbCkgfHwgdGhpcy5vcHRpb25zLnZpcnR1YWxTY3JvbGwgPT09IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVZpZXc6IGZ1bmN0aW9uIChpc1NlYXJjaGluZywgc2V0U2l6ZSwgcmVmcmVzaCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXHJcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLFxyXG4gICAgICAgICAgYWN0aXZlID0gW10sXHJcbiAgICAgICAgICBzZWxlY3RlZCxcclxuICAgICAgICAgIHByZXZBY3RpdmU7XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50ID0gaXNTZWFyY2hpbmcgPyB0aGlzLnNlbGVjdHBpY2tlci5zZWFyY2ggOiB0aGlzLnNlbGVjdHBpY2tlci5tYWluO1xyXG5cclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbkRhdGEoKTtcclxuXHJcbiAgICAgIGlmIChzZXRTaXplKSB7XHJcbiAgICAgICAgaWYgKHJlZnJlc2gpIHtcclxuICAgICAgICAgIHNjcm9sbFRvcCA9IHRoaXMuJG1lbnVJbm5lclswXS5zY3JvbGxUb3A7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhhdC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGF0LiRlbGVtZW50WzBdLFxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSAoZWxlbWVudC5vcHRpb25zW2VsZW1lbnQuc2VsZWN0ZWRJbmRleF0gfHwge30pLmxpSW5kZXg7XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RlZEluZGV4ID09PSAnbnVtYmVyJyAmJiB0aGF0Lm9wdGlvbnMuc2l6ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkRGF0YSA9IHRoYXQuc2VsZWN0cGlja2VyLm1haW4uZGF0YVtzZWxlY3RlZEluZGV4XSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VsZWN0ZWREYXRhICYmIHNlbGVjdGVkRGF0YS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgIHNjcm9sbFRvcCA9IHBvc2l0aW9uIC0gKCh0aGF0LnNpemVJbmZvLm1lbnVJbm5lckhlaWdodCArIHRoYXQuc2l6ZUluZm8ubGlIZWlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNjcm9sbChzY3JvbGxUb3AsIHRydWUpO1xyXG5cclxuICAgICAgdGhpcy4kbWVudUlubmVyLm9mZignc2Nyb2xsLmNyZWF0ZVZpZXcnKS5vbignc2Nyb2xsLmNyZWF0ZVZpZXcnLCBmdW5jdGlvbiAoZSwgdXBkYXRlVmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoYXQubm9TY3JvbGwpIHNjcm9sbCh0aGlzLnNjcm9sbFRvcCwgdXBkYXRlVmFsdWUpO1xyXG4gICAgICAgIHRoYXQubm9TY3JvbGwgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzY3JvbGwgKHNjcm9sbFRvcCwgaW5pdCkge1xyXG4gICAgICAgIHZhciBzaXplID0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5lbGVtZW50cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGNodW5rcyA9IFtdLFxyXG4gICAgICAgICAgICBjaHVua1NpemUsXHJcbiAgICAgICAgICAgIGNodW5rQ291bnQsXHJcbiAgICAgICAgICAgIGZpcnN0Q2h1bmssXHJcbiAgICAgICAgICAgIGxhc3RDaHVuayxcclxuICAgICAgICAgICAgY3VycmVudENodW5rLFxyXG4gICAgICAgICAgICBwcmV2UG9zaXRpb25zLFxyXG4gICAgICAgICAgICBwb3NpdGlvbklzRGlmZmVyZW50LFxyXG4gICAgICAgICAgICBwcmV2aW91c0VsZW1lbnRzLFxyXG4gICAgICAgICAgICBtZW51SXNEaWZmZXJlbnQgPSB0cnVlLFxyXG4gICAgICAgICAgICBpc1ZpcnR1YWwgPSB0aGF0LmlzVmlydHVhbCgpO1xyXG5cclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgY2h1bmtTaXplID0gTWF0aC5jZWlsKHRoYXQuc2l6ZUluZm8ubWVudUlubmVySGVpZ2h0IC8gdGhhdC5zaXplSW5mby5saUhlaWdodCAqIDEuNSk7IC8vIG51bWJlciBvZiBvcHRpb25zIGluIGEgY2h1bmtcclxuICAgICAgICBjaHVua0NvdW50ID0gTWF0aC5yb3VuZChzaXplIC8gY2h1bmtTaXplKSB8fCAxOyAvLyBudW1iZXIgb2YgY2h1bmtzXHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2h1bmtDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgZW5kT2ZDaHVuayA9IChpICsgMSkgKiBjaHVua1NpemU7XHJcblxyXG4gICAgICAgICAgaWYgKGkgPT09IGNodW5rQ291bnQgLSAxKSB7XHJcbiAgICAgICAgICAgIGVuZE9mQ2h1bmsgPSBzaXplO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNodW5rc1tpXSA9IFtcclxuICAgICAgICAgICAgKGkpICogY2h1bmtTaXplICsgKCFpID8gMCA6IDEpLFxyXG4gICAgICAgICAgICBlbmRPZkNodW5rXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIGlmICghc2l6ZSkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA9PT0gdW5kZWZpbmVkICYmIHNjcm9sbFRvcCAtIDEgPD0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2VuZE9mQ2h1bmsgLSAxXS5wb3NpdGlvbiAtIHRoYXQuc2l6ZUluZm8ubWVudUlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDaHVuayA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudENodW5rID09PSB1bmRlZmluZWQpIGN1cnJlbnRDaHVuayA9IDA7XHJcblxyXG4gICAgICAgIHByZXZQb3NpdGlvbnMgPSBbdGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjAsIHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24xXTtcclxuXHJcbiAgICAgICAgLy8gYWx3YXlzIGRpc3BsYXkgcHJldmlvdXMsIGN1cnJlbnQsIGFuZCBuZXh0IGNodW5rc1xyXG4gICAgICAgIGZpcnN0Q2h1bmsgPSBNYXRoLm1heCgwLCBjdXJyZW50Q2h1bmsgLSAxKTtcclxuICAgICAgICBsYXN0Q2h1bmsgPSBNYXRoLm1pbihjaHVua0NvdW50IC0gMSwgY3VycmVudENodW5rICsgMSk7XHJcblxyXG4gICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wID0gaXNWaXJ0dWFsID09PSBmYWxzZSA/IDAgOiAoTWF0aC5tYXgoMCwgY2h1bmtzW2ZpcnN0Q2h1bmtdWzBdKSB8fCAwKTtcclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMSA9IGlzVmlydHVhbCA9PT0gZmFsc2UgPyBzaXplIDogKE1hdGgubWluKHNpemUsIGNodW5rc1tsYXN0Q2h1bmtdWzFdKSB8fCAwKTtcclxuXHJcbiAgICAgICAgcG9zaXRpb25Jc0RpZmZlcmVudCA9IHByZXZQb3NpdGlvbnNbMF0gIT09IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wIHx8IHByZXZQb3NpdGlvbnNbMV0gIT09IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24xO1xyXG5cclxuICAgICAgICBpZiAodGhhdC5hY3RpdmVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBwcmV2QWN0aXZlID0gdGhhdC5zZWxlY3RwaWNrZXIubWFpbi5lbGVtZW50c1t0aGF0LnByZXZBY3RpdmVJbmRleF07XHJcbiAgICAgICAgICBhY3RpdmUgPSB0aGF0LnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzW3RoYXQuYWN0aXZlSW5kZXhdO1xyXG4gICAgICAgICAgc2VsZWN0ZWQgPSB0aGF0LnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzW3RoYXQuc2VsZWN0ZWRJbmRleF07XHJcblxyXG4gICAgICAgICAgaWYgKGluaXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoYXQuYWN0aXZlSW5kZXggIT09IHRoYXQuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgICAgICAgIHRoYXQuZGVmb2N1c0l0ZW0oYWN0aXZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LmFjdGl2ZUluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGF0LmFjdGl2ZUluZGV4ICYmIHRoYXQuYWN0aXZlSW5kZXggIT09IHRoYXQuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgICAgICB0aGF0LmRlZm9jdXNJdGVtKHNlbGVjdGVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGF0LnByZXZBY3RpdmVJbmRleCAhPT0gdW5kZWZpbmVkICYmIHRoYXQucHJldkFjdGl2ZUluZGV4ICE9PSB0aGF0LmFjdGl2ZUluZGV4ICYmIHRoYXQucHJldkFjdGl2ZUluZGV4ICE9PSB0aGF0LnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICAgIHRoYXQuZGVmb2N1c0l0ZW0ocHJldkFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5pdCB8fCBwb3NpdGlvbklzRGlmZmVyZW50KSB7XHJcbiAgICAgICAgICBwcmV2aW91c0VsZW1lbnRzID0gdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMgPyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnZpc2libGVFbGVtZW50cy5zbGljZSgpIDogW107XHJcblxyXG4gICAgICAgICAgaWYgKGlzVmlydHVhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMgPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMgPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzLnNsaWNlKHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wLCB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhhdC5zZXRPcHRpb25TdGF0dXMoKTtcclxuXHJcbiAgICAgICAgICAvLyBpZiBzZWFyY2hpbmcsIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgbGlzdCBoYXMgYWN0dWFsbHkgYmVlbiB1cGRhdGVkIGJlZm9yZSB1cGRhdGluZyBET01cclxuICAgICAgICAgIC8vIHRoaXMgcHJldmVudHMgdW5uZWNlc3NhcnkgcmVwYWludHNcclxuICAgICAgICAgIGlmIChpc1NlYXJjaGluZyB8fCAoaXNWaXJ0dWFsID09PSBmYWxzZSAmJiBpbml0KSkgbWVudUlzRGlmZmVyZW50ID0gIWlzRXF1YWwocHJldmlvdXNFbGVtZW50cywgdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMpO1xyXG5cclxuICAgICAgICAgIC8vIGlmIHZpcnR1YWwgc2Nyb2xsIGlzIGRpc2FibGVkIGFuZCBub3Qgc2VhcmNoaW5nLFxyXG4gICAgICAgICAgLy8gbWVudSBzaG91bGQgbmV2ZXIgbmVlZCB0byBiZSB1cGRhdGVkIG1vcmUgdGhhbiBvbmNlXHJcbiAgICAgICAgICBpZiAoKGluaXQgfHwgaXNWaXJ0dWFsID09PSB0cnVlKSAmJiBtZW51SXNEaWZmZXJlbnQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbnVJbm5lciA9IHRoYXQuJG1lbnVJbm5lclswXSxcclxuICAgICAgICAgICAgICAgIG1lbnVGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgICAgICAgIGVtcHR5TWVudSA9IG1lbnVJbm5lci5maXJzdENoaWxkLmNsb25lTm9kZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3AsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20sXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcudmlzaWJsZUVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgdG9TYW5pdGl6ZSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZXhpc3RpbmcgVUwgd2l0aCBhbiBlbXB0eSBvbmUgLSB0aGlzIGlzIGZhc3RlciB0aGFuICQuZW1wdHkoKVxyXG4gICAgICAgICAgICBtZW51SW5uZXIucmVwbGFjZUNoaWxkKGVtcHR5TWVudSwgbWVudUlubmVyLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHZpc2libGVFbGVtZW50c0xlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IHZpc2libGVFbGVtZW50c0xlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1tpXSxcclxuICAgICAgICAgICAgICAgICAgZWxUZXh0LFxyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50RGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5zYW5pdGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgZWxUZXh0ID0gZWxlbWVudC5sYXN0Q2hpbGQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50RGF0YSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtpICsgdGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnREYXRhICYmIGVsZW1lbnREYXRhLmNvbnRlbnQgJiYgIWVsZW1lbnREYXRhLnNhbml0aXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvU2FuaXRpemUucHVzaChlbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnREYXRhLnNhbml0aXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIG1lbnVGcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5zYW5pdGl6ZSAmJiB0b1Nhbml0aXplLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHNhbml0aXplSHRtbCh0b1Nhbml0aXplLCB0aGF0Lm9wdGlvbnMud2hpdGVMaXN0LCB0aGF0Lm9wdGlvbnMuc2FuaXRpemVGbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc1ZpcnR1YWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSAodGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjAgPT09IDAgPyAwIDogdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW3RoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wIC0gMV0ucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9ICh0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMSA+IHNpemUgLSAxID8gMCA6IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtzaXplIC0gMV0ucG9zaXRpb24gLSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbdGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjEgLSAxXS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgIG1lbnVJbm5lci5maXJzdENoaWxkLnN0eWxlLm1hcmdpblRvcCA9IG1hcmdpblRvcCArICdweCc7XHJcbiAgICAgICAgICAgICAgbWVudUlubmVyLmZpcnN0Q2hpbGQuc3R5bGUubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBtZW51SW5uZXIuZmlyc3RDaGlsZC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgICAgICAgICAgIG1lbnVJbm5lci5maXJzdENoaWxkLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1lbnVJbm5lci5maXJzdENoaWxkLmFwcGVuZENoaWxkKG1lbnVGcmFnbWVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBhbiBvcHRpb24gaXMgZW5jb3VudGVyZWQgdGhhdCBpcyB3aWRlciB0aGFuIHRoZSBjdXJyZW50IG1lbnUgd2lkdGgsIHVwZGF0ZSB0aGUgbWVudSB3aWR0aCBhY2NvcmRpbmdseVxyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggdG8gUmVzaXplT2JzZXJ2ZXIgd2l0aCBpbmNyZWFzZWQgYnJvd3NlciBzdXBwb3J0XHJcbiAgICAgICAgICAgIGlmIChpc1ZpcnR1YWwgPT09IHRydWUgJiYgdGhhdC5zaXplSW5mby5oYXNTY3JvbGxCYXIpIHtcclxuICAgICAgICAgICAgICB2YXIgbWVudUlubmVySW5uZXJXaWR0aCA9IG1lbnVJbm5lci5maXJzdENoaWxkLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoaW5pdCAmJiBtZW51SW5uZXJJbm5lcldpZHRoIDwgdGhhdC5zaXplSW5mby5tZW51SW5uZXJJbm5lcldpZHRoICYmIHRoYXQuc2l6ZUluZm8udG90YWxNZW51V2lkdGggPiB0aGF0LnNpemVJbmZvLnNlbGVjdFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51SW5uZXIuZmlyc3RDaGlsZC5zdHlsZS5taW5XaWR0aCA9IHRoYXQuc2l6ZUluZm8ubWVudUlubmVySW5uZXJXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChtZW51SW5uZXJJbm5lcldpZHRoID4gdGhhdC5zaXplSW5mby5tZW51SW5uZXJJbm5lcldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgdG8gMCB0byBnZXQgYWN0dWFsIHdpZHRoIG9mIG1lbnVcclxuICAgICAgICAgICAgICAgIHRoYXQuJG1lbnVbMF0uc3R5bGUubWluV2lkdGggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhY3R1YWxNZW51V2lkdGggPSBtZW51SW5uZXIuZmlyc3RDaGlsZC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsTWVudVdpZHRoID4gdGhhdC5zaXplSW5mby5tZW51SW5uZXJJbm5lcldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2l6ZUluZm8ubWVudUlubmVySW5uZXJXaWR0aCA9IGFjdHVhbE1lbnVXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgbWVudUlubmVyLmZpcnN0Q2hpbGQuc3R5bGUubWluV2lkdGggPSB0aGF0LnNpemVJbmZvLm1lbnVJbm5lcklubmVyV2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRvIGRlZmF1bHQgQ1NTIHN0eWxpbmdcclxuICAgICAgICAgICAgICAgIHRoYXQuJG1lbnVbMF0uc3R5bGUubWluV2lkdGggPSAnJztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoYXQucHJldkFjdGl2ZUluZGV4ID0gdGhhdC5hY3RpdmVJbmRleDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgdGhhdC4kbWVudUlubmVyLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1NlYXJjaGluZyAmJiBpbml0KSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSAwLFxyXG4gICAgICAgICAgICAgIG5ld0FjdGl2ZTtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoYXQuc2VsZWN0cGlja2VyLnZpZXcuY2FuSGlnaGxpZ2h0W2luZGV4XSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IDEgKyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodC5zbGljZSgxKS5pbmRleE9mKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5ld0FjdGl2ZSA9IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcudmlzaWJsZUVsZW1lbnRzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICB0aGF0LmRlZm9jdXNJdGVtKHRoYXQuc2VsZWN0cGlja2VyLnZpZXcuY3VycmVudEFjdGl2ZSk7XHJcblxyXG4gICAgICAgICAgdGhhdC5hY3RpdmVJbmRleCA9ICh0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbaW5kZXhdIHx8IHt9KS5pbmRleDtcclxuXHJcbiAgICAgICAgICB0aGF0LmZvY3VzSXRlbShuZXdBY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJCh3aW5kb3cpXHJcbiAgICAgICAgLm9mZigncmVzaXplJyArIEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQgKyAnLmNyZWF0ZVZpZXcnKVxyXG4gICAgICAgIC5vbigncmVzaXplJyArIEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQgKyAnLmNyZWF0ZVZpZXcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgaXNBY3RpdmUgPSB0aGF0LiRuZXdFbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZXMuU0hPVyk7XHJcblxyXG4gICAgICAgICAgaWYgKGlzQWN0aXZlKSBzY3JvbGwodGhhdC4kbWVudUlubmVyWzBdLnNjcm9sbFRvcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZvY3VzSXRlbTogZnVuY3Rpb24gKGxpLCBsaURhdGEsIG5vU3R5bGUpIHtcclxuICAgICAgaWYgKGxpKSB7XHJcbiAgICAgICAgbGlEYXRhID0gbGlEYXRhIHx8IHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZGF0YVt0aGlzLmFjdGl2ZUluZGV4XTtcclxuICAgICAgICB2YXIgYSA9IGxpLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgnYXJpYS1zZXRzaXplJywgdGhpcy5zZWxlY3RwaWNrZXIudmlldy5zaXplKTtcclxuICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdhcmlhLXBvc2luc2V0JywgbGlEYXRhLnBvc2luc2V0KTtcclxuXHJcbiAgICAgICAgICBpZiAobm9TdHlsZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRQYXJlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBhLmlkKTtcclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRlZm9jdXNJdGVtOiBmdW5jdGlvbiAobGkpIHtcclxuICAgICAgaWYgKGxpKSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGxpLmZpcnN0Q2hpbGQpIGxpLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0UGxhY2Vob2xkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHVwZGF0ZUluZGV4ID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRpdGxlICYmICF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdHBpY2tlci52aWV3LnRpdGxlT3B0aW9uKSB0aGlzLnNlbGVjdHBpY2tlci52aWV3LnRpdGxlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMgb3B0aW9uIGRvZXNuJ3QgY3JlYXRlIGEgbmV3IDxsaT4gZWxlbWVudCwgYnV0IGRvZXMgYWRkIGEgbmV3IG9wdGlvbiBhdCB0aGUgc3RhcnQsXHJcbiAgICAgICAgLy8gc28gc3RhcnRJbmRleCBzaG91bGQgaW5jcmVhc2UgdG8gcHJldmVudCBoYXZpbmcgdG8gY2hlY2sgZXZlcnkgb3B0aW9uIGZvciB0aGUgYnMtdGl0bGUtb3B0aW9uIGNsYXNzXHJcbiAgICAgICAgdXBkYXRlSW5kZXggPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnRbMF0sXHJcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgdGl0bGVOb3RBcHBlbmRlZCA9ICF0aGlzLnNlbGVjdHBpY2tlci52aWV3LnRpdGxlT3B0aW9uLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZU5vdEFwcGVuZGVkKSB7XHJcbiAgICAgICAgICAvLyBVc2UgbmF0aXZlIEpTIHRvIHByZXBlbmQgb3B0aW9uIChmYXN0ZXIpXHJcbiAgICAgICAgICB0aGlzLnNlbGVjdHBpY2tlci52aWV3LnRpdGxlT3B0aW9uLmNsYXNzTmFtZSA9ICdicy10aXRsZS1vcHRpb24nO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RwaWNrZXIudmlldy50aXRsZU9wdGlvbi52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgIC8vIENoZWNrIGlmIHNlbGVjdGVkIG9yIGRhdGEtc2VsZWN0ZWQgYXR0cmlidXRlIGlzIGFscmVhZHkgc2V0IG9uIGFuIG9wdGlvbi4gSWYgbm90LCBzZWxlY3QgdGhlIHRpdGxlT3B0aW9uIG9wdGlvbi5cclxuICAgICAgICAgIC8vIHRoZSBzZWxlY3RlZCBpdGVtIG1heSBoYXZlIGJlZW4gY2hhbmdlZCBieSB1c2VyIG9yIHByb2dyYW1tYXRpY2FsbHkgYmVmb3JlIHRoZSBib290c3RyYXAgc2VsZWN0IHBsdWdpbiBydW5zLFxyXG4gICAgICAgICAgLy8gaWYgc28sIHRoZSBzZWxlY3Qgd2lsbCBoYXZlIHRoZSBkYXRhLXNlbGVjdGVkIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgdmFyICRvcHQgPSAkKGVsZW1lbnQub3B0aW9uc1tlbGVtZW50LnNlbGVjdGVkSW5kZXhdKTtcclxuICAgICAgICAgIGlzU2VsZWN0ZWQgPSAkb3B0LmF0dHIoJ3NlbGVjdGVkJykgPT09IHVuZGVmaW5lZCAmJiB0aGlzLiRlbGVtZW50LmRhdGEoJ3NlbGVjdGVkJykgPT09IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aXRsZU5vdEFwcGVuZGVkIHx8IHRoaXMuc2VsZWN0cGlja2VyLnZpZXcudGl0bGVPcHRpb24uaW5kZXggIT09IDApIHtcclxuICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuc2VsZWN0cGlja2VyLnZpZXcudGl0bGVPcHRpb24sIGVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgc2VsZWN0ZWQgKmFmdGVyKiBhcHBlbmRpbmcgdG8gc2VsZWN0LFxyXG4gICAgICAgIC8vIG90aGVyd2lzZSB0aGUgb3B0aW9uIGRvZXNuJ3QgZ2V0IHNlbGVjdGVkIGluIElFXHJcbiAgICAgICAgLy8gc2V0IHVzaW5nIHNlbGVjdGVkSW5kZXgsIGFzIHNldHRpbmcgdGhlIHNlbGVjdGVkIGF0dHIgdG8gdHJ1ZSBoZXJlIGRvZXNuJ3Qgd29yayBpbiBJRTExXHJcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIGVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB1cGRhdGVJbmRleDtcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlTGk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgaWNvbkJhc2UgPSB0aGlzLm9wdGlvbnMuaWNvbkJhc2UsXHJcbiAgICAgICAgICBvcHRpb25TZWxlY3RvciA9ICc6bm90KFtoaWRkZW5dKTpub3QoW2RhdGEtaGlkZGVuPVwidHJ1ZVwiXSknLFxyXG4gICAgICAgICAgbWFpbkVsZW1lbnRzID0gW10sXHJcbiAgICAgICAgICBtYWluRGF0YSA9IFtdLFxyXG4gICAgICAgICAgd2lkZXN0T3B0aW9uTGVuZ3RoID0gMCxcclxuICAgICAgICAgIG9wdElEID0gMCxcclxuICAgICAgICAgIHN0YXJ0SW5kZXggPSB0aGlzLnNldFBsYWNlaG9sZGVyKCkgPyAxIDogMDsgLy8gYXBwZW5kIHRoZSB0aXRsZU9wdGlvbiBpZiBuZWNlc3NhcnkgYW5kIHNraXAgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGUgbG9vcFxyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWRlRGlzYWJsZWQpIG9wdGlvblNlbGVjdG9yICs9ICc6bm90KDpkaXNhYmxlZCknO1xyXG5cclxuICAgICAgaWYgKCh0aGF0Lm9wdGlvbnMuc2hvd1RpY2sgfHwgdGhhdC5tdWx0aXBsZSkgJiYgIWVsZW1lbnRUZW1wbGF0ZXMuY2hlY2tNYXJrLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBlbGVtZW50VGVtcGxhdGVzLmNoZWNrTWFyay5jbGFzc05hbWUgPSBpY29uQmFzZSArICcgJyArIHRoYXQub3B0aW9ucy50aWNrSWNvbiArICcgY2hlY2stbWFyayc7XHJcbiAgICAgICAgZWxlbWVudFRlbXBsYXRlcy5hLmFwcGVuZENoaWxkKGVsZW1lbnRUZW1wbGF0ZXMuY2hlY2tNYXJrKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSB0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCA+IConICsgb3B0aW9uU2VsZWN0b3IpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gYWRkRGl2aWRlciAoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzRGF0YSA9IG1haW5EYXRhW21haW5EYXRhLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAvLyBlbnN1cmUgb3B0Z3JvdXAgZG9lc24ndCBjcmVhdGUgYmFjay10by1iYWNrIGRpdmlkZXJzXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcHJldmlvdXNEYXRhICYmXHJcbiAgICAgICAgICBwcmV2aW91c0RhdGEudHlwZSA9PT0gJ2RpdmlkZXInICYmXHJcbiAgICAgICAgICAocHJldmlvdXNEYXRhLm9wdElEIHx8IGNvbmZpZy5vcHRJRClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICBjb25maWcudHlwZSA9ICdkaXZpZGVyJztcclxuXHJcbiAgICAgICAgbWFpbkVsZW1lbnRzLnB1c2goXHJcbiAgICAgICAgICBnZW5lcmF0ZU9wdGlvbi5saShcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuRElWSURFUixcclxuICAgICAgICAgICAgKGNvbmZpZy5vcHRJRCA/IGNvbmZpZy5vcHRJRCArICdkaXYnIDogdW5kZWZpbmVkKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG1haW5EYXRhLnB1c2goY29uZmlnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gYWRkT3B0aW9uIChvcHRpb24sIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICAgICAgY29uZmlnLmRpdmlkZXIgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWRpdmlkZXInKSA9PT0gJ3RydWUnO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmRpdmlkZXIpIHtcclxuICAgICAgICAgIGFkZERpdmlkZXIoe1xyXG4gICAgICAgICAgICBvcHRJRDogY29uZmlnLm9wdElEXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIGxpSW5kZXggPSBtYWluRGF0YS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgY3NzVGV4dCA9IG9wdGlvbi5zdHlsZS5jc3NUZXh0LFxyXG4gICAgICAgICAgICAgIGlubGluZVN0eWxlID0gY3NzVGV4dCA/IGh0bWxFc2NhcGUoY3NzVGV4dCkgOiAnJyxcclxuICAgICAgICAgICAgICBvcHRpb25DbGFzcyA9IChvcHRpb24uY2xhc3NOYW1lIHx8ICcnKSArIChjb25maWcub3B0Z3JvdXBDbGFzcyB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbmZpZy5vcHRJRCkgb3B0aW9uQ2xhc3MgPSAnb3B0ICcgKyBvcHRpb25DbGFzcztcclxuXHJcbiAgICAgICAgICBjb25maWcudGV4dCA9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgICBjb25maWcuY29udGVudCA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpO1xyXG4gICAgICAgICAgY29uZmlnLnRva2VucyA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9rZW5zJyk7XHJcbiAgICAgICAgICBjb25maWcuc3VidGV4dCA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VidGV4dCcpO1xyXG4gICAgICAgICAgY29uZmlnLmljb24gPSBvcHRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWljb24nKTtcclxuICAgICAgICAgIGNvbmZpZy5pY29uQmFzZSA9IGljb25CYXNlO1xyXG5cclxuICAgICAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGdlbmVyYXRlT3B0aW9uLnRleHQoY29uZmlnKTtcclxuICAgICAgICAgIHZhciBsaUVsZW1lbnQgPSBnZW5lcmF0ZU9wdGlvbi5saShcclxuICAgICAgICAgICAgZ2VuZXJhdGVPcHRpb24uYShcclxuICAgICAgICAgICAgICB0ZXh0RWxlbWVudCxcclxuICAgICAgICAgICAgICBvcHRpb25DbGFzcyxcclxuICAgICAgICAgICAgICBpbmxpbmVTdHlsZVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgY29uZmlnLm9wdElEXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChsaUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBsaUVsZW1lbnQuZmlyc3RDaGlsZC5pZCA9IHRoYXQuc2VsZWN0SWQgKyAnLScgKyBsaUluZGV4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1haW5FbGVtZW50cy5wdXNoKGxpRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgb3B0aW9uLmxpSW5kZXggPSBsaUluZGV4O1xyXG5cclxuICAgICAgICAgIGNvbmZpZy5kaXNwbGF5ID0gY29uZmlnLmNvbnRlbnQgfHwgY29uZmlnLnRleHQ7XHJcbiAgICAgICAgICBjb25maWcudHlwZSA9ICdvcHRpb24nO1xyXG4gICAgICAgICAgY29uZmlnLmluZGV4ID0gbGlJbmRleDtcclxuICAgICAgICAgIGNvbmZpZy5vcHRpb24gPSBvcHRpb247XHJcbiAgICAgICAgICBjb25maWcuZGlzYWJsZWQgPSBjb25maWcuZGlzYWJsZWQgfHwgb3B0aW9uLmRpc2FibGVkO1xyXG5cclxuICAgICAgICAgIG1haW5EYXRhLnB1c2goY29uZmlnKTtcclxuXHJcbiAgICAgICAgICB2YXIgY29tYmluZWRMZW5ndGggPSAwO1xyXG5cclxuICAgICAgICAgIC8vIGNvdW50IHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbiB0aGUgb3B0aW9uIC0gbm90IHBlcmZlY3QsIGJ1dCBzaG91bGQgd29yayBpbiBtb3N0IGNhc2VzXHJcbiAgICAgICAgICBpZiAoY29uZmlnLmRpc3BsYXkpIGNvbWJpbmVkTGVuZ3RoICs9IGNvbmZpZy5kaXNwbGF5Lmxlbmd0aDtcclxuICAgICAgICAgIGlmIChjb25maWcuc3VidGV4dCkgY29tYmluZWRMZW5ndGggKz0gY29uZmlnLnN1YnRleHQubGVuZ3RoO1xyXG4gICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gaWNvbiwgZW5zdXJlIHRoaXMgb3B0aW9uJ3Mgd2lkdGggaXMgY2hlY2tlZFxyXG4gICAgICAgICAgaWYgKGNvbmZpZy5pY29uKSBjb21iaW5lZExlbmd0aCArPSAxO1xyXG5cclxuICAgICAgICAgIGlmIChjb21iaW5lZExlbmd0aCA+IHdpZGVzdE9wdGlvbkxlbmd0aCkge1xyXG4gICAgICAgICAgICB3aWRlc3RPcHRpb25MZW5ndGggPSBjb21iaW5lZExlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGd1ZXNzIHdoaWNoIG9wdGlvbiBpcyB0aGUgd2lkZXN0XHJcbiAgICAgICAgICAgIC8vIHVzZSB0aGlzIHdoZW4gY2FsY3VsYXRpbmcgbWVudSB3aWR0aFxyXG4gICAgICAgICAgICAvLyBub3QgcGVyZmVjdCwgYnV0IGl0J3MgZmFzdCwgYW5kIHRoZSB3aWR0aCB3aWxsIGJlIHVwZGF0aW5nIGFjY29yZGluZ2x5IHdoZW4gc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnZpZXcud2lkZXN0T3B0aW9uID0gbWFpbkVsZW1lbnRzW21haW5FbGVtZW50cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGFkZE9wdGdyb3VwIChpbmRleCwgc2VsZWN0T3B0aW9ucykge1xyXG4gICAgICAgIHZhciBvcHRncm91cCA9IHNlbGVjdE9wdGlvbnNbaW5kZXhdLFxyXG4gICAgICAgICAgICBwcmV2aW91cyA9IHNlbGVjdE9wdGlvbnNbaW5kZXggLSAxXSxcclxuICAgICAgICAgICAgbmV4dCA9IHNlbGVjdE9wdGlvbnNbaW5kZXggKyAxXSxcclxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicgKyBvcHRpb25TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGlmICghb3B0aW9ucy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICBsYWJlbDogaHRtbEVzY2FwZShvcHRncm91cC5sYWJlbCksXHJcbiAgICAgICAgICAgICAgc3VidGV4dDogb3B0Z3JvdXAuZ2V0QXR0cmlidXRlKCdkYXRhLXN1YnRleHQnKSxcclxuICAgICAgICAgICAgICBpY29uOiBvcHRncm91cC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpLFxyXG4gICAgICAgICAgICAgIGljb25CYXNlOiBpY29uQmFzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRncm91cENsYXNzID0gJyAnICsgKG9wdGdyb3VwLmNsYXNzTmFtZSB8fCAnJyksXHJcbiAgICAgICAgICAgIGhlYWRlckluZGV4LFxyXG4gICAgICAgICAgICBsYXN0SW5kZXg7XHJcblxyXG4gICAgICAgIG9wdElEKys7XHJcblxyXG4gICAgICAgIGlmIChwcmV2aW91cykge1xyXG4gICAgICAgICAgYWRkRGl2aWRlcih7IG9wdElEOiBvcHRJRCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsYWJlbEVsZW1lbnQgPSBnZW5lcmF0ZU9wdGlvbi5sYWJlbChjb25maWcpO1xyXG5cclxuICAgICAgICBtYWluRWxlbWVudHMucHVzaChcclxuICAgICAgICAgIGdlbmVyYXRlT3B0aW9uLmxpKGxhYmVsRWxlbWVudCwgJ2Ryb3Bkb3duLWhlYWRlcicgKyBvcHRncm91cENsYXNzLCBvcHRJRClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBtYWluRGF0YS5wdXNoKHtcclxuICAgICAgICAgIGRpc3BsYXk6IGNvbmZpZy5sYWJlbCxcclxuICAgICAgICAgIHN1YnRleHQ6IGNvbmZpZy5zdWJ0ZXh0LFxyXG4gICAgICAgICAgdHlwZTogJ29wdGdyb3VwLWxhYmVsJyxcclxuICAgICAgICAgIG9wdElEOiBvcHRJRFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuID0gb3B0aW9ucy5sZW5ndGg7IGogPCBsZW47IGorKykge1xyXG4gICAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbal07XHJcblxyXG4gICAgICAgICAgaWYgKGogPT09IDApIHtcclxuICAgICAgICAgICAgaGVhZGVySW5kZXggPSBtYWluRGF0YS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSBoZWFkZXJJbmRleCArIGxlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhZGRPcHRpb24ob3B0aW9uLCB7XHJcbiAgICAgICAgICAgIGhlYWRlckluZGV4OiBoZWFkZXJJbmRleCxcclxuICAgICAgICAgICAgbGFzdEluZGV4OiBsYXN0SW5kZXgsXHJcbiAgICAgICAgICAgIG9wdElEOiBvcHRJRCxcclxuICAgICAgICAgICAgb3B0Z3JvdXBDbGFzczogb3B0Z3JvdXBDbGFzcyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IG9wdGdyb3VwLmRpc2FibGVkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICBhZGREaXZpZGVyKHsgb3B0SUQ6IG9wdElEIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgbGVuID0gc2VsZWN0T3B0aW9ucy5sZW5ndGg7IHN0YXJ0SW5kZXggPCBsZW47IHN0YXJ0SW5kZXgrKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gc2VsZWN0T3B0aW9uc1tzdGFydEluZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0udGFnTmFtZSAhPT0gJ09QVEdST1VQJykge1xyXG4gICAgICAgICAgYWRkT3B0aW9uKGl0ZW0sIHt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWRkT3B0Z3JvdXAoc3RhcnRJbmRleCwgc2VsZWN0T3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzID0gbWFpbkVsZW1lbnRzO1xyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci5tYWluLmRhdGEgPSBtYWluRGF0YTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQgPSB0aGlzLnNlbGVjdHBpY2tlci5tYWluO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaW5kTGlzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRtZW51SW5uZXIuZmluZCgnLmlubmVyID4gbGknKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIGVuc3VyZSB0aXRsZU9wdGlvbiBpcyBhcHBlbmRlZCBhbmQgc2VsZWN0ZWQgKGlmIG5lY2Vzc2FyeSkgYmVmb3JlIGdldHRpbmcgc2VsZWN0ZWRPcHRpb25zXHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoKTtcclxuXHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcclxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLiRlbGVtZW50WzBdLFxyXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25zID0gZ2V0U2VsZWN0ZWRPcHRpb25zKGVsZW1lbnQsIHRoaXMub3B0aW9ucy5oaWRlRGlzYWJsZWQpLFxyXG4gICAgICAgICAgc2VsZWN0ZWRDb3VudCA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgICBidXR0b24gPSB0aGlzLiRidXR0b25bMF0sXHJcbiAgICAgICAgICBidXR0b25Jbm5lciA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLW9wdGlvbi1pbm5lci1pbm5lcicpLFxyXG4gICAgICAgICAgbXVsdGlwbGVTZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLm9wdGlvbnMubXVsdGlwbGVTZXBhcmF0b3IpLFxyXG4gICAgICAgICAgdGl0bGVGcmFnbWVudCA9IGVsZW1lbnRUZW1wbGF0ZXMuZnJhZ21lbnQuY2xvbmVOb2RlKGZhbHNlKSxcclxuICAgICAgICAgIHNob3dDb3VudCxcclxuICAgICAgICAgIGNvdW50TWF4LFxyXG4gICAgICAgICAgaGFzQ29udGVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2JzLXBsYWNlaG9sZGVyJywgdGhhdC5tdWx0aXBsZSA/ICFzZWxlY3RlZENvdW50IDogIWdldFNlbGVjdFZhbHVlcyhlbGVtZW50LCBzZWxlY3RlZE9wdGlvbnMpKTtcclxuXHJcbiAgICAgIHRoaXMudGFiSW5kZXgoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRUZXh0Rm9ybWF0ID09PSAnc3RhdGljJykge1xyXG4gICAgICAgIHRpdGxlRnJhZ21lbnQgPSBnZW5lcmF0ZU9wdGlvbi50ZXh0KHsgdGV4dDogdGhpcy5vcHRpb25zLnRpdGxlIH0sIHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dDb3VudCA9IHRoaXMubXVsdGlwbGUgJiYgdGhpcy5vcHRpb25zLnNlbGVjdGVkVGV4dEZvcm1hdC5pbmRleE9mKCdjb3VudCcpICE9PSAtMSAmJiBzZWxlY3RlZENvdW50ID4gMTtcclxuXHJcbiAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgb3B0aW9ucyB3aWxsIGJlIHNob3duIChzaG93Q291bnQgPT09IHRydWUpXHJcbiAgICAgICAgaWYgKHNob3dDb3VudCkge1xyXG4gICAgICAgICAgY291bnRNYXggPSB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRUZXh0Rm9ybWF0LnNwbGl0KCc+Jyk7XHJcbiAgICAgICAgICBzaG93Q291bnQgPSAoY291bnRNYXgubGVuZ3RoID4gMSAmJiBzZWxlY3RlZENvdW50ID4gY291bnRNYXhbMV0pIHx8IChjb3VudE1heC5sZW5ndGggPT09IDEgJiYgc2VsZWN0ZWRDb3VudCA+PSAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG9ubHkgbG9vcCB0aHJvdWdoIGFsbCBzZWxlY3RlZCBvcHRpb25zIGlmIHRoZSBjb3VudCB3b24ndCBiZSBzaG93blxyXG4gICAgICAgIGlmIChzaG93Q291bnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBzZWxlY3RlZEluZGV4ID0gMDsgc2VsZWN0ZWRJbmRleCA8IHNlbGVjdGVkQ291bnQ7IHNlbGVjdGVkSW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IDUwKSB7XHJcbiAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHNlbGVjdGVkT3B0aW9uc1tzZWxlY3RlZEluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgdGl0bGVPcHRpb25zID0ge30sXHJcbiAgICAgICAgICAgICAgICAgIHRoaXNEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YnRleHQ6IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VidGV4dCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHNlbGVjdGVkSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZUZyYWdtZW50LmFwcGVuZENoaWxkKG11bHRpcGxlU2VwYXJhdG9yLmNsb25lTm9kZShmYWxzZSkpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbi50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVPcHRpb25zLnRleHQgPSBvcHRpb24udGl0bGU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzRGF0YS5jb250ZW50ICYmIHRoYXQub3B0aW9ucy5zaG93Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVPcHRpb25zLmNvbnRlbnQgPSB0aGlzRGF0YS5jb250ZW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5zaG93SWNvbikge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZU9wdGlvbnMuaWNvbiA9IHRoaXNEYXRhLmljb247XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlT3B0aW9ucy5pY29uQmFzZSA9IHRoaXMub3B0aW9ucy5pY29uQmFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGF0Lm9wdGlvbnMuc2hvd1N1YnRleHQgJiYgIXRoYXQubXVsdGlwbGUgJiYgdGhpc0RhdGEuc3VidGV4dCkgdGl0bGVPcHRpb25zLnN1YnRleHQgPSAnICcgKyB0aGlzRGF0YS5zdWJ0ZXh0O1xyXG4gICAgICAgICAgICAgICAgdGl0bGVPcHRpb25zLnRleHQgPSBvcHRpb24udGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGl0bGVGcmFnbWVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZU9wdGlvbi50ZXh0KHRpdGxlT3B0aW9ucywgdHJ1ZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gYWRkIGVsbGlwc2lzXHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRDb3VudCA+IDQ5KSB7XHJcbiAgICAgICAgICAgIHRpdGxlRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy4uLicpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIG9wdGlvblNlbGVjdG9yID0gJzpub3QoW2hpZGRlbl0pOm5vdChbZGF0YS1oaWRkZW49XCJ0cnVlXCJdKTpub3QoW2RhdGEtZGl2aWRlcj1cInRydWVcIl0pJztcclxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZURpc2FibGVkKSBvcHRpb25TZWxlY3RvciArPSAnOm5vdCg6ZGlzYWJsZWQpJztcclxuXHJcbiAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbXVsdGlzZWxlY3QsIGFuZCBzZWxlY3RlZFRleHRGb3JtYXQgaXMgY291bnQsIHRoZW4gc2hvdyAxIG9mIDIgc2VsZWN0ZWQsIGV0Yy5cclxuICAgICAgICAgIHZhciB0b3RhbENvdW50ID0gdGhpcy4kZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QgPiBvcHRpb24nICsgb3B0aW9uU2VsZWN0b3IgKyAnLCBvcHRncm91cCcgKyBvcHRpb25TZWxlY3RvciArICcgb3B0aW9uJyArIG9wdGlvblNlbGVjdG9yKS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgdHI4blRleHQgPSAodHlwZW9mIHRoaXMub3B0aW9ucy5jb3VudFNlbGVjdGVkVGV4dCA9PT0gJ2Z1bmN0aW9uJykgPyB0aGlzLm9wdGlvbnMuY291bnRTZWxlY3RlZFRleHQoc2VsZWN0ZWRDb3VudCwgdG90YWxDb3VudCkgOiB0aGlzLm9wdGlvbnMuY291bnRTZWxlY3RlZFRleHQ7XHJcblxyXG4gICAgICAgICAgdGl0bGVGcmFnbWVudCA9IGdlbmVyYXRlT3B0aW9uLnRleHQoe1xyXG4gICAgICAgICAgICB0ZXh0OiB0cjhuVGV4dC5yZXBsYWNlKCd7MH0nLCBzZWxlY3RlZENvdW50LnRvU3RyaW5nKCkpLnJlcGxhY2UoJ3sxfScsIHRvdGFsQ291bnQudG9TdHJpbmcoKSlcclxuICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50aXRsZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyB1c2UgLmF0dHIgdG8gZW5zdXJlIHVuZGVmaW5lZCBpcyByZXR1cm5lZCBpZiB0aXRsZSBhdHRyaWJ1dGUgaXMgbm90IHNldFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy50aXRsZSA9IHRoaXMuJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSWYgdGhlIHNlbGVjdCBkb2Vzbid0IGhhdmUgYSB0aXRsZSwgdGhlbiB1c2UgdGhlIGRlZmF1bHQsIG9yIGlmIG5vdGhpbmcgaXMgc2V0IGF0IGFsbCwgdXNlIG5vbmVTZWxlY3RlZFRleHRcclxuICAgICAgaWYgKCF0aXRsZUZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGl0bGVGcmFnbWVudCA9IGdlbmVyYXRlT3B0aW9uLnRleHQoe1xyXG4gICAgICAgICAgdGV4dDogdHlwZW9mIHRoaXMub3B0aW9ucy50aXRsZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm9wdGlvbnMudGl0bGUgOiB0aGlzLm9wdGlvbnMubm9uZVNlbGVjdGVkVGV4dFxyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzdHJpcCBhbGwgSFRNTCB0YWdzIGFuZCB0cmltIHRoZSByZXN1bHQsIHRoZW4gdW5lc2NhcGUgYW55IGVzY2FwZWQgdGFnc1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0aXRsZUZyYWdtZW50LnRleHRDb250ZW50LnJlcGxhY2UoLzxbXj5dKj4/L2csICcnKS50cmltKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNhbml0aXplICYmIGhhc0NvbnRlbnQpIHtcclxuICAgICAgICBzYW5pdGl6ZUh0bWwoW3RpdGxlRnJhZ21lbnRdLCB0aGF0Lm9wdGlvbnMud2hpdGVMaXN0LCB0aGF0Lm9wdGlvbnMuc2FuaXRpemVGbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbklubmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBidXR0b25Jbm5lci5hcHBlbmRDaGlsZCh0aXRsZUZyYWdtZW50KTtcclxuXHJcbiAgICAgIGlmICh2ZXJzaW9uLm1ham9yIDwgNCAmJiB0aGlzLiRuZXdFbGVtZW50WzBdLmNsYXNzTGlzdC5jb250YWlucygnYnMzLWhhcy1hZGRvbicpKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlckV4cGFuZCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWV4cGFuZCcpLFxyXG4gICAgICAgICAgICBjbG9uZSA9IGJ1dHRvbklubmVyLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgY2xvbmUuY2xhc3NOYW1lID0gJ2ZpbHRlci1leHBhbmQnO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVyRXhwYW5kKSB7XHJcbiAgICAgICAgICBidXR0b24ucmVwbGFjZUNoaWxkKGNsb25lLCBmaWx0ZXJFeHBhbmQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdyZW5kZXJlZCcgKyBFVkVOVF9LRVkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBbc3R5bGVdXHJcbiAgICAgKiBAcGFyYW0gW3N0YXR1c11cclxuICAgICAqL1xyXG4gICAgc2V0U3R5bGU6IGZ1bmN0aW9uIChuZXdTdHlsZSwgc3RhdHVzKSB7XHJcbiAgICAgIHZhciBidXR0b24gPSB0aGlzLiRidXR0b25bMF0sXHJcbiAgICAgICAgICBuZXdFbGVtZW50ID0gdGhpcy4kbmV3RWxlbWVudFswXSxcclxuICAgICAgICAgIHN0eWxlID0gdGhpcy5vcHRpb25zLnN0eWxlLnRyaW0oKSxcclxuICAgICAgICAgIGJ1dHRvbkNsYXNzO1xyXG5cclxuICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKSkge1xyXG4gICAgICAgIHRoaXMuJG5ld0VsZW1lbnQuYWRkQ2xhc3ModGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UoL3NlbGVjdHBpY2tlcnxtb2JpbGUtZGV2aWNlfGJzLXNlbGVjdC1oaWRkZW58dmFsaWRhdGVcXFsuKlxcXS9naSwgJycpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZlcnNpb24ubWFqb3IgPCA0KSB7XHJcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiczMnKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0VsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWdyb3VwJykgJiZcclxuICAgICAgICAgICAgKG5ld0VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZyB8fCBuZXdFbGVtZW50Lm5leHRFbGVtZW50U2libGluZykgJiZcclxuICAgICAgICAgICAgKG5ld0VsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZyB8fCBuZXdFbGVtZW50Lm5leHRFbGVtZW50U2libGluZykuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1ncm91cC1hZGRvbicpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JzMy1oYXMtYWRkb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXdTdHlsZSkge1xyXG4gICAgICAgIGJ1dHRvbkNsYXNzID0gbmV3U3R5bGUudHJpbSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbkNsYXNzID0gc3R5bGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGF0dXMgPT0gJ2FkZCcpIHtcclxuICAgICAgICBpZiAoYnV0dG9uQ2xhc3MpIGJ1dHRvbi5jbGFzc0xpc3QuYWRkLmFwcGx5KGJ1dHRvbi5jbGFzc0xpc3QsIGJ1dHRvbkNsYXNzLnNwbGl0KCcgJykpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSAncmVtb3ZlJykge1xyXG4gICAgICAgIGlmIChidXR0b25DbGFzcykgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUuYXBwbHkoYnV0dG9uLmNsYXNzTGlzdCwgYnV0dG9uQ2xhc3Muc3BsaXQoJyAnKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHN0eWxlKSBidXR0b24uY2xhc3NMaXN0LnJlbW92ZS5hcHBseShidXR0b24uY2xhc3NMaXN0LCBzdHlsZS5zcGxpdCgnICcpKTtcclxuICAgICAgICBpZiAoYnV0dG9uQ2xhc3MpIGJ1dHRvbi5jbGFzc0xpc3QuYWRkLmFwcGx5KGJ1dHRvbi5jbGFzc0xpc3QsIGJ1dHRvbkNsYXNzLnNwbGl0KCcgJykpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxpSGVpZ2h0OiBmdW5jdGlvbiAocmVmcmVzaCkge1xyXG4gICAgICBpZiAoIXJlZnJlc2ggJiYgKHRoaXMub3B0aW9ucy5zaXplID09PSBmYWxzZSB8fCB0aGlzLnNpemVJbmZvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnNpemVJbmZvKSB0aGlzLnNpemVJbmZvID0ge307XHJcblxyXG4gICAgICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgbWVudUlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICBtZW51SW5uZXJJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXHJcbiAgICAgICAgICBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSxcclxuICAgICAgICAgIGRyb3Bkb3duSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSxcclxuICAgICAgICAgIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSxcclxuICAgICAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksXHJcbiAgICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxyXG4gICAgICAgICAgaGVhZGVyID0gdGhpcy5vcHRpb25zLmhlYWRlciAmJiB0aGlzLiRtZW51LmZpbmQoJy4nICsgY2xhc3NOYW1lcy5QT1BPVkVSSEVBREVSKS5sZW5ndGggPiAwID8gdGhpcy4kbWVudS5maW5kKCcuJyArIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUilbMF0uY2xvbmVOb2RlKHRydWUpIDogbnVsbCxcclxuICAgICAgICAgIHNlYXJjaCA9IHRoaXMub3B0aW9ucy5saXZlU2VhcmNoID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgOiBudWxsLFxyXG4gICAgICAgICAgYWN0aW9ucyA9IHRoaXMub3B0aW9ucy5hY3Rpb25zQm94ICYmIHRoaXMubXVsdGlwbGUgJiYgdGhpcy4kbWVudS5maW5kKCcuYnMtYWN0aW9uc2JveCcpLmxlbmd0aCA+IDAgPyB0aGlzLiRtZW51LmZpbmQoJy5icy1hY3Rpb25zYm94JylbMF0uY2xvbmVOb2RlKHRydWUpIDogbnVsbCxcclxuICAgICAgICAgIGRvbmVCdXR0b24gPSB0aGlzLm9wdGlvbnMuZG9uZUJ1dHRvbiAmJiB0aGlzLm11bHRpcGxlICYmIHRoaXMuJG1lbnUuZmluZCgnLmJzLWRvbmVidXR0b24nKS5sZW5ndGggPiAwID8gdGhpcy4kbWVudS5maW5kKCcuYnMtZG9uZWJ1dHRvbicpWzBdLmNsb25lTm9kZSh0cnVlKSA6IG51bGwsXHJcbiAgICAgICAgICBmaXJzdE9wdGlvbiA9IHRoaXMuJGVsZW1lbnQuZmluZCgnb3B0aW9uJylbMF07XHJcblxyXG4gICAgICB0aGlzLnNpemVJbmZvLnNlbGVjdFdpZHRoID0gdGhpcy4kbmV3RWxlbWVudFswXS5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgIHRleHQuY2xhc3NOYW1lID0gJ3RleHQnO1xyXG4gICAgICBhLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtICcgKyAoZmlyc3RPcHRpb24gPyBmaXJzdE9wdGlvbi5jbGFzc05hbWUgOiAnJyk7XHJcbiAgICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy4kbWVudVswXS5wYXJlbnROb2RlLmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZXMuU0hPVztcclxuICAgICAgbmV3RWxlbWVudC5zdHlsZS53aWR0aCA9IDA7IC8vIGVuc3VyZSBidXR0b24gd2lkdGggZG9lc24ndCBhZmZlY3QgbmF0dXJhbCB3aWR0aCBvZiBtZW51IHdoZW4gY2FsY3VsYXRpbmdcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy53aWR0aCA9PT0gJ2F1dG8nKSBtZW51LnN0eWxlLm1pbldpZHRoID0gMDtcclxuICAgICAgbWVudS5jbGFzc05hbWUgPSBjbGFzc05hbWVzLk1FTlUgKyAnICcgKyBjbGFzc05hbWVzLlNIT1c7XHJcbiAgICAgIG1lbnVJbm5lci5jbGFzc05hbWUgPSAnaW5uZXIgJyArIGNsYXNzTmFtZXMuU0hPVztcclxuICAgICAgbWVudUlubmVySW5uZXIuY2xhc3NOYW1lID0gY2xhc3NOYW1lcy5NRU5VICsgJyBpbm5lciAnICsgKHZlcnNpb24ubWFqb3IgPT09ICc0JyA/IGNsYXNzTmFtZXMuU0hPVyA6ICcnKTtcclxuICAgICAgZGl2aWRlci5jbGFzc05hbWUgPSBjbGFzc05hbWVzLkRJVklERVI7XHJcbiAgICAgIGRyb3Bkb3duSGVhZGVyLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1oZWFkZXInO1xyXG5cclxuICAgICAgdGV4dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXFx1MjAwYicpKTtcclxuICAgICAgYS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgIGRyb3Bkb3duSGVhZGVyLmFwcGVuZENoaWxkKHRleHQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdHBpY2tlci52aWV3LndpZGVzdE9wdGlvbikge1xyXG4gICAgICAgIG1lbnVJbm5lcklubmVyLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0cGlja2VyLnZpZXcud2lkZXN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1lbnVJbm5lcklubmVyLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgbWVudUlubmVySW5uZXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XHJcbiAgICAgIG1lbnVJbm5lcklubmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duSGVhZGVyKTtcclxuICAgICAgaWYgKGhlYWRlcikgbWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzZWFyY2guY2xhc3NOYW1lID0gJ2JzLXNlYXJjaGJveCc7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICAgICAgc2VhcmNoLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKHNlYXJjaCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFjdGlvbnMpIG1lbnUuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XHJcbiAgICAgIG1lbnVJbm5lci5hcHBlbmRDaGlsZChtZW51SW5uZXJJbm5lcik7XHJcbiAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUlubmVyKTtcclxuICAgICAgaWYgKGRvbmVCdXR0b24pIG1lbnUuYXBwZW5kQ2hpbGQoZG9uZUJ1dHRvbik7XHJcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG5cclxuICAgICAgdmFyIGxpSGVpZ2h0ID0gbGkub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgZHJvcGRvd25IZWFkZXJIZWlnaHQgPSBkcm9wZG93bkhlYWRlciA/IGRyb3Bkb3duSGVhZGVyLm9mZnNldEhlaWdodCA6IDAsXHJcbiAgICAgICAgICBoZWFkZXJIZWlnaHQgPSBoZWFkZXIgPyBoZWFkZXIub2Zmc2V0SGVpZ2h0IDogMCxcclxuICAgICAgICAgIHNlYXJjaEhlaWdodCA9IHNlYXJjaCA/IHNlYXJjaC5vZmZzZXRIZWlnaHQgOiAwLFxyXG4gICAgICAgICAgYWN0aW9uc0hlaWdodCA9IGFjdGlvbnMgPyBhY3Rpb25zLm9mZnNldEhlaWdodCA6IDAsXHJcbiAgICAgICAgICBkb25lQnV0dG9uSGVpZ2h0ID0gZG9uZUJ1dHRvbiA/IGRvbmVCdXR0b24ub2Zmc2V0SGVpZ2h0IDogMCxcclxuICAgICAgICAgIGRpdmlkZXJIZWlnaHQgPSAkKGRpdmlkZXIpLm91dGVySGVpZ2h0KHRydWUpLFxyXG4gICAgICAgICAgLy8gZmFsbCBiYWNrIHRvIGpRdWVyeSBpZiBnZXRDb21wdXRlZFN0eWxlIGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgIG1lbnVTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudSkgOiBmYWxzZSxcclxuICAgICAgICAgIG1lbnVXaWR0aCA9IG1lbnUub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAkbWVudSA9IG1lbnVTdHlsZSA/IG51bGwgOiAkKG1lbnUpLFxyXG4gICAgICAgICAgbWVudVBhZGRpbmcgPSB7XHJcbiAgICAgICAgICAgIHZlcnQ6IHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUucGFkZGluZ1RvcCA6ICRtZW51LmNzcygncGFkZGluZ1RvcCcpKSArXHJcbiAgICAgICAgICAgICAgICAgIHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUucGFkZGluZ0JvdHRvbSA6ICRtZW51LmNzcygncGFkZGluZ0JvdHRvbScpKSArXHJcbiAgICAgICAgICAgICAgICAgIHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUuYm9yZGVyVG9wV2lkdGggOiAkbWVudS5jc3MoJ2JvcmRlclRvcFdpZHRoJykpICtcclxuICAgICAgICAgICAgICAgICAgdG9JbnRlZ2VyKG1lbnVTdHlsZSA/IG1lbnVTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA6ICRtZW51LmNzcygnYm9yZGVyQm90dG9tV2lkdGgnKSksXHJcbiAgICAgICAgICAgIGhvcml6OiB0b0ludGVnZXIobWVudVN0eWxlID8gbWVudVN0eWxlLnBhZGRpbmdMZWZ0IDogJG1lbnUuY3NzKCdwYWRkaW5nTGVmdCcpKSArXHJcbiAgICAgICAgICAgICAgICAgIHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUucGFkZGluZ1JpZ2h0IDogJG1lbnUuY3NzKCdwYWRkaW5nUmlnaHQnKSkgK1xyXG4gICAgICAgICAgICAgICAgICB0b0ludGVnZXIobWVudVN0eWxlID8gbWVudVN0eWxlLmJvcmRlckxlZnRXaWR0aCA6ICRtZW51LmNzcygnYm9yZGVyTGVmdFdpZHRoJykpICtcclxuICAgICAgICAgICAgICAgICAgdG9JbnRlZ2VyKG1lbnVTdHlsZSA/IG1lbnVTdHlsZS5ib3JkZXJSaWdodFdpZHRoIDogJG1lbnUuY3NzKCdib3JkZXJSaWdodFdpZHRoJykpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWVudUV4dHJhcyA9IHtcclxuICAgICAgICAgICAgdmVydDogbWVudVBhZGRpbmcudmVydCArXHJcbiAgICAgICAgICAgICAgICAgIHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUubWFyZ2luVG9wIDogJG1lbnUuY3NzKCdtYXJnaW5Ub3AnKSkgK1xyXG4gICAgICAgICAgICAgICAgICB0b0ludGVnZXIobWVudVN0eWxlID8gbWVudVN0eWxlLm1hcmdpbkJvdHRvbSA6ICRtZW51LmNzcygnbWFyZ2luQm90dG9tJykpICsgMixcclxuICAgICAgICAgICAgaG9yaXo6IG1lbnVQYWRkaW5nLmhvcml6ICtcclxuICAgICAgICAgICAgICAgICAgdG9JbnRlZ2VyKG1lbnVTdHlsZSA/IG1lbnVTdHlsZS5tYXJnaW5MZWZ0IDogJG1lbnUuY3NzKCdtYXJnaW5MZWZ0JykpICtcclxuICAgICAgICAgICAgICAgICAgdG9JbnRlZ2VyKG1lbnVTdHlsZSA/IG1lbnVTdHlsZS5tYXJnaW5SaWdodCA6ICRtZW51LmNzcygnbWFyZ2luUmlnaHQnKSkgKyAyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2Nyb2xsQmFyV2lkdGg7XHJcblxyXG4gICAgICBtZW51SW5uZXIuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcblxyXG4gICAgICBzY3JvbGxCYXJXaWR0aCA9IG1lbnUub2Zmc2V0V2lkdGggLSBtZW51V2lkdGg7XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5ld0VsZW1lbnQpO1xyXG5cclxuICAgICAgdGhpcy5zaXplSW5mby5saUhlaWdodCA9IGxpSGVpZ2h0O1xyXG4gICAgICB0aGlzLnNpemVJbmZvLmRyb3Bkb3duSGVhZGVySGVpZ2h0ID0gZHJvcGRvd25IZWFkZXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uaGVhZGVySGVpZ2h0ID0gaGVhZGVySGVpZ2h0O1xyXG4gICAgICB0aGlzLnNpemVJbmZvLnNlYXJjaEhlaWdodCA9IHNlYXJjaEhlaWdodDtcclxuICAgICAgdGhpcy5zaXplSW5mby5hY3Rpb25zSGVpZ2h0ID0gYWN0aW9uc0hlaWdodDtcclxuICAgICAgdGhpcy5zaXplSW5mby5kb25lQnV0dG9uSGVpZ2h0ID0gZG9uZUJ1dHRvbkhlaWdodDtcclxuICAgICAgdGhpcy5zaXplSW5mby5kaXZpZGVySGVpZ2h0ID0gZGl2aWRlckhlaWdodDtcclxuICAgICAgdGhpcy5zaXplSW5mby5tZW51UGFkZGluZyA9IG1lbnVQYWRkaW5nO1xyXG4gICAgICB0aGlzLnNpemVJbmZvLm1lbnVFeHRyYXMgPSBtZW51RXh0cmFzO1xyXG4gICAgICB0aGlzLnNpemVJbmZvLm1lbnVXaWR0aCA9IG1lbnVXaWR0aDtcclxuICAgICAgdGhpcy5zaXplSW5mby5tZW51SW5uZXJJbm5lcldpZHRoID0gbWVudVdpZHRoIC0gbWVudVBhZGRpbmcuaG9yaXo7XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8udG90YWxNZW51V2lkdGggPSB0aGlzLnNpemVJbmZvLm1lbnVXaWR0aDtcclxuICAgICAgdGhpcy5zaXplSW5mby5zY3JvbGxCYXJXaWR0aCA9IHNjcm9sbEJhcldpZHRoO1xyXG4gICAgICB0aGlzLnNpemVJbmZvLnNlbGVjdEhlaWdodCA9IHRoaXMuJG5ld0VsZW1lbnRbMF0ub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbkRhdGEoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2VsZWN0UG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgJHdpbmRvdyA9ICQod2luZG93KSxcclxuICAgICAgICAgIHBvcyA9IHRoYXQuJG5ld0VsZW1lbnQub2Zmc2V0KCksXHJcbiAgICAgICAgICAkY29udGFpbmVyID0gJCh0aGF0Lm9wdGlvbnMuY29udGFpbmVyKSxcclxuICAgICAgICAgIGNvbnRhaW5lclBvcztcclxuXHJcbiAgICAgIGlmICh0aGF0Lm9wdGlvbnMuY29udGFpbmVyICYmICRjb250YWluZXIubGVuZ3RoICYmICEkY29udGFpbmVyLmlzKCdib2R5JykpIHtcclxuICAgICAgICBjb250YWluZXJQb3MgPSAkY29udGFpbmVyLm9mZnNldCgpO1xyXG4gICAgICAgIGNvbnRhaW5lclBvcy50b3AgKz0gcGFyc2VJbnQoJGNvbnRhaW5lci5jc3MoJ2JvcmRlclRvcFdpZHRoJykpO1xyXG4gICAgICAgIGNvbnRhaW5lclBvcy5sZWZ0ICs9IHBhcnNlSW50KCRjb250YWluZXIuY3NzKCdib3JkZXJMZWZ0V2lkdGgnKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGFpbmVyUG9zID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdpblBhZCA9IHRoYXQub3B0aW9ucy53aW5kb3dQYWRkaW5nO1xyXG5cclxuICAgICAgdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRUb3AgPSBwb3MudG9wIC0gY29udGFpbmVyUG9zLnRvcCAtICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0Qm90ID0gJHdpbmRvdy5oZWlnaHQoKSAtIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0VG9wIC0gdGhpcy5zaXplSW5mby5zZWxlY3RIZWlnaHQgLSBjb250YWluZXJQb3MudG9wIC0gd2luUGFkWzJdO1xyXG4gICAgICB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldExlZnQgPSBwb3MubGVmdCAtIGNvbnRhaW5lclBvcy5sZWZ0IC0gJHdpbmRvdy5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0UmlnaHQgPSAkd2luZG93LndpZHRoKCkgLSB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldExlZnQgLSB0aGlzLnNpemVJbmZvLnNlbGVjdFdpZHRoIC0gY29udGFpbmVyUG9zLmxlZnQgLSB3aW5QYWRbMV07XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0VG9wIC09IHdpblBhZFswXTtcclxuICAgICAgdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRMZWZ0IC09IHdpblBhZFszXTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0TWVudVNpemU6IGZ1bmN0aW9uIChpc0F1dG8pIHtcclxuICAgICAgdGhpcy5nZXRTZWxlY3RQb3NpdGlvbigpO1xyXG5cclxuICAgICAgdmFyIHNlbGVjdFdpZHRoID0gdGhpcy5zaXplSW5mby5zZWxlY3RXaWR0aCxcclxuICAgICAgICAgIGxpSGVpZ2h0ID0gdGhpcy5zaXplSW5mby5saUhlaWdodCxcclxuICAgICAgICAgIGhlYWRlckhlaWdodCA9IHRoaXMuc2l6ZUluZm8uaGVhZGVySGVpZ2h0LFxyXG4gICAgICAgICAgc2VhcmNoSGVpZ2h0ID0gdGhpcy5zaXplSW5mby5zZWFyY2hIZWlnaHQsXHJcbiAgICAgICAgICBhY3Rpb25zSGVpZ2h0ID0gdGhpcy5zaXplSW5mby5hY3Rpb25zSGVpZ2h0LFxyXG4gICAgICAgICAgZG9uZUJ1dHRvbkhlaWdodCA9IHRoaXMuc2l6ZUluZm8uZG9uZUJ1dHRvbkhlaWdodCxcclxuICAgICAgICAgIGRpdkhlaWdodCA9IHRoaXMuc2l6ZUluZm8uZGl2aWRlckhlaWdodCxcclxuICAgICAgICAgIG1lbnVQYWRkaW5nID0gdGhpcy5zaXplSW5mby5tZW51UGFkZGluZyxcclxuICAgICAgICAgIG1lbnVJbm5lckhlaWdodCxcclxuICAgICAgICAgIG1lbnVIZWlnaHQsXHJcbiAgICAgICAgICBkaXZMZW5ndGggPSAwLFxyXG4gICAgICAgICAgbWluSGVpZ2h0LFxyXG4gICAgICAgICAgX21pbkhlaWdodCxcclxuICAgICAgICAgIG1heEhlaWdodCxcclxuICAgICAgICAgIG1lbnVJbm5lck1pbkhlaWdodCxcclxuICAgICAgICAgIGVzdGltYXRlO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wdXBBdXRvKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBlc3RpbWF0ZWQgaGVpZ2h0IG9mIHRoZSBtZW51IHdpdGhvdXQgc2Nyb2xsYmFycy5cclxuICAgICAgICAvLyBUaGlzIGlzIHVzZWZ1bCBmb3Igc21hbGxlciBtZW51cywgd2hlcmUgdGhlcmUgbWlnaHQgYmUgcGxlbnR5IG9mIHJvb21cclxuICAgICAgICAvLyBiZWxvdyB0aGUgYnV0dG9uIHdpdGhvdXQgc2V0dGluZyBkcm9wdXAsIGJ1dCB3ZSBjYW4ndCBrbm93XHJcbiAgICAgICAgLy8gdGhlIGV4YWN0IGhlaWdodCBvZiB0aGUgbWVudSB1bnRpbCBjcmVhdGVWaWV3IGlzIGNhbGxlZCBsYXRlclxyXG4gICAgICAgIGVzdGltYXRlID0gbGlIZWlnaHQgKiB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzLmxlbmd0aCArIG1lbnVQYWRkaW5nLnZlcnQ7XHJcbiAgICAgICAgdGhpcy4kbmV3RWxlbWVudC50b2dnbGVDbGFzcyhjbGFzc05hbWVzLkRST1BVUCwgdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRUb3AgLSB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldEJvdCA+IHRoaXMuc2l6ZUluZm8ubWVudUV4dHJhcy52ZXJ0ICYmIGVzdGltYXRlICsgdGhpcy5zaXplSW5mby5tZW51RXh0cmFzLnZlcnQgKyA1MCA+IHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0Qm90KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaXplID09PSAnYXV0bycpIHtcclxuICAgICAgICBfbWluSGVpZ2h0ID0gdGhpcy5zZWxlY3RwaWNrZXIuY3VycmVudC5lbGVtZW50cy5sZW5ndGggPiAzID8gdGhpcy5zaXplSW5mby5saUhlaWdodCAqIDMgKyB0aGlzLnNpemVJbmZvLm1lbnVFeHRyYXMudmVydCAtIDIgOiAwO1xyXG4gICAgICAgIG1lbnVIZWlnaHQgPSB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldEJvdCAtIHRoaXMuc2l6ZUluZm8ubWVudUV4dHJhcy52ZXJ0O1xyXG4gICAgICAgIG1pbkhlaWdodCA9IF9taW5IZWlnaHQgKyBoZWFkZXJIZWlnaHQgKyBzZWFyY2hIZWlnaHQgKyBhY3Rpb25zSGVpZ2h0ICsgZG9uZUJ1dHRvbkhlaWdodDtcclxuICAgICAgICBtZW51SW5uZXJNaW5IZWlnaHQgPSBNYXRoLm1heChfbWluSGVpZ2h0IC0gbWVudVBhZGRpbmcudmVydCwgMCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRuZXdFbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZXMuRFJPUFVQKSkge1xyXG4gICAgICAgICAgbWVudUhlaWdodCA9IHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0VG9wIC0gdGhpcy5zaXplSW5mby5tZW51RXh0cmFzLnZlcnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXhIZWlnaHQgPSBtZW51SGVpZ2h0O1xyXG4gICAgICAgIG1lbnVJbm5lckhlaWdodCA9IG1lbnVIZWlnaHQgLSBoZWFkZXJIZWlnaHQgLSBzZWFyY2hIZWlnaHQgLSBhY3Rpb25zSGVpZ2h0IC0gZG9uZUJ1dHRvbkhlaWdodCAtIG1lbnVQYWRkaW5nLnZlcnQ7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnNpemUgJiYgdGhpcy5vcHRpb25zLnNpemUgIT0gJ2F1dG8nICYmIHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZWxlbWVudHMubGVuZ3RoID4gdGhpcy5vcHRpb25zLnNpemUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5zaXplOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbaV0udHlwZSA9PT0gJ2RpdmlkZXInKSBkaXZMZW5ndGgrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnVIZWlnaHQgPSBsaUhlaWdodCAqIHRoaXMub3B0aW9ucy5zaXplICsgZGl2TGVuZ3RoICogZGl2SGVpZ2h0ICsgbWVudVBhZGRpbmcudmVydDtcclxuICAgICAgICBtZW51SW5uZXJIZWlnaHQgPSBtZW51SGVpZ2h0IC0gbWVudVBhZGRpbmcudmVydDtcclxuICAgICAgICBtYXhIZWlnaHQgPSBtZW51SGVpZ2h0ICsgaGVhZGVySGVpZ2h0ICsgc2VhcmNoSGVpZ2h0ICsgYWN0aW9uc0hlaWdodCArIGRvbmVCdXR0b25IZWlnaHQ7XHJcbiAgICAgICAgbWluSGVpZ2h0ID0gbWVudUlubmVyTWluSGVpZ2h0ID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJG1lbnUuY3NzKHtcclxuICAgICAgICAnbWF4LWhlaWdodCc6IG1heEhlaWdodCArICdweCcsXHJcbiAgICAgICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXHJcbiAgICAgICAgJ21pbi1oZWlnaHQnOiBtaW5IZWlnaHQgKyAncHgnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kbWVudUlubmVyLmNzcyh7XHJcbiAgICAgICAgJ21heC1oZWlnaHQnOiBtZW51SW5uZXJIZWlnaHQgKyAncHgnLFxyXG4gICAgICAgICdvdmVyZmxvdy15JzogJ2F1dG8nLFxyXG4gICAgICAgICdtaW4taGVpZ2h0JzogbWVudUlubmVyTWluSGVpZ2h0ICsgJ3B4J1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGVuc3VyZSBtZW51SW5uZXJIZWlnaHQgaXMgYWx3YXlzIGEgcG9zaXRpdmUgbnVtYmVyIHRvIHByZXZlbnQgaXNzdWVzIGNhbGN1bGF0aW5nIGNodW5rU2l6ZSBpbiBjcmVhdGVWaWV3XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8ubWVudUlubmVySGVpZ2h0ID0gTWF0aC5tYXgobWVudUlubmVySGVpZ2h0LCAxKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGEubGVuZ3RoICYmIHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVt0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGEubGVuZ3RoIC0gMV0ucG9zaXRpb24gPiB0aGlzLnNpemVJbmZvLm1lbnVJbm5lckhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuc2l6ZUluZm8uaGFzU2Nyb2xsQmFyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNpemVJbmZvLnRvdGFsTWVudVdpZHRoID0gdGhpcy5zaXplSW5mby5tZW51V2lkdGggKyB0aGlzLnNpemVJbmZvLnNjcm9sbEJhcldpZHRoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3Bkb3duQWxpZ25SaWdodCA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgdGhpcy4kbWVudS50b2dnbGVDbGFzcyhjbGFzc05hbWVzLk1FTlVSSUdIVCwgdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRMZWZ0ID4gdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRSaWdodCAmJiB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldFJpZ2h0IDwgKHRoaXMuc2l6ZUluZm8udG90YWxNZW51V2lkdGggLSBzZWxlY3RXaWR0aCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5kcm9wZG93biAmJiB0aGlzLmRyb3Bkb3duLl9wb3BwZXIpIHRoaXMuZHJvcGRvd24uX3BvcHBlci51cGRhdGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0U2l6ZTogZnVuY3Rpb24gKHJlZnJlc2gpIHtcclxuICAgICAgdGhpcy5saUhlaWdodChyZWZyZXNoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGVhZGVyKSB0aGlzLiRtZW51LmNzcygncGFkZGluZy10b3AnLCAwKTtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaXplID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0TWVudVNpemUoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgIHRoaXMuJHNlYXJjaGJveFxyXG4gICAgICAgICAgLm9mZignaW5wdXQuc2V0TWVudVNpemUgcHJvcGVydHljaGFuZ2Uuc2V0TWVudVNpemUnKVxyXG4gICAgICAgICAgLm9uKCdpbnB1dC5zZXRNZW51U2l6ZSBwcm9wZXJ0eWNoYW5nZS5zZXRNZW51U2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoYXQuc2V0TWVudVNpemUoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNpemUgPT09ICdhdXRvJykge1xyXG4gICAgICAgICR3aW5kb3dcclxuICAgICAgICAgIC5vZmYoJ3Jlc2l6ZScgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJy5zZXRNZW51U2l6ZScgKyAnIHNjcm9sbCcgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJy5zZXRNZW51U2l6ZScpXHJcbiAgICAgICAgICAub24oJ3Jlc2l6ZScgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJy5zZXRNZW51U2l6ZScgKyAnIHNjcm9sbCcgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJy5zZXRNZW51U2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoYXQuc2V0TWVudVNpemUoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaXplICYmIHRoaXMub3B0aW9ucy5zaXplICE9ICdhdXRvJyAmJiB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzLmxlbmd0aCA+IHRoaXMub3B0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgJHdpbmRvdy5vZmYoJ3Jlc2l6ZScgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJy5zZXRNZW51U2l6ZScgKyAnIHNjcm9sbCcgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJy5zZXRNZW51U2l6ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGF0LmNyZWF0ZVZpZXcoZmFsc2UsIHRydWUsIHJlZnJlc2gpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRXaWR0aDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLndpZHRoID09PSAnYXV0bycpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGhhdC4kbWVudS5jc3MoJ21pbi13aWR0aCcsICcwJyk7XHJcblxyXG4gICAgICAgICAgdGhhdC4kZWxlbWVudC5vbignbG9hZGVkJyArIEVWRU5UX0tFWSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LmxpSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHRoYXQuc2V0TWVudVNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBjb3JyZWN0IHdpZHRoIGlmIGVsZW1lbnQgaXMgaGlkZGVuXHJcbiAgICAgICAgICAgIHZhciAkc2VsZWN0Q2xvbmUgPSB0aGF0LiRuZXdFbGVtZW50LmNsb25lKCkuYXBwZW5kVG8oJ2JvZHknKSxcclxuICAgICAgICAgICAgICAgIGJ0bldpZHRoID0gJHNlbGVjdENsb25lLmNzcygnd2lkdGgnLCAnYXV0bycpLmNoaWxkcmVuKCdidXR0b24nKS5vdXRlcldpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAkc2VsZWN0Q2xvbmUucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgd2lkdGggdG8gd2hhdGV2ZXIncyBsYXJnZXIsIGJ1dHRvbiB0aXRsZSBvciBsb25nZXN0IG9wdGlvblxyXG4gICAgICAgICAgICB0aGF0LnNpemVJbmZvLnNlbGVjdFdpZHRoID0gTWF0aC5tYXgodGhhdC5zaXplSW5mby50b3RhbE1lbnVXaWR0aCwgYnRuV2lkdGgpO1xyXG4gICAgICAgICAgICB0aGF0LiRuZXdFbGVtZW50LmNzcygnd2lkdGgnLCB0aGF0LnNpemVJbmZvLnNlbGVjdFdpZHRoICsgJ3B4Jyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMud2lkdGggPT09ICdmaXQnKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGlubGluZSBtaW4td2lkdGggc28gd2lkdGggY2FuIGJlIGNoYW5nZWQgZnJvbSAnYXV0bydcclxuICAgICAgICB0aGlzLiRtZW51LmNzcygnbWluLXdpZHRoJywgJycpO1xyXG4gICAgICAgIHRoaXMuJG5ld0VsZW1lbnQuY3NzKCd3aWR0aCcsICcnKS5hZGRDbGFzcygnZml0LXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLndpZHRoKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGlubGluZSBtaW4td2lkdGggc28gd2lkdGggY2FuIGJlIGNoYW5nZWQgZnJvbSAnYXV0bydcclxuICAgICAgICB0aGlzLiRtZW51LmNzcygnbWluLXdpZHRoJywgJycpO1xyXG4gICAgICAgIHRoaXMuJG5ld0VsZW1lbnQuY3NzKCd3aWR0aCcsIHRoaXMub3B0aW9ucy53aWR0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGlubGluZSBtaW4td2lkdGgvd2lkdGggc28gd2lkdGggY2FuIGJlIGNoYW5nZWRcclxuICAgICAgICB0aGlzLiRtZW51LmNzcygnbWluLXdpZHRoJywgJycpO1xyXG4gICAgICAgIHRoaXMuJG5ld0VsZW1lbnQuY3NzKCd3aWR0aCcsICcnKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBSZW1vdmUgZml0LXdpZHRoIGNsYXNzIGlmIHdpZHRoIGlzIGNoYW5nZWQgcHJvZ3JhbW1hdGljYWxseVxyXG4gICAgICBpZiAodGhpcy4kbmV3RWxlbWVudC5oYXNDbGFzcygnZml0LXdpZHRoJykgJiYgdGhpcy5vcHRpb25zLndpZHRoICE9PSAnZml0Jykge1xyXG4gICAgICAgIHRoaXMuJG5ld0VsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnZml0LXdpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2VsZWN0UG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy4kYnNDb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwiYnMtY29udGFpbmVyXCIgLz4nKTtcclxuXHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcclxuICAgICAgICAgICRjb250YWluZXIgPSAkKHRoaXMub3B0aW9ucy5jb250YWluZXIpLFxyXG4gICAgICAgICAgcG9zLFxyXG4gICAgICAgICAgY29udGFpbmVyUG9zLFxyXG4gICAgICAgICAgYWN0dWFsSGVpZ2h0LFxyXG4gICAgICAgICAgZ2V0UGxhY2VtZW50ID0gZnVuY3Rpb24gKCRlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXJQb3NpdGlvbiA9IHt9LFxyXG4gICAgICAgICAgICAgICAgLy8gZmFsbCBiYWNrIHRvIGRyb3Bkb3duJ3MgZGVmYXVsdCBkaXNwbGF5IHNldHRpbmcgaWYgZGlzcGxheSBpcyBub3QgbWFudWFsbHkgc2V0XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ID0gdGhhdC5vcHRpb25zLmRpc3BsYXkgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAvLyBCb290c3RyYXAgMyBkb2Vzbid0IGhhdmUgJC5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvci5EZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICQuZm4uZHJvcGRvd24uQ29uc3RydWN0b3IuRGVmYXVsdCA/ICQuZm4uZHJvcGRvd24uQ29uc3RydWN0b3IuRGVmYXVsdC5kaXNwbGF5XHJcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGF0LiRic0NvbnRhaW5lci5hZGRDbGFzcygkZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UoL2Zvcm0tY29udHJvbHxmaXQtd2lkdGgvZ2ksICcnKSkudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lcy5EUk9QVVAsICRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZXMuRFJPUFVQKSk7XHJcbiAgICAgICAgICAgIHBvcyA9ICRlbGVtZW50Lm9mZnNldCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkY29udGFpbmVyLmlzKCdib2R5JykpIHtcclxuICAgICAgICAgICAgICBjb250YWluZXJQb3MgPSAkY29udGFpbmVyLm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclBvcy50b3AgKz0gcGFyc2VJbnQoJGNvbnRhaW5lci5jc3MoJ2JvcmRlclRvcFdpZHRoJykpIC0gJGNvbnRhaW5lci5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICBjb250YWluZXJQb3MubGVmdCArPSBwYXJzZUludCgkY29udGFpbmVyLmNzcygnYm9yZGVyTGVmdFdpZHRoJykpIC0gJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29udGFpbmVyUG9zID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWN0dWFsSGVpZ2h0ID0gJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lcy5EUk9QVVApID8gMCA6ICRlbGVtZW50WzBdLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIEJvb3RzdHJhcCA0KyB1c2VzIFBvcHBlciBmb3IgbWVudSBwb3NpdGlvbmluZ1xyXG4gICAgICAgICAgICBpZiAodmVyc2lvbi5tYWpvciA8IDQgfHwgZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcclxuICAgICAgICAgICAgICBjb250YWluZXJQb3NpdGlvbi50b3AgPSBwb3MudG9wIC0gY29udGFpbmVyUG9zLnRvcCArIGFjdHVhbEhlaWdodDtcclxuICAgICAgICAgICAgICBjb250YWluZXJQb3NpdGlvbi5sZWZ0ID0gcG9zLmxlZnQgLSBjb250YWluZXJQb3MubGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyUG9zaXRpb24ud2lkdGggPSAkZWxlbWVudFswXS5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuJGJzQ29udGFpbmVyLmNzcyhjb250YWluZXJQb3NpdGlvbik7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgdGhpcy4kYnV0dG9uLm9uKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhhdC5pc0Rpc2FibGVkKCkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFBsYWNlbWVudCh0aGF0LiRuZXdFbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhhdC4kYnNDb250YWluZXJcclxuICAgICAgICAgIC5hcHBlbmRUbyh0aGF0Lm9wdGlvbnMuY29udGFpbmVyKVxyXG4gICAgICAgICAgLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZXMuU0hPVywgIXRoYXQuJGJ1dHRvbi5oYXNDbGFzcyhjbGFzc05hbWVzLlNIT1cpKVxyXG4gICAgICAgICAgLmFwcGVuZCh0aGF0LiRtZW51KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKHdpbmRvdylcclxuICAgICAgICAub2ZmKCdyZXNpemUnICsgRVZFTlRfS0VZICsgJy4nICsgdGhpcy5zZWxlY3RJZCArICcgc2Nyb2xsJyArIEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQpXHJcbiAgICAgICAgLm9uKCdyZXNpemUnICsgRVZFTlRfS0VZICsgJy4nICsgdGhpcy5zZWxlY3RJZCArICcgc2Nyb2xsJyArIEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IHRoYXQuJG5ld0VsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lcy5TSE9XKTtcclxuXHJcbiAgICAgICAgICBpZiAoaXNBY3RpdmUpIGdldFBsYWNlbWVudCh0aGF0LiRuZXdFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2hpZGUnICsgRVZFTlRfS0VZLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhhdC4kbWVudS5kYXRhKCdoZWlnaHQnLCB0aGF0LiRtZW51LmhlaWdodCgpKTtcclxuICAgICAgICB0aGF0LiRic0NvbnRhaW5lci5kZXRhY2goKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldE9wdGlvblN0YXR1czogZnVuY3Rpb24gKHNlbGVjdGVkT25seSkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICB0aGF0Lm5vU2Nyb2xsID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMgJiYgdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnZpc2libGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIGxpRGF0YSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtpICsgdGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjBdLFxyXG4gICAgICAgICAgICAgIG9wdGlvbiA9IGxpRGF0YS5vcHRpb247XHJcblxyXG4gICAgICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRPbmx5ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC5zZXREaXNhYmxlZChcclxuICAgICAgICAgICAgICAgIGxpRGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgIGxpRGF0YS5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoYXQuc2V0U2VsZWN0ZWQoXHJcbiAgICAgICAgICAgICAgbGlEYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIHRoZSBpbmRleCBvZiB0aGUgb3B0aW9uIHRoYXQgaXMgYmVpbmcgY2hhbmdlZFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZCAtIHRydWUgaWYgdGhlIG9wdGlvbiBpcyBiZWluZyBzZWxlY3RlZCwgZmFsc2UgaWYgYmVpbmcgZGVzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGluZGV4LCBzZWxlY3RlZCkge1xyXG4gICAgICB2YXIgbGkgPSB0aGlzLnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzW2luZGV4XSxcclxuICAgICAgICAgIGxpRGF0YSA9IHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZGF0YVtpbmRleF0sXHJcbiAgICAgICAgICBhY3RpdmVJbmRleElzU2V0ID0gdGhpcy5hY3RpdmVJbmRleCAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgdGhpc0lzQWN0aXZlID0gdGhpcy5hY3RpdmVJbmRleCA9PT0gaW5kZXgsXHJcbiAgICAgICAgICBwcmV2QWN0aXZlLFxyXG4gICAgICAgICAgYSxcclxuICAgICAgICAgIC8vIGlmIGN1cnJlbnQgb3B0aW9uIGlzIGFscmVhZHkgYWN0aXZlXHJcbiAgICAgICAgICAvLyBPUlxyXG4gICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgb3B0aW9uIGlzIGJlaW5nIHNlbGVjdGVkLCBpdCdzIE5PVCBtdWx0aXBsZSwgYW5kXHJcbiAgICAgICAgICAvLyBhY3RpdmVJbmRleCBpcyB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAvLyAgLSB3aGVuIHRoZSBtZW51IGlzIGZpcnN0IGJlaW5nIG9wZW5lZCwgT1JcclxuICAgICAgICAgIC8vICAtIGFmdGVyIGEgc2VhcmNoIGhhcyBiZWVuIHBlcmZvcm1lZCwgT1JcclxuICAgICAgICAgIC8vICAtIHdoZW4gcmV0YWluQWN0aXZlIGlzIGZhbHNlIHdoZW4gc2VsZWN0aW5nIGEgbmV3IG9wdGlvbiAoaS5lLiBpbmRleCBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgb3B0aW9uIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCBhY3RpdmVJbmRleClcclxuICAgICAgICAgIGtlZXBBY3RpdmUgPSB0aGlzSXNBY3RpdmUgfHwgKHNlbGVjdGVkICYmICF0aGlzLm11bHRpcGxlICYmICFhY3RpdmVJbmRleElzU2V0KTtcclxuXHJcbiAgICAgIGxpRGF0YS5zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG5cclxuICAgICAgYSA9IGxpLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGkuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XHJcblxyXG4gICAgICBpZiAoa2VlcEFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKGxpLCBsaURhdGEpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0cGlja2VyLnZpZXcuY3VycmVudEFjdGl2ZSA9IGxpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlZm9jdXNJdGVtKGxpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGEpIHtcclxuICAgICAgICBhLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgha2VlcEFjdGl2ZSAmJiAhYWN0aXZlSW5kZXhJc1NldCAmJiBzZWxlY3RlZCAmJiB0aGlzLnByZXZBY3RpdmVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcHJldkFjdGl2ZSA9IHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZWxlbWVudHNbdGhpcy5wcmV2QWN0aXZlSW5kZXhdO1xyXG5cclxuICAgICAgICB0aGlzLmRlZm9jdXNJdGVtKHByZXZBY3RpdmUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gdGhlIGluZGV4IG9mIHRoZSBvcHRpb24gdGhhdCBpcyBiZWluZyBkaXNhYmxlZFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAtIHRydWUgaWYgdGhlIG9wdGlvbiBpcyBiZWluZyBkaXNhYmxlZCwgZmFsc2UgaWYgYmVpbmcgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBzZXREaXNhYmxlZDogZnVuY3Rpb24gKGluZGV4LCBkaXNhYmxlZCkge1xyXG4gICAgICB2YXIgbGkgPSB0aGlzLnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzW2luZGV4XSxcclxuICAgICAgICAgIGE7XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci5tYWluLmRhdGFbaW5kZXhdLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcblxyXG4gICAgICBhID0gbGkuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAgIGxpLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lcy5ESVNBQkxFRCwgZGlzYWJsZWQpO1xyXG5cclxuICAgICAgaWYgKGEpIHtcclxuICAgICAgICBpZiAodmVyc2lvbi5tYWpvciA9PT0gJzQnKSBhLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lcy5ESVNBQkxFRCwgZGlzYWJsZWQpO1xyXG5cclxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZGlzYWJsZWQpO1xyXG4gICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnRbMF0uZGlzYWJsZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCgpKSB7XHJcbiAgICAgICAgdGhpcy4kbmV3RWxlbWVudFswXS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElTQUJMRUQpO1xyXG4gICAgICAgIHRoaXMuJGJ1dHRvbi5hZGRDbGFzcyhjbGFzc05hbWVzLkRJU0FCTEVEKS5hdHRyKCd0YWJpbmRleCcsIC0xKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJGJ1dHRvblswXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lcy5ESVNBQkxFRCkpIHtcclxuICAgICAgICAgIHRoaXMuJG5ld0VsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWVzLkRJU0FCTEVEKTtcclxuICAgICAgICAgIHRoaXMuJGJ1dHRvbi5yZW1vdmVDbGFzcyhjbGFzc05hbWVzLkRJU0FCTEVEKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGJ1dHRvbi5hdHRyKCd0YWJpbmRleCcpID09IC0xICYmICF0aGlzLiRlbGVtZW50LmRhdGEoJ3RhYmluZGV4JykpIHtcclxuICAgICAgICAgIHRoaXMuJGJ1dHRvbi5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0YWJJbmRleDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy4kZWxlbWVudC5kYXRhKCd0YWJpbmRleCcpICE9PSB0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JykgJiZcclxuICAgICAgICAodGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpICE9PSAtOTggJiYgdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpICE9PSAnLTk4JykpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmRhdGEoJ3RhYmluZGV4JywgdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpKTtcclxuICAgICAgICB0aGlzLiRidXR0b24uYXR0cigndGFiaW5kZXgnLCB0aGlzLiRlbGVtZW50LmRhdGEoJ3RhYmluZGV4JykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgLTk4KTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xpY2tMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXHJcbiAgICAgICAgICAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcclxuXHJcbiAgICAgICRkb2N1bWVudC5kYXRhKCdzcGFjZVNlbGVjdCcsIGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMuJGJ1dHRvbi5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICgvKDMyKS8udGVzdChlLmtleUNvZGUudG9TdHJpbmcoMTApKSAmJiAkZG9jdW1lbnQuZGF0YSgnc3BhY2VTZWxlY3QnKSkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJGRvY3VtZW50LmRhdGEoJ3NwYWNlU2VsZWN0JywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRuZXdFbGVtZW50Lm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh2ZXJzaW9uLm1ham9yID4gMyAmJiAhdGhhdC5kcm9wZG93bikge1xyXG4gICAgICAgICAgdGhhdC5kcm9wZG93biA9IHRoYXQuJGJ1dHRvbi5kYXRhKCdicy5kcm9wZG93bicpO1xyXG4gICAgICAgICAgdGhhdC5kcm9wZG93bi5fbWVudSA9IHRoYXQuJG1lbnVbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJGJ1dHRvbi5vbignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGF0LiRuZXdFbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZXMuU0hPVykpIHtcclxuICAgICAgICAgIHRoYXQuc2V0U2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzZXRGb2N1cyAoKSB7XHJcbiAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5saXZlU2VhcmNoKSB7XHJcbiAgICAgICAgICB0aGF0LiRzZWFyY2hib3gudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC4kbWVudUlubmVyLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBjaGVja1BvcHBlckV4aXN0cyAoKSB7XHJcbiAgICAgICAgaWYgKHRoYXQuZHJvcGRvd24gJiYgdGhhdC5kcm9wZG93bi5fcG9wcGVyICYmIHRoYXQuZHJvcGRvd24uX3BvcHBlci5zdGF0ZS5pc0NyZWF0ZWQpIHtcclxuICAgICAgICAgIHNldEZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja1BvcHBlckV4aXN0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdzaG93bicgKyBFVkVOVF9LRVksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhhdC4kbWVudUlubmVyWzBdLnNjcm9sbFRvcCAhPT0gdGhhdC5zZWxlY3RwaWNrZXIudmlldy5zY3JvbGxUb3ApIHtcclxuICAgICAgICAgIHRoYXQuJG1lbnVJbm5lclswXS5zY3JvbGxUb3AgPSB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnNjcm9sbFRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2ZXJzaW9uLm1ham9yID4gMykge1xyXG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrUG9wcGVyRXhpc3RzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0Rm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gZW5zdXJlIHBvc2luc2V0IGFuZCBzZXRzaXplIGFyZSBjb3JyZWN0IGJlZm9yZSBzZWxlY3RpbmcgYW4gb3B0aW9uIHZpYSBhIGNsaWNrXHJcbiAgICAgIHRoaXMuJG1lbnVJbm5lci5vbignbW91c2VlbnRlcicsICdsaSBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgaG92ZXJMaSA9IHRoaXMucGFyZW50RWxlbWVudCxcclxuICAgICAgICAgICAgcG9zaXRpb24wID0gdGhhdC5pc1ZpcnR1YWwoKSA/IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wIDogMCxcclxuICAgICAgICAgICAgaW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGhvdmVyTGkucGFyZW50RWxlbWVudC5jaGlsZHJlbiwgaG92ZXJMaSksXHJcbiAgICAgICAgICAgIGhvdmVyRGF0YSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtpbmRleCArIHBvc2l0aW9uMF07XHJcblxyXG4gICAgICAgIHRoYXQuZm9jdXNJdGVtKGhvdmVyTGksIGhvdmVyRGF0YSwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kbWVudUlubmVyLm9uKCdjbGljaycsICdsaSBhJywgZnVuY3Rpb24gKGUsIHJldGFpbkFjdGl2ZSkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGF0LiRlbGVtZW50WzBdLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjAgPSB0aGF0LmlzVmlydHVhbCgpID8gdGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjAgOiAwLFxyXG4gICAgICAgICAgICBjbGlja2VkRGF0YSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVskdGhpcy5wYXJlbnQoKS5pbmRleCgpICsgcG9zaXRpb24wXSxcclxuICAgICAgICAgICAgY2xpY2tlZEluZGV4ID0gY2xpY2tlZERhdGEuaW5kZXgsXHJcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IGdldFNlbGVjdFZhbHVlcyhlbGVtZW50KSxcclxuICAgICAgICAgICAgcHJldkluZGV4ID0gZWxlbWVudC5zZWxlY3RlZEluZGV4LFxyXG4gICAgICAgICAgICBwcmV2T3B0aW9uID0gZWxlbWVudC5vcHRpb25zW3ByZXZJbmRleF0sXHJcbiAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2UgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBEb24ndCBjbG9zZSBvbiBtdWx0aSBjaG9pY2UgbWVudVxyXG4gICAgICAgIGlmICh0aGF0Lm11bHRpcGxlICYmIHRoYXQub3B0aW9ucy5tYXhPcHRpb25zICE9PSAxKSB7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBEb24ndCBydW4gaWYgdGhlIHNlbGVjdCBpcyBkaXNhYmxlZFxyXG4gICAgICAgIGlmICghdGhhdC5pc0Rpc2FibGVkKCkgJiYgISR0aGlzLnBhcmVudCgpLmhhc0NsYXNzKGNsYXNzTmFtZXMuRElTQUJMRUQpKSB7XHJcbiAgICAgICAgICB2YXIgb3B0aW9uID0gY2xpY2tlZERhdGEub3B0aW9uLFxyXG4gICAgICAgICAgICAgICRvcHRpb24gPSAkKG9wdGlvbiksXHJcbiAgICAgICAgICAgICAgc3RhdGUgPSBvcHRpb24uc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgJG9wdGdyb3VwID0gJG9wdGlvbi5wYXJlbnQoJ29wdGdyb3VwJyksXHJcbiAgICAgICAgICAgICAgJG9wdGdyb3VwT3B0aW9ucyA9ICRvcHRncm91cC5maW5kKCdvcHRpb24nKSxcclxuICAgICAgICAgICAgICBtYXhPcHRpb25zID0gdGhhdC5vcHRpb25zLm1heE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgbWF4T3B0aW9uc0dycCA9ICRvcHRncm91cC5kYXRhKCdtYXhPcHRpb25zJykgfHwgZmFsc2U7XHJcblxyXG4gICAgICAgICAgaWYgKGNsaWNrZWRJbmRleCA9PT0gdGhhdC5hY3RpdmVJbmRleCkgcmV0YWluQWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZiAoIXJldGFpbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGF0LnByZXZBY3RpdmVJbmRleCA9IHRoYXQuYWN0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgIHRoYXQuYWN0aXZlSW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGF0Lm11bHRpcGxlKSB7IC8vIERlc2VsZWN0IGFsbCBvdGhlcnMgaWYgbm90IG11bHRpIHNlbGVjdCBib3hcclxuICAgICAgICAgICAgaWYgKHByZXZPcHRpb24pIHByZXZPcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhhdC5zZXRTZWxlY3RlZChjbGlja2VkSW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHsgLy8gVG9nZ2xlIHRoZSBvbmUgd2UgaGF2ZSBjaG9zZW4gaWYgd2UgYXJlIG11bHRpIHNlbGVjdC5cclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gIXN0YXRlO1xyXG5cclxuICAgICAgICAgICAgdGhhdC5zZXRTZWxlY3RlZChjbGlja2VkSW5kZXgsICFzdGF0ZSk7XHJcbiAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoJ2JsdXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXhPcHRpb25zICE9PSBmYWxzZSB8fCBtYXhPcHRpb25zR3JwICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgIHZhciBtYXhSZWFjaGVkID0gbWF4T3B0aW9ucyA8IGdldFNlbGVjdGVkT3B0aW9ucyhlbGVtZW50KS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgIG1heFJlYWNoZWRHcnAgPSBtYXhPcHRpb25zR3JwIDwgJG9wdGdyb3VwLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKChtYXhPcHRpb25zICYmIG1heFJlYWNoZWQpIHx8IChtYXhPcHRpb25zR3JwICYmIG1heFJlYWNoZWRHcnApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF4T3B0aW9ucyAmJiBtYXhPcHRpb25zID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2V0T3B0aW9uU3RhdHVzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXhPcHRpb25zR3JwICYmIG1heE9wdGlvbnNHcnAgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRvcHRncm91cE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX29wdGlvbiA9ICRvcHRncm91cE9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgX29wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0U2VsZWN0ZWQoX29wdGlvbi5saUluZGV4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2V0U2VsZWN0ZWQoY2xpY2tlZEluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBtYXhPcHRpb25zVGV4dCA9IHR5cGVvZiB0aGF0Lm9wdGlvbnMubWF4T3B0aW9uc1RleHQgPT09ICdzdHJpbmcnID8gW3RoYXQub3B0aW9ucy5tYXhPcHRpb25zVGV4dCwgdGhhdC5vcHRpb25zLm1heE9wdGlvbnNUZXh0XSA6IHRoYXQub3B0aW9ucy5tYXhPcHRpb25zVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1heE9wdGlvbnNBcnIgPSB0eXBlb2YgbWF4T3B0aW9uc1RleHQgPT09ICdmdW5jdGlvbicgPyBtYXhPcHRpb25zVGV4dChtYXhPcHRpb25zLCBtYXhPcHRpb25zR3JwKSA6IG1heE9wdGlvbnNUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4VHh0ID0gbWF4T3B0aW9uc0FyclswXS5yZXBsYWNlKCd7bn0nLCBtYXhPcHRpb25zKSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1heFR4dEdycCA9IG1heE9wdGlvbnNBcnJbMV0ucmVwbGFjZSgne259JywgbWF4T3B0aW9uc0dycCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAkbm90aWZ5ID0gJCgnPGRpdiBjbGFzcz1cIm5vdGlmeVwiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBJZiB7dmFyfSBpcyBzZXQgaW4gYXJyYXksIHJlcGxhY2UgaXRcclxuICAgICAgICAgICAgICAgICAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtYXhPcHRpb25zQXJyWzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VHh0ID0gbWF4VHh0LnJlcGxhY2UoJ3t2YXJ9JywgbWF4T3B0aW9uc0FyclsyXVttYXhPcHRpb25zID4gMSA/IDAgOiAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VHh0R3JwID0gbWF4VHh0R3JwLnJlcGxhY2UoJ3t2YXJ9JywgbWF4T3B0aW9uc0FyclsyXVttYXhPcHRpb25zR3JwID4gMSA/IDAgOiAxXSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhhdC4kbWVudS5hcHBlbmQoJG5vdGlmeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAobWF4T3B0aW9ucyAmJiBtYXhSZWFjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5vdGlmeS5hcHBlbmQoJCgnPGRpdj4nICsgbWF4VHh0ICsgJzwvZGl2PicpKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdtYXhSZWFjaGVkJyArIEVWRU5UX0tFWSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtYXhPcHRpb25zR3JwICYmIG1heFJlYWNoZWRHcnApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbm90aWZ5LmFwcGVuZCgkKCc8ZGl2PicgKyBtYXhUeHRHcnAgKyAnPC9kaXY+JykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ21heFJlYWNoZWRHcnAnICsgRVZFTlRfS0VZKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRTZWxlY3RlZChjbGlja2VkSW5kZXgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJG5vdGlmeVswXS5jbGFzc0xpc3QuYWRkKCdmYWRlT3V0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbm90aWZ5LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAxMDUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIXRoYXQubXVsdGlwbGUgfHwgKHRoYXQubXVsdGlwbGUgJiYgdGhhdC5vcHRpb25zLm1heE9wdGlvbnMgPT09IDEpKSB7XHJcbiAgICAgICAgICAgIHRoYXQuJGJ1dHRvbi50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgICB0aGF0LiRzZWFyY2hib3gudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBUcmlnZ2VyIHNlbGVjdCAnY2hhbmdlJ1xyXG4gICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoYXQubXVsdGlwbGUgfHwgcHJldkluZGV4ICE9PSBlbGVtZW50LnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICAgICAgICAvLyAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJykgaXMgY3VycmVudCBvcHRpb24gc3RhdGUgKHNlbGVjdGVkL3Vuc2VsZWN0ZWQpLiBwcmV2VmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgcHJpb3IgdG8gYmVpbmcgY2hhbmdlZC5cclxuICAgICAgICAgICAgICBjaGFuZ2VkQXJndW1lbnRzID0gW29wdGlvbi5pbmRleCwgJG9wdGlvbi5wcm9wKCdzZWxlY3RlZCcpLCBwcmV2VmFsdWVdO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC50cmlnZ2VyTmF0aXZlKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRtZW51Lm9uKCdjbGljaycsICdsaS4nICsgY2xhc3NOYW1lcy5ESVNBQkxFRCArICcgYSwgLicgKyBjbGFzc05hbWVzLlBPUE9WRVJIRUFERVIgKyAnLCAuJyArIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUiArICcgOm5vdCguY2xvc2UpJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09IHRoaXMpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBpZiAodGhhdC5vcHRpb25zLmxpdmVTZWFyY2ggJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKCdjbG9zZScpKSB7XHJcbiAgICAgICAgICAgIHRoYXQuJHNlYXJjaGJveC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC4kYnV0dG9uLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJG1lbnVJbm5lci5vbignY2xpY2snLCAnLmRpdmlkZXIsIC5kcm9wZG93bi1oZWFkZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgdGhhdC4kc2VhcmNoYm94LnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuJGJ1dHRvbi50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRtZW51Lm9uKCdjbGljaycsICcuJyArIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUiArICcgLmNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoYXQuJGJ1dHRvbi50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJHNlYXJjaGJveC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kbWVudS5vbignY2xpY2snLCAnLmFjdGlvbnMtYnRuJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAodGhhdC5vcHRpb25zLmxpdmVTZWFyY2gpIHtcclxuICAgICAgICAgIHRoYXQuJHNlYXJjaGJveC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LiRidXR0b24udHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYnMtc2VsZWN0LWFsbCcpKSB7XHJcbiAgICAgICAgICB0aGF0LnNlbGVjdEFsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LmRlc2VsZWN0QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJGVsZW1lbnRcclxuICAgICAgICAub24oJ2NoYW5nZScgKyBFVkVOVF9LRVksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRoYXQucmVuZGVyKCk7XHJcbiAgICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2NoYW5nZWQnICsgRVZFTlRfS0VZLCBjaGFuZ2VkQXJndW1lbnRzKTtcclxuICAgICAgICAgIGNoYW5nZWRBcmd1bWVudHMgPSBudWxsO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdmb2N1cycgKyBFVkVOVF9LRVksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICghdGhhdC5vcHRpb25zLm1vYmlsZSkgdGhhdC4kYnV0dG9uLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxpdmVTZWFyY2hMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXHJcbiAgICAgICAgICBub1Jlc3VsdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICAgICAgdGhpcy4kYnV0dG9uLm9uKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoISF0aGF0LiRzZWFyY2hib3gudmFsKCkpIHtcclxuICAgICAgICAgIHRoYXQuJHNlYXJjaGJveC52YWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRzZWFyY2hib3gub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpIGZvY3VzLmJzLmRyb3Bkb3duLmRhdGEtYXBpIHRvdWNoZW5kLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJHNlYXJjaGJveC5vbignaW5wdXQgcHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlYXJjaFZhbHVlID0gdGhhdC4kc2VhcmNoYm94LnZhbCgpO1xyXG5cclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5zZWFyY2guZWxlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5zZWFyY2guZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoVmFsdWUpIHtcclxuICAgICAgICAgIHZhciBpLFxyXG4gICAgICAgICAgICAgIHNlYXJjaE1hdGNoID0gW10sXHJcbiAgICAgICAgICAgICAgcSA9IHNlYXJjaFZhbHVlLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgY2FjaGUgPSB7fSxcclxuICAgICAgICAgICAgICBjYWNoZUFyciA9IFtdLFxyXG4gICAgICAgICAgICAgIHNlYXJjaFN0eWxlID0gdGhhdC5fc2VhcmNoU3R5bGUoKSxcclxuICAgICAgICAgICAgICBub3JtYWxpemVTZWFyY2ggPSB0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaE5vcm1hbGl6ZTtcclxuXHJcbiAgICAgICAgICBpZiAobm9ybWFsaXplU2VhcmNoKSBxID0gbm9ybWFsaXplVG9CYXNlKHEpO1xyXG5cclxuICAgICAgICAgIHRoYXQuXyRsaXNTZWxlY3RlZCA9IHRoYXQuJG1lbnVJbm5lci5maW5kKCcuc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXQuc2VsZWN0cGlja2VyLm1haW4uZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbGkgPSB0aGF0LnNlbGVjdHBpY2tlci5tYWluLmRhdGFbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNhY2hlW2ldKSB7XHJcbiAgICAgICAgICAgICAgY2FjaGVbaV0gPSBzdHJpbmdTZWFyY2gobGksIHEsIHNlYXJjaFN0eWxlLCBub3JtYWxpemVTZWFyY2gpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FjaGVbaV0gJiYgbGkuaGVhZGVySW5kZXggIT09IHVuZGVmaW5lZCAmJiBjYWNoZUFyci5pbmRleE9mKGxpLmhlYWRlckluZGV4KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICBpZiAobGkuaGVhZGVySW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZVtsaS5oZWFkZXJJbmRleCAtIDFdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNhY2hlQXJyLnB1c2gobGkuaGVhZGVySW5kZXggLSAxKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNhY2hlW2xpLmhlYWRlckluZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgY2FjaGVBcnIucHVzaChsaS5oZWFkZXJJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgIGNhY2hlW2xpLmxhc3RJbmRleCArIDFdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhY2hlW2ldICYmIGxpLnR5cGUgIT09ICdvcHRncm91cC1sYWJlbCcpIGNhY2hlQXJyLnB1c2goaSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGNhY2hlTGVuID0gY2FjaGVBcnIubGVuZ3RoOyBpIDwgY2FjaGVMZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjYWNoZUFycltpXSxcclxuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IGNhY2hlQXJyW2kgLSAxXSxcclxuICAgICAgICAgICAgICAgIGxpID0gdGhhdC5zZWxlY3RwaWNrZXIubWFpbi5kYXRhW2luZGV4XSxcclxuICAgICAgICAgICAgICAgIGxpUHJldiA9IHRoYXQuc2VsZWN0cGlja2VyLm1haW4uZGF0YVtwcmV2SW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxpLnR5cGUgIT09ICdkaXZpZGVyJyB8fCAobGkudHlwZSA9PT0gJ2RpdmlkZXInICYmIGxpUHJldiAmJiBsaVByZXYudHlwZSAhPT0gJ2RpdmlkZXInICYmIGNhY2hlTGVuIC0gMSAhPT0gaSkpIHtcclxuICAgICAgICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5zZWFyY2guZGF0YS5wdXNoKGxpKTtcclxuICAgICAgICAgICAgICBzZWFyY2hNYXRjaC5wdXNoKHRoYXQuc2VsZWN0cGlja2VyLm1haW4uZWxlbWVudHNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoYXQuYWN0aXZlSW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB0aGF0Lm5vU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICAgIHRoYXQuJG1lbnVJbm5lci5zY3JvbGxUb3AoMCk7XHJcbiAgICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5zZWFyY2guZWxlbWVudHMgPSBzZWFyY2hNYXRjaDtcclxuICAgICAgICAgIHRoYXQuY3JlYXRlVmlldyh0cnVlKTtcclxuXHJcbiAgICAgICAgICBpZiAoIXNlYXJjaE1hdGNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBub1Jlc3VsdHMuY2xhc3NOYW1lID0gJ25vLXJlc3VsdHMnO1xyXG4gICAgICAgICAgICBub1Jlc3VsdHMuaW5uZXJIVE1MID0gdGhhdC5vcHRpb25zLm5vbmVSZXN1bHRzVGV4dC5yZXBsYWNlKCd7MH0nLCAnXCInICsgaHRtbEVzY2FwZShzZWFyY2hWYWx1ZSkgKyAnXCInKTtcclxuICAgICAgICAgICAgdGhhdC4kbWVudUlubmVyWzBdLmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQobm9SZXN1bHRzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC4kbWVudUlubmVyLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAgIHRoYXQuY3JlYXRlVmlldyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgX3NlYXJjaFN0eWxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubGl2ZVNlYXJjaFN0eWxlIHx8ICdjb250YWlucyc7XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IGdldFNlbGVjdFZhbHVlcyhlbGVtZW50KTtcclxuXHJcbiAgICAgICAgY2hhbmdlZEFyZ3VtZW50cyA9IFtudWxsLCBudWxsLCBwcmV2VmFsdWVdO1xyXG5cclxuICAgICAgICB0aGlzLiRlbGVtZW50XHJcbiAgICAgICAgICAudmFsKHZhbHVlKVxyXG4gICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZWQnICsgRVZFTlRfS0VZLCBjaGFuZ2VkQXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJG5ld0VsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lcy5TSE9XKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25TdGF0dXModHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbGlTZWxlY3RlZEluZGV4ID0gKGVsZW1lbnQub3B0aW9uc1tlbGVtZW50LnNlbGVjdGVkSW5kZXhdIHx8IHt9KS5saUluZGV4O1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaVNlbGVjdGVkSW5kZXggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0aGlzLnNlbGVjdGVkSW5kZXgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGxpU2VsZWN0ZWRJbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGNoYW5nZWRBcmd1bWVudHMgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VBbGw6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSByZXR1cm47XHJcbiAgICAgIGlmICh0eXBlb2Ygc3RhdHVzID09PSAndW5kZWZpbmVkJykgc3RhdHVzID0gdHJ1ZTtcclxuXHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0ZWQgPSAwLFxyXG4gICAgICAgICAgY3VycmVudFNlbGVjdGVkID0gMCxcclxuICAgICAgICAgIHByZXZWYWx1ZSA9IGdldFNlbGVjdFZhbHVlcyhlbGVtZW50KTtcclxuXHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnMtc2VsZWN0LWhpZGRlbicpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB2YXIgbGlEYXRhID0gdGhpcy5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2ldLFxyXG4gICAgICAgICAgICBvcHRpb24gPSBsaURhdGEub3B0aW9uO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9uICYmICFsaURhdGEuZGlzYWJsZWQgJiYgbGlEYXRhLnR5cGUgIT09ICdkaXZpZGVyJykge1xyXG4gICAgICAgICAgaWYgKGxpRGF0YS5zZWxlY3RlZCkgcHJldmlvdXNTZWxlY3RlZCsrO1xyXG4gICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gc3RhdHVzO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cykgY3VycmVudFNlbGVjdGVkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JzLXNlbGVjdC1oaWRkZW4nKTtcclxuXHJcbiAgICAgIGlmIChwcmV2aW91c1NlbGVjdGVkID09PSBjdXJyZW50U2VsZWN0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuc2V0T3B0aW9uU3RhdHVzKCk7XHJcblxyXG4gICAgICBjaGFuZ2VkQXJndW1lbnRzID0gW251bGwsIG51bGwsIHByZXZWYWx1ZV07XHJcblxyXG4gICAgICB0aGlzLiRlbGVtZW50XHJcbiAgICAgICAgLnRyaWdnZXJOYXRpdmUoJ2NoYW5nZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZWxlY3RBbGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlQWxsKHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZXNlbGVjdEFsbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jaGFuZ2VBbGwoZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICAgIGlmIChlKSBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgdGhpcy4kYnV0dG9uLnRyaWdnZXIoJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGtleWRvd246IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICBpc1RvZ2dsZSA9ICR0aGlzLmhhc0NsYXNzKCdkcm9wZG93bi10b2dnbGUnKSxcclxuICAgICAgICAgICRwYXJlbnQgPSBpc1RvZ2dsZSA/ICR0aGlzLmNsb3Nlc3QoJy5kcm9wZG93bicpIDogJHRoaXMuY2xvc2VzdChTZWxlY3Rvci5NRU5VKSxcclxuICAgICAgICAgIHRoYXQgPSAkcGFyZW50LmRhdGEoJ3RoaXMnKSxcclxuICAgICAgICAgICRpdGVtcyA9IHRoYXQuZmluZExpcygpLFxyXG4gICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgIGxpQWN0aXZlLFxyXG4gICAgICAgICAgYWN0aXZlTGksXHJcbiAgICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgICB1cGRhdGVTY3JvbGwgPSBmYWxzZSxcclxuICAgICAgICAgIGRvd25PblRhYiA9IGUud2hpY2ggPT09IGtleUNvZGVzLlRBQiAmJiAhaXNUb2dnbGUgJiYgIXRoYXQub3B0aW9ucy5zZWxlY3RPblRhYixcclxuICAgICAgICAgIGlzQXJyb3dLZXkgPSBSRUdFWFBfQVJST1cudGVzdChlLndoaWNoKSB8fCBkb3duT25UYWIsXHJcbiAgICAgICAgICBzY3JvbGxUb3AgPSB0aGF0LiRtZW51SW5uZXJbMF0uc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgaXNWaXJ0dWFsID0gdGhhdC5pc1ZpcnR1YWwoKSxcclxuICAgICAgICAgIHBvc2l0aW9uMCA9IGlzVmlydHVhbCA9PT0gdHJ1ZSA/IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wIDogMDtcclxuXHJcbiAgICAgIC8vIGRvIG5vdGhpbmcgaWYgYSBmdW5jdGlvbiBrZXkgaXMgcHJlc3NlZFxyXG4gICAgICBpZiAoZS53aGljaCA+PSAxMTIgJiYgZS53aGljaCA8PSAxMjMpIHJldHVybjtcclxuXHJcbiAgICAgIGlzQWN0aXZlID0gdGhhdC4kbmV3RWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWVzLlNIT1cpO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgICFpc0FjdGl2ZSAmJlxyXG4gICAgICAgIChcclxuICAgICAgICAgIGlzQXJyb3dLZXkgfHxcclxuICAgICAgICAgIChlLndoaWNoID49IDQ4ICYmIGUud2hpY2ggPD0gNTcpIHx8XHJcbiAgICAgICAgICAoZS53aGljaCA+PSA5NiAmJiBlLndoaWNoIDw9IDEwNSkgfHxcclxuICAgICAgICAgIChlLndoaWNoID49IDY1ICYmIGUud2hpY2ggPD0gOTApXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGF0LiRidXR0b24udHJpZ2dlcignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknKTtcclxuXHJcbiAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5saXZlU2VhcmNoKSB7XHJcbiAgICAgICAgICB0aGF0LiRzZWFyY2hib3gudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlLndoaWNoID09PSBrZXlDb2Rlcy5FU0NBUEUgJiYgaXNBY3RpdmUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhhdC4kYnV0dG9uLnRyaWdnZXIoJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJykudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzQXJyb3dLZXkpIHsgLy8gaWYgdXAgb3IgZG93blxyXG4gICAgICAgIGlmICghJGl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsaUFjdGl2ZSA9IHRoYXQuc2VsZWN0cGlja2VyLm1haW4uZWxlbWVudHNbdGhhdC5hY3RpdmVJbmRleF07XHJcbiAgICAgICAgaW5kZXggPSBsaUFjdGl2ZSA/IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwobGlBY3RpdmUucGFyZW50RWxlbWVudC5jaGlsZHJlbiwgbGlBY3RpdmUpIDogLTE7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgIHRoYXQuZGVmb2N1c0l0ZW0obGlBY3RpdmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IGtleUNvZGVzLkFSUk9XX1VQKSB7IC8vIHVwXHJcbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSBpbmRleC0tO1xyXG4gICAgICAgICAgaWYgKGluZGV4ICsgcG9zaXRpb24wIDwgMCkgaW5kZXggKz0gJGl0ZW1zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoYXQuc2VsZWN0cGlja2VyLnZpZXcuY2FuSGlnaGxpZ2h0W2luZGV4ICsgcG9zaXRpb24wXSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcuY2FuSGlnaGxpZ2h0LnNsaWNlKDAsIGluZGV4ICsgcG9zaXRpb24wKS5sYXN0SW5kZXhPZih0cnVlKSAtIHBvc2l0aW9uMDtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgaW5kZXggPSAkaXRlbXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IGtleUNvZGVzLkFSUk9XX0RPV04gfHwgZG93bk9uVGFiKSB7IC8vIGRvd25cclxuICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICBpZiAoaW5kZXggKyBwb3NpdGlvbjAgPj0gdGhhdC5zZWxlY3RwaWNrZXIudmlldy5jYW5IaWdobGlnaHQubGVuZ3RoKSBpbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodFtpbmRleCArIHBvc2l0aW9uMF0pIHtcclxuICAgICAgICAgICAgaW5kZXggPSBpbmRleCArIDEgKyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodC5zbGljZShpbmRleCArIHBvc2l0aW9uMCArIDEpLmluZGV4T2YodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBsaUFjdGl2ZUluZGV4ID0gcG9zaXRpb24wICsgaW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChlLndoaWNoID09PSBrZXlDb2Rlcy5BUlJPV19VUCkgeyAvLyB1cFxyXG4gICAgICAgICAgLy8gc2Nyb2xsIHRvIGJvdHRvbSBhbmQgaGlnaGxpZ2h0IGxhc3Qgb3B0aW9uXHJcbiAgICAgICAgICBpZiAocG9zaXRpb24wID09PSAwICYmIGluZGV4ID09PSAkaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGF0LiRtZW51SW5uZXJbMF0uc2Nyb2xsVG9wID0gdGhhdC4kbWVudUlubmVyWzBdLnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGxpQWN0aXZlSW5kZXggPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3RpdmVMaSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtsaUFjdGl2ZUluZGV4XTtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gYWN0aXZlTGkucG9zaXRpb24gLSBhY3RpdmVMaS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVTY3JvbGwgPSBvZmZzZXQgPCBzY3JvbGxUb3A7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSBrZXlDb2Rlcy5BUlJPV19ET1dOIHx8IGRvd25PblRhYikgeyAvLyBkb3duXHJcbiAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIGFuZCBoaWdobGlnaHQgZmlyc3Qgb3B0aW9uXHJcbiAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhhdC4kbWVudUlubmVyWzBdLnNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgICAgICAgICBsaUFjdGl2ZUluZGV4ID0gMDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUxpID0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2xpQWN0aXZlSW5kZXhdO1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBhY3RpdmVMaS5wb3NpdGlvbiAtIHRoYXQuc2l6ZUluZm8ubWVudUlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlU2Nyb2xsID0gb2Zmc2V0ID4gc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGlBY3RpdmUgPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzW2xpQWN0aXZlSW5kZXhdO1xyXG5cclxuICAgICAgICB0aGF0LmFjdGl2ZUluZGV4ID0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2xpQWN0aXZlSW5kZXhdLmluZGV4O1xyXG5cclxuICAgICAgICB0aGF0LmZvY3VzSXRlbShsaUFjdGl2ZSk7XHJcblxyXG4gICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnZpZXcuY3VycmVudEFjdGl2ZSA9IGxpQWN0aXZlO1xyXG5cclxuICAgICAgICBpZiAodXBkYXRlU2Nyb2xsKSB0aGF0LiRtZW51SW5uZXJbMF0uc2Nyb2xsVG9wID0gb2Zmc2V0O1xyXG5cclxuICAgICAgICBpZiAodGhhdC5vcHRpb25zLmxpdmVTZWFyY2gpIHtcclxuICAgICAgICAgIHRoYXQuJHNlYXJjaGJveC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkdGhpcy50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAoISR0aGlzLmlzKCdpbnB1dCcpICYmICFSRUdFWFBfVEFCX09SX0VTQ0FQRS50ZXN0KGUud2hpY2gpKSB8fFxyXG4gICAgICAgIChlLndoaWNoID09PSBrZXlDb2Rlcy5TUEFDRSAmJiB0aGF0LnNlbGVjdHBpY2tlci5rZXlkb3duLmtleUhpc3RvcnkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHZhciBzZWFyY2hNYXRjaCxcclxuICAgICAgICAgICAgbWF0Y2hlcyA9IFtdLFxyXG4gICAgICAgICAgICBrZXlIaXN0b3J5O1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLmtleWRvd24ua2V5SGlzdG9yeSArPSBrZXlDb2RlTWFwW2Uud2hpY2hdO1xyXG5cclxuICAgICAgICBpZiAodGhhdC5zZWxlY3RwaWNrZXIua2V5ZG93bi5yZXNldEtleUhpc3RvcnkuY2FuY2VsKSBjbGVhclRpbWVvdXQodGhhdC5zZWxlY3RwaWNrZXIua2V5ZG93bi5yZXNldEtleUhpc3RvcnkuY2FuY2VsKTtcclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5rZXlkb3duLnJlc2V0S2V5SGlzdG9yeS5jYW5jZWwgPSB0aGF0LnNlbGVjdHBpY2tlci5rZXlkb3duLnJlc2V0S2V5SGlzdG9yeS5zdGFydCgpO1xyXG5cclxuICAgICAgICBrZXlIaXN0b3J5ID0gdGhhdC5zZWxlY3RwaWNrZXIua2V5ZG93bi5rZXlIaXN0b3J5O1xyXG5cclxuICAgICAgICAvLyBpZiBhbGwgbGV0dGVycyBhcmUgdGhlIHNhbWUsIHNldCBrZXlIaXN0b3J5IHRvIGp1c3QgdGhlIGZpcnN0IGNoYXJhY3RlciB3aGVuIHNlYXJjaGluZ1xyXG4gICAgICAgIGlmICgvXiguKVxcMSskLy50ZXN0KGtleUhpc3RvcnkpKSB7XHJcbiAgICAgICAgICBrZXlIaXN0b3J5ID0ga2V5SGlzdG9yeS5jaGFyQXQoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5kIG1hdGNoZXNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIGxpID0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2ldLFxyXG4gICAgICAgICAgICAgIGhhc01hdGNoO1xyXG5cclxuICAgICAgICAgIGhhc01hdGNoID0gc3RyaW5nU2VhcmNoKGxpLCBrZXlIaXN0b3J5LCAnc3RhcnRzV2l0aCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgIGlmIChoYXNNYXRjaCAmJiB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodFtpXSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobGkuaW5kZXgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB2YXIgbWF0Y2hJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgJGl0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgIC8vIGVpdGhlciBvbmx5IG9uZSBrZXkgaGFzIGJlZW4gcHJlc3NlZCBvciB0aGV5IGFyZSBhbGwgdGhlIHNhbWUga2V5XHJcbiAgICAgICAgICBpZiAoa2V5SGlzdG9yeS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbWF0Y2hJbmRleCA9IG1hdGNoZXMuaW5kZXhPZih0aGF0LmFjdGl2ZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaEluZGV4ID09PSAtMSB8fCBtYXRjaEluZGV4ID09PSBtYXRjaGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICBtYXRjaEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBtYXRjaEluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZWFyY2hNYXRjaCA9IG1hdGNoZXNbbWF0Y2hJbmRleF07XHJcblxyXG4gICAgICAgICAgYWN0aXZlTGkgPSB0aGF0LnNlbGVjdHBpY2tlci5tYWluLmRhdGFbc2VhcmNoTWF0Y2hdO1xyXG5cclxuICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBhY3RpdmVMaS5wb3NpdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gYWN0aXZlTGkucG9zaXRpb24gLSBhY3RpdmVMaS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBhY3RpdmVMaS5wb3NpdGlvbiAtIHRoYXQuc2l6ZUluZm8ubWVudUlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgb3B0aW9uIGlzIGFscmVhZHkgdmlzaWJsZSBhdCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24sIGp1c3Qga2VlcCBpdCB0aGUgc2FtZVxyXG4gICAgICAgICAgICB1cGRhdGVTY3JvbGwgPSBhY3RpdmVMaS5wb3NpdGlvbiA+IHNjcm9sbFRvcCArIHRoYXQuc2l6ZUluZm8ubWVudUlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpQWN0aXZlID0gdGhhdC5zZWxlY3RwaWNrZXIubWFpbi5lbGVtZW50c1tzZWFyY2hNYXRjaF07XHJcblxyXG4gICAgICAgICAgdGhhdC5hY3RpdmVJbmRleCA9IG1hdGNoZXNbbWF0Y2hJbmRleF07XHJcblxyXG4gICAgICAgICAgdGhhdC5mb2N1c0l0ZW0obGlBY3RpdmUpO1xyXG5cclxuICAgICAgICAgIGlmIChsaUFjdGl2ZSkgbGlBY3RpdmUuZmlyc3RDaGlsZC5mb2N1cygpO1xyXG5cclxuICAgICAgICAgIGlmICh1cGRhdGVTY3JvbGwpIHRoYXQuJG1lbnVJbm5lclswXS5zY3JvbGxUb3AgPSBvZmZzZXQ7XHJcblxyXG4gICAgICAgICAgJHRoaXMudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNlbGVjdCBmb2N1c2VkIG9wdGlvbiBpZiBcIkVudGVyXCIsIFwiU3BhY2ViYXJcIiBvciBcIlRhYlwiICh3aGVuIHNlbGVjdE9uVGFiIGlzIHRydWUpIGFyZSBwcmVzc2VkIGluc2lkZSB0aGUgbWVudS5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlzQWN0aXZlICYmXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgKGUud2hpY2ggPT09IGtleUNvZGVzLlNQQUNFICYmICF0aGF0LnNlbGVjdHBpY2tlci5rZXlkb3duLmtleUhpc3RvcnkpIHx8XHJcbiAgICAgICAgICBlLndoaWNoID09PSBrZXlDb2Rlcy5FTlRFUiB8fFxyXG4gICAgICAgICAgKGUud2hpY2ggPT09IGtleUNvZGVzLlRBQiAmJiB0aGF0Lm9wdGlvbnMuc2VsZWN0T25UYWIpXHJcbiAgICAgICAgKVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoZS53aGljaCAhPT0ga2V5Q29kZXMuU1BBQ0UpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCB8fCBlLndoaWNoICE9PSBrZXlDb2Rlcy5TUEFDRSkge1xyXG4gICAgICAgICAgdGhhdC4kbWVudUlubmVyLmZpbmQoJy5hY3RpdmUgYScpLnRyaWdnZXIoJ2NsaWNrJywgdHJ1ZSk7IC8vIHJldGFpbiBhY3RpdmUgY2xhc3NcclxuICAgICAgICAgICR0aGlzLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgICAvLyBQcmV2ZW50IHNjcmVlbiBmcm9tIHNjcm9sbGluZyBpZiB0aGUgdXNlciBoaXRzIHRoZSBzcGFjZWJhclxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIEZpeGVzIHNwYWNlYmFyIHNlbGVjdGlvbiBvZiBkcm9wZG93biBpdGVtcyBpbiBGRiAmIElFXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmRhdGEoJ3NwYWNlU2VsZWN0JywgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1vYmlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1kZXZpY2UnKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyB1cGRhdGUgb3B0aW9ucyBpZiBkYXRhIGF0dHJpYnV0ZXMgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgICAgdmFyIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpKTtcclxuICAgICAgdGhpcy5vcHRpb25zID0gY29uZmlnO1xyXG5cclxuICAgICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XHJcbiAgICAgIHRoaXMuc2V0U3R5bGUoKTtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgdGhpcy5jcmVhdGVMaSgpO1xyXG4gICAgICB0aGlzLnNldFdpZHRoKCk7XHJcblxyXG4gICAgICB0aGlzLnNldFNpemUodHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3JlZnJlc2hlZCcgKyBFVkVOVF9LRVkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJG5ld0VsZW1lbnQuaGlkZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJG5ld0VsZW1lbnQuc2hvdygpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy4kbmV3RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLiRuZXdFbGVtZW50LmJlZm9yZSh0aGlzLiRlbGVtZW50KS5yZW1vdmUoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiRic0NvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuJGJzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJG1lbnUucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJGVsZW1lbnRcclxuICAgICAgICAub2ZmKEVWRU5UX0tFWSlcclxuICAgICAgICAucmVtb3ZlRGF0YSgnc2VsZWN0cGlja2VyJylcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2JzLXNlbGVjdC1oaWRkZW4gc2VsZWN0cGlja2VyJyk7XHJcblxyXG4gICAgICAkKHdpbmRvdykub2ZmKEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFNFTEVDVFBJQ0tFUiBQTFVHSU4gREVGSU5JVElPTlxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGZ1bmN0aW9uIFBsdWdpbiAob3B0aW9uKSB7XHJcbiAgICAvLyBnZXQgdGhlIGFyZ3Mgb2YgdGhlIG91dGVyIGZ1bmN0aW9uLi5cclxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgLy8gVGhlIGFyZ3VtZW50cyBvZiB0aGUgZnVuY3Rpb24gYXJlIGV4cGxpY2l0bHkgcmUtZGVmaW5lZCBmcm9tIHRoZSBhcmd1bWVudCBsaXN0LCBiZWNhdXNlIHRoZSBzaGlmdCBjYXVzZXMgdGhlbVxyXG4gICAgLy8gdG8gZ2V0IGxvc3QvY29ycnVwdGVkIGluIGFuZHJvaWQgMi4zIGFuZCBJRTkgIzcxNSAjNzc1XHJcbiAgICB2YXIgX29wdGlvbiA9IG9wdGlvbjtcclxuXHJcbiAgICBbXS5zaGlmdC5hcHBseShhcmdzKTtcclxuXHJcbiAgICAvLyBpZiB0aGUgdmVyc2lvbiB3YXMgbm90IHNldCBzdWNjZXNzZnVsbHlcclxuICAgIGlmICghdmVyc2lvbi5zdWNjZXNzKSB7XHJcbiAgICAgIC8vIHRyeSB0byByZXRyZWl2ZSBpdCBhZ2FpblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHZlcnNpb24uZnVsbCA9ICgkLmZuLmRyb3Bkb3duLkNvbnN0cnVjdG9yLlZFUlNJT04gfHwgJycpLnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8gZmFsbCBiYWNrIHRvIHVzZSBCb290c3RyYXBWZXJzaW9uIGlmIHNldFxyXG4gICAgICAgIGlmIChTZWxlY3RwaWNrZXIuQm9vdHN0cmFwVmVyc2lvbikge1xyXG4gICAgICAgICAgdmVyc2lvbi5mdWxsID0gU2VsZWN0cGlja2VyLkJvb3RzdHJhcFZlcnNpb24uc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ZXJzaW9uLmZ1bGwgPSBbdmVyc2lvbi5tYWpvciwgJzAnLCAnMCddO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgJ1RoZXJlIHdhcyBhbiBpc3N1ZSByZXRyaWV2aW5nIEJvb3RzdHJhcFxcJ3MgdmVyc2lvbi4gJyArXHJcbiAgICAgICAgICAgICdFbnN1cmUgQm9vdHN0cmFwIGlzIGJlaW5nIGxvYWRlZCBiZWZvcmUgYm9vdHN0cmFwLXNlbGVjdCBhbmQgdGhlcmUgaXMgbm8gbmFtZXNwYWNlIGNvbGxpc2lvbi4gJyArXHJcbiAgICAgICAgICAgICdJZiBsb2FkaW5nIEJvb3RzdHJhcCBhc3luY2hyb25vdXNseSwgdGhlIHZlcnNpb24gbWF5IG5lZWQgdG8gYmUgbWFudWFsbHkgc3BlY2lmaWVkIHZpYSAkLmZuLnNlbGVjdHBpY2tlci5Db25zdHJ1Y3Rvci5Cb290c3RyYXBWZXJzaW9uLicsXHJcbiAgICAgICAgICAgIGVyclxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZlcnNpb24ubWFqb3IgPSB2ZXJzaW9uLmZ1bGxbMF07XHJcbiAgICAgIHZlcnNpb24uc3VjY2VzcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZlcnNpb24ubWFqb3IgPT09ICc0Jykge1xyXG4gICAgICAvLyBzb21lIGRlZmF1bHRzIG5lZWQgdG8gYmUgY2hhbmdlZCBpZiB1c2luZyBCb290c3RyYXAgNFxyXG4gICAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhleSBoYXZlIGFscmVhZHkgYmVlbiBtYW51YWxseSBjaGFuZ2VkIGJlZm9yZSBmb3JjaW5nIHRoZW0gdG8gdXBkYXRlXHJcbiAgICAgIHZhciB0b1VwZGF0ZSA9IFtdO1xyXG5cclxuICAgICAgaWYgKFNlbGVjdHBpY2tlci5ERUZBVUxUUy5zdHlsZSA9PT0gY2xhc3NOYW1lcy5CVVRUT05DTEFTUykgdG9VcGRhdGUucHVzaCh7IG5hbWU6ICdzdHlsZScsIGNsYXNzTmFtZTogJ0JVVFRPTkNMQVNTJyB9KTtcclxuICAgICAgaWYgKFNlbGVjdHBpY2tlci5ERUZBVUxUUy5pY29uQmFzZSA9PT0gY2xhc3NOYW1lcy5JQ09OQkFTRSkgdG9VcGRhdGUucHVzaCh7IG5hbWU6ICdpY29uQmFzZScsIGNsYXNzTmFtZTogJ0lDT05CQVNFJyB9KTtcclxuICAgICAgaWYgKFNlbGVjdHBpY2tlci5ERUZBVUxUUy50aWNrSWNvbiA9PT0gY2xhc3NOYW1lcy5USUNLSUNPTikgdG9VcGRhdGUucHVzaCh7IG5hbWU6ICd0aWNrSWNvbicsIGNsYXNzTmFtZTogJ1RJQ0tJQ09OJyB9KTtcclxuXHJcbiAgICAgIGNsYXNzTmFtZXMuRElWSURFUiA9ICdkcm9wZG93bi1kaXZpZGVyJztcclxuICAgICAgY2xhc3NOYW1lcy5TSE9XID0gJ3Nob3cnO1xyXG4gICAgICBjbGFzc05hbWVzLkJVVFRPTkNMQVNTID0gJ2J0bi1saWdodCc7XHJcbiAgICAgIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUiA9ICdwb3BvdmVyLWhlYWRlcic7XHJcbiAgICAgIGNsYXNzTmFtZXMuSUNPTkJBU0UgPSAnJztcclxuICAgICAgY2xhc3NOYW1lcy5USUNLSUNPTiA9ICdicy1vay1kZWZhdWx0JztcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9VcGRhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgb3B0aW9uID0gdG9VcGRhdGVbaV07XHJcbiAgICAgICAgU2VsZWN0cGlja2VyLkRFRkFVTFRTW29wdGlvbi5uYW1lXSA9IGNsYXNzTmFtZXNbb3B0aW9uLmNsYXNzTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgdmFsdWU7XHJcbiAgICB2YXIgY2hhaW4gPSB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICBpZiAoJHRoaXMuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSAkdGhpcy5kYXRhKCdzZWxlY3RwaWNrZXInKSxcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBfb3B0aW9uID09ICdvYmplY3QnICYmIF9vcHRpb247XHJcblxyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgdmFyIGRhdGFBdHRyaWJ1dGVzID0gJHRoaXMuZGF0YSgpO1xyXG5cclxuICAgICAgICAgIGZvciAodmFyIGRhdGFBdHRyIGluIGRhdGFBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhQXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShkYXRhQXR0cikgJiYgJC5pbkFycmF5KGRhdGFBdHRyLCBESVNBTExPV0VEX0FUVFJJQlVURVMpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB2YXIgY29uZmlnID0gJC5leHRlbmQoe30sIFNlbGVjdHBpY2tlci5ERUZBVUxUUywgJC5mbi5zZWxlY3RwaWNrZXIuZGVmYXVsdHMgfHwge30sIGRhdGFBdHRyaWJ1dGVzLCBvcHRpb25zKTtcclxuICAgICAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9ICQuZXh0ZW5kKHt9LCBTZWxlY3RwaWNrZXIuREVGQVVMVFMudGVtcGxhdGUsICgkLmZuLnNlbGVjdHBpY2tlci5kZWZhdWx0cyA/ICQuZm4uc2VsZWN0cGlja2VyLmRlZmF1bHRzLnRlbXBsYXRlIDoge30pLCBkYXRhQXR0cmlidXRlcy50ZW1wbGF0ZSwgb3B0aW9ucy50ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAkdGhpcy5kYXRhKCdzZWxlY3RwaWNrZXInLCAoZGF0YSA9IG5ldyBTZWxlY3RwaWNrZXIodGhpcywgY29uZmlnKSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICAgICAgZGF0YS5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBfb3B0aW9uID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YVtfb3B0aW9uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YVtfb3B0aW9uXS5hcHBseShkYXRhLCBhcmdzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YS5vcHRpb25zW19vcHRpb25dO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2hhaW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgb2xkID0gJC5mbi5zZWxlY3RwaWNrZXI7XHJcbiAgJC5mbi5zZWxlY3RwaWNrZXIgPSBQbHVnaW47XHJcbiAgJC5mbi5zZWxlY3RwaWNrZXIuQ29uc3RydWN0b3IgPSBTZWxlY3RwaWNrZXI7XHJcblxyXG4gIC8vIFNFTEVDVFBJQ0tFUiBOTyBDT05GTElDVFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICQuZm4uc2VsZWN0cGlja2VyLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmZuLnNlbGVjdHBpY2tlciA9IG9sZDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpXHJcbiAgICAub2ZmKCdrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgJy5ib290c3RyYXAtc2VsZWN0IFtkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdLCAuYm9vdHN0cmFwLXNlbGVjdCAuZHJvcGRvd24tbWVudScpXHJcbiAgICAub24oJ2tleWRvd24nICsgRVZFTlRfS0VZLCAnLmJvb3RzdHJhcC1zZWxlY3QgW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0sIC5ib290c3RyYXAtc2VsZWN0IFtyb2xlPVwibGlzdGJveFwiXSwgLmJvb3RzdHJhcC1zZWxlY3QgLmJzLXNlYXJjaGJveCBpbnB1dCcsIFNlbGVjdHBpY2tlci5wcm90b3R5cGUua2V5ZG93bilcclxuICAgIC5vbignZm9jdXNpbi5tb2RhbCcsICcuYm9vdHN0cmFwLXNlbGVjdCBbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXSwgLmJvb3RzdHJhcC1zZWxlY3QgW3JvbGU9XCJsaXN0Ym94XCJdLCAuYm9vdHN0cmFwLXNlbGVjdCAuYnMtc2VhcmNoYm94IGlucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAvLyBTRUxFQ1RQSUNLRVIgREFUQS1BUElcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAkKHdpbmRvdykub24oJ2xvYWQnICsgRVZFTlRfS0VZICsgJy5kYXRhLWFwaScsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5zZWxlY3RwaWNrZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICRzZWxlY3RwaWNrZXIgPSAkKHRoaXMpO1xyXG4gICAgICBQbHVnaW4uY2FsbCgkc2VsZWN0cGlja2VyLCAkc2VsZWN0cGlja2VyLmRhdGEoKSk7XHJcbiAgICB9KVxyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcbn0pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLXNlbGVjdC5qcy5tYXAiLCIvKiFcclxuICogQm9vdHN0cmFwLXNlbGVjdCB2MS4xMy4xMiAoaHR0cHM6Ly9kZXZlbG9wZXIuc25hcGFwcG9pbnRtZW50cy5jb20vYm9vdHN0cmFwLXNlbGVjdClcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTItMjAxOSBTbmFwQXBwb2ludG1lbnRzLCBMTENcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vc25hcGFwcG9pbnRtZW50cy9ib290c3RyYXAtc2VsZWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgaWYgKHJvb3QgPT09IHVuZGVmaW5lZCAmJiB3aW5kb3cgIT09IHVuZGVmaW5lZCkgcm9vdCA9IHdpbmRvdztcclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxyXG4gICAgZGVmaW5lKFtcImpxdWVyeVwiXSwgZnVuY3Rpb24gKGEwKSB7XHJcbiAgICAgIHJldHVybiAoZmFjdG9yeShhMCkpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XHJcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcclxuICAgIC8vIGxpa2UgTm9kZS5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcclxuICB9XHJcbn0odGhpcywgZnVuY3Rpb24gKGpRdWVyeSkge1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgJC5mbi5zZWxlY3RwaWNrZXIuZGVmYXVsdHMgPSB7XHJcbiAgICBub25lU2VsZWN0ZWRUZXh0OiAnQXVjdW5lIHPDqWxlY3Rpb24nLFxyXG4gICAgbm9uZVJlc3VsdHNUZXh0OiAnQXVjdW4gcsOpc3VsdGF0IHBvdXIgezB9JyxcclxuICAgIGNvdW50U2VsZWN0ZWRUZXh0OiBmdW5jdGlvbiAobnVtU2VsZWN0ZWQsIG51bVRvdGFsKSB7XHJcbiAgICAgIHJldHVybiAobnVtU2VsZWN0ZWQgPiAxKSA/ICd7MH0gw6lsw6ltZW50cyBzw6lsZWN0aW9ubsOpcycgOiAnezB9IMOpbMOpbWVudCBzw6lsZWN0aW9ubsOpJztcclxuICAgIH0sXHJcbiAgICBtYXhPcHRpb25zVGV4dDogZnVuY3Rpb24gKG51bUFsbCwgbnVtR3JvdXApIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAobnVtQWxsID4gMSkgPyAnTGltaXRlIGF0dGVpbnRlICh7bn0gw6lsw6ltZW50cyBtYXgpJyA6ICdMaW1pdGUgYXR0ZWludGUgKHtufSDDqWzDqW1lbnQgbWF4KScsXHJcbiAgICAgICAgKG51bUdyb3VwID4gMSkgPyAnTGltaXRlIGR1IGdyb3VwZSBhdHRlaW50ZSAoe259IMOpbMOpbWVudHMgbWF4KScgOiAnTGltaXRlIGR1IGdyb3VwZSBhdHRlaW50ZSAoe259IMOpbMOpbWVudCBtYXgpJ1xyXG4gICAgICBdO1xyXG4gICAgfSxcclxuICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG4gICAgc2VsZWN0QWxsVGV4dDogJ1RvdXQgc8OpbGVjdGlvbm5lcicsXHJcbiAgICBkZXNlbGVjdEFsbFRleHQ6ICdUb3V0IGTDqXPDqWxlY3Rpb25uZXInXHJcbiAgfTtcclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG59KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRzLWZyX0ZSLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=